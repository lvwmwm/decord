// Module ID: 11598
// Function ID: 90138
// Name: useGameServerPerk
// Dependencies: []
// Exports: default

// Module 11598 (useGameServerPerk)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const GuildPowerupType = arg1(dependencyMap[2]).GuildPowerupType;
let closure_6 = arg1(dependencyMap[3]).GAME_SERVER_POWERUP_SKU_ID;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/premium/game_server/hooks/useGameServerPerk.tsx");

export default function useGameServerPerk(guildId) {
  const arg1 = guildId;
  const gameServerEnabled = arg1(dependencyMap[4]).useGameServerEnabled(guildId, "useGameServerPerk");
  const importDefault = gameServerEnabled;
  const obj = arg1(dependencyMap[4]);
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items, () => gameName2.getLowestGameCostForGuild(arg0));
  const dependencyMap = stateFromStores;
  const tmp3 = importDefault(dependencyMap[6])();
  const gameName = tmp3.gameName;
  const React = gameName;
  const gameName2 = tmp3.gameName2;
  closure_4 = gameName2;
  const items1 = [gameServerEnabled, stateFromStores, gameName, gameName2];
  return React.useMemo(() => {
    let tmp = null;
    if (gameServerEnabled) {
      tmp = null;
      if (null != stateFromStores) {
        let obj = { skuId: closure_6 };
        const intl = arg0(stateFromStores[7]).intl;
        obj.title = intl.string(gameServerEnabled(stateFromStores[8]).B3OfL/);
        const intl2 = arg0(stateFromStores[7]).intl;
        obj = { gameName, gameName2 };
        obj.description = intl2.format(gameServerEnabled(stateFromStores[8]).+UqyGU, obj);
        obj.cost = stateFromStores;
        obj.dependencies = [];
        obj.type = constants.PERK;
        obj.animatedImageUrl = gameServerEnabled(stateFromStores[9]);
        obj.staticImageUrl = gameServerEnabled(stateFromStores[9]);
        tmp = obj;
      }
    }
    return tmp;
  }, items1);
};
