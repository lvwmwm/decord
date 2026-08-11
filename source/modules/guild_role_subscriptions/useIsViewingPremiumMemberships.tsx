// Module ID: 12130
// Function ID: 12131
// Name: useIsViewingPremiumMemberships
// Dependencies: [676, 1398, 4137, 4144, 2]
// Exports: default

// Module 12130 (useIsViewingPremiumMemberships)
import { Routes } from "ME";
import { StaticChannelRoute } from "set";

const result = require("_extends").fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = require(4144) /* RouteParam */.RouteParam;
  return null != require(4137) /* _extends */.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};
