// Module ID: 12187
// Function ID: 12188
// Name: useIsViewingPremiumMemberships
// Dependencies: [676, 1398, 4178, 4185, 2]
// Exports: default

// Module 12187 (useIsViewingPremiumMemberships)
import { Routes } from "ME";
import { StaticChannelRoute } from "set";

const result = require("_extends").fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = require(4185) /* RouteParam */.RouteParam;
  return null != require(4178) /* _extends */.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};
