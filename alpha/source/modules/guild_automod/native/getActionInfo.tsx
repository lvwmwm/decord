// Module ID: 19021
// Function ID: 19022
// Name: getActionInfo
// Dependencies: [12814, 7018, 8551, 12805, 13388, 19022, 2]
// Exports: getActionInfo

// Module 19021 (getActionInfo)
import Constants from "Constants" /* 12814 */;
import BaseActionInfo from "BaseActionInfo" /* 19022 */;
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
      CircleXIcon = tmp(7018).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8551).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(12805).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(13388).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(7018).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
};
