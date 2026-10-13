// Module ID: 11205
// Function ID: 11206
// Name: ConjureStandaloneScreen
// Dependencies: [32, 19, 2125, 2087, 4750, 6922, 1085, 21, 558, 576, 1503, 11206, 504, 6948, 11207, 6201, 1126, 3849, 11213, 11349, 11967, 6688, 2]

// Module 11205 (ConjureStandaloneScreen)
import Constants from "Constants" /* 1085 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 11206 */;
import ConjureActionCreators from "ConjureActionCreators" /* 11207 */;
import ConjureProjectListDefault from "ConjureProjectList" /* 11213 */;
import ConjureChatSceneDefault from "ConjureChatScene" /* 11349 */;
import ConjureDebugSceneDefault from "ConjureDebugScene" /* 11967 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import ConjureBuilderRouteStore from "ConjureBuilderRouteStore" /* 6922 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

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
  let onClose;
  let openedProjectIdRef;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp22;
  let tmp24;
  let tmp25;
  let tmp5;
  let tmp6;
  let tmp8;
  let tmp9;
  let tmp = guildId;
  let obj = guildId(onClose[9]);
  const cResult = obj.c(58);
  guildId = guildId.guildId;
  onClose = guildId.onClose;
  let obj2 = guildId(onClose[10]);
  navigation = obj2.useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function v() {
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
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ConjureBuilderRouteStore];
    cResult[2] = items;
    tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== guildId) {
    class E {
      constructor() {
        const routedProjectId = ConjureBuilderRouteStore.getRoutedProjectId(guildId);
        return routedProjectId;
      }
    }
    const items1 = [guildId];
    cResult[3] = guildId;
    cResult[4] = E;
    cResult[5] = items1;
    tmp9 = items1;
    tmp8 = E;
  } else {
    class E {
      constructor() {
        const routedProjectId = ConjureBuilderRouteStore.getRoutedProjectId(guildId);
        return routedProjectId;
      }
    }
    tmp9 = cResult[5];
  }
  const tmpResult = tmp(onClose[12]);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp8, tmp9);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        const routedProjectId = ConjureBuilderRouteStore.getRoutedProjectId(guildId);
        return routedProjectId;
      }
    }
    const items2 = [GuildStore];
    cResult[6] = items2;
    tmp11 = items2;
  } else {
    class E {
      constructor() {
        const routedProjectId = ConjureBuilderRouteStore.getRoutedProjectId(guildId);
        return routedProjectId;
      }
    }
  }
  if (cResult[7] !== guildId) {
    class N {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    const items3 = [guildId];
    cResult[7] = guildId;
    cResult[8] = N;
    cResult[9] = items3;
    tmp13 = items3;
    tmp12 = N;
  } else {
    class N {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    tmp13 = cResult[9];
  }
  const tmpResult5 = tmp(onClose[12]);
  const stateFromStores1 = tmpResult5.useStateFromStores(tmp11, tmp12, tmp13);
  if (cResult[10] !== guildId) {
    class N {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    tmp16[0] = guildId;
    cResult[10] = guildId;
    cResult[11] = tmp16;
    tmp15 = tmp16;
  } else {
    class N {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  const tmpResult6 = tmp(onClose[13]);
  const isConjureGuildEnabled = tmpResult6.useIsConjureGuildEnabled(tmp15);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    const items4 = [isConjureGuildEnabled];
    cResult[12] = items4;
    tmp18 = items4;
  } else {
    class N {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  if (cResult[13] !== guildId) {
    class B {
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
    cResult[13] = guildId;
    cResult[14] = B;
    cResult[15] = items5;
    tmp20 = items5;
    tmp19 = B;
  } else {
    class B {
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
    tmp20 = cResult[15];
  }
  const tmpResult7 = tmp(onClose[12]);
  const stateFromStoresArray = tmpResult7.useStateFromStoresArray(tmp18, tmp19, tmp20);
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
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
    cResult[16] = items6;
    tmp22 = items6;
  } else {
    class B {
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
  if (cResult[17] !== guildId) {
    class D {
      constructor() {
        const guild = GuildStore.getGuild(guildId);
        const canResult = null != guild && PermissionStore.can(Permissions.MANAGE_GUILD, guild);
        return canResult;
      }
    }
    const items7 = [guildId];
    cResult[17] = guildId;
    cResult[18] = D;
    cResult[19] = items7;
    tmp25 = items7;
    tmp24 = D;
  } else {
    class D {
      constructor() {
        const guild = GuildStore.getGuild(guildId);
        const canResult = null != guild && PermissionStore.can(Permissions.MANAGE_GUILD, guild);
        return canResult;
      }
    }
    tmp25 = cResult[19];
  }
  const tmpResult8 = tmp(onClose[12]);
  const stateFromStores2 = tmpResult8.useStateFromStores(tmp22, tmp24, tmp25);
  if (cResult[20] === guildId) {
    class D {
      constructor() {
        const guild = GuildStore.getGuild(guildId);
        const canResult = null != guild && PermissionStore.can(Permissions.MANAGE_GUILD, guild);
        return canResult;
      }
    }
    if (cResult[23] === stateFromStores2) {
      class D {
        constructor() {
          const guild = GuildStore.getGuild(guildId);
          const canResult = null != guild && PermissionStore.can(Permissions.MANAGE_GUILD, guild);
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
  const fn2 = function x() {
    const tmp = isConjureGuildEnabled;
    if (tmp) {
      const obj = ConjureActionCreators;
      obj.listProjects(guildId);
    }
  };
  cResult[20] = guildId;
  cResult[21] = isConjureGuildEnabled;
  cResult[22] = fn2;
}) : (function ConjureStandaloneScreen(guildId) {
  let intl;
  let tmpResult10;
  guildId = guildId.guildId;
  let onClose;
  let stateFromStores;
  let stateFromStores1;
  let isConjureGuildEnabled;
  let openedProjectIdRef;
  let tmp = guildId;
  let obj = guildId(onClose[10]);
  navigation = obj.useNavigation();
  let obj2 = stateFromStores1;
  let items = [navigation];
  if (onClose == null) {
    onClose = stateFromStores1.useCallback(() => navigation.goBack(), items);
  }
  const items1 = [ConjureBuilderRouteStore];
  const items2 = [guildId];
  const tmpResult = tmp(onClose[12]);
  stateFromStores = tmpResult.useStateFromStores(items1, () => {
    const routedProjectId = ConjureBuilderRouteStore.getRoutedProjectId(guildId);
    return routedProjectId;
  }, items2);
  const items3 = [openedProjectIdRef];
  const items4 = [guildId];
  const tmpResult6 = tmp(onClose[12]);
  stateFromStores1 = tmpResult6.useStateFromStores(items3, () => GuildStore.getGuild(guildId), items4);
  const tmpResult7 = tmp(onClose[13]);
  isConjureGuildEnabled = tmpResult7.useIsConjureGuildEnabled({ guildId, location: "VibegrationsStandaloneScreen" });
  const items5 = [isConjureGuildEnabled];
  const items6 = [guildId];
  const tmpResult8 = tmp(onClose[12]);
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
  const items7 = [openedProjectIdRef, PermissionStore];
  const items8 = [guildId];
  const items9 = [isConjureGuildEnabled, guildId, stateFromStoresArray, ];
  const tmpResult9 = tmp(onClose[12]);
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
      const obj = { title: intl.string(navigation(onClose[17]).uk6jhJ) };
      const NavigatorHeader = guildId(onClose[15]).NavigatorHeader;
      intl = guildId(onClose[16]).intl;
      return closure_1_10(NavigatorHeader, obj);
    },
    render() {
      let items;
      const obj = { children: items };
      items = [, ];
      const obj2 = { projectId: stateFromStores, sceneProjectId: "Array", openedProjectIdRef };
      items[0] = authStore(closure_13, obj2);
      const obj3 = { guildId };
      items[1] = authStore(ConjureProjectListDefault, obj3);
      return authStore2(unpackModuleId, obj);
    }
  };
  const PROJECTS = tmp(tmp2[11]).ConjureScreenScenes.PROJECTS;
  obj3[PROJECTS] = obj4;
  obj3[tmp(onClose[11]).ConjureScreenScenes.CHAT] = {
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
  obj3[tmp(onClose[11]).ConjureScreenScenes.DEBUG] = {
    headerTitle() {
      let intl;
      const obj = { title: intl.string(navigation(onClose[17])["Q4FN+H"]) };
      const NavigatorHeader = guildId(onClose[15]).NavigatorHeader;
      intl = guildId(onClose[16]).intl;
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
  tmpResult10 = tmp(onClose[15]);
  const obj5 = {
    screens: obj3,
    initialRouteStack: stateFromStores(obj2.useState(() => {
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
    headerBackTitle: intl.string(navigation(onClose[17]).uk6jhJ)
  };
  const Navigator = tmp(tmp2[21]).Navigator;
  intl = tmp(tmp2[16]).intl;
  return closure_10(Navigator, obj5);
});
const result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureStandaloneScreen.tsx");

export default tmp3;
