// Module ID: 8965
// Function ID: 70737
// Name: error
// Dependencies: [31, 27, 33, 4130, 689, 5121, 8966, 4126, 1212, 4543, 4337, 2]
// Exports: default

// Module 8965 (error)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ Image: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, gap: 16, paddingHorizontal: 16, justifyContent: "center", flexDirection: "column" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.inner = { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.text = { marginTop: 24, textAlign: "center" };
_createForOfIteratorHelperLoose.image = { tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_WARNING };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_WARNING };
const result = require("jsxProd").fileFinishedImporting("modules/oauth2/native/ErrorResult.tsx");

export default function ErrorResult(error) {
  error = error.error;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { bottom: true, style: tmp.container };
  obj = { style: tmp.inner };
  obj = { source: importDefault(8966), style: tmp.image };
  const items = [callback(closure_3, obj), ];
  const obj1 = { style: tmp.text, variant: "text-md/medium" };
  if (null == error) {
    const intl = require(1212) /* getSystemLocale */.intl;
    error = intl.string(require(1212) /* getSystemLocale */.t.mqn873);
  }
  obj1.children = error;
  items[1] = callback(require(4126) /* Text */.Text, obj1);
  obj.children = items;
  const items1 = [closure_6(closure_4, obj), ];
  let tmp7 = null;
  if (!error.hideFooter) {
    const obj2 = { size: "lg" };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj2.text = intl2.string(require(1212) /* getSystemLocale */.t.cpT0Cq);
    obj2.onPress = function onPress() {
      return outer1_1(outer1_2[10]).pop();
    };
    tmp7 = callback(require(4543) /* Button */.Button, obj2);
  }
  items1[1] = tmp7;
  obj.children = items1;
  return closure_6(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
};
