// Module ID: 14566
// Function ID: 14567
// Name: requestConjureAppIcon
// Dependencies: [7375, 1113, 4133, 2]
// Exports: default

// Module 14566 (requestConjureAppIcon)
import intl2 from "intl" /* 1113 */;
import _modDef4133 from "module_4133" /* 4133 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 7375 */;
import size from "module_2" /* 2 */;

const sendUserMessage = ConjureConnectionStore.sendUserMessage;
const result = size.fileFinishedImporting("modules/conjure/identity/requestConjureAppIcon.tsx");

export default function requestConjureAppIcon(arg0) {
  const intl = intl2.intl;
  return sendUserMessage(arg0, intl.string(_modDef4133["hOg/Uu"]));
};
