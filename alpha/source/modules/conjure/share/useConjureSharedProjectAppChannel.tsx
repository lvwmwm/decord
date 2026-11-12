// Module ID: 13677
// Function ID: 13678
// Name: useConjureSharedProjectAppChannel
// Dependencies: [19, 5092, 5175, 12348, 504, 12349, 2]
// Exports: default

// Module 13677 (useConjureSharedProjectAppChannel)
import ChannelStore2 from "ChannelStore" /* 5092 */;
import findLoadedAppChannelDefault from "findLoadedAppChannel" /* 12349 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 5175 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ChannelStore = ChannelStore2;
let _require;

const ChannelLoader = ChannelStore2.ChannelLoader;
const result = size.fileFinishedImporting("modules/conjure/share/useConjureSharedProjectAppChannel.tsx");

export default function useConjureSharedProjectAppChannel(arg0, install_scope, arg2) {
  let channelId;
  let closure_0;
  let guildId;
  _require = arg0;
  ({ guildId, channelId } = arg2);
  guildId = undefined;
  let stateFromStores;
  let stateFromStores1;
  let ref;
  let tmp = null;
  if (null != install_scope) {
    tmp = null;
    if (null != channelId) {
      let tmp2 = _require;
      const tmp3 = guildId;
      let obj = require("conjureSharedProjectHome");
      tmp = null;
      if (obj.isSharedProjectHomeServer(install_scope, guildId)) {
        tmp = guildId;
      }
    }
  }
  guildId = tmp;
  let items = [stateFromStores1];
  const items1 = [tmp];
  const obj2 = require("get initialized");
  stateFromStores = obj2.useStateFromStores(items, () => {
    let tmp2 = null == guildId;
    if (!tmp2) {
      const _Object = Object;
      tmp2 = Object.keys(ChannelStore.getMutableGuildChannelsForGuild(tmp)).length > 0;
    }
    return tmp2;
  }, items1);
  const items2 = [stateFromStores1, PermissionStore];
  const items3 = [tmp, arg0, channelId];
  const obj3 = require("get initialized");
  stateFromStores1 = obj3.useStateFromStores(items2, () => {
    let tmp2 = null;
    if (null != guildId) {
      tmp2 = null;
      if (null != channelId) {
        const tmp7 = findLoadedAppChannelDefault(tmp, closure_0, tmp3);
        channelId = undefined;
        if (tmp7 != null) {
          channelId = tmp7.channelId;
        }
        if (channelId == null) {
          channelId = null;
        }
        tmp2 = channelId;
      }
    }
    return tmp2;
  }, items3);
  ref = stateFromStores.useRef(null);
  const items4 = [tmp, stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    const tmp2 = null == guildId || stateFromStores || ref.current === tmp;
    if (!tmp2) {
      ref.current = guildId;
      const items = [guildId];
      const guildIds = ChannelLoader.loadGuildIds(items);
    }
  }, items4);
  const items5 = [tmp, stateFromStores1];
  return stateFromStores.useMemo(() => {
    let tmp2 = null;
    if (null != guildId) {
      tmp2 = null;
      if (null != stateFromStores1) {
        tmp2 = { guildId: tmp, channelId: tmp3 };
        const obj = { guildId: tmp, channelId: tmp3 };
      }
    }
    return tmp2;
  }, items5);
};
