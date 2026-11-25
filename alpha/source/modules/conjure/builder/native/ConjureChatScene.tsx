// Module ID: 18386
// Function ID: 18387
// Name: ConjureChatScene
// Dependencies: [5, 32, 19, 17, 2164, 1386, 7662, 7637, 6903, 7675, 6906, 21, 5012, 575, 1500, 18387, 1628, 18388, 1642, 1706, 504, 18389, 7636, 6940, 18390, 14694, 18392, 18393, 5653, 11413, 7693, 18394, 18395, 11410, 1653, 18396, 1112, 4244, 9774, 18398, 1494, 8574, 7691, 7658, 18399, 18404, 18433, 18434, 5226, 18435, 11404, 18497, 18507, 5694, 16644, 18511, 5693, 18513, 18514, 18516, 18530, 18531, 7646, 14012, 14019, 1501, 18532, 12459, 18535, 18544, 18545, 18546, 11402, 9660, 18547, 7711, 10546, 5603, 5610, 18548, 18549, 11412, 18465, 18570, 5189, 5188, 7166, 2]
// Exports: default

// Module 18386 (ConjureChatScene)
import nativeDefault from "native" /* 575 */;
import intl9 from "intl" /* 1112 */;
import _modDef4244 from "module_4244" /* 4244 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5188 */;
import RootNavigationRef from "RootNavigationRef" /* 5189 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5226 */;
import ConjureProjectStore2 from "ConjureProjectStore" /* 6903 */;
import FramesConstants from "FramesConstants" /* 6906 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 7166 */;
import ConjureActionCreators from "ConjureActionCreators" /* 7636 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 7646 */;
import ConjureConnectionStore2 from "ConjureConnectionStore" /* 7662 */;
import ConjurePreviewActionCreators from "ConjurePreviewActionCreators" /* 7691 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 11404 */;
import restartFrames from "restartFrames" /* 14019 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 18393 */;
import conjurePreviewTargets from "conjurePreviewTargets" /* 18396 */;
import ConjureSettingsSheet from "ConjureSettingsSheet" /* 18435 */;
import openConjureShareSheetDefault from "openConjureShareSheet" /* 18497 */;
import ConjureConnectToolSheet from "ConjureConnectToolSheet" /* 18507 */;
import ConjureHistorySheet from "ConjureHistorySheet" /* 18516 */;
import ConjureChatMoreSheet from "ConjureChatMoreSheet" /* 18535 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationStore from "ApplicationStore" /* 2164 */;
import UserStore from "UserStore" /* 1386 */;
import ConjureLastIntegrationStatusStore from "ConjureLastIntegrationStatusStore" /* 7637 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 7675 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5012 */;
import size from "module_2" /* 2 */;

const ConjureRemixSheetDefault = ConjureRemixSheet;
const ConjureSettingsSheetDefault = ConjureSettingsSheet;
const ConjureConnectToolSheetDefault = ConjureConnectToolSheet;
const ConjureHistorySheetDefault = ConjureHistorySheet;
const ConjureChatMoreSheetDefault = ConjureChatMoreSheet;
const ConjureConnectionStore = ConjureConnectionStore2;
const ConjureProjectStore = ConjureProjectStore2;
let _require, c3, c4, c6, closure_0, navigation;

let closure_18;
let closure_19;
let closure_20;
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
const closeConnection = ConjureConnectionStore2.closeConnection;
const canRemixProject = ConjureProjectStore2.canRemixProject;
let isLaunched = FramesConstants.isLaunched;
({ jsx: closure_18, Fragment: closure_19, jsxs: closure_20 } = Fragment);
let closure_21 = createStyles.createStyles((paddingBottom) => {
  const obj = { content: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom }, contentBare: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, centered: { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 }, listError: { alignItems: "center", gap: nativeDefault.space.PX_12 }, segments: { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_4, paddingBottom: nativeDefault.space.PX_8, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.STANDALONE_CHANNEL_HEADER_BORDER }, panes: { flex: 1, overflow: "hidden" }, pane: { flex: 1 }, chatPane: { flex: 1, paddingBottom }, paneHidden: { display: "none" }, paneBackstage: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0 } };
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom });
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
  ({ flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 });
  ({ alignItems: "center", gap: nativeDefault.space.PX_12 });
  ({ paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_4, paddingBottom: nativeDefault.space.PX_8, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.STANDALONE_CHANNEL_HEADER_BORDER });
  return obj;
});
const PX_16 = nativeDefault.space.PX_16;
let closure_23 = { code: "(function ConjureChatSceneTsx1(e){let[scheduleOnRN,setChatKeyboardCover,safeAreaBottom]=this.__closure;scheduleOnRN(setChatKeyboardCover,Math.max(0,e.height-safeAreaBottom));})" };
let closure_24 = { code: "(function ConjureChatSceneTsx2(){let[previewShowing,botFaceShowing,keyboardHeight,safeAreaBottom]=this.__closure;return{paddingBottom:previewShowing&&!botFaceShowing?Math.max(keyboardHeight.get(),safeAreaBottom):0};})" };
let closure_25 = { code: "(function ConjureChatSceneTsx3(){let[previewShowing,keyboardHeight,safeAreaBottom]=this.__closure;return{transform:[{translateY:previewShowing?0:-Math.max(0,keyboardHeight.get()-safeAreaBottom)}]};})" };
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureChatScene.tsx");

