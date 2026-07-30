// Module ID: 11871
// Function ID: 11872
// Name: useIsViewingPremiumMemberships
// Dependencies: [676, 1379, 4017, 4024, 2]
// Exports: default

// Module 11871 (useIsViewingPremiumMemberships)
import { Routes } from "ME";
import { StaticChannelRoute } from "set";

const result = require("_extends").fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = require(4024) /* RouteParam */.RouteParam;
  return null != require(4017) /* _extends */.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};
