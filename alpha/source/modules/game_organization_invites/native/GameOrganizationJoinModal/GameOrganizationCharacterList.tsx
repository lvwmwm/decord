// Module ID: 12197
// Function ID: 12198
// Name: GameOrganizationCharacterList
// Dependencies: [19, 17, 21, 4823, 575, 1113, 2555, 5414, 5837, 7136, 5387, 4885, 6958, 12047, 7259, 2]
// Exports: default

// Module 12197 (GameOrganizationCharacterList)
import nativeDefault from "native" /* 575 */;
import _modDef2555 from "module_2555" /* 2555 */;
import react_native from "react-native" /* 4885 */;
import useToken from "useToken" /* 5387 */;
import Text_Text from "Text/Text" /* 5414 */;
import Stack_Stack from "Stack/Stack" /* 5837 */;
import CircleErrorIcon2 from "CircleErrorIcon" /* 7136 */;
import GameOrganizationIconDefault from "GameOrganizationIcon" /* 12047 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4823 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
function CharacterSubLabel(text) {
  let items;
  let tmp6;
  text = text.text;
  if (text.eligible) {
    const obj2 = { variant: "body-sm/medium", color: "text-subtle", children: text };
    tmp6 = hasOwnProperty(Text_Text.Text, obj2);
  } else {
    const obj = { direction: "horizontal", spacing: nativeDefault.space.PX_4, align: "center", children: items };
    const Stack = Stack_Stack.Stack;
    const obj3 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
    const CircleErrorIcon = CircleErrorIcon2.CircleErrorIcon;
    items = [hasOwnProperty(CircleErrorIcon, obj3), ];
    const obj4 = { variant: "body-sm/medium", color: "text-muted", children: text };
    items[1] = hasOwnProperty(Text_Text.Text, obj4);
    tmp6 = metroRequire(Stack, obj);
  }
  return tmp6;
}
({ StyleSheet, View: closure_4 } = react_native2);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, cardContent: obj3, selectedCardContent: obj4, selectedCardTint: obj5, cardBorder: obj6, selectedCard: obj7, labels: { flex: 1 }, cards: obj8, title: { alignSelf: "center" } };
obj2 = { padding: 0, borderTopStartRadius: nativeDefault.radii.lg, borderTopEndRadius: nativeDefault.radii.lg, borderBottomStartRadius: nativeDefault.radii.lg, borderBottomEndRadius: nativeDefault.radii.lg, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.lg };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj5 = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.TOGGLEBUTTON_BACKGROUND_SELECTED };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj6 = { borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj7 = { borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj8 = { gap: nativeDefault.space.PX_12 };
let closure_7 = createStyles(obj);
let closure_9 = react.memo(function CharacterCard(character) {
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
  const obj2 = react_native;
  const radioA11yNative = obj2.useRadioA11yNative({ selected, disabled: tmp6 });
  const description = character.description;
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  if (character.eligible) {
    formatToPlainStringResult = description;
  } else {
    formatToPlainStringResult = description;
    if (description == null) {
      const intl = tmp2(1113).intl;
      const obj3 = { noun };
      formatToPlainStringResult = intl.formatToPlainString(tmp4(2555).VNY3C1, obj3);
    }
  }
  const obj4 = {
    onPress() {
      return closure_1_1(character.id);
    },
    disabled: !eligible,
    border: "none",
    style: tmp.card,
    accessibilityRole,
    accessibilityState,
    accessibilityLabel: name,
    children: metroRequire(Stack, obj5)
  };
  const Card = tmp2(6958).Card;
  if (null != formatToPlainStringResult) {
    const _HermesInternal = HermesInternal;
    name = "" + character.name + ", " + formatToPlainStringResult;
  } else {
    name = character.name;
  }
  obj5 = { direction: "horizontal", spacing: nativeDefault.space.PX_16, align: "center", style: items, children: items1 };
  Stack = tmp2(5837).Stack;
  items = [tmp.cardContent, selected && tmp.selectedCardContent];
  let tmp10Result = selected;
  if (tmp10Result) {
    const obj6 = { pointerEvents: "none", style: tmp.selectedCardTint };
    tmp10Result = tmp10(React3, obj6);
  }
  items1 = [tmp10Result, , , ];
  const obj7 = { iconUrl: character.iconUrl, size: 48, borderRadius: nativeDefault.radii.md, fallback: "character" };
  const tmp4Result = GameOrganizationIconDefault;
  items1[1] = hasOwnProperty(tmp4Result, obj7);
  const obj8 = { spacing: nativeDefault.space.PX_4, style: tmp.labels, children: items2 };
  const Stack2 = tmp2(5837).Stack;
  const obj9 = { variant: token, color: str3, children: character.name };
  str3 = "text-default";
  const Text = tmp2(5414).Text;
  if (!eligible) {
    str3 = "text-muted";
  }
  items2 = [hasOwnProperty(Text, obj9), ];
  let tmp10Result2 = null != formatToPlainStringResult;
  if (tmp10Result2) {
    const obj10 = { text: formatToPlainStringResult, eligible: character.eligible };
    tmp10Result2 = tmp10(CharacterSubLabel, obj10);
  }
  items2[1] = tmp10Result2;
  items1[2] = metroRequire(Stack2, obj8);
  const items3 = [tmp.cardBorder, ];
  const tmp18 = React3;
  if (selected) {
    selected = tmp.selectedCard;
  }
  items3[1] = selected;
  items1[3] = hasOwnProperty(tmp18, { pointerEvents: "none", style: items3 });
  return hasOwnProperty(Card, obj4);
});
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationCharacterList.tsx");

export default function GameOrganizationCharacterList(characters) {
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
  const Stack = characters(5837).Stack;
  const obj2 = { style: tmp.title, title: intl.formatToPlainString(_modDef2555["Xm+emB"], { noun }) };
  const TableRowGroupTitle = characters(7259).TableRowGroupTitle;
  intl = characters(1113).intl;
  items1 = [closure_5(TableRowGroupTitle, obj2), , ];
  const obj3 = {
    accessibilityRole: "radiogroup",
    style: tmp.cards,
    children: memo.map((character) => {
      const obj = { character, selected: character.id === importDefault, onSelect: dependencyMap, noun };
      return hasOwnProperty(closure_9, obj, character.id);
    })
  };
  items1[1] = closure_5(closure_4, obj3);
  const tmp3 = closure_6;
  const tmp7 = closure_5;
  if (someResult) {
    const obj4 = { variant: "body-md/medium", color: "text-subtle", children: intl2.formatToPlainString(_modDef2555.ybJIQJ, obj5) };
    const Text = tmp4(5414).Text;
    intl2 = tmp4(1113).intl;
    obj5 = { noun };
    someResult = tmp7(Text, obj4);
  }
  items1[2] = someResult;
  return tmp3(Stack, obj);
};
