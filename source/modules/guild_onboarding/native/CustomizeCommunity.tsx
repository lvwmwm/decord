// Module ID: 9971
// Function ID: 77008
// Name: EmptyCustomizeCommunity
// Dependencies: [31, 27, 4991, 1838, 4142, 3947, 5058, 5059, 653, 1852, 4326, 33, 4130, 689, 5052, 3840, 4066, 566, 9972, 9973, 1273, 1212, 4126, 5065, 5146, 5462, 5484, 1557, 9974, 5057, 5069, 5063, 5151, 1392, 1327, 3834, 3991, 4131, 9975, 4098, 5156, 1934, 4660, 5452, 5147, 2]
// Exports: default

// Module 9971 (EmptyCustomizeCommunity)
import _updateOnboardingResponses from "_updateOnboardingResponses";
import get_ActivityIndicator from "useSafeAreaInsets";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_createForOfIteratorHelperLoose";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { EMOJI_URL_BASE_SIZE } from "set";
import { ReadStateTypes } from "ReadStateTypes";
import jsxProd from "getAvatarURL";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";

let closure_12;
let closure_13;
let closure_16;
let closure_17;
let closure_18;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
function EmptyCustomizeCommunity(setTab) {
  setTab = setTab.setTab;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = setTab(3840);
  let obj1 = setTab(566);
  const items = [closure_10];
  const importDefault = obj1.useStateFromStores(items, () => outer1_10.getGuildId());
  obj = { style: tmp.emptyContainer };
  obj = { style: tmp.emptyContainerImage };
  if (isThemeDarkResult) {
    let tmp9 = 9972;
  } else {
    tmp9 = 9973;
  }
  obj.source = importDefault(tmp9);
  const items1 = [callback(closure_5, obj), , ];
  obj1 = { style: tmp.emptyContainerHeader };
  const intl = setTab(1212).intl;
  obj1.children = intl.string(setTab(1212).t.leKHQz);
  items1[1] = callback(setTab(1273).LegacyText, obj1);
  const obj2 = { variant: "text-sm/medium", color: "text-subtle" };
  const intl2 = setTab(1212).intl;
  obj2.children = intl2.format(setTab(1212).t["jH+ktB"], {
    onBrowseChannels() {
      if (null != closure_1) {
        setTab(outer1_12.BROWSE);
      }
    }
  });
  items1[2] = callback(setTab(4126).Text, obj2);
  obj.children = items1;
  return closure_17(closure_4, obj);
}
function PromptTitle(item) {
  item = item.item;
  let obj = { style: _createForOfIteratorHelperLoose().titleContainer };
  obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary" };
  const items = [item.title, ];
  let tmp4 = null;
  if (item.required) {
    obj = { variant: "text-md/bold", color: "text-feedback-critical", children: [" ", "*"] };
    tmp4 = callback2(require(4126) /* Text */.Text, obj);
  }
  items[1] = tmp4;
  obj.children = items;
  obj.children = callback2(require(4126) /* Text */.Heading, obj);
  return closure_16(closure_4, obj);
}
function PromptHelpText(arg0) {
  let _prompt;
  let helpText;
  let helpTextAdditional;
  let importDefault;
  let require;
  ({ guildId: require, prompt: _prompt, selectedOptionIds: importDefault } = arg0);
  let found;
  let obj = require(found[17]);
  const items = [closure_8];
  found = undefined;
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getGuild(closure_0));
  if (null != _prompt) {
    const options = _prompt.options;
    if (null != options) {
      found = options.filter((id) => closure_1.includes(id.id));
    }
  }
  const items1 = [found];
  const items2 = [found];
  const memo = React.useMemo(() => {
    if (null != found) {
      let selectedRoleIds = outer1_0(found[23]).getSelectedRoleIds(found);
      const obj = outer1_0(found[23]);
    } else {
      const _Set = Set;
      selectedRoleIds = new Set();
    }
    return selectedRoleIds;
  }, items1);
  const memo1 = React.useMemo(() => {
    if (null != found) {
      let selectedChannelIds = outer1_0(found[23]).getSelectedChannelIds(found);
      const obj = outer1_0(found[23]);
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
      const obj = { variant: "text-xs/medium", color: "mobile-text-heading-primary", children };
      return outer1_16(outer1_0(found[22]).Text, obj, arg1);
    }
  };
  const tmp = _createForOfIteratorHelperLoose();
  ({ helpText, helpTextAdditional } = importDefault(found[24])(obj));
  if ("" !== helpText) {
    obj = { style: tmp.helpText, variant: "text-xs/medium", color: "text-default" };
    const items3 = [helpText, " ", helpTextAdditional];
    obj.children = items3;
    let tmp7 = callback2(require(found[22]).Text, obj);
  } else {
    tmp7 = null;
  }
  return tmp7;
}
function ConnectionsPrompt(guildId) {
  guildId = guildId.guildId;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = guildId(566);
  const items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_11.getConnections(guildId));
  let tmp2 = null;
  if (0 !== stateFromStores.length) {
    obj = { style: tmp.connectionsPromptContainer };
    obj = { style: tmp.connectionsTitle, variant: "text-md/semibold", color: "mobile-text-heading-primary" };
    const intl = guildId(1212).intl;
    obj.children = intl.string(guildId(1212).t.eDVMrA);
    const items1 = [callback(guildId(4126).Text, obj), , ];
    const obj1 = { variant: "text-xs/medium", color: "text-muted" };
    const intl2 = guildId(1212).intl;
    obj1.children = intl2.string(guildId(1212).t.BozOXu);
    items1[1] = callback(guildId(4126).Text, obj1);
    const obj2 = {
      style: tmp.connectionsContainer,
      children: stateFromStores.map((connection) => {
          const obj = { connection, guildId, location: outer1_1(outer1_2[26]).CHANNELS_AND_ROLES };
          return outer1_16(outer1_1(outer1_2[25]), obj, arg1);
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
  const tmp = _createForOfIteratorHelperLoose();
  let obj = option(566);
  const items = [_isNativeReflectConstruct];
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
      usableCustomEmojiById = outer1_7.getUsableCustomEmojiById(id1);
    }
    return usableCustomEmojiById;
  });
  let emoji = option.emoji;
  let id;
  if (null != emoji) {
    id = emoji.id;
  }
  let tmp8Result = null != id;
  if (!tmp8Result) {
    let emoji2 = option.emoji;
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
      emojiURL = importDefault(1392).getEmojiURL(obj2);
      const obj5 = importDefault(1392);
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
    obj.children = callback(importDefault(5151), obj1);
    tmp8Result = callback(closure_4, obj);
    const tmp10 = callback;
    const tmp13 = importDefault(5151);
    const tmp8 = callback;
    const tmp9 = closure_4;
  }
  const items1 = [tmp8Result, callback(option(4126).Text, { variant: "text-md/semibold", children: option.title })];
  obj.children = items1;
  return closure_17(closure_4, obj);
}
function DropdownPrompt(guildId) {
  guildId = guildId.guildId;
  const _prompt = guildId.prompt;
  const tmp = _createForOfIteratorHelperLoose();
  const isNew = _prompt.isNew;
  let obj = guildId(isNew[17]);
  const items = [closure_11];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => outer1_11.getOnboardingResponsesForPrompt(guildId, _prompt.id));
  const mapped = stateFromStoresArray.map((arg0) => {
    let closure_0 = arg0;
    const options = _prompt.options;
    return options.find((id) => id.id === closure_0);
  });
  const found = mapped.filter(guildId(isNew[34]).isNotNullish);
  let obj1 = guildId(isNew[35]);
  const token = obj1.useToken(_prompt(isNew[13]).colors.BACKGROUND_BRAND);
  let obj2 = guildId(isNew[36]);
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
  obj = { isNew, brandColor: token, withSequence: guildId(isNew[36]).withSequence, withTiming: guildId(isNew[37]).withTiming, Easing: guildId(isNew[36]).Easing, withDelay: guildId(isNew[36]).withDelay };
  fn.__closure = obj;
  fn.__workletHash = 16609373875235;
  fn.__initData = closure_20;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const handleSelectOption = _prompt(isNew[38])(guildId).handleSelectOption;
  const items1 = [guildId, _prompt, handleSelectOption, stateFromStoresArray.length];
  const callback = stateFromStoresArray.useCallback(() => {
    let obj = _prompt(isNew[39]);
    obj = {
      guildId,
      promptId: _prompt.id,
      onSelect(arg0, arg1) {
        let required = !arg1;
        if (required) {
          required = outer1_1.required;
        }
        if (required) {
          required = 1 === outer1_3.length;
        }
        if (!required) {
          let tmp6 = null != arg1;
          if (tmp6) {
            tmp6 = arg1;
          }
          outer1_5(outer1_1, arg0, tmp6);
          const tmp3 = outer1_5;
          const tmp4 = outer1_1;
        }
      },
      canBeNew: !_prompt.isNew,
      returnToCustomize: true
    };
    obj.openLazy(guildId(isNew[41])(isNew[40], isNew.paths), "DropdownOptions", obj);
  }, items1);
  obj = { style: items2 };
  items2 = [tmp.promptContainer, animatedStyle];
  let isNew2 = _prompt.isNew;
  if (isNew2) {
    obj1 = { color: guildId(isNew[20]).BadgeColors.BRAND };
    const intl = guildId(isNew[21]).intl;
    obj1.text = intl.string(guildId(isNew[21]).t.y2b7CA);
    ({ badge: obj6.style, badgeText: obj6.textStyle } = tmp);
    isNew2 = callback(guildId(isNew[20]).TextBadge, obj1);
  }
  const items3 = [isNew2, callback(PromptTitle, { item: _prompt }), , ];
  obj2 = { style: tmp.dropdownContainer, onPress: callback };
  let tmp10 = 0 === found.length;
  if (tmp10) {
    let obj3 = { style: tmp.emptyDropdownText, variant: "text-sm/normal", color: "text-muted" };
    const intl2 = guildId(isNew[21]).intl;
    obj3.children = intl2.string(guildId(isNew[21]).t.GmSvdA);
    tmp10 = callback(guildId(isNew[22]).Text, obj3);
  }
  const items4 = [tmp10, found.map((id) => outer1_16(outer1_26, { option: id }, id.id)), ];
  const obj4 = { style: tmp.dropdownIconContainer, children: callback(handleSelectOption, { style: tmp.dropdownIcon, source: _prompt(isNew[43]) }) };
  items4[2] = callback(token, obj4);
  obj2.children = items4;
  items3[2] = closure_17(guildId(isNew[42]).PressableHighlight, obj2);
  items3[3] = callback(PromptHelpText, { guildId, prompt: _prompt, selectedOptionIds: stateFromStoresArray });
  obj.children = items3;
  return closure_17(_prompt(isNew[36]).View, obj);
}
function MultipleChoicePrompt(guildId) {
  guildId = guildId.guildId;
  const _prompt = guildId.prompt;
  const tmp = _createForOfIteratorHelperLoose();
  const isNew = _prompt.isNew;
  let obj = guildId(isNew[17]);
  const items = [closure_11];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => outer1_11.getOnboardingResponsesForPrompt(guildId, _prompt.id));
  const handleSelectOption = _prompt(isNew[38])(guildId).handleSelectOption;
  let obj1 = guildId(isNew[35]);
  const token = obj1.useToken(_prompt(isNew[13]).colors.BACKGROUND_BRAND);
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
  obj = { isNew, brandColor: token, withSequence: guildId(isNew[36]).withSequence, withTiming: guildId(isNew[37]).withTiming, Easing: guildId(isNew[36]).Easing, withDelay: guildId(isNew[36]).withDelay };
  fn.__closure = obj;
  fn.__workletHash = 12802766002208;
  fn.__initData = closure_21;
  const animatedStyle = guildId(isNew[36]).useAnimatedStyle(fn);
  obj = { style: items1 };
  items1 = [tmp.promptContainer, animatedStyle];
  let isNew2 = _prompt.isNew;
  if (isNew2) {
    obj1 = { color: guildId(isNew[20]).BadgeColors.BRAND };
    const intl = guildId(isNew[21]).intl;
    obj1.text = intl.string(guildId(isNew[21]).t.y2b7CA);
    ({ badge: obj6.style, badgeText: obj6.textStyle } = tmp);
    isNew2 = callback(guildId(isNew[20]).TextBadge, obj1);
  }
  const items2 = [isNew2, callback(PromptTitle, { item: _prompt }), , ];
  const options = _prompt.options;
  items2[2] = options.map((id) => {
    let closure_0 = id;
    const obj = {
      guildId: closure_0,
      option: id,
      selected: stateFromStoresArray.includes(id.id),
      onSelect(arg0) {
        let required = !arg0;
        if (required) {
          required = outer1_1.required;
        }
        if (required) {
          required = 1 === outer1_3.length;
        }
        if (!required) {
          let tmp7 = null != arg0;
          if (tmp7) {
            tmp7 = arg0;
          }
          outer1_4(outer1_1, closure_0, tmp7);
          const tmp4 = outer1_4;
          const tmp5 = outer1_1;
        }
      },
      suppressMemberCount: true,
      canBeNew: !_prompt.isNew
    };
    return outer1_16(_prompt(isNew[44]), obj, id.id);
  });
  items2[3] = callback(PromptHelpText, { guildId, prompt: _prompt, selectedOptionIds: stateFromStoresArray });
  obj.children = items2;
  return closure_17(_prompt(isNew[36]).View, obj);
}
({ View: closure_4, Image: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ GuildOnboardingTab: closure_12, OnboardingPromptType: closure_13 } = _createForOfIteratorHelperLoose);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.sheetTitle = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj1 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.promptContainer = { position: "relative", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, padding: require("_createForOfIteratorHelperLoose").space.PX_12, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, borderWidth: 2, borderStyle: "solid" };
let obj3 = { flexDirection: "row", alignItems: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.titleContainer = obj3;
_createForOfIteratorHelperLoose.badge = { position: "absolute", top: -6, right: -6 };
_createForOfIteratorHelperLoose.badgeText = { fontWeight: "bold" };
let obj2 = { position: "relative", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, padding: require("_createForOfIteratorHelperLoose").space.PX_12, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, borderWidth: 2, borderStyle: "solid" };
_createForOfIteratorHelperLoose.dropdownContainer = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, padding: require("_createForOfIteratorHelperLoose").space.PX_8, paddingRight: require("_createForOfIteratorHelperLoose").space.PX_32, minHeight: 48, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_12, display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", position: "relative" };
let obj4 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, padding: require("_createForOfIteratorHelperLoose").space.PX_8, paddingRight: require("_createForOfIteratorHelperLoose").space.PX_32, minHeight: 48, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_12, display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", position: "relative" };
_createForOfIteratorHelperLoose.emptyDropdownText = { marginVertical: require("_createForOfIteratorHelperLoose").space.PX_12, marginLeft: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj5 = { marginVertical: require("_createForOfIteratorHelperLoose").space.PX_12, marginLeft: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.dropdownPill = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, padding: 6, marginRight: require("_createForOfIteratorHelperLoose").space.PX_8, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, display: "flex", flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.emojiContainer = { display: "flex", alignItems: "center" };
let obj6 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, padding: 6, marginRight: require("_createForOfIteratorHelperLoose").space.PX_8, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, display: "flex", flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.dropdownIconContainer = { position: "absolute", right: require("_createForOfIteratorHelperLoose").space.PX_4, top: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.dropdownIcon = { height: 32, width: 32 };
_createForOfIteratorHelperLoose.optionTextEmoji = { fontSize: 18, lineHeight: 22, marginRight: 6 };
_createForOfIteratorHelperLoose.optionImageEmoji = { height: 22, width: 22, marginRight: 6 };
let obj7 = { position: "absolute", right: require("_createForOfIteratorHelperLoose").space.PX_4, top: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.helpText = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj8 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.sectionSeparator = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.emptyContainer = { height: 400, display: "flex", alignItems: "center", justifyContent: "center" };
let obj10 = { width: 120, height: 80, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.emptyContainerImage = obj10;
let obj11 = {};
let obj9 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
const merged = Object.assign(require("createTextStyle")(require("ME").Fonts.DISPLAY_SEMIBOLD, require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
obj11["marginBottom"] = require("_createForOfIteratorHelperLoose").space.PX_4;
_createForOfIteratorHelperLoose.emptyContainerHeader = obj11;
_createForOfIteratorHelperLoose.connectionsContainer = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
const obj12 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.connectionsPromptContainer = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
const obj13 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.connectionsTitle = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_20 = { code: "function CustomizeCommunityTsx1(){const{isNew,brandColor,withSequence,withTiming,Easing,withDelay}=this.__closure;const rawBorderColor=isNew?brandColor+\"FF\":brandColor+\"00\";const borderColor=withSequence(withTiming(rawBorderColor,{duration:1,easing:Easing.in(Easing.ease)}),withDelay(500,withTiming(brandColor+\"00\",{duration:300,easing:Easing.out(Easing.ease)})));return{borderColor:borderColor};}" };
let closure_21 = { code: "function CustomizeCommunityTsx2(){const{isNew,brandColor,withSequence,withTiming,Easing,withDelay}=this.__closure;const rawBorderColor=isNew?brandColor+\"FF\":brandColor+\"00\";const borderColor=withSequence(withTiming(rawBorderColor,{duration:1,easing:Easing.in(Easing.ease)}),withDelay(500,withTiming(brandColor+\"00\",{duration:300,easing:Easing.out(Easing.ease)})));return{borderColor:borderColor};}" };
const obj14 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_onboarding/native/CustomizeCommunity.tsx");

export default function CustomizeCommunity(guildId) {
  let newAnswersCount;
  let newOnboardingPrompts;
  let onboardingPrompts;
  let onboardingPromptsRaw;
  let onboardingPromptsWithNewAnswers;
  guildId = guildId.guildId;
  let tmp = _createForOfIteratorHelperLoose();
  const bottom = stateFromStores(1557)().bottom;
  let obj = guildId(566);
  const items = [closure_9];
  stateFromStores = obj.useStateFromStores(items, () => outer1_9.hasUnread(guildId, outer1_15.GUILD_ONBOARDING_QUESTION));
  let obj1 = guildId(566);
  const items1 = [closure_8];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    const guild = outer1_8.getGuild(guildId);
    let prop;
    if (null != guild) {
      prop = guild.latestOnboardingQuestionId;
    }
    return prop;
  });
  let tmp4 = stateFromStores(9974)(guildId);
  ({ newOnboardingPrompts, onboardingPromptsWithNewAnswers, onboardingPrompts } = tmp4);
  const items2 = [guildId, stateFromStores, stateFromStores1];
  ({ onboardingPromptsRaw, newAnswersCount } = tmp4);
  const effect = React.useEffect(() => {
    let tmp = null != guildId;
    if (tmp) {
      tmp = outer1_11.shouldFetchPrompts(guildId) || stateFromStores;
      const tmp4 = outer1_11.shouldFetchPrompts(guildId) || stateFromStores;
    }
    if (tmp) {
      const onboardingPrompts = guildId(outer1_2[29]).fetchOnboardingPrompts(guildId);
      const obj = guildId(outer1_2[29]);
    }
  }, items2);
  const items3 = [guildId];
  const effect1 = React.useEffect(() => null != guildId ? (() => {
    guildId(outer2_2[30]).ackGuildFeature(outer1_0, outer2_15.GUILD_ONBOARDING_QUESTION, outer2_11.ackIdForGuild(outer1_0));
    const obj = guildId(outer2_2[30]);
    const result = stateFromStores(outer2_2[31]).updateOnboardingResponses(outer1_0);
  }) : undefined, items3);
  const items4 = [guildId];
  const callback = React.useCallback((type) => {
    type = type.type;
    if (outer1_13.MULTIPLE_CHOICE === type) {
      let obj = { guildId, prompt: type };
      return outer1_16(outer1_28, obj, type.id);
    } else if (outer1_13.DROPDOWN === type) {
      obj = { guildId, prompt: type };
      return outer1_16(outer1_27, obj, type.id);
    }
  }, items4);
  if (0 === onboardingPromptsRaw.length) {
    obj = { style: tmp.container };
    obj = { paddingBottom: bottom + stateFromStores(689).space.PX_16 };
    obj.contentContainerStyle = obj;
    obj1 = { setTab: guildId.setTab };
    obj.children = callback(EmptyCustomizeCommunity, obj1);
    let tmp32Result = callback(closure_6, obj);
  } else {
    const obj2 = { style: tmp.container };
    const obj3 = { paddingBottom: bottom + stateFromStores(689).space.PX_16 };
    obj2.contentContainerStyle = obj3;
    let tmp8 = newOnboardingPrompts.length > 0 || onboardingPromptsWithNewAnswers.length > 0;
    if (tmp8) {
      const obj4 = {};
      const obj5 = { style: tmp.sheetTitle, variant: "text-md/medium", color: "mobile-text-heading-primary" };
      const intl = guildId(1212).intl;
      const obj6 = { count: newOnboardingPrompts.length + newAnswersCount };
      obj5.children = intl.format(guildId(1212).t.iB5Gqe, obj6);
      const items5 = [callback(guildId(4126).Text, obj5), newOnboardingPrompts.map(callback), onboardingPromptsWithNewAnswers.map(callback), ];
      const obj7 = { style: tmp.sectionSeparator };
      items5[3] = callback(closure_4, obj7);
      obj4.children = items5;
      tmp8 = callback2(closure_18, obj4);
    }
    const items6 = [tmp8, , ];
    let tmp16 = onboardingPrompts.length > 0;
    if (tmp16) {
      const obj8 = {};
      const obj9 = { style: tmp.sheetTitle, variant: "text-md/medium", color: "mobile-text-heading-primary" };
      const intl2 = guildId(1212).intl;
      obj9.children = intl2.string(guildId(1212).t.BGkaer);
      const items7 = [callback(guildId(4126).Text, obj9), , ];
      const obj10 = { variant: "text-xs/medium", color: "text-muted" };
      const intl3 = guildId(1212).intl;
      obj10.children = intl3.string(guildId(1212).t.r6Vm8T);
      items7[1] = callback(guildId(4126).Text, obj10);
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
