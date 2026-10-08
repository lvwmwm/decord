// Module ID: 9189
// Function ID: 9190
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 9189 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f100075 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f100075);
  new Promise(f100075);
  return obj;
}
