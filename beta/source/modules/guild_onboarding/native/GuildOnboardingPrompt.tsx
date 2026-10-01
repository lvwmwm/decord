// Module ID: 6545
// Function ID: 6546
// Name: GuildOnboardingPrompt
// Dependencies: [32, 19, 17, 5771, 5884, 2067, 6521, 6518, 1375, 21, 4836, 5994, 576, 1485, 504, 1613, 4531, 672, 6544, 5913, 4832, 1115, 5281, 5859, 5293, 1094, 6527, 6546, 6547, 6551, 1397, 4800, 6556, 1981, 5435, 6579, 2]
// Exports: DropdownPrompt, MultipleChoicePrompt, RulesPrompt

// Module 6545 (GuildOnboardingPrompt)
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import EmojiConstants from "EmojiConstants" /* 1375 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import MemberVerificationActionCreatorsDefault from "MemberVerificationActionCreators" /* 5859 */;
import TermsFieldListDefault from "TermsFieldList" /* 5913 */;
import NavigatorConstants from "NavigatorConstants" /* 5994 */;
import GuildOnboardingConstants from "GuildOnboardingConstants" /* 6518 */;
import GuildOnboardingUtils from "GuildOnboardingUtils" /* 6527 */;
import EmojiDefault from "Emoji" /* 6551 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import EmojiStore from "EmojiStore" /* 5771 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 5884 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 6521 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, rulesChannelId;

let closure_15;
let closure_16;
let closure_17;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
let tmp8;
const AvatarUtilsDefault = tmp8(1397);
function PromptHeader(currentPrompt) {
  let currentPromptIndex;
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  let numberOfPrompts;
  let obj3;
  currentPrompt = currentPrompt.currentPrompt;
  ({ numberOfPrompts, currentPromptIndex } = currentPrompt);
  const tmp = closure_18();
  const obj = { style: tmp.promptHeader, children: items };
  const obj2 = { style: tmp.countText, variant: "text-sm/medium", color: "text-muted", children: intl.format(intl3.t.isV0NW, obj3) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  obj3 = { currentQuestion: currentPromptIndex + 1, questionCount: numberOfPrompts };
  items = [closure_15(Text, obj2), ];
  let required;
  if (currentPrompt != null) {
    required = currentPrompt.required;
  }
  let tmp2Result = null;
  if (required) {
    const obj4 = { children: items1 };
    const obj5 = { style: tmp.requiredSeparator };
    items1 = [closure_15(metroRequire, obj5), ];
    const obj6 = { variant: "text-sm/medium", color: "text-brand", children: intl2.string(intl3.t.Ur8Vrt) };
    const Text2 = tmp6(4832).Text;
    intl2 = tmp6(1115).intl;
    items1[1] = closure_15(Text2, obj6);
    tmp2Result = tmp2(tmp3, obj4);
  }
  const obj7 = { children: items2 };
  items[1] = tmp2Result;
  items2 = [authStore3(metroRequire, obj), ];
  const obj8 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: currentPrompt.title };
  items2[1] = closure_15(Text_Text.Text, obj8);
  return authStore3(closure_17, obj7);
}
function PromptFooter(lastPrompt) {
  let combined;
  let currentPrompt;
  let helpText;
  let helpTextAdditional;
  let intl2;
  let items4;
  let items5;
  let items6;
  let items7;
  let selectedOptionIds;
  let tmp18Result;
  ({ guildId: require, currentPrompt, selectedOptionIds } = lastPrompt);
  lastPrompt = lastPrompt.lastPrompt;
  let found;
  const handleOnPress = lastPrompt.handleOnPress;
  const tmp = closure_18();
  let obj = require("get initialized");
  const items = [GuildStore];
  let tmp5 = 0 === selectedOptionIds.length;
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(require));
  if (tmp5) {
    let required;
    if (currentPrompt != null) {
      required = currentPrompt.required;
    }
    tmp5 = !required;
  }
  const intl = tmp2(tmp3[21]).intl;
  const string = intl.string;
  const t = tmp2(tmp3[21]).t;
  if (lastPrompt) {
    const _HermesInternal = HermesInternal;
    combined = "" + string(t["8SuVoE"]) + " \u{1F389}";
  } else if (tmp5) {
    combined = string(t["5Wxrcd"]);
  } else {
    combined = string(t.PDTjLN);
  }
  let tmp10 = 0 === selectedOptionIds.length;
  if (tmp10) {
    let required1;
    if (currentPrompt != null) {
      required1 = currentPrompt.required;
    }
    tmp10 = required1;
  }
  found = undefined;
  if (currentPrompt != null) {
    const options = currentPrompt.options;
    if (options != null) {
      found = options.filter((id) => selectedOptionIds.includes(id.id));
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
  const obj2 = { guild: stateFromStores, prompt: currentPrompt, selectedRoleIds: memo, selectedChannelIds: memo1, itemHook: formattedNameHighlight };
  ({ helpText, helpTextAdditional } = selectedOptionIds(found[27])(obj2));
  selectedOptionIds(found[27])(obj2);
  const tmp2Result = require("useToken");
  const token = tmp2Result.useToken(selectedOptionIds(tmp3[12]).colors.BACKGROUND_BASE_LOWER);
  const items3 = [, ];
  const obj4 = selectedOptionIds(found[17])(token);
  const alphaResult = obj4.alpha(0);
  items3[0] = alphaResult.hex();
  const obj6 = selectedOptionIds(found[17])(token);
  const alphaResult1 = obj6.alpha(1);
  items3[1] = alphaResult1.hex();
  const obj3 = { style: tmp.footer, children: items5 };
  const obj5 = { style: items4, start: require("ConstantsIOS").VerticalGradient.START, end: require("ConstantsIOS").VerticalGradient.END, colors: items3, pointerEvents: "none" };
  items4 = [tmp.scrollContainerGradient];
  const tmp21 = selectedOptionIds(found[24]);
  items5 = [closure_15(tmp21, obj5), ];
  let tmp20Result = null;
  const obj7 = { style: tmp.footerContent, children: items6 };
  if (tmp10) {
    const obj8 = { style: tmp.helpText, variant: "text-xs/medium", color: "text-default", children: intl2.string(require("intl").t.dA1dSf) };
    const Text = tmp2(tmp3[20]).Text;
    intl2 = tmp2(tmp3[21]).intl;
    tmp20Result = tmp20(Text, obj8);
  }
  items6 = [tmp20Result, , ];
  if ("" !== helpText) {
    const obj9 = { style: tmp.helpText, variant: "text-xs/medium", color: "text-default", children: items7 };
    items7 = [helpText, " ", helpTextAdditional];
    tmp18Result = tmp18(tmp2(tmp3[20]).Text, obj9);
  } else {
    tmp18Result = null;
  }
  items6[1] = tmp18Result;
  let str4 = "primary";
  const Button = tmp2(tmp3[22]).Button;
  if (tmp5) {
    str4 = "primary";
    if (!lastPrompt) {
      str4 = "secondary";
    }
  }
  items6[2] = closure_15(Button, { variant: str4, size: "md", grow: true, text: combined, onPress: handleOnPress, disabled: tmp10 });
  items5[1] = closure_16(closure_6, obj7);
  return closure_16(closure_6, obj3);
}
function formattedNameHighlight(children, arg1) {
  const obj = { variant: "text-xs/medium", color: "mobile-text-heading-primary", children };
  return closure_15(Text_Text.Text, obj, arg1);
}
function DropdownOption(option) {
  let emojiURL;
  let items1;
  let obj4;
  let str;
  let tmp9;
  option = option.option;
  let tmp = closure_18();
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
  const obj2 = { style: tmp.dropdownPill, children: items1 };
  const obj3 = { style: tmp.emojiContainer, children: closure_15(tmp9, obj4) };
  obj4 = { textEmojiStyle: tmp.optionTextEmoji, fastImageStyle: tmp.optionImageEmoji, src: emojiURL, name: str };
  emojiURL = undefined;
  const tmp2 = option;
  const tmp5 = closure_16;
  tmp9 = EmojiDefault;
  if (null != stateFromStores) {
    const obj5 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
    ({ id: obj6.id, animated: obj6.animated } = stateFromStores);
    const tmp8Result = AvatarUtilsDefault;
    emojiURL = tmp8Result.getEmojiURL(obj5);
  }
  let emoji = option.emoji;
  str = undefined;
  if (emoji != null) {
    str = emoji.name;
  }
  if (str == null) {
    str = "";
  }
  items1 = [closure_15(closure_6, obj3), ];
  const obj7 = { variant: "text-md/semibold", children: option.title };
  items1[1] = closure_15(tmp2(4832).Text, obj7);
  return tmp5(closure_6, obj2);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ Image: hasOwnProperty, View: metroRequire, ScrollView: metroImportDefault, FlatList: metroImportAll } = react_native);
let closure_13 = GuildOnboardingConstants.GuildOnboardingModalStates;
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = Fragment);
let createStyles = createStyles_mod;
let obj = { flex: { flex: 1 }, container: obj2, scrollContainer: obj3, scrollContainerGradient: { position: "absolute", height: 48, width: "100%", left: 0, top: -48 }, promptHeader: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 8 }, requiredSeparator: size, countText: {}, title: { marginBottom: 32 }, helpText: { marginTop: 8, marginBottom: 8, textAlign: "center" }, footer: obj4, footerText: { paddingHorizontal: 16, paddingBottom: 8, paddingTop: 8 }, footerContent: { width: "100%", paddingHorizontal: 16 }, optionTextEmoji: { fontSize: 18, lineHeight: 22, marginRight: 6 }, optionImageEmoji: { height: 22, width: 22, marginRight: 6 }, emojiContainer: { display: "flex", alignItems: "center" }, dropdownContainer: obj5, emptyDropdownText: { marginTop: 16 }, dropdownPill: obj6, dropdownIconContainer: { position: "absolute", right: 4, top: 8 }, dropdownIcon: { height: 32, width: 32 } };
obj2 = { display: "flex", flex: 1, flexGrow: 1, marginTop: NavigatorConstants.NAV_BAR_HEIGHT, marginBottom: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", flexGrow: 1, justifyContent: "center", paddingHorizontal: 16, paddingTop: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
size = { flexShrink: 0, marginHorizontal: 8, color: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, width: 4, height: 4, borderRadius: nativeDefault.radii.xs };
obj4 = { display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", bottom: 0, paddingBottom: 8, position: "absolute", width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj5 = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, padding: 8, paddingRight: 32, minHeight: 48, display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", position: "relative" };
obj6 = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 6, marginRight: 8, marginTop: 8, display: "flex", flexDirection: "row", alignItems: "center" };
let closure_18 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingPrompt.tsx");

export const RulesPrompt = function RulesPrompt(guildId) {
  let _undefined;
  let c5;
  let closure_1;
  let closure_4;
  let intl2;
  let items10;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let stringResult;
  let tmp8;
  guildId = guildId.guildId;
  let stateFromStores;
  c5 = undefined;
  const tmp = closure_18();
  let tmp2 = guildId;
  let obj = guildId(stateFromStores[13]);
  importDefault = obj.useNavigation();
  let obj2 = guildId(stateFromStores[14]);
  let items = [MemberVerificationFormStore];
  stateFromStores = obj2.useStateFromStores(items, () => MemberVerificationFormStore.getRulesPrompt(guildId));
  const items1 = [GuildStore];
  const obj3 = guildId(stateFromStores[14]);
  _slicedToArray = obj3.useStateFromStores(items1, () => {
    const guild = GuildStore.getGuild(guildId);
    rulesChannelId = undefined;
    if (guild != null) {
      rulesChannelId = guild.rulesChannelId;
    }
    return rulesChannelId;
  });
  const bottom = require("useSafeAreaInsets")().bottom;
  const sum = 64 + bottom;
  const items2 = [MemberVerificationFormStore];
  const obj4 = guildId(stateFromStores[14]);
  react = obj4.useStateFromStores(items2, () => MemberVerificationFormStore.get(guildId));
  [tmp8, c5] = _slicedToArray(react.useState(false), 2);
  const tmp7 = _slicedToArray(react.useState(false), 2);
  const obj5 = guildId(stateFromStores[16]);
  const token = obj5.useToken(require("native").colors.BACKGROUND_BASE_LOWER);
  const items3 = [, ];
  const obj6 = require("module_672")(token);
  const alphaResult = obj6.alpha(0);
  items3[0] = alphaResult.hex();
  const obj8 = require("module_672")(token);
  const alphaResult1 = obj8.alpha(1);
  items3[1] = alphaResult1.hex();
  let tmp12Result = null;
  const tmp5 = importDefault;
  if (null != stateFromStores) {
    const sum1 = sum + 8;
    const obj7 = { top: true, style: items4, children: items9 };
    items4 = [, ];
    ({ flex: arr5[0], container: arr5[1] } = tmp);
    const obj10 = {
      contentContainerStyle: items5,
      data: [0],
      renderItem() {
          const obj = { rules: stateFromStores.values, rulesChannelId };
          return closure_15(TermsFieldListDefault, obj);
        },
      onEndReached() {
          return _undefined(true);
        }
    };
    items5 = [tmp.scrollContainer, ];
    const obj11 = { paddingBottom: sum1 };
    const obj9 = { style: tmp.flex, children: items6 };
    items5[1] = obj11;
    const SafeAreaPaddingView = tmp2(tmp3[18]).SafeAreaPaddingView;
    items6 = [closure_15(closure_8, obj10), ];
    const obj12 = { style: items7, children: items8 };
    items7 = [, , ];
    ({ footer: arr8[0], footerContent: arr8[1] } = tmp);
    const obj13 = { paddingBottom: bottom };
    items7[2] = obj13;
    const obj14 = { style: tmp.footerText, variant: "text-xs/medium", children: stringResult };
    const Text = tmp2(tmp3[20]).Text;
    const intl = tmp2(tmp3[21]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[21]).t;
    if (tmp8) {
      stringResult = string(t.arAe3I);
    } else {
      stringResult = string(t.D0CVAc);
    }
    items8 = [closure_15(Text, obj14), ];
    const obj15 = {
      variant: "primary",
      size: "md",
      grow: true,
      disabled: !tmp8,
      text: intl2.string(tmp2(stateFromStores[21]).t["0KL0ot"]),
      onPress() {
          let items;
          const tmp2 = null != stateFromStores && null != closure_4;
          if (tmp2) {
            const obj = { formFields: items };
            const submitVerificationForm = MemberVerificationActionCreatorsDefault.submitVerificationForm;
            MemberVerificationActionCreatorsDefault;
            const merged = Object.assign(closure_4);
            const obj2 = { response: true };
            const merged1 = Object.assign(tmp);
            items = [obj2];
            const result = submitVerificationForm(guildId, obj);
            closure_1.push(constants.COMPLETED);
          }
        }
    };
    const Button = tmp2(tmp3[22]).Button;
    intl2 = tmp2(tmp3[21]).intl;
    items8[1] = closure_15(Button, obj15);
    items6[1] = closure_16(closure_6, obj12);
    items9 = [tmp12(closure_6, obj9), ];
    const obj16 = { style: items10, start: tmp2(stateFromStores[25]).VerticalGradient.START, end: tmp2(stateFromStores[25]).VerticalGradient.END, colors: items3, pointerEvents: "none" };
    items10 = [tmp.scrollContainerGradient, ];
    const obj17 = { bottom: sum1 };
    items10[1] = obj17;
    const tmp5Result = tmp5(stateFromStores[24]);
    items9[1] = closure_15(tmp5Result, obj16);
    tmp12Result = tmp12(SafeAreaPaddingView, obj7);
  }
  return tmp12Result;
};
export const MultipleChoicePrompt = function MultipleChoicePrompt(guildId) {
  let currentPromptIndex;
  let handleOnPress;
  let items2;
  let items3;
  let items4;
  let lastPrompt;
  let numberOfPrompts;
  let options;
  guildId = guildId.guildId;
  const currentPrompt = guildId.currentPrompt;
  const selectOption = guildId.selectOption;
  ({ lastPrompt, currentPromptIndex, numberOfPrompts, handleOnPress } = guildId);
  let tmp = closure_18();
  const bottom = currentPrompt(selectOption[15])().bottom;
  let obj = guildId(selectOption[14]);
  const items = [GuildOnboardingPromptsStore];
  const items1 = [guildId, currentPrompt];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    let onboardingResponsesForPrompt;
    if (null != currentPrompt) {
      onboardingResponsesForPrompt = GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(guildId, tmp.id);
    } else {
      onboardingResponsesForPrompt = [];
    }
    return onboardingResponsesForPrompt;
  }, items1);
  const obj3 = { contentContainerStyle: items2, children: items3 };
  items2 = [tmp.scrollContainer, ];
  const obj2 = { children: items4 };
  const obj4 = { paddingBottom: 64 + bottom + 48 + 48, position: "relative" };
  items2[1] = obj4;
  items3 = [closure_15(PromptHeader, { currentPrompt, numberOfPrompts, currentPromptIndex }), ];
  const obj5 = {
    children: options.map((option) => {
      let flag;
      guildId = option;
      let tmp = closure_1_15;
      const obj = {
        option,
        guildId,
        onSelect(arg0) {
          let flag = arg0;
          const id = currentPrompt.id;
          const id2 = option.id;
          const tmp = selectOption;
          if (arg0 == null) {
            flag = false;
          }
          return tmp(id, id2, flag);
        },
        selected: flag
      };
      const tmp2 = currentPrompt(selectOption[28]);
      flag = stateFromStoresArray.includes(option.id);
      if (flag == null) {
        flag = false;
      }
      return tmp(tmp2, obj, option.id);
    })
  };
  options = currentPrompt.options;
  items3[1] = closure_15(closure_6, obj5);
  items4 = [closure_16(closure_7, obj3), closure_15(PromptFooter, { guildId, currentPrompt, selectedOptionIds: stateFromStoresArray, handleOnPress, lastPrompt })];
  return closure_16(closure_17, obj2);
};
export const DropdownPrompt = function DropdownPrompt(guildId) {
  let currentPromptIndex;
  let handleOnPress;
  let items3;
  let items4;
  let items5;
  let items6;
  let lastPrompt;
  let numberOfPrompts;
  let obj9;
  guildId = guildId.guildId;
  const currentPrompt = guildId.currentPrompt;
  const selectOption = guildId.selectOption;
  ({ lastPrompt, currentPromptIndex, numberOfPrompts, handleOnPress } = guildId);
  let tmp = closure_18();
  const bottom = currentPrompt(selectOption[15])().bottom;
  let obj = guildId(selectOption[14]);
  const items = [GuildOnboardingPromptsStore];
  const items1 = [guildId, currentPrompt];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    let onboardingResponsesForPrompt;
    if (null != currentPrompt) {
      onboardingResponsesForPrompt = GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(guildId, tmp.id);
    } else {
      onboardingResponsesForPrompt = [];
    }
    return onboardingResponsesForPrompt;
  }, items1);
  let found;
  const tmp2 = currentPrompt;
  if (currentPrompt != null) {
    const options = currentPrompt.options;
    if (options != null) {
      found = options.filter((id) => stateFromStoresArray.includes(id.id));
    }
  }
  const items2 = [guildId, currentPrompt.id, selectOption];
  let obj2 = { contentContainerStyle: items3, children: items4 };
  items3 = [tmp.scrollContainer, ];
  const obj3 = { paddingBottom: 64 + bottom + 48 + 48, position: "relative" };
  items3[1] = obj3;
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = {
      guildId,
      promptId: currentPrompt.id,
      onSelect(id, arg1) {
        let flag = arg1;
        id = id.id;
        const id2 = id.id;
        const tmp = selectOption;
        if (arg1 == null) {
          flag = false;
        }
        return tmp(id, id2, flag);
      }
    };
    obj.openLazy(asyncRequire(6556, dependencyMap.paths), "DropdownOptions", obj2);
  }, items2);
  items4 = [closure_15(PromptHeader, { currentPrompt, numberOfPrompts, currentPromptIndex }), ];
  let tmp11Result = 0 === found.length;
  const obj4 = { style: tmp.dropdownContainer, onPress: callback, children: items5 };
  const PressableHighlight = tmp4(tmp3[34]).PressableHighlight;
  const tmp10 = closure_7;
  const tmp9 = closure_17;
  if (tmp11Result) {
    const obj5 = { style: tmp.emptyDropdownText, variant: "text-sm/normal", color: "text-muted", children: "No answers selected." };
    tmp11Result = tmp11(tmp4(tmp3[20]).Text, obj5);
  }
  const obj6 = { children: items6 };
  const obj7 = { children: closure_16(PressableHighlight, obj4) };
  items5 = [
    tmp11Result,
    found.map((option) => {
      const obj = { option };
      return closure_1_15(DropdownOption, obj, option.id);
    }),

  ];
  const obj8 = { style: tmp.dropdownIconContainer, children: closure_15(closure_5, obj9) };
  obj9 = { style: tmp.dropdownIcon, source: tmp2(selectOption[35]) };
  items5[2] = closure_15(closure_6, obj8);
  items4[1] = closure_15(closure_6, obj7);
  items6 = [closure_16(tmp10, obj2), closure_15(PromptFooter, { guildId, currentPrompt, selectedOptionIds: stateFromStoresArray, handleOnPress, lastPrompt })];
  return closure_16(tmp9, obj6);
};
