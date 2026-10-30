// Module ID: 9745
// Function ID: 9746
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 9745 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f95284 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f95284);
  new Promise(f95284);
  return obj;
}
