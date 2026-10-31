// Module ID: 17799
// Function ID: 17800
// Name: UserSettingsDesignSystemBadge
// Dependencies: [32, 19, 17, 21, 5014, 575, 8667, 9566, 11469, 11471, 11473, 11475, 10063, 6027, 5624, 7306, 7058, 7061, 7082, 7369, 6977, 1187, 2]
// Exports: default

// Module 17799 (UserSettingsDesignSystemBadge)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import Text_Text from "Text/Text" /* 5624 */;
import Stack_Stack from "Stack/Stack" /* 6027 */;
import Card_Card from "Card/Card" /* 6977 */;
import Badge_Badge from "Badge/Badge" /* 7306 */;
import TableSwitchRow from "TableSwitchRow" /* 7369 */;
import StarIcon3 from "StarIcon" /* 10063 */;
import ExperimentalEpicIcon from "ExperimentalEpicIcon" /* 11473 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
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
function Playground() {
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
    if ("premium" === first) {
      StarIcon = tmp14(8667).LockIcon;
    } else if ("inverted" === first) {
      StarIcon = tmp14(9566).TagIcon;
    } else if ("rarity-common" === first) {
      StarIcon = tmp14(11469).ExperimentalCommonIcon;
    } else if ("rarity-rare" === first) {
      StarIcon = tmp14(11471).ExperimentalRareIcon;
    } else if ("rarity-epic" === first) {
      StarIcon = tmp14(11473).ExperimentalEpicIcon;
    } else if ("rarity-mythic" === first) {
      StarIcon = tmp14(11475).ExperimentalMythicIcon;
    } else {
      StarIcon = tmp14(10063).StarIcon;
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
  const TableRadioGroup = tmp14(7058).TableRadioGroup;
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
  const TableRadioGroup2 = tmp14(7058).TableRadioGroup;
  items[3] = metroImportDefault(TableRadioGroup2, obj6);
  let tmp16Result = null;
  if ("custom" === first1) {
    const obj7 = { label: "Custom text", value: first2, onChange: tmp9 };
    tmp16Result = tmp16(tmp14(7082).TextInput, obj7);
  }
  items[4] = tmp16Result;
  items[5] = metroImportDefault(TableSwitchRow.TableSwitchRow, { label: "Leading icon", value: first3, onValueChange: tmp12, start: true, end: true });
  return tmp13(Stack, obj);
}
function VariantMatrix() {
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
      if ("premium" === variant) {
        StarIcon = tmp2(8667).LockIcon;
      } else if ("inverted" === variant) {
        StarIcon = tmp2(9566).TagIcon;
      } else if ("rarity-common" === variant) {
        StarIcon = tmp2(11469).ExperimentalCommonIcon;
      } else if ("rarity-rare" === variant) {
        StarIcon = tmp2(11471).ExperimentalRareIcon;
      } else if ("rarity-epic" === variant) {
        StarIcon = tmp2(11473).ExperimentalEpicIcon;
      } else if ("rarity-mythic" === variant) {
        StarIcon = tmp2(11475).ExperimentalMythicIcon;
      } else {
        StarIcon = tmp2(10063).StarIcon;
      }
      items1[3] = metroImportDefault(Badge, obj7);
      const obj8 = { type: { text: "Custom" }, variant, icon: StarIcon2 };
      const Badge2 = tmp2(7306).Badge;
      if ("premium" === variant) {
        StarIcon2 = tmp2(8667).LockIcon;
      } else if ("inverted" === variant) {
        StarIcon2 = tmp2(9566).TagIcon;
      } else if ("rarity-common" === variant) {
        StarIcon2 = tmp2(11469).ExperimentalCommonIcon;
      } else if ("rarity-rare" === variant) {
        StarIcon2 = tmp2(11471).ExperimentalRareIcon;
      } else if ("rarity-epic" === variant) {
        StarIcon2 = tmp2(11473).ExperimentalEpicIcon;
      } else if ("rarity-mythic" === variant) {
        StarIcon2 = tmp2(11475).ExperimentalMythicIcon;
      } else {
        StarIcon2 = tmp2(10063).StarIcon;
      }
      items1[4] = metroImportDefault(Badge2, obj8);
      items[1] = metroImportAll(tmp5, obj3);
      return metroImportAll(Stack, obj, variant);
    })
  ];
  return closure_7(Card, obj);
}
function Truncation() {
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
}
function ComparisonRow(arg0) {
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
}
function LegacyComparison() {
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
  items[3] = metroImportDefault(ComparisonRow, obj7);
  const obj8 = { label: "NewTag vs. new", legacy: metroImportDefault(native.NewTag, {}), mana: metroImportDefault(Badge_Badge.Badge, { type: "new" }) };
  items[4] = metroImportDefault(ComparisonRow, obj8);
  const obj9 = { label: "NewTag vs. new, brand", legacy: metroImportDefault(native.NewTag, {}), mana: metroImportDefault(Badge_Badge.Badge, { type: "new", variant: "primary" }) };
  items[5] = metroImportDefault(ComparisonRow, obj9);
  const obj10 = { label: "BetaTag vs. beta", legacy: metroImportDefault(native.BetaTag, {}), mana: metroImportDefault(Badge_Badge.Badge, { type: "beta" }) };
  items[6] = metroImportDefault(ComparisonRow, obj10);
  const obj11 = { label: "BetaTag vs. beta, brand", legacy: metroImportDefault(native.BetaTag, {}), mana: metroImportDefault(Badge_Badge.Badge, { type: "beta", variant: "primary" }) };
  items[7] = metroImportDefault(ComparisonRow, obj11);
  return metroImportDefault(Card, obj);
}
function LayoutCase(arg0) {
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
}
function ParentLayouts() {
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
  items[2] = metroImportAll(LayoutCase, obj3);
  const obj8 = { title: "Row next to text (BetaTag, then Mana brand)", children: items5 };
  const obj9 = { style: tmp.inlineRow, children: items4 };
  items4 = [metroImportDefault(Text_Text.Text, { variant: "text-md/semibold", children: "Feature name" }), metroImportDefault(native.BetaTag, {})];
  items5 = [metroImportAll(metroRequire, obj9), ];
  const obj10 = { style: tmp.inlineRow, children: items6 };
  items6 = [metroImportDefault(Text_Text.Text, { variant: "text-md/semibold", children: "Feature name" }), ];
  const obj11 = { style: tmp.inlineBadge, children: metroImportDefault(Badge_Badge.Badge, { type: "beta", variant: "primary" }) };
  items6[1] = metroImportDefault(metroRequire, obj11);
  items5[1] = metroImportAll(metroRequire, obj10);
  items[3] = metroImportAll(LayoutCase, obj8);
  const obj12 = { title: "Column, default alignment (TextBadge, then Mana)", children: items7 };
  items7 = [metroImportDefault(native.TextBadge, { text: "New" }), metroImportDefault(Badge_Badge.Badge, { type: { text: "New" } })];
  items[4] = metroImportAll(LayoutCase, obj12);
  const obj13 = { title: "Column with alignSelf: 'flex-start' (TextBadge, then Mana)", children: items8 };
  items8 = [, ];
  const obj14 = { text: "New", style: tmp.selfStart };
  items8[0] = metroImportDefault(native.TextBadge, obj14);
  const obj15 = { style: tmp.selfStartParent, children: metroImportDefault(Badge_Badge.Badge, { type: { text: "New" } }) };
  items8[1] = metroImportDefault(metroRequire, obj15);
  items[5] = metroImportAll(LayoutCase, obj13);
  const obj16 = { title: "Trailing edge of a list row (TextBadge, then Mana)", children: items10 };
  const obj17 = { style: tmp.trailingRow, children: items9 };
  items9 = [metroImportDefault(Text_Text.Text, { variant: "text-md/normal", children: "Notifications" }), metroImportDefault(native.TextBadge, { text: "New" })];
  items10 = [metroImportAll(metroRequire, obj17), ];
  const obj18 = { style: tmp.trailingRow, children: items11 };
  items11 = [metroImportDefault(Text_Text.Text, { variant: "text-md/normal", children: "Notifications" }), metroImportDefault(Badge_Badge.Badge, { type: { text: "New" } })];
  items10[1] = metroImportAll(metroRequire, obj18);
  items[6] = metroImportAll(LayoutCase, obj16);
  return metroImportDefault(Card, obj);
}
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
let closure_10 = ["secondary", "primary", "expressive", "premium", "inverted", "rarity-common", "rarity-rare", "rarity-epic", "rarity-mythic"];
let items = [{ value: "new", label: "new" }, { value: "beta", label: "beta" }, { value: "early_access", label: "early_access" }, { value: "free_trial", label: "free_trial" }, { value: "custom", label: "Custom text" }];
let c12 = "A very long custom badge label that truncates";
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemBadge.tsx");

export default function UserSettingsDesignSystemBadge() {
  let Stack;
  let obj2;
  const obj = { contentContainerStyle: closure_9().container, children: metroImportAll(Stack, obj2) };
  obj2 = { spacing: nativeDefault.space.PX_24, children: items };
  Stack = Stack_Stack.Stack;
  items = [metroImportDefault(Text_Text.Text, { variant: "text-md/normal", color: "text-subtle", children: "Badges label feature status, like New or Beta. They are not for counts or notifications." }), metroImportDefault(Playground, {}), metroImportDefault(VariantMatrix, {}), metroImportDefault(Truncation, {}), metroImportDefault(LegacyComparison, {}), metroImportDefault(ParentLayouts, {})];
  return metroImportDefault(hasOwnProperty, obj);
};
