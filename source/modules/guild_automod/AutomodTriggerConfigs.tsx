// Module ID: 16116
// Function ID: 124236
// Name: AutomodTriggerType
// Dependencies: []
// Exports: checkTriggerTypeForFlag, getAvailableActionTypes, getDefaultTriggerMetadataForTriggerType, useAvailableTriggerTypes, validateRuleByTriggerConfigOrThrow

// Module 16116 (AutomodTriggerType)
let AutomodActionType;
let AutomodEventType;
let AutomodTriggerType;
let closure_2 = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
({ AutomodActionType, AutomodEventType, AutomodTriggerType } = tmp2);
let closure_4 = tmp2.MENTION_SPAM_LIMIT_DEFAULT;
let obj = { NEW: "new", RECOMMENDED: "recommended", BETA: "beta", ALPHA: "alpha" };
obj = {};
obj = {
  getDefaultRuleName() {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.ffR2cM);
  },
  type: AutomodTriggerType.SPAM_LINK,
  eventType: AutomodEventType.MESSAGE_SEND,
  perGuildMaxCount: 0,
  availableActionTypes: new Set()
};
const set = new Set();
obj.flags = new Set();
const set1 = new Set();
obj.defaultActionTypes = new Set();
obj[AutomodTriggerType.SPAM_LINK] = obj;
const obj1 = {
  getDefaultRuleName() {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.ffR2cM);
  },
  type: AutomodTriggerType.KEYWORD,
  eventType: AutomodEventType.MESSAGE_SEND,
  perGuildMaxCount: 6
};
const items = [, , ];
({ BLOCK_MESSAGE: arr[0], FLAG_TO_CHANNEL: arr[1], USER_COMMUNICATION_DISABLED: arr[2] } = AutomodActionType);
const set2 = new Set();
obj1.availableActionTypes = new Set(items);
const set3 = new Set(items);
obj1.flags = new Set();
const items1 = [AutomodActionType.BLOCK_MESSAGE];
const set4 = new Set();
obj1.defaultActionTypes = new Set(items1);
obj[AutomodTriggerType.KEYWORD] = obj1;
const obj2 = {
  getDefaultRuleName() {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.puF/Os);
  },
  type: AutomodTriggerType.ML_SPAM,
  eventType: AutomodEventType.MESSAGE_SEND,
  perGuildMaxCount: 1
};
const items2 = [, ];
({ BLOCK_MESSAGE: arr3[0], FLAG_TO_CHANNEL: arr3[1] } = AutomodActionType);
const set5 = new Set(items1);
obj2.availableActionTypes = new Set(items2);
const set6 = new Set(items2);
obj2.flags = new Set([]);
const items3 = [AutomodActionType.BLOCK_MESSAGE];
const set7 = new Set([]);
obj2.defaultActionTypes = new Set(items3);
obj[AutomodTriggerType.ML_SPAM] = obj2;
const obj3 = {
  getDefaultRuleName() {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.LnGhZv);
  },
  type: AutomodTriggerType.DEFAULT_KEYWORD_LIST,
  eventType: AutomodEventType.MESSAGE_SEND,
  perGuildMaxCount: 1
};
const items4 = [, ];
({ BLOCK_MESSAGE: arr5[0], FLAG_TO_CHANNEL: arr5[1] } = AutomodActionType);
const set8 = new Set(items3);
obj3.availableActionTypes = new Set(items4);
const set9 = new Set(items4);
obj3.flags = new Set([]);
const items5 = [AutomodActionType.BLOCK_MESSAGE];
const set10 = new Set([]);
obj3.defaultActionTypes = new Set(items5);
obj[AutomodTriggerType.DEFAULT_KEYWORD_LIST] = obj3;
const obj4 = {
  getDefaultRuleName() {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.pX7i6n);
  },
  type: AutomodTriggerType.MENTION_SPAM,
  eventType: AutomodEventType.MESSAGE_SEND,
  perGuildMaxCount: 1
};
const items6 = [, , ];
({ BLOCK_MESSAGE: arr7[0], FLAG_TO_CHANNEL: arr7[1], USER_COMMUNICATION_DISABLED: arr7[2] } = AutomodActionType);
const set11 = new Set(items5);
obj4.availableActionTypes = new Set(items6);
const set12 = new Set(items6);
obj4.flags = new Set([]);
const items7 = [AutomodActionType.BLOCK_MESSAGE];
const set13 = new Set([]);
obj4.defaultActionTypes = new Set(items7);
obj[AutomodTriggerType.MENTION_SPAM] = obj4;
const obj5 = {
  getDefaultRuleName() {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.q1L2v8);
  },
  type: AutomodTriggerType.USER_PROFILE,
  eventType: AutomodEventType.GUILD_MEMBER_JOIN_OR_UPDATE,
  perGuildMaxCount: 1
};
const items8 = [, ];
({ QUARANTINE_USER: arr9[0], FLAG_TO_CHANNEL: arr9[1] } = AutomodActionType);
const set14 = new Set(items7);
obj5.availableActionTypes = new Set(items8);
const set15 = new Set(items8);
obj5.flags = new Set([]);
const items9 = [AutomodActionType.QUARANTINE_USER];
const set16 = new Set([]);
obj5.defaultActionTypes = new Set(items9);
obj[AutomodTriggerType.USER_PROFILE] = obj5;
const obj6 = {
  getDefaultRuleName() {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(arg1(dependencyMap[2]).t.ZQr92M);
  },
  type: AutomodTriggerType.SERVER_POLICY,
  eventType: AutomodEventType.MESSAGE_SEND,
  perGuildMaxCount: 1
};
const items10 = [AutomodActionType.FLAG_TO_CHANNEL];
const set17 = new Set(items9);
obj6.availableActionTypes = new Set(items10);
const items11 = [obj.ALPHA];
const set18 = new Set(items10);
obj6.flags = new Set(items11);
const set19 = new Set(items11);
obj6.defaultActionTypes = new Set();
obj[AutomodTriggerType.SERVER_POLICY] = obj6;
const obj7 = { MEMBERS: "members", CONTENT: "content" };
const obj8 = { [obj7.MEMBERS]: items12, [obj7.CONTENT]: items13 };
const items12 = [obj[AutomodTriggerType.USER_PROFILE]];
const items13 = [obj[AutomodTriggerType.SERVER_POLICY], obj[AutomodTriggerType.MENTION_SPAM], obj[AutomodTriggerType.ML_SPAM], obj[AutomodTriggerType.DEFAULT_KEYWORD_LIST], obj[AutomodTriggerType.KEYWORD]];
const set20 = new Set();
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/guild_automod/AutomodTriggerConfigs.tsx");

