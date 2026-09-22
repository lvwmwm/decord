// Module ID: 16723
// Function ID: 16724
// Name: getFrameIFrameQueryParams
// Dependencies: [16724, 9767, 16725, 2]
// Exports: default

// Module 16723 (getFrameIFrameQueryParams)
import DiscordEnvironment from "DiscordEnvironment" /* 9767 */;
import getFrameLaunchContextQueryParamsDefault from "getFrameLaunchContextQueryParams" /* 16724 */;
import getFrameSurfaceQueryParamsDefault from "getFrameSurfaceQueryParams" /* 16725 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/getFrameIFrameQueryParams.tsx");

export default function getFrameIFrameQueryParams(data, platform) {
  const merged = Object.assign(getFrameLaunchContextQueryParamsDefault(data.data));
  const merged1 = Object.assign(DiscordEnvironment.getDiscordEnvQueryParams());
  const merged2 = Object.assign(getFrameSurfaceQueryParamsDefault(data.surface));
  return { instance_id: "example-cl-instance", platform, discord_proxy_ticket: data.data.proxyTicket };
};
