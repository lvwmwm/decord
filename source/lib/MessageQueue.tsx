// Module ID: 7075
// Function ID: 56580
// Name: _isNativeReflectConstruct
// Dependencies: [29, 6, 7, 15, 17, 102, 18, 4129, 1194, 4222, 653, 4123, 664, 3, 507, 4324, 7076, 6695, 1881, 44, 4664, 4666, 4670, 7077, 2]
// Exports: getFailedMessageId, isMessageDataCommand

// Module 7075 (_isNativeReflectConstruct)
import _objectWithoutProperties from "_objectWithoutProperties";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import receiveNetworkInfoformation from "receiveNetworkInfoformation";
import _get from "_get";
import PermissionOverwriteType from "PermissionOverwriteType";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import ME from "ME";
import { MESSAGE_HTTP_TIMEOUT_RETRY_OPTIONS as closure_18 } from "MESSAGE_GROUP_SPACING";
import tmp3 from "Queue";

let closure_15;
let closure_16;
let closure_17;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function isMessageDataSend(type) {
  let tmp = type.type === obj.SEND;
  if (!tmp) {
    tmp = type.type === obj.SEND_ANNOUNCEMENT;
  }
  return tmp;
}
function isMessageDataEdit(messageData) {
  return messageData.type === obj.EDIT;
}
let closure_3 = ["channelId", "analyticsLocation"];
let closure_4 = ["channelId", "analyticsLocation"];
({ AbortCodes: closure_15, Endpoints: closure_16, AnalyticEvents: closure_17 } = ME);
let obj = { SEND: 0, [0]: "SEND", EDIT: 1, [1]: "EDIT", COMMAND: 2, [2]: "COMMAND", SEND_ANNOUNCEMENT: 3, [3]: "SEND_ANNOUNCEMENT" };
let items = [require("set").Millis.MINUTE, 5 * require("set").Millis.MINUTE];
tmp3 = new tmp3();
let result = require("_defineProperties").fileFinishedImporting("lib/MessageQueue.tsx");

export default tmp3;
export const MessageDataType = obj;
export { isMessageDataSend };
export { isMessageDataEdit };
export const isMessageDataCommand = function isMessageDataCommand(type) {
  return type.type === obj.COMMAND;
};
export const getFailedMessageId = function getFailedMessageId(messageData) {
  if (isMessageDataSend(messageData)) {
    let id = messageData.message.nonce;
  } else {
    const message = messageData.message;
    if (isMessageDataEdit(messageData)) {
      id = message.messageId;
    } else {
      id = message.data.id;
    }
  }
  return id;
};
