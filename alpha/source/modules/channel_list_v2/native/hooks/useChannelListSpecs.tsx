// Module ID: 17699
// Function ID: 17700
// Name: useChannelListSpecs
// Dependencies: [19, 5521, 17700, 1496, 17588, 5398, 1630, 9970, 2]
// Exports: default

// Module 17699 (useChannelListSpecs)
import roundToNearestPixelDefault from "roundToNearestPixel" /* 9970 */;
import react from "react" /* 19 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 5521 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let closure_4;
let hasOwnProperty;
({ STICKY_BANNER_ASPECT_RATIO: closure_4, BANNER_MAX_HEIGHT_PERCENTAGE: hasOwnProperty } = RedesignChannelListConstants);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/hooks/useChannelListSpecs.tsx");

export default function useChannelListSpecs(banner) {
  let closure_2;
  let height;
  let redesignGuildHeaderHeight;
  let obj = redesignGuildHeaderHeight(17700);
  redesignGuildHeaderHeight = obj.useRedesignGuildHeaderHeight(banner);
  height = height(1496)({ ignoreKeyboard: true }).height;
  const tmp2 = height(17588)();
  dependencyMap = tmp2;
  const obj2 = redesignGuildHeaderHeight(5398);
  const fontScale = obj2.useFontScale();
  let closure_4 = tmp4;
  const top = height(1630)().top;
  const items = [tmp4, tmp2, height, redesignGuildHeaderHeight, top, fontScale];
  return fontScale.useMemo(() => {
    let num = 0;
    if (closure_4) {
      const _Math = Math;
      num = Math.min(closure_2 / React3, height * hasOwnProperty);
    }
    const obj = { bannerHeight: roundToNearestPixelDefault(num), bannerWidth: roundToNearestPixelDefault(closure_2), headerHeight: roundToNearestPixelDefault(redesignGuildHeaderHeight), fontScale, listTop: roundToNearestPixelDefault(num + redesignGuildHeaderHeight), listBottom: 0, listPaddingBottom: roundToNearestPixelDefault(24), listViewportHeight: roundToNearestPixelDefault(height - top) };
    return obj;
  }, items);
};
