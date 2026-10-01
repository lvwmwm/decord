// Module ID: 15311
// Function ID: 15312
// Name: DevToolsComponentsTestingScreen
// Dependencies: [32, 19, 17, 2099, 21, 4836, 576, 5060, 1979, 7569, 5919, 4832, 15312, 15315, 5281, 5279, 15316, 573, 2]
// Exports: default

// Module 15311 (DevToolsComponentsTestingScreen)
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import nativeDefault from "native" /* 576 */;
import Server from "Server" /* 1979 */;
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import Card_Card from "Card/Card" /* 5919 */;
import ComponentStateContext from "ComponentStateContext" /* 7569 */;
import StringSelectActionComponentDefault from "StringSelectActionComponent" /* 15312 */;
import SearchableSelectActionComponentDefault from "SearchableSelectActionComponent" /* 15315 */;
import TextDisplayComponentDefault from "TextDisplayComponent" /* 15316 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import InteractionComponentUtils from "InteractionComponentUtils" /* 5060 */;
import size from "module_2" /* 2 */;

let closure_12;
let items;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let unpackModuleId;
function Select(type) {
  let c0;
  let items;
  let items1;
  let num;
  let tmp2;
  let tmp7Result;
  let tmp7Result1;
  type = type.type;
  c0 = undefined;
  const title = type.title;
  [tmp2, c0] = react.useState(false);
  const obj = { maxValues: num, type, id: String(type) };
  _slicedToArray(react.useState(false), 2);
  const merged = Object.assign(unpackModuleId);
  num = 1;
  if (tmp2) {
    num = 4;
  }
  const obj2 = ComponentStateContext;
  const state = obj2.useComponentState(obj).state;
  const obj3 = { style: { gap: 8 }, children: items };
  const Card = Card_Card.Card;
  items = [metroImportDefault(Text_Text.Text, { variant: "heading-lg/medium", children: title }), , , ];
  if (obj.type === Server.ComponentType.STRING_SELECT) {
    const obj4 = {};
    const tmp15 = StringSelectActionComponentDefault;
    const merged1 = Object.assign(obj);
    tmp7Result = tmp7(tmp15, obj4);
  } else {
    const obj5 = { type: obj.type };
    const tmp9 = SearchableSelectActionComponentDefault;
    const merged2 = Object.assign(obj);
    tmp7Result = tmp7(tmp9, obj5);
  }
  items[1] = tmp7Result;
  let type1;
  if (state != null) {
    type1 = state.type;
  }
  if (type1 === obj.type) {
    let mapped;
    const Text = tmp4(4832).Text;
    if ("values" in state) {
      mapped = state.values;
    } else {
      const selectedOptions = state.selectedOptions;
      mapped = selectedOptions.map((label) => label.label);
    }
    const obj6 = { variant: "text-md/normal", children: items1 };
    items1 = ["Selected values: ", mapped.join(", ")];
    tmp7Result1 = tmp6(Text, obj6);
  } else {
    tmp7Result1 = tmp7(tmp4(4832).Text, { variant: "text-md/normal", children: "Nothing selected" });
  }
  items[2] = tmp7Result1;
  let str3 = "off";
  const Button = tmp4(5281).Button;
  if (tmp2) {
    str3 = "on";
  }
  const obj7 = {
    text: "Toggle Multi Select (" + str3 + ")",
    onPress() {
      return _undefined((arg0) => !arg0);
    },
    size: "sm"
  };
  items[3] = metroImportDefault(Button, obj7);
  return metroImportAll(Card, obj3);
}
const ScrollView = react_native.ScrollView;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrap: obj2, contentContainer: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
let closure_9 = createStyles(obj);
let obj4 = { type: Server.ComponentType.STRING_SELECT, custom_id: "test", max_values: 1, min_values: 1, placeholder: "Choose...", options: items };
const transformComponents = InteractionComponentUtils.transformComponents;
items = [{ label: "test with a long label", value: "test" }, { label: "test 2 with a long label", value: "test2", description: "with description!" }, { label: "star with a long label", value: "star", emoji: { name: "\u2B50" } }, { label: "advaith", value: "advaith", emoji: { id: "889887673425199124", name: "advaith_anim", animated: true } }];
let items1 = [obj4, ];
let obj5 = { type: Server.ComponentType.TEXT_DISPLAY, content: "hello world! :eyes: **bold** `code` https://cdn.discordapp.com/attachments/1408191424968523819/1408191500277387274/advaith.webp\nhttps://discord.com [google](https://google.com) ||spoiler|| <t:1755730638:t> <a:wumpus_party:393564669765353483>" };
items1[1] = obj5;
const transformComponentsResult = transformComponents(items1);
let c10 = transformComponentsResult;
[unpackModuleId, closure_12] = transformComponentsResult;
const modal = "modal";
_slicedToArray(transformComponentsResult, 2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsComponentsTestingScreen.tsx");

export default function DevToolsComponentsTestingScreen() {
  let Stack;
  let customId;
  let items;
  let items1;
  let obj2;
  let obj4;
  const tmp = closure_9();
  let obj = { style: tmp.wrap, contentContainerStyle: tmp.contentContainer, children: metroImportAll(Stack, obj2) };
  obj2 = { spacing: 16, children: items };
  Stack = Stack_Stack.Stack;
  items = [metroImportDefault(Text_Text.Text, { variant: "text-md/normal", children: "Test screen for embedding native components in RN" }), , ];
  const obj3 = { modal: obj4, children: items1 };
  obj4 = { customId: modal, channelId: SelectedChannelStore.getChannelId(), components };
  const ComponentStateContextProvider = ComponentStateContext.ComponentStateContextProvider;
  const obj5 = {};
  const tmp2 = TextDisplayComponentDefault;
  const merged = Object.assign(closure_12);
  items1 = [metroImportDefault(tmp2, obj5), , , , , ];
  const obj6 = { title: "String Select", type: Server.ComponentType.STRING_SELECT };
  items1[1] = metroImportDefault(Select, obj6);
  const obj7 = { title: "User Select", type: Server.ComponentType.USER_SELECT };
  items1[2] = metroImportDefault(Select, obj7);
  const obj8 = { title: "Role Select", type: Server.ComponentType.ROLE_SELECT };
  items1[3] = metroImportDefault(Select, obj8);
  const obj9 = { title: "Mentionable Select", type: Server.ComponentType.MENTIONABLE_SELECT };
  items1[4] = metroImportDefault(Select, obj9);
  const obj10 = { title: "Channel Select", type: Server.ComponentType.CHANNEL_SELECT };
  items1[5] = metroImportDefault(Select, obj10);
  items[1] = metroImportAll(ComponentStateContextProvider, obj3);
  const obj11 = {
    onPress() {
      const obj = DispatcherDefault;
      const obj2 = { type: "CLEAR_INTERACTION_MODAL_STATE", customId };
      return obj.dispatch(obj2);
    },
    text: "Reset Modal State"
  };
  items[2] = metroImportDefault(components_Button_Button.Button, obj11);
  return metroImportDefault(ScrollView, obj);
};
