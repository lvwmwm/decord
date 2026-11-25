// Module ID: 19733
// Function ID: 19734
// Name: getActionInfo
// Dependencies: [12404, 7231, 7681, 12393, 13354, 19734, 2]
// Exports: getActionInfo

// Module 19733 (getActionInfo)
import Constants from "Constants" /* 12404 */;
import BaseActionInfo from "BaseActionInfo" /* 19734 */;
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
      CircleXIcon = tmp(7231).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(7681).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(12393).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(13354).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(7231).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
}
