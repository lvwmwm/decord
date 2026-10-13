// Module ID: 18314
// Function ID: 18315
// Name: getActionInfo
// Dependencies: [12216, 6296, 8208, 12207, 12713, 18315, 2]
// Exports: getActionInfo

// Module 18314 (getActionInfo)
import Constants from "Constants" /* 12216 */;
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
      CircleXIcon = tmp(8208).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(12207).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(12713).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(6296).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
};
