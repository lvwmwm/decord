// Module ID: 16203
// Function ID: 16204
// Name: HomeDrawerTTIFirstContentfulPaint
// Dependencies: [19, 21, 7091, 11580, 2]
// Exports: default

// Module 16203 (HomeDrawerTTIFirstContentfulPaint)
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7091 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 11580 */;
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
