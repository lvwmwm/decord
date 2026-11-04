// Module ID: 15904
// Function ID: 15905
// Name: handleSupportedURL
// Dependencies: [109, 5, 7067, 6990, 7746, 15512, 502, 1072, 4997, 6850, 8080, 11089, 7856, 5881, 15905, 8573, 14458, 6879, 5323, 15906, 8891, 7703, 11644, 9591, 13438, 2017, 11559, 1252, 11561, 7562, 10360, 10847, 10848, 15912, 7031, 7487, 13576, 15914, 14491, 11084, 2123, 11090, 11088, 15916, 15918, 1624, 8097, 15927, 5843, 15929, 5012, 7662, 9112, 9107, 7643, 8078, 12175, 5322, 6928, 1099, 572, 7483, 1378, 9219, 15932, 15947, 1377, 6094, 15956, 9263, 13568, 15964, 6670, 15965, 7859, 9414, 16044, 8002, 6921, 9828, 14902, 6922, 10736, 16045, 6903, 11115, 16046, 9486, 9466, 11157, 5876, 2]
// Exports: default

// Module 15904 (handleSupportedURL)
import DispatcherDefault from "Dispatcher" /* 572 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 2017 */;
import asyncRequire from "asyncRequire" /* 2123 */;
import ChannelConstants from "ChannelConstants" /* 4997 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5322 */;
import PaymentConstants from "PaymentConstants" /* 5881 */;
import Constants2 from "Constants" /* 6850 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import BoostingActionCreators from "BoostingActionCreators" /* 6903 */;
import QuestContent from "QuestContent" /* 6921 */;
import AdPlacement from "AdPlacement" /* 6922 */;
import PostConnectionCallbackStore from "PostConnectionCallbackStore" /* 7067 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7487 */;
import openUserSettings from "openUserSettings" /* 7703 */;
import PremiumPlanPurchasedStore from "PremiumPlanPurchasedStore" /* 7746 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7856 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7859 */;
import AnalyticsActions from "AnalyticsActions" /* 8002 */;
import NativePermissionConstants from "NativePermissionConstants" /* 8080 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9219 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9263 */;
import SecureFramesPlatformUtilsDefault from "SecureFramesPlatformUtils" /* 9414 */;
import GameProfileActionCreators from "GameProfileActionCreators" /* 9466 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9486 */;
import DisplayedInviteActionCreators from "DisplayedInviteActionCreators" /* 9591 */;
import QuestUtils from "QuestUtils" /* 9828 */;
import ApplicationUtils from "ApplicationUtils" /* 11088 */;
import Constants3 from "Constants" /* 11089 */;
import closeVoicePanelsDefault from "closeVoicePanels" /* 11115 */;
import guild_templates_GuildTemplateActionCreatorsDefault from "guild_templates/GuildTemplateActionCreators" /* 13438 */;
import BountyActionCreators from "BountyActionCreators" /* 14902 */;
import ShareScreenConstants from "ShareScreenConstants" /* 15905 */;
import MidjourneyOnboardingUtils from "MidjourneyOnboardingUtils" /* 15914 */;
import GuildSettingsPickerActionCreators from "GuildSettingsPickerActionCreators" /* 15947 */;
import AgeKeyReturnHandler from "AgeKeyReturnHandler" /* 16044 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6990 */;
import PremiumNitroNavigationStore from "PremiumNitroNavigationStore" /* 15512 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let c2, c4, c7, c8;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let map1;
let tmp;
let tmp3;
const authorizeCallbackDefault = tmp(11090);
const FamilyCenterNativeUtils = tmp3(13576);
const CreateGuildModalActionCreatorsDefault = tmp(14491);
let closure_4 = ["code", "state"];
PostConnectionCallbackStore.addPostConnectionCallback;
let closure_9 = PremiumPlanPurchasedStore.handleMobileWebCheckoutStatus;
({ AnalyticEvents: closure_12, LinkingTypes: map1, Routes: closure_14, UserSettingsSections: closure_15, PlatformTypes: closure_16, ME: closure_17 } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const StreamTypes = Constants2.StreamTypes;
const NativePermissionTypes = NativePermissionConstants.NativePermissionTypes;
let closure_21 = Constants3.OAUTH2_AUTHORIZE_MODAL_KEY;
let closure_22 = FamilyCenterConstants.FAMILY_CENTER_LINK_REQUEST_REGEX;
let closure_23 = PaymentConstants.MobileWebRedirectCheckoutDeepLinkActions;
const SHARE_SCREEN_MODAL_KEY = ShareScreenConstants.SHARE_SCREEN_MODAL_KEY;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let result = size.fileFinishedImporting("modules/links/native/handleSupportedURL.tsx");

export default function handleSupportedURL(payload) {
  let OAUTH2_AUTHORIZE;
  let channelId;
  let channelId2;
  let conversationId;
  let diceCount;
  let diceSides;
  let fingerprint;
  let flag;
  let guildId2;
  let isAppStartupNavigation;
  let messageId;
  let navigationReplace;
  let nonce;
  let obj13;
  let obj27;
  let obj39;
  let obj45;
  let regex;
  let safe;
  let skipMessageFetch;
  let summaryId;
  let userProfileNavigationReplace;
  let waitForConnection;
  payload = payload.payload;
  ({ safe, navigationReplace, waitForConnection, skipMessageFetch, isAppStartupNavigation, userProfileNavigationReplace } = payload);
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
  const type = payload.type;
  let tmp = constants2;
  if (constants2.CONTACT_SYNC === type) {
    const obj51 = payload(inviteCode[16]);
    let result = obj51.openContactSyncModalDeeplink();
    flag = true;
  } else if (tmp.COMPOSE_MESSAGE === type) {
    const obj47 = rootNavigationRef1(inviteCode[17]);
    const popAllResult = obj47.popAll();
    const obj48 = payload(inviteCode[18]);
    const rootNavigationRef = obj48.getRootNavigationRef();
    flag = true;
    if (null != rootNavigationRef) {
      let obj3 = { screen: "new-message", params: { sourcePage: "Deeplink" } };
      rootNavigationRef.navigate("friends", obj3);
      flag = true;
    }
  } else if (tmp.ADD_FRIENDS === type) {
    const obj42 = rootNavigationRef1(inviteCode[17]);
    obj42.popAll();
    const obj43 = payload(inviteCode[18]);
    const tmp167 = rootNavigationRef1;
    rootNavigationRef1 = obj43.getRootNavigationRef();
    const tmp168 = inviteCode;
    if (null == rootNavigationRef1) {
      const tmp167Result = tmp167(tmp168[19]);
      const result1 = tmp167Result.openAddFriendModalDeeplink();
      flag = true;
    } else if (rootNavigationRef1.isReady()) {
      let obj12 = { screen: "add-friends", params: { sourcePage: "Deeplink" } };
      rootNavigationRef1.navigate("friends", obj12);
      flag = true;
    } else {
      pathname(() => rootNavigationRef1.navigate("friends", { screen: "add-friends", params: { sourcePage: "Deeplink" } }));
      flag = true;
    }
  } else if (tmp.FRIENDS === type) {
    const obj37 = rootNavigationRef1(inviteCode[17]);
    obj37.popAll();
    const obj38 = payload(inviteCode[18]);
    rootNavigationRef2 = obj38.getRootNavigationRef();
    const tmp159 = inviteCode;
    const tmp161 = payload;
    if (null != rootNavigationRef2) {
      if (rootNavigationRef2.isReady()) {
        rootNavigationRef2.navigate("friends");
      } else {
        pathname(() => {
          rootNavigationRef2.navigate("friends");
        });
      }
    }
    flag = true;
    if (null != payload.userId) {
      const obj17 = { userId: payload.userId, navigationReplace: userProfileNavigationReplace };
      const tmp161Result = tmp161(tmp159[20]);
      const result2 = tmp161Result.showUserProfileActionSheetPostConnection(obj17);
      flag = true;
    }
  } else if (tmp.EDIT_PROFILE === type) {
    pathname(() => {
      const obj = rootNavigationRef1(inviteCode[17]);
      obj.popAll();
      const obj2 = payload(inviteCode[21]);
      const obj3 = { screen: constants3.PROFILE_CUSTOMIZATION };
      obj2.openUserSettings(obj3);
    });
    flag = true;
  } else if (tmp.BADGE_DIRECTORY === type) {
    pathname(() => {
      const obj = rootNavigationRef1(inviteCode[17]);
      obj.popAll();
      const obj2 = payload(inviteCode[22]);
      const result = obj2.openBadgeDirectoryScreen();
    });
    flag = true;
  } else if (tmp.INVITE === type) {
    inviteCode = payload.inviteCode;
    username = payload.username;
    deeplinkAttemptId = payload.deeplinkAttemptId;
    if (!rootNavigationRef3.isAuthenticated()) {
      if (null != inviteCode) {
        const obj20 = { deeplinkAttemptId, location: "Deep Link" };
        const obj35 = payload(inviteCode[23]);
        obj35.showInvite(inviteCode, username, obj20);
        flag = true;
      }
    }
    pathname(() => {
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
    pathname(() => {
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
      const obj34 = payload(inviteCode[26]);
      const giftCode1 = obj34.resolveGiftCode(giftCode);
      let nextPromise = giftCode1.then((giftCode) => {
        giftCode = giftCode.giftCode;
        const obj = rootNavigationRef1(inviteCode[27]);
        obj.track(constants.OPEN_MODAL, { type: "gift_accept", location: null });
        const obj2 = payload(inviteCode[28]);
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
      const obj31 = payload(inviteCode[29]);
      obj31.startDiceRoll(channelId2, diceCount, diceSides);
      const obj22 = { guildId: guildId2, channelId: channelId2, messageId: "Array", navigationSettings: obj27 };
      obj27 = { safe, navigationReplace, waitForConnection, skipMessageFetch, isAppStartupNavigation };
      rootNavigationRef1(inviteCode[30])(obj22);
      flag2 = true;
    }
    flag = flag2;
  } else if (tmp.SOCIAL_LAYER_STOREFRONT === type) {
    pathname(guildTemplateCode(function*(arg0, value) {
      let c3;
      let closure_0;
      let closure_1;
      let items;
      let skuId;
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
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let tmp;
          let openSocialLayerStorefrontUnsupportedOnMobileAlert;
          inviteCode = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              inviteCode = 3;
              throw value;
            } else if (arg0 === 2) {
              inviteCode = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              tmp = undefined;
              rootNavigationRef2 = undefined;
              const obj7 = tmp(inviteCode[17]);
              obj7.popAll();
              const tmp40 = tmp2(inviteCode[31]);
              openSocialLayerStorefrontUnsupportedOnMobileAlert = tmp40.openSocialLayerStorefrontUnsupportedOnMobileAlert;
              tmp = tmp40.openSocialLayerStorefrontProductDetailsModal;
              if (null != payload.skuId) {
                const fetchSocialLayerStorefrontSku = tmp38(inviteCode[32]).fetchSocialLayerStorefrontSku;
                const _default = tmp2(inviteCode[33]).default;
                rootNavigationRef2 = tmp38(inviteCode[34]).default;
                ({ guildId, skuId } = payload);
                c2 = 1;
                inviteCode = 1;
                const obj4 = { value: fetchSocialLayerStorefrontSku(guildId, skuId, _default()), done: false };
                return obj4;
              } else {
                const result = openSocialLayerStorefrontUnsupportedOnMobileAlert();
              }
            }
          } else if (arg0 === 1) {
            inviteCode = 3;
            throw value;
          } else if (arg0 === 2) {
            inviteCode = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            if (null != rootNavigationRef2.get(closure_129_0.skuId)) {
              if (!rootNavigationRef2.didFetchingSkuFail(closure_129_0.skuId)) {
                const obj = { skuId: closure_129_0.skuId, analyticsLocations: items };
                items = [tmp(inviteCode[35]).URI_SCHEME];
                tmp(obj);
              }
            }
            openSocialLayerStorefrontUnsupportedOnMobileAlert();
            inviteCode = 3;
            const obj6 = { value: undefined, done: true };
            return obj6;
          }
          inviteCode = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp26) {
          inviteCode = 3;
          throw tmp26;
        }
      }
    }));
    flag = true;
  } else {
    if (tmp.CHANNEL !== type) {
      if (tmp.MESSAGE !== type) {
        if (tmp.SESSION_MANAGEMENT === type) {
          pathname(() => {
            const obj = rootNavigationRef1(inviteCode[17]);
            obj.popAll();
            const obj2 = payload(inviteCode[21]);
            const obj3 = { screen: constants3.SESSIONS };
            obj2.openUserSettings(obj3);
          });
          flag = true;
        } else if (tmp.FAMILY_CENTER === type) {
          let obj28 = payload;
          if (payload == null) {
            obj28 = {};
          }
          pathname = obj28.pathname;
          let tmp122 = null;
          if (undefined !== pathname) {
            tmp122 = pathname;
          }
          pathname = tmp122;
          pathname(() => {
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
          pathname(() => {
            let type;
            const tmp = importDefault;
            let obj = ModalActionCreatorsDefault;
            obj.popAll();
            let obj2 = MidjourneyOnboardingUtils;
            if (obj2.isMidjourneyOnboardingFlow()) {
              const tmpResult = CreateGuildModalActionCreatorsDefault;
              tmpResult.openCreateGuildModal(function openOAuth2Modal(guildId) {
                if (type.type === OAUTH2_AUTHORIZE.OAUTH2_AUTHORIZE) {
                  let obj = rootNavigationRef1(inviteCode[17]);
                  obj.popAll();
                  const pushLazy = rootNavigationRef1(inviteCode[17]).pushLazy;
                  const obj2 = {
                    guildId,
                    callback: rootNavigationRef1(inviteCode[41]),
                    dismissOAuthModal() {
                        const obj = closure_1_1(closure_1_3[17]);
                        obj.popWithKey(closure_1_21);
                      }
                  };
                  rootNavigationRef1(inviteCode[17]);
                  const tmp8 = payload(inviteCode[40])(inviteCode[39], inviteCode.paths);
                  const merged = Object.assign(tmp.props);
                  pushLazy(tmp8, obj2, closure_2_21);
                }
              });
            } else {
              const obj3 = { callback: authorizeCallbackDefault };
              const openOAuth2Modal = tmp4(11088).openOAuth2Modal;
              ApplicationUtils;
              let merged = Object.assign(payload.props);
              openOAuth2Modal(obj3);
            }
          });
          flag = true;
        } else if (tmp.ONE_TIME_LOGIN === type) {
          const obj25 = rootNavigationRef1(inviteCode[17]);
          obj25.popAll();
          const obj29 = { token: payload.token };
          const obj26 = rootNavigationRef1(inviteCode[17]);
          obj26.pushLazy(payload(inviteCode[40])(inviteCode[43], inviteCode.paths), obj29, "ONE_TIME_LOGIN_MODAL");
          flag = true;
        } else if (tmp.REMOTE_AUTH === type) {
          remoteAuthFingerprint = payload.remoteAuthFingerprint;
          pathname(null != remoteAuthFingerprint ? (() => {
            const obj = ModalActionCreatorsDefault;
            const obj2 = { remoteAuthFingerprint };
            obj.pushLazy(asyncRequire(15918, dependencyMap.paths), obj2, "REMOTE_AUTH_MODAL");
          }) : (() => {
            let paths;
            let tmp = inviteCode;
            let obj = payload(inviteCode[45]);
            const tmp3 = obj.isMetaQuest() ? NativePermissionTypes.HEADSET_CAMERA : NativePermissionTypes.CAMERA;
            const obj2 = rootNavigationRef1(tmp[46]);
            const permission = obj2.requestPermission(tmp3);
            const nextPromise = permission.then((result) => {
              const tmp = result;
              if (tmp) {
                const obj = rootNavigationRef1(paths[17]);
                obj.pushLazy(payload(paths[40])(paths[47], paths.paths), { showHelp: true });
              }
            });
            nextPromise.catch(() => {

            });
          }));
          flag = true;
        } else if (tmp.PROMOTIONS === type) {
          const obj24 = rootNavigationRef1(inviteCode[48]);
          obj24.performURLNavigation(payload.url);
          flag = true;
        } else if (tmp.FEATURE_PROMO_URL === type) {
          const obj23 = rootNavigationRef1(inviteCode[48]);
          obj23.openURLExternally(payload.promoUrl);
          flag = true;
        } else if (tmp.USER_PROFILE === type) {
          flag = true;
          if (null != payload.userId) {
            const obj30 = { userId: payload.userId, navigationReplace: userProfileNavigationReplace };
            const obj21 = payload(inviteCode[20]);
            const result3 = obj21.showUserProfileActionSheetPostConnection(obj30);
            flag = true;
          }
        } else if (tmp.BUILD_OVERRIDE === type) {
          const overrideUrl = payload.overrideUrl;
          const obj18 = rootNavigationRef1(inviteCode[17]);
          obj18.popAll();
          const obj32 = { overrideUrl };
          const obj19 = rootNavigationRef1(inviteCode[17]);
          obj19.pushLazy(payload(inviteCode[40])(inviteCode[49], inviteCode.paths), obj32);
          flag = true;
        } else if (tmp.GUILD_EVENT_DETAILS === type) {
          pathname(guildTemplateCode(function*(arg0, value) {
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
                return { value: "HermesInternal", done: null };
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
                    const obj11 = tmp2(inviteCode[17]);
                    obj11.popAll();
                    ({ guildId: c0, guildEventId: c1 } = payload);
                    inviteCode = 1;
                    c4 = 1;
                    const obj7 = { value: guildScheduledEvent(inviteCode[40])(inviteCode[50], inviteCode.paths), done: false };
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
                        const obj2 = guildScheduledEvent(inviteCode[51]);
                        obj2.transitionToGuild(c0);
                      }
                      guildScheduledEvent = guildScheduledEvent.getGuildScheduledEvent(c1);
                      if (guildScheduledEvent == null) {
                        const obj5 = tmp2(inviteCode[52]);
                        const guildEvent = obj5.fetchGuildEvent(c0, c1, { priority: "foreground" });
                        inviteCode = 2;
                        c4 = 1;
                        const obj9 = { value: guildEvent.catch(() => null), done: false };
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
                    const obj3 = guildScheduledEvent(inviteCode[53]);
                    const result = obj3.openGuildEventDetails(obj10);
                  }
                  c4 = 3;
                  return { value: "HermesInternal", done: null };
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
          const obj33 = { nonce, fingerprint, skipLoginRedirect: true };
          const obj16 = rootNavigationRef1(inviteCode[54]);
          const result4 = obj16.redirectWithHandoffToken("" + redirectUrl.pathname + redirectUrl.search, obj33);
          flag = true;
        } else if (tmp.VOICE_CHANNEL === type) {
          pathname(guildTemplateCode(function*(arg0, value) {
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
                return { value: "HermesInternal", done: null };
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
                      const obj5 = rootNavigationRef1(paths[17]);
                      obj5.popAll();
                      rootNavigationRef1 = 1;
                      c2 = 1;
                      const obj6 = { value: tmp3(paths[40])(paths[50], paths.paths), done: false };
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
                    const obj = tmp3(paths[51]);
                    obj.transitionToGuild(closure_128_0.guildId);
                  }
                  const obj8 = { streamType: constants.GUILD, ownerId: closure_128_0.userId, guildId: closure_128_0.guildId, channelId: closure_128_0.channelId };
                  rootNavigationRef1(paths[55])(obj8);
                }
                const tmp22 = "transfer_cancelled" === closure_128_0.action && "xbox" === closure_128_0.via;
                if (tmp22) {
                  const obj4 = tmp3(paths[56]);
                  obj4.disconnectRemote();
                }
                c2 = 3;
                return { value: "HermesInternal", done: null };
              } catch (tmp36) {
                c2 = 3;
                throw tmp36;
              }
            }
          }));
          flag = true;
        } else if (tmp.ICYMI === type) {
          pathname(() => {
            const obj = payload(inviteCode[57]);
            obj.navigateToRootTab({ screen: "icymi" });
          });
          flag = true;
        } else if (tmp.GUILD_HOME === type) {
          flag = true;
          if (null != payload.guildId) {
            let tmp77;
            if (null != payload.highlightChannelId) {
              if (null != payload.highlightMessageId) {
                const obj36 = { search: obj13.stringify(obj39) };
                obj39 = { highlight_channel_id: null, highlight_message_id: null };
                ({ highlightChannelId: obj14.highlight_channel_id, highlightMessageId: obj14.highlight_message_id } = payload);
                tmp77 = obj36;
                obj13 = payload(inviteCode[58]);
              }
            }
            const obj15 = payload(inviteCode[59]);
            obj15.transitionTo(closure_14.CHANNEL(payload.guildId, StaticChannelRoute.GUILD_HOME), tmp77);
            flag = true;
          }
        } else if (tmp.USER_CONNECTIONS_LINK_CALLBACK === type) {
          pathname(() => {
            let hasItem = null != payload.callbackCode && null != tmp.callbackState && null != tmp.provider;
            if (hasItem) {
              const items = [, , , ];
              ({ XBOX: arr[0], PLAYSTATION: arr[1], PLAYSTATION_STAGING: arr[2], CRUNCHYROLL: arr[3] } = authStore4);
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
          pathname(guildTemplateCode(function*(arg0, value) {
            let closure_0;
            let closure_1;
            let closure_3;
            let closure_5;
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
                return { value: "HermesInternal", done: null };
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
                    let closure_6 = tmp4;
                    payload = undefined;
                    rootNavigationRef1 = undefined;
                    const searchParams = payload.searchParams;
                    const state = searchParams.state;
                    const provider = payload.provider;
                    const code = searchParams.code;
                    const tmp49 = tmp(searchParams, obj3);
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
                      const obj5 = rootNavigationRef1(inviteCode[17]);
                      obj5.popAll();
                      const obj10 = { screen: constants.CONNECTIONS };
                      const obj6 = payload(inviteCode[21]);
                      obj6.openUserSettings(obj10);
                      c7 = 1;
                      c8 = 1;
                      const obj11 = { value: obj8.callback(provider, obj7), done: false };
                      obj8 = rootNavigationRef1(inviteCode[61]);
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
                  const toURLSafe = rootNavigationRef1(inviteCode[62]).toURLSafe;
                  const tmp37 = rootNavigationRef1(inviteCode[62]);
                  if (body != null) {
                    redirect = body.redirect;
                  }
                  rootNavigationRef1 = toURLSafe(redirect);
                  if (null != rootNavigationRef1) {
                    const obj12 = rootNavigationRef1(inviteCode[48]);
                    obj12.openURL(rootNavigationRef1.toString());
                  }
                }
                c8 = 3;
                return { value: "HermesInternal", done: null };
              } catch (tmp29) {
                c8 = 3;
                throw tmp29;
              }
            }
          }));
          flag = true;
        } else if (tmp.CONNECTIONS === type) {
          pathname(() => {
            const obj = rootNavigationRef1(inviteCode[17]);
            obj.popAll();
            const obj2 = payload(inviteCode[21]);
            const obj3 = { screen: constants3.CONNECTIONS };
            obj2.openUserSettings(obj3);
          });
          flag = true;
        } else if (tmp.GUILD_SETTINGS === type) {
          pathname(() => {
            if (null != payload.guildId) {
              const obj = GuildSettingsActionCreatorsDefault;
              obj.open(payload.guildId, payload.settingsSection, undefined, payload.settingsSubsection);
            }
          });
          flag = true;
        } else if (tmp.ACTIVATE_DEVICE === type) {
          let obj11 = rootNavigationRef1(inviteCode[64]);
          obj11.showModal(payload.userCode);
          flag = true;
        } else if (tmp.GUILD_SETTINGS_PICKER === type) {
          pathname(() => {
            const obj = GuildSettingsPickerActionCreators;
            const obj2 = { section: payload.settingsSection, subsection: payload.settingsSubsection, feature: payload.feature };
            const result = obj.openGuildSettingsPickerModal(obj2);
          });
          flag = true;
        } else if (tmp.SHARE === type) {
          let obj6 = payload(inviteCode[66]);
          flag = true;
          const tmp53 = payload;
          if (obj6.isIOS()) {
            let tmp55 = rootNavigationRef1;
            let obj7 = rootNavigationRef1(tmp54[17]);
            obj7.popAll();
            let obj8 = rootNavigationRef1(tmp54[67]);
            obj8.closeAll();
            let obj9 = rootNavigationRef1(tmp54[17]);
            const obj40 = { text: null, channelId: null, shareId: null, attachmentManifest: null };
            ({ text: obj10.text, channelId: obj10.channelId, shareId: obj10.shareId, attachmentManifest: obj10.attachmentManifest } = payload);
            let tmp58 = SHARE_SCREEN_MODAL_KEY;
            let tmp59 = obj9;
            obj9.pushLazy(tmp53(inviteCode[40])(inviteCode[68], inviteCode.paths), obj40, SHARE_SCREEN_MODAL_KEY, { presentation: "modal" });
            flag = true;
          }
        } else {
          if (tmp.CREATE_VOICE_INVITE !== type) {
            if (tmp.SEND_VOICE_HANGOUT_WAVE !== type) {
              if (tmp.ACCOUNT_STANDING === type) {
                let tmp49 = pathname;
                pathname(() => {
                  const obj = rootNavigationRef1(inviteCode[17]);
                  obj.popAll();
                  const obj2 = payload(inviteCode[70]);
                  obj2.openAccountStanding();
                });
                flag = true;
              } else if (tmp.MOBILE_NATIVE_UPDATE === type) {
                let obj5 = rootNavigationRef2(inviteCode[71]);
                const result5 = obj5.openBuildInstallerUrl(payload.url);
                flag = true;
              } else if (tmp.MOBILE_WEB_REDIRECT_CHECKOUT === type) {
                deepLinkAction = payload.deepLinkAction;
                pathname(guildTemplateCode(function*(arg0, value) {
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
                      return { value: "HermesInternal", done: null };
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
                            deepLinkAction("succeeded");
                          } else if (deepLinkAction === constants.PREMIUM_SUBSCRIPTION_UPDATE) {
                            const obj3 = tmp2(inviteCode[72]);
                            const subscriptions = obj3.fetchSubscriptions();
                          } else if (deepLinkAction === constants.GUILD_BOOST_CHECKOUT_SUCCESS) {
                            const obj7 = tmp(inviteCode[17]);
                            obj7.popAll();
                            guildId = payload.guildId;
                            c2 = 1;
                            inviteCode = 1;
                            const obj5 = { value: tmp2(inviteCode[40])(inviteCode[50], inviteCode.paths), done: false };
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
                          const obj6 = tmp2(inviteCode[51]);
                          obj6.transitionToGuild(guildId);
                          tmp(inviteCode[73])(tmp);
                        }
                      }
                      inviteCode = 3;
                      return { value: "HermesInternal", done: null };
                    } catch (tmp15) {
                      inviteCode = 3;
                      throw tmp15;
                    }
                  }
                }));
                flag = true;
              } else if (tmp.SHOP === type) {
                pathname(() => {
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
                let tmp40 = pathname(() => {
                  const obj = rootNavigationRef1(inviteCode[17]);
                  obj.popAll();
                  const obj2 = payload(inviteCode[21]);
                  const obj3 = { screen: constants3.AUTHORIZED_APPS };
                  obj2.openUserSettings(obj3);
                });
                flag = true;
              } else if (tmp.DAVE_PROTOCOL_VERIFICATION === type) {
                let tmp37 = pathname;
                const tmp38 = pathname(() => {
                  let fingerprint;
                  const obj = { userId: payload.userId, fingerprint: fingerprint.replaceAll(" ", "+") };
                  fingerprint = payload.fingerprint;
                  const handleSecureFramesUserVerificationLink = SecureFramesPlatformUtilsDefault.handleSecureFramesUserVerificationLink;
                  SecureFramesPlatformUtilsDefault;
                  const result = handleSecureFramesUserVerificationLink(obj);
                });
                flag = true;
              } else if (tmp.AGE_VERIFICATION_AGEKEY_RETURN === type) {
                const tmp36 = pathname(() => {
                  const obj = AgeKeyReturnHandler;
                  const obj2 = { result: payload.result, ageKeySaved: payload.ageKeySaved, verificationId: payload.verificationId };
                  obj.handleAgeKeyReturn(obj2);
                });
                flag = true;
              } else if (tmp.QUESTS === type) {
                const tmp34 = pathname(() => {
                  let obj2;
                  let tmp11;
                  let tmp12;
                  if (null != payload.questId) {
                    const obj = { questId: payload.questId, event: constants.QUEST_SHARE_LINK_DEEP_LINKED_INTO_MOBILE_CLIENT, sourceQuestContent: QuestContent.QuestContent.QUEST_EMBED_MOBILE, properties: obj2 };
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
                pathname(() => {
                  let obj3;
                  const obj2 = { screen: constants2.QUESTS, params: obj3 };
                  obj3 = { previewAdCreativeIds: payload.adCreativeIds };
                  const obj = openUserSettings;
                  obj.openUserSettings(obj2);
                });
                flag = true;
              } else if (tmp.QUEST_BAR_PREVIEW === type) {
                const tmp29 = pathname;
                pathname(() => {
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
                pathname(() => {
                  let items;
                  const obj = { analyticsLocations: items };
                  const openGiftModal = payload(inviteCode[82]).openGiftModal;
                  items = [];
                  payload(inviteCode[82]);
                  items[0] = rootNavigationRef1(inviteCode[35]).DEEPLINK;
                  openGiftModal(obj);
                });
                flag = true;
              } else if (tmp.NITRO_HOME === type) {
                const tmp26 = pathname(() => {
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
                const obj41 = { applicationId: null, referrerId: null, customId: null, linkId: null, channelId: null, isDeepLink: null };
                ({ applicationId: obj4.applicationId, referrerId: obj4.referrerId, customId: obj4.customId, linkId: obj4.linkId, channelId: obj4.channelId, isDeepLink: obj4.isDeepLink } = payload);
                rootNavigationRef1(inviteCode[83])(obj41);
                flag = true;
              } else if (tmp.CONNECTED_GAMES === type) {
                pathname(() => {
                  let obj4;
                  const obj = rootNavigationRef1(inviteCode[17]);
                  obj.popAll();
                  const obj3 = { screen: constants3.CONTENT_AND_SOCIAL, params: obj4 };
                  obj4 = { tab: constants2.CONNECTED_GAMES };
                  const obj2 = payload(inviteCode[21]);
                  obj2.openUserSettings(obj3);
                });
                flag = true;
              } else if (tmp.BOOST_MARKETING === type) {
                let tmp18 = pathname;
                let tmp19 = pathname(() => {
                  const obj = BoostingActionCreators;
                  obj.openApplyBoostModal(payload.guildId);
                });
                flag = true;
              } else if (tmp.BOOST_SETTINGS === type) {
                const tmp16 = pathname;
                pathname(() => {
                  const obj = rootNavigationRef1(inviteCode[17]);
                  obj.popAll();
                  const obj2 = payload(inviteCode[21]);
                  const obj3 = { screen: constants3.GUILD_BOOSTING };
                  obj2.openUserSettings(obj3);
                });
                flag = true;
              } else if (tmp.QUEST_PREVIEW_TOOL === type) {
                const tmp14 = pathname;
                const tmp15 = pathname(() => {
                  let questId;
                  let obj = ModalActionCreatorsDefault;
                  obj.popAll();
                  closeVoicePanelsDefault();
                  const timerId = setTimeout(() => {
                    let obj3;
                    const obj2 = { screen: constants3.QUEST_PREVIEW_TOOL_2, params: obj3 };
                    obj3 = { questId: questId.questId };
                    const obj = payload(inviteCode[21]);
                    obj.openUserSettings(obj2);
                  }, 1);
                });
                flag = true;
              } else if (tmp.SUBSCRIPTION_SETTINGS === type) {
                let tmp12 = pathname;
                const tmp13 = pathname(() => {
                  const obj = rootNavigationRef1(inviteCode[17]);
                  obj.popAll();
                  const obj2 = payload(inviteCode[86]);
                  const result = obj2.openSubscriptionSettingsFromDeepLink();
                });
                flag = true;
              } else if (tmp.GAME_PROFILE === type) {
                gameId = payload.gameId;
                const tmp10 = pathname;
                let tmp11 = pathname(() => {
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
                let obj = rootNavigationRef1(inviteCode[17]);
                obj.popAll();
                const tmp5 = payload;
                let obj2 = payload(inviteCode[18]);
                rootNavigationRef3 = obj2.getRootNavigationRef();
                let tmp6 = null;
                flag = true;
                if (null != rootNavigationRef3) {
                  if (rootNavigationRef3.isReady()) {
                    rootNavigationRef3.navigate("message-requests");
                    flag = true;
                  } else {
                    let tmp8 = pathname(() => {
                      rootNavigationRef3.navigate("message-requests");
                    });
                    flag = true;
                  }
                }
              } else {
                flag = false;
                if (tmp.CONJURE === type) {
                  const obj53 = rootNavigationRef1(inviteCode[17]);
                  obj53.popAll();
                  const obj54 = payload(inviteCode[89]);
                  const result6 = obj54.openConjureHomeScreenWhenReady(payload.projectId);
                  flag = true;
                }
              }
            }
          }
          pathname(() => {
            const obj = instant_invite_InstantInviteUtils;
            const result = obj.showInstantInviteActionSheetForChannel(payload.channelId);
          });
          flag = true;
        }
      }
    }
    ({ guildId, channelId } = payload);
    conversationId = null;
    if (payload.type === tmp.MESSAGE) {
      ({ messageId, summaryId, conversationId } = payload);
    }
    flag = true;
    const tmp128 = null != guildId && null != channelId;
    if (tmp128) {
      const obj44 = { guildId, channelId, messageId, navigationSettings: obj45, summaryId, conversationId };
      obj45 = { safe, navigationReplace, waitForConnection, skipMessageFetch, isAppStartupNavigation };
      rootNavigationRef1(inviteCode[30])(obj44);
      flag = true;
    }
  }
  if (flag) {
    const obj52 = payload(inviteCode[90]);
    const result7 = obj52.browserManagerCloseBrowser();
  }
  return flag;
};
