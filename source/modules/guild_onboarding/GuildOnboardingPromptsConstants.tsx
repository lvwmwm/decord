// Module ID: 5329
// Function ID: 45399
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: clientPromptToServerPrompt, getEmptyPrompt, isDefaultPrompt, isEmojiEmpty, parseConnectionIdentifier, serverApiResponseToClientState, validateOnboardingConnections

// Module 5329 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function getDefaultPrompt() {
  const obj = { onDrawerSlide: null, onDrawerStateChanged: null, onDrawerOpen: null, onDrawerClose: null, first: null, last: null, id: String(Date.now()) };
  const intl = arg1(dependencyMap[4]).intl;
  obj.title = intl.string(arg1(dependencyMap[4]).t.vY91C9);
  obj.options = [];
  obj.type = obj.MULTIPLE_CHOICE;
  return obj;
}
function serverPromptToClientPrompt(id) {
  const options = id.options;
  return {
    id: id.id,
    options: options.map((id) => {
      const obj = { id: id.id, channelIds: id.channel_ids, roleIds: id.role_ids, emoji: id.emoji, title: id.title };
      const description = id.description;
      let str = "";
      if (null != description) {
        str = description;
      }
      obj.description = str;
      return obj;
    }),
    title: id.title,
    singleSelect: id.single_select,
    disabled: id.disabled,
    required: id.required,
    inOnboarding: id.in_onboarding,
    type: id.type
  };
}
function getConnectionIdentifier(connection_type) {
  if (connection_type.connection_type === obj.APPLICATION) {
    const _HermesInternal2 = HermesInternal;
    let combined = "app:" + connection_type.application_id;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "provider:" + connection_type.provider_id;
  }
  return combined;
}
function validateOnboardingConnection(connection_type) {
  const items = [];
  connection_type = connection_type.connection_type;
  if (obj.APPLICATION === connection_type) {
    if (obj3.isNullOrEmpty(connection_type.application_id)) {
      items.push("Application ID is required for application connections");
    }
    const obj3 = arg1(dependencyMap[5]);
    if (!obj4.isNullOrEmpty(connection_type.provider_id)) {
      items.push("Platform ID not allowed for application connections");
    }
    const obj4 = arg1(dependencyMap[5]);
  } else if (obj.PROVIDER_CONNECTED_ACCOUNT === connection_type) {
    const obj = arg1(dependencyMap[5]);
    if (obj.isNullOrEmpty(connection_type.provider_id)) {
      items.push("Platform ID is required for platform connections");
    } else if (!closure_10.includes(connection_type.provider_id)) {
      items.push("Invalid platform ID");
    }
    if (!obj2.isNullOrEmpty(connection_type.application_id)) {
      items.push("Application ID not allowed for platform connections");
    }
    const obj2 = arg1(dependencyMap[5]);
  } else {
    const connection_type2 = connection_type.connection_type;
    items.push("Invalid connection type");
    return items;
  }
  let tmp16 = null != connection_type.description;
  if (tmp16) {
    tmp16 = connection_type.description.length > 100;
  }
  if (tmp16) {
    items.push("Description must be 100 characters or less");
  }
  return items;
}
let closure_3 = [null];
let closure_4 = [null];
let closure_5 = importDefault(dependencyMap[0]);
let closure_6 = importDefault(dependencyMap[1]);
const PlatformTypes = arg1(dependencyMap[2]).PlatformTypes;
let obj = { MULTIPLE_CHOICE: 0, [0]: "MULTIPLE_CHOICE", DROPDOWN: 1, [1]: "DROPDOWN" };
obj = { APPLICATION: 0, [0]: "APPLICATION", PROVIDER_CONNECTED_ACCOUNT: 1, [1]: "PROVIDER_CONNECTED_ACCOUNT" };
const items = [, , , , , , , ];
({ PLAYSTATION_STAGING: arr[0], CONTACTS: arr[1], DOMAIN: arr[2], TWITTER_LEGACY: arr[3], MASTODON: arr[4], INSTAGRAM: arr[5], LEAGUE_OF_LEGENDS: arr[6], SKYPE: arr[7] } = PlatformTypes);
const set = new Set(items);
const values = Object.values(PlatformTypes);
let closure_10 = values.filter((arg0) => !set.has(arg0));
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_onboarding/GuildOnboardingPromptsConstants.tsx");

