// Module ID: 10947
// Function ID: 10948
// Name: InappropriateConversationUtils
// Dependencies: [1246, 1392, 10670, 10912, 2]
// Exports: getInappropriateConversationTakeoverForChannel, getSafetyAlertsSettingOrDefault, shouldShowInappropriateConversationTakeoverForChannelRecord, shouldShowTakeoverForWarnings

// Module 10947 (InappropriateConversationUtils)
import ChannelSafetyWarningsStore2 from "ChannelSafetyWarningsStore" /* 10670 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 10912 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1246 */;
import UserStore from "UserStore" /* 1392 */;
import size from "module_2" /* 2 */;

const ChannelSafetyWarningsStore = ChannelSafetyWarningsStore2;

const f108174 = (type) => type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1;
const f108175 = (dismiss_timestamp) => null == dismiss_timestamp.dismiss_timestamp;
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
    const found = safetyWarnings.filter(f108174);
    tmp = found.length > 0 && found.every(f108175);
    const everyResult = found.length > 0 && found.every(f108175);
  }
  return tmp;
};
export const shouldShowTakeoverForWarnings = function shouldShowTakeoverForWarnings(inappropriateConversationWarningsForChannel) {
  const found = inappropriateConversationWarningsForChannel.filter(f108174);
  const everyResult = found.length > 0 && found.every(f108175);
  return everyResult;
};
