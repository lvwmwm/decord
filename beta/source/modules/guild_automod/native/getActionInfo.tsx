// Module ID: 20087
// Function ID: 20088
// Name: getActionInfo
// Dependencies: [13525, 7158, 8723, 13516, 14277, 20088, 2]
// Exports: getActionInfo

// Module 20087 (getActionInfo)
import Constants from "Constants" /* 13525 */;
import BaseActionInfo from "BaseActionInfo" /* 20088 */;
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
      CircleXIcon = tmp(7158).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8723).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(13516).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(14277).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(7158).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
}
