// Module ID: 19783
// Function ID: 19784
// Name: getActionInfo
// Dependencies: [12326, 7142, 7592, 12315, 13279, 19784, 2]
// Exports: getActionInfo

// Module 19783 (getActionInfo)
import Constants from "Constants" /* 12326 */;
import BaseActionInfo from "BaseActionInfo" /* 19784 */;
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
      CircleXIcon = tmp(7142).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(7592).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(12315).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(13279).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(7142).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
}
