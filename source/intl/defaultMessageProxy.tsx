// Module ID: 14099
// Function ID: 14100
// Name: _defaultMessages
// Dependencies: [1273, 1237, 14100, 2]

// Module 14099 (_defaultMessages)
import set from "set" /* 2 */;
import messagesProxyDefault from "messagesProxy" /* 14100 */;
import module_1273 from "module_1273" /* 1273 */;
import importDefaultResult from "messagesProxy" /* 1237 */;

const chainMessagesObjectsResult = module_1273.chainMessagesObjects(importDefaultResult, messagesProxyDefault);
const result = set.fileFinishedImporting("intl/defaultMessageProxy.tsx");

export const _defaultMessages = chainMessagesObjectsResult;
