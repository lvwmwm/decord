// Module ID: 18745
// Function ID: 18746
// Name: getActionInfo
// Dependencies: [12618, 6966, 8496, 12609, 13185, 18746, 2]
// Exports: getActionInfo

// Module 18745 (getActionInfo)
import Constants from "Constants" /* 12618 */;
import BaseActionInfo from "BaseActionInfo" /* 18746 */;
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
      CircleXIcon = tmp(6966).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8496).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(12609).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(13185).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(6966).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
};
