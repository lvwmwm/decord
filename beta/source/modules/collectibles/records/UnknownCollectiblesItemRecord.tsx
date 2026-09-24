// Module ID: 7829
// Function ID: 7830
// Name: UnknownCollectiblesItemRecord
// Dependencies: [1976, 1977, 2]
// Exports: isUnknownCollectiblesItemRecord

// Module 7829 (UnknownCollectiblesItemRecord)
import CollectiblesItemType from "CollectiblesItemType" /* 1977 */;
import BaseCollectiblesItemRecord from "BaseCollectiblesItemRecord" /* 1976 */;

require = fn;
const prototype = function UnknownCollectiblesItemRecord(arg0) {
  const tmp2 = new tmp(arg0, new.target, tmp, new.target);
  tmp2.type = CollectiblesItemType.CollectiblesItemType.NONE;
  return tmp2;
}.prototype;
class prototype extends tmp2 {
}
prototype["fromServer"] = function fromServer(arg0) {
  const obj = {};
  const fromServerResult = super.fromServer(arg0);
  const merged = Object.assign(fromServerResult);
  obj.type = CollectiblesItemType.CollectiblesItemType.NONE;
  if (typeof prototype === "function") {
    const tmp22 = new tmp2(obj, fromServerResult, this, tmp, obj);
    tmp22.type = CollectiblesItemType.CollectiblesItemType.NONE;
    return tmp22;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  tmp = prototype;
  tmp2 = prototype;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/records/UnknownCollectiblesItemRecord.tsx");

export default prototype;
export const isUnknownCollectiblesItemRecord = function isUnknownCollectiblesItemRecord(arg0) {
  return arg0 instanceof prototype;
};
