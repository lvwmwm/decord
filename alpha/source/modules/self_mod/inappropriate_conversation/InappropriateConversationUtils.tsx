// Module ID: 11013
// Function ID: 11014
// Name: InappropriateConversationUtils
// Dependencies: [1243, 1389, 10728, 10978, 2]
// Exports: getInappropriateConversationTakeoverForChannel, getSafetyAlertsSettingOrDefault, shouldShowInappropriateConversationTakeoverForChannelRecord, shouldShowTakeoverForWarnings

// Module 11013 (InappropriateConversationUtils)
import ChannelSafetyWarningsStore2 from "ChannelSafetyWarningsStore" /* 10728 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 10978 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1243 */;
import UserStore from "UserStore" /* 1389 */;
import size from "module_2" /* 2 */;

const ChannelSafetyWarningsStore = ChannelSafetyWarningsStore2;

const f109530 = (type) => type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1;
const f109531 = (dismiss_timestamp) => null == dismiss_timestamp.dismiss_timestamp;
const SafetyWarningTypes = ChannelSafetyWarningsStore2.SafetyWarningTypes;
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/InappropriateConversationUtils.tsx");

export const getSafetyAlertsSettingOrDefault = function getSafetyAlertsSettingOrDefault() {
  let isStaffResult;
  const currentUser = UserStore.getCurrentUser();
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  const privacy = UserSettingsProtoStore.settings.privacy;
  let flag;
  if (privacy != null) {
    if (privacy.inappropriateConversationWarnings != null) {
      flag = iter.value;
    }
  }
  if (flag == null) {
    flag = true;
  }
  const obj2 = SafetyWarningUtils;
  const userIsTeen = (obj2.getUserIsTeen() || true === isStaffResult) && flag;
  return userIsTeen;
};
export const getInappropriateConversationTakeoverForChannel = function getInappropriateConversationTakeoverForChannel(channelId) {
  const channelSafetyWarnings = ChannelSafetyWarningsStore.getChannelSafetyWarnings(channelId);
  const found = channelSafetyWarnings.filter((type) => type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1);
  if (found.filter((dismiss_timestamp) => null != dismiss_timestamp.dismiss_timestamp).length > 0) {
    return null;
  } else {
    const found1 = found.filter((dismiss_timestamp) => null == dismiss_timestamp.dismiss_timestamp);
    let first = null;
    if (1 === found1.length) {
      first = found1[0];
    }
    return first;
  }
};
export const shouldShowInappropriateConversationTakeoverForChannelRecord = function shouldShowInappropriateConversationTakeoverForChannelRecord(safetyWarnings) {
  let tmp = null != safetyWarnings.safetyWarnings;
  if (tmp) {
    safetyWarnings = safetyWarnings.safetyWarnings;
    const found = safetyWarnings.filter(f109530);
    tmp = found.length > 0 && found.every(f109531);
    const everyResult = found.length > 0 && found.every(f109531);
  }
  return tmp;
};
export const shouldShowTakeoverForWarnings = function shouldShowTakeoverForWarnings(inappropriateConversationWarningsForChannel) {
  const found = inappropriateConversationWarningsForChannel.filter(f109530);
  const everyResult = found.length > 0 && found.every(f109531);
  return everyResult;
};
