// Module ID: 8236
// Function ID: 64938
// Name: getGiftStyleUrl
// Dependencies: [27, 1194, 8237, 1849, 4175, 653, 1851, 12292, 12293, 12294, 12295, 12296, 12297, 12298, 12299, 12300, 12301, 12302, 11852, 3969, 7722, 3976, 3941, 1212, 10980, 10981, 689, 3712, 7714, 7724, 12303, 12304, 12305, 12306, 12307, 5609, 3776, 2]
// Exports: createGiftCodeEmbed

// Module 8236 (getGiftStyleUrl)
import get_ActivityIndicator from "t";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import ME from "ME";
import GuildFeatures from "GuildFeatures";

let closure_10;
let closure_11;
let closure_12;
let closure_3;
let closure_4;
let closure_9;
function getGiftStyleUrl(arg0) {
  if (constants.BOX === arg0) {
    return importDefault(12292);
  } else if (constants.CUP === arg0) {
    return importDefault(12293);
  } else if (constants.SNOWGLOBE === arg0) {
    return importDefault(12294);
  } else if (constants.STANDARD_BOX === arg0) {
    return importDefault(12295);
  } else if (constants.COFFEE === arg0) {
    return importDefault(12296);
  } else if (constants.CAKE === arg0) {
    return importDefault(12297);
  } else if (constants.CHEST === arg0) {
    return importDefault(12298);
  } else if (constants.SEASONAL_STANDARD_BOX === arg0) {
    return importDefault(12299);
  } else if (constants.SEASONAL_CAKE === arg0) {
    return importDefault(12300);
  } else if (constants.SEASONAL_CHEST === arg0) {
    return importDefault(12301);
  } else if (constants.SEASONAL_COFFEE === arg0) {
    return importDefault(12302);
  } else if (constants.NITROWEEN_STANDARD === arg0) {
    const obj = { uri: importDefault(11852) };
    return obj;
  } else {
    return importDefault(12295);
  }
}
function getUserNameOrDefault(arg0) {
  const name = importDefault(3969).getName(arg0);
  let str = "";
  if (null != name) {
    str = name;
  }
  return str;
}
({ Image: closure_3, processColor: closure_4 } = get_ActivityIndicator);
({ AbortCodes: closure_9, MessageTypes: closure_10 } = ME);
({ PremiumGiftStyles: closure_11, PremiumSubscriptionSKUs: closure_12 } = GuildFeatures);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/GiftCodeEmbed.tsx");

