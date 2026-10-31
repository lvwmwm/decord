// Module ID: 12275
// Function ID: 12276
// Name: useViewableAppLauncherHomeItems
// Dependencies: [19, 12276, 5095, 12277, 6028, 1260, 2]
// Exports: useViewableAppLauncherHomeItems

// Module 12275 (useViewableAppLauncherHomeItems)
import react from "react" /* 19 */;
import AppLauncherStore from "AppLauncherStore" /* 12276 */;
import size from "module_2" /* 2 */;

let viewableItems;

let result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/useViewableAppLauncherHomeItems.tsx");

export function useViewableAppLauncherHomeItems() {
  let items;
  let ref;
  let sharedValue;
  let sharedValue1;
  let obj = sharedValue(sharedValue1[2]);
  sharedValue = obj.useSharedValue(false);
  const obj2 = sharedValue(sharedValue1[2]);
  sharedValue1 = obj2.useSharedValue(false);
  ref = ref.useRef({});
  let obj3 = {
    handleViewableItemsChanged: ref.useCallback((viewableItems) => {
      viewableItems = viewableItems.viewableItems;
      let item = viewableItems.forEach((item) => {
        let obj3;
        item = item.item;
        const value = item.type !== sharedValue(sharedValue1[3]).AppLauncherHomeListItemType.SHELF_ITEM || closure_1_0.get();
        if (!value) {
          const result = closure_1_0.set(true);
        }
        const value2 = item.type !== tmp(tmp2[3]).AppLauncherHomeListItemType.LEARN_MORE || closure_1_1.get();
        if (!value2) {
          const result1 = closure_1_1.set(true);
        }
        const tmp11 = item.type !== tmp(tmp2[3]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER && item.type !== tmp(tmp2[3]).AppLauncherHomeListItemType.SECTION_HEADER || null != ref.current[item.sectionName];
        if (!tmp11) {
          ref.current[item.sectionName] = true;
          const obj = { type: sharedValue(sharedValue1[5]).ImpressionTypes.VIEW, name: sharedValue(sharedValue1[5]).ImpressionNames.APP_LAUNCHER_SECTION, properties: obj3 };
          const trackImpression = sharedValue(sharedValue1[4]).trackImpression;
          sharedValue(sharedValue1[4]);
          ({ sectionName: obj2.section_name, numItems: obj2.num_items, numVisibleItems: obj2.num_visible_items } = item);
          obj3 = { section_name: null, num_items: null, num_visible_items: null, source: AppLauncherStore.entrypoint() };
          trackImpression(obj);
        }
      });
    }, items),
    hasViewedActivityItem: sharedValue,
    hasViewedLearnMoreItem: sharedValue1
  };
  items = [sharedValue, sharedValue1, ref];
  return obj3;
}
