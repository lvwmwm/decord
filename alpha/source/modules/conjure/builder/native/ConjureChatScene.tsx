// Module ID: 11667
// Function ID: 11668
// Name: ConjureChatScene
// Dependencies: [5, 32, 19, 17, 5540, 10962, 11668, 6293, 10977, 6296, 21, 11670, 11672, 4904, 5191, 587, 1505, 1633, 11680, 1647, 4945, 504, 6357, 11684, 11045, 11690, 11576, 11677, 10983, 6299, 11674, 10996, 11691, 11673, 11016, 1128, 3883, 11692, 10843, 11693, 1499, 8805, 11694, 5155, 11630, 11611, 12075, 12079, 12081, 4903, 11679, 12083, 12085, 12095, 11011, 11697, 11019, 12096, 10985, 11625, 11676, 9705, 7368, 12099, 11613, 12101, 6478, 11666, 12102, 9662, 9543, 5187, 5479, 12104, 12105, 12106, 558, 576, 2]
// Exports: default

// Module 11667 (ConjureChatScene)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl6 from "intl" /* 1128 */;
import _modDef3883 from "module_3883" /* 3883 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4904 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4945 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5155 */;
import FramesConstants from "FramesConstants" /* 6296 */;
import NavigatorHeader from "NavigatorHeader" /* 6478 */;
import SettingsIcon from "SettingsIcon" /* 7368 */;
import UploadIcon from "UploadIcon" /* 9705 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10962 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10983 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 11011 */;
import restartFrames from "restartFrames" /* 11019 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 11576 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 11611 */;
import conjureProjectActions2 from "conjureProjectActions" /* 11613 */;
import ConjureSettingsSheet from "ConjureSettingsSheet" /* 11630 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 11670 */;
import ConjureFirstPublishSheet from "ConjureFirstPublishSheet" /* 11672 */;
import useConjurePublishAction from "useConjurePublishAction" /* 11673 */;
import conjurePublishAction from "conjurePublishAction" /* 11676 */;
import conjurePreviewTargets from "conjurePreviewTargets" /* 11692 */;
import ConjureConnectToolSheet from "ConjureConnectToolSheet" /* 12075 */;
import ConjureHistorySheet from "ConjureHistorySheet" /* 12085 */;
import BugIcon from "BugIcon" /* 12099 */;
import ConjureProjectHeaderTitleDefault from "ConjureProjectHeaderTitle" /* 12101 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationStore from "ApplicationStore" /* 5540 */;
import conjureDesignFeedbackStore from "conjureDesignFeedbackStore" /* 11668 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6293 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10977 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5191 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ConjureRemixSheetDefault = ConjureRemixSheet;
const ConjureSettingsSheetDefault = ConjureSettingsSheet;
const ConjureConnectToolSheetDefault = ConjureConnectToolSheet;
const ConjureHistorySheetDefault = ConjureHistorySheet;
let _require, c1, c4, c6, closure_0, navigation;

let closure_12;
let closure_17;
let closure_18;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp;
let unpackModuleId;
const ExperimentalDirectSelectIcon2 = tmp(12102);
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ActivityIndicator: metroRequire, Keyboard: metroImportDefault, View: metroImportAll } = react_native);
const closeConnection = ConjureConnectionStore.closeConnection;
({ enterConjureDesignFeedback: unpackModuleId, exitConjureDesignFeedback: closure_12, useConjureDesignFeedback: map1 } = conjureDesignFeedbackStore);
const isLaunched = FramesConstants.isLaunched;
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
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
let closure_20 = createStyles.createStyles((paddingBottom) => {
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
let closure_22 = { code: "function ConjureChatSceneTsx1(e){const{runOnJS,setChatKeyboardCover,safeAreaBottom}=this.__closure;runOnJS(setChatKeyboardCover)(Math.max(0,e.height-safeAreaBottom));}" };
let closure_23 = { code: "function ConjureChatSceneTsx2(){const{previewShowing,botFaceShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{paddingBottom:previewShowing&&!botFaceShowing?Math.max(keyboardHeight.get(),safeAreaBottom):0};}" };
let closure_24 = { code: "function ConjureChatSceneTsx3(){const{previewShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{transform:[{translateY:previewShowing?0:-Math.max(0,keyboardHeight.get()-safeAreaBottom)}]};}" };
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureSelectModeActiveIcon() {
  let first;
  obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { color: nativeDefault.colors.TEXT_BRAND };
    const ExperimentalDirectSelectIcon = ExperimentalDirectSelectIcon2.ExperimentalDirectSelectIcon;
    const tmp7 = closure_17(ExperimentalDirectSelectIcon, obj2);
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function ConjureSelectModeActiveIcon() {
  obj = { color: nativeDefault.colors.TEXT_BRAND };
  const ExperimentalDirectSelectIcon = ExperimentalDirectSelectIcon2.ExperimentalDirectSelectIcon;
  return closure_17(ExperimentalDirectSelectIcon, obj);
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
  let frameLaunchParams;
  let has_activity;
  let intl3;
  let intl4;
  let intl5;
  let isResolving;
  let items38;
  let items39;
  let items40;
  let items42;
  let items43;
  let obj16;
  let obj19;
  let obj21;
  let obj24;
  let obj25;
  let obj26;
  let previewAppId;
  let projectGuildId;
  let prop;
  let prop1;
  let prop2;
  let prop3;
  let str5;
  let str6;
  let tmp10;
  let tmp108;
  let tmp115Result;
  let tmp115Result1;
  let tmp131;
  let tmp41;
  let tmp42;
  let tmp44;
  let tmp45;
  let tmp48;
  let tmp49;
  let tmp4Result4;
  let widgetApplicationId;
  guildId = guildId.guildId;
  const projectId = guildId.projectId;
  navigation = undefined;
  let stateFromStores;
  let projectExists;
  let projectName;
  previewAppId = undefined;
  let stateFromStores1;
  let stateFromStores2;
  let data;
  let isLoading;
  let stateFromStores3;
  let availability;
  let activeMode;
  let setMode;
  let frameSurface;
  let frameSurfaceOptions;
  let setFrameSurface;
  let appChannel;
  let setAppChannel;
  let result1;
  let c25;
  let closure_26;
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
  let stateFromStores4;
  let preview;
  let isConjureProjectMuted;
  let conjureRemoveTarget;
  let memo7;
  let tmp = guildId;
  let tmp2 = navigation;
  obj = guildId(navigation[16]);
  navigation = obj.useNavigation();
  let tmp4 = projectId;
  const bottom = projectId(navigation[17])().bottom;
  let tmp5 = frameSurfaceOptions(bottom);
  _slicedToArray = tmp5;
  let tmp6 = projectId(navigation[18])();
  react = tmp6;
  let obj2 = react;
  let tmp7 = _slicedToArray;
  [first, tmp10] = react.useState(0);
  let closure_6 = tmp10;
  let obj3 = guildId(navigation[19]);
  let obj4 = { onEnd: I };
  class I {
    constructor(height) {
      obj = ReanimatedRexport;
      const runOnJSResult = obj.runOnJS(closure_6);
      runOnJSResult(Math.max(0, height.height - bottom));
    }
  }
  let obj5 = { runOnJS: guildId(navigation[20]).runOnJS, setChatKeyboardCover: tmp10, safeAreaBottom: bottom };
  I.__closure = obj5;
  I.__workletHash = 7830565176778;
  I.__initData = appChannel;
  let items = [bottom];
  obj3.useKeyboardHandler(obj4, items);
  let obj6 = guildId(navigation[21]);
  let items1 = [isLoading];
  let items2 = [projectId];
  stateFromStores = obj6.useStateFromStores(items1, () => {
    let project = ConjureProjectStore.getProject(projectId);
    if (project == null) {
      project = null;
    }
    return project;
  }, items2);
  let obj7 = guildId(navigation[21]);
  const items3 = [isLoading];
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
  projectExists = stateFromStoresObject.projectExists;
  projectName = stateFromStoresObject.projectName;
  ({ projectGuildId, previewAppId } = stateFromStoresObject);
  let obj8 = guildId(navigation[21]);
  const items5 = [isLoading];
  const items6 = [guildId];
  stateFromStores1 = obj8.useStateFromStores(items5, () => {
    const guildProjectsFetchState = ConjureProjectStore.getGuildProjectsFetchState(guildId);
    return "unattempted" === guildProjectsFetchState || "loading" === guildProjectsFetchState;
  }, items6);
  let obj9 = guildId(navigation[21]);
  const items7 = [isLoading];
  const items8 = [projectId];
  stateFromStores2 = obj9.useStateFromStores(items7, () => {
    let integrationStatus = ConjureProjectStore.getIntegrationStatus(projectId);
    if (integrationStatus == null) {
      integrationStatus = null;
    }
    return integrationStatus;
  }, items8);
  let preview_ready;
  const tmp12 = isLoading;
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
  let tmp20 = previewAppId;
  const useApplication = tmp(tmp2[22]).useApplication;
  tmp(tmp2[22]);
  let application = useApplication(tmp20);
  data = application.data;
  isLoading = application.isLoading;
  const items9 = [stateFromStores3];
  const items10 = [projectId];
  const tmpResult17 = tmp(tmp2[21]);
  stateFromStores3 = tmpResult17.useStateFromStores(items9, () => {
    const publishStatus = ConjurePublishStatusStore.getPublishStatus(projectId);
    let previewAppChannels;
    if (publishStatus != null) {
      previewAppChannels = publishStatus.previewAppChannels;
    }
    return previewAppChannels;
  }, items10);
  let obj10 = { applicationId: previewAppId, previewApplicationId: previewAppId, declaredActivity: true === has_activity, previewSupportedSurfaces: prop, installScope: install_scope, ownerAuthorizationRevoked: true === prop1, mainCardOnly: true, previewAppChannels: stateFromStores3 };
  has_activity = undefined;
  const useConjurePreviewMode = tmp(tmp2[23]).useConjurePreviewMode;
  tmp(tmp2[23]);
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
  const tmp27 = true === preview_ready;
  const conjurePreviewMode = useConjurePreviewMode(obj10);
  availability = conjurePreviewMode.availability;
  activeMode = conjurePreviewMode.activeMode;
  setMode = conjurePreviewMode.setMode;
  frameSurface = conjurePreviewMode.frameSurface;
  frameSurfaceOptions = conjurePreviewMode.frameSurfaceOptions;
  setFrameSurface = conjurePreviewMode.setFrameSurface;
  appChannel = conjurePreviewMode.appChannel;
  setAppChannel = conjurePreviewMode.setAppChannel;
  ({ frameLaunchParams, widgetApplicationId, isResolving } = conjurePreviewMode);
  const tmpResult19 = tmp(tmp2[24]);
  const conjurePreviewModeRequests = tmpResult19.useConjurePreviewModeRequests(projectId, (arg0) => {
    const modes = availability.modes;
    if (modes.includes(arg0)) {
      setMode(arg0);
    }
  });
  const tmpResult20 = tmp(tmp2[25]);
  const conjureTraceRequests = tmpResult20.useConjureTraceRequests(projectId, () => {
    obj = { projectId };
    return navigation.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, obj);
  });
  let obj11 = { installScope: install_scope, previewReady: tmp27, integrationInstalled: prop2, botPermissionsChanged: true === prop3 };
  prop2 = undefined;
  const requiresPermissionReview = tmp(tmp2[27]).requiresPermissionReview;
  tmp(tmp2[27]);
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
  let result = requiresPermissionReview(obj11);
  const items11 = [projectId];
  const effect = obj2.useEffect(() => {
    obj = ConjureActionCreators;
    const project = obj.getProject(projectId);
    project.catch(() => {

    });
  }, items11);
  const tmp36 = null != previewAppId && null != tmp4(tmp2[29])(previewAppId);
  const tmpResult22 = tmp(tmp2[30]);
  result1 = tmpResult22.conjureInstallGuildId(stateFromStores, stateFromStores2, guildId);
  const items12 = [result1, previewAppId, data, stateFromStores, projectId];
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
                const obj3 = application(navigation[22]);
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
                obj = c0(navigation[30]);
                const result = obj.repairConjureGuildHints(closure_1_7, closure_1_24);
                const cleanupPromise = result.finally(() => {
                  obj = application(closure_2_2[28]);
                  return obj.getProject(closure_1_1);
                });
                cleanupPromise.catch(() => {

                });
              }
        };
        const tmp11 = application3(navigation[31]);
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
  }), items12);
  let tmp7Result = tmp7(obj2.useState(true), 2);
  [tmp41, tmp42] = tmp7Result;
  c25 = tmp42;
  [tmp44, tmp45] = tmp7(obj2.useState(false), 2);
  let tmp46 = null;
  const useState = obj2.useState;
  tmp7(obj2.useState(false), 2);
  const tmp38 = bottom;
  if (null != stateFromStores2) {
    tmp46 = tmp27;
  }
  [tmp48, tmp49] = tmp7(useState(tmp46), 2);
  tmp7(useState(tmp46), 2);
  const tmp7Result6 = tmp7(obj2.useState(projectId), 2);
  if (tmp7Result6[0] !== projectId) {
    tmp7Result6[1](projectId);
    tmp42(true);
    tmp45(false);
    tmp49(null);
  }
  let tmp55 = tmp27 && null != previewAppId && !isResolving;
  if (tmp55) {
    const tmp56 = availability.modes.length > 0 || result;
    tmp55 = tmp56;
  }
  closure_26 = tmp57;
  let hasItem = tmp55;
  const tmpResult23 = tmp(tmp2[32]);
  const conjureAgentNeedsPreview = tmpResult23.useConjureAgentNeedsPreview(projectId);
  if (tmp55) {
    hasItem = tmp36;
  }
  if (hasItem) {
    let modes = availability.modes;
    const str = "frame";
    hasItem = modes.includes("frame");
  }
  let tmp60 = hasItem && tmp57;
  if (tmp60) {
    let str2 = "frame";
    tmp60 = "frame" === activeMode;
  }
  closure_27 = tmp60;
  if (hasItem) {
    hasItem = tmp44 || tmp60 || conjureAgentNeedsPreview;
    const tmp61 = tmp44 || tmp60 || conjureAgentNeedsPreview;
  }
  const tmp62 = hasItem && !tmp44;
  if (tmp62) {
    tmp45(true);
  }
  let tmp64 = tmp57;
  if (tmp64) {
    tmp64 = "bot" === activeMode;
  }
  closure_28 = tmp64;
  let prop4;
  if (stateFromStores2 != null) {
    prop4 = stateFromStores2.integration_installed;
  }
  let tmp66 = tmp64 && result;
  if (tmp66) {
    tmp66 = tmp67;
  }
  closure_29 = tmp66;
  ref = obj2.useRef(false);
  const items13 = [guildId, tmp66, projectId];
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
  }, items13);
  const tmpResult24 = tmp(tmp2[20]);
  class Ke {
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
  Ke.__closure = { previewShowing: tmp55 && !tmp41, botFaceShowing: tmp64, keyboardHeight: tmp6, safeAreaBottom: bottom };
  Ke.__workletHash = 9469604169548;
  Ke.__initData = setAppChannel;
  const animatedStyle = tmpResult24.useAnimatedStyle(Ke);
  const tmpResult25 = tmp(tmp2[20]);
  class Le {
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
  Le.__closure = { previewShowing: tmp55 && !tmp41, keyboardHeight: tmp6, safeAreaBottom: bottom };
  Le.__workletHash = 7166266100039;
  Le.__initData = result1;
  const animatedStyle1 = tmpResult25.useAnimatedStyle(Le);
  active = data(projectId).active;
  const tmpResult26 = tmp(tmp2[34]);
  conjureControlActive = tmpResult26.useConjureControlActive(projectId);
  let intl = tmp(tmp2[35]).intl;
  const string = intl.string;
  const tmp4Result = tmp4(tmp2[36]);
  if (conjureControlActive) {
    Sme0T0 = tmp4Result.Sme0T0;
  } else {
    Sme0T0 = active ? tmp4Result.vn5Rzu : tmp4Result["cl/Jyl"];
  }
  const stringResult = string(Sme0T0);
  c33 = stringResult;
  const items14 = [active, projectId];
  callback1 = obj2.useCallback(() => {
    const tmp = active;
    if (tmp) {
      authStore2(projectId);
    } else {
      unpackModuleId(projectId);
    }
  }, items14);
  const items15 = [availability.modes, frameSurfaceOptions, stateFromStores3];
  memo = obj2.useMemo(() => {
    obj = conjurePreviewTargets;
    return obj.previewTargets(availability.modes, frameSurfaceOptions, stateFromStores3);
  }, items15);
  const items16 = [activeMode, frameSurface, appChannel];
  memo1 = obj2.useMemo(() => {
    obj = conjurePreviewTargets;
    return obj.activePreviewTarget(activeMode, frameSurface, appChannel);
  }, items16);
  let intl2 = tmp(tmp2[35]).intl;
  stringResult1 = intl2.string(tmp4(tmp2[36])["N+VA1J"]);
  const items17 = [memo1, availability.modes.length, stringResult1, tmp57];
  const memo2 = obj2.useMemo(() => {
    let intl;
    let items2;
    obj = { id: "chat", label: intl.string(_modDef3883["1HH2p9"]), page: null };
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
  }, items17);
  let tmp79 = null != memo1;
  const callback2 = obj2.useCallback((arg0) => {
    metroImportDefault.dismiss();
    _undefined(0 === arg0);
  }, []);
  if (tmp79) {
    let num = 1;
    tmp79 = memo.length > 1;
  }
  closure_38 = tmp79;
  const items18 = [memo1, tmp79, stringResult1, tmp57, setAppChannel, setFrameSurface, setMode, memo];
  const first1 = availability.modes[0];
  let tmp82 = null != stateFromStores2;
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
      preview = { prefix: tmp3, renderTrailingIcon: fn, menuLabel: intl.string(_modDef3883.I2ucou), onShowMenu: fn2 };
      fn = undefined;
      if (closure_26) {
        if (closure_38) {
          fn = (color) => {
            obj = { size: "xs", color };
            return activeMode(guildId(navigation[38]).ChevronSmallDownIcon, obj);
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
              obj = guildId(navigation[37]);
              const previewTarget = obj.selectPreviewTarget(mode, closure_1_18, closure_1_21, closure_1_23);
              closure_1_25(false);
            }
          };
          return projectId(navigation[39])(obj);
        };
      }
      tmp = { preview };
      const obj2 = { preview };
    }
    return tmp;
  }, items18);
  if (tmp82) {
    tmp82 = tmp27 !== tmp48;
  }
  if (tmp82) {
    const tmp83 = false === tmp48 && tmp27 && null != first1;
    if (tmp83) {
      setMode(first1);
      tmp42(false);
    }
    tmp49(tmp27);
  }
  const width = tmp4(tmp2[40])().width;
  let obj12 = { items: memo2, pageWidth: width - 2 * setFrameSurface, onSetActiveIndex: callback2 };
  const tmpResult27 = tmp(tmp2[41]);
  const segmentedControlState = tmpResult27.useSegmentedControlState(obj12);
  if (tmp41) {
    num2 = 0;
  } else {
    num2 = 1;
  }
  activeIndex = segmentedControlState.activeIndex;
  setActiveIndex = segmentedControlState.setActiveIndex;
  const items19 = [num2, activeIndex, setActiveIndex];
  const effect2 = obj2.useEffect(() => {
    if (activeIndex.get() !== num2) {
      setActiveIndex(tmp, false);
    }
  }, items19);
  const items20 = [previewAppId];
  const effect3 = obj2.useEffect(() => null != previewAppId ? (() => {
    obj = guildId(navigation[42]);
    return obj.leaveConjurePreviewFrame(previewAppId);
  }) : undefined, items20);
  const items21 = [guildId, stateFromStores2, isLoading];
  const memo4 = obj2.useMemo(() => {
    let platform;
    platform = { guildId, platform, busy: null == stateFromStores2 || isLoading };
    return platform;
  }, items21);
  const tmp91 = tmp4(tmp2[33])(projectId, memo4);
  closure_42 = tmp91;
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items22 = [projectId, projectGuildId];
  callback3 = obj2.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    obj = { content: activeMode(ConjureSettingsSheetDefault, obj2), key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY };
    obj2 = { projectId, guildId: projectGuildId, isPreview: true };
    showActionSheet(obj);
  }, items22);
  const items23 = [guildId, navigation];
  memo5 = obj2.useMemo(() => {
    obj = conjureStandaloneScenes;
    return obj.projectOpener(guildId, (projectId) => {
      obj = { projectId };
      return closure_1_2.push(guildId(navigation[26]).ConjureScreenScenes.CHAT, obj);
    });
  }, items23);
  const items24 = [guildId, memo5, stateFromStores];
  callback4 = obj2.useCallback(() => {
    let obj2;
    if (null != stateFromStores) {
      obj = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: activeMode(ConjureRemixSheetDefault, obj2) };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      obj2 = { project: tmp, currentGuildId: guildId, onRemixed: memo5 };
      showActionSheet(obj);
    }
  }, items24);
  const items25 = [projectId];
  callback5 = obj2.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    obj = { key: ConjureConnectToolSheet.CONJURE_CONNECT_TOOL_SHEET_KEY, content: activeMode(ConjureConnectToolSheetDefault, obj2) };
    obj2 = { projectId };
    showActionSheet(obj);
  }, items25);
  closure_48 = obj2.useRef(false);
  const useCallback = obj2.useCallback;
  _require = tmp38(function*(arg0, value) {
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
        const obj6 = { text: intl2.string(projectId(navigation[36]).qqlUiW), icon: closure_0(navigation[47]).UndoIcon };
        const open = projectId(navigation[13]).open;
        const tmp40 = projectId(navigation[13]);
        intl2 = closure_0(navigation[35]).intl;
        open("CONJURE_VERSION_RESTORING", obj6);
        let c5 = 2;
        c6 = 4;
        c7 = 1;
        const obj8 = { value: obj7.restoreSourceHistoryEntry(closure_1, closure_0.sha), done: false };
        obj7 = closure_0(navigation[48]);
        return obj8;
      }
    } else if (2 === c6) {
      c5 = 0;
      ref.current = false;
      throw closure_4;
    } else if (3 === c6) {
      const presentError = closure_0(navigation[49]).presentError;
      const tmp23 = closure_0(navigation[49]);
      const intl = closure_0(navigation[35]).intl;
      presentError(intl.string(projectId(navigation[36])["PSdo+w"]));
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
          const obj11 = { text: formatToPlainString(Z4n6LX, obj13), icon: closure_0(navigation[47]).UndoIcon };
          const open2 = projectId(navigation[13]).open;
          const tmp73 = projectId(navigation[13]);
          const intl3 = closure_0(navigation[35]).intl;
          formatToPlainString = intl3.formatToPlainString;
          obj13 = { title: obj15.versionTitle(closure_0.subject).short };
          Z4n6LX = projectId(navigation[36]).Z4n6LX;
          obj15 = closure_0(navigation[50]);
          open2("CONJURE_VERSION_RESTORED", obj11);
          if (null != c1) {
            c6 = 5;
            c7 = 1;
            const obj14 = { value: obj2.rewindDataAfterVersionRestore(closure_1, c1), done: false };
            obj2 = closure_0(navigation[51]);
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
          const obj12 = closure_0(navigation[49]);
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
    return "Reflect";
  });
  const items26 = [projectId];
  callback6 = useCallback(function() {
    return closure_0(...arguments);
  }, items26);
  const items27 = [callback6, , ];
  let install_scope1;
  const useCallback2 = obj2.useCallback;
  if (stateFromStores != null) {
    install_scope1 = stateFromStores.install_scope;
  }
  items27[1] = install_scope1;
  items27[2] = projectId;
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
    tmp2 = closure_17;
    tmp3 = ConjureHistorySheetDefault;
    if (stateFromStores != null) {
      install_scope = stateFromStores.install_scope;
    }
    if (install_scope == null) {
      install_scope = null;
    }
    showActionSheet(obj);
  }, items27);
  const tmpResult28 = tmp(tmp2[53]);
  conjureDebugPaneEnabled = tmpResult28.useConjureDebugPaneEnabled();
  const items28 = [navigation, projectId];
  callback7 = obj2.useCallback(() => {
    obj = { projectId };
    return navigation.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, obj);
  }, items28);
  const items29 = [frameSurface];
  const memo6 = obj2.useMemo(() => {
    obj = conjurePreviewSurface;
    return obj.getConjurePreviewSurface(undefined, frameSurface);
  }, items29);
  const tmp102 = availability(tmp4(tmp2[55])(previewAppId, memo6));
  closure_53 = tmp102;
  const items30 = [previewAppId];
  callback8 = obj2.useCallback(() => {
    if (null != previewAppId) {
      obj = restartFrames;
      obj.restartAppFrames(tmp);
    }
  }, items30);
  const items31 = [navigation, projectId];
  callback9 = obj2.useCallback(() => {
    closeConnection(projectId);
    navigation.goBack();
  }, items31);
  const items32 = [tmp12];
  const items33 = [projectId];
  const tmpResult29 = tmp(tmp2[21]);
  stateFromStores4 = tmpResult29.useStateFromStores(items32, () => ConjureProjectStore.isProjectDeleting(projectId), items33);
  const items34 = [stateFromStores4, callback9];
  const effect4 = obj2.useEffect(() => {
    const tmp = stateFromStores4;
    if (tmp) {
      callback9();
    }
  }, items34);
  let obj13 = { projectId, refreshApplicationId: tmp108 };
  const modes2 = availability.modes;
  tmp108 = null;
  const tmp4Result3 = tmp4(tmp2[57]);
  if (modes2.includes("widget")) {
    tmp108 = null;
    if ("unavailable-authorization-revoked" !== availability.profileState) {
      tmp108 = widgetApplicationId;
    }
  }
  const tmp4Result1Result = tmp4Result3(obj13);
  preview = tmp4Result1Result;
  const tmpResult30 = tmp(tmp2[58]);
  isConjureProjectMuted = tmpResult30.useIsConjureProjectMuted(projectId);
  const tmpResult31 = tmp(tmp2[59]);
  conjureRemoveTarget = tmpResult31.useConjureRemoveTarget(projectId);
  const items35 = [conjureDebugPaneEnabled, guildId, isConjureProjectMuted, callback9, callback5, callback7, callback4, callback3, callback21, callback8, tmp102, tmp4Result1Result, stateFromStores, tmp91, conjureRemoveTarget];
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
        label = intl.formatToPlainString(_modDef3883["ndkR+x"], obj);
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
    const obj3 = { label: intl2.string(_modDef3883.I2XSKe), IconComponent: SettingsIcon.SettingsIcon, action: callback3 };
    intl2 = intl6.intl;
    push(obj3);
    const tmp10 = conjureDebugPaneEnabled;
    if (tmp10) {
      const push2 = items.push;
      const obj4 = { label: intl3.string(_modDef3883["Q4FN+H"]), IconComponent: BugIcon.BugIcon, action: callback7 };
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
  }, items35);
  const items36 = [conjureControlActive, active, stringResult, tmp60, callback3, callback1, navigation, memo7, stateFromStores, projectExists, projectName, stateFromStores1, tmp5];
  const effect5 = obj2.useEffect(() => {
    let accessibilityLabel;
    let disabled;
    let headerActions;
    let onPress;
    let tmp = projectName;
    if (projectName == null) {
      let tmp2 = guildId;
      let tmp3 = navigation;
      let intl = guildId(navigation[35]).intl;
      const tmp5 = projectExists;
      if (!tmp5) {
        let uk6jhJ;
        const tmp6 = stateFromStores1;
        if (!tmp6) {
          let tmp7 = projectId;
          uk6jhJ = projectId(tmp3[36]).G1WwgK;
        }
        tmp = tmp4(uk6jhJ);
      }
      uk6jhJ = projectId(tmp3[36]).uk6jhJ;
    }
    const title = tmp;
    obj = {
      headerTitle() {
        if (null != stateFromStores) {
          let tmp3;
          const tmp2 = projectExists;
          if (tmp2) {
            const obj2 = { project: tmp, title, onPressIcon: callback3 };
            tmp3 = closure_17(ConjureProjectHeaderTitleDefault, obj2);
          }
          return tmp3;
        }
        obj = { title };
        tmp3 = closure_17(NavigatorHeader.NavigatorHeader, obj);
      },
      headerRight() {
        let obj3;
        let tmp = null;
        if (closure_1_8) {
          obj = { style: headerActions.headerActions, children: items };
          let tmp7Result = null;
          const tmp2 = setMode;
          const tmp3 = projectExists;
          if (closure_1_27) {
            let ExperimentalDirectSelectIcon;
            const tmp10 = projectId(navigation[67]);
            const tmp7 = activeMode;
            const tmp9 = navigation;
            if (active) {
              ExperimentalDirectSelectIcon = c25;
            } else {
              ExperimentalDirectSelectIcon = guildId(tmp9[68]).ExperimentalDirectSelectIcon;
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
                obj = { ref, IconComponent: title(closure_1_2[70]).MoreHorizontalIcon, onPress, accessibilityLabel: intl.string(title(closure_1_2[35]).t["UKOtz+"]), accessibilityActions, onAccessibilityAction };
                const tmp = closure_1_1(closure_1_2[67]);
                intl = title(closure_1_2[35]).intl;
                return closure_1_17(tmp, obj);
              }
          };
          items[1] = activeMode(guildId(navigation[69]).ContextMenu, obj4);
          tmp = tmp2(tmp3, obj);
        }
        return tmp;
      }
    };
    navigation.setOptions(obj);
  }, items36);
  const items37 = [guildId, projectId];
  const effect6 = obj2.useEffect(() => {
    obj = ConjureActionCreators;
    const result = obj.setSelectedProjectForGuild(guildId, projectId);
    return () => {
      obj = guildId(navigation[28]);
      return obj.setSelectedProjectForGuild(closure_1_0, null);
    };
  }, items37);
  if (projectExists) {
    let obj14 = { style: items38, children: items39 };
    items38 = [tmp5.contentBare, animatedStyle];
    let tmp122 = null;
    const View = tmp4(tmp2[20]).View;
    if (tmp55) {
      let obj15 = { style: tmp5.segments, children: activeMode(tmp4(tmp2[73]), obj16) };
      obj16 = { state: segmentedControlState, extras: memo3 };
      tmp122 = activeMode(projectExists, obj15);
    }
    items39 = [tmp122, ];
    let tmp127Result = null;
    const obj17 = { style: tmp5.panes, children: items40 };
    if (hasItem) {
      tmp127Result = null;
      if (null != previewAppId) {
        const obj18 = { style: tmp60 ? tmp5.pane : tmp5.paneBackstage, pointerEvents: str5, accessibilityElementsHidden: !tmp60, importantForAccessibility: str6, children: activeMode(tmp(tmp2[42]).PreviewFrame, obj19) };
        str5 = "none";
        if (tmp60) {
          str5 = "auto";
        }
        str6 = "no-hide-descendants";
        if (tmp60) {
          str6 = "auto";
        }
        obj19 = { applicationId: previewAppId, projectId, frameSurface, launch: frameLaunchParams, visible: tmp60 };
        tmp127Result = tmp127(tmp125, obj18);
      }
    }
    items40 = [tmp127Result, , ];
    let tmp129Result = null;
    if (tmp55 && !tmp41) {
      tmp129Result = null;
      if (null != previewAppId) {
        tmp129Result = null;
        if (!tmp60) {
          const obj20 = { style: tmp5.pane, children: activeMode(tmp4Result4, obj21) };
          obj21 = { projectId, previewApplicationId: previewAppId, mode: activeMode, availability, frameSurface, frameLaunchParams, widgetApplicationId, frameHostAvailable: tmp36, permissionsGate: tmp131 };
          tmp131 = null;
          tmp4Result4 = tmp4(tmp2[42]);
          const tmpResult32 = tmp(tmp2[27]);
          if (tmpResult32.permissionReviewBlocksMode(activeMode, result)) {
            tmp131 = { onReviewPermissions: callback, loading: isLoading, previewBotMissing: false === prop4 };
            const obj22 = { onReviewPermissions: callback, loading: isLoading, previewBotMissing: false === prop4 };
          }
          tmp129Result = tmp129(tmp125, obj20);
        }
      }
    }
    items40[1] = tmp129Result;
    const items41 = [tmp5.chatPane, , ];
    let paneHidden = tmp57;
    const View2 = tmp4(tmp2[20]).View;
    if (tmp55 && !tmp41) {
      paneHidden = tmp5.paneHidden;
    }
    items41[1] = paneHidden;
    items41[2] = animatedStyle1;
    const obj23 = { style: items41, children: activeMode(Provider, obj24) };
    obj24 = { value: memo4, children: activeMode(Provider2, obj25) };
    Provider = tmp(tmp2[33]).ConjurePublishActionContext.Provider;
    obj25 = { value: projectId, children: activeMode(tmp4(tmp2[75]), obj26) };
    Provider2 = tmp(tmp2[74]).ConjureFileMentionProjectContext.Provider;
    obj26 = { projectId, transcriptTopInset: first, onRestoreVersion: callback6, hidden: tmp55 && !tmp41 };
    items40[2] = activeMode(View2, obj23);
    items39[1] = setMode(projectExists, obj17);
    tmp115Result1 = tmp121(View, obj14);
  } else {
    const obj27 = { style: items42, children: tmp115Result };
    items42 = [, ];
    ({ content: arr40[0], centered: arr40[1] } = tmp5);
    if (stateFromStores1) {
      tmp115Result = tmp115(closure_6, {});
    } else {
      const obj28 = { style: tmp5.listError, children: items43 };
      const obj29 = { variant: "heading-lg/semibold", color: "text-default", children: intl3.string(tmp4(tmp2[36]).G1WwgK) };
      const Text = tmp(tmp2[71]).Text;
      intl3 = tmp(tmp2[35]).intl;
      items43 = [activeMode(Text, obj29), , ];
      const obj30 = { variant: "text-md/normal", color: "text-muted", children: intl4.string(tmp4(tmp2[36]).fINulo) };
      const Text2 = tmp(tmp2[71]).Text;
      intl4 = tmp(tmp2[35]).intl;
      items43[1] = activeMode(Text2, obj30);
      const obj31 = {
        variant: "secondary",
        size: "sm",
        text: intl5.string(tmp4(tmp2[36])["WFJ/vb"]),
        onPress() {
              obj = ConjureActionCreators;
              return obj.listProjects(guildId);
            }
      };
      const Button = tmp(tmp2[72]).Button;
      intl5 = tmp(tmp2[35]).intl;
      items43[2] = activeMode(Button, obj31);
      tmp115Result = setMode(tmp116, obj28);
    }
    tmp115Result1 = tmp115(tmp116, obj27);
  }
  return tmp115Result1;
};
