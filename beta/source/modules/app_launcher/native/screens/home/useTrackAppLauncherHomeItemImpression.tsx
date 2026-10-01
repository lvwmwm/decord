// Module ID: 11582
// Function ID: 11583
// Name: useTrackAppLauncherHomeItemImpression
// Dependencies: [19, 11583, 11570, 8321, 1086, 2]
// Exports: useTrackAppLauncherHomeItemImpression

// Module 11582 (useTrackAppLauncherHomeItemImpression)
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let viewableItems;

const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/useTrackAppLauncherHomeItemImpression.tsx");

export const useTrackAppLauncherHomeItemImpression = function useTrackAppLauncherHomeItemImpression() {
  let items;
  let trackAppLauncherItemImpressionOnFirstView;
  let obj = trackAppLauncherItemImpressionOnFirstView(11583);
  trackAppLauncherItemImpressionOnFirstView = obj.useTrackAppLauncherItemImpressionOnFirstView().trackAppLauncherItemImpressionOnFirstView;
  let obj2 = {
    trackAppLauncherHomeItemImpression: react.useCallback((viewableItems) => {
      viewableItems = viewableItems.viewableItems;
      let item = viewableItems.forEach((item) => {
        let applicationId;
        let asUintNResult;
        let flags;
        let flags2;
        let id;
        let obj4;
        let shelfItem1SectionPosition;
        let shelfItem2SectionPosition;
        item = item.item;
        if (item.type === trackAppLauncherItemImpressionOnFirstView(dependencyMap[2]).AppLauncherHomeListItemType.RECOMMENDATION_APP) {
          shelfItem1SectionPosition = item.sectionPosition;
          applicationId = item.application.id;
          const tmpResult = trackAppLauncherItemImpressionOnFirstView(dependencyMap[3]);
          flags = tmpResult.getApplicationFlags(item.application);
        } else if (item.type === trackAppLauncherItemImpressionOnFirstView(dependencyMap[2]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD) {
          shelfItem1SectionPosition = item.sectionPosition;
          applicationId = item.item.application.id;
          const tmpResult2 = trackAppLauncherItemImpressionOnFirstView(dependencyMap[3]);
          flags = tmpResult2.getApplicationFlags(item.item.application);
        } else if (item.type === trackAppLauncherItemImpressionOnFirstView(dependencyMap[2]).AppLauncherHomeListItemType.SHELF_ITEM) {
          ({ sectionPosition: shelfItem1SectionPosition, applicationId } = item);
          flags = item.section.application.flags;
        } else if (item.type === trackAppLauncherItemImpressionOnFirstView(dependencyMap[2]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE) {
          ({ shelfItem1SectionPosition, shelfItem2SectionPosition } = item);
          applicationId = item.shelfItem1.application.id;
          const shelfItem2 = item.shelfItem2;
          if (shelfItem2 != null) {
            id = shelfItem2.application.id;
          }
          flags = item.shelfItem1.application.flags;
          const shelfItem22 = item.shelfItem2;
          if (shelfItem22 != null) {
            flags2 = shelfItem22.application.flags;
          }
        }
        const obj = { itemKey: "sectionName:" + item.sectionName + " applicationId:" + applicationId, sectionName: item.sectionName, sectionPosition: shelfItem1SectionPosition, sectionOverallPosition: item.sectionOverallPosition, applicationId, applicationFlags: obj4.asUintN(32, flags) };
        obj4 = BigFlagUtilsAll;
        closure_1_0(obj);
        const tmp4 = closure_1_0;
        const tmp7 = null != id && null != shelfItem2SectionPosition;
        if (tmp7) {
          const _HermesInternal = HermesInternal;
          const obj2 = { itemKey: "sectionName:" + item.sectionName + " applicationId:" + id, sectionName: item.sectionName, sectionPosition: shelfItem2SectionPosition, sectionOverallPosition: item.sectionOverallPosition, applicationId: id, applicationFlags: asUintNResult };
          asUintNResult = undefined;
          if (null != flags2) {
            const tmp5Result = BigFlagUtilsAll;
            asUintNResult = tmp5Result.asUintN(32, flags2);
          }
          tmp4(obj2);
        }
      });
    }, items)
  };
  items = [trackAppLauncherItemImpressionOnFirstView];
  return obj2;
};
