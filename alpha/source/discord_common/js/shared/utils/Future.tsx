// Module ID: 9487
// Function ID: 9488
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 9487 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f102055 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f102055);
  new Promise(f102055);
  return obj;
}
