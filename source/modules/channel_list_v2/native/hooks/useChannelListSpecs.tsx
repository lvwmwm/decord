// Module ID: 16054
// Function ID: 16055
// Name: useChannelListSpecs
// Dependencies: [19, 10047, 16055, 1492, 15941, 4943, 1627, 10924, 2]
// Exports: default

// Module 16054 (useChannelListSpecs)
import closure_3 from "noop" /* 19 */;
import hairlineWidth from "hairlineWidth" /* 10047 */;

const require = arg1;
({ STICKY_BANNER_ASPECT_RATIO: c4, BANNER_MAX_HEIGHT_PERCENTAGE: c5 } = hairlineWidth);
const result = require("set").fileFinishedImporting("modules/channel_list_v2/native/hooks/useChannelListSpecs.tsx");

export default function useChannelListSpecs(banner) {
  redesignGuildHeaderHeight = redesignGuildHeaderHeight(16055).useRedesignGuildHeaderHeight(banner);
  height = height(1492)().height;
  const tmp2 = height(15941)();
  dependencyMap = tmp2;
  const obj = redesignGuildHeaderHeight(16055);
  const fontScale = redesignGuildHeaderHeight(4943).useFontScale();
  closure_4 = tmp4;
  const top = height(1627)().top;
  const items = [null != banner.banner, tmp2, height, redesignGuildHeaderHeight, top, fontScale];
  return fontScale.useMemo(() => {
    let num = 0;
    if (closure_4) {
      const _Math = Math;
      num = Math.min(dependencyMap / closure_4, height * top);
    }
    return { bannerHeight: height(10924)(num), bannerWidth: height(10924)(dependencyMap), headerHeight: height(10924)(redesignGuildHeaderHeight), fontScale, listTop: height(10924)(num + redesignGuildHeaderHeight), listBottom: 0, listPaddingBottom: height(10924)(24), listViewportHeight: height(10924)(height - top) };
  }, items);
};
