// Module ID: 19508
// Function ID: 19509
// Name: getFrameIFrameQueryParams
// Dependencies: [11991, 19509, 19510, 19511, 2]
// Exports: default, useFrameIFrameQueryParams

// Module 19508 (getFrameIFrameQueryParams)
import DiscordEnvironment from "DiscordEnvironment" /* 11991 */;
import getFrameLaunchContextQueryParamsDefault from "getFrameLaunchContextQueryParams" /* 19509 */;
import getFrameSurfaceQueryParamsDefault from "getFrameSurfaceQueryParams" /* 19510 */;
import react from "react" /* 19511 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/getFrameIFrameQueryParams.tsx");

export default function getFrameIFrameQueryParams(data, platform) {
  let discordEnvQueryParams = arg2;
  if (arg2 === undefined) {
    const obj = DiscordEnvironment;
    discordEnvQueryParams = obj.getDiscordEnvQueryParams();
  }
  const obj2 = { instance_id: "example-cl-instance", platform, discord_proxy_ticket: data.data.proxyTicket };
  const merged = Object.assign(getFrameLaunchContextQueryParamsDefault(data.data));
  const merged1 = Object.assign(discordEnvQueryParams);
  const merged2 = Object.assign(getFrameSurfaceQueryParamsDefault(data.surface));
  return obj2;
};
export function useFrameIFrameQueryParams(data, platform) {
  let obj = react;
  const items = [data.data.url];
  let memoOne = obj.useMemoOne(() => {
    const obj = DiscordEnvironment;
    return obj.getDiscordEnvQueryParams();
  }, items);
  if (memoOne === undefined) {
    const tmpResult = DiscordEnvironment;
    memoOne = tmpResult.getDiscordEnvQueryParams();
  }
  const obj2 = { instance_id: "example-cl-instance", platform, discord_proxy_ticket: data.data.proxyTicket };
  const merged = Object.assign(getFrameLaunchContextQueryParamsDefault(data.data));
  const merged1 = Object.assign(memoOne);
  const merged2 = Object.assign(getFrameSurfaceQueryParamsDefault(data.surface));
  return obj2;
}
