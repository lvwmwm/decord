// Module ID: 11509
// Function ID: 89688
// Name: regionResponseToRegion
// Dependencies: []
// Exports: default

// Module 11509 (regionResponseToRegion)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/premium/game_server/utils/regionResponseToRegion.tsx");

export default function regionResponseToRegion(id) {
  return { id: id.id, name: id.name, countryCode: id.country_code, pingUrl: id.ping_url, enabled: id.enabled };
};
