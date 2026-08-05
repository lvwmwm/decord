// Module ID: 12011
// Function ID: 12012
// Name: useIsViewingPremiumMemberships
// Dependencies: [676, 1379, 4083, 4090, 2]
// Exports: default

// Module 12011 (useIsViewingPremiumMemberships)
import { Routes } from "ME";
import { StaticChannelRoute } from "set";

const result = require("_extends").fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = require(4090) /* RouteParam */.RouteParam;
  return null != require(4083) /* _extends */.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};
