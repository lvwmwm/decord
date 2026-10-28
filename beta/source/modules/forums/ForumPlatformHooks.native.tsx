// Module ID: 13746
// Function ID: 13747
// Name: ForumPlatformHooks
// Dependencies: [19, 5183, 5182, 9761, 2]

// Module 13746 (ForumPlatformHooks)
import RootNavigationRef from "RootNavigationRef" /* 5183 */;
import ForumChannelSeenManagerDefault from "ForumChannelSeenManager" /* 9761 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationRouteUtils = tmp(5182);
let obj = {
  useForumChannelSeenManager(guildId) {
    guildId = guildId.guildId;
    const channelId = guildId.channelId;
    let callback;
    const ref = callback.useRef(null);
    const items = [channelId];
    callback = callback.useCallback(() => {
      const obj = RootNavigationRef;
      const rootNavigationRef = obj.getRootNavigationRef();
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          const currentRoute = rootNavigationRef.getCurrentRoute();
          const tmpResult = NavigationRouteUtils;
          const coerceChannelRouteResult = tmpResult.coerceChannelRoute(currentRoute);
          const current = ref.current;
          const tmp5 = null != coerceChannelRouteResult && coerceChannelRouteResult.params.channelId === channelId;
          if (current != null) {
            const result = current.handleReactNavigationFocus(tmp5);
          }
        }
      }
    }, items);
    const effect = callback.useEffect(() => {
      const obj = guildId(ref[1]);
      const rootNavigationRef = obj.getRootNavigationRef();
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          rootNavigationRef.addListener("state", callback);
          return () => {
            rootNavigationRef.removeListener("state", callback);
          };
        }
      }
    });
    const items1 = [channelId, guildId, callback];
    const layoutEffect = callback.useLayoutEffect(() => {
      const obj = { guildId, channelId };
      let tmp = new ForumChannelSeenManagerDefault(obj);
      ref.current = tmp;
      let current = ref.current;
      current.initialize();
      callback();
      return () => {
        const current = ref.current;
        const tmp = ref;
        if (current != null) {
          current.terminate();
        }
        tmp.current = null;
      };
    }, items1);
    return ref.current;
  }
};
let result = size.fileFinishedImporting("modules/forums/ForumPlatformHooks.native.tsx");

export default obj;
