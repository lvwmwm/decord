// Module ID: 12909
// Function ID: 100195
// Name: handleSupportedURL
// Dependencies: [29, 5, 7541, 6758, 6660, 12400, 1194, 653, 1355, 4195, 4344, 10650, 6770, 4113, 12910, 11051, 7751, 11732, 4337, 3982, 12911, 8537, 5796, 8693, 10971, 1820, 8239, 675, 8241, 5627, 9562, 11085, 12918, 11764, 10027, 1934, 10862, 10861, 12920, 12922, 1553, 4675, 12927, 3827, 12929, 1838, 5737, 8388, 8397, 5692, 4336, 9079, 3981, 4988, 1198, 686, 4938, 1443, 8482, 12932, 12947, 477, 12958, 8526, 12965, 4451, 12966, 6773, 5482, 8940, 6958, 4981, 10946, 9713, 13038, 4966, 10513, 8642, 8636, 4096, 2]
// Exports: default

// Module 12909 (handleSupportedURL)
import startDiceRoll from "startDiceRoll";
import zustandStore from "zustandStore";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { handleMobileWebCheckoutStatus as closure_9 } from "usePremiumPlanPurchasedStore";
import closure_10 from "zustandStore";
import closure_11 from "_isNativeReflectConstruct";
import ME from "ME";
import { StaticChannelRoute } from "set";
import { StreamTypes } from "StreamIssueReportReasons";
import { NativePermissionTypes } from "NativePermissionStatus";
import { OAUTH2_AUTHORIZE_MODAL_KEY as closure_20 } from "OAUTH2_AUTHORIZE_MODAL_KEY";
import { FAMILY_CENTER_LINK_REQUEST_REGEX as closure_21 } from "items";
import { MobileWebRedirectCheckoutDeepLinkActions as closure_22 } from "CustomCheckoutFlow";
import { SHARE_SCREEN_MODAL_KEY } from "SHARE_SCREEN_MODAL_KEY";
import { AccountSettingsTabs } from "AccountSettingsTabs";
import { MobileSetting } from "MobileSetting";

let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
const require = arg1;
let closure_4 = ["code", "state"];
require("shouldWaitForBlockingModals").addPostConnectionCallback;
({ AnalyticEvents: closure_12, LinkingTypes: closure_13, Routes: closure_14, UserSettingsSections: closure_15, PlatformTypes: closure_16 } = ME);
let result = require("shouldWaitForBlockingModals").fileFinishedImporting("modules/links/native/handleSupportedURL.tsx");

