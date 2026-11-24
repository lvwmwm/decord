// Module ID: 18267
// Function ID: 18268
// Name: requestConjureAppIcon
// Dependencies: [6967, 1112, 4190, 2]
// Exports: default

// Module 18267 (requestConjureAppIcon)
import intl2 from "intl" /* 1112 */;
import _modDef4190 from "module_4190" /* 4190 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 6967 */;
import size from "module_2" /* 2 */;

const sendUserMessage = ConjureConnectionStore.sendUserMessage;
const result = size.fileFinishedImporting("modules/conjure/identity/requestConjureAppIcon.tsx");

export default function requestConjureAppIcon(arg0) {
  const intl = intl2.intl;
  return sendUserMessage(arg0, intl.string(_modDef4190["hOg/Uu"]));
};
