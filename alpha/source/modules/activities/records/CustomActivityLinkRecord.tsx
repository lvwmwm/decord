// Module ID: 12498
// Function ID: 12499
// Name: CustomActivityLinkRecord
// Dependencies: [12499, 7595, 12496, 2]

// Module 12498 (CustomActivityLinkRecord)
import utils_CustomActivityLinkUtils from "utils/CustomActivityLinkUtils" /* 12499 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/activities/records/CustomActivityLinkRecord.tsx");
class CustomActivityLinkRecord {
  constructor(arg0) {
    obj = closure_0(closure_1[0]);
    result = obj.decodeCustomActivityLink(global.link_id);
    type = undefined;
    if (result != null) {
      type = result.type;
    }
    if (type == null) {
      type = null;
    }
    obj1 = Object.create(new.target.prototype);
    obj1.type = type;
    ({ application_id: tmp3.applicationId, link_id: tmp3.linkId } = global);
    asset_id = undefined;
    if ("asset_id" in global) {
      asset_id = global.asset_id;
    }
    obj1.assetId = asset_id;
    asset_path = undefined;
    if ("asset_path" in global) {
      asset_path = global.asset_path;
    }
    obj1.assetPath = asset_path;
    ({ title: tmp3.title, description: tmp3.description, custom_id: tmp3.customId } = global);
    return obj1;
  }
}
CustomActivityLinkRecord.prototype["getAssetURL"] = function getAssetURL() {
  const self = this;
  if (this.type === utils_CustomActivityLinkUtils.CustomLinkType.MANAGED) {
    let assetImage = tmp(7595).getAssetImage(self.applicationId, self.assetId, 512);
    const tmpResult = tmp(7595);
  } else if (self.type === tmp(12499).CustomLinkType.QUICK) {
    assetImage = tmp(12496).getQuickLinkImage(self.assetPath);
    const tmpResult2 = tmp(12496);
  }
  return assetImage;
};

export default CustomActivityLinkRecord;
