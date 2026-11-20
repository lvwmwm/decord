// Module ID: 19600
// Function ID: 19601
// Name: getRuleInfo
// Dependencies: [12279, 7570, 19601, 19603, 17202, 12050, 19604, 5490, 2]
// Exports: getRuleInfo

// Module 19600 (getRuleInfo)
import LinkIcon from "LinkIcon" /* 5490 */;
import AtIcon from "AtIcon" /* 7570 */;
import RobotIcon from "RobotIcon" /* 12050 */;
import Constants from "Constants" /* 12279 */;
import MenuIcon from "MenuIcon" /* 17202 */;
import ChannelListPlusIcon from "ChannelListPlusIcon" /* 19601 */;
import AssetRegistryDefault from "AssetRegistry" /* 19603 */;
import BaseRuleInfo from "BaseRuleInfo" /* 19604 */;
import size from "module_2" /* 2 */;

const AutomodTriggerType = Constants.AutomodTriggerType;
const result = size.fileFinishedImporting("modules/guild_automod/native/getRuleInfo.tsx");

export function getRuleInfo(triggerType, rule) {
  let tmp9;
  const obj = BaseRuleInfo;
  const baseRuleInfo = obj.getBaseRuleInfo(triggerType, rule);
  let tmp4 = null;
  if (null != baseRuleInfo) {
    tmp4 = null;
    if (null != triggerType) {
      const obj2 = { icon: tmp9 };
      const merged = Object.assign(baseRuleInfo);
      if (AutomodTriggerType.MENTION_SPAM === triggerType) {
        tmp9 = { IconComponent: AtIcon.AtIcon };
        const obj3 = { IconComponent: AtIcon.AtIcon };
      } else if (AutomodTriggerType.KEYWORD === triggerType) {
        tmp9 = { IconComponent: ChannelListPlusIcon.ChannelListPlusIcon };
        const obj4 = { IconComponent: ChannelListPlusIcon.ChannelListPlusIcon };
      } else {
        if (AutomodTriggerType.ML_SPAM !== triggerType) {
          if (AutomodTriggerType.USER_PROFILE !== triggerType) {
            if (AutomodTriggerType.DEFAULT_KEYWORD_LIST === triggerType) {
              tmp9 = { IconComponent: MenuIcon.MenuIcon };
              const obj5 = { IconComponent: MenuIcon.MenuIcon };
            } else if (AutomodTriggerType.APPLICATION === triggerType) {
              tmp9 = { IconComponent: RobotIcon.RobotIcon };
              const obj6 = { IconComponent: RobotIcon.RobotIcon };
            }
          }
        }
        tmp9 = { source: AssetRegistryDefault };
        const obj7 = { source: AssetRegistryDefault };
      }
      if (tmp9 == null) {
        tmp9 = { IconComponent: LinkIcon.LinkIcon };
        const obj8 = { IconComponent: LinkIcon.LinkIcon };
      }
      tmp4 = obj2;
    }
  }
  return tmp4;
}
