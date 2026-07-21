// Module ID: 14302
// Function ID: 108051
// Name: UserSettingsDesignSystemButtonGroup
// Dependencies: []
// Exports: default

// Module 14302 (UserSettingsDesignSystemButtonGroup)
importAll(dependencyMap[0]);
({ View: closure_3, ScrollView: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp4 = arg1(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[3]).createStyles({ container: {} });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemButtonGroup.tsx");

export default function UserSettingsDesignSystemButtonGroup() {
  let obj = {};
  obj = { style: callback3().container };
  obj = { spacing: 24 };
  const obj1 = {};
  const obj2 = {};
  const items = [callback(arg1(dependencyMap[5]).Text, { "Null": "Experimental Blur Background Row Button", "Null": "Row Button Row Buttons are full-width, high-emphasis buttons that are used as primary CTAs in a page." }), callback(arg1(dependencyMap[5]).Text, { "Bool(false)": false, "Bool(false)": "Collapsible Floating Action Button", "Bool(false)": "A variation of the FloatingActionButton which will display some text until the user scrolls. We currently recommend the use of the FloatingActionButton over the CollapsibleFloatingActionButton, as a singular icon button without animation is more compact, understandable, and predictable." }), ];
  const obj3 = {};
  const obj4 = {
    "Bool(true)": "A really long label that takes up all of the space and then some",
    "Bool(true)": "A really long sublabel that takes up all of the space and then some",
    onPress() {

    }
  };
  const items1 = [
    callback(arg1(dependencyMap[7]).Button, obj4),
    callback(arg1(dependencyMap[7]).Button, {
      onPress() {

      }
    })
  ];
  obj3.children = items1;
  items[2] = callback2(arg1(dependencyMap[6]).ButtonGroup, obj3);
  obj2.children = items;
  obj1.children = callback2(arg1(dependencyMap[4]).Stack, obj2);
  const items2 = [callback(closure_3, obj1), , ];
  const obj6 = {};
  const obj7 = {};
  const items3 = [callback(arg1(dependencyMap[5]).Text, {}), callback(arg1(dependencyMap[5]).Text, { "Bool(false)": "Custom node for label - A really long label that takes up all of the space and then some", "Bool(false)": 0, "Bool(false)": 24 }), ];
  const obj8 = { direction: "horizontal" };
  const obj9 = {
    icon: importDefault(dependencyMap[9]),
    onPress() {

    }
  };
  const items4 = [callback(arg1(dependencyMap[8]).IconButton, obj9), ];
  const obj10 = {
    icon: importDefault(dependencyMap[9]),
    onPress() {

    }
  };
  items4[1] = callback(arg1(dependencyMap[8]).IconButton, obj10);
  obj8.children = items4;
  items3[2] = callback2(arg1(dependencyMap[6]).ButtonGroup, obj8);
  obj7.children = items3;
  obj6.children = callback2(arg1(dependencyMap[4]).Stack, obj7);
  items2[1] = callback(closure_3, obj6);
  const obj11 = {};
  const obj12 = {};
  const items5 = [callback(arg1(dependencyMap[5]).Text, {}), callback(arg1(dependencyMap[5]).Text, {}), callback(arg1(dependencyMap[5]).Text, {}), , , ];
  const obj13 = { direction: "horizontal" };
  const obj14 = {
    "Bool(true)": "isExpanded",
    "Bool(true)": "PRIVATE_CHANNEL_INTEGRATION_ADDED",
    "Bool(true)": "isExpanded",
    onPress() {

    }
  };
  const items6 = [callback(arg1(dependencyMap[7]).Button, obj14), ];
  const obj15 = {
    icon: importDefault(dependencyMap[9]),
    onPress() {

    }
  };
  items6[1] = callback(arg1(dependencyMap[8]).IconButton, obj15);
  obj13.children = items6;
  items5[3] = callback2(arg1(dependencyMap[6]).ButtonGroup, obj13);
  items5[4] = callback(arg1(dependencyMap[5]).Text, {});
  items5[5] = callback(arg1(dependencyMap[5]).Text, { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false });
  obj12.children = items5;
  obj11.children = callback2(arg1(dependencyMap[4]).Stack, obj12);
  items2[2] = callback(closure_3, obj11);
  obj.children = items2;
  obj.children = callback2(arg1(dependencyMap[4]).Stack, obj);
  obj.children = callback(closure_3, obj);
  return callback(closure_4, obj);
};
