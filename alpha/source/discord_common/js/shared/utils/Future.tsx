// Module ID: 11117
// Function ID: 11118
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 11117 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f102441 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f102441);
  new Promise(f102441);
  return obj;
}
