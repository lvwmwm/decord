// Module ID: 14856
// Function ID: 111927
// Name: useChannelListSpecs
// Dependencies: []
// Exports: default

// Module 14856 (useChannelListSpecs)
let closure_3 = importAll(dependencyMap[0]);
({ STICKY_BANNER_ASPECT_RATIO: closure_4, BANNER_MAX_HEIGHT_PERCENTAGE: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/channel_list_v2/native/hooks/useChannelListSpecs.tsx");

export default function useChannelListSpecs(banner) {
  const redesignGuildHeaderHeight = arg1(dependencyMap[2]).useRedesignGuildHeaderHeight(banner);
  const arg1 = redesignGuildHeaderHeight;
  const height = importDefault(dependencyMap[3])().height;
  const importDefault = height;
  const tmp2 = importDefault(dependencyMap[4])();
  const dependencyMap = tmp2;
  const obj = arg1(dependencyMap[2]);
  const fontScale = arg1(dependencyMap[5]).useFontScale();
  const React = fontScale;
  const tmp4 = null != banner.banner;
  const top = importDefault(dependencyMap[6])().top;
  const items = [tmp4, tmp2, height, redesignGuildHeaderHeight, top, fontScale];
  return React.useMemo(() => {
    let num = 0;
    if (tmp4) {
      const _Math = Math;
      num = Math.min(tmp2 / tmp4, height * top);
    }
    const obj = { bannerHeight: height(tmp2[7])(num), bannerWidth: height(tmp2[7])(tmp2), headerHeight: height(tmp2[7])(redesignGuildHeaderHeight), fontScale, listTop: height(tmp2[7])(num + redesignGuildHeaderHeight), listBottom: 0, listPaddingBottom: height(tmp2[7])(24), listViewportHeight: height(tmp2[7])(height - top) };
    return obj;
  }, items);
};
