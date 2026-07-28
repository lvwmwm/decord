// Module ID: 11551
// Function ID: 89832
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 11551 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
function handleGameServerUpsert(gameServer) {
  gameServer = gameServer.gameServer;
  gameServer = undefined;
  if (null == gameServer.guildId) {
    if (-1 === mapped.findIndex((id) => id.id === gameServer.id)) {
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(mapped, 0);
      items[arraySpreadResult] = gameServer;
      gameServer = arraySpreadResult + 1;
      mapped = items;
    } else {
      mapped = mapped.map((id) => {
        let tmp = id;
        if (id.id === gameServer.id) {
          tmp = gameServer;
        }
        return tmp;
      });
    }
  }
}
let closure_5 = [];
let tmp2 = ((Store) => {
  class OwnedGameServersStore {
    constructor() {
      self = this;
      tmp = OwnedGameServersStore(this, OwnedGameServersStore);
      obj = outer1_3(OwnedGameServersStore);
      tmp2 = outer1_2;
      if (outer1_6()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(OwnedGameServersStore, Store);
  const items = [
    {
      key: "getGameServers",
      value() {
        return outer1_5;
      }
    }
  ];
  return callback(OwnedGameServersStore, items);
})(require("initialize").Store);
tmp2.displayName = "OwnedGameServersStore";
tmp2 = new tmp2(require("dispatcher"), {
  LOGOUT: function handleReset() {
    let closure_5 = [];
  },
  GAME_SERVER_FETCH_MY_SERVERS_SUCCESS: function handleFetchMyServersSuccess(gameServers) {
    gameServers = gameServers.gameServers;
  },
  GAME_SERVER_CREATE: handleGameServerUpsert,
  GAME_SERVER_UPDATE: handleGameServerUpsert,
  GAME_SERVER_DELETE: function handleGameServerDeleted(gameServerId) {
    gameServerId = gameServerId.gameServerId;
    if (null == gameServerId.guildId) {
      closure_5 = closure_5.filter((id) => id.id !== gameServerId);
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/premium/game_server/OwnedGameServersStore.tsx");

export default tmp2;
