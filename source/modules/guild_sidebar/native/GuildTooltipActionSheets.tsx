// Module ID: 14941
// Function ID: 112495
// Name: NUFChannelsActionSheetImporter
// Dependencies: []
// Exports: default

// Module 14941 (NUFChannelsActionSheetImporter)
function NUFChannelsActionSheetImporter() {
  return arg1(dependencyMap[5])(dependencyMap[4], dependencyMap.paths);
}
function GuildRoleSubscriptionsUpsellActionSheetImporter() {
  return arg1(dependencyMap[5])(dependencyMap[6], dependencyMap.paths);
}
function GuildRoleSubscriptionsIAPUpsellActionSheetImporter() {
  return arg1(dependencyMap[5])(dependencyMap[7], dependencyMap.paths);
}
function CreatorMonetizationOnboardingV2UpsellActionSheetImporter() {
  return arg1(dependencyMap[5])(dependencyMap[8], dependencyMap.paths);
}
function TierTemplatesUpsellActionSheetImporter() {
  return arg1(dependencyMap[5])(dependencyMap[9], dependencyMap.paths);
}
class GuildTooltipActionSheets {
  constructor(arg0) {
    inRedesign = global.inRedesign;
    id = global.guild.id;
    arg1 = id;
    items = [];
    obj = arg1(dependencyMap[10]);
    if (inRedesign) {
      inRedesign = obj.useCanSeeNUFChannelsForGuild(id);
    }
    if (inRedesign) {
      tmp = arg1;
      tmp2 = dependencyMap;
      num = 11;
      arr = items.push(arg1(dependencyMap[11]).DismissibleContent.NUX_GUILD_CHANNEL_EXPLAINER);
    }
    obj2 = arg1(dependencyMap[12]);
    if (obj2.useCanSeeCreatorMonetizationOnboardingV2Upsell(id)) {
      tmp4 = arg1;
      tmp5 = dependencyMap;
      num2 = 11;
      arr1 = items.push(arg1(dependencyMap[11]).DismissibleContent.CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL);
    }
    if (importDefault(dependencyMap[13])(id)) {
      tmp7 = arg1;
      tmp8 = dependencyMap;
      num3 = 11;
      arr2 = items.push(arg1(dependencyMap[11]).DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL);
    }
    obj3 = arg1(dependencyMap[14]);
    if (obj3.useCanUseRoleSubscriptionIAP(id)) {
      tmp10 = arg1;
      tmp11 = dependencyMap;
      num4 = 11;
      arr3 = items.push(arg1(dependencyMap[11]).DismissibleContent.GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL);
    }
    if (importDefault(dependencyMap[15])(id)) {
      tmp13 = arg1;
      tmp14 = dependencyMap;
      num5 = 11;
      arr4 = items.push(arg1(dependencyMap[11]).DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL);
    }
    obj = {
      contentTypes: items,
      groupName: closure_5.GUILD_HEADER_TOOLTIPS,
      children(arg0) {
            let markAsDismissed;
            let visibleContent;
            ({ visibleContent, markAsDismissed } = arg0);
            const id = markAsDismissed;
            if (id(closure_2[11]).DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL === visibleContent) {
              let obj = { markAsDismissed, importer: closure_10, actionSheetKey: closure_7, guildId: id };
              return callback(id(closure_2[17]).DismissibleActionSheet, obj);
            } else if (id(closure_2[11]).DismissibleContent.GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL === visibleContent) {
              obj = { markAsDismissed, importer: closure_11, actionSheetKey: closure_7, guildId: id };
              return callback(id(closure_2[17]).DismissibleActionSheet, obj);
            } else if (id(closure_2[11]).DismissibleContent.CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL === visibleContent) {
              const obj1 = { markAsDismissed, importer: closure_12, actionSheetKey: closure_7, guildId: id };
              return callback(id(closure_2[17]).DismissibleActionSheet, obj1);
            } else if (id(closure_2[11]).DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL === visibleContent) {
              const obj2 = { actionSheetKey: closure_7, importer: closure_13, markAsDismissed, guildId: id };
              return callback(id(closure_2[17]).DismissibleActionSheet, obj2);
            } else if (id(closure_2[11]).DismissibleContent.NUX_GUILD_CHANNEL_EXPLAINER === visibleContent) {
              obj = {
                markAsDismissed(arg0) {
                    return markAsDismissed(arg0);
                  },
                actionSheetKey: closure_7,
                importer: closure_9
              };
              return callback(id(closure_2[17]).DismissibleActionSheet, obj);
            } else {
              return null;
            }
          }
    };
    return jsx(importDefault(dependencyMap[16]), obj);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = arg1(dependencyMap[2]).DismissibleContentGroupName;
const jsx = arg1(dependencyMap[3]).jsx;
let closure_7 = "GuildTooltipActionSheet";
let closure_8 = { code: "function GuildTooltipActionSheetsTsx1(){const{runOnJS,setShouldRender}=this.__closure;return runOnJS(setShouldRender)(true);}" };
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/guild_sidebar/native/GuildTooltipActionSheets.tsx");

export default function GuildTooltipActionSheetsGuard(arg0) {
  let tmp2;
  [tmp2, closure_0] = callback(React.useState(false), 2);
  const effect = React.useEffect(() => {
    let obj = callback(closure_2[18]);
    const fn = function t() {
      return callback(closure_2[18]).runOnJS(callback)(true);
    };
    obj = { runOnJS: callback(closure_2[18]).runOnJS, setShouldRender: callback };
    fn.__closure = obj;
    fn.__workletHash = 6076095421855;
    fn.__initData = closure_8;
    obj.runOnUI(fn)();
  }, []);
  let tmp4 = null;
  if (tmp2) {
    const obj = {};
    const merged = Object.assign(arg0);
    tmp4 = <GuildTooltipActionSheets {...obj} />;
  }
  return tmp4;
};
export { GuildTooltipActionSheets };
