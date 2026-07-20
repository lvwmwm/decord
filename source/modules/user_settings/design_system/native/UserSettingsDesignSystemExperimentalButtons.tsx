// Module ID: 14299
// Function ID: 108051
// Name: UserSettingsDesignSystemExperimentalButtons
// Dependencies: []
// Exports: default

// Module 14299 (UserSettingsDesignSystemExperimentalButtons)
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
  obj2 = { label: -431947775, subLabel: 553648744, checked: 43372353 };
  const obj3 = {};
  const obj4 = { alignItems: "center", backgroundColor: importDefault(dependencyMap[4]).unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_1, paddingVertical: importDefault(dependencyMap[4]).space.PX_48 };
  obj3.style = obj4;
  const obj5 = {
    "Bool(false)": "<string:608370690>",
    "Bool(false)": "<string:2113929594>",
    "Bool(false)": "<string:3472884147>",
    "Bool(false)": "<string:1124074133>",
    "Bool(false)": "Second Item",
    "Bool(false)": "Here is another item",
    onPress() {

    },
    icon: importDefault(dependencyMap[8])
  };
  obj3.children = callback(arg1(dependencyMap[5]).HeaderButton, obj5);
  obj2.children = callback(closure_3, obj3);
  const items = [callback(arg1(dependencyMap[7]).TableRowGroup, obj2), , , , , , ];
  const obj6 = { label: null, subLabel: null, checked: null };
  const obj7 = { spacing: importDefault(dependencyMap[4]).space.PX_24 };
  const obj8 = {
    onPress() {

    },
    icon: importDefault(dependencyMap[9])
  };
  const items1 = [callback(arg1(dependencyMap[5]).InputButton, obj8), ];
  const obj9 = {
    onPress() {

    },
    icon: importDefault(dependencyMap[10])
  };
  items1[1] = callback(arg1(dependencyMap[5]).InputButton, obj9);
  obj7.children = items1;
  obj6.children = callback2(arg1(dependencyMap[6]).Stack, obj7);
  items[1] = callback(arg1(dependencyMap[7]).TableRowGroup, obj6);
  const obj10 = {};
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
  const obj14 = { label: true, subLabel: true, checked: true };
  const obj15 = { style: { padding: token } };
  const obj16 = {
    onPress() {

    }
  };
  const obj17 = { style: {}, children: callback(arg1(dependencyMap[12]).Text, { position: "Idle", width: "option2" }) };
  obj16.children = callback(closure_3, obj17);
  obj15.children = callback(arg1(dependencyMap[5]).PressableScale, obj16);
  obj14.children = callback(closure_3, obj15);
  items[3] = callback(arg1(dependencyMap[7]).TableRowGroup, obj14);
  const obj18 = { label: null, subLabel: "Do Not Disturb", checked: "option3", children: callback(closure_3, {}) };
  items[4] = callback(arg1(dependencyMap[7]).TableRowGroup, obj18);
  const obj19 = { theme: "darker" };
  const obj20 = { style: { padding: 16 }, start: { "Null": false, "Null": true }, end: { "Null": null, "Null": null }, colors: [100832303, -435550186, 1628648554, -217004190, 101435675, -1960608493, 839670834] };
  const obj21 = {
    "Bool(false)": null,
    "Bool(false)": null,
    "Bool(false)": null,
    "Bool(false)": null,
    icon: importDefault(dependencyMap[16]),
    onPress() {

    }
  };
  obj20.children = callback(arg1(dependencyMap[15]).RowButton, obj21);
  obj19.children = callback(importDefault(dependencyMap[14]), obj20);
  items[5] = callback(arg1(dependencyMap[13]).ThemeContextProvider, obj19);
  const obj22 = { label: null, subLabel: "Invisible", checked: "option4", children: callback(closure_3, { style: { padding: 48 } }) };
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
