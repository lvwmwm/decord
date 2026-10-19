// Module ID: 19118
// Function ID: 19119
// Name: handleIncomingURL
// Dependencies: [5, 2068, 5209, 2001, 1087, 3, 7463, 19117, 7748, 1267, 14859, 5168, 7314, 5174, 1280, 8770, 17063, 19119, 2]
// Exports: default

// Module 19118 (handleIncomingURL)
import LoggerDefault from "Logger" /* 3 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7463 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7748 */;
import handleSupportedURLDefault from "handleSupportedURL" /* 14859 */;
import DeepLinkTypes from "DeepLinkTypes" /* 19117 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5209 */;
import AppStateStore from "AppStateStore" /* 2001 */;
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

let channel, channelId, closure_2, closure_3, closure_4, closure_5, message;

let c9;
let metroImportAll;
let metroImportDefault;
let obj = function _handleIncomingURL() {
  let constants2;
  let constants3;
  let logger;
  let state;
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let url = arg0;
    let closure_1 = arg1;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async function(arg0, value) {
      let Iterable;
      let obj10;
      let obj14;
      let obj16;
      let obj18;
      let obj20;
      let tmp212;
      let tmp213;
      let tmp96;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let str2;
          let closure_7;
          let fingerprint;
          let attemptId;
          let payload;
          let installationId;
          let didRegister;
          let inviteCode;
          let guildTemplateCode;
          let authToken;
          let result2;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              closure_3 = tmp17;
              url = undefined;
              Iterable = undefined;
              str2 = undefined;
              let str35;
              let closure_6;
              closure_7 = undefined;
              fingerprint = undefined;
              attemptId = undefined;
              payload = undefined;
              installationId = undefined;
              didRegister = undefined;
              inviteCode = undefined;
              guildTemplateCode = undefined;
              authToken = undefined;
              result2 = undefined;
              ({ url, source: Iterable } = url);
              const _HermesInternal = HermesInternal;
              logger.log("Opening url: " + url + " [" + Iterable + "]");
              if (state.getState() !== constants.ACTIVE) {
                let str = "deeplink";
                const trackAppOpened = TTIAnalyticsUtils.trackAppOpened;
                TTIAnalyticsUtils;
                if (null == url) {
                  str = "launcher";
                }
                trackAppOpened(str);
              }
              if (null != url) {
                if (url.startsWith("discord://app/open")) {
                  const index = url.indexOf("#");
                  if (-1 !== index) {
                    str2 = url.substring(index + 1);
                    if ("" !== str2) {
                      if ("" !== str2.trim()) {
                        const _URL2 = URL;
                        const self5 = this;
                        const self6 = this;
                        str35 = new URL(str2);
                        closure_6 = ["campaign", "deep_link_value", "media_source"];
                        closure_2 = 0;
                        let searchParams = str35.searchParams;
                        const items = [];
                        closure_2 = HermesBuiltin.arraySpread(items, searchParams.keys(), closure_2);
                        const found = items.filter((item) => {
                          const startsWithResult = item.startsWith("af_") || closure_1_6.includes(item);
                          return startsWithResult;
                        });
                        const item = found.forEach((item) => {
                          let searchParams;
                          searchParams = searchParams.searchParams;
                          return searchParams.delete(item);
                        });
                        url = str35.toString();
                        Iterable = DeepLinkTypes.DeeplinkSource.AppsFlyer;
                        const _HermesInternal2 = HermesInternal;
                        logger.log("Extracted clean URL from AppsFlyer legacy URL: " + url);
                        c6 = 0;
                      }
                    }
                    const obj4 = { originalUrl: url };
                    logger.warn("Empty or whitespace-only URL fragment in AppsFlyer legacy URL", obj4);
                    c8 = 3;
                    return { value: undefined, done: true };
                  } else {
                    const obj8 = { originalUrl: url };
                    logger.warn("No hash mark found in AppsFlyer legacy URL", obj8);
                  }
                }
                if (url.startsWith("discordwidget:///")) {
                  if (url.startsWith("discordwidget:///open-voice-panel")) {
                    channelId = channelId.getChannelId();
                    channel = null;
                    if (null != channelId) {
                      channel = channel.getChannel(channelId);
                    }
                    if (null != channel) {
                      const obj31 = PrivateChannelCallUtils;
                      const result = obj31.navigateToVoiceChannel(channel, "LiveActivity");
                      const index1 = url.indexOf("?");
                      let str3 = "";
                      const _URLSearchParams = URLSearchParams;
                      if (index1 >= 0) {
                        str3 = url.slice(index1 + 1);
                      }
                      const self3 = this;
                      const self4 = this;
                      const _URLSearchParams1 = new _URLSearchParams(str3);
                      value = _URLSearchParams1.get("source");
                      const tmp178 = "lockScreen" !== value && "dynamicIsland" !== value;
                      if (!tmp178) {
                        const obj9 = { action: "Open Voice Panel", channel_id: channel.id, surface: value };
                        const obj23 = AnalyticsUtilsDefault;
                        obj23.track(constants2.LIVE_ACTIVITY_INTERACTED, obj9);
                      }
                    }
                    c8 = 3;
                    return { value: "IconComponent", done: null };
                  } else {
                    const parts = url.split("voice/");
                    if (2 !== parts.length) {
                      c8 = 3;
                      return { value: "IconComponent", done: null };
                    } else {
                      const str36 = parts[1];
                      const parts1 = str36.split("/");
                      if (0 === parts1.length) {
                        c8 = 3;
                        return { value: "IconComponent", done: null };
                      } else if ("user" !== parts1[0]) {
                        if ("invite" === parts1[0]) {
                          const obj13 = { payload: obj14, isAppStartupNavigation };
                          obj14 = { type: constants3.CREATE_VOICE_INVITE, guildId: parts1[1], channelId: parts1[2] };
                          handleSupportedURLDefault(obj13);
                        } else if ("wave" === parts1[0]) {
                          const obj15 = { payload: obj16, isAppStartupNavigation };
                          obj16 = { type: constants3.SEND_VOICE_HANGOUT_WAVE, guildId: parts1[1], channelId: parts1[2] };
                          handleSupportedURLDefault(obj15);
                        } else if ("join" === parts1[0]) {
                          const obj17 = { payload: obj18, isAppStartupNavigation };
                          obj18 = { type: constants3.CHANNEL, guildId: parts1[1], channelId: parts1[2] };
                          handleSupportedURLDefault(obj17);
                        } else if (2 === parts1.length) {
                          [tmp212, tmp213] = parts1;
                          const obj19 = { payload: obj20, isAppStartupNavigation };
                          obj20 = { type: constants3.CHANNEL, guildId: tmp212, channelId: tmp213 };
                          handleSupportedURLDefault(obj19);
                          c8 = 3;
                          return { value: undefined, done: true };
                        }
                      }
                    }
                  }
                } else {
                  const _URL = URL;
                  const self = this;
                  const self2 = this;
                  const uRL = new URL(url);
                  if ("l.discord.com" === uRL.hostname) {
                    const _fetch = fetch;
                    c7 = 2;
                    c8 = 1;
                    const obj22 = { value: fetch(url, { method: "HEAD", redirect: "follow" }), done: false };
                    return obj22;
                  }
                }
              }
              c8 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (1 === tmp4) {
            c6 = 0;
            message = closure_5;
            const obj24 = { originalUrl: url.url, extractedUrlString: str2, error: message.message };
            closure_132_10.warn("Failed to parse URL from AppsFlyer legacy URL", obj24);
            c8 = 3;
            return { value: undefined, done: true };
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            return { value, done: true };
          } else {
            url = value.url;
            Iterable = closure_132_0(closure_132_2[7]).DeeplinkSource.Iterable;
          }
          closure_7 = closure_132_1(closure_132_2[11])(url, true);
          fingerprint = closure_7.fingerprint;
          attemptId = closure_7.attemptId;
          payload = closure_7.payload;
          installationId = closure_7.installationId;
          didRegister = closure_7.didRegister;
          const tmp47 = payload.type === closure_132_9.CHANNEL && null != payload.channelId;
          if (tmp47) {
            const obj5 = closure_132_0(closure_132_2[12]);
            const result1 = obj5.queueFrameDeepLinkFromUrl(payload.channelId, url);
          }
          closure_132_10.log("Parsed url as: ", closure_7);
          inviteCode = payload.inviteCode;
          guildTemplateCode = payload.guildTemplateCode;
          authToken = payload.authToken;
          result2 = null;
          if (null != inviteCode) {
            const obj6 = closure_132_0(closure_132_2[13]);
            result2 = obj6.parseInviteCodeFromInviteKey(inviteCode);
          }
          const tmp74 = null == fingerprint && null == attemptId && null == inviteCode && null == guildTemplateCode && null == authToken && null == Iterable && null == installationId;
          if (!tmp74) {
            const obj26 = { invite_code: result2, guild_template_code: guildTemplateCode, has_auth_token: tmp96, is_backgrounded: closure_132_6.getState() === closure_132_7.BACKGROUND, attempt_id: attemptId, deeplink_source: Iterable, link_type: payload.type, is_cold_start: isAppStartupNavigation, received_installation_id: installationId };
            tmp96 = null != authToken;
            const track = closure_132_1(closure_132_2[9]).track;
            const EXTERNAL_DYNAMIC_LINK_RECEIVED = closure_132_8.EXTERNAL_DYNAMIC_LINK_RECEIVED;
            closure_132_1(closure_132_2[9]);
            if (tmp96) {
              tmp96 = 0 === authToken.length;
            }
            let obj27 = null;
            if (didRegister) {
              obj27 = { did_register: true };
            }
            const merged = Object.assign(obj27);
            let tmp114 = null;
            if (null != fingerprint) {
              const obj28 = { fingerprint: obj10.extractId(fingerprint) };
              tmp114 = obj28;
              obj10 = closure_132_0(closure_132_2[14]);
            }
            const merged1 = Object.assign(tmp114);
            track(EXTERNAL_DYNAMIC_LINK_RECEIVED, obj26);
          }
          const tmp126 = null != result2 && null != installationId;
          if (tmp126) {
            const obj11 = closure_132_1(closure_132_2[15]);
            const result3 = obj11.setReceivedInstallationIdForInviteCode(result2, installationId);
          }
          const tmp138 = null != result2 && didRegister;
          if (tmp138) {
            const obj12 = closure_132_0(closure_132_2[16]);
            const result4 = obj12.setRegistrationHandoff();
          }
          closure_132_1(closure_132_2[17])(url);
          const obj29 = { payload, isAppStartupNavigation };
          closure_132_1(closure_132_2[10])(obj29);
        } catch (tmp185) {
          closure_5 = tmp185;
          if (0 === c6) {
            c8 = 3;
            throw tmp185;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
({ AppStates: metroImportDefault, AnalyticEvents: metroImportAll, LinkingTypes: c9 } = Constants);
const tmp3 = new LoggerDefault("index.native.tsx");
let closure_10 = tmp3;
let result = size.fileFinishedImporting("modules/links/native/handleIncomingURL.tsx");

export default function handleIncomingURL() {
  return obj(...arguments);
};
