// Module ID: 14797
// Function ID: 14798
// Name: defaultMessageProxy
// Dependencies: [1165, 1129, 14798, 2]

// Module 14797 (defaultMessageProxy)
import _modDef14798 from "module_14798" /* 14798 */;
import module_1165 from "module_1165" /* 1165 */;
import messagesProxy from "module_1129" /* 1129 */;
import size from "module_2" /* 2 */;

const chainMessagesObjects = module_1165.chainMessagesObjects;
const chainMessagesObjectsResult = chainMessagesObjects(messagesProxy, _modDef14798);
const result = size.fileFinishedImporting("intl/defaultMessageProxy.tsx");

export const _defaultMessages = chainMessagesObjectsResult;
