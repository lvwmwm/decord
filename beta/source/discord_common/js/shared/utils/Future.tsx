// Module ID: 9685
// Function ID: 9686
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 9685 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f104461 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f104461);
  new Promise(f104461);
  return obj;
}
