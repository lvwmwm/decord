// Module ID: 17538
// Function ID: 17539
// Name: getActionInfo
// Dependencies: [11546, 6230, 5590, 11537, 12163, 17539, 2]
// Exports: getActionInfo

// Module 17538 (getActionInfo)
import Constants from "Constants" /* 11546 */;
import BaseActionInfo from "BaseActionInfo" /* 17539 */;
import size from "module_2" /* 2 */;

const AutomodActionType = Constants.AutomodActionType;
const result = size.fileFinishedImporting("modules/guild_automod/native/getActionInfo.tsx");

export const getActionInfo = function getActionInfo(actionType, action, triggerType) {
  const baseActionInfo = BaseActionInfo.getBaseActionInfo(actionType, action, triggerType);
  let tmp4 = null;
  if (null != baseActionInfo) {
    const obj2 = {};
    const merged = Object.assign(baseActionInfo);
    if (AutomodActionType.BLOCK_MESSAGE === actionType) {
      let CircleXIcon = tmp(6230).CircleXIcon;
    } else if (tmp8.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(5590).TextIcon;
    } else if (tmp8.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(11537).ClockWarningIcon;
    } else if (tmp8.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(12163).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(6230).CircleXIcon;
    }
    obj2.icon = CircleXIcon;
    tmp4 = obj2;
  }
  return tmp4;
};
