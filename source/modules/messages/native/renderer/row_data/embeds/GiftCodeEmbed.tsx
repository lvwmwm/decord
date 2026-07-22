// Module ID: 8186
// Function ID: 64673
// Name: getGiftStyleUrl
// Dependencies: []
// Exports: createGiftCodeEmbed

// Module 8186 (getGiftStyleUrl)
function getGiftStyleUrl(arg0) {
  if (constants.BOX === arg0) {
    return importDefault(dependencyMap[7]);
  } else if (constants.CUP === arg0) {
    return importDefault(dependencyMap[8]);
  } else if (constants.SNOWGLOBE === arg0) {
    return importDefault(dependencyMap[9]);
  } else if (constants.STANDARD_BOX === arg0) {
    return importDefault(dependencyMap[10]);
  } else if (constants.COFFEE === arg0) {
    return importDefault(dependencyMap[11]);
  } else if (constants.CAKE === arg0) {
    return importDefault(dependencyMap[12]);
  } else if (constants.CHEST === arg0) {
    return importDefault(dependencyMap[13]);
  } else if (constants.SEASONAL_STANDARD_BOX === arg0) {
    return importDefault(dependencyMap[14]);
  } else if (constants.SEASONAL_CAKE === arg0) {
    return importDefault(dependencyMap[15]);
  } else if (constants.SEASONAL_CHEST === arg0) {
    return importDefault(dependencyMap[16]);
  } else if (constants.SEASONAL_COFFEE === arg0) {
    return importDefault(dependencyMap[17]);
  } else if (constants.NITROWEEN_STANDARD === arg0) {
    const obj = { uri: importDefault(dependencyMap[18]) };
    return obj;
  } else {
    return importDefault(dependencyMap[10]);
  }
}
function getUserNameOrDefault(arg0) {
  const name = importDefault(dependencyMap[19]).getName(arg0);
  let str = "";
  if (null != name) {
    str = name;
  }
  return str;
}
const _module = require(dependencyMap[0]);
({ Image: closure_3, processColor: closure_4 } = _module);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const _module1 = require(dependencyMap[5]);
({ AbortCodes: closure_9, MessageTypes: closure_10 } = _module1);
const _module2 = require(dependencyMap[6]);
({ PremiumGiftStyles: closure_11, PremiumSubscriptionSKUs: closure_12 } = _module2);
const _module3 = require(dependencyMap[37]);
const result = _module3.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/GiftCodeEmbed.tsx");

