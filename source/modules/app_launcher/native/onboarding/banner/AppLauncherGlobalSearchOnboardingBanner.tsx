// Module ID: 11225
// Function ID: 87388
// Name: GlobalSearchCoachmark
// Dependencies: []
// Exports: default

// Module 11225 (GlobalSearchCoachmark)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const DEFAULT_CONTENT_PADDING = arg1(dependencyMap[2]).DEFAULT_CONTENT_PADDING;
const ContentDismissActionType = arg1(dependencyMap[3]).ContentDismissActionType;
const jsx = arg1(dependencyMap[4]).jsx;
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BRAND, borderRadius: importDefault(dependencyMap[6]).radii.round };
obj.appsIcon = obj;
obj.appsIconImage = { tintColor: importDefault(dependencyMap[6]).unsafe_rawColors.WHITE };
let closure_8 = obj.createStyles(obj);
const obj1 = { tintColor: importDefault(dependencyMap[6]).unsafe_rawColors.WHITE };
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppLauncherGlobalSearchOnboardingBanner.tsx");

export default function GlobalSearchCoachmark(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const arg1 = markAsDismissed;
  const visible = markAsDismissed.visible;
  const importDefault = visible;
  const windowDimensions = markAsDismissed.windowDimensions;
  let closure_2 = callback();
  const diff = windowDimensions.width - 2 * DEFAULT_CONTENT_PADDING;
  const items = [markAsDismissed, visible];
  const effect = React.useEffect(() => () => {
    if (closure_1) {
      const obj = { actionType: constants.USER_DISMISS };
      callback(obj);
    }
  }, items);
  let tmp3 = null;
  if (visible) {
    let obj = {
      renderImgComponent: function appsIcon() {
          let obj = { style: closure_2.appsIcon };
          obj = { style: closure_2.appsIconImage, color: visible(closure_2[6]).colors.INTERACTIVE_TEXT_ACTIVE };
          obj.children = callback(markAsDismissed(closure_2[7]).AppsIcon, obj);
          return callback(closure_4, obj);
        }
    };
    const intl = arg1(closure_2[9]).intl;
    obj.title = intl.string(arg1(closure_2[9]).t.bCPN5y);
    const intl2 = arg1(closure_2[9]).intl;
    obj.description = intl2.string(arg1(closure_2[9]).t.0TBExc);
    obj.onDismiss = function onDismiss() {
      markAsDismissed({ actionType: constants.TAKE_ACTION });
    };
    obj = { width: diff };
    obj.targetMeasurements = obj;
    obj = { width: diff, height: windowDimensions.height };
    obj.surfaceMeasurements = obj;
    obj.position = "bottom";
    tmp3 = jsx(arg1(closure_2[8]).Coachmark, obj);
  }
  return tmp3;
};
