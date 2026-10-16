// Module ID: 9488
// Function ID: 9489
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 9488 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f102118 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f102118);
  new Promise(f102118);
  return obj;
}
