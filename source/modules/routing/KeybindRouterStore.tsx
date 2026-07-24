// Module ID: 10841
// Function ID: 84144
// Name: getMatchData
// Dependencies: [653, 3952, 3965, 677, 682, 2]

// Module 10841 (getMatchData)
import ME from "ME";
import useStoreWithEqualityFn from "useStoreWithEqualityFn";

let closure_2;
let closure_3;
function getMatchData(pathname) {
  let channelId;
  let guildId;
  let obj = require(3952) /* matchPath */;
  let str = "";
  let str2 = "";
  if (null != pathname) {
    str2 = pathname;
  }
  obj = {};
  const RouteParam = require(3965) /* isPseudoGuildId */.RouteParam;
  const RouteParam2 = require(3965) /* isPseudoGuildId */.RouteParam;
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
    const RouteParam3 = require(3965) /* isPseudoGuildId */.RouteParam;
    obj1.path = closure_2.GUILD_BOOSTING_MARKETING(RouteParam3.guildId());
    const matchPathResult1 = require(3952) /* matchPath */.matchPath(str, obj1);
    if (null != matchPathResult1) {
      const obj2 = { guildId: matchPathResult1.params.guildId, channelId: null };
      let obj3 = obj2;
    } else {
      obj3 = { guildId: null, channelId: null };
    }
    return obj3;
  }
  const guildIdResult = RouteParam.guildId();
}
({ Routes: closure_2, ME: closure_3 } = ME);
const withEqualityFn = useStoreWithEqualityFn.createWithEqualityFn((arg0) => {
  let closure_0 = arg0;
  const obj = {
    path: null,
    basePath: "/",
    guildId: null,
    channelId: null,
    updatePath(arg0) {
      let closure_1;
      let closure_2;
      const callback = arg0;
      ({ guildId: closure_1, channelId: closure_2 } = outer1_4(arg0));
      const tmp = outer1_4(arg0);
      callback(outer1_1[4]).batchUpdates(() => callback({ path: callback, guildId: closure_1, channelId: closure_2 }));
    },
    resetPath(pathname) {
      let closure_1;
      let closure_2;
      const callback = pathname;
      ({ guildId: closure_1, channelId: closure_2 } = outer1_4(pathname));
      const tmp = outer1_4(pathname);
      callback(outer1_1[4]).batchUpdates(() => pathname({ path: null, guildId: closure_1, channelId: closure_2, basePath: pathname }));
    }
  };
  return obj;
});
const result = require("isPseudoGuildId").fileFinishedImporting("modules/routing/KeybindRouterStore.tsx");

export default withEqualityFn;
