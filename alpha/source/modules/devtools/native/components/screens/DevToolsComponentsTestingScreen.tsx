// Module ID: 17359
// Function ID: 17360
// Name: DevToolsComponentsTestingScreen
// Dependencies: [32, 19, 17, 4946, 21, 5043, 575, 6395, 2118, 6405, 8825, 6145, 5634, 12424, 12430, 5641, 6115, 12431, 572, 2]
// Exports: default

// Module 17359 (DevToolsComponentsTestingScreen)
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import nativeDefault from "native" /* 575 */;
import Server from "Server" /* 2118 */;
import Text_Text from "Text/Text" /* 5634 */;
import components_Button_Button from "components/Button/Button" /* 5641 */;
import Stack_Stack from "Stack/Stack" /* 6115 */;
import Card_Card from "Card/Card" /* 6145 */;
import ComponentStateContext from "ComponentStateContext" /* 8825 */;
import StringSelectActionComponentDefault from "StringSelectActionComponent" /* 12424 */;
import SearchableSelectActionComponentDefault from "SearchableSelectActionComponent" /* 12430 */;
import TextDisplayComponentDefault from "TextDisplayComponent" /* 12431 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4946 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import InteractionComponentUtils from "InteractionComponentUtils" /* 6395 */;
import InteractionComponentTypes_mod from "InteractionComponentTypes" /* 6405 */;
import size from "module_2" /* 2 */;

let InteractionComponentTypes;
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
  let obj2;
  let tmp2;
  let tmp7Result;
  let tmp7Result1;
  type = type.type;
  c0 = undefined;
  const title = type.title;
  [tmp2, c0] = react.useState(false);
  const obj = { maxValues: num, type, id: obj2.asComponentId(type) };
  _slicedToArray(react.useState(false), 2);
  const merged = Object.assign(unpackModuleId);
  num = 1;
  if (tmp2) {
    num = 4;
  }
  obj2 = InteractionComponentTypes;
  const obj3 = ComponentStateContext;
  const state = obj3.useComponentState(obj).state;
  const obj4 = { style: { gap: 8 }, children: items };
  const Card = Card_Card.Card;
  items = [metroImportDefault(Text_Text.Text, { variant: "heading-lg/medium", children: title }), , , ];
  if (obj.type === Server.ComponentType.STRING_SELECT) {
    const obj5 = {};
    const tmp15 = StringSelectActionComponentDefault;
    const merged1 = Object.assign(obj);
    tmp7Result = tmp7(tmp15, obj5);
  } else {
    const obj6 = { type: obj.type };
    const tmp9 = SearchableSelectActionComponentDefault;
    const merged2 = Object.assign(obj);
    tmp7Result = tmp7(tmp9, obj6);
  }
  items[1] = tmp7Result;
  let type1;
  if (state != null) {
    type1 = state.type;
  }
  if (type1 === obj.type) {
    let mapped;
    const Text = tmp4(5634).Text;
    if ("values" in state) {
      mapped = state.values;
    } else {
      const selectedOptions = state.selectedOptions;
      mapped = selectedOptions.map((label) => label.label);
    }
    const obj7 = { variant: "body-md/normal", children: items1 };
    items1 = ["Selected values: ", mapped.join(", ")];
    tmp7Result1 = tmp6(Text, obj7);
  } else {
    tmp7Result1 = tmp7(tmp4(5634).Text, { variant: "body-md/normal", children: "Nothing selected" });
  }
  items[2] = tmp7Result1;
  let str3 = "off";
  const Button = tmp4(5641).Button;
  if (tmp2) {
    str3 = "on";
  }
  const obj8 = {
    text: "Toggle Multi Select (" + str3 + ")",
    onPress() {
      return _undefined((arg0) => !arg0);
    },
    size: "sm"
  };
  items[3] = metroImportDefault(Button, obj8);
  return metroImportAll(Card, obj4);
}
const ScrollView = react_native.ScrollView;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrap: obj2, contentContainer: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
let closure_9 = createStyles(obj);
let obj4 = { type: Server.ComponentType.STRING_SELECT, id: InteractionComponentTypes.asComponentId(0), custom_id: "test", max_values: 1, min_values: 1, placeholder: "Choose...", options: items };
const transformComponents = InteractionComponentUtils.transformComponents;
InteractionComponentTypes = InteractionComponentTypes_mod;
items = [{ label: "test with a long label", value: "test" }, { label: "test 2 with a long label", value: "test2", description: "with description!" }, { label: "star with a long label", value: "star", emoji: { name: "\u2B50" } }, { label: "advaith", value: "advaith", emoji: { id: "889887673425199124", name: "advaith_anim", animated: true } }];
let items1 = [obj4, ];
let obj5 = { type: Server.ComponentType.TEXT_DISPLAY, id: InteractionComponentTypes.asComponentId(1), content: "hello world! :eyes: **bold** `code` https://cdn.discordapp.com/attachments/1408191424968523819/1408191500277387274/advaith.webp\nhttps://discord.com [google](https://google.com) ||spoiler|| <t:1755730638:t> <a:wumpus_party:393564669765353483>" };
InteractionComponentTypes = InteractionComponentTypes_mod;
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
  items = [metroImportDefault(Text_Text.Text, { variant: "body-md/normal", children: "Test screen for embedding native components in RN" }), , ];
  const obj3 = { modal: obj4, children: items1 };
  obj4 = { customId: modal, channelId: SelectedChannelStore.getChannelId(), components };
  const ComponentStateContextProvider = ComponentStateContext.ComponentStateContextProvider;
  const obj5 = {};
  const tmp2 = TextDisplayComponentDefault;
  const merged = Object.assign(authStore2);
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
