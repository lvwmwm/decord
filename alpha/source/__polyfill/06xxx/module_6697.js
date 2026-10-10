// Module ID: 6697
// Function ID: 6698
// Dependencies: [19, 21, 1634, 6698, 1504, 6699, 6209, 6700]

// Module 6697
import Fragment from "Fragment" /* 21 */;
import Link from "Link" /* 1504 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export const Header = react.memo(function Header(navigation) {
  let back;
  let headerBackTitle;
  let href;
  let layout;
  let num;
  let options;
  let progress;
  let route;
  let styleInterpolator;
  let tmp9;
  let tmpResult2;
  ({ back, options, route } = navigation);
  navigation = navigation.navigation;
  let tmp = route;
  ({ layout, progress, styleInterpolator } = navigation);
  const obj = route(navigation[2]);
  const safeAreaInsets = obj.useSafeAreaInsets();
  if (undefined !== options.headerBackTitle) {
    headerBackTitle = options.headerBackTitle;
  } else if (back) {
    headerBackTitle = back.title;
  }
  const items = [navigation, route.key];
  const useCallback = react.useCallback;
  const tmpResult = tmp(navigation[3]);
  const callback = useCallback(tmpResult.throttle(() => {
    const tmp = navigation.isFocused() && navigation.canGoBack();
    if (tmp) {
      const dispatch = obj.dispatch;
      const obj2 = { source: route.key };
      const StackActions = Link.StackActions;
      const merged = Object.assign(StackActions.pop());
      dispatch(obj2);
    }
  }, 50), items);
  const context = react.useContext(tmp(tmp2[5]).ModalPresentationContext);
  if (undefined !== options.headerStatusBarHeight) {
    num = options.headerStatusBarHeight;
  } else {
    num = 0;
    if (!context) {
      num = 0;
      if (!tmp6) {
        num = safeAreaInsets.top;
      }
    }
  }
  let obj2 = { title: tmpResult2.getHeaderTitle(options, route.name), progress, layout, modal: context, headerBackTitle, headerStatusBarHeight: num, onGoBack: tmp9, backHref: href, styleInterpolator };
  const HeaderSegment = tmp(tmp2[7]).HeaderSegment;
  let merged = Object.assign(options);
  const tmp7 = jsx;
  tmpResult2 = tmp(navigation[6]);
  if (undefined !== options.headerBackTitle) {
    headerBackTitle = options.headerBackTitle;
  }
  tmp9 = undefined;
  if (back) {
    tmp9 = callback;
  }
  href = undefined;
  if (back) {
    href = back.href;
  }
  return tmp7(HeaderSegment, obj2);
});
