import { resend } from "@/lib/resend";
import { ApiResponse } from "@/types/ApiResponse";
import VerificationEmail from "../../emails/VerificationEmail";

export async function sendVarificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    console.log("Email and OTP: ", email, verifyCode);
    await resend.emails.send({
      from: "dev@hiteshchoudhary.com",
      to: email,
      subject: "Anonymous Message Verification Code",
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
