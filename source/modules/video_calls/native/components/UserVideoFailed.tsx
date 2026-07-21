// Module ID: 15695
// Function ID: 119951
// Name: UserVideoFailed
// Dependencies: []
// Exports: default

// Module 15695 (UserVideoFailed)
const View = require(dependencyMap[0]).View;
const VideoToggleState = require(dependencyMap[1]).VideoToggleState;
const _module = require(dependencyMap[2]);
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = _module);
const _module1 = require(dependencyMap[3]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).unsafe_rawColors.PRIMARY_700 };
obj.container = obj;
obj.placeholderImage = { <string:1869882451>: "sh", <string:1652330907>: 0, <string:3109296615>: false };
obj.button = { "Bool(true)": "center", "Bool(true)": "center" };
let closure_8 = _module1.createStyles(obj);
const _module2 = require(dependencyMap[13]);
const result = _module2.fileFinishedImporting("modules/video_calls/native/components/UserVideoFailed.tsx");

export default function UserVideoFailed(userId) {
  let avError;
  let removeRetryButton;
  let removeSplashImage;
  let style;
  const require = userId.userId;
  let obj = {};
  ({ style, avError, removeRetryButton, removeSplashImage } = userId);
  Object.setPrototypeOf(null);
  const merged = Object.assign(userId, obj);
  const tmp3 = callback2();
  let obj1 = require(dependencyMap[5]);
  obj = {};
  const merged1 = Object.assign(merged);
  const items = [tmp3.container, style];
  obj["style"] = items;
  obj = {};
  let tmp8 = !removeSplashImage;
  if (tmp8) {
    obj1 = { style: tmp3.placeholderImage };
    tmp8 = callback(require(dependencyMap[6]).StreamFailed, obj1);
  }
  const items1 = [tmp8, ];
  const obj2 = {};
  const intl = require(dependencyMap[8]).intl;
  obj2.children = intl.string(require(dependencyMap[8]).t.z+mxvo);
  items1[1] = callback(require(dependencyMap[7]).Text, obj2);
  obj.children = items1;
  const items2 = [closure_7(closure_6, obj), , ];
  const obj3 = { "Bool(true)": true, "Bool(true)": true, "Bool(true)": true };
  const intl2 = require(dependencyMap[8]).intl;
  obj3.children = intl2.formatToPlainString(require(dependencyMap[8]).t.ejOT95, { errorCode: obj1.getErrorInfo(avError).errorCode });
  items2[1] = callback(require(dependencyMap[7]).Text, obj3);
  const obj4 = { style: tmp3.button };
  let tmp14 = !removeRetryButton;
  if (tmp14) {
    const obj5 = { variant: "secondary" };
    const intl3 = require(dependencyMap[8]).intl;
    obj5.text = intl3.string(require(dependencyMap[8]).t.hxmQ/e);
    obj5.onPress = function onPress() {
      const result = userId(closure_2[10]).clearVideoStreamTimeout(userId(closure_2[11]).MediaEngineContextTypes.DEFAULT, userId);
      const obj = userId(closure_2[10]);
      callback(closure_2[12]).setDisableLocalVideo(userId, constants.DISABLED, userId(closure_2[11]).MediaEngineContextTypes.DEFAULT, false);
      const timerId = setTimeout(() => {
        callback2(closure_2[12]).setDisableLocalVideo(callback, constants.MANUAL_ENABLED, callback(closure_2[11]).MediaEngineContextTypes.DEFAULT, false);
      }, 1000);
    };
    tmp14 = callback(require(dependencyMap[9]).Button, obj5);
  }
  obj4.children = tmp14;
  items2[2] = callback(View, obj4);
  obj["children"] = items2;
  return closure_7(View, obj);
};
