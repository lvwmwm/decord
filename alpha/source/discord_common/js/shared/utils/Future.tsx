// Module ID: 9250
// Function ID: 9251
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 9250 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f100868 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f100868);
  new Promise(f100868);
  return obj;
}
