// Module ID: 19618
// Function ID: 19619
// Name: getActionInfo
// Dependencies: [13242, 7086, 8644, 13233, 13988, 19619, 2]
// Exports: getActionInfo

// Module 19618 (getActionInfo)
import Constants from "Constants" /* 13242 */;
import BaseActionInfo from "BaseActionInfo" /* 19619 */;
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
      CircleXIcon = tmp(7086).CircleXIcon;
    } else if (AutomodActionType.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(8644).TextIcon;
    } else if (AutomodActionType.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(13233).ClockWarningIcon;
    } else if (AutomodActionType.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(13988).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(7086).CircleXIcon;
    }
    tmp4 = obj2;
  }
  return tmp4;
}
