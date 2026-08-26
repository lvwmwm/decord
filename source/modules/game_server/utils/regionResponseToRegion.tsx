// Module ID: 12120
// Function ID: 12121
// Name: regionResponseToRegion
// Dependencies: [2]
// Exports: default

// Module 12120 (regionResponseToRegion)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/game_server/utils/regionResponseToRegion.tsx");

export default function regionResponseToRegion(id) {
  return { id: id.id, name: id.name, countryCode: id.country_code, pingUrl: id.ping_url, enabled: id.enabled };
};
