# Δρ Βικτώρια Πολυβίου — static GitHub Pages website

A responsive one-page website for **Δρ Βικτώρια Πολυβίου, Προσωπικός Ιατρός ΓεΣΥ**, built from scratch as a static HTML/CSS/JavaScript site. It does not need Node.js, a database, or a build process.

## Included

- Greek, mobile-first medical website
- Navigation sections: Home, Doctor, GESY enrolment information, Contact
- Click-to-call phone number: **99 232911**
- Google Maps directions link to **Στασάνδρου 9, Office 503, Λευκωσία 1060**
- Opening hours supplied for the practice
- Office photo included in `assets/images/clinic-office.png`
- Privacy-conscious enquiry reminder form: it **does not submit or store personal/medical data**
- Accessible controls, responsive layout, keyboard-safe modal, and reduced-motion support

## Publish it on GitHub Pages

1. Create a new GitHub repository, for example: `dr-victoria-polyviou`.
2. Upload all files from this folder to the repository root. Do **not** upload the ZIP inside the repo; extract it first.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**, then click **Save**.
6. GitHub will provide the public URL after deployment.

## Before publishing publicly

Verify these details directly with the doctor/clinic:

- Exact Greek/English spelling of the name and title
- Phone number, address, and opening hours
- Whether the doctor is accepting new GESY patients
- Any professional qualifications, services, email, privacy policy, and consent wording
- Permission to use the office photo and a real professional portrait

## Replace the current office photo / add portrait

The current uploaded office image is at:

```text
assets/images/clinic-office.png
```

To use another image, replace that file while keeping the same name, or update its paths inside `index.html`.

For a real doctor portrait, add your file as:

```text
assets/images/doctor-portrait.jpg
```

Then replace the `portrait-card` block in `index.html` with an `<img>` element. This package intentionally uses a clean monogram card rather than inventing or copying a portrait file that was not available as a local image asset.

## Make contact forms actually send messages

GitHub Pages hosts only static files, so the form intentionally does not send data. For an actual booking/enquiry form, use a GDPR-appropriate form provider (for example Formspree, Jotform, Microsoft Forms, or a secure clinic booking system) and add its endpoint after the clinic approves the privacy/consent process. Do not collect medical histories, ID numbers, ARC numbers, or diagnosis details through an unprotected static form.

## Project structure

```text
.
├── index.html
├── README.md
└── assets
    ├── css/style.css
    ├── js/main.js
    └── images
        ├── clinic-office.png
        └── favicon.svg
```
