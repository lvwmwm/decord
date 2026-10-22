// Module ID: 9629
// Function ID: 9630
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 9629 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f103888 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f103888);
  new Promise(f103888);
  return obj;
}
