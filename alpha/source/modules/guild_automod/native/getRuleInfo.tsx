// Module ID: 17962
// Function ID: 17963
// Name: getRuleInfo
// Dependencies: [12121, 5310, 17963, 17965, 16174, 9555, 17966, 4699, 2]
// Exports: getRuleInfo

// Module 17962 (getRuleInfo)
import Constants from "Constants" /* 12121 */;
import _modDef17965 from "module_17965" /* 17965 */;
import BaseRuleInfo from "BaseRuleInfo" /* 17966 */;
import size from "module_2" /* 2 */;

const AutomodTriggerType = Constants.AutomodTriggerType;
const result = size.fileFinishedImporting("modules/guild_automod/native/getRuleInfo.tsx");

export const getRuleInfo = function getRuleInfo(triggerType, rule) {
  const baseRuleInfo = BaseRuleInfo.getBaseRuleInfo(triggerType, rule);
  let tmp4 = null;
  if (null != baseRuleInfo) {
    tmp4 = null;
    if (null != triggerType) {
      const obj2 = {};
      const merged = Object.assign(baseRuleInfo);
      if (AutomodTriggerType.MENTION_SPAM === triggerType) {
        const obj3 = { IconComponent: tmp(5310).AtIcon };
        let tmp9 = obj3;
      } else if (tmp8.KEYWORD === triggerType) {
        const obj4 = { IconComponent: tmp(17963).ChannelListPlusIcon };
        tmp9 = obj4;
      } else {
        if (tmp8.ML_SPAM !== triggerType) {
          if (tmp8.USER_PROFILE !== triggerType) {
            if (tmp8.DEFAULT_KEYWORD_LIST === triggerType) {
              const obj5 = { IconComponent: tmp(16174).MenuIcon };
              tmp9 = obj5;
            } else if (tmp8.APPLICATION === triggerType) {
              const obj6 = { IconComponent: tmp(9555).RobotIcon };
              tmp9 = obj6;
            }
          }
        }
        const obj7 = { source: _modDef17965 };
        tmp9 = obj7;
      }
      if (tmp9 == null) {
        const obj8 = { IconComponent: tmp(4699).LinkIcon };
        tmp9 = obj8;
      }
      obj2.icon = tmp9;
      tmp4 = obj2;
    }
  }
  return tmp4;
};
