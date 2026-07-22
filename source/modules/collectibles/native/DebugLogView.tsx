// Module ID: 14394
// Function ID: 108608
// Name: DebugLogView
// Dependencies: []
// Exports: default

// Module 14394 (DebugLogView)
let closure_2 = importAll(dependencyMap[0]);
({ View: closure_3, ScrollView: closure_4, TouchableOpacity: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
const tmp2 = arg1(dependencyMap[1]);
({ useCollectiblesDebugStore: closure_7, addDebugLog: closure_8 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
({ jsxs: closure_9, jsx: closure_10 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { debugLogContainer: { label: true, subLabel: "/assets/.cache/intl/bW9kdWxlcy9pbnRs", subLabelLineClamp: null, color: "3adffc9213a038d780795feb55d27139", textAlign: "cs.messages.3adffc9213a038d780795feb55d27139.compiled.messages", fontSize: "jsona", marginTop: true, marginBottom: "/assets/.cache/intl/bW9kdWxlcy9pbnRs", logPerf: null, stalePurchasesOK: "c9bfed678edd340afd56ab86412945dd", type: "da.messages.c9bfed678edd340afd56ab86412945dd.compiled.messages" }, debugLogHeader: { <string:2053078637>: false, <string:1471013570>: 0, <string:1310491355>: 0, <string:1532125240>: false }, debugLogText: { bottom: "GAME_CLICKED_LANDING", padding: "lockedBadges", flex: "isEarlyAccess", justifyContent: "Array" } };
obj = { borderRadius: importDefault(dependencyMap[6]).radii.xs };
obj.clearButton = obj;
obj.clearButtonText = {};
let closure_11 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/collectibles/native/DebugLogView.tsx");

export default function DebugLogView() {
  const arr = callback((logs) => logs.logs);
  const arg1 = arr;
  let closure_1 = callback((clearLogs) => clearLogs.clearLogs);
  const tmp = callback4();
  const React = tmp;
  let obj = arg1(closure_1[7]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => closure_6.get("shop_show_debug_overlay"));
  const items1 = [arr.length, stateFromStores];
  const effect = React.useEffect(() => {
    if (tmp) {
      callback2("Debug log initialized");
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
      const items2 = [null, arr.length, " entries)"];
      obj1.children = items2;
      const items3 = [callback2(arg1(closure_1[8]).Text, obj1), ];
      const obj3 = {
        onPress() {
              callback();
            },
        style: tmp.clearButton
      };
      const obj4 = { borderRadius: "SET_AUDIO_DEVICE_BY_ID", left: "INTERACTION_RESPONSE", top: "mi", style: tmp.clearButtonText };
      obj3.children = callback3(arg1(closure_1[8]).Text, obj4);
      items3[1] = callback3(closure_5, obj3);
      obj.children = items3;
      const items4 = [callback2(stateFromStores, obj), ];
      const obj5 = { children: substr.map((children) => callback3(arr(closure_1[8]).Text, { variant: "text-xs/normal", style: tmp.debugLogText, children }, arg1)) };
      items4[1] = callback3(closure_4, obj5);
      obj.children = items4;
      return callback2(stateFromStores, obj);
    }
  }
  return null;
};
