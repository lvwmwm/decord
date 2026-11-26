// Module ID: 10224
// Function ID: 10225
// Name: parseWaterwheelsCard
// Dependencies: [109, 3, 12, 10225, 2]
// Exports: parseWaterwheelsCard

// Module 10224 (parseWaterwheelsCard)
import LoggerDefault from "Logger" /* 3 */;
import _mod12 from "module_12" /* 12 */;
import WaterwheelsCardTypes from "WaterwheelsCardTypes" /* 10225 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import size from "module_2" /* 2 */;

function isRecord(id) {
  const obj = _mod12;
  return obj.isPlainObject(id);
}
function isTypedWaterwheelsId(id, type) {
  if (0 !== type.length) {
    const obj = re6;
    if (!re6.test(type)) {
      const _HermesInternal = HermesInternal;
      const combined = "" + type + ":";
      const substr = id.slice(combined.length);
      const tmp3 = id.startsWith(combined) && substr.length > 0 && !obj.test(substr);
      return tmp3;
    }
  }
  return false;
}
function isActionValid(value) {
  value = value.value;
  const obj = _mod12;
  if (obj.isPlainObject(value)) {
    const type = value.type;
    if (WaterwheelsCardTypes.WaterwheelsActionType.JOIN_GUILD !== type) {
      if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GUILD !== type) {
        if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GAME === type) {
          return typeof value.value.game_id === "string";
        } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_CONNECTION === type) {
          return typeof value.value.provider === "string";
        } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_URI === type) {
          return typeof value.value.url === "string";
        } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_NUDGE === type) {
          return "enable_notifications" === value.value.nudge;
        } else {
          return false;
        }
      }
    }
    return typeof value.value.guild_id === "string";
  } else {
    return false;
  }
}
function mapLayout(layout) {
  let action_label;
  let guild_id;
  let header;
  let icon_url;
  let image_url;
  let items;
  let members;
  let obj9;
  let online;
  let partnered;
  const type = layout.type;
  if ("server_row" === type) {
    const description = layout.description;
    let tmp9 = null;
    ({ guild_id, icon_url, online, members, partnered } = layout);
    let obj3 = {};
    const obj4 = { guildId: guild_id, iconUrl: icon_url, description: tmp9, partnered: true === partnered, online: Number(online), members: Number(members) };
    let merged = Object.assign(Object.assign(layout, Object.assign({ guild_id: 0, icon_url: 0, online: 0, members: 0, description: 0, partnered: 0 })));
    if (typeof description === "string") {
      tmp9 = description;
    }
    let _Number = Number;
    let _Number2 = Number;
    return obj4;
  } else if ("post" === type) {
    const obj5 = { imageUrl: image_url, actionLabel: action_label };
    let tmp5 = _objectWithoutProperties;
    ({ image_url, action_label } = layout);
    let merged1 = Object.assign(_objectWithoutProperties(layout, closure_2));
    return obj5;
  } else if ("carousel" === type) {
    ({ header, items } = layout);
    let obj = {
      header: obj9,
      items: items.map((item) => {
          let cover_url;
          let description;
          let description2;
          let game_id;
          let guild_id;
          let hero_url;
          let icon_url;
          let l30_rank;
          let members;
          let online;
          let partnered;
          let server;
          let tmp2;
          let tmp3;
          let tmp4;
          let tmp5;
          let tmp9;
          ({ server, description, hero_url, l30_rank } = item);
          ({ game_id, cover_url } = item);
          const obj = { gameId: game_id, description: tmp2, heroUrl: tmp3, l30Rank: tmp4, coverUrl: cover_url, server: tmp5 };
          const merged = Object.assign(Object.assign(item, Object.assign({ game_id: 0, cover_url: 0, server: 0, description: 0, hero_url: 0, l30_rank: 0 })));
          tmp2 = null;
          if (typeof description === "string") {
            tmp2 = null;
            if ("" !== description.trim()) {
              tmp2 = description;
            }
          }
          tmp3 = null;
          if (typeof hero_url === "string") {
            tmp3 = hero_url;
          }
          tmp4 = null;
          if (typeof l30_rank === "number") {
            const _Number3 = Number;
            tmp4 = null;
            if (Number.isSafeInteger(l30_rank)) {
              tmp4 = null;
              if (l30_rank > 0) {
                tmp4 = l30_rank;
              }
            }
          }
          tmp5 = null;
          if (null != server) {
            ({ description: description2, guild_id, icon_url, online, members, partnered } = server);
            const obj3 = { guildId: guild_id, iconUrl: icon_url, description: tmp9, partnered: true === partnered, online: Number(online), members: Number(members) };
            const merged1 = Object.assign(Object.assign(server, Object.assign({ guild_id: 0, icon_url: 0, online: 0, members: 0, description: 0, partnered: 0 })));
            tmp9 = null;
            if (typeof description2 === "string") {
              tmp9 = description2;
            }
            const _Number = Number;
            const _Number2 = Number;
            tmp5 = obj3;
          }
          return obj;
        })
    };
    let tmp2 = closure_3;
    let tmp3 = obj;
    const merged2 = Object.assign(_objectWithoutProperties(layout, closure_3));
    obj9 = { title: null, subtitle: null, iconUrl: null };
    ({ title: obj2.title, subtitle: obj2.subtitle, icon_url: obj2.iconUrl } = header);
    return obj;
  }
}
function reject(reason) {
  logger.warn("Rejected Waterwheels card: " + reason);
  return { ok: false, reason };
}
let closure_2 = ["image_url", "action_label"];
let closure_3 = ["header", "items"];
let closure_5 = ["post", "carousel", "server_row"];
const re6 = /[\0- :\x7F\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/;
let tmp2 = new LoggerDefault("WaterwheelsCardParser");
const logger = tmp2;
const result = size.fileFinishedImporting("modules/waterwheels/cards/parseWaterwheelsCard.tsx");

export { isTypedWaterwheelsId };
export function parseWaterwheelsCard(id) {
  let client_eligibility;
  try {
    let tmp = id;
    let tmp2 = isRecord;
    if (isRecord(id)) {
      if (typeof id.id === "string") {
        if (typeof id.type === "string") {
          if (isTypedWaterwheelsId(id.id, id.type)) {
            if (tmp2(id.layout)) {
              const _Array = Array;
              if (Array.isArray(id.actions)) {
                if (closure_5.includes(id.layout.type)) {
                  const actions = id.actions;
                  if (actions.every((type) => {
                    const obj = _mod12;
                    let isPlainObjectResult = obj.isPlainObject(type);
                    const tmp = require;
                    const tmp2 = dependencyMap;
                    if (isPlainObjectResult) {
                      const _Object = Object;
                      const values = Object.values(tmp(tmp2[3]).WaterwheelsActionType);
                      isPlainObjectResult = values.includes(type.type);
                    }
                    return isPlainObjectResult;
                  })) {
                    if (undefined !== id.client_eligibility) {
                      if ("notifications_permission" !== id.client_eligibility) {
                        return reject("unknown_eligibility");
                      }
                    }
                    const actions2 = id.actions;
                    if (actions2.every(isActionValid)) {
                      let obj = { id: null, type: null, layout: mapLayout(id.layout), actions: null, clientEligibility: client_eligibility };
                      ({ id: obj.id, type: obj.type } = id);
                      ({ actions: obj.actions, client_eligibility } = id);
                      if (client_eligibility == null) {
                        client_eligibility = null;
                      }
                      return { ok: true, card: obj };
                    } else {
                      return reject("invalid_card");
                    }
                  } else {
                    return reject("unknown_action");
                  }
                } else {
                  return reject("unknown_layout");
                }
              }
            }
          }
        }
      }
    }
    return reject("invalid_card");
  } catch (err) {
    return reject("invalid_card");
  }
}
