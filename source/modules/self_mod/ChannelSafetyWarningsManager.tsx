// Module ID: 16076
// Function ID: 124401
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 1348, 1907, 10069, 10094, 16077, 5078, 2]

// Module 16076 (_isNativeReflectConstruct)
import InappropriateConversationExperiment from "InappropriateConversationExperiment";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import tmp2 from "AutomaticLifecycleManager";

const require = arg1;
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
      obj = require(10094) /* shouldShowTakeoverForWarnings */;
      if (obj.getSafetyAlertsSettingOrDefault()) {
        channel = channel.getChannel(channelId);
        if (null != channel) {
          if (channel.isDM()) {
            const inappropriateConversationTakeoverForChannel = require(10094) /* shouldShowTakeoverForWarnings */.getInappropriateConversationTakeoverForChannel(channelId);
            let flag3 = null != inappropriateConversationTakeoverForChannel;
            if (flag3) {
              obj = {};
              ({ id: obj5.warningId, type: obj5.warningType } = inappropriateConversationTakeoverForChannel);
              obj.senderId = channel.getRecipientId();
              obj.channelId = channelId;
              require(16077) /* showTakeoverModal */.showTakeoverModal(obj);
              flag3 = true;
              const obj4 = require(16077) /* showTakeoverModal */;
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
    obj6 = require(10069) /* InappropriateConversationExperiment */;
  }
}
function handleChannelUpdates(channels) {
  channels = channels.channels;
  let currentlySelectedChannelId;
  let obj = currentlySelectedChannelId(10069);
  if (obj.isEligibleForInappropriateConversationWarning({ location: "channel_updates" })) {
    if (obj2.getSafetyAlertsSettingOrDefault()) {
      currentlySelectedChannelId = currentlySelectedChannelId.getCurrentlySelectedChannelId();
      if (null == currentlySelectedChannelId) {
        return false;
      } else {
        const found = channels.find((id) => id.id === currentlySelectedChannelId);
        if (null == found) {
          return false;
        } else {
          const inappropriateConversationTakeoverForChannel = currentlySelectedChannelId(10094).getInappropriateConversationTakeoverForChannel(found.id);
          const tmp6 = null == inappropriateConversationTakeoverForChannel || !found.isDM();
          let flag3 = !tmp6;
          if (!tmp6) {
            obj = {};
            ({ id: obj4.warningId, type: obj4.warningType } = inappropriateConversationTakeoverForChannel);
            obj.senderId = found.getRecipientId();
            obj.channelId = found.id;
            currentlySelectedChannelId(16077).showTakeoverModal(obj);
            flag3 = true;
            const obj3 = currentlySelectedChannelId(16077);
          }
          return flag3;
        }
      }
    } else {
      return false;
    }
    obj2 = currentlySelectedChannelId(10094);
  } else {
    return false;
  }
}
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/self_mod/ChannelSafetyWarningsManager.tsx");

export default tmp2;
