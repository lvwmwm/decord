// Module ID: 17057
// Function ID: 17058
// Name: ConjureStandaloneScreen
// Dependencies: [32, 19, 2125, 2087, 4750, 6922, 1085, 21, 558, 576, 1503, 17058, 504, 6948, 11415, 6201, 1126, 3849, 17059, 17107, 17328, 6688, 2]

// Module 17057 (ConjureStandaloneScreen)
import Constants from "Constants" /* 1085 */;
import ConjureActionCreators from "ConjureActionCreators" /* 11415 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 17058 */;
import ConjureProjectListDefault from "ConjureProjectList" /* 17059 */;
import ConjureChatSceneDefault from "ConjureChatScene" /* 17107 */;
import ConjureDebugSceneDefault from "ConjureDebugScene" /* 17328 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import ConjureBuilderRouteStore from "ConjureBuilderRouteStore" /* 6922 */;
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
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function RoutedProjectOpener(projectId) {
  let openedProjectIdRef;
  let obj = projectId(openedProjectIdRef[9]);
  const cResult = obj.c(6);
  projectId = projectId.projectId;
  const sceneProjectId = projectId.sceneProjectId;
  openedProjectIdRef = projectId.openedProjectIdRef;
  const obj2 = projectId(openedProjectIdRef[10]);
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
  const fn = function o() {
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
  let obj = projectId(openedProjectIdRef[10]);
  navigation = obj.useNavigation();
  const items = [projectId, sceneProjectId, openedProjectIdRef, navigation];
  const effect = react.useEffect(() => {
    const tmp2 = null != projectId && tmp !== openedProjectIdRef.current;
    if (tmp2) {
      openedProjectIdRef.current = projectId;
      if (projectId !== sceneProjectId) {
        const obj = { projectId };
        navigation.push(conjureStandaloneScenes.ConjureScreenScenes.CHAT, obj);
      }
    }
  }, items);
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureStandaloneScreen(guildId) {
  let first;
  let openedProjectIdRef;
  let stateFromStores;
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
  let tmp7;
  let tmp8;
  let tmp = guildId;
  let obj = guildId(stateFromStores[9]);
  const cResult = obj.c(56);
  guildId = guildId.guildId;
  let obj2 = guildId(stateFromStores[10]);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ConjureBuilderRouteStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    class C {
      constructor() {
        routedProjectId = closure_8.getRoutedProjectId(guildId);
        return routedProjectId;
      }
    }
    const items1 = [guildId];
    cResult[1] = guildId;
    cResult[2] = C;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = C;
  } else {
    class C {
      constructor() {
        routedProjectId = closure_8.getRoutedProjectId(guildId);
        return routedProjectId;
      }
    }
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(stateFromStores[12]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        routedProjectId = closure_8.getRoutedProjectId(guildId);
        return routedProjectId;
      }
    }
    const items2 = [GuildStore];
    cResult[4] = items2;
    tmp10 = items2;
  } else {
    class C {
      constructor() {
        routedProjectId = closure_8.getRoutedProjectId(guildId);
        return routedProjectId;
      }
    }
  }
  if (cResult[5] !== guildId) {
    class R {
      constructor() {
        return closure_6.getGuild(guildId);
      }
    }
    const items3 = [guildId];
    cResult[5] = guildId;
    cResult[6] = R;
    cResult[7] = items3;
    tmp12 = items3;
    tmp11 = R;
  } else {
    class R {
      constructor() {
        return closure_6.getGuild(guildId);
      }
    }
    tmp12 = cResult[7];
  }
  const tmpResult5 = tmp(stateFromStores[12]);
  const stateFromStores1 = tmpResult5.useStateFromStores(tmp10, tmp11, tmp12);
  if (cResult[8] !== guildId) {
    class R {
      constructor() {
        return closure_6.getGuild(guildId);
      }
    }
    tmp15[0] = guildId;
    cResult[8] = guildId;
    cResult[9] = tmp15;
    tmp14 = tmp15;
  } else {
    class R {
      constructor() {
        return closure_6.getGuild(guildId);
      }
    }
  }
  const tmpResult6 = tmp(stateFromStores[13]);
  const isConjureGuildEnabled = tmpResult6.useIsConjureGuildEnabled(tmp14);
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        return closure_6.getGuild(guildId);
      }
    }
    const items4 = [GuildMemberStore];
    cResult[10] = items4;
    tmp17 = items4;
  } else {
    class R {
      constructor() {
        return closure_6.getGuild(guildId);
      }
    }
  }
  if (cResult[11] !== guildId) {
    class F {
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
    cResult[11] = guildId;
    cResult[12] = items5;
    cResult[13] = F;
    tmp19 = F;
    tmp18 = items5;
  } else {
    class F {
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
    tmp19 = cResult[13];
  }
  const tmpResult7 = tmp(stateFromStores[12]);
  const stateFromStoresArray = tmpResult7.useStateFromStoresArray(tmp17, tmp19, tmp18);
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
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
    const items6 = [GuildStore, PermissionStore];
    cResult[14] = items6;
    tmp21 = items6;
  } else {
    class F {
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
  if (cResult[15] !== guildId) {
    class J {
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
    cResult[15] = guildId;
    cResult[16] = J;
    cResult[17] = items7;
    tmp24 = items7;
    tmp23 = J;
  } else {
    class J {
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
    tmp24 = cResult[17];
  }
  const tmpResult8 = tmp(stateFromStores[12]);
  const stateFromStores2 = tmpResult8.useStateFromStores(tmp21, tmp23, tmp24);
  if (cResult[18] === guildId) {
    class J {
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
    if (cResult[21] === stateFromStores2) {
      class J {
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
    cResult[21] = stateFromStores2;
    cResult[22] = stateFromStoresArray;
    cResult[23] = guildId;
    cResult[24] = isConjureGuildEnabled;
    cResult[25] = items8;
  }
  class D {
    constructor() {
      tmp = closure_4;
      if (tmp) {
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[14]);
        tmp4 = guildId;
        listProjectsResult = obj.listProjects(guildId);
      }
      return;
    }
  }
  cResult[18] = guildId;
  cResult[19] = isConjureGuildEnabled;
  cResult[20] = D;
}) : (function ConjureStandaloneScreen(guildId) {
  let intl;
  let obj9;
  guildId = guildId.guildId;
  let stateFromStores;
  let openedProjectIdRef;
  let obj = guildId(stateFromStores[10]);
  navigation = obj.useNavigation();
  let obj2 = guildId(stateFromStores[12]);
  let items = [ConjureBuilderRouteStore];
  const items1 = [guildId];
  stateFromStores = obj2.useStateFromStores(items, () => {
    const routedProjectId = ConjureBuilderRouteStore.getRoutedProjectId(guildId);
    return routedProjectId;
  }, items1);
  let obj3 = guildId(stateFromStores[12]);
  const items2 = [GuildStore];
  const items3 = [guildId];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => GuildStore.getGuild(guildId), items3);
  const obj4 = guildId(stateFromStores[13]);
  const isConjureGuildEnabled = obj4.useIsConjureGuildEnabled({ guildId, location: "VibegrationsStandaloneScreen" });
  const items4 = [openedProjectIdRef];
  const items5 = [guildId];
  const obj5 = guildId(stateFromStores[12]);
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
  const obj6 = guildId(stateFromStores[12]);
  items8[3] = obj6.useStateFromStores(items6, () => {
    const guild = GuildStore.getGuild(guildId);
    const canResult = null != guild && PermissionStore.can(Permissions.MANAGE_GUILD, guild);
    return canResult;
  }, items7);
  const effect = isConjureGuildEnabled.useEffect(() => {
    const tmp = isConjureGuildEnabled;
    if (tmp) {
      const obj = ConjureActionCreators;
      obj.listProjects(guildId);
    }
  }, items8);
  const items9 = [stateFromStores1, isConjureGuildEnabled, navigation];
  const effect1 = isConjureGuildEnabled.useEffect(() => {
    const tmp = null == stateFromStores1 || isConjureGuildEnabled;
    if (!tmp) {
      navigation.goBack();
    }
  }, items9);
  openedProjectIdRef = isConjureGuildEnabled.useRef(stateFromStores);
  const obj7 = {};
  const obj8 = {
    headerLeft: obj9.getHeaderCloseButton(() => navigation.goBack()),
    headerTitle() {
      let intl;
      const obj = { title: intl.string(navigation(stateFromStores[17]).uk6jhJ) };
      const NavigatorHeader = guildId(stateFromStores[15]).NavigatorHeader;
      intl = guildId(stateFromStores[16]).intl;
      return closure_1_10(NavigatorHeader, obj);
    },
    render() {
      let items;
      const obj = { children: items };
      const obj2 = { projectId: stateFromStores, sceneProjectId: "Array", openedProjectIdRef };
      items = [authStore(closure_13, obj2), ];
      const obj3 = { guildId };
      items[1] = authStore(ConjureProjectListDefault, obj3);
      return authStore2(unpackModuleId, obj);
    }
  };
  const PROJECTS = guildId(stateFromStores[11]).ConjureScreenScenes.PROJECTS;
  obj7[PROJECTS] = obj8;
  obj7[guildId(stateFromStores[11]).ConjureScreenScenes.CHAT] = {
    ignoreKeyboard: true,
    render(projectId) {
      let items;
      projectId = projectId.projectId;
      const obj = { children: items };
      items = [, ];
      const obj2 = { projectId: stateFromStores, sceneProjectId: projectId, openedProjectIdRef };
      items[0] = authStore(closure_13, obj2);
      const obj3 = { guildId, projectId };
      items[1] = authStore(ConjureChatSceneDefault, obj3);
      return authStore2(unpackModuleId, obj);
    }
  };
  obj7[guildId(stateFromStores[11]).ConjureScreenScenes.DEBUG] = {
    headerTitle() {
      let intl;
      const obj = { title: intl.string(navigation(stateFromStores[17])["Q4FN+H"]) };
      const NavigatorHeader = guildId(stateFromStores[15]).NavigatorHeader;
      intl = guildId(stateFromStores[16]).intl;
      return closure_1_10(NavigatorHeader, obj);
    },
    render(projectId) {
      let items;
      projectId = projectId.projectId;
      const obj = { children: items };
      items = [, ];
      const obj2 = { projectId: stateFromStores, sceneProjectId: projectId, openedProjectIdRef };
      items[0] = authStore(closure_13, obj2);
      items[1] = authStore(ConjureDebugSceneDefault, { projectId });
      return authStore2(unpackModuleId, obj);
    }
  };
  obj9 = guildId(stateFromStores[15]);
  const obj10 = {
    screens: obj7,
    initialRouteStack: stateFromStores1(isConjureGuildEnabled.useState(() => {
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
    }), 1)[0],
    headerBackTitle: intl.string(navigation(stateFromStores[17]).uk6jhJ)
  };
  const Navigator = guildId(stateFromStores[21]).Navigator;
  intl = guildId(stateFromStores[16]).intl;
  return closure_10(Navigator, obj10);
});
const result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureStandaloneScreen.tsx");

export default tmp3;
