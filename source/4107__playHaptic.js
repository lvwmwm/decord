// Module ID: 4107
// Function ID: 33995
// Name: _playHaptic
// Dependencies: [5, 27, 4103]
// Exports: playHaptic

// Module 4107 (_playHaptic)
import asyncGeneratorStep from "asyncGeneratorStep";
import { Platform } from "get ActivityIndicator";

async function _playHaptic(arg0, arg1, arg2, arg3) {
  if (obj) {
    return obj.resume();
  } else {
    if (obj2.isEnabled()) {
      return outer2_0(outer2_1[2]).triggerPattern(arg1, arg2);
    }
    obj2 = outer2_0(outer2_1[2]);
  }
}

export const playHaptic = function playHaptic(arg0, arg1, arg2) {
  return _playHaptic(...arguments);
};
