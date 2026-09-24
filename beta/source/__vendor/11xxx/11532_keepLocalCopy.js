// Module ID: 11532
// Function ID: 11533
// Name: keepLocalCopy
// Dependencies: [11533, 11535, 11536, 11537, 11538, 11539, 11541, 11542]

// Module 11532 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 11533 */;
import _mod11535 from "module_11535" /* 11535 */;
import _mod11536 from "module_11536" /* 11536 */;
import errorCodes from "errorCodes" /* 11537 */;
import _pickDirectory from "_pickDirectory" /* 11538 */;
import _pick from "_pick" /* 11539 */;
import _saveDocuments from "_saveDocuments" /* 11541 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11542 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11535.keepLocalCopy;
export const types = _mod11536.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
