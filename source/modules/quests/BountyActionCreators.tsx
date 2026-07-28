// Module ID: 10861
// Function ID: 84043
// Name: fetchBountiesAndDispatch
// Dependencies: [5, 4257, 5965, 653, 686, 5994, 10862, 5982, 4065, 5703, 5986, 507, 5964, 2]
// Exports: claimBountyReward, fetchBountyPreview, fetchQuestHomeBounties, setBountyVideoProgress

// Module 10861 (fetchBountiesAndDispatch)
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
  let obj = require(5986) /* isAdSessionExpired */;
  if (null != obj.getCurrentAdSession()) {
    const orRefreshAdSession = require(5986) /* isAdSessionExpired */.getOrRefreshAdSession(true);
    const obj2 = require(5986) /* isAdSessionExpired */;
    obj = { type: "BOUNTIES_VIDEO_PROGRESS_UPDATE", bountyId };
    ({ timestampSec: obj4.timestampSec, maxTimestampSec: obj4.maxTimestampSec, duration: obj4.duration } = arg1);
    importDefault(686).dispatch(obj);
    const obj3 = importDefault(686);
  }
};
export const claimBountyReward = function claimBountyReward(id, arg1) {
  return _claimBountyReward(...arguments);
};