export default function handleSupportedURL(payload) {
  const tmp = (function _handleSupportedURL(payload) {
    let channelId;
    let channelId2;
    let diceCount;
    let diceSides;
    let fingerprint;
    let guildId;
    let guildId2;
    let messageId;
    let navigationReplace;
    let nonce;
    let safe;
    let skipMessageFetch;
    let summaryId;
    let waitForConnection;
    payload = payload.payload;
    ({ safe, navigationReplace, waitForConnection, skipMessageFetch } = payload);
    let rootNavigationRef1;
    let rootNavigationRef2;
    let inviteCode;
    let username;
    let deeplinkAttemptId;
    let guildTemplateCode;
    let c7;
    let remoteAuthFingerprint;
    let deepLinkAction;
    let gameId;
    let rootNavigationRef3;
    const type = payload.type;
    if (outer1_13.CONTACT_SYNC === type) {
      let result = outer1_0;
      result = outer1_3;
      result = outer1_0(outer1_3[17]).openContactSyncModalDeeplink();
      return true;
    } else {
      result = outer1_13;
      if (outer1_13.COMPOSE_MESSAGE === type) {
        result = outer1_1;
        result = outer1_3;
        result = outer1_1(outer1_3[18]).popAll();
        result = outer1_0;
        const obj47 = outer1_1(outer1_3[18]);
        const rootNavigationRef = outer1_0(outer1_3[19]).getRootNavigationRef();
        result = null;
        if (null != rootNavigationRef) {
          let obj = { screen: "new-message" };
          obj = { sourcePage: "Deeplink" };
          obj.params = obj;
          result = rootNavigationRef.navigate("friends", obj);
        }
        return true;
      } else {
        result = outer1_13;
        if (outer1_13.ADD_FRIENDS === type) {
          result = outer1_1;
          result = outer1_3;
          result = outer1_1(outer1_3[18]).popAll();
          result = outer1_0;
          const obj41 = outer1_1(outer1_3[18]);
          rootNavigationRef1 = outer1_0(outer1_3[19]).getRootNavigationRef();
          result = null;
          if (null == rootNavigationRef1) {
            result = outer1_1;
            result = outer1_3;
            result = outer1_1(outer1_3[20]).openAddFriendModalDeeplink();
            const obj46 = outer1_1(outer1_3[20]);
          } else if (rootNavigationRef1.isReady()) {
            let obj1 = { screen: "add-friends" };
            let obj2 = { sourcePage: "Deeplink" };
            obj1.params = obj2;
            result = rootNavigationRef1.navigate("friends", obj1);
          } else {
            result = outer1_7;
            result = outer1_7(() => rootNavigationRef1.navigate("friends", { screen: "add-friends", params: { sourcePage: "Deeplink" } }));
          }
          return true;
        } else {
          result = outer1_13;
          if (outer1_13.FRIENDS === type) {
            result = outer1_1;
            result = outer1_3;
            result = outer1_1(outer1_3[18]).popAll();
            result = outer1_0;
            const obj36 = outer1_1(outer1_3[18]);
            rootNavigationRef2 = outer1_0(outer1_3[19]).getRootNavigationRef();
            result = null;
            if (null != rootNavigationRef2) {
              if (rootNavigationRef2.isReady()) {
                result = rootNavigationRef2.navigate("friends");
              } else {
                result = outer1_7;
                result = outer1_7(() => {
                  rootNavigationRef2.navigate("friends");
                });
              }
            }
            if (null != payload.userId) {
              result = outer1_0;
              result = outer1_3;
              let obj3 = { userId: payload.userId };
              result = outer1_0(outer1_3[21]).showUserProfileActionSheetPostConnection(obj3);
              const obj39 = outer1_0(outer1_3[21]);
            }
            return true;
          } else {
            result = outer1_13;
            if (outer1_13.EDIT_PROFILE === type) {
              result = outer1_7;
              result = outer1_7(() => {
                let obj = outer2_1(outer2_3[18]);
                obj.popAll();
                obj = { screen: outer2_15.PROFILE_CUSTOMIZATION };
                outer2_0(outer2_3[22]).openUserSettings(obj);
              });
              return true;
            } else {
              result = outer1_13;
              if (outer1_13.INVITE === type) {
                inviteCode = payload.inviteCode;
                username = payload.username;
                deeplinkAttemptId = payload.deeplinkAttemptId;
                result = outer1_11;
                if (!outer1_11.isAuthenticated()) {
                  result = null;
                  if (null != inviteCode) {
                    result = outer1_0;
                    result = outer1_3;
                    let obj4 = { deeplinkAttemptId, fromDeeplink: true, location: "Deep Link" };
                    result = outer1_0(outer1_3[23]).showInvite(inviteCode, username, obj4);
                    const obj34 = outer1_0(outer1_3[23]);
                  }
                  return true;
                }
                result = outer1_7;
                result = outer1_7(() => {
                  let obj = outer2_1(outer2_3[24]);
                  obj.hideModal();
                  if (null != inviteCode) {
                    const result = outer2_0(outer2_3[25]).dismissGlobalKeyboard();
                    const obj2 = outer2_0(outer2_3[25]);
                    obj = { deeplinkAttemptId, fromDeeplink: true, location: "Deep Link" };
                    outer2_0(outer2_3[23]).showInvite(inviteCode, username, obj);
                    const obj3 = outer2_0(outer2_3[23]);
                  }
                });
              } else {
                result = outer1_13;
                if (outer1_13.GUILD_TEMPLATE === type) {
                  guildTemplateCode = payload.guildTemplateCode;
                  result = outer1_7;
                  result = outer1_7(() => {
                    outer2_0(outer2_3[23]).clearDisplayedInvite();
                    if (null != guildTemplateCode) {
                      const result = outer2_0(outer2_3[25]).dismissGlobalKeyboard();
                      const obj2 = outer2_0(outer2_3[25]);
                      outer2_1(outer2_3[24]).showModal(guildTemplateCode);
                      const obj3 = outer2_1(outer2_3[24]);
                    }
                  });
                  return true;
                } else {
                  result = outer1_13;
                  if (outer1_13.GIFT_CODE === type) {
                    let giftCode = payload.giftCode;
                    result = null;
                    let flag44 = null != giftCode;
                    if (flag44) {
                      result = outer1_0;
                      result = outer1_3;
                      giftCode = outer1_0(outer1_3[26]).resolveGiftCode(giftCode);
                      const obj33 = outer1_0(outer1_3[26]);
                      result = giftCode.then((giftCode) => {
                        outer2_1(outer2_3[27]).track(outer2_12.OPEN_MODAL, { type: "gift_accept", location: null });
                        const obj = outer2_1(outer2_3[27]);
                        const result = outer2_0(outer2_3[28]).openGiftCodeRedeemModal(giftCode.giftCode.code);
                      }).catch(() => {

                      });
                      flag44 = true;
                      const nextPromise = giftCode.then((giftCode) => {
                        outer2_1(outer2_3[27]).track(outer2_12.OPEN_MODAL, { type: "gift_accept", location: null });
                        const obj = outer2_1(outer2_3[27]);
                        const result = outer2_0(outer2_3[28]).openGiftCodeRedeemModal(giftCode.giftCode.code);
                      });
                    }
                    return flag44;
                  } else {
                    result = outer1_13;
                    if (outer1_13.ROLL_DICE === type) {
                      ({ guildId: guildId2, channelId: channelId2 } = payload);
                      result = null;
                      let flag43 = null != guildId2;
                      ({ diceCount, diceSides } = payload);
                      if (flag43) {
                        flag43 = null != channelId2;
                      }
                      if (flag43) {
                        result = outer1_0;
                        result = outer1_3;
                        result = outer1_0(outer1_3[29]).startDiceRoll(channelId2, diceCount, diceSides);
                        result = outer1_1;
                        let obj5 = { guildId: guildId2, channelId: channelId2, messageId: undefined };
                        let obj6 = { safe, navigationReplace, waitForConnection, skipMessageFetch };
                        obj5.navigationSettings = obj6;
                        result = outer1_1(outer1_3[30])(obj5);
                        flag43 = true;
                        const obj30 = outer1_0(outer1_3[29]);
                      }
                      return flag43;
                    } else {
                      result = outer1_13;
                      if (outer1_13.CHANNEL !== type) {
                        result = outer1_13;
                        if (outer1_13.MESSAGE !== type) {
                          result = outer1_13;
                          if (outer1_13.SESSION_MANAGEMENT === type) {
                            result = outer1_7;
                            result = outer1_7(() => {
                              let obj = outer2_1(outer2_3[18]);
                              obj.popAll();
                              obj = { screen: outer2_15.SESSIONS };
                              outer2_0(outer2_3[22]).openUserSettings(obj);
                            });
                            return true;
                          } else {
                            result = outer1_13;
                            if (outer1_13.FAMILY_CENTER === type) {
                              result = null;
                              let obj7 = payload;
                              if (null == payload) {
                                obj7 = {};
                              }
                              const pathname = obj7.pathname;
                              result = null;
                              if (undefined !== pathname) {
                                result = pathname;
                              }
                              c7 = result;
                              result = outer1_7;
                              result = outer1_7(() => {
                                let obj = outer2_1(outer2_3[18]);
                                obj.popAll();
                                obj = { screen: outer2_15.FAMILY_CENTER };
                                outer2_0(outer2_3[22]).openUserSettings(obj);
                                let isMatch = null != c7;
                                if (isMatch) {
                                  isMatch = outer2_21.test(c7);
                                }
                                if (isMatch) {
                                  const result = outer2_0(outer2_3[31]).handleFamilyCenterQRCodeScan(c7, "NativeCameraScan");
                                  const obj4 = outer2_0(outer2_3[31]);
                                }
                              });
                              return true;
                            } else {
                              result = outer1_13;
                              if (outer1_13.OAUTH2_AUTHORIZE === type) {
                                result = outer1_7;
                                result = outer1_7(() => {
                                  let obj = outer2_1(outer2_3[18]);
                                  obj.popAll();
                                  if (obj2.isMidjourneyOnboardingFlow()) {
                                    outer2_1(outer2_3[33]).openCreateGuildModal((arg0) => {
                                      if (outer1_0.type === outer3_13.OAUTH2_AUTHORIZE) {
                                        let obj = outer3_1(outer3_3[18]);
                                        obj.popAll();
                                        obj = {};
                                        const obj2 = outer3_1(outer3_3[18]);
                                        const merged = Object.assign(outer1_0.props);
                                        obj["guildId"] = arg0;
                                        obj["callback"] = outer3_1(outer3_3[36]);
                                        obj["dismissOAuthModal"] = function dismissOAuthModal() {
                                          outer4_1(outer4_3[18]).popWithKey(outer4_20);
                                        };
                                        obj2.pushLazy(outer3_0(outer3_3[35])(outer3_3[34], outer3_3.paths), obj, outer3_20);
                                        const tmp5 = outer3_0(outer3_3[35])(outer3_3[34], outer3_3.paths);
                                      }
                                    });
                                    const obj5 = outer2_1(outer2_3[33]);
                                  } else {
                                    obj = {};
                                    let merged = Object.assign(payload.props);
                                    obj["callback"] = outer2_1(outer2_3[36]);
                                    outer2_0(outer2_3[37]).openOAuth2Modal(obj);
                                    const obj3 = outer2_0(outer2_3[37]);
                                  }
                                });
                                return true;
                              } else {
                                result = outer1_13;
                                if (outer1_13.ONE_TIME_LOGIN === type) {
                                  result = outer1_1;
                                  result = outer1_3;
                                  result = outer1_1(outer1_3[18]).popAll();
                                  const obj24 = outer1_1(outer1_3[18]);
                                  result = outer1_0;
                                  const obj8 = { token: payload.token };
                                  result = outer1_1(outer1_3[18]).pushLazy(outer1_0(outer1_3[35])(outer1_3[38], outer1_3.paths), obj8, "ONE_TIME_LOGIN_MODAL");
                                  return true;
                                } else {
                                  result = outer1_13;
                                  if (outer1_13.REMOTE_AUTH === type) {
                                    remoteAuthFingerprint = payload.remoteAuthFingerprint;
                                    result = null;
                                    result = outer1_7(null != remoteAuthFingerprint ? (() => {
                                      let obj = outer2_1(outer2_3[18]);
                                      obj = { remoteAuthFingerprint };
                                      obj.pushLazy(outer2_0(outer2_3[35])(outer2_3[39], outer2_3.paths), obj, "REMOTE_AUTH_MODAL");
                                    }) : (() => {
                                      let obj = outer2_0(outer2_3[40]);
                                      const tmp2 = outer2_0(outer2_3[40]).isMetaQuest() ? outer2_19.HEADSET_CAMERA : outer2_19.CAMERA;
                                      const permission = outer2_1(outer2_3[41]).requestPermission(tmp2);
                                      const obj2 = outer2_1(outer2_3[41]);
                                      permission.then((arg0) => {
                                        if (arg0) {
                                          let obj = outer3_1(outer3_3[18]);
                                          obj = { showHelp: true };
                                          obj.pushLazy(outer3_0(outer3_3[35])(outer3_3[42], outer3_3.paths), obj);
                                        }
                                      }).catch(() => {

                                      });
                                    }));
                                    return true;
                                  } else {
                                    result = outer1_13;
                                    if (outer1_13.PROMOTIONS === type) {
                                      result = outer1_1;
                                      result = outer1_3;
                                      result = outer1_1(outer1_3[43]).performURLNavigation(payload.url);
                                      return true;
                                    } else {
                                      result = outer1_13;
                                      if (outer1_13.FEATURE_PROMO_URL === type) {
                                        result = outer1_1;
                                        result = outer1_3;
                                        result = outer1_1(outer1_3[43]).openURLExternally(payload.promoUrl);
                                        return true;
                                      } else {
                                        result = outer1_13;
                                        if (outer1_13.USER_PROFILE === type) {
                                          if (null != payload.userId) {
                                            result = outer1_0;
                                            result = outer1_3;
                                            let obj9 = { userId: payload.userId };
                                            result = outer1_0(outer1_3[21]).showUserProfileActionSheetPostConnection(obj9);
                                            const obj20 = outer1_0(outer1_3[21]);
                                          }
                                          return true;
                                        } else {
                                          result = outer1_13;
                                          if (outer1_13.BUILD_OVERRIDE === type) {
                                            let obj16 = outer1_1(outer1_3[18]);
                                            obj16.popAll();
                                            let obj17 = outer1_1(outer1_3[18]);
                                            const obj10 = { overrideUrl: payload.overrideUrl };
                                            obj17.pushLazy(outer1_0(outer1_3[35])(outer1_3[44], outer1_3.paths), obj10);
                                            return true;
                                          } else {
                                            result = outer1_13;
                                            const GUILD_EVENT_DETAILS = outer1_13.GUILD_EVENT_DETAILS;
                                            if (GUILD_EVENT_DETAILS === type) {
                                              // CreateGeneratorClosureLongIndex (0x67)
                                              outer1_7(outer1_6(GUILD_EVENT_DETAILS));
                                              return true;
                                            } else {
                                              result = outer1_13;
                                              if (outer1_13.MOBILE_WEB_HANDOFF === type) {
                                                const redirectUrl = payload.redirectUrl;
                                                ({ nonce, fingerprint } = payload);
                                                let obj14 = outer1_1(outer1_3[49]);
                                                const _HermesInternal = HermesInternal;
                                                let obj11 = { nonce, fingerprint, skipLoginRedirect: true };
                                                const result1 = obj14.redirectWithHandoffToken("" + redirectUrl.pathname + redirectUrl.search, obj11);
                                                return true;
                                              } else {
                                                result = outer1_13;
                                                const VOICE_CHANNEL = outer1_13.VOICE_CHANNEL;
                                                if (VOICE_CHANNEL === type) {
                                                  // CreateGeneratorClosureLongIndex (0x67)
                                                  outer1_7(outer1_6(VOICE_CHANNEL));
                                                  return true;
                                                } else {
                                                  result = outer1_13;
                                                  if (outer1_13.ICYMI === type) {
                                                    outer1_7(() => {
                                                      outer2_0(outer2_3[52]).navigateToRootTab({ screen: "icymi" });
                                                    });
                                                    return true;
                                                  } else {
                                                    result = outer1_13;
                                                    if (outer1_13.GUILD_HOME === type) {
                                                      if (null != payload.guildId) {
                                                        let tmp74;
                                                        if (null != payload.highlightChannelId) {
                                                          if (null != payload.highlightMessageId) {
                                                            const obj12 = {};
                                                            obj11 = outer1_0(outer1_3[53]);
                                                            let obj13 = {};
                                                            ({ highlightChannelId: obj13.highlight_channel_id, highlightMessageId: obj13.highlight_message_id } = payload);
                                                            obj12.search = obj11.stringify(obj13);
                                                            tmp74 = obj12;
                                                          }
                                                        }
                                                        obj13 = outer1_0(outer1_3[54]);
                                                        obj13.transitionTo(outer1_14.CHANNEL(payload.guildId, outer1_17.GUILD_HOME), tmp74);
                                                      }
                                                      return true;
                                                    } else {
                                                      result = outer1_13;
                                                      if (outer1_13.USER_CONNECTIONS_LINK_CALLBACK === type) {
                                                        outer1_7(() => {
                                                          let hasItem = null != payload.callbackCode;
                                                          if (hasItem) {
                                                            hasItem = null != payload.callbackState;
                                                          }
                                                          if (hasItem) {
                                                            hasItem = null != payload.provider;
                                                          }
                                                          if (hasItem) {
                                                            const items = [, , , ];
                                                            ({ XBOX: arr[0], PLAYSTATION: arr[1], PLAYSTATION_STAGING: arr[2], CRUNCHYROLL: arr[3] } = outer2_16);
                                                            hasItem = items.includes(payload.provider);
                                                          }
                                                          if (hasItem) {
                                                            let obj = outer2_1(outer2_3[55]);
                                                            obj = { type: "USER_CONNECTIONS_LINK_CALLBACK" };
                                                            ({ provider: obj2.provider, callbackCode: obj2.callbackCode, callbackState: obj2.callbackState } = payload);
                                                            obj.dispatch(obj);
                                                          }
                                                        });
                                                        return true;
                                                      } else {
                                                        result = outer1_13;
                                                        const USER_CONNECTIONS_CALLBACK = outer1_13.USER_CONNECTIONS_CALLBACK;
                                                        if (USER_CONNECTIONS_CALLBACK === type) {
                                                          // CreateGeneratorClosureLongIndex (0x67)
                                                          outer1_7(outer1_6(USER_CONNECTIONS_CALLBACK));
                                                          return true;
                                                        } else {
                                                          result = outer1_13;
                                                          if (outer1_13.CONNECTIONS === type) {
                                                            outer1_7(() => {
                                                              let obj = outer2_1(outer2_3[18]);
                                                              obj.popAll();
                                                              obj = { screen: outer2_15.CONNECTIONS };
                                                              outer2_0(outer2_3[22]).openUserSettings(obj);
                                                            });
                                                            return true;
                                                          } else {
                                                            result = outer1_13;
                                                            if (outer1_13.GUILD_SETTINGS === type) {
                                                              outer1_7(() => {
                                                                if (null != payload.guildId) {
                                                                  const obj = outer2_1(outer2_3[58]);
                                                                  obj.open(payload.guildId, payload.settingsSection, undefined, payload.settingsSubsection);
                                                                }
                                                              });
                                                              return true;
                                                            } else {
                                                              result = outer1_13;
                                                              if (outer1_13.ACTIVATE_DEVICE === type) {
                                                                obj9 = outer1_1(outer1_3[59]);
                                                                obj9.showModal(payload.userCode);
                                                                return true;
                                                              } else {
                                                                result = outer1_13;
                                                                if (outer1_13.GUILD_SETTINGS_PICKER === type) {
                                                                  outer1_7(() => {
                                                                    let obj = outer2_0(outer2_3[60]);
                                                                    obj = { section: payload.settingsSection, subsection: payload.settingsSubsection, feature: payload.feature };
                                                                    const result = obj.openGuildSettingsPickerModal(obj);
                                                                  });
                                                                  return true;
                                                                } else {
                                                                  result = outer1_13;
                                                                  if (outer1_13.SHARE === type) {
                                                                    obj4 = outer1_0(outer1_3[61]);
                                                                    if (obj4.isIOS()) {
                                                                      obj5 = outer1_1(outer1_3[18]);
                                                                      obj5.popAll();
                                                                      obj6 = outer1_1(outer1_3[18]);
                                                                      obj14 = {};
                                                                      ({ text: obj8.text, channelId: obj8.channelId, shareId: obj8.shareId, attachmentManifest: obj8.attachmentManifest } = payload);
                                                                      const obj15 = { presentation: "modal" };
                                                                      obj6.pushLazy(outer1_0(outer1_3[35])(outer1_3[62], outer1_3.paths), obj14, outer1_23, obj15);
                                                                    }
                                                                    return true;
                                                                  } else {
                                                                    result = outer1_13;
                                                                    if (outer1_13.CREATE_VOICE_INVITE !== type) {
                                                                      result = outer1_13;
                                                                      if (outer1_13.SEND_VOICE_HANGOUT_WAVE !== type) {
                                                                        result = outer1_13;
                                                                        if (outer1_13.ACCOUNT_STANDING === type) {
                                                                          outer1_7(() => {
                                                                            let obj = outer2_1(outer2_3[18]);
                                                                            obj.popAll();
                                                                            obj = { screen: outer2_15.ACCOUNT, params: obj };
                                                                            obj = { initialTab: outer2_24.STANDING };
                                                                            outer2_0(outer2_3[22]).openUserSettings(obj);
                                                                          });
                                                                          return true;
                                                                        } else {
                                                                          result = outer1_13;
                                                                          if (outer1_13.MOBILE_NATIVE_UPDATE === type) {
                                                                            obj3 = outer1_2(outer1_3[64]);
                                                                            const result2 = obj3.openBuildInstallerUrl(payload.url);
                                                                            return true;
                                                                          } else {
                                                                            result = outer1_13;
                                                                            if (outer1_13.MOBILE_WEB_REDIRECT_CHECKOUT === type) {
                                                                              deepLinkAction = payload.deepLinkAction;
                                                                              // CreateGeneratorClosureLongIndex (0x67)
                                                                              outer1_7(outer1_6(deepLinkAction));
                                                                              return true;
                                                                            } else {
                                                                              result = outer1_13;
                                                                              if (outer1_13.SHOP === type) {
                                                                                outer1_7(() => {
                                                                                  let obj = outer2_0(outer2_3[67]);
                                                                                  obj = {};
                                                                                  const items = [outer2_1(outer2_3[68]).DEEPLINK];
                                                                                  obj.analyticsLocations = items;
                                                                                  obj.analyticsSource = outer2_1(outer2_3[68]).DEEPLINK;
                                                                                  ({ screen: obj2.screen, skuId: obj2.initialProductSkuId } = payload);
                                                                                  const result = obj.openCollectiblesShopMobile(obj);
                                                                                });
                                                                                return true;
                                                                              } else {
                                                                                result = outer1_13;
                                                                                if (outer1_13.AUTHORIZED_APPS === type) {
                                                                                  outer1_7(() => {
                                                                                    let obj = outer2_1(outer2_3[18]);
                                                                                    obj.popAll();
                                                                                    obj = { screen: outer2_15.AUTHORIZED_APPS };
                                                                                    outer2_0(outer2_3[22]).openUserSettings(obj);
                                                                                  });
                                                                                  return true;
                                                                                } else {
                                                                                  result = outer1_13;
                                                                                  if (outer1_13.DAVE_PROTOCOL_VERIFICATION === type) {
                                                                                    outer1_7(() => {
                                                                                      let obj = outer2_1(outer2_3[69]);
                                                                                      obj = { userId: payload.userId, fingerprint: fingerprint.replaceAll(" ", "+") };
                                                                                      fingerprint = payload.fingerprint;
                                                                                      const result = obj.handleSecureFramesUserVerificationLink(obj);
                                                                                    });
                                                                                    return true;
                                                                                  } else {
                                                                                    result = outer1_13;
                                                                                    if (outer1_13.QUESTS === type) {
                                                                                      outer1_7(() => {
                                                                                        if (null != payload.questId) {
                                                                                          let obj = outer2_0(outer2_3[70]);
                                                                                          obj = { questId: payload.questId, event: outer2_12.QUEST_SHARE_LINK_DEEP_LINKED_INTO_MOBILE_CLIENT, sourceQuestContent: outer2_0(outer2_3[71]).QuestContent.QUEST_EMBED_MOBILE };
                                                                                          obj = { referrer_id: payload.referrerId };
                                                                                          obj.properties = obj;
                                                                                          obj.trackQuestEvent(obj);
                                                                                        }
                                                                                        let sort;
                                                                                        if (null != payload) {
                                                                                          sort = payload.sort;
                                                                                        }
                                                                                        let filter;
                                                                                        if (null != payload) {
                                                                                          filter = payload.filter;
                                                                                        }
                                                                                        const obj1 = { scrollToQuestId: payload.questId };
                                                                                        let tmp10 = null;
                                                                                        if (null != sort) {
                                                                                          tmp10 = null;
                                                                                          if ("" !== sort) {
                                                                                            tmp10 = sort;
                                                                                          }
                                                                                        }
                                                                                        obj1.sort = tmp10;
                                                                                        let tmp11 = null;
                                                                                        if (null != filter) {
                                                                                          tmp11 = null;
                                                                                          if ("" !== filter) {
                                                                                            tmp11 = filter;
                                                                                          }
                                                                                        }
                                                                                        obj1.filter = tmp11;
                                                                                        obj1.fromContent = outer2_0(outer2_3[71]).QuestContent.QUEST_SHARE_LINK;
                                                                                        outer2_0(outer2_3[72]).openQuestHome(obj1);
                                                                                      });
                                                                                      return true;
                                                                                    } else {
                                                                                      result = outer1_13;
                                                                                      if (outer1_13.QUEST_HOME_PREVIEW === type) {
                                                                                        outer1_7(() => {
                                                                                          let obj = outer2_0(outer2_3[22]);
                                                                                          obj = { screen: outer2_15.QUESTS, params: obj };
                                                                                          obj = { previewAdCreativeIds: payload.adCreativeIds };
                                                                                          obj.openUserSettings(obj);
                                                                                        });
                                                                                        return true;
                                                                                      } else {
                                                                                        result = outer1_13;
                                                                                        if (outer1_13.GIFT === type) {
                                                                                          outer1_7(() => {
                                                                                            let obj = outer2_0(outer2_3[73]);
                                                                                            obj = {};
                                                                                            const items = [outer2_1(outer2_3[68]).DEEPLINK];
                                                                                            obj.analyticsLocations = items;
                                                                                            obj.openGiftModal(obj);
                                                                                          });
                                                                                          return true;
                                                                                        } else {
                                                                                          result = outer1_13;
                                                                                          if (outer1_13.NITRO_HOME === type) {
                                                                                            outer1_7(() => {
                                                                                              let obj = {};
                                                                                              const section = payload.section;
                                                                                              let tmp2;
                                                                                              if (null != section) {
                                                                                                tmp2 = section;
                                                                                              }
                                                                                              obj.scrollToSectionId = tmp2;
                                                                                              outer2_10.setState(obj);
                                                                                              obj = { screen: outer2_15.PREMIUM };
                                                                                              outer2_0(outer2_3[22]).openUserSettings(obj);
                                                                                            });
                                                                                            return true;
                                                                                          } else {
                                                                                            result = outer1_13;
                                                                                            if (outer1_13.ACTIVITY === type) {
                                                                                              outer1_1(outer1_3[74])(payload.applicationId, payload.referrerId, payload.customId, payload.linkId, payload.isDeepLink);
                                                                                              return true;
                                                                                            } else {
                                                                                              result = outer1_13;
                                                                                              if (outer1_13.CONNECTED_GAMES === type) {
                                                                                                outer1_7(() => {
                                                                                                  let obj = outer2_1(outer2_3[18]);
                                                                                                  obj.popAll();
                                                                                                  obj = { screen: outer2_15.CONTENT_AND_SOCIAL, params: obj };
                                                                                                  obj = { tab: outer2_25.CONNECTED_GAMES };
                                                                                                  outer2_0(outer2_3[22]).openUserSettings(obj);
                                                                                                });
                                                                                                return true;
                                                                                              } else {
                                                                                                result = outer1_13;
                                                                                                if (outer1_13.BOOST_MARKETING === type) {
                                                                                                  outer1_7(() => {
                                                                                                    outer2_0(outer2_3[75]).openApplyBoostModal(payload.guildId);
                                                                                                  });
                                                                                                  return true;
                                                                                                } else {
                                                                                                  result = outer1_13;
                                                                                                  if (outer1_13.BOOST_SETTINGS === type) {
                                                                                                    outer1_7(() => {
                                                                                                      let obj = outer2_1(outer2_3[18]);
                                                                                                      obj.popAll();
                                                                                                      obj = { screen: outer2_15.GUILD_BOOSTING };
                                                                                                      outer2_0(outer2_3[22]).openUserSettings(obj);
                                                                                                    });
                                                                                                    return true;
                                                                                                  } else {
                                                                                                    result = outer1_13;
                                                                                                    if (outer1_13.QUEST_PREVIEW_TOOL === type) {
                                                                                                      outer1_7(() => {
                                                                                                        outer2_1(outer2_3[18]).popAll();
                                                                                                        outer2_1(outer2_3[76])();
                                                                                                        const timerId = setTimeout(() => {
                                                                                                          let obj = outer3_0(outer3_3[22]);
                                                                                                          obj = { screen: outer3_15.QUEST_PREVIEW_TOOL_2, params: obj };
                                                                                                          obj = { questId: outer1_0.questId };
                                                                                                          obj.openUserSettings(obj);
                                                                                                        }, 1);
                                                                                                      });
                                                                                                      return true;
                                                                                                    } else {
                                                                                                      result = outer1_13;
                                                                                                      if (outer1_13.SUBSCRIPTION_SETTINGS === type) {
                                                                                                        outer1_7(() => {
                                                                                                          let obj = outer2_1(outer2_3[18]);
                                                                                                          obj.popAll();
                                                                                                          obj = { screen: outer2_15.GUILD_ROLE_SUBSCRIPTIONS };
                                                                                                          outer2_0(outer2_3[22]).openUserSettings(obj);
                                                                                                        });
                                                                                                        return true;
                                                                                                      } else {
                                                                                                        result = outer1_13;
                                                                                                        if (outer1_13.GAME_PROFILE === type) {
                                                                                                          gameId = payload.gameId;
                                                                                                          outer1_7(() => {
                                                                                                            let obj = outer2_1(outer2_3[18]);
                                                                                                            obj.popAll();
                                                                                                            obj = { gameId, source: outer2_0(outer2_3[77]).GameProfileSources.Deeplink, gameProfileModalChecks: obj };
                                                                                                            obj = { shouldOpenGameProfile: true, gameId };
                                                                                                            outer2_0(outer2_3[78]).default.openGameProfileModal(obj);
                                                                                                          });
                                                                                                          return true;
                                                                                                        } else {
                                                                                                          result = outer1_13;
                                                                                                          if (outer1_13.MESSAGE_REQUESTS === type) {
                                                                                                            result = outer1_1;
                                                                                                            obj = outer1_1(outer1_3[18]);
                                                                                                            obj.popAll();
                                                                                                            obj1 = outer1_0(outer1_3[19]);
                                                                                                            rootNavigationRef3 = obj1.getRootNavigationRef();
                                                                                                            if (null != rootNavigationRef3) {
                                                                                                              if (rootNavigationRef3.isReady()) {
                                                                                                                rootNavigationRef3.navigate("message-requests");
                                                                                                              } else {
                                                                                                                outer1_7(() => {
                                                                                                                  rootNavigationRef3.navigate("message-requests");
                                                                                                                });
                                                                                                              }
                                                                                                            }
                                                                                                            return true;
                                                                                                          } else {
                                                                                                            return false;
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                    outer1_7(() => {
                                                                      const result = outer2_0(outer2_3[63]).showInstantInviteActionSheetForChannel(payload.channelId);
                                                                    });
                                                                    return true;
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      ({ guildId, channelId } = payload);
                      result = outer1_13;
                      if (payload.type === outer1_13.MESSAGE) {
                        ({ messageId, summaryId } = payload);
                      }
                      result = null;
                      result = null != guildId && null != channelId;
                      if (result) {
                        result = outer1_1;
                        result = outer1_3;
                        obj16 = { guildId, channelId, messageId };
                        obj17 = { safe, navigationReplace, waitForConnection, skipMessageFetch };
                        obj16.navigationSettings = obj17;
                        obj16.summaryId = summaryId;
                        result = outer1_1(outer1_3[30])(obj16);
                      }
                      return true;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  })(payload);
  if (tmp) {
    let result = require(4096) /* removeInAppBrowserCloseSubscription */.browserManagerCloseBrowser();
    let obj = require(4096) /* removeInAppBrowserCloseSubscription */;
  }
  return null != tmp && tmp;
};
