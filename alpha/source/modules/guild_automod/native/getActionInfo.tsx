// Module ID: 17661
// Function ID: 17662
// Name: getActionInfo
// Dependencies: [11474, 4797, 5864, 11465, 12121, 17662, 2]
// Exports: getActionInfo

// Module 17661 (getActionInfo)
import Constants from "Constants" /* 11474 */;
import BaseActionInfo from "BaseActionInfo" /* 17662 */;
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
      CircleXIcon = tmp(4797).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(5864).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(11465).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(12121).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(4797).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
};
