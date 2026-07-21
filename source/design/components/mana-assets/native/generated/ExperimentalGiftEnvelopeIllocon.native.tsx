// Module ID: 6041
// Function ID: 49975
// Name: ExperimentalGiftEnvelopeIllocon
// Dependencies: [0, 0, 4294967295, 0]
// Exports: ExperimentalGiftEnvelopeIllocon

// Module 6041 (ExperimentalGiftEnvelopeIllocon)
import { jsx } from "__exportStarResult1";

const result = require("__exportStarResult1").fileFinishedImporting("design/components/mana-assets/native/generated/ExperimentalGiftEnvelopeIllocon.native.tsx");

export const ExperimentalGiftEnvelopeIllocon = function ExperimentalGiftEnvelopeIllocon(size) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  let obj = { fadeDuration: 0 };
  obj = { uri: importDefault(dependencyMap[2]) };
  obj.source = obj;
  obj = { width: num, height: num };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(dependencyMap[1]), obj);
};
