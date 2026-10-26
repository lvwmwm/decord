// Module ID: 11861
// Function ID: 11862
// Name: ConjureChatScene
// Dependencies: [5, 32, 19, 17, 2045, 10698, 11862, 10721, 6773, 10714, 6776, 21, 4971, 587, 1505, 1633, 11864, 1647, 5052, 504, 6809, 11868, 10795, 11874, 11746, 11871, 10720, 5623, 11875, 10742, 11876, 11877, 10762, 1128, 3830, 11883, 11079, 11884, 1499, 8901, 11885, 12256, 5210, 11803, 10696, 12258, 5663, 12262, 12264, 5662, 11880, 12266, 12268, 12286, 10728, 11888, 10765, 12287, 10723, 11798, 11879, 9804, 12290, 7488, 12299, 11788, 12301, 6924, 11860, 12302, 9761, 9644, 5234, 5244, 12304, 11826, 12305, 558, 576, 2]
// Exports: default

// Module 11861 (ConjureChatScene)
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
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 11746 */;
import conjureProjectActions2 from "conjureProjectActions" /* 11788 */;
import ConjureSettingsSheet from "ConjureSettingsSheet" /* 11803 */;
import useConjurePublishAction from "useConjurePublishAction" /* 11877 */;
import conjurePublishAction from "conjurePublishAction" /* 11879 */;
import conjurePreviewTargets from "conjurePreviewTargets" /* 11883 */;
import ConjureConnectToolSheet from "ConjureConnectToolSheet" /* 12258 */;
import ConjureHistorySheet from "ConjureHistorySheet" /* 12268 */;
import BugIcon from "BugIcon" /* 12299 */;
import ConjureProjectHeaderTitleDefault from "ConjureProjectHeaderTitle" /* 12301 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;
import conjureDesignFeedbackStore from "conjureDesignFeedbackStore" /* 11862 */;
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
const ExperimentalDirectSelectIcon2 = tmp(12302);
let _slicedToArray = _slicedToArray_mod;
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
let __initData = { code: "function ConjureChatSceneTsx1(e){const{runOnJS,setChatKeyboardCover,safeAreaBottom}=this.__closure;runOnJS(setChatKeyboardCover)(Math.max(0,e.height-safeAreaBottom));}" };
let __initData2 = { code: "function ConjureChatSceneTsx2(){const{previewShowing,botFaceShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{paddingBottom:previewShowing&&!botFaceShowing?Math.max(keyboardHeight.get(),safeAreaBottom):0};}" };
let __initData3 = { code: "function ConjureChatSceneTsx3(){const{previewShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{transform:[{translateY:previewShowing?0:-Math.max(0,keyboardHeight.get()-safeAreaBottom)}]};}" };
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
  let closure_23;
  let closure_24;
  let closure_4;
  let closure_5;
  let first;
  let fn;
  let frameLaunchParams;
  let has_activity;
  let integration_installed;
  let intl3;
  let intl4;
  let intl5;
  let isResolving;
  let items37;
  let items38;
  let items39;
  let items41;
  let items42;
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
  let prop3;
  let str5;
  let str6;
  let tmp10;
  let tmp108;
  let tmp115Result;
  let tmp115Result1;
  let tmp131;
  let tmp42;
  let tmp43;
  let tmp45;
  let tmp46;
  let tmp49;
  let tmp4Result4;
  let tmp50;
  let widgetApplicationId;
  guildId = guildId.guildId;
  const projectId = guildId.projectId;
  navigation = undefined;
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
  __initData3 = undefined;
  closure_25 = undefined;
  let closure_26;
  let ref;
  let active;
  let conjureControlActive;
  let c30;
  let callback1;
  let memo;
  let memo1;
  let stringResult1;
  let closure_35;
  let num2;
  let activeIndex;
  let setActiveIndex;
  let label;
  projectGuildId = undefined;
  let callback3;
  let memo4;
  let callback4;
  let callback5;
  let closure_45;
  let callback6;
  let callback21;
  let conjureDebugPaneEnabled;
  let callback7;
  let closure_50;
  let callback8;
  let callback9;
  let stateFromStores4;
  let preview;
  let isConjureProjectMuted;
  let conjureRemoveTarget;
  let memo6;
  let tmp = guildId;
  let tmp2 = navigation;
  let obj = guildId(navigation[14]);
  navigation = obj.useNavigation();
  let tmp4 = projectId;
  const bottom = projectId(navigation[15])().bottom;
  let tmp5 = setAppChannel(bottom);
  _slicedToArray = tmp5;
  let tmp6 = projectId(navigation[16])();
  react = tmp6;
  let obj2 = react;
  let tmp7 = _slicedToArray;
  [first, tmp10] = react.useState(0);
  let closure_6 = tmp10;
  let obj3 = guildId(navigation[17]);
  let obj4 = { onEnd: fn };
  fn = function j(height) {
    const obj = ReanimatedRexport;
    const runOnJSResult = obj.runOnJS(closure_6);
    runOnJSResult(Math.max(0, height.height - bottom));
  };
  let obj5 = { runOnJS: guildId(navigation[18]).runOnJS, setChatKeyboardCover: tmp10, safeAreaBottom: bottom };
  fn.__closure = obj5;
  fn.__workletHash = 7830565176778;
  fn.__initData = __initData;
  let items = [bottom];
  obj3.useKeyboardHandler(obj4, items);
  let obj6 = guildId(navigation[19]);
  let items1 = [setMode];
  let items2 = [projectId];
  const stateFromStores = obj6.useStateFromStores(items1, () => {
    let project = ConjureProjectStore.getProject(projectId);
    if (project == null) {
      project = null;
    }
    return project;
  }, items2);
  let obj7 = guildId(navigation[19]);
  const items3 = [setMode];
  const items4 = [projectId];
  const stateFromStoresObject = obj7.useStateFromStoresObject(items3, () => {
    let guild_id;
    let name;
    let prop;
    const project = ConjureProjectStore.getProject(projectId);
    const obj = { projectExists: null != project, projectName: name, projectGuildId: guild_id, previewAppId: prop };
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
  let obj8 = guildId(navigation[19]);
  const items5 = [setMode];
  const items6 = [guildId];
  const stateFromStores1 = obj8.useStateFromStores(items5, () => {
    const guildProjectsFetchState = ConjureProjectStore.getGuildProjectsFetchState(guildId);
    return "unattempted" === guildProjectsFetchState || "loading" === guildProjectsFetchState;
  }, items6);
  let obj9 = guildId(navigation[19]);
  const items7 = [setMode, activeMode];
  const items8 = [projectId];
  const stateFromStores2 = obj9.useStateFromStores(items7, () => {
    let integrationStatus = ConjureProjectStore.getIntegrationStatus(projectId);
    const tmp = projectId;
    if (integrationStatus == null) {
      integrationStatus = ConjureLastIntegrationStatusStore.getIntegrationStatus(tmp);
    }
    return integrationStatus;
  }, items8);
  let preview_ready;
  const tmp12 = setMode;
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
  const useApplication = tmp(tmp2[20]).useApplication;
  tmp(tmp2[20]);
  const isLoading = useApplication(tmp20).isLoading;
  const items9 = [frameSurface];
  const items10 = [projectId];
  const tmpResult17 = tmp(tmp2[19]);
  stateFromStores3 = tmpResult17.useStateFromStores(items9, () => {
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
  let obj10 = { applicationId: previewAppId, previewApplicationId: previewAppId, declaredActivity: true === has_activity, previewSupportedSurfaces: prop, installScope: install_scope, ownerAuthorizationRevoked: true === prop1, mainCardOnly: true, previewAppChannels: stateFromStores3 };
  has_activity = undefined;
  const useConjurePreviewMode = tmp(tmp2[21]).useConjurePreviewMode;
  tmp(tmp2[21]);
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
  const tmpResult19 = tmp(tmp2[22]);
  const conjurePreviewModeRequests = tmpResult19.useConjurePreviewModeRequests(projectId, (arg0) => {
    const modes = availability.modes;
    if (modes.includes(arg0)) {
      setMode(arg0);
    }
  });
  const tmpResult20 = tmp(tmp2[23]);
  const conjureTraceRequests = tmpResult20.useConjureTraceRequests(projectId, () => {
    const obj = { projectId };
    return navigation.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, obj);
  });
  let prop2;
  if (stateFromStores2 != null) {
    prop2 = stateFromStores2.bot_permissions_changed;
  }
  let obj11 = { installScope: install_scope, previewReady: tmp31, integrationInstalled: prop3, botPermissionsChanged: tmp34 };
  prop3 = undefined;
  const requiresPermissionReview = tmp(tmp2[25]).requiresPermissionReview;
  tmp(tmp2[25]);
  if (stateFromStores2 != null) {
    prop3 = stateFromStores2.integration_installed;
  }
  if (prop3 == null) {
    prop3 = null;
  }
  let result = requiresPermissionReview(obj11);
  const items11 = [projectId];
  const effect = obj2.useEffect(() => {
    const obj = ConjureActionCreators;
    const project = obj.getProject(projectId);
    project.catch(() => {

    });
  }, items11);
  const tmp37 = null != previewAppId && null != tmp4(tmp2[27])(previewAppId);
  const tmpResult22 = tmp(tmp2[28]);
  result1 = tmpResult22.conjureInstallGuildId(stateFromStores, stateFromStores2, guildId);
  const items12 = [result1, previewAppId, stateFromStores, projectId];
  const callback = obj2.useCallback(bottom(function*(arg0, value) {
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
              const obj2 = application(navigation[20]);
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
            applicationId: closure_130_10,
            application,
            guildId: closure_130_21,
            onClose() {
                    let obj = c0(navigation[28]);
                    const result = obj.repairConjureGuildHints(closure_1_7, closure_1_21);
                    const cleanupPromise = result.finally(() => {
                      const obj = application(closure_2_2[26]);
                      return obj.getProject(closure_1_1);
                    });
                    cleanupPromise.catch(() => {

                    });
                  }
          };
          const openConjureAppInstallModal = tmp(navigation[29]).openConjureAppInstallModal;
          const tmp22 = tmp(navigation[29]);
          const application1 = application2.getApplication(closure_130_10);
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
  let tmp7Result = tmp7(obj2.useState(true), 2);
  [tmp42, tmp43] = tmp7Result;
  __initData = tmp43;
  [tmp45, tmp46] = tmp7(obj2.useState(false), 2);
  let tmp47 = null;
  const useState = obj2.useState;
  tmp7(obj2.useState(false), 2);
  const tmp39 = bottom;
  if (null != stateFromStores2) {
    tmp47 = tmp31;
  }
  [tmp49, tmp50] = tmp7(useState(tmp47), 2);
  tmp7(useState(tmp47), 2);
  const tmp7Result6 = tmp7(obj2.useState(projectId), 2);
  if (tmp7Result6[0] !== projectId) {
    tmp7Result6[1](projectId);
    tmp43(true);
    tmp46(false);
    tmp50(null);
  }
  let tmp56 = tmp31 && null != previewAppId && !isResolving;
  if (tmp56) {
    tmp56 = availability.modes.length > 0 || result;
    const tmp57 = availability.modes.length > 0 || result;
  }
  const tmp58 = tmp56 && !tmp42;
  __initData2 = tmp58;
  let hasItem = tmp56;
  const tmpResult23 = tmp(tmp2[30]);
  const conjureAgentNeedsPreview = tmpResult23.useConjureAgentNeedsPreview(projectId);
  if (tmp56) {
    hasItem = tmp37;
  }
  if (hasItem) {
    let modes = availability.modes;
    hasItem = modes.includes("frame");
  }
  const tmpResult24 = tmp(tmp2[25]);
  const result2 = tmpResult24.permissionReviewBlocksMode(activeMode, result, tmp34);
  let tmp62 = hasItem && tmp58;
  if (tmp62) {
    let str2 = "frame";
    tmp62 = "frame" === activeMode;
  }
  if (tmp62) {
    tmp62 = !result2;
  }
  __initData3 = tmp62;
  if (hasItem) {
    hasItem = tmp45 || tmp62 || conjureAgentNeedsPreview;
    const tmp63 = tmp45 || tmp62 || conjureAgentNeedsPreview;
  }
  const tmp64 = hasItem && !tmp45;
  if (tmp64) {
    tmp46(true);
  }
  let tmp66 = tmp58;
  if (tmp66) {
    tmp66 = "bot" === activeMode;
  }
  closure_25 = tmp66;
  if (stateFromStores2 != null) {
    integration_installed = stateFromStores2.integration_installed;
  }
  closure_26 = tmp67;
  ref = obj2.useRef(false);
  const items13 = [guildId, tmp67, projectId];
  const effect1 = obj2.useEffect(() => {
    if (closure_26) {
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
  const tmpResult25 = tmp(tmp2[18]);
  class Ue {
    constructor() {
      let paddingBottom = 0;
      if (closure_23) {
        paddingBottom = 0;
        if (!closure_25) {
          const _Math = Math;
          paddingBottom = Math.max(closure_5.get(), bottom);
        }
      }
      return { paddingBottom };
    }
  }
  Ue.__closure = { previewShowing: tmp58, botFaceShowing: tmp66, keyboardHeight: tmp6, safeAreaBottom: bottom };
  Ue.__workletHash = 9469604169548;
  Ue.__initData = __initData2;
  const animatedStyle = tmpResult25.useAnimatedStyle(Ue);
  const tmpResult26 = tmp(tmp2[18]);
  class Le {
    constructor() {
      let items;
      let num = 0;
      if (!closure_23) {
        const _Math = Math;
        num = -Math.max(0, closure_5.get() - bottom);
      }
      const obj = { transform: items };
      items = [{ translateY: num }];
      return obj;
    }
  }
  Le.__closure = { previewShowing: tmp58, keyboardHeight: tmp6, safeAreaBottom: bottom };
  Le.__workletHash = 7166266100039;
  Le.__initData = __initData3;
  const animatedStyle1 = tmpResult26.useAnimatedStyle(Le);
  active = availability(projectId).active;
  const tmpResult27 = tmp(tmp2[32]);
  conjureControlActive = tmpResult27.useConjureControlActive(projectId);
  let intl = tmp(tmp2[33]).intl;
  const string = intl.string;
  const tmp4Result = tmp4(tmp2[34]);
  if (conjureControlActive) {
    Sme0T0 = tmp4Result.Sme0T0;
  } else {
    Sme0T0 = active ? tmp4Result.vn5Rzu : tmp4Result["cl/Jyl"];
  }
  const stringResult = string(Sme0T0);
  c30 = stringResult;
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
  let intl2 = tmp(tmp2[33]).intl;
  stringResult1 = intl2.string(tmp4(tmp2[34])["N+VA1J"]);
  const items17 = [memo1, availability.modes.length, stringResult1, tmp58];
  const memo2 = obj2.useMemo(() => {
    let intl;
    let items2;
    const obj = { id: "chat", label: intl.string(_modDef3830["1HH2p9"]), page: null };
    intl = intl6.intl;
    const items = [obj];
    if (availability.modes.length > 0) {
      const tmp4 = closure_23;
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
  closure_35 = tmp79;
  const items18 = [memo1, tmp79, stringResult1, tmp58, setAppChannel, setFrameSurface, setMode, memo];
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
      if (closure_23) {
        tmp3 = stringResult1;
      }
      let obj = { prefix: tmp3, renderTrailingIcon: fn, menuLabel: intl.string(_modDef3830.I2ucou), onShowMenu: fn2 };
      fn = undefined;
      if (closure_23) {
        if (closure_35) {
          fn = (color) => {
            const obj = { size: "xs", color };
            return setFrameSurface(guildId(navigation[36]).ChevronSmallDownIcon, obj);
          };
        }
      }
      intl = intl6.intl;
      fn2 = undefined;
      if (closure_35) {
        fn2 = () => {
          let obj = {
            targets,
            target,
            onChange(mode) {
              const obj = guildId(navigation[35]);
              const previewTarget = obj.selectPreviewTarget(mode, closure_1_15, closure_1_18, closure_1_20);
              closure_1_22(false);
            }
          };
          return projectId(navigation[37])(obj);
        };
      }
      tmp = { preview: obj };
      const obj2 = { preview: obj };
    }
    return tmp;
  }, items18);
  if (tmp82) {
    tmp82 = tmp31 !== tmp49;
  }
  if (tmp82) {
    const tmp83 = false === tmp49 && true === preview_ready && null != first1;
    if (tmp83) {
      setMode(first1);
      tmp43(false);
    }
    tmp50(true === preview_ready);
  }
  const width = tmp4(tmp2[38])().width;
  let obj12 = { items: memo2, pageWidth: width - 2 * result1, onSetActiveIndex: callback2 };
  const tmpResult28 = tmp(tmp2[39]);
  const segmentedControlState = tmpResult28.useSegmentedControlState(obj12);
  if (tmp42) {
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
    const obj = guildId(navigation[40]);
    return obj.leaveConjurePreviewFrame(previewAppId);
  }) : undefined, items20);
  const tmp90 = tmp4(tmp2[41])(projectId, guildId);
  const tmp91 = tmp4(tmp2[31])(projectId, tmp90);
  label = tmp91;
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
  const items22 = [guildId, navigation];
  memo4 = obj2.useMemo(() => {
    let obj = conjureStandaloneScenes;
    return obj.projectOpener(guildId, (projectId) => {
      const obj = { projectId };
      return closure_1_2.push(guildId(navigation[24]).ConjureScreenScenes.CHAT, obj);
    });
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
  closure_45 = obj2.useRef(false);
  const useCallback = obj2.useCallback;
  let closure_0 = tmp39(function*(arg0, value) {
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
        const obj6 = { text: intl2.string(projectId(navigation[34]).qqlUiW), icon: closure_0(navigation[47]).UndoIcon };
        const open = projectId(navigation[46]).open;
        const tmp40 = projectId(navigation[46]);
        intl2 = closure_0(navigation[33]).intl;
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
      const intl = closure_0(navigation[33]).intl;
      presentError(intl.string(projectId(navigation[34])["PSdo+w"]));
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
          const open2 = projectId(navigation[46]).open;
          const tmp73 = projectId(navigation[46]);
          const intl3 = closure_0(navigation[33]).intl;
          formatToPlainString = intl3.formatToPlainString;
          obj13 = { title: obj15.versionTitle(closure_0.subject).short };
          Z4n6LX = projectId(navigation[34]).Z4n6LX;
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
        const obj = { value, done: true };
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
  const tmpResult29 = tmp(tmp2[53]);
  conjureDebugPaneEnabled = tmpResult29.useConjureDebugPaneEnabled();
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
  const tmp102 = frameSurfaceOptions(tmp4(tmp2[55])(previewAppId, memo5));
  closure_50 = tmp102;
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
  const items31 = [tmp12];
  const items32 = [projectId];
  const tmpResult30 = tmp(tmp2[19]);
  stateFromStores4 = tmpResult30.useStateFromStores(items31, () => ConjureProjectStore.isProjectDeleting(projectId), items32);
  const items33 = [stateFromStores4, callback9];
  const effect4 = obj2.useEffect(() => {
    const tmp = stateFromStores4;
    if (tmp) {
      callback9();
    }
  }, items33);
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
  const tmpResult31 = tmp(tmp2[58]);
  isConjureProjectMuted = tmpResult31.useIsConjureProjectMuted(projectId);
  const tmpResult32 = tmp(tmp2[59]);
  conjureRemoveTarget = tmpResult32.useConjureRemoveTarget(projectId);
  const items34 = [conjureDebugPaneEnabled, guildId, isConjureProjectMuted, callback9, callback5, callback7, callback4, callback3, callback21, callback8, tmp102, tmp4Result1Result, stateFromStores, projectId, tmp91, conjureRemoveTarget];
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
            return projectId(navigation[62])(closure_1_1, guildId, "header");
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
      if (closure_50) {
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
  const items35 = [conjureControlActive, active, stringResult, tmp62, callback3, callback1, navigation, memo6, stateFromStores, projectExists, projectName, stateFromStores1, tmp5];
  const effect5 = obj2.useEffect(() => {
    let accessibilityLabel;
    let disabled;
    let headerActions;
    let onPress;
    let tmp = projectName;
    if (projectName == null) {
      let tmp2 = guildId;
      let tmp3 = navigation;
      let intl = guildId(navigation[33]).intl;
      const tmp5 = projectExists;
      if (!tmp5) {
        let uk6jhJ;
        const tmp6 = stateFromStores1;
        if (!tmp6) {
          let tmp7 = projectId;
          uk6jhJ = projectId(tmp3[34]).G1WwgK;
        }
        tmp = tmp4(uk6jhJ);
      }
      uk6jhJ = projectId(tmp3[34]).uk6jhJ;
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
        if (closure_1_8) {
          let obj = { style: headerActions.headerActions, children: items };
          let tmp7Result = null;
          const tmp2 = appChannel;
          const tmp3 = projectExists;
          if (closure_1_24) {
            let ExperimentalDirectSelectIcon;
            const tmp10 = projectId(navigation[68]);
            const tmp7 = setFrameSurface;
            const tmp9 = navigation;
            if (active) {
              ExperimentalDirectSelectIcon = closure_25;
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
                const obj = { ref, IconComponent: title(closure_1_2[71]).MoreHorizontalIcon, onPress, accessibilityLabel: intl.string(title(closure_1_2[33]).t["UKOtz+"]), accessibilityActions, onAccessibilityAction };
                const tmp = closure_1_1(closure_1_2[68]);
                intl = title(closure_1_2[33]).intl;
                return closure_1_18(tmp, obj);
              }
          };
          items[1] = setFrameSurface(guildId(navigation[70]).ContextMenu, obj4);
          tmp = tmp2(tmp3, obj);
        }
        return tmp;
      }
    };
    navigation.setOptions(obj);
  }, items35);
  const items36 = [guildId, projectId];
  const effect6 = obj2.useEffect(() => {
    let obj = ConjureActionCreators;
    const result = obj.setSelectedProjectForGuild(guildId, projectId);
    return () => {
      const obj = guildId(navigation[26]);
      return obj.setSelectedProjectForGuild(closure_1_0, null);
    };
  }, items36);
  if (projectExists) {
    let obj14 = { style: items37, children: items38 };
    items37 = [tmp5.contentBare, animatedStyle];
    let tmp122 = null;
    const View = tmp4(tmp2[18]).View;
    if (tmp56) {
      let obj15 = { style: tmp5.segments, children: setFrameSurface(tmp4(tmp2[74]), obj16) };
      obj16 = { state: segmentedControlState, extras: memo3 };
      tmp122 = setFrameSurface(projectExists, obj15);
    }
    items38 = [tmp122, ];
    let tmp127Result = null;
    const obj17 = { style: tmp5.panes, children: items39 };
    if (hasItem) {
      tmp127Result = null;
      if (null != previewAppId) {
        const obj18 = { style: tmp62 ? tmp5.pane : tmp5.paneBackstage, pointerEvents: str5, accessibilityElementsHidden: !tmp62, importantForAccessibility: str6, children: setFrameSurface(tmp(tmp2[40]).PreviewFrame, obj19) };
        str5 = "none";
        if (tmp62) {
          str5 = "auto";
        }
        str6 = "no-hide-descendants";
        if (tmp62) {
          str6 = "auto";
        }
        obj19 = { applicationId: previewAppId, projectId, frameSurface, launch: frameLaunchParams, visible: tmp62 };
        tmp127Result = tmp127(tmp125, obj18);
      }
    }
    items39 = [tmp127Result, , ];
    let tmp129Result = null;
    if (tmp58) {
      tmp129Result = null;
      if (null != previewAppId) {
        tmp129Result = null;
        if (!tmp62) {
          const obj20 = { style: tmp5.pane, children: setFrameSurface(tmp4Result4, obj21) };
          obj21 = { projectId, previewApplicationId: previewAppId, mode: activeMode, availability, frameSurface, frameLaunchParams, widgetApplicationId, frameHostAvailable: tmp37, permissionsGate: tmp131 };
          tmp131 = null;
          tmp4Result4 = tmp4(tmp2[40]);
          if (result2) {
            tmp131 = { onReviewPermissions: callback, loading: isLoading, previewBotMissing: false === integration_installed };
            const obj22 = { onReviewPermissions: callback, loading: isLoading, previewBotMissing: false === integration_installed };
          }
          tmp129Result = tmp129(tmp125, obj20);
        }
      }
    }
    items39[1] = tmp129Result;
    const items40 = [tmp5.chatPane, , ];
    let paneHidden = tmp58;
    const View2 = tmp4(tmp2[18]).View;
    if (tmp58) {
      paneHidden = tmp5.paneHidden;
    }
    items40[1] = paneHidden;
    items40[2] = animatedStyle1;
    const obj23 = { style: items40, children: setFrameSurface(Provider, obj24) };
    obj24 = { value: tmp90, children: setFrameSurface(Provider2, obj25) };
    Provider = tmp(tmp2[31]).ConjurePublishActionContext.Provider;
    obj25 = { value: projectId, children: setFrameSurface(tmp4(tmp2[76]), obj26) };
    Provider2 = tmp(tmp2[75]).ConjureFileMentionProjectContext.Provider;
    obj26 = { projectId, transcriptTopInset: first, onRestoreVersion: callback6, hidden: tmp58 };
    items39[2] = setFrameSurface(View2, obj23);
    items38[1] = appChannel(projectExists, obj17);
    tmp115Result1 = tmp121(View, obj14);
  } else {
    const obj27 = { style: items41, children: tmp115Result };
    items41 = [, ];
    ({ content: arr39[0], centered: arr39[1] } = tmp5);
    if (stateFromStores1) {
      tmp115Result = tmp115(closure_6, {});
    } else {
      const obj28 = { style: tmp5.listError, children: items42 };
      const obj29 = { variant: "heading-lg/semibold", color: "text-default", children: intl3.string(tmp4(tmp2[34]).G1WwgK) };
      const Text = tmp(tmp2[72]).Text;
      intl3 = tmp(tmp2[33]).intl;
      items42 = [setFrameSurface(Text, obj29), , ];
      const obj30 = { variant: "text-md/normal", color: "text-muted", children: intl4.string(tmp4(tmp2[34]).fINulo) };
      const Text2 = tmp(tmp2[72]).Text;
      intl4 = tmp(tmp2[33]).intl;
      items42[1] = setFrameSurface(Text2, obj30);
      const obj31 = {
        variant: "secondary",
        size: "sm",
        text: intl5.string(tmp4(tmp2[34])["WFJ/vb"]),
        onPress() {
              const obj = ConjureActionCreators;
              return obj.listProjects(guildId);
            }
      };
      const Button = tmp(tmp2[73]).Button;
      intl5 = tmp(tmp2[33]).intl;
      items42[2] = setFrameSurface(Button, obj31);
      tmp115Result = appChannel(tmp116, obj28);
    }
    tmp115Result1 = tmp115(tmp116, obj27);
  }
  return tmp115Result1;
};
