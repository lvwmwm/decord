// Module ID: 5380
// Function ID: 5381
// Name: needsToReattach
// Dependencies: []
// Exports: needsToReattach

// Module 5380 (needsToReattach)

export function needsToReattach(current2, arg1) {
  if (arg1.length !== current2.attachedGestures.length) {
    return true;
  } else {
    let num = 0;
    if (0 < arg1.length) {
      while (arg1[num].handlerName === current2.attachedGestures[num].handlerName) {
        if (arg1[num].shouldUseReanimated !== current2.attachedGestures[num].shouldUseReanimated) {
          break;
        } else {
          num = num + 1;
        }
      }
      return true;
    }
    return false;
  }
}
