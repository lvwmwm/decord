// Module ID: 17562
// Function ID: 17563
// Name: GuildSettingsRoleSubscriptionContainer
// Dependencies: [19, 17, 2067, 1074, 21, 4836, 504, 17538, 11705, 17511, 1115, 14758, 17552, 2]
// Exports: default

// Module 17562 (GuildSettingsRoleSubscriptionContainer)
import Constants from "Constants" /* 1074 */;
import ErrorBlockDefault from "ErrorBlock" /* 11705 */;
import GroupListingsFetchContext from "GroupListingsFetchContext" /* 14758 */;
import WarningNoticeDefault from "WarningNotice" /* 17511 */;
import useOnboardingMonetizationEnableFlowDefault from "useOnboardingMonetizationEnableFlow" /* 17538 */;
import RoleSubscriptionSettingsDisabledContext from "RoleSubscriptionSettingsDisabledContext" /* 17552 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 2067 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
function ApplicationRejectedNotice(guildId) {
  let hasItem;
  let hasItem1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let reapplyNoticeText;
  let requestRejectedNoticeText;
  let resubmissionError;
  let tmp14;
  guildId = guildId.guildId;
  const items = [GuildStore];
  const tmp = closure_9();
  const obj = guildId(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  if (stateFromStores != null) {
    const features = stateFromStores.features;
    hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED);
  }
  if (stateFromStores != null) {
    const features2 = stateFromStores.features;
    hasItem1 = features2.has(GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
  }
  ({ resubmissionError, requestRejectedNoticeText, reapplyNoticeText } = useOnboardingMonetizationEnableFlowDefault(stateFromStores));
  useOnboardingMonetizationEnableFlowDefault(stateFromStores);
  if (null != resubmissionError) {
    const obj2 = { children: resubmissionError.getAnyErrorMessage() };
    const tmp9Result = ErrorBlockDefault;
    tmp14 = closure_7(tmp9Result, obj2);
  } else if (null != requestRejectedNoticeText) {
    const obj3 = { notice: requestRejectedNoticeText };
    tmp14 = closure_7(tmp9(17511), obj3);
  } else if (tmp13) {
    const obj4 = { notice: intl3.string(guildId(1115).t.MyJpJT) };
    const tmp9Result5 = WarningNoticeDefault;
    intl3 = tmp2(1115).intl;
    tmp14 = closure_7(tmp9Result5, obj4);
  } else if (null != reapplyNoticeText) {
    const obj5 = { notice: reapplyNoticeText, ctaLabel: intl2.string(guildId(1115).t["YKw/NQ"]), onClick: tmp12, submitting: tmp11 };
    const tmp9Result6 = WarningNoticeDefault;
    intl2 = tmp2(1115).intl;
    tmp14 = closure_7(tmp9Result6, obj5);
  } else if (true === hasItem1) {
    const obj6 = { notice: intl.string(guildId(1115).t.e2g9sW) };
    const tmp9Result7 = WarningNoticeDefault;
    intl = tmp2(1115).intl;
    tmp14 = closure_7(tmp9Result7, obj6);
  } else {
    tmp14 = null;
    if (true === hasItem) {
      const obj7 = { notice: intl4.string(guildId(1115).t.rxI9sl) };
      const tmp9Result8 = WarningNoticeDefault;
      intl4 = tmp2(1115).intl;
      tmp14 = closure_7(tmp9Result8, obj7);
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
  let children;
  let guildId;
  let items;
  let tmp5;
  ({ guildId, children } = arg0);
  const tmp = closure_9();
  const obj = GroupListingsFetchContext;
  if (obj.useGroupListingsFetchContext()) {
    const obj2 = { style: tmp.container, children: items };
    const obj3 = { guildId };
    items = [metroImportDefault(ApplicationRejectedNotice, obj3), children];
    tmp5 = metroImportAll(React3, obj2);
  } else {
    const obj4 = { style: tmp.spinner, children: metroImportDefault(_false, {}) };
    tmp5 = metroImportDefault(React3, obj4);
  }
  return tmp5;
}
({ ActivityIndicator: c3, View: closure_4 } = react_native);
const GuildFeatures = Constants.GuildFeatures;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ container: { flex: 1 }, warningBlockContainer: { marginHorizontal: 16, marginTop: 16 }, spinner: { marginTop: 12 } });
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionContainer.tsx");

export default function GuildSettingsRoleSubscriptionContainer(guildId) {
  let RoleSubscriptionSettingsDisabledContextProvider;
  let obj2;
  let obj3;
  const obj = { guildId: guildId.guildId, refetchOnMount: true, children: metroImportDefault(RoleSubscriptionSettingsDisabledContextProvider, obj2) };
  const GroupListingsFetchContextProvider = GroupListingsFetchContext.GroupListingsFetchContextProvider;
  obj2 = { guildId: guildId.guildId, children: metroImportDefault(GuildSettingsRoleSubscription, obj3) };
  obj3 = {};
  RoleSubscriptionSettingsDisabledContextProvider = RoleSubscriptionSettingsDisabledContext.RoleSubscriptionSettingsDisabledContextProvider;
  const merged = Object.assign(guildId);
  return metroImportDefault(GroupListingsFetchContextProvider, obj);
};
