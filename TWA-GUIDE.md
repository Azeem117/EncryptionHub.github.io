# Android Publishing via Trusted Web Activity (TWA)

This guide wraps your existing PWA (Encryption Hub) into a native Android app you can publish on the Google Play Store, using Bubblewrap (TWA).

Your site URL: https://azeem117.github.io/EncryptionHub.github.io/

TWA requirement: Host Digital Asset Links at the ORIGIN: https://azeem117.github.io/.well-known/assetlinks.json

Because this is a GitHub Pages project site (subpath), you must host that file in a separate repository named `azeem117/azeem117.github.io` or use a custom domain. This guide covers the separate repo approach.

---

## 1) Prerequisites

- Node.js LTS installed
- Java JDK 11+ and Android Studio installed
- GitHub account access to create the `azeem117.github.io` repository

---

## 2) Create Android project using Bubblewrap

Install Bubblewrap globally:

```powershell
npm i -g @bubblewrap/cli
```

Initialize from your PWA manifest:

```powershell
bubblewrap init --manifest=https://azeem117.github.io/EncryptionHub.github.io/manifest.json
```

During init, pick values:
- Package ID: com.azeem117.encryptionhub (suggested)
- App Name: Encryption Hub
- Host URL: https://azeem117.github.io/EncryptionHub.github.io/
- Signing key: Let Bubblewrap create a key, or provide yours.

Build the app bundle:

```powershell
bubblewrap build
```

This generates an Android project folder (usually `./android/`) and builds an APK/AAB.

---

## 3) Get your SHA-256 certificate fingerprint

If Bubblewrap created a signing key, it will tell you the keystore path and alias. Use keytool to get the SHA-256 fingerprint:

```powershell
keytool -list -v -keystore path\to\my-release-key.jks -alias my-key-alias
```

Copy the SHA256 value. You will use it in `assetlinks.json`.

---

## 4) Prepare assetlinks.json

Create a file with your package name and fingerprint:

```json
[
  {
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "com.azeem117.encryptionhub",
      "sha256_cert_fingerprints": [
        "AA:BB:CC:DD:EE:FF:...:ZZ"
      ]
    }
  }
]
```

A ready-to-edit template is in `assetlinks.template.json` in this repo.

---

## 5) Host Digital Asset Links at the origin

Create a new repository named `azeem117.github.io` (exactly your username + `.github.io`). In that repo:

- Create a folder: `.well-known/`
- Add the file: `.well-known/assetlinks.json` with the contents from step 4

Commit and push. Then enable Pages for this repo (Settings → Pages → Source: GitHub Actions or main branch). After it publishes, verify the file is served at:

https://azeem117.github.io/.well-known/assetlinks.json

It must be accessible with status 200, correct JSON, and `Content-Type: application/json` (GitHub Pages sets this automatically).

---

## 6) Open the Android project in Android Studio

- Open the generated `android/` folder.
- Set app icon if desired (Bubblewrap uses icons from your manifest).
- Build a signed release AAB (Build → Generate Signed Bundle/APK).

Test on a device:
- App should launch full-screen and load your site.
- Offline should work thanks to your service worker and `offline.html`.

---

## 7) Publish to Google Play

- Create a new app in Google Play Console.
- Upload the signed AAB.
- Complete listing (title, description, screenshots, icon, content rating, privacy policy). You can note that no personal data is collected and all processing is on-device.
- Roll out to internal testing, then production.

---

## Troubleshooting

- 403 or 404 at `/.well-known/assetlinks.json`:
  - Ensure it’s in the user site repo `azeem117.github.io`, not this project repo.
  - Ensure the file path is exactly `.well-known/assetlinks.json` (no extra extensions).
- App opens in a browser instead of full-screen:
  - Asset links are not validated yet; check URL and fingerprint.
- PWA installability issues:
  - Your site already has manifest and service worker; if using a custom domain, update the SW registration base path accordingly.

---

## Optional: Custom Domain

If you use a custom domain (e.g., `encryptionhub.xyz`), put `/.well-known/assetlinks.json` at that domain’s root instead. Update the Bubblewrap host to start at your custom domain base path.

---

If you want, share your package name and the SHA-256 fingerprint and I’ll generate the final `assetlinks.json` for you and a tiny starter structure for the `azeem117.github.io` repo.
