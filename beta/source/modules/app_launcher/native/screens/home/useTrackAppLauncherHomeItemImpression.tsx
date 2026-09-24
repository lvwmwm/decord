// Module ID: 12276
// Function ID: 12277
// Name: useTrackAppLauncherHomeItemImpression
// Dependencies: [19, 558, 568, 12277, 12264, 9165, 1090, 2]

// Module 12276 (useTrackAppLauncherHomeItemImpression)
import BigFlagUtilsAll from "BigFlagUtils" /* 1090 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/useTrackAppLauncherHomeItemImpression.tsx");

export const useTrackAppLauncherHomeItemImpression = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = trackAppLauncherItemImpressionOnFirstView(568).c(4);
  let obj = trackAppLauncherItemImpressionOnFirstView(568);
  trackAppLauncherItemImpressionOnFirstView = trackAppLauncherItemImpressionOnFirstView(12277).useTrackAppLauncherItemImpressionOnFirstView().trackAppLauncherItemImpressionOnFirstView;
  if (cResult[0] !== trackAppLauncherItemImpressionOnFirstView) {
    const fn = function t(viewableItems) {
      viewableItems = viewableItems.viewableItems;
      let item = viewableItems.forEach((item) => {
        item = item.item;
        if (item.type === trackAppLauncherItemImpressionOnFirstView(dependencyMap[4]).AppLauncherHomeListItemType.RECOMMENDATION_APP) {
          shelfItem1SectionPosition = item.sectionPosition;
          applicationId = item.application.id;
          let flags = tmp(tmp2[5]).getApplicationFlags(item.application);
          const tmpResult = tmp(tmp2[5]);
        } else if (item.type === tmp(tmp2[4]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD) {
          shelfItem1SectionPosition = item.sectionPosition;
          applicationId = item.item.application.id;
          flags = tmp(tmp2[5]).getApplicationFlags(item.item.application);
          const tmpResult2 = tmp(tmp2[5]);
        } else if (item.type === tmp(tmp2[4]).AppLauncherHomeListItemType.SHELF_ITEM) {
          ({ sectionPosition: shelfItem1SectionPosition, applicationId } = item);
          flags = item.section.application.flags;
        } else if (item.type === tmp(tmp2[4]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE) {
          ({ shelfItem1SectionPosition, shelfItem2SectionPosition } = item);
          applicationId = item.shelfItem1.application.id;
          const shelfItem2 = item.shelfItem2;
          if (shelfItem2 != null) {
            const id = shelfItem2.application.id;
          }
          flags = item.shelfItem1.application.flags;
          const shelfItem22 = item.shelfItem2;
          if (shelfItem22 != null) {
            const flags2 = shelfItem22.application.flags;
          }
        }
        const obj = { itemKey: "sectionName:" + item.sectionName + " applicationId:" + applicationId, sectionName: item.sectionName, sectionPosition: shelfItem1SectionPosition, sectionOverallPosition: item.sectionOverallPosition, applicationId, applicationFlags: BigFlagUtilsAll.asUintN(32, flags) };
        closure_1_0(obj);
        if (tmp7) {
          const obj2 = { itemKey: null, sectionName: null, sectionPosition: null, sectionOverallPosition: null, applicationId: null, applicationFlags: null };
          const _HermesInternal = HermesInternal;
          obj2.itemKey = "sectionName:" + item.sectionName + " applicationId:" + id;
          obj2.sectionName = item.sectionName;
          obj2.sectionPosition = shelfItem2SectionPosition;
          obj2.sectionOverallPosition = item.sectionOverallPosition;
          obj2.applicationId = id;
          let asUintNResult;
          if (null != flags2) {
            asUintNResult = require("BigFlagUtils").asUintN(32, flags2);
            const tmp5Result = require("BigFlagUtils");
          }
          obj2.applicationFlags = asUintNResult;
          closure_1_0(obj2);
        }
      });
    };
    cResult[0] = trackAppLauncherItemImpressionOnFirstView;
    cResult[1] = fn;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  if (cResult[2] !== tmp2) {
    const obj3 = { trackAppLauncherHomeItemImpression: tmp2 };
    cResult[2] = tmp2;
    cResult[3] = obj3;
    let tmp3 = obj3;
  } else {
    tmp3 = cResult[3];
  }
  return tmp3;
}) : (() => {
  trackAppLauncherItemImpressionOnFirstView = trackAppLauncherItemImpressionOnFirstView(12277).useTrackAppLauncherItemImpressionOnFirstView().trackAppLauncherItemImpressionOnFirstView;
  let obj2 = { trackAppLauncherHomeItemImpression: null };
  const items = [trackAppLauncherItemImpressionOnFirstView];
  obj2.trackAppLauncherHomeItemImpression = noop.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    let item = viewableItems.forEach((item) => {
      item = item.item;
      if (item.type === trackAppLauncherItemImpressionOnFirstView(dependencyMap[4]).AppLauncherHomeListItemType.RECOMMENDATION_APP) {
        shelfItem1SectionPosition = item.sectionPosition;
        applicationId = item.application.id;
        let flags = tmp(tmp2[5]).getApplicationFlags(item.application);
        const tmpResult = tmp(tmp2[5]);
      } else if (item.type === tmp(tmp2[4]).AppLauncherHomeListItemType.RECOMMENDATION_BANNER_CARD) {
        shelfItem1SectionPosition = item.sectionPosition;
        applicationId = item.item.application.id;
        flags = tmp(tmp2[5]).getApplicationFlags(item.item.application);
        const tmpResult2 = tmp(tmp2[5]);
      } else if (item.type === tmp(tmp2[4]).AppLauncherHomeListItemType.SHELF_ITEM) {
        ({ sectionPosition: shelfItem1SectionPosition, applicationId } = item);
        flags = item.section.application.flags;
      } else if (item.type === tmp(tmp2[4]).AppLauncherHomeListItemType.SHELF_ITEM_TUPLE) {
        ({ shelfItem1SectionPosition, shelfItem2SectionPosition } = item);
        applicationId = item.shelfItem1.application.id;
        const shelfItem2 = item.shelfItem2;
        if (shelfItem2 != null) {
          const id = shelfItem2.application.id;
        }
        flags = item.shelfItem1.application.flags;
        const shelfItem22 = item.shelfItem2;
        if (shelfItem22 != null) {
          const flags2 = shelfItem22.application.flags;
        }
      }
      const obj = { itemKey: "sectionName:" + item.sectionName + " applicationId:" + applicationId, sectionName: item.sectionName, sectionPosition: shelfItem1SectionPosition, sectionOverallPosition: item.sectionOverallPosition, applicationId, applicationFlags: BigFlagUtilsAll.asUintN(32, flags) };
      closure_1_0(obj);
      if (tmp7) {
        const obj2 = { itemKey: null, sectionName: null, sectionPosition: null, sectionOverallPosition: null, applicationId: null, applicationFlags: null };
        const _HermesInternal = HermesInternal;
        obj2.itemKey = "sectionName:" + item.sectionName + " applicationId:" + id;
        obj2.sectionName = item.sectionName;
        obj2.sectionPosition = shelfItem2SectionPosition;
        obj2.sectionOverallPosition = item.sectionOverallPosition;
        obj2.applicationId = id;
        let asUintNResult;
        if (null != flags2) {
          asUintNResult = require("BigFlagUtils").asUintN(32, flags2);
          const tmp5Result = require("BigFlagUtils");
        }
        obj2.applicationFlags = asUintNResult;
        closure_1_0(obj2);
      }
    });
  }, items);
  return obj2;
});
