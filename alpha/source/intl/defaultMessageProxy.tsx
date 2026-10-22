// Module ID: 15384
// Function ID: 15385
// Name: defaultMessageProxy
// Dependencies: [1167, 1131, 15385, 15387, 2]

// Module 15384 (defaultMessageProxy)
import _modDef15387 from "module_15387" /* 15387 */;
import module_1167_mod from "module_1167" /* 1167 */;
import "module_1131";
import messagesProxy from "module_15385" /* 15385 */;
import size from "module_2" /* 2 */;

let module_1167 = module_1167_mod;
const chainMessagesObjects = module_1167.chainMessagesObjects;
module_1167 = module_1167_mod;
const chainMessagesObjects2 = module_1167.chainMessagesObjects;
const chainMessagesObjectsResult = chainMessagesObjects(messagesProxy, chainMessagesObjects2(messagesProxy, _modDef15387));
const result = size.fileFinishedImporting("intl/defaultMessageProxy.tsx");

export const _defaultMessages = chainMessagesObjectsResult;
