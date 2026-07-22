// Module ID: 11506
// Function ID: 89678
// Name: createMockGame
// Dependencies: []

// Module 11506 (createMockGame)
function createMockGame(1, name) {
  const obj = { id: _1, name, provider: require(dependencyMap[0]).GameServerProviderType.SHOCKBYTE, plans: items1 };
  const items = [...closure_2.map((cost) => cost.cost)];
  obj.baseCost = Math.min.apply(items);
  obj.gameId = "1";
  return obj;
}
let obj = { "Null": 3, "Null": "show_hover_gradient", "Null": "scalar" };
const items = [{ body: true, position: true }, {}, {}];
obj.specifications = items;
const items1 = [obj, , ];
const items2 = [{ body: true, position: true }, {}, {}];
items1[1] = { specifications: items2 };
obj = { "Null": true, "Null": true, "Null": true };
const items3 = [{ body: true, position: true }, {}, {}];
obj.specifications = items3;
items1[2] = obj;
const items4 = [createMockGame("1", "GameServer Test #1"), createMockGame("2", "GameServer Test #2"), createMockGame("3", "GameServer Test #3"), createMockGame("4", "GameServer Test #4"), createMockGame("5", "GameServer Test #5"), createMockGame("6", "GameServer Test #6"), createMockGame("7", "GameServer Test #7"), createMockGame("8", "GameServer Test #8"), createMockGame("9", "GameServer Test #9"), createMockGame("10", "GameServer Test #10"), createMockGame("11", "GameServer Test #11"), createMockGame("12", "GameServer Test #12")];
obj = { planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE };
const items5 = [obj, { planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE }, , , , ];
const obj1 = { planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE };
items5[2] = { planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE };
const obj2 = { planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE };
items5[3] = { planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE };
const obj4 = { flexDirection: 472400536, justifyContent: 1154220034, backgroundColor: 1090584577, height: 148124, border: 54697825, marginVertical: 1476395632, openChannel: 1107296571, navigationReplace: 159746, isKeyboardAwareOnAndroid: 74253, includeKeyboardHeight: 41012802, visible: 17265408, animated: 1909277184, position: -791347198, bottom: 1447100417, planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE };
items5[4] = obj4;
const obj3 = { planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE };
items5[5] = { planId: items1[1].id, planName: items1[1].name, status: require(dependencyMap[1]).GameServerStatus.ONLINE };
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/premium/game_server/mocks/GameServerMocks.tsx");

export const GAME_SERVER_GAME_MOCKS = items4;
export const GAME_SERVER_INSTANCE_MOCKS = items5;
