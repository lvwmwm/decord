// Module ID: 6793
// Function ID: 53654
// Name: CollectiblesMarketingBadgeRecord
// Dependencies: []

// Module 6793 (CollectiblesMarketingBadgeRecord)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class CollectiblesMarketingBadgeRecord {
    constructor(arg0) {
      tmp = closure_2(this, CollectiblesMarketingBadgeRecord);
      this.type = CollectiblesMarketingBadgeRecord(closure_1[2]).CollectiblesMarketingType.BADGE;
      ({ dismissibleContent: this.dismissibleContent, version: this.version, refTargetBackground: this.refTargetBackground, badgeIcon: this.badgeIcon, badgeText: this.badgeText, showHoverGradient: this.showHoverGradient } = arg0);
      return;
    }
  }
  const arg1 = CollectiblesMarketingBadgeRecord;
  const items = [
    {
      key: "fromServer",
      value(dismissible_content) {
        const obj = {};
        const merged = Object.assign(dismissible_content);
        obj["dismissibleContent"] = dismissible_content.dismissible_content;
        obj["refTargetBackground"] = dismissible_content.ref_target_background;
        obj["badgeIcon"] = dismissible_content.badge_icon;
        obj["badgeText"] = dismissible_content.badge_text;
        obj["showHoverGradient"] = dismissible_content.show_hover_gradient;
        return new CollectiblesMarketingBadgeRecord(obj);
      }
    }
  ];
  return callback(CollectiblesMarketingBadgeRecord, null, items);
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/collectibles/records/CollectiblesMarketingBadgeRecord.tsx");

export const CollectiblesMarketingBadgeRecord = tmp2;
