// Module ID: 18396
// Function ID: 18397
// Name: usePreloadedGuildAsset
// Dependencies: [32, 19, 6959, 1893, 2]
// Exports: default

// Module 18396 (usePreloadedGuildAsset)
import react_nativeDefault from "react-native" /* 1893 */;
import useRefValueDefault from "useRefValue" /* 6959 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const result = size.fileFinishedImporting("modules/guilds_bar/native/hooks/usePreloadedGuildAsset.tsx");

export default function usePreloadedGuildAsset(guildId, icon, asset) {
  let closure_3;
  importDefault = guildId;
  dependencyMap = icon;
  _slicedToArray = asset;
  let obj = react;
  react = _slicedToArray(react.useState({}), 2)[1];
  let obj2 = { guildId, asset, icon, preloading: icon };
  const ref = react.useRef(obj2);
  const effect = react.useEffect(() => () => {
    ref.current.guildId = undefined;
  }, []);
  let tmp3 = useRefValueDefault(ref);
  if (guildId === tmp3.guildId) {
    asset = tmp3.asset;
  }
  const effect1 = obj.useEffect(() => {
    let tmp2 = ref;
    const tmp = guildId;
    if (guildId === ref.current.guildId) {
      if (null != icon) {
        const tmp3 = icon !== tmp2.current.icon && icon !== tmp2.current.preloading;
        if (tmp3) {
          tmp2.current.preloading = icon;
          const obj2 = { uri: icon };
          const obj = react_nativeDefault;
          const preloadResult = obj.preload(obj2);
          preloadResult.then(() => {
            const tmp2 = ref.current.guildId === guildId && tmp.current.preloading === icon;
            if (tmp2) {
              ref.current.icon = icon;
              ref.current.asset = asset;
              closure_1_3({});
            }
          });
        }
      }
    }
    tmp2.current.guildId = tmp;
    tmp2.current.icon = icon;
    tmp2.current.preloading = icon;
    tmp2.current.asset = asset;
  });
  return asset;
};
