// Module ID: 11073
// Function ID: 86180
// Name: AppealIngestionExternalLink
// Dependencies: [31, 27, 33, 4130, 689, 4660, 3827, 4126, 1273, 7700, 2]
// Exports: default

// Module 11073 (AppealIngestionExternalLink)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginBottom: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.childButton = _createForOfIteratorHelperLoose;
let obj1 = { minHeight: 60, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, paddingVertical: 16, paddingStart: 16, paddingEnd: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.childContainer = obj1;
_createForOfIteratorHelperLoose.childButtonText = { flex: 1, lineHeight: 20 };
_createForOfIteratorHelperLoose.chevron = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj2 = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
const result = require("jsxProd").fileFinishedImporting("modules/safety_hub/native/AppealIngestionExternalLink.tsx");

export default function AppealIngestionExternalLink(text) {
  let importDefault;
  let require;
  ({ url: require, onPress: importDefault } = text);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {
    style: tmp.childButton,
    accessibilityRole: "button",
    onPress() {
      if (null != callback) {
        callback();
      }
      outer1_1(outer1_2[6]).openURL(closure_0);
    }
  };
  obj = { style: tmp.childContainer };
  obj = { style: tmp.childButtonText, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: text.text };
  const items = [callback(require(4126) /* Text */.Text, obj), ];
  const obj1 = { source: require(7700) /* registerAsset */, color: tmp.chevron.color };
  items[1] = callback(require(1273) /* Button */.Icon, obj1);
  obj.children = items;
  obj.children = callback2(View, obj);
  return callback(require(4660) /* PressableBase */.PressableHighlight, obj);
};
