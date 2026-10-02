// Module ID: 13678
// Function ID: 13679
// Name: defaultMessageProxy
// Dependencies: [1166, 1130, 13679, 2]

// Module 13678 (defaultMessageProxy)
import _modDef13679 from "module_13679" /* 13679 */;
import module_1166 from "module_1166" /* 1166 */;
import messagesProxy from "module_1130" /* 1130 */;
import size from "module_2" /* 2 */;

const chainMessagesObjects = module_1166.chainMessagesObjects;
const chainMessagesObjectsResult = chainMessagesObjects(messagesProxy, _modDef13679);
const result = size.fileFinishedImporting("intl/defaultMessageProxy.tsx");

export const _defaultMessages = chainMessagesObjectsResult;
