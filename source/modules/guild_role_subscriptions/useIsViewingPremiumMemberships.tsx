// Module ID: 12060
// Function ID: 12061
// Name: useIsViewingPremiumMemberships
// Dependencies: [676, 1379, 4129, 4136, 2]
// Exports: default

// Module 12060 (useIsViewingPremiumMemberships)
import { Routes } from "ME";
import { StaticChannelRoute } from "set";

const result = require("_extends").fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = require(4136) /* RouteParam */.RouteParam;
  return null != require(4129) /* _extends */.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};
