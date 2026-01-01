# Narens Edits Portfolio

This is a React application built with Vite.

## Quick Start (Windows)

If you are on Windows, simply double-click the **`setup_and_run.bat`** file in this folder. It will install everything and start the website for you.

## How to Run Manually

1.  **Install Node.js**: Ensure you have Node.js installed on your computer.
2.  **Open Terminal**: Open a command prompt or terminal in this project folder.
3.  **Install Dependencies**:
    ```bash
    npm install
    ```
4.  **Set API Key**:
    - Create a file named `.env` in the root folder.
    - Add your key: `API_KEY=your_actual_api_key_here`
5.  **Start Server**:
    ```bash
    npm run dev
    ```

### Troubleshooting: "Running scripts is disabled on this system"

If you see a PowerShell error about scripts being disabled:
1.  Open PowerShell as Administrator.
2.  Run: `Set-ExecutionPolicy RemoteSigned`
3.  Type `Y` and press Enter.
4.  Try running the commands again.
    
Alternatively, use **Command Prompt (cmd)** instead of PowerShell, or just use the `setup_and_run.bat` file provided.

## How to Host/Deploy

1.  Run `npm run build` to create the production files in the `dist` folder.
2.  Upload the contents of the `dist` folder to your hosting provider (Vercel, Netlify, etc.).
