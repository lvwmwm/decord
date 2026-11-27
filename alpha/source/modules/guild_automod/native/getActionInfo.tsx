// Module ID: 19948
// Function ID: 19949
// Name: getActionInfo
// Dependencies: [12530, 7284, 7146, 12519, 13457, 19949, 2]
// Exports: getActionInfo

// Module 19948 (getActionInfo)
import Constants from "Constants" /* 12530 */;
import BaseActionInfo from "BaseActionInfo" /* 19949 */;
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
      CircleXIcon = tmp(7284).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(7146).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(12519).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(13457).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(7284).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
}
