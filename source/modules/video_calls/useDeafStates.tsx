// Module ID: 10748
// Function ID: 83524
// Name: getDeafStates
// Dependencies: [1194, 4177, 4146, 566, 2]
// Exports: default

// Module 10748 (getDeafStates)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
function getDeafStates(channel, outer2_12, outer2_9, callback3) {
  let obj = outer2_12;
  let obj2 = outer2_9;
  let obj3 = callback3;
  if (outer2_12 === undefined) {
    obj = closure_4;
  }
  if (obj2 === undefined) {
    obj2 = closure_3;
  }
  if (obj3 === undefined) {
    obj3 = _isNativeReflectConstruct;
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
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/video_calls/useDeafStates.tsx");

export default function useDeafStates(arg0) {
  const _require = arg0;
  const items = [closure_4, closure_3, _isNativeReflectConstruct];
  const items1 = [arg0];
  return _require(566).useStateFromStoresObject(items, () => outer1_5(closure_0, outer1_4, outer1_3, outer1_2), items1);
};
export { getDeafStates };
