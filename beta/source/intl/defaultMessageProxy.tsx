// Module ID: 15435
// Function ID: 15436
// Name: defaultMessageProxy
// Dependencies: [1151, 1115, 15436, 15438, 2]

// Module 15435 (defaultMessageProxy)
import _modDef15438 from "module_15438" /* 15438 */;
import module_1151_mod from "module_1151" /* 1151 */;
import "module_1115";
import messagesProxy from "module_15436" /* 15436 */;
import size from "module_2" /* 2 */;

let module_1151 = module_1151_mod;
const chainMessagesObjects = module_1151.chainMessagesObjects;
module_1151 = module_1151_mod;
const chainMessagesObjects2 = module_1151.chainMessagesObjects;
const chainMessagesObjectsResult = chainMessagesObjects(messagesProxy, chainMessagesObjects2(messagesProxy, _modDef15438));
const result = size.fileFinishedImporting("intl/defaultMessageProxy.tsx");

export const _defaultMessages = chainMessagesObjectsResult;
