// Module ID: 6797
// Function ID: 53656
// Name: CollectiblesMarketingTabTooltipRecord
// Dependencies: []

// Module 6797 (CollectiblesMarketingTabTooltipRecord)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class CollectiblesMarketingTabTooltipRecord {
    constructor(arg0) {
      tmp = closure_2(this, CollectiblesMarketingTabTooltipRecord);
      this.type = CollectiblesMarketingTabTooltipRecord(closure_1[2]).CollectiblesMarketingType.TAB_TOOLTIP;
      ({ title: this.title, body: this.body, asset: this.asset, dismissibleContent: this.dismissibleContent, version: this.version, refTargetBackground: this.refTargetBackground, badgeIcon: this.badgeIcon, badgeText: this.badgeText, showHoverGradient: this.showHoverGradient } = arg0);
      return;
    }
  }
  const arg1 = CollectiblesMarketingTabTooltipRecord;
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
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/collectibles/records/CollectiblesMarketingTabTooltipRecord.tsx");

export default tmp2;
