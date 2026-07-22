// Module ID: 13796
// Function ID: 104316
// Name: getRevealProgress
// Dependencies: []
// Exports: useBountiesRecapScroll

// Module 13796 (getRevealProgress)
let closure_0 = importAll(dependencyMap[0]);
let closure_1 = { code: "function getRevealProgress_useBountiesRecapScrollTsx1(scrollOffset,startOffset,revealHeight){if(revealHeight<=0){return 0;}return(scrollOffset-startOffset)/revealHeight;}" };
const tmp2 = () => {
  function getRevealProgress(sharedValue2, lastBountyScrollOffset, height2) {
    let num = 0;
    if (height2 > 0) {
      num = (sharedValue2 - lastBountyScrollOffset) / height2;
    }
    return num;
  }
  getRevealProgress.__closure = {};
  getRevealProgress.__workletHash = 9769647749947;
  getRevealProgress.__initData = closure_1;
  return getRevealProgress;
}();
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/quests/native/BountiesModal/useBountiesRecapScroll.tsx");

export const RECAP_SNAP_EPSILON = 2;
export const getRevealProgress = tmp2;
export const useBountiesRecapScroll = function useBountiesRecapScroll(listRef) {
  listRef = listRef.listRef;
  const React = listRef;
  const enabled = listRef.enabled;
  let closure_1 = enabled;
  const offsets = listRef.offsets;
  const items = [listRef];
  const callback = React.useCallback((offset) => {
    if (null != listRef.current) {
      const current = listRef.current;
      const obj = { offset, animated: true };
      current.scrollToOffset(obj);
    }
  }, items);
  const items1 = [offsets.lastBounty, callback];
  const items2 = [enabled, , , , ];
  ({ fullRecap: arr3[1], lastBounty: arr3[2], revealHeight: arr3[3] } = offsets);
  items2[4] = callback;
  const callback1 = React.useCallback(() => {
    callback(offsets.lastBounty);
  }, items1);
  const callback2 = React.useCallback((arg0) => {
    if (enabled) {
      if (arg0 > offsets.lastBounty) {
        if (offsets(arg0, offsets.lastBounty, offsets.revealHeight) >= 0.25) {
          let lastBounty = offsets.fullRecap;
        } else {
          lastBounty = offsets.lastBounty;
        }
        const _Math = Math;
        if (Math.abs(arg0 - lastBounty) >= 2) {
          callback(lastBounty);
        }
      }
    }
  }, items2);
  const items3 = [enabled, callback2];
  return {
    scrollToLastBounty: callback1,
    handleRecapMomentumEnd: React.useCallback((contentOffset) => {
      if (enabled) {
        callback2(contentOffset.contentOffset.y);
      }
    }, items3)
  };
};
