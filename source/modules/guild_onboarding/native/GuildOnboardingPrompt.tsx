// Module ID: 5123
// Function ID: 44405
// Name: PromptHeader
// Dependencies: [57, 31, 27, 4991, 5082, 1838, 5058, 5055, 1852, 33, 4130, 5084, 689, 1456, 566, 1557, 3834, 666, 5121, 5124, 4126, 1212, 4543, 5128, 4554, 668, 5065, 5146, 5147, 5151, 1392, 4098, 5156, 1934, 4660, 5452, 2]
// Exports: DropdownPrompt, MultipleChoicePrompt, RulesPrompt

// Module 5123 (PromptHeader)
import _slicedToArray from "_slicedToArray";
import showActionSheet from "showActionSheet";
import get_ActivityIndicator from "formatRoleString";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_createForOfIteratorHelperLoose";
import closure_12 from "_isNativeReflectConstruct";
import { GuildOnboardingModalStates as closure_13 } from "GUILD_ONBOARDING_MODAL_KEY";
import { EMOJI_URL_BASE_SIZE } from "set";
import jsxProd from "maybeLoadBundle";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_15;
let closure_16;
let closure_17;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function PromptHeader(currentPrompt) {
  let currentPromptIndex;
  let numberOfPrompts;
  currentPrompt = currentPrompt.currentPrompt;
  ({ numberOfPrompts, currentPromptIndex } = currentPrompt);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {};
  obj = { style: tmp.promptHeader };
  obj = { style: tmp.countText, variant: "text-sm/medium", color: "text-muted" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.format(require(1212) /* getSystemLocale */.t.isV0NW, { currentQuestion: currentPromptIndex + 1, questionCount: numberOfPrompts });
  const items = [callback2(require(4126) /* Text */.Text, obj), ];
  let tmp5 = null;
  if (null != currentPrompt) {
    tmp5 = null;
    if (currentPrompt.required) {
      const obj2 = {};
      const obj3 = { style: tmp.requiredSeparator };
      const items1 = [callback2(closure_6, obj3), ];
      const obj4 = { variant: "text-sm/medium", color: "text-brand" };
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj4.children = intl2.string(require(1212) /* getSystemLocale */.t.Ur8Vrt);
      items1[1] = callback2(require(4126) /* Text */.Text, obj4);
      obj2.children = items1;
      tmp5 = callback3(closure_17, obj2);
    }
  }
  items[1] = tmp5;
  obj.children = items;
  const items2 = [callback3(closure_6, obj), ];
  const obj5 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: currentPrompt.title };
  items2[1] = callback2(require(4126) /* Text */.Text, obj5);
  obj.children = items2;
  return callback3(closure_17, obj);
}
function PromptFooter(lastPrompt) {
  let currentPrompt;
  let helpText;
  let helpTextAdditional;
  let require;
  let selectedOptionIds;
  ({ guildId: require, currentPrompt, selectedOptionIds } = lastPrompt);
  lastPrompt = lastPrompt.lastPrompt;
  let found;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(found[14]);
  const items = [closure_11];
  let tmp3 = 0 === selectedOptionIds.length;
  const stateFromStores = obj.useStateFromStores(items, () => outer1_11.getGuild(closure_0));
  if (tmp3) {
    tmp3 = !(null != currentPrompt && currentPrompt.required);
    const tmp5 = null != currentPrompt && currentPrompt.required;
  }
  const intl = require(found[21]).intl;
  const string = intl.string;
  const t = require(found[21]).t;
  if (lastPrompt) {
    const _HermesInternal = HermesInternal;
    let combined = "" + string(t["8SuVoE"]) + " \u{1F389}";
  } else if (tmp3) {
    combined = string(t["5Wxrcd"]);
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
  found = undefined;
  if (null != currentPrompt) {
    const options = currentPrompt.options;
    if (null != options) {
      found = options.filter((id) => selectedOptionIds.includes(id.id));
    }
  }
  const items1 = [found];
  const items2 = [found];
  const memo = React.useMemo(() => {
    if (null != found) {
      let selectedRoleIds = outer1_0(found[26]).getSelectedRoleIds(found);
      const obj = outer1_0(found[26]);
    } else {
      const _Set = Set;
      selectedRoleIds = new Set();
    }
    return selectedRoleIds;
  }, items1);
  const memo1 = React.useMemo(() => {
    if (null != found) {
      let selectedChannelIds = outer1_0(found[26]).getSelectedChannelIds(found);
      const obj = outer1_0(found[26]);
    } else {
      const _Set = Set;
      selectedChannelIds = new Set();
    }
    return selectedChannelIds;
  }, items2);
  obj = { guild: stateFromStores, prompt: currentPrompt, selectedRoleIds: memo, selectedChannelIds: memo1, itemHook: formattedNameHighlight };
  ({ helpText, helpTextAdditional } = selectedOptionIds(found[27])(obj));
  let obj2 = require(found[16]);
  const token = obj2.useToken(selectedOptionIds(found[12]).colors.BACKGROUND_BASE_LOWER);
  let obj3 = selectedOptionIds(found[17])(token);
  const tmp14 = selectedOptionIds(found[27])(obj);
  const items3 = [obj3.alpha(0).hex(), ];
  let obj5 = selectedOptionIds(found[17])(token);
  const alphaResult = obj3.alpha(0);
  items3[1] = obj5.alpha(1).hex();
  obj = { style: tmp.footer };
  const obj1 = { style: items4 };
  items4 = [tmp.scrollContainerGradient];
  const alphaResult1 = obj5.alpha(1);
  const tmp16 = callback3;
  const tmp17 = closure_6;
  obj1.start = require(found[25]).VerticalGradient.START;
  obj1.end = require(found[25]).VerticalGradient.END;
  obj1.colors = items3;
  obj1.pointerEvents = "none";
  const items5 = [callback2(selectedOptionIds(found[24]), obj1), ];
  obj2 = { style: tmp.footerContent };
  let tmp21 = null;
  if (tmp8) {
    obj3 = { style: tmp.helpText, variant: "text-xs/medium", color: "text-default" };
    const intl2 = require(found[21]).intl;
    obj3.children = intl2.string(require(found[21]).t.dA1dSf);
    tmp21 = callback2(require(found[20]).Text, obj3);
  }
  const items6 = [tmp21, , ];
  if ("" !== helpText) {
    const obj4 = { style: tmp.helpText, variant: "text-xs/medium", color: "text-default" };
    const items7 = [helpText, " ", helpTextAdditional];
    obj4.children = items7;
    let tmp25 = callback3(require(found[20]).Text, obj4);
  } else {
    tmp25 = null;
  }
  items6[1] = tmp25;
  obj5 = { variant: null, size: "md", grow: true };
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
  items6[2] = callback2(require(found[22]).Button, obj5);
  obj2.children = items6;
  items5[1] = callback3(closure_6, obj2);
  obj.children = items5;
  return tmp16(tmp17, obj);
}
function formattedNameHighlight(children) {
  const obj = { variant: "text-xs/medium", color: "mobile-text-heading-primary", children };
  return callback2(require(4126) /* Text */.Text, obj, arg1);
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
      usableCustomEmojiById = outer1_9.getUsableCustomEmojiById(id1);
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
    emojiURL = importDefault(1392).getEmojiURL(obj2);
    const obj5 = importDefault(1392);
  }
  obj1.src = emojiURL;
  let emoji = option.emoji;
  let name;
  if (null != emoji) {
    name = emoji.name;
  }
  let str = "";
  if (null != name) {
    str = name;
  }
  obj1.name = str;
  obj.children = callback2(importDefault(5151), obj1);
  const items1 = [callback2(closure_6, obj), callback2(option(4126).Text, { variant: "text-md/semibold", children: option.title })];
  obj.children = items1;
  return closure_16(closure_6, obj);
}
({ Image: closure_5, View: closure_6, ScrollView: closure_7, FlatList: closure_8 } = get_ActivityIndicator);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
_createForOfIteratorHelperLoose = { flex: { flex: 1 } };
_createForOfIteratorHelperLoose = { display: "flex", flex: 1, flexGrow: 1, marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, marginBottom: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { display: "flex", flexGrow: 1, justifyContent: "center", paddingHorizontal: 16, paddingTop: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.scrollContainer = obj1;
_createForOfIteratorHelperLoose.scrollContainerGradient = { position: "absolute", height: 48, width: "100%", left: 0, top: -48 };
_createForOfIteratorHelperLoose.promptHeader = { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 8 };
let obj2 = { flexShrink: 0, marginHorizontal: 8, color: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, width: 4, height: 4, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.requiredSeparator = obj2;
_createForOfIteratorHelperLoose.countText = {};
_createForOfIteratorHelperLoose.title = { marginBottom: 32 };
_createForOfIteratorHelperLoose.helpText = { marginTop: 8, marginBottom: 8, textAlign: "center" };
let obj3 = { display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", bottom: 0, paddingBottom: 8, position: "absolute", width: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.footer = obj3;
_createForOfIteratorHelperLoose.footerText = { paddingHorizontal: 16, paddingBottom: 8, paddingTop: 8 };
_createForOfIteratorHelperLoose.footerContent = { width: "100%", paddingHorizontal: 16 };
_createForOfIteratorHelperLoose.optionTextEmoji = { fontSize: 18, lineHeight: 22, marginRight: 6 };
_createForOfIteratorHelperLoose.optionImageEmoji = { height: 22, width: 22, marginRight: 6 };
_createForOfIteratorHelperLoose.emojiContainer = { display: "flex", alignItems: "center" };
let obj4 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, padding: 8, paddingRight: 32, minHeight: 48, display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", position: "relative" };
_createForOfIteratorHelperLoose.dropdownContainer = obj4;
_createForOfIteratorHelperLoose.emptyDropdownText = { marginTop: 16 };
let obj5 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, padding: 6, marginRight: 8, marginTop: 8, display: "flex", flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.dropdownPill = obj5;
_createForOfIteratorHelperLoose.dropdownIconContainer = { position: "absolute", right: 4, top: 8 };
_createForOfIteratorHelperLoose.dropdownIcon = { height: 32, width: 32 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingPrompt.tsx");

export const RulesPrompt = function RulesPrompt(guildId) {
  guildId = guildId.guildId;
  let END = _createForOfIteratorHelperLoose();
  let obj = guildId(stateFromStores[13]);
  const importDefault = obj.useNavigation();
  let obj1 = guildId(stateFromStores[14]);
  let items = [closure_10];
  stateFromStores = obj1.useStateFromStores(items, () => outer1_10.getRulesPrompt(guildId));
  let obj2 = guildId(stateFromStores[14]);
  const items1 = [closure_11];
  const callback = obj2.useStateFromStores(items1, () => {
    const guild = outer1_11.getGuild(guildId);
    let rulesChannelId;
    if (null != guild) {
      rulesChannelId = guild.rulesChannelId;
    }
    return rulesChannelId;
  });
  const bottom = importDefault(stateFromStores[15])().bottom;
  const sum = 64 + bottom + 8;
  let obj3 = guildId(stateFromStores[14]);
  const items2 = [closure_10];
  const React = obj3.useStateFromStores(items2, () => outer1_10.get(guildId));
  const tmp3 = callback(React.useState(false), 2);
  let string = tmp3[0];
  let closure_5 = tmp3[1];
  let obj4 = guildId(stateFromStores[16]);
  const token = obj4.useToken(importDefault(stateFromStores[12]).colors.BACKGROUND_BASE_LOWER);
  let obj5 = importDefault(stateFromStores[17])(token);
  let str = [obj5.alpha(0).hex(), ];
  let obj7 = importDefault(stateFromStores[17])(token);
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
    obj1.data = [0];
    obj1.renderItem = function renderItem() {
      return outer1_15(arr(stateFromStores[19]), { rules: stateFromStores.values, rulesChannelId: _slicedToArray });
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
    let Text = guildId(stateFromStores[20]).Text;
    obj5 = { style: END.footerText, variant: "text-xs/medium" };
    let num3 = 21;
    let intl = guildId(stateFromStores[21]).intl;
    let string2 = intl.string;
    let Button = guildId(stateFromStores[21]).t;
    if (string) {
      let string2Result = string2(Button.arAe3I);
    } else {
      string2Result = string2(Button.D0CVAc);
    }
    obj5.children = string2Result;
    items7 = [, ];
    items7[0] = items7(Text, obj5);
    string2 = callback2;
    obj5 = guildId;
    Text = stateFromStores;
    Button = guildId(stateFromStores[22]).Button;
    const obj6 = { variant: "primary", size: "md", grow: true, disabled: !string };
    intl = guildId(stateFromStores[num3]).intl;
    string = intl.string;
    num3 = string(guildId(stateFromStores[num3]).t["0KL0ot"]);
    obj6.text = num3;
    obj6.onPress = function onPress() {
      let tmp = null != stateFromStores;
      if (tmp) {
        tmp = null != showActionSheet;
      }
      if (tmp) {
        let obj = arr(stateFromStores[23]);
        obj = {};
        const merged = Object.assign(showActionSheet);
        obj = {};
        const merged1 = Object.assign(stateFromStores);
        obj["response"] = true;
        const items = [obj];
        obj["formFields"] = items;
        const result = obj.submitVerificationForm(guildId, obj);
        arr = arr.push(outer1_13.COMPLETED);
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
    tmp9 = importDefault(stateFromStores[24]);
    obj7 = {};
    const items8 = [END.scrollContainerGradient, ];
    const obj8 = { bottom: sum };
    items8[1] = obj8;
    obj7.style = items8;
    items5 = guildId(stateFromStores[25]).VerticalGradient.START;
    obj7.start = items5;
    END = guildId(stateFromStores[25]).VerticalGradient.END;
    obj7.end = END;
    obj7.colors = str;
    str = "none";
    obj7.pointerEvents = "none";
    obj[1] = callback2(tmp9, obj7);
    obj.children = obj;
    tmp5(guildId(stateFromStores[18]).SafeAreaPaddingView, obj);
    const tmp8Result = tmp8(tmp9, obj);
  }
};
export const MultipleChoicePrompt = function MultipleChoicePrompt(guildId) {
  let currentPromptIndex;
  let handleOnPress;
  let lastPrompt;
  let numberOfPrompts;
  guildId = guildId.guildId;
  const currentPrompt = guildId.currentPrompt;
  const selectOption = guildId.selectOption;
  ({ lastPrompt, currentPromptIndex, numberOfPrompts, handleOnPress } = guildId);
  let obj = guildId(selectOption[14]);
  const items = [closure_12];
  const items1 = [guildId, currentPrompt];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    if (null != currentPrompt) {
      let onboardingResponsesForPrompt = outer1_12.getOnboardingResponsesForPrompt(guildId, currentPrompt.id);
    } else {
      onboardingResponsesForPrompt = [];
    }
    return onboardingResponsesForPrompt;
  }, items1);
  obj = {};
  obj = { contentContainerStyle: items2 };
  items2 = [_createForOfIteratorHelperLoose().scrollContainer, ];
  const tmp = _createForOfIteratorHelperLoose();
  items2[1] = { paddingBottom: 64 + currentPrompt(selectOption[15])().bottom + 48 + 48, position: "relative" };
  const items3 = [callback2(PromptHeader, { currentPrompt, numberOfPrompts, currentPromptIndex }), ];
  const obj1 = { paddingBottom: 64 + currentPrompt(selectOption[15])().bottom + 48 + 48, position: "relative" };
  const options = currentPrompt.options;
  items3[1] = callback2(closure_6, {
    children: options.map((id) => {
      let closure_0 = id;
      const obj = {
        option: id,
        guildId: closure_0,
        onSelect(arg0) {
          let tmp2 = null != arg0;
          if (tmp2) {
            tmp2 = arg0;
          }
          return outer1_2(outer1_1.id, id.id, tmp2);
        }
      };
      const hasItem = stateFromStoresArray.includes(id.id);
      obj.selected = null != hasItem && hasItem;
      return outer1_15(currentPrompt(selectOption[28]), obj, id.id);
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
  const currentPrompt = guildId.currentPrompt;
  const selectOption = guildId.selectOption;
  ({ lastPrompt, currentPromptIndex, numberOfPrompts, handleOnPress } = guildId);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = guildId(selectOption[14]);
  const items = [closure_12];
  const items1 = [guildId, currentPrompt];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    if (null != currentPrompt) {
      let onboardingResponsesForPrompt = outer1_12.getOnboardingResponsesForPrompt(guildId, currentPrompt.id);
    } else {
      onboardingResponsesForPrompt = [];
    }
    return onboardingResponsesForPrompt;
  }, items1);
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
  items3 = [tmp.scrollContainer, { paddingBottom: 64 + currentPrompt(selectOption[15])().bottom + 48 + 48, position: "relative" }];
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
        return outer1_2(outer1_1.id, id.id, tmp2);
      }
    };
    obj.openLazy(guildId(selectOption[33])(selectOption[32], selectOption.paths), "DropdownOptions", obj);
  }, items2);
  const items4 = [callback2(PromptHeader, { currentPrompt, numberOfPrompts, currentPromptIndex }), ];
  const obj2 = {};
  const obj3 = { style: tmp.dropdownContainer, onPress: callback };
  let tmp11 = 0 === found.length;
  if (tmp11) {
    const obj4 = { style: tmp.emptyDropdownText, variant: "text-sm/normal", color: "text-muted", children: "No answers selected." };
    tmp11 = callback2(guildId(selectOption[20]).Text, obj4);
  }
  const items5 = [tmp11, found.map((id) => outer1_15(outer1_22, { option: id }, id.id)), ];
  const obj5 = { style: tmp.dropdownIconContainer };
  const obj1 = { paddingBottom: 64 + currentPrompt(selectOption[15])().bottom + 48 + 48, position: "relative" };
  const tmp10 = closure_16;
  const tmp6 = closure_17;
  const tmp7 = closure_7;
  const tmp8 = callback2;
  const tmp9 = closure_6;
  obj5.children = callback2(closure_5, { style: tmp.dropdownIcon, source: currentPrompt(selectOption[35]) });
  items5[2] = callback2(closure_6, obj5);
  obj3.children = items5;
  obj2.children = tmp10(guildId(selectOption[34]).PressableHighlight, obj3);
  items4[1] = tmp8(tmp9, obj2);
  obj.children = items4;
  const items6 = [closure_16(tmp7, obj), callback2(PromptFooter, { guildId, currentPrompt, selectedOptionIds: stateFromStoresArray, handleOnPress, lastPrompt })];
  obj.children = items6;
  return closure_16(tmp6, obj);
};
