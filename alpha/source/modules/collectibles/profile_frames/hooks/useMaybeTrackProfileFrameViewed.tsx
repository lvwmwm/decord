// Module ID: 8323
// Function ID: 8324
// Name: useMaybeTrackProfileFrameViewed
// Dependencies: [19, 7257, 573, 8299, 2]
// Exports: default

// Module 8323 (useMaybeTrackProfileFrameViewed)
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8299 */;
import react from "react" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7257 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ useEffect: c2, useRef: c3 } = react);
let result = size.fileFinishedImporting("modules/collectibles/profile_frames/hooks/useMaybeTrackProfileFrameViewed.tsx");

export default function useMaybeTrackProfileFrameViewed(skuId) {
  let closure_2;
  let closure_3;
  skuId = skuId.skuId;
  const openedAt = skuId.openedAt;
  ({ context: closure_2, analyticsLocations: closure_3 } = skuId);
  let stateFromStores;
  let obj = skuId(openedAt[2]);
  const items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => CollectiblesCategoryStore.getProductFetch(skuId));
  const ref = analyticsLocations(undefined);
  const ref2 = analyticsLocations(undefined);
  const ref3 = analyticsLocations(undefined);
  const ref4 = analyticsLocations(false);
  const items1 = [skuId, openedAt, stateFromStores];
  closure_2(() => {
    let diff;
    if (null != skuId) {
      if (null != openedAt) {
        let tmp3 = ref2.current === tmp;
        const tmp24 = ref2;
        if (tmp3) {
          tmp3 = ref3.current === tmp23;
        }
        if (!tmp3) {
          tmp24.current = skuId;
          ref3.current = openedAt;
          ref4.current = false;
          ref.current = undefined;
        }
        const _Date = Date;
        const timestamp = Date.now();
        if (ref.current == null) {
          ref.current = timestamp - openedAt;
        }
        let state;
        if (stateFromStores != null) {
          state = tmp10.state;
        }
        const current = "success" !== state || ref4.current;
        if (!current) {
          ref4.current = true;
          const obj = { profileUi: "PROFILE_FRAME", timeToInteractiveMs: ref.current, timeToLoadMs: timestamp - openedAt, timeToFetchMs: diff, viewStartedAt: openedAt, fetchStartedAt: stateFromStores.startedAt, analyticsLocations };
          diff = undefined;
          const maybeTrackUserProfileUiViewed = UserProfileAnalyticsUtils.maybeTrackUserProfileUiViewed;
          UserProfileAnalyticsUtils;
          if (null != stateFromStores.startedAt) {
            if (null != stateFromStores.endedAt) {
              diff = tmp10.endedAt - tmp10.startedAt;
            }
          }
          const merged = Object.assign(closure_2);
          const result = maybeTrackUserProfileUiViewed(obj);
        }
      }
    }
  }, items1);
};
