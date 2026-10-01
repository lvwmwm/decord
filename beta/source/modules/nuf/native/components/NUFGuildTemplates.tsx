// Module ID: 12203
// Function ID: 12204
// Name: NUFGuildTemplates
// Dependencies: [5, 19, 17, 4659, 1074, 12204, 6399, 21, 5832, 11967, 10787, 12205, 12260, 1241, 1249, 5936, 12180, 1101, 12207, 12222, 11816, 1115, 12229, 12230, 12261, 12241, 6421, 2]
// Exports: default

// Module 12203 (NUFGuildTemplates)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5832 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import Navigator2 from "Navigator" /* 6421 */;
import create_guild_CreateGuildConstants from "create_guild/CreateGuildConstants" /* 12204 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import DefaultRouteStore from "DefaultRouteStore" /* 4659 */;
import Constants from "Constants" /* 1074 */;
import CreateGuildConstants from "CreateGuildConstants" /* 6399 */;
import size from "module_2" /* 2 */;

let c9;
let closure_12;
let map1;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
function onCreateGuild() {
  return obj(...arguments);
}
let obj = function _onCreateGuild() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj2;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            c3 = 1;
            c4 = 1;
            const obj5 = { value: obj2.transitionToGuildSync(closure_0), done: false };
            obj2 = GuildActionCreatorsDefault;
            return obj5;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const obj6 = closure_130_0(closure_130_2[9]);
          const guildProgress = obj6.createGuildProgress(closure_0);
          closure_130_1(closure_130_2[10])();
          const obj7 = closure_130_1(closure_130_2[11]);
          const result = obj7.closeCreateGuildOnboardingModal();
          const obj8 = closure_130_0(closure_130_2[12]);
          const result1 = obj8.showInstantInviteModal(closure_0);
          const obj10 = { flow_type: closure_130_8.GUILD_CREATE_MODAL, from_step: closure_130_11.CREATE_SERVER, to_step: "modal_closed" };
          const obj9 = closure_130_1(closure_130_2[13]);
          obj9.track(closure_130_7.USER_FLOW_TRANSITION, obj10);
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp8) {
        c4 = 3;
        throw tmp8;
      }
    }
  });
  return obj(...arguments);
};
obj = function _onCreateServer() {
  let constants2;
  obj = _asyncToGenerator(async (arg0, guildId, arg2) => {
    let closure_0 = arg0;
    const id = arg2;
    let c4 = 0;
    let c3 = 0;
    return (async (arg0, value, arg2) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              return { value, done: true };
            } else {
              const arr = closure_0;
              if (id.id !== constants.CREATE) {
                c4 = 1;
                c3 = 1;
                const obj4 = { value: onCreateGuild(guildId), done: false };
                return obj4;
              } else {
                const obj5 = { guildId };
                arr.push(constants2.CHANNEL_PROMPT, obj5);
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            return { value, done: true };
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp7) {
          c3 = 3;
          throw tmp7;
        }
      }
    })();
  });
  return obj(...arguments);
};
const Keyboard = react_native.Keyboard;
({ AnalyticEvents: metroImportDefault, AnalyticsSections: metroImportAll, NOOP: c9 } = Constants);
const GuildTemplateId = create_guild_CreateGuildConstants.GuildTemplateId;
({ CreateGuildModalStates: unpackModuleId, GuildTemplateTriggers: closure_12, NUXGuildTemplatesAnalytics: map1 } = CreateGuildConstants);
const jsx = Fragment.jsx;
obj = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.GUILD_ADD_FLOW };
let result = size.fileFinishedImporting("modules/nuf/native/components/NUFGuildTemplates.tsx");