export default function ConjureChatScene(guildId) {
  let Provider;
  let Provider2;
  let Text3;
  let _undefined;
  let c16;
  let c17;
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
  let intl8;
  let isResolving;
  let items50;
  let items51;
  let items52;
  let items53;
  let items54;
  let items55;
  let items57;
  let items58;
  let obj24;
  let obj27;
  let obj29;
  let obj31;
  let obj32;
  let obj33;
  let obj36;
  let obj37;
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
  let tmp134;
  let tmp14;
  let tmp140Result;
  let tmp140Result5;
  let tmp145Result7;
  let tmp145Result9;
  let tmp147;
  let tmp149;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp40;
  let tmp48;
  let tmp49;
  let tmp4Result7;
  let tmp51;
  let tmp52;
  let tmp55;
  let tmp56;
  let tmp58;
  let tmp59;
  let tmp84;
  let tmp85;
  let tmp86;
  let tmp87;
  let tmp88;
  let tmp90;
  let tmp91;
  let tmp92;
  let tmp93;
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
  c16 = undefined;
  isLaunched = undefined;
  let onAddBot;
  let c19;
  let conjurePreviewAddBotPrompt;
  closure_21 = undefined;
  let canAnnotate;
  let result1;
  let memo1;
  let memo2;
  let c26;
  let closure_27;
  let num2;
  let activeIndex;
  let setActiveIndex;
  let closure_31;
  let canShare;
  let stateFromStores4;
  let stateFromStores5;
  projectGuildId = undefined;
  let callback2;
  let memo5;
  let callback4;
  let callback5;
  let closure_40;
  let callback6;
  let callback7;
  let conjureDebugPaneEnabled;
  let isConjureMcpUiEnabled;
  let callback8;
  let closure_46;
  let callback9;
  let key;
  onExit = undefined;
  let callback10;
  let callback11;
  let stateFromStores6;
  let preview;
  let conjureRemoveTarget;
  let closure_55;
  let tmp = guildId;
  let tmp2 = navigation;
  ({ entryPoint, onExit } = guildId);
  let obj = guildId(navigation[14]);
  navigation = obj.useNavigation();
  let obj2 = previewAppId;
  let tmp4 = projectId;
  const context = previewAppId.useContext(projectId(navigation[15]));
  let tmp6 = null != context;
  _asyncToGenerator = tmp6;
  const bottom = projectId(navigation[16])().bottom;
  const tmp7 = closure_21(bottom);
  const tmp8 = projectId(navigation[17])();
  let tmp9 = stateFromStores;
  [tmp11, tmp12] = stateFromStores(previewAppId.useState(0), 2);
  const tmp10 = stateFromStores(previewAppId.useState(0), 2);
  let tmp13 = guildId(navigation[18]);
  let items = [result1, , , ];
  const useKeyboardHandler = tmp13.useKeyboardHandler;
  items[1] = guildId(navigation[19]).scheduleOnRN;
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
  let tmp19 = appChannel;
  const items3 = [appChannel];
  const items4 = [projectId];
  const tmpResult = tmp(tmp2[20]);
  stateFromStores = tmpResult.useStateFromStores(items3, () => {
    let project = ConjureProjectStore.getProject(projectId);
    if (project == null) {
      project = null;
    }
    return project;
  }, items4);
  const tmpResult27 = tmp(tmp2[21]);
  const trackConjureBuilderOpened = tmpResult27.useTrackConjureBuilderOpened(projectId, entryPoint);
  const items5 = [appChannel];
  const items6 = [projectId];
  const tmpResult28 = tmp(tmp2[20]);
  const stateFromStoresObject = tmpResult28.useStateFromStoresObject(items5, () => {
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
  const items7 = [appChannel];
  const items8 = [guildId, tmp6];
  const tmpResult29 = tmp(tmp2[20]);
  let stateFromStores1 = tmpResult29.useStateFromStores(items7, () => {
    let ownedProjectsFetchState;
    if (closure_3) {
      ownedProjectsFetchState = obj.getOwnedProjectsFetchState();
    } else {
      ownedProjectsFetchState = obj.getGuildProjectsFetchState(guildId);
    }
    return "unattempted" === ownedProjectsFetchState || "loading" === ownedProjectsFetchState;
  }, items8);
  if (!stateFromStores1) {
    stateFromStores1 = tmp6 && !projectExists && !projectUnavailable;
    const tmp24 = tmp6 && !projectExists && !projectUnavailable;
  }
  const items9 = [tmp19, setFrameSurface];
  const items10 = [projectId];
  const tmpResult30 = tmp(tmp2[20]);
  const stateFromStores2 = tmpResult30.useStateFromStores(items9, () => {
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
  const useApplication = tmp(tmp2[23]).useApplication;
  tmp(tmp2[23]);
  isLoading = useApplication(previewAppId).isLoading;
  const items11 = [c16];
  const items12 = [projectId];
  const tmpResult32 = tmp(tmp2[20]);
  stateFromStores3 = tmpResult32.useStateFromStores(items11, () => {
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
  const tmpResult34 = tmp(tmp2[25]);
  const conjurePreviewModeRequests = tmpResult34.useConjurePreviewModeRequests(projectId, (arg0) => {
    const modes = availability.modes;
    if (modes.includes(arg0)) {
      setMode(arg0);
    }
  });
  const tmpResult35 = tmp(tmp2[26]);
  const conjureTraceRequests = tmpResult35.useConjureTraceRequests(projectId, () => {
    const obj = { projectId };
    return navigation.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, obj);
  });
  [tmp40, c16] = tmp9(obj2.useState(null), 2);
  const items13 = [projectId, tmp6];
  tmp9(obj2.useState(null), 2);
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
    project.then(() => closure_1_16(projectId), () => {

    });
  }, items13);
  const tmp42 = null != previewAppId && null != tmp4(tmp2[28])(previewAppId);
  const tmpResult36 = tmp(tmp2[29]);
  let result = tmpResult36.conjureInstallGuildId(stateFromStores, guildId);
  isLaunched = result;
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
              const obj2 = application(navigation[23]);
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
            guildId: closure_130_17,
            onClose() {
                    let obj = c0(navigation[29]);
                    const result = obj.repairConjureGuildHints(closure_1_4, closure_1_17);
                    const cleanupPromise = result.finally(() => {
                      const obj = application(closure_2_2[22]);
                      return obj.getProject(closure_1_1);
                    });
                    cleanupPromise.catch(() => {

                    });
                  }
          };
          const openConjureAppInstallModal = tmp(navigation[30]).openConjureAppInstallModal;
          const tmp22 = tmp(navigation[30]);
          const application1 = application2.getApplication(closure_130_5);
          application = application1;
          if (application1 == null) {
            application = null;
          }
          let result = openConjureAppInstallModal(obj6);
        }
        c4 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      } catch (tmp15) {
        c4 = 3;
        throw tmp15;
      }
    }
  }), items14);
  [tmp48, tmp49] = tmp9(obj2.useState(true), 2);
  c19 = tmp49;
  tmp9(obj2.useState(true), 2);
  [tmp51, tmp52] = tmp9(obj2.useState(false), 2);
  let tmp53 = null;
  const useState = obj2.useState;
  tmp9(obj2.useState(false), 2);
  const tmp45 = _asyncToGenerator;
  if (null != stateFromStores2) {
    tmp53 = tmp43;
  }
  [tmp55, tmp56] = tmp9(useState(tmp53), 2);
  tmp9(useState(tmp53), 2);
  [tmp58, tmp59] = tmp9(obj2.useState(null), 2);
  tmp9(obj2.useState(null), 2);
  const tmp9Result10 = tmp9(obj2.useState(projectId), 2);
  if (tmp9Result10[0] !== projectId) {
    tmp9Result10[1](projectId);
    tmp49(true);
    tmp52(false);
    tmp56(null);
    tmp59(null);
  }
  const tmpResult37 = tmp(tmp2[31]);
  conjurePreviewAddBotPrompt = tmpResult37.useConjurePreviewAddBotPrompt(projectId, guildId);
  const tmp68 = null != conjurePreviewAddBotPrompt && (true === preview_ready && null != previewAppId && !isResolving && availability.modes.length > 0) && conjurePreviewAddBotPrompt.prompt.id !== tmp58;
  if (tmp68) {
    tmp59(conjurePreviewAddBotPrompt.prompt.id);
    tmp49(false);
  }
  const tmp71 = true === preview_ready && null != previewAppId && !isResolving && availability.modes.length > 0 && !tmp48;
  closure_21 = tmp71;
  let hasItem = tmp66;
  const tmpResult38 = tmp(tmp2[32]);
  const conjureAgentNeedsPreview = tmpResult38.useConjureAgentNeedsPreview(projectId);
  if (true === preview_ready && null != previewAppId && !isResolving && availability.modes.length > 0) {
    hasItem = tmp42;
  }
  if (hasItem) {
    let modes = availability.modes;
    hasItem = modes.includes("frame");
  }
  let tmp74 = hasItem && tmp71;
  if (tmp74) {
    tmp74 = "frame" === activeMode;
  }
  if (tmp74) {
    tmp74 = null == conjurePreviewAddBotPrompt;
  }
  canAnnotate = tmp74;
  if (hasItem) {
    hasItem = tmp51 || tmp74 || conjureAgentNeedsPreview;
    const tmp75 = tmp51 || tmp74 || conjureAgentNeedsPreview;
  }
  const tmp76 = hasItem && !tmp51;
  if (tmp76) {
    tmp52(true);
  }
  let obj5 = { installScope: install_scope, previewReady: tmp43, integrationInstalled: prop2 };
  prop2 = undefined;
  const previewBotInstallBlocksMode = tmp(tmp2[33]).previewBotInstallBlocksMode;
  tmp(tmp2[33]);
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
  const items16 = [memo1, tmp71, , , ];
  let tmp83 = tmp71;
  const useAnimatedStyle = tmp(tmp2[34]).useAnimatedStyle;
  tmp(tmp2[34]);
  if (tmp71) {
    tmp83 = "bot" === activeMode;
  }
  items16[2] = tmp83;
  items16[3] = tmp8;
  items16[4] = bottom;
  [tmp84, tmp85, tmp86, tmp87, tmp88] = items16;
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
  const items17 = [tmp85, tmp86, tmp87, tmp88];
  ConjureChatSceneTsx2.__closure = items17;
  ConjureChatSceneTsx2.__workletHash = 8818171941973;
  ConjureChatSceneTsx2.__initData = tmp84;
  const animatedStyle = useAnimatedStyle(ConjureChatSceneTsx2);
  const items18 = [memo2, tmp71, tmp8, bottom];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp90, tmp91, tmp92, tmp93] = items18;
  const tmpResult41 = tmp(tmp2[34]);
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
  const items19 = [tmp91, tmp92, tmp93];
  ConjureChatSceneTsx3.__closure = items19;
  ConjureChatSceneTsx3.__workletHash = 6849996535358;
  ConjureChatSceneTsx3.__initData = tmp90;
  const items20 = [availability.modes, frameSurfaceOptions, stateFromStores3];
  const animatedStyle1 = tmpResult41.useAnimatedStyle(ConjureChatSceneTsx3);
  memo1 = obj2.useMemo(() => {
    const obj = conjurePreviewTargets;
    return obj.previewTargets(availability.modes, frameSurfaceOptions, stateFromStores3);
  }, items20);
  const items21 = [activeMode, frameSurface, appChannel];
  memo2 = obj2.useMemo(() => {
    const obj = conjurePreviewTargets;
    return obj.activePreviewTarget(activeMode, frameSurface, appChannel);
  }, items21);
  let intl = tmp(tmp2[36]).intl;
  const stringResult = intl.string(tmp4(tmp2[37])["N+VA1J"]);
  c26 = stringResult;
  const items22 = [memo2, availability.modes.length, stringResult, tmp71];
  const memo3 = obj2.useMemo(() => {
    let intl;
    let items2;
    const obj = { id: "chat", label: intl.string(_modDef4244["1HH2p9"]), page: null };
    intl = intl9.intl;
    const items = [obj];
    if (availability.modes.length > 0) {
      const tmp4 = closure_21;
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
      previewTargetLabel = c26;
    } else {
      items2 = [];
    }
    HermesBuiltin.arraySpread(items, items2, 1);
    return items;
  }, items22);
  let tmp99 = null != memo2;
  const callback1 = obj2.useCallback((arg0) => {
    metroImportDefault.dismiss();
    _undefined(0 === arg0);
  }, []);
  if (tmp99) {
    let num = 1;
    tmp99 = memo1.length > 1;
  }
  closure_27 = tmp99;
  const items23 = [memo2, tmp99, stringResult, tmp71, setAppChannel, setFrameSurface, setMode, memo1];
  let first = availability.modes[0];
  let tmp102 = null != stateFromStores2;
  const memo4 = obj2.useMemo(() => {
    let fn;
    let fn2;
    let intl;
    let target;
    let targets;
    let tmp;
    if (null != memo2) {
      let tmp3;
      if (closure_21) {
        tmp3 = c26;
      }
      let obj = { prefix: tmp3, renderTrailingIcon: fn, menuLabel: intl.string(_modDef4244.I2ucou), onShowMenu: fn2 };
      fn = undefined;
      if (closure_21) {
        if (closure_27) {
          fn = (color) => {
            const obj = { size: "xs", color };
            return onAddBot(guildId(navigation[38]).ChevronSmallDownIcon, obj);
          };
        }
      }
      intl = intl9.intl;
      fn2 = undefined;
      if (closure_27) {
        fn2 = () => {
          let obj = {
            targets,
            target,
            onChange(mode) {
              const obj = guildId(navigation[35]);
              const previewTarget = obj.selectPreviewTarget(mode, closure_1_10, closure_1_13, closure_1_15);
              closure_1_19(false);
            }
          };
          return projectId(navigation[39])(obj);
        };
      }
      tmp = { preview: obj };
      const obj2 = { preview: obj };
    }
    return tmp;
  }, items23);
  if (tmp102) {
    tmp102 = tmp43 !== tmp55;
  }
  if (tmp102) {
    const tmp103 = false === tmp55 && true === preview_ready && null != first;
    if (tmp103) {
      setMode(first);
      tmp49(false);
    }
    tmp56(true === preview_ready);
  }
  const width = tmp4(tmp2[40])().width;
  let obj6 = { items: memo3, pageWidth: width - 2 * canAnnotate, onSetActiveIndex: callback1 };
  const tmpResult42 = tmp(tmp2[41]);
  const segmentedControlState = tmpResult42.useSegmentedControlState(obj6);
  if (tmp48) {
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
        const obj = guildId(navigation[42]);
        return obj.setBuilderPreviewApplicationId(null);
      };
    }
  }, items25);
  const items26 = [previewAppId];
  const effect2 = obj2.useEffect(() => null != previewAppId ? (() => projectId(navigation[43])(previewAppId)) : undefined, items26);
  ({ publishOptions, publish, indicator, hint, text, pendingChanges } = tmp4(tmp2[44])(projectId, guildId));
  tmp4(tmp2[44])(projectId, guildId);
  closure_31 = tmp4(tmp2[45])(projectId, publish, publishOptions);
  const tmp112 = tmp4(tmp2[46])(stateFromStores);
  canShare = tmp4(tmp2[47])(projectId).canShare;
  const items27 = [setMode];
  const tmpResult43 = tmp(tmp2[20]);
  stateFromStores4 = tmpResult43.useStateFromStores(items27, () => {
    const currentUser = setMode.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const items28 = [frameSurface];
  const items29 = [projectId, stateFromStores4];
  const tmpResult44 = tmp(tmp2[20]);
  stateFromStores5 = tmpResult44.useStateFromStores(items28, () => ConjureConnectionStore.isAccessRefused(projectId, stateFromStores4), items29);
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items30 = [projectId, projectGuildId];
  callback2 = obj2.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { content: onAddBot(ConjureSettingsSheetDefault, obj2), key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY };
    obj2 = { projectId, guildId: projectGuildId, isPreview: true };
    showActionSheet(obj);
  }, items30);
  const items31 = [guildId, navigation, tmp6];
  memo5 = obj2.useMemo(() => {
    let openHere;
    const tmp = closure_3;
    if (tmp) {
      openHere = function openHere(projectId) {
        const obj = { projectId, entryPoint: "remix" };
        closure_1_2.push(guildId(navigation[27]).ConjureScreenScenes.CHAT, obj);
      };
    } else {
      let obj = conjureStandaloneScenes;
      openHere = obj.projectOpener(guildId, (arg0) => {
        const obj = guildId(navigation[27]);
        return obj.pushServerProjectScreen(closure_1_0, arg0, "remix");
      });
    }
    return openHere;
  }, items31);
  const items32 = [guildId, memo5, stateFromStores];
  const items33 = [projectId];
  const callback3 = obj2.useCallback(() => {
    let obj2;
    if (null != stateFromStores) {
      const obj = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: onAddBot(ConjureRemixSheetDefault, obj2) };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      obj2 = { project: tmp, currentGuildId: guildId, onRemixed: memo5 };
      showActionSheet(obj);
    }
  }, items32);
  callback4 = obj2.useCallback(() => {
    const obj = { projectId };
    return openConjureShareSheetDefault(obj);
  }, items33);
  const items34 = [projectId];
  callback5 = obj2.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: ConjureConnectToolSheet.CONJURE_CONNECT_TOOL_SHEET_KEY, content: onAddBot(ConjureConnectToolSheetDefault, obj2) };
    obj2 = { projectId };
    showActionSheet(obj);
  }, items34);
  closure_40 = obj2.useRef(false);
  const useCallback = obj2.useCallback;
  _require = tmp45(function*(arg0, value) {
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
        const obj6 = { text: intl2.string(projectId(navigation[37]).qqlUiW), icon: closure_0(navigation[54]).UndoIcon };
        const open = projectId(navigation[53]).open;
        const tmp40 = projectId(navigation[53]);
        intl2 = closure_0(navigation[36]).intl;
        open("CONJURE_VERSION_RESTORING", obj6);
        let c5 = 2;
        c6 = 4;
        c7 = 1;
        const obj8 = { value: obj7.restoreSourceHistoryEntry(closure_1, closure_0.sha), done: false };
        obj7 = closure_0(navigation[55]);
        return obj8;
      }
    } else if (2 === c6) {
      c5 = 0;
      ref.current = false;
      throw closure_4;
    } else if (3 === c6) {
      const presentError = closure_0(navigation[56]).presentError;
      const tmp23 = closure_0(navigation[56]);
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
          const obj11 = { text: formatToPlainString(Z4n6LX, obj13), icon: closure_0(navigation[54]).UndoIcon };
          const open2 = projectId(navigation[53]).open;
          const tmp73 = projectId(navigation[53]);
          const intl3 = closure_0(navigation[36]).intl;
          formatToPlainString = intl3.formatToPlainString;
          obj13 = { title: obj15.versionTitle(closure_0.subject).short };
          Z4n6LX = projectId(navigation[37]).Z4n6LX;
          obj15 = closure_0(navigation[57]);
          open2("CONJURE_VERSION_RESTORED", obj11);
          if (null != c1) {
            c6 = 5;
            c7 = 1;
            const obj14 = { value: obj2.rewindDataAfterVersionRestore(closure_1, c1), done: false };
            obj2 = closure_0(navigation[58]);
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
          const obj12 = closure_0(navigation[56]);
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
  const items35 = [projectId];
  callback6 = useCallback(function() {
    return closure_0(...arguments);
  }, items35);
  const items36 = [callback6, projectId];
  callback7 = obj2.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: ConjureHistorySheet.CONJURE_HISTORY_SHEET_KEY, content: onAddBot(ConjureHistorySheetDefault, obj2) };
    obj2 = { projectId, onRestoreVersion: callback6 };
    showActionSheet(obj);
  }, items36);
  const tmpResult45 = tmp(tmp2[60]);
  conjureDebugPaneEnabled = tmpResult45.useConjureDebugPaneEnabled();
  const tmpResult46 = tmp(tmp2[61]);
  isConjureMcpUiEnabled = tmpResult46.useIsConjureMcpUiEnabled("ConjureChatScene");
  const items37 = [navigation, projectId];
  callback8 = obj2.useCallback(() => {
    const obj = { projectId };
    return navigation.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, obj);
  }, items37);
  const items38 = [frameSurface];
  const memo6 = obj2.useMemo(() => {
    const obj = conjurePreviewSurface;
    return obj.getConjurePreviewSurface(undefined, frameSurface);
  }, items38);
  const tmp126 = isLaunched(tmp4(tmp2[63])(previewAppId, memo6));
  closure_46 = tmp126;
  const items39 = [previewAppId];
  callback9 = obj2.useCallback(() => {
    if (null != previewAppId) {
      const obj = restartFrames;
      obj.restartAppFrames(tmp);
    }
  }, items39);
  const tmpResult47 = tmp(tmp2[65]);
  key = tmpResult47.useRoute().key;
  let tmp128;
  const tmpResult48 = tmp(tmp2[65]);
  if (tmpResult48.useNavigationState((arg0) => {
    const first = arg0.routes[0];
    key = undefined;
    if (first != null) {
      key = first.key;
    }
    return key === key;
  })) {
    tmp128 = onExit;
  }
  onExit = tmp128;
  const items40 = [tmp128, navigation];
  callback10 = obj2.useCallback(() => {
    if (null != onExit) {
      tmp();
    } else {
      navigation.goBack();
    }
  }, items40);
  const items41 = [callback10, projectId];
  callback11 = obj2.useCallback(() => {
    closeConnection(projectId);
    callback10();
  }, items41);
  const items42 = [tmp19];
  const items43 = [projectId];
  const tmpResult49 = tmp(tmp2[20]);
  stateFromStores6 = tmpResult49.useStateFromStores(items42, () => ConjureProjectStore.isProjectDeleting(projectId), items43);
  const items44 = [stateFromStores6, callback11, projectId, tmp6, navigation];
  const effect3 = obj2.useEffect(() => {
    let index;
    let routes;
    let tmp = stateFromStores6;
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
  }, items44);
  let obj7 = { projectId, refreshApplicationId: tmp134 };
  const modes2 = availability.modes;
  tmp134 = null;
  const tmp4Result = tmp4(tmp2[66]);
  if (modes2.includes("widget")) {
    tmp134 = null;
    if ("unavailable-authorization-revoked" !== availability.profileState) {
      tmp134 = widgetApplicationId;
    }
  }
  const tmp4ResultResult = tmp4Result(obj7);
  preview = tmp4ResultResult;
  const tmpResult50 = tmp(tmp2[67]);
  conjureRemoveTarget = tmpResult50.useConjureRemoveTarget(projectId);
  const effect4 = obj2.useEffect(() => () => {
    const obj = projectId(navigation[48]);
    return obj.hideActionSheet(guildId(navigation[68]).CONJURE_CHAT_MORE_SHEET_KEY);
  }, []);
  const items45 = [stateFromStores5, canShare, conjureDebugPaneEnabled, tmp74, guildId, callback5, callback8, callback7, callback2, callback4, callback9, isConjureMcpUiEnabled, tmp126, tmp4ResultResult, stateFromStores, conjureRemoveTarget];
  const callback12 = obj2.useCallback(() => {
    let obj2;
    let tmp11;
    let tmp17;
    let tmp19;
    let tmp2;
    let tmp4;
    let tmp6;
    let tmp9;
    if (null != stateFromStores) {
      const obj = { key: ConjureChatMoreSheet.CONJURE_CHAT_MORE_SHEET_KEY, content: tmp17(tmp19, obj2) };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      obj2 = { project: tmp, guildId, removeTarget: conjureRemoveTarget, canAnnotate, onOpenSettings: tmp2, onShare: tmp4, onRefresh: tmp6, onHistory: callback7, onDebug: tmp9, onConnectTool: tmp11, preview };
      tmp2 = undefined;
      tmp17 = closure_18;
      tmp19 = ConjureChatMoreSheetDefault;
      if (!stateFromStores5) {
        tmp2 = callback2;
      }
      tmp4 = undefined;
      if (canShare) {
        tmp4 = callback4;
      }
      tmp6 = undefined;
      if (closure_46) {
        tmp6 = callback9;
      }
      tmp9 = undefined;
      if (conjureDebugPaneEnabled) {
        tmp9 = callback8;
      }
      tmp11 = undefined;
      if (isConjureMcpUiEnabled) {
        tmp11 = callback5;
      }
      showActionSheet(obj);
    }
  }, items45);
  if (projectName == null) {
    let intl2 = tmp(tmp2[36]).intl;
    if (!projectExists) {
      if (!stateFromStores1) {
        let uk6jhJ;
        if (tmp40 !== projectId) {
          uk6jhJ = tmp4(tmp2[37]).G1WwgK;
        }
        projectName = tmp139(uk6jhJ);
      }
    }
    uk6jhJ = tmp4(tmp2[37]).uk6jhJ;
  }
  let tmp142 = null;
  if (null != tmp128) {
    let obj8 = { onExit: tmp128 };
    tmp142 = onAddBot(c26, obj8);
  }
  const items46 = [tmp142, ];
  let obj9 = { onBack: callback10, showBorder: tmp147, title: onAddBot(tmp4Result7, { project: tmp149, title: projectName, onPressIcon: callback2, draft: pendingChanges }), actions: tmp140Result };
  tmp147 = !tmp66;
  const tmp4Result6 = tmp4(tmp2[69]);
  if (true === preview_ready && null != previewAppId && !isResolving && availability.modes.length > 0) {
    tmp147 = !projectExists;
  }
  if (!tmp147) {
    tmp147 = stateFromStores5;
  }
  tmp149 = null;
  tmp4Result7 = tmp4(tmp2[70]);
  if (projectExists) {
    tmp149 = null;
    if (!stateFromStores5) {
      tmp149 = stateFromStores;
    }
  }
  tmp140Result = null;
  if (projectExists) {
    let tmp145Result = null;
    if (null != stateFromStores) {
      tmp145Result = null;
      if (tmp112) {
        tmp145Result = null;
        if (setAppChannel(stateFromStores)) {
          let obj10 = { IconComponent: tmp(tmp2[72]).PaperPlusIcon, onPress: callback3, accessibilityLabel: intl3.string(tmp4(tmp2[37]).XWgAfc) };
          const tmp4Result8 = tmp4(tmp2[71]);
          intl3 = tmp(tmp2[36]).intl;
          tmp145Result = tmp145(tmp4Result8, obj10);
        }
      }
    }
    const items47 = [tmp145Result, , ];
    let tmp145Result8 = null;
    if (null != publish) {
      let obj11 = {
        IconComponent: tmp(tmp2[73]).UploadIcon,
        onPress() {
              return closure_31("header");
            },
        disabled: "publishing" === indicator,
        dimmed: null == indicator,
        accessibilityLabel: text,
        accessibilityHint: hint,
        badge: tmp145Result7,
        badgeSize: result2
      };
      tmp145Result7 = undefined;
      const tmp4Result9 = tmp4(tmp2[71]);
      if (null != indicator) {
        let obj12 = { indicator };
        tmp145Result7 = tmp145(tmp4(tmp2[74]), obj12);
      }
      result2 = undefined;
      if (null != indicator) {
        const tmpResult51 = tmp(tmp2[74]);
        result2 = tmpResult51.conjurePublishBadgeSize(indicator);
      }
      tmp145Result8 = tmp145(tmp4Result9, obj11);
    }
    let obj13 = { children: items47 };
    items47[1] = tmp145Result8;
    let obj14 = { IconComponent: tmp(tmp2[75]).MoreHorizontalIcon, onPress: callback12, accessibilityLabel: intl4.string(tmp(tmp2[36]).t["UKOtz+"]) };
    const tmp4Result10 = tmp4(tmp2[71]);
    intl4 = tmp(tmp2[36]).intl;
    items47[2] = onAddBot(tmp4Result10, obj14);
    tmp140Result = tmp140(tmp141, obj13);
  }
  let obj15 = { children: items46 };
  items46[1] = onAddBot(tmp4Result6, obj9);
  const tmp140Result4 = conjurePreviewAddBotPrompt(c19, obj15);
  let routeFocused;
  const tmpResult52 = tmp(tmp2[65]);
  const isFocused = tmpResult52.useIsFocused();
  if (context != null) {
    routeFocused = context.routeFocused;
  }
  closure_55 = tmp162;
  const items48 = [true === routeFocused && isFocused, projectId];
  const effect5 = obj2.useEffect(() => {
    if (closure_55) {
      let obj = ConjureActionCreators;
      const globalChatProject = obj.selectGlobalChatProject(projectId);
      return () => {
        const obj = guildId(navigation[22]);
        return obj.clearGlobalChatProject(projectId);
      };
    }
  }, items48);
  const items49 = [guildId, projectId, tmp6];
  const effect6 = obj2.useEffect(() => {
    if (!closure_3) {
      let obj = ConjureActionCreators;
      const result = obj.setSelectedProjectForGuild(guildId, projectId);
      return () => {
        const obj = guildId(navigation[22]);
        return obj.setSelectedProjectForGuild(closure_1_0, null);
      };
    }
  }, items49);
  if (!projectExists) {
    if (tmp40 !== projectId) {
      const obj16 = { style: tmp7.contentBare, children: items50 };
      items50 = [onAddBot(tmp4(tmp2[76]), { absolute: true, mix: true }), tmp140Result4, ];
      const obj17 = { style: items51, children: tmp145Result9 };
      items51 = [, ];
      ({ content: arr60[0], centered: arr60[1] } = tmp7);
      if (stateFromStores1) {
        tmp145Result9 = tmp145(isLoading, {});
      } else {
        const obj18 = { style: tmp7.listError, children: items52 };
        const obj19 = { variant: "heading-lg/semibold", color: "text-default", children: intl5.string(tmp4(tmp2[37]).G1WwgK) };
        const Text = tmp(tmp2[77]).Text;
        intl5 = tmp(tmp2[36]).intl;
        items52 = [onAddBot(Text, obj19), , ];
        const obj20 = { variant: "body-md/normal", color: "text-muted", children: intl6.string(tmp4(tmp2[37]).fINulo) };
        const Text2 = tmp(tmp2[77]).Text;
        intl6 = tmp(tmp2[36]).intl;
        items52[1] = onAddBot(Text2, obj20);
        const obj21 = {
          variant: "secondary",
          size: "sm",
          text: intl7.string(tmp4(tmp2[37])["WFJ/vb"]),
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
        const Button = tmp(tmp2[78]).Button;
        intl7 = tmp(tmp2[36]).intl;
        items52[2] = onAddBot(Button, obj21);
        tmp145Result9 = tmp140(tmp174, obj18);
      }
      items50[2] = onAddBot(availability, obj17);
      tmp140Result5 = tmp140(tmp174, obj16);
    }
    return tmp140Result5;
  }
  if (!stateFromStores5) {
    let tmp140Result6;
    if (projectExists) {
      const obj22 = { style: items53, children: items54 };
      items53 = [tmp7.contentBare, animatedStyle];
      const View = tmp4(tmp2[34]).View;
      items54 = [onAddBot(tmp4(tmp2[76]), { absolute: true, mix: true }), tmp140Result4, , ];
      let tmp145Result10 = null;
      if (true === preview_ready && null != previewAppId && !isResolving && availability.modes.length > 0) {
        const obj23 = { style: tmp7.segments, children: onAddBot(tmp4(tmp2[79]), obj24) };
        obj24 = { state: segmentedControlState, extras: memo4 };
        tmp145Result10 = tmp145(availability, obj23);
      }
      items54[2] = tmp145Result10;
      let tmp145Result11 = null;
      const obj25 = { style: tmp7.panes, children: items55 };
      if (hasItem) {
        tmp145Result11 = null;
        if (null != previewAppId) {
          const obj26 = { style: tmp74 ? tmp7.pane : tmp7.paneBackstage, pointerEvents: str6, accessibilityElementsHidden: !tmp74, importantForAccessibility: str7, children: onAddBot(tmp(tmp2[80]).PreviewFrame, obj27) };
          str6 = "none";
          if (tmp74) {
            str6 = "auto";
          }
          str7 = "no-hide-descendants";
          if (tmp74) {
            str7 = "auto";
          }
          obj27 = { applicationId: previewAppId, projectId, frameSurface, launch: frameLaunchParams, visible: tmp74 };
          tmp145Result11 = tmp145(tmp170, obj26);
        }
      }
      items55 = [tmp145Result11, , ];
      let tmp145Result12 = null;
      if (tmp71) {
        tmp145Result12 = null;
        if (null != previewAppId) {
          tmp145Result12 = null;
          if (!tmp74) {
            const obj28 = { style: tmp7.pane, children: onAddBot(tmp4(tmp2[80]), obj29) };
            obj29 = { projectId, previewApplicationId: previewAppId, mode: activeMode, availability, frameSurface, frameLaunchParams, widgetApplicationId, frameHostAvailable: tmp42, botInstall: memo };
            tmp145Result12 = tmp145(tmp170, obj28);
          }
        }
      }
      items55[1] = tmp145Result12;
      const items56 = [tmp7.chatPane, , ];
      let paneHidden = tmp71;
      const View2 = tmp4(tmp2[34]).View;
      if (tmp71) {
        paneHidden = tmp7.paneHidden;
      }
      items56[1] = paneHidden;
      items56[2] = animatedStyle1;
      const obj30 = { style: items56, children: onAddBot(Provider, obj31) };
      obj31 = { value: publishOptions, children: onAddBot(Provider2, obj32) };
      Provider = tmp(tmp2[81]).ConjurePublishActionContext.Provider;
      obj32 = { value: projectId, children: onAddBot(tmp4(tmp2[83]), obj33) };
      Provider2 = tmp(tmp2[82]).ConjureFileMentionProjectContext.Provider;
      obj33 = { projectId, transcriptTopInset: tmp11, onRestoreVersion: callback6, hidden: tmp71 };
      items55[2] = onAddBot(View2, obj30);
      items54[3] = conjurePreviewAddBotPrompt(availability, obj25);
      tmp140Result6 = tmp140(View, obj22);
    }
    tmp140Result5 = tmp140Result6;
  }
  const obj34 = { style: tmp7.contentBare, children: items57 };
  items57 = [onAddBot(tmp4(tmp2[76]), { absolute: true, mix: true }), tmp140Result4, ];
  const obj35 = { style: items58, children: onAddBot(availability, obj36) };
  items58 = [, ];
  ({ content: arr58[0], centered: arr58[1] } = tmp7);
  obj36 = { style: tmp7.listError, children: onAddBot(Text3, obj37) };
  obj37 = { variant: "heading-lg/semibold", color: "text-default", children: intl8.string(tmp4(tmp2[37]).Y2sGrh) };
  Text3 = tmp(tmp2[77]).Text;
  intl8 = tmp(tmp2[36]).intl;
  items57[2] = onAddBot(availability, obj35);
  tmp140Result6 = tmp140(availability, obj34);
};
