// Module ID: 10872
// Function ID: 84327
// Name: fetchBountiesAndDispatch
// Dependencies: [5, 4222, 6940, 653, 686, 6969, 10873, 6957, 4030, 6697, 6961, 507, 6939, 2]
// Exports: claimBountyReward, fetchBountyPreview, fetchQuestHomeBounties, setBountyVideoProgress

// Module 10872 (fetchBountiesAndDispatch)
import AdCreativeType from "AdCreativeType";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { Endpoints } from "ME";

const require = arg1;
function fetchBountiesAndDispatch() {
  return _fetchBountiesAndDispatch(...arguments);
}
function _fetchBountiesAndDispatch() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchQuestHomeBounties() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchBountyPreview() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _claimBountyReward() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/quests/BountyActionCreators.tsx");

export const fetchQuestHomeBounties = function fetchQuestHomeBounties(arg0) {
  return _fetchQuestHomeBounties(...arguments);
};
export const fetchBountyPreview = function fetchBountyPreview(arg0, arg1) {
  return _fetchBountyPreview(...arguments);
};
export const setBountyVideoProgress = function setBountyVideoProgress(bountyId, arg1) {
  let obj = require(6961) /* isAdSessionExpired */;
  if (null != obj.getCurrentAdSession()) {
    const orRefreshAdSession = require(6961) /* isAdSessionExpired */.getOrRefreshAdSession(true);
    const obj2 = require(6961) /* isAdSessionExpired */;
    obj = { type: "BOUNTIES_VIDEO_PROGRESS_UPDATE", bountyId };
    ({ timestampSec: obj4.timestampSec, maxTimestampSec: obj4.maxTimestampSec, duration: obj4.duration } = arg1);
    importDefault(686).dispatch(obj);
    const obj3 = importDefault(686);
  }
};
export const claimBountyReward = function claimBountyReward(id, arg1) {
  return _claimBountyReward(...arguments);
};
