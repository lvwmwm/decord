// Module ID: 5389
// Function ID: 45917
// Name: PromptHeader
// Dependencies: []
// Exports: DropdownPrompt, MultipleChoicePrompt, RulesPrompt

// Module 5389 (PromptHeader)
function PromptHeader(currentPrompt) {
  let currentPromptIndex;
  let numberOfPrompts;
  currentPrompt = currentPrompt.currentPrompt;
  ({ numberOfPrompts, currentPromptIndex } = currentPrompt);
  const tmp = callback4();
  let obj = {};
  obj = { style: tmp.promptHeader };
  obj = { Promise: null, marginTop: null, flags: null, style: tmp.countText };
  const intl = arg1(dependencyMap[21]).intl;
  obj.children = intl.format(arg1(dependencyMap[21]).t.isV0NW, { currentQuestion: currentPromptIndex + 1, questionCount: numberOfPrompts });
  const items = [callback2(arg1(dependencyMap[20]).Text, obj), ];
  let tmp5 = null;
  if (null != currentPrompt) {
    tmp5 = null;
    if (currentPrompt.required) {
      const obj2 = {};
      const obj3 = { style: tmp.requiredSeparator };
      const items1 = [callback2(closure_6, obj3), ];
      const obj4 = { INTEGRATION_CREATE: -436207324, ConstraintReasonCode: 301991094 };
      const intl2 = arg1(dependencyMap[21]).intl;
      obj4.children = intl2.string(arg1(dependencyMap[21]).t.Ur8Vrt);
      items1[1] = callback2(arg1(dependencyMap[20]).Text, obj4);
      obj2.children = items1;
      tmp5 = callback3(closure_17, obj2);
    }
  }
  items[1] = tmp5;
  obj.children = items;
  const items2 = [callback3(closure_6, obj), callback2(arg1(dependencyMap[20]).Text, { style: tmp.title, children: currentPrompt.title })];
  obj.children = items2;
  return callback3(closure_17, obj);
}
function PromptFooter(lastPrompt) {
  let currentPrompt;
  let helpText;
  let helpTextAdditional;
  let selectedOptionIds;
  ({ guildId: closure_0, currentPrompt, selectedOptionIds } = lastPrompt);
  const importDefault = selectedOptionIds;
  lastPrompt = lastPrompt.lastPrompt;
  let dependencyMap;
  const tmp = callback4();
  let obj = arg1(dependencyMap[14]);
  const items = [closure_11];
  let tmp3 = 0 === selectedOptionIds.length;
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(closure_0));
  if (tmp3) {
    tmp3 = !(null != currentPrompt && currentPrompt.required);
    const tmp5 = null != currentPrompt && currentPrompt.required;
  }
  const intl = arg1(dependencyMap[21]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[21]).t;
  if (lastPrompt) {
    const _HermesInternal = HermesInternal;
    let combined = "" + string(t.8SuVoE) + " \u{1F389}";
  } else if (tmp3) {
    combined = string(t.5Wxrcd);
  } else {
    combined = string(t.PDTjLN);
  }
  let tmp8 = 0 === selectedOptionIds.length;
  if (tmp8) {
    let required;
    if (null != currentPrompt) {
      required = currentPrompt.required;
    }
    tmp8 = required;
  }
  let found;
  if (null != currentPrompt) {
    const options = currentPrompt.options;
    if (null != options) {
      found = options.filter((id) => selectedOptionIds.includes(id.id));
    }
  }
  dependencyMap = found;
  const items1 = [found];
  const items2 = [found];
  const memo = React.useMemo(() => {
    if (null != found) {
      let selectedRoleIds = callback(found[26]).getSelectedRoleIds(found);
      const obj = callback(found[26]);
    } else {
      const _Set = Set;
      selectedRoleIds = new Set();
    }
    return selectedRoleIds;
  }, items1);
  const memo1 = React.useMemo(() => {
    if (null != found) {
      let selectedChannelIds = callback(found[26]).getSelectedChannelIds(found);
      const obj = callback(found[26]);
    } else {
      const _Set = Set;
      selectedChannelIds = new Set();
    }
    return selectedChannelIds;
  }, items2);
  obj = { guild: stateFromStores, prompt: currentPrompt, selectedRoleIds: memo, selectedChannelIds: memo1, itemHook: formattedNameHighlight };
  ({ helpText, helpTextAdditional } = importDefault(dependencyMap[27])(obj));
  let obj2 = arg1(dependencyMap[16]);
  const token = obj2.useToken(importDefault(dependencyMap[12]).colors.BACKGROUND_BASE_LOWER);
  let obj3 = importDefault(dependencyMap[17])(token);
  const tmp14 = importDefault(dependencyMap[27])(obj);
  const items3 = [obj3.alpha(0).hex(), ];
  let obj5 = importDefault(dependencyMap[17])(token);
  const alphaResult = obj3.alpha(0);
  items3[1] = obj5.alpha(1).hex();
  obj = { style: tmp.footer };
  const obj1 = { style: items4 };
  const items4 = [tmp.scrollContainerGradient];
  const alphaResult1 = obj5.alpha(1);
  const tmp16 = callback3;
  const tmp17 = closure_6;
  obj1.start = arg1(dependencyMap[25]).VerticalGradient.START;
  obj1.end = arg1(dependencyMap[25]).VerticalGradient.END;
  obj1.colors = items3;
  obj1.pointerEvents = "none";
  const items5 = [callback2(importDefault(dependencyMap[24]), obj1), ];
  obj2 = { style: tmp.footerContent };
  let tmp21 = null;
  if (tmp8) {
    obj3 = { style: tmp.helpText };
    const intl2 = arg1(dependencyMap[21]).intl;
    obj3.children = intl2.string(arg1(dependencyMap[21]).t.dA1dSf);
    tmp21 = callback2(arg1(dependencyMap[20]).Text, obj3);
  }
  const items6 = [tmp21, , ];
  if ("" !== helpText) {
    const obj4 = { style: tmp.helpText };
    const items7 = [helpText, " ", helpTextAdditional];
    obj4.children = items7;
    let tmp25 = callback3(arg1(dependencyMap[20]).Text, obj4);
  } else {
    tmp25 = null;
  }
  items6[1] = tmp25;
  obj5 = { <string:1522289750>: 40, <string:570601313>: true, <string:1952092929>: "/assets/.cache/intl/bW9kdWxlcy9nb19saXZlL3dlYi9tb2RhbA==" };
  let str4 = "primary";
  if (tmp3) {
    str4 = "primary";
    if (!lastPrompt) {
      str4 = "secondary";
    }
  }
  obj5.variant = str4;
  obj5.text = combined;
  obj5.onPress = lastPrompt.handleOnPress;
  obj5.disabled = tmp8;
  items6[2] = callback2(arg1(dependencyMap[22]).Button, obj5);
  obj2.children = items6;
  items5[1] = callback3(closure_6, obj2);
  obj.children = items5;
  return tmp16(tmp17, obj);
}
function formattedNameHighlight(children) {
  const obj = { INTEGRATION_CREATE: "<string:1153630209>", ConstraintReasonCode: "<string:2388000769>", children };
  return callback2(arg1(dependencyMap[20]).Text, obj, arg1);
}
function DropdownOption(option) {
  option = option.option;
  const arg1 = option;
  const tmp = callback4();
  let obj = arg1(dependencyMap[14]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const emoji = option.emoji;
    let id;
    if (null != emoji) {
      id = emoji.id;
    }
    let usableCustomEmojiById = null;
    if (null != id) {
      const emoji2 = option.emoji;
      let id1;
      if (null != emoji2) {
        id1 = emoji2.id;
      }
      usableCustomEmojiById = usableCustomEmojiById.getUsableCustomEmojiById(id1);
    }
    return usableCustomEmojiById;
  });
  obj = { style: tmp.dropdownPill };
  obj = { style: tmp.emojiContainer };
  const obj1 = { textEmojiStyle: tmp.optionTextEmoji, fastImageStyle: tmp.optionImageEmoji };
  let emojiURL;
  if (null != stateFromStores) {
    const obj2 = {};
    ({ id: obj6.id, animated: obj6.animated } = stateFromStores);
    obj2.size = EMOJI_URL_BASE_SIZE;
    emojiURL = importDefault(dependencyMap[30]).getEmojiURL(obj2);
    const obj5 = importDefault(dependencyMap[30]);
  }
  obj1.src = emojiURL;
  const emoji = option.emoji;
  let name;
  if (null != emoji) {
    name = emoji.name;
  }
  let str = "";
  if (null != name) {
    str = name;
  }
  obj1.name = str;
  obj.children = callback2(importDefault(dependencyMap[29]), obj1);
  const items1 = [callback2(closure_6, obj), callback2(arg1(dependencyMap[20]).Text, { variant: "text-md/semibold", children: option.title })];
  obj.children = items1;
  return closure_16(closure_6, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ Image: closure_5, View: closure_6, ScrollView: closure_7, FlatList: closure_8 } = arg1(dependencyMap[2]));
