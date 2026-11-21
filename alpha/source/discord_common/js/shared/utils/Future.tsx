// Module ID: 10439
// Function ID: 10440
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 10439 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f97766 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f97766);
  new Promise(f97766);
  return obj;
}
