// Module ID: 14837
// Function ID: 14838
// Dependencies: [32, 19, 17, 7572, 2045, 2099, 1078, 2052, 21, 4758, 580, 4497, 558, 568, 5344, 14838, 4964, 1114, 1236, 4617, 5118, 7282, 14840, 14841, 4616, 1105, 4693, 1245, 4618, 14842, 7288, 1489, 1374, 14843, 1368, 13041, 14844, 14845, 14846, 16251, 9727, 13035, 16259, 4632, 16260, 16262, 1485, 12087, 16263, 16271, 4540, 16273, 1235, 2]

// Module 14837
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1114 */;
import SentryInitUtils from "SentryInitUtils" /* 1236 */;
import RootNavigationRef from "RootNavigationRef" /* 4617 */;
import ModalDispatchQueueDefault from "ModalDispatchQueue" /* 4964 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 5344 */;
import DiscordGestureHandlerRootViewDefault from "DiscordGestureHandlerRootView" /* 14838 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;

require = fn;
function handleNavigationOnReady() {
  ModalDispatchQueueDefault.flush();
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(constants.NAVIGATOR_READY);
  const routingInstrumentation = SentryInitUtils.routingInstrumentation;
  const result = routingInstrumentation.registerNavigationContainer(RootNavigationRef.getRootNavigationRef());
  closure_7();
}
const NativeModules = fn(17).NativeModules;
let closure_7 = fn(7572).handleHistoryStoreNavigationChange;
const Constants = fn(1078);
({ AnalyticEvents: c10, ComponentActions: closure_11, Routes: closure_12 } = Constants);
const isStaticChannelRoute = fn(2052).isStaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4758);
const obj2 = { flex: { flex: 1 }, rootBackgroundColor: { backgroundColor: nativeDefault.colors.ANDROID_NAVIGATION_BAR_BACKGROUND } };
let closure_16 = createStyles.createStyles(obj2);
const ReanimatedRexport = fn(4497);
let obj3 = { backgroundColor: nativeDefault.colors.ANDROID_NAVIGATION_BAR_BACKGROUND };
let result = ReanimatedRexport.configureReanimatedLogger({ level: fn(4497).ReanimatedLogLevel.error, strict: false });
const ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const cResult = c.c(6);
  children = children.children;
  const tmp3 = closure_16();
  let rootBackgroundColor;
  if (obj2.useIsScreenLandscape()) {
    rootBackgroundColor = tmp3.rootBackgroundColor;
  }
  if (cResult[0] === tmp3.flex) {
    if (cResult[1] === rootBackgroundColor) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === children) {
      if (cResult[4] === tmp5) {
        let tmp6 = cResult[5];
      }
      return tmp6;
    }
    const obj3 = { style: tmp5, children };
    const tmp9 = state(DiscordGestureHandlerRootViewDefault, obj3);
    cResult[3] = children;
    cResult[4] = tmp5;
    cResult[5] = tmp9;
    tmp6 = tmp9;
  }
  const items = [tmp3.flex, rootBackgroundColor];
  cResult[0] = tmp3.flex;
  cResult[1] = rootBackgroundColor;
  cResult[2] = items;
  tmp5 = items;
}) : ((children) => {
  const tmp = closure_16();
  const styles = tmp;
  const isScreenLandscape = useIsScreenLandscape.useIsScreenLandscape();
  let items = [isScreenLandscape, tmp];
  const style = noop.useMemo(() => {
    const items = [styles.flex, ];
    let rootBackgroundColor;
    if (isScreenLandscape) {
      rootBackgroundColor = styles.rootBackgroundColor;
    }
    items[1] = rootBackgroundColor;
    return items;
  }, items);
  return state(DiscordGestureHandlerRootViewDefault, { style, children: children.children });
});
