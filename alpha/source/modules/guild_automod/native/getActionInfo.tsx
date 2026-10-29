// Module ID: 19555
// Function ID: 19556
// Name: getActionInfo
// Dependencies: [13091, 7078, 8610, 13082, 13854, 19556, 2]
// Exports: getActionInfo

// Module 19555 (getActionInfo)
import Constants from "Constants" /* 13091 */;
import BaseActionInfo from "BaseActionInfo" /* 19556 */;
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
      CircleXIcon = tmp(7078).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8610).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(13082).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(13854).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(7078).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
}
