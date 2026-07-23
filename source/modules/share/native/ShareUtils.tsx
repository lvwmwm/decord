// Module ID: 12909
// Function ID: 100181
// Name: _sendShareMessage
// Dependencies: [5, 4468, 4123, 3831, 9314, 7938, 7019, 4665, 4664, 6924, 7923, 6691, 2]
// Exports: sendShareMessage, showInformationToast

// Module 12909 (_sendShareMessage)
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
  let obj = importDefault(3831);
  obj = { key: "INFORMATION_TOAST-" + intl3, content: intl3, icon: importDefault(9314) };
  obj.open(obj);
};
export const sendShareMessage = function sendShareMessage(arg0) {
  return _sendShareMessage(...arguments);
};
