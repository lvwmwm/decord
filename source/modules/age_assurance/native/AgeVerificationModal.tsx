// Module ID: 7551
// Function ID: 60428
// Name: AgeVerifyScreen
// Dependencies: []
// Exports: default

// Module 7551 (AgeVerifyScreen)
function AgeVerifyScreen(onComplete) {
  onComplete = onComplete.onComplete;
  const arg1 = onComplete;
  const onClose = onComplete.onClose;
  const importDefault = onClose;
  let obj = arg1(dependencyMap[3]);
  const isSuspendedUser = obj.useIsSuspendedUser();
  const dependencyMap = isSuspendedUser;
  const items = [onComplete, onClose];
  const callback = React.useCallback(() => {
    onComplete();
    onClose();
  }, items);
  const React = callback;
  const items1 = [callback];
  const callback1 = React.useCallback(() => {
    if (obj.isModalOpen(closure_4)) {
      callback();
    }
  }, items1);
  const watchAgeVerificationStatusChange = arg1(dependencyMap[5]).useWatchAgeVerificationStatusChange(callback1);
  const items2 = [callback, isSuspendedUser];
  const callback2 = React.useCallback((nativeEvent) => {
    if (null != nativeEvent.nativeEvent.data) {
      if ("string" === typeof tmp.nativeEvent.data) {
        const _JSON = JSON;
        let data = JSON.parse(nativeEvent.nativeEvent.data);
      } else {
        data = tmp.nativeEvent.data;
      }
      let tmp6 = isSuspendedUser;
      if (isSuspendedUser) {
        let eventType;
        if (null != tmp4) {
          eventType = data.eventType;
        }
        tmp6 = "Verification.Result" === eventType;
      }
      if (tmp6) {
        callback();
      }
    }
  }, items2);
  obj = { "Null": false, "Null": false, "Null": false, "Null": false, "Null": false, source: { uri: onComplete.webviewUrl }, onMessage: callback2 };
  return jsx(importDefault(dependencyMap[6]), obj);
}
function getScreens(headerStyle, arg1, arg2, arg3, headerTitle) {
  const importDefault = arg2;
  const dependencyMap = arg3;
  function handleClose() {
    arg3();
    let arr = arg2(arg3[9]);
    arr = arr.pop();
  }
  return {
    [closure_6.VERIFY_AGE]: {
      headerStyle: headerStyle.headerStyle,
      headerTitle,
      headerLeft() {
        const obj = { onPress: handleClose };
        const intl = arg1(arg3[11]).intl;
        obj.text = intl.string(arg1(arg3[11]).t.cpT0Cq);
        return callback(arg1(arg3[10]).HeaderActionButton, obj);
      },
      render() {
        return callback(closure_8, { webviewUrl: arg1, onComplete: arg2, onClose: handleClose });
      }
    }
  };
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[1]).AGE_VERIFICATION_MODAL_KEY;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_6 = { VERIFY_AGE: "VERIFY_AGE" };
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOWER };
obj.headerStyle = obj;
let closure_7 = obj.createStyles(obj);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/age_assurance/native/AgeVerificationModal.tsx");

export default function AgeVerificationModal(webviewUrl) {
  webviewUrl = webviewUrl.webviewUrl;
  const arg1 = webviewUrl;
  const onComplete = webviewUrl.onComplete;
  const importDefault = onComplete;
  const onClose = webviewUrl.onClose;
  const dependencyMap = onClose;
  const tmp = callback();
  const React = tmp;
  const intl = arg1(dependencyMap[11]).intl;
  const stringResult = intl.string(arg1(dependencyMap[11]).t.wJVyYR);
  let closure_4 = stringResult;
  const items = [tmp, webviewUrl, onComplete, onClose, stringResult];
  const memo = React.useMemo(() => callback(tmp, webviewUrl, onComplete, onClose, stringResult), items);
  const obj = { screens: memo, initialRouteName: constants.VERIFY_AGE };
  const intl2 = arg1(dependencyMap[11]).intl;
  obj.headerBackTitle = intl2.string(arg1(dependencyMap[11]).t.13/7kX);
  return jsx(arg1(dependencyMap[12]).Navigator, obj);
};
