// Module ID: 18140
// Function ID: 18141
// Name: requestConjureAppIcon
// Dependencies: [6848, 1112, 4091, 2]
// Exports: default

// Module 18140 (requestConjureAppIcon)
import intl2 from "intl" /* 1112 */;
import _modDef4091 from "module_4091" /* 4091 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 6848 */;
import size from "module_2" /* 2 */;

const sendUserMessage = ConjureConnectionStore.sendUserMessage;
const result = size.fileFinishedImporting("modules/conjure/identity/requestConjureAppIcon.tsx");

export default function requestConjureAppIcon(arg0) {
  const intl = intl2.intl;
  return sendUserMessage(arg0, intl.string(_modDef4091["hOg/Uu"]));
};
