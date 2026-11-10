// Module ID: 9772
// Function ID: 9773
// Name: application_commands/ApplicationCommandBuiltIns
// Dependencies: [4956, 1383, 6035, 1992, 5683, 1113, 5652, 9773, 7485, 7636, 2]

// Module 9772 (application_commands/ApplicationCommandBuiltIns)
import Server from "Server" /* 1992 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 5683 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 6035 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7485 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7636 */;
import RelationshipStore from "RelationshipStore" /* 4956 */;
import UserStore from "UserStore" /* 1383 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let BuiltInSectionId;
let obj = {
  id: "-15",
  untranslatedName: "leave",
  displayName: "leave",
  type: Server.ApplicationCommandType.CHAT,
  inputType: ApplicationCommandTypes.ApplicationCommandInputType.BUILT_IN,
  applicationId: BuiltInSectionId.BUILT_IN,
  predicate(channel) {
    channel = channel.channel;
    const tmp = null != channel && channel.isGroupDM();
    return tmp;
  },
  execute(arg0, channel) {
    let intl3;
    let intl4;
    channel = channel.channel;
    if (null != channel) {
      const obj4 = channel(5652);
      const channelName = obj4.computeChannelName(channel, UserStore, RelationshipStore);
      const intl5 = channel(1113).intl;
      const obj2 = { name: channelName };
      const formatToPlainStringResult = intl5.formatToPlainString(channel(1113).t.hJ5Ap4, obj2);
      const intl6 = channel(1113).intl;
      const obj3 = { name: channelName };
      let formatResult1 = intl6.format(channel(1113).t.SSIVOu, obj3);
      let formatToPlainStringResult1 = formatToPlainStringResult;
      intl6.format(channel(1113).t.SSIVOu, obj3);
      if (channel.isManaged()) {
        let intl = tmp5(1113).intl;
        let obj = { name: channelName };
        formatToPlainStringResult1 = intl.formatToPlainString(tmp5(1113).t.hVGjEW, obj);
        const intl2 = tmp5(1113).intl;
        const obj5 = { name: channelName };
        formatResult1 = intl2.format(tmp5(1113).t.IK1Qvs, obj5);
      }
      const obj6 = {
        title: formatToPlainStringResult1,
        body: formatResult1,
        confirmText: intl3.string(channel(1113).t["26C4oi"]),
        cancelText: intl4.string(channel(1113).t["ETE/oC"]),
        onConfirm(arg0) {
            try {
              const obj = ChannelActionCreatorsDefault;
              obj.closePrivateChannel(channel.id, undefined, arg0);
            } catch (err) {
              const sendBotMessage = MessageActionCreatorsDefault.sendBotMessage;
              const id = channel.id;
              MessageActionCreatorsDefault;
              const intl = require("intl").intl;
              sendBotMessage(id, intl.string(require("intl").t["YOsuT/"]));
            }
          }
      };
      const openLeaveGroupDMConfirmationAlert = channel(9773).openLeaveGroupDMConfirmationAlert;
      channel(9773);
      intl3 = tmp5(1113).intl;
      intl4 = tmp5(1113).intl;
      const result = openLeaveGroupDMConfirmationAlert(obj6);
    }
  }
};
BuiltInSectionId = ApplicationCommandConstants.BuiltInSectionId;
Object.defineProperty(obj, "untranslatedDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t["26C4oi"]);
  },
  set: undefined
});
Object.defineProperty(obj, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t["26C4oi"]);
  },
  set: undefined
});
const items = [obj];
let result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandBuiltIns.tsx");

export default items;
