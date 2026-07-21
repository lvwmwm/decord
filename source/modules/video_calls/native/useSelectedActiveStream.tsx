// Module ID: 12603
// Function ID: 96876
// Name: useSelectedActiveStream
// Dependencies: []
// Exports: default

// Module 12603 (useSelectedActiveStream)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/video_calls/native/useSelectedActiveStream.tsx");

export default function useSelectedActiveStream(arg0) {
  const arg1 = arg0;
  const items = [closure_2, closure_3];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => {
    const selectedParticipantId = selectedParticipantId.getSelectedParticipantId(arg0.id);
    let activeStreamForStreamKey = null;
    if (null != selectedParticipantId) {
      activeStreamForStreamKey = activeStreamForStreamKey.getActiveStreamForStreamKey(selectedParticipantId);
    }
    return activeStreamForStreamKey;
  });
};
