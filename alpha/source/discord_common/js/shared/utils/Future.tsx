// Module ID: 10399
// Function ID: 10400
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 10399 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f99152 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f99152);
  new Promise(f99152);
  return obj;
}
