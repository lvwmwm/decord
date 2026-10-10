// Module ID: 14415
// Function ID: 14416
// Name: defaultMessageProxy
// Dependencies: [1165, 1129, 14416, 2]

// Module 14415 (defaultMessageProxy)
import _modDef14416 from "module_14416" /* 14416 */;
import module_1165 from "module_1165" /* 1165 */;
import messagesProxy from "module_1129" /* 1129 */;
import size from "module_2" /* 2 */;

const chainMessagesObjects = module_1165.chainMessagesObjects;
const chainMessagesObjectsResult = chainMessagesObjects(messagesProxy, _modDef14416);
const result = size.fileFinishedImporting("intl/defaultMessageProxy.tsx");

export const _defaultMessages = chainMessagesObjectsResult;
