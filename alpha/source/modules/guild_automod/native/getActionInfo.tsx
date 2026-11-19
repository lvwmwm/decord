// Module ID: 19780
// Function ID: 19781
// Name: getActionInfo
// Dependencies: [12309, 7112, 7562, 12298, 13261, 19781, 2]
// Exports: getActionInfo

// Module 19780 (getActionInfo)
import Constants from "Constants" /* 12309 */;
import BaseActionInfo from "BaseActionInfo" /* 19781 */;
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
      CircleXIcon = tmp(7112).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(7562).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(12298).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(13261).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(7112).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
}
