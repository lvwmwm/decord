// Module ID: 11699
// Function ID: 11700
// Name: regionResponseToRegion
// Dependencies: [2]
// Exports: default

// Module 11699 (regionResponseToRegion)
const result = require("set").fileFinishedImporting("modules/game_server/utils/regionResponseToRegion.tsx");

export default function regionResponseToRegion(id) {
  return { id: id.id, name: id.name, countryCode: id.country_code, pingUrl: id.ping_url, enabled: id.enabled };
};
