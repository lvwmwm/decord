// Module ID: 11211
// Function ID: 87279
// Name: useAppLauncherFlashListProps
// Dependencies: []
// Exports: useAppLauncherFlashListProps

// Module 11211 (useAppLauncherFlashListProps)
const importAllResult = importAll(dependencyMap[0]);
const ScrollView = arg1(dependencyMap[1]).ScrollView;
const jsx = arg1(dependencyMap[2]).jsx;
const forwardRefResult = importAllResult.forwardRef((simultaneousHandlers, ref) => {
  let obj = ref(dependencyMap[5]);
  if (obj.useAppLauncherContext().entrypoint === ref(dependencyMap[6]).AppLauncherEntrypoint.VOICE) {
    obj = { renderScrollComponent: tmp };
    ({ ListHeaderComponent: obj2.ListHeaderComponent, animatedOnScroll: obj2.onScroll, contentContainerStyle: obj2.contentContainerStyle, scrollIndicatorInsets: obj2.scrollIndicatorInsets, renderItem: obj2.renderItem, getItemType: obj2.getItemType, data: obj2.data, automaticallyAdjustsScrollIndicatorInsets: obj2.automaticallyAdjustsScrollIndicatorInsets, keyboardDismissMode: obj2.keyboardDismissMode, keyboardShouldPersistTaps: obj2.keyboardShouldPersistTaps, showsVerticalScrollIndicator: obj2.showsVerticalScrollIndicator, onViewableItemsChanged: obj2.onViewableItemsChanged, viewabilityConfigCallbackPairs: obj2.viewabilityConfigCallbackPairs, animatedProps: obj2.animatedProps } = simultaneousHandlers);
    obj.overScrollMode = "never";
    obj.ref = ref;
    let tmp5 = jsx(ref(dependencyMap[7]).AnimatedFlashList, obj);
  } else {
    obj = {};
    ({ ListHeaderComponent: obj3.ListHeaderComponent, onScroll: obj3.onScroll, contentContainerStyle: obj3.contentContainerStyle, scrollIndicatorInsets: obj3.scrollIndicatorInsets, renderItem: obj3.renderItem, getItemType: obj3.getItemType, data: obj3.data, preserveScrollMomentum: obj3.preserveScrollMomentum, automaticallyAdjustsScrollIndicatorInsets: obj3.automaticallyAdjustsScrollIndicatorInsets, keyboardDismissMode: obj3.keyboardDismissMode, keyboardShouldPersistTaps: obj3.keyboardShouldPersistTaps, showsVerticalScrollIndicator: obj3.showsVerticalScrollIndicator, lockableScrollableContentOffsetY: obj3.lockableScrollableContentOffsetY, bottomViewabilityInsetRef: obj3.bottomViewabilityInsetRef, onViewableItemsChanged: obj3.onViewableItemsChanged, viewabilityConfigCallbackPairs: obj3.viewabilityConfigCallbackPairs } = simultaneousHandlers);
    obj.ref = ref;
    tmp5 = jsx(ref(dependencyMap[7]).BottomSheetFlashList, obj);
  }
  return tmp5;
});
forwardRefResult.displayName = "AppLauncherFlashList";
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherFlashList.tsx");

export default forwardRefResult;
export const useAppLauncherFlashListProps = function useAppLauncherFlashListProps(arg0) {
  return importAllResult.useContext(arg1(dependencyMap[4]).ControlsGestureScrollLock)(arg0);
};
