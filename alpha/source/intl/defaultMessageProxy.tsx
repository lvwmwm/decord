// Module ID: 16258
// Function ID: 16259
// Name: defaultMessageProxy
// Dependencies: [1152, 1116, 16259, 16261, 2]

// Module 16258 (defaultMessageProxy)
import _modDef16261 from "module_16261" /* 16261 */;
import module_1152_mod from "module_1152" /* 1152 */;
import "module_1116";
import messagesProxy from "module_16259" /* 16259 */;
import size from "module_2" /* 2 */;

let module_1152 = module_1152_mod;
const chainMessagesObjects = module_1152.chainMessagesObjects;
module_1152 = module_1152_mod;
const chainMessagesObjects2 = module_1152.chainMessagesObjects;
const chainMessagesObjectsResult = chainMessagesObjects(messagesProxy, chainMessagesObjects2(messagesProxy, _modDef16261));
const result = size.fileFinishedImporting("intl/defaultMessageProxy.tsx");

export const _defaultMessages = chainMessagesObjectsResult;