let closure_9 = importDefault(dependencyMap[3]);
let closure_10 = importDefault(dependencyMap[4]);
let closure_11 = importDefault(dependencyMap[5]);
let closure_12 = importDefault(dependencyMap[6]);
let closure_13 = arg1(dependencyMap[7]).GuildOnboardingModalStates;
const EMOJI_URL_BASE_SIZE = arg1(dependencyMap[8]).EMOJI_URL_BASE_SIZE;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = arg1(dependencyMap[9]));
let obj = arg1(dependencyMap[10]);
obj = { flex: { flex: 1 } };
obj = { marginTop: arg1(dependencyMap[11]).NAV_BAR_HEIGHT, backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_BASE_LOWER };
obj.container = obj;
const tmp3 = arg1(dependencyMap[9]);
obj.scrollContainer = { backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_BASE_LOWER };
obj.scrollContainerGradient = {};
obj.promptHeader = { "Null": 8, "Null": null, "Null": "\u270A\u{1F3FF}", "Null": true };
const obj1 = { backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_BASE_LOWER };
obj.requiredSeparator = { color: importDefault(dependencyMap[12]).colors.BORDER_SUBTLE, backgroundColor: importDefault(dependencyMap[12]).colors.BORDER_SUBTLE, borderRadius: importDefault(dependencyMap[12]).radii.xs };
obj.countText = {};
obj.title = { marginBottom: 32 };
obj.helpText = {};
const obj2 = { color: importDefault(dependencyMap[12]).colors.BORDER_SUBTLE, backgroundColor: importDefault(dependencyMap[12]).colors.BORDER_SUBTLE, borderRadius: importDefault(dependencyMap[12]).radii.xs };
obj.footer = { backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_BASE_LOWER };
obj.footerText = { <string:1751189110>: "<string:1291846036>", <string:3473082195>: "<string:637534498>", <string:1627492630>: "<string:1140851364>" };
obj.footerContent = { "Null": true, "Null": true };
obj.optionTextEmoji = { "Null": 1282146306, "Null": 1347551233, <string:3502029666>: -1066072926 };
obj.optionImageEmoji = { "Null": true, "Null": true, "Null": true };
obj.emojiContainer = { "Bool(true)": true, "Bool(true)": true };
const obj4 = { "Null": "localItemAcks", "Null": "Uint32Array", "Null": "getTryItOutChanges", "Null": "unique", "Null": "stripSentryFramesAndReverse", "Null": "P", "Null": "collectiblesItem", "Null": "P", "Null": "withLeftMargin", "Null": "__SENTRY_EXCLUDE_REPLAY_WORKER__", borderRadius: importDefault(dependencyMap[12]).radii.sm, backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_BASE_LOWEST };
obj.dropdownContainer = obj4;
obj.emptyDropdownText = { marginTop: 16 };
const obj3 = { backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_BASE_LOWER };
obj.dropdownPill = { borderRadius: importDefault(dependencyMap[12]).radii.sm, backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_BASE_LOW };
obj.dropdownIconContainer = { ignoreDuration: "r", limits: "isArray", initialScrollStart: "ct" };
obj.dropdownIcon = { <string:1140607356>: "boolean", <string:1751293292>: "string" };
let closure_18 = obj.createStyles(obj);
const obj5 = { borderRadius: importDefault(dependencyMap[12]).radii.sm, backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_BASE_LOW };
const result = arg1(dependencyMap[36]).fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingPrompt.tsx");

