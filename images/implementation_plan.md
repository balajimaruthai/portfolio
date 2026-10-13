# Implementation Plan - Balaji M Portfolio Upgrade

This plan details the updates to be made to Balaji M's ML Engineer Portfolio to deliver a highly premium, modern website. We will enhance the design aesthetics, update professional experience (including the new Cloud Practitioner training at DBSM), and implement an interactive, high-fidelity Showcase for publications and certifications.

## User Review Required

> [!IMPORTANT]
> **Design Scheme (Premium Dark & Glassmorphism Theme)**
> We propose transitioning the site to an ultra-modern, dark-themed aesthetic with a deep space slate background (`#0b0f19`), neon blue/indigo/purple gradients, and glassmorphic card elements. A light/dark mode switch will be added. Let us know if you prefer a different main color palette!
>
> **Workspace Confirmation**
> We recommend setting `C:\Users\Zynee\.gemini\antigravity\scratch\balaji-portfolio` as your active workspace for this project.

## Open Questions

> [!NOTE]
> 1. **DBSM Cloud Practitioner Trainee Start Date**: We have assumed the training started in **May 2026** (immediately following your Gradtwin internship). Please let us know if a different start date should be displayed.
> 2. **GitHub/LinkedIn/Resume Links**: Would you like us to put actual links for your social accounts and resume button instead of placeholders?

---

## Proposed Changes

### Portfolio Codebase

#### [MODIFY] [index.html](file:///C:/Users/Zynee/.gemini/antigravity/scratch/balaji-portfolio/index.html)
- Add a Theme Toggle button (Light/Dark mode) in the sidebar.
- Update the **Work Experience** section:
  - Add **Cloud Practitioner Trainee** at Don Bosco Skill Mission (DBSM), Bangalore (May 2026 — Present).
  - Update **Machine Learning Engineer Intern** at Gradtwin to indicate completion (Feb 2026 — Apr 2026).
- Update the **Certifications Showcase** section:
  - Add new certificate cards for:
    1. **Google Cloud**: Introduction to Data Analytics in Google Cloud (Apr 18, 2025).
    2. **Board Infinity**: Generative AI in HR - Impact and Application of Gen AI (Jul 14, 2025).
    3. **Marcello Tech**: Mobile App Development with Flutter and Dart Workshop (Oct 2023).
    4. **Gradtwin Services**: Machine Learning Internship Certificate (Issued May 19, 2026).
- Update the **Publications Showcase** with richer descriptions and visual abstract representations.

#### [MODIFY] [index.css](file:///C:/Users/Zynee/.gemini/antigravity/scratch/balaji-portfolio/index.css)
- Implement a modern **CSS variables structure** for both Light and Dark modes.
- Define a beautiful dark palette:
  - Background: `#0b0f19` (Deep slate blue)
  - Cards: `rgba(17, 24, 39, 0.7)` with `backdrop-filter: blur(12px)` and fine borders (`rgba(255, 255, 255, 0.05)`)
  - Accent Gradients: `#3b82f6` (Blue) to `#8b5cf6` (Violet)
- Update sidebar navigation layout and details to feel premium and lightweight.
- Add styling for the interactive certificates so they render as gorgeous, hyper-realistic credentials within the modal (recreating borders, seals, signatures, and badges using pure CSS/SVG).
- Add micro-animations (card float, hover glow, border transitions).

#### [MODIFY] [app.js](file:///C:/Users/Zynee/.gemini/antigravity/scratch/balaji-portfolio/app.js)
- Implement state-based theme switching (storing preference in `localStorage`).
- Expand `publicationData` and `certificationData` stores with complete text, metadata, and HTML/CSS mockups for all new certifications (Google Cloud, Board Infinity, Marcello Tech, Gradtwin).
- Update modal injection script to support fluid animation transitions and responsive layouts for mobile screens.

---

## Verification Plan

### Automated Verification
- Check code syntax and HTML validity using `run_command` with local static checkers (e.g., standard browser checks or simple node validation if available).

### Manual Verification
- Verify responsiveness across various screen widths (desktop, tablet, mobile).
- Test theme toggling and verify that variables update correctly.
- Test modal popups for all publications and certificates to ensure content is fully loaded and looks visually stunning.
