// Module ID: 18018
// Function ID: 18019
// Name: getActionInfo
// Dependencies: [11473, 4997, 8183, 11462, 12215, 18019, 2]
// Exports: getActionInfo

// Module 18018 (getActionInfo)
import Constants from "Constants" /* 11473 */;
import BaseActionInfo from "BaseActionInfo" /* 18019 */;
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
      CircleXIcon = tmp(4997).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8183).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(11462).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(12215).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(4997).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
};
