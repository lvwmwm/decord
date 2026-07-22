// Module ID: 11597
// Function ID: 90143
// Name: GuildPowerupsGameServerCard
// Dependencies: []
// Exports: default

// Module 11597 (GuildPowerupsGameServerCard)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const jsx = arg1(dependencyMap[4]).jsx;
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { flex: 1, paddingVertical: importDefault(dependencyMap[6]).space.PX_8 };
obj.riveContainer = obj;
let closure_7 = obj.createStyles(obj);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsGameServerCard.tsx");

export default function GuildPowerupsGameServerCard(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  let obj = arg1(dependencyMap[7]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => stateForGuild.getStateForGuild(guildId));
  const tmp = callback();
  const tmp4 = importDefault(dependencyMap[9])(guildId);
  let obj1 = arg1(dependencyMap[7]);
  const items1 = [closure_4];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  let tmp7 = null;
  if (null != stateFromStores) {
    tmp7 = null;
    if (null != tmp4) {
      obj = {};
      ({ title: obj3.title, description: obj3.description, cost: obj3.cost } = tmp4);
      obj.costDecorator = "+";
      obj = { style: tmp.riveContainer };
      obj1 = { stateMachine: "SM_Auto" };
      const obj2 = { reducedMotion: stateFromStores1 };
      obj1.dataBinding = obj2;
      obj.children = jsx(arg1(dependencyMap[12]).GameServerHostingRive, obj1);
      obj.riveComponent = <View {...obj} />;
      obj.badge = "beta";
      obj.status = tmp3;
      obj.onPress = tmp6;
      tmp7 = jsx(importDefault(dependencyMap[11]), obj);
      const tmp11 = importDefault(dependencyMap[11]);
    }
  }
  return tmp7;
};
