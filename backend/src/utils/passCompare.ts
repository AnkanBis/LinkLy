import bcrypt from "bcryptjs";


export async function comparePassword(
  inputPassword: string,
  hashedPassword: string
): Promise<boolean> {
  const isPassword = await bcrypt.compare(inputPassword, hashedPassword);
  return isPassword;
}
