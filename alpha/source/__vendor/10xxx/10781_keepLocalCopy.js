// Module ID: 10781
// Function ID: 10782
// Name: keepLocalCopy
// Dependencies: [10782, 10784, 10785, 10786, 10787, 10788, 10790, 10791]

// Module 10781 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 10782 */;
import _mod10784 from "module_10784" /* 10784 */;
import _mod10785 from "module_10785" /* 10785 */;
import errorCodes from "errorCodes" /* 10786 */;
import _pickDirectory from "_pickDirectory" /* 10787 */;
import _pick from "_pick" /* 10788 */;
import _saveDocuments from "_saveDocuments" /* 10790 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 10791 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod10784.keepLocalCopy;
export const types = _mod10785.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
