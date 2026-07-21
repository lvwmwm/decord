// Module ID: 7925
// Function ID: 63274
// Name: get untranslatedDescription
// Dependencies: []

// Module 7925 (get untranslatedDescription)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const obj = { type: arg1(dependencyMap[3]).ApplicationCommandType.CHAT, inputType: arg1(dependencyMap[4]).ApplicationCommandInputType.BUILT_IN, applicationId: arg1(dependencyMap[2]).BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj, "untranslatedDescription", {
  get: () => {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.26C4oi);
  },
  set: undefined
});
Object.defineProperty(obj, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.26C4oi);
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
    const channelName = channel(dependencyMap[6]).computeChannelName(channel, closure_4, closure_3);
    const intl5 = channel(dependencyMap[5]).intl;
    let obj = { name: channelName };
    const obj5 = channel(dependencyMap[6]);
    const intl6 = channel(dependencyMap[5]).intl;
    obj = { name: channelName };
    let formatResult = intl6.format(channel(dependencyMap[5]).t.SSIVOu, obj);
    let formatToPlainStringResult1 = intl5.formatToPlainString(channel(dependencyMap[5]).t.hJ5Ap4, obj);
    if (channel.isManaged()) {
      const intl = channel(dependencyMap[5]).intl;
      obj = { name: channelName };
      formatToPlainStringResult1 = intl.formatToPlainString(channel(dependencyMap[5]).t.hVGjEW, obj);
      const intl2 = channel(dependencyMap[5]).intl;
      const obj1 = { name: channelName };
      formatResult = intl2.format(channel(dependencyMap[5]).t.IK1Qvs, obj1);
    }
    let obj2 = importDefault(dependencyMap[7]);
    obj2 = { title: formatToPlainStringResult1, body: formatResult };
    const intl3 = channel(dependencyMap[5]).intl;
    obj2.confirmText = intl3.string(channel(dependencyMap[5]).t.26C4oi);
    const intl4 = channel(dependencyMap[5]).intl;
    obj2.cancelText = intl4.string(channel(dependencyMap[5]).t.ETE/oC);
    obj2.onConfirm = function onConfirm() {
      callback(closure_2[8]).closePrivateChannel(channel.id);
    };
    obj2.show(obj2);
    const formatToPlainStringResult = intl5.formatToPlainString(channel(dependencyMap[5]).t.hJ5Ap4, obj);
  }
};
const items = [obj];
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/application_commands/native/ApplicationCommandBuiltIns.tsx");

export default items;
