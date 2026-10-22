// Module ID: 18935
// Function ID: 18936
// Name: getActionInfo
// Dependencies: [12750, 7003, 8537, 12741, 13321, 18936, 2]
// Exports: getActionInfo

// Module 18935 (getActionInfo)
import Constants from "Constants" /* 12750 */;
import BaseActionInfo from "BaseActionInfo" /* 18936 */;
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
      CircleXIcon = tmp(7003).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8537).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(12741).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(13321).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(7003).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
};
