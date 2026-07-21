// Module ID: 4104
// Function ID: 33972
// Name: _playHaptic
// Dependencies: []
// Exports: playHaptic

// Module 4104 (_playHaptic)
async function _playHaptic(arg0, arg1, arg2, arg3) {
  if (obj) {
    return obj.resume();
  } else {
    if (obj2.isEnabled()) {
      return callback(closure_1[2]).triggerPattern(arg1, arg2);
    }
    const obj2 = callback(closure_1[2]);
  }
}
let closure_2 = importDefault(dependencyMap[0]);
const Platform = arg1(dependencyMap[1]).Platform;

export const playHaptic = function playHaptic(arg0, arg1, arg2) {
  return _playHaptic(...arguments);
};
