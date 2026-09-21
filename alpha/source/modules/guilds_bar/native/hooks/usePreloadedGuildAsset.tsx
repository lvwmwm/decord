// Module ID: 16677
// Function ID: 16678
// Name: usePreloadedGuildAsset
// Dependencies: [32, 19, 5803, 5804, 2]
// Exports: default

// Module 16677 (usePreloadedGuildAsset)
import useRefValueDefault from "useRefValue" /* 5803 */;
import FastImageDefault from "FastImage" /* 5804 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/hooks/usePreloadedGuildAsset.tsx");

export default function usePreloadedGuildAsset(guildId, icon, asset) {
  importDefault = guildId;
  dependencyMap = icon;
  _slicedToArray = asset;
  noop = _slicedToArray(noop.useState({}), 2)[1];
  const ref = noop.useRef({ guildId, asset, icon, preloading: icon });
  const effect = noop.useEffect(() => () => {
    ref.current.guildId = undefined;
  }, []);
  const tmp3 = useRefValueDefault(ref);
  if (guildId === tmp3.guildId) {
    asset = tmp3.asset;
  }
  const effect1 = noop.useEffect(() => {
    if (guildId === ref.current.guildId) {
      if (null != icon) {
        if (tmp5) {
          tmp2.current.preloading = tmp3;
          FastImageDefault.preload(tmp3).then(() => {
            let tmp2 = ref.current.guildId === guildId;
            if (tmp2) {
              tmp2 = tmp.current.preloading === icon;
            }
            if (tmp2) {
              tmp.current.icon = icon;
              tmp.current.asset = asset;
              closure_1_3({});
            }
          });
          const preloadResult = FastImageDefault.preload(tmp3);
        }
        tmp5 = tmp3 !== tmp2.current.icon && tmp3 !== tmp2.current.preloading;
      }
    }
    ref.current.guildId = guildId;
    ref.current.icon = icon;
    ref.current.preloading = icon;
    ref.current.asset = asset;
  });
  return asset;
};
