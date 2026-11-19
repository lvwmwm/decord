// Module ID: 17809
// Function ID: 17810
// Name: GuildTooltipActionSheets
// Dependencies: [32, 19, 4638, 21, 17810, 2121, 17812, 17815, 17817, 17818, 4625, 17819, 6490, 17820, 11550, 11551, 1708, 2]
// Exports: default

// Module 17809 (GuildTooltipActionSheets)
import Fragment from "Fragment" /* 21 */;
import _mod1708 from "module_1708" /* 1708 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import dismissible_content from "dismissible_content" /* 4625 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4638 */;
import SelectedDismissibleContentDefault from "SelectedDismissibleContent" /* 11550 */;
import DismissibleActionSheet from "DismissibleActionSheet" /* 11551 */;
import useIsGuildEligibleForRoleSubscriptionsUpsellDefault from "useIsGuildEligibleForRoleSubscriptionsUpsell" /* 17819 */;
import useIsEligibleForTierTemplateUpsellDefault from "useIsEligibleForTierTemplateUpsell" /* 17820 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function GuildRoleSubscriptionsUpsellActionSheetImporter() {
  return asyncRequire(17810, dependencyMap.paths);
}
function GuildRoleSubscriptionsIAPUpsellActionSheetImporter() {
  return asyncRequire(17812, dependencyMap.paths);
}
function CreatorMonetizationOnboardingV2UpsellActionSheetImporter() {
  return asyncRequire(17815, dependencyMap.paths);
}
function TierTemplatesUpsellActionSheetImporter() {
  return asyncRequire(17817, dependencyMap.paths);
}
class GuildTooltipActionSheets {
  constructor(guild) {
    const id = guild.guild.id;
    const items = [];
    const obj = id(17818);
    if (obj.useCanSeeCreatorMonetizationOnboardingV2Upsell(id)) {
      items.push(id(4625).DismissibleContent.CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL);
    }
    if (useIsGuildEligibleForRoleSubscriptionsUpsellDefault(id)) {
      items.push(id(4625).DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL);
    }
    const tmpResult = id(6490);
    if (tmpResult.useCanUseRoleSubscriptionIAP(id)) {
      items.push(id(4625).DismissibleContent.GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL);
    }
    if (useIsEligibleForTierTemplateUpsellDefault(id)) {
      items.push(id(4625).DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL);
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
    const scheduleOnUI = _mod1708.scheduleOnUI;
    _mod1708;
    items[1] = _mod1708.scheduleOnRN;
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
