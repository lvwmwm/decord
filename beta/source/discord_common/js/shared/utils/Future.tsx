// Module ID: 9888
// Function ID: 9889
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 9888 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f97168 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f97168);
  new Promise(f97168);
  return obj;
}
