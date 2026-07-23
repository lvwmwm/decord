// Module ID: 11807
// Function ID: 91626
// Name: useIsViewingPremiumMemberships
// Dependencies: [653, 1355, 3958, 3965, 2]
// Exports: default

// Module 11807 (useIsViewingPremiumMemberships)
import { Routes } from "ME";
import { StaticChannelRoute } from "set";

const result = require("_extends").fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = require(3965) /* isPseudoGuildId */.RouteParam;
  return null != require(3958) /* _extends */.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};
