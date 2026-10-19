// Module ID: 11600
// Function ID: 11601
// Name: keepLocalCopy
// Dependencies: [11601, 11603, 11604, 11605, 11606, 11607, 11609, 11610]

// Module 11600 (keepLocalCopy)
import react_native from "react-native" /* 11601 */;
import react_native2 from "react-native" /* 11603 */;
import react_native3 from "react-native" /* 11604 */;
import errorCodes from "errorCodes" /* 11605 */;
import pickDirectory from "pickDirectory" /* 11606 */;
import pick from "pick" /* 11607 */;
import _mod11609 from "module_11609" /* 11609 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11610 */;

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
export const saveDocuments = _mod11609.saveDocuments;
export { releaseLongTermAccess_export as releaseLongTermAccess };
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
