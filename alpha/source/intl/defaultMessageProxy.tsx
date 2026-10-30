// Module ID: 15968
// Function ID: 15969
// Name: defaultMessageProxy
// Dependencies: [1153, 1117, 15969, 15971, 2]

// Module 15968 (defaultMessageProxy)
import _modDef15971 from "module_15971" /* 15971 */;
import module_1153_mod from "module_1153" /* 1153 */;
import "module_1117";
import messagesProxy from "module_15969" /* 15969 */;
import size from "module_2" /* 2 */;

let module_1153 = module_1153_mod;
const chainMessagesObjects = module_1153.chainMessagesObjects;
module_1153 = module_1153_mod;
const chainMessagesObjects2 = module_1153.chainMessagesObjects;
const chainMessagesObjectsResult = chainMessagesObjects(messagesProxy, chainMessagesObjects2(messagesProxy, _modDef15971));
const result = size.fileFinishedImporting("intl/defaultMessageProxy.tsx");

export const _defaultMessages = chainMessagesObjectsResult;
