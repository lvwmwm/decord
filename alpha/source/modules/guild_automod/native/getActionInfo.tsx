// Module ID: 18350
// Function ID: 18351
// Name: getActionInfo
// Dependencies: [12252, 6300, 8215, 12243, 12749, 18351, 2]
// Exports: getActionInfo

// Module 18350 (getActionInfo)
import Constants from "Constants" /* 12252 */;
import BaseActionInfo from "BaseActionInfo" /* 18351 */;
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
      CircleXIcon = tmp(6300).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8215).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(12243).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(12749).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(6300).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
};
