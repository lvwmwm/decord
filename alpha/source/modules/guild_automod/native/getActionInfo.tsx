// Module ID: 19059
// Function ID: 19060
// Name: getActionInfo
// Dependencies: [12823, 7020, 8551, 12814, 13402, 19060, 2]
// Exports: getActionInfo

// Module 19059 (getActionInfo)
import Constants from "Constants" /* 12823 */;
import BaseActionInfo from "BaseActionInfo" /* 19060 */;
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
      CircleXIcon = tmp(7020).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8551).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(12814).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(13402).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(7020).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
};
