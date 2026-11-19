// Module ID: 18279
// Function ID: 18280
// Name: ConjureStandaloneScreen
// Dependencies: [32, 19, 17, 4704, 4663, 4724, 6500, 6716, 1072, 21, 4792, 575, 6976, 1113, 4089, 7203, 504, 6720, 18280, 1502, 18672, 18289, 18281, 6536, 9831, 6814, 8444, 18673, 18695, 18711, 18444, 6973, 2]
// Exports: default

// Module 18279 (ConjureStandaloneScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1113 */;
import _modDef4089 from "module_4089" /* 4089 */;
import ConjureActivity from "ConjureActivity" /* 6720 */;
import ConjureActionCreators from "ConjureActionCreators" /* 6814 */;
import NavigatorHeader2 from "NavigatorHeader" /* 6976 */;
import GuildIcon from "GuildIcon" /* 7203 */;
import PressableNavigatorBackIcon from "PressableNavigatorBackIcon" /* 8444 */;
import ConjureChatSceneDefault from "ConjureChatScene" /* 18280 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 18289 */;
import selectConjureChannelDefault from "selectConjureChannel" /* 18672 */;
import ConjureDebugSceneDefault from "ConjureDebugScene" /* 18711 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 4704 */;
import GuildStore from "GuildStore" /* 4663 */;
import PermissionStore from "PermissionStore" /* 4724 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6500 */;
import ConjureBuilderRouteStore from "ConjureBuilderRouteStore" /* 6716 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4792 */;
import size from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;
let navigation;

