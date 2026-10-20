// Module ID: 18314
// Function ID: 18315
// Name: getActionInfo
// Dependencies: [11452, 6296, 8203, 11441, 12205, 18315, 2]
// Exports: getActionInfo

// Module 18314 (getActionInfo)
import Constants from "Constants" /* 11452 */;
import BaseActionInfo from "BaseActionInfo" /* 18315 */;
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
      CircleXIcon = tmp(6296).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8203).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(11441).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(12205).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(6296).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
};
