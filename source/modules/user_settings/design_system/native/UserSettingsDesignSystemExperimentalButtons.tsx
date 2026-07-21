// Module ID: 14306
// Function ID: 108074
// Name: UserSettingsDesignSystemExperimentalButtons
// Dependencies: []
// Exports: default

// Module 14306 (UserSettingsDesignSystemExperimentalButtons)
importAll(dependencyMap[0]);
({ View: closure_3, ScrollView: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp4 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemExperimentalButtons.tsx");

export default function UserSettingsDesignSystemExperimentalButtons() {
  let obj = arg1(dependencyMap[3]);
  const token = obj.useToken(importDefault(dependencyMap[4]).modules.mobile.TABLE_ROW_PADDING);
  let obj1 = arg1(dependencyMap[5]);
  const collapsibleFloatingActionButtonState = obj1.useCollapsibleFloatingActionButtonState();
  let obj2 = arg1(dependencyMap[5]);
  obj = {};
  obj = { onScroll: obj2.useCollapsibleFloatingActionButtonScroll(collapsibleFloatingActionButtonState) };
  obj1 = { spacing: importDefault(dependencyMap[4]).space.PX_24, style: { paddingHorizontal: token } };
  obj2 = { getDeviceAudioEffects: "TP", XXSMALL: "COPY_INSTANT_INVITE", parentFreezeValue: "_bodyBlob" };
  const obj3 = {};
  const obj4 = { alignItems: "center", backgroundColor: importDefault(dependencyMap[4]).unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_1, paddingVertical: importDefault(dependencyMap[4]).space.PX_48 };
  obj3.style = obj4;
  const obj5 = {
    width: -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012878706174956005,
    accessible: -0.000000000038198816350310656,
    start: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003328546697712623,
    diversity: 131106.27099610877,
    body: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022527161913282158,
    items: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000163767694272956,
    onPress() {

    },
    icon: importDefault(dependencyMap[8])
  };
  obj3.children = callback(arg1(dependencyMap[5]).HeaderButton, obj5);
  obj2.children = callback(closure_3, obj3);
  const items = [callback(arg1(dependencyMap[7]).TableRowGroup, obj2), , , , , , ];
  const obj6 = {};
  const obj7 = { spacing: importDefault(dependencyMap[4]).space.PX_24 };
  const obj8 = {
    onPress() {

    },
    icon: importDefault(dependencyMap[9])
  };
  const items1 = [callback(arg1(dependencyMap[5]).InputButton, obj8), ];
  const obj9 = {
    items: false,
    flexDirection: false,
    alignItems: false,
    justifyContent: false,
    paddingHorizontal: false,
    width: false,
    onPress() {

    },
    icon: importDefault(dependencyMap[10])
  };
  items1[1] = callback(arg1(dependencyMap[5]).InputButton, obj9);
  obj7.children = items1;
  obj6.children = callback2(arg1(dependencyMap[6]).Stack, obj7);
  items[1] = callback(arg1(dependencyMap[7]).TableRowGroup, obj6);
  const obj10 = { getDeviceAudioEffects: 1426063661, XXSMALL: 16777757, parentFreezeValue: 1095186001 };
  const obj11 = {};
  const items2 = [
    callback(arg1(dependencyMap[11]).Button, {
      onPress() {

      },
      text: "Add Status"
    }),
    callback(arg1(dependencyMap[11]).Button, {
      onPress() {

      },
      text: "Edit Profile"
    })
  ];
  obj11.children = items2;
  obj10.children = callback2(arg1(dependencyMap[5]).TwinButtons, obj11);
  items[2] = callback(arg1(dependencyMap[7]).TableRowGroup, obj10);
  const obj14 = { getDeviceAudioEffects: 9126827960.656874, XXSMALL: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000148936518632063, parentFreezeValue: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006828318719169584 };
  const obj15 = { style: { padding: token } };
  const obj16 = {
    onPress() {

    }
  };
  const obj17 = { style: {}, children: callback(arg1(dependencyMap[12]).Text, { "Null": "Array", "Null": "GU" }) };
  obj16.children = callback(closure_3, obj17);
  obj15.children = callback(arg1(dependencyMap[5]).PressableScale, obj16);
  obj14.children = callback(closure_3, obj15);
  items[3] = callback(arg1(dependencyMap[7]).TableRowGroup, obj14);
  const obj18 = { getDeviceAudioEffects: null, XXSMALL: "Invisible", parentFreezeValue: "option4", children: callback(closure_3, {}) };
  items[4] = callback(arg1(dependencyMap[7]).TableRowGroup, obj18);
  const obj19 = { theme: "darker" };
  const obj20 = { style: { padding: 16 }, start: { max: -536870861, guildId: -299892737 }, end: {}, colors: ["RotateOutDownLeft", "username", "password", "updateAsync", "ang", "eachConnection", "%Uint8ClampedArray%"] };
  const obj21 = {
    enteringV: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008447125960447917,
    "Bool(false)": -0.000000000000000000000000000000000000000000000000000000000000000000000000000000005008573570892209,
    "Bool(false)": -0.000000000000007108481281953478,
    "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002401277044896457,
    icon: importDefault(dependencyMap[16]),
    onPress() {

    }
  };
  obj20.children = callback(arg1(dependencyMap[15]).RowButton, obj21);
  obj19.children = callback(importDefault(dependencyMap[14]), obj20);
  items[5] = callback(arg1(dependencyMap[13]).ThemeContextProvider, obj19);
  const obj22 = { getDeviceAudioEffects: "heading-sm/semibold", XXSMALL: "Row buttons", parentFreezeValue: "Are you sure?", children: callback(closure_3, { style: { padding: 48 } }) };
  items[6] = callback(arg1(dependencyMap[7]).TableRowGroup, obj22);
  obj1.children = items;
  obj.children = callback2(arg1(dependencyMap[6]).Stack, obj1);
  const items3 = [callback(closure_4, obj), ];
  const obj23 = {
    icon: importDefault(dependencyMap[16]),
    onPress() {

    },
    positionBottom: 32,
    text: "Floating Action Button",
    state: collapsibleFloatingActionButtonState
  };
  items3[1] = callback(arg1(dependencyMap[5]).CollapsibleFloatingActionButton, obj23);
  obj.children = items3;
  return callback2(closure_3, obj);
};
