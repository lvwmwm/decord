// Module ID: 18912
// Function ID: 18913
// Name: getActionInfo
// Dependencies: [12731, 7004, 8536, 12722, 13307, 18913, 2]
// Exports: getActionInfo

// Module 18912 (getActionInfo)
import Constants from "Constants" /* 12731 */;
import BaseActionInfo from "BaseActionInfo" /* 18913 */;
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
      CircleXIcon = tmp(7004).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8536).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(12722).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(13307).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(7004).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
};
