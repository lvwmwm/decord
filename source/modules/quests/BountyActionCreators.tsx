// Module ID: 10834
// Function ID: 84065
// Name: fetchBountiesAndDispatch
// Dependencies: []
// Exports: claimBountyReward, fetchBountyPreview, fetchQuestHomeBounties, setBountyVideoProgress

// Module 10834 (fetchBountiesAndDispatch)
function fetchBountiesAndDispatch() {
  return _fetchBountiesAndDispatch(...arguments);
}
function _fetchBountiesAndDispatch() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchBountiesAndDispatch = obj;
  return obj(...arguments);
}
function _fetchQuestHomeBounties() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchQuestHomeBounties = obj;
  return obj(...arguments);
}
function _fetchBountyPreview() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchBountyPreview = obj;
  return obj(...arguments);
}
function _claimBountyReward() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _claimBountyReward = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const Endpoints = arg1(dependencyMap[3]).Endpoints;
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/quests/BountyActionCreators.tsx");

export const fetchQuestHomeBounties = function fetchQuestHomeBounties(arg0) {
  return _fetchQuestHomeBounties(...arguments);
};
export const fetchBountyPreview = function fetchBountyPreview(arg0, arg1) {
  return _fetchBountyPreview(...arguments);
};
export const setBountyVideoProgress = function setBountyVideoProgress(bountyId, arg1) {
  let obj = arg1(dependencyMap[10]);
  if (null != obj.getCurrentAdSession()) {
    const orRefreshAdSession = arg1(dependencyMap[10]).getOrRefreshAdSession(true);
    const obj2 = arg1(dependencyMap[10]);
    obj = { type: "BOUNTIES_VIDEO_PROGRESS_UPDATE", bountyId };
    ({ timestampSec: obj4.timestampSec, maxTimestampSec: obj4.maxTimestampSec, duration: obj4.duration } = arg1);
    importDefault(dependencyMap[4]).dispatch(obj);
    const obj3 = importDefault(dependencyMap[4]);
  }
};
export const claimBountyReward = function claimBountyReward(id, arg1) {
  return _claimBountyReward(...arguments);
};
