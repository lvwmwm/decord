// Module ID: 13947
// Function ID: 13948
// Name: defaultMessageProxy
// Dependencies: [1165, 1129, 13948, 2]

// Module 13947 (defaultMessageProxy)
import _modDef13948 from "module_13948" /* 13948 */;
import module_1165 from "module_1165" /* 1165 */;
import messagesProxy from "module_1129" /* 1129 */;
import size from "module_2" /* 2 */;

const chainMessagesObjects = module_1165.chainMessagesObjects;
const chainMessagesObjectsResult = chainMessagesObjects(messagesProxy, _modDef13948);
const result = size.fileFinishedImporting("intl/defaultMessageProxy.tsx");

export const _defaultMessages = chainMessagesObjectsResult;
