// Module ID: 19214
// Function ID: 19215
// Name: getFrameIFrameQueryParams
// Dependencies: [10745, 19215, 19216, 19217, 2]
// Exports: default, useFrameIFrameQueryParams

// Module 19214 (getFrameIFrameQueryParams)
import DiscordEnvironment from "DiscordEnvironment" /* 10745 */;
import getFrameLaunchContextQueryParamsDefault from "getFrameLaunchContextQueryParams" /* 19215 */;
import getFrameSurfaceQueryParamsDefault from "getFrameSurfaceQueryParams" /* 19216 */;
import react from "react" /* 19217 */;
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