let closure_12;
let closure_14;
let map1;
let obj2;
function ServerProjectsHeader(guild) {
  let intl;
  let intl2;
  let obj2;
  let obj3;
  let obj4;
  let tmp8;
  guild = guild.guild;
  const tmp = closure_15();
  const NavigatorHeader = NavigatorHeader2.NavigatorHeader;
  if (null == guild) {
    const obj = { title: intl.string(_modDef4089.uk6jhJ) };
    intl = tmp3(1113).intl;
    obj2 = obj;
  } else {
    obj2 = { title: guild.name, subtitle: intl2.string(_modDef4089.IF7qLs), icon: authStore2(View, obj3) };
    intl2 = tmp3(1113).intl;
    obj3 = { style: tmp.headerGuildIcon, children: authStore2(tmp8, obj4) };
    obj4 = { guild, size: GuildIcon.GuildIconSizes.XSMALL_20, selected: false };
    tmp8 = GuildIconDefault;
  }
  return authStore2(NavigatorHeader, obj2);
}
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
  return closure_12(fallbackGuildId(18280), { guildId, projectId, entryPoint, onExit });
}
function RoutedProjectOpener(guildId) {
  guildId = guildId.guildId;
  const inline = guildId.inline;
  const request = guildId.request;
  const sceneProjectId = guildId.sceneProjectId;
  const handledKeyRef = guildId.handledKeyRef;
  let obj = guildId(request[19]);
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
          if (routes.some((name) => name.name === guildId(request[21]).ConjureScreenScenes.PROJECTS)) {
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
const View = react_native.View;
const Permissions = Constants.Permissions;
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = Fragment);
let obj = { headerGuildIcon: obj2 };
obj2 = { flexShrink: 0, marginRight: nativeDefault.space.PX_8 };
let closure_15 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureStandaloneScreen.tsx");

export default function ConjureStandaloneScreen(guildId) {
  let Navigator;
  let fn;
  let inline;
  let intl;
  let obj7;
  let onClose;
  guildId = guildId.guildId;
  ({ onClose, inline } = guildId);
  if (inline === undefined) {
    inline = false;
  }
  const onBack = guildId.onBack;
  let focusRequest = guildId.focusRequest;
  if (focusRequest === undefined) {
    focusRequest = null;
  }
  onClose = undefined;
  let closure_6;
  let projectId;
  let stateFromStores;
  let isConjureMobileEnabled;
  let requestId;
  let entryPoint;
  let memo;
  let handledKeyRef;
  let tmp2 = guildId;
  const tmp3 = onBack;
  let obj = guildId(onBack[19]);
  navigation = obj.useNavigation();
  let obj2 = navigation;
  let items = [navigation];
  if (onClose == null) {
    onClose = navigation.useCallback(() => navigation.goBack(), items);
  }
  let tmp5 = inline;
  const context = obj2.useContext(inline(tmp3[22]));
  closure_6 = tmp7;
  let items1 = [requestId];
  const items2 = [guildId, tmp7];
  const tmp2Result = tmp2(tmp3[16]);
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
  const items3 = [projectId];
  const items4 = [guildId];
  const tmp2Result7 = tmp2(tmp3[16]);
  stateFromStores = tmp2Result7.useStateFromStores(items3, () => GuildStore.getGuild(guildId), items4);
  const tmp2Result8 = tmp2(tmp3[23]);
  const isConjureGuildEnabled = tmp2Result8.useIsConjureGuildEnabled({ guildId, location: "ConjureStandaloneScreen" });
  const tmp2Result9 = tmp2(tmp3[24]);
  isConjureMobileEnabled = tmp2Result9.useIsConjureMobileEnabled(isConjureGuildEnabled, "ConjureStandaloneScreen");
  const items5 = [closure_6];
  const items6 = [guildId];
  const tmp2Result10 = tmp2(tmp3[16]);
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
  const tmp2Result11 = tmp2(tmp3[16]);
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
    const tmp = closure_6;
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
    headerLeft: fn,
    headerTitle() {
      let intl;
      let tmpResult;
      if (closure_6) {
        const obj2 = { title: intl.string(_modDef4089.uk6jhJ) };
        const NavigatorHeader = NavigatorHeader2.NavigatorHeader;
        intl = intl3.intl;
        tmpResult = tmp(NavigatorHeader, obj2);
      } else {
        const obj = { guild: stateFromStores };
        tmpResult = tmp(ServerProjectsHeader, obj);
      }
      return tmpResult;
    },
    render() {
      let tmp3Result;
      const obj = { guildId, inline, request: memo, sceneProjectId: "Array", handledKeyRef };
      const children = [authStore2(RoutedProjectOpener, obj), ];
      const tmp = gesture;
      const tmp2 = map1;
      const tmp4 = guildId;
      if (closure_6) {
        const obj2 = { focusRequest };
        tmp3Result = tmp3(tmp5(18673), obj2);
      } else {
        const obj3 = { guildId: tmp4 };
        tmp3Result = tmp3(tmp5(18695), obj3);
      }
      children[1] = tmp3Result;
      return tmp(tmp2, { children });
    }
  };
  const PROJECTS = tmp2(tmp3[21]).ConjureScreenScenes.PROJECTS;
  if (null != context) {
    const tmp2Result12 = tmp2(tmp3[12]);
    fn = tmp2Result12.getHeaderBackButton(onClose, true);
  } else if (null != onBack) {
    fn = () => {
      const obj = { onPress: onBack };
      return authStore2(PressableNavigatorBackIcon.PressableNavigatorBackIcon, obj);
    };
  }
  let obj4 = {
    ignoreKeyboard: true,
    headerShown: false,
    render(arg0) {
      let tmp3Result;
      ({ projectId, entryPoint } = arg0);
      const children = [, ];
      const obj = { guildId, inline, request: memo, sceneProjectId: projectId, handledKeyRef };
      children[0] = authStore2(RoutedProjectOpener, obj);
      const tmp = gesture;
      const tmp2 = map1;
      const tmp5 = closure_6;
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
      const obj = { title: intl.string(inline(onBack[14])["Q4FN+H"]) };
      const NavigatorHeader = guildId(onBack[12]).NavigatorHeader;
      intl = guildId(onBack[13]).intl;
      return memo(NavigatorHeader, obj);
    },
    render(projectId) {
      let items;
      projectId = projectId.projectId;
      const obj = { children: items };
      items = [, ];
      const obj2 = { guildId, inline, request: memo, sceneProjectId: projectId, handledKeyRef };
      items[0] = authStore2(RoutedProjectOpener, obj2);
      items[1] = authStore2(ConjureDebugSceneDefault, { projectId });
      return gesture(map1, obj);
    }
  };
  const first = focusRequest(obj2.useState(() => {
    let tmp2 = null;
    if (null != projectId) {
      const obj = { projectId: tmp, entryPoint };
      entryPoint = undefined;
      if (memo != null) {
        entryPoint = memo.entryPoint;
      }
      tmp2 = obj;
    }
    const tmp4 = closure_6;
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
  const Provider = tmp2(tmp3[30]).ConjureBuilderInlineContext.Provider;
  obj7 = { screens: { [PROJECTS]: obj3, [tmp2(tmp3[21]).ConjureScreenScenes.CHAT]: obj4, [tmp2(tmp3[21]).ConjureScreenScenes.DEBUG]: obj5 }, initialRouteStack: first, headerBackTitle: intl.string(tmp5(tmp3[14]).uk6jhJ) };
  Navigator = tmp2(tmp3[31]).Navigator;
  intl = tmp2(tmp3[13]).intl;
  return memo(Provider, obj6);
};
