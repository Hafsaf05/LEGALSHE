import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export const generateComplaintPDF = async (complaintDetails) => {
  const { incidentDescription, lawSection, date } = complaintDetails;
  
  // Create a new PDFDocument
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 Size
  
  // Embed standard fonts
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const timesBoldFont = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  
  const { width, height } = page.getSize();
  
  // 1. Watermark: DRAFT
  page.drawText('DRAFT', {
    x: width / 2 - 150,
    y: height / 2 - 50,
    size: 100,
    font: helveticaFont,
    color: rgb(0.9, 0.9, 0.9),
    opacity: 0.3,
    rotate: { type: 'degrees', angle: 45 },
  });

  // 2. Header
  page.drawText('FORMAL POLICE COMPLAINT (DRAFT)', {
    x: 50, y: height - 50, size: 16, font: timesBoldFont, color: rgb(0, 0, 0)
  });
  
  page.drawText(`Date: ${date || new Date().toLocaleDateString()}`, {
    x: 50, y: height - 80, size: 12, font: timesRomanFont, color: rgb(0, 0, 0)
  });

  page.drawText('To,', { x: 50, y: height - 110, size: 12, font: timesRomanFont });
  page.drawText('The Station House Officer / Cyber Crime Cell,', { x: 50, y: height - 125, size: 12, font: timesRomanFont });
  page.drawText('________________________ [Fill your local station]', { x: 50, y: height - 140, size: 12, font: timesRomanFont });

  // 3. Subject & Law Section
  page.drawText('Subject: Complaint regarding online harassment / cybercrime', {
    x: 50, y: height - 180, size: 12, font: timesBoldFont
  });
  
  const safeLawSection = lawSection || 'Applicable BNS 2023 / IT Act Sections per police assessment';
  page.drawText(`Applicable Laws (For Reference): ${safeLawSection}`, {
    x: 50, y: height - 200, size: 12, font: timesBoldFont, color: rgb(0.2, 0.2, 0.2)
  });

  // 4. Body / Description Details
  page.drawText('Sir/Madam,', { x: 50, y: height - 240, size: 12, font: timesRomanFont });
  
  page.drawText('I am writing to report an incident of harassment. The details are as follows:', {
    x: 50, y: height - 260, size: 12, font: timesRomanFont
  });

  // Simple text wrapping for the description
  const maxWidth = width - 100;
  // Replace newlines with spaces for wrapping simplicity, or split. We will split by words.
  const cleanDescription = (incidentDescription || 'Description omitted or to be attached.').replace(/\n/g, ' ');
  const words = cleanDescription.split(' ');
  
  let line = '';
  let yPosition = height - 290;

  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + ' ';
    const textWidth = timesRomanFont.widthOfTextAtSize(testLine, 12);
    
    // If we exceed maxWidth or run out of page height (crude check for a single page PDF)
    if (textWidth > maxWidth && i > 0) {
      page.drawText(line, { x: 50, y: yPosition, size: 12, font: timesRomanFont });
      line = words[i] + ' ';
      yPosition -= 20;
    } else {
      line = testLine;
    }
  }
  page.drawText(line, { x: 50, y: yPosition, size: 12, font: timesRomanFont });

  yPosition -= 60;
  if(yPosition < 150) {
      // Very basic catch for long text overflow
      page.drawText('[Content continued... please attach verbatim text printed separately]', { x: 50, y: yPosition, size: 12, font: timesRomanFont, color: rgb(0.5, 0.5, 0.5) });
      yPosition -= 40;
  }

  page.drawText('I request you to kindly register an FIR and take necessary action.', {
    x: 50, y: yPosition, size: 12, font: timesRomanFont
  });

  yPosition -= 40;
  page.drawText('Yours faithfully,', { x: 50, y: yPosition, size: 12, font: timesRomanFont });
  page.drawText('________________________', { x: 50, y: yPosition - 30, size: 12, font: timesRomanFont });
  page.drawText('Name/Contact: ________________________', { x: 50, y: yPosition - 50, size: 12, font: timesRomanFont });

  // 5. Footer Disclaimer
  page.drawText('Generated via LegalShe App. This is a draft template and does not constitute official legal counsel.', {
    x: 50, y: 30, size: 9, font: timesRomanFont, color: rgb(0.4, 0.4, 0.4)
  });

  // Serialize and download
  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const docUrl = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = docUrl;
  link.download = `LegalShe_Draft_Complaint_${Date.now()}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
