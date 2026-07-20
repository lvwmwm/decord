// Module ID: 16281
// Function ID: 125656
// Name: FormBigRadioBox
// Dependencies: []
// Exports: default

// Module 16281 (FormBigRadioBox)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { ddd: "row", ind: 16, ty: "center", nm: "center", sr: "row", backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[4]).radii.sm };
obj.container = obj;
const tmp3 = arg1(dependencyMap[2]);
obj.containerSelected = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST, borderWidth: 1, borderColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BRAND };
obj.indicator = { ignoreDuration: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000406163257, limits: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000025403915931140603, initialScrollStart: 43429549641674200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
const obj2 = { 1861837810: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008442544416257574, -1652272816: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002843270667493556, -1800783003: 9126805506.5, 1817335379: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003817640188040207, 1670928136: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001906422354121141, 1387881992: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000047738889860236, 2060145593: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004383618705352663, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST };
obj.iconContainer = obj2;
const obj1 = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST, borderWidth: 1, borderColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BRAND };
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
  const obj4 = { INTEGRATION_CREATE: true, ConstraintReasonCode: true, children: description };
  items1[3] = callback(arg1(dependencyMap[8]).Text, obj4);
  obj.children = items1;
  return closure_5(importDefault(dependencyMap[6]), obj);
};
