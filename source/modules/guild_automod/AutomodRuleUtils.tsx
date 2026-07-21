// Module ID: 16097
// Function ID: 124084
// Name: getNewAutomodRuleMockId
// Dependencies: []
// Exports: actionTypeToName, createDefaultRule, eventTypeToName, isRuleDefaultKeywordListFilter, isRuleMLSpamFilter, isRuleMentionSpamFilter, isRuleServerPolicyFilter, isRuleUserProfileFilter, triggerTypeToName, validateRuleBeforeSaveOrThrow

// Module 16097 (getNewAutomodRuleMockId)
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
    const intl = closure_5(dependencyMap[5]).intl;
    const obj = { limit: closure_5 };
    const error = new Error(intl.formatToPlainString(closure_5(dependencyMap[5]).t.mee4qd, obj));
    throw error;
  } else {
    const item = keywordFilter.forEach((keyword) => {
      const intl = callback(closure_1[5]).intl;
      const invalidKeywordError = new callback(closure_1[6]).InvalidKeywordError(intl.formatToPlainString(callback(closure_1[5]).t.rbRvGe, { keyword, max: closure_7, min: closure_8 }));
      throw invalidKeywordError;
    });
  }
}
function validateRegexPatternsOrThrow(regexPatterns) {
  if (regexPatterns.length > closure_6) {
    const _Error = Error;
    const intl = arg1(dependencyMap[5]).intl;
    const obj = { limit: closure_6 };
    const error = new Error(intl.formatToPlainString(arg1(dependencyMap[5]).t.tDjhF1, obj));
    throw error;
  } else {
    const item = regexPatterns.forEach((regex) => {
      const intl = callback(closure_1[5]).intl;
      const invalidRegexPatternError = new callback(closure_1[6]).InvalidRegexPatternError(intl.formatToPlainString(callback(closure_1[5]).t.WR0m9w, { regex, max: closure_10, min: closure_9 }));
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
  return arg1(dependencyMap[7]).isSnowflake(str);
}
let closure_2 = importDefault(dependencyMap[0]);
const getRuleCountByTriggerType = arg1(dependencyMap[1]).getRuleCountByTriggerType;
({ AutomodTriggerType: closure_4, MAX_KEYWORDS_PER_KEYWORD_FILTER: closure_5, MAX_REGEX_PATTERNS_PER_KEYWORD_FILTER: closure_6, MAX_CHARACTERS_PER_KEYWORD: closure_7, MIN_CHARACTERS_PER_KEYWORD: closure_8, MIN_REGEX_PATTERN_LENGTH: closure_9, MAX_REGEX_PATTERN_LENGTH: closure_10, AutomodActionType: closure_11, AutomodEventType: closure_12 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/guild_automod/AutomodRuleUtils.tsx");

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
  let obj = triggerType(dependencyMap[3]).triggerConfigs[triggerType];
  obj = {};
  const defaultTriggerMetadataForTriggerType = triggerType(dependencyMap[3]).getDefaultTriggerMetadataForTriggerType(triggerType, guildId);
  obj.id = getNewAutomodRuleMockId(guildId, triggerType);
  obj.name = obj.getDefaultRuleName();
  obj.guildId = guildId;
  obj.eventType = obj.eventType;
  obj.triggerType = triggerType;
  obj.triggerMetadata = defaultTriggerMetadataForTriggerType;
  obj.enabled = true;
  obj.creatorId = id.getId();
  const obj2 = triggerType(dependencyMap[3]);
  obj.actions = triggerType(dependencyMap[4]).getRuleDefaultActionsFromConfig(obj);
  obj.position = 0;
  const obj4 = triggerType(dependencyMap[4]);
  obj.exemptChannels = new Set();
  const set = new Set();
  obj.exemptRoles = new Set();
  if (isBackendPersistedRule(obj)) {
    const _Error = Error;
    const intl = triggerType(dependencyMap[5]).intl;
    const error = new Error(intl.string(triggerType(dependencyMap[5]).t.A/nX8D));
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
        const intl2 = arg1(dependencyMap[5]).intl;
        const error = new Error(intl2.string(arg1(dependencyMap[5]).t.kz2Av3));
        throw error;
      }
    }
    validateKeywordsOrThrow(keywordFilter, closure_5);
    validateRegexPatternsOrThrow(regexPatterns);
  }
  if (0 === triggerMetadata.actions.length) {
    const _Error = Error;
    const intl = arg1(dependencyMap[5]).intl;
    const error1 = new Error(intl.string(arg1(dependencyMap[5]).t.t+gj5V));
    throw error1;
  }
};
export { isBackendPersistedRule };
export const eventTypeToName = function eventTypeToName(arg0) {
  if (constants3.MESSAGE_SEND === arg0) {
    const intl3 = arg1(dependencyMap[5]).intl;
    return intl3.string(arg1(dependencyMap[5]).t.NlQW4P);
  } else if (constants3.GUILD_MEMBER_JOIN_OR_UPDATE === arg0) {
    const intl2 = arg1(dependencyMap[5]).intl;
    return intl2.string(arg1(dependencyMap[5]).t.Q+68IX);
  } else {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.SP9BBx);
  }
};
export const actionTypeToName = function actionTypeToName(arg0) {
  if (constants2.BLOCK_MESSAGE === arg0) {
    const intl5 = arg1(dependencyMap[5]).intl;
    return intl5.string(arg1(dependencyMap[5]).t.d1ab8n);
  } else if (constants2.FLAG_TO_CHANNEL === arg0) {
    const intl4 = arg1(dependencyMap[5]).intl;
    return intl4.string(arg1(dependencyMap[5]).t.Y+VmvU);
  } else if (constants2.USER_COMMUNICATION_DISABLED === arg0) {
    const intl3 = arg1(dependencyMap[5]).intl;
    return intl3.string(arg1(dependencyMap[5]).t.6WPxY2);
  } else if (constants2.QUARANTINE_USER === arg0) {
    const intl2 = arg1(dependencyMap[5]).intl;
    return intl2.string(arg1(dependencyMap[5]).t.NPO8ee);
  } else {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.SP9BBx);
  }
};
export const triggerTypeToName = function triggerTypeToName(arg0) {
  if (constants.KEYWORD === arg0) {
    const intl6 = arg1(dependencyMap[5]).intl;
    return intl6.string(arg1(dependencyMap[5]).t.ffR2cM);
  } else if (constants.ML_SPAM === arg0) {
    const intl5 = arg1(dependencyMap[5]).intl;
    return intl5.string(arg1(dependencyMap[5]).t.puF/Os);
  } else if (constants.DEFAULT_KEYWORD_LIST === arg0) {
    const intl4 = arg1(dependencyMap[5]).intl;
    return intl4.string(arg1(dependencyMap[5]).t.LnGhZv);
  } else if (constants.MENTION_SPAM === arg0) {
    const intl3 = arg1(dependencyMap[5]).intl;
    return intl3.string(arg1(dependencyMap[5]).t.pX7i6n);
  } else if (constants.USER_PROFILE === arg0) {
    const intl2 = arg1(dependencyMap[5]).intl;
    return intl2.string(arg1(dependencyMap[5]).t.q1L2v8);
  } else {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.SP9BBx);
  }
};
