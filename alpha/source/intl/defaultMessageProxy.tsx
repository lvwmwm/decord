// Module ID: 15336
// Function ID: 15337
// Name: defaultMessageProxy
// Dependencies: [1152, 1116, 15337, 15339, 2]

// Module 15336 (defaultMessageProxy)
import _modDef15339 from "module_15339" /* 15339 */;
import module_1152_mod from "module_1152" /* 1152 */;
import "module_1116";
import messagesProxy from "module_15337" /* 15337 */;
import size from "module_2" /* 2 */;

let module_1152 = module_1152_mod;
const chainMessagesObjects = module_1152.chainMessagesObjects;
module_1152 = module_1152_mod;
const chainMessagesObjects2 = module_1152.chainMessagesObjects;
const chainMessagesObjectsResult = chainMessagesObjects(messagesProxy, chainMessagesObjects2(messagesProxy, _modDef15339));
const result = size.fileFinishedImporting("intl/defaultMessageProxy.tsx");

export const _defaultMessages = chainMessagesObjectsResult;
