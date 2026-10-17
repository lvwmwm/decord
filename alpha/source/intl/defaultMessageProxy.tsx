// Module ID: 15205
// Function ID: 15206
// Name: defaultMessageProxy
// Dependencies: [1167, 1131, 15206, 15208, 2]

// Module 15205 (defaultMessageProxy)
import _modDef15208 from "module_15208" /* 15208 */;
import module_1167_mod from "module_1167" /* 1167 */;
import "module_1131";
import messagesProxy from "module_15206" /* 15206 */;
import size from "module_2" /* 2 */;

let module_1167 = module_1167_mod;
const chainMessagesObjects = module_1167.chainMessagesObjects;
module_1167 = module_1167_mod;
const chainMessagesObjects2 = module_1167.chainMessagesObjects;
const chainMessagesObjectsResult = chainMessagesObjects(messagesProxy, chainMessagesObjects2(messagesProxy, _modDef15208));
const result = size.fileFinishedImporting("intl/defaultMessageProxy.tsx");

export const _defaultMessages = chainMessagesObjectsResult;
