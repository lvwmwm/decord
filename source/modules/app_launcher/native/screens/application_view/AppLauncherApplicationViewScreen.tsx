// Module ID: 11247
// Function ID: 87529
// Name: AppLauncherApplicationViewScreenInner
// Dependencies: [31, 27, 7920, 1455, 4566, 33, 4130, 10884, 11248, 7919, 1555, 11249, 5470, 3991, 11250, 2]
// Exports: default

// Module 11247 (AppLauncherApplicationViewScreenInner)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import APP_LAUNCHER_BUILT_IN_SECTION_ICON from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import { BuiltInSectionId } from "TRUE_OPTION_NAME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
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
  initiallyExpanded = undefined;
  ({ context, lockableScrollableContentOffsetY, installOnDemand, sectionName, onPressBack, onActivityItemSelected, entrypoint, onCommandExecuted } = application);
  const requiredAppLauncherContext = application(bottomSheetExpandReasonRef[7]).useRequiredAppLauncherContext();
  bottomSheetExpandReasonRef = requiredAppLauncherContext.bottomSheetExpandReasonRef;
  const chatInputRef = requiredAppLauncherContext.chatInputRef;
  const tmp2 = expandBottomSheet(bottomSheetExpandReasonRef[8])();
  let closure_4 = tmp2;
  if (null == initiallyExpanded) {
    initiallyExpanded = application(bottomSheetExpandReasonRef[9]).isEmbeddedApp(application);
    const obj2 = application(bottomSheetExpandReasonRef[9]);
  }
  const items = [application, chatInputRef];
  const items1 = [tmp2, initiallyExpanded, expandBottomSheet, bottomSheetExpandReasonRef];
  const onAauth2Cancel = chatInputRef.useCallback(() => {
    const current = chatInputRef.current;
    obj = { type: application(bottomSheetExpandReasonRef[10]).KeyboardTypes.APP_LAUNCHER, context: obj };
    obj = { initialRouteName: outer1_7.APPLICATION_VIEW, application };
    current.openCustomKeyboard(obj);
  }, items);
  const effect = chatInputRef.useEffect(() => {
    let tmp = initiallyExpanded;
    if (initiallyExpanded) {
      tmp = closure_4;
    }
    if (tmp) {
      bottomSheetExpandReasonRef.current = application(bottomSheetExpandReasonRef[7]).AppLauncherBottomSheetExpandReason.APP_VIEW;
      if (null != expandBottomSheet) {
        expandBottomSheet();
      }
    }
  }, items1);
  return jsx(expandBottomSheet(bottomSheetExpandReasonRef[11]), { application, context, lockableScrollableContentOffsetY, installOnDemand, sectionName, onPressBack, onActivityItemSelected, entrypoint, onCommandExecuted, onAauth2Cancel });
}
({ ActivityIndicator: closure_4, View: closure_5 } = get_ActivityIndicator);
const AppLauncherRouteName = APP_LAUNCHER_BUILT_IN_SECTION_ICON.AppLauncherRouteName;
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ container: { backgroundColor: APP_LAUNCHER_BUILT_IN_SECTION_ICON.SCREEN_BACKGROUND_COLOR, flex: 1 } });
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/app_launcher/native/screens/application_view/AppLauncherApplicationViewScreen.tsx");

export default function AppLauncherApplicationViewScreen(route) {
  let application;
  let applicationId;
  let closure_4;
  let closure_5;
  let context;
  let entrypoint;
  let expandBottomSheet;
  let initiallyExpanded;
  let onActivityItemSelected;
  let onCommandExecuted;
  let require;
  let sectionName;
  const params = route.route.params;
  ({ application, applicationId, onPressBack: require, context } = params);
  const installOnDemand = params.installOnDemand;
  const navigation = route.navigation;
  applicationId = undefined;
  ({ initiallyExpanded, sectionName, expandBottomSheet, onCommandExecuted } = params);
  let obj = require(installOnDemand[7]);
  const requiredAppLauncherContext = obj.useRequiredAppLauncherContext();
  ({ chatInputRef: closure_4, keyboardCloseReasonRef: closure_5 } = requiredAppLauncherContext);
  ({ entrypoint, onActivityItemSelected } = requiredAppLauncherContext);
  let id;
  if (null != application) {
    id = application.id;
  }
  if (null != id) {
    applicationId = id;
  }
  let obj1 = require(installOnDemand[12]);
  let tmp4 = null;
  if (applicationId !== BuiltInSectionId.BUILT_IN) {
    tmp4 = applicationId;
  }
  const getOrFetchApplication = obj1.useGetOrFetchApplication(tmp4);
  if (applicationId === BuiltInSectionId.BUILT_IN) {
    application = require(installOnDemand[9]).FAKE_BUILT_IN_APP;
  } else if (null != getOrFetchApplication) {
    application = getOrFetchApplication;
  }
  let obj2 = require(installOnDemand[13]);
  const items = [applicationId, context, installOnDemand];
  const sharedValue = obj2.useSharedValue(0);
  const effect = navigation.useEffect(() => {
    let tmp = null != applicationId;
    if (tmp) {
      tmp = "channel" === context.type;
    }
    if (tmp) {
      tmp = installOnDemand;
    }
    if (tmp) {
      const result = applicationId.queryInstallOnDemandApp(applicationId, context.channel.id);
    }
  }, items);
  obj = { style: callback().container };
  if (null != application) {
    obj = {
      context,
      application,
      lockableScrollableContentOffsetY: sharedValue,
      initiallyExpanded,
      installOnDemand,
      sectionName,
      onPressBack() {
          if (null != callback) {
            callback();
          }
          if (navigation.canGoBack()) {
            navigation.pop();
          } else {
            closure_5.current = outer1_0(installOnDemand[7]).AppLauncherKeyboardCloseReason.BACK;
            const current = ref.current;
            if (null != current) {
              current.closeCustomKeyboard();
            }
          }
        },
      onActivityItemSelected,
      entrypoint,
      expandBottomSheet,
      onCommandExecuted
    };
    let tmp18 = <AppLauncherApplicationViewScreenInner context={context} application={application} lockableScrollableContentOffsetY={sharedValue} initiallyExpanded={initiallyExpanded} installOnDemand={installOnDemand} sectionName={sectionName} onPressBack={function onPressBack() {
      if (null != callback) {
        callback();
      }
      if (navigation.canGoBack()) {
        navigation.pop();
      } else {
        closure_5.current = outer1_0(installOnDemand[7]).AppLauncherKeyboardCloseReason.BACK;
        const current = ref.current;
        if (null != current) {
          current.closeCustomKeyboard();
        }
      }
    }} onActivityItemSelected={onActivityItemSelected} entrypoint={entrypoint} expandBottomSheet={expandBottomSheet} onCommandExecuted={onCommandExecuted} />;
  } else {
    obj1 = {};
    obj2 = { paddingTop: require(installOnDemand[14]).EXPANDED_HEADER_HEIGHT };
    obj1.style = obj2;
    obj1.children = <closure_4 />;
    tmp18 = <closure_5 />;
  }
  obj.children = tmp18;
  return <closure_5 style={callback().container} />;
};
