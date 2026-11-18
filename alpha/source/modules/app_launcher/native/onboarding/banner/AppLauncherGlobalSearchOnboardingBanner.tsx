// Module ID: 12910
// Function ID: 12911
// Name: AppLauncherGlobalSearchOnboardingBanner
// Dependencies: [19, 17, 1501, 4669, 21, 4823, 575, 7615, 8995, 1113, 2]
// Exports: default

// Module 12910 (AppLauncherGlobalSearchOnboardingBanner)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1501 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4669 */;
import AppsIcon2 from "AppsIcon" /* 7615 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4823 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let size;
let size1;
const View = react_native.View;
const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { appsIcon: size, appsIconImage: size1 };
size = { height: 40, width: 40, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
size1 = { height: 24, width: 24, tintColor: nativeDefault.unsafe_rawColors.WHITE };
let closure_8 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppLauncherGlobalSearchOnboardingBanner.tsx");

export default function GlobalSearchCoachmark(markAsDismissed) {
  let appsIconImage;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const visible = markAsDismissed.visible;
  const windowDimensions = markAsDismissed.windowDimensions;
  dependencyMap = closure_8();
  const diff = windowDimensions.width - 2 * DEFAULT_CONTENT_PADDING;
  const items = [markAsDismissed, visible];
  const effect = react.useEffect(() => () => {
    const tmp = visible;
    if (tmp) {
      const obj = { actionType: constants.USER_DISMISS };
      markAsDismissed(obj);
    }
  }, items);
  let tmp3 = null;
  if (visible) {
    const Coachmark = markAsDismissed(8995).Coachmark;
    const intl = markAsDismissed(1113).intl;
    const intl2 = markAsDismissed(1113).intl;
    size = { x: 0, y: -40, width: diff, height: 40 };
    const size1 = { x: -140, y: -40, width: diff, height: windowDimensions.height };
    tmp3 = <Coachmark renderImgComponent={function appsIcon() {
      ({ style: appsIconImage.appsIconImage, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE });
      const AppsIcon = AppsIcon2.AppsIcon;
      return <View style={closure_2.appsIcon}>{null}</View>;
    }} title={intl.string(markAsDismissed(1113).t.bCPN5y)} description={intl2.string(markAsDismissed(1113).t["0TBExc"])} onDismiss={function onDismiss() {
      const obj = { actionType: ContentDismissActionType.TAKE_ACTION };
      markAsDismissed(obj);
    }} targetMeasurements={size} surfaceMeasurements={size1} position="bottom" />;
  }
  return tmp3;
};
