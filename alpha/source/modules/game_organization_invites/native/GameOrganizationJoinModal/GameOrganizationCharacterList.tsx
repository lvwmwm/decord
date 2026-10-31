// Module ID: 13192
// Function ID: 13193
// Name: GameOrganizationCharacterList
// Dependencies: [19, 17, 21, 5014, 575, 1113, 2404, 5624, 6027, 7086, 5596, 5082, 6977, 13190, 7060, 2]
// Exports: default

// Module 13192 (GameOrganizationCharacterList)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef2404 from "module_2404" /* 2404 */;
import react_native2 from "react-native" /* 5082 */;
import useToken from "useToken" /* 5596 */;
import Text_Text from "Text/Text" /* 5624 */;
import Stack_Stack from "Stack/Stack" /* 6027 */;
import CircleErrorIcon2 from "CircleErrorIcon" /* 7086 */;
import GameOrganizationIconDefault from "GameOrganizationIcon" /* 13190 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
function CharacterSubLabel(text) {
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
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, selectedCard: obj3, labels: { flex: 1 }, cards: obj4, title: { alignSelf: "center" } };
obj2 = { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED };
obj4 = { gap: nativeDefault.space.PX_12 };
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
  const obj2 = react_native2;
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
  const Card = tmp2(6977).Card;
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
  Stack = tmp2(6027).Stack;
  const obj6 = { iconUrl: character.iconUrl, size: 48, borderRadius: nativeDefault.radii.md };
  const tmp4Result = GameOrganizationIconDefault;
  items1 = [hasOwnProperty(tmp4Result, obj6), ];
  const obj7 = { spacing: nativeDefault.space.PX_4, style: tmp.labels, children: items2 };
  const Stack2 = tmp2(6027).Stack;
  const obj8 = { variant: token, color: str3, children: character.name };
  str3 = "text-default";
  const Text = tmp2(5624).Text;
  if (!eligible) {
    str3 = "text-muted";
  }
  items2 = [hasOwnProperty(Text, obj8), ];
  let tmp10Result = null != formatToPlainStringResult;
  if (tmp10Result) {
    const obj9 = { text: formatToPlainStringResult, eligible: character.eligible };
    tmp10Result = tmp10(CharacterSubLabel, obj9);
  }
  items2[1] = tmp10Result;
  items1[1] = metroRequire(Stack2, obj7);
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
  const Stack = characters(6027).Stack;
  const obj2 = { style: tmp.title, title: intl.formatToPlainString(_modDef2404["Xm+emB"], { noun }) };
  const TableRowGroupTitle = characters(7060).TableRowGroupTitle;
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
  items1[1] = closure_5(View, obj3);
  const tmp3 = closure_6;
  const tmp7 = closure_5;
  if (someResult) {
    const obj4 = { variant: "text-md/medium", color: "text-subtle", children: intl2.formatToPlainString(_modDef2404.ybJIQJ, obj5) };
    const Text = tmp4(5624).Text;
    intl2 = tmp4(1113).intl;
    obj5 = { noun };
    someResult = tmp7(Text, obj4);
  }
  items1[2] = someResult;
  return tmp3(Stack, obj);
};
