// Module ID: 18768
// Function ID: 18769
// Name: getActionInfo
// Dependencies: [12635, 6969, 8500, 12626, 13203, 18769, 2]
// Exports: getActionInfo

// Module 18768 (getActionInfo)
import Constants from "Constants" /* 12635 */;
import BaseActionInfo from "BaseActionInfo" /* 18769 */;
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
      CircleXIcon = tmp(6969).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8500).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(12626).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(13203).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(6969).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
};
