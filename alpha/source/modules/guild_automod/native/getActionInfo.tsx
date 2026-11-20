// Module ID: 19598
// Function ID: 19599
// Name: getActionInfo
// Dependencies: [12279, 7111, 7561, 12268, 13231, 19599, 2]
// Exports: getActionInfo

// Module 19598 (getActionInfo)
import Constants from "Constants" /* 12279 */;
import BaseActionInfo from "BaseActionInfo" /* 19599 */;
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
      CircleXIcon = tmp(7111).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(7561).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(12268).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(13231).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(7111).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
}
