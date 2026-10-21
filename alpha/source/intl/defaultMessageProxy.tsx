// Module ID: 15327
// Function ID: 15328
// Name: defaultMessageProxy
// Dependencies: [1167, 1131, 15328, 15330, 2]

// Module 15327 (defaultMessageProxy)
import _modDef15330 from "module_15330" /* 15330 */;
import module_1167_mod from "module_1167" /* 1167 */;
import "module_1131";
import messagesProxy from "module_15328" /* 15328 */;
import size from "module_2" /* 2 */;

let module_1167 = module_1167_mod;
const chainMessagesObjects = module_1167.chainMessagesObjects;
module_1167 = module_1167_mod;
const chainMessagesObjects2 = module_1167.chainMessagesObjects;
const chainMessagesObjectsResult = chainMessagesObjects(messagesProxy, chainMessagesObjects2(messagesProxy, _modDef15330));
const result = size.fileFinishedImporting("intl/defaultMessageProxy.tsx");

export const _defaultMessages = chainMessagesObjectsResult;
