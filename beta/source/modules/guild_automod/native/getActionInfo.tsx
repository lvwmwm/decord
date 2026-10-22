// Module ID: 18710
// Function ID: 18711
// Name: getActionInfo
// Dependencies: [12593, 6573, 8480, 12584, 13148, 18711, 2]
// Exports: getActionInfo

// Module 18710 (getActionInfo)
import Constants from "Constants" /* 12593 */;
import BaseActionInfo from "BaseActionInfo" /* 18711 */;
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
      CircleXIcon = tmp(6573).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8480).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(12584).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(13148).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(6573).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
};
