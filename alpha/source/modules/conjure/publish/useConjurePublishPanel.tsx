// Module ID: 12253
// Function ID: 12254
// Name: useConjurePublishPanel
// Dependencies: [5, 32, 19, 4879, 4937, 6831, 1084, 6832, 3864, 12254, 12255, 12257, 10918, 12258, 1125, 504, 9009, 10832, 2]
// Exports: default

// Module 12253 (useConjurePublishPanel)
import _modDef3864 from "module_3864" /* 3864 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6831 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6832 */;
import ChannelPermissionsUtils from "ChannelPermissionsUtils" /* 9009 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4879 */;
import PermissionStore_mod from "PermissionStore" /* 4937 */;
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c4, closure_2, importDefault;

let c10;
let c9;
let _slicedToArray = _slicedToArray_mod;
let PermissionStore = PermissionStore_mod;
const isProjectOwner = ConjureProjectStore.isProjectOwner;
({ ChannelTypes: c9, Permissions: c10 } = Constants);
let items = [ConjureProjectTypes.ConjureSupportedSurface.BOT, _modDef3864.UnoAgo];
let items1 = [items, , , ];
let items2 = [ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY, _modDef3864["I88/iG"]];
items1[1] = items2;
let items3 = [ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET, _modDef3864.gXY1x1];
items1[2] = items3;
let items4 = [ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD, _modDef3864.Q9ruoM];
items1[3] = items4;
let obj = { screen_capture: _modDef3864["8/7kE7"], connect_user_to_voice: _modDef3864.uvDWXa };
let result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishPanel.tsx");

