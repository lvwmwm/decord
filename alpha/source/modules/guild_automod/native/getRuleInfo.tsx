// Module ID: 18054
// Function ID: 18055
// Name: getRuleInfo
// Dependencies: [12205, 5396, 18055, 18057, 16249, 9632, 18058, 4771, 2]
// Exports: getRuleInfo

// Module 18054 (getRuleInfo)
import Constants from "Constants" /* 12205 */;
import _modDef18057 from "module_18057" /* 18057 */;
import BaseRuleInfo from "BaseRuleInfo" /* 18058 */;
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
        const obj3 = { IconComponent: tmp(5396).AtIcon };
        let tmp9 = obj3;
      } else if (tmp8.KEYWORD === triggerType) {
        const obj4 = { IconComponent: tmp(18055).ChannelListPlusIcon };
        tmp9 = obj4;
      } else {
        if (tmp8.ML_SPAM !== triggerType) {
          if (tmp8.USER_PROFILE !== triggerType) {
            if (tmp8.DEFAULT_KEYWORD_LIST === triggerType) {
              const obj5 = { IconComponent: tmp(16249).MenuIcon };
              tmp9 = obj5;
            } else if (tmp8.APPLICATION === triggerType) {
              const obj6 = { IconComponent: tmp(9632).RobotIcon };
              tmp9 = obj6;
            }
          }
        }
        const obj7 = { source: _modDef18057 };
        tmp9 = obj7;
      }
      if (tmp9 == null) {
        const obj8 = { IconComponent: tmp(4771).LinkIcon };
        tmp9 = obj8;
      }
      obj2.icon = tmp9;
      tmp4 = obj2;
    }
  }
  return tmp4;
};