export const AutomodTriggerConfigFlags = obj;
export const triggerConfigs = obj;
export const AutomodTriggerCategory = obj7;
export const AUTOMOD_RULE_CONFIGS_BY_CATEGORY = obj8;
export const checkTriggerTypeForFlag = function checkTriggerTypeForFlag(arg0, arg1) {
  const flags = obj[arg0].flags;
  return flags.has(arg1);
};
export const getAvailableActionTypes = function getAvailableActionTypes(arg0) {
  return Array.from(obj[arg0].availableActionTypes);
};
export const validateRuleByTriggerConfigOrThrow = function validateRuleByTriggerConfigOrThrow(actions, arr) {
  let triggerType;
  ({ id: closure_0, triggerType } = actions);
  const dependencyMap = triggerType;
  actions = actions.actions;
  let closure_2 = tmp;
  if (arr.filter((id) => {
    let tmp = closure_0 !== id.id;
    if (tmp) {
      tmp = id.triggerType === triggerType;
    }
    return tmp;
  }).length > obj[triggerType].perGuildMaxCount) {
    const _Error3 = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("You have exceeded the maximum number of rules of type " + triggerType);
    throw error;
  } else if (actions.some((type) => {
    const availableActionTypes = tmp.availableActionTypes;
    return !availableActionTypes.has(type.type);
  })) {
    const _Error2 = Error;
    const error1 = new Error("You have provided an action that is not available for this trigger type");
    throw error1;
  } else if (actions.eventType !== tmp.eventType) {
    const _Error = Error;
    const error2 = new Error("You have provided an event type that is not available for this trigger type");
    throw error2;
  }
};
export const useAvailableTriggerTypes = function useAvailableTriggerTypes(arg0) {
  const isUserProfileRuleEnabled = arg1(dependencyMap[3]).useIsUserProfileRuleEnabled(arg0);
  const arg1 = isUserProfileRuleEnabled;
  const items = [isUserProfileRuleEnabled];
  return React.useMemo(() => {
    const keys = Object.keys(closure_7);
    return keys.reduce((arg0, arg1) => {
      const found = closure_7[arg1].filter((type) => {
        let tmp = type.type !== constants.SERVER_POLICY;
        if (tmp) {
          let tmp3 = type.type === constants.USER_PROFILE;
          if (tmp3) {
            tmp3 = !closure_0;
          }
          let tmp5 = !tmp3;
          if (!tmp3) {
            tmp5 = type.perGuildMaxCount > 0;
          }
          tmp = tmp5;
        }
        return tmp;
      });
      arg0[arg1] = found.map((type) => type.type);
      return arg0;
    }, { [closure_6.MEMBERS]: [], [closure_6.CONTENT]: [] });
  }, items);
};
export const getDefaultTriggerMetadataForTriggerType = function getDefaultTriggerMetadataForTriggerType(triggerType, guildId) {
  guildId(dependencyMap[4]);
  if (AutomodTriggerType.DEFAULT_KEYWORD_LIST === triggerType) {
    let obj = { allowList: [], presets: [] };
    return obj;
  } else {
    if (AutomodTriggerType.USER_PROFILE !== triggerType) {
      if (AutomodTriggerType.KEYWORD !== triggerType) {
        if (AutomodTriggerType.MENTION_SPAM === triggerType) {
          obj = { mentionTotalLimit: closure_4, mentionRaidProtectionEnabled: tmp2 };
          return obj;
        } else if (AutomodTriggerType.ML_SPAM !== triggerType) {
          const SERVER_POLICY = AutomodTriggerType.SERVER_POLICY;
        }
      }
    }
    obj = { keywordFilter: [], regexPatterns: [], allowList: [] };
    return obj;
  }
};
