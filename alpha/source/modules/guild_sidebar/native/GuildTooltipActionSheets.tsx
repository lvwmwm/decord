// Module ID: 18248
// Function ID: 18249
// Name: GuildTooltipActionSheets
// Dependencies: [32, 19, 4855, 21, 18249, 1995, 18251, 18254, 18256, 18257, 4842, 18258, 6828, 18259, 10500, 10501, 5090, 2]
// Exports: default

// Module 18248 (GuildTooltipActionSheets)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import dismissible_content from "dismissible_content" /* 4842 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4855 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import SelectedDismissibleContentDefault from "SelectedDismissibleContent" /* 10500 */;
import DismissibleActionSheet from "DismissibleActionSheet" /* 10501 */;
import useIsGuildEligibleForRoleSubscriptionsUpsellDefault from "useIsGuildEligibleForRoleSubscriptionsUpsell" /* 18258 */;
import useIsEligibleForTierTemplateUpsellDefault from "useIsEligibleForTierTemplateUpsell" /* 18259 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function GuildRoleSubscriptionsUpsellActionSheetImporter() {
  return asyncRequire(18249, dependencyMap.paths);
}
function GuildRoleSubscriptionsIAPUpsellActionSheetImporter() {
  return asyncRequire(18251, dependencyMap.paths);
}
function CreatorMonetizationOnboardingV2UpsellActionSheetImporter() {
  return asyncRequire(18254, dependencyMap.paths);
}
function TierTemplatesUpsellActionSheetImporter() {
  return asyncRequire(18256, dependencyMap.paths);
}
class GuildTooltipActionSheets {
  constructor(guild) {
    const id = guild.guild.id;
    const items = [];
    const obj = id(18257);
    if (obj.useCanSeeCreatorMonetizationOnboardingV2Upsell(id)) {
      items.push(id(4842).DismissibleContent.CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL);
    }
    if (useIsGuildEligibleForRoleSubscriptionsUpsellDefault(id)) {
      items.push(id(4842).DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL);
    }
    const tmpResult = id(6828);
    if (tmpResult.useCanUseRoleSubscriptionIAP(id)) {
      items.push(id(4842).DismissibleContent.GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL);
    }
    if (useIsEligibleForTierTemplateUpsellDefault(id)) {
      items.push(id(4842).DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL);
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
let closure_13 = { code: "function GuildTooltipActionSheetsTsx1(){const{runOnJS,setShouldRender}=this.__closure;return runOnJS(setShouldRender)(true);}" };
const result = size.fileFinishedImporting("modules/guild_sidebar/native/GuildTooltipActionSheets.tsx");

export default function GuildTooltipActionSheetsGuard(arg0) {
  let setShouldRender;
  let tmp2;
  [tmp2, require] = _slicedToArray(react.useState(false), 2);
  const tmp = _slicedToArray(react.useState(false), 2);
  const effect = react.useEffect(() => {
    let obj = ReanimatedRexport;
    const fn = function t() {
      const obj = ReanimatedRexport;
      return obj.runOnJS(setShouldRender)(true);
    };
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setShouldRender: require };
    fn.__workletHash = 6076095421855;
    fn.__initData = __initData;
    ({ runOnJS: ReanimatedRexport.runOnJS, setShouldRender: require });
    obj.runOnUI(fn)();
  }, []);
  let tmp4 = null;
  if (tmp2) {
    const merged = Object.assign(arg0);
    tmp4 = <GuildTooltipActionSheets />;
  }
  return tmp4;
};
export { GuildTooltipActionSheets };
