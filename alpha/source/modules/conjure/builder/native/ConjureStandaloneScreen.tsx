// Module ID: 11747
// Function ID: 11748
// Name: ConjureStandaloneScreen
// Dependencies: [32, 19, 4884, 4846, 4904, 6774, 7323, 1084, 21, 558, 576, 11748, 504, 11749, 1502, 12529, 11764, 11752, 6809, 9567, 10723, 6926, 1125, 3831, 12530, 12549, 7097, 11774, 2]

// Module 11747 (ConjureStandaloneScreen)
import Constants from "Constants" /* 1084 */;
import NavigatorHeader2 from "NavigatorHeader" /* 6926 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10723 */;
import ConjureActivity from "ConjureActivity" /* 11748 */;
import ConjureChatSceneDefault from "ConjureChatScene" /* 11749 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 11764 */;
import selectConjureChannelDefault from "selectConjureChannel" /* 12529 */;
import ConjureProjectListDefault from "ConjureProjectList" /* 12530 */;
import ConjureDebugSceneDefault from "ConjureDebugScene" /* 12549 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 4884 */;
import GuildStore from "GuildStore" /* 4846 */;
import PermissionStore from "PermissionStore" /* 4904 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6774 */;
import ConjureBuilderRouteStore from "ConjureBuilderRouteStore" /* 7323 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, navigation;

let closure_12;
let map1;
let unpackModuleId;
let react = react_mod;
const Permissions = Constants.Permissions;
({ jsx: unpackModuleId, Fragment: closure_12, jsxs: map1 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function GlobalChatScene(projectId) {
  let first;
  let obj = projectId(576);
  const cResult = obj.c(8);
  const tmp = projectId;
  projectId = projectId.projectId;
  const fallbackGuildId = projectId.fallbackGuildId;
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
      let tmp9;
      if (cResult[6] === projectId) {
        tmp9 = cResult[7];
      }
      return tmp9;
    }
    const obj2 = { guildId: stateFromStores, projectId };
    const tmp12 = closure_11(fallbackGuildId(11749), obj2);
    cResult[5] = stateFromStores;
    cResult[6] = projectId;
    cResult[7] = tmp12;
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
  return closure_11(fallbackGuildId(11749), { guildId, projectId });
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
      const fn2 = function c() {
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
  let closure_4;
  let handledKeyRef;
  let inline;
  let onClose;
  let request;
  let stateFromStores;
  let tmp5;
  let tmp8;
  let tmp = guildId;
  let tmp2 = navigation;
  let obj = guildId(navigation[10]);
  const cResult = obj.c(77);
  guildId = guildId.guildId;
  ({ onClose, inline } = guildId);
  importDefault = undefined !== inline && inline;
  const tmpResult = tmp(tmp2[14]);
  navigation = tmpResult.useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function j() {
      return navigation.goBack();
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (onClose == null) {
    onClose = tmp5;
  }
  const context = react.useContext(require("react"));
  react = tmp7;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ConjureBuilderRouteStore];
    cResult[2] = items;
    tmp8 = items;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === guildId) {
    let tmp10;
    let tmp11;
    let tmp12;
    let tmp15;
    let tmp14;
    let tmp17;
    let tmp21;
    let tmp23;
    let tmp22;
    let tmp25;
    let tmp28;
    let tmp27;
    if (cResult[4] === null != context) {
      tmp10 = cResult[5];
      tmp11 = cResult[6];
    }
    const tmpResult7 = tmp(tmp2[12]);
    let projectId = tmpResult7.useStateFromStores(tmp8, tmp10, tmp11);
    if (null != context) {
      projectId = context.projectId;
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      let items1 = [stateFromStores];
      cResult[7] = items1;
      tmp12 = items1;
    } else {
      tmp12 = cResult[7];
    }
    if (cResult[8] !== guildId) {
      class A {
        constructor() {
          return GuildStore.getGuild(guildId);
        }
      }
      const items2 = [guildId];
      cResult[8] = guildId;
      cResult[9] = A;
      cResult[10] = items2;
      tmp15 = items2;
      tmp14 = A;
    } else {
      class A {
        constructor() {
          return GuildStore.getGuild(guildId);
        }
      }
      tmp15 = cResult[10];
    }
    const tmpResult8 = tmp(tmp2[12]);
    stateFromStores = tmpResult8.useStateFromStores(tmp12, tmp14, tmp15);
    if (cResult[11] !== guildId) {
      class A {
        constructor() {
          return GuildStore.getGuild(guildId);
        }
      }
      tmp18[0] = guildId;
      cResult[11] = guildId;
      cResult[12] = tmp18;
      tmp17 = tmp18;
    } else {
      class A {
        constructor() {
          return GuildStore.getGuild(guildId);
        }
      }
    }
    const tmpResult9 = tmp(tmp2[18]);
    const isConjureGuildEnabled = tmpResult9.useIsConjureGuildEnabled(tmp17);
    const tmpResult10 = tmp(tmp2[19]);
    const isConjureMobileEnabled = tmpResult10.useIsConjureMobileEnabled(isConjureGuildEnabled, "ConjureStandaloneScreen");
    const _Symbol2 = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class A {
        constructor() {
          return GuildStore.getGuild(guildId);
        }
      }
      const items3 = [projectId];
      cResult[13] = items3;
      tmp21 = items3;
    } else {
      class A {
        constructor() {
          return GuildStore.getGuild(guildId);
        }
      }
    }
    if (cResult[14] !== guildId) {
      class K {
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
      cResult[15] = K;
      cResult[16] = items4;
      tmp23 = items4;
      tmp22 = K;
    } else {
      class K {
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
      tmp23 = cResult[16];
    }
    const tmpResult11 = tmp(tmp2[12]);
    const stateFromStoresArray = tmpResult11.useStateFromStoresArray(tmp21, tmp22, tmp23);
    const _Symbol3 = Symbol;
    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
      class K {
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
      const items5 = [stateFromStores, isConjureMobileEnabled];
      cResult[17] = items5;
      tmp25 = items5;
    } else {
      class K {
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
      class K {
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
      const items6 = [guildId];
      cResult[18] = guildId;
      cResult[19] = tmp29;
      cResult[20] = items6;
      tmp28 = items6;
      tmp27 = tmp29;
    } else {
      class K {
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
      tmp28 = cResult[20];
    }
    const tmpResult12 = tmp(tmp2[12]);
    const stateFromStores1 = tmpResult12.useStateFromStores(tmp25, tmp27, tmp28);
    if (cResult[21] === guildId) {
      class K {
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
    class W {
      constructor() {
        const tmp = isConjureMobileEnabled;
        if (tmp) {
          let tmp6;
          const listProjects = ConjureActionCreators.listProjects;
          ConjureActionCreators;
          if (!closure_4) {
            tmp6 = guildId;
          }
          listProjects(tmp6);
        }
      }
    }
    cResult[21] = guildId;
    cResult[22] = isConjureMobileEnabled;
    cResult[23] = null != context;
    cResult[24] = W;
  }
  class T {
    constructor() {
      let tmp;
      if (!closure_4) {
        const routedProjectId = ConjureBuilderRouteStore.getRoutedProjectId(guildId);
        tmp = routedProjectId;
      }
      return tmp;
    }
  }
  const items7 = [guildId, null != context];
  cResult[3] = guildId;
  cResult[4] = null != context;
  cResult[5] = T;
  cResult[6] = items7;
  tmp11 = items7;
  tmp10 = T;
}) : (function ConjureStandaloneScreen(guildId) {
  let Navigator;
  let headerBackButton;
  let inline;
  let intl;
  let obj4;
  let obj6;
  let onClose;
  guildId = guildId.guildId;
  ({ onClose, inline } = guildId);
  if (inline === undefined) {
    inline = false;
  }
  navigation = undefined;
  onClose = undefined;
  let context;
  let closure_5;
  let projectId;
  let stateFromStores;
  let isConjureMobileEnabled;
  let memo;
  let handledKeyRef;
  let tmp = guildId;
  let tmp2 = navigation;
  let obj = guildId(navigation[14]);
  navigation = obj.useNavigation();
  let obj2 = context;
  let items = [navigation];
  if (onClose == null) {
    onClose = context.useCallback(() => navigation.goBack(), items);
  }
  let tmp4 = inline;
  context = obj2.useContext(inline(tmp2[17]));
  let tmp6 = null != context;
  closure_5 = tmp6;
  let items1 = [memo];
  const items2 = [guildId, tmp6];
  const tmpResult = tmp(tmp2[12]);
  projectId = tmpResult.useStateFromStores(items1, () => {
    let tmp;
    if (!closure_5) {
      const routedProjectId = ConjureBuilderRouteStore.getRoutedProjectId(guildId);
      tmp = routedProjectId;
    }
    return tmp;
  }, items2);
  if (tmp6) {
    projectId = context.projectId;
  }
  const items3 = [projectId];
  const items4 = [guildId];
  const tmpResult7 = tmp(tmp2[12]);
  stateFromStores = tmpResult7.useStateFromStores(items3, () => GuildStore.getGuild(guildId), items4);
  const tmpResult8 = tmp(tmp2[18]);
  const isConjureGuildEnabled = tmpResult8.useIsConjureGuildEnabled({ guildId, location: "ConjureStandaloneScreen" });
  const tmpResult9 = tmp(tmp2[19]);
  isConjureMobileEnabled = tmpResult9.useIsConjureMobileEnabled(isConjureGuildEnabled, "ConjureStandaloneScreen");
  const items5 = [closure_5];
  const items6 = [guildId];
  const tmpResult10 = tmp(tmp2[12]);
  const stateFromStoresArray = tmpResult10.useStateFromStoresArray(items5, () => {
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
  const items7 = [projectId, stateFromStores];
  const items8 = [guildId];
  const items9 = [isConjureMobileEnabled, tmp6, guildId, stateFromStoresArray, ];
  const tmpResult11 = tmp(tmp2[12]);
  items9[4] = tmpResult11.useStateFromStores(items7, () => {
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
      if (!closure_5) {
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
  const items11 = [tmp6, , ];
  let requestId;
  const useMemo = obj2.useMemo;
  if (context != null) {
    requestId = context.requestId;
  }
  items11[1] = requestId;
  items11[2] = projectId;
  memo = useMemo(() => {
    let tmp4;
    const tmp = closure_5;
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
  const PROJECTS = tmp(tmp2[16]).ConjureScreenScenes.PROJECTS;
  const tmpResult12 = tmp(tmp2[21]);
  if (tmp6) {
    headerBackButton = tmpResult12.getHeaderBackButton(onClose, true);
  } else {
    headerBackButton = tmpResult12.getHeaderCloseButton(onClose);
  }
  let obj3 = { [PROJECTS]: obj4 };
  obj4 = {
    headerLeft: headerBackButton,
    headerTitle() {
      let intl;
      const obj = { title: intl.string(inline(navigation[23]).uk6jhJ) };
      const NavigatorHeader = guildId(navigation[21]).NavigatorHeader;
      intl = guildId(navigation[22]).intl;
      return closure_1_11(NavigatorHeader, obj);
    },
    render() {
      let items;
      const obj = { children: items };
      const obj2 = { guildId, inline, request: memo, sceneProjectId: "Array", handledKeyRef };
      items = [unpackModuleId(closure_15, obj2), ];
      const obj3 = { guildId };
      items[1] = unpackModuleId(ConjureProjectListDefault, obj3);
      return map1(authStore2, obj);
    }
  };
  let renderGlobalChatBack;
  const CHAT = tmp(tmp2[16]).ConjureScreenScenes.CHAT;
  if (tmp6) {
    renderGlobalChatBack = function renderGlobalChatBack(canGoBack) {
      let tmp4;
      if (true === canGoBack.canGoBack) {
        const obj2 = NavigatorHeader2;
        tmp4 = obj2.getHeaderBackButton()(canGoBack);
      } else {
        const obj = NavigatorHeader2;
        tmp4 = obj.getHeaderBackButton(onClose, true)(canGoBack);
      }
      return tmp4;
    };
  }
  obj3[CHAT] = {
    ignoreKeyboard: true,
    headerLeft: renderGlobalChatBack,
    render(projectId) {
      let tmp3Result;
      projectId = projectId.projectId;
      const children = [, ];
      const obj = { guildId, inline, request: memo, sceneProjectId: projectId, handledKeyRef };
      children[0] = unpackModuleId(closure_15, obj);
      const tmp = map1;
      const tmp2 = authStore2;
      const tmp5 = closure_5;
      if (tmp5) {
        const obj2 = { projectId, fallbackGuildId: guildId };
        tmp3Result = tmp3(closure_14, obj2);
      } else {
        const obj3 = { guildId, projectId };
        tmp3Result = tmp3(ConjureChatSceneDefault, obj3);
      }
      children[1] = tmp3Result;
      return tmp(tmp2, { children });
    }
  };
  obj3[tmp(tmp2[16]).ConjureScreenScenes.DEBUG] = {
    headerTitle() {
      let intl;
      const obj = { title: intl.string(inline(navigation[23])["Q4FN+H"]) };
      const NavigatorHeader = guildId(navigation[21]).NavigatorHeader;
      intl = guildId(navigation[22]).intl;
      return closure_1_11(NavigatorHeader, obj);
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
  const first = onClose(obj2.useState(() => {
    let obj5;
    const tmp = closure_5;
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
  let obj5 = { value: inline, children: closure_11(Navigator, obj6) };
  const Provider = tmp(tmp2[27]).ConjureBuilderInlineContext.Provider;
  obj6 = { screens: obj3, initialRouteStack: first, headerBackTitle: intl.string(tmp4(tmp2[23]).uk6jhJ) };
  Navigator = tmp(tmp2[26]).Navigator;
  intl = tmp(tmp2[22]).intl;
  return closure_11(Provider, obj5);
});
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureStandaloneScreen.tsx");

export default tmp3;
