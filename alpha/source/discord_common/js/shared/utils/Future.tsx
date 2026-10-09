// Module ID: 9223
// Function ID: 9224
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 9223 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f100590 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f100590);
  new Promise(f100590);
  return obj;
}
