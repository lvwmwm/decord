// Module ID: 9222
// Function ID: 9223
// Name: Future
// Dependencies: [2]

// Module 9222 (Future)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export const Future = function Future() {
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise((resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  });
  return obj;
}.prototype;
