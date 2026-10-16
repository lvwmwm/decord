// Module ID: 9246
// Function ID: 9247
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 9246 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f101098 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f101098);
  new Promise(f101098);
  return obj;
}
