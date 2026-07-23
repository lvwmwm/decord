// Module ID: 11735
// Function ID: 91096
// Name: onCreateGuild
// Dependencies: [5, 31, 27, 3951, 653, 11736, 9227, 33, 5048, 11507, 10886, 11737, 11779, 675, 480, 5087, 11712, 1198, 11739, 11741, 10063, 1212, 11749, 11750, 11780, 11761, 5519, 2]
// Exports: default

// Module 11735 (onCreateGuild)
import GuildTemplateId from "GuildTemplateId";
import result from "result";
import { Keyboard } from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import { GuildTemplateId } from "GuildTemplateId";
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics";
import { jsx } from "jsxProd";

let closure_11;
let closure_12;
let closure_13;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function onCreateGuild() {
  return _onCreateGuild(...arguments);
}
function _onCreateGuild() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _onCreateServer() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function getScreens() {
  let obj = {};
  obj = {
    impressionName: require(480) /* isThrottled */.ImpressionNames.GUILD_ADD_LANDING,
    impressionProperties: obj,
    fullscreen: true,
    headerTitle() {
      return null;
    }
  };
  let obj2 = require(5087) /* HeaderBackImage */;
  obj.headerLeft = obj2.getHeaderCloseButton(() => {
    outer1_0(outer1_2[16]).trackNUFStep(outer1_13.STEP_GUILD_TEMPLATE, outer1_13.STEP_FRIEND_LIST, { skip: true });
    const obj = outer1_0(outer1_2[16]);
    outer1_0(outer1_2[17]).transitionTo(outer1_6.fallbackRoute);
    const obj2 = outer1_0(outer1_2[17]);
    const result = outer1_1(outer1_2[11]).closeCreateGuildOnboardingModal();
  });
  obj.render = function render() {
    return outer1_14(outer1_1(outer1_2[18]), { trigger: outer1_12.NUF });
  };
  obj[constants.GUILD_TEMPLATES] = obj;
  obj = {
    impressionName: require(480) /* isThrottled */.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
    impressionProperties: obj,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(guildTemplate) {
      return outer1_14(outer1_1(outer1_2[19]), { guildTemplate: guildTemplate.guildTemplate, trigger: outer1_12.NUF });
    }
  };
  obj[constants.CREATION_INTENT] = obj;
  obj[constants.CREATE_SERVER] = {
    impressionName: require(480) /* isThrottled */.ImpressionNames.GUILD_ADD_CUSTOMIZE,
    impressionProperties: obj,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(arg0, arg1) {
      let closure_0 = arg0;
      let closure_1 = arg1;
      const obj = {};
      const merged = Object.assign(arg0);
      obj["onCreate"] = function onCreate(guild) {
        return (function onCreateServer(closure_1, id, guildTemplate) {
          return outer3_18(...arguments);
        })(closure_1, guild.guild.id, guildTemplate.guildTemplate);
      };
      const intl = outer1_0(outer1_2[21]).intl;
      obj["customTitle"] = intl.string(outer1_0(outer1_2[21]).t["5HZu07"]);
      return outer1_14(outer1_1(outer1_2[20]), obj);
    }
  };
  obj2 = {
    impressionName: require(480) /* isThrottled */.ImpressionNames.GUILD_ADD_JOIN,
    impressionProperties: obj,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render() {
      const obj = { location: "Onboarding Join Guild Modal", onClose: outer1_1(outer1_2[11]).closeCreateGuildModal };
      return outer1_14(outer1_1(outer1_2[22]), obj);
    }
  };
  obj[constants.JOIN_SERVER] = obj2;
  const obj1 = {
    impressionName: require(480) /* isThrottled */.ImpressionNames.GUILD_ADD_CUSTOMIZE,
    impressionProperties: obj,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(arg0, arg1) {
      let closure_0 = arg0;
      let closure_1 = arg1;
      const obj = {};
      const merged = Object.assign(arg0);
      obj["onCreate"] = function onCreate(guild) {
        return (function onCreateServer(closure_1, id, guildTemplate) {
          return outer3_18(...arguments);
        })(closure_1, guild.guild.id, guildTemplate.guildTemplate);
      };
      const intl = outer1_0(outer1_2[21]).intl;
      obj["customTitle"] = intl.string(outer1_0(outer1_2[21]).t["5HZu07"]);
      return outer1_14(outer1_1(outer1_2[20]), obj);
    }
  };
  obj[constants.ACCEPT_INVITE] = {
    impressionName: require(480) /* isThrottled */.ImpressionNames.GUILD_ADD_ACCEPT_INVITE,
    impressionProperties: obj,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    headerLeft() {
      return null;
    },
    render(code) {
      const obj = { code: code.code, onPressClose: outer1_1(outer1_2[11]).closeCreateGuildModal };
      return outer1_14(outer1_1(outer1_2[23]), obj);
    }
  };
  const obj3 = {
    impressionName: require(480) /* isThrottled */.ImpressionNames.GUILD_ADD_ACCEPT_INVITE,
    impressionProperties: obj,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    headerLeft() {
      return null;
    },
    render(code) {
      const obj = { code: code.code, onPressClose: outer1_1(outer1_2[11]).closeCreateGuildModal };
      return outer1_14(outer1_1(outer1_2[23]), obj);
    }
  };
  obj[constants.CHANNEL_PROMPT] = {
    impressionName: require(480) /* isThrottled */.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
    impressionProperties: obj,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(guildId) {
      guildId = guildId.guildId;
      const obj = {
        hasSkip: true,
        hasBack: false,
        onCancel: outer1_9,
        onSuccess() {
          return outer2_16(guildId);
        },
        guildId
      };
      const intl = outer1_0(outer1_2[21]).intl;
      obj.buttonText = intl.string(outer1_0(outer1_2[21]).t["uHXB+F"]);
      return outer1_14(outer1_1(outer1_2[24]), obj);
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
      return outer1_14(outer1_1(outer1_2[25]), { isNestedNavigator: true });
    }
  };
  return obj;
}
({ AnalyticEvents: closure_7, AnalyticsSections: closure_8, NOOP: closure_9 } = ME);
({ CreateGuildModalStates: closure_11, GuildTemplateTriggers: closure_12, NUXGuildTemplatesAnalytics: closure_13 } = NUXGuildTemplatesAnalytics);
let obj = { impression_group: require("isThrottled").ImpressionGroups.GUILD_ADD_FLOW };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/nuf/native/components/NUFGuildTemplates.tsx");

export default function NUFGuildTemplates() {
  const obj = { screens: React.useMemo(() => outer1_19(), []), onWillFocus: Keyboard.dismiss };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.headerBackTitle = intl.string(require(1212) /* getSystemLocale */.t["13/7kX"]);
  obj.initialRouteName = constants.GUILD_TEMPLATES;
  return jsx(require(5519) /* NavigationStack */.Navigator, { screens: React.useMemo(() => outer1_19(), []), onWillFocus: Keyboard.dismiss });
};
