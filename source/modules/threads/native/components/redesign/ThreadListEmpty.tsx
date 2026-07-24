// Module ID: 15446
// Function ID: 117864
// Dependencies: [31, 27, 33, 4130, 689, 1273, 11373, 4126, 1212, 4543, 2]

// Module 15446
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let obj = { container: { flex: 1, justifyContent: "center", alignItems: "center" } };
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, padding: 12 };
obj.iconWrapper = obj;
obj.title = { textAlign: "center", marginTop: 16, marginHorizontal: 16 };
obj.subtext = { textAlign: "center", marginTop: 4, marginHorizontal: 16, marginBottom: 16 };
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo((onCreateThreadPress) => {
  onCreateThreadPress = onCreateThreadPress.onCreateThreadPress;
  const tmp = callback2();
  let obj = { style: tmp.container };
  obj = { style: tmp.iconWrapper };
  obj = { source: importDefault(11373), size: require(1273) /* Button */.Icon.Sizes.MEDIUM };
  obj.children = callback(require(1273) /* Button */.Icon, obj);
  const items = [callback(View, obj), , , ];
  const obj1 = { style: tmp.title, accessibilityRole: "header", maxFontSizeMultiplier: 2, variant: "heading-lg/semibold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl.string(require(1212) /* getSystemLocale */.t.HgTQ8p);
  items[1] = callback(require(4126) /* Text */.Text, obj1);
  const obj2 = { style: tmp.subtext, maxFontSizeMultiplier: 2, variant: "text-sm/medium", color: "text-default" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl2.string(require(1212) /* getSystemLocale */.t.jmq9GC);
  items[2] = callback(require(4126) /* Text */.Text, obj2);
  let tmp4 = null != onCreateThreadPress;
  if (tmp4) {
    const obj3 = { onPress: onCreateThreadPress };
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj3.text = intl3.string(require(1212) /* getSystemLocale */.t.rBIGBL);
    tmp4 = callback(require(4543) /* Button */.Button, obj3);
  }
  items[3] = tmp4;
  obj.children = items;
  return closure_5(View, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/threads/native/components/redesign/ThreadListEmpty.tsx");

export default memoResult;
