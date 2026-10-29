// Module ID: 9719
// Function ID: 9720
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 9719 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f106413 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f106413);
  new Promise(f106413);
  return obj;
}
