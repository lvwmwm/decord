// Module ID: 12206
// Function ID: 12207
// Name: CreateGuildModal
// Dependencies: [19, 17, 4467, 6399, 1074, 21, 11967, 9281, 1241, 5832, 12205, 1249, 5936, 12207, 12222, 11816, 1115, 12227, 7288, 12229, 12230, 12241, 7328, 6421, 2]
// Exports: default

// Module 12206 (CreateGuildModal)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import CreateGuildModalActionCreatorsDefault from "CreateGuildModalActionCreators" /* 12205 */;
import react from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4467 */;
import CreateGuildConstants from "CreateGuildConstants" /* 6399 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

let defaultChannel;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const Keyboard = react_native.Keyboard;
({ CreateGuildModalStates: metroRequire, GuildTemplateTriggers: metroImportDefault } = CreateGuildConstants);
({ AnalyticEvents: metroImportAll, AnalyticsSections: c9 } = Constants);
const jsx = Fragment.jsx;
let impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.GUILD_ADD_FLOW };
let result = size.fileFinishedImporting("modules/create_guild/native/components/CreateGuildModal.tsx");

export default function CreateGuildModal(channel) {
  channel = channel.channel;
  let initialState = channel.initialState;
  const onSuccess = channel.onSuccess;
  let isWindowSmall;
  let items = [channel, initialState];
  const memo = isWindowSmall.useMemo(() => {
    let items2;
    let obj3;
    let obj5;
    if (initialState === metroRequire.JOIN_SERVER) {
      const obj2 = { name: metroRequire.JOIN_SERVER, param: obj3 };
      const items = [obj2];
      items2 = items;
      obj3 = { initialRoute: metroRequire.JOIN_SERVER };
    } else if (null == channel) {
      const items1 = [{ name: metroRequire.GUILD_TEMPLATES }];
      items2 = items1;
      const obj4 = { name: metroRequire.GUILD_TEMPLATES };
    } else {
      const obj = { name: metroRequire.GUILD_INVITE, param: obj5 };
      items2 = [obj];
      obj5 = { channel: tmp2, onClose: CreateGuildModalActionCreatorsDefault.closeCreateGuildModal };
    }
    return items2;
  }, items);
  let obj = channel(onSuccess[22]);
  isWindowSmall = obj.useIsWindowSmall();
  let items1 = [initialState, isWindowSmall, onSuccess];
  const Navigator = channel(onSuccess[23]).Navigator;
  let intl = channel(onSuccess[16]).intl;
  return <Navigator screens={isWindowSmall.useMemo(() => {
    let constants2;
    let constants3;
    let constants4;
    let obj3;
    function headerTitle() {
      return null;
    }
    function render(guildId) {
      guildId = guildId.guildId;
      let obj = {
        closeOnEditInviteLink: false,
        onClose() {
          const obj = onSuccess(closure_3_2[9]);
          const result = obj.transitionToGuildSync(guildId);
          const obj2 = onSuccess(closure_3_2[10]);
          const result1 = obj2.closeCreateGuildModal();
          const tmp = guildId;
          const tmp2 = closure_1;
          if (null != closure_1) {
            tmp2(tmp);
          }
        }
      };
      return closure_1_10(closure_1(closure_1_2[17]), obj);
    }
    const headerTitle2 = function headerTitle() {
      return null;
    };
    function headerLeft() {
      return null;
    }
    const render2 = function render(code) {
      const obj = { code: code.code, onPressClose: onSuccess(closure_1_2[10]).closeCreateGuildModal };
      const tmp = onSuccess(closure_1_2[20]);
      return closure_1_10(tmp, obj);
    };
    impressionProperties = {};
    let tmp = metroRequire;
    let obj2 = {
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_LANDING,
      impressionProperties,
      fullscreen: true,
      headerTitle() {
        return null;
      },
      headerLeft: obj3.getHeaderCloseButton(CreateGuildModalActionCreatorsDefault.closeCreateGuildModal),
      render() {
        const obj = { trigger: constants2.IN_APP };
        return closure_1_10(onSuccess(closure_1_2[13]), obj);
      }
    };
    const GUILD_TEMPLATES = metroRequire.GUILD_TEMPLATES;
    let tmp2 = require;
    obj3 = NavigatorHeader;
    impressionProperties[GUILD_TEMPLATES] = obj2;
    let obj4 = {
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
      impressionProperties,
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(guildTemplate) {
        const obj = { guildTemplate: guildTemplate.guildTemplate, trigger: constants2.IN_APP };
        return closure_1_10(onSuccess(closure_1_2[14]), obj);
      }
    };
    impressionProperties[metroRequire.CREATION_INTENT] = obj4;
    const obj5 = {
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_CUSTOMIZE,
      impressionProperties,
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(arg0, arg1) {
        let closure_0;
        let intl;
        initialState = arg1;
        let obj = {
          onCreate(guild) {
            const id = guild.guild.id;
            const obj = initialState(closure_2_2[6]);
            const guildProgress = obj.createGuildProgress(id);
            defaultChannel = defaultChannel.getDefaultChannel(id);
            const arr = closure_0;
            if (null != defaultChannel) {
              const obj2 = onSuccess(closure_2_2[7]);
              obj2.init(id, defaultChannel.id, { location: "Guild Create Flow" });
              const obj3 = { guildId: id };
              arr.push(constants.GUILD_INVITE, obj3);
              const obj7 = { flow_type: constants4.GUILD_CREATE_MODAL, from_step: null, to_step: null };
              ({ CREATE_SERVER: obj5.from_step, GUILD_INVITE: obj5.to_step } = constants);
              const obj4 = onSuccess(closure_2_2[8]);
              obj4.track(constants3.USER_FLOW_TRANSITION, obj7);
            }
          },
          customTitle: intl.string(initialState(closure_2[16]).t["5HZu07"])
        };
        const tmp = onSuccess(closure_2[15]);
        const merged = Object.assign(arg0);
        intl = initialState(closure_2[16]).intl;
        return closure_10(tmp, obj);
      }
    };
    impressionProperties[metroRequire.CREATE_SERVER] = obj5;
    impressionProperties[metroRequire.GUILD_INVITE] = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_GUILD_INVITE, impressionProperties, fullscreen: true, headerTitle, render };
    ({ impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_GUILD_INVITE, impressionProperties, fullscreen: true, headerTitle, render });
    let obj7 = {
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_JOIN,
      impressionProperties,
      fullscreen: true,
      headerTitle: isWindowSmall ? (() => {
        let intl;
        const obj = { title: intl.string(initialState(onSuccess[16]).t.jlfuFW) };
        const GenericHeaderTitle = initialState(onSuccess[18]).GenericHeaderTitle;
        intl = initialState(onSuccess[16]).intl;
        return closure_1_10(GenericHeaderTitle, obj);
      }) : (() => null),
      render(arg0) {
        const obj = { initialRoute, onClose: onSuccess(closure_2_2[10]).closeCreateGuildModal };
        const tmp = onSuccess(closure_2_2[19]);
        const merged = Object.assign(arg0);
        return closure_2_10(tmp, obj);
      }
    };
    impressionProperties[metroRequire.JOIN_SERVER] = obj7;
    impressionProperties[tmp.ACCEPT_INVITE] = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_ACCEPT_INVITE, impressionProperties, fullscreen: true, headerTitle: headerTitle2, headerLeft, render: render2 };
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
        return closure_1_10(onSuccess(closure_1_2[21]), { isNestedNavigator: true });
      }
    };
    impressionProperties[tmp.JOIN_STUDENT_HUB] = obj9;
    ({ impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_ACCEPT_INVITE, impressionProperties, fullscreen: true, headerTitle: headerTitle2, headerLeft, render: render2 });
    return impressionProperties;
  }, items1)} initialRouteStack={memo} headerBackTitle={intl.string(channel(onSuccess[16]).t["13/7kX"])} onWillFocus={Keyboard.dismiss} />;
};
