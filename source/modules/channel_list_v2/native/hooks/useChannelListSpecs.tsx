// Module ID: 14983
// Function ID: 114172
// Name: useChannelListSpecs
// Dependencies: [31, 10260, 14984, 1450, 14807, 4549, 1557, 9891, 2]
// Exports: default

// Module 14983 (useChannelListSpecs)
import result from "result";
import hairlineWidth from "hairlineWidth";

let closure_4;
let closure_5;
const require = arg1;
({ STICKY_BANNER_ASPECT_RATIO: closure_4, BANNER_MAX_HEIGHT_PERCENTAGE: closure_5 } = hairlineWidth);
const result = require("GuildInfoHeader").fileFinishedImporting("modules/channel_list_v2/native/hooks/useChannelListSpecs.tsx");

export default function useChannelListSpecs(banner) {
  redesignGuildHeaderHeight = redesignGuildHeaderHeight(14984).useRedesignGuildHeaderHeight(banner);
  height = height(1450)().height;
  const tmp2 = height(14807)();
  const dependencyMap = tmp2;
  let obj = redesignGuildHeaderHeight(14984);
  const fontScale = redesignGuildHeaderHeight(4549).useFontScale();
  let closure_4 = tmp4;
  const top = height(1557)().top;
  const items = [null != banner.banner, tmp2, height, redesignGuildHeaderHeight, top, fontScale];
  return fontScale.useMemo(() => {
    let num = 0;
    if (closure_4) {
      const _Math = Math;
      num = Math.min(tmp2 / closure_4, height * top);
    }
    const obj = { bannerHeight: height(tmp2[7])(num), bannerWidth: height(tmp2[7])(tmp2), headerHeight: height(tmp2[7])(redesignGuildHeaderHeight), fontScale, listTop: height(tmp2[7])(num + redesignGuildHeaderHeight), listBottom: 0, listPaddingBottom: height(tmp2[7])(24), listViewportHeight: height(tmp2[7])(height - top) };
    return obj;
  }, items);
};
