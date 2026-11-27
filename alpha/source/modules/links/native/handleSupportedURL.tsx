// Module ID: 5846
// Function ID: 5847
// Name: handleSupportedURL
// Dependencies: [109, 5, 5847, 5775, 9116, 9369, 502, 5076, 1071, 4899, 6814, 7872, 10113, 8214, 5760, 15262, 9556, 13677, 6130, 5220, 15263, 6133, 8109, 9867, 9868, 14199, 12311, 2019, 11936, 1256, 11938, 7605, 12075, 11653, 9409, 15269, 6360, 6380, 12596, 15270, 13710, 7730, 2120, 10114, 10112, 15272, 15274, 1626, 7873, 15283, 5722, 15285, 4914, 8601, 8479, 8614, 11639, 8449, 10512, 5219, 5782, 1098, 572, 7532, 1380, 8574, 15288, 15303, 1379, 6047, 15312, 10429, 12591, 15320, 5806, 15321, 6310, 8685, 15408, 8383, 6876, 9890, 13841, 6877, 11114, 15409, 6864, 9998, 15410, 8755, 8750, 11462, 12381, 15488, 5754, 2]
// Exports: default

// Module 5846 (handleSupportedURL)
import DispatcherDefault from "Dispatcher" /* 572 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 2019 */;
import asyncRequire from "asyncRequire" /* 2120 */;
import ChannelConstants from "ChannelConstants" /* 4899 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5219 */;
import PaymentConstants from "PaymentConstants" /* 5760 */;
import PostConnectionCallbackStore from "PostConnectionCallbackStore" /* 5847 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 6310 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6380 */;
import Constants2 from "Constants" /* 6814 */;
import BoostingActionCreators from "BoostingActionCreators" /* 6864 */;
import QuestContent from "QuestContent" /* 6876 */;
import AdPlacement from "AdPlacement" /* 6877 */;
import NativePermissionConstants from "NativePermissionConstants" /* 7872 */;
import openUserSettings from "openUserSettings" /* 8109 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 8214 */;
import AnalyticsActions from "AnalyticsActions" /* 8383 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8574 */;
import SecureFramesPlatformUtilsDefault from "SecureFramesPlatformUtils" /* 8685 */;
import GameProfileActionCreators from "GameProfileActionCreators" /* 8750 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8755 */;
import PremiumPlanPurchasedStore from "PremiumPlanPurchasedStore" /* 9116 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import QuestUtils from "QuestUtils" /* 9890 */;
import closeVoicePanelsDefault from "closeVoicePanels" /* 9998 */;
import ApplicationUtils from "ApplicationUtils" /* 10112 */;
import Constants3 from "Constants" /* 10113 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 10429 */;
import guild_templates_GuildTemplateActionCreatorsDefault from "guild_templates/GuildTemplateActionCreators" /* 12311 */;
import BountyActionCreators from "BountyActionCreators" /* 13841 */;
import DisplayedInviteActionCreators from "DisplayedInviteActionCreators" /* 14199 */;
import ShareScreenConstants from "ShareScreenConstants" /* 15262 */;
import MidjourneyOnboardingUtils from "MidjourneyOnboardingUtils" /* 15270 */;
import GuildSettingsPickerActionCreators from "GuildSettingsPickerActionCreators" /* 15303 */;
import AgeKeyReturnHandler from "AgeKeyReturnHandler" /* 15408 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 5775 */;
import PremiumNitroNavigationStore from "PremiumNitroNavigationStore" /* 9369 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5076 */;
import Constants from "Constants" /* 1071 */;
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
const authorizeCallbackDefault = tmp(10114);
const FamilyCenterNativeUtils = tmp3(12596);
const CreateGuildModalActionCreatorsDefault = tmp(13710);
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
  let obj17;
  let obj26;
  let obj40;
  let obj49;
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
    const obj55 = payload(inviteCode[17]);
    let result = obj55.openContactSyncModalDeeplink();
    flag = true;
  } else if (tmp.COMPOSE_MESSAGE === type) {
    const obj51 = rootNavigationRef1(inviteCode[18]);
    const popAllResult = obj51.popAll();
    const obj52 = payload(inviteCode[19]);
    const rootNavigationRef = obj52.getRootNavigationRef();
    flag = true;
    if (null != rootNavigationRef) {
      let obj2 = { screen: "new-message", params: { sourcePage: "Deeplink" } };
      rootNavigationRef.navigate("friends", obj2);
      flag = true;
    }
  } else if (tmp.ADD_FRIENDS === type) {
    const obj46 = rootNavigationRef1(inviteCode[18]);
    obj46.popAll();
    const obj47 = payload(inviteCode[19]);
    const tmp180 = rootNavigationRef1;
    rootNavigationRef1 = obj47.getRootNavigationRef();
    const tmp181 = inviteCode;
    if (null == rootNavigationRef1) {
      const tmp180Result = tmp180(tmp181[20]);
      let result1 = tmp180Result.openAddFriendModalDeeplink();
      flag = true;
    } else if (rootNavigationRef1.isReady()) {
      let obj7 = { screen: "add-friends", params: { sourcePage: "Deeplink" } };
      rootNavigationRef1.navigate("friends", obj7);
      flag = true;
    } else {
      pathname(() => rootNavigationRef1.navigate("friends", { screen: "add-friends", params: { sourcePage: "Deeplink" } }));
      flag = true;
    }
  } else if (tmp.FRIENDS === type) {
    const obj41 = rootNavigationRef1(inviteCode[18]);
    obj41.popAll();
    const obj42 = payload(inviteCode[19]);
    rootNavigationRef2 = obj42.getRootNavigationRef();
    const tmp172 = inviteCode;
    const tmp174 = payload;
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
      const obj16 = { userId: payload.userId, navigationReplace: userProfileNavigationReplace };
      const tmp174Result = tmp174(tmp172[21]);
      const result2 = tmp174Result.showUserProfileActionSheetPostConnection(obj16);
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
      const result = obj2.trackOwnBadgeDirectoryOpened("link");
      const obj3 = payload(inviteCode[24]);
      const result1 = obj3.openBadgeDirectoryScreen();
    });
    flag = true;
  } else if (tmp.INVITE === type) {
    inviteCode = payload.inviteCode;
    username = payload.username;
    deeplinkAttemptId = payload.deeplinkAttemptId;
    if (!rootNavigationRef3.isAuthenticated()) {
      if (null != inviteCode) {
        const obj21 = { deeplinkAttemptId, location: "Deep Link" };
        const obj39 = payload(inviteCode[25]);
        obj39.showInvite(inviteCode, username, obj21);
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
      const obj38 = payload(inviteCode[28]);
      const giftCode1 = obj38.resolveGiftCode(giftCode, { withGiftSubscriptionAgreement: true });
      let nextPromise = giftCode1.then((giftCode) => {
        giftCode = giftCode.giftCode;
        const obj = rootNavigationRef1(inviteCode[29]);
        obj.track(constants.OPEN_MODAL, { type: "gift_accept", location: null });
        const obj2 = payload(inviteCode[30]);
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
      const obj35 = payload(inviteCode[31]);
      obj35.startDiceRoll(channelId2, diceCount, diceSides);
      const obj24 = { guildId: guildId2, channelId: channelId2, messageId: "Array", navigationSettings: obj26 };
      obj26 = { safe, navigationReplace, waitForConnection, skipMessageFetch, isAppStartupNavigation };
      rootNavigationRef1(inviteCode[32])(obj24);
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
              const tmp40 = tmp2(inviteCode[33]);
              openSocialLayerStorefrontUnsupportedOnMobileAlert = tmp40.openSocialLayerStorefrontUnsupportedOnMobileAlert;
              tmp = tmp40.openSocialLayerStorefrontProductDetailsModal;
              if (null != payload.skuId) {
                const fetchSocialLayerStorefrontSku = tmp38(inviteCode[34]).fetchSocialLayerStorefrontSku;
                const _default = tmp2(inviteCode[35]).default;
                rootNavigationRef2 = tmp38(inviteCode[36]).default;
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
                items = [tmp(inviteCode[37]).URI_SCHEME];
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
          let tmp135 = null;
          if (undefined !== pathname) {
            tmp135 = pathname;
          }
          pathname = tmp135;
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
                    callback: rootNavigationRef1(inviteCode[43]),
                    dismissOAuthModal() {
                        const obj = closure_1_1(closure_1_3[18]);
                        obj.popWithKey(closure_1_22);
                      }
                  };
                  rootNavigationRef1(inviteCode[18]);
                  const tmp8 = payload(inviteCode[42])(inviteCode[41], inviteCode.paths);
                  const merged = Object.assign(tmp.props);
                  pushLazy(tmp8, obj2, closure_2_22);
                }
              });
            } else {
              const obj3 = { callback: authorizeCallbackDefault };
              const openOAuth2Modal = tmp4(10112).openOAuth2Modal;
              ApplicationUtils;
              let merged = Object.assign(payload.props);
              openOAuth2Modal(obj3);
            }
          });
          flag = true;
        } else if (tmp.ONE_TIME_LOGIN === type) {
          const obj29 = rootNavigationRef1(inviteCode[18]);
          obj29.popAll();
          const obj32 = { token: payload.token };
          const obj30 = rootNavigationRef1(inviteCode[18]);
          obj30.pushLazy(payload(inviteCode[42])(inviteCode[45], inviteCode.paths), obj32, "ONE_TIME_LOGIN_MODAL");
          flag = true;
        } else if (tmp.REMOTE_AUTH === type) {
          remoteAuthFingerprint = payload.remoteAuthFingerprint;
          pathname(null != remoteAuthFingerprint ? (() => {
            const obj = ModalActionCreatorsDefault;
            const obj2 = { remoteAuthFingerprint };
            obj.pushLazy(asyncRequire(15274, dependencyMap.paths), obj2, "REMOTE_AUTH_MODAL");
          }) : (() => {
            let paths;
            let tmp = inviteCode;
            let obj = payload(inviteCode[47]);
            const tmp3 = obj.isMetaQuest() ? NativePermissionTypes.HEADSET_CAMERA : NativePermissionTypes.CAMERA;
            const obj2 = rootNavigationRef1(tmp[48]);
            const permission = obj2.requestPermission(tmp3);
            const nextPromise = permission.then((result) => {
              const tmp = result;
              if (tmp) {
                const obj = rootNavigationRef1(paths[18]);
                obj.pushLazy(payload(paths[42])(paths[49], paths.paths), { showHelp: true });
              }
            });
            nextPromise.catch(() => {

            });
          }));
          flag = true;
        } else if (tmp.PROMOTIONS === type) {
          const obj28 = rootNavigationRef1(inviteCode[50]);
          obj28.performURLNavigation(payload.url);
          flag = true;
        } else if (tmp.FEATURE_PROMO_URL === type) {
          const obj27 = rootNavigationRef1(inviteCode[50]);
          obj27.openURLExternally(payload.promoUrl);
          flag = true;
        } else if (tmp.USER_PROFILE === type) {
          flag = true;
          if (null != payload.userId) {
            const obj33 = { userId: payload.userId, navigationReplace: userProfileNavigationReplace };
            const obj25 = payload(inviteCode[21]);
            const result3 = obj25.showUserProfileActionSheetPostConnection(obj33);
            flag = true;
          }
        } else if (tmp.BUILD_OVERRIDE === type) {
          const overrideUrl = payload.overrideUrl;
          const obj22 = rootNavigationRef1(inviteCode[18]);
          obj22.popAll();
          const obj34 = { overrideUrl };
          const obj23 = rootNavigationRef1(inviteCode[18]);
          obj23.pushLazy(payload(inviteCode[42])(inviteCode[51], inviteCode.paths), obj34);
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
                    const obj7 = { value: guildScheduledEvent(inviteCode[42])(inviteCode[52], inviteCode.paths), done: false };
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
                        const obj2 = guildScheduledEvent(inviteCode[53]);
                        obj2.transitionToGuild(c0);
                      }
                      guildScheduledEvent = guildScheduledEvent.getGuildScheduledEvent(c1);
                      if (guildScheduledEvent == null) {
                        const obj5 = tmp2(inviteCode[54]);
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
                    const obj3 = guildScheduledEvent(inviteCode[55]);
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
          const obj20 = rootNavigationRef1(inviteCode[56]);
          const result4 = obj20.redirectWithHandoffToken("" + redirectUrl.pathname + redirectUrl.search, obj36);
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
                      const obj6 = { value: tmp3(paths[42])(paths[52], paths.paths), done: false };
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
                    const obj = tmp3(paths[53]);
                    obj.transitionToGuild(closure_128_0.guildId);
                  }
                  const obj8 = { streamType: constants.GUILD, ownerId: closure_128_0.userId, guildId: closure_128_0.guildId, channelId: closure_128_0.channelId };
                  rootNavigationRef1(paths[57])(obj8);
                }
                const tmp22 = "transfer_cancelled" === closure_128_0.action && "xbox" === closure_128_0.via;
                if (tmp22) {
                  const obj4 = tmp3(paths[58]);
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
            const obj = payload(inviteCode[59]);
            obj.navigateToRootTab({ screen: "icymi" });
          });
          flag = true;
        } else if (tmp.GUILD_HOME === type) {
          flag = true;
          if (null != payload.guildId) {
            let tmp90;
            if (null != payload.highlightChannelId) {
              if (null != payload.highlightMessageId) {
                const obj37 = { search: obj17.stringify(obj40) };
                obj40 = { highlight_channel_id: null, highlight_message_id: null };
                ({ highlightChannelId: obj18.highlight_channel_id, highlightMessageId: obj18.highlight_message_id } = payload);
                tmp90 = obj37;
                obj17 = payload(inviteCode[60]);
              }
            }
            const obj19 = payload(inviteCode[61]);
            obj19.transitionTo(closure_15.CHANNEL(payload.guildId, StaticChannelRoute.GUILD_HOME), tmp90);
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
                      const obj5 = rootNavigationRef1(inviteCode[18]);
                      obj5.popAll();
                      const obj10 = { screen: constants.CONNECTIONS };
                      const obj6 = payload(inviteCode[22]);
                      obj6.openUserSettings(obj10);
                      c7 = 1;
                      c8 = 1;
                      const obj11 = { value: obj8.callback(provider, obj7), done: false };
                      obj8 = rootNavigationRef1(inviteCode[63]);
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
                  const toURLSafe = rootNavigationRef1(inviteCode[64]).toURLSafe;
                  const tmp37 = rootNavigationRef1(inviteCode[64]);
                  if (body != null) {
                    redirect = body.redirect;
                  }
                  rootNavigationRef1 = toURLSafe(redirect);
                  if (null != rootNavigationRef1) {
                    const obj12 = rootNavigationRef1(inviteCode[50]);
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
          const obj15 = rootNavigationRef1(inviteCode[66]);
          obj15.showModal(payload.userCode);
          flag = true;
        } else if (tmp.GUILD_SETTINGS_PICKER === type) {
          pathname(() => {
            const obj = GuildSettingsPickerActionCreators;
            const obj2 = { section: payload.settingsSection, subsection: payload.settingsSubsection, feature: payload.feature };
            const result = obj.openGuildSettingsPickerModal(obj2);
          });
          flag = true;
        } else if (tmp.SHARE === type) {
          let obj10 = payload(inviteCode[68]);
          flag = true;
          const tmp66 = payload;
          if (obj10.isIOS()) {
            let obj11 = rootNavigationRef1(tmp67[18]);
            obj11.popAll();
            let obj12 = rootNavigationRef1(tmp67[69]);
            obj12.closeAll();
            const obj43 = { text: null, channelId: null, shareId: null, attachmentManifest: null };
            ({ text: obj14.text, channelId: obj14.channelId, shareId: obj14.shareId, attachmentManifest: obj14.attachmentManifest } = payload);
            const obj13 = rootNavigationRef1(inviteCode[18]);
            obj13.pushLazy(tmp66(inviteCode[42])(inviteCode[70], inviteCode.paths), obj43, SHARE_SCREEN_MODAL_KEY, { presentation: "modal" });
            flag = true;
          }
        } else {
          if (tmp.CREATE_VOICE_INVITE !== type) {
            if (tmp.SEND_VOICE_HANGOUT_WAVE !== type) {
              if (tmp.ACCOUNT_STANDING === type) {
                pathname(() => {
                  const obj = rootNavigationRef1(inviteCode[18]);
                  obj.popAll();
                  const obj2 = payload(inviteCode[72]);
                  obj2.openAccountStanding();
                });
                flag = true;
              } else if (tmp.MOBILE_NATIVE_UPDATE === type) {
                let tmp59 = rootNavigationRef2;
                let obj9 = rootNavigationRef2(inviteCode[73]);
                const result5 = obj9.openBuildInstallerUrl(payload.url);
                flag = true;
              } else if (tmp.MOBILE_WEB_REDIRECT_CHECKOUT === type) {
                deepLinkAction = payload.deepLinkAction;
                let tmp56 = pathname;
                let tmp57 = guildTemplateCode;
                let tmp58 = pathname(guildTemplateCode(function*(arg0, value) {
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
                            const obj3 = tmp2(inviteCode[74]);
                            const subscriptions = obj3.fetchSubscriptions();
                          } else if (deepLinkAction === constants.GUILD_BOOST_CHECKOUT_SUCCESS) {
                            const obj7 = tmp(inviteCode[18]);
                            obj7.popAll();
                            guildId = payload.guildId;
                            c2 = 1;
                            inviteCode = 1;
                            const obj5 = { value: tmp2(inviteCode[42])(inviteCode[52], inviteCode.paths), done: false };
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
                          const obj6 = tmp2(inviteCode[53]);
                          obj6.transitionToGuild(guildId);
                          tmp(inviteCode[75])(tmp);
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
                let tmp55 = pathname(() => {
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
                let tmp49 = pathname(() => {
                  const obj = AgeKeyReturnHandler;
                  const obj2 = { result: payload.result, ageKeySaved: payload.ageKeySaved, verificationId: payload.verificationId };
                  obj.handleAgeKeyReturn(obj2);
                });
                flag = true;
              } else if (tmp.QUESTS === type) {
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
                pathname(() => {
                  let obj3;
                  const obj2 = { screen: constants.QUESTS, params: obj3 };
                  obj3 = { previewAdCreativeIds: payload.adCreativeIds };
                  const obj = openUserSettings;
                  obj.openUserSettings(obj2);
                });
                flag = true;
              } else if (tmp.QUEST_BAR_PREVIEW === type) {
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
                let tmp40 = pathname;
                pathname(() => {
                  let items;
                  const obj = { analyticsLocations: items };
                  const openGiftModal = payload(inviteCode[84]).openGiftModal;
                  items = [];
                  payload(inviteCode[84]);
                  items[0] = rootNavigationRef1(inviteCode[37]).DEEPLINK;
                  openGiftModal(obj);
                });
                flag = true;
              } else if (tmp.NITRO_HOME === type) {
                const tmp38 = pathname;
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
                const tmp36 = inviteCode;
                const obj44 = { applicationId: null, referrerId: null, customId: null, linkId: null, channelId: null, isDeepLink: null };
                ({ applicationId: obj8.applicationId, referrerId: obj8.referrerId, customId: obj8.customId, linkId: obj8.linkId, channelId: obj8.channelId, isDeepLink: obj8.isDeepLink } = payload);
                let tmp37 = rootNavigationRef1(inviteCode[85])(obj44);
                flag = true;
              } else if (tmp.CONNECTED_GAMES === type) {
                const tmp34 = pathname(() => {
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
                const tmp29 = pathname;
                pathname(() => {
                  const obj = rootNavigationRef1(inviteCode[18]);
                  obj.popAll();
                  const obj2 = payload(inviteCode[22]);
                  const obj3 = { screen: constants3.GUILD_BOOSTING };
                  obj2.openUserSettings(obj3);
                });
                flag = true;
              } else if (tmp.QUEST_PREVIEW_TOOL === type) {
                pathname(() => {
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
                pathname(() => {
                  const obj = rootNavigationRef1(inviteCode[18]);
                  obj.popAll();
                  const obj2 = payload(inviteCode[88]);
                  const result = obj2.openSubscriptionSettingsFromDeepLink();
                });
                flag = true;
              } else if (tmp.GAME_PROFILE === type) {
                gameId = payload.gameId;
                pathname(() => {
                  const obj = ModalActionCreatorsDefault;
                  obj.popAll();
                  const GameProfileSources = GameProfileAnalyticUtils.GameProfileSources;
                  const _default = GameProfileActionCreators.default;
                  const obj2 = { gameId, source: GameProfileSources.Deeplink, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId } };
                  _default.openGameProfileModal(obj2);
                });
                flag = true;
              } else if (tmp.MESSAGE_REQUESTS === type) {
                const tmp15 = rootNavigationRef1;
                const tmp16 = inviteCode;
                let obj5 = rootNavigationRef1(inviteCode[18]);
                obj5.popAll();
                let tmp18 = payload;
                let obj6 = payload(inviteCode[19]);
                rootNavigationRef3 = obj6.getRootNavigationRef();
                let tmp19 = null;
                flag = true;
                if (null != rootNavigationRef3) {
                  if (rootNavigationRef3.isReady()) {
                    rootNavigationRef3.navigate("message-requests");
                    flag = true;
                  } else {
                    pathname(() => {
                      rootNavigationRef3.navigate("message-requests");
                    });
                    flag = true;
                  }
                }
              } else if (tmp.CONJURE === type) {
                const tmp10 = rootNavigationRef1;
                let tmp11 = inviteCode;
                let obj3 = rootNavigationRef1(inviteCode[18]);
                obj3.popAll();
                const tmp13 = payload;
                let obj4 = payload(inviteCode[91]);
                const result6 = obj4.openConjureHomeScreenWhenReady(payload.projectId);
                flag = true;
              } else if (tmp.CONJURE_PROJECT_LINK === type) {
                const tmp2 = rootNavigationRef1;
                let tmp3 = inviteCode;
                let obj = rootNavigationRef1(inviteCode[18]);
                obj.popAll();
                let tmp6 = SelectedGuildStore;
                const tmp5 = rootNavigationRef1(inviteCode[92]);
                const applicationId = payload.applicationId;
                let guildId1 = SelectedGuildStore.getGuildId();
                let tmp8 = null;
                if (guildId1 == null) {
                  guildId1 = null;
                }
                const obj45 = { guildId: guildId1, channelId: null };
                tmp5(applicationId, obj45, payload.ticket);
                flag = true;
              } else {
                flag = false;
                if (tmp.CHECKPOINT === type) {
                  const obj57 = payload(inviteCode[93]);
                  const result7 = obj57.openCheckpointFromLink();
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
    const tmp141 = null != guildId && null != channelId;
    if (tmp141) {
      const obj48 = { guildId, channelId, messageId, navigationSettings: obj49, summaryId, conversationId };
      obj49 = { safe, navigationReplace, waitForConnection, skipMessageFetch, isAppStartupNavigation };
      rootNavigationRef1(inviteCode[32])(obj48);
      flag = true;
    }
  }
  if (flag) {
    const obj56 = payload(inviteCode[94]);
    const result8 = obj56.browserManagerCloseBrowser();
  }
  return flag;
};
