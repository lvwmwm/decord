// Module ID: 16926
// Function ID: 16927
// Name: UserSettingsDesignSystemBadge
// Dependencies: [32, 19, 17, 21, 4945, 587, 10938, 10940, 10942, 10944, 9877, 558, 576, 5195, 13148, 6935, 6936, 6959, 7244, 5935, 6856, 1202, 2]

// Module 16926 (UserSettingsDesignSystemBadge)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1202 */;
import Text_Text from "Text/Text" /* 5195 */;
import Stack_Stack from "Stack/Stack" /* 5935 */;
import Card_Card from "Card/Card" /* 6856 */;
import TableRadioGroup3 from "TableRadioGroup" /* 6936 */;
import TableSwitchRow from "TableSwitchRow" /* 7244 */;
import StarIcon3 from "StarIcon" /* 9877 */;
import ExperimentalEpicIcon from "ExperimentalEpicIcon" /* 10942 */;
import Badge_Badge from "Badge/Badge" /* 13148 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4945 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, preview: obj3, badgeRow: obj4, narrow: { width: 120, flexDirection: "row" }, comparisonLabel: { flex: 1 }, comparisonCell: { width: 88, alignItems: "flex-start" }, layoutCase: obj5, inlineRow: { flexDirection: "row", alignItems: "center" }, trailingRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, inlineBadge: obj6, selfStart: { alignSelf: "flex-start" }, selfStartParent: { alignItems: "flex-start" } };
obj2 = { padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { minHeight: nativeDefault.space.PX_32, alignItems: "center", justifyContent: "center" };
obj4 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj5 = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_8 };
obj6 = { marginLeft: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj);
let closure_10 = ["secondary", "primary", "expressive", "rarity-common", "rarity-rare", "rarity-epic", "rarity-mythic"];
let items = [{ value: "new", label: "new" }, { value: "beta", label: "beta" }, { value: "early_access", label: "early_access" }, { value: "free_trial", label: "free_trial" }, { value: "custom", label: "Custom text" }];
let c12 = "A very long custom badge label that truncates";
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function Playground() {
  let first;
  let first1;
  let first2;
  let first3;
  let first4;
  let tmp10;
  let tmp12;
  let tmp15;
  let tmp7;
  let obj = react2;
  const cResult = obj.c(31);
  const tmp4 = closure_9();
  [first, tmp7] = react.useState("secondary");
  [first1, tmp10] = react.useState("new");
  [first2, tmp12] = react.useState("Custom");
  [first3, tmp15] = react.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp18 = metroImportDefault(Text_Text.Heading, { variant: "text-lg/bold", children: "Playground" });
    cResult[0] = tmp18;
    first4 = tmp18;
  } else {
    first4 = cResult[0];
  }
  if (cResult[1] === first2) {
    let tmp20;
    if (cResult[2] === first1) {
      tmp20 = cResult[3];
    }
    if (cResult[4] === first3) {
      let tmp22;
      if (cResult[5] === first) {
        tmp22 = cResult[6];
      }
      if (cResult[7] === tmp20) {
        if (cResult[8] === tmp22) {
          let tmp24;
          if (cResult[9] === first) {
            tmp24 = cResult[10];
          }
          if (cResult[11] === tmp4.preview) {
            let tmp27;
            let tmp31;
            let tmp34;
            let tmp37;
            let tmp40;
            if (cResult[12] === tmp24) {
              tmp27 = cResult[13];
            }
            const _Symbol = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const mapped = closure_10.map((label) => {
                const obj = { label, value: label };
                return closure_1_7(require("TableRadioRow").TableRadioRow, obj, label);
              });
              cResult[14] = mapped;
              tmp31 = mapped;
            } else {
              tmp31 = cResult[14];
            }
            if (cResult[15] !== first) {
              const obj2 = { title: "Variant", value: first, onChange: tmp7, hasIcons: false, children: tmp31 };
              const tmp36 = metroImportDefault(TableRadioGroup3.TableRadioGroup, obj2);
              cResult[15] = first;
              cResult[16] = tmp36;
              tmp34 = tmp36;
            } else {
              tmp34 = cResult[16];
            }
            const _Symbol2 = Symbol;
            if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
              const mapped1 = items.map((label) => {
                const obj = { label: label.label, value: label.value };
                return closure_1_7(require("TableRadioRow").TableRadioRow, obj, label.value);
              });
              cResult[17] = mapped1;
              tmp37 = mapped1;
            } else {
              tmp37 = cResult[17];
            }
            if (cResult[18] !== first1) {
              const obj3 = { title: "Type", value: first1, onChange: tmp10, hasIcons: false, children: tmp37 };
              const tmp42 = metroImportDefault(TableRadioGroup3.TableRadioGroup, obj3);
              cResult[18] = first1;
              cResult[19] = tmp42;
              tmp40 = tmp42;
            } else {
              tmp40 = cResult[19];
            }
            if (cResult[20] === first2) {
              let tmp43;
              let tmp46;
              if (cResult[21] === first1) {
                tmp43 = cResult[22];
              }
              if (cResult[23] !== first3) {
                const obj4 = { label: "Leading icon", value: first3, onValueChange: tmp15, start: true, end: true };
                const tmp48 = metroImportDefault(TableSwitchRow.TableSwitchRow, obj4);
                cResult[23] = first3;
                cResult[24] = tmp48;
                tmp46 = tmp48;
              } else {
                tmp46 = cResult[24];
              }
              if (cResult[25] === tmp43) {
                if (cResult[26] === tmp46) {
                  if (cResult[27] === tmp27) {
                    if (cResult[28] === tmp34) {
                      let tmp49;
                      if (cResult[29] === tmp40) {
                        tmp49 = cResult[30];
                      }
                      return tmp49;
                    }
                  }
                }
              }
              const obj5 = { spacing: nativeDefault.space.PX_12, children: items };
              const Stack = tmp(5935).Stack;
              items = [first4, tmp27, tmp34, tmp40, tmp43, tmp46];
              const tmp52 = metroImportAll(Stack, obj5);
              cResult[25] = tmp43;
              cResult[26] = tmp46;
              cResult[27] = tmp27;
              cResult[28] = tmp34;
              cResult[29] = tmp40;
              cResult[30] = tmp52;
              tmp49 = tmp52;
            }
            let tmp44 = null;
            if ("custom" === first1) {
              const obj6 = { label: "Custom text", value: first2, onChange: tmp12 };
              tmp44 = metroImportDefault(tmp(6959).TextInput, obj6);
            }
            cResult[20] = first2;
            cResult[21] = first1;
            cResult[22] = tmp44;
            tmp43 = tmp44;
          }
          const obj7 = { style: tmp19, children: tmp24 };
          const tmp30 = metroImportDefault(metroRequire, obj7);
          cResult[11] = tmp4.preview;
          cResult[12] = tmp24;
          cResult[13] = tmp30;
          tmp27 = tmp30;
        }
      }
      const obj8 = { type: tmp20, variant: first, icon: tmp22 };
      const tmp26 = metroImportDefault(Badge_Badge.Badge, obj8);
      cResult[7] = tmp20;
      cResult[8] = tmp22;
      cResult[9] = first;
      cResult[10] = tmp26;
      tmp24 = tmp26;
    }
    let tmp23;
    if (first3) {
      let StarIcon;
      if ("rarity-common" === first) {
        StarIcon = tmp(10938).ExperimentalCommonIcon;
      } else if ("rarity-rare" === first) {
        StarIcon = tmp(10940).ExperimentalRareIcon;
      } else if ("rarity-epic" === first) {
        StarIcon = tmp(10942).ExperimentalEpicIcon;
      } else if ("rarity-mythic" === first) {
        StarIcon = tmp(10944).ExperimentalMythicIcon;
      } else {
        StarIcon = tmp(9877).StarIcon;
      }
      tmp23 = StarIcon;
    }
    cResult[4] = first3;
    cResult[5] = first;
    cResult[6] = tmp23;
    tmp22 = tmp23;
  }
  let tmp21 = first1;
  if ("custom" === first1) {
    let str = "Custom";
    if (first2.length > 0) {
      str = first2;
    }
    tmp21 = { text: str };
    const obj9 = { text: str };
  }
  cResult[1] = first2;
  cResult[2] = first1;
  cResult[3] = tmp21;
  tmp20 = tmp21;
}) : (function Playground() {
  let Badge;
  let first;
  let first1;
  let first2;
  let first3;
  let obj4;
  let tmp12;
  let tmp20;
  let tmp4;
  let tmp7;
  let tmp9;
  const tmp = closure_9();
  [first, tmp4] = react.useState("secondary");
  [first1, tmp7] = react.useState("new");
  [first2, tmp9] = react.useState("Custom");
  [first3, tmp12] = react.useState(false);
  let obj = { spacing: nativeDefault.space.PX_12, children: items };
  const Stack = Stack_Stack.Stack;
  items = [metroImportDefault(Text_Text.Heading, { variant: "text-lg/bold", children: "Playground" }), , , , , ];
  let tmp19 = first1;
  const obj2 = { style: tmp.preview, children: metroImportDefault(Badge, obj4) };
  Badge = Badge_Badge.Badge;
  const tmp13 = metroImportAll;
  const tmp17 = metroRequire;
  if ("custom" === first1) {
    let str = "Custom";
    if (first2.length > 0) {
      str = first2;
    }
    tmp19 = { text: str };
    const obj3 = { text: str };
  }
  obj4 = { type: tmp19, variant: first, icon: tmp20 };
  tmp20 = undefined;
  if (first3) {
    let StarIcon;
    if ("rarity-common" === first) {
      StarIcon = tmp14(10938).ExperimentalCommonIcon;
    } else if ("rarity-rare" === first) {
      StarIcon = tmp14(10940).ExperimentalRareIcon;
    } else if ("rarity-epic" === first) {
      StarIcon = tmp14(10942).ExperimentalEpicIcon;
    } else if ("rarity-mythic" === first) {
      StarIcon = tmp14(10944).ExperimentalMythicIcon;
    } else {
      StarIcon = tmp14(9877).StarIcon;
    }
    tmp20 = StarIcon;
  }
  items[1] = metroImportDefault(tmp17, obj2);
  const obj5 = {
    title: "Variant",
    value: first,
    onChange: tmp4,
    hasIcons: false,
    children: closure_10.map((label) => {
      const obj = { label, value: label };
      return closure_1_7(require("TableRadioRow").TableRadioRow, obj, label);
    })
  };
  const TableRadioGroup = tmp14(6936).TableRadioGroup;
  items[2] = metroImportDefault(TableRadioGroup, obj5);
  const obj6 = {
    title: "Type",
    value: first1,
    onChange: tmp7,
    hasIcons: false,
    children: items.map((label) => {
      const obj = { label: label.label, value: label.value };
      return closure_1_7(require("TableRadioRow").TableRadioRow, obj, label.value);
    })
  };
  const TableRadioGroup2 = tmp14(6936).TableRadioGroup;
  items[3] = metroImportDefault(TableRadioGroup2, obj6);
  let tmp16Result = null;
  if ("custom" === first1) {
    const obj7 = { label: "Custom text", value: first2, onChange: tmp9 };
    tmp16Result = tmp16(tmp14(6959).TextInput, obj7);
  }
  items[4] = tmp16Result;
  items[5] = metroImportDefault(TableSwitchRow.TableSwitchRow, { label: "Leading icon", value: first3, onValueChange: tmp12, start: true, end: true });
  return tmp13(Stack, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function VariantMatrix() {
  let Stack;
  let badgeRow;
  let obj3;
  let tmp10;
  let tmp13;
  let tmp5;
  let tmp6;
  const tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(6);
  const tmp4 = closure_9();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = closure_7(require("Text/Text").Heading, { variant: "text-lg/bold", children: "Variants" });
    const tmp9 = closure_7(require("Text/Text").Text, { variant: "text-sm/normal", color: "text-subtle", children: "Every variant with built-in types, custom text, and a leading icon. With no variant, a badge uses the grey default." });
    cResult[0] = tmp8;
    cResult[1] = tmp9;
    tmp5 = tmp8;
    tmp6 = tmp9;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] !== tmp4) {
    const mapped = closure_10.map((variant) => {
      let StarIcon;
      let StarIcon2;
      let items1;
      const obj = { spacing: nativeDefault.space.PX_8, children: items };
      const Stack = Stack_Stack.Stack;
      items = [, ];
      const obj2 = { variant: "text-sm/medium", children: variant };
      items[0] = metroImportDefault(Text_Text.Text, obj2);
      const obj3 = { style: badgeRow.badgeRow, children: items1 };
      items1 = [, , , , ];
      const obj4 = { type: "new", variant };
      items1[0] = metroImportDefault(Badge_Badge.Badge, obj4);
      const obj5 = { type: "beta", variant };
      items1[1] = metroImportDefault(Badge_Badge.Badge, obj5);
      const obj6 = { type: { text: "Custom" }, variant };
      items1[2] = metroImportDefault(Badge_Badge.Badge, obj6);
      const obj7 = { type: "new", variant, icon: StarIcon };
      const Badge = Badge_Badge.Badge;
      const tmp5 = metroRequire;
      if ("rarity-common" === variant) {
        StarIcon = tmp2(10938).ExperimentalCommonIcon;
      } else if ("rarity-rare" === variant) {
        StarIcon = tmp2(10940).ExperimentalRareIcon;
      } else if ("rarity-epic" === variant) {
        StarIcon = tmp2(10942).ExperimentalEpicIcon;
      } else if ("rarity-mythic" === variant) {
        StarIcon = tmp2(10944).ExperimentalMythicIcon;
      } else {
        StarIcon = tmp2(9877).StarIcon;
      }
      items1[3] = metroImportDefault(Badge, obj7);
      const obj8 = { type: { text: "Custom" }, variant, icon: StarIcon2 };
      const Badge2 = tmp2(13148).Badge;
      if ("rarity-common" === variant) {
        StarIcon2 = tmp2(10938).ExperimentalCommonIcon;
      } else if ("rarity-rare" === variant) {
        StarIcon2 = tmp2(10940).ExperimentalRareIcon;
      } else if ("rarity-epic" === variant) {
        StarIcon2 = tmp2(10942).ExperimentalEpicIcon;
      } else if ("rarity-mythic" === variant) {
        StarIcon2 = tmp2(10944).ExperimentalMythicIcon;
      } else {
        StarIcon2 = tmp2(9877).StarIcon;
      }
      items1[4] = metroImportDefault(Badge2, obj8);
      items[1] = metroImportAll(tmp5, obj3);
      return metroImportAll(Stack, obj, variant);
    });
    cResult[2] = tmp4;
    cResult[3] = mapped;
    tmp10 = mapped;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== tmp10) {
    let obj2 = { children: closure_8(Stack, obj3) };
    const Card = tmp(6856).Card;
    obj3 = { spacing: nativeDefault.space.PX_16, children: items };
    Stack = tmp(5935).Stack;
    items = [tmp5, tmp6, tmp10];
    const tmp17 = closure_7(Card, obj2);
    cResult[4] = tmp10;
    cResult[5] = tmp17;
    tmp13 = tmp17;
  } else {
    tmp13 = cResult[5];
  }
  return tmp13;
}) : (function VariantMatrix() {
  let Stack;
  let badgeRow;
  let obj2;
  _require = closure_9();
  let obj = { children: closure_8(Stack, obj2) };
  const Card = require("Card/Card").Card;
  obj2 = { spacing: nativeDefault.space.PX_16, children: items };
  Stack = require("Stack/Stack").Stack;
  items = [
    closure_7(require("Text/Text").Heading, { variant: "text-lg/bold", children: "Variants" }),
    closure_7(require("Text/Text").Text, { variant: "text-sm/normal", color: "text-subtle", children: "Every variant with built-in types, custom text, and a leading icon. With no variant, a badge uses the grey default." }),
    closure_10.map((variant) => {
      let StarIcon;
      let StarIcon2;
      let items1;
      const obj = { spacing: nativeDefault.space.PX_8, children: items };
      const Stack = Stack_Stack.Stack;
      items = [, ];
      const obj2 = { variant: "text-sm/medium", children: variant };
      items[0] = metroImportDefault(Text_Text.Text, obj2);
      const obj3 = { style: badgeRow.badgeRow, children: items1 };
      items1 = [, , , , ];
      const obj4 = { type: "new", variant };
      items1[0] = metroImportDefault(Badge_Badge.Badge, obj4);
      const obj5 = { type: "beta", variant };
      items1[1] = metroImportDefault(Badge_Badge.Badge, obj5);
      const obj6 = { type: { text: "Custom" }, variant };
      items1[2] = metroImportDefault(Badge_Badge.Badge, obj6);
      const obj7 = { type: "new", variant, icon: StarIcon };
      const Badge = Badge_Badge.Badge;
      const tmp5 = metroRequire;
      if ("rarity-common" === variant) {
        StarIcon = tmp2(10938).ExperimentalCommonIcon;
      } else if ("rarity-rare" === variant) {
        StarIcon = tmp2(10940).ExperimentalRareIcon;
      } else if ("rarity-epic" === variant) {
        StarIcon = tmp2(10942).ExperimentalEpicIcon;
      } else if ("rarity-mythic" === variant) {
        StarIcon = tmp2(10944).ExperimentalMythicIcon;
      } else {
        StarIcon = tmp2(9877).StarIcon;
      }
      items1[3] = metroImportDefault(Badge, obj7);
      const obj8 = { type: { text: "Custom" }, variant, icon: StarIcon2 };
      const Badge2 = tmp2(13148).Badge;
      if ("rarity-common" === variant) {
        StarIcon2 = tmp2(10938).ExperimentalCommonIcon;
      } else if ("rarity-rare" === variant) {
        StarIcon2 = tmp2(10940).ExperimentalRareIcon;
      } else if ("rarity-epic" === variant) {
        StarIcon2 = tmp2(10942).ExperimentalEpicIcon;
      } else if ("rarity-mythic" === variant) {
        StarIcon2 = tmp2(10944).ExperimentalMythicIcon;
      } else {
        StarIcon2 = tmp2(9877).StarIcon;
      }
      items1[4] = metroImportDefault(Badge2, obj8);
      items[1] = metroImportAll(tmp5, obj3);
      return metroImportAll(Stack, obj, variant);
    })
  ];
  return closure_7(Card, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function Truncation() {
  let Stack;
  let obj12;
  let obj3;
  let obj6;
  let obj9;
  let tmp10;
  let tmp14;
  let tmp18;
  let tmp22;
  let tmp26;
  let tmp30;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(15);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = metroImportDefault(Text_Text.Heading, { variant: "text-lg/bold", children: "Long text" });
    const tmp9 = metroImportDefault(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: "Labels stay on one line and truncate with an ellipsis when space runs out. The icon never shrinks." });
    cResult[0] = tmp8;
    cResult[1] = tmp9;
    tmp5 = tmp8;
    tmp6 = tmp9;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { type: obj3 };
    obj3 = { text };
    const tmp13 = metroImportDefault(Badge_Badge.Badge, obj2);
    cResult[2] = tmp13;
    tmp10 = tmp13;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== tmp4.narrow) {
    const obj4 = { style: tmp4.narrow, children: tmp10 };
    const tmp17 = metroImportDefault(metroRequire, obj4);
    cResult[3] = tmp4.narrow;
    cResult[4] = tmp17;
    tmp14 = tmp17;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { type: obj6, variant: "primary", icon: StarIcon3.StarIcon };
    obj6 = { text };
    const Badge = tmp(13148).Badge;
    const tmp21 = metroImportDefault(Badge, obj5);
    cResult[5] = tmp21;
    tmp18 = tmp21;
  } else {
    tmp18 = cResult[5];
  }
  if (cResult[6] !== tmp4.narrow) {
    const obj7 = { style: tmp4.narrow, children: tmp18 };
    const tmp25 = metroImportDefault(metroRequire, obj7);
    cResult[6] = tmp4.narrow;
    cResult[7] = tmp25;
    tmp22 = tmp25;
  } else {
    tmp22 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const obj8 = { type: obj9, variant: "rarity-epic", icon: ExperimentalEpicIcon.ExperimentalEpicIcon };
    obj9 = { text };
    const Badge2 = tmp(13148).Badge;
    const tmp29 = metroImportDefault(Badge2, obj8);
    cResult[8] = tmp29;
    tmp26 = tmp29;
  } else {
    tmp26 = cResult[8];
  }
  if (cResult[9] !== tmp4.narrow) {
    const obj10 = { style: tmp4.narrow, children: tmp26 };
    const tmp33 = metroImportDefault(metroRequire, obj10);
    cResult[9] = tmp4.narrow;
    cResult[10] = tmp33;
    tmp30 = tmp33;
  } else {
    tmp30 = cResult[10];
  }
  if (cResult[11] === tmp14) {
    if (cResult[12] === tmp22) {
      let tmp34;
      if (cResult[13] === tmp30) {
        tmp34 = cResult[14];
      }
      return tmp34;
    }
  }
  const obj11 = { children: metroImportAll(Stack, obj12) };
  const Card = tmp(6856).Card;
  obj12 = { spacing: nativeDefault.space.PX_12, children: items };
  Stack = tmp(5935).Stack;
  items = [tmp5, tmp6, tmp14, tmp22, tmp30];
  const tmp35 = metroImportDefault(Card, obj11);
  cResult[11] = tmp14;
  cResult[12] = tmp22;
  cResult[13] = tmp30;
  cResult[14] = tmp35;
  tmp34 = tmp35;
}) : (function Truncation() {
  let Badge;
  let Badge2;
  let Stack;
  let obj2;
  let obj4;
  let obj5;
  let obj7;
  let obj9;
  const tmp = closure_9();
  const obj = { children: metroImportAll(Stack, obj2) };
  const Card = Card_Card.Card;
  obj2 = { spacing: nativeDefault.space.PX_12, children: items };
  Stack = Stack_Stack.Stack;
  items = [metroImportDefault(Text_Text.Heading, { variant: "text-lg/bold", children: "Long text" }), metroImportDefault(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: "Labels stay on one line and truncate with an ellipsis when space runs out. The icon never shrinks." }), , , ];
  const obj3 = { style: tmp.narrow, children: metroImportDefault(Badge_Badge.Badge, obj4) };
  obj4 = { type: obj5 };
  obj5 = { text };
  items[2] = metroImportDefault(metroRequire, obj3);
  const obj6 = { style: tmp.narrow, children: metroImportDefault(Badge, obj7) };
  obj7 = { type: { text }, variant: "primary", icon: StarIcon3.StarIcon };
  Badge = Badge_Badge.Badge;
  items[3] = metroImportDefault(metroRequire, obj6);
  const obj8 = { style: tmp.narrow, children: metroImportDefault(Badge2, obj9) };
  obj9 = { type: { text }, variant: "rarity-epic", icon: ExperimentalEpicIcon.ExperimentalEpicIcon };
  Badge2 = Badge_Badge.Badge;
  items[4] = metroImportDefault(metroRequire, obj8);
  return metroImportDefault(Card, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function ComparisonRow(arg0) {
  let label;
  let legacy;
  let mana;
  const obj = react2;
  const cResult = obj.c(13);
  ({ label, legacy, mana } = arg0);
  const tmp4 = closure_9();
  if (cResult[0] === label) {
    let tmp5;
    if (cResult[1] === tmp4.comparisonLabel) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === legacy) {
      let tmp7;
      if (cResult[4] === tmp4.comparisonCell) {
        tmp7 = cResult[5];
      }
      if (cResult[6] === mana) {
        let tmp11;
        if (cResult[7] === tmp4.comparisonCell) {
          tmp11 = cResult[8];
        }
        if (cResult[9] === tmp5) {
          if (cResult[10] === tmp7) {
            let tmp15;
            if (cResult[11] === tmp11) {
              tmp15 = cResult[12];
            }
            return tmp15;
          }
        }
        const obj2 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_12, children: items };
        const Stack = tmp(5935).Stack;
        items = [tmp5, tmp7, tmp11];
        const tmp18 = metroImportAll(Stack, obj2);
        cResult[9] = tmp5;
        cResult[10] = tmp7;
        cResult[11] = tmp11;
        cResult[12] = tmp18;
        tmp15 = tmp18;
      }
      const obj3 = { style: tmp4.comparisonCell, children: mana };
      const tmp14 = metroImportDefault(metroRequire, obj3);
      cResult[6] = mana;
      cResult[7] = tmp4.comparisonCell;
      cResult[8] = tmp14;
      tmp11 = tmp14;
    }
    const obj4 = { style: tmp4.comparisonCell, children: legacy };
    const tmp10 = metroImportDefault(metroRequire, obj4);
    cResult[3] = legacy;
    cResult[4] = tmp4.comparisonCell;
    cResult[5] = tmp10;
    tmp7 = tmp10;
  }
  const obj5 = { variant: "text-sm/normal", style: tmp4.comparisonLabel, children: label };
  const tmp6 = metroImportDefault(Text_Text.Text, obj5);
  cResult[0] = label;
  cResult[1] = tmp4.comparisonLabel;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function ComparisonRow(arg0) {
  let label;
  let legacy;
  let mana;
  ({ label, legacy, mana } = arg0);
  const tmp = closure_9();
  const obj = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_12, children: items };
  const Stack = Stack_Stack.Stack;
  items = [, , ];
  const obj2 = { variant: "text-sm/normal", style: tmp.comparisonLabel, children: label };
  items[0] = metroImportDefault(Text_Text.Text, obj2);
  const obj3 = { style: tmp.comparisonCell, children: legacy };
  items[1] = metroImportDefault(metroRequire, obj3);
  const obj4 = { style: tmp.comparisonCell, children: mana };
  items[2] = metroImportDefault(metroRequire, obj4);
  return metroImportAll(Stack, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function LegacyComparison() {
  let Stack2;
  let items1;
  let obj12;
  let obj6;
  let tmp10;
  let tmp14;
  let tmp17;
  let tmp21;
  let tmp24;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(22);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = metroImportDefault(Text_Text.Heading, { variant: "text-lg/bold", children: "Legacy vs. Mana" });
    const tmp9 = metroImportDefault(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: "Legacy defaults on the left, the closest Mana Badge on the right. A bare type renders the grey default, so brand needs an explicit variant." });
    cResult[0] = tmp8;
    cResult[1] = tmp9;
    tmp5 = tmp8;
    tmp6 = tmp9;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] !== tmp4.comparisonLabel) {
    const obj2 = { style: tmp4.comparisonLabel };
    const tmp13 = metroImportDefault(metroRequire, obj2);
    cResult[2] = tmp4.comparisonLabel;
    cResult[3] = tmp13;
    tmp10 = tmp13;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp16 = metroImportDefault(Text_Text.Text, { variant: "text-xs/semibold", color: "text-subtle", children: "Legacy" });
    cResult[4] = tmp16;
    tmp14 = tmp16;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] !== tmp4.comparisonCell) {
    const obj3 = { style: tmp4.comparisonCell, children: tmp14 };
    const tmp20 = metroImportDefault(metroRequire, obj3);
    cResult[5] = tmp4.comparisonCell;
    cResult[6] = tmp20;
    tmp17 = tmp20;
  } else {
    tmp17 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp23 = metroImportDefault(Text_Text.Text, { variant: "text-xs/semibold", color: "text-subtle", children: "Mana" });
    cResult[7] = tmp23;
    tmp21 = tmp23;
  } else {
    tmp21 = cResult[7];
  }
  if (cResult[8] !== tmp4.comparisonCell) {
    const obj4 = { style: tmp4.comparisonCell, children: tmp21 };
    const tmp27 = metroImportDefault(metroRequire, obj4);
    cResult[8] = tmp4.comparisonCell;
    cResult[9] = tmp27;
    tmp24 = tmp27;
  } else {
    tmp24 = cResult[9];
  }
  if (cResult[10] === tmp10) {
    if (cResult[11] === tmp17) {
      let tmp28;
      let tmp30;
      let tmp33;
      let tmp37;
      let tmp41;
      let tmp45;
      let tmp49;
      let tmp53;
      if (cResult[12] === tmp24) {
        tmp28 = cResult[13];
      }
      const _Symbol = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp32 = metroImportDefault(native.TextBadge, { text: "New" });
        cResult[14] = tmp32;
        tmp30 = tmp32;
      } else {
        tmp30 = cResult[14];
      }
      const _Symbol2 = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { label: "TextBadge vs. default", legacy: tmp30, mana: metroImportDefault(Badge_Badge.Badge, obj6) };
        obj6 = { type: { text: "New" } };
        const tmp36 = metroImportDefault(closure_16, obj5);
        cResult[15] = tmp36;
        tmp33 = tmp36;
      } else {
        tmp33 = cResult[15];
      }
      const _Symbol3 = Symbol;
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        const obj7 = { label: "NewTag vs. new", legacy: metroImportDefault(native.NewTag, {}), mana: metroImportDefault(Badge_Badge.Badge, { type: "new" }) };
        const tmp40 = metroImportDefault(closure_16, obj7);
        cResult[16] = tmp40;
        tmp37 = tmp40;
      } else {
        tmp37 = cResult[16];
      }
      const _Symbol4 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        const obj8 = { label: "NewTag vs. new, brand", legacy: metroImportDefault(native.NewTag, {}), mana: metroImportDefault(Badge_Badge.Badge, { type: "new", variant: "primary" }) };
        const tmp44 = metroImportDefault(closure_16, obj8);
        cResult[17] = tmp44;
        tmp41 = tmp44;
      } else {
        tmp41 = cResult[17];
      }
      const _Symbol5 = Symbol;
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        const obj9 = { label: "BetaTag vs. beta", legacy: metroImportDefault(native.BetaTag, {}), mana: metroImportDefault(Badge_Badge.Badge, { type: "beta" }) };
        const tmp48 = metroImportDefault(closure_16, obj9);
        cResult[18] = tmp48;
        tmp45 = tmp48;
      } else {
        tmp45 = cResult[18];
      }
      const _Symbol6 = Symbol;
      if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
        const obj10 = { label: "BetaTag vs. beta, brand", legacy: metroImportDefault(native.BetaTag, {}), mana: metroImportDefault(Badge_Badge.Badge, { type: "beta", variant: "primary" }) };
        const tmp52 = metroImportDefault(closure_16, obj10);
        cResult[19] = tmp52;
        tmp49 = tmp52;
      } else {
        tmp49 = cResult[19];
      }
      if (cResult[20] !== tmp28) {
        const obj11 = { children: metroImportAll(Stack2, obj12) };
        const Card = tmp(6856).Card;
        obj12 = { spacing: nativeDefault.space.PX_12, children: items };
        Stack2 = tmp(5935).Stack;
        items = [tmp5, tmp6, tmp28, tmp33, tmp37, tmp41, tmp45, tmp49];
        const tmp57 = metroImportDefault(Card, obj11);
        cResult[20] = tmp28;
        cResult[21] = tmp57;
        tmp53 = tmp57;
      } else {
        tmp53 = cResult[21];
      }
      return tmp53;
    }
  }
  const obj13 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_12, children: items1 };
  const Stack = tmp(5935).Stack;
  items1 = [tmp10, tmp17, tmp24];
  const tmp29 = metroImportAll(Stack, obj13);
  cResult[10] = tmp10;
  cResult[11] = tmp17;
  cResult[12] = tmp24;
  cResult[13] = tmp29;
  tmp28 = tmp29;
}) : (function LegacyComparison() {
  let Stack;
  let items1;
  let obj2;
  const tmp = closure_9();
  const obj = { children: metroImportAll(Stack, obj2) };
  const Card = Card_Card.Card;
  obj2 = { spacing: nativeDefault.space.PX_12, children: items };
  Stack = Stack_Stack.Stack;
  items = [metroImportDefault(Text_Text.Heading, { variant: "text-lg/bold", children: "Legacy vs. Mana" }), metroImportDefault(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: "Legacy defaults on the left, the closest Mana Badge on the right. A bare type renders the grey default, so brand needs an explicit variant." }), , , , , , ];
  const obj3 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_12, children: items1 };
  const Stack2 = Stack_Stack.Stack;
  items1 = [, , ];
  const obj4 = { style: tmp.comparisonLabel };
  items1[0] = metroImportDefault(metroRequire, obj4);
  const obj5 = { style: tmp.comparisonCell, children: metroImportDefault(Text_Text.Text, { variant: "text-xs/semibold", color: "text-subtle", children: "Legacy" }) };
  items1[1] = metroImportDefault(metroRequire, obj5);
  const obj6 = { style: tmp.comparisonCell, children: metroImportDefault(Text_Text.Text, { variant: "text-xs/semibold", color: "text-subtle", children: "Mana" }) };
  items1[2] = metroImportDefault(metroRequire, obj6);
  items[2] = metroImportAll(Stack2, obj3);
  const obj7 = { label: "TextBadge vs. default", legacy: metroImportDefault(native.TextBadge, { text: "New" }), mana: metroImportDefault(Badge_Badge.Badge, { type: { text: "New" } }) };
  items[3] = metroImportDefault(closure_16, obj7);
  const obj8 = { label: "NewTag vs. new", legacy: metroImportDefault(native.NewTag, {}), mana: metroImportDefault(Badge_Badge.Badge, { type: "new" }) };
  items[4] = metroImportDefault(closure_16, obj8);
  const obj9 = { label: "NewTag vs. new, brand", legacy: metroImportDefault(native.NewTag, {}), mana: metroImportDefault(Badge_Badge.Badge, { type: "new", variant: "primary" }) };
  items[5] = metroImportDefault(closure_16, obj9);
  const obj10 = { label: "BetaTag vs. beta", legacy: metroImportDefault(native.BetaTag, {}), mana: metroImportDefault(Badge_Badge.Badge, { type: "beta" }) };
  items[6] = metroImportDefault(closure_16, obj10);
  const obj11 = { label: "BetaTag vs. beta, brand", legacy: metroImportDefault(native.BetaTag, {}), mana: metroImportDefault(Badge_Badge.Badge, { type: "beta", variant: "primary" }) };
  items[7] = metroImportDefault(closure_16, obj11);
  return metroImportDefault(Card, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function LayoutCase(arg0) {
  let children;
  let title;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(8);
  ({ title, children } = arg0);
  const tmp4 = closure_9();
  if (cResult[0] !== title) {
    const obj2 = { variant: "text-xs/semibold", color: "text-subtle", children: title };
    const tmp7 = metroImportDefault(Text_Text.Text, obj2);
    cResult[0] = title;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === children) {
    let tmp8;
    if (cResult[3] === tmp4.layoutCase) {
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp5) {
      let tmp10;
      if (cResult[6] === tmp8) {
        tmp10 = cResult[7];
      }
      return tmp10;
    }
    const obj3 = { spacing: nativeDefault.space.PX_4, children: items };
    const Stack = tmp(5935).Stack;
    items = [tmp5, tmp8];
    const tmp13 = metroImportAll(Stack, obj3);
    cResult[5] = tmp5;
    cResult[6] = tmp8;
    cResult[7] = tmp13;
    tmp10 = tmp13;
  }
  const obj4 = { style: tmp4.layoutCase, children };
  const tmp9 = metroImportDefault(metroRequire, obj4);
  cResult[2] = children;
  cResult[3] = tmp4.layoutCase;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : (function LayoutCase(arg0) {
  let children;
  let title;
  ({ title, children } = arg0);
  const obj = { spacing: nativeDefault.space.PX_4, children: items };
  const tmp = closure_9();
  const Stack = Stack_Stack.Stack;
  items = [metroImportDefault(Text_Text.Text, { variant: "text-xs/semibold", color: "text-subtle", children: title }), ];
  const obj2 = { style: tmp.layoutCase, children };
  items[1] = metroImportDefault(metroRequire, obj2);
  return metroImportAll(Stack, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function ParentLayouts() {
  let Stack;
  let items1;
  let items10;
  let items11;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj16;
  let tmp10;
  let tmp13;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(58);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = metroImportDefault(Text_Text.Heading, { variant: "text-lg/bold", children: "Parent layouts" });
    const tmp9 = metroImportDefault(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: "Legacy and Mana badges in the same parents. Both follow the parent's alignment; use parent/container layout to position Mana badges." });
    cResult[0] = tmp8;
    cResult[1] = tmp9;
    tmp5 = tmp8;
    tmp6 = tmp9;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp12 = metroImportDefault(Text_Text.Text, { variant: "text-md/semibold", children: "Channel name" });
    cResult[2] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== tmp4.inlineBadge) {
    const obj2 = { text: "New", style: tmp4.inlineBadge };
    const tmp15 = metroImportDefault(native.TextBadge, obj2);
    cResult[3] = tmp4.inlineBadge;
    cResult[4] = tmp15;
    tmp13 = tmp15;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] === tmp4.inlineRow) {
    let tmp16;
    let tmp18;
    let tmp21;
    let tmp24;
    if (cResult[6] === tmp13) {
      tmp16 = cResult[7];
    }
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp20 = metroImportDefault(Text_Text.Text, { variant: "text-md/semibold", children: "Channel name" });
      cResult[8] = tmp20;
      tmp18 = tmp20;
    } else {
      tmp18 = cResult[8];
    }
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { type: { text: "New" } };
      const tmp23 = metroImportDefault(Badge_Badge.Badge, obj3);
      cResult[9] = tmp23;
      tmp21 = tmp23;
    } else {
      tmp21 = cResult[9];
    }
    if (cResult[10] !== tmp4.inlineBadge) {
      const obj4 = { style: tmp4.inlineBadge, children: tmp21 };
      const tmp27 = metroImportDefault(metroRequire, obj4);
      cResult[10] = tmp4.inlineBadge;
      cResult[11] = tmp27;
      tmp24 = tmp27;
    } else {
      tmp24 = cResult[11];
    }
    if (cResult[12] === tmp4.inlineRow) {
      let tmp28;
      if (cResult[13] === tmp24) {
        tmp28 = cResult[14];
      }
      if (cResult[15] === tmp16) {
        let tmp32;
        let tmp37;
        let tmp36;
        let tmp41;
        let tmp45;
        let tmp48;
        let tmp51;
        if (cResult[16] === tmp28) {
          tmp32 = cResult[17];
        }
        const _Symbol3 = Symbol;
        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp39 = metroImportDefault(Text_Text.Text, { variant: "text-md/semibold", children: "Feature name" });
          const tmp40 = metroImportDefault(native.BetaTag, {});
          cResult[18] = tmp39;
          cResult[19] = tmp40;
          tmp37 = tmp40;
          tmp36 = tmp39;
        } else {
          tmp36 = cResult[18];
          tmp37 = cResult[19];
        }
        if (cResult[20] !== tmp4.inlineRow) {
          const obj5 = { style: tmp4.inlineRow, children: items };
          items = [tmp36, tmp37];
          const tmp44 = metroImportAll(metroRequire, obj5);
          cResult[20] = tmp4.inlineRow;
          cResult[21] = tmp44;
          tmp41 = tmp44;
        } else {
          tmp41 = cResult[21];
        }
        const _Symbol4 = Symbol;
        if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp47 = metroImportDefault(Text_Text.Text, { variant: "text-md/semibold", children: "Feature name" });
          cResult[22] = tmp47;
          tmp45 = tmp47;
        } else {
          tmp45 = cResult[22];
        }
        const _Symbol5 = Symbol;
        if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp50 = metroImportDefault(Badge_Badge.Badge, { type: "beta", variant: "primary" });
          cResult[23] = tmp50;
          tmp48 = tmp50;
        } else {
          tmp48 = cResult[23];
        }
        if (cResult[24] !== tmp4.inlineBadge) {
          const obj6 = { style: tmp4.inlineBadge, children: tmp48 };
          const tmp54 = metroImportDefault(metroRequire, obj6);
          cResult[24] = tmp4.inlineBadge;
          cResult[25] = tmp54;
          tmp51 = tmp54;
        } else {
          tmp51 = cResult[25];
        }
        if (cResult[26] === tmp4.inlineRow) {
          let tmp55;
          if (cResult[27] === tmp51) {
            tmp55 = cResult[28];
          }
          if (cResult[29] === tmp41) {
            let tmp59;
            let tmp63;
            let tmp66;
            let tmp71;
            let tmp74;
            let tmp77;
            if (cResult[30] === tmp55) {
              tmp59 = cResult[31];
            }
            const _Symbol6 = Symbol;
            if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp65 = metroImportDefault(native.TextBadge, { text: "New" });
              cResult[32] = tmp65;
              tmp63 = tmp65;
            } else {
              tmp63 = cResult[32];
            }
            const _Symbol7 = Symbol;
            if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
              const obj7 = { title: "Column, default alignment (TextBadge, then Mana)", children: items1 };
              items1 = [tmp63, ];
              const obj8 = { type: { text: "New" } };
              items1[1] = metroImportDefault(Badge_Badge.Badge, obj8);
              const tmp70 = metroImportAll(closure_18, obj7);
              cResult[33] = tmp70;
              tmp66 = tmp70;
            } else {
              tmp66 = cResult[33];
            }
            if (cResult[34] !== tmp4.selfStart) {
              const obj9 = { text: "New", style: tmp4.selfStart };
              const tmp73 = metroImportDefault(native.TextBadge, obj9);
              cResult[34] = tmp4.selfStart;
              cResult[35] = tmp73;
              tmp71 = tmp73;
            } else {
              tmp71 = cResult[35];
            }
            const _Symbol8 = Symbol;
            if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
              const obj10 = { type: { text: "New" } };
              const tmp76 = metroImportDefault(Badge_Badge.Badge, obj10);
              cResult[36] = tmp76;
              tmp74 = tmp76;
            } else {
              tmp74 = cResult[36];
            }
            if (cResult[37] !== tmp4.selfStartParent) {
              const obj11 = { style: tmp4.selfStartParent, children: tmp74 };
              const tmp80 = metroImportDefault(metroRequire, obj11);
              cResult[37] = tmp4.selfStartParent;
              cResult[38] = tmp80;
              tmp77 = tmp80;
            } else {
              tmp77 = cResult[38];
            }
            if (cResult[39] === tmp71) {
              let tmp81;
              let tmp86;
              let tmp85;
              let tmp90;
              let tmp94;
              let tmp97;
              let tmp100;
              if (cResult[40] === tmp77) {
                tmp81 = cResult[41];
              }
              const _Symbol9 = Symbol;
              if (cResult[42] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp88 = metroImportDefault(Text_Text.Text, { variant: "text-md/normal", children: "Notifications" });
                const tmp89 = metroImportDefault(native.TextBadge, { text: "New" });
                cResult[42] = tmp88;
                cResult[43] = tmp89;
                tmp86 = tmp89;
                tmp85 = tmp88;
              } else {
                tmp85 = cResult[42];
                tmp86 = cResult[43];
              }
              if (cResult[44] !== tmp4.trailingRow) {
                const obj12 = { style: tmp4.trailingRow, children: items2 };
                items2 = [tmp85, tmp86];
                const tmp93 = metroImportAll(metroRequire, obj12);
                cResult[44] = tmp4.trailingRow;
                cResult[45] = tmp93;
                tmp90 = tmp93;
              } else {
                tmp90 = cResult[45];
              }
              const _Symbol10 = Symbol;
              if (cResult[46] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp96 = metroImportDefault(Text_Text.Text, { variant: "text-md/normal", children: "Notifications" });
                cResult[46] = tmp96;
                tmp94 = tmp96;
              } else {
                tmp94 = cResult[46];
              }
              const _Symbol11 = Symbol;
              if (cResult[47] === Symbol.for("react.memo_cache_sentinel")) {
                const obj13 = { type: { text: "New" } };
                const tmp99 = metroImportDefault(Badge_Badge.Badge, obj13);
                cResult[47] = tmp99;
                tmp97 = tmp99;
              } else {
                tmp97 = cResult[47];
              }
              if (cResult[48] !== tmp4.trailingRow) {
                const obj14 = { style: tmp4.trailingRow, children: items3 };
                items3 = [tmp94, tmp97];
                const tmp103 = metroImportAll(metroRequire, obj14);
                cResult[48] = tmp4.trailingRow;
                cResult[49] = tmp103;
                tmp100 = tmp103;
              } else {
                tmp100 = cResult[49];
              }
              if (cResult[50] === tmp90) {
                let tmp104;
                if (cResult[51] === tmp100) {
                  tmp104 = cResult[52];
                }
                if (cResult[53] === tmp59) {
                  if (cResult[54] === tmp81) {
                    if (cResult[55] === tmp104) {
                      let tmp108;
                      if (cResult[56] === tmp32) {
                        tmp108 = cResult[57];
                      }
                      return tmp108;
                    }
                  }
                }
                const obj15 = { children: metroImportAll(Stack, obj16) };
                const Card = tmp(6856).Card;
                obj16 = { spacing: nativeDefault.space.PX_12, children: items4 };
                Stack = tmp(5935).Stack;
                items4 = [tmp5, tmp6, tmp32, tmp59, tmp66, tmp81, tmp104];
                const tmp112 = metroImportDefault(Card, obj15);
                cResult[53] = tmp59;
                cResult[54] = tmp81;
                cResult[55] = tmp104;
                cResult[56] = tmp32;
                cResult[57] = tmp112;
                tmp108 = tmp112;
              }
              const obj17 = { title: "Trailing edge of a list row (TextBadge, then Mana)", children: items5 };
              items5 = [tmp90, tmp100];
              const tmp107 = metroImportAll(closure_18, obj17);
              cResult[50] = tmp90;
              cResult[51] = tmp100;
              cResult[52] = tmp107;
              tmp104 = tmp107;
            }
            const obj18 = { title: "Column with alignSelf: 'flex-start' (TextBadge, then Mana)", children: items6 };
            items6 = [tmp71, tmp77];
            const tmp84 = metroImportAll(closure_18, obj18);
            cResult[39] = tmp71;
            cResult[40] = tmp77;
            cResult[41] = tmp84;
            tmp81 = tmp84;
          }
          const obj19 = { title: "Row next to text (BetaTag, then Mana brand)", children: items7 };
          items7 = [tmp41, tmp55];
          const tmp62 = metroImportAll(closure_18, obj19);
          cResult[29] = tmp41;
          cResult[30] = tmp55;
          cResult[31] = tmp62;
          tmp59 = tmp62;
        }
        const obj20 = { style: tmp4.inlineRow, children: items8 };
        items8 = [tmp45, tmp51];
        const tmp58 = metroImportAll(metroRequire, obj20);
        cResult[26] = tmp4.inlineRow;
        cResult[27] = tmp51;
        cResult[28] = tmp58;
        tmp55 = tmp58;
      }
      const obj21 = { title: "Row next to text (TextBadge, then Mana)", children: items9 };
      items9 = [tmp16, tmp28];
      const tmp35 = metroImportAll(closure_18, obj21);
      cResult[15] = tmp16;
      cResult[16] = tmp28;
      cResult[17] = tmp35;
      tmp32 = tmp35;
    }
    const obj22 = { style: tmp4.inlineRow, children: items10 };
    items10 = [tmp18, tmp24];
    const tmp31 = metroImportAll(metroRequire, obj22);
    cResult[12] = tmp4.inlineRow;
    cResult[13] = tmp24;
    cResult[14] = tmp31;
    tmp28 = tmp31;
  }
  const obj23 = { style: tmp4.inlineRow, children: items11 };
  items11 = [tmp10, tmp13];
  const tmp17 = metroImportAll(metroRequire, obj23);
  cResult[5] = tmp4.inlineRow;
  cResult[6] = tmp13;
  cResult[7] = tmp17;
  tmp16 = tmp17;
}) : (function ParentLayouts() {
  let Stack;
  let items1;
  let items10;
  let items11;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj2;
  const tmp = closure_9();
  const obj = { children: metroImportAll(Stack, obj2) };
  const Card = Card_Card.Card;
  obj2 = { spacing: nativeDefault.space.PX_12, children: items };
  Stack = Stack_Stack.Stack;
  items = [metroImportDefault(Text_Text.Heading, { variant: "text-lg/bold", children: "Parent layouts" }), metroImportDefault(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: "Legacy and Mana badges in the same parents. Both follow the parent's alignment; use parent/container layout to position Mana badges." }), , , , , ];
  const obj3 = { title: "Row next to text (TextBadge, then Mana)", children: items2 };
  const obj4 = { style: tmp.inlineRow, children: items1 };
  items1 = [metroImportDefault(Text_Text.Text, { variant: "text-md/semibold", children: "Channel name" }), ];
  const obj5 = { text: "New", style: tmp.inlineBadge };
  items1[1] = metroImportDefault(native.TextBadge, obj5);
  items2 = [metroImportAll(metroRequire, obj4), ];
  const obj6 = { style: tmp.inlineRow, children: items3 };
  items3 = [metroImportDefault(Text_Text.Text, { variant: "text-md/semibold", children: "Channel name" }), ];
  const obj7 = { style: tmp.inlineBadge, children: metroImportDefault(Badge_Badge.Badge, { type: { text: "New" } }) };
  items3[1] = metroImportDefault(metroRequire, obj7);
  items2[1] = metroImportAll(metroRequire, obj6);
  items[2] = metroImportAll(closure_18, obj3);
  const obj8 = { title: "Row next to text (BetaTag, then Mana brand)", children: items5 };
  const obj9 = { style: tmp.inlineRow, children: items4 };
  items4 = [metroImportDefault(Text_Text.Text, { variant: "text-md/semibold", children: "Feature name" }), metroImportDefault(native.BetaTag, {})];
  items5 = [metroImportAll(metroRequire, obj9), ];
  const obj10 = { style: tmp.inlineRow, children: items6 };
  items6 = [metroImportDefault(Text_Text.Text, { variant: "text-md/semibold", children: "Feature name" }), ];
  const obj11 = { style: tmp.inlineBadge, children: metroImportDefault(Badge_Badge.Badge, { type: "beta", variant: "primary" }) };
  items6[1] = metroImportDefault(metroRequire, obj11);
  items5[1] = metroImportAll(metroRequire, obj10);
  items[3] = metroImportAll(closure_18, obj8);
  const obj12 = { title: "Column, default alignment (TextBadge, then Mana)", children: items7 };
  items7 = [metroImportDefault(native.TextBadge, { text: "New" }), metroImportDefault(Badge_Badge.Badge, { type: { text: "New" } })];
  items[4] = metroImportAll(closure_18, obj12);
  const obj13 = { title: "Column with alignSelf: 'flex-start' (TextBadge, then Mana)", children: items8 };
  items8 = [, ];
  const obj14 = { text: "New", style: tmp.selfStart };
  items8[0] = metroImportDefault(native.TextBadge, obj14);
  const obj15 = { style: tmp.selfStartParent, children: metroImportDefault(Badge_Badge.Badge, { type: { text: "New" } }) };
  items8[1] = metroImportDefault(metroRequire, obj15);
  items[5] = metroImportAll(closure_18, obj13);
  const obj16 = { title: "Trailing edge of a list row (TextBadge, then Mana)", children: items10 };
  const obj17 = { style: tmp.trailingRow, children: items9 };
  items9 = [metroImportDefault(Text_Text.Text, { variant: "text-md/normal", children: "Notifications" }), metroImportDefault(native.TextBadge, { text: "New" })];
  items10 = [metroImportAll(metroRequire, obj17), ];
  const obj18 = { style: tmp.trailingRow, children: items11 };
  items11 = [metroImportDefault(Text_Text.Text, { variant: "text-md/normal", children: "Notifications" }), metroImportDefault(Badge_Badge.Badge, { type: { text: "New" } })];
  items10[1] = metroImportAll(metroRequire, obj18);
  items[6] = metroImportAll(closure_18, obj16);
  return metroImportDefault(Card, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserSettingsDesignSystemBadge() {
  let first;
  let tmp15;
  const obj = react2;
  const cResult = obj.c(3);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { spacing: nativeDefault.space.PX_24, children: items };
    const Stack = tmp(5935).Stack;
    items = [metroImportDefault(Text_Text.Text, { variant: "text-md/normal", color: "text-subtle", children: "Badges label feature status, like New or Beta. They are not for counts or notifications." }), metroImportDefault(closure_13, {}), metroImportDefault(closure_14, {}), metroImportDefault(closure_15, {}), metroImportDefault(closure_17, {}), metroImportDefault(closure_19, {})];
    const tmp14 = metroImportAll(Stack, obj2);
    cResult[0] = tmp14;
    first = tmp14;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.container) {
    const obj3 = { contentContainerStyle: tmp4.container, children: first };
    const tmp18 = metroImportDefault(hasOwnProperty, obj3);
    cResult[1] = tmp4.container;
    cResult[2] = tmp18;
    tmp15 = tmp18;
  } else {
    tmp15 = cResult[2];
  }
  return tmp15;
}) : (function UserSettingsDesignSystemBadge() {
  let Stack;
  let obj2;
  const obj = { contentContainerStyle: closure_9().container, children: metroImportAll(Stack, obj2) };
  obj2 = { spacing: nativeDefault.space.PX_24, children: items };
  Stack = Stack_Stack.Stack;
  items = [metroImportDefault(Text_Text.Text, { variant: "text-md/normal", color: "text-subtle", children: "Badges label feature status, like New or Beta. They are not for counts or notifications." }), metroImportDefault(closure_13, {}), metroImportDefault(closure_14, {}), metroImportDefault(closure_15, {}), metroImportDefault(closure_17, {}), metroImportDefault(closure_19, {})];
  return metroImportDefault(hasOwnProperty, obj);
});
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemBadge.tsx");

export default tmp5;
