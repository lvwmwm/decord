// Module ID: 15873
// Function ID: 15874
// Name: GuildTooltipActionSheets
// Dependencies: [32, 19, 2042, 21, 13312, 1981, 15874, 15876, 15879, 15881, 15882, 2029, 15883, 15884, 5811, 15885, 10088, 10089, 4566, 2]
// Exports: default

// Module 15873 (GuildTooltipActionSheets)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import SelectedDismissibleContentDefault from "SelectedDismissibleContent" /* 10088 */;
import DismissibleActionSheet from "DismissibleActionSheet" /* 10089 */;
import useIsGuildEligibleForRoleSubscriptionsUpsellDefault from "useIsGuildEligibleForRoleSubscriptionsUpsell" /* 15884 */;
import useIsEligibleForTierTemplateUpsellDefault from "useIsEligibleForTierTemplateUpsell" /* 15885 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function NUFChannelsActionSheetImporter() {
  return asyncRequire(13312, dependencyMap.paths);
}
function GuildRoleSubscriptionsUpsellActionSheetImporter() {
  return asyncRequire(15874, dependencyMap.paths);
}
function GuildRoleSubscriptionsIAPUpsellActionSheetImporter() {
  return asyncRequire(15876, dependencyMap.paths);
}
function CreatorMonetizationOnboardingV2UpsellActionSheetImporter() {
  return asyncRequire(15879, dependencyMap.paths);
}
function TierTemplatesUpsellActionSheetImporter() {
  return asyncRequire(15881, dependencyMap.paths);
}
class GuildTooltipActionSheets {
  constructor(inRedesign) {
    inRedesign = inRedesign.inRedesign;
    const id = inRedesign.guild.id;
    const obj = id(15882);
    if (inRedesign) {
      inRedesign = obj.useCanSeeNUFChannelsForGuild(id);
    }
    const items = [];
    if (inRedesign) {
      items.push(id(2029).DismissibleContent.NUX_GUILD_CHANNEL_EXPLAINER);
    }
    const tmpResult = id(15883);
    if (tmpResult.useCanSeeCreatorMonetizationOnboardingV2Upsell(id)) {
      items.push(id(2029).DismissibleContent.CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL);
    }
    if (useIsGuildEligibleForRoleSubscriptionsUpsellDefault(id)) {
      items.push(id(2029).DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL);
    }
    const tmpResult2 = id(5811);
    if (tmpResult2.useCanUseRoleSubscriptionIAP(id)) {
      items.push(id(2029).DismissibleContent.GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL);
    }
    if (useIsEligibleForTierTemplateUpsellDefault(id)) {
      items.push(id(2029).DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL);
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
        } else if (dismissible_content.DismissibleContent.NUX_GUILD_CHANNEL_EXPLAINER === visibleContent) {
          return jsx(DismissibleActionSheet.DismissibleActionSheet, {
            markAsDismissed(arg0) {
                return markAsDismissed(arg0);
              },
            actionSheetKey: GuildTooltipActionSheet,
            importer: NUFChannelsActionSheetImporter
          });
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
let closure_14 = { code: "function GuildTooltipActionSheetsTsx1(){const{runOnJS,setShouldRender}=this.__closure;return runOnJS(setShouldRender)(true);}" };
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
