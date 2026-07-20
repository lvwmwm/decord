// Module ID: 11498
// Function ID: 89629
// Name: createMockGame
// Dependencies: []

// Module 11498 (createMockGame)
function createMockGame(1, name) {
  const obj = { id: _1, name, provider: require(dependencyMap[0]).GameServerProviderType.SHOCKBYTE, plans: items1 };
  const items = [...closure_2.map((cost) => cost.cost)];
  obj.baseCost = Math.min.apply(items);
  obj.gameId = "1";
  return obj;
}
let obj = { backgroundColor: "<string:1900034316>", height: "a", border: "<string:1787994450>" };
const items = [{ textAlign: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005925862883553236, userSelect: 15003050148621897000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 }, {}, {}];
obj.specifications = items;
const items1 = [obj, , ];
const items2 = [{ textAlign: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005925862883553236, userSelect: 15003050148621897000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 }, {}, {}];
items1[1] = { specifications: items2 };
obj = { backgroundColor: null, height: null, border: null };
const items3 = [{ textAlign: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005925862883553236, userSelect: 15003050148621897000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 }, {}, {}];
obj.specifications = items3;
items1[2] = obj;
const items4 = [createMockGame("1", "GameServer Test #1"), createMockGame("2", "GameServer Test #2"), createMockGame("3", "GameServer Test #3"), createMockGame("4", "GameServer Test #4"), createMockGame("5", "GameServer Test #5"), createMockGame("6", "GameServer Test #6"), createMockGame("7", "GameServer Test #7"), createMockGame("8", "GameServer Test #8"), createMockGame("9", "GameServer Test #9"), createMockGame("10", "GameServer Test #10"), createMockGame("11", "GameServer Test #11"), createMockGame("12", "GameServer Test #12")];
obj = { planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE };
const items5 = [obj, { planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE }, , , , ];
const obj1 = { planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE };
items5[2] = { planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE };
const obj2 = { planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE };
items5[3] = { planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE };
const obj4 = { accessible: 473907864, useRef: 1656487938, title: 1090584577, content: 148061, call: 1497538401, accessible: -1526726033, runOnJS: 1107296606, split: 159576, _distance: 74444, TypeError: 40966722, accessible: 23829248, isArray: 1897480704, length: -780730366, text: -1421803519, planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE };
items5[4] = obj4;
const obj3 = { planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE };
items5[5] = { planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE };
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/premium/game_server/mocks/GameServerMocks.tsx");

export const GAME_SERVER_GAME_MOCKS = items4;
export const GAME_SERVER_INSTANCE_MOCKS = items5;
