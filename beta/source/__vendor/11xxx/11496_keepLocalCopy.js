// Module ID: 11496
// Function ID: 11497
// Name: keepLocalCopy
// Dependencies: [11497, 11499, 11500, 11501, 11502, 11503, 11505, 11506]

// Module 11496 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 11497 */;
import _mod11499 from "module_11499" /* 11499 */;
import _mod11500 from "module_11500" /* 11500 */;
import errorCodes from "errorCodes" /* 11501 */;
import _pickDirectory from "_pickDirectory" /* 11502 */;
import _pick from "_pick" /* 11503 */;
import _saveDocuments from "_saveDocuments" /* 11505 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11506 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11499.keepLocalCopy;
export const types = _mod11500.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
