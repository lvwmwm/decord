// Module ID: 18178
// Function ID: 18179
// Name: getActionInfo
// Dependencies: [11403, 4998, 8191, 11392, 12154, 18179, 2]
// Exports: getActionInfo

// Module 18178 (getActionInfo)
import Constants from "Constants" /* 11403 */;
import BaseActionInfo from "BaseActionInfo" /* 18179 */;
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
      CircleXIcon = tmp(4998).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8191).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(11392).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(12154).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(4998).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
};
