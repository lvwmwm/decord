// Module ID: 19675
// Function ID: 19676
// Name: getActionInfo
// Dependencies: [13277, 7092, 8652, 13268, 14023, 19676, 2]
// Exports: getActionInfo

// Module 19675 (getActionInfo)
import Constants from "Constants" /* 13277 */;
import BaseActionInfo from "BaseActionInfo" /* 19676 */;
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
      CircleXIcon = tmp(7092).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8652).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(13268).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(14023).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(7092).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
}
