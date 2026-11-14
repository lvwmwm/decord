// Module ID: 14717
// Function ID: 14718
// Name: create_guild/CreateGuildActionCreators
// Dependencies: [5, 1072, 6851, 1264, 6889, 6896, 6757, 2]

// Module 14717 (create_guild/CreateGuildActionCreators)
import Constants from "Constants" /* 1072 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1264 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 6851 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_5, closure_6, closure_7, name;

let obj = function _createGuildFromTemplate() {
  obj = _asyncToGenerator(async (name, icon, arg2, is_community_intent, staff_only) => {
    const id = arg2;
    let c9 = 0;
    let c10 = 0;
    let c8 = 0;
    return (async function(arg0, value, arg2, arg3, arg4) {
      let obj4;
      let obj5;
      let obj6;
      if (c10 === 2) {
        c10 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c10 = 2;
          if (0 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c10 = 3;
              return { value, done: true };
            } else {
              closure_6 = tmp;
              closure_5 = tmp4;
              name = undefined;
              c8 = 1;
              const request = { url: constants.GUILDS, body: obj4, trackedActionData: obj5, rejectWithError: false };
              obj4 = { name, icon, channels: null, system_channel_id: null, roles: null, guild_template_code: null, staff_only };
              ({ channels: obj10.channels, system_channel_id: obj10.system_channel_id, roles: obj10.roles, code: obj10.guild_template_code } = id);
              const post = TrackedHTTPUtilsDefault.post;
              TrackedHTTPUtilsDefault;
              obj5 = { event: discord_common_AnalyticsUtils.NetworkActionNames.GUILD_CREATE, properties: obj6 };
              c9 = 2;
              c10 = 1;
              obj6 = { template_name: id.id, is_community_intent };
              const obj7 = { value: post(request), done: false };
              return obj7;
            }
          } else if (1 === c9) {
            c8 = 0;
            icon = closure_7;
            const self = this;
            const self2 = this;
            const aPIError = new closure_134_0(closure_134_2[6]).APIError(icon);
            throw aPIError;
          } else if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 0;
            c10 = 3;
            return { value, done: true };
          } else {
            name = value;
            obj = closure_134_1(closure_134_2[4]);
            obj.fireSurveyAction(closure_134_0(closure_134_2[5]).SurveyActionTypes.GUILD_CREATED);
            c8 = 0;
            c10 = 3;
            return { value: name.body, done: true };
          }
        } catch (tmp25) {
          closure_7 = tmp25;
          if (0 === c8) {
            c10 = 3;
            throw tmp25;
          } else {
            c9 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
obj = {
  createGuildFromTemplate() {
    return obj(...arguments);
  }
};
const result = size.fileFinishedImporting("modules/create_guild/CreateGuildActionCreators.tsx");

export default obj;
