// Module ID: 13006
// Function ID: 13007
// Name: GameOrganizationCharacterList
// Dependencies: [19, 17, 21, 5005, 587, 1125, 2404, 558, 576, 5271, 7072, 6015, 5289, 5073, 13004, 6965, 7047, 2]

// Module 13006 (GameOrganizationCharacterList)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef2404 from "module_2404" /* 2404 */;
import react_native2 from "react-native" /* 5073 */;
import Text_Text from "Text/Text" /* 5271 */;
import useToken from "useToken" /* 5289 */;
import Stack_Stack from "Stack/Stack" /* 6015 */;
import Card_Card from "Card/Card" /* 6965 */;
import CircleErrorIcon2 from "CircleErrorIcon" /* 7072 */;
import GameOrganizationIconDefault from "GameOrganizationIcon" /* 13004 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, selectedCard: obj3, labels: { flex: 1 }, cards: obj4, title: { alignSelf: "center" } };
obj2 = { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED };
obj4 = { gap: nativeDefault.space.PX_12 };
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function CharacterSubLabel(text) {
  let items;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(5);
  text = text.text;
  if (text.eligible) {
    let tmp14;
    if (cResult[0] !== text) {
      const obj2 = { variant: "text-sm/medium", color: "text-subtle", children: text };
      const tmp16 = hasOwnProperty(Text_Text.Text, obj2);
      cResult[0] = text;
      cResult[1] = tmp16;
      tmp14 = tmp16;
    } else {
      tmp14 = cResult[1];
    }
    tmp9 = tmp14;
  } else {
    let tmp5;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
      const CircleErrorIcon = tmp(7072).CircleErrorIcon;
      const tmp8 = hasOwnProperty(CircleErrorIcon, obj3);
      cResult[2] = tmp8;
      tmp5 = tmp8;
    } else {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== text) {
      const obj4 = { direction: "horizontal", spacing: nativeDefault.space.PX_4, align: "center", children: items };
      const Stack = tmp(6015).Stack;
      items = [tmp5, ];
      const obj5 = { variant: "text-sm/medium", color: "text-muted", children: text };
      items[1] = hasOwnProperty(Text_Text.Text, obj5);
      const tmp13 = metroRequire(Stack, obj4);
      cResult[3] = text;
      cResult[4] = tmp13;
      tmp9 = tmp13;
    } else {
      tmp9 = cResult[4];
    }
  }
  return tmp9;
}) : (function CharacterSubLabel(text) {
  let items;
  let tmp6;
  text = text.text;
  if (text.eligible) {
    const obj2 = { variant: "text-sm/medium", color: "text-subtle", children: text };
    tmp6 = hasOwnProperty(Text_Text.Text, obj2);
  } else {
    const obj = { direction: "horizontal", spacing: nativeDefault.space.PX_4, align: "center", children: items };
    const Stack = Stack_Stack.Stack;
    const obj3 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
    const CircleErrorIcon = CircleErrorIcon2.CircleErrorIcon;
    items = [hasOwnProperty(CircleErrorIcon, obj3), ];
    const obj4 = { variant: "text-sm/medium", color: "text-muted", children: text };
    items[1] = hasOwnProperty(Text_Text.Text, obj4);
    tmp6 = metroRequire(Stack, obj);
  }
  return tmp6;
});
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function CharacterCard(character) {
  let accessibilityRole;
  let accessibilityState;
  let items;
  let items1;
  let onSelect;
  let selected;
  const obj = react2;
  const cResult = obj.c(36);
  character = character.character;
  ({ selected, onSelect } = character);
  const noun = character.noun;
  const tmp4 = closure_7();
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  const eligible = character.eligible;
  if (cResult[0] === !eligible) {
    let tmp8;
    let formatToPlainStringResult;
    if (cResult[1] === selected) {
      tmp8 = cResult[2];
    }
    const tmpResult = react_native2;
    const radioA11yNative = tmpResult.useRadioA11yNative(tmp8);
    ({ accessibilityRole, accessibilityState } = radioA11yNative);
    if (cResult[3] === character) {
      let tmp10;
      if (cResult[4] === noun) {
        tmp10 = cResult[5];
      }
      if (cResult[6] === character.id) {
        let tmp13;
        if (cResult[7] === onSelect) {
          tmp13 = cResult[8];
        }
        if (selected) {
          selected = tmp4.selectedCard;
        }
        if (cResult[9] === tmp4.card) {
          let tmp14;
          let name;
          let tmp17;
          if (cResult[10] === selected) {
            tmp14 = cResult[11];
          }
          if (null != tmp10) {
            const _HermesInternal = HermesInternal;
            name = "" + character.name + ", " + tmp10;
          } else {
            name = character.name;
          }
          if (cResult[12] !== character.iconUrl) {
            const obj3 = { iconUrl: character.iconUrl, size: 48, borderRadius: nativeDefault.radii.md };
            const tmp5Result = GameOrganizationIconDefault;
            const tmp20 = hasOwnProperty(tmp5Result, obj3);
            cResult[12] = character.iconUrl;
            cResult[13] = tmp20;
            tmp17 = tmp20;
          } else {
            tmp17 = cResult[13];
          }
          let str3 = "text-default";
          if (!eligible) {
            str3 = "text-muted";
          }
          if (cResult[14] === character.name) {
            if (cResult[15] === token) {
              let tmp21;
              if (cResult[16] === str3) {
                tmp21 = cResult[17];
              }
              if (cResult[18] === character.eligible) {
                let tmp24;
                if (cResult[19] === tmp10) {
                  tmp24 = cResult[20];
                }
                if (cResult[21] === tmp4.labels) {
                  if (cResult[22] === tmp24) {
                    let tmp28;
                    if (cResult[23] === tmp21) {
                      tmp28 = cResult[24];
                    }
                    if (cResult[25] === tmp28) {
                      let tmp31;
                      if (cResult[26] === tmp17) {
                        tmp31 = cResult[27];
                      }
                      if (cResult[28] === accessibilityRole) {
                        if (cResult[29] === accessibilityState) {
                          if (cResult[30] === !eligible) {
                            if (cResult[31] === tmp31) {
                              if (cResult[32] === tmp13) {
                                if (cResult[33] === tmp14) {
                                  let tmp34;
                                  if (cResult[34] === name) {
                                    tmp34 = cResult[35];
                                  }
                                  return tmp34;
                                }
                              }
                            }
                          }
                        }
                      }
                      const obj4 = { onPress: tmp13, disabled: !eligible, style: tmp14, accessibilityRole, accessibilityState, accessibilityLabel: name, children: tmp31 };
                      const tmp36 = hasOwnProperty(Card_Card.Card, obj4);
                      cResult[28] = accessibilityRole;
                      cResult[29] = accessibilityState;
                      cResult[30] = !eligible;
                      cResult[31] = tmp31;
                      cResult[32] = tmp13;
                      cResult[33] = tmp14;
                      cResult[34] = name;
                      cResult[35] = tmp36;
                      tmp34 = tmp36;
                    }
                    const obj5 = { direction: "horizontal", spacing: nativeDefault.space.PX_16, align: "center", children: items };
                    const Stack2 = tmp(6015).Stack;
                    items = [tmp17, tmp28];
                    const tmp33 = metroRequire(Stack2, obj5);
                    cResult[25] = tmp28;
                    cResult[26] = tmp17;
                    cResult[27] = tmp33;
                    tmp31 = tmp33;
                  }
                }
                const obj6 = { spacing: nativeDefault.space.PX_4, style: tmp4.labels, children: items1 };
                const Stack = tmp(6015).Stack;
                items1 = [tmp21, tmp24];
                const tmp30 = metroRequire(Stack, obj6);
                cResult[21] = tmp4.labels;
                cResult[22] = tmp24;
                cResult[23] = tmp21;
                cResult[24] = tmp30;
                tmp28 = tmp30;
              }
              let tmp25 = null != tmp10;
              if (tmp25) {
                const obj7 = { text: tmp10, eligible: character.eligible };
                tmp25 = hasOwnProperty(closure_8, obj7);
              }
              cResult[18] = character.eligible;
              cResult[19] = tmp10;
              cResult[20] = tmp25;
              tmp24 = tmp25;
            }
          }
          const obj8 = { variant: token, color: str3, children: character.name };
          const tmp23 = hasOwnProperty(Text_Text.Text, obj8);
          cResult[14] = character.name;
          cResult[15] = token;
          cResult[16] = str3;
          cResult[17] = tmp23;
          tmp21 = tmp23;
        }
        const items2 = [tmp4.card, selected];
        cResult[9] = tmp4.card;
        cResult[10] = selected;
        cResult[11] = items2;
        tmp14 = items2;
      }
      const fn = function f() {
        return onSelect(character.id);
      };
      cResult[6] = character.id;
      cResult[7] = onSelect;
      cResult[8] = fn;
      tmp13 = fn;
    }
    const description = character.description;
    if (character.eligible) {
      formatToPlainStringResult = description;
    } else {
      formatToPlainStringResult = description;
      if (description == null) {
        const intl = tmp(1125).intl;
        const obj9 = { noun };
        formatToPlainStringResult = intl.formatToPlainString(tmp5(2404).VNY3C1, obj9);
      }
    }
    cResult[3] = character;
    cResult[4] = noun;
    cResult[5] = formatToPlainStringResult;
    tmp10 = formatToPlainStringResult;
  }
  const obj10 = { selected, disabled: !eligible };
  cResult[0] = !eligible;
  cResult[1] = selected;
  cResult[2] = obj10;
  tmp8 = obj10;
}) : (function CharacterCard(character) {
  let Stack;
  let accessibilityRole;
  let accessibilityState;
  let closure_129_1;
  let formatToPlainStringResult;
  let items;
  let items1;
  let items2;
  let name;
  let obj5;
  let selected;
  let str3;
  character = character.character;
  ({ selected, onSelect: closure_129_1 } = character);
  const noun = character.noun;
  const tmp = closure_7();
  const eligible = character.eligible;
  const obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  const obj2 = react_native2;
  const radioA11yNative = obj2.useRadioA11yNative({ selected, disabled: tmp6 });
  const description = character.description;
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  if (character.eligible) {
    formatToPlainStringResult = description;
  } else {
    formatToPlainStringResult = description;
    if (description == null) {
      const intl = tmp2(1125).intl;
      const obj3 = { noun };
      formatToPlainStringResult = intl.formatToPlainString(tmp4(2404).VNY3C1, obj3);
    }
  }
  const obj4 = {
    onPress() {
      return closure_1_1(character.id);
    },
    disabled: !eligible,
    style: items,
    accessibilityRole,
    accessibilityState,
    accessibilityLabel: name,
    children: metroRequire(Stack, obj5)
  };
  items = [tmp.card, ];
  const Card = tmp2(6965).Card;
  if (selected) {
    selected = tmp.selectedCard;
  }
  items[1] = selected;
  if (null != formatToPlainStringResult) {
    const _HermesInternal = HermesInternal;
    name = "" + character.name + ", " + formatToPlainStringResult;
  } else {
    name = character.name;
  }
  obj5 = { direction: "horizontal", spacing: nativeDefault.space.PX_16, align: "center", children: items1 };
  Stack = tmp2(6015).Stack;
  const obj6 = { iconUrl: character.iconUrl, size: 48, borderRadius: nativeDefault.radii.md };
  const tmp4Result = GameOrganizationIconDefault;
  items1 = [hasOwnProperty(tmp4Result, obj6), ];
  const obj7 = { spacing: nativeDefault.space.PX_4, style: tmp.labels, children: items2 };
  const Stack2 = tmp2(6015).Stack;
  const obj8 = { variant: token, color: str3, children: character.name };
  str3 = "text-default";
  const Text = tmp2(5271).Text;
  if (!eligible) {
    str3 = "text-muted";
  }
  items2 = [hasOwnProperty(Text, obj8), ];
  let tmp10Result = null != formatToPlainStringResult;
  if (tmp10Result) {
    const obj9 = { text: formatToPlainStringResult, eligible: character.eligible };
    tmp10Result = tmp10(closure_8, obj9);
  }
  items2[1] = tmp10Result;
  items1[1] = metroRequire(Stack2, obj7);
  return hasOwnProperty(Card, obj4);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameOrganizationCharacterList(onSelect) {
  let characters;
  let noun;
  let selectedCharacterId;
  let obj = selectedCharacterId(noun[8]);
  const cResult = obj.c(30);
  ({ characters, selectedCharacterId } = onSelect);
  onSelect = onSelect.onSelect;
  noun = onSelect.noun;
  const tmp5 = closure_7();
  if (cResult[0] !== characters) {
    let tmp8;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function s(eligible, eligible2) {
        const NumberResult = Number(eligible2.eligible);
        return NumberResult - Number(eligible.eligible);
      };
      cResult[2] = fn;
      tmp8 = fn;
    } else {
      tmp8 = cResult[2];
    }
    const items = [];
    HermesBuiltin.arraySpread(items, characters, 0);
    const sorted = items.sort(tmp8);
    cResult[0] = characters;
    cResult[1] = sorted;
  }
  if (cResult[3] !== characters) {
    let tmp15;
    const _Symbol2 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(eligible) {
          return !eligible.eligible;
        }
      }
      cResult[5] = C;
      tmp15 = C;
    } else {
      class C {
        constructor(eligible) {
          return !eligible.eligible;
        }
      }
    }
    cResult[3] = characters;
    cResult[4] = characters.some(tmp15);
    const someResult = characters.some(tmp15);
  } else {
    class C {
      constructor(eligible) {
        return !eligible.eligible;
      }
    }
  }
  const title = tmp5.title;
  if (cResult[6] !== noun) {
    class C {
      constructor(eligible) {
        return !eligible.eligible;
      }
    }
    const obj3 = { noun };
    cResult[6] = noun;
    cResult[7] = obj2.formatToPlainString(onSelect(noun[6])["Xm+emB"], obj3);
    const formatToPlainStringResult = obj2.formatToPlainString(onSelect(noun[6])["Xm+emB"], obj3);
  } else {
    class C {
      constructor(eligible) {
        return !eligible.eligible;
      }
    }
  }
  if (cResult[8] === tmp5.title) {
    class C {
      constructor(eligible) {
        return !eligible.eligible;
      }
    }
    if (cResult[11] === noun) {
      class C {
        constructor(eligible) {
          return !eligible.eligible;
        }
      }
    }
    if (cResult[16] === noun) {
      class C {
        constructor(eligible) {
          return !eligible.eligible;
        }
      }
    }
    class R {
      constructor(character) {
        const obj = { character, selected: character.id === selectedCharacterId, onSelect, noun };
        return hasOwnProperty(closure_9, obj, character.id);
      }
    }
    cResult[16] = noun;
    cResult[17] = onSelect;
    cResult[18] = selectedCharacterId;
    cResult[19] = R;
  }
  cResult[8] = tmp5.title;
  cResult[9] = tmp17;
  cResult[10] = closure_5(selectedCharacterId(noun[16]).TableRowGroupTitle, { style: title, title: tmp17 });
  closure_5(selectedCharacterId(noun[16]).TableRowGroupTitle, { style: title, title: tmp17 });
}) : (function GameOrganizationCharacterList(characters) {
  let intl;
  let intl2;
  let items1;
  let noun;
  let obj5;
  let onSelect;
  characters = characters.characters;
  ({ selectedCharacterId: importDefault, onSelect: dependencyMap, noun } = characters);
  const tmp = closure_7();
  let items = [characters];
  const memo = noun.useMemo(() => {
    const items = [...characters];
    return items.sort((eligible, eligible2) => {
      const NumberResult = Number(eligible2.eligible);
      return NumberResult - Number(eligible.eligible);
    });
  }, items);
  let someResult = characters.some((eligible) => !eligible.eligible);
  let obj = { spacing: nativeDefault.space.PX_12, children: items1 };
  const Stack = characters(6015).Stack;
  const obj2 = { style: tmp.title, title: intl.formatToPlainString(_modDef2404["Xm+emB"], { noun }) };
  const TableRowGroupTitle = characters(7047).TableRowGroupTitle;
  intl = characters(1125).intl;
  items1 = [closure_5(TableRowGroupTitle, obj2), , ];
  const obj3 = {
    accessibilityRole: "radiogroup",
    style: tmp.cards,
    children: memo.map((character) => {
      const obj = { character, selected: character.id === importDefault, onSelect: dependencyMap, noun };
      return hasOwnProperty(closure_9, obj, character.id);
    })
  };
  items1[1] = closure_5(View, obj3);
  const tmp3 = closure_6;
  const tmp7 = closure_5;
  if (someResult) {
    const obj4 = { variant: "text-md/medium", color: "text-subtle", children: intl2.formatToPlainString(_modDef2404.ybJIQJ, obj5) };
    const Text = tmp4(5271).Text;
    intl2 = tmp4(1125).intl;
    obj5 = { noun };
    someResult = tmp7(Text, obj4);
  }
  items1[2] = someResult;
  return tmp3(Stack, obj);
});
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationCharacterList.tsx");

export default tmp5;
