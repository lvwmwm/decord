// Module ID: 18979
// Function ID: 18980
// Name: getActionInfo
// Dependencies: [12769, 7016, 8549, 12760, 13344, 18980, 2]
// Exports: getActionInfo

// Module 18979 (getActionInfo)
import Constants from "Constants" /* 12769 */;
import BaseActionInfo from "BaseActionInfo" /* 18980 */;
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
      CircleXIcon = tmp(7016).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8549).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(12760).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(13344).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(7016).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
};
