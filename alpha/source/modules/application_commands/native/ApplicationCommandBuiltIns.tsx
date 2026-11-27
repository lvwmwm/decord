// Module ID: 10058
// Function ID: 10059
// Name: application_commands/ApplicationCommandBuiltIns
// Dependencies: [4985, 1387, 7073, 2118, 5695, 1112, 5659, 10059, 7847, 8245, 2]

// Module 10058 (application_commands/ApplicationCommandBuiltIns)
import Server from "Server" /* 2118 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 5695 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 7073 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7847 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 8245 */;
import RelationshipStore from "RelationshipStore" /* 4985 */;
import UserStore from "UserStore" /* 1387 */;
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
      const obj4 = channel(5659);
      const channelName = obj4.computeChannelName(channel, UserStore, RelationshipStore);
      const intl5 = channel(1112).intl;
      const obj2 = { name: channelName };
      const formatToPlainStringResult = intl5.formatToPlainString(channel(1112).t.hJ5Ap4, obj2);
      const intl6 = channel(1112).intl;
      const obj3 = { name: channelName };
      let formatResult1 = intl6.format(channel(1112).t.SSIVOu, obj3);
      let formatToPlainStringResult1 = formatToPlainStringResult;
      intl6.format(channel(1112).t.SSIVOu, obj3);
      if (channel.isManaged()) {
        let intl = tmp5(1112).intl;
        let obj = { name: channelName };
        formatToPlainStringResult1 = intl.formatToPlainString(tmp5(1112).t.hVGjEW, obj);
        const intl2 = tmp5(1112).intl;
        const obj5 = { name: channelName };
        formatResult1 = intl2.format(tmp5(1112).t.IK1Qvs, obj5);
      }
      const obj6 = {
        title: formatToPlainStringResult1,
        body: formatResult1,
        confirmText: intl3.string(channel(1112).t["26C4oi"]),
        cancelText: intl4.string(channel(1112).t["ETE/oC"]),
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
      const openLeaveGroupDMConfirmationAlert = channel(10059).openLeaveGroupDMConfirmationAlert;
      channel(10059);
      intl3 = tmp5(1112).intl;
      intl4 = tmp5(1112).intl;
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
