import { resend } from "@/lib/resend";

import VerificationEmail from "../../emails/VerificationEmail";

import { ApiResponse } from "@/types/APIResponse";

export async function sendVarificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Anonymous Message | Verification Code",
      react: VerificationEmail({ username: username, otp: verifyCode }),
    });
    return {
      success: true,
      message: "Email varification sent successfully",
    };
  } catch (emailError) {
    console.log("Error send varification email", emailError);
    return {
      success: false,
      message: "failed to send varification email",
    };
  }
}
