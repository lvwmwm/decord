// Module ID: 8171
// Function ID: 8172
// Name: useGameProfileHeroBackgroundURL
// Dependencies: [32, 19, 2]
// Exports: default

// Module 8171 (useGameProfileHeroBackgroundURL)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let bannerURL;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileHeroBackgroundURL.tsx");

export default function useGameProfileHeroBackgroundURL(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const first = _slicedToArray(react.useState(() => Math.random()), 1)[0];
  const items = [arg1, arg0, first];
  return react.useMemo(() => {
    bannerURL = bannerURL.getBannerURL(closure_1);
    const tmp = closure_1;
    if (null != bannerURL) {
      return bannerURL;
    } else {
      const screenshotUrls = obj.screenshotUrls;
      let num;
      if (screenshotUrls != null) {
        num = screenshotUrls.length;
      }
      if (num == null) {
        num = 0;
      }
      let screenshotURL = null;
      if (0 !== num) {
        const _Math = Math;
        screenshotURL = obj.getScreenshotURL(Math.floor(first * num), tmp);
      }
      return screenshotURL;
    }
  }, items);
};
