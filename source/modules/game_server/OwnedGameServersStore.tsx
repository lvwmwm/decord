// Module ID: 11571
// Function ID: 11572
// Name: handleGameServerUpsert
// Dependencies: [589, 709, 2]

// Module 11571 (handleGameServerUpsert)
import { Store } from "initialize";

function handleGameServerUpsert(gameServer) {
  gameServer = gameServer.gameServer;
  let mapped;
  if (null == gameServer.guildId) {
    mapped = gameServer;
    if (-1 === mapped.findIndex((id) => id.id === mapped.id)) {
      const items = [];
      items[HermesBuiltin.arraySpread(mapped, 0)] = gameServer;
      mapped = items;
    } else {
      mapped = mapped.map((id) => {
        let tmp = id;
        if (id.id === mapped.id) {
          tmp = mapped;
        }
        return tmp;
      });
    }
  }
}
let closure_0 = [];
class OwnedGameServersStore extends Store {
}
OwnedGameServersStore.prototype["getGameServers"] = function getGameServers() {
  return closure_0;
};
OwnedGameServersStore.displayName = "OwnedGameServersStore";
const ownedGameServersStore = new OwnedGameServersStore(require("dispatcher"), {
  LOGOUT: function handleReset() {
    let closure_0 = [];
  },
  GAME_SERVER_FETCH_MY_SERVERS_SUCCESS: function handleFetchMyServersSuccess(gameServers) {
    gameServers = gameServers.gameServers;
  },
  GAME_SERVER_CREATE: handleGameServerUpsert,
  GAME_SERVER_UPDATE: handleGameServerUpsert,
  GAME_SERVER_DELETE: function handleGameServerDeleted(gameServerId) {
    gameServerId = gameServerId.gameServerId;
    if (null == gameServerId.guildId) {
      gameServerId = gameServerId.filter((id) => id.id !== closure_0);
    }
  }
});
const result = require("set").fileFinishedImporting("modules/game_server/OwnedGameServersStore.tsx");

export default ownedGameServersStore;
