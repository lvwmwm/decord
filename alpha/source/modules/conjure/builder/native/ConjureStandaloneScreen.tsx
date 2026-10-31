// Module ID: 12070
// Function ID: 12071
// Name: ConjureStandaloneScreen
// Dependencies: [32, 19, 4926, 4885, 4946, 6844, 7393, 1072, 21, 504, 12071, 12072, 1497, 12815, 12086, 12073, 6879, 9676, 10875, 6998, 1113, 3868, 12816, 12980, 12999, 12091, 7169, 2]
// Exports: default

// Module 12070 (ConjureStandaloneScreen)
import Constants from "Constants" /* 1072 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10875 */;
import ConjureActivity from "ConjureActivity" /* 12071 */;
import ConjureChatSceneDefault from "ConjureChatScene" /* 12072 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 12086 */;
import selectConjureChannelDefault from "selectConjureChannel" /* 12815 */;
import ConjureDebugSceneDefault from "ConjureDebugScene" /* 12999 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 4926 */;
import GuildStore from "GuildStore" /* 4885 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6844 */;
import ConjureBuilderRouteStore from "ConjureBuilderRouteStore" /* 7393 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let navigation;

let closure_12;
let map1;
let unpackModuleId;
function GlobalChatScene(projectId) {
  let entryPoint;
  let onExit;
  projectId = projectId.projectId;
  const fallbackGuildId = projectId.fallbackGuildId;
  ({ entryPoint, onExit } = projectId);
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
  return closure_11(fallbackGuildId(12072), { guildId, projectId, entryPoint, onExit });
}
function RoutedProjectOpener(guildId) {
  guildId = guildId.guildId;
  const inline = guildId.inline;
  const request = guildId.request;
  const sceneProjectId = guildId.sceneProjectId;
  const handledKeyRef = guildId.handledKeyRef;
  let obj = guildId(request[12]);
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
          const obj = { projectId: null, entryPoint: null };
          ({ projectId: obj.projectId, entryPoint: obj.entryPoint } = request);
          navigation.push(conjureStandaloneScenes.ConjureScreenScenes.CHAT, obj);
        } else {
          const routes = navigation.getState().routes;
          if (routes.some((name) => name.name === guildId(request[14]).ConjureScreenScenes.PROJECTS)) {
            navigation.popTo(conjureStandaloneScenes.ConjureScreenScenes.PROJECTS);
          } else {
            navigation.push(conjureStandaloneScenes.ConjureScreenScenes.PROJECTS);
          }
        }
      }
    }
  }, items1);
  return null;
}
const Permissions = Constants.Permissions;
({ jsx: unpackModuleId, Fragment: closure_12, jsxs: map1 } = Fragment);
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureStandaloneScreen.tsx");

export default function ConjureStandaloneScreen(guildId) {
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
  let closure_5;
  let projectId;
  let stateFromStores;
  let isConjureMobileEnabled;
  let requestId;
  let entryPoint;
  let memo;
  let handledKeyRef;
  let tmp2 = guildId;
  const tmp3 = focusRequest;
  let obj = guildId(focusRequest[12]);
  navigation = obj.useNavigation();
  let obj2 = onClose;
  let items = [navigation];
  if (onClose == null) {
    onClose = onClose.useCallback(() => navigation.goBack(), items);
  }
  let tmp5 = inline;
  const context = obj2.useContext(inline(tmp3[15]));
  closure_5 = tmp7;
  let items1 = [requestId];
  const items2 = [guildId, tmp7];
  const tmp2Result = tmp2(tmp3[9]);
  projectId = tmp2Result.useStateFromStores(items1, () => {
    let tmp;
    if (!closure_5) {
      const routedProjectId = ConjureBuilderRouteStore.getRoutedProjectId(guildId);
      tmp = routedProjectId;
    }
    return tmp;
  }, items2);
  if (null != context) {
    projectId = context.projectId;
  }
  const items3 = [projectId];
  const items4 = [guildId];
  const tmp2Result7 = tmp2(tmp3[9]);
  stateFromStores = tmp2Result7.useStateFromStores(items3, () => GuildStore.getGuild(guildId), items4);
  const tmp2Result8 = tmp2(tmp3[16]);
  const isConjureGuildEnabled = tmp2Result8.useIsConjureGuildEnabled({ guildId, location: "ConjureStandaloneScreen" });
  const tmp2Result9 = tmp2(tmp3[17]);
  isConjureMobileEnabled = tmp2Result9.useIsConjureMobileEnabled(isConjureGuildEnabled, "ConjureStandaloneScreen");
  const items5 = [closure_5];
  const items6 = [guildId];
  const tmp2Result10 = tmp2(tmp3[9]);
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
  const items7 = [projectId, stateFromStores];
  const items8 = [guildId];
  const items9 = [isConjureMobileEnabled, tmp7, guildId, stateFromStoresArray, ];
  const tmp2Result11 = tmp2(tmp3[9]);
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
  requestId = undefined;
  if (context != null) {
    requestId = context.requestId;
  }
  entryPoint = undefined;
  if (context != null) {
    entryPoint = context.entryPoint;
  }
  const items11 = [tmp7, requestId, entryPoint, projectId];
  memo = obj2.useMemo(() => {
    let tmp4;
    const tmp = closure_5;
    if (tmp) {
      let num = requestId;
      if (requestId == null) {
        num = 0;
      }
      tmp4 = { key: num, projectId, entryPoint };
      const obj2 = { key: num, projectId, entryPoint };
    } else if (null != projectId) {
      tmp4 = { key: projectId, projectId, entryPoint: "Array" };
      const obj = { key: projectId, projectId, entryPoint: "Array" };
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
      const obj = { title: intl.string(inline(focusRequest[21]).uk6jhJ) };
      const NavigatorHeader = guildId(focusRequest[19]).NavigatorHeader;
      intl = guildId(focusRequest[20]).intl;
      return memo(NavigatorHeader, obj);
    },
    render() {
      let tmp3Result;
      const obj = { guildId, inline, request: memo, sceneProjectId: "Array", handledKeyRef };
      const children = [unpackModuleId(RoutedProjectOpener, obj), ];
      const tmp = map1;
      const tmp2 = authStore2;
      if (closure_5) {
        const obj2 = { forMeGuildId: guildId, focusRequest };
        tmp3Result = tmp3(tmp5(12816), obj2);
      } else {
        const obj3 = { guildId };
        tmp3Result = tmp3(tmp5(12980), obj3);
      }
      children[1] = tmp3Result;
      return tmp(tmp2, { children });
    }
  };
  const PROJECTS = tmp2(tmp3[14]).ConjureScreenScenes.PROJECTS;
  const tmp2Result12 = tmp2(tmp3[19]);
  if (null != context) {
    headerBackButton = tmp2Result12.getHeaderBackButton(onClose, true);
  } else {
    headerBackButton = tmp2Result12.getHeaderCloseButton(onClose);
  }
  let obj4 = {
    ignoreKeyboard: true,
    headerShown: false,
    render(arg0) {
      let tmp3Result;
      ({ projectId, entryPoint } = arg0);
      const children = [, ];
      const obj = { guildId, inline, request: memo, sceneProjectId: projectId, handledKeyRef };
      children[0] = unpackModuleId(RoutedProjectOpener, obj);
      const tmp = map1;
      const tmp2 = authStore2;
      const tmp5 = closure_5;
      if (tmp5) {
        const obj2 = { projectId, entryPoint, fallbackGuildId: guildId, onExit: onClose };
        tmp3Result = tmp3(GlobalChatScene, obj2);
      } else {
        const obj3 = { guildId, projectId, entryPoint };
        tmp3Result = tmp3(ConjureChatSceneDefault, obj3);
      }
      children[1] = tmp3Result;
      return tmp(tmp2, { children });
    }
  };
  const obj5 = {
    headerTitle() {
      let intl;
      const obj = { title: intl.string(inline(focusRequest[21])["Q4FN+H"]) };
      const NavigatorHeader = guildId(focusRequest[19]).NavigatorHeader;
      intl = guildId(focusRequest[20]).intl;
      return memo(NavigatorHeader, obj);
    },
    render(projectId) {
      let items;
      projectId = projectId.projectId;
      const obj = { children: items };
      items = [, ];
      const obj2 = { guildId, inline, request: memo, sceneProjectId: projectId, handledKeyRef };
      items[0] = unpackModuleId(RoutedProjectOpener, obj2);
      items[1] = unpackModuleId(ConjureDebugSceneDefault, { projectId });
      return map1(authStore2, obj);
    }
  };
  const first = navigation(obj2.useState(() => {
    let tmp2 = null;
    if (null != projectId) {
      const obj = { projectId: tmp, entryPoint };
      entryPoint = undefined;
      if (memo != null) {
        entryPoint = memo.entryPoint;
      }
      tmp2 = obj;
    }
    const tmp4 = closure_5;
    if (tmp4) {
      if (null != tmp2) {
        const items = [{ name: conjureStandaloneScenes.ConjureScreenScenes.CHAT, params: tmp2 }];
        const obj2 = { name: conjureStandaloneScenes.ConjureScreenScenes.CHAT, params: tmp2 };
        return items;
      }
    }
    const items1 = [{ name: conjureStandaloneScenes.ConjureScreenScenes.PROJECTS }];
    ({ name: conjureStandaloneScenes.ConjureScreenScenes.PROJECTS });
    if (null != tmp2) {
      const push = items1.push;
      const obj4 = { name: conjureStandaloneScenes.ConjureScreenScenes.CHAT, params: tmp2 };
      push(obj4);
    }
    return items1;
  }), 1)[0];
  const obj6 = { value: inline, children: memo(Navigator, obj7) };
  const Provider = tmp2(tmp3[25]).ConjureBuilderInlineContext.Provider;
  obj7 = { screens: { [PROJECTS]: obj3, [tmp2(tmp3[14]).ConjureScreenScenes.CHAT]: obj4, [tmp2(tmp3[14]).ConjureScreenScenes.DEBUG]: obj5 }, initialRouteStack: first, headerBackTitle: intl.string(tmp5(tmp3[21]).uk6jhJ) };
  Navigator = tmp2(tmp3[26]).Navigator;
  intl = tmp2(tmp3[20]).intl;
  return memo(Provider, obj6);
};
