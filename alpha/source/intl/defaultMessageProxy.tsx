// Module ID: 16514
// Function ID: 16515
// Name: defaultMessageProxy
// Dependencies: [1152, 1116, 16515, 16517, 2]

// Module 16514 (defaultMessageProxy)
import _modDef16517 from "module_16517" /* 16517 */;
import module_1152_mod from "module_1152" /* 1152 */;
import "module_1116";
import messagesProxy from "module_16515" /* 16515 */;
import size from "module_2" /* 2 */;

let module_1152 = module_1152_mod;
const chainMessagesObjects = module_1152.chainMessagesObjects;
module_1152 = module_1152_mod;
const chainMessagesObjects2 = module_1152.chainMessagesObjects;
const chainMessagesObjectsResult = chainMessagesObjects(messagesProxy, chainMessagesObjects2(messagesProxy, _modDef16517));
const result = size.fileFinishedImporting("intl/defaultMessageProxy.tsx");

export const _defaultMessages = chainMessagesObjectsResult;
