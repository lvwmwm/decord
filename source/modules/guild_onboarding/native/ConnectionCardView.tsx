// Module ID: 5477
// Function ID: 46747
// Name: ConnectionCardView
// Dependencies: []
// Exports: default

// Module 5477 (ConnectionCardView)
importAll(dependencyMap[0]);
({ View: closure_2, ActivityIndicator: closure_3 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[4]).radii.md, borderWidth: 1, borderColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE, padding: importDefault(dependencyMap[4]).space.PX_16, marginBottom: importDefault(dependencyMap[4]).space.PX_12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj.card = obj;
const tmp4 = arg1(dependencyMap[2]);
obj.leftContent = { marginRight: importDefault(dependencyMap[4]).space.PX_12 };
const obj2 = { 0: "boolean", 9223372036854775807: "string", -9223372036854775808: "boolean", 0: "artboard", 9223372036854775807: "artboard", marginRight: importDefault(dependencyMap[4]).space.PX_12 };
obj.icon = obj2;
obj.textContent = { flex: 1 };
const obj1 = { marginRight: importDefault(dependencyMap[4]).space.PX_12 };
obj.connectedStatus = { gap: importDefault(dependencyMap[4]).space.PX_8 };
let closure_6 = obj.createStyles(obj);
const obj3 = { gap: importDefault(dependencyMap[4]).space.PX_8 };
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/guild_onboarding/native/ConnectionCardView.tsx");

export default function ConnectionCardView(description) {
  let canConnect;
  let displayName;
  let icon;
  let isConnected;
  let isLoading;
  let onConnect;
  description = description.description;
  ({ displayName, icon, isLoading, isConnected, canConnect, onConnect } = description);
  const tmp = callback3();
  let obj = { style: tmp.card };
  obj = { style: tmp.leftContent };
  obj = { style: tmp.icon, children: icon };
  const items = [callback(closure_2, obj), ];
  const obj1 = { style: tmp.textContent };
  const items1 = [callback(arg1(dependencyMap[5]).Text, { children: displayName }), ];
  let tmp4 = null != description;
  if (tmp4) {
    tmp4 = description.length > 0;
  }
  if (tmp4) {
    const obj2 = { children: description };
    tmp4 = callback(arg1(dependencyMap[5]).Text, obj2);
  }
  items1[1] = tmp4;
  obj1.children = items1;
  items[1] = callback2(closure_2, obj1);
  obj.children = items;
  const items2 = [callback2(closure_2, obj), ];
  if (isLoading) {
    const obj3 = { size: "small" };
    let tmp11 = callback(closure_3, obj3);
  } else if (isConnected) {
    const obj4 = { style: tmp.connectedStatus };
    const obj5 = {};
    const intl2 = arg1(dependencyMap[6]).intl;
    obj5.children = intl2.string(arg1(dependencyMap[6]).t.LV+CXH);
    const items3 = [callback(arg1(dependencyMap[5]).Text, obj5), callback(arg1(dependencyMap[7]).CircleCheckIcon, {})];
    obj4.children = items3;
    tmp11 = callback2(closure_2, obj4);
  } else {
    const obj6 = { 9223372036854775807: 32768000, -9223372036854775808: 30653696, onPress: onConnect };
    const intl = arg1(dependencyMap[6]).intl;
    obj6.text = intl.string(arg1(dependencyMap[6]).t.S0W8Z5);
    obj6.disabled = !canConnect;
    tmp11 = callback(arg1(dependencyMap[8]).Button, obj6);
  }
  items2[1] = tmp11;
  obj.children = items2;
  return callback2(closure_2, obj);
};
