// Module ID: 11276
// Function ID: 11277
// Name: InappropriateConversationUtils
// Dependencies: [1232, 1384, 10784, 11243, 2]
// Exports: getInappropriateConversationTakeoverForChannel, getSafetyAlertsSettingOrDefault, shouldShowInappropriateConversationTakeoverForChannelRecord, shouldShowTakeoverForWarnings

// Module 11276 (InappropriateConversationUtils)
import ChannelSafetyWarningsStore2 from "ChannelSafetyWarningsStore" /* 10784 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 11243 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1232 */;
import UserStore from "UserStore" /* 1384 */;
import size from "module_2" /* 2 */;

const ChannelSafetyWarningsStore = ChannelSafetyWarningsStore2;

const f98815 = (type) => type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1;
const f98816 = (dismiss_timestamp) => null == dismiss_timestamp.dismiss_timestamp;
const SafetyWarningTypes = ChannelSafetyWarningsStore2.SafetyWarningTypes;
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/InappropriateConversationUtils.tsx");

export function getSafetyAlertsSettingOrDefault() {
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
}
export function getInappropriateConversationTakeoverForChannel(channelId) {
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
}
export function shouldShowInappropriateConversationTakeoverForChannelRecord(safetyWarnings) {
  let tmp = null != safetyWarnings.safetyWarnings;
  if (tmp) {
    safetyWarnings = safetyWarnings.safetyWarnings;
    const found = safetyWarnings.filter(f98815);
    tmp = found.length > 0 && found.every(f98816);
    const everyResult = found.length > 0 && found.every(f98816);
  }
  return tmp;
}
export function shouldShowTakeoverForWarnings(inappropriateConversationWarningsForChannel) {
  const found = inappropriateConversationWarningsForChannel.filter(f98815);
  const everyResult = found.length > 0 && found.every(f98816);
  return everyResult;
}
