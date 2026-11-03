// Module ID: 12209
// Function ID: 12210
// Name: ConjureChatScene
// Dependencies: [5, 32, 19, 17, 2167, 10980, 11006, 6964, 10997, 6967, 21, 5141, 575, 1499, 12210, 1627, 12211, 1641, 1705, 504, 12215, 11005, 7001, 12216, 11086, 12222, 12223, 5792, 12224, 11032, 12225, 12219, 1652, 12226, 1113, 3995, 11552, 12227, 1493, 9108, 11030, 12228, 12230, 12238, 5381, 12263, 10978, 12309, 5832, 12313, 12315, 5831, 12317, 12318, 12320, 12338, 12339, 11013, 12340, 11064, 1500, 12341, 12348, 12349, 12368, 12369, 12370, 10047, 12371, 9888, 10866, 5747, 5754, 12373, 12374, 12233, 12279, 12711, 7130, 2]
// Exports: default

// Module 12209 (ConjureChatScene)
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1113 */;
import _modDef3995 from "module_3995" /* 3995 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5381 */;
import FramesConstants from "FramesConstants" /* 6967 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 7130 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 10978 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10980 */;
import ConjureActionCreators from "ConjureActionCreators" /* 11005 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 11013 */;
import ConjurePreviewActionCreators from "ConjurePreviewActionCreators" /* 11030 */;
import restartFrames from "restartFrames" /* 11064 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 12223 */;
import conjurePreviewTargets from "conjurePreviewTargets" /* 12226 */;
import ConjureSettingsSheet from "ConjureSettingsSheet" /* 12263 */;
import ConjureConnectToolSheet from "ConjureConnectToolSheet" /* 12309 */;
import ConjureHistorySheet from "ConjureHistorySheet" /* 12320 */;
import ConjureChatMoreSheet from "ConjureChatMoreSheet" /* 12349 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationStore from "ApplicationStore" /* 2167 */;
import ConjureLastIntegrationStatusStore from "ConjureLastIntegrationStatusStore" /* 11006 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6964 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10997 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

const ConjureRemixSheetDefault = ConjureRemixSheet;
const ConjureSettingsSheetDefault = ConjureSettingsSheet;
const ConjureConnectToolSheetDefault = ConjureConnectToolSheet;
const ConjureHistorySheetDefault = ConjureHistorySheet;
const ConjureChatMoreSheetDefault = ConjureChatMoreSheet;
let _require, c3, c4, c6, closure_0, navigation;

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
let closure_20 = { code: "(function ConjureChatSceneTsx1(e){let[scheduleOnRN,setChatKeyboardCover,safeAreaBottom]=this.__closure;scheduleOnRN(setChatKeyboardCover,Math.max(0,e.height-safeAreaBottom));})" };
let closure_21 = { code: "(function ConjureChatSceneTsx2(){let[previewShowing,botFaceShowing,keyboardHeight,safeAreaBottom]=this.__closure;return{paddingBottom:previewShowing&&!botFaceShowing?Math.max(keyboardHeight.get(),safeAreaBottom):0};})" };
let closure_22 = { code: "(function ConjureChatSceneTsx3(){let[previewShowing,keyboardHeight,safeAreaBottom]=this.__closure;return{transform:[{translateY:previewShowing?0:-Math.max(0,keyboardHeight.get()-safeAreaBottom)}]};})" };
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureChatScene.tsx");

export default function ConjureChatScene(guildId) {
  let Provider;
  let Provider2;
  let _undefined;
  let _undefined2;
  let closure_3;
  let entryPoint;
  let frameLaunchParams;
  let has_activity;
  let indicator;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let isResolving;
  let items42;
  let items45;
  let items46;
  let items47;
  let items49;
  let items50;
  let items51;
  let label;
  let obj17;
  let obj20;
  let obj22;
  let obj25;
  let obj26;
  let obj27;
  let onExit;
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
  let tmp11;
  let tmp12;
  let tmp120;
  let tmp126Result;
  let tmp126Result4;
  let tmp131Result;
  let tmp131Result10;
  let tmp133;
  let tmp135;
  let tmp14;
  let tmp15;
  let tmp158;
  let tmp16;
  let tmp17;
  let tmp46;
  let tmp47;
  let tmp49;
  let tmp4Result10;
  let tmp4Result7;
  let tmp50;
  let tmp53;
  let tmp54;
  let tmp73;
  let tmp74;
  let tmp75;
  let tmp76;
  let tmp77;
  let tmp79;
  let tmp80;
  let tmp81;
  let tmp82;
  let widgetApplicationId;
  guildId = guildId.guildId;
  const projectId = guildId.projectId;
  navigation = undefined;
  let stateFromStores;
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
  let c15;
  let c16;
  let closure_17;
  let canAnnotate;
  let memo;
  let memo1;
  let c21;
  closure_22 = undefined;
  let num2;
  let activeIndex;
  let setActiveIndex;
  let closure_26;
  projectGuildId = undefined;
  let callback2;
  let memo4;
  let callback3;
  let callback4;
  let closure_32;
  let callback5;
  let callback21;
  let conjureDebugPaneEnabled;
  let isConjureMcpUiEnabled;
  let callback6;
  let closure_38;
  let callback7;
  let key;
  onExit = undefined;
  let callback8;
  let callback9;
  let stateFromStores4;
  let preview;
  let conjureRemoveTarget;
  let closure_47;
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
  let tmp7 = canAnnotate(bottom);
  const tmp8 = projectId(navigation[16])();
  [tmp11, tmp12] = stateFromStores(previewAppId.useState(0), 2);
  const tmp10 = stateFromStores(previewAppId.useState(0), 2);
  let tmp13 = guildId(navigation[17]);
  let items = [memo1, , , ];
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
  const items3 = [setFrameSurface];
  const items4 = [projectId];
  const tmpResult = tmp(tmp2[19]);
  stateFromStores = tmpResult.useStateFromStores(items3, () => {
    let project = ConjureProjectStore.getProject(projectId);
    if (project == null) {
      project = null;
    }
    return project;
  }, items4);
  const tmpResult24 = tmp(tmp2[20]);
  const trackConjureBuilderOpened = tmpResult24.useTrackConjureBuilderOpened(projectId, entryPoint);
  const items5 = [setFrameSurface];
  const items6 = [projectId];
  const tmpResult25 = tmp(tmp2[19]);
  const stateFromStoresObject = tmpResult25.useStateFromStoresObject(items5, () => {
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
  const items7 = [setFrameSurface];
  const items8 = [guildId, tmp6];
  const tmpResult26 = tmp(tmp2[19]);
  let stateFromStores1 = tmpResult26.useStateFromStores(items7, () => {
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
  const items9 = [tmp19, frameSurfaceOptions];
  const items10 = [projectId];
  const tmpResult27 = tmp(tmp2[19]);
  const stateFromStores2 = tmpResult27.useStateFromStores(items9, () => {
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
  const isLoading = useApplication(previewAppId).isLoading;
  const items11 = [appChannel];
  const items12 = [projectId];
  const tmpResult29 = tmp(tmp2[19]);
  stateFromStores3 = tmpResult29.useStateFromStores(items11, () => {
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
  const tmpResult31 = tmp(tmp2[24]);
  const conjurePreviewModeRequests = tmpResult31.useConjurePreviewModeRequests(projectId, (arg0) => {
    const modes = availability.modes;
    if (modes.includes(arg0)) {
      setMode(arg0);
    }
  });
  const tmpResult32 = tmp(tmp2[25]);
  const conjureTraceRequests = tmpResult32.useConjureTraceRequests(projectId, () => {
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
  const tmpResult33 = tmp(tmp2[28]);
  let result = tmpResult33.conjureInstallGuildId(stateFromStores, stateFromStores2, guildId);
  c15 = result;
  const items14 = [result, previewAppId, stateFromStores, projectId];
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
            guildId: closure_130_15,
            onClose() {
                    let obj = c0(navigation[28]);
                    const result = obj.repairConjureGuildHints(closure_1_4, closure_1_15);
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
  [tmp46, tmp47] = stateFromStores(obj2.useState(true), 2);
  c16 = tmp47;
  stateFromStores(obj2.useState(true), 2);
  [tmp49, tmp50] = stateFromStores(obj2.useState(false), 2);
  let tmp51 = null;
  const useState = obj2.useState;
  stateFromStores(obj2.useState(false), 2);
  const tmp43 = _asyncToGenerator;
  if (null != stateFromStores2) {
    tmp51 = tmp41;
  }
  [tmp53, tmp54] = stateFromStores(useState(tmp51), 2);
  stateFromStores(useState(tmp51), 2);
  const tmp9Result6 = stateFromStores(obj2.useState(projectId), 2);
  if (tmp9Result6[0] !== projectId) {
    const tmp56 = tmp9Result6[1](projectId);
    tmp47(true);
    tmp50(false);
    tmp54(null);
  }
  const tmp61 = true === preview_ready && null != previewAppId && !isResolving && availability.modes.length > 0 && !tmp46;
  closure_17 = tmp61;
  let hasItem = tmp60;
  const tmpResult34 = tmp(tmp2[30]);
  const conjureAgentNeedsPreview = tmpResult34.useConjureAgentNeedsPreview(projectId);
  if (true === preview_ready && null != previewAppId && !isResolving && availability.modes.length > 0) {
    hasItem = tmp40;
  }
  if (hasItem) {
    let modes = availability.modes;
    hasItem = modes.includes("frame");
  }
  let tmp64 = hasItem && tmp61;
  if (tmp64) {
    tmp64 = "frame" === activeMode;
  }
  canAnnotate = tmp64;
  if (hasItem) {
    hasItem = tmp49 || tmp64 || conjureAgentNeedsPreview;
    const tmp65 = tmp49 || tmp64 || conjureAgentNeedsPreview;
  }
  const tmp66 = hasItem && !tmp49;
  if (tmp66) {
    tmp50(true);
  }
  let obj5 = { installScope: install_scope, previewReady: tmp41, integrationInstalled: prop2 };
  prop2 = undefined;
  const previewBotInstallBlocksMode = tmp(tmp2[31]).previewBotInstallBlocksMode;
  tmp(tmp2[31]);
  if (stateFromStores2 != null) {
    prop2 = stateFromStores2.integration_installed;
  }
  if (prop2 == null) {
    prop2 = null;
  }
  const result1 = previewBotInstallBlocksMode(activeMode, obj5);
  const items15 = [c21, tmp61, , , ];
  let tmp72 = tmp61;
  const useAnimatedStyle = tmp(tmp2[32]).useAnimatedStyle;
  tmp(tmp2[32]);
  if (tmp61) {
    tmp72 = "bot" === activeMode;
  }
  items15[2] = tmp72;
  items15[3] = tmp8;
  items15[4] = bottom;
  [tmp73, tmp74, tmp75, tmp76, tmp77] = items15;
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
  const items16 = [tmp74, tmp75, tmp76, tmp77];
  ConjureChatSceneTsx2.__closure = items16;
  ConjureChatSceneTsx2.__workletHash = 8818171941973;
  ConjureChatSceneTsx2.__initData = tmp73;
  const animatedStyle = useAnimatedStyle(ConjureChatSceneTsx2);
  const items17 = [closure_22, tmp61, tmp8, bottom];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp79, tmp80, tmp81, tmp82] = items17;
  const tmpResult37 = tmp(tmp2[32]);
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
  const items18 = [tmp80, tmp81, tmp82];
  ConjureChatSceneTsx3.__closure = items18;
  ConjureChatSceneTsx3.__workletHash = 6849996535358;
  ConjureChatSceneTsx3.__initData = tmp79;
  const items19 = [availability.modes, frameSurfaceOptions, stateFromStores3];
  const animatedStyle1 = tmpResult37.useAnimatedStyle(ConjureChatSceneTsx3);
  memo = obj2.useMemo(() => {
    const obj = conjurePreviewTargets;
    return obj.previewTargets(availability.modes, frameSurfaceOptions, stateFromStores3);
  }, items19);
  const items20 = [activeMode, frameSurface, appChannel];
  memo1 = obj2.useMemo(() => {
    const obj = conjurePreviewTargets;
    return obj.activePreviewTarget(activeMode, frameSurface, appChannel);
  }, items20);
  let intl = tmp(tmp2[34]).intl;
  const stringResult = intl.string(tmp4(tmp2[35])["N+VA1J"]);
  c21 = stringResult;
  const items21 = [memo1, availability.modes.length, stringResult, tmp61];
  const memo2 = obj2.useMemo(() => {
    let intl;
    let items2;
    const obj = { id: "chat", label: intl.string(_modDef3995["1HH2p9"]), page: null };
    intl = intl7.intl;
    const items = [obj];
    if (availability.modes.length > 0) {
      const tmp4 = closure_17;
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
      previewTargetLabel = c21;
    } else {
      items2 = [];
    }
    HermesBuiltin.arraySpread(items, items2, 1);
    return items;
  }, items21);
  let tmp88 = null != memo1;
  const callback1 = obj2.useCallback((arg0) => {
    metroImportDefault.dismiss();
    _undefined2(0 === arg0);
  }, []);
  if (tmp88) {
    let num = 1;
    tmp88 = memo.length > 1;
  }
  closure_22 = tmp88;
  const items22 = [memo1, tmp88, stringResult, tmp61, setAppChannel, setFrameSurface, setMode, memo];
  let first = availability.modes[0];
  let tmp91 = null != stateFromStores2;
  const memo3 = obj2.useMemo(() => {
    let fn;
    let fn2;
    let intl;
    let target;
    let targets;
    let tmp;
    if (null != memo1) {
      let tmp3;
      if (closure_17) {
        tmp3 = c21;
      }
      let obj = { prefix: tmp3, renderTrailingIcon: fn, menuLabel: intl.string(_modDef3995.I2ucou), onShowMenu: fn2 };
      fn = undefined;
      if (closure_17) {
        if (closure_22) {
          fn = (color) => {
            const obj = { size: "xs", color };
            return _undefined(guildId(navigation[36]).ChevronSmallDownIcon, obj);
          };
        }
      }
      intl = intl7.intl;
      fn2 = undefined;
      if (closure_22) {
        fn2 = () => {
          let obj = {
            targets,
            target,
            onChange(mode) {
              const obj = guildId(navigation[33]);
              const previewTarget = obj.selectPreviewTarget(mode, closure_1_9, closure_1_12, closure_1_14);
              closure_1_16(false);
            }
          };
          return projectId(navigation[37])(obj);
        };
      }
      tmp = { preview: obj };
      const obj2 = { preview: obj };
    }
    return tmp;
  }, items22);
  if (tmp91) {
    tmp91 = tmp41 !== tmp53;
  }
  if (tmp91) {
    const tmp92 = false === tmp53 && true === preview_ready && null != first;
    if (tmp92) {
      setMode(first);
      tmp47(false);
    }
    tmp54(true === preview_ready);
  }
  const width = tmp4(tmp2[38])().width;
  let obj6 = { items: memo2, pageWidth: width - 2 * memo, onSetActiveIndex: callback1 };
  const tmpResult38 = tmp(tmp2[39]);
  const segmentedControlState = tmpResult38.useSegmentedControlState(obj6);
  if (tmp46) {
    num2 = 0;
  } else {
    num2 = 1;
  }
  activeIndex = segmentedControlState.activeIndex;
  setActiveIndex = segmentedControlState.setActiveIndex;
  const items23 = [num2, activeIndex, setActiveIndex];
  const effect1 = obj2.useEffect(() => {
    if (activeIndex.get() !== num2) {
      setActiveIndex(tmp, false);
    }
  }, items23);
  const items24 = [previewAppId];
  const layoutEffect = obj2.useLayoutEffect(() => {
    if (null != previewAppId) {
      let obj = ConjurePreviewActionCreators;
      const result = obj.setBuilderPreviewApplicationId(tmp);
      return () => {
        const obj = guildId(navigation[40]);
        return obj.setBuilderPreviewApplicationId(null);
      };
    }
  }, items24);
  const items25 = [previewAppId];
  const effect2 = obj2.useEffect(() => null != previewAppId ? (() => projectId(navigation[41])(previewAppId)) : undefined, items25);
  ({ publishOptions, publish, indicator, label } = tmp4(tmp2[42])(projectId, guildId));
  tmp4(tmp2[42])(projectId, guildId);
  closure_26 = tmp4(tmp2[43])(projectId, publish, publishOptions);
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items26 = [projectId, projectGuildId];
  callback2 = obj2.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { content: _undefined(ConjureSettingsSheetDefault, obj2), key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY };
    obj2 = { projectId, guildId: projectGuildId, isPreview: true };
    showActionSheet(obj);
  }, items26);
  const items27 = [guildId, navigation, tmp6];
  memo4 = obj2.useMemo(() => {
    function openHere(projectId) {
      const obj = { projectId, entryPoint: "remix" };
      closure_1_2.push(guildId(navigation[26]).ConjureScreenScenes.CHAT, obj);
    }
    let projectOpenerResult = openHere;
    if (!closure_3) {
      let obj = conjureStandaloneScenes;
      projectOpenerResult = obj.projectOpener(guildId, openHere);
    }
    return projectOpenerResult;
  }, items27);
  const items28 = [guildId, memo4, stateFromStores];
  callback3 = obj2.useCallback(() => {
    let obj2;
    if (null != stateFromStores) {
      const obj = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: _undefined(ConjureRemixSheetDefault, obj2) };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      obj2 = { project: tmp, currentGuildId: guildId, onRemixed: memo4 };
      showActionSheet(obj);
    }
  }, items28);
  const items29 = [projectId];
  callback4 = obj2.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: ConjureConnectToolSheet.CONJURE_CONNECT_TOOL_SHEET_KEY, content: _undefined(ConjureConnectToolSheetDefault, obj2) };
    obj2 = { projectId };
    showActionSheet(obj);
  }, items29);
  closure_32 = obj2.useRef(false);
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
        const obj6 = { text: intl2.string(projectId(navigation[35]).qqlUiW), icon: closure_0(navigation[49]).UndoIcon };
        const open = projectId(navigation[48]).open;
        const tmp40 = projectId(navigation[48]);
        intl2 = closure_0(navigation[34]).intl;
        open("CONJURE_VERSION_RESTORING", obj6);
        let c5 = 2;
        c6 = 4;
        c7 = 1;
        const obj8 = { value: obj7.restoreSourceHistoryEntry(closure_1, closure_0.sha), done: false };
        obj7 = closure_0(navigation[50]);
        return obj8;
      }
    } else if (2 === c6) {
      c5 = 0;
      ref.current = false;
      throw closure_4;
    } else if (3 === c6) {
      const presentError = closure_0(navigation[51]).presentError;
      const tmp23 = closure_0(navigation[51]);
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
          const obj11 = { text: formatToPlainString(Z4n6LX, obj13), icon: closure_0(navigation[49]).UndoIcon };
          const open2 = projectId(navigation[48]).open;
          const tmp73 = projectId(navigation[48]);
          const intl3 = closure_0(navigation[34]).intl;
          formatToPlainString = intl3.formatToPlainString;
          obj13 = { title: obj15.versionTitle(closure_0.subject).short };
          Z4n6LX = projectId(navigation[35]).Z4n6LX;
          obj15 = closure_0(navigation[52]);
          open2("CONJURE_VERSION_RESTORED", obj11);
          if (null != c1) {
            c6 = 5;
            c7 = 1;
            const obj14 = { value: obj2.rewindDataAfterVersionRestore(closure_1, c1), done: false };
            obj2 = closure_0(navigation[53]);
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
          const obj12 = closure_0(navigation[51]);
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
  const items30 = [projectId];
  callback5 = useCallback(function() {
    return closure_0(...arguments);
  }, items30);
  const items31 = [callback5, , ];
  let install_scope1;
  const useCallback2 = obj2.useCallback;
  if (stateFromStores != null) {
    install_scope1 = stateFromStores.install_scope;
  }
  items31[1] = install_scope1;
  items31[2] = projectId;
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
  }, items31);
  const tmpResult39 = tmp(tmp2[55]);
  conjureDebugPaneEnabled = tmpResult39.useConjureDebugPaneEnabled();
  const tmpResult40 = tmp(tmp2[56]);
  isConjureMcpUiEnabled = tmpResult40.useIsConjureMcpUiEnabled("ConjureChatScene");
  const items32 = [navigation, projectId];
  callback6 = obj2.useCallback(() => {
    const obj = { projectId };
    return navigation.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, obj);
  }, items32);
  const items33 = [frameSurface];
  const memo5 = obj2.useMemo(() => {
    const obj = conjurePreviewSurface;
    return obj.getConjurePreviewSurface(undefined, frameSurface);
  }, items33);
  const tmp112 = setAppChannel(tmp4(tmp2[58])(previewAppId, memo5));
  closure_38 = tmp112;
  const items34 = [previewAppId];
  callback7 = obj2.useCallback(() => {
    if (null != previewAppId) {
      const obj = restartFrames;
      obj.restartAppFrames(tmp);
    }
  }, items34);
  const tmpResult41 = tmp(tmp2[60]);
  key = tmpResult41.useRoute().key;
  let tmp114;
  const tmpResult42 = tmp(tmp2[60]);
  if (tmpResult42.useNavigationState((arg0) => {
    const first = arg0.routes[0];
    key = undefined;
    if (first != null) {
      key = first.key;
    }
    return key === key;
  })) {
    tmp114 = onExit;
  }
  onExit = tmp114;
  const items35 = [tmp114, navigation];
  callback8 = obj2.useCallback(() => {
    if (null != onExit) {
      tmp();
    } else {
      navigation.goBack();
    }
  }, items35);
  const items36 = [callback8, projectId];
  callback9 = obj2.useCallback(() => {
    closeConnection(projectId);
    callback8();
  }, items36);
  const items37 = [tmp19];
  const items38 = [projectId];
  const tmpResult43 = tmp(tmp2[19]);
  stateFromStores4 = tmpResult43.useStateFromStores(items37, () => ConjureProjectStore.isProjectDeleting(projectId), items38);
  const items39 = [stateFromStores4, callback9];
  const effect3 = obj2.useEffect(() => {
    const tmp = stateFromStores4;
    if (tmp) {
      callback9();
    }
  }, items39);
  let obj7 = { projectId, refreshApplicationId: tmp120 };
  const modes2 = availability.modes;
  tmp120 = null;
  const tmp4Result = tmp4(tmp2[61]);
  if (modes2.includes("widget")) {
    tmp120 = null;
    if ("unavailable-authorization-revoked" !== availability.profileState) {
      tmp120 = widgetApplicationId;
    }
  }
  const tmp4ResultResult = tmp4Result(obj7);
  preview = tmp4ResultResult;
  const tmpResult44 = tmp(tmp2[62]);
  conjureRemoveTarget = tmpResult44.useConjureRemoveTarget(projectId);
  const effect4 = obj2.useEffect(() => () => {
    const obj = projectId(navigation[44]);
    return obj.hideActionSheet(guildId(navigation[63]).CONJURE_CHAT_MORE_SHEET_KEY);
  }, []);
  const items40 = [conjureDebugPaneEnabled, tmp64, guildId, callback4, callback6, callback21, callback3, callback2, callback7, isConjureMcpUiEnabled, tmp112, tmp4ResultResult, stateFromStores, conjureRemoveTarget];
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
      if (closure_38) {
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
  }, items40);
  if (projectName == null) {
    let intl2 = tmp(tmp2[34]).intl;
    if (!projectExists) {
      let uk6jhJ;
      if (!stateFromStores1) {
        uk6jhJ = tmp4(tmp2[35]).G1WwgK;
      }
      projectName = tmp125(uk6jhJ);
    }
    uk6jhJ = tmp4(tmp2[35]).uk6jhJ;
  }
  let tmp128 = null;
  if (null != tmp114) {
    let obj8 = { onExit: tmp114 };
    tmp128 = c15(num2, obj8);
  }
  const items41 = [tmp128, ];
  let obj9 = { onBack: callback8, showBorder: tmp133, title: c15(tmp4Result7, { project: tmp135, title: projectName, onPressIcon: callback2 }), actions: tmp126Result };
  tmp133 = !tmp60;
  const tmp4Result6 = tmp4(tmp2[64]);
  if (true === preview_ready && null != previewAppId && !isResolving && availability.modes.length > 0) {
    tmp133 = !projectExists;
  }
  tmp135 = null;
  tmp4Result7 = tmp4(tmp2[65]);
  if (projectExists) {
    tmp135 = stateFromStores;
  }
  tmp126Result = null;
  if (projectExists) {
    let tmp131Result6 = null;
    if (null != publish) {
      let obj10 = {
        IconComponent: tmp(tmp2[67]).UploadIcon,
        onPress() {
              return closure_26("header");
            },
        disabled: "publishing" === indicator,
        accessibilityLabel: label,
        badge: tmp131Result,
        badgeSize: result2
      };
      tmp131Result = null;
      const tmp4Result8 = tmp4(tmp2[66]);
      if (null != indicator) {
        let obj11 = { indicator };
        tmp131Result = tmp131(tmp4(tmp2[68]), obj11);
      }
      result2 = undefined;
      if (null != indicator) {
        const tmpResult45 = tmp(tmp2[68]);
        result2 = tmpResult45.conjurePublishBadgeSize(indicator);
      }
      tmp131Result6 = tmp131(tmp4Result8, obj10);
    }
    let obj12 = { children: items42 };
    items42 = [tmp131Result6, ];
    let obj13 = { IconComponent: tmp(tmp2[69]).MoreHorizontalIcon, onPress: callback10, accessibilityLabel: intl3.string(tmp(tmp2[34]).t["UKOtz+"]) };
    const tmp4Result9 = tmp4(tmp2[66]);
    intl3 = tmp(tmp2[34]).intl;
    items42[1] = c15(tmp4Result9, obj13);
    tmp126Result = tmp126(tmp127, obj12);
  }
  let obj14 = { children: items41 };
  items41[1] = c15(tmp4Result6, obj9);
  const tmp126Result3 = closure_17(c16, obj14);
  let routeFocused;
  const tmpResult46 = tmp(tmp2[60]);
  const isFocused = tmpResult46.useIsFocused();
  if (context != null) {
    routeFocused = context.routeFocused;
  }
  closure_47 = tmp145;
  const items43 = [true === routeFocused && isFocused, projectId];
  const effect5 = obj2.useEffect(() => {
    if (closure_47) {
      let obj = ConjureActionCreators;
      const globalChatProject = obj.selectGlobalChatProject(projectId);
      return () => {
        const obj = guildId(navigation[21]);
        return obj.clearGlobalChatProject(projectId);
      };
    }
  }, items43);
  const items44 = [guildId, projectId, tmp6];
  const effect6 = obj2.useEffect(() => {
    if (!closure_3) {
      let obj = ConjureActionCreators;
      const result = obj.setSelectedProjectForGuild(guildId, projectId);
      return () => {
        const obj = guildId(navigation[21]);
        return obj.setSelectedProjectForGuild(closure_1_0, null);
      };
    }
  }, items44);
  if (projectExists) {
    let obj15 = { style: items45, children: items46 };
    items45 = [tmp7.contentBare, animatedStyle];
    const View = tmp4(tmp2[32]).View;
    items46 = [c15(tmp4(tmp2[70]), { absolute: true, mix: true }), tmp126Result3, , ];
    let tmp131Result7 = null;
    if (true === preview_ready && null != previewAppId && !isResolving && availability.modes.length > 0) {
      const obj16 = { style: tmp7.segments, children: c15(tmp4(tmp2[73]), obj17) };
      obj17 = { state: segmentedControlState, extras: memo3 };
      tmp131Result7 = tmp131(activeMode, obj16);
    }
    items46[2] = tmp131Result7;
    let tmp131Result8 = null;
    const obj18 = { style: tmp7.panes, children: items47 };
    if (hasItem) {
      tmp131Result8 = null;
      if (null != previewAppId) {
        const obj19 = { style: tmp64 ? tmp7.pane : tmp7.paneBackstage, pointerEvents: str6, accessibilityElementsHidden: !tmp64, importantForAccessibility: str7, children: c15(tmp(tmp2[74]).PreviewFrame, obj20) };
        str6 = "none";
        if (tmp64) {
          str6 = "auto";
        }
        str7 = "no-hide-descendants";
        if (tmp64) {
          str7 = "auto";
        }
        obj20 = { applicationId: previewAppId, projectId, frameSurface, launch: frameLaunchParams, visible: tmp64 };
        tmp131Result8 = tmp131(tmp154, obj19);
      }
    }
    items47 = [tmp131Result8, , ];
    let tmp131Result9 = null;
    if (tmp61) {
      tmp131Result9 = null;
      if (null != previewAppId) {
        tmp131Result9 = null;
        if (!tmp64) {
          const obj21 = { style: tmp7.pane, children: c15(tmp4Result10, obj22) };
          obj22 = { projectId, previewApplicationId: previewAppId, mode: activeMode, availability, frameSurface, frameLaunchParams, widgetApplicationId, frameHostAvailable: tmp40, botInstall: tmp158 };
          tmp158 = null;
          tmp4Result10 = tmp4(tmp2[74]);
          if (result1) {
            tmp158 = { onAddBot: callback, loading: isLoading };
            const obj23 = { onAddBot: callback, loading: isLoading };
          }
          tmp131Result9 = tmp131(tmp154, obj21);
        }
      }
    }
    items47[1] = tmp131Result9;
    const items48 = [tmp7.chatPane, , ];
    let paneHidden = tmp61;
    const View2 = tmp4(tmp2[32]).View;
    if (tmp61) {
      paneHidden = tmp7.paneHidden;
    }
    items48[1] = paneHidden;
    items48[2] = animatedStyle1;
    const obj24 = { style: items48, children: c15(Provider, obj25) };
    obj25 = { value: publishOptions, children: c15(Provider2, obj26) };
    Provider = tmp(tmp2[75]).ConjurePublishActionContext.Provider;
    obj26 = { value: projectId, children: c15(tmp4(tmp2[77]), obj27) };
    Provider2 = tmp(tmp2[76]).ConjureFileMentionProjectContext.Provider;
    obj27 = { projectId, transcriptTopInset: tmp11, onRestoreVersion: callback5, hidden: tmp61 };
    items47[2] = c15(View2, obj24);
    items46[3] = closure_17(activeMode, obj18);
    tmp126Result4 = tmp126(View, obj15);
  } else {
    const obj28 = { style: tmp7.contentBare, children: items49 };
    items49 = [c15(tmp4(tmp2[70]), { absolute: true, mix: true }), tmp126Result3, ];
    const obj29 = { style: items50, children: tmp131Result10 };
    items50 = [, ];
    ({ content: arr48[0], centered: arr48[1] } = tmp7);
    if (stateFromStores1) {
      tmp131Result10 = tmp131(stateFromStores3, {});
    } else {
      const obj30 = { style: tmp7.listError, children: items51 };
      const obj31 = { variant: "heading-lg/semibold", color: "text-default", children: intl4.string(tmp4(tmp2[35]).G1WwgK) };
      const Text = tmp(tmp2[71]).Text;
      intl4 = tmp(tmp2[34]).intl;
      items51 = [c15(Text, obj31), , ];
      const obj32 = { variant: "text-md/normal", color: "text-muted", children: intl5.string(tmp4(tmp2[35]).fINulo) };
      const Text2 = tmp(tmp2[71]).Text;
      intl5 = tmp(tmp2[34]).intl;
      items51[1] = c15(Text2, obj32);
      const obj33 = {
        variant: "secondary",
        size: "sm",
        text: intl6.string(tmp4(tmp2[35])["WFJ/vb"]),
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
      const Button = tmp(tmp2[72]).Button;
      intl6 = tmp(tmp2[34]).intl;
      items51[2] = c15(Button, obj33);
      tmp131Result10 = tmp126(tmp148, obj30);
    }
    items49[2] = c15(activeMode, obj29);
    tmp126Result4 = tmp126(tmp148, obj28);
  }
  return tmp126Result4;
};
