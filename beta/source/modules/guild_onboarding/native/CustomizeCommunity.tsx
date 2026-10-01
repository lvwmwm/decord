// Module ID: 11045
// Function ID: 11046
// Name: CustomizeCommunity
// Dependencies: [19, 17, 5771, 2067, 4851, 4655, 6521, 6522, 1074, 1375, 5018, 21, 4836, 576, 5836, 4538, 4767, 504, 11046, 11047, 1177, 1115, 4832, 6527, 6546, 6581, 6603, 1613, 11048, 6520, 6531, 6526, 6551, 1397, 1370, 4531, 4566, 4837, 11049, 4800, 6556, 1981, 5435, 6579, 6547, 2]
// Exports: default

// Module 11045 (CustomizeCommunity)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import EmojiConstants from "EmojiConstants" /* 1375 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import useThemeDefault from "useTheme" /* 4767 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import timing from "timing" /* 4837 */;
import ReadStateConstants from "ReadStateConstants" /* 5018 */;
import GuildOnboardingPromptsActionCreators from "GuildOnboardingPromptsActionCreators" /* 6520 */;
import GuildOnboardingUtils from "GuildOnboardingUtils" /* 6527 */;
import EmojiDefault from "Emoji" /* 6551 */;
import ConnectionCardDefault from "ConnectionCard" /* 6581 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import EmojiStore from "EmojiStore" /* 5771 */;
import GuildStore from "GuildStore" /* 2067 */;
import ReadStateStore from "ReadStateStore" /* 4851 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 6521 */;
import GuildOnboardingPromptsConstants from "GuildOnboardingPromptsConstants" /* 6522 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import TextStyles from "TextStyles" /* 5836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, type;

let closure_12;
let closure_16;
let closure_17;
let closure_18;
let closure_4;
let hasOwnProperty;
let map1;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let rect;
let size;
function EmptyCustomizeCommunity(setTab) {
  let closure_1;
  let guildId;
  let intl;
  let intl2;
  let items1;
  let obj7;
  setTab = setTab.setTab;
  importDefault = undefined;
  const tmp = closure_19();
  const obj = setTab(4538);
  const items = [SelectedGuildStore];
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  const obj2 = setTab(504);
  const tmp4 = importDefault;
  importDefault = obj2.useStateFromStores(items, () => guildId.getGuildId());
  const obj3 = { style: tmp.emptyContainer, children: items1 };
  items1 = [, , ];
  const obj4 = { style: tmp.emptyContainerImage, source: tmp4(isThemeDarkResult ? 11046 : 11047) };
  items1[0] = closure_16(closure_5, obj4);
  const obj5 = { style: tmp.emptyContainerHeader, children: intl.string(setTab(1115).t.leKHQz) };
  const LegacyText = tmp2(1177).LegacyText;
  intl = tmp2(1115).intl;
  items1[1] = closure_16(LegacyText, obj5);
  const obj6 = { variant: "text-sm/medium", color: "text-subtle", children: intl2.format(setTab(1115).t["jH+ktB"], obj7) };
  const Text = tmp2(4832).Text;
  intl2 = tmp2(1115).intl;
  obj7 = {
    onBrowseChannels() {
      if (null != closure_1) {
        setTab(constants.BROWSE);
      }
    }
  };
  items1[2] = closure_16(Text, obj6);
  return closure_17(closure_4, obj3);
}
function PromptTitle(item) {
  let Heading;
  let items;
  item = item.item;
  const obj = { style: closure_19().titleContainer, children: closure_17(Heading, { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: items }) };
  items = [item.title, ];
  let tmp3Result = null;
  Heading = Text_Text.Heading;
  const tmp = authStore3;
  const tmp2 = React3;
  if (item.required) {
    const obj2 = { variant: "text-md/bold", color: "text-feedback-critical", children: [" ", "*"] };
    tmp3Result = tmp3(Text_Text.Text, obj2);
  }
  items[1] = tmp3Result;
  return tmp(tmp2, obj);
}
function PromptHelpText(arg0) {
  let _prompt;
  let helpText;
  let helpTextAdditional;
  let items3;
  let tmp9;
  ({ guildId: require, prompt: _prompt, selectedOptionIds: importDefault } = arg0);
  let found;
  const tmp = closure_19();
  let obj = require("get initialized");
  const items = [GuildStore];
  found = undefined;
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(require));
  const tmp2 = require;
  if (_prompt != null) {
    const options = _prompt.options;
    if (options != null) {
      found = options.filter((id) => importDefault.includes(id.id));
    }
  }
  const items1 = [found];
  const items2 = [found];
  const memo = react.useMemo(function() {
    let selectedRoleIds;
    if (null != found) {
      const obj = GuildOnboardingUtils;
      selectedRoleIds = obj.getSelectedRoleIds(tmp);
    } else {
      const _Set = Set;
      const self = this;
      const self2 = this;
      selectedRoleIds = new Set();
    }
    return selectedRoleIds;
  }, items1);
  const memo1 = react.useMemo(function() {
    let selectedChannelIds;
    if (null != found) {
      const obj = GuildOnboardingUtils;
      selectedChannelIds = obj.getSelectedChannelIds(tmp);
    } else {
      const _Set = Set;
      const self = this;
      const self2 = this;
      selectedChannelIds = new Set();
    }
    return selectedChannelIds;
  }, items2);
  const obj2 = {
    guild: stateFromStores,
    prompt: _prompt,
    selectedRoleIds: memo,
    selectedChannelIds: memo1,
    itemHook(children, arg1) {
      const obj = { variant: "text-xs/medium", color: "mobile-text-heading-primary", children };
      return closure_1_16(require("Text/Text").Text, obj, arg1);
    }
  };
  ({ helpText, helpTextAdditional } = require("usePromptHelpText")(obj2));
  require("usePromptHelpText")(obj2);
  if ("" !== helpText) {
    const obj3 = { style: tmp.helpText, variant: "text-xs/medium", color: "text-default", children: items3 };
    items3 = [helpText, " ", helpTextAdditional];
    tmp9 = closure_17(tmp2(tmp3[22]).Text, obj3);
  } else {
    tmp9 = null;
  }
  return tmp9;
}
function ConnectionsPrompt(guildId) {
  let intl;
  let intl2;
  let items1;
  guildId = guildId.guildId;
  let tmp = closure_19();
  let obj = guildId(504);
  const items = [GuildOnboardingPromptsStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildOnboardingPromptsStore.getConnections(guildId));
  let tmp4 = null;
  if (0 !== stateFromStores.length) {
    const obj2 = { style: tmp.connectionsPromptContainer, children: items1 };
    const obj3 = { style: tmp.connectionsTitle, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl.string(guildId(1115).t.eDVMrA) };
    const Text = tmp2(4832).Text;
    intl = tmp2(1115).intl;
    items1 = [closure_16(Text, obj3), , ];
    const obj4 = { variant: "text-xs/medium", color: "text-muted", children: intl2.string(guildId(1115).t.BozOXu) };
    const Text2 = tmp2(4832).Text;
    intl2 = tmp2(1115).intl;
    items1[1] = closure_16(Text2, obj4);
    const obj5 = {
      style: tmp.connectionsContainer,
      children: stateFromStores.map((connection, index) => {
          const obj = { connection, guildId, location: AnalyticsLocationDefault.CHANNELS_AND_ROLES };
          const tmp = ConnectionCardDefault;
          return authStore3(tmp, obj, index);
        })
    };
    items1[2] = closure_16(closure_4, obj5);
    tmp4 = closure_17(closure_4, obj2);
  }
  return tmp4;
}
function DropdownOption(option) {
  let emojiURL;
  let items1;
  let obj5;
  let str;
  let tmp12;
  option = option.option;
  let tmp = closure_19();
  const items = [EmojiStore];
  const obj = option(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    const emoji = option.emoji;
    let id;
    const tmp = option;
    if (emoji != null) {
      id = emoji.id;
    }
    let usableCustomEmojiById = null;
    if (null != id) {
      const emoji2 = tmp.emoji;
      let id1;
      const getUsableCustomEmojiById = EmojiStore.getUsableCustomEmojiById;
      if (emoji2 != null) {
        id1 = emoji2.id;
      }
      usableCustomEmojiById = getUsableCustomEmojiById(id1);
    }
    return usableCustomEmojiById;
  });
  let emoji = option.emoji;
  let id;
  const tmp2 = option;
  if (emoji != null) {
    id = emoji.id;
  }
  let tmp10Result = null != id;
  if (!tmp10Result) {
    let emoji2 = option.emoji;
    let name;
    if (emoji2 != null) {
      name = emoji2.name;
    }
    tmp10Result = null != name;
  }
  const obj2 = { style: tmp.dropdownPill, children: items1 };
  const tmp8 = closure_17;
  if (tmp10Result) {
    const obj3 = { style: tmp.emojiContainer, children: closure_16(tmp12, obj5) };
    obj5 = { textEmojiStyle: null, fastImageStyle: null, src: emojiURL, name: str };
    ({ optionTextEmoji: obj4.textEmojiStyle, optionImageEmoji: obj4.fastImageStyle } = tmp);
    emojiURL = undefined;
    const tmp11 = importDefault;
    tmp12 = EmojiDefault;
    if (null != stateFromStores) {
      const obj7 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
      ({ id: obj6.id, animated: obj6.animated } = stateFromStores);
      const tmp11Result = tmp11(1397);
      emojiURL = tmp11Result.getEmojiURL(obj7);
    }
    const emoji3 = option.emoji;
    str = undefined;
    if (emoji3 != null) {
      str = emoji3.name;
    }
    if (str == null) {
      str = "";
    }
    tmp10Result = tmp10(tmp9, obj3);
  }
  items1 = [tmp10Result, ];
  const obj12 = { variant: "text-md/semibold", children: option.title };
  items1[1] = closure_16(tmp2(4832).Text, obj12);
  return tmp8(closure_4, obj2);
}
function DropdownPrompt(guildId) {
  let intl;
  let intl2;
  let items2;
  let items3;
  let items4;
  let obj17;
  guildId = guildId.guildId;
  const _prompt = guildId.prompt;
  const tmp = closure_19();
  const isNew = _prompt.isNew;
  let tmp3 = isNew;
  let obj = guildId(isNew[17]);
  const items = [GuildOnboardingPromptsStore];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(guildId, _prompt.id));
  const mapped = stateFromStoresArray.map((item) => {
    let closure_0 = item;
    const options = _prompt.options;
    return options.find((id) => id.id === closure_0);
  });
  const found = mapped.filter(guildId(isNew[34]).isNotNullish);
  let obj2 = guildId(isNew[35]);
  let tmp4 = _prompt;
  const token = obj2.useToken(_prompt(isNew[13]).colors.BACKGROUND_BRAND);
  let obj3 = guildId(isNew[36]);
  const fn = function c() {
    let Easing;
    let Easing2;
    let combined;
    let combined1;
    let obj3;
    let tmp3;
    let withDelay;
    let withSequence;
    let withTiming2;
    let withTimingResult;
    if (isNew) {
      combined = concat(tmp, "FF");
      tmp3 = tmp;
    } else {
      combined = concat(tmp, "00");
      tmp3 = tmp;
    }
    const obj = { borderColor: withSequence(withTimingResult, withDelay(500, withTiming2(combined1, obj3))) };
    withSequence = ReanimatedRexport.withSequence;
    ReanimatedRexport;
    const obj2 = { duration: 1, easing: Easing.in(ReanimatedRexport.Easing.ease) };
    const withTiming = timing.withTiming;
    timing;
    Easing = ReanimatedRexport.Easing;
    withTimingResult = withTiming(combined, obj2);
    withDelay = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    withTiming2 = timing.withTiming;
    obj3 = { duration: 300, easing: Easing2.out(ReanimatedRexport.Easing.ease) };
    timing;
    combined1 = "" + tmp3 + "00";
    Easing2 = ReanimatedRexport.Easing;
    return obj;
  };
  fn.__closure = { isNew, brandColor: token, withSequence: guildId(isNew[36]).withSequence, withTiming: guildId(isNew[37]).withTiming, Easing: guildId(isNew[36]).Easing, withDelay: guildId(isNew[36]).withDelay };
  fn.__workletHash = 16609373875235;
  fn.__initData = __initData;
  ({ isNew, brandColor: token, withSequence: guildId(isNew[36]).withSequence, withTiming: guildId(isNew[37]).withTiming, Easing: guildId(isNew[36]).Easing, withDelay: guildId(isNew[36]).withDelay });
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const handleSelectOption = _prompt(isNew[38])(guildId).handleSelectOption;
  const items1 = [guildId, _prompt, handleSelectOption, stateFromStoresArray.length];
  const tmp8 = closure_17;
  const callback = stateFromStoresArray.useCallback(() => {
    let length;
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = {
      guildId,
      promptId: _prompt.id,
      onSelect(arg0, arg1) {
        let flag = arg1;
        required = !arg1 && required.required && 1 === length.length;
        if (!required) {
          const tmp3 = handleSelectOption;
          const tmp4 = required;
          if (flag == null) {
            flag = false;
          }
          tmp3(tmp4, arg0, flag);
        }
      },
      canBeNew: !_prompt.isNew,
      returnToCustomize: true
    };
    obj.openLazy(asyncRequire(6556, dependencyMap.paths), "DropdownOptions", obj2);
  }, items1);
  const obj5 = { style: items2, children: items3 };
  items2 = [tmp.promptContainer, animatedStyle];
  let isNew2 = _prompt.isNew;
  const View = _prompt(isNew[36]).View;
  if (isNew2) {
    const obj7 = { color: guildId(tmp3[20]).BadgeColors.BRAND, text: intl.string(guildId(tmp3[21]).t.y2b7CA), style: null, textStyle: null };
    const TextBadge = tmp2(tmp3[20]).TextBadge;
    intl = tmp2(tmp3[21]).intl;
    ({ badge: obj6.style, badgeText: obj6.textStyle } = tmp);
    isNew2 = closure_16(TextBadge, obj7);
  }
  items3 = [isNew2, closure_16(PromptTitle, { item: _prompt }), , ];
  let tmp10Result = 0 === found.length;
  const obj8 = { style: tmp.dropdownContainer, onPress: callback, children: items4 };
  const PressableHighlight = tmp2(tmp3[42]).PressableHighlight;
  if (tmp10Result) {
    const obj9 = { style: tmp.emptyDropdownText, variant: "text-sm/normal", color: "text-muted", children: intl2.string(guildId(tmp3[21]).t.GmSvdA) };
    const Text = tmp2(tmp3[22]).Text;
    intl2 = tmp2(tmp3[21]).intl;
    tmp10Result = tmp10(Text, obj9);
  }
  items4 = [
    tmp10Result,
    found.map((option) => {
      const obj = { option };
      return closure_1_16(DropdownOption, obj, option.id);
    }),

  ];
  const obj10 = { style: tmp.dropdownIconContainer, children: closure_16(handleSelectOption, obj17) };
  obj17 = { style: tmp.dropdownIcon, source: tmp4(tmp3[43]) };
  items4[2] = closure_16(token, obj10);
  items3[2] = tmp8(PressableHighlight, obj8);
  items3[3] = closure_16(PromptHelpText, { guildId, prompt: _prompt, selectedOptionIds: stateFromStoresArray });
  return tmp8(View, obj5);
}
function MultipleChoicePrompt(guildId) {
  let intl;
  let items1;
  let items2;
  guildId = guildId.guildId;
  const _prompt = guildId.prompt;
  let tmp = closure_19();
  const isNew = _prompt.isNew;
  let tmp3 = isNew;
  let obj = guildId(isNew[17]);
  const items = [GuildOnboardingPromptsStore];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(guildId, _prompt.id));
  const handleSelectOption = _prompt(isNew[38])(guildId).handleSelectOption;
  let obj2 = guildId(isNew[35]);
  const token = obj2.useToken(_prompt(isNew[13]).colors.BACKGROUND_BRAND);
  let obj3 = guildId(isNew[36]);
  const fn = function p() {
    let Easing;
    let Easing2;
    let combined;
    let combined1;
    let obj3;
    let tmp3;
    let withDelay;
    let withSequence;
    let withTiming2;
    let withTimingResult;
    if (isNew) {
      combined = concat(tmp, "FF");
      tmp3 = tmp;
    } else {
      combined = concat(tmp, "00");
      tmp3 = tmp;
    }
    const obj = { borderColor: withSequence(withTimingResult, withDelay(500, withTiming2(combined1, obj3))) };
    withSequence = ReanimatedRexport.withSequence;
    ReanimatedRexport;
    const obj2 = { duration: 1, easing: Easing.in(ReanimatedRexport.Easing.ease) };
    const withTiming = timing.withTiming;
    timing;
    Easing = ReanimatedRexport.Easing;
    withTimingResult = withTiming(combined, obj2);
    withDelay = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    withTiming2 = timing.withTiming;
    obj3 = { duration: 300, easing: Easing2.out(ReanimatedRexport.Easing.ease) };
    timing;
    combined1 = "" + tmp3 + "00";
    Easing2 = ReanimatedRexport.Easing;
    return obj;
  };
  fn.__closure = { isNew, brandColor: token, withSequence: guildId(isNew[36]).withSequence, withTiming: guildId(isNew[37]).withTiming, Easing: guildId(isNew[36]).Easing, withDelay: guildId(isNew[36]).withDelay };
  fn.__workletHash = 12802766002208;
  fn.__initData = __initData2;
  ({ isNew, brandColor: token, withSequence: guildId(isNew[36]).withSequence, withTiming: guildId(isNew[37]).withTiming, Easing: guildId(isNew[36]).Easing, withDelay: guildId(isNew[36]).withDelay });
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const tmp7 = closure_17;
  const obj5 = { style: items1, children: items2 };
  items1 = [tmp.promptContainer, animatedStyle];
  let isNew2 = _prompt.isNew;
  const View = _prompt(isNew[36]).View;
  if (isNew2) {
    const obj9 = { color: guildId(tmp3[20]).BadgeColors.BRAND, text: intl.string(guildId(tmp3[21]).t.y2b7CA), style: null, textStyle: null };
    const TextBadge = tmp2(tmp3[20]).TextBadge;
    intl = tmp2(tmp3[21]).intl;
    ({ badge: obj6.style, badgeText: obj6.textStyle } = tmp);
    isNew2 = closure_16(TextBadge, obj9);
  }
  items2 = [isNew2, closure_16(PromptTitle, { item: _prompt }), , ];
  const options = _prompt.options;
  items2[2] = options.map((option) => {
    guildId = option;
    const obj = {
      guildId,
      option,
      selected: stateFromStoresArray.includes(option.id),
      onSelect(arg0) {
        let flag = arg0;
        let required = !arg0;
        const tmp = option;
        if (!arg0) {
          required = _prompt.required;
        }
        if (required) {
          required = 1 === stateFromStoresArray.length;
        }
        if (!required) {
          const tmp4 = handleSelectOption;
          const tmp5 = _prompt;
          if (flag == null) {
            flag = false;
          }
          tmp4(tmp5, tmp, flag);
        }
      },
      suppressMemberCount: true,
      canBeNew: !_prompt.isNew
    };
    let tmp = _prompt(isNew[44]);
    return closure_1_16(tmp, obj, option.id);
  });
  items2[3] = closure_16(PromptHelpText, { guildId, prompt: _prompt, selectedOptionIds: stateFromStoresArray });
  return tmp7(View, obj5);
}
({ View: closure_4, Image: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ GuildOnboardingTab: closure_12, OnboardingPromptType: map1 } = GuildOnboardingPromptsConstants);
const Fonts = Constants.Fonts;
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
const ReadStateTypes = ReadStateConstants.ReadStateTypes;
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, sheetTitle: obj3, promptContainer: obj4, titleContainer: obj5, badge: { position: "absolute", top: -6, right: -6 }, badgeText: { fontWeight: "bold" }, dropdownContainer: obj6, emptyDropdownText: obj7, dropdownPill: obj8, emojiContainer: { display: "flex", alignItems: "center" }, dropdownIconContainer: rect, dropdownIcon: { height: 32, width: 32 }, optionTextEmoji: { fontSize: 18, lineHeight: 22, marginRight: 6 }, optionImageEmoji: { height: 22, width: 22, marginRight: 6 }, helpText: obj9, sectionSeparator: obj10, emptyContainer: { height: 400, display: "flex", alignItems: "center", justifyContent: "center" }, emptyContainerImage: size, emptyContainerHeader: obj11, connectionsContainer: obj12, connectionsPromptContainer: obj13, connectionsTitle: obj14 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_16 };
obj4 = { position: "relative", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginTop: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.md, borderWidth: 2, borderStyle: "solid" };
obj5 = { flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_12 };
obj6 = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, padding: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_32, minHeight: 48, marginBottom: nativeDefault.space.PX_12, display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", position: "relative" };
obj7 = { marginVertical: nativeDefault.space.PX_12, marginLeft: nativeDefault.space.PX_4 };
obj8 = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 6, marginRight: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8, display: "flex", flexDirection: "row", alignItems: "center" };
rect = { position: "absolute", right: nativeDefault.space.PX_4, top: nativeDefault.space.PX_12 };
obj9 = { marginTop: nativeDefault.space.PX_4 };
obj10 = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_16, height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
size = { width: 120, height: 80, marginBottom: nativeDefault.space.PX_16 };
obj11 = { marginBottom: nativeDefault.space.PX_4 };
const merged = Object.assign(TextStyles(Fonts.DISPLAY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
obj12 = { marginTop: nativeDefault.space.PX_12 };
obj13 = { marginTop: nativeDefault.space.PX_12 };
obj14 = { marginBottom: nativeDefault.space.PX_4 };
let closure_19 = createStyles(obj);
const __initData = { code: "function CustomizeCommunityTsx1(){const{isNew,brandColor,withSequence,withTiming,Easing,withDelay}=this.__closure;const rawBorderColor=isNew?brandColor+\"FF\":brandColor+\"00\";const borderColor=withSequence(withTiming(rawBorderColor,{duration:1,easing:Easing.in(Easing.ease)}),withDelay(500,withTiming(brandColor+\"00\",{duration:300,easing:Easing.out(Easing.ease)})));return{borderColor:borderColor};}" };
const __initData2 = { code: "function CustomizeCommunityTsx2(){const{isNew,brandColor,withSequence,withTiming,Easing,withDelay}=this.__closure;const rawBorderColor=isNew?brandColor+\"FF\":brandColor+\"00\";const borderColor=withSequence(withTiming(rawBorderColor,{duration:1,easing:Easing.in(Easing.ease)}),withDelay(500,withTiming(brandColor+\"00\",{duration:300,easing:Easing.out(Easing.ease)})));return{borderColor:borderColor};}" };
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_onboarding/native/CustomizeCommunity.tsx");

export default function CustomizeCommunity(guildId) {
  let intl;
  let intl2;
  let intl3;
  let items5;
  let items6;
  let items7;
  let newAnswersCount;
  let newOnboardingPrompts;
  let obj10;
  let obj4;
  let obj5;
  let obj7;
  let onboardingPrompts;
  let onboardingPromptsRaw;
  let onboardingPromptsWithNewAnswers;
  let tmp24Result4;
  guildId = guildId.guildId;
  let stateFromStores;
  const setTab = guildId.setTab;
  const tmp = closure_19();
  let tmp2 = stateFromStores;
  const bottom = stateFromStores(1613)().bottom;
  const tmp4 = guildId;
  let obj = guildId(504);
  const items = [ReadStateStore];
  stateFromStores = obj.useStateFromStores(items, () => ReadStateStore.hasUnread(guildId, ReadStateTypes.GUILD_ONBOARDING_QUESTION));
  let obj2 = guildId(504);
  const items1 = [GuildStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const guild = GuildStore.getGuild(guildId);
    let prop;
    if (guild != null) {
      prop = guild.latestOnboardingQuestionId;
    }
    return prop;
  });
  const tmp7 = stateFromStores(11048)(guildId);
  ({ newOnboardingPrompts, onboardingPromptsWithNewAnswers, onboardingPrompts } = tmp7);
  const items2 = [guildId, stateFromStores, stateFromStores1];
  ({ onboardingPromptsRaw, newAnswersCount } = tmp7);
  const effect = react.useEffect(() => {
    let tmp2 = null != guildId;
    if (tmp2) {
      tmp2 = GuildOnboardingPromptsStore.shouldFetchPrompts(guildId) || stateFromStores;
      GuildOnboardingPromptsStore.shouldFetchPrompts(guildId) || stateFromStores;
    }
    if (tmp2) {
      const obj = GuildOnboardingPromptsActionCreators;
      const onboardingPrompts = obj.fetchOnboardingPrompts(tmp);
    }
  }, items2);
  const items3 = [guildId];
  const effect1 = react.useEffect(() => null != guildId ? (() => {
    const obj = guildId(dependencyMap[30]);
    obj.ackGuildFeature(closure_1_0, constants.GUILD_ONBOARDING_QUESTION, GuildOnboardingPromptsStore.ackIdForGuild(closure_1_0));
    const obj2 = stateFromStores(dependencyMap[31]);
    const result = obj2.updateOnboardingResponses(closure_1_0);
  }) : undefined, items3);
  const items4 = [guildId];
  const callback = react.useCallback((type) => {
    type = type.type;
    if (map1.MULTIPLE_CHOICE === type) {
      const obj2 = { guildId, prompt: type };
      return authStore3(MultipleChoicePrompt, obj2, type.id);
    } else if (tmp.DROPDOWN === type) {
      const obj = { guildId, prompt: type };
      return authStore3(DropdownPrompt, obj, type.id);
    }
  }, items4);
  if (0 === onboardingPromptsRaw.length) {
    const obj3 = { style: tmp.container, contentContainerStyle: obj4, children: closure_16(EmptyCustomizeCommunity, obj5) };
    obj4 = { paddingBottom: bottom + tmp2(576).space.PX_16 };
    obj5 = { setTab };
    tmp24Result4 = closure_16(closure_6, obj3);
  } else {
    const obj6 = { style: tmp.container, contentContainerStyle: obj7, children: items6 };
    let tmp24Result = newOnboardingPrompts.length > 0 || onboardingPromptsWithNewAnswers.length > 0;
    obj7 = { paddingBottom: bottom + tmp2(576).space.PX_16 };
    const tmp25 = closure_6;
    if (tmp24Result) {
      const obj8 = { children: items5 };
      const obj9 = { style: tmp.sheetTitle, variant: "text-md/medium", color: "mobile-text-heading-primary", children: intl.format(tmp4(1115).t.iB5Gqe, obj10) };
      const Text = tmp4(4832).Text;
      intl = tmp4(1115).intl;
      obj10 = { count: newOnboardingPrompts.length + newAnswersCount };
      items5 = [closure_16(Text, obj9), newOnboardingPrompts.map(callback), onboardingPromptsWithNewAnswers.map(callback), ];
      const obj11 = { style: tmp.sectionSeparator };
      items5[3] = closure_16(closure_4, obj11);
      tmp24Result = tmp24(closure_18, obj8);
    }
    items6 = [tmp24Result, , ];
    let tmp24Result3 = onboardingPrompts.length > 0;
    if (tmp24Result3) {
      const obj12 = { children: items7 };
      const obj13 = { style: tmp.sheetTitle, variant: "text-md/medium", color: "mobile-text-heading-primary", children: intl2.string(tmp4(1115).t.BGkaer) };
      const Text2 = tmp4(4832).Text;
      intl2 = tmp4(1115).intl;
      items7 = [closure_16(Text2, obj13), , ];
      const obj14 = { variant: "text-xs/medium", color: "text-muted", children: intl3.string(tmp4(1115).t.r6Vm8T) };
      const Text3 = tmp4(4832).Text;
      intl3 = tmp4(1115).intl;
      items7[1] = closure_16(Text3, obj14);
      items7[2] = onboardingPrompts.map(callback);
      tmp24Result3 = tmp24(closure_18, obj12);
    }
    items6[1] = tmp24Result3;
    const obj15 = { guildId };
    items6[2] = closure_16(ConnectionsPrompt, obj15);
    tmp24Result4 = tmp24(tmp25, obj6);
  }
  return tmp24Result4;
};
