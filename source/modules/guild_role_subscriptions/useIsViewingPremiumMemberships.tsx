// Module ID: 11951
// Function ID: 11952
// Name: useIsViewingPremiumMemberships
// Dependencies: [676, 1398, 4208, 4215, 2]
// Exports: default

// Module 11951 (useIsViewingPremiumMemberships)
import { Routes } from "ME";
import { StaticChannelRoute } from "set";

const result = require("_extends").fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = require(4215) /* RouteParam */.RouteParam;
  return null != require(4208) /* _extends */.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};
