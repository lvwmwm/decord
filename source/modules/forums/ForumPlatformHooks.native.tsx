// Module ID: 11827
// Function ID: 91827
// Dependencies: [31, 3982, 3981, 9177, 2]

// Module 11827
import result from "result";

const require = arg1;
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/forums/ForumPlatformHooks.native.tsx");

export default {
  useForumChannelSeenManager(guildId) {
    guildId = guildId.guildId;
    const channelId = guildId.channelId;
    const ref = callback.useRef(null);
    const items = [channelId];
    callback = callback.useCallback(() => {
      const rootNavigationRef = guildId(ref[1]).getRootNavigationRef();
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          const currentRoute = rootNavigationRef.getCurrentRoute();
          const coerceChannelRouteResult = guildId(ref[2]).coerceChannelRoute(currentRoute);
          let tmp5 = null != coerceChannelRouteResult;
          if (tmp5) {
            tmp5 = coerceChannelRouteResult.params.channelId === channelId;
          }
          const current = ref.current;
          if (null != current) {
            const result = current.handleReactNavigationFocus(tmp5);
          }
          const obj3 = guildId(ref[2]);
        }
      }
    }, items);
    const effect = callback.useEffect(() => {
      const rootNavigationRef = guildId(ref[1]).getRootNavigationRef();
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          rootNavigationRef.addListener("state", callback);
          return () => {
            rootNavigationRef.removeListener("state", outer1_3);
          };
        }
      }
    });
    const items1 = [channelId, guildId, callback];
    const layoutEffect = callback.useLayoutEffect(() => {
      let tmp = channelId(ref[3]);
      tmp = new tmp({ guildId, channelId });
      ref.current = tmp;
      let current = ref.current;
      current.initialize();
      callback();
      return () => {
        const current = outer1_2.current;
        if (null != current) {
          current.terminate();
        }
        outer1_2.current = null;
      };
    }, items1);
    return ref.current;
  }
};
