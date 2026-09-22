// Module ID: 11361
// Function ID: 11362
// Name: keepLocalCopy
// Dependencies: [11362, 11364, 11365, 11366, 11367, 11368, 11370, 11371]

// Module 11361 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 11362 */;
import _mod11364 from "module_11364" /* 11364 */;
import _mod11365 from "module_11365" /* 11365 */;
import errorCodes from "errorCodes" /* 11366 */;
import _pickDirectory from "_pickDirectory" /* 11367 */;
import _pick from "_pick" /* 11368 */;
import _saveDocuments from "_saveDocuments" /* 11370 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11371 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11364.keepLocalCopy;
export const types = _mod11365.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
