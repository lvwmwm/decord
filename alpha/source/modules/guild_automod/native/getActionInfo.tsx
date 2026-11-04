// Module ID: 19962
// Function ID: 19963
// Name: getActionInfo
// Dependencies: [13513, 7233, 8793, 13504, 14256, 19963, 2]
// Exports: getActionInfo

// Module 19962 (getActionInfo)
import Constants from "Constants" /* 13513 */;
import BaseActionInfo from "BaseActionInfo" /* 19963 */;
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
      CircleXIcon = tmp(7233).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8793).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(13504).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(14256).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(7233).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
}
