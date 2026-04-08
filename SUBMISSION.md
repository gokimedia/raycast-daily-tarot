# Raycast Store Submission

## Prerequisites
- Raycast app installed (macOS)
- Raycast account: https://www.raycast.com

## Setup
```bash
cd raycast-extension
npm install
npm run dev  # opens in Raycast for testing
```

## Create required assets
Raycast requires a 512x512 PNG icon. Create one:
- Use any Deckaura brand asset resized to 512x512
- Save as `assets/command-icon.png`
- Also create: `metadata/daily-1.png`, `daily-2.png`, etc. (screenshots)

## Submit to Raycast Store
1. Fork https://github.com/raycast/extensions
2. Create a new branch
3. Copy this `raycast-extension/` folder to `extensions/daily-tarot/` in the fork
4. Verify builds: `ray build -e dist`
5. Commit and open PR
6. Raycast team reviews (~1-2 weeks)

## Metadata requirements
- `package.json` author field must be your Raycast Store username
- Add your Raycast profile as `owner`
- Screenshots (1280x800) demonstrating each command

## Expected backlinks
- `raycast.com/deckaura/daily-tarot` — extension page dofollow
- `raycast.com/deckaura` — author profile with website link
- Raycast Store discovery traffic
- GitHub merged PR → permanent history