export const createGiftCodeEmbed = function createGiftCodeEmbed(message, forcedTheme) {
  let backgroundColor;
  const require = message;
  const importDefault = forcedTheme;
  if (null != message.author) {
    if (0 !== message.giftCodes.length) {
      const colors = importDefault(dependencyMap[20])(forcedTheme).colors;
      ({ headerColor: closure_2, titleColor: closure_3, subtitleColor: closure_4, bodyTextColor: closure_5, backgroundColor, resolvingGradientStart: closure_6, resolvingGradientEnd: closure_7, acceptLabelDisabledBackgroundColor: closure_8, acceptLabelDisabledColor: closure_9, thumbnailBackgroundColor: closure_10, acceptLabelGreenColor: closure_11, acceptBlurpleLabelBackgroundColor: closure_12 } = colors);
      const obj = { borderColor: colors.borderColor };
      let tmp4 = backgroundColor;
      if (obj2.isThemeDark(forcedTheme)) {
        const embedBackground = require(dependencyMap[22]).getEmbedBackground();
        let tmp9;
        if (null != embedBackground) {
          tmp9 = embedBackground;
        }
        const tmp5Result = closure_4(tmp9);
        tmp4 = backgroundColor;
        if (null != tmp5Result) {
          tmp4 = tmp5Result;
        }
        const obj3 = require(dependencyMap[22]);
        const tmp5 = closure_4;
      }
      obj.backgroundColor = tmp4;
      obj.thumbnailCornerRadius = 3;
      const getGiftStyleUrl = obj;
      const giftCodes = message.giftCodes;
      return giftCodes.map((self) => {
        let error = store.get(self);
        if (null != self) {
          if (store.getIsResolved(self)) {
            const id = id.getId();
            if (null != error) {
              let tmp14 = id === error.userId;
            } else {
              tmp14 = id === self.author.id;
            }
            if (null == error) {
              error = store;
              error = store.getError(self);
              error = undefined;
              if (null != error) {
                error = error.code;
              }
              error = constants;
              let obj = {};
              error = self;
              error = closure_2;
              error = closure_3;
              error = arg1;
              error = arg1;
              error = closure_2;
              if (obj23.isThemeDark(arg1)) {
                error = error(error[24]);
              } else {
                error = error(error[25]);
              }
              obj.thumbnailUrl = closure_3.resolveAssetSource(error).uri;
              error = self;
              error = closure_2;
              const intl13 = self(closure_2[23]).intl;
              const string3 = intl13.string;
              const t = self(closure_2[23]).t;
              if (tmp14) {
                let str25 = string3(t.kzFKb6);
              } else {
                str25 = string3(t.jwCLTM);
              }
              obj.headerText = str25.toUpperCase();
              error = self;
              error = closure_2;
              const intl14 = self(closure_2[23]).intl;
              obj.titleText = intl14.string(self(closure_2[23]).t.SdKbX2);
              error = callback;
              error = arg1;
              error = callback(arg1(closure_2[26]).unsafe_rawColors.RED_400);
              if (null == error) {
                error = closure_3;
              }
              obj.titleColor = error;
              error = closure_2;
              obj.headerColor = closure_2;
              error = constants2;
              obj.thumbnailBackgroundColor = constants2;
              if (error === constants.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED) {
                error = self;
                error = closure_2;
                const intl16 = self(closure_2[23]).intl;
                error = intl16.string(self(closure_2[23]).t.QXgO5w);
              } else {
                error = self;
                error = closure_2;
                const intl15 = self(closure_2[23]).intl;
                const string4 = intl15.string;
                const t2 = self(closure_2[23]).t;
                if (tmp14) {
                  error = string4(t2.pBDXpb);
                } else {
                  error = string4(t2.TPamyd);
                }
              }
              obj.subtitle = error;
              error = callback;
              obj.subtitleColor = callback;
              error = obj;
              error = obj;
              error = Object.assign(obj);
              return obj;
            } else {
              error = closure_8;
              error = closure_8.get(error.skuId);
              error = store;
              error = authStore;
              error = store.getIsAccepting(self);
              error = authStore.getCurrentUser();
              let tmp17 = tmp16;
              if (!(null == error || !error.verified || error.redeemed || error.isClaimed)) {
                tmp17 = null != error.expiresAt;
              }
              if (tmp17) {
                const intl2 = self(closure_2[23]).intl;
                obj = {};
                const expiresAt = error.expiresAt;
                obj.hours = expiresAt.diff(arg1(closure_2[27])(), "h");
                const formatToPlainStringResult = intl2.formatToPlainString(self(closure_2[23]).t.nZBvUR, obj);
              }
              if (error.redeemed) {
                const intl5 = self(closure_2[23]).intl;
                let stringResult = intl5.string(self(closure_2[23]).t./cg57l);
              } else if (error.isClaimed) {
                const intl4 = self(closure_2[23]).intl;
                stringResult = intl4.string(self(closure_2[23]).t.ARWFQX);
              } else {
                if (!tmp22) {
                  const intl3 = self(closure_2[23]).intl;
                  stringResult = intl3.string(self(closure_2[23]).t.j+KPkX);
                }
                const tmp22 = null != error && error.verified;
              }
              let tmp30 = null != error.giftStyle;
              if (!tmp30) {
                tmp30 = self.type === constants2.CUSTOM_GIFT;
              }
              if (!(null == error || !error.verified || error.redeemed || error.isClaimed)) {
                const intl9 = self(closure_2[23]).intl;
                const string = intl9.string;
                let TiZFqX = self(closure_2[23]).t;
                if (tmp30) {
                  TiZFqX = TiZFqX.TiZFqX;
                  let stringResult1 = string(TiZFqX);
                } else {
                  stringResult1 = string(TiZFqX.bUvv1f);
                }
              } else {
                if (error) {
                  const intl8 = self(closure_2[23]).intl;
                  let stringResult2 = intl8.string(self(closure_2[23]).t.rTeOBK);
                  let processColorOrThrowResult = closure_8;
                  let processColorOrThrowResult1 = constants;
                } else {
                  if (!error.redeemed) {
                    if (!error.isClaimed) {
                      if (!tmp33) {
                        const intl6 = self(closure_2[23]).intl;
                        stringResult2 = intl6.string(self(closure_2[23]).t.v740sh);
                        let obj2 = self(closure_2[28]);
                        processColorOrThrowResult = obj2.processColorOrThrow(arg1(closure_2[26]).unsafe_rawColors.BRAND_500);
                        let obj3 = self(closure_2[28]);
                        processColorOrThrowResult1 = obj3.processColorOrThrow(arg1(closure_2[26]).unsafe_rawColors.WHITE);
                      }
                      const tmp33 = null != error && error.verified;
                    }
                  }
                  const intl7 = self(closure_2[23]).intl;
                  stringResult2 = intl7.string(self(closure_2[23]).t.BTihou);
                  processColorOrThrowResult = closure_8;
                  processColorOrThrowResult1 = constants;
                }
                const skuId = error.skuId;
                if (closure_12.TIER_0 === skuId) {
                  if (tmp30) {
                    let tmp87 = obj(error.giftStyle);
                  } else {
                    tmp87 = arg1(closure_2[30]);
                  }
                  const assetUriForEmbed = self(closure_2[29]).getAssetUriForEmbed(tmp87);
                  const obj12 = self(closure_2[29]);
                  const obj13 = self(closure_2[29]);
                  if (obj14.isThemeDark(arg1)) {
                    let tmp93Result = tmp93(tmp94[31]);
                  } else {
                    tmp93Result = tmp93(tmp94[32]);
                  }
                  const assetUriForEmbed1 = obj13.getAssetUriForEmbed(tmp93Result);
                  const obj14 = self(closure_2[21]);
                } else {
                  error = closure_12;
                  if (closure_12.TIER_1 === skuId) {
                    if (tmp30) {
                      let tmp74 = obj(error.giftStyle);
                    } else {
                      tmp74 = arg1(closure_2[33]);
                    }
                    const assetUriForEmbed2 = self(closure_2[29]).getAssetUriForEmbed(tmp74);
                    const obj9 = self(closure_2[29]);
                    const obj10 = self(closure_2[29]);
                    if (obj11.isThemeDark(arg1)) {
                      let tmp80Result = tmp80(tmp81[31]);
                    } else {
                      tmp80Result = tmp80(tmp81[32]);
                    }
                    let assetUriForEmbed3 = obj10.getAssetUriForEmbed(tmp80Result);
                    let assetUriForEmbed4 = assetUriForEmbed2;
                    const obj11 = self(closure_2[21]);
                  } else {
                    error = closure_12;
                    if (closure_12.TIER_2 !== skuId) {
                      error = closure_12;
                      if (closure_12.LEGACY !== skuId) {
                        error = self;
                        error = closure_2;
                        const obj24 = self(closure_2[29]);
                        error = arg1;
                        error = arg1;
                        error = closure_2;
                        if (obj25.isThemeDark(arg1)) {
                          let valueResult = error(error[31]);
                        } else {
                          valueResult = error(error[32]);
                        }
                        assetUriForEmbed3 = obj24.getAssetUriForEmbed(valueResult);
                        const obj25 = self(closure_2[21]);
                        assetUriForEmbed4 = self(closure_2[29]).getAssetUriForEmbed(obj(error.giftStyle));
                        const obj5 = self(closure_2[29]);
                      }
                    }
                    if (tmp30) {
                      let tmp61 = obj(error.giftStyle);
                    } else {
                      tmp61 = arg1(closure_2[34]);
                    }
                    const assetUriForEmbed5 = self(closure_2[29]).getAssetUriForEmbed(tmp61);
                    const obj6 = self(closure_2[29]);
                    const obj7 = self(closure_2[29]);
                    if (obj8.isThemeDark(arg1)) {
                      let tmp67Result = tmp67(tmp68[31]);
                    } else {
                      tmp67Result = tmp67(tmp68[32]);
                    }
                    assetUriForEmbed3 = obj7.getAssetUriForEmbed(tmp67Result);
                    assetUriForEmbed4 = assetUriForEmbed5;
                    const obj8 = self(closure_2[21]);
                  }
                  error = assetUriForEmbed4;
                  if (obj15.isGameItemSKU(error)) {
                    error = self;
                    error = closure_2;
                    const str3 = self(closure_2[35]).getGameItemThumbnailUrl(error);
                    error = undefined;
                    if (null != str3) {
                      error = str3.toString();
                    }
                    if (null != error) {
                      assetUriForEmbed4 = error;
                    }
                    error = assetUriForEmbed4;
                    const obj16 = self(closure_2[35]);
                  }
                  const obj1 = {};
                  error = obj;
                  error = obj1;
                  error = Object.assign(obj);
                  error = self;
                  error = constants2;
                  if (self.type === constants2.CUSTOM_GIFT) {
                    if (!tmp14) {
                      error = self;
                      error = closure_2;
                      const intl10 = self(closure_2[23]).intl;
                      obj2 = {};
                      error = callback2;
                      obj2.recipientDisplayName = callback2(error);
                      obj1["headerText"] = intl10.formatToPlainString(self(closure_2[23]).t.t1SOId, obj2).toUpperCase();
                      error = undefined;
                      if (null != error) {
                        error = self;
                        error = constants2;
                        if (self.type !== constants2.CUSTOM_GIFT) {
                          error = undefined;
                          if (null != error) {
                            error = error.name;
                          }
                        } else {
                          error = authStore;
                          error = self;
                          error = closure_2;
                          error = authStore.getUser(error.userId);
                          const intl12 = self(closure_2[23]).intl;
                          obj3 = {};
                          error = callback2;
                          obj3.sender = callback2(error);
                          error = intl12.formatToPlainString(self(closure_2[23]).t.DDO4Wz, obj3);
                        }
                      }
                      obj1["titleText"] = error;
                      obj1["subtitle"] = formatToPlainStringResult;
                      obj1["bodyText"] = stringResult;
                      error = closure_2;
                      obj1["headerColor"] = closure_2;
                      error = closure_3;
                      obj1["titleColor"] = closure_3;
                      error = callback;
                      obj1["subtitleColor"] = callback;
                      error = id;
                      obj1["bodyTextColor"] = id;
                      obj1["acceptLabelBackgroundColor"] = processColorOrThrowResult;
                      obj1["acceptLabelColor"] = processColorOrThrowResult1;
                      obj1["acceptLabelText"] = stringResult2;
                      obj1["acceptLabelBorderColor"] = undefined;
                      obj1["canBeAccepted"] = tmp16;
                      obj1["embedCanBeTapped"] = true;
                      obj1["giftCode"] = self;
                      error = undefined;
                      obj1["thumbnailUrl"] = error;
                      error = self;
                      error = constants2;
                      error = undefined;
                      if (self.type !== constants2.CUSTOM_GIFT) {
                        if (null != assetUriForEmbed3) {
                          error = assetUriForEmbed3;
                        }
                      }
                      obj1["splashUrl"] = error;
                      error = arg1;
                      error = closure_2;
                      const str4 = intl10.formatToPlainString(self(closure_2[23]).t.t1SOId, obj2);
                      obj1["splashHasRadialGradient"] = !arg1(closure_2[36]).isPremiumSku(error.skuId);
                      const obj20 = arg1(closure_2[36]);
                      let num35 = 0.97;
                      if (obj21.isPremiumSku(error.skuId)) {
                        num35 = 0.8;
                      }
                      obj1["splashOpacity"] = num35;
                      return obj1;
                    }
                  }
                  error = self;
                  error = closure_2;
                  const intl11 = self(closure_2[23]).intl;
                  const string2 = intl11.string;
                  let toUpperCase = self(closure_2[23]).t;
                  if (tmp14) {
                    let str5 = string2(toUpperCase.QLEMld);
                  } else {
                    str5 = string2(toUpperCase.W4DBcy);
                  }
                  toUpperCase = str5.toUpperCase;
                  error = toUpperCase();
                  const obj15 = self(closure_2[35]);
                }
              }
              const tmp15 = null == error || !error.verified || error.redeemed || error.isClaimed;
            }
          } else {
            obj = {};
            const intl = self(closure_2[23]).intl;
            obj.headerText = intl.string(self(closure_2[23]).t.E+va0m).toUpperCase();
            obj.headerColor = closure_2;
            obj.resolvingGradientStart = store;
            obj.resolvingGradientEnd = authStore;
            const merged = Object.assign(obj);
            return obj;
          }
        }
      });
    }
  }
};
