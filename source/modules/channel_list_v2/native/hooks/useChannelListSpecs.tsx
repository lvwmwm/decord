// Module ID: 15633
// Function ID: 15634
// Name: useChannelListSpecs
// Dependencies: [19, 10121, 15634, 1494, 15521, 4887, 1629, 10650, 2]
// Exports: default

// Module 15633 (useChannelListSpecs)
import closure_3 from "noop" /* 19 */;
import hairlineWidth from "hairlineWidth" /* 10121 */;

const require = arg1;
({ STICKY_BANNER_ASPECT_RATIO: c4, BANNER_MAX_HEIGHT_PERCENTAGE: c5 } = hairlineWidth);
const result = require("set").fileFinishedImporting("modules/channel_list_v2/native/hooks/useChannelListSpecs.tsx");

export default function useChannelListSpecs(banner) {
  redesignGuildHeaderHeight = redesignGuildHeaderHeight(15634).useRedesignGuildHeaderHeight(banner);
  height = height(1494)().height;
  const tmp2 = height(15521)();
  dependencyMap = tmp2;
  const obj = redesignGuildHeaderHeight(15634);
  const fontScale = redesignGuildHeaderHeight(4887).useFontScale();
  closure_4 = tmp4;
  const top = height(1629)().top;
  const items = [null != banner.banner, tmp2, height, redesignGuildHeaderHeight, top, fontScale];
  return fontScale.useMemo(() => {
    let num = 0;
    if (closure_4) {
      const _Math = Math;
      num = Math.min(dependencyMap / closure_4, height * top);
    }
    return { bannerHeight: height(10650)(num), bannerWidth: height(10650)(dependencyMap), headerHeight: height(10650)(redesignGuildHeaderHeight), fontScale, listTop: height(10650)(num + redesignGuildHeaderHeight), listBottom: 0, listPaddingBottom: height(10650)(24), listViewportHeight: height(10650)(height - top) };
  }, items);
};
