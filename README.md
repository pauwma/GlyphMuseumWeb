# Glyph Museum App

A powerful Android application for creating, sharing, and managing custom glyph patterns on Nothing Phone devices. Express your creativity through the Nothing Phone's unique Glyph Matrix display.

## 🚀 Features

### 🎨 **Pattern Creation & Editing**
- Intuitive glyph pattern editor with 489-LED matrix interface
- Real-time preview of patterns on device
- Support for both static and animated designs
- Brightness control for each individual LED
- Import/export pattern data in JSON format

### 👥 **Community & Social**
- Discover art from the global Nothing Phone community
- Like and save your favorite glyph designs
- User profiles with handles and social links
- OAuth authentication (Google, GitHub, Discord, X/Twitter)
- Profile caching for optimal performance

### 📱 **Frame Management**
- Organize patterns across 6 customizable frames
- Smart frame assignment system
- Background frame services for hardware integration
- Frame locking system (achievements system)
- Real-time frame synchronization

### 🔧 **Hardware Integration**
- Direct integration with Nothing Phone Glyph Matrix API
- Background services for seamless hardware control
- Custom pattern rendering for locked/empty frames
- Error handling for hardware failures

## 📱 Screenshots

[Still too early heh]

## 🛠️ Architecture

### **Tech Stack**
- **Language**: Kotlin
- **UI Framework**: Jetpack Compose
- **Architecture**: MVVM with Repository pattern
- **Database**: Supabase (remote) + SharedPreferences (local)
- **Authentication**: Supabase Auth with OAuth providers
- **Hardware**: Nothing Glyph Matrix SDK
- **Build System**: Gradle with Kotlin DSL

## 🔧 Glyph Data Format

### **Static Pattern**
```json
{
  "v": 1,
  "frames": [
    { "p": [0,0,0,80,120,80,0,0,0, /* 489 LED values 0-255 */] }
  ]
}
```

### **Animated Pattern**
```json
{
  "v": 1,
  "frames": [
    { "d": 200, "p": [/* 489 LED values */] },
    { "d": 100, "p": [/* 489 LED values */] },
    { "d": 300, "p": [/* 489 LED values */] }
  ]
}
```

### **Privacy & Terms**
- **Website**: [GlyphMuseumWeb](https://github.com/pauwma/GlyphMuseumWeb) - Official website and legal documents
- [Privacy Policy](https://pauwma.github.io/GlyphMuseumWeb/privacy)
- [Terms of Service](https://pauwma.github.io/GlyphMuseumWeb/terms)

### **Disclaimers**
- Not affiliated with Nothing Technology Limited
- Glyph Matrix integration via official Nothing SDK
- Use at your own risk - hardware patterns may affect device performance
- Community content is user-generated and moderated

## 👨‍💻 Developer

**pauwma**
- GitHub: [@pauwma](https://github.com/pauwma)
- Email: [contact+glyphmuseum@proton.me](mailto:contact+glyphmuseum@proton.me)

## 📱 Download

[Download from Google Play Store (Coming Soon)](https://play.google.com/store/apps/details?id=com.pauwma.glyphmuseum) *(Coming Soon)*

---

**Made with ❤️ for the Nothing Phone community**

