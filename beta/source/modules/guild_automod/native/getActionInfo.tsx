// Module ID: 20133
// Function ID: 20134
// Name: getActionInfo
// Dependencies: [13556, 7191, 8756, 13547, 14310, 20134, 2]
// Exports: getActionInfo

// Module 20133 (getActionInfo)
import Constants from "Constants" /* 13556 */;
import BaseActionInfo from "BaseActionInfo" /* 20134 */;
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
      CircleXIcon = tmp(7191).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8756).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(13547).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(14310).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(7191).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
}
