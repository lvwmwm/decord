// Module ID: 11219
// Function ID: 87321
// Name: useTrackAppLauncherHomeItemImpression
// Dependencies: [31, 11220, 11207, 7371, 483, 2]
// Exports: useTrackAppLauncherHomeItemImpression

// Module 11219 (useTrackAppLauncherHomeItemImpression)
import result from "result";

const require = arg1;
const result = require("AppLauncherHomeListItemType").fileFinishedImporting("modules/app_launcher/native/screens/home/useTrackAppLauncherHomeItemImpression.tsx");

export const useTrackAppLauncherHomeItemImpression = function useTrackAppLauncherHomeItemImpression() {
  let obj = trackAppLauncherItemImpressionOnFirstView(11220);
  trackAppLauncherItemImpressionOnFirstView = obj.useTrackAppLauncherItemImpressionOnFirstView().trackAppLauncherItemImpressionOnFirstView;
  obj = {
    trackAppLauncherHomeItemImpression: React.useCallback((viewableItems) => {
      viewableItems = viewableItems.viewableItems;
      let item = viewableItems.forEach((item) => {
        let applicationId;
        let shelfItem1SectionPosition;
        let shelfItem2SectionPosition;
        item = item.item;
        if (item.type === trackAppLauncherItemImpressionOnFirstView(outer2_2[2]).AppLauncherHomeListItemType.RECOMMENDATION_APP) {
          shelfItem1SectionPosition = item.sectionPosition;
          applicationId = item.application.id;
          let flags = trackAppLauncherItemImpressionOnFirstView(outer2_2[3]).getApplicationFlags(item.application);
          const obj2 = trackAppLauncherItemImpressionOnFirstView(outer2_2[3]);
        } else if (item.type === trackAppLauncherItemImpressionOnFirstView(outer2_2[2]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD) {
          shelfItem1SectionPosition = item.sectionPosition;
          applicationId = item.item.application.id;
          let obj = trackAppLauncherItemImpressionOnFirstView(outer2_2[3]);
          flags = obj.getApplicationFlags(item.item.application);
        } else if (item.type === trackAppLauncherItemImpressionOnFirstView(outer2_2[2]).AppLauncherHomeListItemType.SHELF_ITEM) {
          ({ sectionPosition: shelfItem1SectionPosition, applicationId } = item);
          flags = item.section.application.flags;
        } else if (item.type === trackAppLauncherItemImpressionOnFirstView(outer2_2[2]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE) {
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
        obj = { itemKey: "sectionName:" + item.sectionName + " applicationId:" + applicationId, sectionName: item.sectionName, sectionPosition: shelfItem1SectionPosition, sectionOverallPosition: item.sectionOverallPosition, applicationId, applicationFlags: outer2_1(outer2_2[4]).asUintN(32, flags) };
        outer1_0(obj);
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
            asUintNResult = outer2_1(outer2_2[4]).asUintN(32, flags2);
            const obj6 = outer2_1(outer2_2[4]);
          }
          obj.applicationFlags = asUintNResult;
          outer1_0(obj);
          const tmp8 = outer1_0;
        }
      });
    }, items)
  };
  items = [trackAppLauncherItemImpressionOnFirstView];
  return obj;
};
