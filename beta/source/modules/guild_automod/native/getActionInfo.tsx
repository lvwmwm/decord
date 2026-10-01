// Module ID: 17314
// Function ID: 17315
// Name: getActionInfo
// Dependencies: [11341, 6034, 5394, 11332, 11958, 17315, 2]
// Exports: getActionInfo

// Module 17314 (getActionInfo)
import Constants from "Constants" /* 11341 */;
import BaseActionInfo from "BaseActionInfo" /* 17315 */;
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
      CircleXIcon = tmp(6034).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(5394).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(11332).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(11958).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(6034).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
};
