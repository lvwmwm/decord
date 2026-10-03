// Module ID: 16560
// Function ID: 16561
// Name: vibegrationsAppSlotsLeftLabel
// Dependencies: [1126, 3723, 2]
// Exports: vibegrationsAppSlotsLeftLabel

// Module 16560 (vibegrationsAppSlotsLeftLabel)
import intl3 from "intl" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsAppSlotsLeftLabel.tsx");

export const vibegrationsAppSlotsLeftLabel = function vibegrationsAppSlotsLeftLabel(count) {
  let stringResult;
  if (0 === count) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef3723.JQU61N);
  } else {
    const intl = intl3.intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(_modDef3723["336dtK"], obj);
  }
  return stringResult;
};
