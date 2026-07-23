// Module ID: 11811
// Function ID: 91635
// Name: useCanPinChannelsInGuild
// Dependencies: [1428, 6767, 2]
// Exports: useCanPinChannelsInGuild

// Module 11811 (useCanPinChannelsInGuild)
import ApexExperiment from "ApexExperiment";

let obj = { name: "2026-04-channel-pinning", kind: "user", defaultConfig: { canPinEverywhere: false }, variations: { [1]: { canPinEverywhere: true } } };
let closure_2 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/channel/ChannelPinningExperiment.tsx");

export const useCanPinChannelsInGuild = function useCanPinChannelsInGuild(guild_id) {
  let obj = require(6767) /* useOptInEnabledForGuild */;
  const optInEnabledForGuild = obj.useOptInEnabledForGuild(guild_id);
  const canPinEverywhere = closure_2.useConfig({ location: "useCanPinChannelsInGuild" }).canPinEverywhere;
  obj = {};
  let tmp2 = optInEnabledForGuild;
  if (!optInEnabledForGuild) {
    tmp2 = canPinEverywhere;
  }
  obj.canPin = tmp2;
  obj.pinningNewlyAvailable = !optInEnabledForGuild && canPinEverywhere;
  return obj;
};
