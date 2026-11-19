// Module ID: 10377
// Function ID: 10378
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 10377 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f99114 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f99114);
  new Promise(f99114);
  return obj;
}
