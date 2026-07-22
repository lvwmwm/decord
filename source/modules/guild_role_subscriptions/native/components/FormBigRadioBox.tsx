// Module ID: 16304
// Function ID: 125790
// Name: FormBigRadioBox
// Dependencies: [270270464, 916979712, 79429632, 102039552, 297467904, 95420416, 131072, 528351232, 452984832, 771751936]
// Exports: default

// Module 16304 (FormBigRadioBox)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[4]).radii.sm };
obj.container = obj;
const tmp3 = arg1(dependencyMap[2]);
obj.containerSelected = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST, borderWidth: 1, borderColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BRAND };
obj.indicator = { st: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000406163257, sv: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001468067886759054, sw: -8364227006887449000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
const obj1 = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST, borderWidth: 1, borderColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BRAND };
obj.iconContainer = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST };
const obj2 = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST };
obj.iconContainerSelected = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW };
obj.title = { marginBottom: 2 };
obj.disabled = { opacity: 0.5 };
let closure_6 = obj.createStyles(obj);
const obj3 = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW };
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormBigRadioBox.tsx");

export default function FormBigRadioBox(arg0) {
  let accessibilityRole;
  let accessibilityState;
  let description;
  let disabled;
  let icon;
  let onPress;
  let selected;
  let style;
  let title;
  ({ selected, disabled } = arg0);
  ({ description, icon, title, style, onPress } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = callback2();
  let obj = arg1(dependencyMap[5]);
  obj = { selected, disabled };
  const radioA11yNative = obj.useRadioA11yNative(obj);
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  obj = {};
  const items = [tmp.container, , , ];
  let containerSelected = selected;
  if (selected) {
    containerSelected = tmp.containerSelected;
  }
  items[1] = containerSelected;
  let disabled2 = disabled;
  if (disabled) {
    disabled2 = tmp.disabled;
  }
  items[2] = disabled2;
  items[3] = style;
  obj.style = items;
  obj.accessibilityRole = accessibilityRole;
  obj.accessibilityState = accessibilityState;
  let tmp5;
  if (!disabled) {
    tmp5 = onPress;
  }
  obj.onPress = tmp5;
  const obj1 = { style: tmp.indicator, active: selected };
  const items1 = [callback(arg1(dependencyMap[7]).RadioIndicator, obj1), , , ];
  const obj2 = {};
  const items2 = [tmp.iconContainer, ];
  if (selected) {
    selected = tmp.iconContainerSelected;
  }
  items2[1] = selected;
  obj2.style = items2;
  obj2.children = callback(arg1(dependencyMap[7]).Icon, { source: icon });
  items1[1] = callback(View, obj2);
  items1[2] = callback(arg1(dependencyMap[8]).Text, { style: tmp.title, children: title });
  items1[3] = callback(arg1(dependencyMap[8]).Text, { children: description });
  obj.children = items1;
  return closure_5(importDefault(dependencyMap[6]), obj);
};
