// Module ID: 19998
// Function ID: 19999
// Name: getActionInfo
// Dependencies: [13524, 7236, 8798, 13515, 14269, 19999, 2]
// Exports: getActionInfo

// Module 19998 (getActionInfo)
import Constants from "Constants" /* 13524 */;
import BaseActionInfo from "BaseActionInfo" /* 19999 */;
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
      CircleXIcon = tmp(7236).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8798).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(13515).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(14269).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(7236).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
}
