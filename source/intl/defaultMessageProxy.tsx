// Module ID: 13642
// Function ID: 13643
// Name: _defaultMessages
// Dependencies: [1274, 1238, 13643, 2]

// Module 13642 (_defaultMessages)
import set from "set" /* 2 */;
import messagesProxyDefault from "messagesProxy" /* 13643 */;
import module_1274 from "module_1274" /* 1274 */;
import importDefaultResult from "messagesProxy" /* 1238 */;

const chainMessagesObjectsResult = module_1274.chainMessagesObjects(importDefaultResult, messagesProxyDefault);
const result = set.fileFinishedImporting("intl/defaultMessageProxy.tsx");

export const _defaultMessages = chainMessagesObjectsResult;
