// Module ID: 18706
// Function ID: 18707
// Name: getActionInfo
// Dependencies: [12581, 6573, 8480, 12572, 13145, 18707, 2]
// Exports: getActionInfo

// Module 18706 (getActionInfo)
import Constants from "Constants" /* 12581 */;
import BaseActionInfo from "BaseActionInfo" /* 18707 */;
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
      CircleXIcon = tmp(12572).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(13145).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(6573).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
};
