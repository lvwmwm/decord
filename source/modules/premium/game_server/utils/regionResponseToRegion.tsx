// Module ID: 11508
// Function ID: 89663
// Name: regionResponseToRegion
// Dependencies: [284214097]
// Exports: default

// Module 11508 (regionResponseToRegion)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/premium/game_server/utils/regionResponseToRegion.tsx");

export default function regionResponseToRegion(id) {
  return { id: id.id, name: id.name, countryCode: id.country_code, pingUrl: id.ping_url, enabled: id.enabled };
};
