// Module ID: 20125
// Function ID: 20126
// Name: getActionInfo
// Dependencies: [13557, 7191, 8756, 13548, 14309, 20126, 2]
// Exports: getActionInfo

// Module 20125 (getActionInfo)
import Constants from "Constants" /* 13557 */;
import BaseActionInfo from "BaseActionInfo" /* 20126 */;
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
      CircleXIcon = tmp(13548).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(14309).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(7191).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
}
