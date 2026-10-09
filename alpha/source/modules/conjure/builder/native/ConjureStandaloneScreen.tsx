// Module ID: 16961
// Function ID: 16962
// Name: ConjureStandaloneScreen
// Dependencies: [5, 32, 19, 17, 5437, 1244, 2124, 2086, 4709, 13164, 16962, 10617, 6915, 1085, 2071, 10767, 21, 558, 576, 16964, 587, 16966, 5055, 16968, 4768, 8287, 5091, 1112, 16560, 504, 16561, 1126, 3827, 6066, 12950, 16564, 16970, 9214, 6186, 1631, 1503, 6939, 16971, 16984, 16986, 12949, 16992, 16993, 6885, 10275, 5087, 5376, 11369, 17006, 6269, 17009, 1645, 4811, 6849, 17010, 13171, 17012, 10773, 17014, 11371, 11377, 17015, 17016, 10498, 17017, 1497, 8513, 17018, 17042, 17046, 15299, 4767, 17048, 17049, 17051, 17056, 11373, 17019, 11381, 17057, 9378, 7085, 16031, 17060, 6205, 9335, 17061, 17062, 6941, 17203, 6686, 2]

// Module 16961 (ConjureStandaloneScreen)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl9 from "intl" /* 1126 */;
import ChannelConstants from "ChannelConstants" /* 2071 */;
import _modDef3827 from "module_3827" /* 3827 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4768 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5055 */;
import NavigatorHeader2 from "NavigatorHeader" /* 6205 */;
import ConjureUtils from "ConjureUtils" /* 6939 */;
import SettingsIcon from "SettingsIcon" /* 7085 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8287 */;
import UploadIcon from "UploadIcon" /* 9378 */;
import FramesConstants from "FramesConstants" /* 10767 */;
import ConjureActionCreators from "ConjureActionCreators" /* 11369 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 11373 */;
import restartConjureAppFramesDefault from "restartConjureAppFrames" /* 11381 */;
import ConjureProjectIconDefault from "ConjureProjectIcon" /* 12950 */;
import BugIcon from "BugIcon" /* 16031 */;
import MentionsBadgeDefault from "MentionsBadge" /* 16564 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 16966 */;
import ConjurePublishNotesSheet from "ConjurePublishNotesSheet" /* 16968 */;
import ConjureHeaderIconButtonDefault from "ConjureHeaderIconButton" /* 16970 */;
import ConjureCreateSheet from "ConjureCreateSheet" /* 16971 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 16984 */;
import conjureProjectActions2 from "conjureProjectActions" /* 16986 */;
import ConjureSettingsSheet from "ConjureSettingsSheet" /* 16993 */;
import conjurePreviewTargets from "conjurePreviewTargets" /* 17016 */;
import ConjureConnectToolSheet from "ConjureConnectToolSheet" /* 17046 */;
import ConjureHistorySheet from "ConjureHistorySheet" /* 17051 */;
import ConjureProjectHeaderTitleDefault from "ConjureProjectHeaderTitle" /* 17060 */;
import ConjureDebugSceneDefault from "ConjureDebugScene" /* 17203 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationStore from "ApplicationStore" /* 5437 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1244 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 13164 */;
import conjureDesignFeedbackStore from "conjureDesignFeedbackStore" /* 16962 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10617 */;
import ConjureBuilderRouteStore from "ConjureBuilderRouteStore" /* 6915 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import createStyles from "createStyles" /* 5091 */;
import size_mod from "module_2" /* 2 */;

const ConjurePublishNotesSheetDefault = ConjurePublishNotesSheet;
const ConjureCreateSheetDefault = ConjureCreateSheet;
const ConjureRemixSheetDefault = ConjureRemixSheet;
const ConjureSettingsSheetDefault = ConjureSettingsSheet;
const ConjureConnectToolSheetDefault = ConjureConnectToolSheet;
const ConjureHistorySheetDefault = ConjureHistorySheet;
let c1, c4, c6, navigation, obj1;

