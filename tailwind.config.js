/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // We will toggle theme using the 'lunar' class on html
  theme: {
    extend: {
      colors: {
        theme: {
          bg: 'var(--color-bg)',
          surface: 'var(--color-surface)',
          widget: 'var(--color-widget)',
          accent: 'var(--color-accent)',
          accentSec: 'var(--color-accent-sec)',
          completed: 'var(--color-completed)',
          pending: 'var(--color-pending)',
          high: 'var(--color-high)',
          medium: 'var(--color-medium)',
          low: 'var(--color-low)',
          textPrimary: 'var(--color-text-primary)',
          textSecondary: 'var(--color-text-secondary)',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'solar-bloom': '0 8px 32px rgba(232, 168, 56, 0.12)',
        'lunar-bloom': '0 8px 32px rgba(167, 139, 250, 0.15)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '20px',
      },
      transitionDuration: {
        'theme': '600ms',
      }
    },
  },
  plugins: [],
}
