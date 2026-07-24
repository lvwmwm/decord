// Module ID: 11546
// Function ID: 89973
// Name: createMockGame
// Dependencies: [4020, 11547, 2]

// Module 11546 (createMockGame)
function createMockGame(_1, name) {
  const obj = { id: _1, name, provider: require(4020) /* GameServerProviderType */.GameServerProviderType.SHOCKBYTE, plans: items1 };
  const items = [...items1.map((cost) => cost.cost)];
  obj.baseCost = Math.min.apply(items);
  obj.gameId = "1";
  return obj;
}
let obj = { id: "1", name: "GameServer #1", cost: 3 };
let items = [{ title: "2", description: "GB" }, { title: "1", description: "vCPU" }, { title: "25", description: "GB" }];
obj.specifications = items;
const items1 = [obj, , ];
obj = { id: "2", name: "GameServer #2", cost: 6 };
const items2 = [{ title: "2", description: "GB" }, { title: "1", description: "vCPU" }, { title: "25", description: "GB" }];
obj.specifications = items2;
items1[1] = obj;
obj = { id: "3", name: "GameServer #3", cost: 12 };
const items3 = [{ title: "2", description: "GB" }, { title: "1", description: "vCPU" }, { title: "25", description: "GB" }];
obj.specifications = items3;
items1[2] = obj;
const items4 = [createMockGame("1", "GameServer Test #1"), createMockGame("2", "GameServer Test #2"), createMockGame("3", "GameServer Test #3"), createMockGame("4", "GameServer Test #4"), createMockGame("5", "GameServer Test #5"), createMockGame("6", "GameServer Test #6"), createMockGame("7", "GameServer Test #7"), createMockGame("8", "GameServer Test #8"), createMockGame("9", "GameServer Test #9"), createMockGame("10", "GameServer Test #10"), createMockGame("11", "GameServer Test #11"), createMockGame("12", "GameServer Test #12")];
const obj1 = { id: "1", gameId: "1", name: "GameServer Test #1", port: "25565", regionId: "us-east", regionName: "US East", planId: items1[1].id, planName: items1[1].name, onlineConnectionsCount: 0, maxConnectionsCount: 10, status: require("GameServerStatus").GameServerStatus.ONLINE, serverIP: "127.0.0.1", gameServerPanelUrl: "https://google.com", entitlementId: "1" };
const items5 = [obj1, , , , , ];
const obj2 = { id: "2", gameId: "2", name: "GameServer Test #2", port: "25565", regionId: "us-east", regionName: "US East", planId: items1[1].id, planName: items1[1].name, onlineConnectionsCount: 0, maxConnectionsCount: 10, status: require("GameServerStatus").GameServerStatus.ONLINE, serverIP: "127.0.0.1", gameServerPanelUrl: "https://google.com", entitlementId: "2" };
items5[1] = obj2;
const obj3 = { id: "3", gameId: "3", name: "GameServer Test #3", port: "25565", regionId: "us-east", regionName: "US East", planId: items1[1].id, planName: items1[1].name, onlineConnectionsCount: 0, maxConnectionsCount: 10, status: require("GameServerStatus").GameServerStatus.ONLINE, serverIP: "127.0.0.1", gameServerPanelUrl: "https://google.com", entitlementId: "3" };
items5[2] = obj3;
const obj4 = { id: "4", gameId: "4", name: "GameServer Test #4", port: "25565", regionId: "us-east", regionName: "US East", planId: items1[1].id, planName: items1[1].name, onlineConnectionsCount: 0, maxConnectionsCount: 10, status: require("GameServerStatus").GameServerStatus.ONLINE, serverIP: "127.0.0.1", gameServerPanelUrl: "https://google.com", entitlementId: "4" };
items5[3] = obj4;
const obj5 = { id: "5", gameId: "5", name: "GameServer Test #5", port: "25565", regionId: "us-east", regionName: "US East", planId: items1[1].id, planName: items1[1].name, onlineConnectionsCount: 0, maxConnectionsCount: 10, status: require("GameServerStatus").GameServerStatus.ONLINE, serverIP: "127.0.0.1", gameServerPanelUrl: "https://google.com", entitlementId: "5" };
items5[4] = obj5;
const obj6 = { id: "6", gameId: "6", name: "GameServer Test #6", port: "25565", regionId: "us-east", regionName: "US East", planId: items1[1].id, planName: items1[1].name, onlineConnectionsCount: 0, maxConnectionsCount: 10, status: require("GameServerStatus").GameServerStatus.ONLINE, serverIP: "127.0.0.1", gameServerPanelUrl: "https://google.com", entitlementId: "6" };
items5[5] = obj6;
const result = require("set").fileFinishedImporting("modules/premium/game_server/mocks/GameServerMocks.tsx");

export const GAME_SERVER_GAME_MOCKS = items4;
export const GAME_SERVER_INSTANCE_MOCKS = items5;
