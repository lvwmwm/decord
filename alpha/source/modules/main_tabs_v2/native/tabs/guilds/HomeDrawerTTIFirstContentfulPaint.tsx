// Module ID: 16788
// Function ID: 16789
// Name: HomeDrawerTTIFirstContentfulPaint
// Dependencies: [19, 21, 7805, 12239, 2]
// Exports: default

// Module 16788 (HomeDrawerTTIFirstContentfulPaint)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7805 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 12239 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/HomeDrawerTTIFirstContentfulPaint.tsx");

export default function HomeDrawerTTIFirstContentfulPaint() {
  const layoutEffect = noop.useLayoutEffect(() => {
    TTIAnalyticsUtils.trackAppUIViewed();
  }, []);
  return jsx(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "home_drawer", checkFocusedScreen: "guilds" });
};
