// Module ID: 12034
// Function ID: 12035
// Name: ConjureChatScene
// Dependencies: [5, 32, 19, 17, 2040, 10830, 10856, 6838, 10847, 6841, 21, 5009, 575, 1498, 12035, 1626, 12036, 1640, 5090, 504, 10855, 6875, 12040, 10930, 12046, 12047, 12043, 5667, 12048, 10877, 12049, 12050, 1114, 3865, 11377, 12051, 1492, 8971, 12052, 12397, 12405, 5253, 12433, 10828, 12479, 5707, 12483, 12485, 5706, 12487, 12488, 12490, 12508, 12509, 10863, 12057, 10901, 1499, 12510, 12513, 12514, 12531, 12532, 12533, 9895, 12534, 9736, 10716, 5619, 5629, 12536, 12400, 12449, 12537, 6998, 2]
// Exports: default

// Module 12034 (ConjureChatScene)
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5253 */;
import FramesConstants from "FramesConstants" /* 6841 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 6998 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 10828 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10830 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10855 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 10863 */;
import restartFrames from "restartFrames" /* 10901 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 12047 */;
import conjurePreviewTargets from "conjurePreviewTargets" /* 12050 */;
import ConjureSettingsSheet from "ConjureSettingsSheet" /* 12433 */;
import ConjureConnectToolSheet from "ConjureConnectToolSheet" /* 12479 */;
import ConjureHistorySheet from "ConjureHistorySheet" /* 12490 */;
import ConjureChatMoreSheet from "ConjureChatMoreSheet" /* 12514 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationStore from "ApplicationStore" /* 2040 */;
import ConjureLastIntegrationStatusStore from "ConjureLastIntegrationStatusStore" /* 10856 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10847 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const ConjureRemixSheetDefault = ConjureRemixSheet;
const ConjureSettingsSheetDefault = ConjureSettingsSheet;
const ConjureConnectToolSheetDefault = ConjureConnectToolSheet;
const ConjureHistorySheetDefault = ConjureHistorySheet;
const ConjureChatMoreSheetDefault = ConjureChatMoreSheet;
let c1, c3, c4, c6, navigation;

let closure_15;
let closure_16;
let closure_17;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function ExitOnBackPress(onExit) {
  onExit = onExit.onExit;
  const obj = useNavigatorBackPressHandler;
  obj.useNavigatorBackPressHandler(() => {
    onExit();
    return true;
  });
  return null;
}
let _asyncToGenerator = _asyncToGenerator_mod;
let react = react_mod;
({ ActivityIndicator: metroRequire, Keyboard: metroImportDefault, View: metroImportAll } = react_native);
const closeConnection = ConjureConnectionStore.closeConnection;
const isLaunched = FramesConstants.isLaunched;
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = Fragment);
let closure_18 = createStyles.createStyles((paddingBottom) => {
  const obj = { content: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom }, contentBare: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, centered: { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 }, listError: { alignItems: "center", gap: nativeDefault.space.PX_12 }, segments: { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_4, paddingBottom: nativeDefault.space.PX_8, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.STANDALONE_CHANNEL_HEADER_BORDER }, panes: { flex: 1, overflow: "hidden" }, pane: { flex: 1 }, chatPane: { flex: 1, paddingBottom }, paneHidden: { display: "none" }, paneBackstage: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0 } };
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom });
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
  ({ flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 });
  ({ alignItems: "center", gap: nativeDefault.space.PX_12 });
  ({ paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_4, paddingBottom: nativeDefault.space.PX_8, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.STANDALONE_CHANNEL_HEADER_BORDER });
  return obj;
});
const PX_16 = nativeDefault.space.PX_16;
let __initData = { code: "function ConjureChatSceneTsx1(e){const{runOnJS,setChatKeyboardCover,safeAreaBottom}=this.__closure;runOnJS(setChatKeyboardCover)(Math.max(0,e.height-safeAreaBottom));}" };
let __initData2 = { code: "function ConjureChatSceneTsx2(){const{previewShowing,botFaceShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{paddingBottom:previewShowing&&!botFaceShowing?Math.max(keyboardHeight.get(),safeAreaBottom):0};}" };
let __initData3 = { code: "function ConjureChatSceneTsx3(){const{previewShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{transform:[{translateY:previewShowing?0:-Math.max(0,keyboardHeight.get()-safeAreaBottom)}]};}" };
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureChatScene.tsx");

export default function ConjureChatScene(guildId) {
  let Provider;
  let Provider2;
  let _undefined;
  let canAnnotate;
  let closure_20;
  let closure_22;
  let closure_3;
  let closure_5;
  let data;
  let fn;
  let frameLaunchParams;
  let has_activity;
  let indicator;
  let integration_installed;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let isLoading;
  let isResolving;
  let items35;
  let items38;
  let items39;
  let items40;
  let items42;
  let items43;
  let items44;
  let label;
  let obj22;
  let obj25;
  let obj27;
  let obj30;
  let obj31;
  let obj32;
  let previewAppId;
  let projectExists;
  let projectGuildId;
  let projectName;
  let prop;
  let prop1;
  let prop3;
  let publish;
  let publishOptions;
  let result3;
  let str6;
  let str7;
  let tmp109;
  let tmp115Result;
  let tmp115Result4;
  let tmp120Result;
  let tmp120Result10;
  let tmp122;
  let tmp124;
  let tmp147;
  let tmp46;
  let tmp47;
  let tmp49;
  let tmp4Result10;
  let tmp4Result7;
  let tmp50;
  let tmp53;
  let tmp54;
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
  let c19;
  __initData = undefined;
  __initData2 = undefined;
  __initData3 = undefined;
  let memo;
  let memo1;
  let c25;
  let closure_26;
  let num2;
  let activeIndex;
  let setActiveIndex;
  let closure_30;
  projectGuildId = undefined;
  let callback2;
  let memo4;
  let callback3;
  let callback4;
  let closure_36;
  let callback5;
  let callback21;
  let conjureDebugPaneEnabled;
  let isConjureMcpUiEnabled;
  let callback6;
  let closure_42;
  let callback7;
  let key;
  let callback8;
  let callback9;
  let stateFromStores4;
  let preview;
  let conjureRemoveTarget;
  let closure_51;
  let tmp = guildId;
  let tmp2 = navigation;
  let onExit = guildId.onExit;
  let obj = guildId(navigation[13]);
  navigation = obj.useNavigation();
  let obj2 = react;
  let tmp4 = projectId;
  const context = react.useContext(projectId(navigation[14]));
  _asyncToGenerator = tmp6;
  const bottom = projectId(navigation[15])().bottom;
  let tmp7 = result1(bottom);
  const tmp8 = projectId(navigation[16])();
  react = tmp8;
  const tmp10 = bottom(react.useState(0), 2);
  const tmp12 = tmp10[1];
  let closure_6 = tmp12;
  let first = tmp10[0];
  let obj3 = guildId(navigation[17]);
  let obj4 = { onEnd: fn };
  fn = function x(height) {
    const obj = ReanimatedRexport;
    const runOnJSResult = obj.runOnJS(closure_6);
    runOnJSResult(Math.max(0, height.height - bottom));
  };
  let obj5 = { runOnJS: guildId(navigation[18]).runOnJS, setChatKeyboardCover: tmp12, safeAreaBottom: bottom };
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
  ({ projectExists, projectName, projectGuildId, previewAppId } = stateFromStoresObject);
  const projectUnavailable = stateFromStoresObject.projectUnavailable;
  let obj8 = guildId(navigation[19]);
  const items5 = [setMode];
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
    stateFromStores1 = null != context && !projectExists && !projectUnavailable;
    const tmp18 = null != context && !projectExists && !projectUnavailable;
  }
  const items7 = [tmp14, activeMode];
  const items8 = [projectId];
  const tmpResult = tmp(tmp2[19]);
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
  const useApplication = tmp(tmp2[21]).useApplication;
  tmp(tmp2[21]);
  let application = useApplication(tmp23);
  ({ data, isLoading } = application);
  const items9 = [frameSurface];
  const items10 = [projectId];
  const tmpResult23 = tmp(tmp2[19]);
  stateFromStores3 = tmpResult23.useStateFromStores(items9, () => {
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
  const useConjurePreviewMode = tmp(tmp2[22]).useConjurePreviewMode;
  tmp(tmp2[22]);
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
  const tmpResult25 = tmp(tmp2[23]);
  const conjurePreviewModeRequests = tmpResult25.useConjurePreviewModeRequests(projectId, (arg0) => {
    const modes = availability.modes;
    if (modes.includes(arg0)) {
      setMode(arg0);
    }
  });
  const tmpResult26 = tmp(tmp2[24]);
  const conjureTraceRequests = tmpResult26.useConjureTraceRequests(projectId, () => {
    const obj = { projectId };
    return navigation.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, obj);
  });
  let prop2;
  if (stateFromStores2 != null) {
    prop2 = stateFromStores2.bot_permissions_changed;
  }
  let obj10 = { installScope: install_scope, previewReady: tmp35, integrationInstalled: prop3, botPermissionsChanged: tmp38 };
  prop3 = undefined;
  const requiresPermissionReview = tmp(tmp2[26]).requiresPermissionReview;
  tmp(tmp2[26]);
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
  const tmp41 = null != previewAppId && null != tmp4(tmp2[27])(previewAppId);
  const tmpResult28 = tmp(tmp2[28]);
  result1 = tmpResult28.conjureInstallGuildId(stateFromStores, stateFromStores2, guildId);
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
        return { value: "HermesInternal", done: null };
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
              const obj2 = application(navigation[21]);
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
            applicationId: closure_130_8,
            application,
            guildId: closure_130_18,
            onClose() {
                    let obj = c0(navigation[28]);
                    const result = obj.repairConjureGuildHints(closure_1_7, closure_1_18);
                    const cleanupPromise = result.finally(() => {
                      const obj = application(closure_2_2[20]);
                      return obj.getProject(closure_1_1);
                    });
                    cleanupPromise.catch(() => {

                    });
                  }
          };
          const openConjureAppInstallModal = tmp(navigation[29]).openConjureAppInstallModal;
          const tmp22 = tmp(navigation[29]);
          const application1 = application2.getApplication(closure_130_8);
          application = application1;
          if (application1 == null) {
            application = null;
          }
          let result = openConjureAppInstallModal(obj6);
        }
        c4 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp15) {
        c4 = 3;
        throw tmp15;
      }
    }
  }), items12);
  [tmp46, tmp47] = bottom(obj2.useState(true), 2);
  c19 = tmp47;
  bottom(obj2.useState(true), 2);
  [tmp49, tmp50] = bottom(obj2.useState(false), 2);
  let tmp51 = null;
  const useState = obj2.useState;
  bottom(obj2.useState(false), 2);
  const tmp43 = _asyncToGenerator;
  if (null != stateFromStores2) {
    tmp51 = tmp35;
  }
  [tmp53, tmp54] = bottom(useState(tmp51), 2);
  bottom(useState(tmp51), 2);
  const tmp9Result6 = bottom(obj2.useState(projectId), 2);
  if (tmp9Result6[0] !== projectId) {
    const tmp56 = tmp9Result6[1](projectId);
    tmp47(true);
    tmp50(false);
    tmp54(null);
  }
  let tmp60 = tmp35 && null != previewAppId && !isResolving;
  if (tmp60) {
    tmp60 = availability.modes.length > 0 || result;
    const tmp61 = availability.modes.length > 0 || result;
  }
  __initData = tmp62;
  let hasItem = tmp60;
  const tmpResult29 = tmp(tmp2[30]);
  const conjureAgentNeedsPreview = tmpResult29.useConjureAgentNeedsPreview(projectId);
  if (tmp60) {
    hasItem = tmp41;
  }
  if (hasItem) {
    let modes = availability.modes;
    hasItem = modes.includes("frame");
  }
  const permissionReviewBlocksMode = tmp(tmp2[26]).permissionReviewBlocksMode;
  tmp(tmp2[26]);
  const tmpResult31 = tmp(tmp2[26]);
  const result2 = permissionReviewBlocksMode(activeMode, result, tmp38, tmpResult31.previewNeedsAppConsent(data));
  let tmp67 = hasItem && tmp62;
  if (tmp67) {
    tmp67 = "frame" === activeMode;
  }
  if (tmp67) {
    tmp67 = !result2;
  }
  __initData2 = tmp67;
  if (hasItem) {
    hasItem = tmp49 || tmp67 || conjureAgentNeedsPreview;
  }
  const tmp69 = hasItem && !tmp49;
  if (tmp69) {
    tmp50(true);
  }
  let tmp71 = tmp62;
  if (tmp71) {
    tmp71 = "bot" === activeMode;
  }
  __initData3 = tmp71;
  if (stateFromStores2 != null) {
    integration_installed = stateFromStores2.integration_installed;
  }
  const tmpResult32 = tmp(tmp2[18]);
  class Je {
    constructor() {
      let paddingBottom = 0;
      if (closure_20) {
        paddingBottom = 0;
        if (!closure_22) {
          const _Math = Math;
          paddingBottom = Math.max(closure_5.get(), bottom);
        }
      }
      return { paddingBottom };
    }
  }
  Je.__closure = { previewShowing: tmp60 && !tmp46, botFaceShowing: tmp71, keyboardHeight: tmp8, safeAreaBottom: bottom };
  Je.__workletHash = 9469604169548;
  Je.__initData = __initData2;
  const animatedStyle = tmpResult32.useAnimatedStyle(Je);
  const tmpResult33 = tmp(tmp2[18]);
  class Ke {
    constructor() {
      let items;
      let num = 0;
      if (!closure_20) {
        const _Math = Math;
        num = -Math.max(0, closure_5.get() - bottom);
      }
      const obj = { transform: items };
      items = [{ translateY: num }];
      return obj;
    }
  }
  Ke.__closure = { previewShowing: tmp60 && !tmp46, keyboardHeight: tmp8, safeAreaBottom: bottom };
  Ke.__workletHash = 7166266100039;
  Ke.__initData = __initData3;
  const items13 = [availability.modes, frameSurfaceOptions, stateFromStores3];
  const animatedStyle1 = tmpResult33.useAnimatedStyle(Ke);
  memo = obj2.useMemo(() => {
    const obj = conjurePreviewTargets;
    return obj.previewTargets(availability.modes, frameSurfaceOptions, stateFromStores3);
  }, items13);
  const items14 = [activeMode, frameSurface, appChannel];
  memo1 = obj2.useMemo(() => {
    const obj = conjurePreviewTargets;
    return obj.activePreviewTarget(activeMode, frameSurface, appChannel);
  }, items14);
  let intl = tmp(tmp2[32]).intl;
  const stringResult = intl.string(tmp4(tmp2[33])["N+VA1J"]);
  c25 = stringResult;
  const items15 = [memo1, availability.modes.length, stringResult, tmp62];
  const memo2 = obj2.useMemo(() => {
    let intl;
    let items2;
    const obj = { id: "chat", label: intl.string(_modDef3865["1HH2p9"]), page: null };
    intl = intl7.intl;
    const items = [obj];
    if (availability.modes.length > 0) {
      const tmp4 = closure_20;
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
      previewTargetLabel = c25;
    } else {
      items2 = [];
    }
    HermesBuiltin.arraySpread(items, items2, 1);
    return items;
  }, items15);
  let tmp78 = null != memo1;
  const callback1 = obj2.useCallback((arg0) => {
    metroImportDefault.dismiss();
    _undefined(0 === arg0);
  }, []);
  if (tmp78) {
    let num = 1;
    tmp78 = memo.length > 1;
  }
  closure_26 = tmp78;
  const items16 = [memo1, tmp78, stringResult, tmp62, setAppChannel, setFrameSurface, setMode, memo];
  const first1 = availability.modes[0];
  let tmp81 = null != stateFromStores2;
  const memo3 = obj2.useMemo(() => {
    let fn;
    let fn2;
    let intl;
    let target;
    let targets;
    let tmp;
    if (null != memo1) {
      let tmp3;
      if (closure_20) {
        tmp3 = c25;
      }
      let obj = { prefix: tmp3, renderTrailingIcon: fn, menuLabel: intl.string(_modDef3865.I2ucou), onShowMenu: fn2 };
      fn = undefined;
      if (closure_20) {
        if (closure_26) {
          fn = (color) => {
            const obj = { size: "xs", color };
            return setFrameSurface(guildId(navigation[34]).ChevronSmallDownIcon, obj);
          };
        }
      }
      intl = intl7.intl;
      fn2 = undefined;
      if (closure_26) {
        fn2 = () => {
          let obj = {
            targets,
            target,
            onChange(mode) {
              const obj = guildId(navigation[31]);
              const previewTarget = obj.selectPreviewTarget(mode, closure_1_12, closure_1_15, closure_1_17);
              closure_1_19(false);
            }
          };
          return projectId(navigation[35])(obj);
        };
      }
      tmp = { preview: obj };
      const obj2 = { preview: obj };
    }
    return tmp;
  }, items16);
  if (tmp81) {
    tmp81 = tmp35 !== tmp53;
  }
  if (tmp81) {
    const tmp82 = false === tmp53 && true === preview_ready && null != first1;
    if (tmp82) {
      setMode(first1);
      tmp47(false);
    }
    tmp54(true === preview_ready);
  }
  const width = tmp4(tmp2[36])().width;
  let obj11 = { items: memo2, pageWidth: width - 2 * c19, onSetActiveIndex: callback1 };
  const tmpResult34 = tmp(tmp2[37]);
  const segmentedControlState = tmpResult34.useSegmentedControlState(obj11);
  if (tmp46) {
    num2 = 0;
  } else {
    num2 = 1;
  }
  activeIndex = segmentedControlState.activeIndex;
  setActiveIndex = segmentedControlState.setActiveIndex;
  const items17 = [num2, activeIndex, setActiveIndex];
  const effect1 = obj2.useEffect(() => {
    if (activeIndex.get() !== num2) {
      setActiveIndex(tmp, false);
    }
  }, items17);
  const items18 = [previewAppId];
  const effect2 = obj2.useEffect(() => null != previewAppId ? (() => {
    const obj = guildId(navigation[38]);
    return obj.leaveConjurePreviewFrame(previewAppId);
  }) : undefined, items18);
  ({ publishOptions, publish, indicator, label } = tmp4(tmp2[39])(projectId, guildId));
  tmp4(tmp2[39])(projectId, guildId);
  closure_30 = tmp4(tmp2[40])(projectId, publish, publishOptions);
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items19 = [projectId, projectGuildId];
  callback2 = obj2.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { content: setFrameSurface(ConjureSettingsSheetDefault, obj2), key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY };
    obj2 = { projectId, guildId: projectGuildId, isPreview: true };
    showActionSheet(obj);
  }, items19);
  const items20 = [guildId, navigation, tmp6];
  memo4 = obj2.useMemo(() => {
    let fn;
    const tmp = closure_3;
    if (tmp) {
      fn = (projectId) => {
        const obj = { projectId };
        return closure_1_2.push(guildId(navigation[25]).ConjureScreenScenes.CHAT, obj);
      };
    } else {
      let obj = conjureStandaloneScenes;
      fn = obj.projectOpener(guildId, (projectId) => {
        const obj = { projectId };
        return closure_1_2.push(guildId(navigation[25]).ConjureScreenScenes.CHAT, obj);
      });
    }
    return fn;
  }, items20);
  const items21 = [guildId, memo4, stateFromStores];
  callback3 = obj2.useCallback(() => {
    let obj2;
    if (null != stateFromStores) {
      const obj = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: setFrameSurface(ConjureRemixSheetDefault, obj2) };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      obj2 = { project: tmp, currentGuildId: guildId, onRemixed: memo4 };
      showActionSheet(obj);
    }
  }, items21);
  const items22 = [projectId];
  callback4 = obj2.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: ConjureConnectToolSheet.CONJURE_CONNECT_TOOL_SHEET_KEY, content: setFrameSurface(ConjureConnectToolSheetDefault, obj2) };
    obj2 = { projectId };
    showActionSheet(obj);
  }, items22);
  closure_36 = obj2.useRef(false);
  const useCallback = obj2.useCallback;
  let closure_0 = tmp43(function*(arg0, value) {
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
        const obj6 = { text: intl2.string(projectId(navigation[33]).qqlUiW), icon: closure_0(navigation[46]).UndoIcon };
        const open = projectId(navigation[45]).open;
        const tmp40 = projectId(navigation[45]);
        intl2 = closure_0(navigation[32]).intl;
        open("CONJURE_VERSION_RESTORING", obj6);
        let c5 = 2;
        c6 = 4;
        c7 = 1;
        const obj8 = { value: obj7.restoreSourceHistoryEntry(closure_1, closure_0.sha), done: false };
        obj7 = closure_0(navigation[47]);
        return obj8;
      }
    } else if (2 === c6) {
      c5 = 0;
      ref.current = false;
      throw closure_4;
    } else if (3 === c6) {
      const presentError = closure_0(navigation[48]).presentError;
      const tmp23 = closure_0(navigation[48]);
      const intl = closure_0(navigation[32]).intl;
      presentError(intl.string(projectId(navigation[33])["PSdo+w"]));
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
          const obj11 = { text: formatToPlainString(Z4n6LX, obj13), icon: closure_0(navigation[46]).UndoIcon };
          const open2 = projectId(navigation[45]).open;
          const tmp73 = projectId(navigation[45]);
          const intl3 = closure_0(navigation[32]).intl;
          formatToPlainString = intl3.formatToPlainString;
          obj13 = { title: obj15.versionTitle(closure_0.subject).short };
          Z4n6LX = projectId(navigation[33]).Z4n6LX;
          obj15 = closure_0(navigation[49]);
          open2("CONJURE_VERSION_RESTORED", obj11);
          if (null != c1) {
            c6 = 5;
            c7 = 1;
            const obj14 = { value: obj2.rewindDataAfterVersionRestore(closure_1, c1), done: false };
            obj2 = closure_0(navigation[50]);
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
          const obj12 = closure_0(navigation[48]);
          obj12.presentError(closure_2);
        }
      }
      c5 = 0;
      ref.current = false;
    }
    yield "HermesInternal";
    closure_2 = tmp4;
    let tmp55 = closure_1;
    if (closure_1 === undefined) {
      tmp55 = null;
    }
    c1 = tmp55;
    return "flexDirection";
  });
  const items23 = [projectId];
  callback5 = useCallback(function() {
    return closure_0(...arguments);
  }, items23);
  const items24 = [callback5, , ];
  let install_scope1;
  const useCallback2 = obj2.useCallback;
  if (stateFromStores != null) {
    install_scope1 = stateFromStores.install_scope;
  }
  items24[1] = install_scope1;
  items24[2] = projectId;
  callback21 = useCallback2(() => {
    let install_scope;
    let obj2;
    let tmp2;
    let tmp3;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: ConjureHistorySheet.CONJURE_HISTORY_SHEET_KEY, content: tmp2(tmp3, obj2) };
    obj2 = { projectId, installScope: install_scope, onRestoreVersion: callback5 };
    install_scope = undefined;
    tmp2 = closure_15;
    tmp3 = ConjureHistorySheetDefault;
    if (stateFromStores != null) {
      install_scope = stateFromStores.install_scope;
    }
    if (install_scope == null) {
      install_scope = null;
    }
    showActionSheet(obj);
  }, items24);
  const tmpResult35 = tmp(tmp2[52]);
  conjureDebugPaneEnabled = tmpResult35.useConjureDebugPaneEnabled();
  const tmpResult36 = tmp(tmp2[53]);
  isConjureMcpUiEnabled = tmpResult36.useIsConjureMcpUiEnabled("ConjureChatScene");
  const items25 = [navigation, projectId];
  callback6 = obj2.useCallback(() => {
    const obj = { projectId };
    return navigation.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, obj);
  }, items25);
  const items26 = [frameSurface];
  const memo5 = obj2.useMemo(() => {
    const obj = conjurePreviewSurface;
    return obj.getConjurePreviewSurface(undefined, frameSurface);
  }, items26);
  const tmp101 = frameSurfaceOptions(tmp4(tmp2[55])(previewAppId, memo5));
  closure_42 = tmp101;
  const items27 = [previewAppId];
  callback7 = obj2.useCallback(() => {
    if (null != previewAppId) {
      const obj = restartFrames;
      obj.restartAppFrames(tmp);
    }
  }, items27);
  const tmpResult37 = tmp(tmp2[57]);
  key = tmpResult37.useRoute().key;
  let tmp103;
  const tmpResult38 = tmp(tmp2[57]);
  if (tmpResult38.useNavigationState((arg0) => {
    const first = arg0.routes[0];
    key = undefined;
    if (first != null) {
      key = first.key;
    }
    return key === key;
  })) {
    tmp103 = onExit;
  }
  onExit = tmp103;
  const items28 = [tmp103, navigation];
  callback8 = obj2.useCallback(() => {
    if (null != onExit) {
      tmp();
    } else {
      navigation.goBack();
    }
  }, items28);
  const items29 = [callback8, projectId];
  callback9 = obj2.useCallback(() => {
    closeConnection(projectId);
    callback8();
  }, items29);
  const items30 = [tmp14];
  const items31 = [projectId];
  const tmpResult39 = tmp(tmp2[19]);
  stateFromStores4 = tmpResult39.useStateFromStores(items30, () => ConjureProjectStore.isProjectDeleting(projectId), items31);
  const items32 = [stateFromStores4, callback9];
  const effect3 = obj2.useEffect(() => {
    const tmp = stateFromStores4;
    if (tmp) {
      callback9();
    }
  }, items32);
  let obj12 = { projectId, refreshApplicationId: tmp109 };
  const modes2 = availability.modes;
  tmp109 = null;
  const tmp4Result = tmp4(tmp2[58]);
  if (modes2.includes("widget")) {
    tmp109 = null;
    if ("unavailable-authorization-revoked" !== availability.profileState) {
      tmp109 = widgetApplicationId;
    }
  }
  const tmp4ResultResult = tmp4Result(obj12);
  preview = tmp4ResultResult;
  const tmpResult40 = tmp(tmp2[59]);
  conjureRemoveTarget = tmpResult40.useConjureRemoveTarget(projectId);
  const effect4 = obj2.useEffect(() => () => {
    const obj = projectId(navigation[41]);
    return obj.hideActionSheet(guildId(navigation[60]).CONJURE_CHAT_MORE_SHEET_KEY);
  }, []);
  const items33 = [conjureDebugPaneEnabled, tmp67, guildId, callback4, callback6, callback21, callback3, callback2, callback7, isConjureMcpUiEnabled, tmp101, tmp4ResultResult, stateFromStores, conjureRemoveTarget];
  const callback10 = obj2.useCallback(() => {
    let obj2;
    let tmp13;
    let tmp15;
    let tmp2;
    let tmp5;
    let tmp7;
    if (null != stateFromStores) {
      const obj = { key: ConjureChatMoreSheet.CONJURE_CHAT_MORE_SHEET_KEY, content: tmp13(tmp15, obj2) };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      obj2 = { project: tmp, guildId, removeTarget: conjureRemoveTarget, canAnnotate, onOpenSettings: callback2, onRemix: callback3, onRefresh: tmp2, onHistory: callback21, onDebug: tmp5, onConnectTool: tmp7, preview };
      tmp2 = undefined;
      tmp13 = closure_15;
      tmp15 = ConjureChatMoreSheetDefault;
      if (closure_42) {
        tmp2 = callback7;
      }
      tmp5 = undefined;
      if (conjureDebugPaneEnabled) {
        tmp5 = callback6;
      }
      tmp7 = undefined;
      if (isConjureMcpUiEnabled) {
        tmp7 = callback4;
      }
      showActionSheet(obj);
    }
  }, items33);
  if (projectName == null) {
    let intl2 = tmp(tmp2[32]).intl;
    if (!projectExists) {
      let uk6jhJ;
      if (!stateFromStores1) {
        uk6jhJ = tmp4(tmp2[33]).G1WwgK;
      }
      projectName = tmp114(uk6jhJ);
    }
    uk6jhJ = tmp4(tmp2[33]).uk6jhJ;
  }
  let tmp117 = null;
  if (null != tmp103) {
    let obj13 = { onExit: tmp103 };
    tmp117 = setFrameSurface(memo, obj13);
  }
  const items34 = [tmp117, ];
  let obj14 = { onBack: callback8, showBorder: tmp122, title: setFrameSurface(tmp4Result7, { project: tmp124, title: projectName, onPressIcon: callback2 }), actions: tmp115Result };
  tmp122 = !tmp60;
  const tmp4Result6 = tmp4(tmp2[61]);
  if (tmp60) {
    tmp122 = !projectExists;
  }
  tmp124 = null;
  tmp4Result7 = tmp4(tmp2[62]);
  if (projectExists) {
    tmp124 = stateFromStores;
  }
  tmp115Result = null;
  if (projectExists) {
    let tmp120Result6 = null;
    if (null != publish) {
      let obj15 = {
        IconComponent: tmp(tmp2[64]).UploadIcon,
        onPress() {
              return closure_30("header");
            },
        disabled: "publishing" === indicator,
        accessibilityLabel: label,
        badge: tmp120Result,
        badgeSize: result3
      };
      tmp120Result = null;
      const tmp4Result8 = tmp4(tmp2[63]);
      if (null != indicator) {
        const obj16 = { indicator };
        tmp120Result = tmp120(tmp4(tmp2[65]), obj16);
      }
      result3 = undefined;
      if (null != indicator) {
        const tmpResult41 = tmp(tmp2[65]);
        result3 = tmpResult41.conjurePublishBadgeSize(indicator);
      }
      tmp120Result6 = tmp120(tmp4Result8, obj15);
    }
    const obj17 = { children: items35 };
    items35 = [tmp120Result6, ];
    const obj18 = { IconComponent: tmp(tmp2[66]).MoreHorizontalIcon, onPress: callback10, accessibilityLabel: intl3.string(tmp(tmp2[32]).t["UKOtz+"]) };
    const tmp4Result9 = tmp4(tmp2[63]);
    intl3 = tmp(tmp2[32]).intl;
    items35[1] = setFrameSurface(tmp4Result9, obj18);
    tmp115Result = tmp115(tmp116, obj17);
  }
  const obj19 = { children: items34 };
  items34[1] = setFrameSurface(tmp4Result6, obj14);
  const tmp115Result3 = setAppChannel(appChannel, obj19);
  let routeFocused;
  const tmpResult42 = tmp(tmp2[57]);
  const isFocused = tmpResult42.useIsFocused();
  if (context != null) {
    routeFocused = context.routeFocused;
  }
  closure_51 = tmp134;
  const items36 = [true === routeFocused && isFocused, projectId];
  const effect5 = obj2.useEffect(() => {
    if (closure_51) {
      let obj = ConjureActionCreators;
      const globalChatProject = obj.selectGlobalChatProject(projectId);
      return () => {
        const obj = guildId(navigation[20]);
        return obj.clearGlobalChatProject(projectId);
      };
    }
  }, items36);
  const items37 = [guildId, projectId, tmp6];
  const effect6 = obj2.useEffect(() => {
    if (!closure_3) {
      let obj = ConjureActionCreators;
      const result = obj.setSelectedProjectForGuild(guildId, projectId);
      return () => {
        const obj = guildId(navigation[20]);
        return obj.setSelectedProjectForGuild(closure_1_0, null);
      };
    }
  }, items37);
  if (projectExists) {
    const obj20 = { style: items38, children: items39 };
    items38 = [tmp7.contentBare, animatedStyle];
    const View = tmp4(tmp2[18]).View;
    items39 = [setFrameSurface(tmp4(tmp2[67]), { absolute: true, mix: true }), tmp115Result3, , ];
    let tmp120Result7 = null;
    if (tmp60) {
      const obj21 = { style: tmp7.segments, children: setFrameSurface(tmp4(tmp2[70]), obj22) };
      obj22 = { state: segmentedControlState, extras: memo3 };
      tmp120Result7 = tmp120(previewAppId, obj21);
    }
    items39[2] = tmp120Result7;
    let tmp120Result8 = null;
    const obj23 = { style: tmp7.panes, children: items40 };
    if (hasItem) {
      tmp120Result8 = null;
      if (null != previewAppId) {
        const obj24 = { style: tmp67 ? tmp7.pane : tmp7.paneBackstage, pointerEvents: str6, accessibilityElementsHidden: !tmp67, importantForAccessibility: str7, children: setFrameSurface(tmp(tmp2[38]).PreviewFrame, obj25) };
        str6 = "none";
        if (tmp67) {
          str6 = "auto";
        }
        str7 = "no-hide-descendants";
        if (tmp67) {
          str7 = "auto";
        }
        obj25 = { applicationId: previewAppId, projectId, frameSurface, launch: frameLaunchParams, visible: tmp67 };
        tmp120Result8 = tmp120(tmp143, obj24);
      }
    }
    items40 = [tmp120Result8, , ];
    let tmp120Result9 = null;
    if (tmp60 && !tmp46) {
      tmp120Result9 = null;
      if (null != previewAppId) {
        tmp120Result9 = null;
        if (!tmp67) {
          const obj26 = { style: tmp7.pane, children: setFrameSurface(tmp4Result10, obj27) };
          obj27 = { projectId, previewApplicationId: previewAppId, mode: activeMode, availability, frameSurface, frameLaunchParams, widgetApplicationId, frameHostAvailable: tmp41, permissionsGate: tmp147 };
          tmp147 = null;
          tmp4Result10 = tmp4(tmp2[38]);
          if (result2) {
            tmp147 = { onReviewPermissions: callback, loading: isLoading, previewBotMissing: false === integration_installed };
            const obj28 = { onReviewPermissions: callback, loading: isLoading, previewBotMissing: false === integration_installed };
          }
          tmp120Result9 = tmp120(tmp143, obj26);
        }
      }
    }
    items40[1] = tmp120Result9;
    const items41 = [tmp7.chatPane, , ];
    let paneHidden = tmp62;
    const View2 = tmp4(tmp2[18]).View;
    if (tmp60 && !tmp46) {
      paneHidden = tmp7.paneHidden;
    }
    items41[1] = paneHidden;
    items41[2] = animatedStyle1;
    const obj29 = { style: items41, children: setFrameSurface(Provider, obj30) };
    obj30 = { value: publishOptions, children: setFrameSurface(Provider2, obj31) };
    Provider = tmp(tmp2[71]).ConjurePublishActionContext.Provider;
    obj31 = { value: projectId, children: setFrameSurface(tmp4(tmp2[73]), obj32) };
    Provider2 = tmp(tmp2[72]).ConjureFileMentionProjectContext.Provider;
    obj32 = { projectId, transcriptTopInset: first, onRestoreVersion: callback5, hidden: tmp60 && !tmp46 };
    items40[2] = setFrameSurface(View2, obj29);
    items39[3] = setAppChannel(previewAppId, obj23);
    tmp115Result4 = tmp115(View, obj20);
  } else {
    const obj33 = { style: tmp7.contentBare, children: items42 };
    items42 = [setFrameSurface(tmp4(tmp2[67]), { absolute: true, mix: true }), tmp115Result3, ];
    const obj34 = { style: items43, children: tmp120Result10 };
    items43 = [, ];
    ({ content: arr41[0], centered: arr41[1] } = tmp7);
    if (stateFromStores1) {
      tmp120Result10 = tmp120(closure_6, {});
    } else {
      const obj35 = { style: tmp7.listError, children: items44 };
      const obj36 = { variant: "heading-lg/semibold", color: "text-default", children: intl4.string(tmp4(tmp2[33]).G1WwgK) };
      const Text = tmp(tmp2[68]).Text;
      intl4 = tmp(tmp2[32]).intl;
      items44 = [setFrameSurface(Text, obj36), , ];
      const obj37 = { variant: "text-md/normal", color: "text-muted", children: intl5.string(tmp4(tmp2[33]).fINulo) };
      const Text2 = tmp(tmp2[68]).Text;
      intl5 = tmp(tmp2[32]).intl;
      items44[1] = setFrameSurface(Text2, obj37);
      const obj38 = {
        variant: "secondary",
        size: "sm",
        text: intl6.string(tmp4(tmp2[33])["WFJ/vb"]),
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
      const Button = tmp(tmp2[69]).Button;
      intl6 = tmp(tmp2[32]).intl;
      items44[2] = setFrameSurface(Button, obj38);
      tmp120Result10 = tmp115(tmp137, obj35);
    }
    items42[2] = setFrameSurface(previewAppId, obj34);
    tmp115Result4 = tmp115(tmp137, obj33);
  }
  return tmp115Result4;
};
