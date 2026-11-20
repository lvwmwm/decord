// Module ID: 10328
// Function ID: 10329
// Name: application_commands/ApplicationCommandBuiltIns
// Dependencies: [4736, 1386, 5818, 2117, 5446, 1112, 5410, 10329, 7617, 8130, 2]

// Module 10328 (application_commands/ApplicationCommandBuiltIns)
import Server from "Server" /* 2117 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 5446 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 5818 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7617 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 8130 */;
import RelationshipStore from "RelationshipStore" /* 4736 */;
import UserStore from "UserStore" /* 1386 */;
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
      const obj4 = channel(5410);
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
      const openLeaveGroupDMConfirmationAlert = channel(10329).openLeaveGroupDMConfirmationAlert;
      channel(10329);
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
