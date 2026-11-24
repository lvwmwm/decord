// Module ID: 19767
// Function ID: 19768
// Name: getActionInfo
// Dependencies: [12307, 7158, 7020, 12296, 13274, 19768, 2]
// Exports: getActionInfo

// Module 19767 (getActionInfo)
import Constants from "Constants" /* 12307 */;
import BaseActionInfo from "BaseActionInfo" /* 19768 */;
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
      CircleXIcon = tmp(7020).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(12296).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(13274).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(7158).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
}
