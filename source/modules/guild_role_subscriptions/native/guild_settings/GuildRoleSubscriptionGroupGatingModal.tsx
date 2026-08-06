// Module ID: 16724
// Function ID: 16725
// Name: GuildRoleSubscriptionGroupGatingModal
// Dependencies: [32, 19, 16710, 14353, 21, 16714, 1236, 16704, 2]
// Exports: default

// Module 16724 (GuildRoleSubscriptionGroupGatingModal)
import _slicedToArray from "_slicedToArray";
import "noop";
import usePriceTiers from "usePriceTiers";
import { GuildRoleSubscriptionsTierScenes as closure_5 } from "MAX_SUBSCRIPTION_TIERS";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("usePriceTiers").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildRoleSubscriptionGroupGatingModal.tsx");

export default function GuildRoleSubscriptionGroupGatingModal(arg0) {
  let tmp2;
  let tmp3;
  [tmp2, tmp3] = callback(usePriceTiers.useGroupIsFullGateState(), 2);
  const obj = { title: null, description: null, canProceedToNextStep: true, nextStep: null };
  const tmp = callback(usePriceTiers.useGroupIsFullGateState(), 2);
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.N38nNP);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(require(1236) /* getSystemLocale */.t.csJWVI);
  obj[3] = constants.GROUP;
  const merged = Object.assign(arg0);
  obj.children = jsx(importDefault(16704), { isFullServerGating: tmp2, onChange: tmp3 });
  return jsx(importDefault(16714), { title: null, description: null, canProceedToNextStep: true, nextStep: null });
};
