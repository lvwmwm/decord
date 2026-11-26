// Module ID: 18482
// Function ID: 18483
// Name: requestConjureAppIcon
// Dependencies: [7693, 1112, 4245, 2]
// Exports: default

// Module 18482 (requestConjureAppIcon)
import intl2 from "intl" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 7693 */;
import size from "module_2" /* 2 */;

const sendUserMessage = ConjureConnectionStore.sendUserMessage;
const result = size.fileFinishedImporting("modules/conjure/identity/requestConjureAppIcon.tsx");

export default function requestConjureAppIcon(arg0) {
  const intl = intl2.intl;
  return sendUserMessage(arg0, intl.string(_modDef4245["hOg/Uu"]));
};
