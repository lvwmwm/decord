// Module ID: 4038
// Function ID: 33630
// Name: gameServerResponseToInstance
// Dependencies: []
// Exports: default

// Module 4038 (gameServerResponseToInstance)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/premium/game_server/utils/gameServerResponseToInstance.tsx");

export default function gameServerResponseToInstance(id) {
  const obj = { id: id.id, name: id.name, regionId: id.region_id, regionName: id.region_name, planId: id.sku_id, planName: id.plan_name };
  const players_count = id.players_count;
  let num = 0;
  if (null != players_count) {
    num = players_count;
  }
  obj.onlineConnectionsCount = num;
  ({ max_players_count: obj.maxConnectionsCount, ip: obj.serverIP, port: obj.port, entitlement_id: obj.entitlementId, provider_type: obj.providerType, provider_url: obj.gameServerPanelUrl, status: obj.status, game_id: obj.gameId, game_config: obj.gameConfig } = id);
  return obj;
};
