// Module ID: 16010
// Function ID: 16011
// Name: handleSupportedURL
// Dependencies: [109, 5, 6988, 6913, 7685, 15590, 502, 5173, 1072, 4998, 6772, 8013, 11045, 7795, 5874, 16011, 8507, 14509, 6801, 5317, 16012, 8827, 7638, 11607, 9531, 13430, 2017, 11521, 1252, 11523, 7489, 10309, 10797, 10798, 16018, 6954, 7415, 13601, 16019, 14542, 11040, 2118, 11046, 11044, 16021, 16023, 1624, 8030, 16032, 5836, 16034, 5013, 7597, 9052, 9047, 7578, 8011, 12154, 5316, 6851, 1099, 572, 7411, 1378, 9160, 16037, 16052, 1377, 6093, 16061, 9204, 13593, 16069, 6591, 16070, 7798, 9355, 16150, 7943, 6844, 9775, 14953, 6845, 10686, 16151, 6826, 11071, 16152, 9427, 9407, 11113, 13011, 5868, 2]
// Exports: default

// Module 16010 (handleSupportedURL)
import DispatcherDefault from "Dispatcher" /* 572 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 2017 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import ChannelConstants from "ChannelConstants" /* 4998 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5316 */;
import PaymentConstants from "PaymentConstants" /* 5874 */;
import Constants2 from "Constants" /* 6772 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6801 */;
import BoostingActionCreators from "BoostingActionCreators" /* 6826 */;
import QuestContent from "QuestContent" /* 6844 */;
import AdPlacement from "AdPlacement" /* 6845 */;
import PostConnectionCallbackStore from "PostConnectionCallbackStore" /* 6988 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7415 */;
import openUserSettings from "openUserSettings" /* 7638 */;
import PremiumPlanPurchasedStore from "PremiumPlanPurchasedStore" /* 7685 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7795 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7798 */;
import AnalyticsActions from "AnalyticsActions" /* 7943 */;
import NativePermissionConstants from "NativePermissionConstants" /* 8013 */;
import SettingsConstants from "SettingsConstants" /* 8507 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9160 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9204 */;
import SecureFramesPlatformUtilsDefault from "SecureFramesPlatformUtils" /* 9355 */;
import GameProfileActionCreators from "GameProfileActionCreators" /* 9407 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9427 */;
import DisplayedInviteActionCreators from "DisplayedInviteActionCreators" /* 9531 */;
import QuestUtils from "QuestUtils" /* 9775 */;
import ApplicationUtils from "ApplicationUtils" /* 11044 */;
import Constants3 from "Constants" /* 11045 */;
import closeVoicePanelsDefault from "closeVoicePanels" /* 11071 */;
import guild_templates_GuildTemplateActionCreatorsDefault from "guild_templates/GuildTemplateActionCreators" /* 13430 */;
import BountyActionCreators from "BountyActionCreators" /* 14953 */;
import ShareScreenConstants from "ShareScreenConstants" /* 16011 */;
import MidjourneyOnboardingUtils from "MidjourneyOnboardingUtils" /* 16019 */;
import GuildSettingsPickerActionCreators from "GuildSettingsPickerActionCreators" /* 16052 */;
import AgeKeyReturnHandler from "AgeKeyReturnHandler" /* 16150 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6913 */;
import PremiumNitroNavigationStore from "PremiumNitroNavigationStore" /* 15590 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5173 */;
import Constants from "Constants" /* 1072 */;
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
const authorizeCallbackDefault = tmp(11046);
const FamilyCenterNativeUtils = tmp3(13601);
const CreateGuildModalActionCreatorsDefault = tmp(14542);
let closure_4 = ["code", "state"];
PostConnectionCallbackStore.addPostConnectionCallback;
let closure_9 = PremiumPlanPurchasedStore.handleMobileWebCheckoutStatus;
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
  let obj16;
  let obj30;
  let obj42;
  let obj48;
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
    const obj54 = payload(inviteCode[17]);
    let result = obj54.openContactSyncModalDeeplink();
    flag = true;
  } else if (tmp.COMPOSE_MESSAGE === type) {
    const obj50 = rootNavigationRef1(inviteCode[18]);
    const popAllResult = obj50.popAll();
    const obj51 = payload(inviteCode[19]);
    const rootNavigationRef = obj51.getRootNavigationRef();
    flag = true;
    if (null != rootNavigationRef) {
      let obj6 = { screen: "new-message", params: { sourcePage: "Deeplink" } };
      rootNavigationRef.navigate("friends", obj6);
      flag = true;
    }
  } else if (tmp.ADD_FRIENDS === type) {
    const obj45 = rootNavigationRef1(inviteCode[18]);
    obj45.popAll();
    const obj46 = payload(inviteCode[19]);
    const tmp174 = rootNavigationRef1;
    rootNavigationRef1 = obj46.getRootNavigationRef();
    const tmp175 = inviteCode;
    if (null == rootNavigationRef1) {
      const tmp174Result = tmp174(tmp175[20]);
      const result1 = tmp174Result.openAddFriendModalDeeplink();
      flag = true;
    } else if (rootNavigationRef1.isReady()) {
      const obj15 = { screen: "add-friends", params: { sourcePage: "Deeplink" } };
      rootNavigationRef1.navigate("friends", obj15);
      flag = true;
    } else {
      pathname(() => rootNavigationRef1.navigate("friends", { screen: "add-friends", params: { sourcePage: "Deeplink" } }));
      flag = true;
    }
  } else if (tmp.FRIENDS === type) {
    const obj40 = rootNavigationRef1(inviteCode[18]);
    obj40.popAll();
    const obj41 = payload(inviteCode[19]);
    rootNavigationRef2 = obj41.getRootNavigationRef();
    const tmp166 = inviteCode;
    const tmp168 = payload;
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
      const obj20 = { userId: payload.userId, navigationReplace: userProfileNavigationReplace };
      const tmp168Result = tmp168(tmp166[21]);
      const result2 = tmp168Result.showUserProfileActionSheetPostConnection(obj20);
      flag = true;
    }
  } else if (tmp.EDIT_PROFILE === type) {
    pathname(() => {
      const obj = rootNavigationRef1(inviteCode[18]);
      obj.popAll();
      const obj2 = payload(inviteCode[22]);
      const obj3 = { screen: constants3.PROFILE_CUSTOMIZATION };
      obj2.openUserSettings(obj3);
    });
    flag = true;
  } else if (tmp.BADGE_DIRECTORY === type) {
    pathname(() => {
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
    if (!rootNavigationRef3.isAuthenticated()) {
      if (null != inviteCode) {
        const obj23 = { deeplinkAttemptId, location: "Deep Link" };
        const obj38 = payload(inviteCode[24]);
        obj38.showInvite(inviteCode, username, obj23);
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
      const obj37 = payload(inviteCode[27]);
      const giftCode1 = obj37.resolveGiftCode(giftCode);
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
      const obj34 = payload(inviteCode[30]);
      obj34.startDiceRoll(channelId2, diceCount, diceSides);
      const obj25 = { guildId: guildId2, channelId: channelId2, messageId: "Array", navigationSettings: obj30 };
      obj30 = { safe, navigationReplace, waitForConnection, skipMessageFetch, isAppStartupNavigation };
      rootNavigationRef1(inviteCode[31])(obj25);
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
              const obj7 = tmp(inviteCode[18]);
              obj7.popAll();
              const tmp40 = tmp2(inviteCode[32]);
              openSocialLayerStorefrontUnsupportedOnMobileAlert = tmp40.openSocialLayerStorefrontUnsupportedOnMobileAlert;
              tmp = tmp40.openSocialLayerStorefrontProductDetailsModal;
              if (null != payload.skuId) {
                const fetchSocialLayerStorefrontSku = tmp38(inviteCode[33]).fetchSocialLayerStorefrontSku;
                const _default = tmp2(inviteCode[34]).default;
                rootNavigationRef2 = tmp38(inviteCode[35]).default;
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
                items = [tmp(inviteCode[36]).URI_SCHEME];
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
        } catch (tmp22) {
          inviteCode = 3;
          throw tmp22;
        }
      }
    }));
    flag = true;
  } else {
    if (tmp.CHANNEL !== type) {
      if (tmp.MESSAGE !== type) {
        if (tmp.SESSION_MANAGEMENT === type) {
          pathname(() => {
            const obj = rootNavigationRef1(inviteCode[18]);
            obj.popAll();
            const obj2 = payload(inviteCode[22]);
            const obj3 = { screen: constants3.SESSIONS };
            obj2.openUserSettings(obj3);
          });
          flag = true;
        } else if (tmp.FAMILY_CENTER === type) {
          let obj31 = payload;
          if (payload == null) {
            obj31 = {};
          }
          pathname = obj31.pathname;
          let tmp129 = null;
          if (undefined !== pathname) {
            tmp129 = pathname;
          }
          pathname = tmp129;
          pathname(() => {
            const obj = ModalActionCreatorsDefault;
            obj.popAll();
            const obj2 = openUserSettings;
            const obj3 = { screen: constants.FAMILY_CENTER };
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
                  let obj = rootNavigationRef1(inviteCode[18]);
                  obj.popAll();
                  const pushLazy = rootNavigationRef1(inviteCode[18]).pushLazy;
                  const obj2 = {
                    guildId,
                    callback: rootNavigationRef1(inviteCode[42]),
                    dismissOAuthModal() {
                        const obj = closure_1_1(closure_1_3[18]);
                        obj.popWithKey(closure_1_22);
                      }
                  };
                  rootNavigationRef1(inviteCode[18]);
                  const tmp8 = payload(inviteCode[41])(inviteCode[40], inviteCode.paths);
                  const merged = Object.assign(tmp.props);
                  pushLazy(tmp8, obj2, closure_2_22);
                }
              });
            } else {
              const obj3 = { callback: authorizeCallbackDefault };
              const openOAuth2Modal = tmp4(11044).openOAuth2Modal;
              ApplicationUtils;
              let merged = Object.assign(payload.props);
              openOAuth2Modal(obj3);
            }
          });
          flag = true;
        } else if (tmp.ONE_TIME_LOGIN === type) {
          const obj28 = rootNavigationRef1(inviteCode[18]);
          obj28.popAll();
          const obj32 = { token: payload.token };
          const obj29 = rootNavigationRef1(inviteCode[18]);
          obj29.pushLazy(payload(inviteCode[41])(inviteCode[44], inviteCode.paths), obj32, "ONE_TIME_LOGIN_MODAL");
          flag = true;
        } else if (tmp.REMOTE_AUTH === type) {
          remoteAuthFingerprint = payload.remoteAuthFingerprint;
          pathname(null != remoteAuthFingerprint ? (() => {
            const obj = ModalActionCreatorsDefault;
            const obj2 = { remoteAuthFingerprint };
            obj.pushLazy(asyncRequire(16023, dependencyMap.paths), obj2, "REMOTE_AUTH_MODAL");
          }) : (() => {
            let paths;
            let tmp = inviteCode;
            let obj = payload(inviteCode[46]);
            const tmp3 = obj.isMetaQuest() ? NativePermissionTypes.HEADSET_CAMERA : NativePermissionTypes.CAMERA;
            const obj2 = rootNavigationRef1(tmp[47]);
            const permission = obj2.requestPermission(tmp3);
            const nextPromise = permission.then((result) => {
              const tmp = result;
              if (tmp) {
                const obj = rootNavigationRef1(paths[18]);
                obj.pushLazy(payload(paths[41])(paths[48], paths.paths), { showHelp: true });
              }
            });
            nextPromise.catch(() => {

            });
          }));
          flag = true;
        } else if (tmp.PROMOTIONS === type) {
          const obj27 = rootNavigationRef1(inviteCode[49]);
          obj27.performURLNavigation(payload.url);
          flag = true;
        } else if (tmp.FEATURE_PROMO_URL === type) {
          const obj26 = rootNavigationRef1(inviteCode[49]);
          obj26.openURLExternally(payload.promoUrl);
          flag = true;
        } else if (tmp.USER_PROFILE === type) {
          flag = true;
          if (null != payload.userId) {
            const obj33 = { userId: payload.userId, navigationReplace: userProfileNavigationReplace };
            const obj24 = payload(inviteCode[21]);
            const result3 = obj24.showUserProfileActionSheetPostConnection(obj33);
            flag = true;
          }
        } else if (tmp.BUILD_OVERRIDE === type) {
          const overrideUrl = payload.overrideUrl;
          const obj21 = rootNavigationRef1(inviteCode[18]);
          obj21.popAll();
          const obj35 = { overrideUrl };
          const obj22 = rootNavigationRef1(inviteCode[18]);
          obj22.pushLazy(payload(inviteCode[41])(inviteCode[50], inviteCode.paths), obj35);
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
                    const obj11 = tmp2(inviteCode[18]);
                    obj11.popAll();
                    ({ guildId: c0, guildEventId: c1 } = payload);
                    inviteCode = 1;
                    c4 = 1;
                    const obj7 = { value: guildScheduledEvent(inviteCode[41])(inviteCode[51], inviteCode.paths), done: false };
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
                        const obj2 = guildScheduledEvent(inviteCode[52]);
                        obj2.transitionToGuild(c0);
                      }
                      guildScheduledEvent = guildScheduledEvent.getGuildScheduledEvent(c1);
                      if (guildScheduledEvent == null) {
                        const obj5 = tmp2(inviteCode[53]);
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
                    const obj3 = guildScheduledEvent(inviteCode[54]);
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
          const obj36 = { nonce, fingerprint, skipLoginRedirect: true };
          const obj19 = rootNavigationRef1(inviteCode[55]);
          const result4 = obj19.redirectWithHandoffToken("" + redirectUrl.pathname + redirectUrl.search, obj36);
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
                      const obj5 = rootNavigationRef1(paths[18]);
                      obj5.popAll();
                      rootNavigationRef1 = 1;
                      c2 = 1;
                      const obj6 = { value: tmp3(paths[41])(paths[51], paths.paths), done: false };
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
                    const obj = tmp3(paths[52]);
                    obj.transitionToGuild(closure_128_0.guildId);
                  }
                  const obj8 = { streamType: constants.GUILD, ownerId: closure_128_0.userId, guildId: closure_128_0.guildId, channelId: closure_128_0.channelId };
                  rootNavigationRef1(paths[56])(obj8);
                }
                const tmp22 = "transfer_cancelled" === closure_128_0.action && "xbox" === closure_128_0.via;
                if (tmp22) {
                  const obj4 = tmp3(paths[57]);
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
            const obj = payload(inviteCode[58]);
            obj.navigateToRootTab({ screen: "icymi" });
          });
          flag = true;
        } else if (tmp.GUILD_HOME === type) {
          flag = true;
          if (null != payload.guildId) {
            let tmp84;
            if (null != payload.highlightChannelId) {
              if (null != payload.highlightMessageId) {
                const obj39 = { search: obj16.stringify(obj42) };
                obj42 = { highlight_channel_id: null, highlight_message_id: null };
                ({ highlightChannelId: obj17.highlight_channel_id, highlightMessageId: obj17.highlight_message_id } = payload);
                tmp84 = obj39;
                obj16 = payload(inviteCode[59]);
              }
            }
            const obj18 = payload(inviteCode[60]);
            obj18.transitionTo(closure_15.CHANNEL(payload.guildId, StaticChannelRoute.GUILD_HOME), tmp84);
            flag = true;
          }
        } else if (tmp.USER_CONNECTIONS_LINK_CALLBACK === type) {
          pathname(() => {
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
                      const obj5 = rootNavigationRef1(inviteCode[18]);
                      obj5.popAll();
                      const obj10 = { screen: constants.CONNECTIONS };
                      const obj6 = payload(inviteCode[22]);
                      obj6.openUserSettings(obj10);
                      c7 = 1;
                      c8 = 1;
                      const obj11 = { value: obj8.callback(provider, obj7), done: false };
                      obj8 = rootNavigationRef1(inviteCode[62]);
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
                  const toURLSafe = rootNavigationRef1(inviteCode[63]).toURLSafe;
                  const tmp37 = rootNavigationRef1(inviteCode[63]);
                  if (body != null) {
                    redirect = body.redirect;
                  }
                  rootNavigationRef1 = toURLSafe(redirect);
                  if (null != rootNavigationRef1) {
                    const obj12 = rootNavigationRef1(inviteCode[49]);
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
            const obj = rootNavigationRef1(inviteCode[18]);
            obj.popAll();
            const obj2 = payload(inviteCode[22]);
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
          const obj14 = rootNavigationRef1(inviteCode[65]);
          obj14.showModal(payload.userCode);
          flag = true;
        } else if (tmp.GUILD_SETTINGS_PICKER === type) {
          pathname(() => {
            const obj = GuildSettingsPickerActionCreators;
            const obj2 = { section: payload.settingsSection, subsection: payload.settingsSubsection, feature: payload.feature };
            const result = obj.openGuildSettingsPickerModal(obj2);
          });
          flag = true;
        } else if (tmp.SHARE === type) {
          let obj9 = payload(inviteCode[67]);
          flag = true;
          const tmp60 = payload;
          if (obj9.isIOS()) {
            let obj10 = rootNavigationRef1(tmp61[18]);
            obj10.popAll();
            let obj11 = rootNavigationRef1(tmp61[68]);
            obj11.closeAll();
            let obj12 = rootNavigationRef1(tmp61[18]);
            const obj43 = { text: null, channelId: null, shareId: null, attachmentManifest: null };
            ({ text: obj13.text, channelId: obj13.channelId, shareId: obj13.shareId, attachmentManifest: obj13.attachmentManifest } = payload);
            obj12.pushLazy(tmp60(inviteCode[41])(inviteCode[69], inviteCode.paths), obj43, SHARE_SCREEN_MODAL_KEY, { presentation: "modal" });
            flag = true;
          }
        } else {
          if (tmp.CREATE_VOICE_INVITE !== type) {
            if (tmp.SEND_VOICE_HANGOUT_WAVE !== type) {
              if (tmp.ACCOUNT_STANDING === type) {
                let tmp56 = pathname;
                let tmp57 = pathname(() => {
                  const obj = rootNavigationRef1(inviteCode[18]);
                  obj.popAll();
                  const obj2 = payload(inviteCode[71]);
                  obj2.openAccountStanding();
                });
                flag = true;
              } else if (tmp.MOBILE_NATIVE_UPDATE === type) {
                let obj8 = rootNavigationRef2(inviteCode[72]);
                const result5 = obj8.openBuildInstallerUrl(payload.url);
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
                            const obj3 = tmp2(inviteCode[73]);
                            const subscriptions = obj3.fetchSubscriptions();
                          } else if (deepLinkAction === constants.GUILD_BOOST_CHECKOUT_SUCCESS) {
                            const obj7 = tmp(inviteCode[18]);
                            obj7.popAll();
                            guildId = payload.guildId;
                            c2 = 1;
                            inviteCode = 1;
                            const obj5 = { value: tmp2(inviteCode[41])(inviteCode[51], inviteCode.paths), done: false };
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
                          const obj6 = tmp2(inviteCode[52]);
                          obj6.transitionToGuild(guildId);
                          tmp(inviteCode[74])(tmp);
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
                let tmp49 = pathname(() => {
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
                pathname(() => {
                  const obj = rootNavigationRef1(inviteCode[18]);
                  obj.popAll();
                  const obj2 = payload(inviteCode[22]);
                  const obj3 = { screen: constants3.AUTHORIZED_APPS };
                  obj2.openUserSettings(obj3);
                });
                flag = true;
              } else if (tmp.DAVE_PROTOCOL_VERIFICATION === type) {
                pathname(() => {
                  let fingerprint;
                  const obj = { userId: payload.userId, fingerprint: fingerprint.replaceAll(" ", "+") };
                  fingerprint = payload.fingerprint;
                  const handleSecureFramesUserVerificationLink = SecureFramesPlatformUtilsDefault.handleSecureFramesUserVerificationLink;
                  SecureFramesPlatformUtilsDefault;
                  const result = handleSecureFramesUserVerificationLink(obj);
                });
                flag = true;
              } else if (tmp.AGE_VERIFICATION_AGEKEY_RETURN === type) {
                pathname(() => {
                  const obj = AgeKeyReturnHandler;
                  const obj2 = { result: payload.result, ageKeySaved: payload.ageKeySaved, verificationId: payload.verificationId };
                  obj.handleAgeKeyReturn(obj2);
                });
                flag = true;
              } else if (tmp.QUESTS === type) {
                let tmp40 = pathname;
                pathname(() => {
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
                const tmp38 = pathname;
                pathname(() => {
                  let obj3;
                  const obj2 = { screen: constants.QUESTS, params: obj3 };
                  obj3 = { previewAdCreativeIds: payload.adCreativeIds };
                  const obj = openUserSettings;
                  obj.openUserSettings(obj2);
                });
                flag = true;
              } else if (tmp.QUEST_BAR_PREVIEW === type) {
                const tmp36 = pathname;
                let tmp37 = pathname(() => {
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
                const tmp34 = pathname;
                pathname(() => {
                  let items;
                  const obj = { analyticsLocations: items };
                  const openGiftModal = payload(inviteCode[83]).openGiftModal;
                  items = [];
                  payload(inviteCode[83]);
                  items[0] = rootNavigationRef1(inviteCode[36]).DEEPLINK;
                  openGiftModal(obj);
                });
                flag = true;
              } else if (tmp.NITRO_HOME === type) {
                pathname(() => {
                  const section = payload.section;
                  const setState = PremiumNitroNavigationStore.setState;
                  setState({ scrollToSectionId: section });
                  const obj = openUserSettings;
                  const obj2 = { screen: constants.PREMIUM };
                  obj.openUserSettings(obj2);
                });
                flag = true;
              } else if (tmp.ACTIVITY === type) {
                const tmp29 = rootNavigationRef1;
                const obj44 = { applicationId: null, referrerId: null, customId: null, linkId: null, channelId: null, isDeepLink: null };
                ({ applicationId: obj7.applicationId, referrerId: obj7.referrerId, customId: obj7.customId, linkId: obj7.linkId, channelId: obj7.channelId, isDeepLink: obj7.isDeepLink } = payload);
                rootNavigationRef1(inviteCode[84])(obj44);
                flag = true;
              } else if (tmp.CONNECTED_GAMES === type) {
                pathname(() => {
                  let obj4;
                  const obj = rootNavigationRef1(inviteCode[18]);
                  obj.popAll();
                  const obj3 = { screen: constants3.CONTENT_AND_SOCIAL, params: obj4 };
                  obj4 = { tab: constants2.CONNECTED_GAMES };
                  const obj2 = payload(inviteCode[22]);
                  obj2.openUserSettings(obj3);
                });
                flag = true;
              } else if (tmp.BOOST_MARKETING === type) {
                pathname(() => {
                  const obj = BoostingActionCreators;
                  obj.openApplyBoostModal(payload.guildId);
                });
                flag = true;
              } else if (tmp.BOOST_SETTINGS === type) {
                pathname(() => {
                  const obj = rootNavigationRef1(inviteCode[18]);
                  obj.popAll();
                  const obj2 = payload(inviteCode[22]);
                  const obj3 = { screen: constants3.GUILD_BOOSTING };
                  obj2.openUserSettings(obj3);
                });
                flag = true;
              } else if (tmp.QUEST_PREVIEW_TOOL === type) {
                let tmp22 = pathname(() => {
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
                let tmp19 = pathname;
                pathname(() => {
                  const obj = rootNavigationRef1(inviteCode[18]);
                  obj.popAll();
                  const obj2 = payload(inviteCode[87]);
                  const result = obj2.openSubscriptionSettingsFromDeepLink();
                });
                flag = true;
              } else if (tmp.GAME_PROFILE === type) {
                gameId = payload.gameId;
                let tmp18 = pathname(() => {
                  const obj = ModalActionCreatorsDefault;
                  obj.popAll();
                  const GameProfileSources = GameProfileAnalyticUtils.GameProfileSources;
                  const _default = GameProfileActionCreators.default;
                  const obj2 = { gameId, source: GameProfileSources.Deeplink, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId } };
                  _default.openGameProfileModal(obj2);
                });
                flag = true;
              } else if (tmp.MESSAGE_REQUESTS === type) {
                let tmp9 = rootNavigationRef1;
                const tmp10 = inviteCode;
                let obj4 = rootNavigationRef1(inviteCode[18]);
                obj4.popAll();
                let tmp12 = payload;
                let obj5 = payload(inviteCode[19]);
                rootNavigationRef3 = obj5.getRootNavigationRef();
                const tmp13 = null;
                flag = true;
                if (null != rootNavigationRef3) {
                  if (rootNavigationRef3.isReady()) {
                    rootNavigationRef3.navigate("message-requests");
                    flag = true;
                  } else {
                    const tmp14 = pathname;
                    const tmp15 = pathname(() => {
                      rootNavigationRef3.navigate("message-requests");
                    });
                    flag = true;
                  }
                }
              } else if (tmp.CONJURE === type) {
                const tmp4 = rootNavigationRef1;
                const tmp5 = inviteCode;
                let obj2 = rootNavigationRef1(inviteCode[18]);
                obj2.popAll();
                let obj3 = payload(inviteCode[90]);
                const result6 = obj3.openConjureHomeScreenWhenReady(payload.projectId);
                flag = true;
              } else {
                flag = false;
                if (tmp.CONJURE_PROJECT_LINK === type) {
                  const obj56 = rootNavigationRef1(inviteCode[18]);
                  obj56.popAll();
                  const applicationId = payload.applicationId;
                  const tmp198 = rootNavigationRef1(inviteCode[91]);
                  let guildId1 = SelectedGuildStore.getGuildId();
                  if (guildId1 == null) {
                    guildId1 = null;
                  }
                  let obj = { guildId: guildId1, channelId: null };
                  tmp198(applicationId, obj, payload.ticket);
                  flag = true;
                }
              }
            }
          }
          let tmp58 = pathname;
          let tmp59 = pathname(() => {
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
    const tmp135 = null != guildId && null != channelId;
    if (tmp135) {
      const obj47 = { guildId, channelId, messageId, navigationSettings: obj48, summaryId, conversationId };
      obj48 = { safe, navigationReplace, waitForConnection, skipMessageFetch, isAppStartupNavigation };
      rootNavigationRef1(inviteCode[31])(obj47);
      flag = true;
    }
  }
  if (flag) {
    const obj55 = payload(inviteCode[92]);
    const result7 = obj55.browserManagerCloseBrowser();
  }
  return flag;
};
