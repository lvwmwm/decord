// Module ID: 8600
// Function ID: 8601
// Name: application_commands/ApplicationCommandBuiltIns
// Dependencies: [4482, 1378, 5306, 1985, 6947, 1127, 4990, 5204, 4850, 6880, 2]

// Module 8600 (application_commands/ApplicationCommandBuiltIns)
import Server from "Server" /* 1985 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4850 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5204 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 5306 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 6880 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 6947 */;
import RelationshipStore from "RelationshipStore" /* 4482 */;
import UserStore from "UserStore" /* 1378 */;
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
      const obj4 = channel(4990);
      const channelName = obj4.computeChannelName(channel, UserStore, RelationshipStore);
      const intl5 = channel(1127).intl;
      const obj2 = { name: channelName };
      const formatToPlainStringResult = intl5.formatToPlainString(channel(1127).t.hJ5Ap4, obj2);
      const intl6 = channel(1127).intl;
      const obj3 = { name: channelName };
      let formatResult = intl6.format(channel(1127).t.SSIVOu, obj3);
      let formatToPlainStringResult1 = formatToPlainStringResult;
      if (channel.isManaged()) {
        let intl = tmp6(1127).intl;
        let obj = { name: channelName };
        formatToPlainStringResult1 = intl.formatToPlainString(tmp6(1127).t.hVGjEW, obj);
        const intl2 = tmp6(1127).intl;
        const obj5 = { name: channelName };
        formatResult = intl2.format(tmp6(1127).t.IK1Qvs, obj5);
      }
      const obj6 = {
        title: formatToPlainStringResult1,
        body: formatResult,
        confirmText: intl3.string(channel(1127).t["26C4oi"]),
        cancelText: intl4.string(channel(1127).t["ETE/oC"]),
        onConfirm() {
            try {
              const obj = ChannelActionCreatorsDefault;
              obj.closePrivateChannel(channel.id);
            } catch (err) {
              const sendBotMessage = MessageActionCreatorsDefault.sendBotMessage;
              const id = channel.id;
              MessageActionCreatorsDefault;
              const intl = require("intl").intl;
              sendBotMessage(id, intl.string(require("intl").t["YOsuT/"]));
            }
          }
      };
      const show = AlertActionCreatorsDefault.show;
      AlertActionCreatorsDefault;
      intl3 = tmp6(1127).intl;
      intl4 = tmp6(1127).intl;
      show(obj6);
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
const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandBuiltIns.tsx");

export default items;
