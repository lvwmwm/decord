// Module ID: 9622
// Function ID: 9623
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 9622 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f103790 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f103790);
  new Promise(f103790);
  return obj;
}
