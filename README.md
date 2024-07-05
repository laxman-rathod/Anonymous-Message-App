# Anonymous Message - Tell them what you really think. Anonymously. 😉

## Introduction 🧩

Anonymous Message is a platform designed for users to express themselves freely without revealing their identity. Built with a strong emphasis on privacy and security, it provides a safe space for sharing thoughts, feedback, or confessions.

## Features 🪶

- **Anonymous Messaging:** Send and receive messages without disclosing your identity.
- **User-Friendly Interface:** Clean and intuitive design for a seamless user experience.
- **Message Deletion:** Users have the option to delete their own messages.
- **Secure Authentication:** Utilizes NextAuth.js for robust user authentication.
- **Email Notifications (Optional):** Receive notifications for new messages (can be disabled).
- **Moderation Features (Future Development):** Planned implementation of features to prevent misuse and ensure a respectful environment.

## Technologies Used 🚀

- **Frontend:** Next.js, React.js, TypeScript, Tailwind CSS
- **Authentication:** NextAuth.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Email Service:** Resend
- **Validation:** Zod
- **Styling:** Tailwind CSS
- **Other:** React Email, Vercel AI (Potential), Google Generative AI (Potential)

## APIs 💫

- **Resend API:** For sending email notifications (if enabled).
- **(Optional) Vercel AI / Google Generative AI:** Potentially used for features like message summarization, translation, or intelligent responses.

**Authentication:**

- NextAuth.js(Authjs)
- JWT

**Deployment:**

- Vercel
- GitHub

## Quick Demo 🪧

Feel free to explore the quick demo by clicking [here](https://anonymous-messagess.vercel.app).

## Getting Started 🔥

### Prerequisites 🔮

**Node.js and npm:** Download and install Node.js from https://nodejs.org/. This will also install npm.
**MongoDB:** Set up a MongoDB database and obtain your connection URI.
**Resend Account:** Create an account on Resend https://resend.com/ for email notifications (optional).

### Installation ⚙️

**1. Clone the repository:**

```bash
git clone https://github.com/laxman-rathod/Anonymous-Messages.git
```

**2. Navigate to the project directory:**

```bash
cd Anonymous-Messages
```

**3. Install dependencies:**

```bash
npm install
```

**4. Create a .env.local file in the root directory and add the following environment variables:**
NEXTAUTH_URL=http://localhost:3000
MONGODB_URI=<your-mongodb-connection-string>
RESEND_API_KEY=<your-resend-api-key>
GOOGLE_AI_API_KEY=<your-google-ai-api-key>

**5. Run the development server:**

```bash
npm run dev
```

The application should now be running at http://localhost:3000.

## Usage 🪴

**1. Visit the application in your browser.**
**2. (Optional) Create an account or log in.**
**3. Send and receive anonymous messages.**

## Screenshots 📸

**Home Page:**
![Screenshot (1)](/public/home_page.png)

**User Dashboard:**
![Screenshot (2)](/public/user_dashboard.png)

**Public Page**
![Screenshot (3)](/public/public_profile.png)

## Project Structure 📂

- Anonymous-Message
  - public
  - src
    - app
      - api
    - components
    - models
    - schemas
    - lib
    - utils

## Contributing 🤝

Contributions are highly welcome!

- Fork the repository.
- Create a new branch (git checkout -b feature/your-feature-name).
- Make your changes.
- Commit your changes (git commit -m 'Add some feature').
- Push to the branch (git push origin feature/your-feature-name).
- Open a pull request.

## License 📝

This project is licensed under the [MIT License](LICENSE).
