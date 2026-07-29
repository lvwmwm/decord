// Module ID: 11579
// Function ID: 11580
// Name: regionResponseToRegion
// Dependencies: [2]
// Exports: default

// Module 11579 (regionResponseToRegion)
const result = require("set").fileFinishedImporting("modules/premium/game_server/utils/regionResponseToRegion.tsx");

export default function regionResponseToRegion(id) {
  return { id: id.id, name: id.name, countryCode: id.country_code, pingUrl: id.ping_url, enabled: id.enabled };
};
