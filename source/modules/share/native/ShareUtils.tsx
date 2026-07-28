// Module ID: 13017
// Function ID: 100809
// Name: _sendShareMessage
// Dependencies: [5, 4503, 4158, 3866, 9287, 6168, 6070, 4700, 4699, 5948, 5682, 5695, 2]
// Exports: sendShareMessage, showInformationToast

// Module 13017 (_sendShareMessage)
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
  let obj = importDefault(3866);
  obj = { key: "INFORMATION_TOAST-" + intl3, content: intl3, icon: importDefault(9287) };
  obj.open(obj);
};
export const sendShareMessage = function sendShareMessage(arg0) {
  return _sendShareMessage(...arguments);
};
