// Module ID: 12045
// Function ID: 12046
// Name: useIsViewingPremiumMemberships
// Dependencies: [676, 1379, 4112, 4119, 2]
// Exports: default

// Module 12045 (useIsViewingPremiumMemberships)
import { Routes } from "ME";
import { StaticChannelRoute } from "set";

const result = require("_extends").fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = require(4119) /* RouteParam */.RouteParam;
  return null != require(4112) /* _extends */.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};
