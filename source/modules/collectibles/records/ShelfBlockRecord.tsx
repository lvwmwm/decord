// Module ID: 6817
// Function ID: 53759
// Name: ShelfBlockRecord
// Dependencies: [6, 7, 6806, 2]

// Module 6817 (ShelfBlockRecord)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
let tmp2 = (() => {
  class ShelfBlockRecord {
    constructor(arg0) {
      self = this;
      tmp = outer1_2(this, ShelfBlockRecord);
      this.type = ShelfBlockRecord(outer1_1[2]).ShopBlockType.SHELF;
      ({ name: this.name, ranked_sku_ids: this.rankedSkuIds, category_sku_id } = arg0);
      tmp2 = null;
      if (null != category_sku_id) {
        tmp2 = category_sku_id;
      }
      self.categorySkuId = tmp2;
      self.showButton = false !== arg0.show_button;
      button_text = arg0.button_text;
      tmp3 = null;
      if (null != button_text) {
        tmp3 = button_text;
      }
      self.buttonText = tmp3;
      title_color = arg0.title_color;
      tmp4 = null;
      if (null != title_color) {
        tmp4 = title_color;
      }
      self.titleColor = tmp4;
      desktop_background_image = arg0.desktop_background_image;
      tmp5 = null;
      if (null != desktop_background_image) {
        tmp5 = desktop_background_image;
      }
      self.desktopBackgroundImage = tmp5;
      mobile_background_image = arg0.mobile_background_image;
      tmp6 = null;
      if (null != mobile_background_image) {
        tmp6 = mobile_background_image;
      }
      self.mobileBackgroundImage = tmp6;
      return;
    }
  }
  const items = [
    {
      key: "fromServer",
      value(show_button) {
        return new ShelfBlockRecord(show_button);
      }
    }
  ];
  return callback(ShelfBlockRecord, null, items);
})();
const result = require("ShopBlockType").fileFinishedImporting("modules/collectibles/records/ShelfBlockRecord.tsx");

export const ShelfBlockRecord = tmp2;
