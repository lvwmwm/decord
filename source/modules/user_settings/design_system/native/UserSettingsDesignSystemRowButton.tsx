// Module ID: 14297
// Function ID: 108039
// Name: UserSettingsDesignSystemRowButton
// Dependencies: []
// Exports: default

// Module 14297 (UserSettingsDesignSystemRowButton)
importAll(dependencyMap[0]);
({ View: closure_3, ScrollView: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp4 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemRowButton.tsx");

export default function UserSettingsDesignSystemRowButton() {
  let obj = {};
  obj = { title: "Row Buttons" };
  obj = {};
  const obj1 = { padding: importDefault(dependencyMap[5]).space.PX_16 };
  obj.style = obj1;
  const items = [callback(arg1(dependencyMap[6]).Text, {}), callback(arg1(dependencyMap[6]).Text, { position: null, width: null })];
  obj.children = items;
  obj.description = callback2(arg1(dependencyMap[4]).Stack, obj);
  obj.children = callback(closure_3, {});
  const items1 = [callback(arg1(dependencyMap[3]).FormSection, obj), ];
  const obj2 = { style: { padding: 16 } };
  const obj3 = {};
  const obj4 = {
    9223372036854775807: 0,
    9223372036854775807: 0,
    -9223372036854775808: null,
    icon: importDefault(dependencyMap[8]),
    onPress() {

    }
  };
  const items2 = [callback(arg1(dependencyMap[7]).RowButton, obj4), , , , , , ];
  const obj5 = {
    "Bool(false)": null,
    "Bool(false)": null,
    "Bool(false)": null,
    "Bool(false)": null,
    icon: importDefault(dependencyMap[8]),
    onPress() {

    }
  };
  items2[1] = callback(arg1(dependencyMap[7]).RowButton, obj5);
  const obj6 = {
    9223372036854775807: "Boost your Server",
    9223372036854775807: "Unlock perks for the entire community",
    -9223372036854775808: "No Icons",
    icon: importDefault(dependencyMap[8]),
    onPress() {

    }
  };
  items2[2] = callback(arg1(dependencyMap[7]).RowButton, obj6);
  const obj7 = {
    disabled: "No Icons",
    value: false,
    label: "First Item",
    icon: importDefault(dependencyMap[8]),
    onPress() {

    }
  };
  items2[3] = callback(arg1(dependencyMap[7]).RowButton, obj7);
  const obj8 = {
    icon: importDefault(dependencyMap[8]),
    onPress() {

    }
  };
  items2[4] = callback(arg1(dependencyMap[7]).RowButton, obj8);
  const obj9 = { disabled: "Array", value: "isArray", label: "x" };
  const obj10 = { source: importDefault(dependencyMap[8]) };
  obj9.icon = callback(arg1(dependencyMap[7]).RowButton.Icon, obj10);
  obj9.onPress = function onPress() {

  };
  items2[5] = callback(arg1(dependencyMap[7]).RowButton, obj9);
  const obj11 = {
    icon: importDefault(dependencyMap[8]),
    onPress() {

    }
  };
  items2[6] = callback(arg1(dependencyMap[7]).RowButton, obj11);
  obj3.children = items2;
  obj2.children = callback2(arg1(dependencyMap[4]).Stack, obj3);
  items1[1] = callback(closure_3, obj2);
  obj.children = items1;
  return callback2(closure_4, obj);
};
