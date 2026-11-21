// Module ID: 12282
// Function ID: 12283
// Name: useConjureSharedProjectAppChannel
// Dependencies: [19, 4762, 4784, 4845, 504, 11974, 11975, 2]
// Exports: default

// Module 12282 (useConjureSharedProjectAppChannel)
import ChannelStore2 from "ChannelStore" /* 4762 */;
import conjureSharedProjectHome from "conjureSharedProjectHome" /* 11974 */;
import findLoadedAppChannelDefault from "findLoadedAppChannel" /* 11975 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4784 */;
import PermissionStore from "PermissionStore" /* 4845 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ChannelStore = ChannelStore2;
let _require;

const ChannelLoader = ChannelStore2.ChannelLoader;
const result = size.fileFinishedImporting("modules/conjure/share/useConjureSharedProjectAppChannel.tsx");

export default function useConjureSharedProjectAppChannel(arg0, arg1, channelId) {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  channelId = channelId.channelId;
  let stateFromStores1;
  let ref;
  let obj = require("get initialized");
  let items = [ref];
  const items1 = [arg1, channelId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let sharedProjectHomeGuildId = null;
    if (null != closure_1) {
      sharedProjectHomeGuildId = null;
      if (null != channelId) {
        const obj = conjureSharedProjectHome;
        sharedProjectHomeGuildId = obj.getSharedProjectHomeGuildId(tmp);
      }
    }
    return sharedProjectHomeGuildId;
  }, items1);
  const items2 = [stateFromStores1];
  const items3 = [stateFromStores];
  const obj2 = require("get initialized");
  stateFromStores1 = obj2.useStateFromStores(items2, () => {
    let tmp2 = null == stateFromStores;
    if (!tmp2) {
      const _Object = Object;
      tmp2 = Object.keys(ChannelStore.getMutableGuildChannelsForGuild(tmp)).length > 0;
    }
    return tmp2;
  }, items3);
  const items4 = [stateFromStores1, PermissionStore];
  const items5 = [stateFromStores, arg0, channelId];
  const obj3 = require("get initialized");
  const stateFromStores2 = obj3.useStateFromStores(items4, () => {
    let tmp2 = null;
    if (null != stateFromStores) {
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
  }, items5);
  ref = stateFromStores.useRef(null);
  const items6 = [stateFromStores, stateFromStores1];
  const effect = stateFromStores.useEffect(() => {
    const tmp2 = null == stateFromStores || stateFromStores1 || ref.current === tmp;
    if (!tmp2) {
      ref.current = stateFromStores;
      const items = [stateFromStores];
      const guildIds = ChannelLoader.loadGuildIds(items);
    }
  }, items6);
  const items7 = [stateFromStores, stateFromStores2];
  return stateFromStores.useMemo(() => {
    let tmp2 = null;
    if (null != stateFromStores) {
      tmp2 = null;
      if (null != stateFromStores2) {
        tmp2 = { guildId: tmp, channelId: tmp3 };
        const obj = { guildId: tmp, channelId: tmp3 };
      }
    }
    return tmp2;
  }, items7);
};
