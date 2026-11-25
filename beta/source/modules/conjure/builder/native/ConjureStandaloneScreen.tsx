// Module ID: 18243
// Function ID: 18244
// Name: ConjureStandaloneScreen
// Dependencies: [32, 19, 17, 4825, 4784, 4845, 6621, 1071, 21, 4913, 575, 7095, 1112, 4190, 7322, 504, 6839, 18244, 1500, 18251, 18245, 6657, 9953, 6933, 8563, 18635, 18657, 18673, 18407, 7092, 2]
// Exports: default

// Module 18243 (ConjureStandaloneScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import intl3 from "intl" /* 1112 */;
import _modDef4190 from "module_4190" /* 4190 */;
import ConjureActivity from "ConjureActivity" /* 6839 */;
import ConjureActionCreators from "ConjureActionCreators" /* 6933 */;
import NavigatorHeader2 from "NavigatorHeader" /* 7095 */;
import GuildIcon from "GuildIcon" /* 7322 */;
import PressableNavigatorBackIcon from "PressableNavigatorBackIcon" /* 8563 */;
import ConjureChatSceneDefault from "ConjureChatScene" /* 18244 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 18251 */;
import ConjureDebugSceneDefault from "ConjureDebugScene" /* 18673 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 4825 */;
import GuildStore from "GuildStore" /* 4784 */;
import PermissionStore from "PermissionStore" /* 4845 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6621 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;
let navigation;

let closure_12;
let map1;
let obj2;
let unpackModuleId;
function ServerProjectsHeader(guild) {
  let intl;
  let intl2;
  let obj2;
  let obj3;
  let obj4;
  let tmp8;
  guild = guild.guild;
  const tmp = closure_14();
  const NavigatorHeader = NavigatorHeader2.NavigatorHeader;
  if (null == guild) {
    const obj = { title: intl.string(_modDef4190.uk6jhJ) };
    intl = tmp3(1112).intl;
    obj2 = obj;
  } else {
    obj2 = { title: guild.name, subtitle: intl2.string(_modDef4190.IF7qLs), icon: unpackModuleId(View, obj3) };
    intl2 = tmp3(1112).intl;
    obj3 = { style: tmp.headerGuildIcon, children: unpackModuleId(tmp8, obj4) };
    obj4 = { guild, size: GuildIcon.GuildIconSizes.XSMALL_20, selected: false };
    tmp8 = GuildIconDefault;
  }
  return unpackModuleId(NavigatorHeader, obj2);
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
  return closure_11(fallbackGuildId(18244), { guildId, projectId, entryPoint, onExit });
}
function RoutedProjectOpener(request) {
  request = request.request;
  const sceneProjectId = request.sceneProjectId;
  const handledKeyRef = request.handledKeyRef;
  let obj = request(handledKeyRef[18]);
  navigation = obj.useNavigation();
  const items = [request, sceneProjectId, handledKeyRef, navigation];
  const effect = react.useEffect(() => {
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
          if (routes.some((name) => name.name === request(handledKeyRef[19]).ConjureScreenScenes.PROJECTS)) {
            navigation.popTo(conjureStandaloneScenes.ConjureScreenScenes.PROJECTS);
          } else {
            navigation.push(conjureStandaloneScenes.ConjureScreenScenes.PROJECTS);
          }
        }
      }
    }
  }, items);
  return null;
}
const View = react_native.View;
const Permissions = Constants.Permissions;
({ jsx: unpackModuleId, Fragment: closure_12, jsxs: map1 } = Fragment);
let obj = { headerGuildIcon: obj2 };
obj2 = { flexShrink: 0, marginRight: nativeDefault.space.PX_8 };
let closure_14 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureStandaloneScreen.tsx");

export default function ConjureStandaloneScreen(guildId) {
  let Navigator;
  let fn;
  let inline;
  let intl;
  let obj7;
  let onClose;
  let projectId;
  guildId = guildId.guildId;
  ({ projectId, onClose, inline } = guildId);
  if (inline === undefined) {
    inline = false;
  }
  const onBack = guildId.onBack;
  let focusRequest = guildId.focusRequest;
  if (focusRequest === undefined) {
    focusRequest = null;
  }
  onClose = undefined;
  let closure_5;
  projectId = undefined;
  let stateFromStores;
  let isConjureMobileEnabled;
  let requestId;
  let entryPoint;
  let memo;
  let handledKeyRef;
  let tmp2 = guildId;
  let tmp3 = focusRequest;
  let obj = guildId(focusRequest[18]);
  navigation = obj.useNavigation();
  let obj2 = onClose;
  let items = [navigation];
  if (onClose == null) {
    onClose = onClose.useCallback(() => navigation.goBack(), items);
  }
  const context = obj2.useContext(onBack(tmp3[20]));
  closure_5 = tmp7;
  const tmp5 = onBack;
  if (closure_5) {
    projectId = context.projectId;
  }
  let items1 = [stateFromStores];
  const items2 = [guildId];
  const tmp2Result = tmp2(tmp3[15]);
  stateFromStores = tmp2Result.useStateFromStores(items1, () => GuildStore.getGuild(guildId), items2);
  const tmp2Result6 = tmp2(tmp3[21]);
  const isConjureGuildEnabled = tmp2Result6.useIsConjureGuildEnabled({ guildId, location: "ConjureStandaloneScreen" });
  const tmp2Result7 = tmp2(tmp3[22]);
  isConjureMobileEnabled = tmp2Result7.useIsConjureMobileEnabled(isConjureGuildEnabled, "ConjureStandaloneScreen");
  const items3 = [projectId];
  const items4 = [guildId];
  const tmp2Result8 = tmp2(tmp3[15]);
  const stateFromStoresArray = tmp2Result8.useStateFromStoresArray(items3, () => {
    const selfMember = GuildMemberStore.getSelfMember(guildId);
    let roles;
    if (selfMember != null) {
      roles = selfMember.roles;
    }
    if (roles == null) {
      roles = [];
    }
    return roles;
  }, items4);
  const items5 = [stateFromStores, isConjureMobileEnabled];
  const items6 = [guildId];
  const items7 = [isConjureMobileEnabled, tmp7, guildId, stateFromStoresArray, ];
  const tmp2Result9 = tmp2(tmp3[15]);
  items7[4] = tmp2Result9.useStateFromStores(items5, () => {
    const guild = GuildStore.getGuild(guildId);
    const canResult = null != guild && PermissionStore.can(Permissions.MANAGE_GUILD, guild);
    return canResult;
  }, items6);
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
  }, items7);
  const items8 = [stateFromStores, isConjureMobileEnabled, onClose];
  const effect1 = obj2.useEffect(() => {
    const tmp = null == stateFromStores || isConjureMobileEnabled;
    if (!tmp) {
      onClose();
    }
  }, items8);
  requestId = undefined;
  if (context != null) {
    requestId = context.requestId;
  }
  entryPoint = undefined;
  if (context != null) {
    entryPoint = context.entryPoint;
  }
  const items9 = [tmp7, requestId, entryPoint, projectId];
  memo = obj2.useMemo(() => {
    let tmp;
    if (closure_5) {
      let num = requestId;
      if (requestId == null) {
        num = 0;
      }
      tmp = { key: num, projectId, entryPoint };
      const obj = { key: num, projectId, entryPoint };
    }
    return tmp;
  }, items9);
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
      if (closure_5) {
        const obj2 = { title: intl.string(_modDef4190.uk6jhJ) };
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
      let tmp9Result;
      let tmp4 = null;
      const tmp = map1;
      const tmp2 = authStore2;
      if (closure_5) {
        const obj = { request: memo, sceneProjectId: "Array", handledKeyRef };
        tmp4 = unpackModuleId(RoutedProjectOpener, obj);
      }
      const children = [tmp4, ];
      if (closure_5) {
        const obj2 = { focusRequest };
        tmp9Result = tmp9(tmp10(18635), obj2);
      } else {
        const obj3 = { guildId };
        tmp9Result = tmp9(tmp10(18657), obj3);
      }
      children[1] = tmp9Result;
      return tmp(tmp2, { children });
    }
  };
  const PROJECTS = tmp2(tmp3[19]).ConjureScreenScenes.PROJECTS;
  if (null != context) {
    const tmp2Result10 = tmp2(tmp3[11]);
    fn = tmp2Result10.getHeaderBackButton(onClose, true);
  } else if (null != onBack) {
    fn = () => {
      const obj = { onPress: onBack };
      return unpackModuleId(PressableNavigatorBackIcon.PressableNavigatorBackIcon, obj);
    };
  }
  const obj4 = {
    ignoreKeyboard: true,
    headerShown: false,
    render(arg0) {
      let tmp9Result;
      ({ projectId, entryPoint } = arg0);
      let tmp4 = null;
      const tmp = map1;
      const tmp2 = authStore2;
      if (closure_5) {
        const obj = { request: memo, sceneProjectId: projectId, handledKeyRef };
        tmp4 = unpackModuleId(RoutedProjectOpener, obj);
      }
      const children = [tmp4, ];
      if (closure_5) {
        const obj2 = { projectId, entryPoint, fallbackGuildId: guildId, onExit: onClose };
        tmp9Result = tmp9(GlobalChatScene, obj2);
      } else {
        const obj3 = { guildId, projectId, entryPoint, onExit: onBack };
        tmp9Result = tmp9(ConjureChatSceneDefault, obj3);
      }
      children[1] = tmp9Result;
      return tmp(tmp2, { children });
    }
  };
  const obj5 = {
    headerTitle() {
      let intl;
      const obj = { title: intl.string(onBack(focusRequest[13])["Q4FN+H"]) };
      const NavigatorHeader = guildId(focusRequest[11]).NavigatorHeader;
      intl = guildId(focusRequest[12]).intl;
      return memo(NavigatorHeader, obj);
    },
    render(projectId) {
      let items;
      projectId = projectId.projectId;
      let tmp3 = null;
      const tmp = map1;
      const tmp2 = authStore2;
      if (closure_5) {
        const obj = { request: memo, sceneProjectId: projectId, handledKeyRef };
        tmp3 = unpackModuleId(RoutedProjectOpener, obj);
      }
      const obj2 = { children: items };
      items = [tmp3, unpackModuleId(ConjureDebugSceneDefault, { projectId })];
      return tmp(tmp2, obj2);
    }
  };
  const first = navigation(obj2.useState(() => {
    if (null == projectId) {
      const items = [{ name: conjureStandaloneScenes.ConjureScreenScenes.PROJECTS }];
      const obj2 = { name: conjureStandaloneScenes.ConjureScreenScenes.PROJECTS };
      return items;
    } else {
      const tmp11 = closure_5;
      if (tmp11) {
        entryPoint = undefined;
        if (memo != null) {
          entryPoint = memo.entryPoint;
        }
        let result = entryPoint;
      } else {
        const obj = conjureStandaloneScenes;
        result = obj.takeServerProjectEntryPoint(guildId, tmp);
      }
      const obj3 = { name: conjureStandaloneScenes.ConjureScreenScenes.CHAT, params: obj4 };
      const items1 = [obj3];
      return items1;
    }
  }), 1)[0];
  const obj6 = { value: inline, children: memo(Navigator, obj7) };
  const Provider = tmp2(tmp3[28]).ConjureBuilderInlineContext.Provider;
  obj7 = { screens: { [PROJECTS]: obj3, [tmp2(tmp3[19]).ConjureScreenScenes.CHAT]: obj4, [tmp2(tmp3[19]).ConjureScreenScenes.DEBUG]: obj5 }, initialRouteStack: first, headerBackTitle: intl.string(tmp5(tmp3[13]).uk6jhJ) };
  Navigator = tmp2(tmp3[29]).Navigator;
  intl = tmp2(tmp3[12]).intl;
  return memo(Provider, obj6);
};
