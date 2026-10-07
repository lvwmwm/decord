// Module ID: 7058
// Function ID: 7059
// Name: AvatarDecorationRecord
// Dependencies: [1979, 1980, 2]
// Exports: isAvatarDecorationRecord

// Module 7058 (AvatarDecorationRecord)
import CollectiblesItemType from "CollectiblesItemType" /* 1980 */;
import BaseCollectiblesItemRecord from "BaseCollectiblesItemRecord" /* 1979 */;
import size from "module_2" /* 2 */;

class AvatarDecorationRecord extends BaseCollectiblesItemRecord {
  constructor(arg0) {
    const tmp2 = new AvatarDecorationRecord(arg0, new.target, this, tmp);
    tmp2.type = CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION;
    ({ asset: tmp2.asset, label: tmp2.label } = arg0);
    return tmp2;
  }
  static fromServer(arg0) {
    const obj = {};
    const merged = Object.assign(super.fromServer(arg0));
    const merged1 = Object.assign(arg0);
    const tmp = AvatarDecorationRecord;
    if (typeof AvatarDecorationRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp2 = new tmp(obj, arg0, this, merged);
      tmp2.type = CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION;
      ({ asset: tmp5.asset, label: tmp5.label } = obj);
      return tmp2;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/AvatarDecorationRecord.tsx");

export default AvatarDecorationRecord;
export const isAvatarDecorationRecord = function isAvatarDecorationRecord(first1) {
  return first1 instanceof AvatarDecorationRecord;
};
