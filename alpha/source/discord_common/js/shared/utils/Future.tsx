// Module ID: 9251
// Function ID: 9252
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 9251 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f101087 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f101087);
  new Promise(f101087);
  return obj;
}
