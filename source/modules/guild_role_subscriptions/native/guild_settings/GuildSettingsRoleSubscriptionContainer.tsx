// Module ID: 16312
// Function ID: 125848
// Name: ApplicationRejectedNotice
// Dependencies: []
// Exports: default

// Module 16312 (ApplicationRejectedNotice)
function ApplicationRejectedNotice(guildId) {
  let reapplyNoticeText;
  let requestRejectedNoticeText;
  let resubmissionError;
  const arg1 = guildId.guildId;
  let obj = arg1(dependencyMap[6]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(guildId));
  if (null != stateFromStores) {
    const features = stateFromStores.features;
    const hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED);
  }
  if (null != stateFromStores) {
    const features2 = stateFromStores.features;
    const hasItem1 = features2.has(GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
  }
  const tmp = callback3();
  ({ resubmissionError, requestRejectedNoticeText, reapplyNoticeText } = importDefault(dependencyMap[7])(stateFromStores));
  if (null != resubmissionError) {
    obj = { children: resubmissionError.getAnyErrorMessage() };
    let tmp11 = callback(importDefault(dependencyMap[8]), obj);
    const tmp33 = importDefault(dependencyMap[8]);
  } else if (null != requestRejectedNoticeText) {
    obj = { notice: requestRejectedNoticeText };
    tmp11 = callback(importDefault(dependencyMap[9]), obj);
  } else if (tmp10) {
    const obj1 = {};
    const intl3 = arg1(dependencyMap[10]).intl;
    obj1.notice = intl3.string(arg1(dependencyMap[10]).t.MyJpJT);
    tmp11 = callback(importDefault(dependencyMap[9]), obj1);
    const tmp25 = importDefault(dependencyMap[9]);
  } else if (null != reapplyNoticeText) {
    const obj2 = { notice: reapplyNoticeText };
    const intl2 = arg1(dependencyMap[10]).intl;
    obj2.ctaLabel = intl2.string(arg1(dependencyMap[10]).t.YKw/NQ);
    obj2.onClick = tmp9;
    obj2.submitting = tmp8;
    tmp11 = callback(importDefault(dependencyMap[9]), obj2);
    const tmp20 = importDefault(dependencyMap[9]);
  } else if (true === hasItem1) {
    const obj3 = {};
    const intl = arg1(dependencyMap[10]).intl;
    obj3.notice = intl.string(arg1(dependencyMap[10]).t.e2g9sW);
    tmp11 = callback(importDefault(dependencyMap[9]), obj3);
    const tmp15 = importDefault(dependencyMap[9]);
  } else {
    tmp11 = null;
    if (true === hasItem) {
      const obj4 = {};
      const intl4 = arg1(dependencyMap[10]).intl;
      obj4.notice = intl4.string(arg1(dependencyMap[10]).t.rxI9sl);
      tmp11 = callback(importDefault(dependencyMap[9]), obj4);
      const tmp40 = importDefault(dependencyMap[9]);
    }
  }
  let tmp34 = null;
  if (null != tmp11) {
    const obj5 = { style: tmp.warningBlockContainer, children: tmp11 };
    tmp34 = callback(closure_4, obj5);
  }
  return tmp34;
}
function GuildSettingsRoleSubscription(arg0) {
  let children;
  let guildId;
  ({ guildId, children } = arg0);
  const tmp = callback3();
  let obj = arg1(dependencyMap[11]);
  if (obj.useGroupListingsFetchContext()) {
    obj = { style: tmp.container };
    obj = { guildId };
    const items = [callback(ApplicationRejectedNotice, obj), children];
    obj.children = items;
    let tmp6 = callback2(closure_4, obj);
  } else {
    const obj1 = { style: tmp.spinner, children: callback(closure_3, {}) };
    tmp6 = callback(closure_4, obj1);
  }
  return tmp6;
}
importAll(dependencyMap[0]);
({ ActivityIndicator: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = importDefault(dependencyMap[2]);
const GuildFeatures = arg1(dependencyMap[3]).GuildFeatures;
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const tmp4 = arg1(dependencyMap[4]);
let closure_9 = arg1(dependencyMap[5]).createStyles({ container: { flex: 1 }, warningBlockContainer: { frameRateDecode: null, frameRateEncode: null }, spinner: { marginTop: 12 } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionContainer.tsx");

export default function GuildSettingsRoleSubscriptionContainer(guildId) {
  let obj = { guildId: guildId.guildId, refetchOnMount: true };
  obj = { guildId: guildId.guildId };
  obj = {};
  const merged = Object.assign(guildId);
  obj.children = callback(GuildSettingsRoleSubscription, obj);
  obj.children = callback(arg1(dependencyMap[12]).RoleSubscriptionSettingsDisabledContextProvider, obj);
  return callback(arg1(dependencyMap[11]).GroupListingsFetchContextProvider, obj);
};
