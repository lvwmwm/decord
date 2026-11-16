// Module ID: 11474
// Function ID: 11475
// Name: InappropriateConversationUtils
// Dependencies: [1231, 1385, 10955, 11441, 2]
// Exports: getInappropriateConversationTakeoverForChannel, getSafetyAlertsSettingOrDefault, shouldShowInappropriateConversationTakeoverForChannelRecord, shouldShowTakeoverForWarnings

// Module 11474 (InappropriateConversationUtils)
import ChannelSafetyWarningsStore2 from "ChannelSafetyWarningsStore" /* 10955 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 11441 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const ChannelSafetyWarningsStore = ChannelSafetyWarningsStore2;

const f100898 = (type) => type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1;
const f100899 = (dismiss_timestamp) => null == dismiss_timestamp.dismiss_timestamp;
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
    const found = safetyWarnings.filter(f100898);
    tmp = found.length > 0 && found.every(f100899);
    const everyResult = found.length > 0 && found.every(f100899);
  }
  return tmp;
}
export function shouldShowTakeoverForWarnings(inappropriateConversationWarningsForChannel) {
  const found = inappropriateConversationWarningsForChannel.filter(f100898);
  const everyResult = found.length > 0 && found.every(f100899);
  return everyResult;
}
