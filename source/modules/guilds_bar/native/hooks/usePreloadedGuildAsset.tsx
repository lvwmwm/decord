// Module ID: 14742
// Function ID: 111158
// Name: usePreloadedGuildAsset
// Dependencies: [0, 0, 0, 0, 0]
// Exports: default

// Module 14742 (usePreloadedGuildAsset)
import closure_2 from "result";
import closure_3 from "result";
import result from "result";

result = result.fileFinishedImporting("modules/guilds_bar/native/hooks/usePreloadedGuildAsset.tsx");

export default function usePreloadedGuildAsset(guildId, icon, asset) {
  const importDefault = guildId;
  const dependencyMap = icon;
  const callback = asset;
  const React = callback(React.useState({}), 2)[1];
  const ref = React.useRef({ guildId, asset, icon, preloading: icon });
  const effect = React.useEffect(() => () => {
    ref.current.guildId = undefined;
  }, []);
  const tmp3 = importDefault(dependencyMap[2])(ref);
  if (guildId === tmp3.guildId) {
    asset = tmp3.asset;
  }
  const effect1 = React.useEffect(() => {
    if (arg0 === ref.current.guildId) {
      if (null != arg1) {
        let tmp3 = arg1 !== ref.current.icon;
        if (tmp3) {
          tmp3 = arg1 !== ref.current.preloading;
        }
        if (tmp3) {
          ref.current.preloading = arg1;
          const obj = arg0(arg1[3]);
          arg0(arg1[3]).preload(arg1).then(() => {
            let tmp = closure_4.current.guildId === closure_0;
            if (tmp) {
              tmp = closure_4.current.preloading === closure_1;
            }
            if (tmp) {
              closure_4.current.icon = closure_1;
              closure_4.current.asset = closure_2;
              callback({});
            }
          });
          const preloadResult = arg0(arg1[3]).preload(arg1);
        }
      }
    }
    ref.current.guildId = arg0;
    ref.current.icon = arg1;
    ref.current.preloading = arg1;
    ref.current.asset = arg2;
  });
  return asset;
};
