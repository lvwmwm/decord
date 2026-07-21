// Module ID: 11505
// Function ID: 89665
// Name: createMockGame
// Dependencies: []

// Module 11505 (createMockGame)
function createMockGame(1, name) {
  const obj = { id: _1, name, provider: require(dependencyMap[0]).GameServerProviderType.SHOCKBYTE, plans: items1 };
  const items = [...closure_2.map((cost) => cost.cost)];
  obj.baseCost = Math.min.apply(items);
  obj.gameId = "1";
  return obj;
}
let obj = { "Bool(true)": "<string:1900034316>", "Bool(true)": "a", "Bool(true)": "<string:2618313298>" };
const items = [{ flexDirection: false, alignItems: false }, { flexDirection: null, alignItems: null }, {}];
obj.specifications = items;
const items1 = [obj, , ];
const items2 = [{ flexDirection: false, alignItems: false }, { flexDirection: null, alignItems: null }, {}];
items1[1] = { specifications: items2 };
obj = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null };
const items3 = [{ flexDirection: false, alignItems: false }, { flexDirection: null, alignItems: null }, {}];
obj.specifications = items3;
items1[2] = obj;
const items4 = [createMockGame("1", "GameServer Test #1"), createMockGame("2", "GameServer Test #2"), createMockGame("3", "GameServer Test #3"), createMockGame("4", "GameServer Test #4"), createMockGame("5", "GameServer Test #5"), createMockGame("6", "GameServer Test #6"), createMockGame("7", "GameServer Test #7"), createMockGame("8", "GameServer Test #8"), createMockGame("9", "GameServer Test #9"), createMockGame("10", "GameServer Test #10"), createMockGame("11", "GameServer Test #11"), createMockGame("12", "GameServer Test #12")];
obj = { planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE };
const items5 = [obj, { planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE }, , , , ];
const obj1 = { planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE };
items5[2] = { planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE };
const obj2 = { planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE };
items5[3] = { planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE };
const obj4 = { internal_analyticTag: 478364312, resizeMethod: 266993666, guild_metadata: 1090584577, guild_features_size: 103761, isMessageRequestOrSpamRequest: -1186816159, hasShopDiscount: -1224736145, unstable_next: 1107296570, "Null": 159672, "Null": 74033, "Null": 40993346, "Null": 23806208, "Null": 1904296448, "Null": -782761982, "Null": 205586433, planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE };
items5[4] = obj4;
const obj3 = { planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE };
items5[5] = { planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE };
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/premium/game_server/mocks/GameServerMocks.tsx");

export const GAME_SERVER_GAME_MOCKS = items4;
export const GAME_SERVER_INSTANCE_MOCKS = items5;
