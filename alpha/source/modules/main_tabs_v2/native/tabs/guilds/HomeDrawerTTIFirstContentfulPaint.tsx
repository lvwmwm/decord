// Module ID: 17986
// Function ID: 17987
// Name: HomeDrawerTTIFirstContentfulPaint
// Dependencies: [19, 21, 8149, 10370, 2]
// Exports: default

// Module 17986 (HomeDrawerTTIFirstContentfulPaint)
import Fragment from "Fragment" /* 21 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 8149 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 10370 */;
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
