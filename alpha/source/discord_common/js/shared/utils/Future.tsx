// Module ID: 9687
// Function ID: 9688
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 9687 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f105225 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f105225);
  new Promise(f105225);
  return obj;
}
