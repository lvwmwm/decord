// Module ID: 15928
// Function ID: 15929
// Name: defaultMessageProxy
// Dependencies: [1164, 1128, 15929, 15931, 2]

// Module 15928 (defaultMessageProxy)
import _modDef15931 from "module_15931" /* 15931 */;
import module_1164_mod from "module_1164" /* 1164 */;
import "module_1128";
import messagesProxy from "module_15929" /* 15929 */;
import size from "module_2" /* 2 */;

let module_1164 = module_1164_mod;
const chainMessagesObjects = module_1164.chainMessagesObjects;
module_1164 = module_1164_mod;
const chainMessagesObjects2 = module_1164.chainMessagesObjects;
const chainMessagesObjectsResult = chainMessagesObjects(messagesProxy, chainMessagesObjects2(messagesProxy, _modDef15931));
const result = size.fileFinishedImporting("intl/defaultMessageProxy.tsx");

export const _defaultMessages = chainMessagesObjectsResult;
