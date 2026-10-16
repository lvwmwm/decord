// Module ID: 14443
// Function ID: 14444
// Name: defaultMessageProxy
// Dependencies: [1165, 1129, 14444, 2]

// Module 14443 (defaultMessageProxy)
import _modDef14444 from "module_14444" /* 14444 */;
import module_1165 from "module_1165" /* 1165 */;
import messagesProxy from "module_1129" /* 1129 */;
import size from "module_2" /* 2 */;

const chainMessagesObjects = module_1165.chainMessagesObjects;
const chainMessagesObjectsResult = chainMessagesObjects(messagesProxy, _modDef14444);
const result = size.fileFinishedImporting("intl/defaultMessageProxy.tsx");

export const _defaultMessages = chainMessagesObjectsResult;