let c9;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_22;
let closure_23;
let closure_26;
let closure_27;
let closure_28;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp;
const ExperimentalDirectSelectIcon2 = tmp(16964);
function ChatScene(guildId) {
  let Provider;
  let Sme0T0;
  let _undefined;
  let closure_25;
  let closure_4;
  let closure_5;
  let first;
  let fn;
  let has_activity;
  let intl3;
  let intl4;
  let intl5;
  let isResolving;
  let items36;
  let items37;
  let items38;
  let items40;
  let items41;
  let obj16;
  let obj19;
  let obj21;
  let obj24;
  let obj25;
  let previewAppId;
  let projectGuildId;
  let prop;
  let prop1;
  let prop2;
  let prop3;
  let prop4;
  let str5;
  let str6;
  let tmp10;
  let tmp105Result;
  let tmp105Result1;
  let tmp121;
  let tmp39;
  let tmp40;
  let tmp43;
  let tmp44;
  let tmp4Result6;
  let tmp98;
  let widgetApplicationId;
  guildId = guildId.guildId;
  const projectId = guildId.projectId;
  navigation = undefined;
  previewAppId = undefined;
  let data;
  let isLoading;
  let availability;
  let activeMode;
  let setMode;
  let frameSurface;
  let frameSurfaceOptions;
  let setFrameSurface;
  let result1;
  let c22;
  let paneHidden;
  let closure_24;
  isLaunched = undefined;
  let active;
  let conjureControlActive;
  let guild_id;
  closure_29 = undefined;
  let c30;
  let callback1;
  let memo1;
  let memo2;
  let stringResult1;
  closure_35 = undefined;
  let num2;
  let activeIndex;
  let setActiveIndex;
  let closure_39;
  projectGuildId = undefined;
  let callback3;
  let memo6;
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
  let stateFromStores3;
  let preview;
  let isConjureProjectMuted;
  let conjureRemoveTarget;
  let memo8;
  let tmp = guildId;
  let tmp2 = navigation;
  obj = guildId(navigation[40]);
  navigation = obj.useNavigation();
  let tmp4 = projectId;
  const bottom = projectId(navigation[39])().bottom;
  let tmp5 = callback1(bottom);
  _slicedToArray = tmp5;
  let tmp6 = projectId(navigation[55])();
  react = tmp6;
  let obj2 = react;
  let tmp7 = _slicedToArray;
  [first, tmp10] = react.useState(0);
  let closure_6 = tmp10;
  let obj3 = guildId(navigation[56]);
  let obj4 = { onEnd: fn };
  fn = function p(height) {
    obj = ReanimatedRexport;
    const runOnJSResult = obj.runOnJS(closure_6);
    runOnJSResult(Math.max(0, height.height - bottom));
  };
  let obj5 = { runOnJS: guildId(navigation[57]).runOnJS, setChatKeyboardCover: tmp10, safeAreaBottom: bottom };
  fn.__closure = obj5;
  fn.__workletHash = 7140225881507;
  fn.__initData = num2;
  let items = [bottom];
  obj3.useKeyboardHandler(obj4, items);
  let obj6 = guildId(navigation[29]);
  let items1 = [setFrameSurface];
  let items2 = [projectId];
  const stateFromStores = obj6.useStateFromStores(items1, () => {
    let project = ConjureProjectStore.getProject(projectId);
    if (project == null) {
      project = null;
    }
    return project;
  }, items2);
  let obj7 = guildId(navigation[29]);
  const items3 = [setFrameSurface];
  const items4 = [projectId];
  const stateFromStoresObject = obj7.useStateFromStoresObject(items3, () => {
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
  let obj8 = guildId(navigation[29]);
  const items5 = [setFrameSurface];
  const items6 = [guildId];
  const stateFromStores1 = obj8.useStateFromStores(items5, () => {
    const guildProjectsFetchState = ConjureProjectStore.getGuildProjectsFetchState(guildId);
    return "unattempted" === guildProjectsFetchState || "loading" === guildProjectsFetchState;
  }, items6);
  let obj9 = guildId(navigation[29]);
  const items7 = [setFrameSurface];
  const items8 = [projectId];
  const stateFromStores2 = obj9.useStateFromStores(items7, () => {
    let integrationStatus = ConjureProjectStore.getIntegrationStatus(projectId);
    if (integrationStatus == null) {
      integrationStatus = null;
    }
    return integrationStatus;
  }, items8);
  let preview_ready;
  const tmp12 = setFrameSurface;
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
  const useApplication = tmp(tmp2[58]).useApplication;
  tmp(tmp2[58]);
  let application = useApplication(previewAppId);
  data = application.data;
  isLoading = application.isLoading;
  let obj10 = { applicationId: previewAppId, previewApplicationId: previewAppId, declaredActivity: true === has_activity, previewSupportedSurfaces: prop, installScope: install_scope, ownerAuthorizationRevoked: true === prop1, mainCardOnly: true };
  has_activity = undefined;
  const useConjurePreviewMode = tmp(tmp2[59]).useConjurePreviewMode;
  tmp(tmp2[59]);
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
  ({ widgetApplicationId, isResolving } = conjurePreviewMode);
  const tmpResult15 = tmp(tmp2[60]);
  const conjurePreviewModeRequests = tmpResult15.useConjurePreviewModeRequests(projectId, (arg0) => {
    const modes = availability.modes;
    if (modes.includes(arg0)) {
      setMode(arg0);
    }
  });
  let obj11 = { installScope: install_scope, previewReady: tmp26, integrationInstalled: prop2, botPermissionsChanged: true === prop3 };
  prop2 = undefined;
  const requiresPermissionReview = tmp(tmp2[61]).requiresPermissionReview;
  tmp(tmp2[61]);
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
  const items9 = [projectId];
  const effect = obj2.useEffect(() => {
    obj = ConjureActionCreators;
    const project = obj.getProject(projectId);
    project.catch(() => {

    });
  }, items9);
  const tmp34 = null != previewAppId && null != tmp4(tmp2[62])(previewAppId);
  const tmpResult17 = tmp(tmp2[63]);
  result1 = tmpResult17.conjureInstallGuildId(stateFromStores, stateFromStores2, guildId);
  const items10 = [result1, previewAppId, data, stateFromStores, projectId];
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
                const obj3 = application(navigation[58]);
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
          guildId: closure_131_21,
          onClose() {
                obj = c0(navigation[63]);
                const result = obj.repairConjureGuildHints(closure_1_7, closure_1_21);
                const cleanupPromise = result.finally(() => {
                  obj = application(closure_2_2[52]);
                  return obj.getProject(closure_1_1);
                });
                cleanupPromise.catch(() => {

                });
              }
        };
        const tmp11 = application3(navigation[64]);
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
  }), items10);
  let tmp7Result = tmp7(obj2.useState(true), 2);
  [tmp39, tmp40] = tmp7Result;
  c22 = tmp40;
  let tmp41 = null;
  const useState = obj2.useState;
  const tmp36 = bottom;
  if (null != stateFromStores2) {
    tmp41 = tmp26;
  }
  [tmp43, tmp44] = tmp7(useState(tmp41), 2);
  tmp7(useState(tmp41), 2);
  const tmp7Result4 = tmp7(obj2.useState(projectId), 2);
  if (tmp7Result4[0] !== projectId) {
    tmp7Result4[1](projectId);
    tmp40(true);
    tmp44(null);
  }
  let tmp49 = tmp26 && null != previewAppId && !isResolving;
  if (tmp49) {
    tmp49 = availability.modes.length > 0 || result;
    const tmp50 = availability.modes.length > 0 || result;
  }
  paneHidden = tmp49 && !tmp39;
  let hasItem = tmp49 && tmp34;
  if (hasItem) {
    let modes = availability.modes;
    const str = "frame";
    hasItem = modes.includes("frame");
  }
  let tmp52 = hasItem && paneHidden;
  if (tmp52) {
    let str2 = "frame";
    tmp52 = "frame" === activeMode;
  }
  closure_24 = tmp52;
  isLaunched = tmp53;
  const tmpResult18 = tmp(tmp2[57]);
  class Pe {
    constructor() {
      let paddingBottom = 0;
      if (paneHidden) {
        paddingBottom = 0;
        if (!closure_25) {
          const _Math = Math;
          paddingBottom = Math.max(closure_5.get(), bottom);
        }
      }
      return { paddingBottom };
    }
  }
  Pe.__closure = { previewShowing: paneHidden, botFaceShowing: paneHidden && "bot" === activeMode, keyboardHeight: tmp6, safeAreaBottom: bottom };
  Pe.__workletHash = 13315848638309;
  Pe.__initData = activeIndex;
  const animatedStyle = tmpResult18.useAnimatedStyle(Pe);
  const tmpResult19 = tmp(tmp2[57]);
  class Te {
    constructor() {
      let items;
      let num = 0;
      if (!paneHidden) {
        const _Math = Math;
        num = -Math.max(0, closure_5.get() - bottom);
      }
      obj = { transform: items };
      items = [{ translateY: num }];
      return obj;
    }
  }
  Te.__closure = { previewShowing: paneHidden, keyboardHeight: tmp6, safeAreaBottom: bottom };
  Te.__workletHash = 2668549423950;
  Te.__initData = setActiveIndex;
  const animatedStyle1 = tmpResult19.useAnimatedStyle(Te);
  active = frameSurfaceOptions(projectId).active;
  const tmpResult20 = tmp(tmp2[65]);
  conjureControlActive = tmpResult20.useConjureControlActive(projectId);
  guild_id = undefined;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = guildId;
  }
  let application_id;
  const tmp4Result = tmp4(tmp2[66]);
  if (stateFromStores != null) {
    application_id = stateFromStores.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  const tmp4ResultResult = tmp4Result(guild_id, application_id);
  closure_29 = tmp4ResultResult;
  const items11 = [tmp4ResultResult, guild_id];
  const memo = obj2.useMemo(() => {
    let fn = null;
    if (null != closure_29) {
      fn = () => {
        obj = guildId(navigation[27]);
        return obj.transitionTo(paneHidden.CHANNEL(guild_id, closure_1_29));
      };
    }
    return fn;
  }, items11);
  let intl = tmp(tmp2[31]).intl;
  const string = intl.string;
  const tmp4Result4 = tmp4(tmp2[32]);
  if (conjureControlActive) {
    Sme0T0 = tmp4Result4.Sme0T0;
  } else {
    Sme0T0 = active ? tmp4Result4.vn5Rzu : tmp4Result4["cl/Jyl"];
  }
  const stringResult = string(Sme0T0);
  c30 = stringResult;
  const items12 = [active, projectId];
  callback1 = obj2.useCallback(() => {
    const tmp = active;
    if (tmp) {
      authStore6(projectId);
    } else {
      setMode(projectId);
    }
  }, items12);
  const items13 = [availability.modes, frameSurfaceOptions];
  memo1 = obj2.useMemo(() => {
    obj = conjurePreviewTargets;
    return obj.previewTargets(availability.modes, frameSurfaceOptions);
  }, items13);
  const items14 = [activeMode, frameSurface];
  memo2 = obj2.useMemo(() => {
    obj = conjurePreviewTargets;
    return obj.activePreviewTarget(activeMode, frameSurface);
  }, items14);
  let intl2 = tmp(tmp2[31]).intl;
  stringResult1 = intl2.string(tmp4(tmp2[32])["N+VA1J"]);
  const items15 = [memo2, availability.modes.length, stringResult1, paneHidden];
  const memo3 = obj2.useMemo(() => {
    let intl;
    let items2;
    obj = { id: "chat", label: intl.string(_modDef3827["1HH2p9"]), page: null };
    intl = intl9.intl;
    const items = [obj];
    if (availability.modes.length > 0) {
      const tmp4 = paneHidden;
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
      previewTargetLabel = stringResult1;
    } else {
      items2 = [];
    }
    HermesBuiltin.arraySpread(items, items2, 1);
    return items;
  }, items15);
  let tmp69 = null != memo2;
  const callback2 = obj2.useCallback((arg0) => {
    metroImportDefault.dismiss();
    _undefined(0 === arg0);
  }, []);
  if (tmp69) {
    let num = 1;
    tmp69 = memo1.length > 1;
  }
  closure_35 = tmp69;
  const items16 = [memo2, tmp69, stringResult1, paneHidden, setFrameSurface, setMode, memo1];
  const first1 = availability.modes[0];
  let tmp72 = null != stateFromStores2;
  const memo4 = obj2.useMemo(() => {
    let fn;
    let fn2;
    let intl;
    let target;
    let targets;
    let tmp;
    if (null != memo2) {
      let tmp3;
      if (paneHidden) {
        tmp3 = stringResult1;
      }
      preview = { prefix: tmp3, renderTrailingIcon: fn, menuLabel: intl.string(_modDef3827.I2ucou), onShowMenu: fn2 };
      fn = undefined;
      if (paneHidden) {
        if (closure_35) {
          fn = (color) => {
            obj = { size: "xs", color };
            return active(guildId(navigation[68]).ChevronSmallDownIcon, obj);
          };
        }
      }
      intl = intl9.intl;
      fn2 = undefined;
      if (closure_35) {
        fn2 = () => {
          obj = {
            targets,
            target,
            onChange(mode) {
              obj = guildId(navigation[67]);
              const previewTarget = obj.selectPreviewTarget(mode, closure_1_17, closure_1_20);
              closure_1_22(false);
            }
          };
          return projectId(navigation[69])(obj);
        };
      }
      tmp = { preview };
      const obj2 = { preview };
    }
    return tmp;
  }, items16);
  if (tmp72) {
    tmp72 = tmp26 !== tmp43;
  }
  if (tmp72) {
    const tmp73 = false === tmp43 && true === preview_ready && null != first1;
    if (tmp73) {
      setMode(first1);
      tmp40(false);
    }
    tmp44(true === preview_ready);
  }
  const width = tmp4(tmp2[70])().width;
  let obj12 = { items: memo3, pageWidth: width - 2 * memo1, onSetActiveIndex: callback2 };
  const tmpResult21 = tmp(tmp2[71]);
  const segmentedControlState = tmpResult21.useSegmentedControlState(obj12);
  if (tmp39) {
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
    obj = guildId(navigation[72]);
    return obj.leaveConjurePreviewFrame(previewAppId);
  }) : undefined, items18);
  const items19 = [guildId, stateFromStores2, isLoading];
  const memo5 = obj2.useMemo(() => {
    let platform;
    platform = { guildId, platform, busy: null == stateFromStores2 || isLoading };
    return platform;
  }, items19);
  const tmp81 = tmp4(tmp2[73])(projectId, memo5);
  closure_39 = tmp81;
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items20 = [projectId, projectGuildId];
  callback3 = obj2.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    obj = { content: prioritySpeakerDucking(ConjureSettingsSheetDefault, obj2), key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY };
    obj2 = { projectId, guildId: projectGuildId, isPreview: true };
    showActionSheet(obj);
  }, items20);
  const items21 = [guildId, navigation];
  memo6 = obj2.useMemo(() => {
    let closure_0 = guildId;
    const f148170 = (projectId) => {
      obj = { projectId };
      return closure_1_2.push(constants.CHAT, obj);
    };
    return (arg0, arg1) => {
      if (arg1 === closure_0) {
        closure_1(arg0);
      } else {
        obj = guildId(stateFromStoresArray[27]);
        obj.transitionTo(closure_2_23.CHANNEL(arg1, constants.CONJURE, arg0));
      }
    };
  }, items21);
  const items22 = [guildId, memo6, stateFromStores];
  callback4 = obj2.useCallback(() => {
    let obj2;
    if (null != stateFromStores) {
      obj = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: prioritySpeakerDucking(ConjureRemixSheetDefault, obj2) };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      obj2 = { project: tmp, currentGuildId: guildId, onRemixed: memo6 };
      showActionSheet(obj);
    }
  }, items22);
  const items23 = [projectId];
  callback5 = obj2.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    obj = { key: ConjureConnectToolSheet.CONJURE_CONNECT_TOOL_SHEET_KEY, content: prioritySpeakerDucking(ConjureConnectToolSheetDefault, obj2) };
    obj2 = { projectId };
    showActionSheet(obj);
  }, items23);
  closure_45 = obj2.useRef(false);
  const useCallback = obj2.useCallback;
  let closure_0 = tmp36(function*(arg0, value) {
    let Z4n6LX;
    let closure_3;
    let formatToPlainString;
    let intl2;
    let obj12;
    let obj14;
    let obj2;
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
        const obj6 = { key: "VIBEGRATIONS_VERSION_RESTORING", content: intl2.string(projectId(navigation[32]).qqlUiW), IconComponent: closure_0(navigation[75]).UndoIcon };
        const open = projectId(navigation[24]).open;
        const tmp40 = projectId(navigation[24]);
        intl2 = closure_0(navigation[31]).intl;
        open(obj6);
        let c5 = 2;
        c6 = 4;
        c7 = 1;
        const obj7 = { value: activeMode(closure_1, closure_0.sha), done: false };
        return obj7;
      }
    } else if (2 === c6) {
      c5 = 0;
      ref.current = false;
      throw closure_4;
    } else if (3 === c6) {
      const presentError = closure_0(navigation[76]).presentError;
      const tmp23 = closure_0(navigation[76]);
      const intl = closure_0(navigation[31]).intl;
      presentError(intl.string(projectId(navigation[32])["PSdo+w"]));
      c5 = 0;
      ref.current = false;
      c7 = 3;
      const obj8 = { value: undefined, done: true };
      return obj8;
    } else {
      if (4 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          ref.current = false;
          c7 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          c5 = 1;
          const obj10 = { key: "VIBEGRATIONS_VERSION_RESTORED", content: formatToPlainString(Z4n6LX, obj12), IconComponent: closure_0(navigation[75]).UndoIcon };
          const open2 = projectId(navigation[24]).open;
          const tmp72 = projectId(navigation[24]);
          const intl3 = closure_0(navigation[31]).intl;
          formatToPlainString = intl3.formatToPlainString;
          obj12 = { title: obj14.versionTitle(closure_0.subject).short };
          Z4n6LX = projectId(navigation[32]).Z4n6LX;
          obj14 = closure_0(navigation[77]);
          open2(obj10);
          if (null != c1) {
            c6 = 5;
            c7 = 1;
            const obj13 = { value: obj2.rewindDataAfterVersionRestore(closure_1, c1), done: false };
            obj2 = closure_0(navigation[78]);
            return obj13;
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
          const obj11 = closure_0(navigation[76]);
          obj11.presentError(closure_2);
        }
      }
      c5 = 0;
      ref.current = false;
    }
    yield "IconComponent";
    closure_2 = tmp4;
    let tmp54 = closure_1;
    if (closure_1 === undefined) {
      tmp54 = null;
    }
    c1 = tmp54;
    return "Set";
  });
  const items24 = [projectId];
  callback6 = useCallback(function() {
    return closure_0(...arguments);
  }, items24);
  const items25 = [callback6, , ];
  let install_scope1;
  const useCallback2 = obj2.useCallback;
  if (stateFromStores != null) {
    install_scope1 = stateFromStores.install_scope;
  }
  items25[1] = install_scope1;
  items25[2] = projectId;
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
    tmp2 = prioritySpeakerDucking;
    tmp3 = ConjureHistorySheetDefault;
    if (stateFromStores != null) {
      install_scope = stateFromStores.install_scope;
    }
    if (install_scope == null) {
      install_scope = null;
    }
    showActionSheet(obj);
  }, items25);
  const tmpResult22 = tmp(tmp2[80]);
  conjureDebugPaneEnabled = tmpResult22.useConjureDebugPaneEnabled();
  const items26 = [navigation, projectId];
  callback7 = obj2.useCallback(() => {
    obj = { projectId };
    return navigation.push(memo2.DEBUG, obj);
  }, items26);
  const items27 = [frameSurface];
  const memo7 = obj2.useMemo(() => {
    obj = conjurePreviewSurface;
    return obj.getConjurePreviewSurface(undefined, frameSurface);
  }, items27);
  const tmp92 = isLaunched(tmp4(tmp2[82])(previewAppId, memo7));
  closure_50 = tmp92;
  const items28 = [previewAppId];
  callback8 = obj2.useCallback(() => {
    if (null != previewAppId) {
      restartConjureAppFramesDefault(tmp);
    }
  }, items28);
  const items29 = [navigation, projectId];
  callback9 = obj2.useCallback(() => {
    authStore4(projectId);
    navigation.goBack();
  }, items29);
  const items30 = [tmp12];
  const items31 = [projectId];
  const tmpResult23 = tmp(tmp2[29]);
  stateFromStores3 = tmpResult23.useStateFromStores(items30, () => ConjureProjectStore.isProjectDeleting(projectId), items31);
  const items32 = [stateFromStores3, callback9];
  const effect3 = obj2.useEffect(() => {
    const tmp = stateFromStores3;
    if (tmp) {
      callback9();
    }
  }, items32);
  let obj13 = { projectId, refreshApplicationId: tmp98 };
  const modes2 = availability.modes;
  tmp98 = null;
  const tmp4Result5 = tmp4(tmp2[84]);
  if (modes2.includes("widget")) {
    tmp98 = null;
    if ("unavailable-authorization-revoked" !== availability.profileState) {
      tmp98 = widgetApplicationId;
    }
  }
  const tmp4Result2Result = tmp4Result5(obj13);
  preview = tmp4Result2Result;
  const tmpResult24 = tmp(tmp2[45]);
  isConjureProjectMuted = tmpResult24.useIsConjureProjectMuted(projectId);
  const tmpResult25 = tmp(tmp2[46]);
  conjureRemoveTarget = tmpResult25.useConjureRemoveTarget(projectId);
  const items33 = [conjureDebugPaneEnabled, guildId, isConjureProjectMuted, callback9, callback5, callback7, callback4, callback3, callback21, callback8, tmp92, tmp4Result2Result, stateFromStores, tmp81, conjureRemoveTarget];
  memo8 = obj2.useMemo(() => {
    let intl;
    let intl2;
    let str2;
    let tmp16;
    let tmp24;
    const items = [];
    if (null != disabled) {
      obj = {
        label: tmp.label,
        IconComponent: UploadIcon.UploadIcon,
        action() {
            obj = disabled;
            if (!disabled.disabled) {
              obj.run("header");
            }
          }
      };
      const push = items.push;
      push(obj);
    }
    const push2 = items.push;
    const obj2 = { label: intl.string(_modDef3827.I2XSKe), IconComponent: SettingsIcon.SettingsIcon, action: callback3 };
    intl = intl9.intl;
    push2(obj2);
    const tmp7 = conjureDebugPaneEnabled;
    if (tmp7) {
      const push3 = items.push;
      const obj3 = { label: intl2.string(_modDef3827["Q4FN+H"]), IconComponent: BugIcon.BugIcon, action: callback7 };
      intl2 = intl9.intl;
      push3(obj3);
    }
    if (null != stateFromStores) {
      const obj5 = { project: tmp15, guildId, muted: isConjureProjectMuted, removeTarget: conjureRemoveTarget, onRemix: callback4, onConnectTool: callback5, onHistory: callback21, onRefresh: tmp16, onClose: callback9, preview };
      tmp16 = undefined;
      const conjureProjectActions = conjureProjectActions2.conjureProjectActions;
      conjureProjectActions2;
      if (closure_50) {
        tmp16 = callback8;
      }
      const result = conjureProjectActions(obj5);
      const iter = result[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let obj9 = { label: null, IconComponent: null, variant: str2, action: tmp24.action };
        ({ label: obj4.label, IconComponent: obj4.IconComponent } = nextResult);
        str2 = undefined;
        tmp24 = nextResult;
        let push4 = items.push;
        if (true === nextResult.destructive) {
          str2 = "destructive";
        }
        let push4Result = push4(obj9);
        continue;
      }
    }
    return items;
  }, items33);
  const items34 = [conjureControlActive, active, stringResult, tmp52, callback3, callback1, navigation, memo8, stateFromStores, projectExists, projectName, stateFromStores1, tmp5];
  const effect4 = obj2.useEffect(() => {
    let accessibilityLabel;
    let disabled;
    let headerActions;
    let onPress;
    let selected;
    let tmp = projectName;
    if (projectName == null) {
      let tmp2 = guildId;
      let tmp3 = navigation;
      let intl = guildId(navigation[31]).intl;
      const tmp5 = projectExists;
      if (!tmp5) {
        let uk6jhJ;
        const tmp6 = stateFromStores1;
        if (!tmp6) {
          let tmp7 = projectId;
          uk6jhJ = projectId(tmp3[32]).G1WwgK;
        }
        tmp = tmp4(uk6jhJ);
      }
      uk6jhJ = projectId(tmp3[32]).uk6jhJ;
    }
    const title = tmp;
    obj = {
      headerTitle() {
        if (null != stateFromStores) {
          let tmp3;
          const tmp2 = projectExists;
          if (tmp2) {
            const obj2 = { project: tmp, title, onPressIcon: callback3 };
            tmp3 = prioritySpeakerDucking(ConjureProjectHeaderTitleDefault, obj2);
          }
          return tmp3;
        }
        obj = { title };
        tmp3 = prioritySpeakerDucking(NavigatorHeader2.NavigatorHeader, obj);
      },
      headerRight() {
        let obj3;
        let tmp = null;
        if (projectExists) {
          obj = { style: headerActions.headerActions, children: items };
          let tmp7Result = null;
          const tmp2 = conjureControlActive;
          const tmp3 = projectName;
          if (closure_1_24) {
            let ExperimentalDirectSelectIcon;
            const tmp10 = projectId(navigation[36]);
            const tmp7 = active;
            const tmp9 = navigation;
            if (selected) {
              ExperimentalDirectSelectIcon = closure_29;
            } else {
              ExperimentalDirectSelectIcon = guildId(tmp9[19]).ExperimentalDirectSelectIcon;
            }
            const obj2 = { IconComponent: ExperimentalDirectSelectIcon, onPress, accessibilityLabel, accessibilityState: obj3, disabled };
            obj3 = { selected };
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
                let ref;
                ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
                obj = { ref, IconComponent: title(closure_1_2[37]).MoreHorizontalIcon, onPress, accessibilityLabel: intl.string(title(closure_1_2[31]).t["UKOtz+"]), accessibilityActions, onAccessibilityAction };
                const tmp = closure_1_1(closure_1_2[36]);
                intl = title(closure_1_2[31]).intl;
                return selected(tmp, obj);
              }
          };
          items[1] = active(guildId(navigation[90]).ContextMenu, obj4);
          tmp = tmp2(tmp3, obj);
        }
        return tmp;
      }
    };
    navigation.setOptions(obj);
  }, items34);
  const items35 = [guildId, projectId];
  const effect5 = obj2.useEffect(() => {
    obj = ConjureActionCreators;
    const result = obj.setSelectedProjectForGuild(guildId, projectId);
    return () => {
      obj = guildId(navigation[52]);
      return obj.setSelectedProjectForGuild(closure_1_0, null);
    };
  }, items35);
  if (projectExists) {
    let obj14 = { style: items36, children: items37 };
    items36 = [tmp5.contentBare, animatedStyle];
    let tmp112 = null;
    const View = tmp4(tmp2[57]).View;
    if (tmp49) {
      const obj15 = { style: tmp5.segments, children: active(tmp4(tmp2[91]), obj16) };
      obj16 = { state: segmentedControlState, extras: memo4 };
      tmp112 = active(projectName, obj15);
    }
    items37 = [tmp112, ];
    let tmp117Result = null;
    const obj17 = { style: tmp5.panes, children: items38 };
    if (hasItem) {
      tmp117Result = null;
      if (null != previewAppId) {
        const obj18 = { style: tmp52 ? tmp5.pane : tmp5.paneBackstage, pointerEvents: str5, accessibilityElementsHidden: !tmp52, importantForAccessibility: str6, children: active(tmp(tmp2[72]).PreviewFrame, obj19) };
        str5 = "none";
        if (tmp52) {
          str5 = "auto";
        }
        str6 = "no-hide-descendants";
        if (tmp52) {
          str6 = "auto";
        }
        obj19 = { applicationId: previewAppId, projectId, frameSurface, visible: tmp52, onOpenPublishedApp: memo };
        tmp117Result = tmp117(tmp115, obj18);
      }
    }
    items38 = [tmp117Result, , ];
    let tmp119Result = null;
    if (paneHidden) {
      tmp119Result = null;
      if (null != previewAppId) {
        tmp119Result = null;
        if (!tmp52) {
          const obj20 = { style: tmp5.pane, children: active(tmp4Result6, obj21) };
          obj21 = { projectId, previewApplicationId: previewAppId, mode: activeMode, availability, frameSurface, widgetApplicationId, frameHostAvailable: tmp34, permissionsGate: tmp121 };
          tmp121 = null;
          tmp4Result6 = tmp4(tmp2[72]);
          const tmpResult26 = tmp(tmp2[61]);
          if (tmpResult26.permissionReviewBlocksMode(activeMode, result)) {
            const obj22 = { onReviewPermissions: callback, loading: isLoading, previewBotMissing: false === prop4 };
            prop4 = undefined;
            if (stateFromStores2 != null) {
              prop4 = stateFromStores2.integration_installed;
            }
            tmp121 = obj22;
          }
          tmp119Result = tmp119(tmp115, obj20);
        }
      }
    }
    items38[1] = tmp119Result;
    const items39 = [tmp5.chatPane, , ];
    const View2 = tmp4(tmp2[57]).View;
    if (paneHidden) {
      paneHidden = tmp5.paneHidden;
    }
    items39[1] = paneHidden;
    items39[2] = animatedStyle1;
    const obj23 = { style: items39, children: active(Provider, obj24) };
    obj24 = { value: memo5, children: active(tmp4(tmp2[92]), obj25) };
    Provider = tmp(tmp2[73]).ConjurePublishActionContext.Provider;
    obj25 = { projectId, transcriptTopInset: first, onRestoreVersion: callback6 };
    items38[2] = active(View2, obj23);
    items37[1] = conjureControlActive(projectName, obj17);
    tmp105Result1 = tmp111(View, obj14);
  } else {
    const obj26 = { style: items40, children: tmp105Result };
    items40 = [, ];
    ({ content: arr38[0], centered: arr38[1] } = tmp5);
    if (stateFromStores1) {
      tmp105Result = tmp105(closure_6, {});
    } else {
      const obj27 = { style: tmp5.listError, children: items41 };
      const obj28 = { variant: "heading-lg/semibold", color: "text-default", children: intl3.string(tmp4(tmp2[32]).G1WwgK) };
      const Text = tmp(tmp2[50]).Text;
      intl3 = tmp(tmp2[31]).intl;
      items41 = [active(Text, obj28), , ];
      const obj29 = { variant: "text-md/normal", color: "text-muted", children: intl4.string(tmp4(tmp2[32]).fINulo) };
      const Text2 = tmp(tmp2[50]).Text;
      intl4 = tmp(tmp2[31]).intl;
      items41[1] = active(Text2, obj29);
      const obj30 = {
        variant: "secondary",
        size: "sm",
        text: intl5.string(tmp4(tmp2[32])["WFJ/vb"]),
        onPress() {
              obj = ConjureActionCreators;
              return obj.listProjects(guildId);
            }
      };
      const Button = tmp(tmp2[51]).Button;
      intl5 = tmp(tmp2[31]).intl;
      items41[2] = active(Button, obj30);
      tmp105Result = conjureControlActive(tmp106, obj27);
    }
    tmp105Result1 = tmp105(tmp106, obj26);
  }
  return tmp105Result1;
}
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ActivityIndicator: metroRequire, Keyboard: metroImportDefault, ScrollView: metroImportAll, View: c9 } = react_native);
({ closeConnection: closure_15, restoreSourceHistoryEntry: closure_16 } = ConjureConnectionStore);
({ enterConjureDesignFeedback: closure_17, exitConjureDesignFeedback: closure_18, useConjureDesignFeedback: closure_19 } = conjureDesignFeedbackStore);
({ Permissions: closure_22, Routes: closure_23 } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
let isLaunched = FramesConstants.isLaunched;
({ jsx: closure_26, jsxs: closure_27, Fragment: closure_28 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureSelectModeActiveIcon() {
  let first;
  obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { color: nativeDefault.colors.TEXT_BRAND };
    const ExperimentalDirectSelectIcon = ExperimentalDirectSelectIcon2.ExperimentalDirectSelectIcon;
    const tmp7 = prioritySpeakerDucking(ExperimentalDirectSelectIcon, obj2);
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function ConjureSelectModeActiveIcon() {
  obj = { color: nativeDefault.colors.TEXT_BRAND };
  const ExperimentalDirectSelectIcon = ExperimentalDirectSelectIcon2.ExperimentalDirectSelectIcon;
  return prioritySpeakerDucking(ExperimentalDirectSelectIcon, obj);
});
let obj = {
  showPublishBlocked: ConjurePublishBlockedSheetDefault,
  openPublishNotes(arg0) {
    let applicationId;
    let initialDraft;
    let projectName;
    let publish;
    ({ guildId, applicationId, projectName, publish, initialDraft } = arg0);
    const showActionSheet = ActionSheetActionCreators.showActionSheet;
    obj = { content: prioritySpeakerDucking(ConjurePublishNotesSheetDefault, { guildId, applicationId, projectName, publish, initialDraft }), key: ConjurePublishNotesSheet.CONJURE_PUBLISH_NOTES_SHEET_KEY };
    showActionSheet(obj);
  },
  showError(content) {
    obj = ToastActionCreatorsDefault;
    const obj2 = { key: "CONJURE_PUBLISH_FAILED", content };
    return obj.open(obj2);
  },
  openProfile(userId) {
    obj = { userId };
    showUserProfileActionSheetDefault(obj);
  }
};
let closure_31 = createStyles.createStyles((paddingBottom) => {
  obj = { content: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom }, contentBare: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, centered: { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 }, listContent: { paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 }, section: { gap: nativeDefault.space.PX_8 }, projectRowTrailing: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 }, unreadPill: size, sectionHeading: { gap: nativeDefault.space.PX_4 }, listError: { alignItems: "center", gap: nativeDefault.space.PX_12 }, headerActions: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 }, segments: { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4 }, panes: { flex: 1, overflow: "hidden" }, pane: { flex: 1 }, chatPane: { flex: 1, paddingBottom }, paneHidden: { display: "none" }, paneBackstage: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0 } };
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom });
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
  ({ flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 });
  ({ paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 });
  ({ gap: nativeDefault.space.PX_8 });
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 });
  size = { position: "absolute", left: 0, top: "50%", width: nativeDefault.space.PX_4, height: nativeDefault.space.PX_8, marginTop: -nativeDefault.space.PX_4, borderTopRightRadius: nativeDefault.radii.xs, borderBottomRightRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
  ({ gap: nativeDefault.space.PX_4 });
  ({ alignItems: "center", gap: nativeDefault.space.PX_12 });
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 });
  ({ paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4 });
  return obj;
});
const PX_16 = nativeDefault.space.PX_16;
const constants2 = { PROJECTS: "PROJECTS", CHAT: "CHAT", DEBUG: "DEBUG" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_34 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProjectRow(project) {
  let date;
  let first;
  let getRelativeTimestamp;
  let intl4;
  let items2;
  let items3;
  let onMore;
  let onPress;
  let tmp12;
  let tmp8;
  let tmp9;
  obj = project(576);
  const cResult = obj.c(34);
  project = project.project;
  ({ onPress, onMore } = project);
  const tmp4 = closure_31(0);
  const obj2 = project(16560);
  const conjureProjectUnreadStatus = obj2.useConjureProjectUnreadStatus(project.id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== project.id) {
    const fn = function n() {
      return ConjureProjectStore.isProjectDeleting(project.id);
    };
    const items1 = [project.id];
    cResult[1] = project.id;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = project(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
  const tmp11 = conjureProjectUnreadStatus === project(16561).VibegrationsReadStateFlags.NEEDS_INPUT && !stateFromStores;
  if (cResult[4] !== project.updated_at) {
    let formatToPlainStringResult;
    if (null != project.updated_at) {
      const intl = tmp(1126).intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj3 = { time: getRelativeTimestamp(date.getTime()) };
      const AXydi3 = _modDef3827.AXydi3;
      const _Date = Date;
      const self = this;
      const self2 = this;
      getRelativeTimestamp = project(6066).getRelativeTimestamp;
      project(6066);
      date = new Date(project.updated_at);
      formatToPlainStringResult = formatToPlainString(AXydi3, obj3);
    }
    cResult[4] = project.updated_at;
    cResult[5] = formatToPlainStringResult;
    tmp12 = formatToPlainStringResult;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === stateFromStores) {
    let tmp18;
    let tmp21;
    let tmp24;
    let tmp29Result;
    if (cResult[7] === tmp12) {
      tmp18 = cResult[8];
    }
    if (cResult[9] !== tmp11) {
      let stringResult;
      if (tmp11) {
        const intl3 = tmp(1126).intl;
        stringResult = intl3.string(_modDef3827.hfIuc7);
      }
      cResult[9] = tmp11;
      cResult[10] = stringResult;
      tmp21 = stringResult;
    } else {
      tmp21 = cResult[10];
    }
    if (cResult[11] !== project) {
      const obj4 = { project, size: "list" };
      const tmp27 = closure_26(ConjureProjectIconDefault, obj4);
      cResult[11] = project;
      cResult[12] = tmp27;
      tmp24 = tmp27;
    } else {
      tmp24 = cResult[12];
    }
    if (cResult[13] === stateFromStores) {
      if (cResult[14] === tmp11) {
        if (cResult[15] === onMore) {
          let tmp28;
          if (cResult[16] === tmp4) {
            tmp28 = cResult[17];
          }
          if (cResult[18] === stateFromStores) {
            if (cResult[19] === onMore) {
              if (cResult[20] === onPress) {
                if (cResult[21] === project.name) {
                  if (cResult[22] === tmp18) {
                    if (cResult[23] === tmp21) {
                      if (cResult[24] === tmp24) {
                        let tmp40;
                        if (cResult[25] === tmp28) {
                          tmp40 = cResult[26];
                        }
                        if (cResult[27] === stateFromStores) {
                          if (cResult[28] === tmp4) {
                            let tmp43;
                            if (cResult[29] === conjureProjectUnreadStatus) {
                              tmp43 = cResult[30];
                            }
                            if (cResult[31] === tmp43) {
                              let tmp48;
                              if (cResult[32] === tmp40) {
                                tmp48 = cResult[33];
                              }
                              return tmp48;
                            }
                            const obj5 = { children: items2 };
                            items2 = [tmp40, tmp43];
                            const tmp51 = closure_27(closure_9, obj5);
                            cResult[31] = tmp43;
                            cResult[32] = tmp40;
                            cResult[33] = tmp51;
                            tmp48 = tmp51;
                          }
                        }
                        let tmp45 = null;
                        if (null != conjureProjectUnreadStatus) {
                          tmp45 = null;
                          if (!stateFromStores) {
                            const obj6 = { style: tmp4.unreadPill, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no" };
                            tmp45 = closure_26(closure_9, obj6);
                          }
                        }
                        cResult[27] = stateFromStores;
                        cResult[28] = tmp4;
                        cResult[29] = conjureProjectUnreadStatus;
                        cResult[30] = tmp45;
                        tmp43 = tmp45;
                      }
                    }
                  }
                }
              }
            }
          }
          const obj7 = { label: project.name, subLabel: tmp18, accessibilityHint: tmp21, disabled: stateFromStores, icon: tmp24, trailing: tmp28, onPress, onLongPress: onMore };
          const tmp42 = closure_26(project(6186).TableRow, obj7);
          cResult[18] = stateFromStores;
          cResult[19] = onMore;
          cResult[20] = onPress;
          cResult[21] = project.name;
          cResult[22] = tmp18;
          cResult[23] = tmp21;
          cResult[24] = tmp24;
          cResult[25] = tmp28;
          cResult[26] = tmp42;
          tmp40 = tmp42;
        }
      }
    }
    if (stateFromStores) {
      tmp29Result = closure_26(closure_6, {});
    } else {
      let tmp31 = null;
      const obj8 = { style: tmp4.projectRowTrailing, children: items3 };
      const tmp29 = closure_27;
      const tmp30 = closure_9;
      if (tmp11) {
        tmp31 = closure_26(MentionsBadgeDefault, { mentionsCount: 1 });
      }
      items3 = [tmp31, ];
      const obj9 = { IconComponent: project(9214).MoreHorizontalIcon, onPress: onMore, accessibilityLabel: intl4.string(project(1126).t["UKOtz+"]) };
      const tmp36 = ConjureHeaderIconButtonDefault;
      intl4 = tmp(1126).intl;
      items3[1] = closure_26(tmp36, obj9);
      tmp29Result = tmp29(tmp30, obj8);
    }
    cResult[13] = stateFromStores;
    cResult[14] = tmp11;
    cResult[15] = onMore;
    cResult[16] = tmp4;
    cResult[17] = tmp29Result;
    tmp28 = tmp29Result;
  }
  let stringResult1 = tmp12;
  if (stateFromStores) {
    const intl2 = tmp(1126).intl;
    stringResult1 = intl2.string(_modDef3827.Yh5pAc);
  }
  cResult[6] = stateFromStores;
  cResult[7] = tmp12;
  cResult[8] = stringResult1;
  tmp18 = stringResult1;
}) : (function ProjectRow(project) {
  let date;
  let getRelativeTimestamp;
  let intl4;
  let items2;
  let stringResult;
  let tmp12Result;
  project = project.project;
  const onMore = project.onMore;
  const onPress = project.onPress;
  const tmp = closure_31(0);
  obj = project(16560);
  const conjureProjectUnreadStatus = obj.useConjureProjectUnreadStatus(project.id);
  const items = [ConjureProjectStore];
  const items1 = [project.id];
  const obj2 = project(504);
  const stateFromStores = obj2.useStateFromStores(items, () => ConjureProjectStore.isProjectDeleting(project.id), items1);
  const tmp6 = conjureProjectUnreadStatus === project(16561).VibegrationsReadStateFlags.NEEDS_INPUT && !stateFromStores;
  let formatToPlainStringResult;
  if (null != project.updated_at) {
    const intl = tmp2(1126).intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj3 = { time: getRelativeTimestamp(date.getTime()) };
    const AXydi3 = _modDef3827.AXydi3;
    const _Date = Date;
    const self = this;
    const self2 = this;
    getRelativeTimestamp = project(6066).getRelativeTimestamp;
    project(6066);
    date = new Date(project.updated_at);
    formatToPlainStringResult = formatToPlainString(AXydi3, obj3);
  }
  const obj4 = { label: project.name, subLabel: formatToPlainStringResult, accessibilityHint: stringResult, disabled: stateFromStores, icon: closure_26(ConjureProjectIconDefault, { project, size: "list" }), trailing: tmp12Result, onPress, onLongPress: onMore };
  const TableRow = tmp2(6186).TableRow;
  if (stateFromStores) {
    const intl2 = tmp2(1126).intl;
    formatToPlainStringResult = intl2.string(_modDef3827.Yh5pAc);
  }
  stringResult = undefined;
  if (tmp6) {
    const intl3 = tmp2(1126).intl;
    stringResult = intl3.string(_modDef3827.hfIuc7);
  }
  if (stateFromStores) {
    tmp12Result = tmp14(closure_6, {});
  } else {
    let tmp14Result3 = null;
    const obj5 = { style: tmp.projectRowTrailing, children: items2 };
    if (tmp6) {
      tmp14Result3 = tmp14(tmp18(16564), { mentionsCount: 1 });
    }
    items2 = [tmp14Result3, ];
    const obj6 = { IconComponent: project(9214).MoreHorizontalIcon, onPress: onMore, accessibilityLabel: intl4.string(project(1126).t["UKOtz+"]) };
    const tmp18Result = ConjureHeaderIconButtonDefault;
    intl4 = tmp2(1126).intl;
    items2[1] = closure_26(tmp18Result, obj6);
    tmp12Result = tmp12(tmp13, obj5);
  }
  const children = [closure_26(TableRow, obj4), ];
  let tmp14Result4 = null;
  if (null != conjureProjectUnreadStatus) {
    tmp14Result4 = null;
    if (!stateFromStores) {
      const obj7 = { style: tmp.unreadPill, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no" };
      tmp14Result4 = tmp14(tmp13, obj7);
    }
  }
  children[1] = tmp14Result4;
  return closure_27(closure_9, { children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_35 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProjectList(guildId) {
  let closure_3;
  let closure_4;
  let closure_5;
  let settings;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp20;
  let tmp28;
  let tmp29;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp = guildId;
  let tmp2 = F;
  obj = guildId(F[18]);
  const cResult = obj.c(75);
  guildId = guildId.guildId;
  const bottom = navigation(F[39])().bottom;
  closure_31(0);
  let obj2 = guildId(F[40]);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    const fn = function o() {
      return ConjureProjectStore.getOwnedProjects();
    };
    const items1 = [];
    cResult[0] = items;
    let num = 1;
    cResult[1] = fn;
    let num2 = 2;
    cResult[2] = items1;
    tmp6 = items;
    tmp7 = fn;
    tmp8 = items1;
  } else {
    [tmp6, tmp7, tmp8] = cResult;
  }
  const tmpResult = tmp(tmp2[29]);
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp6, tmp7, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ConjureProjectStore];
    cResult[3] = items2;
    tmp10 = items2;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== guildId) {
    const fn2 = function b() {
      return ConjureProjectStore.getSharedProjects(guildId);
    };
    const items3 = [guildId];
    cResult[4] = guildId;
    cResult[5] = fn2;
    cResult[6] = items3;
    tmp13 = items3;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[5];
    tmp13 = cResult[6];
  }
  const tmpResult3 = tmp(tmp2[29]);
  const stateFromStoresArray1 = tmpResult3.useStateFromStoresArray(tmp10, tmp12, tmp13);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [ConjureProjectStore];
    const fn3 = function y() {
      return ConjureProjectStore.getProjectsFetchState();
    };
    const items5 = [];
    cResult[7] = items4;
    cResult[8] = fn3;
    cResult[9] = items5;
    tmp16 = items5;
    tmp15 = fn3;
    tmp14 = items4;
  } else {
    tmp14 = cResult[7];
    tmp15 = cResult[8];
    tmp16 = cResult[9];
  }
  const tmpResult4 = tmp(tmp2[29]);
  const stateFromStores = tmpResult4.useStateFromStores(tmp14, tmp15, tmp16);
  if (cResult[10] === stateFromStoresArray) {
    if (cResult[16] !== stateFromStoresArray1) {
      let tmp25;
      const _Symbol = Symbol;
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        class O {
          constructor(updated_at, updated_at2) {
            let num = 1;
            if (null != updated_at.updated_at) {
              let num2 = -1;
              if (null != updated_at2.updated_at) {
                updated_at = updated_at2.updated_at;
                num2 = updated_at.localeCompare(updated_at.updated_at);
              }
              num = num2;
            }
            return num;
          }
        }
        cResult[18] = O;
        tmp25 = O;
      } else {
        class O {
          constructor(updated_at, updated_at2) {
            let num = 1;
            if (null != updated_at.updated_at) {
              let num2 = -1;
              if (null != updated_at2.updated_at) {
                updated_at = updated_at2.updated_at;
                num2 = updated_at.localeCompare(updated_at.updated_at);
              }
              num = num2;
            }
            return num;
          }
        }
      }
      const substr = stateFromStoresArray1.slice();
      const sorted = substr.sort(tmp25);
      cResult[16] = stateFromStoresArray1;
      cResult[17] = sorted;
    } else {
      class O {
        constructor(updated_at, updated_at2) {
          let num = 1;
          if (null != updated_at.updated_at) {
            let num2 = -1;
            if (null != updated_at2.updated_at) {
              updated_at = updated_at2.updated_at;
              num2 = updated_at.localeCompare(updated_at.updated_at);
            }
            num = num2;
          }
          return num;
        }
      }
    }
    if (cResult[19] !== navigation) {
      class F {
        constructor(projectId) {
          obj = { projectId };
          return navigation.push(constants.CHAT, obj);
        }
      }
      cResult[19] = navigation;
      cResult[20] = F;
    } else {
      class F {
        constructor(projectId) {
          obj = { projectId };
          return navigation.push(constants.CHAT, obj);
        }
      }
    }
    F = tmp27;
    if (cResult[21] === guildId) {
      class F {
        constructor(projectId) {
          obj = { projectId };
          return navigation.push(constants.CHAT, obj);
        }
      }
      _asyncToGenerator = tmp28;
      if (cResult[24] === guildId) {
        class F {
          constructor(projectId) {
            obj = { projectId };
            return navigation.push(constants.CHAT, obj);
          }
        }
        _slicedToArray = tmp29;
        if (cResult[27] === guildId) {
          class F {
            constructor(projectId) {
              obj = { projectId };
              return navigation.push(constants.CHAT, obj);
            }
          }
          react = tmp30;
          if (cResult[30] === guildId) {
            class F {
              constructor(projectId) {
                obj = { projectId };
                return navigation.push(constants.CHAT, obj);
              }
            }
          }
          class Y {
            constructor(arg0) {
              closure_0 = guildId;
              tmp = guildId(closure_2[44]);
              obj = { project: guildId, guildId: closure_0, muted: null, removeTarget: null, openChat: null, onRemix: null, onOpenSettings: null };
              conjureProjectActions = tmp.conjureProjectActions;
              obj2 = guildId(closure_2[45]);
              obj.muted = obj2.isConjureProjectMuted(closure_1_11.settings, guildId.id);
              obj3 = guildId(closure_2[46]);
              obj.removeTarget = obj3.readConjureRemoveTarget(guildId);
              obj.openChat = function openChat() {
                return F(project.id);
              };
              obj.onRemix = function onRemix() {
                return react(project);
              };
              obj.onOpenSettings = function onOpenSettings() {
                let guild_id;
                let obj2;
                let tmp2;
                let tmp3;
                const tmp = ActionSheetActionCreators;
                const showActionSheet = tmp.showActionSheet;
                obj = { key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY, content: tmp2(tmp3, obj2) };
                obj2 = { projectId: project.id, guildId: guild_id, initialTab: "project", isPreview: true };
                guild_id = project.guild_id;
                tmp2 = prioritySpeakerDucking;
                tmp3 = ConjureSettingsSheetDefault;
                if (guild_id == null) {
                  guild_id = guildId;
                }
                return showActionSheet(obj);
              };
              result = conjureProjectActions(obj);
              obj4 = guildId(closure_2[48]);
              obj1 = { key: "VibegrationsProjectActions", header: { title: guildId.name }, hasIcons: true, options: result.map((label) => ({ label: label.label, IconComponent: label.IconComponent, isDestructive: label.destructive, onPress: label.action })) };
              result1 = obj4.showSimpleActionSheet(obj1);
              return;
            }
          }
          cResult[30] = guildId;
          cResult[31] = tmp27;
          cResult[32] = tmp30;
          cResult[33] = Y;
        }
        class V {
          constructor(project) {
            let obj2;
            const tmp = ActionSheetActionCreators;
            const showActionSheet = tmp.showActionSheet;
            obj = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: prioritySpeakerDucking(ConjureRemixSheetDefault, obj2) };
            obj2 = { project, currentGuildId: guildId, onRemixed: tmp28 };
            showActionSheet(obj);
          }
        }
        cResult[27] = guildId;
        cResult[28] = tmp28;
        cResult[29] = V;
      }
      class X {
        constructor() {
          let obj2;
          const tmp = ActionSheetActionCreators;
          const showActionSheet = tmp.showActionSheet;
          obj = { key: ConjureCreateSheet.CONJURE_CREATE_SHEET_KEY, content: prioritySpeakerDucking(ConjureCreateSheetDefault, obj2) };
          obj2 = { guildId, onCreated: tmp28 };
          showActionSheet(obj);
        }
      }
      cResult[24] = guildId;
      cResult[25] = tmp28;
      cResult[26] = X;
      tmp29 = X;
    }
    F = tmp27;
    const fn4 = (arg0, arg1) => {
      if (arg1 === closure_0) {
        closure_1(arg0);
      } else {
        obj = guildId(stateFromStoresArray[27]);
        obj.transitionTo(closure_2_23.CHANNEL(arg1, constants.CONJURE, arg0));
      }
    };
    cResult[21] = guildId;
    cResult[22] = tmp27;
    cResult[23] = fn4;
    tmp28 = fn4;
  }
  if (cResult[13] !== guildId) {
    class F {
      constructor(projectId) {
        obj = { projectId };
        return navigation.push(constants.CHAT, obj);
      }
    }
    cResult[13] = guildId;
    class Y {
      constructor(arg0) {
        closure_0 = guildId;
        tmp = guildId(closure_2[44]);
        obj = { project: guildId, guildId: closure_0, muted: null, removeTarget: null, openChat: null, onRemix: null, onOpenSettings: null };
        conjureProjectActions = tmp.conjureProjectActions;
        obj2 = guildId(closure_2[45]);
        obj.muted = obj2.isConjureProjectMuted(closure_1_11.settings, guildId.id);
        obj3 = guildId(closure_2[46]);
        obj.removeTarget = obj3.readConjureRemoveTarget(guildId);
        obj.openChat = function openChat() {
          return F(project.id);
        };
        obj.onRemix = function onRemix() {
          return react(project);
        };
        obj.onOpenSettings = function onOpenSettings() {
          let guild_id;
          let obj2;
          let tmp2;
          let tmp3;
          const tmp = ActionSheetActionCreators;
          const showActionSheet = tmp.showActionSheet;
          obj = { key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY, content: tmp2(tmp3, obj2) };
          obj2 = { projectId: project.id, guildId: guild_id, initialTab: "project", isPreview: true };
          guild_id = project.guild_id;
          tmp2 = prioritySpeakerDucking;
          tmp3 = ConjureSettingsSheetDefault;
          if (guild_id == null) {
            guild_id = guildId;
          }
          return showActionSheet(obj);
        };
        result = conjureProjectActions(obj);
        obj4 = guildId(closure_2[48]);
        obj1 = { key: "VibegrationsProjectActions", header: { title: guildId.name }, hasIcons: true, options: result.map((label) => ({ label: label.label, IconComponent: label.IconComponent, isDestructive: label.destructive, onPress: label.action })) };
        result1 = obj4.showSimpleActionSheet(obj1);
        return;
      }
    }
    cResult[14] = R;
    tmp20 = R;
  } else {
    class F {
      constructor(projectId) {
        obj = { projectId };
        return navigation.push(constants.CHAT, obj);
      }
    }
  }
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor(projectId) {
        obj = { projectId };
        return navigation.push(constants.CHAT, obj);
      }
    }
    cResult[15] = tmp22;
    class Y {
      constructor(arg0) {
        closure_0 = guildId;
        tmp = guildId(closure_2[44]);
        obj = { project: guildId, guildId: closure_0, muted: null, removeTarget: null, openChat: null, onRemix: null, onOpenSettings: null };
        conjureProjectActions = tmp.conjureProjectActions;
        obj2 = guildId(closure_2[45]);
        obj.muted = obj2.isConjureProjectMuted(closure_1_11.settings, guildId.id);
        obj3 = guildId(closure_2[46]);
        obj.removeTarget = obj3.readConjureRemoveTarget(guildId);
        obj.openChat = function openChat() {
          return F(project.id);
        };
        obj.onRemix = function onRemix() {
          return react(project);
        };
        obj.onOpenSettings = function onOpenSettings() {
          let guild_id;
          let obj2;
          let tmp2;
          let tmp3;
          const tmp = ActionSheetActionCreators;
          const showActionSheet = tmp.showActionSheet;
          obj = { key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY, content: tmp2(tmp3, obj2) };
          obj2 = { projectId: project.id, guildId: guild_id, initialTab: "project", isPreview: true };
          guild_id = project.guild_id;
          tmp2 = prioritySpeakerDucking;
          tmp3 = ConjureSettingsSheetDefault;
          if (guild_id == null) {
            guild_id = guildId;
          }
          return showActionSheet(obj);
        };
        result = conjureProjectActions(obj);
        obj4 = guildId(closure_2[48]);
        obj1 = { key: "VibegrationsProjectActions", header: { title: guildId.name }, hasIcons: true, options: result.map((label) => ({ label: label.label, IconComponent: label.IconComponent, isDestructive: label.destructive, onPress: label.action })) };
        result1 = obj4.showSimpleActionSheet(obj1);
        return;
      }
    }
  } else {
    class F {
      constructor(projectId) {
        obj = { projectId };
        return navigation.push(constants.CHAT, obj);
      }
    }
  }
  const found = stateFromStoresArray.filter(tmp20);
  const sorted1 = found.sort(tmp21);
  cResult[10] = stateFromStoresArray;
  cResult[11] = guildId;
  cResult[12] = sorted1;
}) : (function ProjectList(guildId) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items18;
  let items19;
  let obj13;
  let settings;
  let tmp24;
  guildId = guildId.guildId;
  navigation = undefined;
  let stateFromStoresArray;
  let memo2;
  let tmp = navigation;
  let tmp2 = stateFromStoresArray;
  const bottom = navigation(stateFromStoresArray[39])().bottom;
  let tmp3 = closure_31(0);
  obj = guildId(stateFromStoresArray[40]);
  navigation = obj.useNavigation();
  let obj2 = guildId(stateFromStoresArray[29]);
  const items = [ConjureProjectStore];
  stateFromStoresArray = obj2.useStateFromStoresArray(items, () => ConjureProjectStore.getOwnedProjects(), []);
  let obj3 = guildId(stateFromStoresArray[29]);
  const items1 = [ConjureProjectStore];
  const items2 = [guildId];
  const stateFromStoresArray1 = obj3.useStateFromStoresArray(items1, () => ConjureProjectStore.getSharedProjects(guildId), items2);
  let obj4 = guildId(stateFromStoresArray[29]);
  const items3 = [ConjureProjectStore];
  const stateFromStores = obj4.useStateFromStores(items3, () => ConjureProjectStore.getProjectsFetchState(), []);
  const items4 = [stateFromStoresArray, guildId];
  const memo = memo2.useMemo(() => {
    const found = stateFromStoresArray.filter((item) => {
      obj = guildId(stateFromStoresArray[41]);
      return obj.isConjureProjectInGuild(item, closure_1_0);
    });
    return found.sort((updated_at, updated_at2) => {
      let num = 1;
      if (null != updated_at.updated_at) {
        let num2 = -1;
        if (null != updated_at2.updated_at) {
          updated_at = updated_at2.updated_at;
          num2 = updated_at.localeCompare(updated_at.updated_at);
        }
        num = num2;
      }
      return num;
    });
  }, items4);
  const items5 = [stateFromStoresArray1];
  const memo1 = memo2.useMemo(() => {
    const substr = stateFromStoresArray1.slice();
    return substr.sort((updated_at, updated_at2) => {
      let num = 1;
      if (null != updated_at.updated_at) {
        let num2 = -1;
        if (null != updated_at2.updated_at) {
          updated_at = updated_at2.updated_at;
          num2 = updated_at.localeCompare(updated_at.updated_at);
        }
        num = num2;
      }
      return num;
    });
  }, items5);
  const items6 = [navigation];
  const callback = memo2.useCallback((projectId) => {
    obj = { projectId };
    return navigation.push(constants.CHAT, obj);
  }, items6);
  const items7 = [guildId, callback];
  memo2 = memo2.useMemo(() => {
    let closure_1 = callback;
    return (arg0, arg1) => {
      if (arg1 === closure_0) {
        closure_1(arg0);
      } else {
        obj = guildId(stateFromStoresArray[27]);
        obj.transitionTo(closure_2_23.CHANNEL(arg1, constants.CONJURE, arg0));
      }
    };
  }, items7);
  const items8 = [guildId, memo2];
  const callback1 = memo2.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    obj = { key: ConjureCreateSheet.CONJURE_CREATE_SHEET_KEY, content: prioritySpeakerDucking(ConjureCreateSheetDefault, obj2) };
    obj2 = { guildId, onCreated: memo2 };
    showActionSheet(obj);
  }, items8);
  const items9 = [guildId, memo2];
  const callback2 = memo2.useCallback((project) => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    obj = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: prioritySpeakerDucking(ConjureRemixSheetDefault, obj2) };
    obj2 = { project, currentGuildId: guildId, onRemixed: memo2 };
    showActionSheet(obj);
  }, items9);
  const items10 = [guildId, callback, callback2];
  let closure_8 = memo2.useCallback((project) => {
    let obj2;
    let obj3;
    guildId = project;
    let tmp = guildId(stateFromStoresArray[44]);
    obj = {
      project,
      guildId,
      muted: obj2.isConjureProjectMuted(settings.settings, project.id),
      removeTarget: obj3.readConjureRemoveTarget(project),
      openChat() {
        return callback(project.id);
      },
      onRemix() {
        return callback2(project);
      },
      onOpenSettings() {
        let guild_id;
        let obj2;
        let tmp2;
        let tmp3;
        const tmp = ActionSheetActionCreators;
        const showActionSheet = tmp.showActionSheet;
        obj = { key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY, content: tmp2(tmp3, obj2) };
        obj2 = { projectId: project.id, guildId: guild_id, initialTab: "project", isPreview: true };
        guild_id = project.guild_id;
        tmp2 = prioritySpeakerDucking;
        tmp3 = ConjureSettingsSheetDefault;
        if (guild_id == null) {
          guild_id = guildId;
        }
        return showActionSheet(obj);
      }
    };
    const conjureProjectActions = tmp.conjureProjectActions;
    obj2 = guildId(stateFromStoresArray[45]);
    obj3 = guildId(stateFromStoresArray[46]);
    const result = conjureProjectActions(obj);
    const obj4 = guildId(stateFromStoresArray[48]);
    const obj5 = { key: "VibegrationsProjectActions", header: { title: project.name }, hasIcons: true, options: result.map((label) => ({ label: label.label, IconComponent: label.IconComponent, isDestructive: label.destructive, onPress: label.action })) };
    const result1 = obj4.showSimpleActionSheet(obj5);
  }, items10);
  const items11 = [navigation, callback1];
  const effect = memo2.useEffect(() => {
    let onPress;
    obj = {
      headerRight() {
        let intl;
        obj = { IconComponent: guildId(stateFromStoresArray[49]).PlusLargeIcon, onPress, accessibilityLabel: intl.string(guildId(stateFromStoresArray[31]).t.CumH4u) };
        const tmp = navigation(stateFromStoresArray[36]);
        intl = guildId(stateFromStoresArray[31]).intl;
        return closure_2_26(tmp, obj);
      }
    };
    navigation.setOptions(obj);
  }, items11);
  let tmp16Result = null;
  const tmp14 = memo.length > 0 || memo1.length > 0;
  if (!tmp14) {
    let obj5 = { style: tmp3.centered, children: null };
    if (null != stateFromStores) {
      let tmp16Result2;
      if ("loading" !== stateFromStores.type) {
        if ("error" === stateFromStores.type) {
          const obj6 = { style: tmp3.listError, children: items12 };
          const obj7 = { variant: "text-md/normal", color: "text-muted", children: intl.string(tmp(tmp2[32]).DJAPMO) };
          const Text = tmp4(tmp2[50]).Text;
          intl = tmp4(tmp2[31]).intl;
          items12 = [closure_26(Text, obj7), ];
          const obj8 = {
            variant: "secondary",
            size: "sm",
            text: intl2.string(tmp(tmp2[32])["WFJ/vb"]),
            onPress() {
                      obj = ConjureActionCreators;
                      return obj.listProjects(guildId);
                    }
          };
          const Button = tmp4(tmp2[51]).Button;
          intl2 = tmp4(tmp2[31]).intl;
          items12[1] = closure_26(Button, obj8);
          tmp16Result2 = closure_27(tmp17, obj6);
        } else {
          const obj9 = { style: tmp3.listError, children: items13 };
          const obj10 = { variant: "text-md/normal", color: "text-muted", children: intl7.string(tmp(tmp2[32])["9/5sLV"]) };
          const Text6 = tmp4(tmp2[50]).Text;
          intl7 = tmp4(tmp2[31]).intl;
          items13 = [closure_26(Text6, obj10), ];
          const obj11 = { variant: "primary", size: "sm", text: intl8.string(guildId(tmp2[31]).t.CumH4u), onPress: callback1 };
          const Button2 = tmp4(tmp2[51]).Button;
          intl8 = tmp4(tmp2[31]).intl;
          items13[1] = closure_26(Button2, obj11);
          tmp16Result2 = closure_27(tmp17, obj9);
        }
      }
      obj5.children = tmp16Result2;
      tmp16Result = tmp16(tmp17, obj5);
    }
    tmp16Result2 = tmp16(callback1, {});
  }
  const obj12 = { style: tmp3.content, children: closure_27(tmp24, obj13) };
  obj13 = { contentContainerStyle: items14, scrollIndicatorInsets: { bottom }, keyboardShouldPersistTaps: "handled", children: items15 };
  items14 = [tmp3.listContent, { paddingBottom: tmp(tmp2[20]).space.PX_8 + bottom }];
  items15 = [, , , ];
  ({ paddingBottom: tmp(tmp2[20]).space.PX_8 + bottom });
  items15[0] = closure_26(tmp(tmp2[53]), {});
  let tmp23Result = null;
  tmp24 = closure_8;
  if (memo.length > 0) {
    const obj15 = { style: tmp3.section, children: items17 };
    const obj16 = { style: tmp3.sectionHeading, children: items16 };
    const obj17 = { variant: "heading-md/bold", color: "text-default", children: intl3.string(tmp(tmp2[32]).dWgSAa) };
    const Text2 = tmp4(tmp2[50]).Text;
    intl3 = tmp4(tmp2[31]).intl;
    items16 = [closure_26(Text2, obj17), ];
    const obj18 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(tmp(tmp2[32]).JQpNkh) };
    const Text3 = tmp4(tmp2[50]).Text;
    intl4 = tmp4(tmp2[31]).intl;
    items16[1] = closure_26(Text3, obj18);
    items17 = [closure_27(closure_9, obj16), ];
    const obj19 = {
      hasIcons: true,
      children: memo.map((project) => {
          obj = {
            project,
            onPress() {
              return callback(project.id);
            },
            onMore() {
              return closure_8(project);
            }
          };
          return closure_1_26(closure_1_34, obj, project.id);
        })
    };
    const TableRowGroup = tmp4(tmp2[54]).TableRowGroup;
    items17[1] = closure_26(TableRowGroup, obj19);
    tmp23Result = tmp23(tmp22, obj15);
  }
  items15[1] = tmp23Result;
  let tmp23Result2 = null;
  if (memo1.length > 0) {
    const obj20 = { style: tmp3.section, children: items19 };
    const obj21 = { style: tmp3.sectionHeading, children: items18 };
    const obj22 = { variant: "heading-md/bold", color: "text-default", children: intl5.string(tmp(tmp2[32])["wFi8+o"]) };
    const Text4 = tmp4(tmp2[50]).Text;
    intl5 = tmp4(tmp2[31]).intl;
    items18 = [closure_26(Text4, obj22), ];
    const obj23 = { variant: "text-sm/normal", color: "text-muted", children: intl6.string(tmp(tmp2[32]).dQ3U1J) };
    const Text5 = tmp4(tmp2[50]).Text;
    intl6 = tmp4(tmp2[31]).intl;
    items18[1] = closure_26(Text5, obj23);
    items19 = [closure_27(closure_9, obj21), ];
    const obj24 = {
      hasIcons: true,
      children: memo1.map((project) => {
          obj = {
            project,
            onPress() {
              return callback(project.id);
            },
            onMore() {
              return closure_8(project);
            }
          };
          return closure_1_26(closure_1_34, obj, project.id);
        })
    };
    const TableRowGroup2 = tmp4(tmp2[54]).TableRowGroup;
    items19[1] = closure_26(TableRowGroup2, obj24);
    tmp23Result2 = tmp23(tmp22, obj20);
  }
  items15[2] = tmp23Result2;
  items15[3] = tmp16Result;
  return closure_26(closure_9, obj12);
});
let closure_36 = { code: "function ConjureStandaloneScreenTsx1(e){const{runOnJS,setChatKeyboardCover,safeAreaBottom}=this.__closure;runOnJS(setChatKeyboardCover)(Math.max(0,e.height-safeAreaBottom));}" };
let closure_37 = { code: "function ConjureStandaloneScreenTsx2(){const{previewShowing,botFaceShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{paddingBottom:previewShowing&&!botFaceShowing?Math.max(keyboardHeight.get(),safeAreaBottom):0};}" };
let closure_38 = { code: "function ConjureStandaloneScreenTsx3(){const{previewShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{transform:[{translateY:previewShowing?0:-Math.max(0,keyboardHeight.get()-safeAreaBottom)}]};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_40 = ReactCompilerGating.isReactCompilerEnabled() ? (function RoutedProjectOpener(projectId) {
  let openedProjectIdRef;
  obj = projectId(openedProjectIdRef[18]);
  const cResult = obj.c(6);
  projectId = projectId.projectId;
  const sceneProjectId = projectId.sceneProjectId;
  openedProjectIdRef = projectId.openedProjectIdRef;
  const obj2 = projectId(openedProjectIdRef[40]);
  navigation = obj2.useNavigation();
  if (cResult[0] === navigation) {
    if (cResult[1] === openedProjectIdRef) {
      if (cResult[2] === projectId) {
        let tmp3;
        let tmp4;
        if (cResult[3] === sceneProjectId) {
          tmp3 = cResult[4];
          tmp4 = cResult[5];
        }
        const effect = react.useEffect(tmp3, tmp4);
        return null;
      }
    }
  }
  const fn = function t() {
    const tmp2 = null != projectId && tmp !== openedProjectIdRef.current;
    if (tmp2) {
      openedProjectIdRef.current = projectId;
      if (projectId !== sceneProjectId) {
        obj = { projectId };
        navigation.push(constants.CHAT, obj);
      }
    }
  };
  const items = [projectId, sceneProjectId, openedProjectIdRef, navigation];
  cResult[0] = navigation;
  cResult[1] = openedProjectIdRef;
  cResult[2] = projectId;
  cResult[3] = sceneProjectId;
  cResult[4] = fn;
  cResult[5] = items;
  tmp4 = items;
  tmp3 = fn;
}) : (function RoutedProjectOpener(projectId) {
  projectId = projectId.projectId;
  const sceneProjectId = projectId.sceneProjectId;
  const openedProjectIdRef = projectId.openedProjectIdRef;
  obj = projectId(openedProjectIdRef[40]);
  navigation = obj.useNavigation();
  const items = [projectId, sceneProjectId, openedProjectIdRef, navigation];
  const effect = react.useEffect(() => {
    const tmp2 = null != projectId && tmp !== openedProjectIdRef.current;
    if (tmp2) {
      openedProjectIdRef.current = projectId;
      if (projectId !== sceneProjectId) {
        obj = { projectId };
        navigation.push(constants.CHAT, obj);
      }
    }
  }, items);
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureStandaloneScreen(guildId) {
  let first;
  let openedProjectIdRef;
  let stateFromStores;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp22;
  let tmp24;
  let tmp25;
  let tmp7;
  let tmp8;
  let tmp = guildId;
  const tmp2 = stateFromStores;
  obj = guildId(stateFromStores[18]);
  const cResult = obj.c(56);
  guildId = guildId.guildId;
  let obj2 = guildId(stateFromStores[40]);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ConjureBuilderRouteStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function a() {
      const routedProjectId = ConjureBuilderRouteStore.getRoutedProjectId(guildId);
      return routedProjectId;
    };
    const items1 = [guildId];
    cResult[1] = guildId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(tmp2[29]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GuildStore];
    cResult[4] = items2;
    tmp10 = items2;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== guildId) {
    class I {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    const items3 = [guildId];
    cResult[5] = guildId;
    cResult[6] = I;
    cResult[7] = items3;
    tmp13 = items3;
    tmp12 = I;
  } else {
    class I {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    tmp13 = cResult[7];
  }
  const tmpResult5 = tmp(tmp2[29]);
  const stateFromStores1 = tmpResult5.useStateFromStores(tmp10, tmp12, tmp13);
  if (cResult[8] !== guildId) {
    class I {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    tmp16[0] = guildId;
    cResult[8] = guildId;
    cResult[9] = tmp16;
    tmp15 = tmp16;
  } else {
    class I {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  const tmpResult6 = tmp(tmp2[93]);
  const isConjureGuildEnabled = tmpResult6.useIsConjureGuildEnabled(tmp15);
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    const items4 = [GuildMemberStore];
    cResult[10] = items4;
    tmp18 = items4;
  } else {
    class I {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  if (cResult[11] !== guildId) {
    class E {
      constructor() {
        const selfMember = GuildMemberStore.getSelfMember(guildId);
        let roles;
        if (selfMember != null) {
          roles = selfMember.roles;
        }
        if (roles == null) {
          roles = [];
        }
        return roles;
      }
    }
    const items5 = [guildId];
    cResult[11] = guildId;
    cResult[12] = items5;
    cResult[13] = E;
    tmp20 = E;
    tmp19 = items5;
  } else {
    class E {
      constructor() {
        const selfMember = GuildMemberStore.getSelfMember(guildId);
        let roles;
        if (selfMember != null) {
          roles = selfMember.roles;
        }
        if (roles == null) {
          roles = [];
        }
        return roles;
      }
    }
    tmp20 = cResult[13];
  }
  const tmpResult7 = tmp(tmp2[29]);
  const stateFromStoresArray = tmpResult7.useStateFromStoresArray(tmp18, tmp20, tmp19);
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        const selfMember = GuildMemberStore.getSelfMember(guildId);
        let roles;
        if (selfMember != null) {
          roles = selfMember.roles;
        }
        if (roles == null) {
          roles = [];
        }
        return roles;
      }
    }
    const items6 = [GuildStore, PermissionStore];
    cResult[14] = items6;
    tmp22 = items6;
  } else {
    class E {
      constructor() {
        const selfMember = GuildMemberStore.getSelfMember(guildId);
        let roles;
        if (selfMember != null) {
          roles = selfMember.roles;
        }
        if (roles == null) {
          roles = [];
        }
        return roles;
      }
    }
  }
  if (cResult[15] !== guildId) {
    class E {
      constructor() {
        const selfMember = GuildMemberStore.getSelfMember(guildId);
        let roles;
        if (selfMember != null) {
          roles = selfMember.roles;
        }
        if (roles == null) {
          roles = [];
        }
        return roles;
      }
    }
    const items7 = [guildId];
    cResult[15] = guildId;
    cResult[16] = tmp26;
    cResult[17] = items7;
    tmp25 = items7;
    tmp24 = tmp26;
  } else {
    class E {
      constructor() {
        const selfMember = GuildMemberStore.getSelfMember(guildId);
        let roles;
        if (selfMember != null) {
          roles = selfMember.roles;
        }
        if (roles == null) {
          roles = [];
        }
        return roles;
      }
    }
    tmp25 = cResult[17];
  }
  const tmpResult8 = tmp(tmp2[29]);
  const stateFromStores2 = tmpResult8.useStateFromStores(tmp22, tmp24, tmp25);
  if (cResult[18] === guildId) {
    class E {
      constructor() {
        const selfMember = GuildMemberStore.getSelfMember(guildId);
        let roles;
        if (selfMember != null) {
          roles = selfMember.roles;
        }
        if (roles == null) {
          roles = [];
        }
        return roles;
      }
    }
    if (cResult[21] === stateFromStores2) {
      class E {
        constructor() {
          const selfMember = GuildMemberStore.getSelfMember(guildId);
          let roles;
          if (selfMember != null) {
            roles = selfMember.roles;
          }
          if (roles == null) {
            roles = [];
          }
          return roles;
        }
      }
    }
    const items8 = [isConjureGuildEnabled, guildId, stateFromStoresArray, stateFromStores2];
    cResult[21] = stateFromStores2;
    cResult[22] = stateFromStoresArray;
    cResult[23] = guildId;
    cResult[24] = isConjureGuildEnabled;
    cResult[25] = items8;
  }
  class B {
    constructor() {
      const tmp = isConjureGuildEnabled;
      if (tmp) {
        obj = ConjureActionCreators;
        obj.listProjects(guildId);
      }
    }
  }
  cResult[18] = guildId;
  cResult[19] = isConjureGuildEnabled;
  cResult[20] = B;
}) : (function ConjureStandaloneScreen(guildId) {
  let intl;
  let obj9;
  let openedProjectIdRef;
  guildId = guildId.guildId;
  let stateFromStores;
  react = undefined;
  obj = guildId(stateFromStores[40]);
  navigation = obj.useNavigation();
  let obj2 = guildId(stateFromStores[29]);
  let items = [ConjureBuilderRouteStore];
  const items1 = [guildId];
  stateFromStores = obj2.useStateFromStores(items, () => {
    const routedProjectId = ConjureBuilderRouteStore.getRoutedProjectId(guildId);
    return routedProjectId;
  }, items1);
  let obj3 = guildId(stateFromStores[29]);
  const items2 = [GuildStore];
  const items3 = [guildId];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => GuildStore.getGuild(guildId), items3);
  const obj4 = guildId(stateFromStores[93]);
  const isConjureGuildEnabled = obj4.useIsConjureGuildEnabled({ guildId, location: "VibegrationsStandaloneScreen" });
  const items4 = [GuildMemberStore];
  const items5 = [guildId];
  const obj5 = guildId(stateFromStores[29]);
  const stateFromStoresArray = obj5.useStateFromStoresArray(items4, () => {
    const selfMember = GuildMemberStore.getSelfMember(guildId);
    let roles;
    if (selfMember != null) {
      roles = selfMember.roles;
    }
    if (roles == null) {
      roles = [];
    }
    return roles;
  }, items5);
  const items6 = [GuildStore, PermissionStore];
  const items7 = [guildId];
  const items8 = [isConjureGuildEnabled, guildId, stateFromStoresArray, ];
  const obj6 = guildId(stateFromStores[29]);
  items8[3] = obj6.useStateFromStores(items6, () => {
    const guild = GuildStore.getGuild(guildId);
    const canResult = null != guild && PermissionStore.can(constants.MANAGE_GUILD, guild);
    return canResult;
  }, items7);
  const effect = react.useEffect(() => {
    const tmp = isConjureGuildEnabled;
    if (tmp) {
      obj = ConjureActionCreators;
      obj.listProjects(guildId);
    }
  }, items8);
  const items9 = [stateFromStores1, isConjureGuildEnabled, navigation];
  const effect1 = react.useEffect(() => {
    const tmp = null == stateFromStores1 || isConjureGuildEnabled;
    if (!tmp) {
      navigation.goBack();
    }
  }, items9);
  react = react.useRef(stateFromStores);
  const obj7 = {};
  const PROJECTS = constants2.PROJECTS;
  const obj8 = {
    headerLeft: obj9.getHeaderCloseButton(() => navigation.goBack()),
    headerTitle() {
      let intl;
      obj = { title: intl.string(navigation(stateFromStores[32]).uk6jhJ) };
      const NavigatorHeader = guildId(stateFromStores[89]).NavigatorHeader;
      intl = guildId(stateFromStores[31]).intl;
      return closure_1_26(NavigatorHeader, obj);
    },
    render() {
      let items;
      obj = { children: items };
      const obj2 = { projectId: stateFromStores, sceneProjectId: "Array", openedProjectIdRef };
      items = [prioritySpeakerDucking(closure_40, obj2), ];
      const obj3 = { guildId };
      items[1] = prioritySpeakerDucking(closure_35, obj3);
      return closure_27(closure_28, obj);
    }
  };
  obj7[PROJECTS] = obj8;
  obj7[constants2.CHAT] = {
    ignoreKeyboard: true,
    render(projectId) {
      let items;
      projectId = projectId.projectId;
      obj = { children: items };
      items = [, ];
      const obj2 = { projectId: stateFromStores, sceneProjectId: projectId, openedProjectIdRef };
      items[0] = prioritySpeakerDucking(closure_40, obj2);
      const obj3 = { guildId, projectId };
      items[1] = prioritySpeakerDucking(ChatScene, obj3);
      return closure_27(closure_28, obj);
    }
  };
  obj7[constants2.DEBUG] = {
    headerTitle() {
      let intl;
      obj = { title: intl.string(navigation(stateFromStores[32])["Q4FN+H"]) };
      const NavigatorHeader = guildId(stateFromStores[89]).NavigatorHeader;
      intl = guildId(stateFromStores[31]).intl;
      return closure_1_26(NavigatorHeader, obj);
    },
    render(projectId) {
      let items;
      projectId = projectId.projectId;
      obj = { children: items };
      items = [, ];
      const obj2 = { projectId: stateFromStores, sceneProjectId: projectId, openedProjectIdRef };
      items[0] = prioritySpeakerDucking(closure_40, obj2);
      items[1] = prioritySpeakerDucking(ConjureDebugSceneDefault, { projectId });
      return closure_27(closure_28, obj);
    }
  };
  obj9 = guildId(stateFromStores[89]);
  const obj10 = {
    screens: obj7,
    initialRouteStack: isConjureGuildEnabled(react.useState(() => {
      let obj3;
      const items = [];
      obj = { name: constants.PROJECTS };
      items[0] = obj;
      if (null != stateFromStores) {
        const obj2 = { name: tmp.CHAT, params: obj3 };
        obj3 = { projectId: tmp2 };
        items.push(obj2);
      }
      return items;
    }), 1)[0],
    headerBackTitle: intl.string(navigation(stateFromStores[32]).uk6jhJ)
  };
  const Navigator = guildId(stateFromStores[95]).Navigator;
  intl = guildId(stateFromStores[31]).intl;
  return closure_26(Navigator, obj10);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureStandaloneScreen.tsx");

export default tmp7;
