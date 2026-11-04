// Module ID: 9915
// Function ID: 9916
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 9915 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f96377 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f96377);
  new Promise(f96377);
  return obj;
}
