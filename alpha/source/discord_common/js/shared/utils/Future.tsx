// Module ID: 9915
// Function ID: 9916
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 9915 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f96245 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f96245);
  new Promise(f96245);
  return obj;
}