export const createGiftCodeEmbed = function createGiftCodeEmbed(message, forcedTheme) {
  let backgroundColor;
  let closure_10;
  let closure_11;
  let closure_12;
  let closure_3;
  let closure_4;
  let _isNativeReflectConstruct;
  let closure_6;
  let closure_7;
  let closure_8;
  let closure_9;
  let dependencyMap;
  const _require = message;
  const importDefault = forcedTheme;
  if (null != message.author) {
    if (0 !== message.giftCodes.length) {
      const colors = importDefault(7722)(forcedTheme).colors;
      ({ headerColor: dependencyMap, titleColor: closure_3, subtitleColor: closure_4, bodyTextColor: _isNativeReflectConstruct, backgroundColor, resolvingGradientStart: closure_6, resolvingGradientEnd: closure_7, acceptLabelDisabledBackgroundColor: closure_8, acceptLabelDisabledColor: closure_9, thumbnailBackgroundColor: closure_10, acceptLabelGreenColor: closure_11, acceptBlurpleLabelBackgroundColor: closure_12 } = colors);
      let obj = { borderColor: colors.borderColor };
      let tmp4 = backgroundColor;
      if (obj2.isThemeDark(forcedTheme)) {
        const embedBackground = _require(3941).getEmbedBackground();
        let tmp9;
        if (null != embedBackground) {
          tmp9 = embedBackground;
        }
        const tmp5Result = closure_4(tmp9);
        tmp4 = backgroundColor;
        if (null != tmp5Result) {
          tmp4 = tmp5Result;
        }
        let obj3 = _require(3941);
        const tmp5 = closure_4;
      }
      obj.backgroundColor = tmp4;
      obj.thumbnailCornerRadius = 3;
      const giftCodes = message.giftCodes;
      return giftCodes.map((arg0) => {
        let error = outer1_6.get(arg0);
        if (null != arg0) {
          if (outer1_6.getIsResolved(arg0)) {
            const id = outer1_5.getId();
            if (null != error) {
              let tmp14 = id === error.userId;
            } else {
              tmp14 = id === message.author.id;
            }
            if (null == error) {
              error = outer1_6;
              error = outer1_6.getError(arg0);
              error = undefined;
              if (null != error) {
                error = error.code;
              }
              error = outer1_9;
              let obj = {};
              error = message;
              error = outer1_2;
              error = outer1_3;
              error = callback;
              error = callback;
              error = outer1_2;
              if (obj23.isThemeDark(callback)) {
                error = error(error[24]);
              } else {
                error = error(error[25]);
              }
              obj.thumbnailUrl = outer1_3.resolveAssetSource(error).uri;
              error = message;
              error = outer1_2;
              const intl13 = message(outer1_2[23]).intl;
              const string3 = intl13.string;
              const t = message(outer1_2[23]).t;
              if (tmp14) {
                let str25 = string3(t.kzFKb6);
              } else {
                str25 = string3(t.jwCLTM);
              }
              obj.headerText = str25.toUpperCase();
              error = message;
              error = outer1_2;
              const intl14 = message(outer1_2[23]).intl;
              obj.titleText = intl14.string(message(outer1_2[23]).t.SdKbX2);
              error = outer1_4;
              error = callback;
              error = outer1_4(callback(outer1_2[26]).unsafe_rawColors.RED_400);
              if (null == error) {
                error = closure_3;
              }
              obj.titleColor = error;
              error = closure_2;
              obj.headerColor = closure_2;
              error = closure_10;
              obj.thumbnailBackgroundColor = closure_10;
              if (error === outer1_9.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED) {
                error = message;
                error = outer1_2;
                const intl16 = message(outer1_2[23]).intl;
                error = intl16.string(message(outer1_2[23]).t.QXgO5w);
              } else {
                error = message;
                error = outer1_2;
                const intl15 = message(outer1_2[23]).intl;
                const string4 = intl15.string;
                const t2 = message(outer1_2[23]).t;
                if (tmp14) {
                  error = string4(t2.pBDXpb);
                } else {
                  error = string4(t2.TPamyd);
                }
              }
              obj.subtitle = error;
              error = closure_4;
              obj.subtitleColor = closure_4;
              error = obj;
              error = obj;
              error = Object.assign(obj);
              return obj;
            } else {
              error = outer1_8;
              error = outer1_8.get(error.skuId);
              error = outer1_6;
              error = outer1_7;
              error = outer1_6.getIsAccepting(arg0);
              error = outer1_7.getCurrentUser();
              const tmp16 = !(null == error || !error.verified || error.redeemed || error.isClaimed);
              let tmp17 = tmp16;
              if (tmp16) {
                tmp17 = null != error.expiresAt;
              }
              if (tmp17) {
                const intl2 = message(outer1_2[23]).intl;
                obj = {};
                const expiresAt = error.expiresAt;
                obj.hours = expiresAt.diff(callback(outer1_2[27])(), "h");
                const formatToPlainStringResult = intl2.formatToPlainString(message(outer1_2[23]).t.nZBvUR, obj);
              }
              if (error.redeemed) {
                const intl5 = message(outer1_2[23]).intl;
                let stringResult = intl5.string(message(outer1_2[23]).t["/cg57l"]);
              } else if (error.isClaimed) {
                const intl4 = message(outer1_2[23]).intl;
                stringResult = intl4.string(message(outer1_2[23]).t.ARWFQX);
              } else {
                if (!tmp22) {
                  const intl3 = message(outer1_2[23]).intl;
                  stringResult = intl3.string(message(outer1_2[23]).t["j+KPkX"]);
                }
                tmp22 = null != error && error.verified;
              }
              let tmp30 = null != error.giftStyle;
              if (!tmp30) {
                tmp30 = message.type === outer1_10.CUSTOM_GIFT;
              }
              if (tmp16) {
                const intl9 = message(outer1_2[23]).intl;
                const string = intl9.string;
                let TiZFqX = message(outer1_2[23]).t;
                if (tmp30) {
                  TiZFqX = TiZFqX.TiZFqX;
                  let stringResult1 = string(TiZFqX);
                } else {
                  stringResult1 = string(TiZFqX.bUvv1f);
                }
              } else {
                if (error) {
                  const intl8 = message(outer1_2[23]).intl;
                  let stringResult2 = intl8.string(message(outer1_2[23]).t.rTeOBK);
                  let processColorOrThrowResult = closure_8;
                  let processColorOrThrowResult1 = closure_9;
                } else {
                  if (!error.redeemed) {
                    if (!error.isClaimed) {
                      if (!tmp33) {
                        const intl6 = message(outer1_2[23]).intl;
                        stringResult2 = intl6.string(message(outer1_2[23]).t.v740sh);
                        let obj2 = message(outer1_2[28]);
                        processColorOrThrowResult = obj2.processColorOrThrow(callback(outer1_2[26]).unsafe_rawColors.BRAND_500);
                        let obj3 = message(outer1_2[28]);
                        processColorOrThrowResult1 = obj3.processColorOrThrow(callback(outer1_2[26]).unsafe_rawColors.WHITE);
                      }
                      tmp33 = null != error && error.verified;
                    }
                  }
                  const intl7 = message(outer1_2[23]).intl;
                  stringResult2 = intl7.string(message(outer1_2[23]).t.BTihou);
                  processColorOrThrowResult = closure_8;
                  processColorOrThrowResult1 = closure_9;
                }
                const skuId = error.skuId;
                if (outer1_12.TIER_0 === skuId) {
                  if (tmp30) {
                    let tmp87 = obj(error.giftStyle);
                  } else {
                    tmp87 = callback(outer1_2[30]);
                  }
                  const assetUriForEmbed = message(outer1_2[29]).getAssetUriForEmbed(tmp87);
                  const obj12 = message(outer1_2[29]);
                  const obj13 = message(outer1_2[29]);
                  if (obj14.isThemeDark(callback)) {
                    let tmp93Result = tmp93(tmp94[31]);
                  } else {
                    tmp93Result = tmp93(tmp94[32]);
                  }
                  const assetUriForEmbed1 = obj13.getAssetUriForEmbed(tmp93Result);
                  obj14 = message(outer1_2[21]);
                } else {
                  error = outer1_12;
                  if (outer1_12.TIER_1 === skuId) {
                    if (tmp30) {
                      let tmp74 = obj(error.giftStyle);
                    } else {
                      tmp74 = callback(outer1_2[33]);
                    }
                    const assetUriForEmbed2 = message(outer1_2[29]).getAssetUriForEmbed(tmp74);
                    const obj9 = message(outer1_2[29]);
                    const obj10 = message(outer1_2[29]);
                    if (obj11.isThemeDark(callback)) {
                      let tmp80Result = tmp80(tmp81[31]);
                    } else {
                      tmp80Result = tmp80(tmp81[32]);
                    }
                    let assetUriForEmbed3 = obj10.getAssetUriForEmbed(tmp80Result);
                    let assetUriForEmbed4 = assetUriForEmbed2;
                    obj11 = message(outer1_2[21]);
                  } else {
                    error = outer1_12;
                    if (outer1_12.TIER_2 !== skuId) {
                      error = outer1_12;
                      if (outer1_12.LEGACY !== skuId) {
                        error = message;
                        error = outer1_2;
                        const obj24 = message(outer1_2[29]);
                        error = callback;
                        error = callback;
                        error = outer1_2;
                        if (obj25.isThemeDark(callback)) {
                          let valueResult = error(error[31]);
                        } else {
                          valueResult = error(error[32]);
                        }
                        assetUriForEmbed3 = obj24.getAssetUriForEmbed(valueResult);
                        obj25 = message(outer1_2[21]);
                        assetUriForEmbed4 = message(outer1_2[29]).getAssetUriForEmbed(obj(error.giftStyle));
                        const obj5 = message(outer1_2[29]);
                      }
                    }
                    if (tmp30) {
                      let tmp61 = obj(error.giftStyle);
                    } else {
                      tmp61 = callback(outer1_2[34]);
                    }
                    const assetUriForEmbed5 = message(outer1_2[29]).getAssetUriForEmbed(tmp61);
                    const obj6 = message(outer1_2[29]);
                    const obj7 = message(outer1_2[29]);
                    if (obj8.isThemeDark(callback)) {
                      let tmp67Result = tmp67(tmp68[31]);
                    } else {
                      tmp67Result = tmp67(tmp68[32]);
                    }
                    assetUriForEmbed3 = obj7.getAssetUriForEmbed(tmp67Result);
                    assetUriForEmbed4 = assetUriForEmbed5;
                    obj8 = message(outer1_2[21]);
                  }
                  error = assetUriForEmbed4;
                  if (obj15.isGameItemSKU(error)) {
                    error = message;
                    error = outer1_2;
                    const str3 = message(outer1_2[35]).getGameItemThumbnailUrl(error);
                    error = undefined;
                    if (null != str3) {
                      error = str3.toString();
                    }
                    if (null != error) {
                      assetUriForEmbed4 = error;
                    }
                    error = assetUriForEmbed4;
                    const obj16 = message(outer1_2[35]);
                  }
                  const obj1 = {};
                  error = obj;
                  error = obj1;
                  error = Object.assign(obj);
                  error = message;
                  error = outer1_10;
                  if (message.type === outer1_10.CUSTOM_GIFT) {
                    if (!tmp14) {
                      error = message;
                      error = outer1_2;
                      const intl10 = message(outer1_2[23]).intl;
                      obj2 = {};
                      error = outer1_14;
                      obj2.recipientDisplayName = outer1_14(error);
                      obj1["headerText"] = intl10.formatToPlainString(message(outer1_2[23]).t.t1SOId, obj2).toUpperCase();
                      error = undefined;
                      if (null != error) {
                        error = message;
                        error = outer1_10;
                        if (message.type !== outer1_10.CUSTOM_GIFT) {
                          error = undefined;
                          if (null != error) {
                            error = error.name;
                          }
                        } else {
                          error = outer1_7;
                          error = message;
                          error = outer1_2;
                          error = outer1_7.getUser(error.userId);
                          const intl12 = message(outer1_2[23]).intl;
                          obj3 = {};
                          error = outer1_14;
                          obj3.sender = outer1_14(error);
                          error = intl12.formatToPlainString(message(outer1_2[23]).t.DDO4Wz, obj3);
                        }
                      }
                      obj1["titleText"] = error;
                      obj1["subtitle"] = formatToPlainStringResult;
                      obj1["bodyText"] = stringResult;
                      error = closure_2;
                      obj1["headerColor"] = closure_2;
                      error = closure_3;
                      obj1["titleColor"] = closure_3;
                      error = closure_4;
                      obj1["subtitleColor"] = closure_4;
                      error = _isNativeReflectConstruct;
                      obj1["bodyTextColor"] = _isNativeReflectConstruct;
                      obj1["acceptLabelBackgroundColor"] = processColorOrThrowResult;
                      obj1["acceptLabelColor"] = processColorOrThrowResult1;
                      obj1["acceptLabelText"] = stringResult2;
                      obj1["acceptLabelBorderColor"] = undefined;
                      obj1["canBeAccepted"] = tmp16;
                      obj1["embedCanBeTapped"] = true;
                      obj1["giftCode"] = arg0;
                      error = undefined;
                      obj1["thumbnailUrl"] = error;
                      error = message;
                      error = outer1_10;
                      error = undefined;
                      if (message.type !== outer1_10.CUSTOM_GIFT) {
                        if (null != assetUriForEmbed3) {
                          error = assetUriForEmbed3;
                        }
                      }
                      obj1["splashUrl"] = error;
                      error = callback;
                      error = outer1_2;
                      const str4 = intl10.formatToPlainString(message(outer1_2[23]).t.t1SOId, obj2);
                      obj1["splashHasRadialGradient"] = !callback(outer1_2[36]).isPremiumSku(error.skuId);
                      const obj20 = callback(outer1_2[36]);
                      let num35 = 0.97;
                      if (obj21.isPremiumSku(error.skuId)) {
                        num35 = 0.8;
                      }
                      obj1["splashOpacity"] = num35;
                      return obj1;
                    }
                  }
                  error = message;
                  error = outer1_2;
                  const intl11 = message(outer1_2[23]).intl;
                  const string2 = intl11.string;
                  let toUpperCase = message(outer1_2[23]).t;
                  if (tmp14) {
                    let str5 = string2(toUpperCase.QLEMld);
                  } else {
                    str5 = string2(toUpperCase.W4DBcy);
                  }
                  toUpperCase = str5.toUpperCase;
                  error = toUpperCase();
                  obj15 = message(outer1_2[35]);
                }
              }
              const tmp15 = null == error || !error.verified || error.redeemed || error.isClaimed;
            }
          } else {
            obj = {};
            const intl = message(outer1_2[23]).intl;
            obj.headerText = intl.string(message(outer1_2[23]).t["E+va0m"]).toUpperCase();
            obj.headerColor = closure_2;
            obj.resolvingGradientStart = closure_6;
            obj.resolvingGradientEnd = closure_7;
            const merged = Object.assign(obj);
            return obj;
          }
        }
      });
    }
  }
};
