// Module ID: 19932
// Function ID: 19933
// Name: getActionInfo
// Dependencies: [12522, 7284, 7146, 12511, 13449, 19933, 2]
// Exports: getActionInfo

// Module 19932 (getActionInfo)
import Constants from "Constants" /* 12522 */;
import BaseActionInfo from "BaseActionInfo" /* 19933 */;
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
      CircleXIcon = tmp(12511).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(13449).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(7284).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
}
