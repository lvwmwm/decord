// Module ID: 11250
// Function ID: 11251
// Name: keepLocalCopy
// Dependencies: [11251, 11253, 11254, 11255, 11256, 11257, 11259, 11260]

// Module 11250 (keepLocalCopy)
import react_native from "react-native" /* 11251 */;
import react_native2 from "react-native" /* 11253 */;
import react_native3 from "react-native" /* 11254 */;
import errorCodes from "errorCodes" /* 11255 */;
import pickDirectory from "pickDirectory" /* 11256 */;
import pick from "pick" /* 11257 */;
import _mod11259 from "module_11259" /* 11259 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11260 */;

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
export const saveDocuments = _mod11259.saveDocuments;
export { releaseLongTermAccess_export as releaseLongTermAccess };
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
