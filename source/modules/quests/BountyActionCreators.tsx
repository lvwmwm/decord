// Module ID: 10845
// Function ID: 84138
// Name: fetchBountiesAndDispatch
// Dependencies: [5, 4222, 6941, 653, 686, 6970, 10846, 6958, 4030, 6697, 6962, 507, 6940, 2]
// Exports: claimBountyReward, fetchBountyPreview, fetchQuestHomeBounties, setBountyVideoProgress

// Module 10845 (fetchBountiesAndDispatch)
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
  let obj = require(6962) /* isAdSessionExpired */;
  if (null != obj.getCurrentAdSession()) {
    const orRefreshAdSession = require(6962) /* isAdSessionExpired */.getOrRefreshAdSession(true);
    const obj2 = require(6962) /* isAdSessionExpired */;
    obj = { type: "BOUNTIES_VIDEO_PROGRESS_UPDATE", bountyId };
    ({ timestampSec: obj4.timestampSec, maxTimestampSec: obj4.maxTimestampSec, duration: obj4.duration } = arg1);
    importDefault(686).dispatch(obj);
    const obj3 = importDefault(686);
  }
};
export const claimBountyReward = function claimBountyReward(id, arg1) {
  return _claimBountyReward(...arguments);
};
