// Module ID: 6981
// Function ID: 6982
// Name: CollectiblesStoreListingStylesRecord
// Dependencies: [1387, 6972, 1092, 2]

// Module 6981 (CollectiblesStoreListingStylesRecord)
import utils_ColorUtils from "utils/ColorUtils" /* 1092 */;
import _modDef6972 from "module_6972" /* 6972 */;
import Record from "Record" /* 1387 */;
import size from "module_2" /* 2 */;

class CollectiblesStoreListingStylesRecord extends Record {
  constructor(arg0) {
    const tmp = new CollectiblesStoreListingStylesRecord(new.target, this);
    ({ backgroundColors: tmp.backgroundColors, buttonColors: tmp.buttonColors, confettiColors: tmp.confettiColors } = arg0);
    return tmp;
  }
  static fromServer(arg0) {
    let background_colors;
    let button_colors;
    let confetti_colors;
    let tmp;
    ({ background_colors, button_colors, confetti_colors } = arg0);
    const mapped = background_colors.map((item) => {
      const tmp = _modDef6972;
      const obj = utils_ColorUtils;
      return tmp(obj.int2hex(item));
    });
    const mapped1 = button_colors.map((item) => {
      const tmp = _modDef6972;
      const obj = utils_ColorUtils;
      return tmp(obj.int2hex(item));
    });
    const tmp2 = CollectiblesStoreListingStylesRecord;
    if (typeof CollectiblesStoreListingStylesRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp7 = new CollectiblesStoreListingStylesRecord(tmp, confetti_colors, tmp2, this);
      tmp7.backgroundColors = mapped;
      tmp7.buttonColors = mapped1;
      tmp7.confettiColors = tmp5;
      return tmp7;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesStoreListingStylesRecord.tsx");

export default CollectiblesStoreListingStylesRecord;
