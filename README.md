# Jayasri R — Editable Portfolio

A React + TypeScript + Vite portfolio with an emerald-teal palette, light/dark mode, project and achievement sections, and a searchable certificate gallery.

## Run locally (Windows / PowerShell)

1. Install Node.js if it is not already installed.
2. Open this folder in VS Code.
3. Open **Terminal → New Terminal** and run:

   ```powershell
   npm.cmd install
   npm.cmd run dev
   ```

4. Open the local address printed by Vite (usually `http://localhost:5173/`). Keep the terminal open while using the site.

`npm.cmd` avoids the PowerShell `npm.ps1` execution-policy error without changing Windows security settings.

## Update portfolio details

Edit `src/portfolioData.ts`. It contains the profile, education, skills, projects, achievements, and certificate list. Save the file; Vite normally refreshes the page automatically.

## Add a course certificate or event certificate

1. Put the original PDF or image in the matching folder:
   - Course: `public/certificates/course/`
   - Hackathon: `public/certificates/events/hackathons/`
   - Technical event: `public/certificates/events/technical/`
2. Create a preview image and place it in `public/certificates/thumbnails/`. The existing previews are JPG files.
3. Add an entry to the `certificates` array in `src/portfolioData.ts`, following this example:

   ```ts
   {
     title: 'Course or Event Name',
     category: 'Course Certificates', // or 'Hackathons & Events' or 'Technical Events'
     subcategory: 'Course',
     file: '/certificates/course/your-certificate.pdf',
     preview: '/certificates/thumbnails/your-certificate.jpg',
     fileType: 'PDF',
     issuer: 'Provider / college, if known',
     date: '2026' // optional; use '' if unknown
   }
   ```

   Use `fileType: 'Image'` for JPG/PNG certificates. `file` opens the original; `preview` is the gallery thumbnail. The gallery supports category filters and text search.

## Notes

- The certificate gallery currently includes all 47 files supplied in the `Certificates.zip` archive: 29 course items, 6 items under the archive's Hackathon folder, and 12 technical-event items.
- Titles are cleaned from the provided filenames; blank issuer/date fields are left blank rather than guessed. Review the displayed names and update them in `src/portfolioData.ts` if a certificate's exact title should be different.
- One supplied file is an `.mhtml` web archive; it is listed with a preview card, but browser support for opening MHTML varies. The original file is included.
- Theme choice is stored in the browser's local storage.
