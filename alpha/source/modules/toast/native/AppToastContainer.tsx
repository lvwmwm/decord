// Module ID: 17675
// Function ID: 17676
// Name: AppToastContainer
// Dependencies: [19, 21, 558, 576, 1631, 14259, 15343, 15352, 2]

// Module 17675 (AppToastContainer)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import QuestHooks from "QuestHooks" /* 15343 */;
import useYouBarTotalHeight from "useYouBarTotalHeight" /* 15352 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const ToastContainer = tmp(14259);
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ManaToastSurface(bottomInset) {
  const obj = react2;
  const cResult = obj.c(5);
  bottomInset = bottomInset.bottomInset;
  const top = useSafeAreaInsetsDefault().top;
  if (cResult[0] === bottomInset) {
    let tmp4;
    let tmp5;
    if (cResult[1] === top) {
      tmp4 = cResult[2];
    }
    if (cResult[3] !== tmp4) {
      const tmp7 = jsx(ToastContainer.ToastContainer, { overlay: true, offset: tmp4 });
      cResult[3] = tmp4;
      cResult[4] = tmp7;
      tmp5 = tmp7;
    } else {
      tmp5 = cResult[4];
    }
    return tmp5;
  }
  const rect = { top, bottom: bottomInset };
  cResult[0] = bottomInset;
  cResult[1] = top;
  cResult[2] = rect;
  tmp4 = rect;
}) : (function ManaToastSurface(bottomInset) {
  bottomInset = bottomInset.bottomInset;
  const top = useSafeAreaInsetsDefault().top;
  const items = [top, bottomInset];
  const offset = react.useMemo(() => {
    const rect = { top, bottom: bottomInset };
    return rect;
  }, items);
  return jsx(ToastContainer.ToastContainer, { overlay: true, offset });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppChromeToastSurface() {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  const obj2 = QuestHooks;
  const mobileQuestDockHeight = obj2.useMobileQuestDockHeight();
  const obj3 = useYouBarTotalHeight;
  const sum = mobileQuestDockHeight + obj3.useYouBarTotalHeight();
  if (cResult[0] !== sum) {
    const tmp7 = <closure_5 bottomInset={sum} />;
    cResult[0] = sum;
    cResult[1] = tmp7;
    tmp4 = tmp7;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function AppChromeToastSurface() {
  const obj = QuestHooks;
  const mobileQuestDockHeight = obj.useMobileQuestDockHeight();
  const obj2 = useYouBarTotalHeight;
  return <closure_5 bottomInset={mobileQuestDockHeight + obj2.useYouBarTotalHeight()} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppToastContainer(appChrome) {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  appChrome = appChrome.appChrome;
  if (cResult[0] !== (undefined === appChrome || appChrome)) {
    let tmp4Result;
    if (undefined === appChrome || appChrome) {
      tmp4Result = tmp4(closure_6, {});
    } else {
      tmp4Result = tmp4(closure_5, { bottomInset: 0 });
    }
    cResult[0] = undefined === appChrome || appChrome;
    cResult[1] = tmp4Result;
    tmp3 = tmp4Result;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function AppToastContainer(appChrome) {
  let tmpResult;
  let flag = appChrome.appChrome;
  if (flag === undefined) {
    flag = true;
  }
  if (flag) {
    tmpResult = tmp(closure_6, {});
  } else {
    tmpResult = tmp(closure_5, { bottomInset: 0 });
  }
  return tmpResult;
});
const result = size.fileFinishedImporting("modules/toast/native/AppToastContainer.tsx");

export default tmp2;
