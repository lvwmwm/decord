// Module ID: 14866
// Function ID: 113369
// Name: usePreloadedGuildAsset
// Dependencies: [57, 31, 5122, 5085, 2]
// Exports: default

// Module 14866 (usePreloadedGuildAsset)
import _slicedToArray from "_slicedToArray";
import result from "result";

const result = require("useRefValue").fileFinishedImporting("modules/guilds_bar/native/hooks/usePreloadedGuildAsset.tsx");

export default function usePreloadedGuildAsset(guildId, icon, asset) {
  const importDefault = guildId;
  const dependencyMap = icon;
  const callback = asset;
  React = callback(React.useState({}), 2)[1];
  const ref = React.useRef({ guildId, asset, icon, preloading: icon });
  const effect = React.useEffect(() => () => {
    outer1_4.current.guildId = undefined;
  }, []);
  let tmp3 = importDefault(5122)(ref);
  if (guildId === tmp3.guildId) {
    asset = tmp3.asset;
  }
  const effect1 = React.useEffect(() => {
    if (guildId === ref.current.guildId) {
      if (null != icon) {
        let tmp3 = icon !== ref.current.icon;
        if (tmp3) {
          tmp3 = icon !== ref.current.preloading;
        }
        if (tmp3) {
          ref.current.preloading = icon;
          const obj = guildId(icon[3]);
          guildId(icon[3]).preload(icon).then(() => {
            let tmp = outer1_4.current.guildId === outer1_0;
            if (tmp) {
              tmp = outer1_4.current.preloading === outer1_1;
            }
            if (tmp) {
              outer1_4.current.icon = outer1_1;
              outer1_4.current.asset = outer1_2;
              outer1_3({});
            }
          });
          const preloadResult = guildId(icon[3]).preload(icon);
        }
      }
    }
    ref.current.guildId = guildId;
    ref.current.icon = icon;
    ref.current.preloading = icon;
    ref.current.asset = _slicedToArray;
  });
  return asset;
};
