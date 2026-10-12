// Module ID: 18310
// Function ID: 18311
// Name: getActionInfo
// Dependencies: [11450, 6296, 8208, 11439, 12200, 18311, 2]
// Exports: getActionInfo

// Module 18310 (getActionInfo)
import Constants from "Constants" /* 11450 */;
import BaseActionInfo from "BaseActionInfo" /* 18311 */;
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
      CircleXIcon = tmp(6296).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8208).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(11439).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(12200).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(6296).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
};
