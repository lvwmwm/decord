// Module ID: 6401
// Function ID: 50515
// Name: PingPongPaddleIllocon
// Dependencies: []
// Exports: PingPongPaddleIllocon

// Module 6401 (PingPongPaddleIllocon)
const jsx = require(dependencyMap[0]).jsx;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("design/components/mana-assets/native/generated/PingPongPaddleIllocon.native.tsx");

export const PingPongPaddleIllocon = function PingPongPaddleIllocon(size) {
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
