// Module ID: 16230
// Function ID: 126360
// Name: getNewAutomodRuleMockId
// Dependencies: [1194, 16231, 11007, 16233, 16234, 1212, 7109, 6753, 2]
// Exports: actionTypeToName, createDefaultRule, eventTypeToName, isRuleDefaultKeywordListFilter, isRuleMLSpamFilter, isRuleMentionSpamFilter, isRuleServerPolicyFilter, isRuleUserProfileFilter, triggerTypeToName, validateRuleBeforeSaveOrThrow

// Module 16230 (getNewAutomodRuleMockId)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { getRuleCountByTriggerType } from "useSyncAutomodRules";
import AutomodEventType from "AutomodEventType";

let closure_10;
let closure_11;
let closure_12;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function getNewAutomodRuleMockId(guildId, triggerType) {
  return "" + guildId + "-" + triggerType + "-new-rule";
}
function isRuleKeywordFilter(triggerType) {
  triggerType = undefined;
  if (null != triggerType) {
    triggerType = triggerType.triggerType;
  }
  return triggerType === constants.KEYWORD;
}
function validateKeywordsOrThrow(keywordFilter, closure_5) {
  if (keywordFilter.length > closure_5) {
    const _Error = Error;
    let intl = require(1212) /* getSystemLocale */.intl;
    const obj = { limit: closure_5 };
    const error = new Error(intl.formatToPlainString(require(1212) /* getSystemLocale */.t.mee4qd, obj));
    throw error;
  } else {
    const item = keywordFilter.forEach((keyword) => {
      const intl = outer1_0(outer1_1[5]).intl;
      const invalidKeywordError = new outer1_0(outer1_1[6]).InvalidKeywordError(intl.formatToPlainString(outer1_0(outer1_1[5]).t.rbRvGe, { keyword, max: outer1_7, min: outer1_8 }));
      throw invalidKeywordError;
    });
  }
}
function validateRegexPatternsOrThrow(regexPatterns) {
  if (regexPatterns.length > closure_6) {
    const _Error = Error;
    let intl = require(1212) /* getSystemLocale */.intl;
    const obj = { limit: closure_6 };
    const error = new Error(intl.formatToPlainString(require(1212) /* getSystemLocale */.t.tDjhF1, obj));
    throw error;
  } else {
    const item = regexPatterns.forEach((regex) => {
      const intl = outer1_0(outer1_1[5]).intl;
      const invalidRegexPatternError = new outer1_0(outer1_1[6]).InvalidRegexPatternError(intl.formatToPlainString(outer1_0(outer1_1[5]).t.WR0m9w, { regex, max: outer1_10, min: outer1_9 }));
      throw invalidRegexPatternError;
    });
  }
}
function isBackendPersistedRule(id) {
  id = undefined;
  if (null != id) {
    id = id.id;
  }
  let str = "INVALID_SNOWFLAKE";
  if (null != id) {
    str = id;
  }
  return require(6753) /* _createForOfIteratorHelperLoose */.isSnowflake(str);
}
({ AutomodTriggerType: closure_4, MAX_KEYWORDS_PER_KEYWORD_FILTER: closure_5, MAX_REGEX_PATTERNS_PER_KEYWORD_FILTER: closure_6, MAX_CHARACTERS_PER_KEYWORD: closure_7, MIN_CHARACTERS_PER_KEYWORD: closure_8, MIN_REGEX_PATTERN_LENGTH: closure_9, MAX_REGEX_PATTERN_LENGTH: closure_10, AutomodActionType: closure_11, AutomodEventType: closure_12 } = AutomodEventType);
const result = require("AutomodEventType").fileFinishedImporting("modules/guild_automod/AutomodRuleUtils.tsx");

