// Module ID: 11727
// Function ID: 91073
// Name: getScreens
// Dependencies: []
// Exports: default

// Module 11727 (getScreens)
function getScreens(arg0, arg1, arg2) {
  const importDefault = arg2;
  let obj = {};
  obj = {
    impressionName: arg1(dependencyMap[11]).ImpressionNames.GUILD_ADD_LANDING,
    impressionProperties: obj,
    fullscreen: true,
    headerTitle() {
      return null;
    }
  };
  let obj2 = arg1(dependencyMap[12]);
  obj.headerLeft = obj2.getHeaderCloseButton(importDefault(dependencyMap[10]).closeCreateGuildModal);
  obj.render = function render() {
    return callback(arg2(closure_2[13]), { trigger: constants.IN_APP });
  };
  obj[constants.GUILD_TEMPLATES] = obj;
  obj = {
    impressionName: arg1(dependencyMap[11]).ImpressionNames.GUILD_ADD_INTENT_SELECTION,
    impressionProperties: obj,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(guildTemplate) {
      return callback(arg2(closure_2[14]), { guildTemplate: guildTemplate.guildTemplate, trigger: constants.IN_APP });
    }
  };
  obj[constants.CREATION_INTENT] = obj;
  obj[constants.CREATE_SERVER] = {
    impressionName: arg1(dependencyMap[11]).ImpressionNames.GUILD_ADD_CUSTOMIZE,
    impressionProperties: obj,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(arg0, arg1) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["onCreate"] = function onCreate(guild) {
        const id = guild.guild.id;
        let arr = arg1;
        let obj = arg1(closure_2[6]);
        const guildProgress = obj.createGuildProgress(id);
        const defaultChannel = defaultChannel.getDefaultChannel(id);
        if (null != defaultChannel) {
          let obj1 = callback(closure_2[7]);
          obj = { location: "Guild Create Flow" };
          obj1.init(id, defaultChannel.id, obj);
          obj = { guildId: id };
          arr = arr.push(constants.GUILD_INVITE, obj);
          obj1 = { flow_type: constants3.GUILD_CREATE_MODAL, from_step: constants.CREATE_SERVER, to_step: constants.GUILD_INVITE };
          callback(closure_2[8]).track(constants2.USER_FLOW_TRANSITION, obj1);
          const obj5 = callback(closure_2[8]);
        }
      };
      const intl = arg1(closure_2[16]).intl;
      obj["customTitle"] = intl.string(arg1(closure_2[16]).t.5HZu07);
      return callback(arg2(closure_2[15]), obj);
    }
  };
  obj2 = {
    impressionName: arg1(dependencyMap[11]).ImpressionNames.GUILD_ADD_GUILD_INVITE,
    impressionProperties: obj,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(guildId) {
      const arg1 = guildId.guildId;
      return callback(arg2(closure_2[17]), {
        closeOnEditInviteLink: false,
        onClose() {
          const result = callback(closure_2[9]).transitionToGuildSync(guildId);
          const obj = callback(closure_2[9]);
          const tmp = guildId;
          const tmp2 = callback;
          const result1 = callback(closure_2[10]).closeCreateGuildModal();
          if (null != callback) {
            tmp2(tmp);
          }
        }
      });
    }
  };
  obj[constants.GUILD_INVITE] = obj2;
  const obj1 = {
    impressionName: arg1(dependencyMap[11]).ImpressionNames.GUILD_ADD_CUSTOMIZE,
    impressionProperties: obj,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(arg0, arg1) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["onCreate"] = function onCreate(guild) {
        const id = guild.guild.id;
        let arr = arg1;
        let obj = arg1(closure_2[6]);
        const guildProgress = obj.createGuildProgress(id);
        const defaultChannel = defaultChannel.getDefaultChannel(id);
        if (null != defaultChannel) {
          let obj1 = callback(closure_2[7]);
          obj = { location: "Guild Create Flow" };
          obj1.init(id, defaultChannel.id, obj);
          obj = { guildId: id };
          arr = arr.push(constants.GUILD_INVITE, obj);
          obj1 = { flow_type: constants3.GUILD_CREATE_MODAL, from_step: constants.CREATE_SERVER, to_step: constants.GUILD_INVITE };
          callback(closure_2[8]).track(constants2.USER_FLOW_TRANSITION, obj1);
          const obj5 = callback(closure_2[8]);
        }
      };
      const intl = arg1(closure_2[16]).intl;
      obj["customTitle"] = intl.string(arg1(closure_2[16]).t.5HZu07);
      return callback(arg2(closure_2[15]), obj);
    }
  };
  obj[constants.JOIN_SERVER] = {
    impressionName: arg1(dependencyMap[11]).ImpressionNames.GUILD_ADD_JOIN,
    impressionProperties: obj,
    fullscreen: true,
    headerTitle: arg0 ? () => {
      const obj = {};
      const intl = arg1(closure_2[16]).intl;
      obj.title = intl.string(arg1(closure_2[16]).t.jlfuFW);
      return callback(arg1(closure_2[18]).GenericHeaderTitle, obj);
    } : () => null,
    render(arg0) {
      const obj = { initialRoute: arg1 };
      const merged = Object.assign(arg0);
      obj["onClose"] = arg2(closure_2[10]).closeCreateGuildModal;
      return callback(arg2(closure_2[19]), obj);
    }
  };
  const obj3 = {
    impressionName: arg1(dependencyMap[11]).ImpressionNames.GUILD_ADD_JOIN,
    impressionProperties: obj,
    fullscreen: true,
    headerTitle: arg0 ? () => {
      const obj = {};
      const intl = arg1(closure_2[16]).intl;
      obj.title = intl.string(arg1(closure_2[16]).t.jlfuFW);
      return callback(arg1(closure_2[18]).GenericHeaderTitle, obj);
    } : () => null,
    render(arg0) {
      const obj = { initialRoute: arg1 };
      const merged = Object.assign(arg0);
      obj["onClose"] = arg2(closure_2[10]).closeCreateGuildModal;
      return callback(arg2(closure_2[19]), obj);
    }
  };
  obj[constants.ACCEPT_INVITE] = {
    impressionName: arg1(dependencyMap[11]).ImpressionNames.GUILD_ADD_ACCEPT_INVITE,
    impressionProperties: obj,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    headerLeft() {
      return null;
    },
    render(code) {
      const obj = { code: code.code, onPressClose: arg2(closure_2[10]).closeCreateGuildModal };
      return callback(arg2(closure_2[20]), obj);
    }
  };
  obj[constants.JOIN_STUDENT_HUB] = {
    impressionName: undefined,
    impressionProperties: obj,
    fullscreen: true,
    ignoreKeyboard: true,
    headerTitle() {
      return null;
    },
    headerLeft() {
      return null;
    },
    render() {
      return callback(arg2(closure_2[21]), { isNestedNavigator: true });
    }
  };
  return obj;
}
let closure_3 = importAll(dependencyMap[0]);
const Keyboard = arg1(dependencyMap[1]).Keyboard;
let closure_5 = importDefault(dependencyMap[2]);
({ CreateGuildModalStates: closure_6, GuildTemplateTriggers: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ AnalyticEvents: closure_8, AnalyticsSections: closure_9 } = arg1(dependencyMap[4]));
const jsx = arg1(dependencyMap[5]).jsx;
const obj = { impression_group: arg1(dependencyMap[11]).ImpressionGroups.GUILD_ADD_FLOW };
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/create_guild/native/components/CreateGuildModal.tsx");

