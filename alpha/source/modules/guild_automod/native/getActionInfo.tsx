// Module ID: 17948
// Function ID: 17949
// Name: getActionInfo
// Dependencies: [12117, 6858, 5298, 12108, 12719, 17949, 2]
// Exports: getActionInfo

// Module 17948 (getActionInfo)
import Constants from "Constants" /* 12117 */;
import BaseActionInfo from "BaseActionInfo" /* 17949 */;
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
      let CircleXIcon = tmp(6858).CircleXIcon;
    } else if (tmp8.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(5298).TextIcon;
    } else if (tmp8.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(12108).ClockWarningIcon;
    } else if (tmp8.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(12719).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(6858).CircleXIcon;
    }
    obj2.icon = CircleXIcon;
    tmp4 = obj2;
  }
  return tmp4;
};
