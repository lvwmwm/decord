// Module ID: 12743
// Function ID: 97716
// Name: handleSupportedURL
// Dependencies: []
// Exports: default

// Module 12743 (handleSupportedURL)
let closure_4 = [];
let closure_5 = importDefault(dependencyMap[0]);
let closure_6 = importDefault(dependencyMap[1]);
arg1(dependencyMap[2]).addPostConnectionCallback;
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = arg1(dependencyMap[4]).handleMobileWebCheckoutStatus;
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
({ AnalyticEvents: closure_12, LinkingTypes: closure_13, Routes: closure_14, UserSettingsSections: closure_15, PlatformTypes: closure_16 } = arg1(dependencyMap[7]));
const StaticChannelRoute = arg1(dependencyMap[8]).StaticChannelRoute;
const StreamTypes = arg1(dependencyMap[9]).StreamTypes;
const NativePermissionTypes = arg1(dependencyMap[10]).NativePermissionTypes;
let closure_20 = arg1(dependencyMap[11]).OAUTH2_AUTHORIZE_MODAL_KEY;
let closure_21 = arg1(dependencyMap[12]).FAMILY_CENTER_LINK_REQUEST_REGEX;
let closure_22 = arg1(dependencyMap[13]).MobileWebRedirectCheckoutDeepLinkActions;
const SHARE_SCREEN_MODAL_KEY = arg1(dependencyMap[14]).SHARE_SCREEN_MODAL_KEY;
const AccountSettingsTabs = arg1(dependencyMap[15]).AccountSettingsTabs;
const MobileSetting = arg1(dependencyMap[16]).MobileSetting;
const tmp2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[80]).fileFinishedImporting("modules/links/native/handleSupportedURL.tsx");

