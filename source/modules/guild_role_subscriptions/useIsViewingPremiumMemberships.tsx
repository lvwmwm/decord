// Module ID: 11889
// Function ID: 11890
// Name: useIsViewingPremiumMemberships
// Dependencies: [676, 1379, 4021, 4028, 2]
// Exports: default

// Module 11889 (useIsViewingPremiumMemberships)
import { Routes } from "ME";
import { StaticChannelRoute } from "set";

const result = require("_extends").fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = require(4028) /* RouteParam */.RouteParam;
  return null != require(4021) /* _extends */.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};
