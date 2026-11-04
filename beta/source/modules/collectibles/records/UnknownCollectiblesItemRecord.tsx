// Module ID: 7728
// Function ID: 7729
// Name: UnknownCollectiblesItemRecord
// Dependencies: [1986, 1987, 2]
// Exports: isUnknownCollectiblesItemRecord

// Module 7728 (UnknownCollectiblesItemRecord)
import CollectiblesItemType from "CollectiblesItemType" /* 1987 */;
import BaseCollectiblesItemRecord from "BaseCollectiblesItemRecord" /* 1986 */;
import size from "module_2" /* 2 */;

class UnknownCollectiblesItemRecord extends BaseCollectiblesItemRecord {
  constructor(arg0) {
    const tmp2 = new tmp(arg0, new.target, tmp, this);
    tmp2.type = CollectiblesItemType.CollectiblesItemType.NONE;
    return tmp2;
  }
  static fromServer(arg0) {
    const obj = { type: CollectiblesItemType.CollectiblesItemType.NONE };
    const fromServerResult = super.fromServer(arg0);
    const merged = Object.assign(fromServerResult);
    const tmp = UnknownCollectiblesItemRecord;
    const tmp2 = UnknownCollectiblesItemRecord;
    if (typeof UnknownCollectiblesItemRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp22 = new tmp2(obj, fromServerResult, this, tmp, obj);
      tmp22.type = CollectiblesItemType.CollectiblesItemType.NONE;
      return tmp22;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/UnknownCollectiblesItemRecord.tsx");

export default UnknownCollectiblesItemRecord;
export function isUnknownCollectiblesItemRecord(arg0) {
  return arg0 instanceof UnknownCollectiblesItemRecord;
}
