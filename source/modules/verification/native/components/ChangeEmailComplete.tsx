// Module ID: 9235
// Function ID: 72214
// Name: handlePress
// Dependencies: [31, 27, 9183, 33, 4130, 689, 9181, 9192, 4126, 1212, 4543, 2]
// Exports: default

// Module 9235 (handlePress)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { resetChangeEmailStore } from "setChangeEmailError";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_7;
let closure_8;
const require = arg1;
function handlePress() {
  resetChangeEmailStore();
  importDefault(9181).close();
}
({ View: closure_3, Image: closure_4, ScrollView: closure_5 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexGrow: 2, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16, gap: 20, alignItems: "center" };
_createForOfIteratorHelperLoose.contentContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.image = { height: 190, width: 220, resizeMode: "contain" };
_createForOfIteratorHelperLoose.title = { textAlign: "center" };
_createForOfIteratorHelperLoose.body = { textAlign: "center" };
_createForOfIteratorHelperLoose.bodyInner = { gap: 2 };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, width: "100%", padding: 12, borderWidth: 1, borderStyle: "solid", borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
const merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_LOW);
_createForOfIteratorHelperLoose.tooltip = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("setChangeEmailError").fileFinishedImporting("modules/verification/native/components/ChangeEmailComplete.tsx");

export default function ChangeEmailComplete(email) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, contentContainerStyle: tmp.contentContainer };
  obj = { style: tmp.image, source: importDefault(9192) };
  const items = [callback(closure_4, obj), , , ];
  obj = { style: tmp.bodyInner };
  const obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl.string(require(1212) /* getSystemLocale */.t["8O+nF7"]);
  const items1 = [callback(require(4126) /* Text */.Text, obj1), ];
  const obj2 = { style: tmp.body, variant: "text-sm/medium", color: "text-default" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl2.format(require(1212) /* getSystemLocale */.t.Zvx0O3, { email: email.email });
  items1[1] = callback(require(4126) /* Text */.Text, obj2);
  obj.children = items1;
  items[1] = callback2(closure_3, obj);
  const obj3 = { style: tmp.tooltip, variant: "text-sm/normal" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj3.children = intl3.string(require(1212) /* getSystemLocale */.t.yb7itQ);
  items[2] = callback(require(4126) /* Text */.Text, obj3);
  const obj4 = {};
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj4.text = intl4.string(require(1212) /* getSystemLocale */.t.BddRzS);
  obj4.onPress = handlePress;
  obj4.grow = true;
  items[3] = callback(require(4543) /* Button */.Button, obj4);
  obj.children = items;
  return callback2(closure_5, obj);
};
