// Module ID: 11811
// Function ID: 91674
// Name: useIsViewingPremiumMemberships
// Dependencies: [653, 1355, 3959, 3966, 2]
// Exports: default

// Module 11811 (useIsViewingPremiumMemberships)
import { Routes } from "ME";
import { StaticChannelRoute } from "set";

const result = require("_extends").fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = require(3966) /* isPseudoGuildId */.RouteParam;
  return null != require(3959) /* _extends */.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};
