// Module ID: 12238
// Function ID: 95685
// Name: CustomActivityLinkRecord
// Dependencies: [6, 7, 12239, 7909, 12236, 2]

// Module 12238 (CustomActivityLinkRecord)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
const tmp2 = (() => {
  class CustomActivityLinkRecord {
    constructor(arg0) {
      self = this;
      tmp = outer1_2(this, CustomActivityLinkRecord);
      obj = CustomActivityLinkRecord(outer1_1[2]);
      result = obj.decodeCustomActivityLink(arg0.link_id);
      type = undefined;
      if (null != result) {
        type = result.type;
      }
      tmp4 = null;
      if (null != type) {
        tmp4 = type;
      }
      self.type = tmp4;
      ({ application_id: self.applicationId, link_id: self.linkId } = arg0);
      asset_id = undefined;
      if ("asset_id" in arg0) {
        asset_id = arg0.asset_id;
      }
      self.assetId = asset_id;
      asset_path = undefined;
      if ("asset_path" in arg0) {
        asset_path = arg0.asset_path;
      }
      self.assetPath = asset_path;
      ({ title: self.title, description: self.description, custom_id: self.customId } = arg0);
      return;
    }
  }
  const items = [
    {
      key: "getAssetURL",
      value() {
        const self = this;
        if (this.type === CustomActivityLinkRecord(outer1_1[2]).CustomLinkType.MANAGED) {
          let assetImage = CustomActivityLinkRecord(outer1_1[3]).getAssetImage(self.applicationId, self.assetId, 512);
          const obj2 = CustomActivityLinkRecord(outer1_1[3]);
        } else if (self.type === CustomActivityLinkRecord(outer1_1[2]).CustomLinkType.QUICK) {
          assetImage = CustomActivityLinkRecord(outer1_1[4]).getQuickLinkImage(self.assetPath);
          const obj = CustomActivityLinkRecord(outer1_1[4]);
        }
        return assetImage;
      }
    }
  ];
  return callback(CustomActivityLinkRecord, items);
})();
let result = require("CustomLinkType").fileFinishedImporting("modules/activities/records/CustomActivityLinkRecord.tsx");

export default tmp2;
