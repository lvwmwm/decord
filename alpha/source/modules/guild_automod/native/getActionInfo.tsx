// Module ID: 19012
// Function ID: 19013
// Name: getActionInfo
// Dependencies: [12811, 7018, 8551, 12802, 13386, 19013, 2]
// Exports: getActionInfo

// Module 19012 (getActionInfo)
import Constants from "Constants" /* 12811 */;
import BaseActionInfo from "BaseActionInfo" /* 19013 */;
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
      CircleXIcon = tmp(12802).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(13386).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(7018).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
};
