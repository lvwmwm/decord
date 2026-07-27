// Module ID: 6694
// Function ID: 59092
// Name: getScreens
// Dependencies: [31, 33, 4131, 689, 4338, 1212, 6695, 6696, 6701, 5517, 2]
// Exports: default

// Module 6694 (getScreens)
import result from "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function getScreens(headerStyle, headerTitle) {
  const _require = arg2;
  let closure_1 = arg3;
  const dependencyMap = arg4;
  function handleClose() {
    dependencyMap();
    let arr = callback2(4338);
    arr = arr.pop();
  }
  const uRL = new URL(arg2);
  const origin = uRL.origin;
  let obj = {};
  obj = { headerStyle: headerStyle.headerStyle };
  let intl = _require(1212).intl;
  obj.headerTitle = intl.string(_require(1212).t.wJVyYR);
  obj.headerLeft = function headerLeft() {
    const obj = { onPress: handleClose };
    const intl = callback(1212).intl;
    obj.text = intl.string(callback(1212).t.cpT0Cq);
    return handleClose(callback(6695).HeaderActionButton, obj);
  };
  obj.render = function render(arg0, arg1) {
    let closure_0 = arg1;
    return handleClose(callback2(6696), {
      onClose: handleClose,
      trustedOrigin: origin,
      onMethodSelected(injectedJavaScriptBeforeContentLoaded) {
        return navigation.navigate(outer2_5.VERIFY_AGE, { injectedJavaScriptBeforeContentLoaded });
      }
    });
  };
  obj[constants.METHOD_SELECT] = obj;
  obj = {
    headerStyle: headerStyle.headerStyle,
    headerTitle,
    headerLeft() {
      const obj = { onPress: handleClose };
      const intl = callback(1212).intl;
      obj.text = intl.string(callback(1212).t.cpT0Cq);
      return handleClose(callback(6695).HeaderActionButton, obj);
    },
    render(injectedJavaScriptBeforeContentLoaded) {
      return handleClose(callback2(6701), { webviewUrl: closure_0, onComplete: callback2, onClose: handleClose, injectedJavaScriptBeforeContentLoaded: injectedJavaScriptBeforeContentLoaded.injectedJavaScriptBeforeContentLoaded });
    }
  };
  obj[constants.VERIFY_AGE] = obj;
  return obj;
}
let closure_5 = { METHOD_SELECT: "METHOD_SELECT", VERIFY_AGE: "VERIFY_AGE" };
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.headerStyle = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/age_assurance/native/AgeVerificationIncodeModal.tsx");

export default function AgeVerificationIncodeModal(webviewUrl) {
  webviewUrl = webviewUrl.webviewUrl;
  const onComplete = webviewUrl.onComplete;
  const onClose = webviewUrl.onClose;
  const tmp = _createForOfIteratorHelperLoose();
  const React = tmp;
  const intl = webviewUrl(onClose[5]).intl;
  const stringResult = intl.string(webviewUrl(onClose[5]).t.wJVyYR);
  const jsx = stringResult;
  const items = [tmp, webviewUrl, onComplete, onClose, stringResult];
  const memo = React.useMemo(() => outer1_7(result, closure_4, webviewUrl, onComplete, onClose), items);
  const obj = { screens: memo, initialRouteName: constants.METHOD_SELECT };
  const intl2 = webviewUrl(onClose[5]).intl;
  obj.headerBackTitle = intl2.string(webviewUrl(onClose[5]).t["13/7kX"]);
  return jsx(webviewUrl(onClose[9]).Navigator, { screens: memo, initialRouteName: constants.METHOD_SELECT });
};
