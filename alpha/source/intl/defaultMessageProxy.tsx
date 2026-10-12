// Module ID: 14438
// Function ID: 14439
// Name: defaultMessageProxy
// Dependencies: [1165, 1129, 14439, 2]

// Module 14438 (defaultMessageProxy)
import _modDef14439 from "module_14439" /* 14439 */;
import module_1165 from "module_1165" /* 1165 */;
import messagesProxy from "module_1129" /* 1129 */;
import size from "module_2" /* 2 */;

const chainMessagesObjects = module_1165.chainMessagesObjects;
const chainMessagesObjectsResult = chainMessagesObjects(messagesProxy, _modDef14439);
const result = size.fileFinishedImporting("intl/defaultMessageProxy.tsx");

export const _defaultMessages = chainMessagesObjectsResult;
