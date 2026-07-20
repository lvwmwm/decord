// Module ID: 8488
// Function ID: 67795
// Name: useMaybeTrackProfileFrameViewed
// Dependencies: []
// Exports: default

// Module 8488 (useMaybeTrackProfileFrameViewed)
const _module = require(dependencyMap[0]);
({ useEffect: closure_2, useRef: closure_3 } = _module);
let closure_4 = importDefault(dependencyMap[1]);
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/collectibles/profile_frames/hooks/useMaybeTrackProfileFrameViewed.tsx");

export default function useMaybeTrackProfileFrameViewed(skuId) {
  skuId = skuId.skuId;
  const require = skuId;
  const openedAt = skuId.openedAt;
  const dependencyMap = openedAt;
  ({ context: closure_2, analyticsLocations: closure_3 } = skuId);
  const items = [closure_4];
  const stateFromStores = require(dependencyMap[2]).useStateFromStores(items, () => stateFromStores.getProductFetch(skuId));
  closure_4 = stateFromStores;
  let closure_5 = callback2(undefined);
  let closure_6 = callback2(undefined);
  let closure_7 = callback2(undefined);
  let closure_8 = callback2(false);
  const items1 = [skuId, openedAt, stateFromStores];
  callback(() => {
    if (null != skuId) {
      if (null != openedAt) {
        let tmp3 = ref2.current === skuId;
        if (tmp3) {
          tmp3 = ref3.current === openedAt;
        }
        if (!tmp3) {
          ref2.current = skuId;
          ref3.current = openedAt;
          ref4.current = false;
          ref.current = undefined;
        }
        const _Date = Date;
        const timestamp = Date.now();
        if (ref.current == null) {
          tmp12.current = timestamp - openedAt;
        }
        let state;
        if (null != stateFromStores) {
          state = stateFromStores.state;
        }
        let current = "success" !== state;
        if (!current) {
          current = ref4.current;
        }
        if (!current) {
          ref4.current = true;
          let obj = skuId(openedAt[3]);
          obj = { profileUi: "PROFILE_FRAME", timeToInteractiveMs: ref.current, timeToLoadMs: timestamp - openedAt };
          let diff;
          if (null != stateFromStores.startedAt) {
            if (null != stateFromStores.endedAt) {
              diff = stateFromStores.endedAt - stateFromStores.startedAt;
            }
          }
          obj.timeToFetchMs = diff;
          obj.viewStartedAt = openedAt;
          obj.fetchStartedAt = stateFromStores.startedAt;
          obj.analyticsLocations = closure_3;
          const merged = Object.assign(closure_2);
          const result = obj.maybeTrackUserProfileUiViewed(obj);
        }
      }
    }
  }, items1);
};
