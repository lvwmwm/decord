// Module ID: 9567
// Function ID: 9568
// Name: Future
// Dependencies: [2]
// Exports: Future

// Module 9567 (Future)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export function Future() {
  const f102930 = (resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  };
  const obj = Object.create(new.target.prototype);
  obj.promise = new Promise(f102930);
  new Promise(f102930);
  return obj;
}
