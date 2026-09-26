// Module ID: 17953
// Function ID: 17954
// Name: getActionInfo
// Dependencies: [12146, 6890, 5330, 12137, 12748, 17954, 2]
// Exports: getActionInfo

// Module 17953 (getActionInfo)
import Constants from "Constants" /* 12146 */;
import BaseActionInfo from "BaseActionInfo" /* 17954 */;
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
      let CircleXIcon = tmp(6890).CircleXIcon;
    } else if (tmp8.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(5330).TextIcon;
    } else if (tmp8.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(12137).ClockWarningIcon;
    } else if (tmp8.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(12748).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(6890).CircleXIcon;
    }
    obj2.icon = CircleXIcon;
    tmp4 = obj2;
  }
  return tmp4;
};
