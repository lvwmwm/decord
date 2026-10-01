// Module ID: 11584
// Function ID: 11585
// Name: AppLauncherFlashList
// Dependencies: [19, 17, 21, 6073, 11585, 10785, 8712, 8179, 2]
// Exports: useAppLauncherFlashListProps

// Module 11584 (AppLauncherFlashList)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import useAnimatedScrollLock from "useAnimatedScrollLock" /* 11585 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let simultaneousHandlers;

const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
const forwardRefResult = react.forwardRef((simultaneousHandlers, ref) => {
  let tmp5;
  const obj = simultaneousHandlers(10785);
  simultaneousHandlers = simultaneousHandlers.simultaneousHandlers;
  const items = [simultaneousHandlers];
  const entrypoint = obj.useAppLauncherContext().entrypoint;
  let memo = react.useMemo(() => react.forwardRef((arg0, ref) => {
    const memo = React.useMemo(() => {
      const Gesture = simultaneousHandlers(closure_2_1[3]).Gesture;
      const NativeResult = Gesture.Native();
      return NativeResult.simultaneousWithExternalGesture(closure_1_0);
    }, []);
    const GestureDetector = simultaneousHandlers(dependencyMap[3]).GestureDetector;
    const merged = Object.assign(arg0);
    return <GestureDetector gesture={memo}>{null}</GestureDetector>;
  }), items);
  if (entrypoint === simultaneousHandlers(8712).AppLauncherEntrypoint.VOICE) {
    ({ ListHeaderComponent: obj2.ListHeaderComponent, animatedOnScroll: obj2.onScroll, contentContainerStyle: obj2.contentContainerStyle, scrollIndicatorInsets: obj2.scrollIndicatorInsets, renderItem: obj2.renderItem, getItemType: obj2.getItemType, data: obj2.data, automaticallyAdjustsScrollIndicatorInsets: obj2.automaticallyAdjustsScrollIndicatorInsets, keyboardDismissMode: obj2.keyboardDismissMode, keyboardShouldPersistTaps: obj2.keyboardShouldPersistTaps, showsVerticalScrollIndicator: obj2.showsVerticalScrollIndicator, onViewableItemsChanged: obj2.onViewableItemsChanged, viewabilityConfigCallbackPairs: obj2.viewabilityConfigCallbackPairs, animatedProps: obj2.animatedProps } = simultaneousHandlers);
    tmp5 = jsx(tmp(8179).AnimatedFlashList, { renderScrollComponent: memo, ListHeaderComponent: null, onScroll: null, contentContainerStyle: null, scrollIndicatorInsets: null, renderItem: null, getItemType: null, data: null, automaticallyAdjustsScrollIndicatorInsets: null, keyboardDismissMode: null, keyboardShouldPersistTaps: null, showsVerticalScrollIndicator: null, onViewableItemsChanged: null, viewabilityConfigCallbackPairs: null, animatedProps: null, overScrollMode: "never", ref });
  } else {
    ({ ListHeaderComponent: obj3.ListHeaderComponent, onScroll: obj3.onScroll, contentContainerStyle: obj3.contentContainerStyle, scrollIndicatorInsets: obj3.scrollIndicatorInsets, renderItem: obj3.renderItem, getItemType: obj3.getItemType, data: obj3.data, preserveScrollMomentum: obj3.preserveScrollMomentum, automaticallyAdjustsScrollIndicatorInsets: obj3.automaticallyAdjustsScrollIndicatorInsets, keyboardDismissMode: obj3.keyboardDismissMode, keyboardShouldPersistTaps: obj3.keyboardShouldPersistTaps, showsVerticalScrollIndicator: obj3.showsVerticalScrollIndicator, lockableScrollableContentOffsetY: obj3.lockableScrollableContentOffsetY, bottomViewabilityInsetRef: obj3.bottomViewabilityInsetRef, onViewableItemsChanged: obj3.onViewableItemsChanged, viewabilityConfigCallbackPairs: obj3.viewabilityConfigCallbackPairs } = simultaneousHandlers);
    tmp5 = jsx(tmp(8179).BottomSheetFlashList, { ListHeaderComponent: null, onScroll: null, contentContainerStyle: null, scrollIndicatorInsets: null, renderItem: null, getItemType: null, data: null, preserveScrollMomentum: null, automaticallyAdjustsScrollIndicatorInsets: null, keyboardDismissMode: null, keyboardShouldPersistTaps: null, showsVerticalScrollIndicator: null, lockableScrollableContentOffsetY: null, bottomViewabilityInsetRef: null, onViewableItemsChanged: null, viewabilityConfigCallbackPairs: null, ref });
  }
  return tmp5;
});
forwardRefResult.displayName = "AppLauncherFlashList";
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherFlashList.tsx");

export default forwardRefResult;
export const useAppLauncherFlashListProps = function useAppLauncherFlashListProps(arg0) {
  const obj = useAnimatedScrollLock;
  return obj.useAnimatedScrollLock(arg0);
};
