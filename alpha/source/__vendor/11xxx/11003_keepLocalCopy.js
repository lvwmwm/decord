// Module ID: 11003
// Function ID: 11004
// Name: keepLocalCopy
// Dependencies: [11004, 11006, 11007, 11008, 11009, 11010, 11012, 11013]

// Module 11003 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 11004 */;
import _mod11006 from "module_11006" /* 11006 */;
import _mod11007 from "module_11007" /* 11007 */;
import errorCodes from "errorCodes" /* 11008 */;
import _pickDirectory from "_pickDirectory" /* 11009 */;
import _pick from "_pick" /* 11010 */;
import _saveDocuments from "_saveDocuments" /* 11012 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11013 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11006.keepLocalCopy;
export const types = _mod11007.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
