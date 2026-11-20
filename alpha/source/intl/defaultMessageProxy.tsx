// Module ID: 15300
// Function ID: 15301
// Name: defaultMessageProxy
// Dependencies: [1151, 1115, 15301, 15303, 2]

// Module 15300 (defaultMessageProxy)
import _modDef15303 from "module_15303" /* 15303 */;
import module_1151_mod from "module_1151" /* 1151 */;
import "module_1115";
import messagesProxy from "module_15301" /* 15301 */;
import size from "module_2" /* 2 */;

let module_1151 = module_1151_mod;
const chainMessagesObjects = module_1151.chainMessagesObjects;
module_1151 = module_1151_mod;
const chainMessagesObjects2 = module_1151.chainMessagesObjects;
const chainMessagesObjectsResult = chainMessagesObjects(messagesProxy, chainMessagesObjects2(messagesProxy, _modDef15303));
const result = size.fileFinishedImporting("intl/defaultMessageProxy.tsx");

export const _defaultMessages = chainMessagesObjectsResult;
