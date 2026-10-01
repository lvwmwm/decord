// Module ID: 11609
// Function ID: 11610
// Name: AppLauncherApplicationViewScreen
// Dependencies: [19, 17, 8591, 1484, 5305, 21, 4836, 10785, 11610, 8590, 1611, 11611, 6589, 4566, 11612, 2]
// Exports: default

// Module 11609 (AppLauncherApplicationViewScreen)
import Fragment from "Fragment" /* 21 */;
import KeyboardTypes from "KeyboardTypes" /* 1611 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 5305 */;
import AppLauncherContext from "AppLauncherContext" /* 10785 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationCommandIndexStore from "ApplicationCommandIndexStore" /* 8591 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1484 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let navigation;

let SCREEN_BACKGROUND_COLOR;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
function AppLauncherApplicationViewScreenInner(application) {
  let context;
  let entrypoint;
  let expandBottomSheet;
  let initiallyExpanded;
  let installOnDemand;
  let lockableScrollableContentOffsetY;
  let onActivityItemSelected;
  let onCommandExecuted;
  let onPressBack;
  let sectionName;
  application = application.application;
  ({ initiallyExpanded, expandBottomSheet } = application);
  let bottomSheetExpandReasonRef;
  initiallyExpanded = undefined;
  ({ context, lockableScrollableContentOffsetY, installOnDemand, sectionName, onPressBack, onActivityItemSelected, entrypoint, onCommandExecuted } = application);
  let tmp = application;
  let obj = application(bottomSheetExpandReasonRef[7]);
  const requiredAppLauncherContext = obj.useRequiredAppLauncherContext();
  bottomSheetExpandReasonRef = requiredAppLauncherContext.bottomSheetExpandReasonRef;
  const chatInputRef = requiredAppLauncherContext.chatInputRef;
  const tmp5 = expandBottomSheet(bottomSheetExpandReasonRef[8])();
  let closure_4 = tmp5;
  const tmp4 = expandBottomSheet;
  if (initiallyExpanded == null) {
    const tmpResult = tmp(bottomSheetExpandReasonRef[9]);
    initiallyExpanded = tmpResult.isEmbeddedApp(application);
  }
  const items = [application, chatInputRef];
  const items1 = [tmp5, initiallyExpanded, expandBottomSheet, bottomSheetExpandReasonRef];
  const onAauth2Cancel = chatInputRef.useCallback(() => {
    let obj2;
    const current = chatInputRef.current;
    const obj = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: obj2 };
    obj2 = { initialRouteName: metroImportDefault.APPLICATION_VIEW, application };
    current.openCustomKeyboard(obj);
  }, items);
  const effect = chatInputRef.useEffect(() => {
    const tmp = initiallyExpanded && closure_4;
    if (tmp) {
      bottomSheetExpandReasonRef.current = AppLauncherContext.AppLauncherBottomSheetExpandReason.APP_VIEW;
      if (expandBottomSheet != null) {
        expandBottomSheet();
      }
    }
  }, items1);
  return jsx(tmp4(bottomSheetExpandReasonRef[11]), { application, context, lockableScrollableContentOffsetY, installOnDemand, sectionName, onPressBack, onActivityItemSelected, entrypoint, onCommandExecuted, onAauth2Cancel });
}
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
({ AppLauncherRouteName: metroImportDefault, SCREEN_BACKGROUND_COLOR } = AppLauncherNativeConstants);
const BuiltInSectionId = ApplicationCommandConstants.BuiltInSectionId;
const jsx = Fragment.jsx;
let obj = { container: { backgroundColor: SCREEN_BACKGROUND_COLOR, flex: 1 } };
let closure_10 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/AppLauncherApplicationViewScreen.tsx");

export default function AppLauncherApplicationViewScreen(route) {
  let FAKE_BUILT_IN_APP;
  let application;
  let applicationId;
  let c4;
  let c5;
  let context;
  let entrypoint;
  let expandBottomSheet;
  let initiallyExpanded;
  let obj5;
  let onActivityItemSelected;
  let onCommandExecuted;
  let ref;
  let sectionName;
  let tmp12Result;
  const params = route.route.params;
  ({ application, onPressBack: require, context } = params);
  const installOnDemand = params.installOnDemand;
  navigation = route.navigation;
  c4 = undefined;
  c5 = undefined;
  let tmp = require;
  let tmp2 = installOnDemand;
  ({ applicationId, initiallyExpanded, sectionName, expandBottomSheet, onCommandExecuted } = params);
  const obj = require("AppLauncherContext");
  const requiredAppLauncherContext = obj.useRequiredAppLauncherContext();
  ({ chatInputRef: c4, keyboardCloseReasonRef: c5 } = requiredAppLauncherContext);
  ({ entrypoint, onActivityItemSelected } = requiredAppLauncherContext);
  let id;
  const tmp4 = closure_10();
  if (application != null) {
    id = application.id;
  }
  if (id == null) {
    id = applicationId;
  }
  let tmp8 = null;
  const useGetOrFetchApplication = tmp(tmp2[12]).useGetOrFetchApplication;
  const tmp7 = BuiltInSectionId;
  const tmpResult = tmp(tmp2[12]);
  if (id !== BuiltInSectionId.BUILT_IN) {
    tmp8 = id;
  }
  const getOrFetchApplication = useGetOrFetchApplication(tmp8);
  if (id === tmp7.BUILT_IN) {
    FAKE_BUILT_IN_APP = tmp(tmp2[9]).FAKE_BUILT_IN_APP;
  } else {
    FAKE_BUILT_IN_APP = getOrFetchApplication;
    if (getOrFetchApplication == null) {
      FAKE_BUILT_IN_APP = application;
    }
  }
  const items = [id, context, installOnDemand];
  const tmpResult2 = tmp(tmp2[13]);
  const sharedValue = tmpResult2.useSharedValue(0);
  const effect = navigation.useEffect(() => {
    let tmp2 = null != id;
    const tmp = id;
    if (tmp2) {
      tmp2 = "channel" === context.type;
    }
    if (tmp2) {
      tmp2 = installOnDemand;
    }
    if (tmp2) {
      const result = ApplicationCommandIndexStore.queryInstallOnDemandApp(tmp, context.channel.id);
    }
  }, items);
  if (null != FAKE_BUILT_IN_APP) {
    const obj3 = {
      context,
      application: FAKE_BUILT_IN_APP,
      lockableScrollableContentOffsetY: sharedValue,
      initiallyExpanded,
      installOnDemand,
      sectionName,
      onPressBack() {
          if (require != null) {
            tmp();
          }
          const arr = navigation;
          if (navigation.canGoBack()) {
            arr.pop();
          } else {
            c5.current = AppLauncherContext.AppLauncherKeyboardCloseReason.BACK;
            const current = ref.current;
            if (current != null) {
              current.closeCustomKeyboard();
            }
          }
        },
      onActivityItemSelected,
      entrypoint,
      expandBottomSheet,
      onCommandExecuted
    };
    tmp12Result = tmp12(AppLauncherApplicationViewScreenInner, obj3);
  } else {
    const obj4 = { style: obj5, children: null };
    obj5 = { paddingTop: tmp(tmp2[14]).EXPANDED_HEADER_HEIGHT };
    tmp12Result = tmp12(tmp13, obj4);
  }
  return <c5 style={tmp4.container}>{tmp12Result}</c5>;
};
