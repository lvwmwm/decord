// Module ID: 18248
// Function ID: 18249
// Name: ConjureChatScene
// Dependencies: [5, 32, 19, 17, 2164, 6967, 6934, 6621, 6980, 6624, 21, 4913, 575, 1500, 18249, 1628, 18250, 1642, 1706, 504, 18251, 6933, 6659, 18252, 14753, 18254, 18255, 5554, 12302, 6998, 18256, 18257, 12299, 1653, 18258, 1112, 4190, 12802, 18260, 1494, 7586, 6996, 6951, 18261, 18266, 18295, 18296, 5127, 18297, 12294, 18359, 18369, 5595, 16501, 18373, 5594, 18375, 18376, 18378, 18392, 18393, 6943, 14366, 14373, 1501, 18394, 12390, 18397, 18406, 18407, 18408, 13870, 9487, 18409, 7022, 9659, 5504, 5511, 18410, 18411, 12301, 18327, 18430, 5090, 5089, 7101, 2]
// Exports: default

// Module 18248 (ConjureChatScene)
import nativeDefault from "native" /* 575 */;
import intl8 from "intl" /* 1112 */;
import _modDef4190 from "module_4190" /* 4190 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5089 */;
import RootNavigationRef from "RootNavigationRef" /* 5090 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5127 */;
import ConjureProjectStore2 from "ConjureProjectStore" /* 6621 */;
import FramesConstants from "FramesConstants" /* 6624 */;
import ConjureActionCreators from "ConjureActionCreators" /* 6933 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 6943 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 6967 */;
import ConjurePreviewActionCreators from "ConjurePreviewActionCreators" /* 6996 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 7101 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 12294 */;
import restartFrames from "restartFrames" /* 14373 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 18255 */;
import conjurePreviewTargets from "conjurePreviewTargets" /* 18258 */;
import ConjureSettingsSheet from "ConjureSettingsSheet" /* 18297 */;
import openConjureShareSheetDefault from "openConjureShareSheet" /* 18359 */;
import ConjureConnectToolSheet from "ConjureConnectToolSheet" /* 18369 */;
import ConjureHistorySheet from "ConjureHistorySheet" /* 18378 */;
import ConjureChatMoreSheet from "ConjureChatMoreSheet" /* 18397 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationStore from "ApplicationStore" /* 2164 */;
import ConjureLastIntegrationStatusStore from "ConjureLastIntegrationStatusStore" /* 6934 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 6980 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

const ConjureRemixSheetDefault = ConjureRemixSheet;
const ConjureSettingsSheetDefault = ConjureSettingsSheet;
const ConjureConnectToolSheetDefault = ConjureConnectToolSheet;
const ConjureHistorySheetDefault = ConjureHistorySheet;
const ConjureChatMoreSheetDefault = ConjureChatMoreSheet;
const ConjureProjectStore = ConjureProjectStore2;
let _require, c3, c4, c6, closure_0, navigation;

let closure_16;
let closure_17;
let closure_18;
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
({ ActivityIndicator: metroRequire, Keyboard: metroImportDefault, View: metroImportAll } = react_native);
const closeConnection = ConjureConnectionStore.closeConnection;
const canRemixProject = ConjureProjectStore2.canRemixProject;
const isLaunched = FramesConstants.isLaunched;
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = Fragment);
let closure_19 = createStyles.createStyles((paddingBottom) => {
  const obj = { content: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom }, contentBare: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, centered: { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 }, listError: { alignItems: "center", gap: nativeDefault.space.PX_12 }, segments: { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_4, paddingBottom: nativeDefault.space.PX_8, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.STANDALONE_CHANNEL_HEADER_BORDER }, panes: { flex: 1, overflow: "hidden" }, pane: { flex: 1 }, chatPane: { flex: 1, paddingBottom }, paneHidden: { display: "none" }, paneBackstage: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0 } };
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom });
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
  ({ flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 });
  ({ alignItems: "center", gap: nativeDefault.space.PX_12 });
  ({ paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_4, paddingBottom: nativeDefault.space.PX_8, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.STANDALONE_CHANNEL_HEADER_BORDER });
  return obj;
});
const PX_16 = nativeDefault.space.PX_16;
let closure_21 = { code: "(function ConjureChatSceneTsx1(e){let[scheduleOnRN,setChatKeyboardCover,safeAreaBottom]=this.__closure;scheduleOnRN(setChatKeyboardCover,Math.max(0,e.height-safeAreaBottom));})" };
let closure_22 = { code: "(function ConjureChatSceneTsx2(){let[previewShowing,botFaceShowing,keyboardHeight,safeAreaBottom]=this.__closure;return{paddingBottom:previewShowing&&!botFaceShowing?Math.max(keyboardHeight.get(),safeAreaBottom):0};})" };
let closure_23 = { code: "(function ConjureChatSceneTsx3(){let[previewShowing,keyboardHeight,safeAreaBottom]=this.__closure;return{transform:[{translateY:previewShowing?0:-Math.max(0,keyboardHeight.get()-safeAreaBottom)}]};})" };
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureChatScene.tsx");

export default function ConjureChatScene(guildId) {
  let Provider;
  let Provider2;
  let _undefined;
  let closure_3;
  let entryPoint;
  let frameLaunchParams;
  let has_activity;
  let hint;
  let indicator;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let isResolving;
  let items47;
  let items48;
  let items49;
  let items51;
  let items52;
  let items53;
  let obj18;
  let obj21;
  let obj23;
  let obj25;
  let obj26;
  let obj27;
  let onExit;
  let pendingChanges;
  let previewAppId;
  let projectExists;
  let projectGuildId;
  let projectName;
  let prop;
  let prop1;
  let prop2;
  let publish;
  let publishOptions;
  let result2;
  let str6;
  let str7;
  let text;
  let tmp11;
  let tmp12;
  let tmp130;
  let tmp136Result;
  let tmp136Result4;
  let tmp14;
  let tmp141Result12;
  let tmp141Result7;
  let tmp143;
  let tmp145;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp46;
  let tmp47;
  let tmp49;
  let tmp4Result7;
  let tmp50;
  let tmp53;
  let tmp54;
  let tmp56;
  let tmp57;
  let tmp82;
  let tmp83;
  let tmp84;
  let tmp85;
  let tmp86;
  let tmp88;
  let tmp89;
  let tmp90;
  let tmp91;
  let widgetApplicationId;
  guildId = guildId.guildId;
  const projectId = guildId.projectId;
  navigation = undefined;
  let stateFromStores;
  previewAppId = undefined;
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
  let c16;
  let onAddBot;
  let c18;
  let conjurePreviewAddBotPrompt;
  let closure_20;
  let canAnnotate;
  let result1;
  let memo1;
  let memo2;
  let c25;
  let closure_26;
  let num2;
  let activeIndex;
  let setActiveIndex;
  let closure_30;
  let canShare;
  projectGuildId = undefined;
  let callback2;
  let memo5;
  let callback4;
  let callback5;
  let closure_37;
  let callback6;
  let callback7;
  let conjureDebugPaneEnabled;
  let isConjureMcpUiEnabled;
  let callback8;
  let closure_43;
  let callback9;
  let key;
  onExit = undefined;
  let callback10;
  let callback11;
  let stateFromStores4;
  let preview;
  let conjureRemoveTarget;
  let closure_52;
  let tmp = guildId;
  let tmp2 = navigation;
  ({ entryPoint, onExit } = guildId);
  let obj = guildId(navigation[13]);
  navigation = obj.useNavigation();
  let obj2 = previewAppId;
  let tmp4 = projectId;
  const context = previewAppId.useContext(projectId(navigation[14]));
  _asyncToGenerator = tmp6;
  const bottom = projectId(navigation[15])().bottom;
  let tmp7 = conjurePreviewAddBotPrompt(bottom);
  const tmp8 = projectId(navigation[16])();
  let tmp9 = stateFromStores;
  [tmp11, tmp12] = stateFromStores(previewAppId.useState(0), 2);
  const tmp10 = stateFromStores(previewAppId.useState(0), 2);
  let tmp13 = guildId(navigation[17]);
  let items = [canAnnotate, , , ];
  const useKeyboardHandler = tmp13.useKeyboardHandler;
  items[1] = guildId(navigation[18]).scheduleOnRN;
  items[2] = tmp12;
  items[3] = bottom;
  let c0;
  let c1;
  let c2;
  [tmp14, tmp15, tmp16, tmp17] = items;
  let obj3 = { onEnd: ConjureChatSceneTsx1 };
  class ConjureChatSceneTsx1 {
    constructor(height) {
      _undefined(c1, Math.max(0, height.height - c2));
    }
  }
  let items1 = [tmp15, tmp16, tmp17];
  ConjureChatSceneTsx1.__closure = items1;
  ConjureChatSceneTsx1.__workletHash = 12344605944798;
  ConjureChatSceneTsx1.__initData = tmp14;
  let items2 = [bottom];
  useKeyboardHandler(obj3, items2);
  const items3 = [frameSurfaceOptions];
  const items4 = [projectId];
  const tmpResult = tmp(tmp2[19]);
  stateFromStores = tmpResult.useStateFromStores(items3, () => {
    let project = ConjureProjectStore.getProject(projectId);
    if (project == null) {
      project = null;
    }
    return project;
  }, items4);
  const tmpResult25 = tmp(tmp2[20]);
  const trackConjureBuilderOpened = tmpResult25.useTrackConjureBuilderOpened(projectId, entryPoint);
  const items5 = [frameSurfaceOptions];
  const items6 = [projectId];
  const tmpResult26 = tmp(tmp2[19]);
  const stateFromStoresObject = tmpResult26.useStateFromStoresObject(items5, () => {
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
  }, items6);
  ({ projectExists, projectName, projectGuildId, previewAppId } = stateFromStoresObject);
  const projectUnavailable = stateFromStoresObject.projectUnavailable;
  const items7 = [frameSurfaceOptions];
  const items8 = [guildId, tmp6];
  const tmpResult27 = tmp(tmp2[19]);
  let stateFromStores1 = tmpResult27.useStateFromStores(items7, () => {
    let ownedProjectsFetchState;
    if (closure_3) {
      ownedProjectsFetchState = obj.getOwnedProjectsFetchState();
    } else {
      ownedProjectsFetchState = obj.getGuildProjectsFetchState(guildId);
    }
    return "unattempted" === ownedProjectsFetchState || "loading" === ownedProjectsFetchState;
  }, items8);
  if (!stateFromStores1) {
    stateFromStores1 = null != context && !projectExists && !projectUnavailable;
    const tmp24 = null != context && !projectExists && !projectUnavailable;
  }
  const items9 = [tmp19, frameSurface];
  const items10 = [projectId];
  const tmpResult28 = tmp(tmp2[19]);
  const stateFromStores2 = tmpResult28.useStateFromStores(items9, () => {
    let integrationStatus = ConjureProjectStore.getIntegrationStatus(projectId);
    const tmp = projectId;
    if (integrationStatus == null) {
      integrationStatus = ConjureLastIntegrationStatusStore.getIntegrationStatus(tmp);
    }
    return integrationStatus;
  }, items10);
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
  const useApplication = tmp(tmp2[22]).useApplication;
  tmp(tmp2[22]);
  isLoading = useApplication(previewAppId).isLoading;
  const items11 = [appChannel];
  const items12 = [projectId];
  const tmpResult30 = tmp(tmp2[19]);
  stateFromStores3 = tmpResult30.useStateFromStores(items11, () => {
    const publishStatus = ConjurePublishStatusStore.getPublishStatus(projectId);
    let previewAppChannels;
    if (publishStatus != null) {
      previewAppChannels = publishStatus.previewAppChannels;
    }
    return previewAppChannels;
  }, items12);
  if (stateFromStores3 == null) {
    let preview_app_channels;
    if (stateFromStores2 != null) {
      preview_app_channels = stateFromStores2.preview_app_channels;
    }
    stateFromStores3 = preview_app_channels;
  }
  let obj4 = { applicationId: previewAppId, previewApplicationId: previewAppId, declaredActivity: true === has_activity, previewSupportedSurfaces: prop, installScope: install_scope, ownerAuthorizationRevoked: true === prop1, mainCardOnly: true, previewAppChannels: stateFromStores3 };
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
  const conjurePreviewMode = useConjurePreviewMode(obj4);
  availability = conjurePreviewMode.availability;
  activeMode = conjurePreviewMode.activeMode;
  setMode = conjurePreviewMode.setMode;
  frameSurface = conjurePreviewMode.frameSurface;
  frameSurfaceOptions = conjurePreviewMode.frameSurfaceOptions;
  setFrameSurface = conjurePreviewMode.setFrameSurface;
  appChannel = conjurePreviewMode.appChannel;
  setAppChannel = conjurePreviewMode.setAppChannel;
  ({ frameLaunchParams, widgetApplicationId, isResolving } = conjurePreviewMode);
  const tmpResult32 = tmp(tmp2[24]);
  const conjurePreviewModeRequests = tmpResult32.useConjurePreviewModeRequests(projectId, (arg0) => {
    const modes = availability.modes;
    if (modes.includes(arg0)) {
      setMode(arg0);
    }
  });
  const tmpResult33 = tmp(tmp2[25]);
  const conjureTraceRequests = tmpResult33.useConjureTraceRequests(projectId, () => {
    const obj = { projectId };
    return navigation.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, obj);
  });
  const items13 = [projectId, tmp6];
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
  }, items13);
  let tmp40 = null != previewAppId && null != tmp4(tmp2[27])(previewAppId);
  const tmpResult34 = tmp(tmp2[28]);
  let result = tmpResult34.conjureInstallGuildId(stateFromStores, guildId);
  c16 = result;
  const items14 = [result, previewAppId, stateFromStores, projectId];
  onAddBot = obj2.useCallback(_asyncToGenerator(async (arg0, value) => {
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
            applicationId: closure_130_5,
            application,
            guildId: closure_130_16,
            onClose() {
                    let obj = c0(navigation[28]);
                    const result = obj.repairConjureGuildHints(closure_1_4, closure_1_16);
                    const cleanupPromise = result.finally(() => {
                      const obj = application(closure_2_2[21]);
                      return obj.getProject(closure_1_1);
                    });
                    cleanupPromise.catch(() => {

                    });
                  }
          };
          const openConjureAppInstallModal = tmp(navigation[29]).openConjureAppInstallModal;
          const tmp22 = tmp(navigation[29]);
          const application1 = application2.getApplication(closure_130_5);
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
  }), items14);
  [tmp46, tmp47] = tmp9(obj2.useState(true), 2);
  c18 = tmp47;
  tmp9(obj2.useState(true), 2);
  [tmp49, tmp50] = tmp9(obj2.useState(false), 2);
  let tmp51 = null;
  const useState = obj2.useState;
  tmp9(obj2.useState(false), 2);
  const tmp43 = _asyncToGenerator;
  if (null != stateFromStores2) {
    tmp51 = tmp41;
  }
  [tmp53, tmp54] = tmp9(useState(tmp51), 2);
  tmp9(useState(tmp51), 2);
  [tmp56, tmp57] = tmp9(obj2.useState(null), 2);
  tmp9(obj2.useState(null), 2);
  const tmp9Result8 = tmp9(obj2.useState(projectId), 2);
  if (tmp9Result8[0] !== projectId) {
    tmp9Result8[1](projectId);
    tmp47(true);
    tmp50(false);
    tmp54(null);
    tmp57(null);
  }
  const tmpResult35 = tmp(tmp2[30]);
  conjurePreviewAddBotPrompt = tmpResult35.useConjurePreviewAddBotPrompt(projectId, guildId);
  const tmp66 = null != conjurePreviewAddBotPrompt && (true === preview_ready && null != previewAppId && !isResolving && availability.modes.length > 0) && conjurePreviewAddBotPrompt.prompt.id !== tmp56;
  if (tmp66) {
    tmp57(conjurePreviewAddBotPrompt.prompt.id);
    tmp47(false);
  }
  const tmp69 = true === preview_ready && null != previewAppId && !isResolving && availability.modes.length > 0 && !tmp46;
  closure_20 = tmp69;
  let hasItem = tmp64;
  const tmpResult36 = tmp(tmp2[31]);
  const conjureAgentNeedsPreview = tmpResult36.useConjureAgentNeedsPreview(projectId);
  if (true === preview_ready && null != previewAppId && !isResolving && availability.modes.length > 0) {
    hasItem = tmp40;
  }
  if (hasItem) {
    let modes = availability.modes;
    hasItem = modes.includes("frame");
  }
  let tmp72 = hasItem && tmp69;
  if (tmp72) {
    tmp72 = "frame" === activeMode;
  }
  if (tmp72) {
    tmp72 = null == conjurePreviewAddBotPrompt;
  }
  canAnnotate = tmp72;
  if (hasItem) {
    let tmp73 = tmp49 || tmp72 || conjureAgentNeedsPreview;
    hasItem = tmp73;
  }
  const tmp74 = hasItem && !tmp49;
  if (tmp74) {
    tmp50(true);
  }
  let obj5 = { installScope: install_scope, previewReady: tmp41, integrationInstalled: prop2 };
  prop2 = undefined;
  const previewBotInstallBlocksMode = tmp(tmp2[32]).previewBotInstallBlocksMode;
  tmp(tmp2[32]);
  if (stateFromStores2 != null) {
    prop2 = stateFromStores2.integration_installed;
  }
  if (prop2 == null) {
    prop2 = null;
  }
  result1 = previewBotInstallBlocksMode(activeMode, obj5);
  const items15 = [conjurePreviewAddBotPrompt, result1, onAddBot, isLoading];
  const memo = obj2.useMemo(() => {
    let obj3;
    let tmp3;
    if (null != conjurePreviewAddBotPrompt) {
      const obj2 = { onAddBot: conjurePreviewAddBotPrompt.onAddBot, loading: conjurePreviewAddBotPrompt.adding || isLoading, agentPrompt: obj3 };
      tmp3 = obj2;
      obj3 = { reason: conjurePreviewAddBotPrompt.prompt.reason, onSkip: conjurePreviewAddBotPrompt.onSkip };
    } else {
      tmp3 = null;
      if (result1) {
        tmp3 = { onAddBot, loading: isLoading };
        const obj = { onAddBot, loading: isLoading };
      }
    }
    return tmp3;
  }, items15);
  const items16 = [result1, tmp69, , , ];
  let tmp81 = tmp69;
  const useAnimatedStyle = tmp(tmp2[33]).useAnimatedStyle;
  tmp(tmp2[33]);
  if (tmp69) {
    tmp81 = "bot" === activeMode;
  }
  items16[2] = tmp81;
  items16[3] = tmp8;
  items16[4] = bottom;
  [tmp82, tmp83, tmp84, tmp85, tmp86] = items16;
  class ConjureChatSceneTsx2 {
    constructor() {
      let paddingBottom = 0;
      if (guildId) {
        paddingBottom = 0;
        if (!projectId) {
          const _Math = Math;
          paddingBottom = Math.max(navigation.get(), closure_1_3);
        }
      }
      return { paddingBottom };
    }
  }
  const items17 = [tmp83, tmp84, tmp85, tmp86];
  ConjureChatSceneTsx2.__closure = items17;
  ConjureChatSceneTsx2.__workletHash = 8818171941973;
  ConjureChatSceneTsx2.__initData = tmp82;
  const animatedStyle = useAnimatedStyle(ConjureChatSceneTsx2);
  const items18 = [memo1, tmp69, tmp8, bottom];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp88, tmp89, tmp90, tmp91] = items18;
  const tmpResult39 = tmp(tmp2[33]);
  class ConjureChatSceneTsx3 {
    constructor() {
      let items;
      let num = 0;
      if (!c0) {
        const _Math = Math;
        num = -Math.max(0, _undefined.get() - c2);
      }
      const obj = { transform: items };
      items = [{ translateY: num }];
      return obj;
    }
  }
  const items19 = [tmp89, tmp90, tmp91];
  ConjureChatSceneTsx3.__closure = items19;
  ConjureChatSceneTsx3.__workletHash = 6849996535358;
  ConjureChatSceneTsx3.__initData = tmp88;
  const items20 = [availability.modes, frameSurfaceOptions, stateFromStores3];
  const animatedStyle1 = tmpResult39.useAnimatedStyle(ConjureChatSceneTsx3);
  memo1 = obj2.useMemo(() => {
    const obj = conjurePreviewTargets;
    return obj.previewTargets(availability.modes, frameSurfaceOptions, stateFromStores3);
  }, items20);
  const items21 = [activeMode, frameSurface, appChannel];
  memo2 = obj2.useMemo(() => {
    const obj = conjurePreviewTargets;
    return obj.activePreviewTarget(activeMode, frameSurface, appChannel);
  }, items21);
  let intl = tmp(tmp2[35]).intl;
  const stringResult = intl.string(tmp4(tmp2[36])["N+VA1J"]);
  c25 = stringResult;
  const items22 = [memo2, availability.modes.length, stringResult, tmp69];
  const memo3 = obj2.useMemo(() => {
    let intl;
    let items2;
    const obj = { id: "chat", label: intl.string(_modDef4190["1HH2p9"]), page: null };
    intl = intl8.intl;
    const items = [obj];
    if (availability.modes.length > 0) {
      const tmp4 = closure_20;
      if (tmp4) {
        let previewTargetLabel;
        if (null != memo2) {
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
  }, items22);
  let tmp97 = null != memo2;
  const callback1 = obj2.useCallback((arg0) => {
    metroImportDefault.dismiss();
    _undefined(0 === arg0);
  }, []);
  if (tmp97) {
    let num = 1;
    tmp97 = memo1.length > 1;
  }
  closure_26 = tmp97;
  const items23 = [memo2, tmp97, stringResult, tmp69, setAppChannel, setFrameSurface, setMode, memo1];
  let first = availability.modes[0];
  let tmp100 = null != stateFromStores2;
  const memo4 = obj2.useMemo(() => {
    let fn;
    let fn2;
    let intl;
    let target;
    let targets;
    let tmp;
    if (null != memo2) {
      let tmp3;
      if (closure_20) {
        tmp3 = c25;
      }
      let obj = { prefix: tmp3, renderTrailingIcon: fn, menuLabel: intl.string(_modDef4190.I2ucou), onShowMenu: fn2 };
      fn = undefined;
      if (closure_20) {
        if (closure_26) {
          fn = (color) => {
            const obj = { size: "xs", color };
            return closure_1_16(guildId(navigation[37]).ChevronSmallDownIcon, obj);
          };
        }
      }
      intl = intl8.intl;
      fn2 = undefined;
      if (closure_26) {
        fn2 = () => {
          let obj = {
            targets,
            target,
            onChange(mode) {
              const obj = guildId(navigation[34]);
              const previewTarget = obj.selectPreviewTarget(mode, closure_1_10, closure_1_13, closure_1_15);
              closure_1_18(false);
            }
          };
          return projectId(navigation[38])(obj);
        };
      }
      tmp = { preview: obj };
      const obj2 = { preview: obj };
    }
    return tmp;
  }, items23);
  if (tmp100) {
    tmp100 = tmp41 !== tmp53;
  }
  if (tmp100) {
    const tmp101 = false === tmp53 && true === preview_ready && null != first;
    if (tmp101) {
      setMode(first);
      tmp47(false);
    }
    tmp54(true === preview_ready);
  }
  const width = tmp4(tmp2[39])().width;
  let obj6 = { items: memo3, pageWidth: width - 2 * closure_20, onSetActiveIndex: callback1 };
  const tmpResult40 = tmp(tmp2[40]);
  const segmentedControlState = tmpResult40.useSegmentedControlState(obj6);
  if (tmp46) {
    num2 = 0;
  } else {
    num2 = 1;
  }
  activeIndex = segmentedControlState.activeIndex;
  setActiveIndex = segmentedControlState.setActiveIndex;
  const items24 = [num2, activeIndex, setActiveIndex];
  const effect1 = obj2.useEffect(() => {
    if (activeIndex.get() !== num2) {
      setActiveIndex(tmp, false);
    }
  }, items24);
  const items25 = [previewAppId];
  const layoutEffect = obj2.useLayoutEffect(() => {
    if (null != previewAppId) {
      let obj = ConjurePreviewActionCreators;
      const result = obj.setBuilderPreviewApplicationId(tmp);
      return () => {
        const obj = guildId(navigation[41]);
        return obj.setBuilderPreviewApplicationId(null);
      };
    }
  }, items25);
  const items26 = [previewAppId];
  const effect2 = obj2.useEffect(() => null != previewAppId ? (() => projectId(navigation[42])(previewAppId)) : undefined, items26);
  ({ publishOptions, publish, indicator, hint, text, pendingChanges } = tmp4(tmp2[43])(projectId, guildId));
  tmp4(tmp2[43])(projectId, guildId);
  closure_30 = tmp4(tmp2[44])(projectId, publish, publishOptions);
  const tmp110 = tmp4(tmp2[45])(stateFromStores);
  canShare = tmp4(tmp2[46])(projectId).canShare;
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items27 = [projectId, projectGuildId];
  callback2 = obj2.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { content: authStore3(ConjureSettingsSheetDefault, obj2), key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY };
    obj2 = { projectId, guildId: projectGuildId, isPreview: true };
    showActionSheet(obj);
  }, items27);
  const items28 = [guildId, navigation, tmp6];
  memo5 = obj2.useMemo(() => {
    let openHere;
    const tmp = closure_3;
    if (tmp) {
      openHere = function openHere(projectId) {
        const obj = { projectId, entryPoint: "remix" };
        closure_1_2.push(guildId(navigation[26]).ConjureScreenScenes.CHAT, obj);
      };
    } else {
      let obj = conjureStandaloneScenes;
      openHere = obj.projectOpener(guildId, (arg0) => {
        const obj = guildId(navigation[26]);
        return obj.pushServerProjectScreen(closure_1_0, arg0, "remix");
      });
    }
    return openHere;
  }, items28);
  const items29 = [guildId, memo5, stateFromStores];
  const items30 = [projectId];
  const callback3 = obj2.useCallback(() => {
    let obj2;
    if (null != stateFromStores) {
      const obj = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: authStore3(ConjureRemixSheetDefault, obj2) };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      obj2 = { project: tmp, currentGuildId: guildId, onRemixed: memo5 };
      showActionSheet(obj);
    }
  }, items29);
  callback4 = obj2.useCallback(() => {
    const obj = { projectId };
    return openConjureShareSheetDefault(obj);
  }, items30);
  const items31 = [projectId];
  callback5 = obj2.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: ConjureConnectToolSheet.CONJURE_CONNECT_TOOL_SHEET_KEY, content: authStore3(ConjureConnectToolSheetDefault, obj2) };
    obj2 = { projectId };
    showActionSheet(obj);
  }, items31);
  closure_37 = obj2.useRef(false);
  const useCallback = obj2.useCallback;
  _require = tmp43(function*(arg0, value) {
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
        const obj6 = { text: intl2.string(projectId(navigation[36]).qqlUiW), icon: closure_0(navigation[53]).UndoIcon };
        const open = projectId(navigation[52]).open;
        const tmp40 = projectId(navigation[52]);
        intl2 = closure_0(navigation[35]).intl;
        open("CONJURE_VERSION_RESTORING", obj6);
        let c5 = 2;
        c6 = 4;
        c7 = 1;
        const obj8 = { value: obj7.restoreSourceHistoryEntry(closure_1, closure_0.sha), done: false };
        obj7 = closure_0(navigation[54]);
        return obj8;
      }
    } else if (2 === c6) {
      c5 = 0;
      ref.current = false;
      throw closure_4;
    } else if (3 === c6) {
      const presentError = closure_0(navigation[55]).presentError;
      const tmp23 = closure_0(navigation[55]);
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
          const obj11 = { text: formatToPlainString(Z4n6LX, obj13), icon: closure_0(navigation[53]).UndoIcon };
          const open2 = projectId(navigation[52]).open;
          const tmp73 = projectId(navigation[52]);
          const intl3 = closure_0(navigation[35]).intl;
          formatToPlainString = intl3.formatToPlainString;
          obj13 = { title: obj15.versionTitle(closure_0.subject).short };
          Z4n6LX = projectId(navigation[36]).Z4n6LX;
          obj15 = closure_0(navigation[56]);
          open2("CONJURE_VERSION_RESTORED", obj11);
          if (null != c1) {
            c6 = 5;
            c7 = 1;
            const obj14 = { value: obj2.rewindDataAfterVersionRestore(closure_1, c1), done: false };
            obj2 = closure_0(navigation[57]);
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
          const obj12 = closure_0(navigation[55]);
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
    return "Path";
  });
  const items32 = [projectId];
  callback6 = useCallback(function() {
    return closure_0(...arguments);
  }, items32);
  const items33 = [callback6, projectId];
  callback7 = obj2.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: ConjureHistorySheet.CONJURE_HISTORY_SHEET_KEY, content: authStore3(ConjureHistorySheetDefault, obj2) };
    obj2 = { projectId, onRestoreVersion: callback6 };
    showActionSheet(obj);
  }, items33);
  const tmpResult41 = tmp(tmp2[59]);
  conjureDebugPaneEnabled = tmpResult41.useConjureDebugPaneEnabled();
  const tmpResult42 = tmp(tmp2[60]);
  isConjureMcpUiEnabled = tmpResult42.useIsConjureMcpUiEnabled("ConjureChatScene");
  const items34 = [navigation, projectId];
  callback8 = obj2.useCallback(() => {
    const obj = { projectId };
    return navigation.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, obj);
  }, items34);
  const items35 = [frameSurface];
  const memo6 = obj2.useMemo(() => {
    const obj = conjurePreviewSurface;
    return obj.getConjurePreviewSurface(undefined, frameSurface);
  }, items35);
  const tmp122 = setAppChannel(tmp4(tmp2[62])(previewAppId, memo6));
  closure_43 = tmp122;
  const items36 = [previewAppId];
  callback9 = obj2.useCallback(() => {
    if (null != previewAppId) {
      const obj = restartFrames;
      obj.restartAppFrames(tmp);
    }
  }, items36);
  const tmpResult43 = tmp(tmp2[64]);
  key = tmpResult43.useRoute().key;
  let tmp124;
  const tmpResult44 = tmp(tmp2[64]);
  if (tmpResult44.useNavigationState((arg0) => {
    const first = arg0.routes[0];
    key = undefined;
    if (first != null) {
      key = first.key;
    }
    return key === key;
  })) {
    tmp124 = onExit;
  }
  onExit = tmp124;
  const items37 = [tmp124, navigation];
  callback10 = obj2.useCallback(() => {
    if (null != onExit) {
      tmp();
    } else {
      navigation.goBack();
    }
  }, items37);
  const items38 = [callback10, projectId];
  callback11 = obj2.useCallback(() => {
    closeConnection(projectId);
    callback10();
  }, items38);
  const items39 = [tmp19];
  const items40 = [projectId];
  const tmpResult45 = tmp(tmp2[19]);
  stateFromStores4 = tmpResult45.useStateFromStores(items39, () => ConjureProjectStore.isProjectDeleting(projectId), items40);
  const items41 = [stateFromStores4, callback11, projectId, tmp6, navigation];
  const effect3 = obj2.useEffect(() => {
    let index;
    let routes;
    let tmp = stateFromStores4;
    if (tmp) {
      let findLastResult;
      let tmp16;
      let tmp5 = null;
      const tmp2 = projectId;
      if (closure_3) {
        tmp5 = navigation;
      }
      const obj = RootNavigationRef;
      const rootNavigationRef = obj.getRootNavigationRef();
      let rootState;
      if (rootNavigationRef != null) {
        rootState = rootNavigationRef.getRootState();
      }
      if (rootState != null) {
        const routes1 = rootState.routes;
        const substr = routes1.slice(0, rootState.index + 1);
        findLastResult = substr.findLast((name) => "modal" !== name.name);
      }
      if (null != tmp5) {
        let name;
        if (findLastResult != null) {
          name = findLastResult.name;
        }
        tmp16 = "conjure" === name && tmp5.isFocused();
        "conjure" === name && tmp5.isFocused();
      } else {
        const tmp6Result = NavigationRouteUtils;
        const coerceMainRouteResult = tmp6Result.coerceMainRoute(findLastResult);
        let state;
        if (coerceMainRouteResult != null) {
          state = coerceMainRouteResult.state;
        }
        let tmp13;
        const coerceChannelRoute = NavigationRouteUtils.coerceChannelRoute;
        NavigationRouteUtils;
        if (state != null) {
          ({ index, routes } = state);
          if (index == null) {
            index = 0;
          }
          tmp13 = routes[index];
        }
        const coerceChannelRouteResult = coerceChannelRoute(tmp13);
        let subRouteId;
        if (coerceChannelRouteResult != null) {
          subRouteId = coerceChannelRouteResult.params.subRouteId;
        }
        tmp16 = subRouteId === tmp2;
      }
      tmp = tmp16;
    }
    if (tmp) {
      callback11();
    }
  }, items41);
  let obj7 = { projectId, refreshApplicationId: tmp130 };
  const modes2 = availability.modes;
  tmp130 = null;
  const tmp4Result = tmp4(tmp2[65]);
  if (modes2.includes("widget")) {
    tmp130 = null;
    if ("unavailable-authorization-revoked" !== availability.profileState) {
      tmp130 = widgetApplicationId;
    }
  }
  const tmp4ResultResult = tmp4Result(obj7);
  preview = tmp4ResultResult;
  const tmpResult46 = tmp(tmp2[66]);
  conjureRemoveTarget = tmpResult46.useConjureRemoveTarget(projectId);
  const effect4 = obj2.useEffect(() => () => {
    const obj = projectId(navigation[47]);
    return obj.hideActionSheet(guildId(navigation[67]).CONJURE_CHAT_MORE_SHEET_KEY);
  }, []);
  const items42 = [canShare, conjureDebugPaneEnabled, tmp72, guildId, callback5, callback8, callback7, callback2, callback4, callback9, isConjureMcpUiEnabled, tmp122, tmp4ResultResult, stateFromStores, conjureRemoveTarget];
  const callback12 = obj2.useCallback(() => {
    let obj2;
    let tmp15;
    let tmp17;
    let tmp2;
    let tmp4;
    let tmp7;
    let tmp9;
    if (null != stateFromStores) {
      const obj = { key: ConjureChatMoreSheet.CONJURE_CHAT_MORE_SHEET_KEY, content: tmp15(tmp17, obj2) };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      obj2 = { project: tmp, guildId, removeTarget: conjureRemoveTarget, canAnnotate, onOpenSettings: callback2, onShare: tmp2, onRefresh: tmp4, onHistory: callback7, onDebug: tmp7, onConnectTool: tmp9, preview };
      tmp2 = undefined;
      tmp15 = authStore3;
      tmp17 = ConjureChatMoreSheetDefault;
      if (canShare) {
        tmp2 = callback4;
      }
      tmp4 = undefined;
      if (closure_43) {
        tmp4 = callback9;
      }
      tmp7 = undefined;
      if (conjureDebugPaneEnabled) {
        tmp7 = callback8;
      }
      tmp9 = undefined;
      if (isConjureMcpUiEnabled) {
        tmp9 = callback5;
      }
      showActionSheet(obj);
    }
  }, items42);
  if (projectName == null) {
    let intl2 = tmp(tmp2[35]).intl;
    if (!projectExists) {
      let uk6jhJ;
      if (!stateFromStores1) {
        uk6jhJ = tmp4(tmp2[36]).G1WwgK;
      }
      projectName = tmp135(uk6jhJ);
    }
    uk6jhJ = tmp4(tmp2[36]).uk6jhJ;
  }
  let tmp138 = null;
  if (null != tmp124) {
    let obj8 = { onExit: tmp124 };
    tmp138 = c16(memo2, obj8);
  }
  const items43 = [tmp138, ];
  let obj9 = { onBack: callback10, showBorder: tmp143, title: c16(tmp4Result7, { project: tmp145, title: projectName, onPressIcon: callback2, draft: pendingChanges }), actions: tmp136Result };
  tmp143 = !tmp64;
  const tmp4Result6 = tmp4(tmp2[68]);
  if (true === preview_ready && null != previewAppId && !isResolving && availability.modes.length > 0) {
    tmp143 = !projectExists;
  }
  tmp145 = null;
  tmp4Result7 = tmp4(tmp2[69]);
  if (projectExists) {
    tmp145 = stateFromStores;
  }
  tmp136Result = null;
  if (projectExists) {
    let tmp141Result = null;
    if (null != stateFromStores) {
      tmp141Result = null;
      if (tmp110) {
        tmp141Result = null;
        if (setFrameSurface(stateFromStores)) {
          let obj10 = { IconComponent: tmp(tmp2[71]).PaperPlusIcon, onPress: callback3, accessibilityLabel: intl3.string(tmp4(tmp2[36]).XWgAfc) };
          const tmp4Result8 = tmp4(tmp2[70]);
          intl3 = tmp(tmp2[35]).intl;
          tmp141Result = tmp141(tmp4Result8, obj10);
        }
      }
    }
    const items44 = [tmp141Result, , ];
    let tmp141Result8 = null;
    if (null != publish) {
      let obj11 = {
        IconComponent: tmp(tmp2[72]).UploadIcon,
        onPress() {
              return closure_30("header");
            },
        disabled: "publishing" === indicator,
        dimmed: null == indicator,
        accessibilityLabel: text,
        accessibilityHint: hint,
        badge: tmp141Result7,
        badgeSize: result2
      };
      tmp141Result7 = undefined;
      const tmp4Result9 = tmp4(tmp2[70]);
      if (null != indicator) {
        let obj12 = { indicator };
        tmp141Result7 = tmp141(tmp4(tmp2[73]), obj12);
      }
      result2 = undefined;
      if (null != indicator) {
        const tmpResult47 = tmp(tmp2[73]);
        result2 = tmpResult47.conjurePublishBadgeSize(indicator);
      }
      tmp141Result8 = tmp141(tmp4Result9, obj11);
    }
    let obj13 = { children: items44 };
    items44[1] = tmp141Result8;
    let obj14 = { IconComponent: tmp(tmp2[74]).MoreHorizontalIcon, onPress: callback12, accessibilityLabel: intl4.string(tmp(tmp2[35]).t["UKOtz+"]) };
    const tmp4Result10 = tmp4(tmp2[70]);
    intl4 = tmp(tmp2[35]).intl;
    items44[2] = c16(tmp4Result10, obj14);
    tmp136Result = tmp136(tmp137, obj13);
  }
  let obj15 = { children: items43 };
  items43[1] = c16(tmp4Result6, obj9);
  const tmp136Result3 = c18(onAddBot, obj15);
  let routeFocused;
  const tmpResult48 = tmp(tmp2[64]);
  const isFocused = tmpResult48.useIsFocused();
  if (context != null) {
    routeFocused = context.routeFocused;
  }
  closure_52 = tmp158;
  const items45 = [true === routeFocused && isFocused, projectId];
  const effect5 = obj2.useEffect(() => {
    if (closure_52) {
      let obj = ConjureActionCreators;
      const globalChatProject = obj.selectGlobalChatProject(projectId);
      return () => {
        const obj = guildId(navigation[21]);
        return obj.clearGlobalChatProject(projectId);
      };
    }
  }, items45);
  const items46 = [guildId, projectId, tmp6];
  const effect6 = obj2.useEffect(() => {
    if (!closure_3) {
      let obj = ConjureActionCreators;
      const result = obj.setSelectedProjectForGuild(guildId, projectId);
      return () => {
        const obj = guildId(navigation[21]);
        return obj.setSelectedProjectForGuild(closure_1_0, null);
      };
    }
  }, items46);
  if (projectExists) {
    const obj16 = { style: items47, children: items48 };
    items47 = [tmp7.contentBare, animatedStyle];
    const View = tmp4(tmp2[33]).View;
    items48 = [c16(tmp4(tmp2[75]), { absolute: true, mix: true }), tmp136Result3, , ];
    let tmp141Result9 = null;
    if (true === preview_ready && null != previewAppId && !isResolving && availability.modes.length > 0) {
      const obj17 = { style: tmp7.segments, children: c16(tmp4(tmp2[78]), obj18) };
      obj18 = { state: segmentedControlState, extras: memo4 };
      tmp141Result9 = tmp141(availability, obj17);
    }
    items48[2] = tmp141Result9;
    let tmp141Result10 = null;
    const obj19 = { style: tmp7.panes, children: items49 };
    if (hasItem) {
      tmp141Result10 = null;
      if (null != previewAppId) {
        const obj20 = { style: tmp72 ? tmp7.pane : tmp7.paneBackstage, pointerEvents: str6, accessibilityElementsHidden: !tmp72, importantForAccessibility: str7, children: c16(tmp(tmp2[79]).PreviewFrame, obj21) };
        str6 = "none";
        if (tmp72) {
          str6 = "auto";
        }
        str7 = "no-hide-descendants";
        if (tmp72) {
          str7 = "auto";
        }
        obj21 = { applicationId: previewAppId, projectId, frameSurface, launch: frameLaunchParams, visible: tmp72 };
        tmp141Result10 = tmp141(tmp167, obj20);
      }
    }
    items49 = [tmp141Result10, , ];
    let tmp141Result11 = null;
    if (tmp69) {
      tmp141Result11 = null;
      if (null != previewAppId) {
        tmp141Result11 = null;
        if (!tmp72) {
          const obj22 = { style: tmp7.pane, children: c16(tmp4(tmp2[79]), obj23) };
          obj23 = { projectId, previewApplicationId: previewAppId, mode: activeMode, availability, frameSurface, frameLaunchParams, widgetApplicationId, frameHostAvailable: tmp40, botInstall: memo };
          tmp141Result11 = tmp141(tmp167, obj22);
        }
      }
    }
    items49[1] = tmp141Result11;
    const items50 = [tmp7.chatPane, , ];
    let paneHidden = tmp69;
    const View2 = tmp4(tmp2[33]).View;
    if (tmp69) {
      paneHidden = tmp7.paneHidden;
    }
    items50[1] = paneHidden;
    items50[2] = animatedStyle1;
    const obj24 = { style: items50, children: c16(Provider, obj25) };
    obj25 = { value: publishOptions, children: c16(Provider2, obj26) };
    Provider = tmp(tmp2[80]).ConjurePublishActionContext.Provider;
    obj26 = { value: projectId, children: c16(tmp4(tmp2[82]), obj27) };
    Provider2 = tmp(tmp2[81]).ConjureFileMentionProjectContext.Provider;
    obj27 = { projectId, transcriptTopInset: tmp11, onRestoreVersion: callback6, hidden: tmp69 };
    items49[2] = c16(View2, obj24);
    items48[3] = c18(availability, obj19);
    tmp136Result4 = tmp136(View, obj16);
  } else {
    const obj28 = { style: tmp7.contentBare, children: items51 };
    items51 = [c16(tmp4(tmp2[75]), { absolute: true, mix: true }), tmp136Result3, ];
    const obj29 = { style: items52, children: tmp141Result12 };
    items52 = [, ];
    ({ content: arr50[0], centered: arr50[1] } = tmp7);
    if (stateFromStores1) {
      tmp141Result12 = tmp141(isLoading, {});
    } else {
      const obj30 = { style: tmp7.listError, children: items53 };
      const obj31 = { variant: "heading-lg/semibold", color: "text-default", children: intl5.string(tmp4(tmp2[36]).G1WwgK) };
      const Text = tmp(tmp2[76]).Text;
      intl5 = tmp(tmp2[35]).intl;
      items53 = [c16(Text, obj31), , ];
      const obj32 = { variant: "body-md/normal", color: "text-muted", children: intl6.string(tmp4(tmp2[36]).fINulo) };
      const Text2 = tmp(tmp2[76]).Text;
      intl6 = tmp(tmp2[35]).intl;
      items53[1] = c16(Text2, obj32);
      const obj33 = {
        variant: "secondary",
        size: "sm",
        text: intl7.string(tmp4(tmp2[36])["WFJ/vb"]),
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
      const Button = tmp(tmp2[77]).Button;
      intl7 = tmp(tmp2[35]).intl;
      items53[2] = c16(Button, obj33);
      tmp141Result12 = tmp136(tmp161, obj30);
    }
    items51[2] = c16(availability, obj29);
    tmp136Result4 = tmp136(tmp161, obj28);
  }
  return tmp136Result4;
};
