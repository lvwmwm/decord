// Module ID: 18589
// Function ID: 18590
// Name: getActionInfo
// Dependencies: [12487, 6516, 8425, 12478, 13046, 18590, 2]
// Exports: getActionInfo

// Module 18589 (getActionInfo)
import Constants from "Constants" /* 12487 */;
import BaseActionInfo from "BaseActionInfo" /* 18590 */;
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
      CircleXIcon = tmp(6516).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8425).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(12478).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(13046).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(6516).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
};
