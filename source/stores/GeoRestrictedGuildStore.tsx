// Module ID: 12721
// Function ID: 98970
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 12721 (_isNativeReflectConstruct)
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
let closure_5 = [];
let tmp2 = ((Store) => {
  class GeoRestrictedGuildStore {
    constructor() {
      self = this;
      tmp = GeoRestrictedGuildStore(this, GeoRestrictedGuildStore);
      obj = outer1_3(GeoRestrictedGuildStore);
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
  callback2(GeoRestrictedGuildStore, Store);
  const items = [
    {
      key: "getGeoRestrictedGuilds",
      value() {
        return outer1_5;
      }
    }
  ];
  return callback(GeoRestrictedGuildStore, items);
})(require("initialize").Store);
tmp2.displayName = "GeoRestrictedGuildStore";
tmp2 = new tmp2(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen(geoRestrictedGuilds) {
    geoRestrictedGuilds = geoRestrictedGuilds.geoRestrictedGuilds;
  },
  GUILD_DELETE: function handleDeleteGuild(guild) {
    guild = guild.guild;
    if (-1 === closure_5.findIndex((id) => id.id === guild.id)) {
      return false;
    } else {
      closure_5 = closure_5.filter((id) => id.id !== guild.id);
    }
  },
  GUILD_GEO_RESTRICTED: function handleGeoRestrictGuild(guildId) {
    let dispatcher = guildId;
    found = found.filter((id) => id.id !== guildId.guildId);
    found.push({ id: guildId.guildId, name: guildId.name, icon: guildId.icon, unavailable: true, geo_restricted: true });
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/GeoRestrictedGuildStore.tsx");

export default tmp2;
