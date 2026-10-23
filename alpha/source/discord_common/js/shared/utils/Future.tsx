// Module ID: 9652
// Function ID: 9653
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 9652 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f104078 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f104078);
  new Promise(f104078);
  return obj;
}
