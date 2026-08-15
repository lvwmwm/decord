// Module ID: 16723
// Function ID: 16724
// Name: VideoGuardBannerContent
// Dependencies: [19, 21, 4661, 712, 4734, 1236, 13106, 4094, 2]
// Exports: presentVideoGuardBanner

// Module 16723 (VideoGuardBannerContent)
import "noop";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
function VideoGuardBannerContent() {
  let obj = { variant: "text-sm/normal", style: createCacheKey().toastText, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  const items = [intl.string(require(1236) /* getSystemLocale */.t.UoW002), " ", ];
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj = { helpdeskArticle: null };
  obj[0] = require(13106) /* articleURL */.VIDEO_GUARD_HELP_ARTICLE_URL;
  items[2] = intl2.format(require(1236) /* getSystemLocale */.t.BPDKoA, obj);
  obj[2] = items;
  return callback(require(4734) /* Text */.Text, obj);
}
({ jsxs: c3, jsx: c4 } = jsxProd);
createCacheKey = { toastText: null };
createCacheKey = { marginRight: require("Themes").space.PX_12, marginVertical: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/media_engine/VideoGuardBannerPresenter.native.tsx");

export const presentVideoGuardBanner = function presentVideoGuardBanner() {
  let obj = importDefault(4094);
  obj = {
    key: "VIDEO_GUARD_BANNER",
    content() {
      return callback(closure_6, {});
    },
    toastDurationMs: 6000,
    position: "top"
  };
  obj.open(obj);
};
