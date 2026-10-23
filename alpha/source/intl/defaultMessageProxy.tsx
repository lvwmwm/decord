// Module ID: 15405
// Function ID: 15406
// Name: defaultMessageProxy
// Dependencies: [1167, 1131, 15406, 15408, 2]

// Module 15405 (defaultMessageProxy)
import _modDef15408 from "module_15408" /* 15408 */;
import module_1167_mod from "module_1167" /* 1167 */;
import "module_1131";
import messagesProxy from "module_15406" /* 15406 */;
import size from "module_2" /* 2 */;

let module_1167 = module_1167_mod;
const chainMessagesObjects = module_1167.chainMessagesObjects;
module_1167 = module_1167_mod;
const chainMessagesObjects2 = module_1167.chainMessagesObjects;
const chainMessagesObjectsResult = chainMessagesObjects(messagesProxy, chainMessagesObjects2(messagesProxy, _modDef15408));
const result = size.fileFinishedImporting("intl/defaultMessageProxy.tsx");

export const _defaultMessages = chainMessagesObjectsResult;
