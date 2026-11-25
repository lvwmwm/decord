// Module ID: 18420
// Function ID: 18421
// Name: requestConjureAppIcon
// Dependencies: [7662, 1112, 4244, 2]
// Exports: default

// Module 18420 (requestConjureAppIcon)
import intl2 from "intl" /* 1112 */;
import _modDef4244 from "module_4244" /* 4244 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 7662 */;
import size from "module_2" /* 2 */;

const sendUserMessage = ConjureConnectionStore.sendUserMessage;
const result = size.fileFinishedImporting("modules/conjure/identity/requestConjureAppIcon.tsx");

export default function requestConjureAppIcon(arg0) {
  const intl = intl2.intl;
  return sendUserMessage(arg0, intl.string(_modDef4244["hOg/Uu"]));
};
