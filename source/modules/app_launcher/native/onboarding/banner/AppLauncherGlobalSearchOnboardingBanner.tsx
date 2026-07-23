// Module ID: 11236
// Function ID: 87451
// Name: GlobalSearchCoachmark
// Dependencies: [31, 27, 1455, 1345, 33, 4130, 689, 9075, 8572, 1212, 2]
// Exports: default

// Module 11236 (GlobalSearchCoachmark)
import result from "result";
import { View } from "get ActivityIndicator";
import { DEFAULT_CONTENT_PADDING } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { height: 40, width: 40, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.appsIcon = _createForOfIteratorHelperLoose;
const obj1 = { height: 24, width: 24, tintColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE };
_createForOfIteratorHelperLoose.appsIconImage = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("APP_LAUNCHER_BUILT_IN_SECTION_ICON").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppLauncherGlobalSearchOnboardingBanner.tsx");

export default function GlobalSearchCoachmark(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const visible = markAsDismissed.visible;
  const windowDimensions = markAsDismissed.windowDimensions;
  const dependencyMap = _createForOfIteratorHelperLoose();
  const diff = windowDimensions.width - 2 * DEFAULT_CONTENT_PADDING;
  const items = [markAsDismissed, visible];
  const effect = React.useEffect(() => () => {
    if (outer1_1) {
      const obj = { actionType: outer2_6.USER_DISMISS };
      outer1_0(obj);
    }
  }, items);
  let tmp3 = null;
  if (visible) {
    let obj = {
      renderImgComponent: function appsIcon() {
          let obj = { style: closure_2.appsIcon };
          obj = { style: closure_2.appsIconImage, color: visible(closure_2[6]).colors.INTERACTIVE_TEXT_ACTIVE };
          obj.children = outer1_7(markAsDismissed(closure_2[7]).AppsIcon, obj);
          return outer1_7(outer1_4, obj);
        }
    };
    const intl = markAsDismissed(1212).intl;
    obj.title = intl.string(markAsDismissed(1212).t.bCPN5y);
    const intl2 = markAsDismissed(1212).intl;
    obj.description = intl2.string(markAsDismissed(1212).t["0TBExc"]);
    obj.onDismiss = function onDismiss() {
      markAsDismissed({ actionType: outer1_6.TAKE_ACTION });
    };
    obj = { x: 0, y: -40, width: diff, height: 40 };
    obj.targetMeasurements = obj;
    obj = { x: -140, y: -40, width: diff, height: windowDimensions.height };
    obj.surfaceMeasurements = obj;
    obj.position = "bottom";
    tmp3 = jsx(markAsDismissed(8572).Coachmark, { x: -140, y: -40, width: diff, height: windowDimensions.height });
  }
  return tmp3;
};
