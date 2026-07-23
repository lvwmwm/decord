// Module ID: 11206
// Function ID: 87280
// Name: useViewableAppLauncherHomeItems
// Dependencies: [31, 8181, 3991, 11207, 8559, 480, 2]
// Exports: useViewableAppLauncherHomeItems

// Module 11206 (useViewableAppLauncherHomeItems)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
let result = require("module_3991").fileFinishedImporting("modules/app_launcher/native/screens/home/useViewableAppLauncherHomeItems.tsx");

export const useViewableAppLauncherHomeItems = function useViewableAppLauncherHomeItems() {
  let obj = sharedValue(sharedValue1[2]);
  sharedValue = obj.useSharedValue(false);
  sharedValue1 = sharedValue(sharedValue1[2]).useSharedValue(false);
  ref = ref.useRef({});
  obj = {
    handleViewableItemsChanged: ref.useCallback((viewableItems) => {
      viewableItems = viewableItems.viewableItems;
      let item = viewableItems.forEach((item) => {
        item = item.item;
        let value = item.type !== sharedValue(sharedValue1[3]).AppLauncherHomeListItemType.SHELF_ITEM;
        if (!value) {
          value = outer1_0.get();
        }
        if (!value) {
          const result = outer1_0.set(true);
        }
        value = item.type !== sharedValue(sharedValue1[3]).AppLauncherHomeListItemType.LEARN_MORE;
        if (!value) {
          value = outer1_1.get();
        }
        if (!value) {
          const result1 = outer1_1.set(true);
        }
        let tmp9 = item.type !== sharedValue(sharedValue1[3]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER;
        if (tmp9) {
          tmp9 = item.type !== sharedValue(sharedValue1[3]).AppLauncherHomeListItemType.SECTION_HEADER;
        }
        if (!tmp9) {
          tmp9 = null != outer1_2.current[item.sectionName];
        }
        if (!tmp9) {
          outer1_2.current[item.sectionName] = true;
          let obj = sharedValue(sharedValue1[4]);
          obj = { type: sharedValue(sharedValue1[5]).ImpressionTypes.VIEW, name: sharedValue(sharedValue1[5]).ImpressionNames.APP_LAUNCHER_SECTION };
          obj = {};
          ({ sectionName: obj3.section_name, numItems: obj3.num_items, numVisibleItems: obj3.num_visible_items } = item);
          obj.source = outer2_3.entrypoint();
          obj.properties = obj;
          obj.trackImpression(obj);
        }
      });
    }, items),
    hasViewedActivityItem: sharedValue,
    hasViewedLearnMoreItem: sharedValue1
  };
  items = [sharedValue, sharedValue1, ref];
  return obj;
};
