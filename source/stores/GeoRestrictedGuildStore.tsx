// Module ID: 12549
// Function ID: 96443
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12549 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = [];
let tmp2 = (Store) => {
  class GeoRestrictedGuildStore {
    constructor() {
      self = this;
      tmp = GeoRestrictedGuildStore(this, GeoRestrictedGuildStore);
      obj = closure_3(GeoRestrictedGuildStore);
      tmp2 = closure_2;
      if (closure_6()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = GeoRestrictedGuildStore;
  callback2(GeoRestrictedGuildStore, Store);
  const items = [
    {
      key: "getGeoRestrictedGuilds",
      value() {
        return closure_5;
      }
    }
  ];
  return callback(GeoRestrictedGuildStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp2.displayName = "GeoRestrictedGuildStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
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
    let closure_0 = guildId;
    const found = closure_5.filter((id) => id.id !== id.guildId);
    found.push({ id: guildId.guildId, name: guildId.name, icon: guildId.icon, unavailable: true, geo_restricted: true });
    closure_5 = found;
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("stores/GeoRestrictedGuildStore.tsx");

export default tmp2;
