// Module ID: 11721
// Function ID: 11722
// Name: ConjureChatScene
// Dependencies: [5, 32, 19, 17, 2046, 11001, 11722, 11024, 6724, 11017, 6727, 21, 11724, 11726, 5625, 4945, 587, 1505, 1633, 11734, 1647, 5014, 504, 6760, 11738, 11090, 11744, 11624, 11731, 11023, 5584, 11728, 11045, 11745, 11727, 11064, 1128, 3820, 11746, 10882, 11747, 1499, 8833, 11748, 5171, 11680, 11661, 12129, 12133, 12135, 5624, 11733, 12137, 12139, 12149, 11031, 11751, 11067, 12150, 11026, 11675, 11730, 9732, 7437, 12153, 11663, 12155, 6875, 11720, 12156, 9689, 9571, 5195, 5205, 12158, 12159, 12160, 558, 576, 2]
// Exports: default

// Module 11721 (ConjureChatScene)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl6 from "intl" /* 1128 */;
import _modDef3820 from "module_3820" /* 3820 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5014 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5171 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5625 */;
import FramesConstants from "FramesConstants" /* 6727 */;
import NavigatorHeader from "NavigatorHeader" /* 6875 */;
import SettingsIcon from "SettingsIcon" /* 7437 */;
import UploadIcon from "UploadIcon" /* 9732 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 11001 */;
import ConjureActionCreators from "ConjureActionCreators" /* 11023 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 11031 */;
import restartFrames from "restartFrames" /* 11067 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 11624 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 11661 */;
import conjureProjectActions2 from "conjureProjectActions" /* 11663 */;
import ConjureSettingsSheet from "ConjureSettingsSheet" /* 11680 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 11724 */;
import ConjureFirstPublishSheet from "ConjureFirstPublishSheet" /* 11726 */;
import useConjurePublishAction from "useConjurePublishAction" /* 11727 */;
import conjurePublishAction from "conjurePublishAction" /* 11730 */;
import conjurePreviewTargets from "conjurePreviewTargets" /* 11746 */;
import ConjureConnectToolSheet from "ConjureConnectToolSheet" /* 12129 */;
import ConjureHistorySheet from "ConjureHistorySheet" /* 12139 */;
import BugIcon from "BugIcon" /* 12153 */;
import ConjureProjectHeaderTitleDefault from "ConjureProjectHeaderTitle" /* 12155 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationStore from "ApplicationStore" /* 2046 */;
import conjureDesignFeedbackStore from "conjureDesignFeedbackStore" /* 11722 */;
import ConjureLastIntegrationStatusStore from "ConjureLastIntegrationStatusStore" /* 11024 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6724 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 11017 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4945 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ConjureRemixSheetDefault = ConjureRemixSheet;
const ConjureSettingsSheetDefault = ConjureSettingsSheet;
const ConjureConnectToolSheetDefault = ConjureConnectToolSheet;
const ConjureHistorySheetDefault = ConjureHistorySheet;
let c1, c4, c6, navigation;

let closure_12;
let closure_18;
let closure_19;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp;
let unpackModuleId;
const ExperimentalDirectSelectIcon2 = tmp(12156);
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ActivityIndicator: metroRequire, Keyboard: metroImportDefault, View: metroImportAll } = react_native);
const closeConnection = ConjureConnectionStore.closeConnection;
({ enterConjureDesignFeedback: unpackModuleId, exitConjureDesignFeedback: closure_12, useConjureDesignFeedback: map1 } = conjureDesignFeedbackStore);
const isLaunched = FramesConstants.isLaunched;
({ jsx: closure_18, jsxs: closure_19 } = Fragment);
let obj = {
  showPublishBlocked: ConjurePublishBlockedSheetDefault,
  promptFirstPublish: ConjureFirstPublishSheet.showConjureFirstPublishSheet,
  showError(text) {
    obj = ToastActionCreatorsDefault;
    const obj2 = { text, variant: "critical" };
    return obj.open("CONJURE_PUBLISH_FAILED", obj2);
  },
  showConfirmation(intl) {
    obj = ToastActionCreatorsDefault;
    const obj2 = { text: intl, variant: "success" };
    return obj.open("CONJURE_PUBLISH_SUCCEEDED", obj2);
  }
};
let closure_21 = createStyles.createStyles((paddingBottom) => {
  obj = { content: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom }, contentBare: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, centered: { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 }, listError: { alignItems: "center", gap: nativeDefault.space.PX_12 }, headerActions: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 }, segments: { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4 }, panes: { flex: 1, overflow: "hidden" }, pane: { flex: 1 }, chatPane: { flex: 1, paddingBottom }, paneHidden: { display: "none" }, paneBackstage: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0 } };
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom });
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
  ({ flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 });
  ({ alignItems: "center", gap: nativeDefault.space.PX_12 });
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 });
  ({ paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4 });
  return obj;
});
const PX_16 = nativeDefault.space.PX_16;
let closure_23 = { code: "function ConjureChatSceneTsx1(e){const{runOnJS,setChatKeyboardCover,safeAreaBottom}=this.__closure;runOnJS(setChatKeyboardCover)(Math.max(0,e.height-safeAreaBottom));}" };
let closure_24 = { code: "function ConjureChatSceneTsx2(){const{previewShowing,botFaceShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{paddingBottom:previewShowing&&!botFaceShowing?Math.max(keyboardHeight.get(),safeAreaBottom):0};}" };
let __initData = { code: "function ConjureChatSceneTsx3(){const{previewShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{transform:[{translateY:previewShowing?0:-Math.max(0,keyboardHeight.get()-safeAreaBottom)}]};}" };
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureSelectModeActiveIcon() {
  let first;
  obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { color: nativeDefault.colors.TEXT_BRAND };
    const ExperimentalDirectSelectIcon = ExperimentalDirectSelectIcon2.ExperimentalDirectSelectIcon;
    const tmp7 = authStore5(ExperimentalDirectSelectIcon, obj2);
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function ConjureSelectModeActiveIcon() {
  obj = { color: nativeDefault.colors.TEXT_BRAND };
  const ExperimentalDirectSelectIcon = ExperimentalDirectSelectIcon2.ExperimentalDirectSelectIcon;
  return authStore5(ExperimentalDirectSelectIcon, obj);
});
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureChatScene.tsx");

export default function ConjureChatScene(guildId) {
  let Provider;
  let Provider2;
  let Sme0T0;
  let _undefined;
  let closure_4;
  let closure_5;
  let first;
  let fn;
  let frameLaunchParams;
  let has_activity;
  let intl3;
  let intl4;
  let intl5;
  let isResolving;
  let items40;
  let items41;
  let items42;
  let items44;
  let items45;
  let obj17;
  let obj20;
  let obj22;
  let obj25;
  let obj26;
  let obj27;
  let previewAppId;
  let projectGuildId;
  let prop;
  let prop1;
  let prop2;
  let prop3;
  let str5;
  let str6;
  let tmp10;
  let tmp110;
  let tmp117Result;
  let tmp117Result1;
  let tmp133;
  let tmp43;
  let tmp44;
  let tmp46;
  let tmp47;
  let tmp4Result4;
  let tmp50;
  let tmp51;
  let widgetApplicationId;
  guildId = guildId.guildId;
  const projectId = guildId.projectId;
  navigation = undefined;
  previewAppId = undefined;
  let data;
  let isLoading;
  let stateFromStores4;
  let availability;
  let activeMode;
  let setMode;
  let frameSurface;
  let frameSurfaceOptions;
  let setFrameSurface;
  let appChannel;
  let setAppChannel;
  let result1;
  __initData = undefined;
  closure_26 = undefined;
  let closure_27;
  let closure_28;
  let closure_29;
  let ref;
  let active;
  let conjureControlActive;
  let c33;
  let callback1;
  let memo;
  let memo1;
  let stringResult1;
  let closure_38;
  let num2;
  let activeIndex;
  let setActiveIndex;
  let closure_42;
  projectGuildId = undefined;
  let callback3;
  let memo5;
  let callback4;
  let callback5;
  let closure_48;
  let callback6;
  let callback21;
  let conjureDebugPaneEnabled;
  let callback7;
  let closure_53;
  let callback8;
  let callback9;
  let stateFromStores5;
  let preview;
  let isConjureProjectMuted;
  let conjureRemoveTarget;
  let memo7;
  let tmp = guildId;
  let tmp2 = navigation;
  obj = guildId(navigation[17]);
  navigation = obj.useNavigation();
  let tmp4 = projectId;
  const bottom = projectId(navigation[18])().bottom;
  let tmp5 = setFrameSurface(bottom);
  _slicedToArray = tmp5;
  let tmp6 = projectId(navigation[19])();
  react = tmp6;
  let obj2 = react;
  let tmp7 = _slicedToArray;
  [first, tmp10] = react.useState(0);
  let closure_6 = tmp10;
  let obj3 = guildId(navigation[20]);
  let obj4 = { onEnd: fn };
  fn = function w(height) {
    obj = ReanimatedRexport;
    const runOnJSResult = obj.runOnJS(closure_6);
    runOnJSResult(Math.max(0, height.height - bottom));
  };
  let obj5 = { runOnJS: guildId(navigation[21]).runOnJS, setChatKeyboardCover: tmp10, safeAreaBottom: bottom };
  fn.__closure = obj5;
  fn.__workletHash = 7830565176778;
  fn.__initData = setAppChannel;
  let items = [bottom];
  obj3.useKeyboardHandler(obj4, items);
  let obj6 = guildId(navigation[22]);
  let items1 = [stateFromStores4];
  let items2 = [projectId];
  const stateFromStores = obj6.useStateFromStores(items1, () => {
    let project = ConjureProjectStore.getProject(projectId);
    if (project == null) {
      project = null;
    }
    return project;
  }, items2);
  let obj7 = guildId(navigation[22]);
  const items3 = [stateFromStores4];
  const items4 = [projectId];
  const stateFromStoresObject = obj7.useStateFromStoresObject(items3, () => {
    let guild_id;
    let name;
    let prop;
    const project = ConjureProjectStore.getProject(projectId);
    obj = { projectExists: null != project, projectName: name, projectGuildId: guild_id, previewAppId: prop };
    name = undefined;
    if (project != null) {
      name = project.name;
    }
    if (name == null) {
      name = null;
    }
    guild_id = undefined;
    if (project != null) {
      guild_id = project.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    prop = undefined;
    if (project != null) {
      prop = project.preview_application_id;
    }
    if (prop == null) {
      prop = null;
    }
    return obj;
  }, items4);
  const projectExists = stateFromStoresObject.projectExists;
  const projectName = stateFromStoresObject.projectName;
  ({ projectGuildId, previewAppId } = stateFromStoresObject);
  let obj8 = guildId(navigation[22]);
  const items5 = [stateFromStores4];
  const items6 = [guildId];
  const stateFromStores1 = obj8.useStateFromStores(items5, () => {
    const guildProjectsFetchState = ConjureProjectStore.getGuildProjectsFetchState(guildId);
    return "unattempted" === guildProjectsFetchState || "loading" === guildProjectsFetchState;
  }, items6);
  let obj9 = guildId(navigation[22]);
  const items7 = [stateFromStores4, isLoading];
  const items8 = [projectId];
  const stateFromStores2 = obj9.useStateFromStores(items7, () => {
    let integrationStatus = ConjureProjectStore.getIntegrationStatus(projectId);
    const tmp = projectId;
    if (integrationStatus == null) {
      integrationStatus = ConjureLastIntegrationStatusStore.getIntegrationStatus(tmp);
    }
    return integrationStatus;
  }, items8);
  let obj10 = guildId(navigation[22]);
  const items9 = [stateFromStores4];
  const items10 = [projectId];
  const stateFromStores3 = obj10.useStateFromStores(items9, () => null != ConjureProjectStore.getIntegrationStatus(projectId), items10);
  let preview_ready;
  const tmp12 = stateFromStores4;
  if (stateFromStores2 != null) {
    preview_ready = stateFromStores2.preview_ready;
  }
  let install_scope;
  if (stateFromStores != null) {
    install_scope = stateFromStores.install_scope;
  }
  if (install_scope == null) {
    install_scope = null;
  }
  const useApplication = tmp(tmp2[23]).useApplication;
  tmp(tmp2[23]);
  let application = useApplication(previewAppId);
  data = application.data;
  isLoading = application.isLoading;
  const items11 = [availability];
  const items12 = [projectId];
  const tmpResult17 = tmp(tmp2[22]);
  stateFromStores4 = tmpResult17.useStateFromStores(items11, () => {
    const publishStatus = ConjurePublishStatusStore.getPublishStatus(projectId);
    let previewAppChannels;
    if (publishStatus != null) {
      previewAppChannels = publishStatus.previewAppChannels;
    }
    return previewAppChannels;
  }, items12);
  if (stateFromStores4 == null) {
    let preview_app_channels;
    if (stateFromStores2 != null) {
      preview_app_channels = stateFromStores2.preview_app_channels;
    }
    stateFromStores4 = preview_app_channels;
  }
  let obj11 = { applicationId: previewAppId, previewApplicationId: previewAppId, declaredActivity: true === has_activity, previewSupportedSurfaces: prop, installScope: install_scope, ownerAuthorizationRevoked: true === prop1, mainCardOnly: true, previewAppChannels: stateFromStores4 };
  has_activity = undefined;
  const useConjurePreviewMode = tmp(tmp2[24]).useConjurePreviewMode;
  tmp(tmp2[24]);
  if (stateFromStores2 != null) {
    has_activity = stateFromStores2.has_activity;
  }
  prop = undefined;
  if (stateFromStores != null) {
    prop = stateFromStores.preview_supported_surfaces;
  }
  prop1 = undefined;
  if (stateFromStores2 != null) {
    prop1 = stateFromStores2.owner_authorization_revoked;
  }
  let tmp29 = true === preview_ready;
  const conjurePreviewMode = useConjurePreviewMode(obj11);
  availability = conjurePreviewMode.availability;
  activeMode = conjurePreviewMode.activeMode;
  setMode = conjurePreviewMode.setMode;
  frameSurface = conjurePreviewMode.frameSurface;
  frameSurfaceOptions = conjurePreviewMode.frameSurfaceOptions;
  setFrameSurface = conjurePreviewMode.setFrameSurface;
  appChannel = conjurePreviewMode.appChannel;
  setAppChannel = conjurePreviewMode.setAppChannel;
  ({ frameLaunchParams, widgetApplicationId, isResolving } = conjurePreviewMode);
  const tmpResult19 = tmp(tmp2[25]);
  const conjurePreviewModeRequests = tmpResult19.useConjurePreviewModeRequests(projectId, (arg0) => {
    const modes = availability.modes;
    if (modes.includes(arg0)) {
      setMode(arg0);
    }
  });
  const tmpResult20 = tmp(tmp2[26]);
  const conjureTraceRequests = tmpResult20.useConjureTraceRequests(projectId, () => {
    obj = { projectId };
    return navigation.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, obj);
  });
  let obj12 = { installScope: install_scope, previewReady: tmp29, integrationInstalled: prop2, botPermissionsChanged: true === prop3 };
  prop2 = undefined;
  const requiresPermissionReview = tmp(tmp2[28]).requiresPermissionReview;
  tmp(tmp2[28]);
  if (stateFromStores2 != null) {
    prop2 = stateFromStores2.integration_installed;
  }
  if (prop2 == null) {
    prop2 = null;
  }
  prop3 = undefined;
  if (stateFromStores2 != null) {
    prop3 = stateFromStores2.bot_permissions_changed;
  }
  let result = requiresPermissionReview(obj12);
  const items13 = [projectId];
  const effect = obj2.useEffect(() => {
    obj = ConjureActionCreators;
    const project = obj.getProject(projectId);
    project.catch(() => {

    });
  }, items13);
  const tmp38 = null != previewAppId && null != tmp4(tmp2[30])(previewAppId);
  const tmpResult22 = tmp(tmp2[31]);
  result1 = tmpResult22.conjureInstallGuildId(stateFromStores, stateFromStores2, guildId);
  let tmp40 = bottom;
  const items14 = [result1, previewAppId, data, stateFromStores, projectId];
  const callback = obj2.useCallback(bottom(function*(arg0, value) {
    let application;
    let application3;
    let closure_1;
    let closure_2;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_3 = tmp;
            navigation = tmp;
            const tmp6 = null != stateFromStores && null != previewAppId;
            if (tmp6) {
              if (null == data) {
                const obj3 = application(navigation[23]);
                application = obj3.fetchApplication(previewAppId);
                c4 = 1;
                c5 = 1;
                const obj5 = {
                  value: application.catch(() => {

                              }),
                  done: false
                };
                return obj5;
              }
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        }
        const obj6 = {
          applicationId: closure_131_10,
          application,
          guildId: closure_131_24,
          onClose() {
                obj = c0(navigation[31]);
                const result = obj.repairConjureGuildHints(closure_1_7, closure_1_24);
                const cleanupPromise = result.finally(() => {
                  obj = application(closure_2_2[29]);
                  return obj.getProject(closure_1_1);
                });
                cleanupPromise.catch(() => {

                });
              }
        };
        const tmp11 = application3(navigation[32]);
        application3 = closure_131_13;
        const openConjureAppInstallModal = tmp11.openConjureAppInstallModal;
        if (closure_131_13 == null) {
          application3 = application2.getApplication(closure_131_10);
        }
        application = application3;
        if (application3 == null) {
          application = null;
        }
        let result = openConjureAppInstallModal(obj6);
      } catch (tmp27) {
        c5 = 3;
        throw tmp27;
      }
    }
  }), items14);
  let tmp7Result = tmp7(obj2.useState(true), 2);
  [tmp43, tmp44] = tmp7Result;
  __initData = tmp44;
  [tmp46, tmp47] = tmp7(obj2.useState(false), 2);
  let tmp48 = null;
  const useState = obj2.useState;
  tmp7(obj2.useState(false), 2);
  if (null != stateFromStores2) {
    tmp48 = tmp29;
  }
  [tmp50, tmp51] = tmp7(useState(tmp48), 2);
  tmp7(useState(tmp48), 2);
  const tmp7Result6 = tmp7(obj2.useState(projectId), 2);
  if (tmp7Result6[0] !== projectId) {
    tmp7Result6[1](projectId);
    tmp44(true);
    tmp47(false);
    tmp51(null);
  }
  let tmp57 = tmp29 && null != previewAppId && !isResolving;
  if (tmp57) {
    const tmp58 = availability.modes.length > 0 || result;
    tmp57 = tmp58;
  }
  closure_26 = tmp59;
  let hasItem = tmp57;
  const tmpResult23 = tmp(tmp2[33]);
  const conjureAgentNeedsPreview = tmpResult23.useConjureAgentNeedsPreview(projectId);
  if (tmp57) {
    hasItem = tmp38;
  }
  if (hasItem) {
    let modes = availability.modes;
    const str = "frame";
    hasItem = modes.includes("frame");
  }
  let tmp62 = hasItem && tmp59;
  if (tmp62) {
    let str2 = "frame";
    tmp62 = "frame" === activeMode;
  }
  closure_27 = tmp62;
  if (hasItem) {
    hasItem = tmp46 || tmp62 || conjureAgentNeedsPreview;
    const tmp63 = tmp46 || tmp62 || conjureAgentNeedsPreview;
  }
  const tmp64 = hasItem && !tmp46;
  if (tmp64) {
    tmp47(true);
  }
  let tmp66 = tmp59;
  if (tmp66) {
    tmp66 = "bot" === activeMode;
  }
  closure_28 = tmp66;
  let prop4;
  if (stateFromStores2 != null) {
    prop4 = stateFromStores2.integration_installed;
  }
  let tmp68 = tmp66 && result;
  if (tmp68) {
    tmp68 = tmp69;
  }
  closure_29 = tmp68;
  ref = obj2.useRef(false);
  const items15 = [guildId, tmp68, projectId];
  const effect1 = obj2.useEffect(() => {
    if (closure_29) {
      if (!ref.current) {
        ref.current = true;
        obj = useConjurePublishAction;
        const conjureInstallConsent = obj.requestConjureInstallConsent(projectId, guildId);
        conjureInstallConsent.catch(() => {

        });
      }
    } else {
      ref.current = false;
    }
  }, items15);
  const tmpResult24 = tmp(tmp2[21]);
  class Xe {
    constructor() {
      let paddingBottom = 0;
      if (closure_26) {
        paddingBottom = 0;
        if (!closure_28) {
          const _Math = Math;
          paddingBottom = Math.max(closure_5.get(), bottom);
        }
      }
      return { paddingBottom };
    }
  }
  Xe.__closure = { previewShowing: tmp57 && !tmp43, botFaceShowing: tmp66, keyboardHeight: tmp6, safeAreaBottom: bottom };
  Xe.__workletHash = 9469604169548;
  Xe.__initData = result1;
  const animatedStyle = tmpResult24.useAnimatedStyle(Xe);
  const tmpResult25 = tmp(tmp2[21]);
  class Ve {
    constructor() {
      let items;
      let num = 0;
      if (!closure_26) {
        const _Math = Math;
        num = -Math.max(0, closure_5.get() - bottom);
      }
      obj = { transform: items };
      items = [{ translateY: num }];
      return obj;
    }
  }
  Ve.__closure = { previewShowing: tmp57 && !tmp43, keyboardHeight: tmp6, safeAreaBottom: bottom };
  Ve.__workletHash = 7166266100039;
  Ve.__initData = __initData;
  const animatedStyle1 = tmpResult25.useAnimatedStyle(Ve);
  active = data(projectId).active;
  const tmpResult26 = tmp(tmp2[35]);
  conjureControlActive = tmpResult26.useConjureControlActive(projectId);
  let intl = tmp(tmp2[36]).intl;
  const string = intl.string;
  const tmp4Result = tmp4(tmp2[37]);
  if (conjureControlActive) {
    Sme0T0 = tmp4Result.Sme0T0;
  } else {
    Sme0T0 = active ? tmp4Result.vn5Rzu : tmp4Result["cl/Jyl"];
  }
  const stringResult = string(Sme0T0);
  c33 = stringResult;
  const items16 = [active, projectId];
  callback1 = obj2.useCallback(() => {
    const tmp = active;
    if (tmp) {
      authStore2(projectId);
    } else {
      unpackModuleId(projectId);
    }
  }, items16);
  const items17 = [availability.modes, frameSurfaceOptions, stateFromStores4];
  memo = obj2.useMemo(() => {
    obj = conjurePreviewTargets;
    return obj.previewTargets(availability.modes, frameSurfaceOptions, stateFromStores4);
  }, items17);
  const items18 = [activeMode, frameSurface, appChannel];
  memo1 = obj2.useMemo(() => {
    obj = conjurePreviewTargets;
    return obj.activePreviewTarget(activeMode, frameSurface, appChannel);
  }, items18);
  let intl2 = tmp(tmp2[36]).intl;
  stringResult1 = intl2.string(tmp4(tmp2[37])["N+VA1J"]);
  const items19 = [memo1, availability.modes.length, stringResult1, tmp59];
  const memo2 = obj2.useMemo(() => {
    let intl;
    let items2;
    obj = { id: "chat", label: intl.string(_modDef3820["1HH2p9"]), page: null };
    intl = intl6.intl;
    const items = [obj];
    if (availability.modes.length > 0) {
      const tmp4 = closure_26;
      if (tmp4) {
        let previewTargetLabel;
        if (null != memo1) {
          const tmp2Result = conjurePreviewTargets;
          previewTargetLabel = tmp2Result.getPreviewTargetLabel(tmp5);
        }
        const items1 = [{ id: "preview", label: previewTargetLabel, page: null }];
        items2 = items1;
        const obj2 = { id: "preview", label: previewTargetLabel, page: null };
      }
      previewTargetLabel = stringResult1;
    } else {
      items2 = [];
    }
    HermesBuiltin.arraySpread(items, items2, 1);
    return items;
  }, items19);
  let tmp81 = null != memo1;
  const callback2 = obj2.useCallback((arg0) => {
    metroImportDefault.dismiss();
    _undefined(0 === arg0);
  }, []);
  if (tmp81) {
    let num = 1;
    tmp81 = memo.length > 1;
  }
  closure_38 = tmp81;
  const items20 = [memo1, tmp81, stringResult1, tmp59, setAppChannel, setFrameSurface, setMode, memo];
  const first1 = availability.modes[0];
  let tmp84 = null != stateFromStores2;
  const memo3 = obj2.useMemo(() => {
    let fn;
    let fn2;
    let intl;
    let target;
    let targets;
    let tmp;
    if (null != memo1) {
      let tmp3;
      if (closure_26) {
        tmp3 = stringResult1;
      }
      preview = { prefix: tmp3, renderTrailingIcon: fn, menuLabel: intl.string(_modDef3820.I2ucou), onShowMenu: fn2 };
      fn = undefined;
      if (closure_26) {
        if (closure_38) {
          fn = (color) => {
            obj = { size: "xs", color };
            return setMode(guildId(navigation[39]).ChevronSmallDownIcon, obj);
          };
        }
      }
      intl = intl6.intl;
      fn2 = undefined;
      if (closure_38) {
        fn2 = () => {
          obj = {
            targets,
            target,
            onChange(mode) {
              obj = guildId(navigation[38]);
              const previewTarget = obj.selectPreviewTarget(mode, closure_1_18, closure_1_21, closure_1_23);
              closure_1_25(false);
            }
          };
          return projectId(navigation[40])(obj);
        };
      }
      tmp = { preview };
      const obj2 = { preview };
    }
    return tmp;
  }, items20);
  if (tmp84) {
    tmp84 = tmp29 !== tmp50;
  }
  if (tmp84) {
    const tmp85 = false === tmp50 && tmp29 && null != first1;
    if (tmp85) {
      setMode(first1);
      tmp44(false);
    }
    tmp51(tmp29);
  }
  const width = tmp4(tmp2[41])().width;
  let obj13 = { items: memo2, pageWidth: width - 2 * appChannel, onSetActiveIndex: callback2 };
  const tmpResult27 = tmp(tmp2[42]);
  const segmentedControlState = tmpResult27.useSegmentedControlState(obj13);
  if (tmp43) {
    num2 = 0;
  } else {
    num2 = 1;
  }
  activeIndex = segmentedControlState.activeIndex;
  setActiveIndex = segmentedControlState.setActiveIndex;
  const items21 = [num2, activeIndex, setActiveIndex];
  const effect2 = obj2.useEffect(() => {
    if (activeIndex.get() !== num2) {
      setActiveIndex(tmp, false);
    }
  }, items21);
  const items22 = [previewAppId];
  const effect3 = obj2.useEffect(() => null != previewAppId ? (() => {
    obj = guildId(navigation[43]);
    return obj.leaveConjurePreviewFrame(previewAppId);
  }) : undefined, items22);
  const items23 = [guildId, stateFromStores3, isLoading];
  const memo4 = obj2.useMemo(() => {
    let platform;
    let tmp;
    platform = { guildId, platform, busy: tmp };
    tmp = !stateFromStores3;
    if (stateFromStores3) {
      tmp = isLoading;
    }
    return platform;
  }, items23);
  const tmp93 = tmp4(tmp2[34])(projectId, memo4);
  closure_42 = tmp93;
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items24 = [projectId, projectGuildId];
  callback3 = obj2.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    obj = { content: authStore5(ConjureSettingsSheetDefault, obj2), key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY };
    obj2 = { projectId, guildId: projectGuildId, isPreview: true };
    showActionSheet(obj);
  }, items24);
  const items25 = [guildId, navigation];
  memo5 = obj2.useMemo(() => {
    obj = conjureStandaloneScenes;
    return obj.projectOpener(guildId, (projectId) => {
      obj = { projectId };
      return closure_1_2.push(guildId(navigation[27]).ConjureScreenScenes.CHAT, obj);
    });
  }, items25);
  const items26 = [guildId, memo5, stateFromStores];
  callback4 = obj2.useCallback(() => {
    let obj2;
    if (null != stateFromStores) {
      obj = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: authStore5(ConjureRemixSheetDefault, obj2) };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      obj2 = { project: tmp, currentGuildId: guildId, onRemixed: memo5 };
      showActionSheet(obj);
    }
  }, items26);
  const items27 = [projectId];
  callback5 = obj2.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    obj = { key: ConjureConnectToolSheet.CONJURE_CONNECT_TOOL_SHEET_KEY, content: authStore5(ConjureConnectToolSheetDefault, obj2) };
    obj2 = { projectId };
    showActionSheet(obj);
  }, items27);
  closure_48 = obj2.useRef(false);
  const useCallback = obj2.useCallback;
  let closure_0 = tmp40(function*(arg0, value) {
    let Z4n6LX;
    let closure_3;
    let formatToPlainString;
    let intl2;
    let obj13;
    let obj15;
    let obj2;
    let obj7;
    closure_0 = arg0;
    let closure_1 = value;
    if (1 === c6) {
      if (arg0 === 1) {
        let c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else if (!ref.current) {
        ref.current = true;
        const obj6 = { text: intl2.string(projectId(navigation[37]).qqlUiW), icon: closure_0(navigation[48]).UndoIcon };
        const open = projectId(navigation[14]).open;
        const tmp40 = projectId(navigation[14]);
        intl2 = closure_0(navigation[36]).intl;
        open("CONJURE_VERSION_RESTORING", obj6);
        let c5 = 2;
        c6 = 4;
        c7 = 1;
        const obj8 = { value: obj7.restoreSourceHistoryEntry(closure_1, closure_0.sha), done: false };
        obj7 = closure_0(navigation[49]);
        return obj8;
      }
    } else if (2 === c6) {
      c5 = 0;
      ref.current = false;
      throw closure_4;
    } else if (3 === c6) {
      const presentError = closure_0(navigation[50]).presentError;
      const tmp23 = closure_0(navigation[50]);
      const intl = closure_0(navigation[36]).intl;
      presentError(intl.string(projectId(navigation[37])["PSdo+w"]));
      c5 = 0;
      ref.current = false;
      c7 = 3;
      const obj9 = { value: undefined, done: true };
      return obj9;
    } else {
      if (4 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          ref.current = false;
          c7 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          c5 = 1;
          const obj11 = { text: formatToPlainString(Z4n6LX, obj13), icon: closure_0(navigation[48]).UndoIcon };
          const open2 = projectId(navigation[14]).open;
          const tmp73 = projectId(navigation[14]);
          const intl3 = closure_0(navigation[36]).intl;
          formatToPlainString = intl3.formatToPlainString;
          obj13 = { title: obj15.versionTitle(closure_0.subject).short };
          Z4n6LX = projectId(navigation[37]).Z4n6LX;
          obj15 = closure_0(navigation[51]);
          open2("CONJURE_VERSION_RESTORED", obj11);
          if (null != c1) {
            c6 = 5;
            c7 = 1;
            const obj14 = { value: obj2.rewindDataAfterVersionRestore(closure_1, c1), done: false };
            obj2 = closure_0(navigation[52]);
            return obj14;
          }
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        ref.current = false;
        c7 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        let closure_2 = value;
        if (null != closure_2) {
          const obj12 = closure_0(navigation[50]);
          obj12.presentError(closure_2);
        }
      }
      c5 = 0;
      ref.current = false;
    }
    yield "IconComponent";
    closure_2 = tmp4;
    let tmp55 = closure_1;
    if (closure_1 === undefined) {
      tmp55 = null;
    }
    c1 = tmp55;
    return "test";
  });
  const items28 = [projectId];
  callback6 = useCallback(function() {
    return closure_0(...arguments);
  }, items28);
  const items29 = [callback6, , ];
  let install_scope1;
  const useCallback2 = obj2.useCallback;
  if (stateFromStores != null) {
    install_scope1 = stateFromStores.install_scope;
  }
  items29[1] = install_scope1;
  items29[2] = projectId;
  callback21 = useCallback2(() => {
    let install_scope;
    let obj2;
    let tmp2;
    let tmp3;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    obj = { key: ConjureHistorySheet.CONJURE_HISTORY_SHEET_KEY, content: tmp2(tmp3, obj2) };
    obj2 = { projectId, installScope: install_scope, onRestoreVersion: callback6 };
    install_scope = undefined;
    tmp2 = authStore5;
    tmp3 = ConjureHistorySheetDefault;
    if (stateFromStores != null) {
      install_scope = stateFromStores.install_scope;
    }
    if (install_scope == null) {
      install_scope = null;
    }
    showActionSheet(obj);
  }, items29);
  const tmpResult28 = tmp(tmp2[54]);
  conjureDebugPaneEnabled = tmpResult28.useConjureDebugPaneEnabled();
  const items30 = [navigation, projectId];
  callback7 = obj2.useCallback(() => {
    obj = { projectId };
    return navigation.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, obj);
  }, items30);
  const items31 = [frameSurface];
  const memo6 = obj2.useMemo(() => {
    obj = conjurePreviewSurface;
    return obj.getConjurePreviewSurface(undefined, frameSurface);
  }, items31);
  const tmp104 = activeMode(tmp4(tmp2[56])(previewAppId, memo6));
  closure_53 = tmp104;
  const items32 = [previewAppId];
  callback8 = obj2.useCallback(() => {
    if (null != previewAppId) {
      obj = restartFrames;
      obj.restartAppFrames(tmp);
    }
  }, items32);
  const items33 = [navigation, projectId];
  callback9 = obj2.useCallback(() => {
    closeConnection(projectId);
    navigation.goBack();
  }, items33);
  const items34 = [tmp12];
  const items35 = [projectId];
  const tmpResult29 = tmp(tmp2[22]);
  stateFromStores5 = tmpResult29.useStateFromStores(items34, () => ConjureProjectStore.isProjectDeleting(projectId), items35);
  const items36 = [stateFromStores5, callback9];
  const effect4 = obj2.useEffect(() => {
    const tmp = stateFromStores5;
    if (tmp) {
      callback9();
    }
  }, items36);
  let obj14 = { projectId, refreshApplicationId: tmp110 };
  const modes2 = availability.modes;
  tmp110 = null;
  const tmp4Result3 = tmp4(tmp2[58]);
  if (modes2.includes("widget")) {
    tmp110 = null;
    if ("unavailable-authorization-revoked" !== availability.profileState) {
      tmp110 = widgetApplicationId;
    }
  }
  const tmp4Result1Result = tmp4Result3(obj14);
  preview = tmp4Result1Result;
  const tmpResult30 = tmp(tmp2[59]);
  isConjureProjectMuted = tmpResult30.useIsConjureProjectMuted(projectId);
  const tmpResult31 = tmp(tmp2[60]);
  conjureRemoveTarget = tmpResult31.useConjureRemoveTarget(projectId);
  const items37 = [conjureDebugPaneEnabled, guildId, isConjureProjectMuted, callback9, callback5, callback7, callback4, callback3, callback21, callback8, tmp104, tmp4Result1Result, stateFromStores, tmp93, conjureRemoveTarget];
  memo7 = obj2.useMemo(() => {
    let intl2;
    let intl3;
    let str2;
    let tmp20;
    let tmp28;
    const items = [];
    if (null != disabled) {
      let label;
      const obj6 = conjurePublishAction;
      const result = obj6.conjurePublishTooltip(tmp.status);
      const push4 = items.push;
      if (null == result) {
        label = tmp.label;
      } else {
        const intl = intl6.intl;
        obj = { action: disabled.label, detail: result };
        label = intl.formatToPlainString(_modDef3820["ndkR+x"], obj);
      }
      const obj2 = {
        label,
        IconComponent: UploadIcon.UploadIcon,
        action() {
            obj = disabled;
            if (!disabled.disabled) {
              obj.run("header");
            }
          }
      };
      push4(obj2);
    }
    const push = items.push;
    const obj3 = { label: intl2.string(_modDef3820.I2XSKe), IconComponent: SettingsIcon.SettingsIcon, action: callback3 };
    intl2 = intl6.intl;
    push(obj3);
    const tmp10 = conjureDebugPaneEnabled;
    if (tmp10) {
      const push2 = items.push;
      const obj4 = { label: intl3.string(_modDef3820["Q4FN+H"]), IconComponent: BugIcon.BugIcon, action: callback7 };
      intl3 = intl6.intl;
      push2(obj4);
    }
    if (null != stateFromStores) {
      const obj7 = { project: tmp19, guildId, muted: isConjureProjectMuted, removeTarget: conjureRemoveTarget, onRemix: callback4, onConnectTool: callback5, onHistory: callback21, onRefresh: tmp20, onClose: callback9, preview };
      tmp20 = undefined;
      const conjureProjectActions = conjureProjectActions2.conjureProjectActions;
      conjureProjectActions2;
      if (closure_53) {
        tmp20 = callback8;
      }
      result1 = conjureProjectActions(obj7);
      const iter = result1[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let obj12 = { label: null, IconComponent: null, variant: str2, action: tmp28.action };
        ({ label: obj5.label, IconComponent: obj5.IconComponent } = nextResult);
        str2 = undefined;
        tmp28 = nextResult;
        let push3 = items.push;
        if (true === nextResult.destructive) {
          str2 = "destructive";
        }
        let push3Result = push3(obj12);
        continue;
      }
    }
    return items;
  }, items37);
  const items38 = [conjureControlActive, active, stringResult, tmp62, callback3, callback1, navigation, memo7, stateFromStores, projectExists, projectName, stateFromStores1, tmp5];
  const effect5 = obj2.useEffect(() => {
    let accessibilityLabel;
    let disabled;
    let headerActions;
    let onPress;
    let tmp = projectName;
    if (projectName == null) {
      let tmp2 = guildId;
      let tmp3 = navigation;
      let intl = guildId(navigation[36]).intl;
      const tmp5 = projectExists;
      if (!tmp5) {
        let uk6jhJ;
        const tmp6 = stateFromStores1;
        if (!tmp6) {
          let tmp7 = projectId;
          uk6jhJ = projectId(tmp3[37]).G1WwgK;
        }
        tmp = tmp4(uk6jhJ);
      }
      uk6jhJ = projectId(tmp3[37]).uk6jhJ;
    }
    const title = tmp;
    obj = {
      headerTitle() {
        if (null != stateFromStores) {
          let tmp3;
          const tmp2 = projectExists;
          if (tmp2) {
            const obj2 = { project: tmp, title, onPressIcon: callback3 };
            tmp3 = authStore5(ConjureProjectHeaderTitleDefault, obj2);
          }
          return tmp3;
        }
        obj = { title };
        tmp3 = authStore5(NavigatorHeader.NavigatorHeader, obj);
      },
      headerRight() {
        let obj3;
        let tmp = null;
        if (closure_1_8) {
          obj = { style: headerActions.headerActions, children: items };
          let tmp7Result = null;
          const tmp2 = frameSurface;
          const tmp3 = projectExists;
          if (closure_1_27) {
            let ExperimentalDirectSelectIcon;
            const tmp10 = projectId(navigation[68]);
            const tmp7 = setMode;
            const tmp9 = navigation;
            if (active) {
              ExperimentalDirectSelectIcon = closure_26;
            } else {
              ExperimentalDirectSelectIcon = guildId(tmp9[69]).ExperimentalDirectSelectIcon;
            }
            const obj2 = { IconComponent: ExperimentalDirectSelectIcon, onPress, accessibilityLabel, accessibilityState: obj3, disabled };
            obj3 = { selected: active };
            tmp7Result = tmp7(tmp10, obj2);
          }
          items = [tmp7Result, ];
          const obj4 = {
            items,
            align: "below",
            children(arg0) {
                let accessibilityActions;
                let intl;
                let onAccessibilityAction;
                ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
                obj = { ref, IconComponent: title(closure_1_2[71]).MoreHorizontalIcon, onPress, accessibilityLabel: intl.string(title(closure_1_2[36]).t["UKOtz+"]), accessibilityActions, onAccessibilityAction };
                const tmp = closure_1_1(closure_1_2[68]);
                intl = title(closure_1_2[36]).intl;
                return closure_1_18(tmp, obj);
              }
          };
          items[1] = setMode(guildId(navigation[70]).ContextMenu, obj4);
          tmp = tmp2(tmp3, obj);
        }
        return tmp;
      }
    };
    navigation.setOptions(obj);
  }, items38);
  const items39 = [guildId, projectId];
  const effect6 = obj2.useEffect(() => {
    obj = ConjureActionCreators;
    const result = obj.setSelectedProjectForGuild(guildId, projectId);
    return () => {
      obj = guildId(navigation[29]);
      return obj.setSelectedProjectForGuild(closure_1_0, null);
    };
  }, items39);
  if (projectExists) {
    let obj15 = { style: items40, children: items41 };
    items40 = [tmp5.contentBare, animatedStyle];
    let tmp124 = null;
    const View = tmp4(tmp2[21]).View;
    if (tmp57) {
      const obj16 = { style: tmp5.segments, children: setMode(tmp4(tmp2[74]), obj17) };
      obj17 = { state: segmentedControlState, extras: memo3 };
      tmp124 = setMode(projectExists, obj16);
    }
    items41 = [tmp124, ];
    let tmp129Result = null;
    const obj18 = { style: tmp5.panes, children: items42 };
    if (hasItem) {
      tmp129Result = null;
      if (null != previewAppId) {
        const obj19 = { style: tmp62 ? tmp5.pane : tmp5.paneBackstage, pointerEvents: str5, accessibilityElementsHidden: !tmp62, importantForAccessibility: str6, children: setMode(tmp(tmp2[43]).PreviewFrame, obj20) };
        str5 = "none";
        if (tmp62) {
          str5 = "auto";
        }
        str6 = "no-hide-descendants";
        if (tmp62) {
          str6 = "auto";
        }
        obj20 = { applicationId: previewAppId, projectId, frameSurface, launch: frameLaunchParams, visible: tmp62 };
        tmp129Result = tmp129(tmp127, obj19);
      }
    }
    items42 = [tmp129Result, , ];
    let tmp131Result = null;
    if (tmp57 && !tmp43) {
      tmp131Result = null;
      if (null != previewAppId) {
        tmp131Result = null;
        if (!tmp62) {
          const obj21 = { style: tmp5.pane, children: setMode(tmp4Result4, obj22) };
          obj22 = { projectId, previewApplicationId: previewAppId, mode: activeMode, availability, frameSurface, frameLaunchParams, widgetApplicationId, frameHostAvailable: tmp38, permissionsGate: tmp133 };
          tmp133 = null;
          tmp4Result4 = tmp4(tmp2[43]);
          const tmpResult32 = tmp(tmp2[28]);
          if (tmpResult32.permissionReviewBlocksMode(activeMode, result)) {
            tmp133 = { onReviewPermissions: callback, loading: isLoading, previewBotMissing: false === prop4 };
            const obj23 = { onReviewPermissions: callback, loading: isLoading, previewBotMissing: false === prop4 };
          }
          tmp131Result = tmp131(tmp127, obj21);
        }
      }
    }
    items42[1] = tmp131Result;
    const items43 = [tmp5.chatPane, , ];
    let paneHidden = tmp59;
    const View2 = tmp4(tmp2[21]).View;
    if (tmp57 && !tmp43) {
      paneHidden = tmp5.paneHidden;
    }
    items43[1] = paneHidden;
    items43[2] = animatedStyle1;
    const obj24 = { style: items43, children: setMode(Provider, obj25) };
    obj25 = { value: memo4, children: setMode(Provider2, obj26) };
    Provider = tmp(tmp2[34]).ConjurePublishActionContext.Provider;
    obj26 = { value: projectId, children: setMode(tmp4(tmp2[76]), obj27) };
    Provider2 = tmp(tmp2[75]).ConjureFileMentionProjectContext.Provider;
    obj27 = { projectId, transcriptTopInset: first, onRestoreVersion: callback6, hidden: tmp57 && !tmp43 };
    items42[2] = setMode(View2, obj24);
    items41[1] = frameSurface(projectExists, obj18);
    tmp117Result1 = tmp123(View, obj15);
  } else {
    const obj28 = { style: items44, children: tmp117Result };
    items44 = [, ];
    ({ content: arr42[0], centered: arr42[1] } = tmp5);
    if (stateFromStores1) {
      tmp117Result = tmp117(closure_6, {});
    } else {
      const obj29 = { style: tmp5.listError, children: items45 };
      const obj30 = { variant: "heading-lg/semibold", color: "text-default", children: intl3.string(tmp4(tmp2[37]).G1WwgK) };
      const Text = tmp(tmp2[72]).Text;
      intl3 = tmp(tmp2[36]).intl;
      items45 = [setMode(Text, obj30), , ];
      const obj31 = { variant: "text-md/normal", color: "text-muted", children: intl4.string(tmp4(tmp2[37]).fINulo) };
      const Text2 = tmp(tmp2[72]).Text;
      intl4 = tmp(tmp2[36]).intl;
      items45[1] = setMode(Text2, obj31);
      const obj32 = {
        variant: "secondary",
        size: "sm",
        text: intl5.string(tmp4(tmp2[37])["WFJ/vb"]),
        onPress() {
              obj = ConjureActionCreators;
              return obj.listProjects(guildId);
            }
      };
      const Button = tmp(tmp2[73]).Button;
      intl5 = tmp(tmp2[36]).intl;
      items45[2] = setMode(Button, obj32);
      tmp117Result = frameSurface(tmp118, obj29);
    }
    tmp117Result1 = tmp117(tmp118, obj28);
  }
  return tmp117Result1;
};
