// Module ID: 8591
// Function ID: 8592
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 8591 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f97564 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f97564);
  new Promise(f97564);
  return obj;
}
