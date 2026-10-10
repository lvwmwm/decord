// Module ID: 14049
// Function ID: 14050
// Name: handleSupportedURL
// Dependencies: [32, 109, 5, 6132, 6054, 7140, 13664, 502, 1085, 2072, 5898, 7482, 10863, 7259, 5071, 14050, 7992, 12398, 5934, 4977, 14051, 8303, 7093, 10574, 8952, 11346, 1894, 10491, 1265, 10493, 6950, 9674, 11527, 14058, 12431, 10724, 2000, 10864, 10862, 14060, 14062, 1628, 7499, 14072, 4806, 14074, 2087, 7052, 8518, 8513, 7033, 7480, 11111, 4976, 5984, 1112, 584, 6874, 1384, 8637, 14077, 14092, 1382, 14103, 8682, 11506, 14111, 5724, 14112, 7262, 6878, 8832, 14190, 7406, 5977, 9167, 12971, 5978, 10050, 14191, 5959, 10805, 14192, 8878, 8884, 6945, 12341, 5053, 2]
// Exports: default

// Module 14049 (handleSupportedURL)
import DispatcherDefault from "Dispatcher" /* 584 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1894 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ChannelConstants from "ChannelConstants" /* 2072 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4976 */;
import PaymentConstants from "PaymentConstants" /* 5071 */;
import Constants2 from "Constants" /* 5898 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import BoostingActionCreators from "BoostingActionCreators" /* 5959 */;
import QuestContent from "QuestContent" /* 5977 */;
import AdPlacement from "AdPlacement" /* 5978 */;
import PostConnectionCallbackStore from "PostConnectionCallbackStore" /* 6132 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6878 */;
import openUserSettings from "openUserSettings" /* 7093 */;
import PremiumPlanPurchasedStore from "PremiumPlanPurchasedStore" /* 7140 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7259 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7262 */;
import AnalyticsActions from "AnalyticsActions" /* 7406 */;
import NativePermissionConstants from "NativePermissionConstants" /* 7482 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8637 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 8682 */;
import SecureFramesPlatformUtilsDefault from "SecureFramesPlatformUtils" /* 8832 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8878 */;
import GameProfileActionCreators from "GameProfileActionCreators" /* 8884 */;
import DisplayedInviteActionCreators from "DisplayedInviteActionCreators" /* 8952 */;
import QuestUtils from "QuestUtils" /* 9167 */;
import closeVoicePanelsDefault from "closeVoicePanels" /* 10805 */;
import ApplicationUtils from "ApplicationUtils" /* 10862 */;
import Constants3 from "Constants" /* 10863 */;
import guild_templates_GuildTemplateActionCreatorsDefault from "guild_templates/GuildTemplateActionCreators" /* 11346 */;
import BountyActionCreators from "BountyActionCreators" /* 12971 */;
import ShareScreenConstants from "ShareScreenConstants" /* 14050 */;
import MidjourneyOnboardingUtils from "MidjourneyOnboardingUtils" /* 14058 */;
import GuildSettingsPickerActionCreators from "GuildSettingsPickerActionCreators" /* 14092 */;
import AgeKeyReturnHandler from "AgeKeyReturnHandler" /* 14190 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6054 */;
import PremiumNitroNavigationStore from "PremiumNitroNavigationStore" /* 13664 */;
import AuthenticationStore_mod from "AuthenticationStore" /* 502 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c2, c4, c7, c8;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let map1;
let tmp;
let tmp3;
const authorizeCallbackDefault = tmp(10864);
const FamilyCenterNativeUtils = tmp3(11527);
const CreateGuildModalActionCreatorsDefault = tmp(12431);
let closure_4 = ["code", "state"];
PostConnectionCallbackStore.addPostConnectionCallback;
let closure_10 = PremiumPlanPurchasedStore.handleMobileWebCheckoutStatus;
let AuthenticationStore = AuthenticationStore_mod;
({ AnalyticEvents: map1, LinkingTypes: closure_14, Routes: closure_15, UserSettingsSections: closure_16, PlatformTypes: closure_17, ME: closure_18 } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const StreamTypes = Constants2.StreamTypes;
const NativePermissionTypes = NativePermissionConstants.NativePermissionTypes;
let closure_22 = Constants3.OAUTH2_AUTHORIZE_MODAL_KEY;
let closure_23 = FamilyCenterConstants.FAMILY_CENTER_LINK_REQUEST_REGEX;
let closure_24 = PaymentConstants.MobileWebRedirectCheckoutDeepLinkActions;
const SHARE_SCREEN_MODAL_KEY = ShareScreenConstants.SHARE_SCREEN_MODAL_KEY;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let result = size.fileFinishedImporting("modules/links/native/handleSupportedURL.tsx");

export default function handleSupportedURL(payload) {
  let OAUTH2_AUTHORIZE;
  let c12;
  let c13;
  let channelId;
  let channelId2;
  let diceCount;
  let diceSides;
  let fingerprint;
  let flag;
  let guildId2;
  let isAppStartupNavigation;
  let messageId;
  let navigationReplace;
  let nonce;
  let obj11;
  let obj25;
  let obj37;
  let obj42;
  let regex;
  let safe;
  let skipMessageFetch;
  let summaryId;
  let waitForConnection;
  payload = payload.payload;
  ({ safe, navigationReplace, waitForConnection, skipMessageFetch, isAppStartupNavigation } = payload);
  let rootNavigationRef1;
  let rootNavigationRef2;
  let inviteCode;
  let username;
  let deeplinkAttemptId;
  let guildTemplateCode;
  let pathname;
  let remoteAuthFingerprint;
  let deepLinkAction;
  let gameId;
  let rootNavigationRef3;
  AuthenticationStore = undefined;
  c13 = undefined;
  const type = payload.type;
  let tmp = constants2;
  if (constants2.CONTACT_SYNC === type) {
    const obj49 = payload(inviteCode[17]);
    let result = obj49.openContactSyncModalDeeplink();
    flag = true;
  } else if (tmp.COMPOSE_MESSAGE === type) {
    const obj45 = rootNavigationRef1(inviteCode[18]);
    const popAllResult = obj45.popAll();
    const obj46 = payload(inviteCode[19]);
    const rootNavigationRef = obj46.getRootNavigationRef();
    flag = true;
    if (null != rootNavigationRef) {
      let obj3 = { screen: "new-message", params: { sourcePage: "Deeplink" } };
      rootNavigationRef.navigate("friends", obj3);
      flag = true;
    }
  } else if (tmp.ADD_FRIENDS === type) {
    const obj40 = rootNavigationRef1(inviteCode[18]);
    obj40.popAll();
    const obj41 = payload(inviteCode[19]);
    const tmp163 = rootNavigationRef1;
    rootNavigationRef1 = obj41.getRootNavigationRef();
    const tmp164 = inviteCode;
    if (null == rootNavigationRef1) {
      const tmp163Result = tmp163(tmp164[20]);
      const result1 = tmp163Result.openAddFriendModalDeeplink();
      flag = true;
    } else if (rootNavigationRef1.isReady()) {
      let obj10 = { screen: "add-friends", params: { sourcePage: "Deeplink" } };
      rootNavigationRef1.navigate("friends", obj10);
      flag = true;
    } else {
      remoteAuthFingerprint(() => rootNavigationRef1.navigate("friends", { screen: "add-friends", params: { sourcePage: "Deeplink" } }));
      flag = true;
    }
  } else if (tmp.FRIENDS === type) {
    const obj35 = rootNavigationRef1(inviteCode[18]);
    obj35.popAll();
    const obj36 = payload(inviteCode[19]);
    rootNavigationRef2 = obj36.getRootNavigationRef();
    const tmp155 = inviteCode;
    const tmp157 = payload;
    if (null != rootNavigationRef2) {
      if (rootNavigationRef2.isReady()) {
        rootNavigationRef2.navigate("friends");
      } else {
        remoteAuthFingerprint(() => {
          rootNavigationRef2.navigate("friends");
        });
      }
    }
    flag = true;
    if (null != payload.userId) {
      const obj15 = { userId: payload.userId };
      const tmp157Result = tmp157(tmp155[21]);
      const result2 = tmp157Result.showUserProfileActionSheetPostConnection(obj15);
      flag = true;
    }
  } else if (tmp.EDIT_PROFILE === type) {
    remoteAuthFingerprint(() => {
      const obj = rootNavigationRef1(inviteCode[18]);
      obj.popAll();
      const obj2 = payload(inviteCode[22]);
      const obj3 = { screen: constants3.PROFILE_CUSTOMIZATION };
      obj2.openUserSettings(obj3);
    });
    flag = true;
  } else if (tmp.BADGE_DIRECTORY === type) {
    remoteAuthFingerprint(() => {
      const obj = rootNavigationRef1(inviteCode[18]);
      obj.popAll();
      const obj2 = payload(inviteCode[23]);
      const result = obj2.openBadgeDirectoryScreen();
    });
    flag = true;
  } else if (tmp.INVITE === type) {
    inviteCode = payload.inviteCode;
    username = payload.username;
    deeplinkAttemptId = payload.deeplinkAttemptId;
    if (!AuthenticationStore.isAuthenticated()) {
      if (null != inviteCode) {
        const obj18 = { deeplinkAttemptId, location: "Deep Link" };
        const obj33 = payload(inviteCode[24]);
        obj33.showInvite(inviteCode, username, obj18);
        flag = true;
      }
    }
    remoteAuthFingerprint(() => {
      const obj = guild_templates_GuildTemplateActionCreatorsDefault;
      obj.hideModal();
      if (null != inviteCode) {
        const obj2 = KeyboardManagerUtils;
        const result = obj2.dismissGlobalKeyboard();
        const obj4 = { deeplinkAttemptId, location: "Deep Link" };
        const obj3 = DisplayedInviteActionCreators;
        obj3.showInvite(tmp3, username, obj4);
      }
    });
    flag = true;
  } else if (tmp.GUILD_TEMPLATE === type) {
    guildTemplateCode = payload.guildTemplateCode;
    remoteAuthFingerprint(() => {
      const obj = DisplayedInviteActionCreators;
      obj.clearDisplayedInvite();
      if (null != guildTemplateCode) {
        const tmpResult = KeyboardManagerUtils;
        const result = tmpResult.dismissGlobalKeyboard();
        const obj3 = guild_templates_GuildTemplateActionCreatorsDefault;
        obj3.showModal(tmp4);
      }
    });
    flag = true;
  } else if (tmp.GIFT_CODE === type) {
    let giftCode = payload.giftCode;
    let flag3 = null != giftCode;
    if (flag3) {
      const obj32 = payload(inviteCode[27]);
      const giftCode1 = obj32.resolveGiftCode(giftCode);
      let nextPromise = giftCode1.then((giftCode) => {
        giftCode = giftCode.giftCode;
        const obj = rootNavigationRef1(inviteCode[28]);
        obj.track(constants.OPEN_MODAL, { type: "gift_accept", location: null });
        const obj2 = payload(inviteCode[29]);
        const result = obj2.openGiftCodeRedeemModal(giftCode.code);
      });
      nextPromise.catch(() => {

      });
      flag3 = true;
    }
    flag = flag3;
  } else if (tmp.ROLL_DICE === type) {
    ({ guildId: guildId2, channelId: channelId2 } = payload);
    let flag2 = null != guildId2;
    ({ diceCount, diceSides } = payload);
    if (flag2) {
      flag2 = null != channelId2;
    }
    if (flag2) {
      const obj29 = payload(inviteCode[30]);
      obj29.startDiceRoll(channelId2, diceCount, diceSides);
      const obj20 = { guildId: guildId2, channelId: channelId2, messageId: "Array", navigationSettings: obj25 };
      obj25 = { safe, navigationReplace, waitForConnection, skipMessageFetch, isAppStartupNavigation };
      rootNavigationRef1(inviteCode[31])(obj20);
      flag2 = true;
    }
    flag = flag2;
  } else {
    if (tmp.CHANNEL !== type) {
      if (tmp.MESSAGE !== type) {
        if (tmp.SESSION_MANAGEMENT === type) {
          remoteAuthFingerprint(() => {
            const obj = rootNavigationRef1(inviteCode[18]);
            obj.popAll();
            const obj2 = payload(inviteCode[22]);
            const obj3 = { screen: constants3.SESSIONS };
            obj2.openUserSettings(obj3);
          });
          flag = true;
        } else if (tmp.FAMILY_CENTER === type) {
          let obj26 = payload;
          if (payload == null) {
            obj26 = {};
          }
          pathname = obj26.pathname;
          let tmp121 = null;
          if (undefined !== pathname) {
            tmp121 = pathname;
          }
          pathname = tmp121;
          remoteAuthFingerprint(() => {
            const obj = ModalActionCreatorsDefault;
            obj.popAll();
            const obj2 = openUserSettings;
            const obj3 = { screen: constants2.FAMILY_CENTER };
            obj2.openUserSettings(obj3);
            let isMatch = null != pathname;
            if (isMatch) {
              isMatch = regex.test(tmp5);
            }
            if (isMatch) {
              const tmp3Result = FamilyCenterNativeUtils;
              const result = tmp3Result.handleFamilyCenterQRCodeScan(tmp5, "NativeCameraScan");
            }
          });
          flag = true;
        } else if (tmp.OAUTH2_AUTHORIZE === type) {
          remoteAuthFingerprint(() => {
            let type;
            const tmp = importDefault;
            let obj = ModalActionCreatorsDefault;
            obj.popAll();
            let obj2 = MidjourneyOnboardingUtils;
            if (obj2.isMidjourneyOnboardingFlow()) {
              const tmpResult = CreateGuildModalActionCreatorsDefault;
              tmpResult.openCreateGuildModal(function openOAuth2Modal(guildId) {
                if (type.type === OAUTH2_AUTHORIZE.OAUTH2_AUTHORIZE) {
                  let obj = rootNavigationRef1(inviteCode[18]);
                  obj.popAll();
                  const pushLazy = rootNavigationRef1(inviteCode[18]).pushLazy;
                  const obj2 = {
                    guildId,
                    callback: rootNavigationRef1(inviteCode[37]),
                    dismissOAuthModal() {
                        const obj = closure_1_1(closure_1_3[18]);
                        obj.popWithKey(closure_1_22);
                      }
                  };
                  rootNavigationRef1(inviteCode[18]);
                  const tmp8 = payload(inviteCode[36])(inviteCode[35], inviteCode.paths);
                  const merged = Object.assign(tmp.props);
                  pushLazy(tmp8, obj2, closure_2_22);
                }
              });
            } else {
              const obj3 = { callback: authorizeCallbackDefault };
              const openOAuth2Modal = tmp4(10862).openOAuth2Modal;
              ApplicationUtils;
              let merged = Object.assign(payload.props);
              openOAuth2Modal(obj3);
            }
          });
          flag = true;
        } else if (tmp.ONE_TIME_LOGIN === type) {
          const obj23 = rootNavigationRef1(inviteCode[18]);
          obj23.popAll();
          const obj27 = { token: payload.token };
          const obj24 = rootNavigationRef1(inviteCode[18]);
          obj24.pushLazy(payload(inviteCode[36])(inviteCode[39], inviteCode.paths), obj27, "ONE_TIME_LOGIN_MODAL");
          flag = true;
        } else if (tmp.REMOTE_AUTH === type) {
          remoteAuthFingerprint = payload.remoteAuthFingerprint;
          remoteAuthFingerprint(null != remoteAuthFingerprint ? (() => {
            const obj = ModalActionCreatorsDefault;
            const obj2 = { remoteAuthFingerprint };
            obj.pushLazy(asyncRequire(14062, dependencyMap.paths), obj2, "REMOTE_AUTH_MODAL");
          }) : (() => {
            let paths;
            let tmp = inviteCode;
            let obj = payload(inviteCode[41]);
            const tmp3 = obj.isMetaQuest() ? NativePermissionTypes.HEADSET_CAMERA : NativePermissionTypes.CAMERA;
            const obj2 = rootNavigationRef1(tmp[42]);
            const permission = obj2.requestPermission(tmp3);
            const nextPromise = permission.then((result) => {
              const tmp = result;
              if (tmp) {
                const obj = rootNavigationRef1(paths[18]);
                obj.pushLazy(payload(paths[36])(paths[43], paths.paths), { showHelp: true });
              }
            });
            nextPromise.catch(() => {

            });
          }));
          flag = true;
        } else if (tmp.PROMOTIONS === type) {
          const obj22 = rootNavigationRef1(inviteCode[44]);
          obj22.performURLNavigation(payload.url);
          flag = true;
        } else if (tmp.FEATURE_PROMO_URL === type) {
          const obj21 = rootNavigationRef1(inviteCode[44]);
          obj21.openURLExternally(payload.promoUrl);
          flag = true;
        } else if (tmp.USER_PROFILE === type) {
          flag = true;
          if (null != payload.userId) {
            const obj28 = { userId: payload.userId };
            const obj19 = payload(inviteCode[21]);
            const result3 = obj19.showUserProfileActionSheetPostConnection(obj28);
            flag = true;
          }
        } else if (tmp.BUILD_OVERRIDE === type) {
          const overrideUrl = payload.overrideUrl;
          const obj16 = rootNavigationRef1(inviteCode[18]);
          obj16.popAll();
          const obj30 = { overrideUrl };
          const obj17 = rootNavigationRef1(inviteCode[18]);
          obj17.pushLazy(payload(inviteCode[36])(inviteCode[45], inviteCode.paths), obj30);
          flag = true;
        } else if (tmp.GUILD_EVENT_DETAILS === type) {
          remoteAuthFingerprint(pathname(function*(arg0, value) {
            let c0;
            let c1;
            let closure_1;
            let guildScheduledEvent;
            let paths;
            if (c4 === 2) {
              c4 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj4 = { value, done: true };
                return obj4;
              } else {
                return { value: "IconComponent", done: "+51" };
              }
            } else {
              try {
                let event;
                c4 = 2;
                if (0 === inviteCode) {
                  if (arg0 === 1) {
                    c4 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    const obj6 = { value, done: true };
                    return obj6;
                  } else {
                    c0 = undefined;
                    c1 = undefined;
                    event = undefined;
                    const obj11 = tmp2(inviteCode[18]);
                    obj11.popAll();
                    ({ guildId: c0, guildEventId: c1 } = payload);
                    inviteCode = 1;
                    c4 = 1;
                    const obj7 = { value: guildScheduledEvent(inviteCode[36])(inviteCode[46], inviteCode.paths), done: false };
                    return obj7;
                  }
                } else {
                  if (1 === tmp5) {
                    if (arg0 === 1) {
                      c4 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c4 = 3;
                      const obj8 = { value, done: true };
                      return obj8;
                    } else {
                      const _default = value.default;
                      if (null != _default.getGuild(c0)) {
                        const obj2 = guildScheduledEvent(inviteCode[47]);
                        obj2.transitionToGuild(c0);
                      }
                      guildScheduledEvent = guildScheduledEvent.getGuildScheduledEvent(c1);
                      if (guildScheduledEvent == null) {
                        const obj5 = tmp2(inviteCode[48]);
                        inviteCode = 2;
                        c4 = 1;
                        const obj9 = { value: obj5.fetchGuildEvent(c0, c1), done: false };
                        return obj9;
                      }
                    }
                  } else if (arg0 === 1) {
                    c4 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    const obj = { value, done: true };
                    return obj;
                  } else {
                    guildScheduledEvent = value;
                  }
                  event = guildScheduledEvent;
                  if (null != event) {
                    const obj10 = { eventId: event.id, event };
                    const obj3 = guildScheduledEvent(inviteCode[49]);
                    const result = obj3.openGuildEventDetails(obj10);
                  }
                  c4 = 3;
                  return { value: "IconComponent", done: "+51" };
                }
              } catch (tmp34) {
                c4 = 3;
                throw tmp34;
              }
            }
          }));
          flag = true;
        } else if (tmp.MOBILE_WEB_HANDOFF === type) {
          const redirectUrl = payload.redirectUrl;
          ({ nonce, fingerprint } = payload);
          const _HermesInternal = HermesInternal;
          const obj31 = { nonce, fingerprint, skipLoginRedirect: true };
          const obj14 = rootNavigationRef1(inviteCode[50]);
          const result4 = obj14.redirectWithHandoffToken("" + redirectUrl.pathname + redirectUrl.search, obj31);
          flag = true;
        } else if (tmp.VOICE_CHANNEL === type) {
          remoteAuthFingerprint(pathname(function*(arg0, value) {
            let closure_0;
            let v1;
            if (c2 === 2) {
              c2 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp2 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: "+51" };
              }
            } else {
              try {
                c2 = 2;
                if (0 === rootNavigationRef1) {
                  if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    const tmp18 = null != payload.guildId && null != payload.channelId && null != payload.userId;
                    if (tmp18) {
                      const obj5 = rootNavigationRef1(paths[18]);
                      obj5.popAll();
                      rootNavigationRef1 = 1;
                      c2 = 1;
                      const obj6 = { value: tmp3(paths[36])(paths[46], paths.paths), done: false };
                      return obj6;
                    }
                  }
                } else if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj7 = { value, done: true };
                  return obj7;
                } else {
                  const _default = value.default;
                  if (null != _default.getGuild(closure_128_0.guildId)) {
                    const obj = tmp3(paths[47]);
                    obj.transitionToGuild(closure_128_0.guildId);
                  }
                  const obj8 = { streamType: constants.GUILD, ownerId: closure_128_0.userId, guildId: closure_128_0.guildId, channelId: closure_128_0.channelId };
                  rootNavigationRef1(paths[51])(obj8);
                }
                const tmp22 = "transfer_cancelled" === closure_128_0.action && "xbox" === closure_128_0.via;
                if (tmp22) {
                  const obj4 = tmp3(paths[52]);
                  obj4.disconnectRemote();
                }
                c2 = 3;
                return { value: "IconComponent", done: "+51" };
              } catch (tmp36) {
                c2 = 3;
                throw tmp36;
              }
            }
          }));
          flag = true;
        } else if (tmp.ICYMI === type) {
          remoteAuthFingerprint(() => {
            const obj = payload(inviteCode[53]);
            obj.navigateToRootTab({ screen: "icymi" });
          });
          flag = true;
        } else if (tmp.GUILD_HOME === type) {
          flag = true;
          if (null != payload.guildId) {
            let tmp76;
            if (null != payload.highlightChannelId) {
              if (null != payload.highlightMessageId) {
                const obj34 = { search: obj11.stringify(obj37) };
                obj11 = payload(inviteCode[54]);
                obj37 = { highlight_channel_id: null, highlight_message_id: null };
                ({ highlightChannelId: obj12.highlight_channel_id, highlightMessageId: obj12.highlight_message_id } = payload);
                tmp76 = obj34;
              }
            }
            const obj13 = payload(inviteCode[55]);
            obj13.transitionTo(closure_15.CHANNEL(payload.guildId, StaticChannelRoute.GUILD_HOME), tmp76);
            flag = true;
          }
        } else if (tmp.USER_CONNECTIONS_LINK_CALLBACK === type) {
          remoteAuthFingerprint(() => {
            let hasItem = null != payload.callbackCode && null != tmp.callbackState && null != tmp.provider;
            if (hasItem) {
              const items = [, , , ];
              ({ XBOX: arr[0], PLAYSTATION: arr[1], PLAYSTATION_STAGING: arr[2], CRUNCHYROLL: arr[3] } = closure_17);
              hasItem = items.includes(tmp.provider);
            }
            if (hasItem) {
              const obj3 = { type: "USER_CONNECTIONS_LINK_CALLBACK", provider: null, callbackCode: null, callbackState: null };
              ({ provider: obj2.provider, callbackCode: obj2.callbackCode, callbackState: obj2.callbackState } = payload);
              const obj = DispatcherDefault;
              obj.dispatch(obj3);
            }
          });
          flag = true;
        } else if (tmp.USER_CONNECTIONS_CALLBACK === type) {
          remoteAuthFingerprint(pathname(function*(arg0, value) {
            let closure_0;
            let closure_1;
            let closure_3;
            let closure_6;
            let obj3;
            let obj8;
            if (c8 === 2) {
              c8 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: "+51" };
              }
            } else {
              try {
                c8 = 2;
                if (0 === c7) {
                  if (arg0 === 1) {
                    c8 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c8 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    let closure_5 = tmp;
                    payload = undefined;
                    rootNavigationRef1 = undefined;
                    const searchParams = payload.searchParams;
                    const state = searchParams.state;
                    const provider = payload.provider;
                    const code = searchParams.code;
                    const tmp49 = tmp4(searchParams, obj3);
                    if (null != state) {
                      let closure_2;
                      const obj7 = { code, state };
                      rootNavigationRef1 = tmp49;
                      const keys = Object.keys();
                      const tmp9 = tmp49;
                      if (keys === undefined) {
                        inviteCode = tmp11;
                        closure_2 = tmp10;
                        rootNavigationRef1 = tmp49;
                        payload = keys;
                      } else {
                        inviteCode = tmp11;
                        closure_2 = tmp10;
                        rootNavigationRef1 = tmp9;
                        payload = keys;
                        obj3 = payload[closure_2];
                        while (obj3 !== undefined) {
                          inviteCode = tmp16;
                          closure_2 = tmp15;
                          rootNavigationRef1 = tmp14;
                          payload = tmp13;
                          if (!obj3.startsWith("openid.")) {
                            continue;
                          } else {
                            let obj9 = tmp18;
                            if (null == tmp18) {
                              obj9 = {};
                            }
                            obj9[obj3] = searchParams[obj3];
                            continue;
                          }
                          continue;
                        }
                        inviteCode = tmp16;
                        closure_2 = tmp15;
                        rootNavigationRef1 = tmp14;
                        payload = tmp13;
                      }
                      if (null != tmp18) {
                        obj7.openid_params = tmp18;
                      }
                      const obj5 = rootNavigationRef1(inviteCode[18]);
                      obj5.popAll();
                      const obj10 = { screen: constants.CONNECTIONS };
                      const obj6 = payload(inviteCode[22]);
                      obj6.openUserSettings(obj10);
                      c7 = 1;
                      c8 = 1;
                      const obj11 = { value: obj8.callback(provider, obj7), done: false };
                      obj8 = rootNavigationRef1(inviteCode[57]);
                      return obj11;
                    }
                  }
                } else if (arg0 === 1) {
                  c8 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c8 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  payload = value;
                  const body = payload.body;
                  let redirect;
                  const toURLSafe = rootNavigationRef1(inviteCode[58]).toURLSafe;
                  const tmp37 = rootNavigationRef1(inviteCode[58]);
                  if (body != null) {
                    redirect = body.redirect;
                  }
                  rootNavigationRef1 = toURLSafe(redirect);
                  if (null != rootNavigationRef1) {
                    const obj12 = rootNavigationRef1(inviteCode[44]);
                    obj12.openURL(rootNavigationRef1.toString());
                  }
                }
                c8 = 3;
                return { value: "IconComponent", done: "+51" };
              } catch (tmp29) {
                c8 = 3;
                throw tmp29;
              }
            }
          }));
          flag = true;
        } else if (tmp.CONNECTIONS === type) {
          remoteAuthFingerprint(() => {
            const obj = rootNavigationRef1(inviteCode[18]);
            obj.popAll();
            const obj2 = payload(inviteCode[22]);
            const obj3 = { screen: constants3.CONNECTIONS };
            obj2.openUserSettings(obj3);
          });
          flag = true;
        } else if (tmp.GUILD_SETTINGS === type) {
          remoteAuthFingerprint(() => {
            if (null != payload.guildId) {
              const obj = GuildSettingsActionCreatorsDefault;
              obj.open(payload.guildId, payload.settingsSection, undefined, payload.settingsSubsection);
            }
          });
          flag = true;
        } else if (tmp.ACTIVATE_DEVICE === type) {
          let obj9 = rootNavigationRef1(inviteCode[60]);
          obj9.showModal(payload.userCode);
          flag = true;
        } else if (tmp.GUILD_SETTINGS_PICKER === type) {
          remoteAuthFingerprint(() => {
            const obj = GuildSettingsPickerActionCreators;
            const obj2 = { section: payload.settingsSection, subsection: payload.settingsSubsection, feature: payload.feature };
            const result = obj.openGuildSettingsPickerModal(obj2);
          });
          flag = true;
        } else if (tmp.SHARE === type) {
          let obj5 = payload(inviteCode[62]);
          flag = true;
          const tmp53 = payload;
          if (obj5.isIOS()) {
            let tmp55 = rootNavigationRef1;
            let obj6 = rootNavigationRef1(tmp54[18]);
            obj6.popAll();
            let obj7 = rootNavigationRef1(tmp54[18]);
            const obj38 = { text: null, channelId: null, shareId: null, attachmentManifest: null };
            ({ text: obj8.text, channelId: obj8.channelId, shareId: obj8.shareId, attachmentManifest: obj8.attachmentManifest } = payload);
            let tmp57 = SHARE_SCREEN_MODAL_KEY;
            let tmp58 = obj7;
            let tmp59 = obj38;
            obj7.pushLazy(tmp53(inviteCode[36])(inviteCode[63], inviteCode.paths), obj38, SHARE_SCREEN_MODAL_KEY, { presentation: "modal" });
            flag = true;
          }
        } else {
          if (tmp.CREATE_VOICE_INVITE !== type) {
            if (tmp.SEND_VOICE_HANGOUT_WAVE !== type) {
              if (tmp.ACCOUNT_STANDING === type) {
                let tmp49 = remoteAuthFingerprint;
                remoteAuthFingerprint(() => {
                  const obj = rootNavigationRef1(inviteCode[18]);
                  obj.popAll();
                  const obj2 = payload(inviteCode[65]);
                  obj2.openAccountStanding();
                });
                flag = true;
              } else if (tmp.MOBILE_NATIVE_UPDATE === type) {
                let obj4 = rootNavigationRef2(inviteCode[66]);
                const result5 = obj4.openBuildInstallerUrl(payload.url);
                flag = true;
              } else if (tmp.MOBILE_WEB_REDIRECT_CHECKOUT === type) {
                deepLinkAction = payload.deepLinkAction;
                remoteAuthFingerprint(pathname(function*(arg0, value) {
                  let closure_0;
                  let closure_1;
                  let paths;
                  if (inviteCode === 2) {
                    inviteCode = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp4 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      const obj2 = { value, done: true };
                      return obj2;
                    } else {
                      return { value: "IconComponent", done: "+51" };
                    }
                  } else {
                    try {
                      let tmp;
                      inviteCode = 2;
                      if (0 === c2) {
                        if (arg0 === 1) {
                          inviteCode = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          inviteCode = 3;
                          const obj4 = { value, done: true };
                          return obj4;
                        } else {
                          guildId = undefined;
                          tmp = undefined;
                          if (deepLinkAction === constants.PREMIUM_CHECKOUT_SUCCESS) {
                            gameId("succeeded");
                          } else if (deepLinkAction === constants.PREMIUM_SUBSCRIPTION_UPDATE) {
                            const obj3 = tmp2(inviteCode[67]);
                            const subscriptions = obj3.fetchSubscriptions();
                          } else if (deepLinkAction === constants.GUILD_BOOST_CHECKOUT_SUCCESS) {
                            const obj7 = tmp(inviteCode[18]);
                            obj7.popAll();
                            guildId = payload.guildId;
                            c2 = 1;
                            inviteCode = 1;
                            const obj5 = { value: tmp2(inviteCode[36])(inviteCode[46], inviteCode.paths), done: false };
                            return obj5;
                          }
                        }
                      } else if (arg0 === 1) {
                        inviteCode = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        inviteCode = 3;
                        const obj = { value, done: true };
                        return obj;
                      } else {
                        const _default = value.default;
                        tmp = _default.getGuild(guildId);
                        if (null != tmp) {
                          const obj6 = tmp2(inviteCode[47]);
                          obj6.transitionToGuild(guildId);
                          tmp(inviteCode[68])(tmp);
                        }
                      }
                      inviteCode = 3;
                      return { value: "IconComponent", done: "+51" };
                    } catch (tmp15) {
                      inviteCode = 3;
                      throw tmp15;
                    }
                  }
                }));
                flag = true;
              } else if (tmp.SHOP === type) {
                remoteAuthFingerprint(() => {
                  let items;
                  const obj = { analyticsLocations: items, analyticsSource: AnalyticsLocationDefault.DEEPLINK, screen: null, initialProductSkuId: null };
                  const openCollectiblesShopMobile = CollectiblesActionCreators.openCollectiblesShopMobile;
                  items = [];
                  CollectiblesActionCreators;
                  items[0] = AnalyticsLocationDefault.DEEPLINK;
                  ({ screen: obj.screen, skuId: obj.initialProductSkuId } = payload);
                  const result = openCollectiblesShopMobile(obj);
                });
                flag = true;
              } else if (tmp.AUTHORIZED_APPS === type) {
                remoteAuthFingerprint(() => {
                  const obj = rootNavigationRef1(inviteCode[18]);
                  obj.popAll();
                  const obj2 = payload(inviteCode[22]);
                  const obj3 = { screen: constants3.AUTHORIZED_APPS };
                  obj2.openUserSettings(obj3);
                });
                flag = true;
              } else if (tmp.DAVE_PROTOCOL_VERIFICATION === type) {
                let tmp37 = remoteAuthFingerprint;
                remoteAuthFingerprint(() => {
                  let fingerprint;
                  const obj = { userId: payload.userId, fingerprint: fingerprint.replaceAll(" ", "+") };
                  fingerprint = payload.fingerprint;
                  const handleSecureFramesUserVerificationLink = SecureFramesPlatformUtilsDefault.handleSecureFramesUserVerificationLink;
                  SecureFramesPlatformUtilsDefault;
                  const result = handleSecureFramesUserVerificationLink(obj);
                });
                flag = true;
              } else if (tmp.AGE_VERIFICATION_AGEKEY_RETURN === type) {
                const tmp36 = remoteAuthFingerprint(() => {
                  const obj = AgeKeyReturnHandler;
                  const obj2 = { result: payload.result, ageKeySaved: payload.ageKeySaved, verificationId: payload.verificationId };
                  obj.handleAgeKeyReturn(obj2);
                });
                flag = true;
              } else if (tmp.QUESTS === type) {
                const tmp34 = remoteAuthFingerprint(() => {
                  let obj2;
                  let tmp11;
                  let tmp12;
                  if (null != payload.questId) {
                    const obj = { questId: payload.questId, event: map1.QUEST_SHARE_LINK_DEEP_LINKED_INTO_MOBILE_CLIENT, sourceQuestContent: QuestContent.QuestContent.QUEST_EMBED_MOBILE, properties: obj2 };
                    const trackQuestEvent = AnalyticsActions.trackQuestEvent;
                    AnalyticsActions;
                    obj2 = { referrer_id: payload.referrerId };
                    trackQuestEvent(obj);
                  }
                  let sort;
                  if (payload != null) {
                    sort = arr.sort;
                  }
                  let filter;
                  if (payload != null) {
                    filter = arr.filter;
                  }
                  const obj3 = { scrollToQuestId: payload.questId, sort: tmp11, filter: tmp12, fromContent: QuestContent.QuestContent.QUEST_SHARE_LINK };
                  tmp11 = null;
                  const openQuestHome = QuestUtils.openQuestHome;
                  QuestUtils;
                  if (null != sort) {
                    tmp11 = null;
                    if ("" !== sort) {
                      tmp11 = sort;
                    }
                  }
                  tmp12 = null;
                  if (null != filter) {
                    tmp12 = null;
                    if ("" !== filter) {
                      tmp12 = filter;
                    }
                  }
                  openQuestHome(obj3);
                });
                flag = true;
              } else if (tmp.QUEST_HOME_PREVIEW === type) {
                remoteAuthFingerprint(() => {
                  let obj3;
                  const obj2 = { screen: constants2.QUESTS, params: obj3 };
                  obj3 = { previewAdCreativeIds: payload.adCreativeIds };
                  const obj = openUserSettings;
                  obj.openUserSettings(obj2);
                });
                flag = true;
              } else if (tmp.QUEST_BAR_PREVIEW === type) {
                const tmp29 = remoteAuthFingerprint;
                remoteAuthFingerprint(() => {
                  const obj = ModalActionCreatorsDefault;
                  obj.popAll();
                  const obj2 = NavigationRouteUtils;
                  const obj3 = { screen: "guilds", guildId };
                  obj2.navigateToRootTab(obj3);
                  const obj4 = BountyActionCreators;
                  const questBarCreativePreview = obj4.fetchQuestBarCreativePreview(payload.adCreativeId, AdPlacement.AdPlacement.MOBILE_HOME_DOCK_AREA);
                });
                flag = true;
              } else if (tmp.GIFT === type) {
                remoteAuthFingerprint(() => {
                  let items;
                  const obj = { analyticsLocations: items };
                  const openGiftModal = payload(inviteCode[78]).openGiftModal;
                  items = [];
                  payload(inviteCode[78]);
                  items[0] = rootNavigationRef1(inviteCode[70]).DEEPLINK;
                  openGiftModal(obj);
                });
                flag = true;
              } else if (tmp.NITRO_HOME === type) {
                remoteAuthFingerprint(() => {
                  const section = payload.section;
                  const setState = PremiumNitroNavigationStore.setState;
                  setState({ scrollToSectionId: section });
                  const obj = openUserSettings;
                  const obj2 = { screen: constants2.PREMIUM };
                  obj.openUserSettings(obj2);
                });
                flag = true;
              } else if (tmp.ACTIVITY === type) {
                let tmp22 = rootNavigationRef1;
                rootNavigationRef1(inviteCode[79])(payload.applicationId, payload.referrerId, payload.customId, payload.linkId, payload.isDeepLink);
                flag = true;
              } else if (tmp.CONNECTED_GAMES === type) {
                remoteAuthFingerprint(() => {
                  let obj4;
                  const obj = rootNavigationRef1(inviteCode[18]);
                  obj.popAll();
                  const obj3 = { screen: constants3.CONTENT_AND_SOCIAL, params: obj4 };
                  obj4 = { tab: constants.CONNECTED_GAMES };
                  const obj2 = payload(inviteCode[22]);
                  obj2.openUserSettings(obj3);
                });
                flag = true;
              } else if (tmp.BOOST_MARKETING === type) {
                let tmp18 = remoteAuthFingerprint;
                let tmp19 = remoteAuthFingerprint(() => {
                  const obj = BoostingActionCreators;
                  obj.openApplyBoostModal(payload.guildId);
                });
                flag = true;
              } else if (tmp.BOOST_SETTINGS === type) {
                const tmp16 = remoteAuthFingerprint;
                remoteAuthFingerprint(() => {
                  const obj = rootNavigationRef1(inviteCode[18]);
                  obj.popAll();
                  const obj2 = payload(inviteCode[22]);
                  const obj3 = { screen: constants3.GUILD_BOOSTING };
                  obj2.openUserSettings(obj3);
                });
                flag = true;
              } else if (tmp.QUEST_PREVIEW_TOOL === type) {
                const tmp14 = remoteAuthFingerprint;
                const tmp15 = remoteAuthFingerprint(() => {
                  let questId;
                  let obj = ModalActionCreatorsDefault;
                  obj.popAll();
                  closeVoicePanelsDefault();
                  const timerId = setTimeout(() => {
                    let obj3;
                    const obj2 = { screen: constants3.QUEST_PREVIEW_TOOL_2, params: obj3 };
                    obj3 = { questId: questId.questId };
                    const obj = payload(inviteCode[22]);
                    obj.openUserSettings(obj2);
                  }, 1);
                });
                flag = true;
              } else if (tmp.SUBSCRIPTION_SETTINGS === type) {
                let tmp12 = remoteAuthFingerprint;
                const tmp13 = remoteAuthFingerprint(() => {
                  const obj = rootNavigationRef1(inviteCode[18]);
                  obj.popAll();
                  const obj2 = payload(inviteCode[82]);
                  const result = obj2.openSubscriptionSettingsFromDeepLink();
                });
                flag = true;
              } else if (tmp.GAME_PROFILE === type) {
                gameId = payload.gameId;
                const tmp10 = remoteAuthFingerprint;
                let tmp11 = remoteAuthFingerprint(() => {
                  const obj = ModalActionCreatorsDefault;
                  obj.popAll();
                  const GameProfileSources = GameProfileAnalyticUtils.GameProfileSources;
                  const _default = GameProfileActionCreators.default;
                  const obj2 = { gameId, source: GameProfileSources.Deeplink, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId } };
                  _default.openGameProfileModal(obj2);
                });
                flag = true;
              } else if (tmp.MESSAGE_REQUESTS === type) {
                const tmp2 = rootNavigationRef1;
                let tmp3 = inviteCode;
                let obj = rootNavigationRef1(inviteCode[18]);
                obj.popAll();
                const tmp5 = payload;
                let obj2 = payload(inviteCode[19]);
                rootNavigationRef3 = obj2.getRootNavigationRef();
                let tmp6 = null;
                flag = true;
                if (null != rootNavigationRef3) {
                  if (rootNavigationRef3.isReady()) {
                    rootNavigationRef3.navigate("message-requests");
                    flag = true;
                  } else {
                    let tmp8 = remoteAuthFingerprint(() => {
                      rootNavigationRef3.navigate("message-requests");
                    });
                    flag = true;
                  }
                }
              } else {
                flag = false;
                if (tmp.CONJURE === type) {
                  ({ projectId: c12, guildId: c13 } = payload);
                  remoteAuthFingerprint(pathname(function*(arg0, value) {
                    let c3;
                    let closure_0;
                    let closure_1;
                    let closure_2;
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
                        return { value: "IconComponent", done: "+51" };
                      }
                    } else {
                      try {
                        let tmp4;
                        let openConjureProject;
                        c4 = 2;
                        if (0 === inviteCode) {
                          if (arg0 === 1) {
                            c4 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c4 = 3;
                            const obj3 = { value, done: true };
                            return obj3;
                          } else {
                            payload = undefined;
                            rootNavigationRef1 = undefined;
                            tmp4 = undefined;
                            openConjureProject = undefined;
                            closure_4 = undefined;
                            const obj5 = rootNavigationRef1(inviteCode[18]);
                            obj5.popAll();
                            const items = [payload(inviteCode[36])(inviteCode[85], inviteCode.paths), payload(inviteCode[36])(inviteCode[86], inviteCode.paths)];
                            inviteCode = 1;
                            c4 = 1;
                            const obj4 = { value: all(items), done: false };
                            return obj4;
                          }
                        } else if (arg0 === 1) {
                          c4 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c4 = 3;
                          const obj = { value, done: true };
                          return obj;
                        } else {
                          payload = value;
                          rootNavigationRef1 = deeplinkAttemptId(payload, 2);
                          tmp4 = rootNavigationRef1[0].resolveConjureWorkspaceGuildId;
                          openConjureProject = rootNavigationRef1[1].openConjureProject;
                          payload = closure_130_13;
                          if (closure_130_13 == null) {
                            payload = tmp4("handleSupportedURL");
                          }
                          closure_4 = payload;
                          if (null != closure_4) {
                            openConjureProject(closure_4, closure_130_12);
                          }
                          c4 = 3;
                          return { value: "IconComponent", done: "+51" };
                        }
                      } catch (tmp16) {
                        c4 = 3;
                        throw tmp16;
                      }
                    }
                  }));
                  flag = true;
                }
              }
            }
          }
          remoteAuthFingerprint(() => {
            const obj = instant_invite_InstantInviteUtils;
            const result = obj.showInstantInviteActionSheetForChannel(payload.channelId);
          });
          flag = true;
        }
      }
    }
    ({ guildId, channelId } = payload);
    if (payload.type === tmp.MESSAGE) {
      ({ messageId, summaryId } = payload);
    }
    flag = true;
    const tmp127 = null != guildId && null != channelId;
    if (tmp127) {
      const obj39 = { guildId, channelId, messageId, navigationSettings: obj42, summaryId };
      obj42 = { safe, navigationReplace, waitForConnection, skipMessageFetch, isAppStartupNavigation };
      rootNavigationRef1(inviteCode[31])(obj39);
      flag = true;
    }
  }
  if (flag) {
    const obj50 = payload(inviteCode[87]);
    const result6 = obj50.browserManagerCloseBrowser();
  }
  return flag;
};
