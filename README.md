# Miro Clone

A modern, collaborative whiteboard application inspired by Miro. Built with Next.js, featuring real-time collaboration, infinite canvas, and a comprehensive set of drawing and design tools for teams and individuals.

## ✨ Features

- **Infinite Canvas**: Unlimited space for creativity and collaboration
- **Real-Time Collaboration**: Work together with team members in real-time
- **Drawing Tools**: Comprehensive set of drawing, text, and shape tools
- **Sticky Notes**: Create and organize ideas with colorful sticky notes
- **Shapes & Objects**: Add rectangles, circles, arrows, and custom shapes
- **Text Editing**: Rich text editing with various fonts and formatting options
- **Layers Management**: Organize elements with layer controls and grouping
- **Zoom & Pan**: Smooth navigation with zoom and pan functionality
- **Undo/Redo**: Full history tracking with unlimited undo/redo
- **Export Options**: Export boards as images or PDFs
- **Template Library**: Pre-built templates for common use cases
- **Comments & Annotations**: Add comments and feedback directly on the board

## 🚀 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Canvas Rendering**: HTML5 Canvas
- **Backend**: Convex (Real-time Database)
- **Real-time Collaboration**: Liveblocks
- **Authentication**: Clerk

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- Convex account and project setup
- Clerk account for authentication
- Liveblocks account for real-time collaboration

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/MurtazaD1410/miro-clone.git
   cd miro-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Environment Configuration**
   ```bash
   cp .env.example .env.local
   ```
   
   Update the `.env.local` file with your configuration:
   ```env
   # Convex Backend
   CONVEX_DEPLOYMENT="your_convex_deployment_name"
   NEXT_PUBLIC_CONVEX_URL="your_convex_url"
   
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
   CLERK_SECRET_KEY="your_clerk_secret_key"
   
   # Liveblocks Real-time Collaboration
   LIVEBLOCKS_SECRET_KEY="your_liveblocks_secret_key"
   ```

4. **Convex Setup**
   
   Initialize and deploy your Convex backend:
   
   ```bash
   # Install Convex CLI globally
   npm install -g convex
   
   # Login to Convex
   npx convex login
   
   # Initialize Convex in your project
   npx convex dev
   ```

5. **Clerk Configuration**
   
   Set up Clerk for authentication:
   
   - Configure sign-in/sign-up flows
   - Set up OAuth providers (optional)
   - Configure webhook endpoints for user management

6. **Liveblocks Setup**
   
   Configure Liveblocks for real-time collaboration:
   
   - Set up rooms and permissions
   - Configure presence and broadcast features
   - Set up authentication with Clerk integration

7. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

8. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to start creating and collaborating.

⭐ If you found this project helpful, please give it a star on GitHub!
