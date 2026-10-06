// Module ID: 15793
// Function ID: 15794
// Name: GuildThemeNuxUtils
// Dependencies: [5, 1232, 4765, 2032, 2]
// Exports: getInitialGuildThemeNuxSelection, saveGuildThemeNuxPreference

// Module 15793 (GuildThemeNuxUtils)
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 2032 */;
import flow_Client from "flow/Client" /* 4765 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1232 */;
import size from "module_2" /* 2 */;

let c4, c5;

let obj = function _saveGuildThemeNuxPreference() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj2;
    let obj5;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let GUILD;
            let closure_3 = tmp4;
            let closure_2 = tmp;
            const GuildThemeSourcePreference = flow_Client.GuildThemeSourcePreference;
            if (closure_1) {
              GUILD = GuildThemeSourcePreference.PERSONAL;
            } else {
              GUILD = GuildThemeSourcePreference.GUILD;
            }
            c4 = 1;
            c5 = 1;
            const obj6 = { value: obj5.setDefaultGuildThemePreference(GUILD), done: false };
            obj5 = UserSettingsProtoActionCreators;
            return obj6;
          }
        } else if (1 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            c4 = 2;
            c5 = 1;
            const obj8 = { value: obj2.clearGuildThemeSourcePreferenceOverride(closure_0), done: false };
            obj2 = closure_131_0(closure_131_1[3]);
            return obj8;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp12) {
        c5 = 3;
        throw tmp12;
      }
    }
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/guild_themes/GuildThemeNuxUtils.tsx");

export const getInitialGuildThemeNuxSelection = function getInitialGuildThemeNuxSelection() {
  let GUILD;
  const defaultGuildThemePreference = UserSettingsProtoStore.getDefaultGuildThemePreference();
  if (defaultGuildThemePreference === flow_Client.GuildThemeSourcePreference.PERSONAL) {
    GUILD = tmp2(4765).GuildThemeSourcePreference.PERSONAL;
  } else {
    GUILD = tmp2(4765).GuildThemeSourcePreference.GUILD;
  }
  return GUILD;
};
export const saveGuildThemeNuxPreference = function saveGuildThemeNuxPreference() {
  return obj(...arguments);
};
