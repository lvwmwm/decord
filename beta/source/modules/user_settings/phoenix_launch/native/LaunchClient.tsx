// Module ID: 17193
// Function ID: 17194
// Name: LaunchClient
// Dependencies: [2]
// Exports: toLaunchClient

// Module 17193 (LaunchClient)
import size from "module_2" /* 2 */;

const LaunchClient = { PHOENIX: "phoenix", LEGACY: "legacy" };
const result = size.fileFinishedImporting("modules/user_settings/phoenix_launch/native/LaunchClient.tsx");

export { LaunchClient };
export function toLaunchClient(client) {
  return client === obj.PHOENIX ? obj.PHOENIX : obj.LEGACY;
}
