// Module ID: 11221
// Function ID: 87329
// Name: useAppLauncherFlashListProps
// Dependencies: [31, 27, 33, 5217, 11222, 10884, 8182, 7879, 2]
// Exports: useAppLauncherFlashListProps

// Module 11221 (useAppLauncherFlashListProps)
import importAllResult from "result";
import { ScrollView } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
let forwardRefResult = importAllResult.forwardRef((simultaneousHandlers, ref) => {
  let obj = require(10884) /* useAppLauncherChatInputRefDummy */;
  if (obj.useAppLauncherContext().entrypoint === require(8182) /* AppLauncherEntrypoint */.AppLauncherEntrypoint.VOICE) {
    obj = { renderScrollComponent: tmp };
    ({ ListHeaderComponent: obj2.ListHeaderComponent, animatedOnScroll: obj2.onScroll, contentContainerStyle: obj2.contentContainerStyle, scrollIndicatorInsets: obj2.scrollIndicatorInsets, renderItem: obj2.renderItem, getItemType: obj2.getItemType, data: obj2.data, automaticallyAdjustsScrollIndicatorInsets: obj2.automaticallyAdjustsScrollIndicatorInsets, keyboardDismissMode: obj2.keyboardDismissMode, keyboardShouldPersistTaps: obj2.keyboardShouldPersistTaps, showsVerticalScrollIndicator: obj2.showsVerticalScrollIndicator, onViewableItemsChanged: obj2.onViewableItemsChanged, viewabilityConfigCallbackPairs: obj2.viewabilityConfigCallbackPairs, animatedProps: obj2.animatedProps } = simultaneousHandlers);
    obj.overScrollMode = "never";
    obj.ref = ref;
    let tmp5 = jsx(require(7879) /* defaultMVCPConfig */.AnimatedFlashList, { renderScrollComponent: tmp });
  } else {
    obj = {};
    ({ ListHeaderComponent: obj3.ListHeaderComponent, onScroll: obj3.onScroll, contentContainerStyle: obj3.contentContainerStyle, scrollIndicatorInsets: obj3.scrollIndicatorInsets, renderItem: obj3.renderItem, getItemType: obj3.getItemType, data: obj3.data, preserveScrollMomentum: obj3.preserveScrollMomentum, automaticallyAdjustsScrollIndicatorInsets: obj3.automaticallyAdjustsScrollIndicatorInsets, keyboardDismissMode: obj3.keyboardDismissMode, keyboardShouldPersistTaps: obj3.keyboardShouldPersistTaps, showsVerticalScrollIndicator: obj3.showsVerticalScrollIndicator, lockableScrollableContentOffsetY: obj3.lockableScrollableContentOffsetY, bottomViewabilityInsetRef: obj3.bottomViewabilityInsetRef, onViewableItemsChanged: obj3.onViewableItemsChanged, viewabilityConfigCallbackPairs: obj3.viewabilityConfigCallbackPairs } = simultaneousHandlers);
    obj.ref = ref;
    tmp5 = jsx(require(7879) /* defaultMVCPConfig */.BottomSheetFlashList, {});
  }
  return tmp5;
});
forwardRefResult.displayName = "AppLauncherFlashList";
const result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherFlashList.tsx");

export default forwardRefResult;
export const useAppLauncherFlashListProps = function useAppLauncherFlashListProps(arg0) {
  return importAllResult.useContext(require(11222) /* context */.ControlsGestureScrollLock)(arg0);
};
