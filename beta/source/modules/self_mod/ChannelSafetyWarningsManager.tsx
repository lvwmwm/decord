// Module ID: 17766
// Function ID: 17767
// Name: ChannelSafetyWarningsManager
// Dependencies: [2045, 2099, 10402, 10441, 17767, 7397, 2]

// Module 17766 (ChannelSafetyWarningsManager)
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 10402 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7397 */;

require = fn;
function handleChannelSelect(channelId) {
  channelId = channelId.channelId;
  if (null == channelId) {
    return false;
  } else {
    if (obj6.isEligibleForInappropriateConversationWarning({ location: "channel_select" })) {
      if (tmp4Result.getSafetyAlertsSettingOrDefault()) {
        const channel = ChannelStore.getChannel(channelId);
        if (null != channel) {
          if (channel.isDM()) {
            const inappropriateConversationTakeoverForChannel = tmp4(10441).getInappropriateConversationTakeoverForChannel(channelId);
            let flag3 = null != inappropriateConversationTakeoverForChannel;
            if (flag3) {
              const obj = { warningId: null, warningType: null, senderId: null, channelId: null };
              ({ id: obj5.warningId, type: obj5.warningType } = inappropriateConversationTakeoverForChannel);
              obj.senderId = channel.getRecipientId();
              obj.channelId = channelId;
              tmp4(17767).showTakeoverModal(obj);
              flag3 = true;
              const tmp4Result4 = tmp4(17767);
            }
            return flag3;
          }
        }
        return false;
      } else {
        return false;
      }
      tmp4Result = tmp4(10441);
    } else {
      return false;
    }
    obj6 = SelfModInappropriateConversationExperiment;
  }
}
function handleChannelUpdates(channels) {
  channels = channels.channels;
  let currentlySelectedChannelId;
  if (obj.isEligibleForInappropriateConversationWarning({ location: "channel_updates" })) {
    if (tmpResult.getSafetyAlertsSettingOrDefault()) {
      currentlySelectedChannelId = SelectedChannelStore.getCurrentlySelectedChannelId();
      if (null == currentlySelectedChannelId) {
        return false;
      } else {
        const found = channels.find((id) => id.id === currentlySelectedChannelId);
        if (null == found) {
          return false;
        } else {
          const inappropriateConversationTakeoverForChannel = tmp(10441).getInappropriateConversationTakeoverForChannel(found.id);
          const tmp6 = null == inappropriateConversationTakeoverForChannel || !found.isDM();
          let flag3 = !tmp6;
          if (!tmp6) {
            const obj2 = { warningId: null, warningType: null, senderId: null, channelId: null };
            ({ id: obj4.warningId, type: obj4.warningType } = inappropriateConversationTakeoverForChannel);
            obj2.senderId = found.getRecipientId();
            obj2.channelId = found.id;
            tmp(17767).showTakeoverModal(obj2);
            flag3 = true;
            const tmpResult4 = tmp(17767);
          }
          return flag3;
        }
      }
    } else {
      return false;
    }
    tmpResult = tmp(10441);
  } else {
    return false;
  }
  obj = SelfModInappropriateConversationExperiment;
}
const prototype = function ChannelSafetyWarningsManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { CHANNEL_SELECT: handleChannelSelect, CHANNEL_UPDATES: handleChannelUpdates };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/ChannelSafetyWarningsManager.tsx");

export default prototype1;
