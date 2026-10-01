// Module ID: 8594
// Function ID: 8595
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 8594 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f87037 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f87037);
  new Promise(f87037);
  return obj;
}
