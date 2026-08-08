// Module ID: 16211
// Function ID: 16212
// Name: ActivitiesDebugOverlay
// Dependencies: [19, 17, 21, 4303, 4151, 712, 10975, 1609, 4299, 2]
// Exports: default

// Module 16211 (ActivitiesDebugOverlay)
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import hexToRgba from "hexToRgba";

let c4;
let c5;
const require = arg1;
({ jsxs: c4, jsx: c5 } = jsxProd);
createCacheKey = { container: null, row: null };
createCacheKey = { position: "absolute", top: 0, left: 0, backgroundColor: null, paddingRight: 16, paddingBottom: 16 };
createCacheKey[3] = hexToRgba.hexWithOpacity(require("Themes").unsafe_rawColors.BLACK, 0.7);
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/activities/native/ActivitiesDebugOverlay.tsx");

export default function ActivitiesDebugOverlay() {
  const tmp = createCacheKey();
  const tmp4 = importDefault(10975)();
  let str = "text-overlay-light";
  let str2 = "";
  if (require(10975) /* useThermalState */.ThermalStates.UNHANDLED !== tmp4) {
    str = "text-feedback-positive";
    str2 = "nominal";
    if (tmp5(10975).ThermalStates.NOMINAL !== tmp4) {
      str = "text-feedback-warning";
      str2 = "fair";
      if (tmp5(10975).ThermalStates.FAIR !== tmp4) {
        str2 = "serious";
        str = "text-feedback-critical";
        if (tmp5(10975).ThermalStates.SERIOUS !== tmp4) {
          if (tmp5(10975).ThermalStates.CRITICAL === tmp4) {
            str2 = "critical";
            str = "text-feedback-critical";
          }
        }
      }
    }
  }
  const rect = importDefault(1609)();
  let obj = { style: items, pointerEvents: "none", children: null };
  items = [tmp.container, ];
  obj = { paddingTop: rect.top + 16, paddingLeft: rect.left + 16 };
  items[1] = obj;
  obj = { style: tmp.row, children: null };
  const items1 = [callback(require(4299) /* Text */.Text, { variant: "text-md/normal", color: "text-overlay-light", children: ["thermal state:", " "] }), callback2(require(4299) /* Text */.Text, { variant: "text-md/normal", color: str, children: str2 })];
  obj[1] = items1;
  obj[2] = callback(View, obj);
  return callback2(View, obj);
};
