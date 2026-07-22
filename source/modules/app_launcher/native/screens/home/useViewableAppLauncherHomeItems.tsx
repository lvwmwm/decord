// Module ID: 11196
// Function ID: 87230
// Name: useViewableAppLauncherHomeItems
// Dependencies: []
// Exports: useViewableAppLauncherHomeItems

// Module 11196 (useViewableAppLauncherHomeItems)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/app_launcher/native/screens/home/useViewableAppLauncherHomeItems.tsx");

export const useViewableAppLauncherHomeItems = function useViewableAppLauncherHomeItems() {
  let obj = arg1(dependencyMap[2]);
  const sharedValue = obj.useSharedValue(false);
  const arg1 = sharedValue;
  const sharedValue1 = arg1(dependencyMap[2]).useSharedValue(false);
  const dependencyMap = sharedValue1;
  const ref = React.useRef({});
  const React = ref;
  obj = {
    handleViewableItemsChanged: React.useCallback((viewableItems) => {
      viewableItems = viewableItems.viewableItems;
      const item = viewableItems.forEach((item) => {
        item = item.item;
        let value = item.type !== store(store2[3]).AppLauncherHomeListItemType.SHELF_ITEM;
        if (!value) {
          value = store.get();
        }
        if (!value) {
          const result = store.set(true);
        }
        value = item.type !== store(store2[3]).AppLauncherHomeListItemType.LEARN_MORE;
        if (!value) {
          value = store2.get();
        }
        if (!value) {
          const result1 = store2.set(true);
        }
        let tmp9 = item.type !== store(store2[3]).AppLauncherHomeListItemType.RECOMMENDATION_SECTION_HEADER;
        if (tmp9) {
          tmp9 = item.type !== store(store2[3]).AppLauncherHomeListItemType.SECTION_HEADER;
        }
        if (!tmp9) {
          tmp9 = null != ref.current[item.sectionName];
        }
        if (!tmp9) {
          ref.current[item.sectionName] = true;
          let obj = store(store2[4]);
          obj = { type: store(store2[5]).ImpressionTypes.VIEW, name: store(store2[5]).ImpressionNames.APP_LAUNCHER_SECTION };
          obj = {};
          ({ sectionName: obj3.section_name, numItems: obj3.num_items, numVisibleItems: obj3.num_visible_items } = item);
          obj.source = closure_3.entrypoint();
          obj.properties = obj;
          obj.trackImpression(obj);
        }
      });
    }, items),
    hasViewedActivityItem: sharedValue,
    hasViewedLearnMoreItem: sharedValue1
  };
  const items = [sharedValue, sharedValue1, ref];
  return obj;
};
