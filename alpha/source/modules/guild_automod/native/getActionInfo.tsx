// Module ID: 18644
// Function ID: 18645
// Name: getActionInfo
// Dependencies: [12516, 6520, 8434, 12507, 13080, 18645, 2]
// Exports: getActionInfo

// Module 18644 (getActionInfo)
import Constants from "Constants" /* 12516 */;
import BaseActionInfo from "BaseActionInfo" /* 18645 */;
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
      CircleXIcon = tmp(6520).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8434).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(12507).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(13080).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(6520).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
};
