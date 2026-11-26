// Module ID: 10050
// Function ID: 10051
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 10050 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f96996 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f96996);
  new Promise(f96996);
  return obj;
}