export const RulesPrompt = function RulesPrompt(guildId) {
  const arg1 = guildId.guildId;
  let END = callback4();
  let obj = arg1(dependencyMap[13]);
  const importDefault = obj.useNavigation();
  let obj1 = arg1(dependencyMap[14]);
  const items = [closure_10];
  const stateFromStores = obj1.useStateFromStores(items, () => store.getRulesPrompt(guildId));
  const dependencyMap = stateFromStores;
  let obj2 = arg1(dependencyMap[14]);
  const items1 = [closure_11];
  const callback = obj2.useStateFromStores(items1, () => {
    const guild = guild.getGuild(guildId);
    let rulesChannelId;
    if (null != guild) {
      rulesChannelId = guild.rulesChannelId;
    }
    return rulesChannelId;
  });
  const bottom = importDefault(dependencyMap[15])().bottom;
  const sum = 64 + bottom + 8;
  let obj3 = arg1(dependencyMap[14]);
  const items2 = [closure_10];
  const React = obj3.useStateFromStores(items2, () => store.get(guildId));
  const tmp3 = callback(React.useState(false), 2);
  let string = tmp3[0];
  let closure_5 = tmp3[1];
  let obj4 = arg1(dependencyMap[16]);
  const token = obj4.useToken(importDefault(dependencyMap[12]).colors.BACKGROUND_BASE_LOWER);
  let obj5 = importDefault(dependencyMap[17])(token);
  let str = [obj5.alpha(0).hex(), ];
  let obj7 = importDefault(dependencyMap[17])(token);
  const alphaResult = obj5.alpha(0);
  str[1] = obj7.alpha(1).hex();
  if (null == stateFromStores) {
    return null;
  } else {
    obj = { top: true };
    const items3 = [, ];
    ({ flex: arr4[0], container: arr4[1] } = END);
    obj.style = items3;
    let tmp8 = closure_16;
    let tmp9 = closure_6;
    obj = { style: END.flex };
    obj1 = {};
    const items4 = [END.scrollContainer, ];
    obj2 = { paddingBottom: sum };
    items4[1] = obj2;
    obj1.contentContainerStyle = items4;
    obj1.data = [0.229];
    obj1.renderItem = function renderItem() {
      return callback2(arr(stateFromStores[19]), { rules: stateFromStores.values, rulesChannelId: closure_3 });
    };
    obj1.onEndReached = function onEndReached() {
      return callback(true);
    };
    let items5 = [callback2(closure_8, obj1), ];
    obj3 = {};
    const items6 = [, , ];
    ({ footer: arr8[0], footerContent: arr8[1] } = END);
    obj4 = { paddingBottom: bottom };
    items6[2] = obj4;
    obj3.style = items6;
    let items7 = callback2;
    let Text = arg1(dependencyMap[20]).Text;
    obj5 = { style: END.footerText, variant: "text-xs/medium" };
    let num3 = 21;
    let intl = arg1(dependencyMap[21]).intl;
    let string2 = intl.string;
    let Button = arg1(dependencyMap[21]).t;
    if (string) {
      let string2Result = string2(Button.arAe3I);
    } else {
      string2Result = string2(Button.D0CVAc);
    }
    obj5.children = string2Result;
    items7 = [, ];
    items7[0] = items7(Text, obj5);
    string2 = callback2;
    obj5 = arg1;
    Text = dependencyMap;
    Button = arg1(dependencyMap[22]).Button;
    const obj6 = { disabled: !string };
    intl = arg1(dependencyMap[num3]).intl;
    string = intl.string;
    num3 = string(arg1(dependencyMap[num3]).t.0KL0ot);
    obj6.text = num3;
    obj6.onPress = function onPress() {
      let tmp = null != stateFromStores;
      if (tmp) {
        tmp = null != closure_4;
      }
      if (tmp) {
        let obj = arr(stateFromStores[23]);
        obj = {};
        const merged = Object.assign(closure_4);
        obj = {};
        const merged1 = Object.assign(stateFromStores);
        obj["response"] = true;
        const items = [obj];
        obj["formFields"] = items;
        const result = obj.submitVerificationForm(guildId, obj);
        const arr = arr.push(constants.COMPLETED);
      }
    };
    items7[1] = callback2(Button, obj6);
    obj3.children = items7;
    obj3 = closure_16(closure_6, obj3);
    items5[1] = obj3;
    obj.children = items5;
    const items7Result = items7(Text, obj5);
    const tmp12 = closure_16;
    const tmp13 = closure_6;
    const tmp5 = closure_16;
    obj = [, ];
    obj[0] = tmp8(tmp9, obj);
    tmp8 = callback2;
    tmp9 = importDefault(dependencyMap[24]);
    obj7 = {};
    const items8 = [END.scrollContainerGradient, ];
    const obj8 = { bottom: sum };
    items8[1] = obj8;
    obj7.style = items8;
    items5 = arg1(dependencyMap[25]).VerticalGradient.START;
    obj7.start = items5;
    END = arg1(dependencyMap[25]).VerticalGradient.END;
    obj7.end = END;
    obj7.colors = str;
    str = "none";
    obj7.pointerEvents = "none";
    obj[1] = callback2(tmp9, obj7);
    obj.children = obj;
    tmp5(arg1(dependencyMap[18]).SafeAreaPaddingView, obj);
    const tmp8Result = tmp8(tmp9, obj);
  }
};
export const MultipleChoicePrompt = function MultipleChoicePrompt(guildId) {
  let currentPromptIndex;
  let handleOnPress;
  let lastPrompt;
  let numberOfPrompts;
  guildId = guildId.guildId;
  const arg1 = guildId;
  const currentPrompt = guildId.currentPrompt;
  const importDefault = currentPrompt;
  const dependencyMap = guildId.selectOption;
  ({ lastPrompt, currentPromptIndex, numberOfPrompts, handleOnPress } = guildId);
  let obj = arg1(dependencyMap[14]);
  const items = [closure_12];
  const items1 = [guildId, currentPrompt];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    if (null != currentPrompt) {
      let onboardingResponsesForPrompt = onboardingResponsesForPrompt.getOnboardingResponsesForPrompt(guildId, currentPrompt.id);
    } else {
      onboardingResponsesForPrompt = [];
    }
    return onboardingResponsesForPrompt;
  }, items1);
  let closure_3 = stateFromStoresArray;
  obj = {};
  obj = { contentContainerStyle: items2 };
  const items2 = [callback4().scrollContainer, ];
  const tmp = callback4();
  items2[1] = { paddingBottom: 64 + importDefault(dependencyMap[15])().bottom + 48 + 48, position: "relative" };
  const items3 = [callback2(PromptHeader, { currentPrompt, numberOfPrompts, currentPromptIndex }), ];
  const obj1 = { paddingBottom: 64 + importDefault(dependencyMap[15])().bottom + 48 + 48, position: "relative" };
  const options = currentPrompt.options;
  items3[1] = callback2(closure_6, {
    children: options.map((id) => {
      const guildId = id;
      const obj = {
        option: id,
        guildId,
        onSelect(arg0) {
          let tmp2 = null != arg0;
          if (tmp2) {
            tmp2 = arg0;
          }
          return closure_2(id.id, arg0.id, tmp2);
        }
      };
      const hasItem = stateFromStoresArray.includes(id.id);
      obj.selected = null != hasItem && hasItem;
      return closure_15(currentPrompt(selectOption[28]), obj, id.id);
    })
  });
  obj.children = items3;
  const items4 = [callback3(closure_7, obj), callback2(PromptFooter, { guildId, currentPrompt, selectedOptionIds: stateFromStoresArray, handleOnPress, lastPrompt })];
  obj.children = items4;
  return callback3(closure_17, obj);
};
export const DropdownPrompt = function DropdownPrompt(guildId) {
  let currentPromptIndex;
  let handleOnPress;
  let lastPrompt;
  let numberOfPrompts;
  guildId = guildId.guildId;
  const arg1 = guildId;
  const currentPrompt = guildId.currentPrompt;
  const importDefault = currentPrompt;
  const selectOption = guildId.selectOption;
  const dependencyMap = selectOption;
  ({ lastPrompt, currentPromptIndex, numberOfPrompts, handleOnPress } = guildId);
  const tmp = callback4();
  let obj = arg1(dependencyMap[14]);
  const items = [closure_12];
  const items1 = [guildId, currentPrompt];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    if (null != currentPrompt) {
      let onboardingResponsesForPrompt = onboardingResponsesForPrompt.getOnboardingResponsesForPrompt(guildId, currentPrompt.id);
    } else {
      onboardingResponsesForPrompt = [];
    }
    return onboardingResponsesForPrompt;
  }, items1);
  let closure_3 = stateFromStoresArray;
  let found;
  if (null != currentPrompt) {
    const options = currentPrompt.options;
    if (null != options) {
      found = options.filter((id) => stateFromStoresArray.includes(id.id));
    }
  }
  const items2 = [guildId, currentPrompt.id, selectOption];
  obj = {};
  obj = { contentContainerStyle: items3 };
  const items3 = [tmp.scrollContainer, { paddingBottom: 64 + importDefault(dependencyMap[15])().bottom + 48 + 48, position: "relative" }];
  const callback = React.useCallback(() => {
    let obj = currentPrompt(selectOption[31]);
    obj = {
      guildId,
      promptId: currentPrompt.id,
      onSelect(id) {
        let tmp2 = null != arg1;
        if (tmp2) {
          tmp2 = arg1;
        }
        return closure_2(id.id, id.id, tmp2);
      }
    };
    obj.openLazy(guildId(selectOption[33])(selectOption[32], selectOption.paths), "DropdownOptions", obj);
  }, items2);
  const items4 = [callback2(PromptHeader, { currentPrompt, numberOfPrompts, currentPromptIndex }), ];
  const obj2 = {};
  const obj3 = { style: tmp.dropdownContainer, onPress: callback };
  let tmp11 = 0 === found.length;
  if (tmp11) {
    const obj4 = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, style: tmp.emptyDropdownText };
    tmp11 = callback2(arg1(dependencyMap[20]).Text, obj4);
  }
  const items5 = [tmp11, found.map((id) => callback(closure_22, { option: id }, id.id)), ];
  const obj5 = { style: tmp.dropdownIconContainer };
  const obj1 = { paddingBottom: 64 + importDefault(dependencyMap[15])().bottom + 48 + 48, position: "relative" };
  const tmp10 = closure_16;
  const tmp6 = closure_17;
  const tmp7 = closure_7;
  const tmp8 = callback2;
  const tmp9 = closure_6;
  obj5.children = callback2(closure_5, { style: tmp.dropdownIcon, source: importDefault(dependencyMap[35]) });
  items5[2] = callback2(closure_6, obj5);
  obj3.children = items5;
  obj2.children = tmp10(arg1(dependencyMap[34]).PressableHighlight, obj3);
  items4[1] = tmp8(tmp9, obj2);
  obj.children = items4;
  const items6 = [closure_16(tmp7, obj), callback2(PromptFooter, { guildId, currentPrompt, selectedOptionIds: stateFromStoresArray, handleOnPress, lastPrompt })];
  obj.children = items6;
  return closure_16(tmp6, obj);
};
