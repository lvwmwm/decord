// Module ID: 18193
// Function ID: 18194
// Name: GuildSettingsRoleSubscriptionContainer
// Dependencies: [19, 17, 2063, 1074, 21, 4756, 504, 18169, 12476, 18142, 1115, 15483, 18183, 2]
// Exports: default

// Module 18193 (GuildSettingsRoleSubscriptionContainer)
import GroupListingsFetchContext from "GroupListingsFetchContext" /* 15483 */;
import useOnboardingMonetizationEnableFlowDefault from "useOnboardingMonetizationEnableFlow" /* 18169 */;
import RoleSubscriptionSettingsDisabledContext from "RoleSubscriptionSettingsDisabledContext" /* 18183 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2063 */;

require = fn;
function ApplicationRejectedNotice(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_9();
  const items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  if (stateFromStores != null) {
    const features = stateFromStores.features;
    const hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED);
  }
  if (stateFromStores != null) {
    const features2 = stateFromStores.features;
    const hasItem1 = features2.has(GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
  }
  const obj = guildId(504);
  ({ resubmissionError, requestRejectedNoticeText, reapplyNoticeText } = useOnboardingMonetizationEnableFlowDefault(stateFromStores));
  if (null != resubmissionError) {
    const obj2 = { children: resubmissionError.getAnyErrorMessage() };
    let tmp14 = closure_7(tmp9(12476), obj2);
    const tmp9Result = tmp9(12476);
  } else if (null != requestRejectedNoticeText) {
    const obj3 = { notice: requestRejectedNoticeText };
    tmp14 = closure_7(tmp9(18142), obj3);
  } else if (tmp13) {
    const obj4 = { notice: null };
    const intl3 = tmp2(1115).intl;
    obj4.notice = intl3.string(tmp2(1115).t.MyJpJT);
    tmp14 = closure_7(tmp9(18142), obj4);
    const tmp9Result5 = tmp9(18142);
  } else if (null != reapplyNoticeText) {
    const obj5 = { notice: reapplyNoticeText, ctaLabel: null, onClick: null, submitting: null };
    const intl2 = tmp2(1115).intl;
    obj5.ctaLabel = intl2.string(tmp2(1115).t["YKw/NQ"]);
    obj5.onClick = tmp12;
    obj5.submitting = tmp11;
    tmp14 = closure_7(tmp9(18142), obj5);
    const tmp9Result6 = tmp9(18142);
  } else if (true === hasItem1) {
    const obj6 = { notice: null };
    const intl = tmp2(1115).intl;
    obj6.notice = intl.string(tmp2(1115).t.e2g9sW);
    tmp14 = closure_7(tmp9(18142), obj6);
    const tmp9Result7 = tmp9(18142);
  } else {
    tmp14 = null;
    if (true === hasItem) {
      const obj7 = { notice: null };
      const intl4 = tmp2(1115).intl;
      obj7.notice = intl4.string(tmp2(1115).t.rxI9sl);
      tmp14 = closure_7(tmp9(18142), obj7);
      const tmp9Result8 = tmp9(18142);
    }
  }
  let tmp24 = null;
  if (null != tmp14) {
    const obj8 = { style: tmp.warningBlockContainer, children: tmp14 };
    tmp24 = closure_7(closure_4, obj8);
  }
  return tmp24;
}
function GuildSettingsRoleSubscription(arg0) {
  ({ guildId, children } = arg0);
  const tmp = closure_9();
  if (obj.useGroupListingsFetchContext()) {
    const obj2 = { style: tmp.container, children: null };
    const obj3 = { guildId };
    const items = [React5(ApplicationRejectedNotice, obj3), children];
    obj2.children = items;
    let tmp5 = React6(React4, obj2);
  } else {
    const obj4 = { style: tmp.spinner, children: React5(React3, {}) };
    tmp5 = React5(React4, obj4);
  }
  return tmp5;
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: c3, View: closure_4 } = get_ActivityIndicator);
const GuildFeatures = fn(1074).GuildFeatures;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4756);
let closure_9 = createStyles.createStyles({ container: { flex: 1 }, warningBlockContainer: { marginHorizontal: 16, marginTop: 16 }, spinner: { marginTop: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionContainer.tsx");

export default function GuildSettingsRoleSubscriptionContainer(guildId) {
  const obj = { guildId: guildId.guildId, refetchOnMount: true, children: null };
  const obj2 = { guildId: guildId.guildId, children: null };
  const merged = Object.assign(guildId);
  obj2.children = React5(GuildSettingsRoleSubscription, {});
  obj.children = React5(RoleSubscriptionSettingsDisabledContext.RoleSubscriptionSettingsDisabledContextProvider, obj2);
  return React5(GroupListingsFetchContext.GroupListingsFetchContextProvider, obj);
};
