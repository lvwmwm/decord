// Module ID: 14558
// Function ID: 111084
// Name: DebugLogView
// Dependencies: [31, 27, 4129, 6789, 33, 4130, 689, 566, 4126, 2]
// Exports: default

// Module 14558 (DebugLogView)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import useCollectiblesDebugStore from "useCollectiblesDebugStore";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_3;
let closure_4;
let closure_5;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ View: closure_3, ScrollView: closure_4, TouchableOpacity: closure_5 } = get_ActivityIndicator);
({ useCollectiblesDebugStore: closure_7, addDebugLog: closure_8 } = useCollectiblesDebugStore);
({ jsxs: closure_9, jsx: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = { debugLogContainer: { backgroundColor: "rgba(0, 0, 0, 0.8)", padding: 10, maxHeight: 350, width: "100%", position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 9999, borderTopWidth: 1, borderTopColor: "#ff0000" }, debugLogHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }, debugLogText: { color: "#00ff00", fontSize: 12, marginBottom: 2, fontFamily: "monospace" } };
_createForOfIteratorHelperLoose = { backgroundColor: "#ff0000", paddingHorizontal: 8, paddingVertical: 2, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.clearButton = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.clearButtonText = { color: "#ffffff", fontSize: 10, fontWeight: "bold" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/native/DebugLogView.tsx");

export default function DebugLogView() {
  const arr = callback((logs) => logs.logs);
  const dependencyMap = callback((clearLogs) => clearLogs.clearLogs);
  const tmp = _createForOfIteratorHelperLoose();
  const React = tmp;
  let obj = arr(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.get("shop_show_debug_overlay"));
  const items1 = [arr.length, stateFromStores];
  const effect = React.useEffect(() => {
    if (tmp) {
      outer1_8("Debug log initialized");
    }
  }, items1);
  if (stateFromStores) {
    if (0 !== arr.length) {
      const _Math = Math;
      const substr = arr.slice(Math.max(0, arr.length - 10));
      obj = { style: tmp.debugLogContainer };
      obj = { style: tmp.debugLogHeader };
      const obj1 = { variant: "text-xs/normal" };
      const obj2 = {};
      const merged = Object.assign(tmp.debugLogText);
      obj2["color"] = "#ffffff";
      obj1.style = obj2;
      const items2 = ["Debug Log (", arr.length, " entries)"];
      obj1.children = items2;
      const items3 = [callback2(arr(4126).Text, obj1), ];
      const obj3 = {
        onPress() {
              dependencyMap();
            },
        style: tmp.clearButton
      };
      const obj4 = { variant: "text-xs/bold", style: tmp.clearButtonText, children: "Clear" };
      obj3.children = callback3(arr(4126).Text, obj4);
      items3[1] = callback3(closure_5, obj3);
      obj.children = items3;
      const items4 = [callback2(stateFromStores, obj), ];
      const obj5 = { children: substr.map((children) => outer1_10(arr(4126).Text, { variant: "text-xs/normal", style: tmp.debugLogText, children }, arg1)) };
      items4[1] = callback3(closure_4, obj5);
      obj.children = items4;
      return callback2(stateFromStores, obj);
    }
  }
  return null;
};
