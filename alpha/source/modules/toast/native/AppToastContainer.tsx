// Module ID: 19901
// Function ID: 19902
// Name: AppToastContainer
// Dependencies: [19, 21, 1630, 16521, 17731, 17741, 2]
// Exports: default

// Module 19901 (AppToastContainer)
import Fragment from "Fragment" /* 21 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import ToastContainer from "ToastContainer" /* 16521 */;
import QuestHooks from "QuestHooks" /* 17731 */;
import useYouBarTotalHeight from "useYouBarTotalHeight" /* 17741 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function ManaToastSurface(bottomInset) {
  bottomInset = bottomInset.bottomInset;
  const top = useSafeAreaInsetsDefault().top;
  const items = [top, bottomInset];
  const offset = react.useMemo(() => {
    const rect = { top, bottom: bottomInset };
    return rect;
  }, items);
  return jsx(ToastContainer.ToastContainer, { overlay: true, offset });
}
function AppChromeToastSurface() {
  const obj = QuestHooks;
  const mobileQuestDockHeight = obj.useMobileQuestDockHeight();
  const obj2 = useYouBarTotalHeight;
  return <ManaToastSurface bottomInset={mobileQuestDockHeight + obj2.useYouBarTotalHeight()} />;
}
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/toast/native/AppToastContainer.tsx");

export default function AppToastContainer(appChrome) {
  let tmpResult;
  let flag = appChrome.appChrome;
  if (flag === undefined) {
    flag = true;
  }
  if (flag) {
    tmpResult = tmp(AppChromeToastSurface, {});
  } else {
    tmpResult = tmp(ManaToastSurface, { bottomInset: 0 });
  }
  return tmpResult;
};
