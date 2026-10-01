// Module ID: 11545
// Function ID: 11546
// Name: AppsBanner
// Dependencies: [19, 17, 21, 4836, 11546, 11543, 1115, 2]
// Exports: default

// Module 11545 (AppsBanner)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import BannerBaseDefault from "BannerBase" /* 11543 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ rocketIconContainer: { position: "absolute", top: -20 }, rocketIcon: { width: 90, height: 90 } });
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppsBanner.tsx");

export default function AppsBaner() {
  const tmp = closure_5();
  BannerBaseDefault;
  const intl = intl2.intl;
  return <tmp3 image={<View style={tmp.rocketIconContainer}>{null}</View>} text={intl.string(intl2.t.sjRwMJ)} />;
};
