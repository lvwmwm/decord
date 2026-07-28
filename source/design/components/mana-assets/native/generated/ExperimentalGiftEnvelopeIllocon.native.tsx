// Module ID: 7002
// Function ID: 59774
// Name: ExperimentalGiftEnvelopeIllocon
// Dependencies: [33, 5119, 7003, 2]
// Exports: ExperimentalGiftEnvelopeIllocon

// Module 7002 (ExperimentalGiftEnvelopeIllocon)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/ExperimentalGiftEnvelopeIllocon.native.tsx");

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
  obj = { uri: importDefault(7003) };
  obj.source = obj;
  obj = { width: num, height: num };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5119), { width: num, height: num });
};
