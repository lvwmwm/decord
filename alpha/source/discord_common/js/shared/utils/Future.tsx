// Module ID: 10319
// Function ID: 10320
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 10319 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f97384 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f97384);
  new Promise(f97384);
  return obj;
}
