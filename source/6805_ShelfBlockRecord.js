// Module ID: 6805
// Function ID: 53655
// Name: ShelfBlockRecord
// Dependencies: []

// Module 6805 (ShelfBlockRecord)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class ShelfBlockRecord {
    constructor(arg0) {
      self = this;
      tmp = closure_2(this, ShelfBlockRecord);
      this.type = ShelfBlockRecord(closure_1[2]).ShopBlockType.SHELF;
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
  const arg1 = ShelfBlockRecord;
  const items = [
    {
      key: "fromServer",
      value(show_button) {
        return new ShelfBlockRecord(show_button);
      }
    }
  ];
  return callback(ShelfBlockRecord, null, items);
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/collectibles/records/ShelfBlockRecord.tsx");

export const ShelfBlockRecord = tmp2;
