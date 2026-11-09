// Module ID: 9855
// Function ID: 9856
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 9855 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f97042 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f97042);
  new Promise(f97042);
  return obj;
}
