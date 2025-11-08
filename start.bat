@echo off
echo ========================================
echo   Starting DSA Bot GenAI Server
echo ========================================
echo.

REM Check if .env file exists
if not exist .env (
    echo [ERROR] .env file not found!
    echo.
    echo Please create a .env file with:
    echo GEMINI_API_KEY=your_api_key_here
    echo.
    pause
    exit /b 1
)

echo Starting server...
echo.
node server.js

pause

