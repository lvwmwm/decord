// Module ID: 17960
// Function ID: 17961
// Name: getActionInfo
// Dependencies: [12121, 6860, 5300, 12112, 12723, 17961, 2]
// Exports: getActionInfo

// Module 17960 (getActionInfo)
import Constants from "Constants" /* 12121 */;
import BaseActionInfo from "BaseActionInfo" /* 17961 */;
import size from "module_2" /* 2 */;

const AutomodActionType = Constants.AutomodActionType;
const result = size.fileFinishedImporting("modules/guild_automod/native/getActionInfo.tsx");

export const getActionInfo = function getActionInfo(actionType, action, triggerType) {
  const baseActionInfo = BaseActionInfo.getBaseActionInfo(actionType, action, triggerType);
  let tmp4 = null;
  if (null != baseActionInfo) {
    const obj2 = {};
    const merged = Object.assign(baseActionInfo);
    if (AutomodActionType.BLOCK_MESSAGE === actionType) {
      let CircleXIcon = tmp(6860).CircleXIcon;
    } else if (tmp8.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(5300).TextIcon;
    } else if (tmp8.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(12112).ClockWarningIcon;
    } else if (tmp8.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(12723).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(6860).CircleXIcon;
    }
    obj2.icon = CircleXIcon;
    tmp4 = obj2;
  }
  return tmp4;
};
