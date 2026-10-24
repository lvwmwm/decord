// Module ID: 19009
// Function ID: 19010
// Name: getRuleInfo
// Dependencies: [12806, 8561, 19010, 19012, 17234, 11796, 19013, 5678, 2]
// Exports: getRuleInfo

// Module 19009 (getRuleInfo)
import LinkIcon from "LinkIcon" /* 5678 */;
import AtIcon from "AtIcon" /* 8561 */;
import RobotIcon from "RobotIcon" /* 11796 */;
import Constants from "Constants" /* 12806 */;
import MenuIcon from "MenuIcon" /* 17234 */;
import ChannelListPlusIcon from "ChannelListPlusIcon" /* 19010 */;
import AssetRegistryDefault from "AssetRegistry" /* 19012 */;
import BaseRuleInfo from "BaseRuleInfo" /* 19013 */;
import size from "module_2" /* 2 */;

const AutomodTriggerType = Constants.AutomodTriggerType;
const result = size.fileFinishedImporting("modules/guild_automod/native/getRuleInfo.tsx");

export const getRuleInfo = function getRuleInfo(triggerType, rule) {
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
};
