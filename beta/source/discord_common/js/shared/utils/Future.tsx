// Module ID: 10444
// Function ID: 10445
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 10444 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f97790 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f97790);
  new Promise(f97790);
  return obj;
}
