// Module ID: 18058
// Function ID: 18059
// Name: BaseRuleInfo
// Dependencies: [12205, 18048, 18047, 1115, 2]
// Exports: getBaseRuleInfo

// Module 18058 (BaseRuleInfo)
import Constants from "Constants" /* 12205 */;
import AutomodRuleUtils from "AutomodRuleUtils" /* 18047 */;
import AutomodTriggerConfigs from "AutomodTriggerConfigs" /* 18048 */;
import size from "module_2" /* 2 */;

const AutomodTriggerType = Constants.AutomodTriggerType;
const result = size.fileFinishedImporting("modules/guild_automod/BaseRuleInfo.tsx");

export const getBaseRuleInfo = function getBaseRuleInfo(triggerType, rule) {
  let tmp = null;
  if (null != triggerType) {
    if (AutomodTriggerType.KEYWORD !== triggerType) {
      if (tmp2.ML_SPAM !== triggerType) {
        if (tmp2.DEFAULT_KEYWORD_LIST !== triggerType) {
          if (tmp2.MENTION_SPAM !== triggerType) {
            if (tmp2.SERVER_POLICY !== triggerType) {
              if (tmp2.USER_PROFILE !== triggerType) {
                let flag = false;
              }
              tmp = null;
              if (flag) {
                let length = rule;
                let str;
                if (rule != null) {
                  str = length.name;
                }
                if (str == null) {
                  str = AutomodTriggerConfigs.triggerConfigs[triggerType].getDefaultRuleName();
                }
                if (str == null) {
                  str = "";
                }
                const obj2 = { headerText: str, headerSubtext: null, descriptionText: null, descriptionSubtext: null };
                let str2;
                if (obj3.isBackendPersistedRule(length)) {
                  if (tmp5Result.isRuleKeywordFilter(length)) {
                    if (length.triggerMetadata.regexPatterns.length > 0) {
                      const intl2 = tmp5(1115).intl;
                      const obj4 = { keywordCount: length.triggerMetadata.keywordFilter.length, regexPatternCount: null };
                      length = length.triggerMetadata.regexPatterns.length;
                      obj4.regexPatternCount = length;
                      let formatToPlainStringResult = intl2.formatToPlainString(tmp5(1115).t.xZUvxR, obj4);
                    } else {
                      const intl = tmp5(1115).intl;
                      const obj5 = { keywordCount: length.triggerMetadata.keywordFilter.length };
                      formatToPlainStringResult = intl.formatToPlainString(tmp5(1115).t.dJN7Lk, obj5);
                    }
                  }
                  tmp5Result = tmp5(18047);
                }
                if (str2 == null) {
                  str2 = "";
                }
                obj2.headerSubtext = str2;
                if (tmp2.KEYWORD === triggerType) {
                  const intl7 = tmp5(1115).intl;
                  let str3 = intl7.string(tmp5(1115).t.TzvaeK);
                } else if (tmp2.ML_SPAM === triggerType) {
                  const intl6 = tmp5(1115).intl;
                  str3 = intl6.string(tmp5(1115).t.jBZSQl);
                } else if (tmp2.DEFAULT_KEYWORD_LIST === triggerType) {
                  const intl5 = tmp5(1115).intl;
                  str3 = intl5.string(tmp5(1115).t.Drc8ft);
                } else if (tmp2.MENTION_SPAM === triggerType) {
                  const intl4 = tmp5(1115).intl;
                  str3 = intl4.string(tmp5(1115).t.flhXO4);
                } else if (tmp2.USER_PROFILE === triggerType) {
                  const intl3 = tmp5(1115).intl;
                  str3 = intl3.string(tmp5(1115).t.A35LyL);
                } else {
                  str3 = null;
                  if (tmp2.APPLICATION === triggerType) {
                    const intl9 = tmp5(1115).intl;
                    str3 = intl9.string(tmp5(1115).t.kHNeDa);
                  }
                }
                if (str3 == null) {
                  str3 = "";
                }
                obj2.descriptionText = str3;
                let str4;
                if (triggerType === tmp2.KEYWORD) {
                  const intl8 = tmp5(1115).intl;
                  str4 = intl8.formatToPlainString(tmp5(1115).t.yNec2m, {});
                }
                if (str4 == null) {
                  str4 = "";
                }
                obj2.descriptionSubtext = str4;
                tmp = obj2;
                obj3 = AutomodRuleUtils;
              }
            }
          }
        }
      }
    }
    flag = true;
  }
  return tmp;
};
