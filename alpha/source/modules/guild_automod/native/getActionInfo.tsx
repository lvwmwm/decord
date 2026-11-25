// Module ID: 19868
// Function ID: 19869
// Name: getActionInfo
// Dependencies: [12473, 7253, 7115, 12462, 13397, 19869, 2]
// Exports: getActionInfo

// Module 19868 (getActionInfo)
import Constants from "Constants" /* 12473 */;
import BaseActionInfo from "BaseActionInfo" /* 19869 */;
import size from "module_2" /* 2 */;

const AutomodActionType = Constants.AutomodActionType;
const result = size.fileFinishedImporting("modules/guild_automod/native/getActionInfo.tsx");

export function getActionInfo(actionType, action, triggerType) {
  let CircleXIcon;
  const obj = BaseActionInfo;
  const baseActionInfo = obj.getBaseActionInfo(actionType, action, triggerType);
  let tmp4 = null;
  if (null != baseActionInfo) {
    const obj2 = { icon: CircleXIcon };
    const merged = Object.assign(baseActionInfo);
    if (AutomodActionType.BLOCK_MESSAGE === actionType) {
      CircleXIcon = tmp(7253).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(7115).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(12462).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(13397).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(7253).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
}
