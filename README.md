# University Study Hub

A multi-course university study website. Each course has its own chapter pages, explanations, figures, quizzes, and revision content.

## Current content
- IS 366 — Decision Support Systems — Chapter 2.

## Live website
After enabling GitHub Pages at **Settings → Pages**, set **Deploy from a branch**, select **main** and **/(root)**. The site will be available at:

https://ibrahebs.github.io/university-study-hub/

## Add more courses
1. Create a self-contained chapter HTML file at `courses/COURSE_ID/chapter-XX/index.html`.
2. Add the new course/chapter metadata and relative path to `catalog.js`.
3. Include a link to `../../../index.html` to return to the course dashboard.
4. Commit both files. The new course will appear on the home page.

Only add a chapter to `catalog.js` after its page actually exists.

## Notes
- Progress in interactive chapters is stored locally in the browser; it does not sync across devices.
- GitHub Pages is publicly accessible. Confirm you have the necessary permissions to publish course materials or past exam content.
- The home page and existing IS 366 study guide do not require external scripts or a server.
