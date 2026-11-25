// Module ID: 10008
// Function ID: 10009
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 10008 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f96710 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f96710);
  new Promise(f96710);
  return obj;
}
