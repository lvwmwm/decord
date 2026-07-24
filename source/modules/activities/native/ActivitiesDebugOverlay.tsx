// Module ID: 15874
// Function ID: 122567
// Name: ActivitiesDebugOverlay
// Dependencies: [31, 27, 33, 4130, 3974, 689, 10555, 1557, 4126, 2]
// Exports: default

// Module 15874 (ActivitiesDebugOverlay)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import hexToRgb from "hexToRgb";

let closure_4;
let closure_5;
const require = arg1;
({ jsxs: closure_4, jsx: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { position: "absolute", top: 0, left: 0, backgroundColor: null, paddingRight: 16, paddingBottom: 16 };
_createForOfIteratorHelperLoose.backgroundColor = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLACK, 0.7);
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.row = { flexDirection: "row" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/activities/native/ActivitiesDebugOverlay.tsx");

export default function ActivitiesDebugOverlay() {
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = importDefault(10555)();
  let str = "";
  let str2 = "text-overlay-light";
  if (require(10555) /* _getThermalState */.ThermalStates.UNHANDLED !== tmp2) {
    str = "nominal";
    str2 = "text-feedback-positive";
    if (require(10555) /* _getThermalState */.ThermalStates.NOMINAL !== tmp2) {
      str = "fair";
      str2 = "text-feedback-warning";
      if (require(10555) /* _getThermalState */.ThermalStates.FAIR !== tmp2) {
        str = "serious";
        str2 = "text-feedback-critical";
        if (require(10555) /* _getThermalState */.ThermalStates.SERIOUS !== tmp2) {
          if (require(10555) /* _getThermalState */.ThermalStates.CRITICAL === tmp2) {
            str = "critical";
            str2 = "text-feedback-critical";
          }
        }
      }
    }
  }
  const rect = importDefault(1557)();
  let obj = { style: items, pointerEvents: "none" };
  items = [tmp.container, ];
  obj = { paddingTop: rect.top + 16, paddingLeft: rect.left + 16 };
  items[1] = obj;
  obj = { style: tmp.row };
  const obj1 = { variant: "text-md/normal", color: "text-overlay-light", children: ["thermal state:", " "] };
  const items1 = [callback(require(4126) /* Text */.Text, obj1), ];
  const obj2 = { variant: "text-md/normal", color: str2, children: str };
  items1[1] = callback2(require(4126) /* Text */.Text, obj2);
  obj.children = items1;
  obj.children = callback(View, obj);
  return callback2(View, obj);
};
