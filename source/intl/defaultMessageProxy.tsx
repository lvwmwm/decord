// Module ID: 13761
// Function ID: 13762
// Name: _defaultMessages
// Dependencies: [1274, 1238, 13762, 2]

// Module 13761 (_defaultMessages)
import set from "set" /* 2 */;
import messagesProxyDefault from "messagesProxy" /* 13762 */;
import module_1274 from "module_1274" /* 1274 */;
import importDefaultResult from "messagesProxy" /* 1238 */;

const chainMessagesObjectsResult = module_1274.chainMessagesObjects(importDefaultResult, messagesProxyDefault);
const result = set.fileFinishedImporting("intl/defaultMessageProxy.tsx");

export const _defaultMessages = chainMessagesObjectsResult;