export default function handleSupportedURL(payload) {
  const tmp = function _handleSupportedURL(payload) {
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
    let result;
    let remoteAuthFingerprint;
    let deepLinkAction;
    let gameId;
    let rootNavigationRef3;
    const type = payload.type;
    if (closure_13.CONTACT_SYNC === type) {
      result = payload;
      result = inviteCode;
      result = payload(inviteCode[17]).openContactSyncModalDeeplink();
      return true;
    } else {
      result = closure_13;
      if (closure_13.COMPOSE_MESSAGE === type) {
        result = rootNavigationRef1;
        result = inviteCode;
        result = rootNavigationRef1(inviteCode[18]).popAll();
        result = payload;
        const obj47 = rootNavigationRef1(inviteCode[18]);
        const rootNavigationRef = payload(inviteCode[19]).getRootNavigationRef();
        result = null;
        if (null != rootNavigationRef) {
          let obj = { screen: "new-message" };
          obj = { sourcePage: "Deeplink" };
          obj.params = obj;
          result = rootNavigationRef.navigate("friends", obj);
        }
        return true;
      } else {
        result = closure_13;
        if (closure_13.ADD_FRIENDS === type) {
          result = rootNavigationRef1;
          result = inviteCode;
          result = rootNavigationRef1(inviteCode[18]).popAll();
          result = payload;
          const obj41 = rootNavigationRef1(inviteCode[18]);
          rootNavigationRef1 = payload(inviteCode[19]).getRootNavigationRef();
          result = null;
          if (null == rootNavigationRef1) {
            result = rootNavigationRef1;
            result = inviteCode;
            result = rootNavigationRef1(inviteCode[20]).openAddFriendModalDeeplink();
            const obj46 = rootNavigationRef1(inviteCode[20]);
          } else if (rootNavigationRef1.isReady()) {
            let obj1 = { screen: "add-friends" };
            const obj2 = { sourcePage: "Deeplink" };
            obj1.params = obj2;
            result = rootNavigationRef1.navigate("friends", obj1);
          } else {
            result = result(() => rootNavigationRef1.navigate("friends", { screen: "add-friends", params: { sourcePage: "Deeplink" } }));
          }
          return true;
        } else {
          result = closure_13;
          if (closure_13.FRIENDS === type) {
            result = rootNavigationRef1;
            result = inviteCode;
            result = rootNavigationRef1(inviteCode[18]).popAll();
            result = payload;
            const obj36 = rootNavigationRef1(inviteCode[18]);
            rootNavigationRef2 = payload(inviteCode[19]).getRootNavigationRef();
            result = null;
            if (null != rootNavigationRef2) {
              if (rootNavigationRef2.isReady()) {
                result = rootNavigationRef2.navigate("friends");
              } else {
                result = result(() => {
                  rootNavigationRef2.navigate("friends");
                });
              }
            }
            if (null != payload.userId) {
              result = payload;
              result = inviteCode;
              let obj3 = { userId: payload.userId };
              result = payload(inviteCode[21]).showUserProfileActionSheetPostConnection(obj3);
              const obj39 = payload(inviteCode[21]);
            }
            return true;
          } else {
            result = closure_13;
            if (closure_13.EDIT_PROFILE === type) {
              result = result(() => {
                let obj = rootNavigationRef1(inviteCode[18]);
                obj.popAll();
                obj = { screen: constants2.PROFILE_CUSTOMIZATION };
                payload(inviteCode[22]).openUserSettings(obj);
              });
              return true;
            } else {
              result = closure_13;
              if (closure_13.INVITE === type) {
                inviteCode = payload.inviteCode;
                username = payload.username;
                deeplinkAttemptId = payload.deeplinkAttemptId;
                result = rootNavigationRef3;
                if (!rootNavigationRef3.isAuthenticated()) {
                  result = null;
                  if (null != inviteCode) {
                    result = payload;
                    result = inviteCode;
                    let obj4 = { deeplinkAttemptId };
                    result = payload(inviteCode[23]).showInvite(inviteCode, username, obj4);
                    const obj34 = payload(inviteCode[23]);
                  }
                  return true;
                }
                result = result(() => {
                  let obj = rootNavigationRef1(inviteCode[24]);
                  obj.hideModal();
                  if (null != inviteCode) {
                    const result = payload(inviteCode[25]).dismissGlobalKeyboard();
                    const obj2 = payload(inviteCode[25]);
                    obj = { deeplinkAttemptId };
                    payload(inviteCode[23]).showInvite(inviteCode, username, obj);
                    const obj3 = payload(inviteCode[23]);
                  }
                });
              } else {
                result = closure_13;
                if (closure_13.GUILD_TEMPLATE === type) {
                  guildTemplateCode = payload.guildTemplateCode;
                  result = result(() => {
                    payload(inviteCode[23]).clearDisplayedInvite();
                    if (null != guildTemplateCode) {
                      const result = payload(inviteCode[25]).dismissGlobalKeyboard();
                      const obj2 = payload(inviteCode[25]);
                      rootNavigationRef1(inviteCode[24]).showModal(guildTemplateCode);
                      const obj3 = rootNavigationRef1(inviteCode[24]);
                    }
                  });
                  return true;
                } else {
                  result = closure_13;
                  if (closure_13.GIFT_CODE === type) {
                    let giftCode = payload.giftCode;
                    result = null;
                    let flag44 = null != giftCode;
                    if (flag44) {
                      result = payload;
                      result = inviteCode;
                      giftCode = payload(inviteCode[26]).resolveGiftCode(giftCode);
                      const obj33 = payload(inviteCode[26]);
                      result = giftCode.then((giftCode) => {
                        rootNavigationRef1(inviteCode[27]).track(constants.OPEN_MODAL, {});
                        const obj = rootNavigationRef1(inviteCode[27]);
                        const result = payload(inviteCode[28]).openGiftCodeRedeemModal(giftCode.giftCode.code);
                      }).catch(() => {

                      });
                      flag44 = true;
                      const nextPromise = giftCode.then((giftCode) => {
                        rootNavigationRef1(inviteCode[27]).track(constants.OPEN_MODAL, {});
                        const obj = rootNavigationRef1(inviteCode[27]);
                        const result = payload(inviteCode[28]).openGiftCodeRedeemModal(giftCode.giftCode.code);
                      });
                    }
                    return flag44;
                  } else {
                    result = closure_13;
                    if (closure_13.ROLL_DICE === type) {
                      ({ guildId: guildId2, channelId: channelId2 } = payload);
                      result = null;
                      let flag43 = null != guildId2;
                      ({ diceCount, diceSides } = payload);
                      if (flag43) {
                        flag43 = null != channelId2;
                      }
                      if (flag43) {
                        result = payload;
                        result = inviteCode;
                        result = payload(inviteCode[29]).startDiceRoll(channelId2, diceCount, diceSides);
                        result = rootNavigationRef1;
                        let obj5 = { guildId: guildId2, channelId: channelId2, messageId: undefined };
                        let obj6 = { safe, navigationReplace, waitForConnection, skipMessageFetch };
                        obj5.navigationSettings = obj6;
                        result = rootNavigationRef1(inviteCode[30])(obj5);
                        flag43 = true;
                        const obj30 = payload(inviteCode[29]);
                      }
                      return flag43;
                    } else {
                      result = closure_13;
                      if (closure_13.CHANNEL !== type) {
                        result = closure_13;
                        if (closure_13.MESSAGE !== type) {
                          result = closure_13;
                          if (closure_13.SESSION_MANAGEMENT === type) {
                            result = result(() => {
                              let obj = rootNavigationRef1(inviteCode[18]);
                              obj.popAll();
                              obj = { screen: constants2.SESSIONS };
                              payload(inviteCode[22]).openUserSettings(obj);
                            });
                            return true;
                          } else {
                            result = closure_13;
                            if (closure_13.FAMILY_CENTER === type) {
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
                              result = result(() => {
                                let obj = rootNavigationRef1(inviteCode[18]);
                                obj.popAll();
                                obj = { screen: constants2.FAMILY_CENTER };
                                payload(inviteCode[22]).openUserSettings(obj);
                                let isMatch = null != result;
                                if (isMatch) {
                                  isMatch = regex.test(result);
                                }
                                if (isMatch) {
                                  const result = payload(inviteCode[31]).handleFamilyCenterQRCodeScan(result, "NativeCameraScan");
                                  const obj4 = payload(inviteCode[31]);
                                }
                              });
                              return true;
                            } else {
                              result = closure_13;
                              if (closure_13.OAUTH2_AUTHORIZE === type) {
                                result = result(() => {
                                  let obj = rootNavigationRef1(inviteCode[18]);
                                  obj.popAll();
                                  if (obj2.isMidjourneyOnboardingFlow()) {
                                    rootNavigationRef1(inviteCode[33]).openCreateGuildModal((arg0) => {
                                      if (lib.type === OAUTH2_AUTHORIZE.OAUTH2_AUTHORIZE) {
                                        let obj = callback(paths[18]);
                                        obj.popAll();
                                        obj = {};
                                        const obj2 = callback(paths[18]);
                                        const merged = Object.assign(lib.props);
                                        obj["guildId"] = arg0;
                                        obj["callback"] = callback(paths[36]);
                                        obj["dismissOAuthModal"] = function dismissOAuthModal() {
                                          callback(closure_3[18]).popWithKey(closure_20);
                                        };
                                        obj2.pushLazy(lib(paths[35])(paths[34], paths.paths), obj, closure_20);
                                        const tmp5 = lib(paths[35])(paths[34], paths.paths);
                                      }
                                    });
                                    const obj5 = rootNavigationRef1(inviteCode[33]);
                                  } else {
                                    obj = {};
                                    const merged = Object.assign(payload.props);
                                    obj["callback"] = rootNavigationRef1(inviteCode[36]);
                                    payload(inviteCode[37]).openOAuth2Modal(obj);
                                    const obj3 = payload(inviteCode[37]);
                                  }
                                });
                                return true;
                              } else {
                                result = closure_13;
                                if (closure_13.ONE_TIME_LOGIN === type) {
                                  result = rootNavigationRef1;
                                  result = inviteCode;
                                  result = rootNavigationRef1(inviteCode[18]).popAll();
                                  const obj24 = rootNavigationRef1(inviteCode[18]);
                                  result = payload;
                                  const obj8 = { token: payload.token };
                                  result = rootNavigationRef1(inviteCode[18]).pushLazy(payload(inviteCode[35])(inviteCode[38], inviteCode.paths), obj8, "ONE_TIME_LOGIN_MODAL");
                                  return true;
                                } else {
                                  result = closure_13;
                                  if (closure_13.REMOTE_AUTH === type) {
                                    remoteAuthFingerprint = payload.remoteAuthFingerprint;
                                    result = null;
                                    result = result(null != remoteAuthFingerprint ? () => {
                                      let obj = rootNavigationRef1(inviteCode[18]);
                                      obj = { remoteAuthFingerprint };
                                      obj.pushLazy(payload(inviteCode[35])(inviteCode[39], inviteCode.paths), obj, "REMOTE_AUTH_MODAL");
                                    } : () => {
                                      const obj = payload(inviteCode[40]);
                                      const tmp2 = payload(inviteCode[40]).isMetaQuest() ? closure_19.HEADSET_CAMERA : closure_19.CAMERA;
                                      const permission = rootNavigationRef1(inviteCode[41]).requestPermission(tmp2);
                                      const obj2 = rootNavigationRef1(inviteCode[41]);
                                      permission.then((arg0) => {
                                        if (arg0) {
                                          let obj = callback2(paths[18]);
                                          obj = { showHelp: true };
                                          obj.pushLazy(callback(paths[35])(paths[42], paths.paths), obj);
                                        }
                                      }).catch(() => {

                                      });
                                    });
                                    return true;
                                  } else {
                                    result = closure_13;
                                    if (closure_13.PROMOTIONS === type) {
                                      result = rootNavigationRef1;
                                      result = inviteCode;
                                      result = rootNavigationRef1(inviteCode[43]).performURLNavigation(payload.url);
                                      return true;
                                    } else {
                                      result = closure_13;
                                      if (closure_13.FEATURE_PROMO_URL === type) {
                                        result = rootNavigationRef1;
                                        result = inviteCode;
                                        result = rootNavigationRef1(inviteCode[43]).openURLExternally(payload.promoUrl);
                                        return true;
                                      } else {
                                        result = closure_13;
                                        if (closure_13.USER_PROFILE === type) {
                                          if (null != payload.userId) {
                                            result = payload;
                                            result = inviteCode;
                                            let obj9 = { userId: payload.userId };
                                            result = payload(inviteCode[21]).showUserProfileActionSheetPostConnection(obj9);
                                            const obj20 = payload(inviteCode[21]);
                                          }
                                          return true;
                                        } else {
                                          result = closure_13;
                                          if (closure_13.BUILD_OVERRIDE === type) {
                                            let obj16 = rootNavigationRef1(inviteCode[18]);
                                            obj16.popAll();
                                            let obj17 = rootNavigationRef1(inviteCode[18]);
                                            const obj10 = { overrideUrl: payload.overrideUrl };
                                            obj17.pushLazy(payload(inviteCode[35])(inviteCode[44], inviteCode.paths), obj10);
                                            return true;
                                          } else {
                                            result = closure_13;
                                            const GUILD_EVENT_DETAILS = closure_13.GUILD_EVENT_DETAILS;
                                            if (GUILD_EVENT_DETAILS === type) {
                                              // CreateGeneratorClosureLongIndex (0x67)
                                              result(guildTemplateCode(GUILD_EVENT_DETAILS));
                                              return true;
                                            } else {
                                              result = closure_13;
                                              if (closure_13.MOBILE_WEB_HANDOFF === type) {
                                                const redirectUrl = payload.redirectUrl;
                                                ({ nonce, fingerprint } = payload);
                                                let obj14 = rootNavigationRef1(inviteCode[49]);
                                                const _HermesInternal = HermesInternal;
                                                let obj11 = { nonce, fingerprint, skipLoginRedirect: true };
                                                const result1 = obj14.redirectWithHandoffToken("" + redirectUrl.pathname + redirectUrl.search, obj11);
                                                return true;
                                              } else {
                                                result = closure_13;
                                                const VOICE_CHANNEL = closure_13.VOICE_CHANNEL;
                                                if (VOICE_CHANNEL === type) {
                                                  // CreateGeneratorClosureLongIndex (0x67)
                                                  result(guildTemplateCode(VOICE_CHANNEL));
                                                  return true;
                                                } else {
                                                  result = closure_13;
                                                  if (closure_13.ICYMI === type) {
                                                    result(() => {
                                                      payload(inviteCode[52]).navigateToRootTab({ screen: "icymi" });
                                                    });
                                                    return true;
                                                  } else {
                                                    result = closure_13;
                                                    if (closure_13.GUILD_HOME === type) {
                                                      if (null != payload.guildId) {
                                                        let tmp74;
                                                        if (null != payload.highlightChannelId) {
                                                          if (null != payload.highlightMessageId) {
                                                            const obj12 = {};
                                                            obj11 = payload(inviteCode[53]);
                                                            let obj13 = {};
                                                            ({ highlightChannelId: obj13.highlight_channel_id, highlightMessageId: obj13.highlight_message_id } = payload);
                                                            obj12.search = obj11.stringify(obj13);
                                                            tmp74 = obj12;
                                                          }
                                                        }
                                                        obj13 = payload(inviteCode[54]);
                                                        obj13.transitionTo(closure_14.CHANNEL(payload.guildId, constants.GUILD_HOME), tmp74);
                                                      }
                                                      return true;
                                                    } else {
                                                      result = closure_13;
                                                      if (closure_13.USER_CONNECTIONS_LINK_CALLBACK === type) {
                                                        result(() => {
                                                          let hasItem = null != payload.callbackCode;
                                                          if (hasItem) {
                                                            hasItem = null != payload.callbackState;
                                                          }
                                                          if (hasItem) {
                                                            hasItem = null != payload.provider;
                                                          }
                                                          if (hasItem) {
                                                            const items = [, , , ];
                                                            ({ XBOX: arr[0], PLAYSTATION: arr[1], PLAYSTATION_STAGING: arr[2], CRUNCHYROLL: arr[3] } = closure_16);
                                                            hasItem = items.includes(payload.provider);
                                                          }
                                                          if (hasItem) {
                                                            let obj = rootNavigationRef1(inviteCode[55]);
                                                            obj = { type: "USER_CONNECTIONS_LINK_CALLBACK" };
                                                            ({ provider: obj2.provider, callbackCode: obj2.callbackCode, callbackState: obj2.callbackState } = payload);
                                                            obj.dispatch(obj);
                                                          }
                                                        });
                                                        return true;
                                                      } else {
                                                        result = closure_13;
                                                        const USER_CONNECTIONS_CALLBACK = closure_13.USER_CONNECTIONS_CALLBACK;
                                                        if (USER_CONNECTIONS_CALLBACK === type) {
                                                          // CreateGeneratorClosureLongIndex (0x67)
                                                          result(guildTemplateCode(USER_CONNECTIONS_CALLBACK));
                                                          return true;
                                                        } else {
                                                          result = closure_13;
                                                          if (closure_13.CONNECTIONS === type) {
                                                            result(() => {
                                                              let obj = rootNavigationRef1(inviteCode[18]);
                                                              obj.popAll();
                                                              obj = { screen: constants2.CONNECTIONS };
                                                              payload(inviteCode[22]).openUserSettings(obj);
                                                            });
                                                            return true;
                                                          } else {
                                                            result = closure_13;
                                                            if (closure_13.GUILD_SETTINGS === type) {
                                                              result(() => {
                                                                if (null != payload.guildId) {
                                                                  const obj = rootNavigationRef1(inviteCode[58]);
                                                                  obj.open(payload.guildId, payload.settingsSection, undefined, payload.settingsSubsection);
                                                                }
                                                              });
                                                              return true;
                                                            } else {
                                                              result = closure_13;
                                                              if (closure_13.ACTIVATE_DEVICE === type) {
                                                                obj9 = rootNavigationRef1(inviteCode[59]);
                                                                obj9.showModal(payload.userCode);
                                                                return true;
                                                              } else {
                                                                result = closure_13;
                                                                if (closure_13.GUILD_SETTINGS_PICKER === type) {
                                                                  result(() => {
                                                                    let obj = payload(inviteCode[60]);
                                                                    obj = { section: payload.settingsSection, subsection: payload.settingsSubsection, feature: payload.feature };
                                                                    const result = obj.openGuildSettingsPickerModal(obj);
                                                                  });
                                                                  return true;
                                                                } else {
                                                                  result = closure_13;
                                                                  if (closure_13.SHARE === type) {
                                                                    obj4 = payload(inviteCode[61]);
                                                                    if (obj4.isIOS()) {
                                                                      obj5 = rootNavigationRef1(inviteCode[18]);
                                                                      obj5.popAll();
                                                                      obj6 = rootNavigationRef1(inviteCode[18]);
                                                                      obj14 = {};
                                                                      ({ text: obj8.text, channelId: obj8.channelId, shareId: obj8.shareId, attachmentManifest: obj8.attachmentManifest } = payload);
                                                                      const obj15 = { presentation: "modal" };
                                                                      obj6.pushLazy(payload(inviteCode[35])(inviteCode[62], inviteCode.paths), obj14, closure_23, obj15);
                                                                    }
                                                                    return true;
                                                                  } else {
                                                                    result = closure_13;
                                                                    if (closure_13.CREATE_VOICE_INVITE !== type) {
                                                                      result = closure_13;
                                                                      if (closure_13.SEND_VOICE_HANGOUT_WAVE !== type) {
                                                                        result = closure_13;
                                                                        if (closure_13.ACCOUNT_STANDING === type) {
                                                                          result(() => {
                                                                            let obj = rootNavigationRef1(inviteCode[18]);
                                                                            obj.popAll();
                                                                            obj = { screen: constants2.ACCOUNT, params: obj };
                                                                            obj = { initialTab: constants3.STANDING };
                                                                            payload(inviteCode[22]).openUserSettings(obj);
                                                                          });
                                                                          return true;
                                                                        } else {
                                                                          result = closure_13;
                                                                          if (closure_13.MOBILE_NATIVE_UPDATE === type) {
                                                                            obj3 = rootNavigationRef2(inviteCode[64]);
                                                                            const result2 = obj3.openBuildInstallerUrl(payload.url);
                                                                            return true;
                                                                          } else {
                                                                            result = closure_13;
                                                                            if (closure_13.MOBILE_WEB_REDIRECT_CHECKOUT === type) {
                                                                              deepLinkAction = payload.deepLinkAction;
                                                                              // CreateGeneratorClosureLongIndex (0x67)
                                                                              result(guildTemplateCode(deepLinkAction));
                                                                              return true;
                                                                            } else {
                                                                              result = closure_13;
                                                                              if (closure_13.SHOP === type) {
                                                                                result(() => {
                                                                                  let obj = payload(inviteCode[67]);
                                                                                  obj = {};
                                                                                  const items = [rootNavigationRef1(inviteCode[68]).DEEPLINK];
                                                                                  obj.analyticsLocations = items;
                                                                                  obj.analyticsSource = rootNavigationRef1(inviteCode[68]).DEEPLINK;
                                                                                  ({ screen: obj2.screen, skuId: obj2.initialProductSkuId } = payload);
                                                                                  const result = obj.openCollectiblesShopMobile(obj);
                                                                                });
                                                                                return true;
                                                                              } else {
                                                                                result = closure_13;
                                                                                if (closure_13.AUTHORIZED_APPS === type) {
                                                                                  result(() => {
                                                                                    let obj = rootNavigationRef1(inviteCode[18]);
                                                                                    obj.popAll();
                                                                                    obj = { screen: constants2.AUTHORIZED_APPS };
                                                                                    payload(inviteCode[22]).openUserSettings(obj);
                                                                                  });
                                                                                  return true;
                                                                                } else {
                                                                                  result = closure_13;
                                                                                  if (closure_13.DAVE_PROTOCOL_VERIFICATION === type) {
                                                                                    result(() => {
                                                                                      let obj = rootNavigationRef1(inviteCode[69]);
                                                                                      obj = { userId: payload.userId, fingerprint: fingerprint.replaceAll(" ", "+") };
                                                                                      const fingerprint = payload.fingerprint;
                                                                                      const result = obj.handleSecureFramesUserVerificationLink(obj);
                                                                                    });
                                                                                    return true;
                                                                                  } else {
                                                                                    result = closure_13;
                                                                                    if (closure_13.QUESTS === type) {
                                                                                      result(() => {
                                                                                        if (null != payload.questId) {
                                                                                          let obj = payload(inviteCode[70]);
                                                                                          obj = { questId: payload.questId, event: constants.QUEST_SHARE_LINK_DEEP_LINKED_INTO_MOBILE_CLIENT, sourceQuestContent: payload(inviteCode[71]).QuestContent.QUEST_EMBED_MOBILE };
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
                                                                                        obj1.fromContent = payload(inviteCode[71]).QuestContent.QUEST_SHARE_LINK;
                                                                                        payload(inviteCode[72]).openQuestHome(obj1);
                                                                                      });
                                                                                      return true;
                                                                                    } else {
                                                                                      result = closure_13;
                                                                                      if (closure_13.QUEST_HOME_PREVIEW === type) {
                                                                                        result(() => {
                                                                                          let obj = payload(inviteCode[22]);
                                                                                          obj = { screen: constants2.QUESTS, params: obj };
                                                                                          obj = { previewAdCreativeIds: payload.adCreativeIds };
                                                                                          obj.openUserSettings(obj);
                                                                                        });
                                                                                        return true;
                                                                                      } else {
                                                                                        result = closure_13;
                                                                                        if (closure_13.GIFT === type) {
                                                                                          result(() => {
                                                                                            let obj = payload(inviteCode[73]);
                                                                                            obj = {};
                                                                                            const items = [rootNavigationRef1(inviteCode[68]).DEEPLINK];
                                                                                            obj.analyticsLocations = items;
                                                                                            obj.openGiftModal(obj);
                                                                                          });
                                                                                          return true;
                                                                                        } else {
                                                                                          result = closure_13;
                                                                                          if (closure_13.NITRO_HOME === type) {
                                                                                            result(() => {
                                                                                              let obj = {};
                                                                                              const section = payload.section;
                                                                                              let tmp2;
                                                                                              if (null != section) {
                                                                                                tmp2 = section;
                                                                                              }
                                                                                              obj.scrollToSectionId = tmp2;
                                                                                              gameId.setState(obj);
                                                                                              obj = { screen: constants2.PREMIUM };
                                                                                              payload(inviteCode[22]).openUserSettings(obj);
                                                                                            });
                                                                                            return true;
                                                                                          } else {
                                                                                            result = closure_13;
                                                                                            if (closure_13.ACTIVITY === type) {
                                                                                              rootNavigationRef1(inviteCode[74])(payload.applicationId, payload.referrerId, payload.customId, payload.linkId, payload.isDeepLink);
                                                                                              return true;
                                                                                            } else {
                                                                                              result = closure_13;
                                                                                              if (closure_13.CONNECTED_GAMES === type) {
                                                                                                result(() => {
                                                                                                  let obj = rootNavigationRef1(inviteCode[18]);
                                                                                                  obj.popAll();
                                                                                                  obj = { screen: constants2.CONTENT_AND_SOCIAL, params: obj };
                                                                                                  obj = { tab: constants4.CONNECTED_GAMES };
                                                                                                  payload(inviteCode[22]).openUserSettings(obj);
                                                                                                });
                                                                                                return true;
                                                                                              } else {
                                                                                                result = closure_13;
                                                                                                if (closure_13.BOOST_MARKETING === type) {
                                                                                                  result(() => {
                                                                                                    payload(inviteCode[75]).openApplyBoostModal(payload.guildId);
                                                                                                  });
                                                                                                  return true;
                                                                                                } else {
                                                                                                  result = closure_13;
                                                                                                  if (closure_13.BOOST_SETTINGS === type) {
                                                                                                    result(() => {
                                                                                                      let obj = rootNavigationRef1(inviteCode[18]);
                                                                                                      obj.popAll();
                                                                                                      obj = { screen: constants2.GUILD_BOOSTING };
                                                                                                      payload(inviteCode[22]).openUserSettings(obj);
                                                                                                    });
                                                                                                    return true;
                                                                                                  } else {
                                                                                                    result = closure_13;
                                                                                                    if (closure_13.QUEST_PREVIEW_TOOL === type) {
                                                                                                      result(() => {
                                                                                                        rootNavigationRef1(inviteCode[18]).popAll();
                                                                                                        rootNavigationRef1(inviteCode[76])();
                                                                                                        const timerId = setTimeout(() => {
                                                                                                          let obj = lib(closure_3[22]);
                                                                                                          obj = { screen: QUEST_PREVIEW_TOOL_2.QUEST_PREVIEW_TOOL_2, params: obj };
                                                                                                          obj = { questId: lib.questId };
                                                                                                          obj.openUserSettings(obj);
                                                                                                        }, 1);
                                                                                                      });
                                                                                                      return true;
                                                                                                    } else {
                                                                                                      result = closure_13;
                                                                                                      if (closure_13.SUBSCRIPTION_SETTINGS === type) {
                                                                                                        result(() => {
                                                                                                          let obj = rootNavigationRef1(inviteCode[18]);
                                                                                                          obj.popAll();
                                                                                                          obj = { screen: constants2.GUILD_ROLE_SUBSCRIPTIONS };
                                                                                                          payload(inviteCode[22]).openUserSettings(obj);
                                                                                                        });
                                                                                                        return true;
                                                                                                      } else {
                                                                                                        result = closure_13;
                                                                                                        if (closure_13.GAME_PROFILE === type) {
                                                                                                          gameId = payload.gameId;
                                                                                                          result(() => {
                                                                                                            let obj = rootNavigationRef1(inviteCode[18]);
                                                                                                            obj.popAll();
                                                                                                            obj = { gameId, source: payload(inviteCode[77]).GameProfileSources.Deeplink, gameProfileModalChecks: obj };
                                                                                                            obj = { shouldOpenGameProfile: true, gameId };
                                                                                                            payload(inviteCode[78]).default.openGameProfileModal(obj);
                                                                                                          });
                                                                                                          return true;
                                                                                                        } else {
                                                                                                          result = closure_13;
                                                                                                          if (closure_13.MESSAGE_REQUESTS === type) {
                                                                                                            result = rootNavigationRef1;
                                                                                                            obj = rootNavigationRef1(inviteCode[18]);
                                                                                                            obj.popAll();
                                                                                                            obj1 = payload(inviteCode[19]);
                                                                                                            rootNavigationRef3 = obj1.getRootNavigationRef();
                                                                                                            if (null != rootNavigationRef3) {
                                                                                                              if (rootNavigationRef3.isReady()) {
                                                                                                                rootNavigationRef3.navigate("message-requests");
                                                                                                              } else {
                                                                                                                result(() => {
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
                                                                    result(() => {
                                                                      const result = payload(inviteCode[63]).showInstantInviteActionSheetForChannel(payload.channelId);
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
                      result = closure_13;
                      if (payload.type === closure_13.MESSAGE) {
                        ({ messageId, summaryId } = payload);
                      }
                      result = null;
                      result = null != guildId && null != channelId;
                      if (result) {
                        result = rootNavigationRef1;
                        result = inviteCode;
                        obj16 = { guildId, channelId, messageId };
                        obj17 = { safe, navigationReplace, waitForConnection, skipMessageFetch };
                        obj16.navigationSettings = obj17;
                        obj16.summaryId = summaryId;
                        result = rootNavigationRef1(inviteCode[30])(obj16);
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
  }(payload);
  if (tmp) {
    const result = arg1(dependencyMap[79]).browserManagerCloseBrowser();
    const obj = arg1(dependencyMap[79]);
  }
  return null != tmp && tmp;
};