export default function useConjurePublishPanel(id, guildId) {
  let channels;
  let closure_1;
  let closure_3;
  let closure_4;
  let formatToPlainStringResult;
  let found;
  let guild;
  let guild_id;
  let intl3;
  let items;
  let liveDescription;
  let liveName;
  let memberCount;
  let saving;
  let str;
  let stringResult;
  let tmp19;
  let tmp20;
  let tmp25;
  let tmp27;
  let tmp7;
  _require = id;
  let obj = function _save() {
    let name;
    let user;
    let obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        let c3;
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const tmp36 = saving;
              if (!tmp36) {
                if (null == PermissionStore) {
                  closure_2_3(true);
                  c3 = 1;
                  let tmp14 = closure_2_4;
                  if (tmp14) {
                    const changed = name !== user.name || closure_2_1.changed;
                    tmp14 = changed;
                  }
                  if (tmp14) {
                    const obj4 = { name };
                    const updateProjectSettings = tmp(closure_2[17]).updateProjectSettings;
                    id = user.id;
                    const tmp20 = tmp(closure_2[17]);
                    const merged = Object.assign(closure_2_1.changes);
                    c1 = 2;
                    c4 = 1;
                    const obj5 = { value: updateProjectSettings(id, obj4), done: false };
                    return obj5;
                  }
                }
              }
              c4 = 3;
              return { value: false, done: true };
            }
          } else if (1 === tmp4) {
            c3 = 0;
            closure_128_3(false);
            throw closure_2;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_3(false);
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c3 = 0;
          closure_128_3(false);
          c4 = 3;
          return { value: true, done: true };
        } catch (tmp26) {
          closure_2 = tmp26;
          if (0 === c3) {
            c4 = 3;
            throw tmp26;
          } else {
            c1 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = importDefault;
  const tmp2 = saving;
  const tmp3 = require("useConjureLiveParts")(id.id, guildId.guildId);
  ({ liveName, liveDescription, guild, memberCount, channels } = tmp3);
  const tmp4 = require("useConjureAppIdentityDraft")(id.id);
  importDefault = tmp4;
  let items4 = require("useConjurePreviewDevicePermissions")(id.id);
  obj = items;
  [str, tmp7] = items.useState(id.name);
  [saving, closure_3] = items.useState(false);
  let tmp10 = null == guildId.status;
  if (!tmp10) {
    let obj2 = require("ConjurePublishTypes");
    tmp10 = !obj2.isConjureLive(guildId.status.publishState);
  }
  let tmp12 = tmp10;
  if (tmp12) {
    tmp12 = guild_id(id);
  }
  _slicedToArray = tmp12;
  items = tmp10 ? id.preview_supported_surfaces : id.supported_surfaces;
  if (items == null) {
    items = [];
  }
  const trimmed = str.trim();
  let result = null;
  if (tmp12) {
    let obj3 = require("conjureProjectNameError");
    result = obj3.conjureProjectNameError(trimmed);
  }
  PermissionStore = result;
  const status = guildId.status;
  let previewAppChannels;
  if (status != null) {
    previewAppChannels = status.previewAppChannels;
  }
  if (previewAppChannels == null) {
    previewAppChannels = [];
  }
  let arr4 = previewAppChannels;
  if (0 === previewAppChannels.length) {
    arr4 = previewAppChannels;
    const tmp17 = _require;
    if (items.includes(require("ConjureProjectTypes").ConjureSupportedSurface.APP_CHANNEL)) {
      let intl = tmp17(tmp2[14]).intl;
      items1 = [intl.string(tmp(tmp2[8]).xI4N6Q)];
      arr4 = items1;
    }
  }
  let tmp21 = null;
  [tmp19, tmp20] = _slicedToArray(obj.useState(false), 2);
  _slicedToArray(obj.useState(false), 2);
  if (tmp12) {
    tmp21 = null;
    if (arr4.length > 0) {
      tmp21 = null;
      if ("user" !== id.install_scope) {
        tmp21 = null;
        if (id.guild_id === guildId.guildId) {
          guild_id = id.guild_id;
          if (guild_id == null) {
            guild_id = null;
          }
          tmp21 = guild_id;
        }
      }
    }
  }
  guild_id = tmp21;
  let obj4 = require("get initialized");
  const items2 = [trimmed, PermissionStore];
  const items3 = [tmp21];
  let obj5 = {
    initial: tmp10,
    editable: tmp12,
    identity: tmp4,
    name: str,
    setName: tmp7,
    nameError: result,
    displayName: liveName,
    description: liveDescription,
    initialChannelNames: arr4,
    channels,
    appChannelsPrivate: tmp25,
    components: found.map((item) => {
      let intl;
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      const obj = { surface: tmp, label: intl.string(tmp2) };
      intl = id(first[14]).intl;
      return obj;
    }),
    devicePermissions: items4,
    note: stringResult,
    sharing: tmp27,
    saving,
    save() {
      return obj(...arguments);
    }
  };
  const stateFromStores = obj4.useStateFromStores(items2, () => {
    let guild = null;
    if (null != guild_id) {
      guild = GuildStore.getGuild(tmp);
    }
    let canResult = null != guild && PermissionStore.can(constants2.MANAGE_CHANNELS, guild);
    if (canResult) {
      const canCreatePrivateChannel = ChannelPermissionsUtils.canCreatePrivateChannel;
      const GUILD_APP = constants.GUILD_APP;
      ChannelPermissionsUtils;
      const canResult1 = PermissionStore.can(constants2.VIEW_CHANNEL, guild);
      canResult = canCreatePrivateChannel(GUILD_APP, canResult1, PermissionStore.can(constants2.CONNECT, guild));
    }
    return canResult;
  }, items3);
  if (tmp10) {
    liveName = id.name;
  }
  if (tmp10) {
    liveDescription = tmp4.description;
  }
  tmp25 = null;
  if (stateFromStores) {
    tmp25 = { isPrivate: tmp19, setPrivate: tmp20 };
    const obj6 = { isPrivate: tmp19, setPrivate: tmp20 };
  }
  found = items1.filter((item) => {
    let tmp;
    [tmp] = item;
    return items.includes(tmp);
  });
  if (!tmp10) {
    items4 = [];
  }
  stringResult = null;
  if (tmp10) {
    stringResult = null;
    if ("user" !== id.install_scope) {
      stringResult = null;
      if (items.includes(require("ConjureProjectTypes").ConjureSupportedSurface.AUTOMOD)) {
        const intl2 = tmp23(tmp2[14]).intl;
        stringResult = intl2.string(tmp(tmp2[8]).bljqPk);
      }
    }
  }
  if (null != guild) {
    const obj7 = { guild, caption: formatToPlainStringResult };
    formatToPlainStringResult = null;
    if (null != memberCount) {
      const intl4 = tmp23(tmp2[14]).intl;
      const obj8 = { count: memberCount };
      formatToPlainStringResult = intl4.formatToPlainString(tmp(tmp2[8]).ZpZxK9, obj8);
    }
    tmp27 = obj7;
  } else {
    tmp27 = null;
    if ("user" === id.install_scope) {
      const obj9 = { guild: null, caption: intl3.string(tmp(tmp2[8]).RUhWLH) };
      intl3 = tmp23(tmp2[14]).intl;
      tmp27 = obj9;
    }
  }
  return obj5;
};
export const CONJURE_PUBLISH_COMPONENTS = items1;
export const CONJURE_PUBLISH_PERMISSION_LABELS = obj;
