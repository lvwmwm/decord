// Module ID: 12856
// Function ID: 12857
// Name: CreateGuildModal
// Dependencies: [19, 17, 2100, 7221, 1078, 21, 12637, 10061, 1245, 5739, 12855, 1253, 5839, 12857, 12859, 12481, 1119, 12860, 8112, 12862, 12863, 12876, 558, 568, 8151, 7246, 2]

// Module 12856 (CreateGuildModal)
import c from "c" /* 568 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5739 */;
import CreateGuildModalActionCreatorsDefault from "CreateGuildModalActionCreators" /* 12855 */;
import components_JoinServerDefault from "components/JoinServer" /* 12862 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 2100 */;

require = fn;
function getScreens(arg0, initialRoute, arg2) {
  _require = initialRoute;
  importDefault = arg2;
  impressionProperties = {};
  let obj2 = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_ADD_LANDING,
    impressionProperties,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    headerLeft: require("NavigatorHeader").getHeaderCloseButton(CreateGuildModalActionCreatorsDefault.closeCreateGuildModal),
    render() {
      return jsx(closure_1(12857), { trigger: constants2.IN_APP });
    }
  };
  impressionProperties[constants.GUILD_TEMPLATES] = obj2;
  let obj3 = require("NavigatorHeader");
  let tmp2 = _require;
  impressionProperties[constants.CREATION_INTENT] = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_ADD_INTENT_SELECTION,
    impressionProperties,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(guildTemplate) {
      return jsx(closure_1(12859), { guildTemplate: guildTemplate.guildTemplate, trigger: constants2.IN_APP });
    }
  };
  let obj4 = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_ADD_INTENT_SELECTION,
    impressionProperties,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(guildTemplate) {
      return jsx(closure_1(12859), { guildTemplate: guildTemplate.guildTemplate, trigger: constants2.IN_APP });
    }
  };
  impressionProperties[constants.CREATE_SERVER] = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_ADD_CUSTOMIZE,
    impressionProperties,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(arg0, arg1) {
      initialRoute = arg1;
      const obj = {};
      const merged = Object.assign(arg0);
      obj.onCreate = function onCreate(guild) {
        const id = guild.guild.id;
        const guildProgress = closure_0(12637).createGuildProgress(id);
        defaultChannel = defaultChannel.getDefaultChannel(id);
        if (null != defaultChannel) {
          closure_1(10061).init(id, defaultChannel.id, { location: "Guild Create Flow" });
          const obj3 = { guildId: id };
          closure_0.push(constants.GUILD_INVITE, obj3);
          const obj2 = closure_1(10061);
          const obj7 = { flow_type: constants4.GUILD_CREATE_MODAL, from_step: null, to_step: null };
          ({ CREATE_SERVER: obj5.from_step, GUILD_INVITE: obj5.to_step } = constants);
          closure_1(1245).track(constants3.USER_FLOW_TRANSITION, obj7);
          const obj4 = closure_1(1245);
        }
      };
      const intl = initialRoute(1119).intl;
      obj.customTitle = intl.string(initialRoute(1119).t["5HZu07"]);
      return closure_10(closure_1(12481), obj);
    }
  };
  const obj5 = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_ADD_CUSTOMIZE,
    impressionProperties,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(arg0, arg1) {
      initialRoute = arg1;
      const obj = {};
      const merged = Object.assign(arg0);
      obj.onCreate = function onCreate(guild) {
        const id = guild.guild.id;
        const guildProgress = closure_0(12637).createGuildProgress(id);
        defaultChannel = defaultChannel.getDefaultChannel(id);
        if (null != defaultChannel) {
          closure_1(10061).init(id, defaultChannel.id, { location: "Guild Create Flow" });
          const obj3 = { guildId: id };
          closure_0.push(constants.GUILD_INVITE, obj3);
          const obj2 = closure_1(10061);
          const obj7 = { flow_type: constants4.GUILD_CREATE_MODAL, from_step: null, to_step: null };
          ({ CREATE_SERVER: obj5.from_step, GUILD_INVITE: obj5.to_step } = constants);
          closure_1(1245).track(constants3.USER_FLOW_TRANSITION, obj7);
          const obj4 = closure_1(1245);
        }
      };
      const intl = initialRoute(1119).intl;
      obj.customTitle = intl.string(initialRoute(1119).t["5HZu07"]);
      return closure_10(closure_1(12481), obj);
    }
  };
  impressionProperties[constants.GUILD_INVITE] = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_ADD_GUILD_INVITE,
    impressionProperties,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(guildId) {
      guildId = guildId.guildId;
      return jsx(closure_1(12860), {
        closeOnEditInviteLink: false,
        onClose() {
          const result = GuildActionCreatorsDefault.transitionToGuildSync(guildId);
          const tmp = guildId;
          const tmp2 = closure_1;
          const result1 = CreateGuildModalActionCreatorsDefault.closeCreateGuildModal();
          if (null != closure_1) {
            tmp2(tmp);
          }
        }
      });
    }
  };
  const obj6 = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_ADD_GUILD_INVITE,
    impressionProperties,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(guildId) {
      guildId = guildId.guildId;
      return jsx(closure_1(12860), {
        closeOnEditInviteLink: false,
        onClose() {
          const result = GuildActionCreatorsDefault.transitionToGuildSync(guildId);
          const tmp = guildId;
          const tmp2 = closure_1;
          const result1 = CreateGuildModalActionCreatorsDefault.closeCreateGuildModal();
          if (null != closure_1) {
            tmp2(tmp);
          }
        }
      });
    }
  };
  impressionProperties[constants.JOIN_SERVER] = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_ADD_JOIN,
    impressionProperties,
    fullscreen: true,
    headerTitle: arg0 ? (() => {
      const obj = { title: null };
      const intl = initialRoute(1119).intl;
      obj.title = intl.string(initialRoute(1119).t.jlfuFW);
      return jsx(initialRoute(8112).GenericHeaderTitle, { title: null });
    }) : (() => null),
    render(arg0) {
      const obj = { initialRoute };
      const merged = Object.assign(arg0);
      obj.onClose = CreateGuildModalActionCreatorsDefault.closeCreateGuildModal;
      return jsx(components_JoinServerDefault, { initialRoute });
    }
  };
  let obj7 = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_ADD_JOIN,
    impressionProperties,
    fullscreen: true,
    headerTitle: arg0 ? (() => {
      const obj = { title: null };
      const intl = initialRoute(1119).intl;
      obj.title = intl.string(initialRoute(1119).t.jlfuFW);
      return jsx(initialRoute(8112).GenericHeaderTitle, { title: null });
    }) : (() => null),
    render(arg0) {
      const obj = { initialRoute };
      const merged = Object.assign(arg0);
      obj.onClose = CreateGuildModalActionCreatorsDefault.closeCreateGuildModal;
      return jsx(components_JoinServerDefault, { initialRoute });
    }
  };
  impressionProperties[constants.ACCEPT_INVITE] = {
    impressionName: tmp2(1253).ImpressionNames.GUILD_ADD_ACCEPT_INVITE,
    impressionProperties,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    headerLeft() {
      return null;
    },
    render(code) {
      const obj = { code: code.code, onPressClose: closure_1(12855).closeCreateGuildModal };
      return jsx(closure_1(12863), { code: code.code, onPressClose: closure_1(12855).closeCreateGuildModal });
    }
  };
  const obj9 = {
    impressionName: "Array",
    impressionProperties,
    fullscreen: true,
    ignoreKeyboard: null,
    headerTitle() {
      return null;
    },
    headerLeft() {
      return null;
    },
    render() {
      return jsx(closure_1(12876), { isNestedNavigator: true });
    }
  };
  impressionProperties[constants.JOIN_STUDENT_HUB] = obj9;
  return impressionProperties;
}
const Keyboard = fn(17).Keyboard;
const CreateGuildConstants = fn(7221);
({ CreateGuildModalStates: metroRequire, GuildTemplateTriggers: closure_7 } = CreateGuildConstants);
const Constants = fn(1078);
({ AnalyticEvents: closure_8, AnalyticsSections: closure_9 } = Constants);
const jsx = fn(21).jsx;
let impressionProperties = { impression_group: fn(1253).ImpressionGroups.GUILD_ADD_FLOW };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/create_guild/native/components/CreateGuildModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(11);
  ({ channel, initialState, onSuccess } = arg0);
  let items = constants;
  if (initialState !== constants.JOIN_SERVER) {
    if (null == channel) {
      const obj2 = { name: items.GUILD_TEMPLATES };
      items = [obj2];
      let items1 = items;
    } else {
      const obj3 = { name: items.GUILD_INVITE, param: null };
      const obj4 = { channel, onClose: CreateGuildModalActionCreatorsDefault.closeCreateGuildModal };
      obj3.param = obj4;
      items1 = [obj3];
    }
    cResult[1] = channel;
    cResult[2] = items1;
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { name: items.JOIN_SERVER, param: null };
      const obj6 = { initialRoute: items.JOIN_SERVER };
      obj5.param = obj6;
      const items2 = [obj5];
      cResult[0] = items2;
      let first = items2;
    } else {
      first = cResult[0];
    }
    const isWindowSmall = tmp(8151).useIsWindowSmall();
    if (cResult[3] === initialState) {
      if (cResult[4] === isWindowSmall) {
        if (cResult[5] === onSuccess) {
          let tmp11 = cResult[6];
        }
        const _Symbol2 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1119).intl;
          const stringResult = intl.string(tmp(1119).t["13/7kX"]);
          cResult[7] = stringResult;
          let tmp15 = stringResult;
        } else {
          tmp15 = cResult[7];
        }
        if (cResult[8] === first) {
          if (cResult[9] === tmp11) {
            let tmp17 = cResult[10];
          }
          return tmp17;
        }
        const obj7 = { screens: tmp11, initialRouteStack: first, headerBackTitle: tmp15, onWillFocus: Keyboard.dismiss };
        const tmp20 = jsx(tmp(7246).Navigator, { screens: tmp11, initialRouteStack: first, headerBackTitle: tmp15, onWillFocus: Keyboard.dismiss });
        cResult[8] = first;
        cResult[9] = tmp11;
        cResult[10] = tmp20;
        tmp17 = tmp20;
      }
    }
    const tmp13 = getScreens(isWindowSmall, initialState, onSuccess);
    cResult[3] = initialState;
    cResult[4] = isWindowSmall;
    cResult[5] = onSuccess;
    cResult[6] = tmp13;
    tmp11 = tmp13;
    const tmpResult = tmp(8151);
  }
}) : ((channel) => {
  channel = channel.channel;
  const initialState = channel.initialState;
  const onSuccess = channel.onSuccess;
  let isWindowSmall;
  let items = [channel, initialState];
  const memo = isWindowSmall.useMemo(() => {
    if (initialState === constants.JOIN_SERVER) {
      const obj2 = { name: tmp.JOIN_SERVER, param: null };
      const obj3 = { initialRoute: tmp.JOIN_SERVER };
      obj2.param = obj3;
      const items = [obj2];
      let items2 = items;
    } else if (null == channel) {
      const obj4 = { name: tmp.GUILD_TEMPLATES };
      const items1 = [obj4];
      items2 = items1;
    } else {
      const obj = { name: tmp.GUILD_INVITE, param: null };
      const obj5 = { channel: tmp2, onClose: CreateGuildModalActionCreatorsDefault.closeCreateGuildModal };
      obj.param = obj5;
      items2 = [obj];
    }
    return items2;
  }, items);
  isWindowSmall = channel(onSuccess[24]).useIsWindowSmall();
  let obj2 = { screens: null, initialRouteStack: memo, headerBackTitle: null, onWillFocus: null };
  let items1 = [initialState, isWindowSmall, onSuccess];
  obj2.screens = isWindowSmall.useMemo(() => getScreens(isWindowSmall, initialState, onSuccess), items1);
  const intl = channel(onSuccess[16]).intl;
  obj2.headerBackTitle = intl.string(channel(onSuccess[16]).t["13/7kX"]);
  obj2.onWillFocus = Keyboard.dismiss;
  return jsx(channel(onSuccess[25]).Navigator, { screens: null, initialRouteStack: memo, headerBackTitle: null, onWillFocus: null });
});
