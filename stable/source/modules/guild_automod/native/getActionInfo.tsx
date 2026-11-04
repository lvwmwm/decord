// Module ID: 19049
// Function ID: 19050
// Name: getActionInfo
// Dependencies: [12844, 7050, 8583, 12835, 13418, 19050, 2]
// Exports: getActionInfo

// Module 19049 (getActionInfo)
import Constants from "Constants" /* 12844 */;
import BaseActionInfo from "BaseActionInfo" /* 19050 */;
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
      CircleXIcon = tmp(7050).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8583).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(12835).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(13418).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(7050).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
};
