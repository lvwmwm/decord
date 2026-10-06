// Module ID: 17731
// Function ID: 17732
// Name: getActionInfo
// Dependencies: [11487, 4803, 5871, 11478, 12136, 17732, 2]
// Exports: getActionInfo

// Module 17731 (getActionInfo)
import Constants from "Constants" /* 11487 */;
import BaseActionInfo from "BaseActionInfo" /* 17732 */;
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
      CircleXIcon = tmp(4803).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(5871).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(11478).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(12136).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(4803).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
};
