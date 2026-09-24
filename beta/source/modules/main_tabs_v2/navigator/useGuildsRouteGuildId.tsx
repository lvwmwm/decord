// Module ID: 16368
// Function ID: 16369
// Name: useGuildsRouteGuildId
// Dependencies: [558, 1489, 568, 2]
// Exports: default

// Module 16368 (useGuildsRouteGuildId)
import c from "c" /* 568 */;
import Link from "Link" /* 1489 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
let ReactCompilerGating = ReactCompilerGating_mod;
const fn = () => {
  const params = Link.useRoute().params;
  let guildId;
  if (params != null) {
    guildId = params.guildId;
  }
  return guildId;
};
const result1 = size.fileFinishedImporting("modules/main_tabs_v2/navigator/useGuildsRouteGuildId.tsx");

export default fn;
export const useGuildsRouteGuildAndChannelId = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  const route = Link.useRoute();
  let guildId;
  if (route != null) {
    const params = route.params;
    if (params != null) {
      guildId = params.guildId;
    }
  }
  let channelId;
  if (route != null) {
    const params2 = route.params;
    if (params2 != null) {
      channelId = params2.channelId;
    }
  }
  if (cResult[0] === guildId) {
    if (cResult[1] === channelId) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const items = [guildId, channelId];
  cResult[0] = guildId;
  cResult[1] = channelId;
  cResult[2] = items;
  tmp5 = items;
}) : (() => {
  const route = Link.useRoute();
  let guildId;
  if (route != null) {
    const params = route.params;
    if (params != null) {
      guildId = params.guildId;
    }
  }
  const items = [guildId, ];
  let channelId;
  if (route != null) {
    const params2 = route.params;
    if (params2 != null) {
      channelId = params2.channelId;
    }
  }
  items[1] = channelId;
  return items;
});
