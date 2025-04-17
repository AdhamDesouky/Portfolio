# Adham Desouky's Portfolio

<p align="center">
  <img src="public/screen.png" alt="Screenshot" width="200"/>
</p>

A modern, responsive portfolio website built with Next.js, showcasing my skills, projects, and professional experience.

## 🚀 Features

- ⚡️ Next.js 15 with React 19
- 🎨 Modern UI with Tailwind CSS
- 📱 Fully Responsive Design
- 📧 Contact Form with Email Integration
- 🎯 SEO Optimized
- 🌙 Dark Mode Support
- 📊 Interactive Skills Section
- 🎓 Education & Experience Timeline
- 🏆 Projects Showcase

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS, SCSS
- **Animation:** Framer Motion
- **Icons:** React Icons
- **Form Handling:** Axios
- **Email Service:** Nodemailer
- **Deployment:** Vercel/Netlify

## 📦 Installation

1. Clone the repository
```bash
git clone https://github.com/AdhamDesouky/Portfolio.git
cd Portfolio
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
# Email Configuration
EMAIL_ADDRESS=your.email@gmail.com
# Generate an App Password from Google Account > Security > App Passwords
GMAIL_PASSKEY=your_16_character_app_password

# Telegram Configuration (optional)
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_CHAT_ID=your_telegram_chat_id

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. Run the development server
```bash
npm run dev
```

## 🎨 Customization

1. Update your personal information in `utils/data/personal-data.js`
2. Modify the skills section in `utils/data/skills.js`
3. Add your projects in `utils/data/projects-data.js`
4. Update education and experience in their respective files
5. Customize the theme colors in `tailwind.config.js`

## 📄 Sections

- **Hero Section:** Introduction and quick links
- **About Me:** Personal information and skills overview
- **Experience:** Professional work history
- **Skills:** Technical skills with visual representation
- **Projects:** Portfolio of work with detailed descriptions
- **Education:** Academic background
- **Blog:** Latest articles and posts
- **Contact:** Get in touch form with email integration

## 🔧 Configuration

### Email Setup
1. Enable 2-Step Verification in your Google Account
2. Generate an App Password for the application
3. Update the `.env.local` file with your credentials

### Telegram Integration (Optional)
1. Create a Telegram bot using BotFather
2. Get your chat ID
3. Update the `.env.local` file with your bot token and chat ID

## 🚀 Deployment

The portfolio can be easily deployed on Vercel or Netlify:

1. Push your code to GitHub
2. Import the repository to Vercel/Netlify
3. Add your environment variables
4. Deploy!

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Original design inspiration from [Abu Said](https://github.com/said7388/developer-portfolio)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
