// Module ID: 11724
// Function ID: 91022
// Name: onCreateGuild
// Dependencies: []
// Exports: default

// Module 11724 (onCreateGuild)
function onCreateGuild() {
  return _onCreateGuild(...arguments);
}
function _onCreateGuild() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _onCreateGuild = obj;
  return obj(...arguments);
}
function _onCreateServer() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _onCreateServer = obj;
  return obj(...arguments);
}
function getScreens() {
  let obj = {};
  obj = {
    impressionName: arg1(dependencyMap[14]).ImpressionNames.GUILD_ADD_LANDING,
    impressionProperties: obj,
    fullscreen: true,
    headerTitle() {
      return null;
    }
  };
  let obj2 = arg1(dependencyMap[15]);
  obj.headerLeft = obj2.getHeaderCloseButton(() => {
    callback(closure_2[16]).trackNUFStep(constants2.STEP_GUILD_TEMPLATE, constants2.STEP_FRIEND_LIST, { skip: true });
    const obj = callback(closure_2[16]);
    callback(closure_2[17]).transitionTo(fallbackRoute.fallbackRoute);
    const obj2 = callback(closure_2[17]);
    const result = callback2(closure_2[11]).closeCreateGuildOnboardingModal();
  });
  obj.render = function render() {
    return callback3(callback2(closure_2[18]), { trigger: constants.NUF });
  };
  obj[constants.GUILD_TEMPLATES] = obj;
  obj = {
    impressionName: arg1(dependencyMap[14]).ImpressionNames.GUILD_ADD_INTENT_SELECTION,
    impressionProperties: obj,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(guildTemplate) {
      return callback3(callback2(closure_2[19]), { guildTemplate: guildTemplate.guildTemplate, trigger: constants.NUF });
    }
  };
  obj[constants.CREATION_INTENT] = obj;
  obj[constants.CREATE_SERVER] = {
    impressionName: arg1(dependencyMap[14]).ImpressionNames.GUILD_ADD_CUSTOMIZE,
    impressionProperties: obj,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(arg0, arg1) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["onCreate"] = function onCreate(guild) {
        return function onCreateServer(arg0, id, guildTemplate) {
          return callback(...arguments);
        }(arg1, guild.guild.id, guild.guildTemplate);
      };
      const intl = arg0(closure_2[21]).intl;
      obj["customTitle"] = intl.string(arg0(closure_2[21]).t.5HZu07);
      return callback3(arg1(closure_2[20]), obj);
    }
  };
  obj2 = {
    impressionName: arg1(dependencyMap[14]).ImpressionNames.GUILD_ADD_JOIN,
    impressionProperties: obj,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render() {
      const obj = { location: "Onboarding Join Guild Modal", onClose: callback2(closure_2[11]).closeCreateGuildModal };
      return callback3(callback2(closure_2[22]), obj);
    }
  };
  obj[constants.JOIN_SERVER] = obj2;
  const obj1 = {
    impressionName: arg1(dependencyMap[14]).ImpressionNames.GUILD_ADD_CUSTOMIZE,
    impressionProperties: obj,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(arg0, arg1) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["onCreate"] = function onCreate(guild) {
        return function onCreateServer(arg0, id, guildTemplate) {
          return callback(...arguments);
        }(arg1, guild.guild.id, guild.guildTemplate);
      };
      const intl = arg0(closure_2[21]).intl;
      obj["customTitle"] = intl.string(arg0(closure_2[21]).t.5HZu07);
      return callback3(arg1(closure_2[20]), obj);
    }
  };
  obj[constants.ACCEPT_INVITE] = {
    impressionName: arg1(dependencyMap[14]).ImpressionNames.GUILD_ADD_ACCEPT_INVITE,
    impressionProperties: obj,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    headerLeft() {
      return null;
    },
    render(code) {
      const obj = { code: code.code, onPressClose: callback2(closure_2[11]).closeCreateGuildModal };
      return callback3(callback2(closure_2[23]), obj);
    }
  };
  const obj3 = {
    impressionName: arg1(dependencyMap[14]).ImpressionNames.GUILD_ADD_ACCEPT_INVITE,
    impressionProperties: obj,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    headerLeft() {
      return null;
    },
    render(code) {
      const obj = { code: code.code, onPressClose: callback2(closure_2[11]).closeCreateGuildModal };
      return callback3(callback2(closure_2[23]), obj);
    }
  };
  obj[constants.CHANNEL_PROMPT] = {
    impressionName: arg1(dependencyMap[14]).ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
    impressionProperties: obj,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(guildId) {
      guildId = guildId.guildId;
      const obj = {
        position: true,
        left: true,
        onCancel: closure_9,
        onSuccess() {
          return callback(guildId);
        },
        guildId
      };
      const intl = guildId(closure_2[21]).intl;
      obj.buttonText = intl.string(guildId(closure_2[21]).t.uHXB+F);
      return callback3(callback2(closure_2[24]), obj);
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
      return callback3(callback2(closure_2[25]), { isNestedNavigator: true });
    }
  };
  return obj;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const Keyboard = arg1(dependencyMap[2]).Keyboard;
let closure_6 = importDefault(dependencyMap[3]);
({ AnalyticEvents: closure_7, AnalyticsSections: closure_8, NOOP: closure_9 } = arg1(dependencyMap[4]));
const GuildTemplateId = arg1(dependencyMap[5]).GuildTemplateId;
const tmp2 = arg1(dependencyMap[4]);
({ CreateGuildModalStates: closure_11, GuildTemplateTriggers: closure_12, NUXGuildTemplatesAnalytics: closure_13 } = arg1(dependencyMap[6]));
const jsx = arg1(dependencyMap[7]).jsx;
const obj = { impression_group: arg1(dependencyMap[14]).ImpressionGroups.GUILD_ADD_FLOW };
const tmp3 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/nuf/native/components/NUFGuildTemplates.tsx");

export default function NUFGuildTemplates() {
  const obj = { screens: React.useMemo(() => callback(), []), onWillFocus: Keyboard.dismiss };
  const intl = arg1(dependencyMap[21]).intl;
  obj.headerBackTitle = intl.string(arg1(dependencyMap[21]).t.13/7kX);
  obj.initialRouteName = constants.GUILD_TEMPLATES;
  return jsx(arg1(dependencyMap[26]).Navigator, obj);
};
