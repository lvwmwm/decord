// Module ID: 10051
// Function ID: 10052
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 10051 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f97229 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f97229);
  new Promise(f97229);
  return obj;
}
