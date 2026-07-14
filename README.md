# Prof. Dr. Asif Hanif — GitHub Pages Website

This folder contains a complete starter website for:

https://asifhanifbiostat.github.io

## Important requirement

To use exactly `Asifhanifbiostat.github.io`, your GitHub username must be:

`Asifhanifbiostat`

If that username is unavailable, the free address will use your actual GitHub username, for example:

`yourusername.github.io`

## Publishing steps

1. Create a free GitHub account and verify your email.
2. Create a new **public** repository named exactly:
   `Asifhanifbiostat.github.io`
3. Upload all files in this folder to the root of that repository:
   - index.html
   - style.css
   - script.js
   - .nojekyll
4. Open the repository's **Settings**.
5. Select **Pages**.
6. Under **Build and deployment**, choose:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /(root)
7. Save.
8. Open `https://asifhanifbiostat.github.io` after deployment completes.

## Before publishing

Edit `index.html` and replace:

- `YOUR-EMAIL@example.com`
- Profile links have already been added for Google Scholar, Web of Science, Scopus, ORCID, ResearchGate, and Facebook.
- Placeholder photograph
- Publication entries and metrics, if needed

## Adding a photograph

1. Add a professional photograph named `profile.jpg` to the repository.
2. In `index.html`, replace:

```html
<div class="photo-placeholder">
  <span>Add professional photograph</span>
</div>
```

with:

```html
<img class="profile-photo" src="profile.jpg" alt="Prof. Dr. Asif Hanif">
```

3. Add this to `style.css`:

```css
.profile-photo {
  width: 100%;
  aspect-ratio: 4/4.5;
  object-fit: cover;
  border-radius: 14px;
  display: block;
}
```

## Ownership and security

Create the GitHub account using your own email address. Keep two-factor authentication enabled. A developer may be added as a collaborator, but you should remain the account and repository owner.
