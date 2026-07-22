// Module ID: 12097
// Function ID: 93294
// Name: CustomActivityLinkRecord
// Dependencies: []

// Module 12097 (CustomActivityLinkRecord)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class CustomActivityLinkRecord {
    constructor(arg0) {
      self = this;
      tmp = closure_2(this, CustomActivityLinkRecord);
      obj = CustomActivityLinkRecord(closure_1[2]);
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
  const arg1 = CustomActivityLinkRecord;
  const items = [
    {
      key: "getAssetURL",
      value() {
        const self = this;
        if (this.type === CustomActivityLinkRecord(closure_1[2]).CustomLinkType.MANAGED) {
          let assetImage = CustomActivityLinkRecord(closure_1[3]).getAssetImage(self.applicationId, self.assetId, 512);
          const obj2 = CustomActivityLinkRecord(closure_1[3]);
        } else if (self.type === CustomActivityLinkRecord(closure_1[2]).CustomLinkType.QUICK) {
          assetImage = CustomActivityLinkRecord(closure_1[4]).getQuickLinkImage(self.assetPath);
          const obj = CustomActivityLinkRecord(closure_1[4]);
        }
        return assetImage;
      }
    }
  ];
  return callback(CustomActivityLinkRecord, items);
}();
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/activities/records/CustomActivityLinkRecord.tsx");

export default tmp2;
