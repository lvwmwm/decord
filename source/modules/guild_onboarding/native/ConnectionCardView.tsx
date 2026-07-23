// Module ID: 5479
// Function ID: 46786
// Name: ConnectionCardView
// Dependencies: [31, 27, 33, 4130, 689, 4126, 1212, 4091, 4543, 2]
// Exports: default

// Module 5479 (ConnectionCardView)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_2;
let closure_3;
let closure_4;
let closure_5;
const require = arg1;
({ View: closure_2, ActivityIndicator: closure_3 } = get_ActivityIndicator);
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, padding: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
_createForOfIteratorHelperLoose.card = _createForOfIteratorHelperLoose;
let obj1 = { flexDirection: "row", alignItems: "center", flex: 1, marginRight: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.leftContent = obj1;
let obj2 = { width: 32, height: 32, marginRight: require("_createForOfIteratorHelperLoose").space.PX_12, justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.icon = obj2;
_createForOfIteratorHelperLoose.textContent = { flex: 1 };
let obj3 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.connectedStatus = obj3;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/guild_onboarding/native/ConnectionCardView.tsx");

export default function ConnectionCardView(description) {
  let canConnect;
  let displayName;
  let icon;
  let isConnected;
  let isLoading;
  let onConnect;
  description = description.description;
  ({ displayName, icon, isLoading, isConnected, canConnect, onConnect } = description);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.card };
  obj = { style: tmp.leftContent };
  obj = { style: tmp.icon, children: icon };
  const items = [callback(closure_2, obj), ];
  const obj1 = { style: tmp.textContent };
  const obj2 = { variant: "text-md/medium", color: "text-strong", children: displayName };
  const items1 = [callback(require(4126) /* Text */.Text, obj2), ];
  let tmp4 = null != description;
  if (tmp4) {
    tmp4 = description.length > 0;
  }
  if (tmp4) {
    const obj3 = { variant: "text-sm/normal", color: "text-subtle", children: description };
    tmp4 = callback(require(4126) /* Text */.Text, obj3);
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
    const obj6 = { variant: "text-sm/medium", color: "text-feedback-positive" };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj6.children = intl2.string(require(1212) /* getSystemLocale */.t["LV+CXH"]);
    const items3 = [callback(require(4126) /* Text */.Text, obj6), callback(require(4091) /* CircleCheckIcon */.CircleCheckIcon, { size: "sm", color: "status-positive" })];
    obj5.children = items3;
    tmp11 = callback2(closure_2, obj5);
  } else {
    const obj7 = { variant: "primary", size: "sm", onPress: onConnect };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj7.text = intl.string(require(1212) /* getSystemLocale */.t.S0W8Z5);
    obj7.disabled = !canConnect;
    tmp11 = callback(require(4543) /* Button */.Button, obj7);
  }
  items2[1] = tmp11;
  obj.children = items2;
  return callback2(closure_2, obj);
};
