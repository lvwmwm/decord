// Module ID: 15870
// Function ID: 121580
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15870 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleChannelSelect(channelId) {
  channelId = channelId.channelId;
  if (null == channelId) {
    return false;
  } else {
    let obj = { location: "channel_select" };
    if (obj6.isEligibleForInappropriateConversationWarning(obj)) {
      obj = arg1(dependencyMap[8]);
      if (obj.getSafetyAlertsSettingOrDefault()) {
        const channel = channel.getChannel(channelId);
        if (null != channel) {
          if (channel.isDM()) {
            const inappropriateConversationTakeoverForChannel = arg1(dependencyMap[8]).getInappropriateConversationTakeoverForChannel(channelId);
            let flag3 = null != inappropriateConversationTakeoverForChannel;
            if (flag3) {
              obj = {};
              ({ id: obj5.warningId, type: obj5.warningType } = inappropriateConversationTakeoverForChannel);
              obj.senderId = channel.getRecipientId();
              obj.channelId = channelId;
              arg1(dependencyMap[9]).showTakeoverModal(obj);
              flag3 = true;
              const obj4 = arg1(dependencyMap[9]);
            }
            return flag3;
          }
        }
        return false;
      } else {
        return false;
      }
    } else {
      return false;
    }
    const obj6 = arg1(dependencyMap[7]);
  }
}
function handleChannelUpdates(channels) {
  channels = channels.channels;
  let arg1;
  let obj = arg1(dependencyMap[7]);
  if (obj.isEligibleForInappropriateConversationWarning({ location: "channel_updates" })) {
    if (obj2.getSafetyAlertsSettingOrDefault()) {
      const currentlySelectedChannelId = currentlySelectedChannelId.getCurrentlySelectedChannelId();
      arg1 = currentlySelectedChannelId;
      if (null == currentlySelectedChannelId) {
        return false;
      } else {
        const found = channels.find((id) => id.id === currentlySelectedChannelId);
        if (null == found) {
          return false;
        } else {
          const inappropriateConversationTakeoverForChannel = arg1(dependencyMap[8]).getInappropriateConversationTakeoverForChannel(found.id);
          const tmp6 = null == inappropriateConversationTakeoverForChannel || !found.isDM();
          let flag3 = !tmp6;
          if (!tmp6) {
            obj = {};
            ({ id: obj4.warningId, type: obj4.warningType } = inappropriateConversationTakeoverForChannel);
            obj.senderId = found.getRecipientId();
            obj.channelId = found.id;
            arg1(dependencyMap[9]).showTakeoverModal(obj);
            flag3 = true;
            const obj3 = arg1(dependencyMap[9]);
          }
          return flag3;
        }
      }
    } else {
      return false;
    }
    const obj2 = arg1(dependencyMap[8]);
  } else {
    return false;
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let tmp2 = (arg0) => {
  class ChannelSafetyWarningsManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, ChannelSafetyWarningsManager);
      items1 = [...items];
      obj = closure_5(ChannelSafetyWarningsManager);
      tmp2 = closure_4;
      if (closure_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      obj = { CHANNEL_SELECT: closure_10, CHANNEL_UPDATES: closure_11 };
      tmp2Result.actions = obj;
      return tmp2Result;
    }
  }
  const arg1 = ChannelSafetyWarningsManager;
  callback2(ChannelSafetyWarningsManager, arg0);
  return callback(ChannelSafetyWarningsManager);
}(importDefault(dependencyMap[10]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/self_mod/ChannelSafetyWarningsManager.tsx");

export default tmp2;
