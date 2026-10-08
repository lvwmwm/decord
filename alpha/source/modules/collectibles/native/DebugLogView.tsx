// Module ID: 16045
// Function ID: 16046
// Name: DebugLogView
// Dependencies: [19, 17, 5089, 7266, 21, 5090, 587, 558, 576, 504, 5086, 2]

// Module 16045 (DebugLogView)
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5086 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import DevSettingsStore from "DevSettingsStore" /* 5089 */;
import CollectiblesDebugStore from "CollectiblesDebugStore" /* 7266 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function DebugLogView() {
  let arr;
  let closure_1;
  let debugLogText;
  let first;
  let items1;
  let items2;
  let items3;
  let tmp10;
  let tmp6;
  let tmp9;
  let tmp = arr;
  let obj = arr(576);
  const cResult = obj.c(47);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(logs) {
      return logs.logs;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  arr = closure_7(first);
  const tmp5 = closure_7;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function h(clearLogs) {
      return clearLogs.clearLogs;
    };
    cResult[1] = fn2;
    tmp6 = fn2;
  } else {
    tmp6 = cResult[1];
  }
  const tmp5Result = tmp5(tmp6);
  dependencyMap = tmp5Result;
  const tmp8 = closure_11();
  react = tmp8;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DevSettingsStore];
    const fn3 = function p() {
      return DevSettingsStore.get("shop_show_debug_overlay");
    };
    cResult[2] = items;
    cResult[3] = fn3;
    tmp10 = fn3;
    tmp9 = items;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp10);
  if (cResult[4] === arr.length) {
    let tmp13;
    let tmp14;
    if (cResult[5] === stateFromStores) {
      tmp13 = cResult[6];
      tmp14 = cResult[7];
    }
    const effect = react.useEffect(tmp13, tmp14);
    if (stateFromStores) {
      if (0 !== arr.length) {
        let tmp22;
        let tmp24;
        let tmp21;
        let tmp20;
        let tmp18;
        let tmp17;
        if (cResult[8] === tmp5Result) {
          if (cResult[9] === arr) {
            if (cResult[10] === tmp8.clearButton) {
              if (cResult[11] === tmp8.clearButtonText) {
                if (cResult[12] === tmp8.debugLogContainer) {
                  if (cResult[13] === tmp8.debugLogHeader) {
                    if (cResult[14] === tmp8.debugLogText) {
                      tmp17 = cResult[15];
                      tmp18 = cResult[16];
                      tmp20 = cResult[18];
                      tmp21 = cResult[19];
                    }
                    if (cResult[39] === tmp17) {
                      let tmp43;
                      if (cResult[40] === tmp19) {
                        tmp43 = cResult[41];
                      }
                      if (cResult[42] === tmp18) {
                        if (cResult[43] === tmp20) {
                          if (cResult[44] === tmp21) {
                            let tmp46;
                            if (cResult[45] === tmp43) {
                              tmp46 = cResult[46];
                            }
                            return tmp46;
                          }
                        }
                      }
                      const obj2 = { style: tmp20, children: items1 };
                      items1 = [tmp21, tmp43];
                      const tmp48 = closure_9(tmp18, obj2);
                      cResult[42] = tmp18;
                      cResult[43] = tmp20;
                      cResult[44] = tmp21;
                      cResult[45] = tmp43;
                      cResult[46] = tmp48;
                      tmp46 = tmp48;
                    }
                    const obj3 = { children: tmp19 };
                    const tmp45 = closure_10(tmp17, obj3);
                    cResult[39] = tmp17;
                    cResult[40] = tmp19;
                    cResult[41] = tmp45;
                    tmp43 = tmp45;
                  }
                }
              }
            }
          }
        }
        const _Math = Math;
        const substr = arr.slice(Math.max(0, arr.length - 10));
        if (cResult[20] !== tmp5Result) {
          function handleClear() {
            closure_1();
          }
          cResult[20] = tmp5Result;
          cResult[21] = handleClear;
          tmp22 = handleClear;
        } else {
          tmp22 = cResult[21];
        }
        const debugLogContainer = tmp8.debugLogContainer;
        if (cResult[22] !== tmp8.debugLogText) {
          const obj4 = { color: "#ffffff" };
          const merged = Object.assign(tmp8.debugLogText);
          cResult[22] = tmp8.debugLogText;
          cResult[23] = obj4;
          tmp24 = obj4;
        } else {
          tmp24 = cResult[23];
        }
        if (cResult[24] === arr.length) {
          let tmp27;
          let tmp30;
          if (cResult[25] === tmp24) {
            tmp27 = cResult[26];
          }
          if (cResult[27] !== tmp8.clearButtonText) {
            const obj5 = { variant: "text-xs/bold", style: tmp8.clearButtonText, children: "Clear" };
            const tmp32 = closure_10(tmp(5086).Text, obj5);
            cResult[27] = tmp8.clearButtonText;
            cResult[28] = tmp32;
            tmp30 = tmp32;
          } else {
            tmp30 = cResult[28];
          }
          if (cResult[29] === tmp22) {
            if (cResult[30] === tmp8.clearButton) {
              let tmp33;
              if (cResult[31] === tmp30) {
                tmp33 = cResult[32];
              }
              if (cResult[33] === tmp8.debugLogHeader) {
                if (cResult[34] === tmp27) {
                  let tmp37;
                  let tmp41;
                  if (cResult[35] === tmp33) {
                    tmp37 = cResult[36];
                  }
                  if (cResult[37] !== tmp8.debugLogText) {
                    class W {
                      constructor(children, arg1) {
                        const obj = { variant: "text-xs/normal", style: debugLogText.debugLogText, children };
                        return authStore(Text_Text.Text, obj, arg1);
                      }
                    }
                    cResult[37] = tmp8.debugLogText;
                    cResult[38] = W;
                    tmp41 = W;
                  } else {
                    class W {
                      constructor(children, arg1) {
                        const obj = { variant: "text-xs/normal", style: debugLogText.debugLogText, children };
                        return authStore(Text_Text.Text, obj, arg1);
                      }
                    }
                  }
                  const mapped = substr.map(tmp41);
                  cResult[8] = tmp5Result;
                  cResult[9] = arr;
                  cResult[10] = tmp8.clearButton;
                  cResult[11] = tmp8.clearButtonText;
                  cResult[12] = tmp8.debugLogContainer;
                  cResult[13] = tmp8.debugLogHeader;
                  cResult[14] = tmp8.debugLogText;
                  cResult[15] = closure_4;
                  cResult[16] = stateFromStores;
                  cResult[17] = mapped;
                  cResult[18] = debugLogContainer;
                  cResult[19] = tmp37;
                  tmp21 = tmp37;
                  tmp20 = debugLogContainer;
                  class C {
                    constructor() {
                      const tmp = 0 === arr.length && stateFromStores;
                      if (tmp) {
                        metroImportAll("Debug log initialized");
                      }
                    }
                  }
                  tmp18 = tmp23;
                  tmp17 = tmp40;
                }
              }
              const obj6 = { style: tmp8.debugLogHeader, children: items2 };
              items2 = [tmp27, tmp33];
              const tmp39 = closure_9(stateFromStores, obj6);
              cResult[33] = tmp8.debugLogHeader;
              cResult[34] = tmp27;
              cResult[35] = tmp33;
              cResult[36] = tmp39;
              tmp37 = tmp39;
            }
          }
          const obj7 = { onPress: tmp22, style: tmp8.clearButton, children: tmp30 };
          const tmp36 = closure_10(closure_5, obj7);
          cResult[29] = tmp22;
          cResult[30] = tmp8.clearButton;
          cResult[31] = tmp30;
          cResult[32] = tmp36;
          tmp33 = tmp36;
        }
        const obj8 = { variant: "text-xs/normal", style: tmp24, children: items3 };
        items3 = ["Debug Log (", arr.length, " entries)"];
        const tmp29 = closure_9(tmp(5086).Text, obj8);
        cResult[24] = arr.length;
        cResult[25] = tmp24;
        cResult[26] = tmp29;
        tmp27 = tmp29;
      }
    }
    return null;
  }
  class C {
    constructor() {
      const tmp = 0 === arr.length && stateFromStores;
      if (tmp) {
        metroImportAll("Debug log initialized");
      }
    }
  }
  const items4 = [arr.length, stateFromStores];
  cResult[4] = arr.length;
  cResult[5] = stateFromStores;
  cResult[6] = C;
  cResult[7] = items4;
  tmp14 = items4;
  tmp13 = C;
}) : (function DebugLogView() {
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
      const Text = tmp2(5086).Text;
      const merged = Object.assign(tmp.debugLogText);
      items2 = ["Debug Log (", arr.length, " entries)"];
      items3 = [closure_9(Text, obj4), ];
      const obj6 = {
        onPress: function handleClear() {
              closure_1();
            },
        style: tmp.clearButton,
        children: closure_10(arr(5086).Text, obj7)
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
});
const result = size.fileFinishedImporting("modules/collectibles/native/DebugLogView.tsx");

export default tmp5;
