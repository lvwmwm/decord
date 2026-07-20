// Module ID: 14549
// Function ID: 109670
// Name: Select
// Dependencies: []
// Exports: default

// Module 14549 (Select)
function Select(children) {
  let type = children.type;
  const tmp = importDefaultResult(React.useState(false), 2);
  const first = tmp[0];
  let num = 1;
  const callback = tmp[1];
  let obj = {};
  const merged = Object.assign(closure_11);
  if (first) {
    num = 4;
  }
  obj["maxValues"] = num;
  obj["type"] = type;
  obj["id"] = String(type);
  let obj1 = callback(dependencyMap[9]);
  let state = obj1.useComponentState(obj).state;
  obj = { style: { gap: 8 } };
  const items = [callback2(callback(dependencyMap[11]).Text, { variant: "heading-lg/medium", children: children.title }), , , ];
  if (obj.type === callback(dependencyMap[8]).ComponentType.STRING_SELECT) {
    obj = {};
    const merged1 = Object.assign(obj);
    let tmp12 = callback2(importDefault(dependencyMap[12]), obj);
    const tmp16 = importDefault(dependencyMap[12]);
  } else {
    obj1 = {};
    const merged2 = Object.assign(obj);
    obj1["type"] = obj.type;
    tmp12 = callback2(importDefault(dependencyMap[13]), obj1);
    const tmp8 = importDefault(dependencyMap[13]);
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
    state = [1159134988, mapped.join(", ")];
    obj2.children = state;
    closure_8(callback(dependencyMap[11]).Text, obj2);
    const tmp24 = closure_8;
  } else {
    items[2] = callback2(callback(dependencyMap[11]).Text, { position: "Array", width: "merchantCheckoutId" });
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
    items[3] = callback2(callback(dependencyMap[14]).Button, obj3);
    obj.children = items;
    return closure_8(callback(dependencyMap[10]).Card, obj);
  }
}
const importDefaultResult = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const ScrollView = arg1(dependencyMap[2]).ScrollView;
let closure_6 = importDefault(dependencyMap[3]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.wrap = obj;
const tmp3 = arg1(dependencyMap[4]);
obj.contentContainer = { padding: importDefault(dependencyMap[6]).space.PX_16, paddingBottom: importDefault(dependencyMap[6]).space.PX_32 };
let closure_9 = obj.createStyles(obj);
const obj1 = { padding: importDefault(dependencyMap[6]).space.PX_16, paddingBottom: importDefault(dependencyMap[6]).space.PX_32 };
const obj5 = arg1(dependencyMap[7]);
const items = [{}, { fromRegister: true, disableSwipe: true, position: true }, { emoji: { name: "\u2B50" } }, { emoji: {} }];
const items1 = [{ type: arg1(dependencyMap[8]).ComponentType.STRING_SELECT, options: items }, ];
const obj2 = { type: arg1(dependencyMap[8]).ComponentType.STRING_SELECT, options: items };
items1[1] = { type: arg1(dependencyMap[8]).ComponentType.TEXT_DISPLAY, content: "hello world! :eyes: **bold** `code` https://cdn.discordapp.com/attachments/1408191424968523819/1408191500277387274/advaith.webp\nhttps://discord.com [google](https://google.com) ||spoiler|| <t:1755730638:t> <a:wumpus_party:393564669765353483>" };
const transformComponentsResult = obj5.transformComponents(items1);
const obj3 = { type: arg1(dependencyMap[8]).ComponentType.TEXT_DISPLAY, content: "hello world! :eyes: **bold** `code` https://cdn.discordapp.com/attachments/1408191424968523819/1408191500277387274/advaith.webp\nhttps://discord.com [google](https://google.com) ||spoiler|| <t:1755730638:t> <a:wumpus_party:393564669765353483>" };
[closure_11, closure_12] = importDefaultResult(transformComponentsResult, 2);
const importDefaultResultResult = importDefaultResult(transformComponentsResult, 2);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/devtools/native/components/screens/DevToolsComponentsTestingScreen.tsx");

export default function DevToolsComponentsTestingScreen() {
  const tmp = callback4();
  let obj = { style: tmp.wrap, contentContainerStyle: tmp.contentContainer };
  obj = { spacing: 16 };
  const items = [callback2(arg1(dependencyMap[11]).Text, { position: "r", width: "CLOUD_PLAY_NEW_BADGE" }), , ];
  obj = {};
  const obj1 = { customId: "modal", channelId: channelId.getChannelId(), components: transformComponentsResult };
  obj.modal = obj1;
  const merged = Object.assign(closure_12);
  const items1 = [callback2(importDefault(dependencyMap[16]), {}), , , , , ];
  const obj2 = {};
  const tmp2 = importDefault(dependencyMap[16]);
  items1[1] = callback2(Select, { title: "String Select", type: arg1(dependencyMap[8]).ComponentType.STRING_SELECT });
  const obj3 = { title: "String Select", type: arg1(dependencyMap[8]).ComponentType.STRING_SELECT };
  items1[2] = callback2(Select, { title: "User Select", type: arg1(dependencyMap[8]).ComponentType.USER_SELECT });
  const obj4 = { title: "User Select", type: arg1(dependencyMap[8]).ComponentType.USER_SELECT };
  items1[3] = callback2(Select, { title: "Role Select", type: arg1(dependencyMap[8]).ComponentType.ROLE_SELECT });
  const obj5 = { title: "Role Select", type: arg1(dependencyMap[8]).ComponentType.ROLE_SELECT };
  items1[4] = callback2(Select, { title: "Mentionable Select", type: arg1(dependencyMap[8]).ComponentType.MENTIONABLE_SELECT });
  const obj6 = { title: "Mentionable Select", type: arg1(dependencyMap[8]).ComponentType.MENTIONABLE_SELECT };
  items1[5] = callback2(Select, { title: "Channel Select", type: arg1(dependencyMap[8]).ComponentType.CHANNEL_SELECT });
  obj.children = items1;
  items[1] = callback3(arg1(dependencyMap[9]).ComponentStateContextProvider, obj);
  items[2] = callback2(arg1(dependencyMap[14]).Button, {
    onPress() {
      return callback(closure_2[17]).dispatch({ -1353528223: "Array", 1671044513: "CONNECTIONS_AUTHORIZE" });
    },
    text: "Reset Modal State"
  });
  obj.children = items;
  obj.children = callback3(arg1(dependencyMap[15]).Stack, obj);
  return callback2(ScrollView, obj);
};
