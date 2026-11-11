// Module ID: 11348
// Function ID: 11349
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 11348 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f100870 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f100870);
  new Promise(f100870);
  return obj;
}
