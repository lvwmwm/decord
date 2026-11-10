// Module ID: 20115
// Function ID: 20116
// Name: getActionInfo
// Dependencies: [13538, 7161, 8729, 13529, 14303, 20116, 2]
// Exports: getActionInfo

// Module 20115 (getActionInfo)
import Constants from "Constants" /* 13538 */;
import BaseActionInfo from "BaseActionInfo" /* 20116 */;
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
      CircleXIcon = tmp(7161).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8729).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(13529).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(14303).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(7161).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
}
