// Module ID: 15870
// Function ID: 122528
// Name: UserVideoFailed
// Dependencies: [27, 653, 33, 4130, 689, 8896, 10600, 4126, 1212, 4543, 10610, 4227, 8882, 2]
// Exports: default

// Module 15870 (UserVideoFailed)
import { View } from "get ActivityIndicator";
import { VideoToggleState } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = jsxProd);
let obj = {};
obj = { alignItems: "center", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_700, padding: 8 };
obj.container = obj;
obj.placeholderImage = { marginBottom: 8, width: "100%", resizeMode: "contain" };
obj.button = { marginTop: 16, alignSelf: "center" };
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj);
let result = require("jsxProd").fileFinishedImporting("modules/video_calls/native/components/UserVideoFailed.tsx");

export default function UserVideoFailed(userId) {
  let avError;
  let removeRetryButton;
  let removeSplashImage;
  let style;
  userId = userId.userId;
  let obj = { userId: 0, style: 0, avError: 0, removeRetryButton: 0, removeSplashImage: 0 };
  ({ style, avError, removeRetryButton, removeSplashImage } = userId);
  Object.setPrototypeOf(null);
  const merged = Object.assign(userId, obj);
  const tmp3 = callback2();
  let obj1 = userId(8896);
  obj = {};
  const merged1 = Object.assign(merged);
  const items = [tmp3.container, style];
  obj["style"] = items;
  obj = {};
  let tmp8 = !removeSplashImage;
  if (tmp8) {
    obj1 = { style: tmp3.placeholderImage };
    tmp8 = callback(userId(10600).StreamFailed, obj1);
  }
  const items1 = [tmp8, ];
  const obj2 = { variant: "text-md/semibold", color: "text-strong" };
  const intl = userId(1212).intl;
  obj2.children = intl.string(userId(1212).t["z+mxvo"]);
  items1[1] = callback(userId(4126).Text, obj2);
  obj.children = items1;
  const items2 = [closure_7(closure_6, obj), , ];
  const obj3 = { variant: "text-sm/semibold", color: "text-muted", selectable: true };
  const intl2 = userId(1212).intl;
  obj3.children = intl2.formatToPlainString(userId(1212).t.ejOT95, { errorCode: obj1.getErrorInfo(avError).errorCode });
  items2[1] = callback(userId(4126).Text, obj3);
  const obj4 = { style: tmp3.button };
  let tmp14 = !removeRetryButton;
  if (tmp14) {
    const obj5 = { variant: "secondary" };
    const intl3 = userId(1212).intl;
    obj5.text = intl3.string(userId(1212).t["hxmQ/e"]);
    obj5.onPress = function onPress() {
      const result = userId(outer1_2[10]).clearVideoStreamTimeout(userId(outer1_2[11]).MediaEngineContextTypes.DEFAULT, userId);
      const obj = userId(outer1_2[10]);
      outer1_1(outer1_2[12]).setDisableLocalVideo(userId, outer1_4.DISABLED, userId(outer1_2[11]).MediaEngineContextTypes.DEFAULT, false);
      const timerId = setTimeout(() => {
        outer2_1(outer2_2[12]).setDisableLocalVideo(outer1_0, outer2_4.MANUAL_ENABLED, userId(outer2_2[11]).MediaEngineContextTypes.DEFAULT, false);
      }, 1000);
    };
    tmp14 = callback(userId(4543).Button, obj5);
  }
  obj4.children = tmp14;
  items2[2] = callback(View, obj4);
  obj["children"] = items2;
  return closure_7(View, obj);
};
