// Module ID: 15421
// Function ID: 15422
// Name: defaultMessageProxy
// Dependencies: [1151, 1115, 15422, 15424, 2]

// Module 15421 (defaultMessageProxy)
import _modDef15424 from "module_15424" /* 15424 */;
import module_1151_mod from "module_1151" /* 1151 */;
import "module_1115";
import messagesProxy from "module_15422" /* 15422 */;
import size from "module_2" /* 2 */;

let module_1151 = module_1151_mod;
const chainMessagesObjects = module_1151.chainMessagesObjects;
module_1151 = module_1151_mod;
const chainMessagesObjects2 = module_1151.chainMessagesObjects;
const chainMessagesObjectsResult = chainMessagesObjects(messagesProxy, chainMessagesObjects2(messagesProxy, _modDef15424));
const result = size.fileFinishedImporting("intl/defaultMessageProxy.tsx");

export const _defaultMessages = chainMessagesObjectsResult;