export default function CreateGuildModal(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const initialState = channel.initialState;
  const importDefault = initialState;
  const onSuccess = channel.onSuccess;
  const dependencyMap = onSuccess;
  const items = [channel, initialState];
  const memo = React.useMemo(() => {
    if (initialState === constants.JOIN_SERVER) {
      let obj = { name: constants.JOIN_SERVER };
      obj = { initialRoute: constants.JOIN_SERVER };
      obj.param = obj;
      const items = [obj];
      let items2 = items;
    } else if (null == channel) {
      const obj1 = { name: constants.GUILD_TEMPLATES };
      const items1 = [obj1];
      items2 = items1;
    } else {
      obj = { name: constants.GUILD_INVITE };
      const obj2 = { channel, onClose: initialState(onSuccess[10]).closeCreateGuildModal };
      obj.param = obj2;
      items2 = [obj];
    }
    return items2;
  }, items);
  let obj = arg1(dependencyMap[22]);
  const isWindowSmall = obj.useIsWindowSmall();
  const React = isWindowSmall;
  obj = {};
  const items1 = [initialState, isWindowSmall, onSuccess];
  obj.screens = React.useMemo(() => callback(isWindowSmall, initialState, onSuccess), items1);
  obj.initialRouteStack = memo;
  const intl = arg1(dependencyMap[16]).intl;
  obj.headerBackTitle = intl.string(arg1(dependencyMap[16]).t.13/7kX);
  obj.onWillFocus = Keyboard.dismiss;
  return jsx(arg1(dependencyMap[23]).Navigator, obj);
};
