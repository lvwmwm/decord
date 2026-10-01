// Module ID: 13676
// Function ID: 13677
// Name: defaultMessageProxy
// Dependencies: [1154, 1118, 13677, 2]

// Module 13676 (defaultMessageProxy)
import _modDef13677 from "module_13677" /* 13677 */;
import module_1154 from "module_1154" /* 1154 */;
import messagesProxy from "module_1118" /* 1118 */;
import size from "module_2" /* 2 */;

const chainMessagesObjects = module_1154.chainMessagesObjects;
const chainMessagesObjectsResult = chainMessagesObjects(messagesProxy, _modDef13677);
const result = size.fileFinishedImporting("intl/defaultMessageProxy.tsx");

export const _defaultMessages = chainMessagesObjectsResult;