export const MAX_PROMPT_TITLE_LENGTH = 100;
export const MAX_PROMPT_OPTION_TITLE_LENGTH = 50;
export const MAX_PROMPT_OPTION_DESCRIPTION_LENGTH = 100;
export const MAX_NUM_PROMPTS = 15;
export const MULTIPLE_CHOICE_MAX_NUM_OPTIONS = 12;
export const DROPDOWN_MAX_NUM_OPTIONS = 50;
export const MAX_DEFAULT_CHANNEL_IDS = 25;
export const MAX_NUMBER_OF_ONBOARDING_CONNECTIONS = 10;
export const MAX_CONNECTION_DESCRIPTION_LENGTH = 100;
export const MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING = 4;
export const NUM_DEFAULT_CHATTABLE_CHANNELS_MIN = 1;
export const ONBOARDING_PROMPT_TYPE_SWITCH_THRESHOLD = 13;
export const GuildOnboardingTab = { CUSTOMIZE: 0, [0]: "CUSTOMIZE", BROWSE: 1, [1]: "BROWSE" };
export const OnboardingPromptType = obj;
export const GuildOnboardingMode = { ONBOARDING_DEFAULT: 0, [0]: "ONBOARDING_DEFAULT", ONBOARDING_ADVANCED: 1, [1]: "ONBOARDING_ADVANCED" };
export const OnboardingConnectionType = obj;
export const isDefaultPrompt = function isDefaultPrompt(options) {
  if (options.options.length > 0) {
    return false;
  } else {
    const tmp2 = getDefaultPrompt();
    const id = tmp2.id;
    const id2 = options.id;
    const tmp5 = callback2(tmp2, closure_3);
    return importDefault(dependencyMap[3])(tmp5, callback2(options, closure_4));
  }
};
export { getDefaultPrompt };
export const getEmptyPrompt = function getEmptyPrompt(inOnboarding) {
  const obj = { json: "getField", ppt: "%Promise_resolve%", pptx: "NATIVE_REQUIRED_ASSETS", video: "updateClipMetadata", xls: "Array", id: String(Date.now()), options: [], inOnboarding };
  obj.type = obj.MULTIPLE_CHOICE;
  return obj;
};
export const clientPromptToServerPrompt = function clientPromptToServerPrompt(id) {
  const options = id.options;
  return {
    id: id.id,
    options: options.map((id) => {
      const obj = { id: id.id, channel_ids: id.channelIds, role_ids: id.roleIds, emoji: id.emoji };
      const emoji = id.emoji;
      id = undefined;
      if (null != emoji) {
        id = emoji.id;
      }
      obj.emoji_id = id;
      const emoji2 = id.emoji;
      let name;
      if (null != emoji2) {
        name = emoji2.name;
      }
      obj.emoji_name = name;
      const emoji3 = id.emoji;
      let animated;
      if (null != emoji3) {
        animated = emoji3.animated;
      }
      obj.emoji_animated = animated;
      ({ title: obj.title, description: obj.description } = id);
      return obj;
    }),
    title: id.title,
    single_select: id.singleSelect,
    disabled: id.disabled,
    required: id.required,
    in_onboarding: id.inOnboarding,
    type: id.type
  };
};
export { serverPromptToClientPrompt };
export const serverApiResponseToClientState = function serverApiResponseToClientState(defaultChannelIds) {
  let connections;
  let onboarding_prompts_seen;
  const obj = { prompts: prompts.map(serverPromptToClientPrompt), defaultChannelIds: defaultChannelIds.default_channel_ids };
  const prompts = defaultChannelIds.prompts;
  let responses = defaultChannelIds.responses;
  if (null == responses) {
    responses = [];
  }
  obj.responses = responses;
  ({ mode: obj.mode, enabled: obj.enabled, onboarding_prompts_seen } = defaultChannelIds);
  if (null == onboarding_prompts_seen) {
    onboarding_prompts_seen = {};
  }
  obj.onboardingPromptsSeen = onboarding_prompts_seen;
  let prop = defaultChannelIds.onboarding_responses_seen;
  if (null == prop) {
    prop = {};
  }
  obj.onboardingResponsesSeen = prop;
  ({ below_requirements: obj.belowRequirements, connections } = defaultChannelIds);
  if (null == connections) {
    connections = [];
  }
  obj.connections = connections;
  let prop1 = defaultChannelIds.additional_connections;
  if (null == prop1) {
    prop1 = [];
  }
  obj.additionalConnections = prop1;
  return obj;
};
export const isEmojiEmpty = function isEmojiEmpty(id) {
  let tmp = null == id;
  if (!tmp) {
    tmp = null == id.id && null == id.name;
    const tmp2 = null == id.id && null == id.name;
  }
  return tmp;
};
export const EXCLUDED_ONBOARDING_PLATFORM_TYPES = set;
export { getConnectionIdentifier };
export const parseConnectionIdentifier = function parseConnectionIdentifier(str) {
  const tmp = callback(str.split(":"), 2);
  const first = tmp[0];
  if ("app" === first) {
    if (undefined !== tmp3) {
      if ("" !== tmp3) {
        let obj = {};
        obj.type = obj.APPLICATION;
        obj.applicationId = tmp3;
        let tmp4 = obj;
      }
      return tmp4;
    }
  }
  tmp4 = null;
  if ("provider" === first) {
    tmp4 = null;
    if (undefined !== tmp3) {
      tmp4 = null;
      if ("" !== tmp3) {
        obj = {};
        obj.type = obj.PROVIDER_CONNECTED_ACCOUNT;
        obj.providerId = tmp3;
        tmp4 = obj;
      }
    }
  }
};
export { validateOnboardingConnection };
export const validateOnboardingConnections = function validateOnboardingConnections(arr) {
  let done;
  const items = [];
  const arg1 = items;
  const importDefault = new Set();
  function _loop(arg0) {
    let items = arg0;
    let arr = callback2(closure_2);
    items = [...arr.map((arg0) => "Connection " + arg0 + 1 + ": " + arg0)];
    items.push.apply(items);
    const tmp2 = callback(closure_2);
    if (set.has(tmp2)) {
      arr = items.push("Duplicate connection configuration");
    }
    set.add(tmp2);
  }
  const tmp2 = _createForOfIteratorHelperLoose(arr.entries());
  let iter = tmp2();
  if (!iter.done) {
    do {
      let tmp3 = closure_5;
      let tmp4 = closure_5(iter.value, 2);
      closure_2 = tmp4[1];
      let _loopResult = _loop(tmp4[0]);
      let iter2 = tmp2();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
  return items;
};
