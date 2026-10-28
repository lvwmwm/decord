// Module ID: 15692
// Function ID: 15693
// Name: defaultMessageProxy
// Dependencies: [1164, 1128, 15693, 15695, 2]

// Module 15692 (defaultMessageProxy)
import _modDef15695 from "module_15695" /* 15695 */;
import module_1164_mod from "module_1164" /* 1164 */;
import "module_1128";
import messagesProxy from "module_15693" /* 15693 */;
import size from "module_2" /* 2 */;

let module_1164 = module_1164_mod;
const chainMessagesObjects = module_1164.chainMessagesObjects;
module_1164 = module_1164_mod;
const chainMessagesObjects2 = module_1164.chainMessagesObjects;
const chainMessagesObjectsResult = chainMessagesObjects(messagesProxy, chainMessagesObjects2(messagesProxy, _modDef15695));
const result = size.fileFinishedImporting("intl/defaultMessageProxy.tsx");

export const _defaultMessages = chainMessagesObjectsResult;
