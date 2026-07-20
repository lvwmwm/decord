// Module ID: 10613
// Function ID: 82802
// Name: useIsInvitedToSpeak
// Dependencies: []
// Exports: default

// Module 10613 (useIsInvitedToSpeak)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/stage_channels/useIsInvitedToSpeak.tsx");

export default function useIsInvitedToSpeak() {
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[2]).useStateFromStores(items, () => voiceChannelId.getVoiceChannelId());
  const obj = arg1(dependencyMap[2]);
  const items1 = [closure_3];
  const stateFromStores1 = arg1(dependencyMap[2]).useStateFromStores(items1, () => id.getId());
  const obj2 = arg1(dependencyMap[2]);
  return importDefault(dependencyMap[3])(stateFromStores1, stateFromStores) === arg1(dependencyMap[3]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
};
