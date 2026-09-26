// Module ID: 11519
// Function ID: 11520
// Name: keepLocalCopy
// Dependencies: [11520, 11522, 11523, 11524, 11525, 11526, 11528, 11529]

// Module 11519 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 11520 */;
import _mod11522 from "module_11522" /* 11522 */;
import _mod11523 from "module_11523" /* 11523 */;
import errorCodes from "errorCodes" /* 11524 */;
import _pickDirectory from "_pickDirectory" /* 11525 */;
import _pick from "_pick" /* 11526 */;
import _saveDocuments from "_saveDocuments" /* 11528 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11529 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11522.keepLocalCopy;
export const types = _mod11523.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
