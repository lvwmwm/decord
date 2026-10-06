// Module ID: 15873
// Function ID: 15874
// Name: GuildTooltipActionSheets
// Dependencies: [32, 19, 2048, 21, 13314, 1987, 15874, 15876, 15879, 15881, 558, 576, 15882, 2035, 15883, 15884, 5812, 15885, 10126, 10125, 4570, 2]

// Module 15873 (GuildTooltipActionSheets)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import dismissible_content from "dismissible_content" /* 2035 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4570 */;
import SelectedDismissibleContentDefault from "SelectedDismissibleContent" /* 10125 */;
import DismissibleActionSheet from "DismissibleActionSheet" /* 10126 */;
import useIsGuildEligibleForRoleSubscriptionsUpsellDefault from "useIsGuildEligibleForRoleSubscriptionsUpsell" /* 15884 */;
import useIsEligibleForTierTemplateUpsellDefault from "useIsEligibleForTierTemplateUpsell" /* 15885 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let inRedesign;

function NUFChannelsActionSheetImporter() {
  return asyncRequire(13314, dependencyMap.paths);
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
const constants = DismissibleContentConstants.DismissibleContentGroupName;
const jsx = Fragment.jsx;
const GuildTooltipActionSheet = "GuildTooltipActionSheet";
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((inRedesign) => {
  let id;
  let tmp10;
  const obj = id(576);
  const cResult = obj.c(2);
  inRedesign = inRedesign.inRedesign;
  id = inRedesign.guild.id;
  const obj2 = id(15882);
  if (inRedesign) {
    inRedesign = obj2.useCanSeeNUFChannelsForGuild(id);
  }
  const items = [];
  if (inRedesign) {
    items.push(id(2035).DismissibleContent.NUX_GUILD_CHANNEL_EXPLAINER);
  }
  const tmpResult = id(15883);
  if (tmpResult.useCanSeeCreatorMonetizationOnboardingV2Upsell(id)) {
    items.push(id(2035).DismissibleContent.CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL);
  }
  if (useIsGuildEligibleForRoleSubscriptionsUpsellDefault(id)) {
    items.push(id(2035).DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL);
  }
  const tmpResult2 = id(5812);
  if (tmpResult2.useCanUseRoleSubscriptionIAP(id)) {
    items.push(id(2035).DismissibleContent.GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL);
  }
  if (useIsEligibleForTierTemplateUpsellDefault(id)) {
    items.push(id(2035).DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL);
  }
  if (cResult[0] !== id) {
    const fn = function s(arg0) {
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
    };
    cResult[0] = id;
    cResult[1] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[1];
  }
  return jsx(SelectedDismissibleContentDefault, { contentTypes: items, groupName: constants.GUILD_HEADER_TOOLTIPS, children: tmp10 });
}) : ((inRedesign) => {
  inRedesign = inRedesign.inRedesign;
  const id = inRedesign.guild.id;
  const obj = id(15882);
  if (inRedesign) {
    inRedesign = obj.useCanSeeNUFChannelsForGuild(id);
  }
  const items = [];
  if (inRedesign) {
    items.push(id(2035).DismissibleContent.NUX_GUILD_CHANNEL_EXPLAINER);
  }
  const tmpResult = id(15883);
  if (tmpResult.useCanSeeCreatorMonetizationOnboardingV2Upsell(id)) {
    items.push(id(2035).DismissibleContent.CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL);
  }
  if (useIsGuildEligibleForRoleSubscriptionsUpsellDefault(id)) {
    items.push(id(2035).DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL);
  }
  const tmpResult2 = id(5812);
  if (tmpResult2.useCanUseRoleSubscriptionIAP(id)) {
    items.push(id(2035).DismissibleContent.GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL);
  }
  if (useIsEligibleForTierTemplateUpsellDefault(id)) {
    items.push(id(2035).DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL);
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
});
let closure_13 = tmp2;
let closure_14 = { code: "function GuildTooltipActionSheetsTsx1(){const{runOnJS,setShouldRender}=this.__closure;return runOnJS(setShouldRender)(true);}" };
let closure_15 = { code: "function GuildTooltipActionSheetsTsx2(){const{runOnJS,setShouldRender}=this.__closure;return runOnJS(setShouldRender)(true);}" };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let setShouldRender;
  let tmp4;
  let tmp5;
  let obj = require("react");
  const cResult = obj.c(4);
  const obj2 = react;
  [first, _require] = react.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let fn = function l() {
      let obj = ReanimatedRexport;
      const fn = function t() {
        const obj = closure_0(dependencyMap[20]);
        return obj.runOnJS(closure_1_0)(true);
      };
      fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setShouldRender };
      fn.__workletHash = 6076095421855;
      fn.__initData = __initData;
      ({ runOnJS: ReanimatedRexport.runOnJS, setShouldRender });
      obj.runOnUI(fn)();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp4 = fn;
    tmp5 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const effect = obj2.useEffect(tmp4, tmp5);
  let tmp7 = null;
  if (first) {
    let tmp9;
    if (cResult[2] !== arg0) {
      const merged = Object.assign(arg0);
      const tmp15 = <closure_13 />;
      cResult[2] = arg0;
      cResult[3] = tmp15;
      tmp9 = tmp15;
    } else {
      tmp9 = cResult[3];
    }
    tmp7 = tmp9;
  }
  return tmp7;
}) : ((arg0) => {
  let require;
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
    fn.__workletHash = 10416584823644;
    fn.__initData = __initData;
    ({ runOnJS: ReanimatedRexport.runOnJS, setShouldRender: require });
    obj.runOnUI(fn)();
  }, []);
  let tmp4 = null;
  if (tmp2) {
    const merged = Object.assign(arg0);
    tmp4 = <closure_13 />;
  }
  return tmp4;
});
const result = size.fileFinishedImporting("modules/guild_sidebar/native/GuildTooltipActionSheets.tsx");

export default tmp3;
export const GuildTooltipActionSheets = tmp2;
