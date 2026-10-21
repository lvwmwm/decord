// Module ID: 9610
// Function ID: 9611
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 9610 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f103328 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f103328);
  new Promise(f103328);
  return obj;
}
