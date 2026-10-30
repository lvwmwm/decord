// Module ID: 16865
// Function ID: 16866
// Name: useBountyAppStoreOverlayPlayback
// Dependencies: [19, 16866, 16868, 16869, 2]
// Exports: getBountyVideoEndMode, useBountyAppStoreOverlayPlayback

// Module 16865 (useBountyAppStoreOverlayPlayback)
import useBountyVideoEndAppStoreOverlay from "useBountyVideoEndAppStoreOverlay" /* 16866 */;
import useBountiesModalTiming from "useBountiesModalTiming" /* 16868 */;
import useBountyPauseAppStoreSheet from "useBountyPauseAppStoreSheet" /* 16869 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountyAppStoreOverlayPlayback.tsx");

export function getBountyVideoEndMode(bounty) {
  const obj = useBountyVideoEndAppStoreOverlay;
  const result = obj.canUseBountyVideoEndAppStoreOverlay(bounty);
  const BountyVideoEndMode = useBountiesModalTiming.BountyVideoEndMode;
  return result ? BountyVideoEndMode.APP_STORE_LOOP : BountyVideoEndMode.END_CARD;
}
export function useBountyAppStoreOverlayPlayback(handleVideoPaused) {
  let bounty;
  let callback2;
  let endMode;
  let handleVideoEnd;
  let isActive;
  let playerRef;
  let showEndCard;
  let sourceQuestContent;
  ({ bounty, sourceQuestContent, isActive, endMode, handleVideoEnd } = handleVideoPaused);
  handleVideoPaused = handleVideoPaused.handleVideoPaused;
  const handleVideoResumed = handleVideoPaused.handleVideoResumed;
  const onPaused = handleVideoPaused.onPaused;
  let handleVideoPausedForAppStore;
  ({ playerRef, showEndCard } = handleVideoPaused);
  const obj = useBountyVideoEndAppStoreOverlay;
  const onVideoEndForAppStore = obj.useBountyVideoEndAppStoreOverlay({ bounty, sourceQuestContent, isActive, endMode, onOverlayUnavailable: showEndCard }).onVideoEndForAppStore;
  const obj2 = useBountyVideoEndAppStoreOverlay;
  const bountyVideoEndAppStoreContext = obj2.useBountyVideoEndAppStoreContext();
  let flag;
  if (bountyVideoEndAppStoreContext != null) {
    flag = bountyVideoEndAppStoreContext.isVideoEndAppStoreOverlayVisible;
  }
  if (flag == null) {
    flag = false;
  }
  const tmpResult = useBountyPauseAppStoreSheet;
  handleVideoPausedForAppStore = tmpResult.useBountyPauseAppStoreSheet({ bounty, sourceQuestContent, isActive, playerRef }).handleVideoPausedForAppStore;
  const items = [handleVideoPaused, handleVideoPausedForAppStore, onPaused];
  const items1 = [handleVideoResumed];
  const callback = react.useCallback((arg0) => {
    handleVideoPaused(arg0);
    if (onPaused != null) {
      onPaused();
    }
    handleVideoPausedForAppStore(arg0);
  }, items);
  const items2 = [handleVideoEnd, onVideoEndForAppStore];
  const callback1 = react.useCallback((arg0) => {
    handleVideoResumed(arg0);
  }, items1);
  const obj3 = { isVideoEndAppStoreOverlayVisible: flag, shouldRepeatVideo: endMode === useBountiesModalTiming.BountyVideoEndMode.APP_STORE_LOOP, handlePaused: callback, handleResumed: callback1, handleVideoEndWithAppStore: callback2 };
  callback2 = react.useCallback(() => {
    handleVideoEnd();
    onVideoEndForAppStore();
  }, items2);
  return obj3;
}
