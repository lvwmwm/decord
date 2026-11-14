// Module ID: 20460
// Function ID: 20461
// Name: getActionInfo
// Dependencies: [14166, 7629, 8078, 14157, 14896, 20461, 2]
// Exports: getActionInfo

// Module 20460 (getActionInfo)
import Constants from "Constants" /* 14166 */;
import BaseActionInfo from "BaseActionInfo" /* 20461 */;
import size from "module_2" /* 2 */;

const AutomodActionType = Constants.AutomodActionType;
const result = size.fileFinishedImporting("modules/guild_automod/native/getActionInfo.tsx");

export function getActionInfo(actionType, action, triggerType) {
  let CircleXIcon;
  const obj = BaseActionInfo;
  const baseActionInfo = obj.getBaseActionInfo(actionType, action, triggerType);
  let tmp4 = null;
  if (null != baseActionInfo) {
    const obj2 = { icon: CircleXIcon };
    const merged = Object.assign(baseActionInfo);
    if (AutomodActionType.BLOCK_MESSAGE === actionType) {
      CircleXIcon = tmp(7629).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8078).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(14157).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(14896).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(7629).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
}
