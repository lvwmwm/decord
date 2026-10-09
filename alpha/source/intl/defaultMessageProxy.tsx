// Module ID: 14361
// Function ID: 14362
// Name: defaultMessageProxy
// Dependencies: [1165, 1129, 14362, 2]

// Module 14361 (defaultMessageProxy)
import _modDef14362 from "module_14362" /* 14362 */;
import module_1165 from "module_1165" /* 1165 */;
import messagesProxy from "module_1129" /* 1129 */;
import size from "module_2" /* 2 */;

const chainMessagesObjects = module_1165.chainMessagesObjects;
const chainMessagesObjectsResult = chainMessagesObjects(messagesProxy, _modDef14362);
const result = size.fileFinishedImporting("intl/defaultMessageProxy.tsx");

export const _defaultMessages = chainMessagesObjectsResult;
