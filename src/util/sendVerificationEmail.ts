import { resend } from "@/lib/resend";
import { ApiResponse } from "@/types/ApiResponse";
import VerificationEmail from "../../emails/VerificationEmail";

export async function sendVerificationEmail(
  email: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: process.env.EMAIL_FROM as string,
      to: email,
      subject: "Anonymous Message Verification Code",
      react: VerificationEmail({ otp: verifyCode }),
    });
    return {
      success: true,
      message: "User registered successfully",
    };
  } catch (emailError) {
    return {
      success: false,
      message: "failed to send varification email",
    };
  }
}
