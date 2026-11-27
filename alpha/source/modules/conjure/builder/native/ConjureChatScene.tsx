// Module ID: 18452
// Function ID: 18453
// Name: ConjureChatScene
// Dependencies: [5, 32, 19, 17, 2165, 1387, 7693, 7668, 6934, 7706, 6937, 21, 5043, 575, 1501, 18453, 1629, 18454, 1643, 1707, 504, 18455, 7667, 11453, 6971, 18456, 14754, 18458, 18459, 5684, 11470, 7727, 18460, 18461, 11467, 1654, 18462, 1112, 4245, 9817, 18464, 1495, 8617, 7725, 7689, 18465, 18470, 18503, 18504, 5257, 18505, 11451, 18571, 18581, 5725, 16702, 18585, 5724, 18587, 18588, 18590, 18604, 18605, 7677, 14071, 14078, 1502, 11465, 18606, 12516, 18609, 18610, 18474, 18619, 18620, 18621, 11449, 9703, 18622, 7745, 10592, 5634, 5641, 18623, 18624, 11469, 18535, 18643, 5220, 5219, 7197, 2]
// Exports: default

// Module 18452 (ConjureChatScene)
import nativeDefault from "native" /* 575 */;
import intl9 from "intl" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5219 */;
import RootNavigationRef from "RootNavigationRef" /* 5220 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5257 */;
import ConjureProjectStore2 from "ConjureProjectStore" /* 6934 */;
import FramesConstants from "FramesConstants" /* 6937 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 7197 */;
import ConjureActionCreators from "ConjureActionCreators" /* 7667 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 7677 */;
import ConjureConnectionStore2 from "ConjureConnectionStore" /* 7693 */;
import ConjurePreviewActionCreators from "ConjurePreviewActionCreators" /* 7725 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 11451 */;
import ConjureRemix from "ConjureRemix" /* 11453 */;
import restartFrames from "restartFrames" /* 14078 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 18459 */;
import conjurePreviewTargets from "conjurePreviewTargets" /* 18462 */;
import ConjureSettingsSheet from "ConjureSettingsSheet" /* 18505 */;
import openConjureShareSheetDefault from "openConjureShareSheet" /* 18571 */;
import ConjureConnectToolSheet from "ConjureConnectToolSheet" /* 18581 */;
import ConjureHistorySheet from "ConjureHistorySheet" /* 18590 */;
import ConjureChatMoreSheet from "ConjureChatMoreSheet" /* 18610 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationStore from "ApplicationStore" /* 2165 */;
import UserStore from "UserStore" /* 1387 */;
import ConjureLastIntegrationStatusStore from "ConjureLastIntegrationStatusStore" /* 7668 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 7706 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
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
function isShowingProject(arg0, isFocused) {
  let findLastResult;
  let index;
  let routes;
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
  if (null != isFocused) {
    let name;
    if (findLastResult != null) {
      name = findLastResult.name;
    }
    const tmp13 = "conjure" === name && isFocused.isFocused();
    return tmp13;
  } else {
    const tmpResult = NavigationRouteUtils;
    const coerceMainRouteResult = tmpResult.coerceMainRoute(findLastResult);
    let state;
    if (coerceMainRouteResult != null) {
      state = coerceMainRouteResult.state;
    }
    let tmp8;
    const coerceChannelRoute = NavigationRouteUtils.coerceChannelRoute;
    NavigationRouteUtils;
    if (state != null) {
      ({ index, routes } = state);
      if (index == null) {
        index = 0;
      }
      tmp8 = routes[index];
    }
    const coerceChannelRouteResult = coerceChannelRoute(tmp8);
    let subRouteId;
    if (coerceChannelRouteResult != null) {
      subRouteId = coerceChannelRouteResult.params.subRouteId;
    }
    return subRouteId === arg0;
  }
}
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
const isLaunched = FramesConstants.isLaunched;
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
  let c20;
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
  let items54;
  let items55;
  let items56;
  let items57;
  let items58;
  let items59;
  let items61;
  let items62;
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
  let result2;
  let str6;
  let str7;
  let text;
  let tmp11;
  let tmp12;
  let tmp138;
  let tmp14;
  let tmp145Result;
  let tmp145Result5;
  let tmp15;
  let tmp150Result7;
  let tmp150Result9;
  let tmp152;
  let tmp154;
  let tmp16;
  let tmp17;
  let tmp43;
  let tmp4Result7;
  let tmp51;
  let tmp52;
  let tmp54;
  let tmp55;
  let tmp58;
  let tmp59;
  let tmp61;
  let tmp62;
  let tmp87;
  let tmp88;
  let tmp89;
  let tmp90;
  let tmp91;
  let tmp93;
  let tmp94;
  let tmp95;
  let tmp96;
  let widgetApplicationId;
  guildId = guildId.guildId;
  const projectId = guildId.projectId;
  navigation = undefined;
  let stateFromStores;
  previewAppId = undefined;
  let stateFromStores1;
  let isLoading;
  let stateFromStores3;
  let stateFromStores4;
  let availability;
  let activeMode;
  let setMode;
  let frameSurface;
  let frameSurfaceOptions;
  let setFrameSurface;
  let appChannel;
  let setAppChannel;
  let view;
  let setView;
  c20 = undefined;
  let c21;
  let onAddBot;
  let c23;
  let conjurePreviewAddBotPrompt;
  closure_25 = undefined;
  let canAnnotate;
  let result1;
  let memo1;
  let memo2;
  let c30;
  let closure_31;
  let num2;
  let activeIndex;
  let setActiveIndex;
  let publishOptions;
  let publish;
  let closure_37;
  let canShare;
  let stateFromStores5;
  let stateFromStores6;
  projectGuildId = undefined;
  let callback2;
  let memo5;
  let callback4;
  let callback5;
  let closure_46;
  let callback6;
  let callback7;
  let conjureDebugPaneEnabled;
  let isConjureMcpUiEnabled;
  let callback8;
  let closure_52;
  let callback9;
  let key;
  onExit = undefined;
  let callback10;
  let callback11;
  let stateFromStores7;
  let preview;
  let conjureRemoveTarget;
  let closure_61;
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
  const tmp7 = c21(bottom);
  const tmp8 = projectId(navigation[17])();
  let tmp9 = stateFromStores;
  [tmp11, tmp12] = stateFromStores(previewAppId.useState(0), 2);
  const tmp10 = stateFromStores(previewAppId.useState(0), 2);
  let items = [c23, , , ];
  const useKeyboardHandler = guildId(navigation[18]).useKeyboardHandler;
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
  const items3 = [frameSurfaceOptions];
  const items4 = [projectId];
  const tmpResult = tmp(tmp2[20]);
  stateFromStores = tmpResult.useStateFromStores(items3, () => {
    let project = ConjureProjectStore.getProject(projectId);
    if (project == null) {
      project = null;
    }
    return project;
  }, items4);
  const tmpResult31 = tmp(tmp2[21]);
  const trackConjureBuilderOpened = tmpResult31.useTrackConjureBuilderOpened(projectId, entryPoint);
  const items5 = [frameSurfaceOptions];
  const items6 = [projectId];
  const tmpResult32 = tmp(tmp2[20]);
  const stateFromStoresObject = tmpResult32.useStateFromStoresObject(items5, () => {
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
  const items8 = [projectId];
  const tmpResult33 = tmp(tmp2[20]);
  stateFromStores1 = tmpResult33.useStateFromStores(items7, () => {
    let result = null == ConjureProjectStore.getProject(projectId);
    const tmp = projectId;
    if (result) {
      const obj = ConjureRemix;
      result = obj.isConjureRemixCreating(tmp);
    }
    return result;
  }, items8);
  const items9 = [frameSurfaceOptions];
  const items10 = [guildId, tmp6];
  const tmpResult34 = tmp(tmp2[20]);
  let tmp24 = tmpResult34.useStateFromStores(items9, () => {
    let ownedProjectsFetchState;
    if (closure_3) {
      ownedProjectsFetchState = obj.getOwnedProjectsFetchState();
    } else {
      ownedProjectsFetchState = obj.getGuildProjectsFetchState(guildId);
    }
    return "unattempted" === ownedProjectsFetchState || "loading" === ownedProjectsFetchState;
  }, items10) || stateFromStores1;
  if (!tmp24) {
    tmp24 = tmp6 && !projectExists && !projectUnavailable;
    const tmp25 = tmp6 && !projectExists && !projectUnavailable;
  }
  const items11 = [tmp19, frameSurface];
  const items12 = [projectId];
  const tmpResult35 = tmp(tmp2[20]);
  const stateFromStores2 = tmpResult35.useStateFromStores(items11, () => {
    let integrationStatus = ConjureProjectStore.getIntegrationStatus(projectId);
    const tmp = projectId;
    if (integrationStatus == null) {
      integrationStatus = ConjureLastIntegrationStatusStore.getIntegrationStatus(tmp);
    }
    return integrationStatus;
  }, items12);
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
  const useApplication = tmp(tmp2[24]).useApplication;
  tmp(tmp2[24]);
  isLoading = useApplication(previewAppId).isLoading;
  const items13 = [appChannel];
  const items14 = [projectId];
  const tmpResult37 = tmp(tmp2[20]);
  stateFromStores3 = tmpResult37.useStateFromStores(items13, () => {
    const publishStatus = ConjurePublishStatusStore.getPublishStatus(projectId);
    let previewAppChannels;
    if (publishStatus != null) {
      previewAppChannels = publishStatus.previewAppChannels;
    }
    return previewAppChannels;
  }, items14);
  const tmp31 = appChannel;
  if (stateFromStores3 == null) {
    let preview_app_channels;
    if (stateFromStores2 != null) {
      preview_app_channels = stateFromStores2.preview_app_channels;
    }
    stateFromStores3 = preview_app_channels;
  }
  const items15 = [tmp31];
  const items16 = [projectId];
  const tmpResult38 = tmp(tmp2[20]);
  stateFromStores4 = tmpResult38.useStateFromStores(items15, () => {
    const publishStatus = ConjurePublishStatusStore.getPublishStatus(projectId);
    let tmp2;
    if (publishStatus != null) {
      const views = publishStatus.views;
      if (views != null) {
        tmp2 = views.views;
      }
    }
    return tmp2;
  }, items16);
  let obj4 = { applicationId: previewAppId, previewApplicationId: previewAppId, declaredActivity: true === has_activity, previewSupportedSurfaces: prop, installScope: install_scope, ownerAuthorizationRevoked: true === prop1, mainCardOnly: true, previewAppChannels: stateFromStores3, previewViews: stateFromStores4 };
  has_activity = undefined;
  const useConjurePreviewMode = tmp(tmp2[25]).useConjurePreviewMode;
  tmp(tmp2[25]);
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
  view = conjurePreviewMode.view;
  setView = conjurePreviewMode.setView;
  ({ frameLaunchParams, widgetApplicationId, isResolving } = conjurePreviewMode);
  const tmpResult40 = tmp(tmp2[26]);
  const conjurePreviewModeRequests = tmpResult40.useConjurePreviewModeRequests(projectId, (arg0) => {
    const modes = availability.modes;
    if (modes.includes(arg0)) {
      setMode(arg0);
    }
  });
  const tmpResult41 = tmp(tmp2[27]);
  const conjureTraceRequests = tmpResult41.useConjureTraceRequests(projectId, () => {
    const obj = { projectId };
    return navigation.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, obj);
  });
  [tmp43, c20] = tmp9(obj2.useState(null), 2);
  const items17 = [projectId, tmp6, stateFromStores1];
  tmp9(obj2.useState(null), 2);
  const effect = obj2.useEffect(() => {
    const tmp = stateFromStores1;
    if (!tmp) {
      const tmp2 = closure_3;
      if (tmp2) {
        const tmp4 = projectId;
        if (null == ConjureProjectStore.getProject(projectId)) {
          const obj2 = ConjureActionCreators;
          const missingConjureProjectNow = obj2.fetchMissingConjureProjectNow(tmp4);
        }
      }
      const obj = ConjureActionCreators;
      const project = obj.getProject(projectId);
      project.then(() => closure_1_20(projectId), () => {

      });
    }
  }, items17);
  const tmp45 = null != previewAppId && null != tmp4(tmp2[29])(previewAppId);
  const tmpResult42 = tmp(tmp2[30]);
  let result = tmpResult42.conjureInstallGuildId(stateFromStores, guildId);
  c21 = result;
  const items18 = [result, previewAppId, stateFromStores, projectId];
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
              const obj2 = application(navigation[24]);
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
            guildId: closure_130_21,
            onClose() {
                    let obj = c0(navigation[30]);
                    const result = obj.repairConjureGuildHints(closure_1_4, closure_1_21);
                    const cleanupPromise = result.finally(() => {
                      const obj = application(closure_2_2[22]);
                      return obj.getProject(closure_1_1);
                    });
                    cleanupPromise.catch(() => {

                    });
                  }
          };
          const openConjureAppInstallModal = tmp(navigation[31]).openConjureAppInstallModal;
          const tmp22 = tmp(navigation[31]);
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
  }), items18);
  [tmp51, tmp52] = tmp9(obj2.useState(true), 2);
  c23 = tmp52;
  tmp9(obj2.useState(true), 2);
  [tmp54, tmp55] = tmp9(obj2.useState(false), 2);
  let tmp56 = null;
  const useState = obj2.useState;
  tmp9(obj2.useState(false), 2);
  const tmp48 = _asyncToGenerator;
  if (null != stateFromStores2) {
    tmp56 = tmp46;
  }
  [tmp58, tmp59] = tmp9(useState(tmp56), 2);
  tmp9(useState(tmp56), 2);
  [tmp61, tmp62] = tmp9(obj2.useState(null), 2);
  tmp9(obj2.useState(null), 2);
  const tmp9Result10 = tmp9(obj2.useState(projectId), 2);
  if (tmp9Result10[0] !== projectId) {
    tmp9Result10[1](projectId);
    tmp52(true);
    tmp55(false);
    tmp59(null);
    tmp62(null);
  }
  const tmpResult43 = tmp(tmp2[32]);
  conjurePreviewAddBotPrompt = tmpResult43.useConjurePreviewAddBotPrompt(projectId, guildId);
  const tmp71 = null != conjurePreviewAddBotPrompt && (true === preview_ready && null != previewAppId && !isResolving && availability.modes.length > 0) && conjurePreviewAddBotPrompt.prompt.id !== tmp61;
  if (tmp71) {
    tmp62(conjurePreviewAddBotPrompt.prompt.id);
    tmp52(false);
  }
  const tmp74 = true === preview_ready && null != previewAppId && !isResolving && availability.modes.length > 0 && !tmp51;
  closure_25 = tmp74;
  let hasItem = tmp69;
  const tmpResult44 = tmp(tmp2[33]);
  const conjureAgentNeedsPreview = tmpResult44.useConjureAgentNeedsPreview(projectId);
  if (true === preview_ready && null != previewAppId && !isResolving && availability.modes.length > 0) {
    hasItem = tmp45;
  }
  if (hasItem) {
    let modes = availability.modes;
    hasItem = modes.includes("frame");
  }
  let tmp77 = hasItem && tmp74;
  if (tmp77) {
    tmp77 = "frame" === activeMode;
  }
  if (tmp77) {
    tmp77 = null == conjurePreviewAddBotPrompt;
  }
  canAnnotate = tmp77;
  if (hasItem) {
    hasItem = tmp54 || tmp77 || conjureAgentNeedsPreview;
    const tmp78 = tmp54 || tmp77 || conjureAgentNeedsPreview;
  }
  const tmp79 = hasItem && !tmp54;
  if (tmp79) {
    tmp55(true);
  }
  let obj5 = { installScope: install_scope, previewReady: tmp46, integrationInstalled: prop2 };
  prop2 = undefined;
  const previewBotInstallBlocksMode = tmp(tmp2[34]).previewBotInstallBlocksMode;
  tmp(tmp2[34]);
  if (stateFromStores2 != null) {
    prop2 = stateFromStores2.integration_installed;
  }
  if (prop2 == null) {
    prop2 = null;
  }
  result1 = previewBotInstallBlocksMode(activeMode, obj5);
  const items19 = [conjurePreviewAddBotPrompt, result1, onAddBot, isLoading];
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
  }, items19);
  const items20 = [conjurePreviewAddBotPrompt, tmp74, , , ];
  let tmp86 = tmp74;
  const useAnimatedStyle = tmp(tmp2[35]).useAnimatedStyle;
  tmp(tmp2[35]);
  if (tmp74) {
    tmp86 = "bot" === activeMode;
  }
  items20[2] = tmp86;
  items20[3] = tmp8;
  items20[4] = bottom;
  [tmp87, tmp88, tmp89, tmp90, tmp91] = items20;
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
  const items21 = [tmp88, tmp89, tmp90, tmp91];
  ConjureChatSceneTsx2.__closure = items21;
  ConjureChatSceneTsx2.__workletHash = 8818171941973;
  ConjureChatSceneTsx2.__initData = tmp87;
  const animatedStyle = useAnimatedStyle(ConjureChatSceneTsx2);
  const items22 = [closure_25, tmp74, tmp8, bottom];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp93, tmp94, tmp95, tmp96] = items22;
  const tmpResult47 = tmp(tmp2[35]);
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
  const items23 = [tmp94, tmp95, tmp96];
  ConjureChatSceneTsx3.__closure = items23;
  ConjureChatSceneTsx3.__workletHash = 6849996535358;
  ConjureChatSceneTsx3.__initData = tmp93;
  const items24 = [availability.modes, frameSurfaceOptions, stateFromStores3, stateFromStores4];
  const animatedStyle1 = tmpResult47.useAnimatedStyle(ConjureChatSceneTsx3);
  memo1 = obj2.useMemo(() => {
    const obj = conjurePreviewTargets;
    return obj.previewTargets(availability.modes, frameSurfaceOptions, stateFromStores3, stateFromStores4);
  }, items24);
  const items25 = [activeMode, frameSurface, appChannel, view];
  memo2 = obj2.useMemo(() => {
    const obj = conjurePreviewTargets;
    return obj.activePreviewTarget(activeMode, frameSurface, appChannel, view);
  }, items25);
  let intl = tmp(tmp2[37]).intl;
  const stringResult = intl.string(tmp4(tmp2[38])["N+VA1J"]);
  c30 = stringResult;
  const items26 = [memo2, availability.modes.length, stringResult, tmp74];
  const memo3 = obj2.useMemo(() => {
    let intl;
    let items2;
    const obj = { id: "chat", label: intl.string(_modDef4245["1HH2p9"]), page: null };
    intl = intl9.intl;
    const items = [obj];
    if (availability.modes.length > 0) {
      const tmp4 = closure_25;
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
      previewTargetLabel = c30;
    } else {
      items2 = [];
    }
    HermesBuiltin.arraySpread(items, items2, 1);
    return items;
  }, items26);
  let tmp102 = null != memo2;
  const callback1 = obj2.useCallback((arg0) => {
    metroImportDefault.dismiss();
    _undefined(0 === arg0);
  }, []);
  if (tmp102) {
    let num = 1;
    tmp102 = memo1.length > 1;
  }
  closure_31 = tmp102;
  const items27 = [memo2, tmp102, stringResult, tmp74, setAppChannel, setFrameSurface, setMode, setView, memo1];
  let first = availability.modes[0];
  let tmp105 = null != stateFromStores2;
  const memo4 = obj2.useMemo(() => {
    let fn;
    let fn2;
    let intl;
    let target;
    let targets;
    let tmp;
    if (null != memo2) {
      let tmp3;
      if (closure_25) {
        tmp3 = c30;
      }
      let obj = { prefix: tmp3, renderTrailingIcon: fn, menuLabel: intl.string(_modDef4245.I2ucou), onShowMenu: fn2 };
      fn = undefined;
      if (closure_25) {
        if (closure_31) {
          fn = (color) => {
            const obj = { size: "xs", color };
            return view(guildId(navigation[39]).ChevronSmallDownIcon, obj);
          };
        }
      }
      intl = intl9.intl;
      fn2 = undefined;
      if (closure_31) {
        fn2 = () => {
          let obj = {
            targets,
            target,
            onChange(mode) {
              const obj = guildId(navigation[36]);
              const previewTarget = obj.selectPreviewTarget(mode, closure_1_12, closure_1_15, closure_1_17, closure_1_19);
              closure_1_23(false);
            }
          };
          return projectId(navigation[40])(obj);
        };
      }
      tmp = { preview: obj };
      const obj2 = { preview: obj };
    }
    return tmp;
  }, items27);
  if (tmp105) {
    tmp105 = tmp46 !== tmp58;
  }
  if (tmp105) {
    const tmp106 = false === tmp58 && true === preview_ready && null != first;
    if (tmp106) {
      setMode(first);
      tmp52(false);
    }
    tmp59(true === preview_ready);
  }
  const width = tmp4(tmp2[41])().width;
  let obj6 = { items: memo3, pageWidth: width - 2 * onAddBot, onSetActiveIndex: callback1 };
  const tmpResult48 = tmp(tmp2[42]);
  const segmentedControlState = tmpResult48.useSegmentedControlState(obj6);
  if (tmp51) {
    num2 = 0;
  } else {
    num2 = 1;
  }
  activeIndex = segmentedControlState.activeIndex;
  setActiveIndex = segmentedControlState.setActiveIndex;
  const items28 = [num2, activeIndex, setActiveIndex];
  const effect1 = obj2.useEffect(() => {
    if (activeIndex.get() !== num2) {
      setActiveIndex(tmp, false);
    }
  }, items28);
  const items29 = [previewAppId];
  const layoutEffect = obj2.useLayoutEffect(() => {
    if (null != previewAppId) {
      let obj = ConjurePreviewActionCreators;
      const result = obj.setBuilderPreviewApplicationId(tmp);
      return () => {
        const obj = guildId(navigation[43]);
        return obj.setBuilderPreviewApplicationId(null);
      };
    }
  }, items29);
  const items30 = [previewAppId];
  const effect2 = obj2.useEffect(() => null != previewAppId ? (() => projectId(navigation[44])(previewAppId)) : undefined, items30);
  const tmp114 = tmp4(tmp2[45])(projectId, guildId);
  publishOptions = tmp114.publishOptions;
  publish = tmp114.publish;
  ({ indicator, hint, text, pendingChanges } = tmp114);
  closure_37 = tmp4(tmp2[46])(projectId, publish, publishOptions);
  const tmp115 = tmp4(tmp2[47])(stateFromStores);
  canShare = tmp4(tmp2[48])(projectId).canShare;
  const items31 = [availability];
  const tmpResult49 = tmp(tmp2[20]);
  stateFromStores5 = tmpResult49.useStateFromStores(items31, () => {
    const currentUser = availability.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const items32 = [activeMode];
  const items33 = [projectId, stateFromStores5];
  const tmpResult50 = tmp(tmp2[20]);
  stateFromStores6 = tmpResult50.useStateFromStores(items32, () => ConjureConnectionStore.isAccessRefused(projectId, stateFromStores5), items33);
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items34 = [projectId, projectGuildId];
  callback2 = obj2.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { content: view(ConjureSettingsSheetDefault, obj2), key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY };
    obj2 = { projectId, guildId: projectGuildId, isPreview: true };
    showActionSheet(obj);
  }, items34);
  const items35 = [guildId, navigation, tmp6];
  memo5 = obj2.useMemo(() => {
    let openHere;
    const tmp = closure_3;
    if (tmp) {
      openHere = function openHere(projectId) {
        const obj = { projectId, entryPoint: "remix" };
        closure_1_2.push(guildId(navigation[28]).ConjureScreenScenes.CHAT, obj);
      };
    } else {
      let obj = conjureStandaloneScenes;
      openHere = obj.projectOpener(guildId, (arg0) => {
        const obj = guildId(navigation[28]);
        return obj.pushServerProjectScreen(closure_1_0, arg0, "remix");
      });
    }
    return openHere;
  }, items35);
  const items36 = [guildId, memo5, stateFromStores];
  const items37 = [projectId];
  const callback3 = obj2.useCallback(() => {
    let obj2;
    if (null != stateFromStores) {
      const obj = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: view(ConjureRemixSheetDefault, obj2) };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      obj2 = { project: tmp, currentGuildId: guildId, onRemixed: memo5 };
      showActionSheet(obj);
    }
  }, items36);
  callback4 = obj2.useCallback(() => {
    const obj = { projectId };
    return openConjureShareSheetDefault(obj);
  }, items37);
  const items38 = [projectId];
  callback5 = obj2.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: ConjureConnectToolSheet.CONJURE_CONNECT_TOOL_SHEET_KEY, content: view(ConjureConnectToolSheetDefault, obj2) };
    obj2 = { projectId };
    showActionSheet(obj);
  }, items38);
  closure_46 = obj2.useRef(false);
  const useCallback = obj2.useCallback;
  _require = tmp48(function*(arg0, value) {
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
        const obj6 = { text: intl2.string(projectId(navigation[38]).qqlUiW), icon: closure_0(navigation[55]).UndoIcon };
        const open = projectId(navigation[54]).open;
        const tmp40 = projectId(navigation[54]);
        intl2 = closure_0(navigation[37]).intl;
        open("CONJURE_VERSION_RESTORING", obj6);
        let c5 = 2;
        c6 = 4;
        c7 = 1;
        const obj8 = { value: obj7.restoreSourceHistoryEntry(closure_1, closure_0.sha), done: false };
        obj7 = closure_0(navigation[56]);
        return obj8;
      }
    } else if (2 === c6) {
      c5 = 0;
      ref.current = false;
      throw closure_4;
    } else if (3 === c6) {
      const presentError = closure_0(navigation[57]).presentError;
      const tmp23 = closure_0(navigation[57]);
      const intl = closure_0(navigation[37]).intl;
      presentError(intl.string(projectId(navigation[38])["PSdo+w"]));
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
          const obj11 = { text: formatToPlainString(Z4n6LX, obj13), icon: closure_0(navigation[55]).UndoIcon };
          const open2 = projectId(navigation[54]).open;
          const tmp73 = projectId(navigation[54]);
          const intl3 = closure_0(navigation[37]).intl;
          formatToPlainString = intl3.formatToPlainString;
          obj13 = { title: obj15.versionTitle(closure_0.subject).short };
          Z4n6LX = projectId(navigation[38]).Z4n6LX;
          obj15 = closure_0(navigation[58]);
          open2("CONJURE_VERSION_RESTORED", obj11);
          if (null != c1) {
            c6 = 5;
            c7 = 1;
            const obj14 = { value: obj2.rewindDataAfterVersionRestore(closure_1, c1), done: false };
            obj2 = closure_0(navigation[59]);
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
          const obj12 = closure_0(navigation[57]);
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
  const items39 = [projectId];
  callback6 = useCallback(function() {
    return closure_0(...arguments);
  }, items39);
  const items40 = [callback6, projectId];
  callback7 = obj2.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: ConjureHistorySheet.CONJURE_HISTORY_SHEET_KEY, content: view(ConjureHistorySheetDefault, obj2) };
    obj2 = { projectId, onRestoreVersion: callback6 };
    showActionSheet(obj);
  }, items40);
  const tmpResult51 = tmp(tmp2[61]);
  conjureDebugPaneEnabled = tmpResult51.useConjureDebugPaneEnabled();
  const tmpResult52 = tmp(tmp2[62]);
  isConjureMcpUiEnabled = tmpResult52.useIsConjureMcpUiEnabled("ConjureChatScene");
  const items41 = [navigation, projectId];
  callback8 = obj2.useCallback(() => {
    const obj = { projectId };
    return navigation.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, obj);
  }, items41);
  const items42 = [frameSurface];
  const memo6 = obj2.useMemo(() => {
    const obj = conjurePreviewSurface;
    return obj.getConjurePreviewSurface(undefined, frameSurface);
  }, items42);
  const tmp129 = setAppChannel(tmp4(tmp2[64])(previewAppId, memo6));
  closure_52 = tmp129;
  const items43 = [previewAppId];
  callback9 = obj2.useCallback(() => {
    if (null != previewAppId) {
      const obj = restartFrames;
      obj.restartAppFrames(tmp);
    }
  }, items43);
  const tmpResult53 = tmp(tmp2[66]);
  key = tmpResult53.useRoute().key;
  let tmp131;
  const tmpResult54 = tmp(tmp2[66]);
  if (tmpResult54.useNavigationState((arg0) => {
    const first = arg0.routes[0];
    key = undefined;
    if (first != null) {
      key = first.key;
    }
    return key === key;
  })) {
    tmp131 = onExit;
  }
  onExit = tmp131;
  const items44 = [tmp131, navigation];
  callback10 = obj2.useCallback(() => {
    if (null != onExit) {
      tmp();
    } else {
      navigation.goBack();
    }
  }, items44);
  const items45 = [callback10, projectId];
  callback11 = obj2.useCallback(() => {
    closeConnection(projectId);
    callback10();
  }, items45);
  const items46 = [tmp19];
  const items47 = [projectId];
  const tmpResult55 = tmp(tmp2[20]);
  stateFromStores7 = tmpResult55.useStateFromStores(items46, () => ConjureProjectStore.isProjectDeleting(projectId), items47);
  const items48 = [stateFromStores7, callback11, projectId, tmp6, navigation];
  const effect3 = obj2.useEffect(() => {
    let tmp = stateFromStores7;
    if (tmp) {
      let tmp5 = null;
      const tmp2 = isShowingProject;
      const tmp3 = projectId;
      if (closure_3) {
        tmp5 = navigation;
      }
      tmp = tmp2(tmp3, tmp5);
    }
    if (tmp) {
      callback11();
    }
  }, items48);
  const tmpResult56 = tmp(tmp2[67]);
  const conjureRemixLeaveRequests = tmpResult56.useConjureRemixLeaveRequests(projectId, () => {
    let tmp3 = null;
    const tmp = isShowingProject;
    const tmp2 = projectId;
    if (closure_3) {
      tmp3 = navigation;
    }
    if (tmp(tmp2, tmp3)) {
      callback11();
    }
  });
  let obj7 = { projectId, refreshApplicationId: tmp138 };
  const modes2 = availability.modes;
  tmp138 = null;
  const tmp4Result = tmp4(tmp2[68]);
  if (modes2.includes("widget")) {
    tmp138 = null;
    if ("unavailable-authorization-revoked" !== availability.profileState) {
      tmp138 = widgetApplicationId;
    }
  }
  const tmp4ResultResult = tmp4Result(obj7);
  preview = tmp4ResultResult;
  const tmpResult57 = tmp(tmp2[69]);
  conjureRemoveTarget = tmpResult57.useConjureRemoveTarget(projectId);
  const tmpResult58 = tmp(tmp2[70]);
  const conjureAdminUnpublishLookup = tmpResult58.useConjureAdminUnpublishLookup(projectId);
  const effect4 = obj2.useEffect(() => () => {
    const obj = projectId(navigation[49]);
    return obj.hideActionSheet(guildId(navigation[71]).CONJURE_CHAT_MORE_SHEET_KEY);
  }, []);
  const items49 = [stateFromStores6, canShare, conjureDebugPaneEnabled, tmp77, guildId, callback5, callback8, callback7, callback2, callback4, callback9, isConjureMcpUiEnabled, tmp129, tmp4ResultResult, stateFromStores4, stateFromStores, publish, publishOptions, conjureRemoveTarget];
  const callback12 = obj2.useCallback(() => {
    let fn;
    let id;
    let obj2;
    let tmp11;
    let tmp18;
    let tmp2;
    let tmp20;
    let tmp4;
    let tmp6;
    let tmp9;
    if (null != stateFromStores) {
      let obj = { key: ConjureChatMoreSheet.CONJURE_CHAT_MORE_SHEET_KEY, content: tmp18(tmp20, obj2) };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      obj2 = { project: tmp, guildId, removeTarget: conjureRemoveTarget, canAnnotate, onOpenSettings: tmp2, onShare: tmp4, onRefresh: tmp6, onHistory: callback7, onDebug: tmp9, onConnectTool: tmp11, onPlaceViews: fn, preview };
      tmp2 = undefined;
      tmp18 = closure_18;
      tmp20 = ConjureChatMoreSheetDefault;
      if (!stateFromStores6) {
        tmp2 = callback2;
      }
      tmp4 = undefined;
      if (canShare) {
        tmp4 = callback4;
      }
      tmp6 = undefined;
      if (closure_52) {
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
      fn = undefined;
      if (null != stateFromStores4) {
        if (null != publish) {
          if (!publish.disabled) {
            fn = () => {
              const obj = guildId(navigation[72]);
              const obj2 = { projectId: id.id, publishOptions, entryPoint: "context_menu" };
              return obj.openConjurePublishReview(obj2);
            };
          }
        }
      }
      showActionSheet(obj);
    }
  }, items49);
  if (projectName == null) {
    let intl2 = tmp(tmp2[37]).intl;
    if (!projectExists) {
      if (!tmp24) {
        let uk6jhJ;
        if (tmp43 !== projectId) {
          uk6jhJ = tmp4(tmp2[38]).G1WwgK;
        }
        projectName = tmp144(uk6jhJ);
      }
    }
    uk6jhJ = tmp4(tmp2[38]).uk6jhJ;
  }
  let tmp147 = null;
  if (null != tmp131) {
    let obj8 = { onExit: tmp131 };
    tmp147 = view(result1, obj8);
  }
  const items50 = [tmp147, ];
  let obj9 = { onBack: callback10, showBorder: tmp152, title: view(tmp4Result7, { project: tmp154, title: projectName, onPressIcon: callback2, draft: pendingChanges }), actions: tmp145Result };
  tmp152 = !tmp69;
  const tmp4Result6 = tmp4(tmp2[73]);
  if (true === preview_ready && null != previewAppId && !isResolving && availability.modes.length > 0) {
    tmp152 = !projectExists;
  }
  if (!tmp152) {
    tmp152 = stateFromStores6;
  }
  tmp154 = null;
  tmp4Result7 = tmp4(tmp2[74]);
  if (projectExists) {
    tmp154 = null;
    if (!stateFromStores6) {
      tmp154 = stateFromStores;
    }
  }
  tmp145Result = null;
  if (projectExists) {
    let tmp150Result = null;
    if (null != stateFromStores) {
      tmp150Result = null;
      if (tmp115) {
        tmp150Result = null;
        if (setFrameSurface(stateFromStores)) {
          let obj10 = { IconComponent: tmp(tmp2[76]).PaperPlusIcon, onPress: callback3, accessibilityLabel: intl3.string(tmp4(tmp2[38]).XWgAfc) };
          const tmp4Result8 = tmp4(tmp2[75]);
          intl3 = tmp(tmp2[37]).intl;
          tmp150Result = tmp150(tmp4Result8, obj10);
        }
      }
    }
    const items51 = [tmp150Result, , ];
    let tmp150Result8 = null;
    if (null != publish) {
      let obj11 = {
        IconComponent: tmp(tmp2[77]).UploadIcon,
        onPress() {
              return closure_37("header");
            },
        disabled: "publishing" === indicator,
        dimmed: null == indicator,
        accessibilityLabel: text,
        accessibilityHint: hint,
        badge: tmp150Result7,
        badgeSize: result2
      };
      tmp150Result7 = undefined;
      const tmp4Result9 = tmp4(tmp2[75]);
      if (null != indicator) {
        let obj12 = { indicator };
        tmp150Result7 = tmp150(tmp4(tmp2[78]), obj12);
      }
      result2 = undefined;
      if (null != indicator) {
        const tmpResult59 = tmp(tmp2[78]);
        result2 = tmpResult59.conjurePublishBadgeSize(indicator);
      }
      tmp150Result8 = tmp150(tmp4Result9, obj11);
    }
    let obj13 = { children: items51 };
    items51[1] = tmp150Result8;
    let obj14 = { IconComponent: tmp(tmp2[79]).MoreHorizontalIcon, onPress: callback12, accessibilityLabel: intl4.string(tmp(tmp2[37]).t["UKOtz+"]) };
    const tmp4Result10 = tmp4(tmp2[75]);
    intl4 = tmp(tmp2[37]).intl;
    items51[2] = view(tmp4Result10, obj14);
    tmp145Result = tmp145(tmp146, obj13);
  }
  let obj15 = { children: items50 };
  items50[1] = view(tmp4Result6, obj9);
  const tmp145Result4 = c20(setView, obj15);
  let routeFocused;
  const tmpResult60 = tmp(tmp2[66]);
  const isFocused = tmpResult60.useIsFocused();
  if (context != null) {
    routeFocused = context.routeFocused;
  }
  closure_61 = tmp167;
  const items52 = [true === routeFocused && isFocused, projectId];
  const effect5 = obj2.useEffect(() => {
    if (closure_61) {
      let obj = ConjureActionCreators;
      const globalChatProject = obj.selectGlobalChatProject(projectId);
      return () => {
        const obj = guildId(navigation[22]);
        return obj.clearGlobalChatProject(projectId);
      };
    }
  }, items52);
  const items53 = [guildId, projectId, tmp6];
  const effect6 = obj2.useEffect(() => {
    if (!closure_3) {
      let obj = ConjureActionCreators;
      const result = obj.setSelectedProjectForGuild(guildId, projectId);
      return () => {
        const obj = guildId(navigation[22]);
        return obj.setSelectedProjectForGuild(closure_1_0, null);
      };
    }
  }, items53);
  if (!projectExists) {
    if (tmp43 !== projectId) {
      const obj16 = { style: tmp7.contentBare, children: items54 };
      items54 = [view(tmp4(tmp2[80]), { absolute: true, mix: true }), tmp145Result4, ];
      const obj17 = { style: items55, children: tmp150Result9 };
      items55 = [, ];
      ({ content: arr64[0], centered: arr64[1] } = tmp7);
      if (tmp24) {
        tmp150Result9 = tmp150(stateFromStores1, {});
      } else {
        const obj18 = { style: tmp7.listError, children: items56 };
        const obj19 = { variant: "heading-lg/semibold", color: "text-default", children: intl5.string(tmp4(tmp2[38]).G1WwgK) };
        const Text = tmp(tmp2[81]).Text;
        intl5 = tmp(tmp2[37]).intl;
        items56 = [view(Text, obj19), , ];
        const obj20 = { variant: "body-md/normal", color: "text-muted", children: intl6.string(tmp4(tmp2[38]).fINulo) };
        const Text2 = tmp(tmp2[81]).Text;
        intl6 = tmp(tmp2[37]).intl;
        items56[1] = view(Text2, obj20);
        const obj21 = {
          variant: "secondary",
          size: "sm",
          text: intl7.string(tmp4(tmp2[38])["WFJ/vb"]),
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
        const Button = tmp(tmp2[82]).Button;
        intl7 = tmp(tmp2[37]).intl;
        items56[2] = view(Button, obj21);
        tmp150Result9 = tmp145(tmp179, obj18);
      }
      items54[2] = view(stateFromStores3, obj17);
      tmp145Result5 = tmp145(tmp179, obj16);
    }
    return tmp145Result5;
  }
  if (!stateFromStores6) {
    let tmp145Result6;
    if (projectExists) {
      const obj22 = { style: items57, children: items58 };
      items57 = [tmp7.contentBare, animatedStyle];
      const View = tmp4(tmp2[35]).View;
      items58 = [view(tmp4(tmp2[80]), { absolute: true, mix: true }), tmp145Result4, , ];
      let tmp150Result10 = null;
      if (true === preview_ready && null != previewAppId && !isResolving && availability.modes.length > 0) {
        const obj23 = { style: tmp7.segments, children: view(tmp4(tmp2[83]), obj24) };
        obj24 = { state: segmentedControlState, extras: memo4 };
        tmp150Result10 = tmp150(stateFromStores3, obj23);
      }
      items58[2] = tmp150Result10;
      let tmp150Result11 = null;
      const obj25 = { style: tmp7.panes, children: items59 };
      if (hasItem) {
        tmp150Result11 = null;
        if (null != previewAppId) {
          const obj26 = { style: tmp77 ? tmp7.pane : tmp7.paneBackstage, pointerEvents: str6, accessibilityElementsHidden: !tmp77, importantForAccessibility: str7, children: view(tmp(tmp2[84]).PreviewFrame, obj27) };
          str6 = "none";
          if (tmp77) {
            str6 = "auto";
          }
          str7 = "no-hide-descendants";
          if (tmp77) {
            str7 = "auto";
          }
          obj27 = { applicationId: previewAppId, projectId, frameSurface, launch: frameLaunchParams, visible: tmp77 };
          tmp150Result11 = tmp150(tmp175, obj26);
        }
      }
      items59 = [tmp150Result11, , ];
      let tmp150Result12 = null;
      if (tmp74) {
        tmp150Result12 = null;
        if (null != previewAppId) {
          tmp150Result12 = null;
          if (!tmp77) {
            const obj28 = { style: tmp7.pane, children: view(tmp4(tmp2[84]), obj29) };
            obj29 = { projectId, previewApplicationId: previewAppId, mode: activeMode, availability, frameSurface, frameLaunchParams, widgetApplicationId, frameHostAvailable: tmp45, botInstall: memo };
            tmp150Result12 = tmp150(tmp175, obj28);
          }
        }
      }
      items59[1] = tmp150Result12;
      const items60 = [tmp7.chatPane, , ];
      let paneHidden = tmp74;
      const View2 = tmp4(tmp2[35]).View;
      if (tmp74) {
        paneHidden = tmp7.paneHidden;
      }
      items60[1] = paneHidden;
      items60[2] = animatedStyle1;
      const obj30 = { style: items60, children: view(Provider, obj31) };
      obj31 = { value: publishOptions, children: view(Provider2, obj32) };
      Provider = tmp(tmp2[85]).ConjurePublishActionContext.Provider;
      obj32 = { value: projectId, children: view(tmp4(tmp2[87]), obj33) };
      Provider2 = tmp(tmp2[86]).ConjureFileMentionProjectContext.Provider;
      obj33 = { projectId, transcriptTopInset: tmp11, onRestoreVersion: callback6, hidden: tmp74 };
      items59[2] = view(View2, obj30);
      items58[3] = c20(stateFromStores3, obj25);
      tmp145Result6 = tmp145(View, obj22);
    }
    tmp145Result5 = tmp145Result6;
  }
  const obj34 = { style: tmp7.contentBare, children: items61 };
  items61 = [view(tmp4(tmp2[80]), { absolute: true, mix: true }), tmp145Result4, ];
  const obj35 = { style: items62, children: view(stateFromStores3, obj36) };
  items62 = [, ];
  ({ content: arr62[0], centered: arr62[1] } = tmp7);
  obj36 = { style: tmp7.listError, children: view(Text3, obj37) };
  obj37 = { variant: "heading-lg/semibold", color: "text-default", children: intl8.string(tmp4(tmp2[38]).Y2sGrh) };
  Text3 = tmp(tmp2[81]).Text;
  intl8 = tmp(tmp2[37]).intl;
  items61[2] = view(stateFromStores3, obj35);
  tmp145Result6 = tmp145(stateFromStores3, obj34);
};
