// Module ID: 18820
// Function ID: 18821
// Name: HomeDrawerTTIFirstContentfulPaint
// Dependencies: [19, 21, 7763, 13600, 2]
// Exports: default

// Module 18820 (HomeDrawerTTIFirstContentfulPaint)
import Fragment from "Fragment" /* 21 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7763 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 13600 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/HomeDrawerTTIFirstContentfulPaint.tsx");

export default function HomeDrawerTTIFirstContentfulPaint() {
  const layoutEffect = react.useLayoutEffect(() => {
    const obj = TTIAnalyticsUtils;
    obj.trackAppUIViewed();
  }, []);
  return jsx(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "home_drawer", checkFocusedScreen: "guilds" });
};
