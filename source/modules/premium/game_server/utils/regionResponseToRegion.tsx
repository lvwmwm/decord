// Module ID: 11519
// Function ID: 89738
// Name: regionResponseToRegion
// Dependencies: [2]
// Exports: default

// Module 11519 (regionResponseToRegion)
const result = require("set").fileFinishedImporting("modules/premium/game_server/utils/regionResponseToRegion.tsx");

export default function regionResponseToRegion(id) {
  return { id: id.id, name: id.name, countryCode: id.country_code, pingUrl: id.ping_url, enabled: id.enabled };
};
