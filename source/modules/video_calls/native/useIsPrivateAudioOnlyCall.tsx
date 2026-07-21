// Module ID: 10199
// Function ID: 78726
// Name: areParticipantStatesEqual
// Dependencies: []
// Exports: default

// Module 10199 (areParticipantStatesEqual)
function areParticipantStatesEqual(arg0, arg1) {
  let tmp;
  let tmp2;
  [, tmp] = arg0;
  [, tmp2] = arg1;
  return tmp === tmp2;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const isActivityParticipant = arg1(dependencyMap[6]).isActivityParticipant;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/video_calls/native/useIsPrivateAudioOnlyCall.tsx");

export default function useIsPrivateAudioOnlyCall(id) {
  const arg1 = id;
  const items = [closure_4];
  const items1 = [id];
  let tmp = embeddedActivitiesForChannel.getEmbeddedActivitiesForChannel(id.id).length > 0;
  if (!tmp) {
    tmp = isActivityParticipant(callback(obj.useStateFromStores(items, () => {
      const items = [store.getSelectedParticipant(arg0.id), store.getParticipantsVersion(arg0.id)];
      return items;
    }, items1, areParticipantStatesEqual), 1)[0]);
  }
  const dependencyMap = tmp;
  const obj = arg1(dependencyMap[7]);
  const items2 = [closure_7, closure_6, closure_5];
  const items3 = [id, tmp];
  return arg1(dependencyMap[7]).useStateFromStores(items2, (self) => {
    let isPrivateResult = self.isPrivate();
    if (isPrivateResult) {
      isPrivateResult = !closure_7.hasVideo(self.id);
    }
    if (isPrivateResult) {
      isPrivateResult = !tmp;
    }
    if (isPrivateResult) {
      isPrivateResult = 0 === store2.getAllApplicationStreamsForChannel(self.id).length;
    }
    if (isPrivateResult) {
      isPrivateResult = 0 === store2.getAllActiveStreamsForChannel(self.id).length;
    }
    if (isPrivateResult) {
      isPrivateResult = !videoEnabled.isVideoEnabled();
    }
    return isPrivateResult;
  }, items3);
};
