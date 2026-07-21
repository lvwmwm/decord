// Module ID: 12788
// Function ID: 97992
// Name: _sendShareMessage
// Dependencies: []
// Exports: sendShareMessage, showInformationToast

// Module 12788 (_sendShareMessage)
function _sendShareMessage() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _sendShareMessage = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
const DraftType = arg1(dependencyMap[1]).DraftType;
const MessageSendLocation = arg1(dependencyMap[2]).MessageSendLocation;
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/share/native/ShareUtils.tsx");

export const showInformationToast = function showInformationToast(intl3) {
  let obj = importDefault(dependencyMap[3]);
  obj = { key: "INFORMATION_TOAST-" + intl3, content: intl3, icon: importDefault(dependencyMap[4]) };
  obj.open(obj);
};
export const sendShareMessage = function sendShareMessage(arg0) {
  return _sendShareMessage(...arguments);
};