export default function NUFGuildTemplates() {
  let impressionProperties;
  const Navigator = Navigator2.Navigator;
  let intl = intl2.intl;
  return <Navigator screens={react.useMemo(() => {
    let constants2;
    let fallbackRoute;
    let obj3;
    let onCancel;
    function headerTitle() {
      return null;
    }
    function render(guildTemplate) {
      obj = { guildTemplate: guildTemplate.guildTemplate, trigger: constants.NUF };
      return closure_1_14(closure_1_1(closure_1_2[19]), obj);
    }
    const headerTitle2 = function headerTitle() {
      return null;
    };
    const render2 = function render(arg0, arg1) {
      let intl;
      const guildTemplate = arg0;
      let closure_1 = arg1;
      obj = {
        onCreate(guild) {
          function onCreateServer() {
            return closure_1_17(...arguments);
          }
          return onCreateServer(closure_1, guild.guild.id, guildTemplate.guildTemplate);
        },
        customTitle: intl.string(guildTemplate(closure_2[21]).t["5HZu07"])
      };
      const tmp = closure_1(closure_2[20]);
      const merged = Object.assign(arg0);
      intl = guildTemplate(closure_2[21]).intl;
      return closure_14(tmp, obj);
    };
    const headerTitle3 = function headerTitle() {
      return null;
    };
    const render3 = function render() {
      obj = { location: "Onboarding Join Guild Modal", onClose: closure_1_1(closure_1_2[11]).closeCreateGuildModal };
      const tmp = closure_1_1(closure_1_2[22]);
      return closure_1_14(tmp, obj);
    };
    const headerTitle4 = function headerTitle() {
      return null;
    };
    function headerLeft() {
      return null;
    }
    const render4 = function render(code) {
      obj = { code: code.code, onPressClose: closure_1_1(closure_1_2[11]).closeCreateGuildModal };
      const tmp = closure_1_1(closure_1_2[23]);
      return closure_1_14(tmp, obj);
    };
    const headerTitle5 = function headerTitle() {
      return null;
    };
    const render5 = function render(guildId) {
      let intl;
      guildId = guildId.guildId;
      obj = {
        hasSkip: true,
        hasBack: false,
        onCancel,
        onSuccess() {
          return closure_2_15(guildId);
        },
        guildId,
        buttonText: intl.string(guildId(closure_2[21]).t["uHXB+F"])
      };
      const tmp = closure_1(closure_2[24]);
      intl = guildId(closure_2[21]).intl;
      return closure_14(tmp, obj);
    };
    obj = {};
    let obj2 = {
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_LANDING,
      impressionProperties,
      fullscreen: true,
      headerTitle() {
        return null;
      },
      headerLeft: obj3.getHeaderCloseButton(() => {
        obj = closure_1_0(closure_1_2[16]);
        obj.trackNUFStep(constants2.STEP_GUILD_TEMPLATE, constants2.STEP_FRIEND_LIST, { skip: true });
        const obj2 = closure_1_0(closure_1_2[17]);
        obj2.transitionTo(fallbackRoute.fallbackRoute);
        const obj3 = closure_1_1(closure_1_2[11]);
        const result = obj3.closeCreateGuildOnboardingModal();
      }),
      render() {
        obj = { trigger: constants.NUF };
        return closure_1_14(closure_1_1(closure_1_2[18]), obj);
      }
    };
    const GUILD_TEMPLATES = constants.GUILD_TEMPLATES;
    obj3 = NavigatorHeader;
    obj[GUILD_TEMPLATES] = obj2;
    obj[constants.CREATION_INTENT] = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_INTENT_SELECTION, impressionProperties, fullscreen: true, headerTitle, render };
    ({ impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_INTENT_SELECTION, impressionProperties, fullscreen: true, headerTitle, render });
    obj[constants.CREATE_SERVER] = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_CUSTOMIZE, impressionProperties, fullscreen: true, headerTitle: headerTitle2, render: render2 };
    ({ impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_CUSTOMIZE, impressionProperties, fullscreen: true, headerTitle: headerTitle2, render: render2 });
    obj[constants.JOIN_SERVER] = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_JOIN, impressionProperties, fullscreen: true, headerTitle: headerTitle3, render: render3 };
    ({ impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_JOIN, impressionProperties, fullscreen: true, headerTitle: headerTitle3, render: render3 });
    obj[constants.ACCEPT_INVITE] = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_ACCEPT_INVITE, impressionProperties, fullscreen: true, headerTitle: headerTitle4, headerLeft, render: render4 };
    ({ impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_ACCEPT_INVITE, impressionProperties, fullscreen: true, headerTitle: headerTitle4, headerLeft, render: render4 });
    obj[constants.CHANNEL_PROMPT] = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT, impressionProperties, fullscreen: true, headerTitle: headerTitle5, render: render5 };
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
        return closure_1_14(closure_1_1(closure_1_2[25]), { isNestedNavigator: true });
      }
    };
    obj[constants.JOIN_STUDENT_HUB] = obj9;
    ({ impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT, impressionProperties, fullscreen: true, headerTitle: headerTitle5, render: render5 });
    return obj;
  }, [])} onWillFocus={Keyboard.dismiss} headerBackTitle={intl.string(intl2.t["13/7kX"])} initialRouteName={unpackModuleId.GUILD_TEMPLATES} />;
};
