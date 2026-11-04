// Module ID: 11776
// Function ID: 11777
// Name: ConjureStandaloneScreen
// Dependencies: [32, 19, 4915, 4877, 4935, 7353, 1087, 21, 558, 576, 1505, 11777, 11778, 504, 6840, 10752, 6956, 1128, 3862, 11779, 11893, 12571, 7127, 11917, 2]

// Module 11776 (ConjureStandaloneScreen)
import Constants from "Constants" /* 1087 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10752 */;
import selectConjureChannelDefault from "selectConjureChannel" /* 11777 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 11778 */;
import ConjureProjectListDefault from "ConjureProjectList" /* 11779 */;
import ConjureChatSceneDefault from "ConjureChatScene" /* 11893 */;
import ConjureDebugSceneDefault from "ConjureDebugScene" /* 12571 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 4915 */;
import GuildStore from "GuildStore" /* 4877 */;
import PermissionStore from "PermissionStore" /* 4935 */;
import ConjureBuilderRouteStore from "ConjureBuilderRouteStore" /* 7353 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let listProjectsResult, navigation;

let c10;
let closure_12;
let unpackModuleId;
const Permissions = Constants.Permissions;
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function RoutedProjectOpener(guildId) {
  let projectId;
  let obj = guildId(projectId[9]);
  const cResult = obj.c(11);
  guildId = guildId.guildId;
  const inline = guildId.inline;
  projectId = guildId.projectId;
  const sceneProjectId = guildId.sceneProjectId;
  const openedProjectIdRef = guildId.openedProjectIdRef;
  const obj2 = guildId(projectId[10]);
  navigation = obj2.useNavigation();
  if (cResult[0] === guildId) {
    if (cResult[1] === inline) {
      let tmp3;
      let tmp4;
      if (cResult[2] === sceneProjectId) {
        tmp3 = cResult[3];
        tmp4 = cResult[4];
      }
      const effect = openedProjectIdRef.useEffect(tmp3, tmp4);
      const obj3 = openedProjectIdRef;
      if (cResult[5] === navigation) {
        if (cResult[6] === openedProjectIdRef) {
          if (cResult[7] === projectId) {
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
      const fn2 = function u() {
        const tmp2 = null != projectId && tmp !== openedProjectIdRef.current;
        if (tmp2) {
          openedProjectIdRef.current = projectId;
          if (projectId !== sceneProjectId) {
            const obj = { projectId };
            navigation.push(conjureStandaloneScenes.ConjureScreenScenes.CHAT, obj);
          }
        }
      };
      const items = [projectId, sceneProjectId, openedProjectIdRef, navigation];
      cResult[5] = navigation;
      cResult[6] = openedProjectIdRef;
      cResult[7] = projectId;
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
  const projectId = guildId.projectId;
  const sceneProjectId = guildId.sceneProjectId;
  const openedProjectIdRef = guildId.openedProjectIdRef;
  let obj = guildId(projectId[10]);
  navigation = obj.useNavigation();
  const items = [guildId, inline, sceneProjectId];
  const effect = openedProjectIdRef.useEffect(() => {
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
  const items1 = [projectId, sceneProjectId, openedProjectIdRef, navigation];
  const effect1 = openedProjectIdRef.useEffect(() => {
    const tmp2 = null != projectId && tmp !== openedProjectIdRef.current;
    if (tmp2) {
      openedProjectIdRef.current = projectId;
      if (projectId !== sceneProjectId) {
        const obj = { projectId };
        navigation.push(conjureStandaloneScenes.ConjureScreenScenes.CHAT, obj);
      }
    }
  }, items1);
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureStandaloneScreen(guildId) {
  let inline;
  let isConjureGuildEnabled;
  let onClose;
  let openedProjectIdRef;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp21;
  let tmp23;
  let tmp24;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp = guildId;
  let obj = guildId(navigation[9]);
  const cResult = obj.c(63);
  guildId = guildId.guildId;
  ({ onClose, inline } = guildId);
  inline = undefined !== inline && inline;
  const tmpResult = tmp(navigation[10]);
  navigation = tmpResult.useNavigation();
  if (cResult[0] !== navigation) {
    class C {
      constructor() {
        return closure_2.goBack();
      }
    }
    cResult[0] = navigation;
    cResult[1] = C;
  } else {
    class C {
      constructor() {
        return closure_2.goBack();
      }
    }
  }
  if (onClose == null) {
    class C {
      constructor() {
        return closure_2.goBack();
      }
    }
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        return closure_2.goBack();
      }
    }
    let items = [ConjureBuilderRouteStore];
    cResult[2] = items;
    tmp6 = items;
  } else {
    class C {
      constructor() {
        return closure_2.goBack();
      }
    }
  }
  if (cResult[3] !== guildId) {
    class T {
      constructor() {
        routedProjectId = closure_8.getRoutedProjectId(guildId);
        return routedProjectId;
      }
    }
    const items1 = [guildId];
    cResult[3] = guildId;
    cResult[4] = T;
    cResult[5] = items1;
    tmp8 = items1;
    tmp7 = T;
  } else {
    class T {
      constructor() {
        routedProjectId = closure_8.getRoutedProjectId(guildId);
        return routedProjectId;
      }
    }
    tmp8 = cResult[5];
  }
  const tmpResult6 = tmp(navigation[13]);
  const stateFromStores = tmpResult6.useStateFromStores(tmp6, tmp7, tmp8);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        routedProjectId = closure_8.getRoutedProjectId(guildId);
        return routedProjectId;
      }
    }
    const items2 = [isConjureGuildEnabled];
    cResult[6] = items2;
    tmp10 = items2;
  } else {
    class T {
      constructor() {
        routedProjectId = closure_8.getRoutedProjectId(guildId);
        return routedProjectId;
      }
    }
  }
  if (cResult[7] !== guildId) {
    class A {
      constructor() {
        return closure_6.getGuild(guildId);
      }
    }
    const items3 = [guildId];
    cResult[7] = guildId;
    cResult[8] = A;
    cResult[9] = items3;
    tmp12 = items3;
    tmp11 = A;
  } else {
    class A {
      constructor() {
        return closure_6.getGuild(guildId);
      }
    }
    tmp12 = cResult[9];
  }
  const tmpResult7 = tmp(navigation[13]);
  const stateFromStores1 = tmpResult7.useStateFromStores(tmp10, tmp11, tmp12);
  if (cResult[10] !== guildId) {
    class A {
      constructor() {
        return closure_6.getGuild(guildId);
      }
    }
    tmp15[0] = guildId;
    cResult[10] = guildId;
    cResult[11] = tmp15;
    tmp14 = tmp15;
  } else {
    class A {
      constructor() {
        return closure_6.getGuild(guildId);
      }
    }
  }
  const tmpResult8 = tmp(navigation[14]);
  isConjureGuildEnabled = tmpResult8.useIsConjureGuildEnabled(tmp14);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        return closure_6.getGuild(guildId);
      }
    }
    const items4 = [stateFromStores1];
    cResult[12] = items4;
    tmp17 = items4;
  } else {
    class A {
      constructor() {
        return closure_6.getGuild(guildId);
      }
    }
  }
  if (cResult[13] !== guildId) {
    class O {
      constructor() {
        selfMember = closure_5.getSelfMember(guildId);
        roles = undefined;
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
    cResult[13] = guildId;
    cResult[14] = O;
    cResult[15] = items5;
    tmp19 = items5;
    tmp18 = O;
  } else {
    class O {
      constructor() {
        selfMember = closure_5.getSelfMember(guildId);
        roles = undefined;
        if (selfMember != null) {
          roles = selfMember.roles;
        }
        if (roles == null) {
          roles = [];
        }
        return roles;
      }
    }
    tmp19 = cResult[15];
  }
  const tmpResult9 = tmp(navigation[13]);
  const stateFromStoresArray = tmpResult9.useStateFromStoresArray(tmp17, tmp18, tmp19);
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        selfMember = closure_5.getSelfMember(guildId);
        roles = undefined;
        if (selfMember != null) {
          roles = selfMember.roles;
        }
        if (roles == null) {
          roles = [];
        }
        return roles;
      }
    }
    const items6 = [isConjureGuildEnabled, PermissionStore];
    cResult[16] = items6;
    tmp21 = items6;
  } else {
    class O {
      constructor() {
        selfMember = closure_5.getSelfMember(guildId);
        roles = undefined;
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
  if (cResult[17] !== guildId) {
    class L {
      constructor() {
        guild = closure_6.getGuild(guildId);
        canResult = null != guild;
        if (canResult) {
          tmp3 = closure_7;
          tmp4 = Permissions;
          canResult = closure_7.can(Permissions.MANAGE_GUILD, guild);
        }
        return canResult;
      }
    }
    const items7 = [guildId];
    cResult[17] = guildId;
    cResult[18] = L;
    cResult[19] = items7;
    tmp24 = items7;
    tmp23 = L;
  } else {
    class L {
      constructor() {
        guild = closure_6.getGuild(guildId);
        canResult = null != guild;
        if (canResult) {
          tmp3 = closure_7;
          tmp4 = Permissions;
          canResult = closure_7.can(Permissions.MANAGE_GUILD, guild);
        }
        return canResult;
      }
    }
    tmp24 = cResult[19];
  }
  const tmpResult10 = tmp(navigation[13]);
  const stateFromStores2 = tmpResult10.useStateFromStores(tmp21, tmp23, tmp24);
  if (cResult[20] === guildId) {
    class L {
      constructor() {
        guild = closure_6.getGuild(guildId);
        canResult = null != guild;
        if (canResult) {
          tmp3 = closure_7;
          tmp4 = Permissions;
          canResult = closure_7.can(Permissions.MANAGE_GUILD, guild);
        }
        return canResult;
      }
    }
    if (cResult[23] === stateFromStores2) {
      class L {
        constructor() {
          guild = closure_6.getGuild(guildId);
          canResult = null != guild;
          if (canResult) {
            tmp3 = closure_7;
            tmp4 = Permissions;
            canResult = closure_7.can(Permissions.MANAGE_GUILD, guild);
          }
          return canResult;
        }
      }
    }
    const items8 = [isConjureGuildEnabled, guildId, stateFromStoresArray, stateFromStores2];
    cResult[23] = stateFromStores2;
    cResult[24] = stateFromStoresArray;
    cResult[25] = guildId;
    cResult[26] = isConjureGuildEnabled;
    cResult[27] = items8;
  }
  class Q {
    constructor() {
      tmp = closure_6;
      if (tmp) {
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[15]);
        tmp4 = guildId;
        listProjectsResult = obj.listProjects(guildId);
      }
      return;
    }
  }
  cResult[20] = guildId;
  cResult[21] = isConjureGuildEnabled;
  cResult[22] = Q;
}) : (function ConjureStandaloneScreen(guildId) {
  let Navigator;
  let inline;
  let intl;
  let obj6;
  let onClose;
  let tmpResult10;
  guildId = guildId.guildId;
  ({ onClose, inline } = guildId);
  if (inline === undefined) {
    inline = false;
  }
  navigation = undefined;
  onClose = undefined;
  let stateFromStores;
  let stateFromStores1;
  let isConjureGuildEnabled;
  let openedProjectIdRef;
  let tmp = guildId;
  let obj = guildId(navigation[10]);
  navigation = obj.useNavigation();
  let obj2 = stateFromStores;
  let items = [navigation];
  if (onClose == null) {
    onClose = stateFromStores.useCallback(() => navigation.goBack(), items);
  }
  const items1 = [ConjureBuilderRouteStore];
  const items2 = [guildId];
  const tmpResult = tmp(navigation[13]);
  stateFromStores = tmpResult.useStateFromStores(items1, () => {
    const routedProjectId = ConjureBuilderRouteStore.getRoutedProjectId(guildId);
    return routedProjectId;
  }, items2);
  const items3 = [isConjureGuildEnabled];
  const items4 = [guildId];
  const tmpResult6 = tmp(navigation[13]);
  stateFromStores1 = tmpResult6.useStateFromStores(items3, () => GuildStore.getGuild(guildId), items4);
  const tmpResult7 = tmp(navigation[14]);
  isConjureGuildEnabled = tmpResult7.useIsConjureGuildEnabled({ guildId, location: "ConjureStandaloneScreen" });
  const items5 = [stateFromStores1];
  const items6 = [guildId];
  const tmpResult8 = tmp(navigation[13]);
  const stateFromStoresArray = tmpResult8.useStateFromStoresArray(items5, () => {
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
  const items7 = [isConjureGuildEnabled, openedProjectIdRef];
  const items8 = [guildId];
  const items9 = [isConjureGuildEnabled, guildId, stateFromStoresArray, ];
  const tmpResult9 = tmp(navigation[13]);
  items9[3] = tmpResult9.useStateFromStores(items7, () => {
    const guild = GuildStore.getGuild(guildId);
    const canResult = null != guild && PermissionStore.can(Permissions.MANAGE_GUILD, guild);
    return canResult;
  }, items8);
  const effect = obj2.useEffect(() => {
    const tmp = isConjureGuildEnabled;
    if (tmp) {
      const obj = ConjureActionCreators;
      obj.listProjects(guildId);
    }
  }, items9);
  const items10 = [stateFromStores1, isConjureGuildEnabled, onClose];
  const effect1 = obj2.useEffect(() => {
    const tmp = null == stateFromStores1 || isConjureGuildEnabled;
    if (!tmp) {
      onClose();
    }
  }, items10);
  openedProjectIdRef = obj2.useRef(stateFromStores);
  let obj3 = {};
  const obj4 = {
    headerLeft: tmpResult10.getHeaderCloseButton(onClose),
    headerTitle() {
      let intl;
      const obj = { title: intl.string(inline(navigation[18]).uk6jhJ) };
      const NavigatorHeader = guildId(navigation[16]).NavigatorHeader;
      intl = guildId(navigation[17]).intl;
      return closure_1_10(NavigatorHeader, obj);
    },
    render() {
      let items;
      const obj = { children: items };
      const obj2 = { guildId, inline, projectId: stateFromStores, sceneProjectId: "Array", openedProjectIdRef };
      items = [authStore(closure_13, obj2), ];
      const obj3 = { guildId };
      items[1] = authStore(ConjureProjectListDefault, obj3);
      return authStore2(unpackModuleId, obj);
    }
  };
  const PROJECTS = tmp(tmp2[12]).ConjureScreenScenes.PROJECTS;
  obj3[PROJECTS] = obj4;
  obj3[tmp(navigation[12]).ConjureScreenScenes.CHAT] = {
    ignoreKeyboard: true,
    render(projectId) {
      let items;
      projectId = projectId.projectId;
      const obj = { children: items };
      items = [, ];
      const obj2 = { guildId, inline, projectId: stateFromStores, sceneProjectId: projectId, openedProjectIdRef };
      items[0] = authStore(closure_13, obj2);
      const obj3 = { guildId, projectId };
      items[1] = authStore(ConjureChatSceneDefault, obj3);
      return authStore2(unpackModuleId, obj);
    }
  };
  obj3[tmp(navigation[12]).ConjureScreenScenes.DEBUG] = {
    headerTitle() {
      let intl;
      const obj = { title: intl.string(inline(navigation[18])["Q4FN+H"]) };
      const NavigatorHeader = guildId(navigation[16]).NavigatorHeader;
      intl = guildId(navigation[17]).intl;
      return closure_1_10(NavigatorHeader, obj);
    },
    render(projectId) {
      let items;
      projectId = projectId.projectId;
      const obj = { children: items };
      items = [, ];
      const obj2 = { guildId, inline, projectId: stateFromStores, sceneProjectId: projectId, openedProjectIdRef };
      items[0] = authStore(closure_13, obj2);
      items[1] = authStore(ConjureDebugSceneDefault, { projectId });
      return authStore2(unpackModuleId, obj);
    }
  };
  tmpResult10 = tmp(navigation[16]);
  const first = onClose(obj2.useState(() => {
    let obj3;
    const items = [{ name: conjureStandaloneScenes.ConjureScreenScenes.PROJECTS }];
    ({ name: conjureStandaloneScenes.ConjureScreenScenes.PROJECTS });
    if (null != stateFromStores) {
      const push = items.push;
      const obj2 = { name: conjureStandaloneScenes.ConjureScreenScenes.CHAT, params: obj3 };
      obj3 = { projectId: tmp3 };
      push(obj2);
    }
    return items;
  }), 1)[0];
  const obj5 = { value: inline, children: closure_10(Navigator, obj6) };
  const Provider = tmp(tmp2[23]).ConjureBuilderInlineContext.Provider;
  obj6 = { screens: obj3, initialRouteStack: first, headerBackTitle: intl.string(inline(navigation[18]).uk6jhJ) };
  Navigator = tmp(tmp2[22]).Navigator;
  intl = tmp(tmp2[17]).intl;
  return closure_10(Provider, obj5);
});
const result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureStandaloneScreen.tsx");

export default tmp3;
