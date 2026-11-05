// Module ID: 9921
// Function ID: 9922
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 9921 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f96542 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f96542);
  new Promise(f96542);
  return obj;
}
