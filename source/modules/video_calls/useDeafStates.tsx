// Module ID: 10731
// Function ID: 83428
// Name: getDeafStates
// Dependencies: []
// Exports: default

// Module 10731 (getDeafStates)
function getDeafStates(channel, closure_12, closure_9, closure_7) {
  let obj = closure_12;
  let obj2 = closure_9;
  let obj3 = closure_7;
  if (closure_12 === undefined) {
    obj = closure_4;
  }
  if (obj2 === undefined) {
    obj2 = closure_3;
  }
  if (obj3 === undefined) {
    obj3 = closure_2;
  }
  let voiceState = null;
  if (null != channel) {
    const guildId = channel.getGuildId();
    voiceState = obj.getVoiceState(guildId, obj3.getId());
  }
  obj = { selfDeaf: obj2.isSelfDeaf() };
  let deaf;
  if (null != voiceState) {
    deaf = voiceState.deaf;
  }
  obj.deaf = null != deaf && deaf;
  return obj;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/video_calls/useDeafStates.tsx");

export default function useDeafStates(arg0) {
  const arg1 = arg0;
  const items = [closure_4, closure_3, closure_2];
  const items1 = [arg0];
  return arg1(dependencyMap[3]).useStateFromStoresObject(items, () => callback(arg0, closure_4, closure_3, closure_2), items1);
};
export { getDeafStates };
