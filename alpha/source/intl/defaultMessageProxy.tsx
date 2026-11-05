// Module ID: 16271
// Function ID: 16272
// Name: defaultMessageProxy
// Dependencies: [1152, 1116, 16272, 16274, 2]

// Module 16271 (defaultMessageProxy)
import _modDef16274 from "module_16274" /* 16274 */;
import module_1152_mod from "module_1152" /* 1152 */;
import "module_1116";
import messagesProxy from "module_16272" /* 16272 */;
import size from "module_2" /* 2 */;

let module_1152 = module_1152_mod;
const chainMessagesObjects = module_1152.chainMessagesObjects;
module_1152 = module_1152_mod;
const chainMessagesObjects2 = module_1152.chainMessagesObjects;
const chainMessagesObjectsResult = chainMessagesObjects(messagesProxy, chainMessagesObjects2(messagesProxy, _modDef16274));
const result = size.fileFinishedImporting("intl/defaultMessageProxy.tsx");

export const _defaultMessages = chainMessagesObjectsResult;
