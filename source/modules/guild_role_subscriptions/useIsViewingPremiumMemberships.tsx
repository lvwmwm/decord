// Module ID: 12127
// Function ID: 12128
// Name: useIsViewingPremiumMemberships
// Dependencies: [676, 1379, 4135, 4142, 2]
// Exports: default

// Module 12127 (useIsViewingPremiumMemberships)
import { Routes } from "ME";
import { StaticChannelRoute } from "set";

const result = require("_extends").fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = require(4142) /* RouteParam */.RouteParam;
  return null != require(4135) /* _extends */.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};
