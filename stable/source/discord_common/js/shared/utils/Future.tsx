// Module ID: 9552
// Function ID: 9553
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 9552 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f102521 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f102521);
  new Promise(f102521);
  return obj;
}
