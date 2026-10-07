// Module ID: 8798
// Function ID: 8799
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 8798 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f98636 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f98636);
  new Promise(f98636);
  return obj;
}
