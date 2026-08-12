// Module ID: 8386
// Function ID: 8387
// Name: Future
// Dependencies: [2]

// Module 8386 (Future)
const result = require("set").fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export const Future = function Future() {
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise((resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  });
  return obj;
}.prototype;
