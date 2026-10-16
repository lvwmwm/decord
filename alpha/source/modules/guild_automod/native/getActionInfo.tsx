// Module ID: 18631
// Function ID: 18632
// Name: getActionInfo
// Dependencies: [12510, 6518, 8433, 12501, 13072, 18632, 2]
// Exports: getActionInfo

// Module 18631 (getActionInfo)
import Constants from "Constants" /* 12510 */;
import BaseActionInfo from "BaseActionInfo" /* 18632 */;
import size from "module_2" /* 2 */;

const AutomodActionType = Constants.AutomodActionType;
const result = size.fileFinishedImporting("modules/guild_automod/native/getActionInfo.tsx");

export const getActionInfo = function getActionInfo(actionType, action, triggerType) {
  let CircleXIcon;
  const obj = BaseActionInfo;
  const baseActionInfo = obj.getBaseActionInfo(actionType, action, triggerType);
  let tmp4 = null;
  if (null != baseActionInfo) {
    const obj2 = { icon: CircleXIcon };
    const merged = Object.assign(baseActionInfo);
    if (AutomodActionType.BLOCK_MESSAGE === actionType) {
      CircleXIcon = tmp(6518).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8433).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(12501).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(13072).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(6518).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
};
