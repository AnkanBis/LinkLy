import { Request, Response } from "express";
import { loginType } from "../types/authTypes";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const signup = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const payload = loginType.safeParse(body);
    if (!payload.success) {
      res.json({
        message: "Wrong Inputs",
      });
      return;
    }
    const user = await prisma.user.create({
      data: {
        firstName: payload.data.firstName,
        lastName: payload.data.lastName,
        email: payload.data.email,
        password: payload.data.password,
      },
    });
    res.status(201).json({
      message: "User created successfully",
      user,
    });
    return;
  } catch (error: any) {
    if (error.code === "P2002") {
      res.status(400).json({
        message: "Email already exists",
      });
      return;
    } else {
      console.error(error);
      res.status(500).json({
        message: "Internal server error",
      });
      return;
    }
  }
};
