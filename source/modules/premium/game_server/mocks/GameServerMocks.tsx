// Module ID: 11505
// Function ID: 89653
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
let obj = { 0: "<string:1900034316>", -9223372036854775808: "a", 9223372036854775807: "<string:429033554>" };
const items = [{}, { accessibilityRole: null, y: null }, {}];
obj.specifications = items;
const items1 = [obj, , ];
const items2 = [{}, { accessibilityRole: null, y: null }, {}];
items1[1] = { specifications: items2 };
obj = { 0: true, -9223372036854775808: true, 9223372036854775807: true };
const items3 = [{}, { accessibilityRole: null, y: null }, {}];
obj.specifications = items3;
items1[2] = obj;
const items4 = [createMockGame("1", "GameServer Test #1"), createMockGame("2", "GameServer Test #2"), createMockGame("3", "GameServer Test #3"), createMockGame("4", "GameServer Test #4"), createMockGame("5", "GameServer Test #5"), createMockGame("6", "GameServer Test #6"), createMockGame("7", "GameServer Test #7"), createMockGame("8", "GameServer Test #8"), createMockGame("9", "GameServer Test #9"), createMockGame("10", "GameServer Test #10"), createMockGame("11", "GameServer Test #11"), createMockGame("12", "GameServer Test #12")];
obj = { planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE };
const items5 = [obj, { planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE }, , , , ];
const obj1 = { planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE };
items5[2] = { planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE };
const obj2 = { planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE };
items5[3] = { planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE };
const obj4 = { <string:1387177987>: 467354264, <string:91941855>: 990380034, <string:2380320338>: 1090584577, <string:675631798>: 148094, <string:3429137821>: -2092785823, <string:1364654947>: 33555055, <string:2690862738>: 1107296606, <string:1449441019>: 159618, <string:1375425706>: 74368, <string:1650721546>: 40976962, <string:1689755899>: 23824384, <string:2857786426>: 1900102144, <string:2959330405>: -791937022, FadeOutDown: -717160447, planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE };
items5[4] = obj4;
const obj3 = { planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE };
items5[5] = { planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE };
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/premium/game_server/mocks/GameServerMocks.tsx");

export const GAME_SERVER_GAME_MOCKS = items4;
export const GAME_SERVER_INSTANCE_MOCKS = items5;
