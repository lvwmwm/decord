// Module ID: 9580
// Function ID: 9581
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 9580 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f103033 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f103033);
  new Promise(f103033);
  return obj;
}
