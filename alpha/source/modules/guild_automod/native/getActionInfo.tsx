// Module ID: 18252
// Function ID: 18253
// Name: getActionInfo
// Dependencies: [11448, 6295, 8207, 11437, 12198, 18253, 2]
// Exports: getActionInfo

// Module 18252 (getActionInfo)
import Constants from "Constants" /* 11448 */;
import BaseActionInfo from "BaseActionInfo" /* 18253 */;
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
      CircleXIcon = tmp(6295).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8207).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(11437).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(12198).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(6295).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
};
