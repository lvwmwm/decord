// Module ID: 12972
// Function ID: 100631
// Name: _sendShareMessage
// Dependencies: [5, 4469, 4124, 3832, 9243, 6134, 6036, 4666, 4665, 5914, 5672, 5685, 2]
// Exports: sendShareMessage, showInformationToast

// Module 12972 (_sendShareMessage)
import dispatcher from "dispatcher";
import { DraftType } from "_isNativeReflectConstruct";
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";

const require = arg1;
function _sendShareMessage() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("MESSAGE_GROUP_SPACING").fileFinishedImporting("modules/share/native/ShareUtils.tsx");

export const showInformationToast = function showInformationToast(intl3) {
  let obj = importDefault(3832);
  obj = { key: "INFORMATION_TOAST-" + intl3, content: intl3, icon: importDefault(9243) };
  obj.open(obj);
};
export const sendShareMessage = function sendShareMessage(arg0) {
  return _sendShareMessage(...arguments);
};
