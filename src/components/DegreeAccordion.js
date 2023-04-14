import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

const DegreeAccordion = ({ degree }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />} >
        <Typography>{degree.degreeName}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
        {degree.concentrations && degree.concentrations.map(c => (
            <Typography key={c}>{c}</Typography>
          ))}
          {!degree.concentrations && degree.degreeName === 'graduate advanced certificates' && (
            <Typography>{degree.availableCertificates}</Typography>
          )}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default DegreeAccordion;
