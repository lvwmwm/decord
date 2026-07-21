// Module ID: 10121
// Function ID: 78347
// Name: shouldShowTakeoverForWarnings
// Dependencies: []
// Exports: getInappropriateConversationTakeoverForChannel, getSafetyAlertsSettingOrDefault, shouldShowInappropriateConversationTakeoverForChannelRecord

// Module 10121 (shouldShowTakeoverForWarnings)
function shouldShowTakeoverForWarnings(inappropriateConversationWarningsForChannel) {
  const found = inappropriateConversationWarningsForChannel.filter((type) => type.type === obj.INAPPROPRIATE_CONVERSATION_TIER_1);
  return found.length > 0 && found.every((dismiss_timestamp) => null == dismiss_timestamp.dismiss_timestamp);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const SafetyWarningTypes = arg1(dependencyMap[2]).SafetyWarningTypes;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/self_mod/inappropriate_conversation/InappropriateConversationUtils.tsx");

export const getSafetyAlertsSettingOrDefault = function getSafetyAlertsSettingOrDefault() {
  const currentUser = currentUser.getCurrentUser();
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
  const obj2 = arg1(dependencyMap[3]);
  const tmp2 = true === isStaffResult;
  const tmp4 = null == value || value;
  return (arg1(dependencyMap[3]).getUserIsTeen() || true === isStaffResult) && (null == value || value);
};
export const getInappropriateConversationTakeoverForChannel = function getInappropriateConversationTakeoverForChannel(channelId) {
  const arr = function getTier1WarningsForChannel(channelId) {
    const channelSafetyWarnings = channelSafetyWarnings.getChannelSafetyWarnings(channelId);
    return channelSafetyWarnings.filter((type) => type.type === obj.INAPPROPRIATE_CONVERSATION_TIER_1);
  }(channelId);
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
