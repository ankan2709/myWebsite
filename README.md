# Academic Portfolio Website

A professional, responsive academic portfolio website designed for PhD candidates and researchers in Computer Science.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Professional Layout**: Clean, academic-focused design with proper typography
- **Smooth Navigation**: Fixed navigation with smooth scrolling between sections
- **Projects Showcase**: Display your research projects with framework and result images
- **Publications Section**: Showcase your academic papers and research
- **CV Integration**: Downloadable CV with key highlights
- **Contact Form**: Working contact form for collaboration inquiries
- **Modern Styling**: Professional color scheme optimized for academic portfolios

## Sections Included

1. **Hero Section**: Professional introduction with photo and social links
2. **About Section**: Academic background and research interests
3. **Projects Section**: Showcase of key research projects with visuals
4. **Publications Section**: Academic papers with citations and abstracts
5. **CV Section**: Downloadable resume with highlights
6. **Contact Section**: Contact information and inquiry form
7. **Footer**: Professional footer with social links

## Getting Started

1. **Download the Files**: All files are in the `portfolio-website` folder
2. **Customize Content**: 
   - Update personal information in `index.html`
   - Replace placeholder images with your actual project images
   - Add your real social media and academic profile links
   - Update the CV download link with your actual CV file
3. **Deploy**: Upload the files to any web hosting service

## File Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── src/
│   ├── styles.css      # All CSS styles
│   └── script.js       # JavaScript functionality
└── README.md           # This file
```

## Customization Guide

### Personal Information
- Update name, title, and description in the hero section
- Replace the profile image URL with your professional headshot
- Update contact information in the contact section

### Projects Section
Replace the sample projects with your actual work:
```html
<div class="project-card">
    <div class="project-content">
        <h3>Your Project Title</h3>
        <p class="project-description">Your project description...</p>
        <div class="technologies">
            <div class="tech-tags">
                <span class="tech-tag">Your Technology</span>
            </div>
        </div>
    </div>
    <div class="project-images">
        <div class="project-image">
            <img src="your-framework-image.jpg" alt="Framework">
        </div>
        <div class="project-image">
            <img src="your-results-image.jpg" alt="Results">
        </div>
    </div>
</div>
```

### Publications Section
Update with your actual publications:
```html
<div class="publication-card">
    <div class="publication-badge">Conference 2024</div>
    <h3>Your Paper Title</h3>
    <p class="authors"><strong>Your Name</strong>, Co-authors</p>
    <p class="venue">Conference Name • Year</p>
    <p class="abstract">Your paper abstract...</p>
</div>
```

### Social Links
Update all social media and academic profile links:
- LinkedIn profile
- GitHub profile
- Google Scholar profile
- Email address
- ORCID (if applicable)

### Colors and Styling
The website uses CSS custom properties for easy color customization:
```css
:root {
  --primary-blue: #2563eb;    /* Main accent color */
  --primary-teal: #0d9488;    /* Secondary accent */
  --academic-text: #1e293b;   /* Main text color */
  /* Customize these values to match your preferences */
}
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Performance Features

- Optimized images with proper sizing
- Smooth scroll behavior
- Efficient CSS animations
- Mobile-first responsive design
- Fast loading times

## Deployment Options

### GitHub Pages
1. Create a new repository on GitHub
2. Upload all files to the repository
3. Enable GitHub Pages in repository settings
4. Your site will be available at `username.github.io/repository-name`

### Netlify
1. Zip the `portfolio-website` folder
2. Drag and drop to Netlify
3. Your site will be deployed automatically

### Traditional Web Hosting
1. Upload all files to your web hosting provider
2. Ensure `index.html` is in the root directory
3. Your site will be accessible via your domain

## Maintenance

- Regularly update your publications and projects
- Keep your CV file current
- Update contact information as needed
- Add new project images as you complete research

## Technical Notes

- The website uses vanilla HTML, CSS, and JavaScript (no frameworks required)
- Images are loaded from external URLs (replace with your own hosted images)
- Contact form includes basic validation but needs backend integration for actual email sending
- All code is clean, commented, and easy to modify

## Support

This portfolio website is designed to be easily customizable without requiring extensive web development knowledge. The code is well-commented and structured for easy updates.

For best results:
- Use high-quality, professional images
- Keep content concise and academic-focused
- Regularly update with new achievements and publications
- Test on multiple devices before deploying

---

**Note**: Remember to replace all placeholder content with your actual information before deploying the website.