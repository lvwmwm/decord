// Module ID: 20468
// Function ID: 20469
// Name: getActionInfo
// Dependencies: [14168, 7629, 8078, 14159, 14898, 20469, 2]
// Exports: getActionInfo

// Module 20468 (getActionInfo)
import Constants from "Constants" /* 14168 */;
import BaseActionInfo from "BaseActionInfo" /* 20469 */;
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
      CircleXIcon = tmp(14159).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(14898).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(7629).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
}
