// Module ID: 6801
// Function ID: 53695
// Name: CollectiblesMarketingCoachmarkRecord
// Dependencies: [6, 7, 6799, 2]

// Module 6801 (CollectiblesMarketingCoachmarkRecord)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
const tmp2 = (() => {
  class CollectiblesMarketingCoachmarkRecord {
    constructor(arg0) {
      tmp = outer1_2(this, CollectiblesMarketingCoachmarkRecord);
      this.type = CollectiblesMarketingCoachmarkRecord(outer1_1[2]).CollectiblesMarketingType.COACHMARK;
      ({ title: this.title, body: this.body, assetDark: this.assetDark, assetLight: this.assetLight, version: this.version, refTargetBackground: this.refTargetBackground, badgeIcon: this.badgeIcon, badgeText: this.badgeText, buttonLabel: this.buttonLabel } = arg0);
      return;
    }
  }
  const items = [
    {
      key: "fromServer",
      value(asset_dark) {
        const obj = {};
        const merged = Object.assign(asset_dark);
        obj["assetDark"] = asset_dark.asset_dark;
        obj["assetLight"] = asset_dark.asset_light;
        obj["refTargetBackground"] = asset_dark.ref_target_background;
        obj["badgeIcon"] = asset_dark.badge_icon;
        obj["badgeText"] = asset_dark.badge_text;
        obj["buttonLabel"] = asset_dark.button_label;
        return new CollectiblesMarketingCoachmarkRecord(obj);
      }
    }
  ];
  return callback(CollectiblesMarketingCoachmarkRecord, null, items);
})();
const result = require("CollectiblesMarketingType").fileFinishedImporting("modules/collectibles/records/CollectiblesMarketingCoachmarkRecord.tsx");

export const CollectiblesMarketingCoachmarkRecord = tmp2;
