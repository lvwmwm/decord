// Module ID: 20510
// Function ID: 20511
// Name: getActionInfo
// Dependencies: [13039, 7639, 8089, 13028, 13977, 20511, 2]
// Exports: getActionInfo

// Module 20510 (getActionInfo)
import Constants from "Constants" /* 13039 */;
import BaseActionInfo from "BaseActionInfo" /* 20511 */;
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
      CircleXIcon = tmp(7639).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8089).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(13028).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(13977).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(7639).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
}
