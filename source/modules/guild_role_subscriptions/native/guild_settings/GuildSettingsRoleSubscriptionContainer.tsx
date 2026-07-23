// Module ID: 16429
// Function ID: 128022
// Name: ApplicationRejectedNotice
// Dependencies: [31, 27, 1838, 653, 33, 4130, 566, 16405, 11329, 16378, 1212, 14102, 16419, 2]
// Exports: default

// Module 16429 (ApplicationRejectedNotice)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import closure_5 from "_createForOfIteratorHelperLoose";
import { GuildFeatures } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_7;
let closure_8;
const require = arg1;
function ApplicationRejectedNotice(guildId) {
  let reapplyNoticeText;
  let requestRejectedNoticeText;
  let resubmissionError;
  guildId = guildId.guildId;
  let obj = guildId(566);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getGuild(guildId));
  if (null != stateFromStores) {
    const features = stateFromStores.features;
    const hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED);
  }
  if (null != stateFromStores) {
    const features2 = stateFromStores.features;
    const hasItem1 = features2.has(GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
  }
  const tmp = callback3();
  ({ resubmissionError, requestRejectedNoticeText, reapplyNoticeText } = importDefault(16405)(stateFromStores));
  if (null != resubmissionError) {
    obj = { children: resubmissionError.getAnyErrorMessage() };
    let tmp11 = callback(importDefault(11329), obj);
    const tmp33 = importDefault(11329);
  } else if (null != requestRejectedNoticeText) {
    obj = { notice: requestRejectedNoticeText };
    tmp11 = callback(importDefault(16378), obj);
  } else if (tmp10) {
    const obj1 = {};
    const intl3 = guildId(1212).intl;
    obj1.notice = intl3.string(guildId(1212).t.MyJpJT);
    tmp11 = callback(importDefault(16378), obj1);
    const tmp25 = importDefault(16378);
  } else if (null != reapplyNoticeText) {
    const obj2 = { notice: reapplyNoticeText };
    const intl2 = guildId(1212).intl;
    obj2.ctaLabel = intl2.string(guildId(1212).t["YKw/NQ"]);
    obj2.onClick = tmp9;
    obj2.submitting = tmp8;
    tmp11 = callback(importDefault(16378), obj2);
    const tmp20 = importDefault(16378);
  } else if (true === hasItem1) {
    const obj3 = {};
    const intl = guildId(1212).intl;
    obj3.notice = intl.string(guildId(1212).t.e2g9sW);
    tmp11 = callback(importDefault(16378), obj3);
    const tmp15 = importDefault(16378);
  } else {
    tmp11 = null;
    if (true === hasItem) {
      const obj4 = {};
      const intl4 = guildId(1212).intl;
      obj4.notice = intl4.string(guildId(1212).t.rxI9sl);
      tmp11 = callback(importDefault(16378), obj4);
      const tmp40 = importDefault(16378);
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
  let obj = require(14102) /* useGroupListingsFetchContext */;
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
({ ActivityIndicator: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1 }, warningBlockContainer: { marginHorizontal: 16, marginTop: 16 }, spinner: { marginTop: 12 } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionContainer.tsx");

export default function GuildSettingsRoleSubscriptionContainer(guildId) {
  let obj = { guildId: guildId.guildId, refetchOnMount: true };
  obj = { guildId: guildId.guildId };
  obj = {};
  const merged = Object.assign(guildId);
  obj.children = callback(GuildSettingsRoleSubscription, obj);
  obj.children = callback(require(16419) /* useRoleSubscriptionSettingsDisabled */.RoleSubscriptionSettingsDisabledContextProvider, obj);
  return callback(require(14102) /* useGroupListingsFetchContext */.GroupListingsFetchContextProvider, obj);
};
