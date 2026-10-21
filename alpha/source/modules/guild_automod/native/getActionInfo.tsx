// Module ID: 18845
// Function ID: 18846
// Name: getActionInfo
// Dependencies: [12699, 6997, 8527, 12690, 13271, 18846, 2]
// Exports: getActionInfo

// Module 18845 (getActionInfo)
import Constants from "Constants" /* 12699 */;
import BaseActionInfo from "BaseActionInfo" /* 18846 */;
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
      CircleXIcon = tmp(6997).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8527).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(12690).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(13271).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(6997).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
};
