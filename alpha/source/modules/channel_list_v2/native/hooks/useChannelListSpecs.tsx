// Module ID: 18134
// Function ID: 18135
// Name: useChannelListSpecs
// Dependencies: [19, 11027, 18135, 1492, 18021, 5637, 1626, 12233, 2]
// Exports: default

// Module 18134 (useChannelListSpecs)
import roundToNearestPixelDefault from "roundToNearestPixel" /* 12233 */;
import react from "react" /* 19 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11027 */;
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
  let obj = redesignGuildHeaderHeight(18135);
  redesignGuildHeaderHeight = obj.useRedesignGuildHeaderHeight(banner);
  height = height(1492)({ ignoreKeyboard: true }).height;
  const tmp2 = height(18021)();
  dependencyMap = tmp2;
  const obj2 = redesignGuildHeaderHeight(5637);
  const fontScale = obj2.useFontScale();
  let closure_4 = tmp4;
  const top = height(1626)().top;
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
