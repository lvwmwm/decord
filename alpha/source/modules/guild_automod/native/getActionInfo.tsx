// Module ID: 20310
// Function ID: 20311
// Name: getActionInfo
// Dependencies: [14063, 7563, 8013, 14054, 14786, 20311, 2]
// Exports: getActionInfo

// Module 20310 (getActionInfo)
import Constants from "Constants" /* 14063 */;
import BaseActionInfo from "BaseActionInfo" /* 20311 */;
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
      CircleXIcon = tmp(7563).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8013).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(14054).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(14786).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(7563).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
}
