// Module ID: 7932
// Function ID: 63334
// Name: get untranslatedDescription
// Dependencies: [3767, 1849, 4566, 1881, 6755, 1212, 4320, 4470, 4140, 6691, 2]

// Module 7932 (get untranslatedDescription)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
let obj = { id: "-15", untranslatedName: "leave", displayName: "leave", type: require("PermissionOverwriteType").ApplicationCommandType.CHAT, inputType: require("ApplicationCommandSectionType").ApplicationCommandInputType.BUILT_IN, applicationId: require("TRUE_OPTION_NAME").BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj, "untranslatedDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["26C4oi"]);
  },
  set: undefined
});
Object.defineProperty(obj, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["26C4oi"]);
  },
  set: undefined
});
obj.predicate = function predicate(channel) {
  channel = channel.channel;
  return null != channel && channel.isGroupDM();
};
obj.execute = function execute(arg0, channel) {
  channel = channel.channel;
  if (null != channel) {
    const channelName = channel(4320).computeChannelName(channel, closure_4, _isNativeReflectConstruct);
    const intl5 = channel(1212).intl;
    let obj = { name: channelName };
    const obj5 = channel(4320);
    const intl6 = channel(1212).intl;
    obj = { name: channelName };
    let formatResult = intl6.format(channel(1212).t.SSIVOu, obj);
    let formatToPlainStringResult1 = intl5.formatToPlainString(channel(1212).t.hJ5Ap4, obj);
    if (channel.isManaged()) {
      const intl = channel(1212).intl;
      obj = { name: channelName };
      formatToPlainStringResult1 = intl.formatToPlainString(channel(1212).t.hVGjEW, obj);
      const intl2 = channel(1212).intl;
      const obj1 = { name: channelName };
      formatResult = intl2.format(channel(1212).t.IK1Qvs, obj1);
    }
    let obj2 = importDefault(4470);
    obj2 = { title: formatToPlainStringResult1, body: formatResult };
    const intl3 = channel(1212).intl;
    obj2.confirmText = intl3.string(channel(1212).t["26C4oi"]);
    const intl4 = channel(1212).intl;
    obj2.cancelText = intl4.string(channel(1212).t["ETE/oC"]);
    obj2.onConfirm = function onConfirm() {
      outer1_1(outer1_2[8]).closePrivateChannel(channel.id);
    };
    obj2.show(obj2);
    const formatToPlainStringResult = intl5.formatToPlainString(channel(1212).t.hJ5Ap4, obj);
  }
};
const items = [obj];
const result = require("TRUE_OPTION_NAME").fileFinishedImporting("modules/application_commands/native/ApplicationCommandBuiltIns.tsx");

export default items;
