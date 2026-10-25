// Module ID: 9653
// Function ID: 9654
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 9653 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f104327 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f104327);
  new Promise(f104327);
  return obj;
}
