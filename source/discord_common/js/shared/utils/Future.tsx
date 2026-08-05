// Module ID: 8125
// Function ID: 8126
// Name: Future
// Dependencies: [2]

// Module 8125 (Future)
const result = require("set").fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export const Future = function Future() {
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise((resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  });
  return obj;
}.prototype;
