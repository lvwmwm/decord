// Module ID: 11850
// Function ID: 91825
// Name: useIsViewingPremiumMemberships
// Dependencies: [653, 1355, 3993, 4000, 2]
// Exports: default

// Module 11850 (useIsViewingPremiumMemberships)
import { Routes } from "ME";
import { StaticChannelRoute } from "set";

const result = require("_extends").fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = require(4000) /* isPseudoGuildId */.RouteParam;
  return null != require(3993) /* _extends */.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};
