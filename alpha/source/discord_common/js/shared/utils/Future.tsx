// Module ID: 9471
// Function ID: 9472
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 9471 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f101751 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f101751);
  new Promise(f101751);
  return obj;
}
