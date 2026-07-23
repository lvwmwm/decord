// Module ID: 6798
// Function ID: 53686
// Name: CollectiblesMarketingBadgeRecord
// Dependencies: [6, 7, 6799, 2]

// Module 6798 (CollectiblesMarketingBadgeRecord)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
const tmp2 = (() => {
  class CollectiblesMarketingBadgeRecord {
    constructor(arg0) {
      tmp = outer1_2(this, CollectiblesMarketingBadgeRecord);
      this.type = CollectiblesMarketingBadgeRecord(outer1_1[2]).CollectiblesMarketingType.BADGE;
      ({ dismissibleContent: this.dismissibleContent, version: this.version, refTargetBackground: this.refTargetBackground, badgeIcon: this.badgeIcon, badgeText: this.badgeText, showHoverGradient: this.showHoverGradient } = arg0);
      return;
    }
  }
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
})();
const result = require("CollectiblesMarketingType").fileFinishedImporting("modules/collectibles/records/CollectiblesMarketingBadgeRecord.tsx");

export const CollectiblesMarketingBadgeRecord = tmp2;
