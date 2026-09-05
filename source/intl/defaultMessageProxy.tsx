// Module ID: 14185
// Function ID: 14186
// Name: _defaultMessages
// Dependencies: [1155, 1119, 14186, 2]

// Module 14185 (_defaultMessages)
import set from "set" /* 2 */;
import messagesProxyDefault from "messagesProxy" /* 14186 */;
import module_1155 from "module_1155" /* 1155 */;
import importDefaultResult from "messagesProxy" /* 1119 */;

const chainMessagesObjectsResult = module_1155.chainMessagesObjects(importDefaultResult, messagesProxyDefault);
const result = set.fileFinishedImporting("intl/defaultMessageProxy.tsx");

export const _defaultMessages = chainMessagesObjectsResult;
