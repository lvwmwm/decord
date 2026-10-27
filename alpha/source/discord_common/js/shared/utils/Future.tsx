// Module ID: 9655
// Function ID: 9656
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 9655 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f104612 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f104612);
  new Promise(f104612);
  return obj;
}
