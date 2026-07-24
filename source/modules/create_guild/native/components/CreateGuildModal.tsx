// Module ID: 11765
// Function ID: 91373
// Name: getScreens
// Dependencies: [31, 27, 1907, 9263, 653, 33, 11537, 8533, 675, 5048, 11764, 480, 5087, 11766, 11768, 10095, 1212, 11769, 9158, 11776, 11777, 11788, 9179, 5517, 2]
// Exports: default

// Module 11765 (getScreens)
import result from "result";
import { Keyboard } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics";
import ME from "ME";
import { jsx } from "jsxProd";

let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function getScreens(arg0, arg1, arg2) {
  const _require = arg1;
  const importDefault = arg2;
  let obj = {};
  obj = {
    impressionName: _require(480).ImpressionNames.GUILD_ADD_LANDING,
    impressionProperties: obj,
    fullscreen: true,
    headerTitle() {
      return null;
    }
  };
  let obj2 = _require(5087);
  obj.headerLeft = obj2.getHeaderCloseButton(importDefault(11764).closeCreateGuildModal);
  obj.render = function render() {
    return outer1_10(callback2(outer1_2[13]), { trigger: outer1_7.IN_APP });
  };
  obj[constants.GUILD_TEMPLATES] = obj;
  obj = {
    impressionName: _require(480).ImpressionNames.GUILD_ADD_INTENT_SELECTION,
    impressionProperties: obj,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(guildTemplate) {
      return outer1_10(callback2(outer1_2[14]), { guildTemplate: guildTemplate.guildTemplate, trigger: outer1_7.IN_APP });
    }
  };
  obj[constants.CREATION_INTENT] = obj;
  obj[constants.CREATE_SERVER] = {
    impressionName: _require(480).ImpressionNames.GUILD_ADD_CUSTOMIZE,
    impressionProperties: obj,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(arg0, arg1) {
      const callback = arg1;
      let obj = {};
      const merged = Object.assign(arg0);
      obj["onCreate"] = function onCreate(guild) {
        const id = guild.guild.id;
        let arr = callback;
        let obj = callback(outer2_2[6]);
        const guildProgress = obj.createGuildProgress(id);
        const defaultChannel = outer2_5.getDefaultChannel(id);
        if (null != defaultChannel) {
          let obj1 = callback2(outer2_2[7]);
          obj = { location: "Guild Create Flow" };
          obj1.init(id, defaultChannel.id, obj);
          obj = { guildId: id };
          arr = arr.push(outer2_6.GUILD_INVITE, obj);
          obj1 = { flow_type: outer2_9.GUILD_CREATE_MODAL, from_step: outer2_6.CREATE_SERVER, to_step: outer2_6.GUILD_INVITE };
          callback2(outer2_2[8]).track(outer2_8.USER_FLOW_TRANSITION, obj1);
          const obj5 = callback2(outer2_2[8]);
        }
      };
      const intl = callback(outer1_2[16]).intl;
      obj["customTitle"] = intl.string(callback(outer1_2[16]).t["5HZu07"]);
      return outer1_10(callback2(outer1_2[15]), obj);
    }
  };
  obj2 = {
    impressionName: _require(480).ImpressionNames.GUILD_ADD_GUILD_INVITE,
    impressionProperties: obj,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(guildId) {
      guildId = guildId.guildId;
      return outer1_10(callback2(outer1_2[17]), {
        closeOnEditInviteLink: false,
        onClose() {
          const result = callback(outer2_2[9]).transitionToGuildSync(guildId);
          const obj = callback(outer2_2[9]);
          const tmp = guildId;
          const tmp2 = outer1_1;
          const result1 = callback(outer2_2[10]).closeCreateGuildModal();
          if (null != outer1_1) {
            tmp2(tmp);
          }
        }
      });
    }
  };
  obj[constants.GUILD_INVITE] = obj2;
  let obj1 = {
    impressionName: _require(480).ImpressionNames.GUILD_ADD_CUSTOMIZE,
    impressionProperties: obj,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(arg0, arg1) {
      const callback = arg1;
      let obj = {};
      const merged = Object.assign(arg0);
      obj["onCreate"] = function onCreate(guild) {
        const id = guild.guild.id;
        let arr = callback;
        let obj = callback(outer2_2[6]);
        const guildProgress = obj.createGuildProgress(id);
        const defaultChannel = outer2_5.getDefaultChannel(id);
        if (null != defaultChannel) {
          let obj1 = callback2(outer2_2[7]);
          obj = { location: "Guild Create Flow" };
          obj1.init(id, defaultChannel.id, obj);
          obj = { guildId: id };
          arr = arr.push(outer2_6.GUILD_INVITE, obj);
          obj1 = { flow_type: outer2_9.GUILD_CREATE_MODAL, from_step: outer2_6.CREATE_SERVER, to_step: outer2_6.GUILD_INVITE };
          callback2(outer2_2[8]).track(outer2_8.USER_FLOW_TRANSITION, obj1);
          const obj5 = callback2(outer2_2[8]);
        }
      };
      const intl = callback(outer1_2[16]).intl;
      obj["customTitle"] = intl.string(callback(outer1_2[16]).t["5HZu07"]);
      return outer1_10(callback2(outer1_2[15]), obj);
    }
  };
  obj[constants.JOIN_SERVER] = {
    impressionName: _require(480).ImpressionNames.GUILD_ADD_JOIN,
    impressionProperties: obj,
    fullscreen: true,
    headerTitle: arg0 ? (() => {
      const obj = {};
      const intl = callback(outer1_2[16]).intl;
      obj.title = intl.string(callback(outer1_2[16]).t.jlfuFW);
      return outer1_10(callback(outer1_2[18]).GenericHeaderTitle, obj);
    }) : (() => null),
    render(arg0) {
      const obj = { initialRoute: closure_0 };
      const merged = Object.assign(arg0);
      obj["onClose"] = callback2(outer1_2[10]).closeCreateGuildModal;
      return outer1_10(callback2(outer1_2[19]), obj);
    }
  };
  const obj3 = {
    impressionName: _require(480).ImpressionNames.GUILD_ADD_JOIN,
    impressionProperties: obj,
    fullscreen: true,
    headerTitle: arg0 ? (() => {
      const obj = {};
      const intl = callback(outer1_2[16]).intl;
      obj.title = intl.string(callback(outer1_2[16]).t.jlfuFW);
      return outer1_10(callback(outer1_2[18]).GenericHeaderTitle, obj);
    }) : (() => null),
    render(arg0) {
      const obj = { initialRoute: closure_0 };
      const merged = Object.assign(arg0);
      obj["onClose"] = callback2(outer1_2[10]).closeCreateGuildModal;
      return outer1_10(callback2(outer1_2[19]), obj);
    }
  };
  obj[constants.ACCEPT_INVITE] = {
    impressionName: _require(480).ImpressionNames.GUILD_ADD_ACCEPT_INVITE,
    impressionProperties: obj,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    headerLeft() {
      return null;
    },
    render(code) {
      const obj = { code: code.code, onPressClose: callback2(outer1_2[10]).closeCreateGuildModal };
      return outer1_10(callback2(outer1_2[20]), obj);
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
      return outer1_10(callback2(outer1_2[21]), { isNestedNavigator: true });
    }
  };
  return obj;
}
({ CreateGuildModalStates: closure_6, GuildTemplateTriggers: closure_7 } = NUXGuildTemplatesAnalytics);
({ AnalyticEvents: closure_8, AnalyticsSections: closure_9 } = ME);
let obj = { impression_group: require("isThrottled").ImpressionGroups.GUILD_ADD_FLOW };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/create_guild/native/components/CreateGuildModal.tsx");

