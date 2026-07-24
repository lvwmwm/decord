// Module ID: 6801
// Function ID: 53711
// Name: CollectiblesMarketingTabTooltipRecord
// Dependencies: [6, 7, 6798, 2]

// Module 6801 (CollectiblesMarketingTabTooltipRecord)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
const tmp2 = (() => {
  class CollectiblesMarketingTabTooltipRecord {
    constructor(arg0) {
      tmp = outer1_2(this, CollectiblesMarketingTabTooltipRecord);
      this.type = CollectiblesMarketingTabTooltipRecord(outer1_1[2]).CollectiblesMarketingType.TAB_TOOLTIP;
      ({ title: this.title, body: this.body, asset: this.asset, dismissibleContent: this.dismissibleContent, version: this.version, refTargetBackground: this.refTargetBackground, badgeIcon: this.badgeIcon, badgeText: this.badgeText, showHoverGradient: this.showHoverGradient } = arg0);
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
        return new CollectiblesMarketingTabTooltipRecord(obj);
      }
    }
  ];
  return callback(CollectiblesMarketingTabTooltipRecord, null, items);
})();
const result = require("CollectiblesMarketingType").fileFinishedImporting("modules/collectibles/records/CollectiblesMarketingTabTooltipRecord.tsx");

export default tmp2;
