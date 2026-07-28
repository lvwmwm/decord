// Module ID: 16548
// Function ID: 128807
// Name: GuildRoleSubscriptionGroupGatingModal
// Dependencies: [57, 31, 16534, 14200, 33, 16538, 1212, 16528, 2]
// Exports: default

// Module 16548 (GuildRoleSubscriptionGroupGatingModal)
import _slicedToArray from "_slicedToArray";
import "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { GuildRoleSubscriptionsTierScenes as closure_5 } from "MAX_SUBSCRIPTION_TIERS";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildRoleSubscriptionGroupGatingModal.tsx");

export default function GuildRoleSubscriptionGroupGatingModal(arg0) {
  let tmp2;
  let tmp3;
  [tmp2, tmp3] = callback(_createForOfIteratorHelperLoose.useGroupIsFullGateState(), 2);
  const obj = {};
  const tmp = callback(_createForOfIteratorHelperLoose.useGroupIsFullGateState(), 2);
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.N38nNP);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl2.string(require(1212) /* getSystemLocale */.t.csJWVI);
  obj.canProceedToNextStep = true;
  obj.nextStep = constants.GROUP;
  const merged = Object.assign(arg0);
  obj["children"] = jsx(importDefault(16528), { isFullServerGating: tmp2, onChange: tmp3 });
  return jsx(importDefault(16538), {});
};