export default function CreateGuildModal(channel) {
  channel = channel.channel;
  const initialState = channel.initialState;
  const onSuccess = channel.onSuccess;
  let items = [channel, initialState];
  const memo = isWindowSmall.useMemo(() => {
    if (initialState === outer1_6.JOIN_SERVER) {
      let obj = { name: outer1_6.JOIN_SERVER };
      obj = { initialRoute: outer1_6.JOIN_SERVER };
      obj.param = obj;
      const items = [obj];
      let items2 = items;
    } else if (null == channel) {
      const obj1 = { name: outer1_6.GUILD_TEMPLATES };
      const items1 = [obj1];
      items2 = items1;
    } else {
      obj = { name: outer1_6.GUILD_INVITE };
      const obj2 = { channel, onClose: initialState(onSuccess[10]).closeCreateGuildModal };
      obj.param = obj2;
      items2 = [obj];
    }
    return items2;
  }, items);
  let obj = channel(onSuccess[22]);
  isWindowSmall = obj.useIsWindowSmall();
  obj = {};
  let items1 = [initialState, isWindowSmall, onSuccess];
  obj.screens = isWindowSmall.useMemo(() => outer1_12(isWindowSmall, initialState, onSuccess), items1);
  obj.initialRouteStack = memo;
  const intl = channel(onSuccess[16]).intl;
  obj.headerBackTitle = intl.string(channel(onSuccess[16]).t["13/7kX"]);
  obj.onWillFocus = Keyboard.dismiss;
  return jsx(channel(onSuccess[23]).Navigator, {});
};
