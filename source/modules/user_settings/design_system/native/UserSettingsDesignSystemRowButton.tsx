// Module ID: 14307
// Function ID: 108094
// Name: UserSettingsDesignSystemRowButton
// Dependencies: []
// Exports: default

// Module 14307 (UserSettingsDesignSystemRowButton)
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
  const items = [callback(arg1(dependencyMap[6]).Text, {}), callback(arg1(dependencyMap[6]).Text, { <string:1749439162>: "Array", <string:140675621>: "AppleIllocon" })];
  obj.children = items;
  obj.description = callback2(arg1(dependencyMap[4]).Stack, obj);
  obj.children = callback(closure_3, {});
  const items1 = [callback(arg1(dependencyMap[3]).FormSection, obj), ];
  const obj2 = { style: { padding: 16 } };
  const obj3 = {};
  const obj4 = {
    icon: importDefault(dependencyMap[8]),
    onPress() {

    }
  };
  const items2 = [callback(arg1(dependencyMap[7]).RowButton, obj4), , , , , , ];
  const obj5 = {
    label: "one",
    description: "isArrayBuffer",
    pattern: "ASSETS_URLS",
    position: "Component",
    icon: importDefault(dependencyMap[8]),
    onPress() {

    }
  };
  items2[1] = callback(arg1(dependencyMap[7]).RowButton, obj5);
  const obj6 = {
    0: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014660300777374237,
    9223372036854775807: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004083378585264338,
    9223372036854775807: null,
    icon: importDefault(dependencyMap[8]),
    onPress() {

    }
  };
  items2[2] = callback(arg1(dependencyMap[7]).RowButton, obj6);
  const obj7 = {
    icon: importDefault(dependencyMap[8]),
    onPress() {

    }
  };
  items2[3] = callback(arg1(dependencyMap[7]).RowButton, obj7);
  const obj8 = {
    <string:1448401072>: "<string:1950482433>",
    <string:1686368849>: "<string:1560281723>",
    <string:4222676172>: "<string:1090519421>",
    icon: importDefault(dependencyMap[8]),
    onPress() {

    }
  };
  items2[4] = callback(arg1(dependencyMap[7]).RowButton, obj8);
  const obj9 = { <string:1448401072>: 524353537, <string:1686368849>: 553648745, <string:4222676172>: 35524929 };
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
