// Module ID: 15431
// Function ID: 15432
// Name: defaultMessageProxy
// Dependencies: [1151, 1115, 15432, 15434, 2]

// Module 15431 (defaultMessageProxy)
import _modDef15434 from "module_15434" /* 15434 */;
import module_1151_mod from "module_1151" /* 1151 */;
import "module_1115";
import messagesProxy from "module_15432" /* 15432 */;
import size from "module_2" /* 2 */;

let module_1151 = module_1151_mod;
const chainMessagesObjects = module_1151.chainMessagesObjects;
module_1151 = module_1151_mod;
const chainMessagesObjects2 = module_1151.chainMessagesObjects;
const chainMessagesObjectsResult = chainMessagesObjects(messagesProxy, chainMessagesObjects2(messagesProxy, _modDef15434));
const result = size.fileFinishedImporting("intl/defaultMessageProxy.tsx");

export const _defaultMessages = chainMessagesObjectsResult;
