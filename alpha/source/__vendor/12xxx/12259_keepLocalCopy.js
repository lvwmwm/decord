// Module ID: 12259
// Function ID: 12260
// Name: keepLocalCopy
// Dependencies: [12260, 12262, 12263, 12264, 12265, 12266, 12268, 12269]

// Module 12259 (keepLocalCopy)
import react_native from "react-native" /* 12260 */;
import react_native2 from "react-native" /* 12262 */;
import react_native3 from "react-native" /* 12263 */;
import errorCodes from "errorCodes" /* 12264 */;
import pickDirectory from "pickDirectory" /* 12265 */;
import pick from "pick" /* 12266 */;
import _mod12268 from "module_12268" /* 12268 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 12269 */;

const errorCodes_export = errorCodes.errorCodes;
const pickDirectory_export = pickDirectory.pickDirectory;
const pick_export = pick.pick;
const releaseLongTermAccess_export = releaseLongTermAccess.releaseLongTermAccess;

export const isKnownType = react_native.isKnownType;
export const keepLocalCopy = react_native2.keepLocalCopy;
export const types = react_native3.types;
export { errorCodes_export as errorCodes };
export const isErrorWithCode = errorCodes.isErrorWithCode;
export { pickDirectory_export as pickDirectory };
export { pick_export as pick };
export const saveDocuments = _mod12268.saveDocuments;
export { releaseLongTermAccess_export as releaseLongTermAccess };
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
