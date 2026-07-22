// Module ID: 11237
// Function ID: 87479
// Name: AppLauncherApplicationViewScreenInner
// Dependencies: []
// Exports: default

// Module 11237 (AppLauncherApplicationViewScreenInner)
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
  const arg1 = application;
  ({ initiallyExpanded, expandBottomSheet } = application);
  const importDefault = expandBottomSheet;
  initiallyExpanded = undefined;
  ({ context, lockableScrollableContentOffsetY, installOnDemand, sectionName, onPressBack, onActivityItemSelected, entrypoint, onCommandExecuted } = application);
  const requiredAppLauncherContext = arg1(dependencyMap[7]).useRequiredAppLauncherContext();
  const bottomSheetExpandReasonRef = requiredAppLauncherContext.bottomSheetExpandReasonRef;
  const dependencyMap = bottomSheetExpandReasonRef;
  const chatInputRef = requiredAppLauncherContext.chatInputRef;
  const React = chatInputRef;
  const tmp2 = importDefault(dependencyMap[8])();
  if (null == initiallyExpanded) {
    initiallyExpanded = arg1(dependencyMap[9]).isEmbeddedApp(application);
    const obj2 = arg1(dependencyMap[9]);
  }
  const items = [application, chatInputRef];
  const items1 = [tmp2, initiallyExpanded, expandBottomSheet, bottomSheetExpandReasonRef];
  const onAauth2Cancel = React.useCallback(() => {
    const current = chatInputRef.current;
    let obj = { type: application(bottomSheetExpandReasonRef[10]).KeyboardTypes.APP_LAUNCHER, context: obj };
    obj = { initialRouteName: constants.APPLICATION_VIEW, application };
    current.openCustomKeyboard(obj);
  }, items);
  const effect = React.useEffect(() => {
    let tmp = initiallyExpanded;
    if (initiallyExpanded) {
      tmp = tmp2;
    }
    if (tmp) {
      bottomSheetExpandReasonRef.current = application(bottomSheetExpandReasonRef[7]).AppLauncherBottomSheetExpandReason.APP_VIEW;
      if (null != expandBottomSheet) {
        expandBottomSheet();
      }
      const tmp2 = bottomSheetExpandReasonRef;
    }
  }, items1);
  return jsx(importDefault(dependencyMap[11]), { application, context, lockableScrollableContentOffsetY, installOnDemand, sectionName, onPressBack, onActivityItemSelected, entrypoint, onCommandExecuted, onAauth2Cancel });
}
let closure_3 = importAll(dependencyMap[0]);
({ ActivityIndicator: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
const tmp3 = arg1(dependencyMap[3]);
const AppLauncherRouteName = tmp3.AppLauncherRouteName;
const BuiltInSectionId = arg1(dependencyMap[4]).BuiltInSectionId;
const jsx = arg1(dependencyMap[5]).jsx;
const tmp2 = arg1(dependencyMap[1]);
let closure_10 = arg1(dependencyMap[6]).createStyles({ container: { backgroundColor: tmp3.SCREEN_BACKGROUND_COLOR, flex: 1 } });
const obj = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/app_launcher/native/screens/application_view/AppLauncherApplicationViewScreen.tsx");

export default function AppLauncherApplicationViewScreen(route) {
  let application;
  let applicationId;
  let context;
  let entrypoint;
  let expandBottomSheet;
  let initiallyExpanded;
  let onActivityItemSelected;
  let onCommandExecuted;
  let sectionName;
  const params = route.route.params;
  ({ application, applicationId, onPressBack: closure_0, context } = params);
  const importDefault = context;
  const installOnDemand = params.installOnDemand;
  const dependencyMap = installOnDemand;
  const React = route.navigation;
  let closure_6;
  ({ initiallyExpanded, sectionName, expandBottomSheet, onCommandExecuted } = params);
  let obj = arg1(dependencyMap[7]);
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
  closure_6 = applicationId;
  let obj1 = arg1(dependencyMap[12]);
  let tmp4 = null;
  if (applicationId !== BuiltInSectionId.BUILT_IN) {
    tmp4 = applicationId;
  }
  const getOrFetchApplication = obj1.useGetOrFetchApplication(tmp4);
  if (applicationId === BuiltInSectionId.BUILT_IN) {
    application = arg1(dependencyMap[9]).FAKE_BUILT_IN_APP;
  } else if (null != getOrFetchApplication) {
    application = getOrFetchApplication;
  }
  let obj2 = arg1(dependencyMap[13]);
  const items = [applicationId, context, installOnDemand];
  const sharedValue = obj2.useSharedValue(0);
  const effect = React.useEffect(() => {
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
            closure_5.current = callback(installOnDemand[7]).AppLauncherKeyboardCloseReason.BACK;
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
    let tmp18 = <AppLauncherApplicationViewScreenInner {...obj} />;
  } else {
    obj1 = {};
    obj2 = { paddingTop: arg1(dependencyMap[14]).EXPANDED_HEADER_HEIGHT };
    obj1.style = obj2;
    obj1.children = <closure_4 />;
    tmp18 = <closure_5 {...obj1} />;
  }
  obj.children = tmp18;
  return <closure_5 {...obj} />;
};
