// Module ID: 15065
// Function ID: 114706
// Name: NUFChannelsActionSheetImporter
// Dependencies: [57, 31, 1345, 33, 12697, 1934, 15066, 15068, 15071, 15073, 15074, 1334, 15075, 15076, 5031, 15077, 9642, 9643, 3991, 2]
// Exports: default

// Module 15065 (NUFChannelsActionSheetImporter)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { DismissibleContentGroupName as closure_5 } from "ContentDismissActionType";
import { jsx } from "jsxProd";

const require = arg1;
function NUFChannelsActionSheetImporter() {
  return require(1934) /* maybeLoadBundle */(12697, dependencyMap.paths);
}
function GuildRoleSubscriptionsUpsellActionSheetImporter() {
  return require(1934) /* maybeLoadBundle */(15066, dependencyMap.paths);
}
function GuildRoleSubscriptionsIAPUpsellActionSheetImporter() {
  return require(1934) /* maybeLoadBundle */(15068, dependencyMap.paths);
}
function CreatorMonetizationOnboardingV2UpsellActionSheetImporter() {
  return require(1934) /* maybeLoadBundle */(15071, dependencyMap.paths);
}
function TierTemplatesUpsellActionSheetImporter() {
  return require(1934) /* maybeLoadBundle */(15073, dependencyMap.paths);
}
class GuildTooltipActionSheets {
  constructor(arg0) {
    inRedesign = global.inRedesign;
    id = global.guild.id;
    items = [];
    obj = require("useCanSeeNUFChannelsForGuild");
    if (inRedesign) {
      inRedesign = obj.useCanSeeNUFChannelsForGuild(id);
    }
    if (inRedesign) {
      tmp = id;
      tmp2 = closure_2;
      num = 11;
      arr = items.push(require("DismissibleContent").DismissibleContent.NUX_GUILD_CHANNEL_EXPLAINER);
    }
    obj2 = require("items");
    if (obj2.useCanSeeCreatorMonetizationOnboardingV2Upsell(id)) {
      tmp4 = id;
      tmp5 = closure_2;
      num2 = 11;
      arr1 = items.push(require("DismissibleContent").DismissibleContent.CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL);
    }
    if (require("useIsGuildEligibleForRoleSubscriptionsUpsell")(id)) {
      tmp7 = id;
      tmp8 = closure_2;
      num3 = 11;
      arr2 = items.push(require("DismissibleContent").DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL);
    }
    obj3 = require("compareVersions");
    if (obj3.useCanUseRoleSubscriptionIAP(id)) {
      tmp10 = id;
      tmp11 = closure_2;
      num4 = 11;
      arr3 = items.push(require("DismissibleContent").DismissibleContent.GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL);
    }
    if (require("useIsEligibleForTierTemplateUpsell")(id)) {
      tmp13 = id;
      tmp14 = closure_2;
      num5 = 11;
      arr4 = items.push(require("DismissibleContent").DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL);
    }
    obj = {
      contentTypes: items,
      groupName: c5.GUILD_HEADER_TOOLTIPS,
      children(arg0) {
            let markAsDismissed;
            let visibleContent;
            ({ visibleContent, markAsDismissed } = arg0);
            if (id(outer1_2[11]).DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL === visibleContent) {
              let obj = { markAsDismissed, importer: outer1_10, actionSheetKey: outer1_7, guildId: markAsDismissed };
              return outer1_6(id(outer1_2[17]).DismissibleActionSheet, obj);
            } else if (id(outer1_2[11]).DismissibleContent.GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL === visibleContent) {
              obj = { markAsDismissed, importer: outer1_11, actionSheetKey: outer1_7, guildId: markAsDismissed };
              return outer1_6(id(outer1_2[17]).DismissibleActionSheet, obj);
            } else if (id(outer1_2[11]).DismissibleContent.CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL === visibleContent) {
              const obj1 = { markAsDismissed, importer: outer1_12, actionSheetKey: outer1_7, guildId: markAsDismissed };
              return outer1_6(id(outer1_2[17]).DismissibleActionSheet, obj1);
            } else if (id(outer1_2[11]).DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL === visibleContent) {
              const obj2 = { actionSheetKey: outer1_7, importer: outer1_13, markAsDismissed, guildId: markAsDismissed };
              return outer1_6(id(outer1_2[17]).DismissibleActionSheet, obj2);
            } else if (id(outer1_2[11]).DismissibleContent.NUX_GUILD_CHANNEL_EXPLAINER === visibleContent) {
              obj = {
                markAsDismissed(arg0) {
                    return markAsDismissed(arg0);
                  },
                actionSheetKey: outer1_7,
                importer: outer1_9
              };
              return outer1_6(id(outer1_2[17]).DismissibleActionSheet, obj);
            } else {
              return null;
            }
          }
    };
    return jsx(require("SelectedDismissibleContent"), obj);
  }
}
const GuildTooltipActionSheet = "GuildTooltipActionSheet";
let closure_8 = { code: "function GuildTooltipActionSheetsTsx1(){const{runOnJS,setShouldRender}=this.__closure;return runOnJS(setShouldRender)(true);}" };
const result = require("ContentDismissActionType").fileFinishedImporting("modules/guild_sidebar/native/GuildTooltipActionSheets.tsx");

export default function GuildTooltipActionSheetsGuard(arg0) {
  let require;
  let tmp2;
  [tmp2, require] = callback(React.useState(false), 2);
  const effect = React.useEffect(() => {
    let obj = outer1_0(outer1_2[18]);
    const fn = function t() {
      return outer2_0(outer2_2[18]).runOnJS(outer1_0)(true);
    };
    obj = { runOnJS: outer1_0(outer1_2[18]).runOnJS, setShouldRender: closure_0 };
    fn.__closure = obj;
    fn.__workletHash = 6076095421855;
    fn.__initData = outer1_8;
    obj.runOnUI(fn)();
  }, []);
  let tmp4 = null;
  if (tmp2) {
    let obj = {};
    const merged = Object.assign(arg0);
    tmp4 = <GuildTooltipActionSheets />;
  }
  return tmp4;
};
export { GuildTooltipActionSheets };
