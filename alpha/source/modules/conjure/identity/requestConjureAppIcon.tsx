// Module ID: 18437
// Function ID: 18438
// Name: requestConjureAppIcon
// Dependencies: [6878, 1113, 4121, 2]
// Exports: default

// Module 18437 (requestConjureAppIcon)
import intl2 from "intl" /* 1113 */;
import _modDef4121 from "module_4121" /* 4121 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 6878 */;
import size from "module_2" /* 2 */;

const sendUserMessage = ConjureConnectionStore.sendUserMessage;
const result = size.fileFinishedImporting("modules/conjure/identity/requestConjureAppIcon.tsx");

export default function requestConjureAppIcon(arg0) {
  const intl = intl2.intl;
  return sendUserMessage(arg0, intl.string(_modDef4121["hOg/Uu"]));
};
