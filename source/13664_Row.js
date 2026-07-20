// Module ID: 13664
// Function ID: 103478
// Name: Row
// Dependencies: []
// Exports: default

// Module 13664 (Row)
function Row(arg0) {
  let IconComponent;
  let description;
  let header;
  ({ header, description, IconComponent } = arg0);
  const tmp = callback4();
  let obj = { style: tmp.row };
  obj = { style: tmp.iconContainer, children: callback2(IconComponent, obj) };
  obj = { style: tmp.icon };
  const items = [callback2(View, obj), ];
  const obj1 = { style: tmp.content };
  const items1 = [callback2(arg1(dependencyMap[14]).Text, { style: tmp.header, children: header }), callback2(arg1(dependencyMap[14]).Text, { children: description })];
  obj1.children = items1;
  items[1] = callback3(View, obj1);
  obj.children = items;
  return callback3(View, obj);
}
function FamilyCenterModalDataTooltipScreen() {
  const tmp = callback5();
  let obj = callback(dependencyMap[15]);
  const intl = callback(dependencyMap[16]).intl;
  const intl2 = callback(dependencyMap[16]).intl;
  const ageSpecificText = obj.useAgeSpecificText(intl.string(importDefault(dependencyMap[17]).n6LOrh), intl2.string(importDefault(dependencyMap[17]).JNLpDZ));
  const callback = importDefault(dependencyMap[18])();
  let obj1 = callback(dependencyMap[19]);
  const sortedActivityTypeConfigs = obj1.getSortedActivityTypeConfigs();
  obj = {};
  obj = {};
  obj1 = { style: tmp.container };
  const items = [
    callback2(callback(dependencyMap[14]).Text, { style: tmp.groupHeader, children: ageSpecificText }),
    sortedActivityTypeConfigs.map((arg0) => {
      let obj;
      let tmp;
      [tmp, obj] = arg0;
      obj = { IconComponent: closure_7[tmp], header: obj.tooltipHeader() };
      let tmp4;
      if (null != closure_0) {
        tmp4 = closure_0;
      }
      obj.description = obj.tooltipDescription(tmp4);
      return closure_5(closure_10, obj, tmp);
    })
  ];
  obj1.children = items;
  obj.children = callback3(View, obj1);
  const items1 = [callback2(callback(dependencyMap[21]).ModalContent, obj), ];
  const obj3 = {};
  const obj4 = { variant: "primary" };
  const intl3 = callback(dependencyMap[16]).intl;
  obj4.text = intl3.string(callback(dependencyMap[16]).t.NX+WJN);
  obj4.onPress = importDefault(dependencyMap[24]).pop;
  obj3.children = callback2(callback(dependencyMap[23]).Button, obj4);
  items1[1] = callback2(callback(dependencyMap[22]).ModalFooter, obj3);
  obj.children = items1;
  return callback3(callback(dependencyMap[20]).ModalScreen, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const TeenActionDisplayType = arg1(dependencyMap[2]).TeenActionDisplayType;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = { [TeenActionDisplayType.USER_INTERACTION]: arg1(dependencyMap[4]).ChatIcon, [TeenActionDisplayType.USER_CALLED]: arg1(dependencyMap[5]).PhoneIcon, [TeenActionDisplayType.USER_ADD]: arg1(dependencyMap[6]).FriendsIcon, [TeenActionDisplayType.GUILD_ADD]: arg1(dependencyMap[7]).ServerGridIcon, [TeenActionDisplayType.GUILD_INTERACTION]: arg1(dependencyMap[8]).ThreadIcon, [TeenActionDisplayType.PURCHASES]: arg1(dependencyMap[9]).CreditCardIcon, [TeenActionDisplayType.TOTAL_VOICE_MINUTES]: arg1(dependencyMap[10]).ClockIcon, [TeenActionDisplayType.GIFTS]: arg1(dependencyMap[11]).GiftIcon };
let obj1 = arg1(dependencyMap[12]);
obj = {};
obj = { "Null": 684644, "Null": 15925248, "Null": 1091633152, "Bool(false)": 147735, marginBottom: importDefault(dependencyMap[13]).space.PX_8, paddingVertical: importDefault(dependencyMap[13]).space.PX_12, paddingHorizontal: importDefault(dependencyMap[13]).space.PX_12, backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[13]).radii.sm };
obj.row = obj;
obj.content = { flexShrink: 1 };
obj1 = { isEmbeddedApp: "banned_at", captureSession: "message", addTag: 101, GameMention: "normal", injectGlobalResponderHandler: "message", pollQueueMetrics: "state", hasPreviousMessages: 102, BLUETOOTH_SCAN: "restricted", backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[13]).radii.round, marginRight: importDefault(dependencyMap[13]).space.PX_12 };
obj.iconContainer = obj1;
const tmp2 = arg1(dependencyMap[3]);
obj.header = { marginBottom: importDefault(dependencyMap[13]).space.PX_4 };
const obj2 = { marginBottom: importDefault(dependencyMap[13]).space.PX_4 };
obj.icon = { tintColor: importDefault(dependencyMap[13]).colors.TEXT_BRAND };
let closure_8 = obj1.createStyles(obj);
const obj3 = { tintColor: importDefault(dependencyMap[13]).colors.TEXT_BRAND };
const obj4 = {};
const obj5 = { 677385548: true, 1673673941: true, 1386281838: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200995449983186, -628330370: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000006836599925010362, paddingHorizontal: importDefault(dependencyMap[13]).space.PX_16 };
obj4.container = obj5;
const obj8 = arg1(dependencyMap[12]);
obj4.groupHeader = { marginBottom: importDefault(dependencyMap[13]).space.PX_24 };
let closure_9 = obj8.createStyles(obj4);
const obj6 = { marginBottom: importDefault(dependencyMap[13]).space.PX_24 };
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalDataTooltip.tsx");

export default function FamilyCenterModalDataTooltip() {
  const memo = React.useMemo(() => function getScreens() {
    let obj = {};
    obj = {
      headerShown: true,
      headerLeft: callback(closure_2[25]).getHeaderCloseButton(callback2(closure_2[24]).pop),
      headerTitle() {
        return null;
      },
      render() {
        return callback(closure_11, {});
      }
    };
    obj.DATA_TOOLTIP = obj;
    return obj;
  }(), []);
  const obj = { initialRouteName: "DATA_TOOLTIP", screens: memo };
  const intl = arg1(dependencyMap[16]).intl;
  obj.headerBackTitle = intl.string(arg1(dependencyMap[16]).t.13/7kX);
  return callback2(arg1(dependencyMap[26]).Modal, obj);
};
