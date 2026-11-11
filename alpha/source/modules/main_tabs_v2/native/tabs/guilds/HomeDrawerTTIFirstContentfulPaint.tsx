// Module ID: 19004
// Function ID: 19005
// Name: HomeDrawerTTIFirstContentfulPaint
// Dependencies: [19, 21, 8611, 14101, 2]
// Exports: default

// Module 19004 (HomeDrawerTTIFirstContentfulPaint)
import Fragment from "Fragment" /* 21 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 8611 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 14101 */;
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
