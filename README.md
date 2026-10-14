# Austin Yardage Books: getting it on your iPhone

You have two ways to run this. Use the first today, then do the second so it works on the course with no signal.

| | Quick look | Real install (recommended) |
|---|---|---|
| Time | 2 minutes | About 15 minutes, once |
| Needs signal on the course | Yes | No |
| Needs a Claude login | Yes | No |
| Cost | Free | Free |

## Path 1: Quick look (2 minutes)

1. On your iPhone, sign in to Claude in Safari.
2. Open https://claude.ai/artifact/Fgqou7VoL2cAPXmnaoPVFB
3. Tap the Share button, then Add to Home Screen.

The page is private to your Claude account until you choose to share it, and it needs a connection to load. That is fine for trying it out, but not for a round at Kissing Tree with one bar of signal. Do Path 2 before you play.

## Path 2: Real install (works offline, no login)

This turns the app into a normal web app that lives on your home screen and keeps a full copy on the phone. You host the files once on a free site, open it on your phone, and add it to the home screen. Do the hosting step on a laptop or desktop. Only the last part happens on the phone.

The files you need are in this folder: `index.html`, `manifest.webmanifest`, `sw.js` and three `icon-*.png` files.

### Step 1. Put the files on a free host

Pick one. Netlify is faster. GitHub is easier to update later.

**Option A: Netlify Drop**

1. Go to https://app.netlify.com/drop
2. Create a free Netlify account if it asks. Without an account a drop site can expire, so sign up.
3. Drag this whole folder onto the page.
4. Netlify gives you an address ending in `.netlify.app`. Write it down.

**Option B: GitHub Pages**

1. Create a free account at https://github.com and make a new public repository, for example `austin-yardage`.
2. Click Add file, then Upload files. Drag in the files from this folder so that `index.html` sits at the top level of the repository, not inside a sub-folder. Click Commit changes.
3. Open Settings, then Pages. Under Build and deployment choose Deploy from a branch, branch `main`, folder `/ (root)`, then Save.
4. Wait one to two minutes. Your address is `https://YOUR-USERNAME.github.io/austin-yardage/`.

Both options use HTTPS, which iPhones require for offline web apps.

### Step 2. Install it on your phone

1. On the iPhone, open your address in **Safari**.
2. Wait for the course list to appear. This first visit, while you have signal, is what saves the offline copy.
3. Tap the Share button (the square with an arrow), scroll down, tap **Add to Home Screen**, then **Add**.
4. Open the app from the new home screen icon.

### Step 3. Prove it works offline (do this at home)

1. Open the app from the home screen icon and tap through a course and a few holes.
2. Swipe up to close the app completely.
3. Turn on Airplane Mode.
4. Open the app again and tap a course. If the course list and hole cards load, you are set.

If it shows a blank page or an error, go to Troubleshooting below. Do not wait until you are on the first tee.

## Before each round

- Open the app once on Wi-Fi the night before. Home screen web apps are generally exempt from the rule that clears Safari data after a week of not using a site, but a quick open costs nothing.
- Check the Summary page's Data check for the course. Anything under Approximate or Unknown is worth a glance against the paper scorecard at the pro shop.
- Compare three things with the paper card: your tee's yardage on holes 1 and 18, and the handicap row. If they match, the book is good for that tee.

## Enter your own distances

Every plan depends on your club distances. The defaults are assumptions for a 6'4", 185 lb golfer who hits it relatively straight, not measurements of your swing.

1. Open any course and go to Summary.
2. Scroll to Your distances and type your low and high total yards (with roll) for each of your 13 clubs, from the Ping G440 driver down to the 58 degree.
3. The numbers save on the phone and apply to every course.

On the same page, the Goal switch chooses par or bogey. Par goes for the green from about a 5 iron distance, and bogey lays up sooner. They are stored only in this app on this phone. If you delete the icon or clear Safari website data they reset, so keep a copy of your numbers somewhere.

## Updating and adding to the book

When I send you changed files:

1. Open `sw.js` and change the version in `austin-yardage-v2` to the next number (`v3`, then `v4`). This is what tells phones to drop the old copy.
2. Upload the new files to the same place (GitHub: Add file, Upload files, same names, Commit. Netlify: drag the folder onto your site's Deploys page).
3. On the phone, open the app on Wi-Fi, close it fully, and open it again. The update appears on the second open.

What improves the book most:

- A photo of each course's paper scorecard from the pro shop. That lets me mark a tee as confirmed.
- Satellite screenshots of the holes. That adds real overhead maps and hole-specific miss notes.
- Your actual club distances.

## Troubleshooting

| What you see | What to do |
|---|---|
| Blank page offline | You skipped the first online visit. Open the address on Wi-Fi, wait for the course list, then repeat Step 3. |
| Old data after an update | Change the `v` number in `sw.js` and re-upload. Then open twice on Wi-Fi. |
| Icon is a plain letter, not the flag | You added it before the files finished loading. Delete the icon and add it again from Safari. |
| Distances reset | Safari website data was cleared or the icon was deleted. Re-enter them. |
| Fonts look plain offline | Fonts download on the first online visit. Open it once on Wi-Fi and they will stay. |

## What is and is not verified

- Every scorecard (yardage, par, handicap) checks out arithmetically: each tee's front, back and total sum to the published numbers.
- None of them has been confirmed from a course's own website. They come from GolfPass, Golf Advisor, Greenskeeper and similar sites, and each course's Summary page lists the specific conflicts I found.
- Hole shapes are not mapped. Only a handful of holes have documented hazards, such as Lions 17, Morris Williams 3, Grey Rock 13, Plum Creek 2 and ShadowGlen 16 and 18. Every other card uses a default aim note, labeled as one.
- Missing tees: Plum Creek's Black, Blue and White, Morris Williams's White, Green and Red, Kissing Tree's Forward, and ShadowGlen's Green. They need a scorecard photo.

## Later: a real App Store app

This package is a web app, not an App Store app. If you later want one, the same files can be wrapped as a native iPhone app with a tool called Capacitor. That needs a Mac with Xcode and an Apple Developer account (paid yearly, currently around $99, so check Apple's site). With a free Apple ID you can put your own build on your own phone, but it expires after about a week. For a personal yardage book, the web app does the same job and is much simpler to keep updated.
