// Module ID: 18308
// Function ID: 18309
// Name: requestConjureAppIcon
// Dependencies: [7563, 1112, 4192, 2]
// Exports: default

// Module 18308 (requestConjureAppIcon)
import intl2 from "intl" /* 1112 */;
import _modDef4192 from "module_4192" /* 4192 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 7563 */;
import size from "module_2" /* 2 */;

const sendUserMessage = ConjureConnectionStore.sendUserMessage;
const result = size.fileFinishedImporting("modules/conjure/identity/requestConjureAppIcon.tsx");

export default function requestConjureAppIcon(arg0) {
  const intl = intl2.intl;
  return sendUserMessage(arg0, intl.string(_modDef4192["hOg/Uu"]));
};
