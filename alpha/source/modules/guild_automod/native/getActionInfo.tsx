// Module ID: 20005
// Function ID: 20006
// Name: getActionInfo
// Dependencies: [13499, 7183, 8744, 13490, 14246, 20006, 2]
// Exports: getActionInfo

// Module 20005 (getActionInfo)
import Constants from "Constants" /* 13499 */;
import BaseActionInfo from "BaseActionInfo" /* 20006 */;
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
      CircleXIcon = tmp(7183).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8744).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(13490).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(14246).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(7183).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
}
