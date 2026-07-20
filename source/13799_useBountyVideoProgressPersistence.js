// Module ID: 13799
// Function ID: 104385
// Name: useBountyVideoProgressPersistence
// Dependencies: []
// Exports: useBountyVideoProgressPersistence

// Module 13799 (useBountyVideoProgressPersistence)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const QuestsExperimentLocations = arg1(dependencyMap[3]).QuestsExperimentLocations;
let closure_6 = {};
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/quests/native/BountiesModal/useBountyVideoProgressPersistence.tsx");

export const useBountyVideoProgressPersistence = function useBountyVideoProgressPersistence(bountyId) {
  bountyId = bountyId.bountyId;
  const arg1 = bountyId;
  const dependencyMap = bountyId.endMode;
  let callback;
  let React;
  let closure_4;
  let constants;
  let closure_6;
  let obj = arg1(dependencyMap[4]);
  const bountiesExperience = obj.useBountiesExperience(constants.VIDEO_MODAL_MOBILE);
  callback = tmp2;
  const first = callback(React.useState(() => {
    if (tmp2) {
      let bountyVideoProgress = ref2.getBountyVideoProgress(bountyId);
      if (null == bountyVideoProgress) {
        bountyVideoProgress = closure_6;
      } else if (endMode === bountyId(endMode[5]).BountyVideoEndMode.LOOP) {
        const duration = bountyVideoProgress.duration;
        let tmp10 = duration > 0;
        if (tmp10) {
          tmp10 = tmp9 >= duration - 1;
        }
      }
      return bountyVideoProgress;
    } else {
      return closure_6;
    }
  }), 1)[0];
  React = React.useRef(0);
  closure_4 = React.useRef(first.timestampSec);
  constants = React.useRef(first.maxTimestampSec);
  closure_6 = React.useRef(first.duration);
  obj = {
    initialProgress: first,
    handleProgress: React.useCallback((current, current2, current3) => {
      closure_4.current = current3;
      closure_5.current = current;
      closure_6.current = current2;
      let tmp = tmp2;
      if (tmp2) {
        tmp = current3 >= ref.current;
      }
      if (tmp) {
        ref.current = current3 + 1;
        let obj = bountyId(endMode[6]);
        obj = { timestampSec: current3, maxTimestampSec: current, duration: current2 };
        const result = obj.setBountyVideoProgress(bountyId, obj);
      }
    }, items),
    flushProgress: React.useCallback(() => {
      if (tmp2) {
        let obj = bountyId(endMode[6]);
        obj = { timestampSec: ref2.current, maxTimestampSec: ref3.current, duration: ref4.current };
        const result = obj.setBountyVideoProgress(bountyId, obj);
        const tmp2 = endMode;
      }
    }, items1)
  };
  const items = [bountiesExperience.ownedByVerticalScrollExperiment || bountiesExperience.stage1Enabled, bountyId];
  const items1 = [bountiesExperience.ownedByVerticalScrollExperiment || bountiesExperience.stage1Enabled, bountyId];
  return obj;
};
