// Module ID: 19832
// Function ID: 19833
// Name: getActionInfo
// Dependencies: [13428, 7218, 8776, 13419, 14169, 19833, 2]
// Exports: getActionInfo

// Module 19832 (getActionInfo)
import Constants from "Constants" /* 13428 */;
import BaseActionInfo from "BaseActionInfo" /* 19833 */;
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
      CircleXIcon = tmp(7218).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8776).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(13419).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(14169).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(7218).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
}
