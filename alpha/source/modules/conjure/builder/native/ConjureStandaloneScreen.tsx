// Module ID: 11839
// Function ID: 11840
// Name: ConjureStandaloneScreen
// Dependencies: [32, 19, 4917, 4879, 4937, 6831, 7380, 1084, 21, 558, 576, 11840, 504, 11841, 1503, 12631, 11854, 11842, 6866, 9631, 10832, 6984, 1125, 3864, 12632, 12796, 12813, 7155, 11864, 2]

// Module 11839 (ConjureStandaloneScreen)
import Constants from "Constants" /* 1084 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10832 */;
import ConjureActivity from "ConjureActivity" /* 11840 */;
import ConjureChatSceneDefault from "ConjureChatScene" /* 11841 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 11854 */;
import selectConjureChannelDefault from "selectConjureChannel" /* 12631 */;
import ConjureDebugSceneDefault from "ConjureDebugScene" /* 12813 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildMemberStore_mod from "GuildMemberStore" /* 4917 */;
import GuildStore from "GuildStore" /* 4879 */;
import PermissionStore from "PermissionStore" /* 4937 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6831 */;
import ConjureBuilderRouteStore from "ConjureBuilderRouteStore" /* 7380 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, navigation;

let closure_12;
let map1;
let unpackModuleId;
let GuildMemberStore = GuildMemberStore_mod;
const Permissions = Constants.Permissions;
({ jsx: unpackModuleId, Fragment: closure_12, jsxs: map1 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function GlobalChatScene(projectId) {
  let first;
  let obj = projectId(576);
  const cResult = obj.c(9);
  const tmp = projectId;
  projectId = projectId.projectId;
  const fallbackGuildId = projectId.fallbackGuildId;
  const onExit = projectId.onExit;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === fallbackGuildId) {
    let tmp6;
    let tmp7;
    if (cResult[2] === projectId) {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
    if (cResult[5] === stateFromStores) {
      if (cResult[6] === onExit) {
        let tmp9;
        if (cResult[7] === projectId) {
          tmp9 = cResult[8];
        }
        return tmp9;
      }
    }
    const obj2 = { guildId: stateFromStores, projectId, onExit };
    const tmp12 = closure_11(fallbackGuildId(11841), obj2);
    cResult[5] = stateFromStores;
    cResult[6] = onExit;
    cResult[7] = projectId;
    cResult[8] = tmp12;
    tmp9 = tmp12;
  }
  const fn = function o() {
    const project = ConjureProjectStore.getProject(projectId);
    let result = null;
    if (null != project) {
      const obj = ConjureActivity;
      result = obj.conjureProjectGuildId(project);
    }
    if (result == null) {
      result = fallbackGuildId;
    }
    return result;
  };
  const items1 = [projectId, fallbackGuildId];
  cResult[1] = fallbackGuildId;
  cResult[2] = projectId;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn;
}) : (function GlobalChatScene(projectId) {
  projectId = projectId.projectId;
  const fallbackGuildId = projectId.fallbackGuildId;
  const onExit = projectId.onExit;
  let obj = projectId(504);
  const items = [ConjureProjectStore];
  const items1 = [projectId, fallbackGuildId];
  const guildId = obj.useStateFromStores(items, () => {
    const project = ConjureProjectStore.getProject(projectId);
    let result = null;
    if (null != project) {
      const obj = ConjureActivity;
      result = obj.conjureProjectGuildId(project);
    }
    if (result == null) {
      result = fallbackGuildId;
    }
    return result;
  }, items1);
  return closure_11(fallbackGuildId(11841), { guildId, projectId, onExit });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function RoutedProjectOpener(guildId) {
  let request;
  let obj = guildId(request[10]);
  const cResult = obj.c(11);
  guildId = guildId.guildId;
  const inline = guildId.inline;
  request = guildId.request;
  const sceneProjectId = guildId.sceneProjectId;
  const handledKeyRef = guildId.handledKeyRef;
  const obj2 = guildId(request[14]);
  navigation = obj2.useNavigation();
  if (cResult[0] === guildId) {
    if (cResult[1] === inline) {
      let tmp3;
      let tmp4;
      if (cResult[2] === sceneProjectId) {
        tmp3 = cResult[3];
        tmp4 = cResult[4];
      }
      const effect = handledKeyRef.useEffect(tmp3, tmp4);
      const obj3 = handledKeyRef;
      if (cResult[5] === handledKeyRef) {
        if (cResult[6] === navigation) {
          if (cResult[7] === request) {
            let tmp6;
            let tmp7;
            if (cResult[8] === sceneProjectId) {
              tmp6 = cResult[9];
              tmp7 = cResult[10];
            }
            const effect1 = obj3.useEffect(tmp6, tmp7);
            return null;
          }
        }
      }
      const fn2 = function l() {
        const isFocusedResult = null != request && tmp.key !== handledKeyRef.current && navigation.isFocused();
        if (isFocusedResult) {
          handledKeyRef.current = request.key;
          if (request.projectId !== sceneProjectId) {
            if (null != request.projectId) {
              const obj = { projectId: request.projectId };
              navigation.push(conjureStandaloneScenes.ConjureScreenScenes.CHAT, obj);
            } else {
              const routes = navigation.getState().routes;
              if (routes.some((name) => name.name === guildId(request[16]).ConjureScreenScenes.PROJECTS)) {
                navigation.popTo(conjureStandaloneScenes.ConjureScreenScenes.PROJECTS);
              } else {
                navigation.push(conjureStandaloneScenes.ConjureScreenScenes.PROJECTS);
              }
            }
          }
        }
      };
      const items = [request, sceneProjectId, handledKeyRef, navigation];
      cResult[5] = handledKeyRef;
      cResult[6] = navigation;
      cResult[7] = request;
      cResult[8] = sceneProjectId;
      cResult[9] = fn2;
      cResult[10] = items;
      tmp7 = items;
      tmp6 = fn2;
    }
  }
  const fn = function o() {
    const tmp = inline;
    if (tmp) {
      let tmp6 = sceneProjectId;
      const tmp4 = selectConjureChannelDefault;
      const tmp5 = guildId;
      if (sceneProjectId == null) {
        tmp6 = null;
      }
      tmp4(tmp5, tmp6);
    }
  };
  const items1 = [guildId, inline, sceneProjectId];
  cResult[0] = guildId;
  cResult[1] = inline;
  cResult[2] = sceneProjectId;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp4 = items1;
  tmp3 = fn;
}) : (function RoutedProjectOpener(guildId) {
  guildId = guildId.guildId;
  const inline = guildId.inline;
  const request = guildId.request;
  const sceneProjectId = guildId.sceneProjectId;
  const handledKeyRef = guildId.handledKeyRef;
  let obj = guildId(request[14]);
  navigation = obj.useNavigation();
  const items = [guildId, inline, sceneProjectId];
  const effect = handledKeyRef.useEffect(() => {
    const tmp = inline;
    if (tmp) {
      let tmp6 = sceneProjectId;
      const tmp4 = selectConjureChannelDefault;
      const tmp5 = guildId;
      if (sceneProjectId == null) {
        tmp6 = null;
      }
      tmp4(tmp5, tmp6);
    }
  }, items);
  const items1 = [request, sceneProjectId, handledKeyRef, navigation];
  const effect1 = handledKeyRef.useEffect(() => {
    const isFocusedResult = null != request && tmp.key !== handledKeyRef.current && navigation.isFocused();
    if (isFocusedResult) {
      handledKeyRef.current = request.key;
      if (request.projectId !== sceneProjectId) {
        if (null != request.projectId) {
          const obj = { projectId: request.projectId };
          navigation.push(conjureStandaloneScenes.ConjureScreenScenes.CHAT, obj);
        } else {
          const routes = navigation.getState().routes;
          if (routes.some((name) => name.name === guildId(request[16]).ConjureScreenScenes.PROJECTS)) {
            navigation.popTo(conjureStandaloneScenes.ConjureScreenScenes.PROJECTS);
          } else {
            navigation.push(conjureStandaloneScenes.ConjureScreenScenes.PROJECTS);
          }
        }
      }
    }
  }, items1);
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureStandaloneScreen(guildId) {
  let closure_5;
  let focusRequest;
  let handledKeyRef;
  let inline;
  let onClose;
  let request;
  let tmp6;
  let tmp9;
  let tmp = guildId;
  let tmp2 = focusRequest;
  let obj = guildId(focusRequest[10]);
  const cResult = obj.c(77);
  guildId = guildId.guildId;
  ({ onClose, inline, focusRequest } = guildId);
  importDefault = undefined !== inline && inline;
  let tmp4 = null;
  if (undefined !== focusRequest) {
    tmp4 = focusRequest;
  }
  focusRequest = tmp4;
  const tmpResult = tmp(tmp2[14]);
  navigation = tmpResult.useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function j() {
      return navigation.goBack();
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (onClose == null) {
    onClose = tmp6;
  }
  const context = onClose.useContext(require("react"));
  GuildMemberStore = tmp8;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ConjureBuilderRouteStore];
    cResult[2] = items;
    tmp9 = items;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === guildId) {
    let tmp11;
    let tmp12;
    let tmp13;
    let tmp16;
    let tmp15;
    let tmp18;
    let tmp22;
    let tmp24;
    let tmp23;
    let tmp26;
    let tmp29;
    let tmp28;
    if (cResult[4] === null != context) {
      tmp11 = cResult[5];
      tmp12 = cResult[6];
    }
    const tmpResult7 = tmp(tmp2[12]);
    let projectId = tmpResult7.useStateFromStores(tmp9, tmp11, tmp12);
    if (null != context) {
      projectId = context.projectId;
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      let items1 = [projectId];
      cResult[7] = items1;
      tmp13 = items1;
    } else {
      tmp13 = cResult[7];
    }
    if (cResult[8] !== guildId) {
      class N {
        constructor() {
          return GuildStore.getGuild(guildId);
        }
      }
      const items2 = [guildId];
      cResult[8] = guildId;
      cResult[9] = N;
      cResult[10] = items2;
      tmp16 = items2;
      tmp15 = N;
    } else {
      class N {
        constructor() {
          return GuildStore.getGuild(guildId);
        }
      }
      tmp16 = cResult[10];
    }
    const tmpResult8 = tmp(tmp2[12]);
    const stateFromStores = tmpResult8.useStateFromStores(tmp13, tmp15, tmp16);
    if (cResult[11] !== guildId) {
      class N {
        constructor() {
          return GuildStore.getGuild(guildId);
        }
      }
      tmp19[0] = guildId;
      cResult[11] = guildId;
      cResult[12] = tmp19;
      tmp18 = tmp19;
    } else {
      class N {
        constructor() {
          return GuildStore.getGuild(guildId);
        }
      }
    }
    const tmpResult9 = tmp(tmp2[18]);
    const isConjureGuildEnabled = tmpResult9.useIsConjureGuildEnabled(tmp18);
    const tmpResult10 = tmp(tmp2[19]);
    const isConjureMobileEnabled = tmpResult10.useIsConjureMobileEnabled(isConjureGuildEnabled, "ConjureStandaloneScreen");
    const _Symbol2 = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class N {
        constructor() {
          return GuildStore.getGuild(guildId);
        }
      }
      const items3 = [GuildMemberStore];
      cResult[13] = items3;
      tmp22 = items3;
    } else {
      class N {
        constructor() {
          return GuildStore.getGuild(guildId);
        }
      }
    }
    if (cResult[14] !== guildId) {
      class L {
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
      const items4 = [guildId];
      cResult[14] = guildId;
      cResult[15] = L;
      cResult[16] = items4;
      tmp24 = items4;
      tmp23 = L;
    } else {
      class L {
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
      tmp24 = cResult[16];
    }
    const tmpResult11 = tmp(tmp2[12]);
    const stateFromStoresArray = tmpResult11.useStateFromStoresArray(tmp22, tmp23, tmp24);
    const _Symbol3 = Symbol;
    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
      class L {
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
      const items5 = [projectId, stateFromStores];
      cResult[17] = items5;
      tmp26 = items5;
    } else {
      class L {
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
    if (cResult[18] !== guildId) {
      class V {
        constructor() {
          const guild = GuildStore.getGuild(guildId);
          const canResult = null != guild && PermissionStore.can(Permissions.MANAGE_GUILD, guild);
          return canResult;
        }
      }
      const items6 = [guildId];
      cResult[18] = guildId;
      cResult[19] = V;
      cResult[20] = items6;
      tmp29 = items6;
      tmp28 = V;
    } else {
      class V {
        constructor() {
          const guild = GuildStore.getGuild(guildId);
          const canResult = null != guild && PermissionStore.can(Permissions.MANAGE_GUILD, guild);
          return canResult;
        }
      }
      tmp29 = cResult[20];
    }
    const tmpResult12 = tmp(tmp2[12]);
    const stateFromStores1 = tmpResult12.useStateFromStores(tmp26, tmp28, tmp29);
    if (cResult[21] === guildId) {
      class V {
        constructor() {
          const guild = GuildStore.getGuild(guildId);
          const canResult = null != guild && PermissionStore.can(Permissions.MANAGE_GUILD, guild);
          return canResult;
        }
      }
    }
    class Y {
      constructor() {
        const tmp = isConjureMobileEnabled;
        if (tmp) {
          let tmp6;
          const listProjects = ConjureActionCreators.listProjects;
          ConjureActionCreators;
          if (!closure_5) {
            tmp6 = guildId;
          }
          listProjects(tmp6);
        }
      }
    }
    cResult[21] = guildId;
    cResult[22] = isConjureMobileEnabled;
    cResult[23] = null != context;
    cResult[24] = Y;
  }
  const fn2 = function _() {
    let tmp;
    if (!closure_5) {
      const routedProjectId = ConjureBuilderRouteStore.getRoutedProjectId(guildId);
      tmp = routedProjectId;
    }
    return tmp;
  };
  const items7 = [guildId, tmp8];
  cResult[3] = guildId;
  cResult[4] = null != context;
  cResult[5] = fn2;
  cResult[6] = items7;
  tmp12 = items7;
  tmp11 = fn2;
}) : (function ConjureStandaloneScreen(guildId) {
  let Navigator;
  let headerBackButton;
  let inline;
  let intl;
  let obj7;
  let onClose;
  guildId = guildId.guildId;
  ({ onClose, inline } = guildId);
  if (inline === undefined) {
    inline = false;
  }
  let focusRequest = guildId.focusRequest;
  if (focusRequest === undefined) {
    focusRequest = null;
  }
  onClose = undefined;
  let context;
  let closure_6;
  let projectId;
  let stateFromStores;
  let isConjureMobileEnabled;
  let memo;
  let handledKeyRef;
  let tmp2 = guildId;
  const tmp3 = focusRequest;
  let obj = guildId(focusRequest[14]);
  navigation = obj.useNavigation();
  let obj2 = onClose;
  let items = [navigation];
  if (onClose == null) {
    onClose = onClose.useCallback(() => navigation.goBack(), items);
  }
  let tmp5 = inline;
  context = obj2.useContext(inline(tmp3[17]));
  closure_6 = tmp7;
  let items1 = [isConjureMobileEnabled];
  const items2 = [guildId, tmp7];
  const tmp2Result = tmp2(tmp3[12]);
  projectId = tmp2Result.useStateFromStores(items1, () => {
    let tmp;
    if (!closure_6) {
      const routedProjectId = ConjureBuilderRouteStore.getRoutedProjectId(guildId);
      tmp = routedProjectId;
    }
    return tmp;
  }, items2);
  if (null != context) {
    projectId = context.projectId;
  }
  const items3 = [closure_6];
  const items4 = [guildId];
  const tmp2Result7 = tmp2(tmp3[12]);
  stateFromStores = tmp2Result7.useStateFromStores(items3, () => GuildStore.getGuild(guildId), items4);
  const tmp2Result8 = tmp2(tmp3[18]);
  const isConjureGuildEnabled = tmp2Result8.useIsConjureGuildEnabled({ guildId, location: "ConjureStandaloneScreen" });
  const tmp2Result9 = tmp2(tmp3[19]);
  isConjureMobileEnabled = tmp2Result9.useIsConjureMobileEnabled(isConjureGuildEnabled, "ConjureStandaloneScreen");
  const items5 = [context];
  const items6 = [guildId];
  const tmp2Result10 = tmp2(tmp3[12]);
  const stateFromStoresArray = tmp2Result10.useStateFromStoresArray(items5, () => {
    const selfMember = GuildMemberStore.getSelfMember(guildId);
    let roles;
    if (selfMember != null) {
      roles = selfMember.roles;
    }
    if (roles == null) {
      roles = [];
    }
    return roles;
  }, items6);
  const items7 = [closure_6, projectId];
  const items8 = [guildId];
  const items9 = [isConjureMobileEnabled, tmp7, guildId, stateFromStoresArray, ];
  const tmp2Result11 = tmp2(tmp3[12]);
  items9[4] = tmp2Result11.useStateFromStores(items7, () => {
    const guild = GuildStore.getGuild(guildId);
    const canResult = null != guild && PermissionStore.can(Permissions.MANAGE_GUILD, guild);
    return canResult;
  }, items8);
  const effect = obj2.useEffect(() => {
    const tmp = isConjureMobileEnabled;
    if (tmp) {
      let tmp6;
      const listProjects = ConjureActionCreators.listProjects;
      ConjureActionCreators;
      if (!closure_6) {
        tmp6 = guildId;
      }
      listProjects(tmp6);
    }
  }, items9);
  const items10 = [stateFromStores, isConjureMobileEnabled, onClose];
  const effect1 = obj2.useEffect(() => {
    const tmp = null == stateFromStores || isConjureMobileEnabled;
    if (!tmp) {
      onClose();
    }
  }, items10);
  const items11 = [tmp7, , ];
  let requestId;
  const useMemo = obj2.useMemo;
  if (context != null) {
    requestId = context.requestId;
  }
  items11[1] = requestId;
  items11[2] = projectId;
  memo = useMemo(() => {
    let tmp4;
    const tmp = closure_6;
    if (tmp) {
      let num = context.requestId;
      if (num == null) {
        num = 0;
      }
      tmp4 = { key: num, projectId };
      const obj2 = { key: num, projectId };
    } else if (null != projectId) {
      tmp4 = { key: projectId, projectId };
      const obj = { key: projectId, projectId };
    }
    return tmp4;
  }, items11);
  let key;
  const useRef = obj2.useRef;
  if (memo != null) {
    key = memo.key;
  }
  handledKeyRef = useRef(key);
  let obj3 = {
    ignoreKeyboard: tmp7,
    headerLeft: headerBackButton,
    headerTitle() {
      let intl;
      const obj = { title: intl.string(inline(focusRequest[23]).uk6jhJ) };
      const NavigatorHeader = guildId(focusRequest[21]).NavigatorHeader;
      intl = guildId(focusRequest[22]).intl;
      return handledKeyRef(NavigatorHeader, obj);
    },
    render() {
      let tmp3Result;
      const obj = { guildId, inline, request: memo, sceneProjectId: "Array", handledKeyRef };
      const children = [unpackModuleId(closure_15, obj), ];
      const tmp = map1;
      const tmp2 = authStore2;
      if (closure_6) {
        const obj2 = { forMeGuildId: guildId, focusRequest };
        tmp3Result = tmp3(tmp5(12632), obj2);
      } else {
        const obj3 = { guildId };
        tmp3Result = tmp3(tmp5(12796), obj3);
      }
      children[1] = tmp3Result;
      return tmp(tmp2, { children });
    }
  };
  const PROJECTS = tmp2(tmp3[16]).ConjureScreenScenes.PROJECTS;
  const tmp2Result12 = tmp2(tmp3[21]);
  if (null != context) {
    headerBackButton = tmp2Result12.getHeaderBackButton(onClose, true);
  } else {
    headerBackButton = tmp2Result12.getHeaderCloseButton(onClose);
  }
  let obj4 = {
    ignoreKeyboard: true,
    headerShown: false,
    render(projectId) {
      let tmp3Result;
      projectId = projectId.projectId;
      const children = [, ];
      const obj = { guildId, inline, request: memo, sceneProjectId: projectId, handledKeyRef };
      children[0] = unpackModuleId(closure_15, obj);
      const tmp = map1;
      const tmp2 = authStore2;
      const tmp5 = closure_6;
      if (tmp5) {
        const obj2 = { projectId, fallbackGuildId: guildId, onExit: onClose };
        tmp3Result = tmp3(closure_14, obj2);
      } else {
        const obj3 = { guildId, projectId };
        tmp3Result = tmp3(ConjureChatSceneDefault, obj3);
      }
      children[1] = tmp3Result;
      return tmp(tmp2, { children });
    }
  };
  let obj5 = {
    headerTitle() {
      let intl;
      const obj = { title: intl.string(inline(focusRequest[23])["Q4FN+H"]) };
      const NavigatorHeader = guildId(focusRequest[21]).NavigatorHeader;
      intl = guildId(focusRequest[22]).intl;
      return handledKeyRef(NavigatorHeader, obj);
    },
    render(projectId) {
      let items;
      projectId = projectId.projectId;
      const obj = { children: items };
      items = [, ];
      const obj2 = { guildId, inline, request: memo, sceneProjectId: projectId, handledKeyRef };
      items[0] = unpackModuleId(closure_15, obj2);
      items[1] = unpackModuleId(ConjureDebugSceneDefault, { projectId });
      return map1(authStore2, obj);
    }
  };
  const first = navigation(obj2.useState(() => {
    let obj5;
    const tmp = closure_6;
    if (tmp) {
      if (null != projectId) {
        const obj2 = { name: conjureStandaloneScenes.ConjureScreenScenes.CHAT, params: obj3 };
        const items = [obj2];
        return items;
      }
    }
    const items1 = [{ name: conjureStandaloneScenes.ConjureScreenScenes.PROJECTS }];
    ({ name: conjureStandaloneScenes.ConjureScreenScenes.PROJECTS });
    if (null != projectId) {
      const push = items1.push;
      const obj4 = { name: conjureStandaloneScenes.ConjureScreenScenes.CHAT, params: obj5 };
      obj5 = { projectId: tmp4 };
      push(obj4);
    }
    return items1;
  }), 1)[0];
  const obj6 = { value: inline, children: handledKeyRef(Navigator, obj7) };
  const Provider = tmp2(tmp3[28]).ConjureBuilderInlineContext.Provider;
  obj7 = { screens: { [PROJECTS]: obj3, [tmp2(tmp3[16]).ConjureScreenScenes.CHAT]: obj4, [tmp2(tmp3[16]).ConjureScreenScenes.DEBUG]: obj5 }, initialRouteStack: first, headerBackTitle: intl.string(tmp5(tmp3[23]).uk6jhJ) };
  Navigator = tmp2(tmp3[27]).Navigator;
  intl = tmp2(tmp3[22]).intl;
  return handledKeyRef(Provider, obj6);
});
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureStandaloneScreen.tsx");

export default tmp3;
