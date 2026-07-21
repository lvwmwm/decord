// Module ID: 9962
// Function ID: 76944
// Name: EmptyCustomizeCommunity
// Dependencies: []
// Exports: default

// Module 9962 (EmptyCustomizeCommunity)
function EmptyCustomizeCommunity(setTab) {
  const arg1 = setTab.setTab;
  const tmp = callback3();
  let obj = arg1(dependencyMap[15]);
  let obj1 = arg1(dependencyMap[17]);
  const items = [closure_10];
  const importDefault = obj1.useStateFromStores(items, () => guildId.getGuildId());
  obj = { style: tmp.emptyContainer };
  obj = { style: tmp.emptyContainerImage };
  if (isThemeDarkResult) {
    let tmp9 = tmp8[18];
  } else {
    tmp9 = tmp8[19];
  }
  obj.source = importDefault(tmp9);
  const items1 = [callback(closure_5, obj), , ];
  obj1 = { style: tmp.emptyContainerHeader };
  const intl = arg1(dependencyMap[21]).intl;
  obj1.children = intl.string(arg1(dependencyMap[21]).t.leKHQz);
  items1[1] = callback(arg1(dependencyMap[20]).LegacyText, obj1);
  const obj2 = {};
  const intl2 = arg1(dependencyMap[21]).intl;
  obj2.children = intl2.format(arg1(dependencyMap[21]).t.jH+ktB, {
    onBrowseChannels() {
      if (null != closure_1) {
        setTab(constants.BROWSE);
      }
    }
  });
  items1[2] = callback(arg1(dependencyMap[22]).Text, obj2);
  obj.children = items1;
  return closure_17(closure_4, obj);
}
function PromptTitle(item) {
  item = item.item;
  let obj = { style: callback3().titleContainer };
  obj = {};
  const items = [item.title, ];
  let tmp4 = null;
  if (item.required) {
    obj = { children: [] };
    tmp4 = callback2(arg1(dependencyMap[22]).Text, obj);
  }
  items[1] = tmp4;
  obj.children = items;
  obj.children = callback2(arg1(dependencyMap[22]).Heading, obj);
  return closure_16(closure_4, obj);
}
function PromptHelpText(arg0) {
  let _prompt;
  let helpText;
  let helpTextAdditional;
  ({ guildId: closure_0, prompt: _prompt, selectedOptionIds: closure_1 } = arg0);
  let dependencyMap;
  let obj = arg1(dependencyMap[17]);
  const items = [closure_8];
  let found;
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(closure_0));
  if (null != _prompt) {
    const options = _prompt.options;
    if (null != options) {
      found = options.filter((id) => closure_1.includes(id.id));
    }
  }
  dependencyMap = found;
  const items1 = [found];
  const items2 = [found];
  const memo = React.useMemo(() => {
    if (null != found) {
      let selectedRoleIds = callback(found[23]).getSelectedRoleIds(found);
      const obj = callback(found[23]);
    } else {
      const _Set = Set;
      selectedRoleIds = new Set();
    }
    return selectedRoleIds;
  }, items1);
  const memo1 = React.useMemo(() => {
    if (null != found) {
      let selectedChannelIds = callback(found[23]).getSelectedChannelIds(found);
      const obj = callback(found[23]);
    } else {
      const _Set = Set;
      selectedChannelIds = new Set();
    }
    return selectedChannelIds;
  }, items2);
  obj = {
    guild: stateFromStores,
    prompt: _prompt,
    selectedRoleIds: memo,
    selectedChannelIds: memo1,
    itemHook(children) {
      return callback2(callback(found[22]).Text, { children }, arg1);
    }
  };
  const tmp = callback3();
  ({ helpText, helpTextAdditional } = importDefault(dependencyMap[24])(obj));
  if ("" !== helpText) {
    obj = { style: tmp.helpText };
    const items3 = [helpText, " ", helpTextAdditional];
    obj.children = items3;
    let tmp7 = callback2(arg1(dependencyMap[22]).Text, obj);
  } else {
    tmp7 = null;
  }
  return tmp7;
}
function ConnectionsPrompt(guildId) {
  const arg1 = guildId.guildId;
  const tmp = callback3();
  let obj = arg1(dependencyMap[17]);
  const items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => connections.getConnections(guildId));
  let tmp2 = null;
  if (0 !== stateFromStores.length) {
    obj = { style: tmp.connectionsPromptContainer };
    obj = { "Null": null, "Null": null, "Null": null, style: tmp.connectionsTitle };
    const intl = arg1(dependencyMap[21]).intl;
    obj.children = intl.string(arg1(dependencyMap[21]).t.eDVMrA);
    const items1 = [callback(arg1(dependencyMap[22]).Text, obj), , ];
    const obj1 = {};
    const intl2 = arg1(dependencyMap[21]).intl;
    obj1.children = intl2.string(arg1(dependencyMap[21]).t.BozOXu);
    items1[1] = callback(arg1(dependencyMap[22]).Text, obj1);
    const obj2 = {
      style: tmp.connectionsContainer,
      children: stateFromStores.map((connection) => {
          const obj = { connection, guildId, location: callback(closure_2[26]).CHANNELS_AND_ROLES };
          return callback2(callback(closure_2[25]), obj, arg1);
        })
    };
    items1[2] = callback(closure_4, obj2);
    obj.children = items1;
    tmp2 = callback2(closure_4, obj);
  }
  return tmp2;
}
function DropdownOption(option) {
  option = option.option;
  const arg1 = option;
  const tmp = callback3();
  let obj = arg1(dependencyMap[17]);
  const items = [closure_7];
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
  const emoji = option.emoji;
  let id;
  if (null != emoji) {
    id = emoji.id;
  }
  let tmp8Result = null != id;
  if (!tmp8Result) {
    const emoji2 = option.emoji;
    let name;
    if (null != emoji2) {
      name = emoji2.name;
    }
    tmp8Result = null != name;
  }
  obj = { style: tmp.dropdownPill };
  if (tmp8Result) {
    obj = { style: tmp.emojiContainer };
    const obj1 = {};
    ({ optionTextEmoji: obj4.textEmojiStyle, optionImageEmoji: obj4.fastImageStyle } = tmp);
    let emojiURL;
    if (null != stateFromStores) {
      const obj2 = {};
      ({ id: obj6.id, animated: obj6.animated } = stateFromStores);
      obj2.size = EMOJI_URL_BASE_SIZE;
      emojiURL = importDefault(dependencyMap[33]).getEmojiURL(obj2);
      const obj5 = importDefault(dependencyMap[33]);
    }
    obj1.src = emojiURL;
    const emoji3 = option.emoji;
    let name1;
    if (null != emoji3) {
      name1 = emoji3.name;
    }
    let str = "";
    if (null != name1) {
      str = name1;
    }
    obj1.name = str;
    obj.children = callback(importDefault(dependencyMap[32]), obj1);
    tmp8Result = callback(closure_4, obj);
    const tmp10 = callback;
    const tmp13 = importDefault(dependencyMap[32]);
    const tmp8 = callback;
    const tmp9 = closure_4;
  }
  const items1 = [tmp8Result, callback(arg1(dependencyMap[22]).Text, { variant: "text-md/semibold", children: option.title })];
  obj.children = items1;
  return closure_17(closure_4, obj);
}
function DropdownPrompt(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const _prompt = guildId.prompt;
  const importDefault = _prompt;
  const tmp = callback3();
  const isNew = _prompt.isNew;
  const dependencyMap = isNew;
  let obj = arg1(dependencyMap[17]);
  const items = [closure_11];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => onboardingResponsesForPrompt.getOnboardingResponsesForPrompt(guildId, _prompt.id));
  const React = stateFromStoresArray;
  const mapped = stateFromStoresArray.map((arg0) => {
    const guildId = arg0;
    const options = _prompt.options;
    return options.find((id) => id.id === id);
  });
  const found = mapped.filter(arg1(dependencyMap[34]).isNotNullish);
  let obj1 = arg1(dependencyMap[35]);
  const token = obj1.useToken(importDefault(dependencyMap[13]).colors.BACKGROUND_BRAND);
  let obj2 = arg1(dependencyMap[36]);
  const fn = function c() {
    if (isNew) {
      let combined = concat(tmp, "FF");
    } else {
      combined = concat(tmp, "00");
    }
    let obj = {};
    const obj2 = guildId(isNew[36]);
    obj = { duration: 1 };
    const Easing = guildId(isNew[36]).Easing;
    obj.easing = Easing.in(guildId(isNew[36]).Easing.ease);
    const obj3 = guildId(isNew[37]);
    const withTimingResult = guildId(isNew[37]).withTiming(combined, obj);
    const obj5 = guildId(isNew[36]);
    obj = { duration: 300 };
    const combined1 = "" + token + "00";
    const Easing2 = guildId(isNew[36]).Easing;
    obj.easing = Easing2.out(guildId(isNew[36]).Easing.ease);
    obj.borderColor = obj2.withSequence(withTimingResult, obj5.withDelay(500, guildId(isNew[37]).withTiming(combined1, obj)));
    return obj;
  };
  obj = { isNew, brandColor: token, withSequence: arg1(dependencyMap[36]).withSequence, withTiming: arg1(dependencyMap[37]).withTiming, Easing: arg1(dependencyMap[36]).Easing, withDelay: arg1(dependencyMap[36]).withDelay };
  fn.__closure = obj;
  fn.__workletHash = 16609373875235;
  fn.__initData = closure_20;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const handleSelectOption = importDefault(dependencyMap[38])(guildId).handleSelectOption;
  const items1 = [guildId, _prompt, handleSelectOption, stateFromStoresArray.length];
  const callback = React.useCallback(() => {
    let obj = _prompt(isNew[39]);
    obj = {
      guildId,
      promptId: _prompt.id,
      onSelect(arg0, arg1) {
        let required = !arg1;
        if (required) {
          required = required.required;
        }
        if (required) {
          required = 1 === length.length;
        }
        if (!required) {
          let tmp6 = null != arg1;
          if (tmp6) {
            tmp6 = arg1;
          }
          closure_5(required, arg0, tmp6);
          const tmp3 = closure_5;
          const tmp4 = required;
        }
      },
      canBeNew: !_prompt.isNew,
      returnToCustomize: true
    };
    obj.openLazy(guildId(isNew[41])(isNew[40], isNew.paths), "DropdownOptions", obj);
  }, items1);
  obj = { style: items2 };
  const items2 = [tmp.promptContainer, animatedStyle];
  let isNew2 = _prompt.isNew;
  if (isNew2) {
    obj1 = { color: arg1(dependencyMap[20]).BadgeColors.BRAND };
    const intl = arg1(dependencyMap[21]).intl;
    obj1.text = intl.string(arg1(dependencyMap[21]).t.y2b7CA);
    ({ badge: obj6.style, badgeText: obj6.textStyle } = tmp);
    isNew2 = callback(arg1(dependencyMap[20]).TextBadge, obj1);
  }
  const items3 = [isNew2, callback(PromptTitle, { item: _prompt }), , ];
  obj2 = { style: tmp.dropdownContainer, onPress: callback };
  let tmp10 = 0 === found.length;
  if (tmp10) {
    const obj3 = { "Null": false, "Null": 400, "Null": 20, style: tmp.emptyDropdownText };
    const intl2 = arg1(dependencyMap[21]).intl;
    obj3.children = intl2.string(arg1(dependencyMap[21]).t.GmSvdA);
    tmp10 = callback(arg1(dependencyMap[22]).Text, obj3);
  }
  const items4 = [tmp10, found.map((id) => callback(closure_26, { option: id }, id.id)), ];
  const obj4 = { style: tmp.dropdownIconContainer, children: callback(handleSelectOption, { style: tmp.dropdownIcon, source: importDefault(dependencyMap[43]) }) };
  items4[2] = callback(token, obj4);
  obj2.children = items4;
  items3[2] = closure_17(arg1(dependencyMap[42]).PressableHighlight, obj2);
  items3[3] = callback(PromptHelpText, { guildId, prompt: _prompt, selectedOptionIds: stateFromStoresArray });
  obj.children = items3;
  return closure_17(importDefault(dependencyMap[36]).View, obj);
}
function MultipleChoicePrompt(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const _prompt = guildId.prompt;
  const importDefault = _prompt;
  const tmp = callback3();
  const isNew = _prompt.isNew;
  const dependencyMap = isNew;
  let obj = arg1(dependencyMap[17]);
  const items = [closure_11];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => onboardingResponsesForPrompt.getOnboardingResponsesForPrompt(guildId, _prompt.id));
  let closure_3 = stateFromStoresArray;
  const handleSelectOption = importDefault(dependencyMap[38])(guildId).handleSelectOption;
  let obj1 = arg1(dependencyMap[35]);
  const token = obj1.useToken(importDefault(dependencyMap[13]).colors.BACKGROUND_BRAND);
  const fn = function u() {
    if (isNew) {
      let combined = concat(tmp, "FF");
    } else {
      combined = concat(tmp, "00");
    }
    let obj = {};
    const obj2 = guildId(isNew[36]);
    obj = { duration: 1 };
    const Easing = guildId(isNew[36]).Easing;
    obj.easing = Easing.in(guildId(isNew[36]).Easing.ease);
    const obj3 = guildId(isNew[37]);
    const withTimingResult = guildId(isNew[37]).withTiming(combined, obj);
    const obj5 = guildId(isNew[36]);
    obj = { duration: 300 };
    const combined1 = "" + token + "00";
    const Easing2 = guildId(isNew[36]).Easing;
    obj.easing = Easing2.out(guildId(isNew[36]).Easing.ease);
    obj.borderColor = obj2.withSequence(withTimingResult, obj5.withDelay(500, guildId(isNew[37]).withTiming(combined1, obj)));
    return obj;
  };
  obj = { isNew, brandColor: token, withSequence: arg1(dependencyMap[36]).withSequence, withTiming: arg1(dependencyMap[37]).withTiming, Easing: arg1(dependencyMap[36]).Easing, withDelay: arg1(dependencyMap[36]).withDelay };
  fn.__closure = obj;
  fn.__workletHash = 12802766002208;
  fn.__initData = closure_21;
  const animatedStyle = arg1(dependencyMap[36]).useAnimatedStyle(fn);
  obj = { style: items1 };
  const items1 = [tmp.promptContainer, animatedStyle];
  let isNew2 = _prompt.isNew;
  if (isNew2) {
    obj1 = { color: arg1(dependencyMap[20]).BadgeColors.BRAND };
    const intl = arg1(dependencyMap[21]).intl;
    obj1.text = intl.string(arg1(dependencyMap[21]).t.y2b7CA);
    ({ badge: obj6.style, badgeText: obj6.textStyle } = tmp);
    isNew2 = callback(arg1(dependencyMap[20]).TextBadge, obj1);
  }
  const items2 = [isNew2, callback(PromptTitle, { item: _prompt }), , ];
  const options = _prompt.options;
  items2[2] = options.map((id) => {
    const guildId = id;
    const obj = {
      guildId,
      option: id,
      selected: stateFromStoresArray.includes(id.id),
      onSelect(arg0) {
        let required = !arg0;
        if (required) {
          required = required.required;
        }
        if (required) {
          required = 1 === length.length;
        }
        if (!required) {
          let tmp7 = null != arg0;
          if (tmp7) {
            tmp7 = arg0;
          }
          closure_4(required, arg0, tmp7);
          const tmp4 = closure_4;
          const tmp5 = required;
        }
      },
      suppressMemberCount: true,
      canBeNew: !_prompt.isNew
    };
    return callback(_prompt(isNew[44]), obj, id.id);
  });
  items2[3] = callback(PromptHelpText, { guildId, prompt: _prompt, selectedOptionIds: stateFromStoresArray });
  obj.children = items2;
  return closure_17(importDefault(dependencyMap[36]).View, obj);
}
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, Image: closure_5, ScrollView: closure_6 } = arg1(dependencyMap[1]));
let closure_7 = importDefault(dependencyMap[2]);
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
const tmp2 = arg1(dependencyMap[1]);
({ GuildOnboardingTab: closure_12, OnboardingPromptType: closure_13 } = arg1(dependencyMap[7]));
const EMOJI_URL_BASE_SIZE = arg1(dependencyMap[9]).EMOJI_URL_BASE_SIZE;
const ReadStateTypes = arg1(dependencyMap[10]).ReadStateTypes;
const tmp3 = arg1(dependencyMap[7]);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = arg1(dependencyMap[11]));
let obj = arg1(dependencyMap[12]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[13]).space.PX_16 };
obj.container = obj;
const tmp4 = arg1(dependencyMap[11]);
obj.sheetTitle = { marginTop: importDefault(dependencyMap[13]).space.PX_16 };
const obj1 = { marginTop: importDefault(dependencyMap[13]).space.PX_16 };
obj.promptContainer = { position: "relative", backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_SURFACE_HIGH, marginTop: importDefault(dependencyMap[13]).space.PX_12, padding: importDefault(dependencyMap[13]).space.PX_12, borderRadius: importDefault(dependencyMap[13]).radii.md, borderWidth: 2, borderStyle: "solid" };
const obj2 = { position: "relative", backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_SURFACE_HIGH, marginTop: importDefault(dependencyMap[13]).space.PX_12, padding: importDefault(dependencyMap[13]).space.PX_12, borderRadius: importDefault(dependencyMap[13]).radii.md, borderWidth: 2, borderStyle: "solid" };
obj.titleContainer = { marginBottom: importDefault(dependencyMap[13]).space.PX_12 };
obj.badge = {};
obj.badgeText = { fontWeight: "bold" };
const obj3 = { marginBottom: importDefault(dependencyMap[13]).space.PX_12 };
obj.dropdownContainer = { borderRadius: importDefault(dependencyMap[13]).radii.lg, backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_BASE_LOWEST, padding: importDefault(dependencyMap[13]).space.PX_8, paddingRight: importDefault(dependencyMap[13]).space.PX_32, minHeight: 48, marginBottom: importDefault(dependencyMap[13]).space.PX_12, display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", position: "relative" };
const obj4 = { borderRadius: importDefault(dependencyMap[13]).radii.lg, backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_BASE_LOWEST, padding: importDefault(dependencyMap[13]).space.PX_8, paddingRight: importDefault(dependencyMap[13]).space.PX_32, minHeight: 48, marginBottom: importDefault(dependencyMap[13]).space.PX_12, display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", position: "relative" };
obj.emptyDropdownText = { marginVertical: importDefault(dependencyMap[13]).space.PX_12, marginLeft: importDefault(dependencyMap[13]).space.PX_4 };
const obj5 = { marginVertical: importDefault(dependencyMap[13]).space.PX_12, marginLeft: importDefault(dependencyMap[13]).space.PX_4 };
obj.dropdownPill = { borderRadius: importDefault(dependencyMap[13]).radii.sm, backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_BASE_LOW, padding: 6, marginRight: importDefault(dependencyMap[13]).space.PX_8, marginTop: importDefault(dependencyMap[13]).space.PX_8, display: "flex", flexDirection: "row", alignItems: "center" };
obj.emojiContainer = { -1861163602: true, -738052821: true };
const obj6 = { borderRadius: importDefault(dependencyMap[13]).radii.sm, backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_BASE_LOW, padding: 6, marginRight: importDefault(dependencyMap[13]).space.PX_8, marginTop: importDefault(dependencyMap[13]).space.PX_8, display: "flex", flexDirection: "row", alignItems: "center" };
obj.dropdownIconContainer = { position: "absolute", right: importDefault(dependencyMap[13]).space.PX_4, top: importDefault(dependencyMap[13]).space.PX_12 };
obj.dropdownIcon = { <string:1632221346>: "boolean", <string:2722977214>: "string" };
obj.optionTextEmoji = {};
obj.optionImageEmoji = { "Null": true, "Null": true, lv: true };
const obj7 = { position: "absolute", right: importDefault(dependencyMap[13]).space.PX_4, top: importDefault(dependencyMap[13]).space.PX_12 };
obj.helpText = { marginTop: importDefault(dependencyMap[13]).space.PX_4 };
const obj8 = { marginTop: importDefault(dependencyMap[13]).space.PX_4 };
obj.sectionSeparator = { marginTop: importDefault(dependencyMap[13]).space.PX_24, marginBottom: importDefault(dependencyMap[13]).space.PX_16, height: 1, backgroundColor: importDefault(dependencyMap[13]).colors.BORDER_SUBTLE };
obj.emptyContainer = { "Bool(true)": "<string:2691825665>", "Bool(true)": "<string:2684354560>", "Bool(true)": "<string:16777216>", "Bool(true)": "<string:26684738>" };
const obj9 = { marginTop: importDefault(dependencyMap[13]).space.PX_24, marginBottom: importDefault(dependencyMap[13]).space.PX_16, height: 1, backgroundColor: importDefault(dependencyMap[13]).colors.BORDER_SUBTLE };
obj.emptyContainerImage = { marginBottom: importDefault(dependencyMap[13]).space.PX_16 };
const obj11 = {};
const obj10 = { marginBottom: importDefault(dependencyMap[13]).space.PX_16 };
const merged = Object.assign(importDefault(dependencyMap[14])(arg1(dependencyMap[8]).Fonts.DISPLAY_SEMIBOLD, importDefault(dependencyMap[13]).colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
obj11["marginBottom"] = importDefault(dependencyMap[13]).space.PX_4;
obj.emptyContainerHeader = obj11;
const importDefaultResult = importDefault(dependencyMap[14]);
obj.connectionsContainer = { marginTop: importDefault(dependencyMap[13]).space.PX_12 };
const obj12 = { marginTop: importDefault(dependencyMap[13]).space.PX_12 };
obj.connectionsPromptContainer = { marginTop: importDefault(dependencyMap[13]).space.PX_12 };
const obj13 = { marginTop: importDefault(dependencyMap[13]).space.PX_12 };
obj.connectionsTitle = { marginBottom: importDefault(dependencyMap[13]).space.PX_4 };
let closure_19 = obj.createStyles(obj);
let closure_20 = { code: "function CustomizeCommunityTsx1(){const{isNew,brandColor,withSequence,withTiming,Easing,withDelay}=this.__closure;const rawBorderColor=isNew?brandColor+\"FF\":brandColor+\"00\";const borderColor=withSequence(withTiming(rawBorderColor,{duration:1,easing:Easing.in(Easing.ease)}),withDelay(500,withTiming(brandColor+\"00\",{duration:300,easing:Easing.out(Easing.ease)})));return{borderColor:borderColor};}" };
let closure_21 = { code: "function CustomizeCommunityTsx2(){const{isNew,brandColor,withSequence,withTiming,Easing,withDelay}=this.__closure;const rawBorderColor=isNew?brandColor+\"FF\":brandColor+\"00\";const borderColor=withSequence(withTiming(rawBorderColor,{duration:1,easing:Easing.in(Easing.ease)}),withDelay(500,withTiming(brandColor+\"00\",{duration:300,easing:Easing.out(Easing.ease)})));return{borderColor:borderColor};}" };
const obj14 = { marginBottom: importDefault(dependencyMap[13]).space.PX_4 };
const result = arg1(dependencyMap[45]).fileFinishedImporting("modules/guild_onboarding/native/CustomizeCommunity.tsx");

export default function CustomizeCommunity(guildId) {
  let newAnswersCount;
  let newOnboardingPrompts;
  let onboardingPrompts;
  let onboardingPromptsRaw;
  let onboardingPromptsWithNewAnswers;
  guildId = guildId.guildId;
  const arg1 = guildId;
  const tmp = callback3();
  const bottom = importDefault(dependencyMap[27])().bottom;
  let obj = arg1(dependencyMap[17]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => closure_9.hasUnread(guildId, constants2.GUILD_ONBOARDING_QUESTION));
  const importDefault = stateFromStores;
  let obj1 = arg1(dependencyMap[17]);
  const items1 = [closure_8];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    const guild = guild.getGuild(guildId);
    let prop;
    if (null != guild) {
      prop = guild.latestOnboardingQuestionId;
    }
    return prop;
  });
  const tmp4 = importDefault(dependencyMap[28])(guildId);
  ({ newOnboardingPrompts, onboardingPromptsWithNewAnswers, onboardingPrompts } = tmp4);
  const items2 = [guildId, stateFromStores, stateFromStores1];
  ({ onboardingPromptsRaw, newAnswersCount } = tmp4);
  const effect = React.useEffect(() => {
    let tmp = null != guildId;
    if (tmp) {
      tmp = closure_11.shouldFetchPrompts(guildId) || stateFromStores;
      const tmp4 = closure_11.shouldFetchPrompts(guildId) || stateFromStores;
    }
    if (tmp) {
      const onboardingPrompts = guildId(closure_2[29]).fetchOnboardingPrompts(guildId);
      const obj = guildId(closure_2[29]);
    }
  }, items2);
  const items3 = [guildId];
  const effect1 = React.useEffect(() => null != guildId ? () => {
    callback(closure_2[30]).ackGuildFeature(callback, constants.GUILD_ONBOARDING_QUESTION, closure_11.ackIdForGuild(callback));
    const obj = callback(closure_2[30]);
    const result = callback2(closure_2[31]).updateOnboardingResponses(callback);
  } : undefined, items3);
  const items4 = [guildId];
  const callback = React.useCallback((type) => {
    type = type.type;
    if (constants.MULTIPLE_CHOICE === type) {
      let obj = { guildId, prompt: type };
      return callback(closure_28, obj, type.id);
    } else if (constants.DROPDOWN === type) {
      obj = { guildId, prompt: type };
      return callback(closure_27, obj, type.id);
    }
  }, items4);
  if (0 === onboardingPromptsRaw.length) {
    obj = { style: tmp.container };
    obj = { paddingBottom: bottom + importDefault(dependencyMap[13]).space.PX_16 };
    obj.contentContainerStyle = obj;
    obj1 = { setTab: guildId.setTab };
    obj.children = callback(EmptyCustomizeCommunity, obj1);
    let tmp32Result = callback(closure_6, obj);
  } else {
    const obj2 = { style: tmp.container };
    const obj3 = { paddingBottom: bottom + importDefault(dependencyMap[13]).space.PX_16 };
    obj2.contentContainerStyle = obj3;
    let tmp8 = newOnboardingPrompts.length > 0 || onboardingPromptsWithNewAnswers.length > 0;
    if (tmp8) {
      const obj4 = {};
      const obj5 = { "Null": -246006407672989600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000741841232901058, "Null": 0.158, style: tmp.sheetTitle };
      const intl = arg1(dependencyMap[21]).intl;
      const obj6 = { count: newOnboardingPrompts.length + newAnswersCount };
      obj5.children = intl.format(arg1(dependencyMap[21]).t.iB5Gqe, obj6);
      const items5 = [callback(arg1(dependencyMap[22]).Text, obj5), newOnboardingPrompts.map(callback), onboardingPromptsWithNewAnswers.map(callback), ];
      const obj7 = { style: tmp.sectionSeparator };
      items5[3] = callback(closure_4, obj7);
      obj4.children = items5;
      tmp8 = callback2(closure_18, obj4);
    }
    const items6 = [tmp8, , ];
    let tmp16 = onboardingPrompts.length > 0;
    if (tmp16) {
      const obj8 = {};
      const obj9 = { "Null": -246006407672989600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000741841232901058, "Null": 0.158, style: tmp.sheetTitle };
      const intl2 = arg1(dependencyMap[21]).intl;
      obj9.children = intl2.string(arg1(dependencyMap[21]).t.BGkaer);
      const items7 = [callback(arg1(dependencyMap[22]).Text, obj9), , ];
      const obj10 = {};
      const intl3 = arg1(dependencyMap[21]).intl;
      obj10.children = intl3.string(arg1(dependencyMap[21]).t.r6Vm8T);
      items7[1] = callback(arg1(dependencyMap[22]).Text, obj10);
      items7[2] = onboardingPrompts.map(callback);
      obj8.children = items7;
      tmp16 = callback2(closure_18, obj8);
    }
    items6[1] = tmp16;
    const obj11 = { guildId };
    items6[2] = callback(ConnectionsPrompt, obj11);
    obj2.children = items6;
    tmp32Result = callback2(closure_6, obj2);
    const tmp32 = callback2;
    const tmp33 = closure_6;
  }
  return tmp32Result;
};
