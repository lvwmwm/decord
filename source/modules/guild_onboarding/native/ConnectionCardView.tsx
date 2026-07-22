// Module ID: 5476
// Function ID: 46763
// Name: ConnectionCardView
// Dependencies: []
// Exports: default

// Module 5476 (ConnectionCardView)
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
const obj2 = { -9223372036854775808: true, 9223372036854775807: true, 0: true, 0: true, 9223372036854775807: true, marginRight: importDefault(dependencyMap[4]).space.PX_12 };
obj.icon = obj2;
obj.textContent = { flex: 1 };
const obj3 = { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F", gap: importDefault(dependencyMap[4]).space.PX_8 };
obj.connectedStatus = obj3;
let closure_6 = obj.createStyles(obj);
const obj1 = { marginRight: importDefault(dependencyMap[4]).space.PX_12 };
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
  const obj2 = { cachedAt: null, edpbxy: null, children: displayName };
  const items1 = [callback(arg1(dependencyMap[5]).Text, obj2), ];
  let tmp4 = null != description;
  if (tmp4) {
    tmp4 = description.length > 0;
  }
  if (tmp4) {
    const obj3 = { children: description };
    tmp4 = callback(arg1(dependencyMap[5]).Text, obj3);
  }
  items1[1] = tmp4;
  obj1.children = items1;
  items[1] = callback2(closure_2, obj1);
  obj.children = items;
  const items2 = [callback2(closure_2, obj), ];
  if (isLoading) {
    const obj4 = { size: "small" };
    let tmp11 = callback(closure_3, obj4);
  } else if (isConnected) {
    const obj5 = { style: tmp.connectedStatus };
    const obj6 = { cachedAt: null, edpbxy: null };
    const intl2 = arg1(dependencyMap[6]).intl;
    obj6.children = intl2.string(arg1(dependencyMap[6]).t.LV+CXH);
    const items3 = [callback(arg1(dependencyMap[5]).Text, obj6), callback(arg1(dependencyMap[7]).CircleCheckIcon, { "Bool(false)": null, "Bool(false)": "row" })];
    obj5.children = items3;
    tmp11 = callback2(closure_2, obj5);
  } else {
    const obj7 = { onPress: onConnect };
    const intl = arg1(dependencyMap[6]).intl;
    obj7.text = intl.string(arg1(dependencyMap[6]).t.S0W8Z5);
    obj7.disabled = !canConnect;
    tmp11 = callback(arg1(dependencyMap[8]).Button, obj7);
  }
  items2[1] = tmp11;
  obj.children = items2;
  return callback2(closure_2, obj);
};
