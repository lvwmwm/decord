// Module ID: 11747
// Function ID: 11748
// Name: ConjureChatScene
// Dependencies: [5, 32, 19, 17, 2045, 10698, 11748, 10721, 6773, 10714, 6776, 21, 4971, 587, 1505, 11750, 1633, 11751, 1647, 5052, 504, 10720, 6809, 11755, 10795, 11761, 11762, 11758, 5623, 11763, 10742, 11764, 11765, 10762, 1128, 3830, 11771, 11080, 11772, 1499, 8901, 11773, 12148, 5210, 12150, 10696, 12206, 5663, 12210, 12212, 5662, 11768, 12214, 12216, 12234, 10728, 11776, 10765, 12235, 10723, 12238, 11767, 9804, 12239, 7488, 12254, 12256, 12279, 6924, 12280, 12281, 9761, 9644, 1506, 5234, 5244, 12283, 12174, 12284, 558, 576, 2]
// Exports: default

// Module 11747 (ConjureChatScene)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl6 from "intl" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5052 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5210 */;
import FramesConstants from "FramesConstants" /* 6776 */;
import NavigatorHeader from "NavigatorHeader" /* 6924 */;
import SettingsIcon from "SettingsIcon" /* 7488 */;
import UploadIcon from "UploadIcon" /* 9804 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 10696 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10698 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10720 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 10728 */;
import restartFrames from "restartFrames" /* 10765 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 11762 */;
import useConjurePublishAction from "useConjurePublishAction" /* 11765 */;
import conjurePublishAction from "conjurePublishAction" /* 11767 */;
import conjurePreviewTargets from "conjurePreviewTargets" /* 11771 */;
import ConjureSettingsSheet from "ConjureSettingsSheet" /* 12150 */;
import ConjureConnectToolSheet from "ConjureConnectToolSheet" /* 12206 */;
import ConjureHistorySheet from "ConjureHistorySheet" /* 12216 */;
import BugIcon from "BugIcon" /* 12254 */;
import conjureProjectActions2 from "conjureProjectActions" /* 12256 */;
import ConjureProjectHeaderTitleDefault from "ConjureProjectHeaderTitle" /* 12279 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;
import conjureDesignFeedbackStore from "conjureDesignFeedbackStore" /* 11748 */;
import ConjureLastIntegrationStatusStore from "ConjureLastIntegrationStatusStore" /* 10721 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6773 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10714 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ConjureRemixSheetDefault = ConjureRemixSheet;
const ConjureSettingsSheetDefault = ConjureSettingsSheet;
const ConjureConnectToolSheetDefault = ConjureConnectToolSheet;
const ConjureHistorySheetDefault = ConjureHistorySheet;
let c1, c3, c4, c6, navigation;

let closure_12;
let closure_18;
let closure_19;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp;
let unpackModuleId;
const ExperimentalDirectSelectIcon2 = tmp(12281);
let _asyncToGenerator = _asyncToGenerator_mod;
let react = react_mod;
({ ActivityIndicator: metroRequire, Keyboard: metroImportDefault, View: metroImportAll } = react_native);
const closeConnection = ConjureConnectionStore.closeConnection;
({ enterConjureDesignFeedback: unpackModuleId, exitConjureDesignFeedback: closure_12, useConjureDesignFeedback: map1 } = conjureDesignFeedbackStore);
const isLaunched = FramesConstants.isLaunched;
({ jsx: closure_18, jsxs: closure_19 } = Fragment);
let closure_20 = createStyles.createStyles((paddingBottom) => {
  const obj = { content: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom }, contentBare: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, centered: { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 }, listError: { alignItems: "center", gap: nativeDefault.space.PX_12 }, headerActions: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 }, segments: { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4 }, panes: { flex: 1, overflow: "hidden" }, pane: { flex: 1 }, chatPane: { flex: 1, paddingBottom }, paneHidden: { display: "none" }, paneBackstage: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0 } };
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
let __initData = { code: "function ConjureChatSceneTsx2(){const{previewShowing,botFaceShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{paddingBottom:previewShowing&&!botFaceShowing?Math.max(keyboardHeight.get(),safeAreaBottom):0};}" };
let __initData2 = { code: "function ConjureChatSceneTsx3(){const{previewShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{transform:[{translateY:previewShowing?0:-Math.max(0,keyboardHeight.get()-safeAreaBottom)}]};}" };
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureSelectModeActiveIcon() {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { color: nativeDefault.colors.TEXT_BRAND };
    const ExperimentalDirectSelectIcon = ExperimentalDirectSelectIcon2.ExperimentalDirectSelectIcon;
    const tmp7 = authStore4(ExperimentalDirectSelectIcon, obj2);
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function ConjureSelectModeActiveIcon() {
  const obj = { color: nativeDefault.colors.TEXT_BRAND };
  const ExperimentalDirectSelectIcon = ExperimentalDirectSelectIcon2.ExperimentalDirectSelectIcon;
  return authStore4(ExperimentalDirectSelectIcon, obj);
});
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureChatScene.tsx");

export default function ConjureChatScene(guildId) {
  let Provider;
  let Provider2;
  let Sme0T0;
  let _undefined;
  let closure_24;
  let closure_3;
  let closure_5;
  let fn;
  let frameLaunchParams;
  let has_activity;
  let integration_installed;
  let intl3;
  let intl4;
  let intl5;
  let isResolving;
  let items38;
  let items39;
  let items40;
  let items42;
  let items43;
  let obj15;
  let obj18;
  let obj20;
  let obj23;
  let obj24;
  let obj25;
  let previewAppId;
  let projectGuildId;
  let prop;
  let prop1;
  let prop3;
  let str5;
  let str6;
  let tmp111;
  let tmp122Result;
  let tmp122Result1;
  let tmp138;
  let tmp45;
  let tmp46;
  let tmp48;
  let tmp49;
  let tmp4Result4;
  let tmp52;
  let tmp53;
  let widgetApplicationId;
  guildId = guildId.guildId;
  const projectId = guildId.projectId;
  navigation = undefined;
  react = undefined;
  previewAppId = undefined;
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
  __initData = undefined;
  __initData2 = undefined;
  closure_25 = undefined;
  let closure_26;
  let closure_27;
  let ref;
  let active;
  let conjureControlActive;
  let c31;
  let callback1;
  let memo;
  let memo1;
  let stringResult1;
  let closure_36;
  let num2;
  let activeIndex;
  let setActiveIndex;
  let label;
  projectGuildId = undefined;
  let callback3;
  let memo4;
  let callback4;
  let callback5;
  let closure_46;
  let callback6;
  let callback21;
  let conjureDebugPaneEnabled;
  let callback7;
  let closure_51;
  let callback8;
  let callback9;
  let stateFromStores4;
  let preview;
  let isConjureProjectMuted;
  let conjureRemoveTarget;
  let memo6;
  let closure_59;
  let tmp = guildId;
  let tmp2 = navigation;
  let obj = guildId(navigation[14]);
  navigation = obj.useNavigation();
  let obj2 = react;
  let tmp4 = projectId;
  const context = react.useContext(projectId(navigation[15]));
  let tmp6 = null != context;
  _asyncToGenerator = tmp6;
  const bottom = projectId(navigation[16])().bottom;
  let tmp7 = appChannel(bottom);
  react = tmp7;
  const tmp8 = projectId(navigation[17])();
  let closure_6 = tmp8;
  let tmp9 = bottom;
  let tmp10 = bottom(react.useState(0), 2);
  let closure_7 = tmp12;
  const first = tmp10[0];
  let obj3 = guildId(navigation[18]);
  let obj4 = { onEnd: fn };
  fn = function _(height) {
    const obj = ReanimatedRexport;
    const runOnJSResult = obj.runOnJS(closure_7);
    runOnJSResult(Math.max(0, height.height - bottom));
  };
  let obj5 = { runOnJS: guildId(navigation[19]).runOnJS, setChatKeyboardCover: tmp12, safeAreaBottom: bottom };
  fn.__closure = obj5;
  fn.__workletHash = 7830565176778;
  fn.__initData = result1;
  let items = [bottom];
  obj3.useKeyboardHandler(obj4, items);
  let obj6 = guildId(navigation[20]);
  let items1 = [activeMode];
  let items2 = [projectId];
  const stateFromStores = obj6.useStateFromStores(items1, () => {
    let project = ConjureProjectStore.getProject(projectId);
    if (project == null) {
      project = null;
    }
    return project;
  }, items2);
  let obj7 = guildId(navigation[20]);
  const items3 = [activeMode];
  const items4 = [projectId];
  const stateFromStoresObject = obj7.useStateFromStoresObject(items3, () => {
    let guild_id;
    let name;
    let prop;
    let result;
    const project = ConjureProjectStore.getProject(projectId);
    const obj2 = { projectExists: null != project, projectUnavailable: result, projectName: name, projectGuildId: guild_id, previewAppId: prop };
    const obj3 = ConjureActionCreators;
    result = obj3.isConjureProjectUnavailable(projectId);
    const obj = ConjureProjectStore;
    const tmp = projectId;
    if (!result) {
      result = "failed" === obj.getProjectLoadStatus(tmp);
    }
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
    return obj2;
  }, items4);
  const projectExists = stateFromStoresObject.projectExists;
  const projectName = stateFromStoresObject.projectName;
  ({ projectGuildId, previewAppId } = stateFromStoresObject);
  const projectUnavailable = stateFromStoresObject.projectUnavailable;
  let obj8 = guildId(navigation[20]);
  const items5 = [activeMode];
  const items6 = [guildId, tmp6];
  let stateFromStores1 = obj8.useStateFromStores(items5, () => {
    let ownedProjectsFetchState;
    if (closure_3) {
      ownedProjectsFetchState = obj.getOwnedProjectsFetchState();
    } else {
      ownedProjectsFetchState = obj.getGuildProjectsFetchState(guildId);
    }
    return "unattempted" === ownedProjectsFetchState || "loading" === ownedProjectsFetchState;
  }, items6);
  if (!stateFromStores1) {
    stateFromStores1 = tmp6 && !projectExists && !projectUnavailable;
    const tmp18 = tmp6 && !projectExists && !projectUnavailable;
  }
  const items7 = [tmp14, availability];
  const items8 = [projectId];
  const tmpResult = tmp(tmp2[20]);
  const stateFromStores2 = tmpResult.useStateFromStores(items7, () => {
    let integrationStatus = ConjureProjectStore.getIntegrationStatus(projectId);
    const tmp = projectId;
    if (integrationStatus == null) {
      integrationStatus = ConjureLastIntegrationStatusStore.getIntegrationStatus(tmp);
    }
    return integrationStatus;
  }, items8);
  let preview_ready;
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
  let tmp23 = previewAppId;
  const useApplication = tmp(tmp2[22]).useApplication;
  tmp(tmp2[22]);
  const isLoading = useApplication(tmp23).isLoading;
  const items9 = [setMode];
  const items10 = [projectId];
  const tmpResult20 = tmp(tmp2[20]);
  stateFromStores3 = tmpResult20.useStateFromStores(items9, () => {
    const publishStatus = ConjurePublishStatusStore.getPublishStatus(projectId);
    let previewAppChannels;
    if (publishStatus != null) {
      previewAppChannels = publishStatus.previewAppChannels;
    }
    return previewAppChannels;
  }, items10);
  if (stateFromStores3 == null) {
    let preview_app_channels;
    if (stateFromStores2 != null) {
      preview_app_channels = stateFromStores2.preview_app_channels;
    }
    stateFromStores3 = preview_app_channels;
  }
  let obj9 = { applicationId: previewAppId, previewApplicationId: previewAppId, declaredActivity: true === has_activity, previewSupportedSurfaces: prop, installScope: install_scope, ownerAuthorizationRevoked: true === prop1, mainCardOnly: true, previewAppChannels: stateFromStores3 };
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
  const conjurePreviewMode = useConjurePreviewMode(obj9);
  availability = conjurePreviewMode.availability;
  activeMode = conjurePreviewMode.activeMode;
  setMode = conjurePreviewMode.setMode;
  frameSurface = conjurePreviewMode.frameSurface;
  frameSurfaceOptions = conjurePreviewMode.frameSurfaceOptions;
  setFrameSurface = conjurePreviewMode.setFrameSurface;
  appChannel = conjurePreviewMode.appChannel;
  setAppChannel = conjurePreviewMode.setAppChannel;
  ({ frameLaunchParams, widgetApplicationId, isResolving } = conjurePreviewMode);
  const tmpResult22 = tmp(tmp2[24]);
  const conjurePreviewModeRequests = tmpResult22.useConjurePreviewModeRequests(projectId, (arg0) => {
    const modes = availability.modes;
    if (modes.includes(arg0)) {
      setMode(arg0);
    }
  });
  const tmpResult23 = tmp(tmp2[25]);
  const conjureTraceRequests = tmpResult23.useConjureTraceRequests(projectId, () => {
    const obj = { projectId };
    return navigation.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, obj);
  });
  let prop2;
  if (stateFromStores2 != null) {
    prop2 = stateFromStores2.bot_permissions_changed;
  }
  let obj10 = { installScope: install_scope, previewReady: tmp34, integrationInstalled: prop3, botPermissionsChanged: tmp37 };
  prop3 = undefined;
  const requiresPermissionReview = tmp(tmp2[27]).requiresPermissionReview;
  tmp(tmp2[27]);
  if (stateFromStores2 != null) {
    prop3 = stateFromStores2.integration_installed;
  }
  if (prop3 == null) {
    prop3 = null;
  }
  let result = requiresPermissionReview(obj10);
  const items11 = [projectId, tmp6];
  const effect = obj2.useEffect(() => {
    const tmp = closure_3;
    if (tmp) {
      const tmp3 = projectId;
      if (null == ConjureProjectStore.getProject(projectId)) {
        const obj2 = ConjureActionCreators;
        const missingConjureProjectNow = obj2.fetchMissingConjureProjectNow(tmp3);
      }
    }
    const obj = ConjureActionCreators;
    const project = obj.getProject(projectId);
    project.catch(() => {

    });
  }, items11);
  let tmp40 = null != previewAppId && null != tmp4(tmp2[28])(previewAppId);
  const tmpResult25 = tmp(tmp2[29]);
  result1 = tmpResult25.conjureInstallGuildId(stateFromStores, stateFromStores2, guildId);
  const items12 = [result1, previewAppId, stateFromStores, projectId];
  const callback = obj2.useCallback(_asyncToGenerator(async (arg0, value) => {
    let application;
    let closure_1;
    let closure_2;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            navigation = tmp;
            const tmp11 = null != stateFromStores && null != previewAppId;
            if (tmp11) {
              const obj2 = application(navigation[22]);
              application = obj2.fetchApplication(previewAppId);
              c3 = 1;
              c4 = 1;
              const obj5 = {
                value: application.catch(() => {

                          }),
                done: false
              };
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          let obj = { value, done: true };
          return obj;
        } else {
          const obj6 = {
            applicationId: closure_130_11,
            application,
            guildId: closure_130_22,
            onClose() {
                    let obj = c0(navigation[29]);
                    const result = obj.repairConjureGuildHints(closure_1_8, closure_1_22);
                    const cleanupPromise = result.finally(() => {
                      const obj = application(closure_2_2[21]);
                      return obj.getProject(closure_1_1);
                    });
                    cleanupPromise.catch(() => {

                    });
                  }
          };
          const openConjureAppInstallModal = tmp(navigation[30]).openConjureAppInstallModal;
          const tmp22 = tmp(navigation[30]);
          const application1 = application2.getApplication(closure_130_11);
          application = application1;
          if (application1 == null) {
            application = null;
          }
          let result = openConjureAppInstallModal(obj6);
        }
        c4 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp15) {
        c4 = 3;
        throw tmp15;
      }
    }
  }), items12);
  [tmp45, tmp46] = tmp9(obj2.useState(true), 2);
  __initData = tmp46;
  tmp9(obj2.useState(true), 2);
  [tmp48, tmp49] = tmp9(obj2.useState(false), 2);
  let tmp50 = null;
  const useState = obj2.useState;
  tmp9(obj2.useState(false), 2);
  const tmp42 = _asyncToGenerator;
  if (null != stateFromStores2) {
    tmp50 = tmp34;
  }
  [tmp52, tmp53] = tmp9(useState(tmp50), 2);
  tmp9(useState(tmp50), 2);
  const tmp9Result6 = tmp9(obj2.useState(projectId), 2);
  if (tmp9Result6[0] !== projectId) {
    let tmp55 = tmp9Result6[1](projectId);
    tmp46(true);
    tmp49(false);
    tmp53(null);
  }
  let tmp59 = tmp34 && null != previewAppId && !isResolving;
  if (tmp59) {
    tmp59 = availability.modes.length > 0 || result;
    const tmp60 = availability.modes.length > 0 || result;
  }
  __initData2 = tmp61;
  let hasItem = tmp59;
  const tmpResult26 = tmp(tmp2[31]);
  const conjureAgentNeedsPreview = tmpResult26.useConjureAgentNeedsPreview(projectId);
  if (tmp59) {
    hasItem = tmp40;
  }
  if (hasItem) {
    let modes = availability.modes;
    hasItem = modes.includes("frame");
  }
  const tmpResult27 = tmp(tmp2[27]);
  const result2 = tmpResult27.permissionReviewBlocksMode(activeMode, result, tmp37);
  let tmp65 = hasItem && tmp61;
  if (tmp65) {
    let str2 = "frame";
    tmp65 = "frame" === activeMode;
  }
  if (tmp65) {
    tmp65 = !result2;
  }
  closure_25 = tmp65;
  if (hasItem) {
    hasItem = tmp48 || tmp65 || conjureAgentNeedsPreview;
    const tmp66 = tmp48 || tmp65 || conjureAgentNeedsPreview;
  }
  const tmp67 = hasItem && !tmp48;
  if (tmp67) {
    tmp49(true);
  }
  let tmp69 = tmp61;
  if (tmp69) {
    tmp69 = "bot" === activeMode;
  }
  closure_26 = tmp69;
  if (stateFromStores2 != null) {
    integration_installed = stateFromStores2.integration_installed;
  }
  closure_27 = tmp70;
  ref = obj2.useRef(false);
  const items13 = [guildId, tmp70, projectId];
  const effect1 = obj2.useEffect(() => {
    if (closure_27) {
      if (!ref.current) {
        ref.current = true;
        const obj = useConjurePublishAction;
        const conjureInstallConsent = obj.requestConjureInstallConsent(projectId, guildId);
        conjureInstallConsent.catch(() => {

        });
      }
    } else {
      ref.current = false;
    }
  }, items13);
  const tmpResult28 = tmp(tmp2[19]);
  class Ve {
    constructor() {
      let paddingBottom = 0;
      if (closure_24) {
        paddingBottom = 0;
        if (!closure_26) {
          const _Math = Math;
          paddingBottom = Math.max(closure_6.get(), bottom);
        }
      }
      return { paddingBottom };
    }
  }
  Ve.__closure = { previewShowing: tmp59 && !tmp45, botFaceShowing: tmp69, keyboardHeight: tmp8, safeAreaBottom: bottom };
  Ve.__workletHash = 9469604169548;
  Ve.__initData = __initData;
  const animatedStyle = tmpResult28.useAnimatedStyle(Ve);
  function ze() {
    let items;
    let num = 0;
    if (!closure_24) {
      const _Math = Math;
      num = -Math.max(0, closure_6.get() - bottom);
    }
    const obj = { transform: items };
    items = [{ translateY: num }];
    return obj;
  }
  ze.__closure = { previewShowing: tmp59 && !tmp45, keyboardHeight: tmp8, safeAreaBottom: bottom };
  ze.__workletHash = 7166266100039;
  ze.__initData = __initData2;
  const tmpResult29 = tmp(tmp2[19]);
  const animatedStyle1 = tmpResult29.useAnimatedStyle(ze);
  active = stateFromStores3(projectId).active;
  const tmpResult30 = tmp(tmp2[33]);
  conjureControlActive = tmpResult30.useConjureControlActive(projectId);
  let intl = tmp(tmp2[34]).intl;
  const string = intl.string;
  const tmp4Result = tmp4(tmp2[35]);
  if (conjureControlActive) {
    Sme0T0 = tmp4Result.Sme0T0;
  } else {
    Sme0T0 = active ? tmp4Result.vn5Rzu : tmp4Result["cl/Jyl"];
  }
  const stringResult = string(Sme0T0);
  c31 = stringResult;
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
    const obj = conjurePreviewTargets;
    return obj.previewTargets(availability.modes, frameSurfaceOptions, stateFromStores3);
  }, items15);
  const items16 = [activeMode, frameSurface, appChannel];
  memo1 = obj2.useMemo(() => {
    const obj = conjurePreviewTargets;
    return obj.activePreviewTarget(activeMode, frameSurface, appChannel);
  }, items16);
  let intl2 = tmp(tmp2[34]).intl;
  stringResult1 = intl2.string(tmp4(tmp2[35])["N+VA1J"]);
  const items17 = [memo1, availability.modes.length, stringResult1, tmp61];
  const memo2 = obj2.useMemo(() => {
    let intl;
    let items2;
    const obj = { id: "chat", label: intl.string(_modDef3830["1HH2p9"]), page: null };
    intl = intl6.intl;
    const items = [obj];
    if (availability.modes.length > 0) {
      const tmp4 = closure_24;
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
  let tmp82 = null != memo1;
  const callback2 = obj2.useCallback((arg0) => {
    metroImportDefault.dismiss();
    _undefined(0 === arg0);
  }, []);
  if (tmp82) {
    let num = 1;
    tmp82 = memo.length > 1;
  }
  closure_36 = tmp82;
  const items18 = [memo1, tmp82, stringResult1, tmp61, setAppChannel, setFrameSurface, setMode, memo];
  const first1 = availability.modes[0];
  let tmp85 = null != stateFromStores2;
  const memo3 = obj2.useMemo(() => {
    let fn;
    let fn2;
    let intl;
    let target;
    let targets;
    let tmp;
    if (null != memo1) {
      let tmp3;
      if (closure_24) {
        tmp3 = stringResult1;
      }
      let obj = { prefix: tmp3, renderTrailingIcon: fn, menuLabel: intl.string(_modDef3830.I2ucou), onShowMenu: fn2 };
      fn = undefined;
      if (closure_24) {
        if (closure_36) {
          fn = (color) => {
            const obj = { size: "xs", color };
            return frameSurfaceOptions(guildId(navigation[37]).ChevronSmallDownIcon, obj);
          };
        }
      }
      intl = intl6.intl;
      fn2 = undefined;
      if (closure_36) {
        fn2 = () => {
          let obj = {
            targets,
            target,
            onChange(mode) {
              const obj = guildId(navigation[36]);
              const previewTarget = obj.selectPreviewTarget(mode, closure_1_16, closure_1_19, closure_1_21);
              closure_1_23(false);
            }
          };
          return projectId(navigation[38])(obj);
        };
      }
      tmp = { preview: obj };
      const obj2 = { preview: obj };
    }
    return tmp;
  }, items18);
  if (tmp85) {
    tmp85 = tmp34 !== tmp52;
  }
  if (tmp85) {
    const tmp86 = false === tmp52 && true === preview_ready && null != first1;
    if (tmp86) {
      setMode(first1);
      tmp46(false);
    }
    tmp53(true === preview_ready);
  }
  const width = tmp4(tmp2[39])().width;
  let obj11 = { items: memo2, pageWidth: width - 2 * setAppChannel, onSetActiveIndex: callback2 };
  const tmpResult31 = tmp(tmp2[40]);
  const segmentedControlState = tmpResult31.useSegmentedControlState(obj11);
  if (tmp45) {
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
    const obj = guildId(navigation[41]);
    return obj.leaveConjurePreviewFrame(previewAppId);
  }) : undefined, items20);
  const tmp93 = tmp4(tmp2[42])(projectId, guildId);
  const tmp94 = tmp4(tmp2[32])(projectId, tmp93);
  label = tmp94;
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items21 = [projectId, projectGuildId];
  callback3 = obj2.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { content: authStore4(ConjureSettingsSheetDefault, obj2), key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY };
    obj2 = { projectId, guildId: projectGuildId, isPreview: true };
    showActionSheet(obj);
  }, items21);
  const items22 = [guildId, navigation, tmp6];
  memo4 = obj2.useMemo(() => {
    let fn;
    const tmp = closure_3;
    if (tmp) {
      fn = (projectId) => {
        const obj = { projectId };
        return closure_1_2.push(guildId(navigation[26]).ConjureScreenScenes.CHAT, obj);
      };
    } else {
      let obj = conjureStandaloneScenes;
      fn = obj.projectOpener(guildId, (projectId) => {
        const obj = { projectId };
        return closure_1_2.push(guildId(navigation[26]).ConjureScreenScenes.CHAT, obj);
      });
    }
    return fn;
  }, items22);
  const items23 = [guildId, memo4, stateFromStores];
  callback4 = obj2.useCallback(() => {
    let obj2;
    if (null != stateFromStores) {
      const obj = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: authStore4(ConjureRemixSheetDefault, obj2) };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      obj2 = { project: tmp, currentGuildId: guildId, onRemixed: memo4 };
      showActionSheet(obj);
    }
  }, items23);
  const items24 = [projectId];
  callback5 = obj2.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: ConjureConnectToolSheet.CONJURE_CONNECT_TOOL_SHEET_KEY, content: authStore4(ConjureConnectToolSheetDefault, obj2) };
    obj2 = { projectId };
    showActionSheet(obj);
  }, items24);
  closure_46 = obj2.useRef(false);
  const useCallback = obj2.useCallback;
  let closure_0 = tmp42(function*(arg0, value) {
    let Z4n6LX;
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
        const obj6 = { text: intl2.string(projectId(navigation[35]).qqlUiW), icon: closure_0(navigation[48]).UndoIcon };
        const open = projectId(navigation[47]).open;
        const tmp40 = projectId(navigation[47]);
        intl2 = closure_0(navigation[34]).intl;
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
      const intl = closure_0(navigation[34]).intl;
      presentError(intl.string(projectId(navigation[35])["PSdo+w"]));
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
          const open2 = projectId(navigation[47]).open;
          const tmp73 = projectId(navigation[47]);
          const intl3 = closure_0(navigation[34]).intl;
          formatToPlainString = intl3.formatToPlainString;
          obj13 = { title: obj15.versionTitle(closure_0.subject).short };
          Z4n6LX = projectId(navigation[35]).Z4n6LX;
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
        const obj = { value, done: true };
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
    return "Reflect";
  });
  const items25 = [projectId];
  callback6 = useCallback(function() {
    return closure_0(...arguments);
  }, items25);
  const items26 = [callback6, , ];
  let install_scope1;
  const useCallback2 = obj2.useCallback;
  if (stateFromStores != null) {
    install_scope1 = stateFromStores.install_scope;
  }
  items26[1] = install_scope1;
  items26[2] = projectId;
  callback21 = useCallback2(() => {
    let install_scope;
    let obj2;
    let tmp2;
    let tmp3;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: ConjureHistorySheet.CONJURE_HISTORY_SHEET_KEY, content: tmp2(tmp3, obj2) };
    obj2 = { projectId, installScope: install_scope, onRestoreVersion: callback6 };
    install_scope = undefined;
    tmp2 = authStore4;
    tmp3 = ConjureHistorySheetDefault;
    if (stateFromStores != null) {
      install_scope = stateFromStores.install_scope;
    }
    if (install_scope == null) {
      install_scope = null;
    }
    showActionSheet(obj);
  }, items26);
  const tmpResult32 = tmp(tmp2[54]);
  conjureDebugPaneEnabled = tmpResult32.useConjureDebugPaneEnabled();
  const items27 = [navigation, projectId];
  callback7 = obj2.useCallback(() => {
    const obj = { projectId };
    return navigation.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, obj);
  }, items27);
  const items28 = [frameSurface];
  const memo5 = obj2.useMemo(() => {
    const obj = conjurePreviewSurface;
    return obj.getConjurePreviewSurface(undefined, frameSurface);
  }, items28);
  const tmp105 = frameSurface(tmp4(tmp2[56])(previewAppId, memo5));
  closure_51 = tmp105;
  const items29 = [previewAppId];
  callback8 = obj2.useCallback(() => {
    if (null != previewAppId) {
      const obj = restartFrames;
      obj.restartAppFrames(tmp);
    }
  }, items29);
  const items30 = [navigation, projectId];
  callback9 = obj2.useCallback(() => {
    closeConnection(projectId);
    navigation.goBack();
  }, items30);
  const items31 = [tmp14];
  const items32 = [projectId];
  const tmpResult33 = tmp(tmp2[20]);
  stateFromStores4 = tmpResult33.useStateFromStores(items31, () => ConjureProjectStore.isProjectDeleting(projectId), items32);
  const items33 = [stateFromStores4, callback9];
  const effect4 = obj2.useEffect(() => {
    const tmp = stateFromStores4;
    if (tmp) {
      callback9();
    }
  }, items33);
  let obj12 = { projectId, refreshApplicationId: tmp111 };
  const modes2 = availability.modes;
  tmp111 = null;
  const tmp4Result3 = tmp4(tmp2[58]);
  if (modes2.includes("widget")) {
    tmp111 = null;
    if ("unavailable-authorization-revoked" !== availability.profileState) {
      tmp111 = widgetApplicationId;
    }
  }
  const tmp4Result1Result = tmp4Result3(obj12);
  preview = tmp4Result1Result;
  const tmpResult34 = tmp(tmp2[59]);
  isConjureProjectMuted = tmpResult34.useIsConjureProjectMuted(projectId);
  const tmpResult35 = tmp(tmp2[60]);
  conjureRemoveTarget = tmpResult35.useConjureRemoveTarget(projectId);
  const items34 = [conjureDebugPaneEnabled, guildId, isConjureProjectMuted, callback9, callback5, callback7, callback4, callback3, callback21, callback8, tmp105, tmp4Result1Result, stateFromStores, projectId, tmp94, conjureRemoveTarget];
  memo6 = obj2.useMemo(() => {
    let intl2;
    let intl3;
    let str2;
    let tmp20;
    let tmp28;
    const items = [];
    if (null != label) {
      const obj6 = conjurePublishAction;
      const result = obj6.conjurePublishTooltip(tmp.status);
      const push4 = items.push;
      if (null == result) {
        label = tmp.label;
      } else {
        const intl = intl6.intl;
        const obj = { action: label.label, detail: result };
        label = intl.formatToPlainString(_modDef3830["ndkR+x"], obj);
      }
      const obj2 = {
        label,
        IconComponent: UploadIcon.UploadIcon,
        action() {
            return projectId(navigation[63])(closure_1_1, guildId, "header");
          }
      };
      push4(obj2);
    }
    const push = items.push;
    const obj3 = { label: intl2.string(_modDef3830.I2XSKe), IconComponent: SettingsIcon.SettingsIcon, action: callback3 };
    intl2 = intl6.intl;
    push(obj3);
    const tmp10 = conjureDebugPaneEnabled;
    if (tmp10) {
      const push2 = items.push;
      const obj4 = { label: intl3.string(_modDef3830["Q4FN+H"]), IconComponent: BugIcon.BugIcon, action: callback7 };
      intl3 = intl6.intl;
      push2(obj4);
    }
    if (null != stateFromStores) {
      const obj7 = { project: tmp19, guildId, muted: isConjureProjectMuted, removeTarget: conjureRemoveTarget, onRemix: callback4, onConnectTool: callback5, onHistory: callback21, onRefresh: tmp20, onClose: callback9, preview };
      tmp20 = undefined;
      const conjureProjectActions = conjureProjectActions2.conjureProjectActions;
      conjureProjectActions2;
      if (closure_51) {
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
  }, items34);
  const items35 = [conjureControlActive, active, stringResult, tmp65, callback3, callback1, navigation, memo6, stateFromStores, projectExists, projectName, stateFromStores1, tmp7];
  const effect5 = obj2.useEffect(() => {
    let accessibilityLabel;
    let disabled;
    let headerActions;
    let onPress;
    let tmp = projectName;
    if (projectName == null) {
      let tmp2 = guildId;
      let tmp3 = navigation;
      let intl = guildId(navigation[34]).intl;
      const tmp5 = projectExists;
      if (!tmp5) {
        let uk6jhJ;
        const tmp6 = stateFromStores1;
        if (!tmp6) {
          let tmp7 = projectId;
          uk6jhJ = projectId(tmp3[35]).G1WwgK;
        }
        tmp = tmp4(uk6jhJ);
      }
      uk6jhJ = projectId(tmp3[35]).uk6jhJ;
    }
    const title = tmp;
    let obj = {
      headerTitle() {
        if (null != stateFromStores) {
          let tmp3;
          const tmp2 = projectExists;
          if (tmp2) {
            const obj2 = { project: tmp, title, onPressIcon: callback3 };
            tmp3 = authStore4(ConjureProjectHeaderTitleDefault, obj2);
          }
          return tmp3;
        }
        const obj = { title };
        tmp3 = authStore4(NavigatorHeader.NavigatorHeader, obj);
      },
      headerRight() {
        let obj3;
        let tmp = null;
        if (projectExists) {
          let obj = { style: headerActions.headerActions, children: items };
          let tmp7Result = null;
          const tmp2 = setFrameSurface;
          const tmp3 = stateFromStores;
          if (closure_1_25) {
            let ExperimentalDirectSelectIcon;
            const tmp10 = projectId(navigation[69]);
            const tmp7 = frameSurfaceOptions;
            const tmp9 = navigation;
            if (active) {
              ExperimentalDirectSelectIcon = closure_25;
            } else {
              ExperimentalDirectSelectIcon = guildId(tmp9[70]).ExperimentalDirectSelectIcon;
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
                const obj = { ref, IconComponent: title(closure_1_2[72]).MoreHorizontalIcon, onPress, accessibilityLabel: intl.string(title(closure_1_2[34]).t["UKOtz+"]), accessibilityActions, onAccessibilityAction };
                const tmp = closure_1_1(closure_1_2[69]);
                intl = title(closure_1_2[34]).intl;
                return closure_1_18(tmp, obj);
              }
          };
          items[1] = frameSurfaceOptions(guildId(navigation[71]).ContextMenu, obj4);
          tmp = tmp2(tmp3, obj);
        }
        return tmp;
      }
    };
    navigation.setOptions(obj);
  }, items35);
  let routeFocused;
  const tmpResult36 = tmp(tmp2[73]);
  const isFocused = tmpResult36.useIsFocused();
  if (context != null) {
    routeFocused = context.routeFocused;
  }
  closure_59 = tmp119;
  const items36 = [true === routeFocused && isFocused, projectId];
  const effect6 = obj2.useEffect(() => {
    if (closure_59) {
      let obj = ConjureActionCreators;
      const globalChatProject = obj.selectGlobalChatProject(projectId);
      return () => {
        const obj = guildId(navigation[21]);
        return obj.clearGlobalChatProject(projectId);
      };
    }
  }, items36);
  const items37 = [guildId, projectId, tmp6];
  const effect7 = obj2.useEffect(() => {
    if (!closure_3) {
      let obj = ConjureActionCreators;
      const result = obj.setSelectedProjectForGuild(guildId, projectId);
      return () => {
        const obj = guildId(navigation[21]);
        return obj.setSelectedProjectForGuild(closure_1_0, null);
      };
    }
  }, items37);
  if (projectExists) {
    let obj13 = { style: items38, children: items39 };
    items38 = [tmp7.contentBare, animatedStyle];
    let tmp129 = null;
    const View = tmp4(tmp2[19]).View;
    if (tmp59) {
      let obj14 = { style: tmp7.segments, children: frameSurfaceOptions(tmp4(tmp2[76]), obj15) };
      obj15 = { state: segmentedControlState, extras: memo3 };
      tmp129 = frameSurfaceOptions(stateFromStores, obj14);
    }
    items39 = [tmp129, ];
    let tmp134Result = null;
    const obj16 = { style: tmp7.panes, children: items40 };
    if (hasItem) {
      tmp134Result = null;
      if (null != previewAppId) {
        const obj17 = { style: tmp65 ? tmp7.pane : tmp7.paneBackstage, pointerEvents: str5, accessibilityElementsHidden: !tmp65, importantForAccessibility: str6, children: frameSurfaceOptions(tmp(tmp2[41]).PreviewFrame, obj18) };
        str5 = "none";
        if (tmp65) {
          str5 = "auto";
        }
        str6 = "no-hide-descendants";
        if (tmp65) {
          str6 = "auto";
        }
        obj18 = { applicationId: previewAppId, projectId, frameSurface, launch: frameLaunchParams, visible: tmp65 };
        tmp134Result = tmp134(tmp132, obj17);
      }
    }
    items40 = [tmp134Result, , ];
    let tmp136Result = null;
    if (tmp59 && !tmp45) {
      tmp136Result = null;
      if (null != previewAppId) {
        tmp136Result = null;
        if (!tmp65) {
          const obj19 = { style: tmp7.pane, children: frameSurfaceOptions(tmp4Result4, obj20) };
          obj20 = { projectId, previewApplicationId: previewAppId, mode: activeMode, availability, frameSurface, frameLaunchParams, widgetApplicationId, frameHostAvailable: tmp40, permissionsGate: tmp138 };
          tmp138 = null;
          tmp4Result4 = tmp4(tmp2[41]);
          if (result2) {
            tmp138 = { onReviewPermissions: callback, loading: isLoading, previewBotMissing: false === integration_installed };
            const obj21 = { onReviewPermissions: callback, loading: isLoading, previewBotMissing: false === integration_installed };
          }
          tmp136Result = tmp136(tmp132, obj19);
        }
      }
    }
    items40[1] = tmp136Result;
    const items41 = [tmp7.chatPane, , ];
    let paneHidden = tmp61;
    const View2 = tmp4(tmp2[19]).View;
    if (tmp59 && !tmp45) {
      paneHidden = tmp7.paneHidden;
    }
    items41[1] = paneHidden;
    items41[2] = animatedStyle1;
    const obj22 = { style: items41, children: frameSurfaceOptions(Provider, obj23) };
    obj23 = { value: tmp93, children: frameSurfaceOptions(Provider2, obj24) };
    Provider = tmp(tmp2[32]).ConjurePublishActionContext.Provider;
    obj24 = { value: projectId, children: frameSurfaceOptions(tmp4(tmp2[78]), obj25) };
    Provider2 = tmp(tmp2[77]).ConjureFileMentionProjectContext.Provider;
    obj25 = { projectId, transcriptTopInset: first, onRestoreVersion: callback6, hidden: tmp59 && !tmp45 };
    items40[2] = frameSurfaceOptions(View2, obj22);
    items39[1] = setFrameSurface(stateFromStores, obj16);
    tmp122Result1 = tmp128(View, obj13);
  } else {
    const obj26 = { style: items42, children: tmp122Result };
    items42 = [, ];
    ({ content: arr40[0], centered: arr40[1] } = tmp7);
    if (stateFromStores1) {
      tmp122Result = tmp122(closure_6, {});
    } else {
      const obj27 = { style: tmp7.listError, children: items43 };
      const obj28 = { variant: "heading-lg/semibold", color: "text-default", children: intl3.string(tmp4(tmp2[35]).G1WwgK) };
      const Text = tmp(tmp2[74]).Text;
      intl3 = tmp(tmp2[34]).intl;
      items43 = [frameSurfaceOptions(Text, obj28), , ];
      const obj29 = { variant: "text-md/normal", color: "text-muted", children: intl4.string(tmp4(tmp2[35]).fINulo) };
      const Text2 = tmp(tmp2[74]).Text;
      intl4 = tmp(tmp2[34]).intl;
      items43[1] = frameSurfaceOptions(Text2, obj29);
      const obj30 = {
        variant: "secondary",
        size: "sm",
        text: intl5.string(tmp4(tmp2[35])["WFJ/vb"]),
        onPress() {
              let missingConjureProjectNow;
              const obj = ConjureActionCreators;
              if (closure_3) {
                missingConjureProjectNow = obj.fetchMissingConjureProjectNow(projectId);
              } else {
                missingConjureProjectNow = obj.listProjects(guildId);
              }
              return missingConjureProjectNow;
            }
      };
      const Button = tmp(tmp2[75]).Button;
      intl5 = tmp(tmp2[34]).intl;
      items43[2] = frameSurfaceOptions(Button, obj30);
      tmp122Result = setFrameSurface(tmp123, obj27);
    }
    tmp122Result1 = tmp122(tmp123, obj26);
  }
  return tmp122Result1;
};
