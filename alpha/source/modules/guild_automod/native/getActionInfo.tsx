// Module ID: 19322
// Function ID: 19323
// Name: getActionInfo
// Dependencies: [12870, 7054, 8588, 12861, 13621, 19323, 2]
// Exports: getActionInfo

// Module 19322 (getActionInfo)
import Constants from "Constants" /* 12870 */;
import BaseActionInfo from "BaseActionInfo" /* 19323 */;
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
      CircleXIcon = tmp(7054).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8588).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(12861).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(13621).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(7054).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
};
