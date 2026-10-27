// Module ID: 15466
// Function ID: 15467
// Name: defaultMessageProxy
// Dependencies: [1164, 1128, 15467, 15469, 2]

// Module 15466 (defaultMessageProxy)
import _modDef15469 from "module_15469" /* 15469 */;
import module_1164_mod from "module_1164" /* 1164 */;
import "module_1128";
import messagesProxy from "module_15467" /* 15467 */;
import size from "module_2" /* 2 */;

let module_1164 = module_1164_mod;
const chainMessagesObjects = module_1164.chainMessagesObjects;
module_1164 = module_1164_mod;
const chainMessagesObjects2 = module_1164.chainMessagesObjects;
const chainMessagesObjectsResult = chainMessagesObjects(messagesProxy, chainMessagesObjects2(messagesProxy, _modDef15469));
const result = size.fileFinishedImporting("intl/defaultMessageProxy.tsx");

export const _defaultMessages = chainMessagesObjectsResult;
