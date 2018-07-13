@echo off
setlocal enableextensions enabledelayedexpansion
set first=1
for /f "delims=" %%a in ("%comspec%") do set "compath=%%~DPa"
PATH %PATH%;%compath%;%JAVA_HOME%\bin\
WHERE java >nul 2>nul
IF %ERRORLEVEL% NEQ 0 (
    echo Du musst Java installiert haben, bitte installiere es von hier: https://java.com/download
    pause
    exit
)
java -Dinteractive -Dfile.encoding=UTF-8 -jar PhantomBot.jar %1
endlocal
pause
