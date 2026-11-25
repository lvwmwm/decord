// Module ID: 14434
// Function ID: 14435
// Name: GiftCodeEmbed
// Dependencies: [17, 502, 11879, 1386, 6329, 1071, 1388, 14435, 14436, 14437, 13985, 13988, 13986, 13987, 13989, 13990, 13991, 13992, 11538, 5068, 12335, 5019, 5182, 1112, 12336, 12337, 575, 2168, 11885, 2910, 8185, 8779, 13993, 14438, 14439, 13994, 13981, 7557, 2173, 2]
// Exports: createGiftCodeEmbed

// Module 14434 (GiftCodeEmbed)
import nativeDefault from "native" /* 575 */;
import intl18 from "intl" /* 1112 */;
import _modDef2168 from "module_2168" /* 2168 */;
import shared from "shared" /* 5019 */;
import react_native from "react-native" /* 8185 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8779 */;
import _modDef11538 from "module_11538" /* 11538 */;
import GiftSubscriptionCodeUtils from "GiftSubscriptionCodeUtils" /* 11885 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 12335 */;
import AssetRegistryDefault from "AssetRegistry" /* 13981 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13985 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13986 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13987 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13988 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13989 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13990 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 13991 */;
import AssetRegistryDefault9 from "AssetRegistry" /* 13992 */;
import AssetRegistryDefault10 from "AssetRegistry" /* 13993 */;
import AssetRegistryDefault11 from "AssetRegistry" /* 13994 */;
import AssetRegistryDefault12 from "AssetRegistry" /* 14435 */;
import AssetRegistryDefault13 from "AssetRegistry" /* 14436 */;
import AssetRegistryDefault14 from "AssetRegistry" /* 14437 */;
import react_native2 from "react-native" /* 17 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GiftCodeStore from "GiftCodeStore" /* 11879 */;
import UserStore from "UserStore" /* 1386 */;
import SKUStore from "SKUStore" /* 6329 */;
import Constants from "Constants" /* 1071 */;
import PremiumConstants from "PremiumConstants" /* 1388 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, titleColor;

let c10;
let c3;
let c9;
let closure_12;
let closure_4;
let unpackModuleId;
function getGiftStyleUrl(giftStyle) {
  if (unpackModuleId.BOX === giftStyle) {
    return AssetRegistryDefault12;
  } else if (unpackModuleId.CUP === giftStyle) {
    return AssetRegistryDefault13;
  } else if (unpackModuleId.SNOWGLOBE === giftStyle) {
    return AssetRegistryDefault14;
  } else if (unpackModuleId.STANDARD_BOX === giftStyle) {
    return AssetRegistryDefault2;
  } else if (unpackModuleId.COFFEE === giftStyle) {
    return AssetRegistryDefault5;
  } else if (unpackModuleId.CAKE === giftStyle) {
    return AssetRegistryDefault3;
  } else if (unpackModuleId.CHEST === giftStyle) {
    return AssetRegistryDefault4;
  } else if (unpackModuleId.SEASONAL_STANDARD_BOX === giftStyle) {
    return AssetRegistryDefault6;
  } else if (unpackModuleId.SEASONAL_CAKE === giftStyle) {
    return AssetRegistryDefault7;
  } else if (unpackModuleId.SEASONAL_CHEST === giftStyle) {
    return AssetRegistryDefault8;
  } else if (unpackModuleId.SEASONAL_COFFEE === giftStyle) {
    return AssetRegistryDefault9;
  } else if (unpackModuleId.NITROWEEN_STANDARD === giftStyle) {
    const obj = { uri: _modDef11538 };
    return obj;
  } else {
    return AssetRegistryDefault2;
  }
}
({ Image: c3, processColor: closure_4 } = react_native2);
({ AbortCodes: c9, MessageTypes: c10 } = Constants);
({ PremiumGiftStyles: unpackModuleId, PremiumSubscriptionSKUs: closure_12 } = PremiumConstants);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/GiftCodeEmbed.tsx");

export function createGiftCodeEmbed(message, forcedTheme) {
  let backgroundColor;
  let bodyTextColor;
  let closure_10;
  let closure_11;
  let closure_12;
  let closure_3;
  let closure_4;
  let closure_9;
  let headerColor;
  let resolvingGradientEnd;
  let resolvingGradientStart;
  let thumbnailBackgroundColor;
  let tmp4;
  _require = message;
  importDefault = forcedTheme;
  if (null != message.author) {
    if (0 !== message.giftCodes.length) {
      const colors = getEmbedThemeColorsDefault(forcedTheme).colors;
      ({ headerColor: dependencyMap, titleColor: closure_3, subtitleColor: closure_4, bodyTextColor: AuthenticationStore, backgroundColor, resolvingGradientStart: GiftCodeStore, resolvingGradientEnd: UserStore, acceptLabelDisabledBackgroundColor: SKUStore, acceptLabelDisabledColor: closure_9, thumbnailBackgroundColor: closure_10, acceptLabelGreenColor: closure_11, acceptBlurpleLabelBackgroundColor: closure_12 } = colors);
      const obj = { borderColor: colors.borderColor, backgroundColor: tmp4, thumbnailCornerRadius: 3 };
      let obj2 = require("shared");
      tmp4 = backgroundColor;
      const tmp3 = _require;
      if (obj2.isThemeDark(forcedTheme)) {
        const tmp3Result = tmp3(5182);
        const embedBackground = tmp3Result.getEmbedBackground();
        let tmp5Result = subtitleColor(embedBackground);
        if (tmp5Result == null) {
          tmp5Result = backgroundColor;
        }
        tmp4 = tmp5Result;
      }
      const giftCodes = message.giftCodes;
      return giftCodes.map((giftCode) => {
        let intl15;
        let str;
        let str8;
        let stringResult;
        let tmp122;
        const value = GiftCodeStore.get(giftCode);
        if (null != giftCode) {
          if (GiftCodeStore.getIsResolved(giftCode)) {
            let tmp13;
            const id = AuthenticationStore.getId();
            if (null != value) {
              tmp13 = id === value.userId;
            } else {
              tmp13 = id === message.author.id;
            }
            if (null == value) {
              let tmp118Result;
              let tmp120;
              const error = obj.getError(giftCode);
              let code;
              if (error != null) {
                code = error.code;
              }
              const INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED = constants.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED;
              titleColor = titleColor.resolveAssetSource;
              const obj21 = shared;
              if (obj21.isThemeDark(forcedTheme)) {
                tmp118Result = tmp118(12336);
                tmp120 = tmp118;
              } else {
                tmp118Result = tmp118(12337);
                tmp120 = tmp118;
              }
              const obj2 = { thumbnailUrl: titleColor(tmp118Result).uri, headerText: str8.toUpperCase(), titleText: intl15.string(intl18.t.SdKbX2), titleColor: tmp122, headerColor: dependencyMap, thumbnailBackgroundColor, subtitle: stringResult, subtitleColor };
              const intl14 = tmp115(1112).intl;
              const string3 = intl14.string;
              const t3 = tmp115(1112).t;
              if (tmp13) {
                str8 = string3(t3.kzFKb6);
              } else {
                str8 = string3(t3.jwCLTM);
              }
              intl15 = tmp115(1112).intl;
              tmp122 = React3(tmp120(575).unsafe_rawColors.RED_400);
              if (tmp122 == null) {
                tmp122 = titleColor;
              }
              if (code === INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED) {
                const intl17 = tmp115(1112).intl;
                stringResult = intl17.string(tmp115(1112).t.QXgO5w);
              } else {
                const intl16 = tmp115(1112).intl;
                const string4 = intl16.string;
                const t4 = tmp115(1112).t;
                if (tmp13) {
                  stringResult = string4(t4.pBDXpb);
                } else {
                  stringResult = string4(t4.TPamyd);
                }
              }
              const merged = Object.assign(obj);
              return obj2;
            } else {
              let formatToPlainStringResult;
              let formatToPlainStringResult1;
              let processColorOrThrowResult;
              let processColorOrThrowResult1;
              let stringResult2;
              let assetUriForEmbed6;
              let tmp50;
              let tmp53;
              let assetUriForEmbed;
              let str6;
              const value2 = SKUStore.get(value.skuId);
              const isAccepting = obj.getIsAccepting(giftCode);
              const currentUser = UserStore.getCurrentUser();
              let verified;
              const obj23 = UserStore;
              if (currentUser != null) {
                verified = currentUser.verified;
              }
              let tmp15 = verified;
              if (tmp15) {
                tmp15 = !(value.redeemed || value.isClaimed);
              }
              if (tmp15) {
                if (null != value.expiresAt) {
                  const expiresAt = value.expiresAt;
                  const diffResult = expiresAt.diff(_modDef2168(), "h");
                  const tmp19 = importDefault;
                  if (tmp13) {
                    const obj3 = GiftSubscriptionCodeUtils;
                    const tmp22 = require;
                    if (obj3.isPendingGiftSubscriptionCode(value)) {
                      const intl3 = tmp22(1112).intl;
                      const obj4 = { hours: diffResult };
                      formatToPlainStringResult = intl3.formatToPlainString(tmp19(2910).P9ZU7b, obj4);
                    }
                  }
                  const intl2 = intl18.intl;
                  const obj5 = { hours: diffResult };
                  formatToPlainStringResult1 = intl2.formatToPlainString(intl18.t.nZBvUR, obj5);
                }
              }
              if (value.redeemed) {
                const intl6 = intl18.intl;
                formatToPlainStringResult = intl6.string(intl18.t["/cg57l"]);
              } else if (value.isClaimed) {
                const intl5 = intl18.intl;
                formatToPlainStringResult = intl5.string(intl18.t.ARWFQX);
              } else {
                let verified1;
                if (currentUser != null) {
                  verified1 = currentUser.verified;
                }
                if (!verified1) {
                  const intl4 = intl18.intl;
                  formatToPlainStringResult = intl4.string(intl18.t["j+KPkX"]);
                }
              }
              if (tmp15) {
                let stringResult1;
                const intl10 = intl18.intl;
                const string = intl10.string;
                const t = intl18.t;
                if (null != value.giftStyle || message.type === thumbnailBackgroundColor.CUSTOM_GIFT) {
                  stringResult1 = string(t.TiZFqX);
                } else {
                  stringResult1 = string(t.bUvv1f);
                }
                processColorOrThrowResult = closure_12;
                processColorOrThrowResult1 = constants3;
                stringResult2 = stringResult1;
              } else if (isAccepting) {
                const intl9 = intl18.intl;
                stringResult2 = intl9.string(intl18.t.rTeOBK);
                processColorOrThrowResult = SKUStore;
                processColorOrThrowResult1 = closure_9;
              } else {
                if (!value.redeemed) {
                  if (!value.isClaimed) {
                    let verified2;
                    if (currentUser != null) {
                      verified2 = currentUser.verified;
                    }
                    if (!verified2) {
                      const intl7 = intl18.intl;
                      stringResult2 = intl7.string(intl18.t.v740sh);
                      const obj6 = react_native;
                      processColorOrThrowResult = obj6.processColorOrThrow(nativeDefault.unsafe_rawColors.BRAND_500);
                      const obj7 = react_native;
                      processColorOrThrowResult1 = obj7.processColorOrThrow(nativeDefault.unsafe_rawColors.WHITE);
                    }
                  }
                }
                const intl8 = intl18.intl;
                stringResult2 = intl8.string(intl18.t.BTihou);
                processColorOrThrowResult = SKUStore;
                processColorOrThrowResult1 = closure_9;
              }
              const skuId = value.skuId;
              if (closure_12.TIER_0 === skuId) {
                let tmp85;
                let tmp90Result;
                let tmp92;
                const getAssetUriForEmbed5 = renderer_EmbedUtils.getAssetUriForEmbed;
                renderer_EmbedUtils;
                if (null != value.giftStyle || message.type === thumbnailBackgroundColor.CUSTOM_GIFT) {
                  tmp85 = getGiftStyleUrl(value.giftStyle);
                } else {
                  tmp85 = AssetRegistryDefault10;
                }
                const assetUriForEmbed5 = getAssetUriForEmbed5(tmp85);
                const getAssetUriForEmbed6 = renderer_EmbedUtils.getAssetUriForEmbed;
                renderer_EmbedUtils;
                const tmp81Result2 = shared;
                if (tmp81Result2.isThemeDark(forcedTheme)) {
                  tmp90Result = tmp90(14438);
                  tmp92 = tmp90;
                } else {
                  tmp90Result = tmp90(14439);
                  tmp92 = tmp90;
                }
                assetUriForEmbed6 = getAssetUriForEmbed6(tmp90Result);
                tmp50 = tmp92;
                tmp53 = tmp81;
                assetUriForEmbed = assetUriForEmbed5;
              } else if (closure_12.TIER_1 === skuId) {
                let tmp73;
                let tmp78Result;
                let tmp80;
                const getAssetUriForEmbed3 = renderer_EmbedUtils.getAssetUriForEmbed;
                renderer_EmbedUtils;
                if (null != value.giftStyle || message.type === thumbnailBackgroundColor.CUSTOM_GIFT) {
                  tmp73 = getGiftStyleUrl(value.giftStyle);
                } else {
                  tmp73 = AssetRegistryDefault11;
                }
                const assetUriForEmbed3 = getAssetUriForEmbed3(tmp73);
                const getAssetUriForEmbed4 = renderer_EmbedUtils.getAssetUriForEmbed;
                renderer_EmbedUtils;
                const tmp69Result2 = shared;
                if (tmp69Result2.isThemeDark(forcedTheme)) {
                  tmp78Result = tmp78(14438);
                  tmp80 = tmp78;
                } else {
                  tmp78Result = tmp78(14439);
                  tmp80 = tmp78;
                }
                assetUriForEmbed6 = getAssetUriForEmbed4(tmp78Result);
                tmp50 = tmp80;
                tmp53 = tmp69;
                assetUriForEmbed = assetUriForEmbed3;
              } else {
                let tmp60;
                let tmp65Result;
                let tmp67;
                if (closure_12.TIER_2 !== skuId) {
                  if (closure_12.LEGACY !== skuId) {
                    let tmp137Result;
                    const getAssetUriForEmbed7 = renderer_EmbedUtils.getAssetUriForEmbed;
                    renderer_EmbedUtils;
                    const obj24 = shared;
                    if (obj24.isThemeDark(forcedTheme)) {
                      tmp137Result = tmp137(14438);
                      tmp50 = tmp137;
                    } else {
                      tmp137Result = tmp137(14439);
                      tmp50 = tmp137;
                    }
                    const assetUriForEmbed7 = getAssetUriForEmbed7(tmp137Result);
                    tmp53 = tmp134;
                    assetUriForEmbed6 = assetUriForEmbed7;
                    const tmp134Result = renderer_EmbedUtils;
                    assetUriForEmbed = tmp134Result.getAssetUriForEmbed(getGiftStyleUrl(value.giftStyle));
                  }
                }
                const getAssetUriForEmbed = renderer_EmbedUtils.getAssetUriForEmbed;
                renderer_EmbedUtils;
                if (null != value.giftStyle || message.type === thumbnailBackgroundColor.CUSTOM_GIFT) {
                  tmp60 = getGiftStyleUrl(value.giftStyle);
                } else {
                  tmp60 = AssetRegistryDefault;
                }
                const assetUriForEmbed1 = getAssetUriForEmbed(tmp60);
                const getAssetUriForEmbed2 = renderer_EmbedUtils.getAssetUriForEmbed;
                renderer_EmbedUtils;
                const tmp56Result2 = shared;
                if (tmp56Result2.isThemeDark(forcedTheme)) {
                  tmp65Result = tmp65(14438);
                  tmp67 = tmp65;
                } else {
                  tmp65Result = tmp65(14439);
                  tmp67 = tmp65;
                }
                assetUriForEmbed6 = getAssetUriForEmbed2(tmp65Result);
                tmp50 = tmp67;
                tmp53 = tmp56;
                assetUriForEmbed = assetUriForEmbed1;
              }
              let tmp94 = assetUriForEmbed;
              const tmp53Result = tmp53(7557);
              if (tmp53Result.isGameItemSKU(value2)) {
                const tmp53Result2 = tmp53(7557);
                const str3 = tmp53Result2.getGameItemThumbnailUrl(value2);
                let str1;
                if (str3 != null) {
                  str1 = str3.toString();
                }
                if (str1 == null) {
                  str1 = assetUriForEmbed;
                }
                tmp94 = str1;
              }
              const obj8 = {};
              const merged1 = Object.assign(obj);
              if (message.type === thumbnailBackgroundColor.CUSTOM_GIFT) {
                let formatted;
                if (!tmp13) {
                  const intl11 = tmp53(1112).intl;
                  const formatToPlainString = intl11.formatToPlainString;
                  const t1SOId = tmp53(1112).t.t1SOId;
                  const tmp50Result = tmp50(5068);
                  let str4 = tmp50Result.getName(currentUser);
                  if (str4 == null) {
                    str4 = "";
                  }
                  const obj9 = { recipientDisplayName: str4 };
                  const str5 = formatToPlainString(t1SOId, obj9);
                  formatted = str5.toUpperCase();
                }
                obj8.headerText = formatted;
                let formatToPlainString2Result;
                if (null != value) {
                  if (message.type !== thumbnailBackgroundColor.CUSTOM_GIFT) {
                    let name;
                    if (null != value2) {
                      name = value2.name;
                    }
                    formatToPlainString2Result = name;
                  } else {
                    const user = obj23.getUser(value.userId);
                    const intl13 = tmp53(1112).intl;
                    const formatToPlainString2 = intl13.formatToPlainString;
                    const DDO4Wz = tmp53(1112).t.DDO4Wz;
                    const tmp50Result4 = tmp50(5068);
                    let str7 = tmp50Result4.getName(user);
                    if (str7 == null) {
                      str7 = "";
                    }
                    const obj10 = { sender: str7 };
                    formatToPlainString2Result = formatToPlainString2(DDO4Wz, obj10);
                  }
                }
                obj8.titleText = formatToPlainString2Result;
                obj8.subtitle = formatToPlainStringResult1;
                obj8.bodyText = formatToPlainStringResult;
                obj8.headerColor = dependencyMap;
                obj8.titleColor = titleColor;
                obj8.subtitleColor = subtitleColor;
                obj8.bodyTextColor = AuthenticationStore;
                obj8.acceptLabelBackgroundColor = processColorOrThrowResult;
                obj8.acceptLabelColor = processColorOrThrowResult1;
                obj8.acceptLabelText = stringResult2;
                obj8.acceptLabelBorderColor = undefined;
                obj8.canBeAccepted = tmp15;
                obj8.embedCanBeTapped = true;
                obj8.giftCode = giftCode;
                let tmp109;
                if (null != tmp94) {
                  tmp109 = tmp94;
                }
                obj8.thumbnailUrl = tmp109;
                let tmp110;
                if (message.type !== thumbnailBackgroundColor.CUSTOM_GIFT) {
                  if (null != assetUriForEmbed6) {
                    tmp110 = assetUriForEmbed6;
                  }
                }
                obj8.splashUrl = tmp110;
                const tmp50Result5 = tmp50(2173);
                obj8.splashHasRadialGradient = !tmp50Result5.isPremiumSku(value.skuId);
                let num5 = 0.97;
                const tmp50Result6 = tmp50(2173);
                if (tmp50Result6.isPremiumSku(value.skuId)) {
                  num5 = 0.8;
                }
                obj8.splashOpacity = num5;
                return obj8;
              }
              const intl12 = tmp53(1112).intl;
              const string2 = intl12.string;
              const t2 = tmp53(1112).t;
              if (tmp13) {
                str6 = string2(t2.QLEMld);
              } else {
                str6 = string2(t2.W4DBcy);
              }
              formatted = str6.toUpperCase();
            }
          } else {
            const obj11 = { headerText: str.toUpperCase(), headerColor: dependencyMap, resolvingGradientStart: GiftCodeStore, resolvingGradientEnd: UserStore };
            const intl = intl18.intl;
            str = intl.string(intl18.t["E+va0m"]);
            const merged2 = Object.assign(obj);
            return obj11;
          }
        }
      });
    }
  }
}
