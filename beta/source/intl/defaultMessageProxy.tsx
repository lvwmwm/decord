// Module ID: 16358
// Function ID: 16359
// Name: defaultMessageProxy
// Dependencies: [1152, 1116, 16359, 16361, 2]

// Module 16358 (defaultMessageProxy)
import _modDef16361 from "module_16361" /* 16361 */;
import module_1152_mod from "module_1152" /* 1152 */;
import "module_1116";
import messagesProxy from "module_16359" /* 16359 */;
import size from "module_2" /* 2 */;

let module_1152 = module_1152_mod;
const chainMessagesObjects = module_1152.chainMessagesObjects;
module_1152 = module_1152_mod;
const chainMessagesObjects2 = module_1152.chainMessagesObjects;
const chainMessagesObjectsResult = chainMessagesObjects(messagesProxy, chainMessagesObjects2(messagesProxy, _modDef16361));
const result = size.fileFinishedImporting("intl/defaultMessageProxy.tsx");

export const _defaultMessages = chainMessagesObjectsResult;
