// Module ID: 16074
// Function ID: 124400
// Name: UploadLogsActionSheet
// Dependencies: [31, 27, 653, 33, 4130, 689, 5187, 5186, 1212, 4126, 4543, 10353, 675, 4098, 2]
// Exports: default

// Module 16074 (UploadLogsActionSheet)
import "result";
import { View } from "get ActivityIndicator";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ AnalyticEvents: closure_4, DebugLogCategory: closure_5 } = ME);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.body = { textAlign: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj1 = { textAlign: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.buttonSpacer = { height: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { height: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("ME").fileFinishedImporting("modules/feedback/native/UploadLogsActionSheet.tsx");

export default function UploadLogsActionSheet(arg0) {
  let importDefault;
  let require;
  ({ mediaSessionId: require, rtcConnectionId: importDefault } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {};
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.KTjjrG);
  obj.header = callback(require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  obj = { style: tmp.container };
  const obj1 = { variant: "text-sm/normal", color: "text-muted", style: tmp.body };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl2.string(require(1212) /* getSystemLocale */.t["ZvRR/t"]);
  const items = [callback(require(4126) /* Text */.Text, obj1), , , ];
  let obj2 = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj2.text = intl3.string(require(1212) /* getSystemLocale */.t.EbwFfR);
  obj2.onPress = function onPress() {
    let obj = outer1_0(outer1_2[11]);
    obj.uploadDebugLogFiles(outer1_5.RTC);
    obj = {};
    let tmp2 = null;
    if (null != closure_0) {
      tmp2 = closure_0;
    }
    obj.media_session_id = tmp2;
    let tmp3 = null;
    if (null != closure_1) {
      tmp3 = closure_1;
    }
    obj.rtc_connection_id = tmp3;
    outer1_1(outer1_2[12]).track(outer1_4.DEBUG_LOG_UPLOADED, obj);
    const obj2 = outer1_1(outer1_2[12]);
    outer1_1(outer1_2[13]).hideActionSheet();
  };
  items[1] = callback(require(4543) /* Button */.Button, obj2);
  items[2] = callback(View, { style: tmp.buttonSpacer });
  const obj4 = {};
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj4.text = intl4.string(require(1212) /* getSystemLocale */.t["ETE/oC"]);
  obj4.variant = "secondary";
  obj4.onPress = function onPress() {
    return outer1_1(outer1_2[13]).hideActionSheet();
  };
  items[3] = callback(require(4543) /* Button */.Button, obj4);
  obj.children = items;
  obj.children = callback2(View, obj);
  return callback(require(5187) /* Background */.BottomSheet, obj);
};
