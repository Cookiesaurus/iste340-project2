import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

const MinorAccordion = ({ minor }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />} >
        <Typography>{minor.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          <Typography>{minor.description}</Typography>
          {minor.courses.map(c => (
            <Typography key={c}>{c}</Typography>
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default MinorAccordion;
