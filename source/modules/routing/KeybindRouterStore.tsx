// Module ID: 10802
// Function ID: 83903
// Name: getMatchData
// Dependencies: []

// Module 10802 (getMatchData)
function getMatchData(pathname) {
  let channelId;
  let guildId;
  let obj = require(dependencyMap[1]);
  let str = "";
  let str2 = "";
  if (null != pathname) {
    str2 = pathname;
  }
  obj = {};
  const RouteParam = require(dependencyMap[2]).RouteParam;
  const RouteParam2 = require(dependencyMap[2]).RouteParam;
  obj.path = closure_2.CHANNEL(RouteParam.guildId(), RouteParam2.channelId({ optional: true }), ":messageId?");
  const matchPathResult = obj.matchPath(str2, obj);
  if (null != matchPathResult) {
    ({ guildId, channelId } = matchPathResult.params);
    obj = {};
    let tmp8 = null;
    if (guildId !== closure_3) {
      tmp8 = guildId;
    }
    obj.guildId = tmp8;
    let tmp9 = null;
    if (null != channelId) {
      tmp9 = channelId;
    }
    obj.channelId = tmp9;
    return obj;
  } else {
    if (null != pathname) {
      str = pathname;
    }
    const obj1 = {};
    const RouteParam3 = require(dependencyMap[2]).RouteParam;
    obj1.path = closure_2.GUILD_BOOSTING_MARKETING(RouteParam3.guildId());
    const matchPathResult1 = require(dependencyMap[1]).matchPath(str, obj1);
    if (null != matchPathResult1) {
      const obj2 = { guildId: matchPathResult1.params.guildId, channelId: null };
      let obj3 = obj2;
    } else {
      obj3 = { "Null": "o", "Null": "o" };
    }
    return obj3;
  }
  const guildIdResult = RouteParam.guildId();
}
const _module = require(dependencyMap[0]);
({ Routes: closure_2, ME: closure_3 } = _module);
const _module1 = require(dependencyMap[3]);
const withEqualityFn = _module1.createWithEqualityFn((arg0) => {
  const require = arg0;
  return {
    updatePath(arg0) {
      ({ guildId: closure_1, channelId: closure_2 } = callback(arg0));
      const tmp = callback(arg0);
      arg0(closure_1[4]).batchUpdates(() => arg0({ path: arg0, guildId: closure_1, channelId: closure_2 }));
    },
    resetPath(pathname) {
      ({ guildId: closure_1, channelId: closure_2 } = callback(pathname));
      const tmp = callback(pathname);
      pathname(closure_1[4]).batchUpdates(() => arg0({ path: null, guildId: closure_1, channelId: closure_2, basePath: arg0 }));
    }
  };
});
const _module2 = require(dependencyMap[5]);
const result = _module2.fileFinishedImporting("modules/routing/KeybindRouterStore.tsx");

export default withEqualityFn;
