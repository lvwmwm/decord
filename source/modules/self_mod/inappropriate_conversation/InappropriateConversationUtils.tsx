// Module ID: 10162
// Function ID: 78594
// Name: shouldShowTakeoverForWarnings
// Dependencies: [1316, 1849, 9139, 10163, 2]
// Exports: getInappropriateConversationTakeoverForChannel, getSafetyAlertsSettingOrDefault, shouldShowInappropriateConversationTakeoverForChannelRecord

// Module 10162 (shouldShowTakeoverForWarnings)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { SafetyWarningTypes } from "_isNativeReflectConstruct";

const require = arg1;
function shouldShowTakeoverForWarnings(inappropriateConversationWarningsForChannel) {
  const found = inappropriateConversationWarningsForChannel.filter((type) => type.type === outer1_5.INAPPROPRIATE_CONVERSATION_TIER_1);
  return found.length > 0 && found.every((dismiss_timestamp) => null == dismiss_timestamp.dismiss_timestamp);
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/self_mod/inappropriate_conversation/InappropriateConversationUtils.tsx");

export const getSafetyAlertsSettingOrDefault = function getSafetyAlertsSettingOrDefault() {
  currentUser = currentUser.getCurrentUser();
  let isStaffResult;
  if (null != currentUser) {
    isStaffResult = currentUser.isStaff();
  }
  const privacy = settings.settings.privacy;
  let value;
  if (null != privacy) {
    if (null != privacy.inappropriateConversationWarnings) {
      value = iter.value;
    }
  }
  const obj2 = require(10163) /* trackViewedEvent */;
  const tmp2 = true === isStaffResult;
  const tmp4 = null == value || value;
  return (require(10163) /* trackViewedEvent */.getUserIsTeen() || true === isStaffResult) && (null == value || value);
};
export const getInappropriateConversationTakeoverForChannel = function getInappropriateConversationTakeoverForChannel(channelId) {
  const arr = (function getTier1WarningsForChannel(channelId) {
    const channelSafetyWarnings = outer1_4.getChannelSafetyWarnings(channelId);
    return channelSafetyWarnings.filter((type) => type.type === outer2_5.INAPPROPRIATE_CONVERSATION_TIER_1);
  })(channelId);
  if (arr.filter((dismiss_timestamp) => null != dismiss_timestamp.dismiss_timestamp).length > 0) {
    return null;
  } else {
    const found = arr.filter((dismiss_timestamp) => null == dismiss_timestamp.dismiss_timestamp);
    let first = null;
    if (1 === found.length) {
      first = found[0];
    }
    return first;
  }
};
export const shouldShowInappropriateConversationTakeoverForChannelRecord = function shouldShowInappropriateConversationTakeoverForChannelRecord(safetyWarnings) {
  let tmp = null != safetyWarnings.safetyWarnings;
  if (tmp) {
    tmp = shouldShowTakeoverForWarnings(safetyWarnings.safetyWarnings);
  }
  return tmp;
};
export { shouldShowTakeoverForWarnings };
