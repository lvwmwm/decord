// Module ID: 6796
// Function ID: 53663
// Name: CollectiblesMarketingCoachmarkRecord
// Dependencies: []

// Module 6796 (CollectiblesMarketingCoachmarkRecord)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class CollectiblesMarketingCoachmarkRecord {
    constructor(arg0) {
      tmp = closure_2(this, CollectiblesMarketingCoachmarkRecord);
      this.type = CollectiblesMarketingCoachmarkRecord(closure_1[2]).CollectiblesMarketingType.COACHMARK;
      ({ title: this.title, body: this.body, assetDark: this.assetDark, assetLight: this.assetLight, version: this.version, refTargetBackground: this.refTargetBackground, badgeIcon: this.badgeIcon, badgeText: this.badgeText, buttonLabel: this.buttonLabel } = arg0);
      return;
    }
  }
  const arg1 = CollectiblesMarketingCoachmarkRecord;
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
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/collectibles/records/CollectiblesMarketingCoachmarkRecord.tsx");

export const CollectiblesMarketingCoachmarkRecord = tmp2;
