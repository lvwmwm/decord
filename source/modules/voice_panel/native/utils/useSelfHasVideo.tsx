// Module ID: 15639
// Function ID: 119435
// Name: useSelfHasVideo
// Dependencies: []
// Exports: default

// Module 15639 (useSelfHasVideo)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/voice_panel/native/utils/useSelfHasVideo.tsx");

export default function useSelfHasVideo(arg0) {
  const arg1 = arg0;
  const items = [closure_2, closure_3, closure_4];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => {
    let tmp;
    const participant = participant.getParticipant(arg0, id.getId());
    if (null != participant) {
      tmp = participant;
    }
    return arg0(closure_1[4]).canRenderParticipantVideo(tmp, closure_4);
  });
};
