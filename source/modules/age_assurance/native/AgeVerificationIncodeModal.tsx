// Module ID: 7529
// Function ID: 60254
// Name: getScreens
// Dependencies: [493879296, 365821952, 131072, 527892480, 553648128, 1929379840, 3154116625, 2617245700, 1929379850, 33554449, 2113929216]
// Exports: default

// Module 7529 (getScreens)
function getScreens(headerStyle, headerTitle) {
  headerTitle = arg2;
  const importDefault = arg3;
  const dependencyMap = arg4;
  function handleClose() {
    arg4();
    let arr = arg3(arg4[4]);
    arr = arr.pop();
  }
  const uRL = new URL(arg2);
  const origin = uRL.origin;
  let obj = {};
  obj = { headerStyle: headerStyle.headerStyle };
  const intl = headerTitle(dependencyMap[5]).intl;
  obj.headerTitle = intl.string(headerTitle(dependencyMap[5]).t.wJVyYR);
  obj.headerLeft = function headerLeft() {
    const obj = { onPress: handleClose };
    const intl = arg2(arg4[5]).intl;
    obj.text = intl.string(arg2(arg4[5]).t.cpT0Cq);
    return handleClose(arg2(arg4[6]).HeaderActionButton, obj);
  };
  obj.render = function render(arg0, arg1) {
    const arg2 = arg1;
    return handleClose(arg3(arg4[7]), {
      onClose: handleClose,
      trustedOrigin: origin,
      onMethodSelected(injectedJavaScriptBeforeContentLoaded) {
        return arg1.navigate(constants.VERIFY_AGE, { injectedJavaScriptBeforeContentLoaded });
      }
    });
  };
  obj[constants.METHOD_SELECT] = obj;
  obj = {
    headerStyle: headerStyle.headerStyle,
    headerTitle,
    headerLeft() {
      const obj = { onPress: handleClose };
      const intl = arg2(arg4[5]).intl;
      obj.text = intl.string(arg2(arg4[5]).t.cpT0Cq);
      return handleClose(arg2(arg4[6]).HeaderActionButton, obj);
    },
    render(injectedJavaScriptBeforeContentLoaded) {
      return handleClose(arg3(arg4[8]), { webviewUrl: arg2, onComplete: arg3, onClose: handleClose, injectedJavaScriptBeforeContentLoaded: injectedJavaScriptBeforeContentLoaded.injectedJavaScriptBeforeContentLoaded });
    }
  };
  obj[constants.VERIFY_AGE] = obj;
  return obj;
}
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_5 = { METHOD_SELECT: "METHOD_SELECT", VERIFY_AGE: "VERIFY_AGE" };
let obj = arg1(dependencyMap[2]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_BASE_LOWER };
obj.headerStyle = obj;
let closure_6 = obj.createStyles(obj);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/age_assurance/native/AgeVerificationIncodeModal.tsx");

export default function AgeVerificationIncodeModal(webviewUrl) {
  webviewUrl = webviewUrl.webviewUrl;
  const arg1 = webviewUrl;
  const onComplete = webviewUrl.onComplete;
  const importDefault = onComplete;
  const onClose = webviewUrl.onClose;
  const dependencyMap = onClose;
  const tmp = callback();
  const React = tmp;
  const intl = arg1(dependencyMap[5]).intl;
  const stringResult = intl.string(arg1(dependencyMap[5]).t.wJVyYR);
  const jsx = stringResult;
  const items = [tmp, webviewUrl, onComplete, onClose, stringResult];
  const memo = React.useMemo(() => callback(tmp, stringResult, webviewUrl, onComplete, onClose), items);
  const obj = { screens: memo, initialRouteName: constants.METHOD_SELECT };
  const intl2 = arg1(dependencyMap[5]).intl;
  obj.headerBackTitle = intl2.string(arg1(dependencyMap[5]).t.13/7kX);
  return jsx(arg1(dependencyMap[9]).Navigator, obj);
};
