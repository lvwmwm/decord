// Module ID: 19677
// Function ID: 19678
// Name: getActionInfo
// Dependencies: [13292, 7092, 8652, 13283, 14038, 19678, 2]
// Exports: getActionInfo

// Module 19677 (getActionInfo)
import Constants from "Constants" /* 13292 */;
import BaseActionInfo from "BaseActionInfo" /* 19678 */;
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
      CircleXIcon = tmp(7092).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8652).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(13283).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(14038).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(7092).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
}
