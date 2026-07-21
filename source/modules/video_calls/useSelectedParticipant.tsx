// Module ID: 10200
// Function ID: 78731
// Name: useSelectedParticipant
// Dependencies: []
// Exports: default

// Module 10200 (useSelectedParticipant)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/video_calls/useSelectedParticipant.tsx");

export default function useSelectedParticipant(arg0) {
  const arg1 = arg0;
  const items = [closure_2];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => selectedParticipant.getSelectedParticipant(arg0.id));
};
