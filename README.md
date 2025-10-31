🎥 VeedAI

VeedAI is a modern video collaboration and AI-powered meeting platform built with Next.js 15, React 19, and Stream Video SDK.
It allows users to create, join, and manage real-time meetings with AI agents. It has  AI-driven features such as transcription, summarization, and smart video insights.

🚀 Tech Stack

Frontend

Next.js 15
 with Turbopack

React 19

Tailwind CSS 4

Radix UI
 + Shadcn Components

Lucide React
 for icons

Backend & Database

Drizzle ORM

Neon Database (Postgres)

tRPC
 for end-to-end typesafe APIs

Better Auth
 for authentication

Video & Realtime

Stream Video React SDK

Stream Node SDK

OpenAI Realtime
 integration for AI-driven experiences

⚙️ Setup & Installation
1. Clone the repo
git clone https://github.com/<your-username>/veedai.git
cd veedai

2. Install dependencies
pnpm install
# or
npm install

3. Configure environment variables

Create a .env file in the root directory and include:

DATABASE_URL=your_neon_connection_url
OPENAI_API_KEY=your_openai_key
STREAM_API_KEY=your_stream_key
STREAM_API_SECRET=your_stream_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000

4. Set up the database
npm run db:push

5. Run the development server
npm run dev


App should now be running on http://localhost:3000

🧩 Scripts
Command	Description
npm run dev	Start the dev server
npm run build	Build for production (Turbopack)
npm start	Start the production server
npm run lint	Run ESLint
npm run db:push	Push schema changes to the database
npm run db:studio	Open Drizzle Studio
🧠 Features

🔴 Real-time video meetings powered by Stream Video

🤖 AI integration via OpenAI Realtime

🔐 Authentication with Better Auth

🗃️ Type-safe APIs with tRPC

🧩 Modular UI built with Radix UI + Tailwind CSS

⚡ Database with Drizzle ORM + Neon Serverless

💬 Smooth developer experience with React Query and React Hook Form

🛠️ Project Structure
src/
 ├── app/           # Next.js app router
 ├── components/    # Reusable UI components
 ├── lib/           # Configs, utils, constants
 ├── server/        # tRPC routers, Drizzle schema
 ├── hooks/         # Custom React hooks
 └── styles/        # Global styles

🤝 Contributing

Contributions are welcome!
Please fork the repo, create a new branch, and submit a pull request.

📜 License

MIT © Chimezie Nwagbo

🌟 Show your support

If you find this project helpful, give it a ⭐ on GitHub!
