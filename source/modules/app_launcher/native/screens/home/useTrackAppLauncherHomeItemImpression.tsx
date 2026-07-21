// Module ID: 11208
// Function ID: 87258
// Name: useTrackAppLauncherHomeItemImpression
// Dependencies: []
// Exports: useTrackAppLauncherHomeItemImpression

// Module 11208 (useTrackAppLauncherHomeItemImpression)
let closure_3 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/app_launcher/native/screens/home/useTrackAppLauncherHomeItemImpression.tsx");

export const useTrackAppLauncherHomeItemImpression = function useTrackAppLauncherHomeItemImpression() {
  let obj = arg1(dependencyMap[1]);
  const trackAppLauncherItemImpressionOnFirstView = obj.useTrackAppLauncherItemImpressionOnFirstView().trackAppLauncherItemImpressionOnFirstView;
  const arg1 = trackAppLauncherItemImpressionOnFirstView;
  obj = {
    trackAppLauncherHomeItemImpression: React.useCallback((viewableItems) => {
      viewableItems = viewableItems.viewableItems;
      const item = viewableItems.forEach((item) => {
        let applicationId;
        let shelfItem1SectionPosition;
        let shelfItem2SectionPosition;
        item = item.item;
        if (item.type === callback(closure_2[2]).AppLauncherHomeListItemType.RECOMMENDATION_APP) {
          shelfItem1SectionPosition = item.sectionPosition;
          applicationId = item.application.id;
          let flags = callback(closure_2[3]).getApplicationFlags(item.application);
          const obj2 = callback(closure_2[3]);
        } else if (item.type === callback(closure_2[2]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD) {
          shelfItem1SectionPosition = item.sectionPosition;
          applicationId = item.item.application.id;
          let obj = callback(closure_2[3]);
          flags = obj.getApplicationFlags(item.item.application);
        } else if (item.type === callback(closure_2[2]).AppLauncherHomeListItemType.SHELF_ITEM) {
          ({ sectionPosition: shelfItem1SectionPosition, applicationId } = item);
          flags = item.section.application.flags;
        } else if (item.type === callback(closure_2[2]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE) {
          ({ shelfItem1SectionPosition, shelfItem2SectionPosition } = item);
          applicationId = item.shelfItem1.application.id;
          const shelfItem2 = item.shelfItem2;
          if (null != shelfItem2) {
            const id = shelfItem2.application.id;
          }
          flags = item.shelfItem1.application.flags;
          const shelfItem22 = item.shelfItem2;
          if (null != shelfItem22) {
            const flags2 = shelfItem22.application.flags;
          }
        }
        obj = { itemKey: "sectionName:" + item.sectionName + " applicationId:" + applicationId, sectionName: item.sectionName, sectionPosition: shelfItem1SectionPosition, sectionOverallPosition: item.sectionOverallPosition, applicationId, applicationFlags: callback2(closure_2[4]).asUintN(32, flags) };
        callback(obj);
        if (tmp7) {
          obj = {};
          const _HermesInternal = HermesInternal;
          obj.itemKey = "sectionName:" + item.sectionName + " applicationId:" + id;
          obj.sectionName = item.sectionName;
          obj.sectionPosition = shelfItem2SectionPosition;
          obj.sectionOverallPosition = item.sectionOverallPosition;
          obj.applicationId = id;
          let asUintNResult;
          if (null != flags2) {
            asUintNResult = callback2(closure_2[4]).asUintN(32, flags2);
            const obj6 = callback2(closure_2[4]);
          }
          obj.applicationFlags = asUintNResult;
          callback(obj);
          const tmp8 = callback;
        }
      });
    }, items)
  };
  const items = [trackAppLauncherItemImpressionOnFirstView];
  return obj;
};
