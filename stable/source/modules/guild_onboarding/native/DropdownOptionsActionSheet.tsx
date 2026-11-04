// Module ID: 7264
// Function ID: 7265
// Name: DropdownOptionsActionSheet
// Dependencies: [19, 17, 6757, 7227, 1395, 21, 5003, 558, 576, 573, 7259, 1417, 7265, 5266, 7267, 1633, 5242, 7280, 1128, 1202, 5276, 5297, 5301, 2]

// Module 7264 (DropdownOptionsActionSheet)
import react_native from "react-native" /* 17 */;
import useStateFromStores from "useStateFromStores" /* 573 */;
import intl4 from "intl" /* 1128 */;
import EmojiConstants from "EmojiConstants" /* 1395 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1633 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5242 */;
import react from "react" /* 19 */;
import EmojiStore from "EmojiStore" /* 6757 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 7227 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5003 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, dependencyMap, responses;

let c9;
let metroImportAll;
const View = react_native.View;
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ optionTextEmoji: { fontSize: 24, lineHeight: 24, paddingTop: 5 }, optionImageEmoji: { height: 24, width: 24 }, labelRow: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, closeButtonWrapper: { marginTop: 16, marginHorizontal: 16 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function DropdownOptionRow(option) {
  let closure_2;
  let emojiURL;
  let first;
  let items1;
  let obj8;
  let onSelect;
  let str;
  let tmp26;
  let tmp9;
  let tmp = option;
  const obj = option(576);
  const cResult = obj.c(31);
  option = option.option;
  ({ responses, onSelect } = option);
  const canBeNew = option.canBeNew;
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmojiStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  let emoji = option.emoji;
  let id;
  const tmp7 = cResult[1];
  if (emoji != null) {
    id = emoji.id;
  }
  if (tmp7 !== id) {
    let emoji2 = option.emoji;
    let id1;
    if (emoji2 != null) {
      id1 = emoji2.id;
    }
    const fn = function c() {
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
    };
    cResult[1] = id1;
    cResult[2] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const tmpResult = tmp(573);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp9);
  if (cResult[3] === option.id) {
    let tmp12;
    if (cResult[4] === responses) {
      tmp12 = cResult[5];
    }
    dependencyMap = tmp12;
    if (cResult[6] === onSelect) {
      if (cResult[7] === option) {
        let tmp14;
        let tmp23Result;
        if (cResult[8] === tmp12) {
          tmp14 = cResult[9];
        }
        if (cResult[10] === stateFromStores) {
          const emoji3 = option.emoji;
          let id2;
          const tmp15 = cResult[11];
          if (emoji3 != null) {
            id2 = emoji3.id;
          }
          if (tmp15 === id2) {
            const emoji4 = option.emoji;
            let name;
            const tmp17 = cResult[12];
            if (emoji4 != null) {
              name = emoji4.name;
            }
            if (tmp17 === name) {
              if (cResult[13] === tmp4.optionImageEmoji) {
                let tmp19;
                if (cResult[14] === tmp4.optionTextEmoji) {
                  tmp19 = cResult[15];
                }
                if (cResult[16] === canBeNew) {
                  let tmp31;
                  let tmp34;
                  if (cResult[17] === option.isUnseen) {
                    tmp31 = cResult[18];
                  }
                  if (cResult[19] !== option.title) {
                    const obj2 = { variant: "text-md/normal", children: option.title };
                    const tmp36 = closure_8(tmp(5266).Text, obj2);
                    cResult[19] = option.title;
                    cResult[20] = tmp36;
                    tmp34 = tmp36;
                  } else {
                    tmp34 = cResult[20];
                  }
                  if (cResult[21] === tmp31) {
                    if (cResult[22] === tmp4.labelRow) {
                      let tmp37;
                      if (cResult[23] === tmp34) {
                        tmp37 = cResult[24];
                      }
                      if (cResult[25] === tmp19) {
                        if (cResult[26] === tmp14) {
                          if (cResult[27] === tmp37) {
                            if (cResult[28] === tmp31) {
                              let tmp41;
                              if (cResult[29] === tmp12) {
                                tmp41 = cResult[30];
                              }
                              return tmp41;
                            }
                          }
                        }
                      }
                      const obj3 = { label: tmp37, selected: tmp12, leading: tmp19, trailing: tmp31, onPress: tmp14 };
                      const tmp44 = closure_8(onSelect(7267), obj3);
                      cResult[25] = tmp19;
                      cResult[26] = tmp14;
                      cResult[27] = tmp37;
                      cResult[28] = tmp31;
                      cResult[29] = tmp12;
                      cResult[30] = tmp44;
                      tmp41 = tmp44;
                    }
                  }
                  const obj5 = { style: tmp4.labelRow, children: items1 };
                  items1 = [tmp34, tmp31];
                  const tmp40 = closure_9(View, obj5);
                  cResult[21] = tmp31;
                  cResult[22] = tmp4.labelRow;
                  cResult[23] = tmp34;
                  cResult[24] = tmp40;
                  tmp37 = tmp40;
                }
                let tmp32 = null;
                if (canBeNew) {
                  tmp32 = null;
                  if (option.isUnseen) {
                    tmp32 = closure_8(tmp(7265).Badge, { type: "new", variant: "primary" });
                  }
                }
                cResult[16] = canBeNew;
                cResult[17] = option.isUnseen;
                cResult[18] = tmp32;
                tmp31 = tmp32;
              }
            }
          }
        }
        const emoji5 = option.emoji;
        let id3;
        if (emoji5 != null) {
          id3 = emoji5.id;
        }
        if (null != id3) {
          const obj7 = { style: { display: "flex", alignItems: "center" }, children: closure_8(tmp26, obj8) };
          obj8 = { textEmojiStyle: null, fastImageStyle: null, src: emojiURL, name: str };
          ({ optionTextEmoji: obj4.textEmojiStyle, optionImageEmoji: obj4.fastImageStyle } = tmp4);
          emojiURL = undefined;
          const tmp24 = View;
          const tmp25 = onSelect;
          tmp26 = onSelect(7259);
          if (null != stateFromStores) {
            const obj9 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
            ({ id: obj6.id, animated: obj6.animated } = stateFromStores);
            const tmp25Result = tmp25(1417);
            emojiURL = tmp25Result.getEmojiURL(obj9);
          }
          const emoji7 = option.emoji;
          str = undefined;
          if (emoji7 != null) {
            str = emoji7.name;
          }
          if (str == null) {
            str = "";
          }
          tmp23Result = tmp23(tmp24, obj7);
        } else {
          const emoji6 = option.emoji;
          let name1;
          if (emoji6 != null) {
            name1 = emoji6.name;
          }
          tmp23Result = null;
        }
        cResult[10] = stateFromStores;
        const emoji8 = option.emoji;
        let id4;
        if (emoji8 != null) {
          id4 = emoji8.id;
        }
        cResult[11] = id4;
        const emoji9 = option.emoji;
        let name2;
        if (emoji9 != null) {
          name2 = emoji9.name;
        }
        cResult[12] = name2;
        cResult[13] = tmp4.optionImageEmoji;
        cResult[14] = tmp4.optionTextEmoji;
        cResult[15] = tmp23Result;
        tmp19 = tmp23Result;
      }
    }
    const fn2 = function v() {
      onSelect(option, !closure_2);
    };
    cResult[6] = onSelect;
    cResult[7] = option;
    cResult[8] = tmp12;
    cResult[9] = fn2;
    tmp14 = fn2;
  }
  const hasItem = responses.includes(option.id);
  cResult[3] = option.id;
  cResult[4] = responses;
  cResult[5] = hasItem;
  tmp12 = hasItem;
}) : (function DropdownOptionRow(option) {
  let emojiURL;
  let items2;
  let leading;
  let obj4;
  let onSelect;
  let str;
  let tmp13;
  option = option.option;
  ({ responses, onSelect } = option);
  let selected;
  const canBeNew = option.canBeNew;
  let tmp = closure_10();
  const items = [EmojiStore];
  const obj = option(selected[9]);
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
  selected = responses.includes(option.id);
  const items1 = [onSelect, option, selected];
  let emoji = option.emoji;
  let id;
  const onPress = react.useCallback(() => {
    onSelect(option, !selected);
  }, items1);
  if (emoji != null) {
    id = emoji.id;
  }
  if (null != id) {
    const obj2 = { style: { display: "flex", alignItems: "center" }, children: closure_8(tmp13, obj4) };
    obj4 = { textEmojiStyle: null, fastImageStyle: null, src: emojiURL, name: str };
    ({ optionTextEmoji: obj3.textEmojiStyle, optionImageEmoji: obj3.fastImageStyle } = tmp);
    emojiURL = undefined;
    const tmp11 = View;
    const tmp12 = onSelect;
    tmp13 = onSelect(selected[10]);
    if (null != stateFromStores) {
      const obj6 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
      ({ id: obj5.id, animated: obj5.animated } = stateFromStores);
      const tmp12Result = tmp12(selected[11]);
      emojiURL = tmp12Result.getEmojiURL(obj6);
    }
    const emoji3 = option.emoji;
    str = undefined;
    if (emoji3 != null) {
      str = emoji3.name;
    }
    if (str == null) {
      str = "";
    }
    leading = tmp10(tmp11, obj2);
  } else {
    let emoji2 = option.emoji;
    let name;
    if (emoji2 != null) {
      name = emoji2.name;
    }
    leading = null;
  }
  let trailing = null;
  if (canBeNew) {
    trailing = null;
    if (option.isUnseen) {
      trailing = closure_8(tmp2(tmp3[12]).Badge, { type: "new", variant: "primary" });
    }
  }
  const obj7 = { style: tmp.labelRow, children: items2 };
  items2 = [, ];
  const obj12 = { variant: "text-md/normal", children: option.title };
  items2[0] = closure_8(option(selected[13]).Text, obj12);
  items2[1] = trailing;
  const label = closure_9(View, obj7);
  return closure_8(onSelect(selected[14]), { label, selected, leading, trailing, onPress });
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function DropdownOptionsActionSheet(guildId) {
  let canBeNew;
  let first;
  let intl;
  let intl3;
  let items2;
  let obj8;
  let tmp7;
  let tmp9;
  let obj = guildId(canBeNew[8]);
  const cResult = obj.c(30);
  guildId = guildId.guildId;
  const promptId = guildId.promptId;
  canBeNew = guildId.canBeNew;
  const onSelect = guildId.onSelect;
  const tmp4 = closure_10();
  const bottom = promptId(canBeNew[15])().bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildOnboardingPromptsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== promptId) {
    const fn = function s() {
      return GuildOnboardingPromptsStore.getOnboardingPrompt(promptId);
    };
    cResult[1] = promptId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = guildId(canBeNew[9]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildOnboardingPromptsStore];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === guildId) {
    let tmp11;
    let tmp13;
    if (cResult[5] === promptId) {
      tmp11 = cResult[6];
    }
    const tmpResult2 = guildId(canBeNew[9]);
    const stateFromStoresArray = tmpResult2.useStateFromStoresArray(tmp9, tmp11);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const fn3 = function _() {
        const obj = promptId(canBeNew[16]);
        obj.hideActionSheet();
      };
      cResult[7] = fn3;
      tmp13 = fn3;
    } else {
      tmp13 = cResult[7];
    }
    if (null == stateFromStores) {
      return null;
    } else {
      let tmp18;
      let tmp19;
      let tmp21;
      const _Symbol4 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { title: intl.string(guildId(canBeNew[18]).t.E2ICbC) };
        const BottomSheetTitleHeader = tmp(tmp2[17]).BottomSheetTitleHeader;
        intl = tmp(tmp2[18]).intl;
        cResult[8] = closure_8(BottomSheetTitleHeader, obj2);
        closure_8(BottomSheetTitleHeader, obj2);
        class P {
          constructor(option) {
            const obj = { option, responses: stateFromStoresArray, onSelect, canBeNew: Boolean(canBeNew) };
            return metroImportAll(closure_11, obj, option.id);
          }
        }
      }
      if (cResult[9] !== bottom) {
        const obj3 = { paddingBottom: bottom };
        cResult[9] = bottom;
        cResult[10] = obj3;
        tmp18 = obj3;
      } else {
        tmp18 = cResult[10];
      }
      const _Symbol2 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(tmp2[18]).intl;
        const stringResult = intl2.string(guildId(canBeNew[18]).t.E2ICbC);
        cResult[11] = stringResult;
        tmp19 = stringResult;
      } else {
        tmp19 = cResult[11];
      }
      if (cResult[12] === canBeNew) {
        if (cResult[13] === onSelect) {
          if (cResult[14] === stateFromStores.options) {
            let tmp27;
            let tmp30;
            if (cResult[15] === stateFromStoresArray) {
              tmp21 = cResult[16];
            }
            if (cResult[21] !== tmp21) {
              const obj4 = { accessibilityRole: "radiogroup", accessibilityLabel: tmp19, children: tmp21 };
              cResult[21] = tmp21;
              cResult[22] = closure_8(guildId(canBeNew[19]).CardSection, obj4);
              closure_8(guildId(canBeNew[19]).CardSection, obj4);
              class P {
                constructor(option) {
                  const obj = { option, responses: stateFromStoresArray, onSelect, canBeNew: Boolean(canBeNew) };
                  return metroImportAll(closure_11, obj, option.id);
                }
              }
            }
            const _Symbol3 = Symbol;
            if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
              const obj5 = { onPress: tmp13, text: intl3.string(guildId(canBeNew[18]).t.cpT0Cq), grow: true };
              const Button = tmp(tmp2[20]).Button;
              intl3 = tmp(tmp2[18]).intl;
              const tmp29 = closure_8(Button, obj5);
              class P {
                constructor(option) {
                  const obj = { option, responses: stateFromStoresArray, onSelect, canBeNew: Boolean(canBeNew) };
                  return metroImportAll(closure_11, obj, option.id);
                }
              }
              tmp27 = tmp29;
            } else {
              tmp27 = cResult[23];
            }
            if (cResult[24] !== tmp4.closeButtonWrapper) {
              const obj6 = { style: tmp4.closeButtonWrapper, children: tmp27 };
              cResult[24] = tmp4.closeButtonWrapper;
              const tmp33 = closure_8(stateFromStoresArray, obj6);
              class P {
                constructor(option) {
                  const obj = { option, responses: stateFromStoresArray, onSelect, canBeNew: Boolean(canBeNew) };
                  return metroImportAll(closure_11, obj, option.id);
                }
              }
              tmp30 = tmp33;
            } else {
              tmp30 = cResult[25];
            }
            if (cResult[26] === tmp24) {
              if (cResult[27] === tmp30) {
                let tmp34;
                if (cResult[28] === tmp18) {
                  tmp34 = cResult[29];
                }
                return tmp34;
              }
            }
            const obj7 = { scrollable: true, header: null, children: closure_9(guildId(canBeNew[22]).BottomSheetScrollView, obj8) };
            class P {
              constructor(option) {
                const obj = { option, responses: stateFromStoresArray, onSelect, canBeNew: Boolean(canBeNew) };
                return metroImportAll(closure_11, obj, option.id);
              }
            }
            BottomSheet = tmp(tmp2[21]).BottomSheet;
            obj8 = { contentContainerStyle: tmp18, children: items2 };
            items2 = [tmp24, tmp30];
            const tmp37 = closure_8(BottomSheet, obj7);
            cResult[26] = tmp24;
            cResult[27] = tmp30;
            cResult[28] = tmp18;
            cResult[29] = tmp37;
            tmp34 = tmp37;
          }
        }
      }
      if (cResult[17] === canBeNew) {
        if (cResult[18] === onSelect) {
          let tmp22;
          if (cResult[19] === stateFromStoresArray) {
            tmp22 = cResult[20];
          }
          const options = stateFromStores.options;
          const mapped = options.map(tmp22);
          cResult[12] = canBeNew;
          cResult[13] = onSelect;
          cResult[14] = stateFromStores.options;
          class P {
            constructor(option) {
              const obj = { option, responses: stateFromStoresArray, onSelect, canBeNew: Boolean(canBeNew) };
              return metroImportAll(closure_11, obj, option.id);
            }
          }
          cResult[15] = stateFromStoresArray;
          cResult[16] = mapped;
          tmp21 = mapped;
        }
      }
      class P {
        constructor(option) {
          const obj = { option, responses: stateFromStoresArray, onSelect, canBeNew: Boolean(canBeNew) };
          return metroImportAll(closure_11, obj, option.id);
        }
      }
      cResult[17] = canBeNew;
      cResult[18] = onSelect;
      cResult[19] = stateFromStoresArray;
      cResult[20] = P;
      tmp22 = P;
    }
  }
  const fn2 = function v() {
    return GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(guildId, promptId);
  };
  cResult[4] = guildId;
  cResult[5] = promptId;
  cResult[6] = fn2;
  tmp11 = fn2;
}) : (function DropdownOptionsActionSheet(arg0) {
  let BottomSheetScrollView;
  let Button;
  let intl;
  let intl2;
  let intl3;
  let items2;
  let obj5;
  let obj6;
  let obj9;
  let onSelect;
  let options;
  ({ guildId: require, promptId: importDefault, canBeNew: dependencyMap, onSelect: react } = arg0);
  const tmp = closure_10();
  const bottom = useSafeAreaInsetsDefault().bottom;
  let obj = useStateFromStores;
  const items = [GuildOnboardingPromptsStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildOnboardingPromptsStore.getOnboardingPrompt(importDefault));
  const items1 = [GuildOnboardingPromptsStore];
  const obj2 = useStateFromStores;
  responses = obj2.useStateFromStoresArray(items1, () => GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(require, importDefault));
  if (null == stateFromStores) {
    return null;
  } else {
    const obj3 = { title: intl.string(intl4.t.E2ICbC) };
    const BottomSheetTitleHeader = tmp3(7280).BottomSheetTitleHeader;
    intl = tmp3(1128).intl;
    const obj4 = { scrollable: true, header: closure_8(BottomSheetTitleHeader, obj3), children: closure_9(BottomSheetScrollView, obj5) };
    closure_8(BottomSheetTitleHeader, obj3);
    BottomSheet = tmp3(5297).BottomSheet;
    obj5 = { contentContainerStyle: obj6, children: items2 };
    obj6 = { paddingBottom: bottom };
    BottomSheetScrollView = tmp3(5301).BottomSheetScrollView;
    const obj7 = {
      accessibilityRole: "radiogroup",
      accessibilityLabel: intl2.string(intl4.t.E2ICbC),
      children: options.map((option) => {
          const obj = { option, responses, onSelect: react, canBeNew: Boolean(dependencyMap) };
          return metroImportAll(closure_11, obj, option.id);
        })
    };
    const CardSection = tmp3(1202).CardSection;
    intl2 = tmp3(1128).intl;
    options = stateFromStores.options;
    items2 = [closure_8(CardSection, obj7), ];
    const obj8 = { style: tmp.closeButtonWrapper, children: closure_8(Button, obj9) };
    obj9 = { onPress: tmp5, text: intl3.string(intl4.t.cpT0Cq), grow: true };
    Button = tmp3(5276).Button;
    intl3 = tmp3(1128).intl;
    items2[1] = closure_8(responses, obj8);
    return closure_8(BottomSheet, obj4);
  }
});
const result = size.fileFinishedImporting("modules/guild_onboarding/native/DropdownOptionsActionSheet.tsx");

export default tmp3;
