// Module ID: 14682
// Function ID: 111931
// Name: Select
// Dependencies: [57, 31, 27, 1906, 33, 4130, 689, 4353, 1881, 7794, 5167, 4126, 14683, 14686, 4543, 4541, 14687, 686, 2]
// Exports: default

// Module 14682 (Select)
import importDefaultResult from "_slicedToArray";
import result from "result";
import { ScrollView } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_7;
let closure_8;
const require = arg1;
function Select(children) {
  let type = children.type;
  const tmp = importDefaultResult(React.useState(false), 2);
  const first = tmp[0];
  let num = 1;
  const _require = tmp[1];
  let obj = {};
  const merged = Object.assign(closure_11);
  if (first) {
    num = 4;
  }
  obj["maxValues"] = num;
  obj["type"] = type;
  obj["id"] = String(type);
  let obj1 = _require(7794);
  let state = obj1.useComponentState(obj).state;
  obj = { style: { gap: 8 } };
  const items = [callback(_require(4126).Text, { variant: "heading-lg/medium", children: children.title }), , , ];
  if (obj.type === _require(1881).ComponentType.STRING_SELECT) {
    obj = {};
    const merged1 = Object.assign(obj);
    let tmp12 = callback(importDefault(14683), obj);
    const tmp16 = importDefault(14683);
  } else {
    obj1 = {};
    const merged2 = Object.assign(obj);
    obj1["type"] = obj.type;
    tmp12 = callback(importDefault(14686), obj1);
    const tmp8 = importDefault(14686);
  }
  items[1] = tmp12;
  type = undefined;
  if (null != state) {
    type = state.type;
  }
  if (type === obj.type) {
    const obj2 = { variant: "text-md/normal" };
    if ("values" in state) {
      let mapped = state.values;
    } else {
      const selectedOptions = state.selectedOptions;
      mapped = selectedOptions.map((label) => label.label);
    }
    state = ["Selected values: ", mapped.join(", ")];
    obj2.children = state;
    closure_8(_require(4126).Text, obj2);
    const tmp24 = closure_8;
  } else {
    items[2] = callback(_require(4126).Text, { variant: "text-md/normal", children: "Nothing selected" });
    const obj3 = {};
    let str4 = "off";
    if (first) {
      str4 = "on";
    }
    const _HermesInternal = HermesInternal;
    obj3.text = "Toggle Multi Select (" + str4 + ")";
    obj3.onPress = function onPress() {
      return callback((arg0) => !arg0);
    };
    obj3.size = "sm";
    items[3] = callback(_require(4543).Button, obj3);
    obj.children = items;
    return closure_8(_require(5167).Card, obj);
  }
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flex: 1 };
_createForOfIteratorHelperLoose.wrap = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.contentContainer = { padding: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_32 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { type: require("PermissionOverwriteType").ComponentType.STRING_SELECT, custom_id: "test", max_values: 1, min_values: 1, placeholder: "Choose..." };
let items = [{ label: "test with a long label", value: "test" }, { label: "test 2 with a long label", value: "test2", description: "with description!" }, , ];
let obj3 = { label: "star with a long label", value: "star", emoji: { name: "\u2B50" } };
items[2] = obj3;
_createForOfIteratorHelperLoose = { label: "advaith", value: "advaith", emoji: { id: "889887673425199124", name: "advaith_anim", animated: true } };
items[3] = _createForOfIteratorHelperLoose;
obj2.options = items;
let items1 = [obj2, ];
let obj1 = { padding: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_32 };
items1[1] = { type: require("PermissionOverwriteType").ComponentType.TEXT_DISPLAY, content: "hello world! :eyes: **bold** `code` https://cdn.discordapp.com/attachments/1408191424968523819/1408191500277387274/advaith.webp\nhttps://discord.com [google](https://google.com) ||spoiler|| <t:1755730638:t> <a:wumpus_party:393564669765353483>" };
const transformComponentsResult = _createForOfIteratorHelperLoose.transformComponents(items1);
let obj5 = { type: require("PermissionOverwriteType").ComponentType.TEXT_DISPLAY, content: "hello world! :eyes: **bold** `code` https://cdn.discordapp.com/attachments/1408191424968523819/1408191500277387274/advaith.webp\nhttps://discord.com [google](https://google.com) ||spoiler|| <t:1755730638:t> <a:wumpus_party:393564669765353483>" };
[closure_11, closure_12] = importDefaultResult(transformComponentsResult, 2);
const importDefaultResultResult = importDefaultResult(transformComponentsResult, 2);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsComponentsTestingScreen.tsx");

export default function DevToolsComponentsTestingScreen() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.wrap, contentContainerStyle: tmp.contentContainer };
  obj = { spacing: 16 };
  const items = [callback(require(4126) /* Text */.Text, { variant: "text-md/normal", children: "Test screen for embedding native components in RN" }), , ];
  obj = {};
  const obj1 = { customId: "modal", channelId: channelId.getChannelId(), components: closure_10 };
  obj.modal = obj1;
  const merged = Object.assign(closure_12);
  const items1 = [callback(importDefault(14687), {}), , , , , ];
  const obj2 = {};
  const tmp2 = importDefault(14687);
  items1[1] = callback(Select, { title: "String Select", type: require(1881) /* PermissionOverwriteType */.ComponentType.STRING_SELECT });
  const obj3 = { title: "String Select", type: require(1881) /* PermissionOverwriteType */.ComponentType.STRING_SELECT };
  items1[2] = callback(Select, { title: "User Select", type: require(1881) /* PermissionOverwriteType */.ComponentType.USER_SELECT });
  const obj4 = { title: "User Select", type: require(1881) /* PermissionOverwriteType */.ComponentType.USER_SELECT };
  items1[3] = callback(Select, { title: "Role Select", type: require(1881) /* PermissionOverwriteType */.ComponentType.ROLE_SELECT });
  const obj5 = { title: "Role Select", type: require(1881) /* PermissionOverwriteType */.ComponentType.ROLE_SELECT };
  items1[4] = callback(Select, { title: "Mentionable Select", type: require(1881) /* PermissionOverwriteType */.ComponentType.MENTIONABLE_SELECT });
  const obj6 = { title: "Mentionable Select", type: require(1881) /* PermissionOverwriteType */.ComponentType.MENTIONABLE_SELECT };
  items1[5] = callback(Select, { title: "Channel Select", type: require(1881) /* PermissionOverwriteType */.ComponentType.CHANNEL_SELECT });
  obj.children = items1;
  items[1] = callback2(require(7794) /* isInteractionComponent */.ComponentStateContextProvider, obj);
  items[2] = callback(require(4543) /* Button */.Button, {
    onPress() {
      return outer1_1(outer1_2[17]).dispatch({ type: "CLEAR_INTERACTION_MODAL_STATE", customId: "modal" });
    },
    text: "Reset Modal State"
  });
  obj.children = items;
  obj.children = callback2(require(4541) /* Stack */.Stack, obj);
  return callback(ScrollView, obj);
};
