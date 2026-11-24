// Module ID: 9909
// Function ID: 9910
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 9909 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f96347 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f96347);
  new Promise(f96347);
  return obj;
}
