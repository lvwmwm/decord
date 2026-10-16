// Module ID: 15126
// Function ID: 15127
// Name: defaultMessageProxy
// Dependencies: [1167, 1131, 15127, 15129, 2]

// Module 15126 (defaultMessageProxy)
import _modDef15129 from "module_15129" /* 15129 */;
import module_1167_mod from "module_1167" /* 1167 */;
import "module_1131";
import messagesProxy from "module_15127" /* 15127 */;
import size from "module_2" /* 2 */;

let module_1167 = module_1167_mod;
const chainMessagesObjects = module_1167.chainMessagesObjects;
module_1167 = module_1167_mod;
const chainMessagesObjects2 = module_1167.chainMessagesObjects;
const chainMessagesObjectsResult = chainMessagesObjects(messagesProxy, chainMessagesObjects2(messagesProxy, _modDef15129));
const result = size.fileFinishedImporting("intl/defaultMessageProxy.tsx");

export const _defaultMessages = chainMessagesObjectsResult;
