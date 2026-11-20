// Module ID: 17636
// Function ID: 17637
// Name: GuildTooltipActionSheets
// Dependencies: [32, 19, 4640, 21, 17637, 2119, 17639, 17642, 17644, 17645, 4627, 17646, 6492, 17647, 11492, 11493, 1706, 2]
// Exports: default

// Module 17636 (GuildTooltipActionSheets)
import Fragment from "Fragment" /* 21 */;
import _mod1706 from "module_1706" /* 1706 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import dismissible_content from "dismissible_content" /* 4627 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4640 */;
import SelectedDismissibleContentDefault from "SelectedDismissibleContent" /* 11492 */;
import DismissibleActionSheet from "DismissibleActionSheet" /* 11493 */;
import useIsGuildEligibleForRoleSubscriptionsUpsellDefault from "useIsGuildEligibleForRoleSubscriptionsUpsell" /* 17646 */;
import useIsEligibleForTierTemplateUpsellDefault from "useIsEligibleForTierTemplateUpsell" /* 17647 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function GuildRoleSubscriptionsUpsellActionSheetImporter() {
  return asyncRequire(17637, dependencyMap.paths);
}
function GuildRoleSubscriptionsIAPUpsellActionSheetImporter() {
  return asyncRequire(17639, dependencyMap.paths);
}
function CreatorMonetizationOnboardingV2UpsellActionSheetImporter() {
  return asyncRequire(17642, dependencyMap.paths);
}
function TierTemplatesUpsellActionSheetImporter() {
  return asyncRequire(17644, dependencyMap.paths);
}
class GuildTooltipActionSheets {
  constructor(guild) {
    const id = guild.guild.id;
    const items = [];
    const obj = id(17645);
    if (obj.useCanSeeCreatorMonetizationOnboardingV2Upsell(id)) {
      items.push(id(4627).DismissibleContent.CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL);
    }
    if (useIsGuildEligibleForRoleSubscriptionsUpsellDefault(id)) {
      items.push(id(4627).DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL);
    }
    const tmpResult = id(6492);
    if (tmpResult.useCanUseRoleSubscriptionIAP(id)) {
      items.push(id(4627).DismissibleContent.GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL);
    }
    if (useIsEligibleForTierTemplateUpsellDefault(id)) {
      items.push(id(4627).DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL);
    }
    return jsx(SelectedDismissibleContentDefault, {
      contentTypes: items,
      groupName: constants.GUILD_HEADER_TOOLTIPS,
      children(arg0) {
        let markAsDismissed;
        let visibleContent;
        ({ visibleContent, markAsDismissed } = arg0);
        if (dismissible_content.DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL === visibleContent) {
          return jsx(DismissibleActionSheet.DismissibleActionSheet, { markAsDismissed, importer: GuildRoleSubscriptionsUpsellActionSheetImporter, actionSheetKey: GuildTooltipActionSheet, guildId: id });
        } else if (dismissible_content.DismissibleContent.GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL === visibleContent) {
          return jsx(DismissibleActionSheet.DismissibleActionSheet, { markAsDismissed, importer: GuildRoleSubscriptionsIAPUpsellActionSheetImporter, actionSheetKey: GuildTooltipActionSheet, guildId: id });
        } else if (dismissible_content.DismissibleContent.CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL === visibleContent) {
          return jsx(DismissibleActionSheet.DismissibleActionSheet, { markAsDismissed, importer: CreatorMonetizationOnboardingV2UpsellActionSheetImporter, actionSheetKey: GuildTooltipActionSheet, guildId: id });
        } else if (dismissible_content.DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL === visibleContent) {
          return jsx(DismissibleActionSheet.DismissibleActionSheet, { actionSheetKey: GuildTooltipActionSheet, importer: TierTemplatesUpsellActionSheetImporter, markAsDismissed, guildId: id });
        } else {
          return null;
        }
      }
    });
  }
}
const hasOwnProperty = DismissibleContentConstants.DismissibleContentGroupName;
const jsx = Fragment.jsx;
const GuildTooltipActionSheet = "GuildTooltipActionSheet";
let closure_13 = { code: "(function GuildTooltipActionSheetsTsx1(){let[scheduleOnRN,setShouldRender]=this.__closure;return scheduleOnRN(setShouldRender,true);})" };
const result = size.fileFinishedImporting("modules/guild_sidebar/native/GuildTooltipActionSheets.tsx");

export default function GuildTooltipActionSheetsGuard(arg0) {
  let tmp2;
  const tmp = _slicedToArray(react.useState(false), 2);
  [tmp2, require] = tmp;
  const effect = react.useEffect(() => {
    let tmp2;
    let tmp3;
    let tmp4;
    const items = [closure_13, , ];
    const scheduleOnUI = _mod1706.scheduleOnUI;
    _mod1706;
    items[1] = _mod1706.scheduleOnRN;
    items[2] = require;
    let c0;
    let c1;
    [tmp2, tmp3, tmp4] = items;
    class GuildTooltipActionSheetsTsx1 {
      constructor() {
        return closure_0(closure_1, true);
      }
    }
    const items1 = [tmp3, tmp4];
    GuildTooltipActionSheetsTsx1.__closure = items1;
    GuildTooltipActionSheetsTsx1.__workletHash = 14288497747211;
    GuildTooltipActionSheetsTsx1.__initData = tmp2;
    scheduleOnUI(GuildTooltipActionSheetsTsx1);
  }, []);
  let tmp4 = null;
  if (tmp2) {
    const merged = Object.assign(arg0);
    tmp4 = <GuildTooltipActionSheets />;
  }
  return tmp4;
};
export { GuildTooltipActionSheets };
