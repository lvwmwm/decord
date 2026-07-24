// Module ID: 13706
// Function ID: 105189
// Name: SafetyHubErrorActionSheet
// Dependencies: [31, 27, 33, 4130, 689, 13704, 5187, 5776, 4126, 1212, 4543, 11059, 2]
// Exports: default

// Module 13706 (SafetyHubErrorActionSheet)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", alignItems: "center", justifyContent: "center", paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_24, gap: require("_createForOfIteratorHelperLoose").space.PX_16, minHeight: 120 };
_createForOfIteratorHelperLoose.errorContainer = _createForOfIteratorHelperLoose;
let obj1 = { display: "flex", justifyContent: "center", alignItems: "center", height: 40, width: 40, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.redesignErrorIconContainer = obj1;
_createForOfIteratorHelperLoose.redesignErrorIcon = { height: 50, width: 50 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/safety_hub/native/SafetyHubErrorActionSheet.tsx");

export default function SafetyHubErrorActionSheet(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
    throw undefined;
  } else {
    const tmp4 = _createForOfIteratorHelperLoose();
    const tmp7 = importDefault(13704)();
    let obj = {};
    obj = {};
    const items = [tmp4.errorContainer];
    obj.style = items;
    obj = {};
    const items1 = [tmp4.redesignErrorIconContainer];
    obj.style = items1;
    const obj1 = { size: "custom", color: importDefault(689).colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT };
    const items2 = [tmp4.redesignErrorIcon];
    obj1.style = items2;
    obj.children = callback(require(5776) /* CircleXIcon */.CircleXIcon, obj1);
    const items3 = [callback(View, obj), ];
    const obj2 = { variant: "heading-lg/normal" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj2.children = intl.string(require(1212) /* getSystemLocale */.t.TDRvqs);
    items3[1] = callback(require(4126) /* Text */.Text, obj2);
    obj.children = items3;
    const items4 = [callback2(View, obj), ];
    const obj3 = {
      onPress() {
          return outer1_2(outer1_3[11]).getSafetyHubData();
        }
    };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj3.text = intl2.string(require(1212) /* getSystemLocale */.t.R1AN4F);
    obj3.loading = tmp7;
    obj3.disabled = tmp7;
    items4[1] = callback(require(4543) /* Button */.Button, obj3);
    obj.children = items4;
    return callback2(require(5187) /* Background */.BottomSheet, obj);
  }
};
