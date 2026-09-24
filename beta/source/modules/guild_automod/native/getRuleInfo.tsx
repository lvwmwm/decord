// Module ID: 17964
// Function ID: 17965
// Name: getRuleInfo
// Dependencies: [12029, 5342, 17965, 17967, 16162, 9577, 17968, 4732, 2]
// Exports: getRuleInfo

// Module 17964 (getRuleInfo)
import Constants from "Constants" /* 12029 */;
import _modDef17967 from "module_17967" /* 17967 */;
import BaseRuleInfo from "BaseRuleInfo" /* 17968 */;
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
        const obj3 = { IconComponent: tmp(5342).AtIcon };
        let tmp9 = obj3;
      } else if (tmp8.KEYWORD === triggerType) {
        const obj4 = { IconComponent: tmp(17965).ChannelListPlusIcon };
        tmp9 = obj4;
      } else {
        if (tmp8.ML_SPAM !== triggerType) {
          if (tmp8.USER_PROFILE !== triggerType) {
            if (tmp8.DEFAULT_KEYWORD_LIST === triggerType) {
              const obj5 = { IconComponent: tmp(16162).MenuIcon };
              tmp9 = obj5;
            } else if (tmp8.APPLICATION === triggerType) {
              const obj6 = { IconComponent: tmp(9577).RobotIcon };
              tmp9 = obj6;
            }
          }
        }
        const obj7 = { source: _modDef17967 };
        tmp9 = obj7;
      }
      if (tmp9 == null) {
        const obj8 = { IconComponent: tmp(4732).LinkIcon };
        tmp9 = obj8;
      }
      obj2.icon = tmp9;
      tmp4 = obj2;
    }
  }
  return tmp4;
};
