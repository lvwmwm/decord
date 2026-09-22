// Module ID: 9422
// Function ID: 9423
// Name: Future
// Dependencies: [2]

// Module 9422 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export const Future = function Future() {
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise((resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  });
  return obj;
}.prototype;
