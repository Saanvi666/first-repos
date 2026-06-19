🌸 Serene — Daily Sanctuary
Serene is a quiet, beautiful, local-only habit tracker and task manager designed with a botanical and celestial aesthetic. Crafted to feel like a cozy digital sanctuary, Serene helps you build consistency through a translucent desktop companion widget, ruled-paper reflection journals, and a paper-inspired monthly habit tracker.
---
## 🌟 Key Features
### 1. Dual-Surface UI Shell
*   **Main Application Dashboard**: A full-sized journal space featuring sidebar navigation, a time-based greeting checklist, full habit management panels, dynamic task columns (Today/Upcoming/Archived) with list-reordering, and monthly reflection sheets.
*   **Translucent Desktop Widget**: A borderless desktop gadget with adjustable opacity (50%, 70%, 100%) and a minimize/expand toggle. It pins itself directly onto your wallpaper so it stays active without blocking your normal workflow.
### 2. Celestial & Botanical Aesthetic
*   **Solar Theme (Day Mode)**: A warm ivory (`#FEFAF4`) and soft cream canvas styled with botanical gold accents.
*   **Lunar Theme (Night Mode)**: A cool dark navy (`#0F1117`) nightsky palette styled with moonlit lavender highlights.
*   **Auto Theme**: Automatically cycles themes based on the clock (Solar from 6 AM – 7 PM; Lunar from 7 PM – 6 AM) with a hardware-accelerated **600ms** transition.
*   **Reduced Motion**: Full support for system accessibility preferences, disabling micro-animations and blooms instantly.
### 3. Dual-Runtime Persistence
*   **Native SQLite Container**: Reads and writes to a secure local database (`serene.db`) via Rust and the Tauri SQL plugin, running schemas and migrations on launch.
*   **Web Browser Fallback**: Falls back to HTML5 `LocalStorage` when previewed in web browsers, ensuring development and staging paths remain completely functional.
*   **Real-Time IPC Sync**: Instantly broadcasts database mutations across windows (Main window $\leftrightarrow$ Widget window) via Tauri IPC events in desktop mode, or native `BroadcastChannel` APIs in browser mode.
### 4. Custom Pointer-Capture Widget Dragging
*   Since the desktop widget is parented directly to the Windows Desktop Manager layer (`WorkerW`/`SHELLDLL_DefView`), standard OS border dragging is blocked. Serene utilizes a custom React Pointer Events hook with **Pointer Capture** to lock cursor positioning securely, providing lag-free dragging anywhere on the widget.
### 5. Paper-Inspired Monthly Habit Tracker
*   **Double-Grid Sheets**: Emulates traditional paper habit sheets, splitting calendar days into clean, responsive blocks (Days 1–16 and 17–31) to prevent horizontal scroll overflow.
*   **Perfect Day Streak Algorithm**: Calculates streaks by matching fully completed habits against your schedule. Rest days (unscheduled days) preserve and maintain your active streak without breaking it.
*   **Persisted Reflection Notepads**: ru-ruled notepad sections (Goals, Notes, and Rewards) styled like ruled paper, saved immediately on text blur.
---
## 📂 Project Architecture
```
Habit Tracker/
├── package.json                 # Project dependencies & script commands
├── tsconfig.json                # TypeScript compilation guidelines
├── vite.config.ts               # Vite server configurations
├── tailwind.config.js           # Solar/Lunar color system design tokens
├── index.html                   # HTML entry point with Plus Jakarta Sans typography
├── src-tauri/                   # Rust Backend Container
│   ├── Cargo.toml               # Rust crates and features config (SQLite, Shell, Winapi)
│   ├── tauri.conf.json          # Main/Widget window bounds, decorations, and transparent configurations
│   ├── capabilities/
│   │   └── default.json         # Tauri v2 JSON security permission profiles (SQL, events, positioning)
│   └── src/
│       └── main.rs              # Win32 parenting hook to WorkerW, IPC handlers, SQLite setup
└── src/                         # React Frontend Client
    ├── main.tsx                 # App mount entry point
    ├── App.tsx                  # HashRouter choosing between '/' (Main App) and '/#widget' (Widget)
    ├── index.css                # Color variables, fonts, ruled lines, custom scrollbars
    ├── db/
    │   ├── types.ts             # Type schemas (Habit, HabitLog, Task, Streak, Config)
    │   └── database.ts          # Unified SQLite query builder and LocalStorage fallback system
    ├── store/
    │   ├── habitStore.ts        # Zustand state store for habits, completions, and streaks
    │   ├── taskStore.ts         # Zustand state store for tasks creation & lists reordering
    │   └── themeStore.ts        # Zustand state store for user configurations, themes, and widget opacity
    └── components/
        ├── shared/
        │   ├── ThemeProvider.tsx # Global layout listener subscribing to db-changed syncs
        │   ├── BotanicalAccent.tsx # Corner decorative botanical SVGs
        │   └── BloomEffect.tsx   # Hardware-accelerated radial glow animation on checks
        ├── app/
        │   ├── Sidebar.tsx       # Main dashboard layout navigation
        │   ├── TodayScreen.tsx   # Checklists, time greeting, and progress card
        │   ├── HabitsScreen.tsx  # Habit manager list and frequency builder
        │   ├── TasksScreen.tsx   # Today / Upcoming / Archive task managers
        │   └── SummaryScreen.tsx # Monthly habit sheet grid & reflections pad
        └── widget/
            └── Widget.tsx        # Floating desktop companion (Expanded/Compact layouts)
```
---
## 🛠️ Getting Started
### Prerequisites
To run this application natively on Windows, you will need:
*   [Node.js](https://nodejs.org/) (v18+)
*   [Rust Up](https://rustup.rs/) (Stable channel)
*   **Visual Studio Build Tools 2022** (with the `C++ Build Tools` workload and the `Windows 11 SDK` checked)
### Installation
1.  Clone or navigate into the project workspace directory:
    ```bash
    cd "Habit Tracker"
    ```
2.  Install the required Node dependencies:
    ```bash
    npm install
    ```
### Running the App
#### A. Running in Web Fallback (Development Preview)
To preview the interface in a standard browser tab:
```bash
npm run dev
```
*   Open `http://localhost:5173/` for the Main Dashboard app.
*   Open `http://localhost:5173/#widget` in a side-by-side tab/window to preview the floating widget companion.
#### B. Running as a Native Desktop App (Recommended)
To compile and launch the native Tauri windows on your desktop screen:
```bash
npx tauri dev
```
*This command compiles the Rust assets, sets up the SQLite schemas, binds the widget to the Windows desktop shell (`WorkerW`), and launches the real windows.*
---
## 🛡️ License
Serene is local-only, values your privacy, and stores all data securely in your local environment. Feel free to customize and expand your daily sanctuary!
