// Module ID: 11100
// Function ID: 11101
// Name: keepLocalCopy
// Dependencies: [11101, 11103, 11104, 11105, 11106, 11107, 11109, 11110]

// Module 11100 (keepLocalCopy)
import react_native from "react-native" /* 11101 */;
import react_native2 from "react-native" /* 11103 */;
import react_native3 from "react-native" /* 11104 */;
import errorCodes from "errorCodes" /* 11105 */;
import pickDirectory from "pickDirectory" /* 11106 */;
import pick from "pick" /* 11107 */;
import _mod11109 from "module_11109" /* 11109 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11110 */;

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
export const saveDocuments = _mod11109.saveDocuments;
export { releaseLongTermAccess_export as releaseLongTermAccess };
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