export { getNewAutomodRuleMockId };
export { isRuleKeywordFilter };
export const isRuleMLSpamFilter = function isRuleMLSpamFilter(triggerType) {
  triggerType = undefined;
  if (null != triggerType) {
    triggerType = triggerType.triggerType;
  }
  return triggerType === constants.ML_SPAM;
};
export const isRuleDefaultKeywordListFilter = function isRuleDefaultKeywordListFilter(triggerType) {
  triggerType = undefined;
  if (null != triggerType) {
    triggerType = triggerType.triggerType;
  }
  return triggerType === constants.DEFAULT_KEYWORD_LIST;
};
export const isRuleMentionSpamFilter = function isRuleMentionSpamFilter(triggerType) {
  triggerType = undefined;
  if (null != triggerType) {
    triggerType = triggerType.triggerType;
  }
  return triggerType === constants.MENTION_SPAM;
};
export const isRuleServerPolicyFilter = function isRuleServerPolicyFilter(triggerType) {
  triggerType = undefined;
  if (null != triggerType) {
    triggerType = triggerType.triggerType;
  }
  return triggerType === constants.SERVER_POLICY;
};
export const isRuleUserProfileFilter = function isRuleUserProfileFilter(triggerType) {
  triggerType = undefined;
  if (null != triggerType) {
    triggerType = triggerType.triggerType;
  }
  return triggerType === constants.USER_PROFILE;
};
export const createDefaultRule = function createDefaultRule(guildId, triggerType) {
  let obj = require(16233) /* AutomodTriggerType */.triggerConfigs[triggerType];
  obj = {};
  const defaultTriggerMetadataForTriggerType = require(16233) /* AutomodTriggerType */.getDefaultTriggerMetadataForTriggerType(triggerType, guildId);
  obj.id = getNewAutomodRuleMockId(guildId, triggerType);
  obj.name = obj.getDefaultRuleName();
  obj.guildId = guildId;
  obj.eventType = obj.eventType;
  obj.triggerType = triggerType;
  obj.triggerMetadata = defaultTriggerMetadataForTriggerType;
  obj.enabled = true;
  obj.creatorId = id.getId();
  const obj2 = require(16233) /* AutomodTriggerType */;
  obj.actions = require(16234) /* getDefaultActions */.getRuleDefaultActionsFromConfig(obj);
  obj.position = 0;
  const obj4 = require(16234) /* getDefaultActions */;
  obj.exemptChannels = new Set();
  const set = new Set();
  obj.exemptRoles = new Set();
  if (isBackendPersistedRule(obj)) {
    const _Error = Error;
    const intl = require(1212) /* getSystemLocale */.intl;
    const error = new Error(intl.string(require(1212) /* getSystemLocale */.t["A/nX8D"]));
    throw error;
  } else {
    const tmp5 = getRuleCountByTriggerType(guildId, triggerType);
    if (tmp5 > 0) {
      const _HermesInternal = HermesInternal;
      obj.name = obj.name + " " + tmp5 + 1;
    }
    return obj;
  }
  const set1 = new Set();
};
export { validateKeywordsOrThrow };
export { validateRegexPatternsOrThrow };
export const validateRuleBeforeSaveOrThrow = function validateRuleBeforeSaveOrThrow(triggerMetadata) {
  if (isRuleKeywordFilter(triggerMetadata)) {
    let keywordFilter = triggerMetadata.triggerMetadata.keywordFilter;
    if (null == keywordFilter) {
      keywordFilter = [];
    }
    let regexPatterns = triggerMetadata.triggerMetadata.regexPatterns;
    if (null == regexPatterns) {
      regexPatterns = [];
    }
    if (0 === keywordFilter.length) {
      if (0 === regexPatterns.length) {
        const _Error2 = Error;
        const intl2 = require(1212) /* getSystemLocale */.intl;
        const error = new Error(intl2.string(require(1212) /* getSystemLocale */.t.kz2Av3));
        throw error;
      }
    }
    validateKeywordsOrThrow(keywordFilter, closure_5);
    validateRegexPatternsOrThrow(regexPatterns);
  }
  if (0 === triggerMetadata.actions.length) {
    const _Error = Error;
    const intl = require(1212) /* getSystemLocale */.intl;
    const error1 = new Error(intl.string(require(1212) /* getSystemLocale */.t["t+gj5V"]));
    throw error1;
  }
};
export { isBackendPersistedRule };
export const eventTypeToName = function eventTypeToName(arg0) {
  if (constants3.MESSAGE_SEND === arg0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.NlQW4P);
  } else if (constants3.GUILD_MEMBER_JOIN_OR_UPDATE === arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t["Q+68IX"]);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.SP9BBx);
  }
};
export const actionTypeToName = function actionTypeToName(arg0) {
  if (constants2.BLOCK_MESSAGE === arg0) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    return intl5.string(require(1212) /* getSystemLocale */.t.d1ab8n);
  } else if (constants2.FLAG_TO_CHANNEL === arg0) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t["Y+VmvU"]);
  } else if (constants2.USER_COMMUNICATION_DISABLED === arg0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t["6WPxY2"]);
  } else if (constants2.QUARANTINE_USER === arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.NPO8ee);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.SP9BBx);
  }
};
export const triggerTypeToName = function triggerTypeToName(arg0) {
  if (constants.KEYWORD === arg0) {
    const intl6 = require(1212) /* getSystemLocale */.intl;
    return intl6.string(require(1212) /* getSystemLocale */.t.ffR2cM);
  } else if (constants.ML_SPAM === arg0) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    return intl5.string(require(1212) /* getSystemLocale */.t["puF/Os"]);
  } else if (constants.DEFAULT_KEYWORD_LIST === arg0) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t.LnGhZv);
  } else if (constants.MENTION_SPAM === arg0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.pX7i6n);
  } else if (constants.USER_PROFILE === arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.q1L2v8);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.SP9BBx);
  }
};
