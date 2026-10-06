// Module ID: 12161
// Function ID: 12162
// Name: regionResponseToRegion
// Dependencies: [2]
// Exports: default

// Module 12161 (regionResponseToRegion)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_server/utils/regionResponseToRegion.tsx");

export default function regionResponseToRegion(id) {
  return { id: id.id, name: id.name, countryCode: id.country_code, pingUrl: id.ping_url, enabled: id.enabled };
};
