// Module ID: 17316
// Function ID: 17317
// Name: getActionInfo
// Dependencies: [11216, 6026, 5395, 11207, 11866, 17317, 2]
// Exports: getActionInfo

// Module 17316 (getActionInfo)
import Constants from "Constants" /* 11216 */;
import BaseActionInfo from "BaseActionInfo" /* 17317 */;
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
      CircleXIcon = tmp(6026).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(5395).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(11207).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(11866).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(6026).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
};
