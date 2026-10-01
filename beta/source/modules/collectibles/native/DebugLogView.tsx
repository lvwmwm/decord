// Module ID: 15459
// Function ID: 15460
// Name: DebugLogView
// Dependencies: [19, 17, 4835, 6976, 21, 4836, 576, 504, 4832, 2]
// Exports: default

// Module 15459 (DebugLogView)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import DevSettingsStore from "DevSettingsStore" /* 4835 */;
import CollectiblesDebugStore from "CollectiblesDebugStore" /* 6976 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let c3;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let react = react_mod;
({ View: c3, ScrollView: closure_4, TouchableOpacity: hasOwnProperty } = react_native);
({ useCollectiblesDebugStore: metroImportDefault, addDebugLog: metroImportAll } = CollectiblesDebugStore);
({ jsxs: c9, jsx: c10 } = Fragment);
let obj = { debugLogContainer: { backgroundColor: "rgba(0, 0, 0, 0.8)", padding: 10, maxHeight: 350, width: "100%", position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 9999, borderTopWidth: 1, borderTopColor: "#ff0000" }, debugLogHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }, debugLogText: { color: "#00ff00", fontSize: 12, marginBottom: 2, fontFamily: "monospace" }, clearButton: obj2, clearButtonText: { color: "#ffffff", fontSize: 10, fontWeight: "bold" } };
obj2 = { backgroundColor: "#ff0000", paddingHorizontal: 8, paddingVertical: 2, borderRadius: nativeDefault.radii.xs };
let closure_11 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/collectibles/native/DebugLogView.tsx");

export default function DebugLogView() {
  let closure_1;
  let debugLogText;
  let items2;
  let items3;
  let items4;
  let obj5;
  let obj7;
  const arr = closure_7((logs) => logs.logs);
  dependencyMap = closure_7((clearLogs) => clearLogs.clearLogs);
  let tmp = closure_11();
  react = tmp;
  let obj = arr(504);
  const items = [DevSettingsStore];
  const stateFromStores = obj.useStateFromStores(items, () => DevSettingsStore.get("shop_show_debug_overlay"));
  const items1 = [arr.length, stateFromStores];
  const effect = react.useEffect(() => {
    const tmp = 0 === arr.length && stateFromStores;
    if (tmp) {
      metroImportAll("Debug log initialized");
    }
  }, items1);
  if (stateFromStores) {
    if (0 !== arr.length) {
      const _Math = Math;
      const substr = arr.slice(Math.max(0, arr.length - 10));
      const obj4 = { variant: "text-xs/normal", style: obj5, children: items2 };
      const obj2 = { style: tmp.debugLogContainer, children: items4 };
      const obj3 = { style: tmp.debugLogHeader, children: items3 };
      obj5 = { color: "#ffffff" };
      const Text = tmp2(4832).Text;
      const merged = Object.assign(tmp.debugLogText);
      items2 = ["Debug Log (", arr.length, " entries)"];
      items3 = [closure_9(Text, obj4), ];
      const obj6 = {
        onPress() {
              closure_1();
            },
        style: tmp.clearButton,
        children: closure_10(arr(4832).Text, obj7)
      };
      obj7 = { variant: "text-xs/bold", style: tmp.clearButtonText, children: "Clear" };
      items3[1] = closure_10(closure_5, obj6);
      items4 = [closure_9(stateFromStores, obj3), ];
      const obj8 = {
        children: substr.map((children, index) => {
              const obj = { variant: "text-xs/normal", style: debugLogText.debugLogText, children };
              return authStore(Text_Text.Text, obj, index);
            })
      };
      items4[1] = closure_10(closure_4, obj8);
      return closure_9(stateFromStores, obj2);
    }
  }
  return null;
};
