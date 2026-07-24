// Module ID: 10033
// Function ID: 77525
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31, 27, 4940, 33, 4130, 689, 1212, 10034, 10035, 22, 1827, 4126, 1273, 4939, 2]
// Exports: generateBlueskyMetadataItems, generateEbayMetadataItems, generatePaypalMetadataItems, generateRedditMetadataItems, generateRoleConnectionMetadataItems, generateSteamMetadataItems, generateTikTokMetadataItems, generateTwitterMetadataItems

// Module 10033 (_createForOfIteratorHelperLoose)
import "result";
import { View } from "get ActivityIndicator";
import OperatorTypes from "OperatorTypes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function PaypalVanityTag(style) {
  const tmp = _createForOfIteratorHelperLoose();
  const obj = { style: items };
  items = [tmp.paypalVerifiedTag, style.style];
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t.IhXLyx);
  obj.textStyle = tmp.paypalVerifiedTagText;
  return callback(VanityTag, obj, closure_4.PAYPAL_VERIFIED);
}
function VanityMetric(label) {
  let count;
  let percent;
  let style;
  label = label.label;
  ({ count, style, percent } = label);
  let obj = require(1827) /* shortenAndLocalizeNumber */;
  let str = "";
  const result = obj.shortenAndLocalizeNumber(count);
  if (percent) {
    str = "%";
  }
  const sum = result + str;
  if ("string" === typeof label) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { name: label, value: sum };
    let formatResult = intl2.format(require(1212) /* getSystemLocale */.t.HLoinF, obj);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { value: sum };
    formatResult = intl.format(label, obj);
  }
  const obj1 = { variant: "text-xs/normal", color: "text-muted" };
  const items = [_createForOfIteratorHelperLoose().connectedAccountVanityMetadata, style];
  obj1.style = items;
  obj1.children = formatResult;
  return callback(require(4126) /* Text */.Text, obj1);
}
function VanityItem(style) {
  let imageAlt;
  let imageSrc;
  let label;
  style = style.style;
  ({ label, imageSrc, imageAlt } = style);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: items };
  items = [, , ];
  ({ connectedAccountVanityMetadata: arr[0], connectedAccountVanityMetadataItem: arr[1] } = tmp);
  items[2] = style;
  obj = { source: imageSrc, accessibilityLabel: imageAlt, style: tmp.connectedAccountVanityMetadataItemIcon, disableColor: true };
  const items1 = [callback(require(1273) /* Button */.Icon, obj), ];
  obj = { variant: "text-xs/normal", color: "text-muted", style, children: label };
  items1[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items1;
  return callback2(View, obj);
}
function VanityTag(arg0) {
  let label;
  let style;
  let textStyle;
  ({ label, style, textStyle } = arg0);
  obj = { style: items, children: callback(require(4126) /* Text */.Text, obj) };
  items = [, , ];
  ({ connectedAccountVanityMetadata: arr[0], connectedAccountVanityMetadataTag: arr[1] } = _createForOfIteratorHelperLoose());
  items[2] = style;
  obj = { variant: "text-xs/normal", color: "text-muted", style: textStyle, children: label };
  return callback(View, obj);
}
function VanityDate(arg0) {
  let date;
  let label;
  let locale;
  let style;
  ({ date, label, locale, style } = arg0);
  let obj = { variant: "text-xs/normal", color: "text-muted" };
  const items = [_createForOfIteratorHelperLoose().connectedAccountVanityMetadata, style];
  obj.style = items;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = {};
  const tmp = _createForOfIteratorHelperLoose();
  obj.value = require(4939) /* officialApplicationIds */.getCreatedAtDate(date, locale);
  obj.name = label;
  obj.children = intl.format(require(1212) /* getSystemLocale */.t.HLoinF, obj);
  return callback(require(4126) /* Text */.Text, obj);
}
({ MetadataFields: closure_4, MetadataItemTypes: closure_5 } = OperatorTypes);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { connectedAccountVanityMetadata: { marginTop: 4, paddingRight: 8 }, connectedAccountVanityMetadataItem: { flexDirection: "row", alignItems: "center" }, connectedAccountVanityMetadataItemIcon: { height: 18, width: 18, marginRight: 8 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, paddingHorizontal: 8, paddingVertical: 1, marginRight: 8 };
_createForOfIteratorHelperLoose.connectedAccountVanityMetadataTag = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.paypalVerifiedTag = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.STATUS_POSITIVE_BACKGROUND };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.STATUS_POSITIVE_BACKGROUND };
_createForOfIteratorHelperLoose.paypalVerifiedTagText = { color: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { color: require("_createForOfIteratorHelperLoose").colors.WHITE };
let result = require("OperatorTypes").fileFinishedImporting("modules/connections/native/ConnectionMetadataVanityItems.tsx");

export const generateRedditMetadataItems = function generateRedditMetadataItems(metadata, metadataItem) {
  const items = [];
  let num = -1;
  if (null != metadata[closure_4.REDDIT_TOTAL_KARMA]) {
    num = tmp2;
  }
  const NumberResult = Number(num);
  if (NumberResult > -1) {
    let obj = { style: tmp, count: NumberResult, label: require(1212) /* getSystemLocale */.t.SbCNox };
    items.push(callback(VanityMetric, obj, closure_4.REDDIT_TOTAL_KARMA));
  }
  if ("1" === metadata[closure_4.REDDIT_GOLD]) {
    obj = { style: tmp };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.label = intl.string(require(1212) /* getSystemLocale */.t["06rDHU"]);
    items.push(callback(VanityTag, obj, closure_4.REDDIT_GOLD));
  }
  if ("1" === metadata[closure_4.REDDIT_MOD]) {
    obj = { style: tmp };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.label = intl2.string(require(1212) /* getSystemLocale */.t.oWM95M);
    items.push(callback(VanityTag, obj, closure_4.REDDIT_MOD));
  }
  return items;
};
export const generateTwitterMetadataItems = function generateTwitterMetadataItems(metadata, metadataItem) {
  const items = [];
  let num = -1;
  if (null != metadata[closure_4.TWITTER_STATUSES_COUNT]) {
    num = tmp2;
  }
  const NumberResult = Number(num);
  let num2 = -1;
  if (null != metadata[closure_4.TWITTER_FOLLOWERS_COUNT]) {
    num2 = tmp4;
  }
  const NumberResult1 = Number(num2);
  if (NumberResult > -1) {
    let obj = { style: tmp, count: NumberResult, label: require(1212) /* getSystemLocale */.t.llwqqe };
    items.push(callback(VanityMetric, obj, closure_4.TWITTER_STATUSES_COUNT));
  }
  if (NumberResult1 > -1) {
    obj = { style: tmp, count: NumberResult1, label: require(1212) /* getSystemLocale */.t.LMNOUQ };
    items.push(callback(VanityMetric, obj, closure_4.TWITTER_FOLLOWERS_COUNT));
  }
  return items;
};
export const generateBlueskyMetadataItems = function generateBlueskyMetadataItems(arg0) {
  const items = [];
  let num = -1;
  if (null != arg0[closure_4.BLUESKY_STATUSES_COUNT]) {
    num = tmp2;
  }
  const NumberResult = Number(num);
  let num2 = -1;
  if (null != arg0[closure_4.BLUESKY_FOLLOWERS_COUNT]) {
    num2 = tmp4;
  }
  const NumberResult1 = Number(num2);
  if (NumberResult > -1) {
    let obj = { style: tmp, count: NumberResult, label: require(1212) /* getSystemLocale */.t.thA2ir };
    items.push(callback(VanityMetric, obj, closure_4.BLUESKY_STATUSES_COUNT));
  }
  if (NumberResult1 > -1) {
    obj = { style: tmp, count: NumberResult1, label: require(1212) /* getSystemLocale */.t.RQath2 };
    items.push(callback(VanityMetric, obj, closure_4.BLUESKY_FOLLOWERS_COUNT));
  }
  return items;
};
export const generateSteamMetadataItems = function generateSteamMetadataItems(metadata, metadataItem) {
  const items = [];
  let num = -1;
  if (null != metadata[closure_4.STEAM_GAME_COUNT]) {
    num = tmp2;
  }
  const NumberResult = Number(num);
  let num2 = -1;
  if (null != metadata[closure_4.STEAM_ITEM_COUNT_DOTA2]) {
    num2 = tmp4;
  }
  const NumberResult1 = Number(num2);
  let num3 = -1;
  if (null != metadata[closure_4.STEAM_ITEM_COUNT_TF2]) {
    num3 = tmp6;
  }
  const NumberResult2 = Number(num3);
  if (NumberResult > -1) {
    let obj = { style: tmp, count: NumberResult, label: require(1212) /* getSystemLocale */.t["ppXMu/"] };
    items.push(callback(VanityMetric, obj, closure_4.STEAM_GAME_COUNT));
  }
  if (NumberResult1 > -1) {
    obj = { style: tmp };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { count: NumberResult1 };
    obj.label = intl.format(require(1212) /* getSystemLocale */.t.Y88M5x, obj);
    obj.imageSrc = importDefault(10034);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.imageAlt = intl2.string(require(1212) /* getSystemLocale */.t.HKUEZo);
    items.push(callback(VanityItem, obj, closure_4.STEAM_ITEM_COUNT_DOTA2));
  }
  if (NumberResult2 > -1) {
    const obj1 = { style: tmp };
    const intl3 = require(1212) /* getSystemLocale */.intl;
    const obj2 = { count: NumberResult2 };
    obj1.label = intl3.format(require(1212) /* getSystemLocale */.t.Y88M5x, obj2);
    obj1.imageSrc = importDefault(10035);
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj1.imageAlt = intl4.string(require(1212) /* getSystemLocale */.t.C8p1Sh);
    items.push(callback(VanityItem, obj1, closure_4.STEAM_ITEM_COUNT_TF2));
  }
  return items;
};
export const generatePaypalMetadataItems = function generatePaypalMetadataItems(metadata, metadataItem) {
  const items = [];
  if ("1" === metadata[closure_4.PAYPAL_VERIFIED]) {
    const obj = { style: metadataItem };
    items.push(callback(PaypalVanityTag, obj));
  }
  return items;
};
export const generateEbayMetadataItems = function generateEbayMetadataItems(metadata, metadataItem) {
  const items = [];
  let num = -1;
  if (null != metadata[closure_4.EBAY_POSITIVE_FEEDBACK_PERCENTAGE]) {
    num = tmp2;
  }
  const NumberResult = Number(num);
  if (NumberResult > 0) {
    let obj = { style: tmp, count: NumberResult, label: require(1212) /* getSystemLocale */.t.YmL22d, percent: true };
    items.push(callback(VanityMetric, obj, closure_4.EBAY_POSITIVE_FEEDBACK_PERCENTAGE));
  }
  if ("1" === metadata[closure_4.EBAY_TOP_RATED_SELLER]) {
    obj = { style: tmp };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.label = intl.string(require(1212) /* getSystemLocale */.t.TEEYwa);
    items.push(callback(VanityTag, obj, closure_4.EBAY_TOP_RATED_SELLER));
  }
  return items;
};
export const generateTikTokMetadataItems = function generateTikTokMetadataItems(metadata, metadataItem) {
  const items = [];
  let num = -1;
  if (null != metadata[closure_4.TIKTOK_FOLLOWER_COUNT]) {
    num = tmp2;
  }
  const NumberResult = Number(num);
  let num2 = -1;
  if (null != metadata[closure_4.TIKTOK_FOLLOWING_COUNT]) {
    num2 = tmp4;
  }
  const NumberResult1 = Number(num2);
  let num3 = -1;
  if (null != metadata[closure_4.TIKTOK_LIKES_COUNT]) {
    num3 = tmp6;
  }
  const NumberResult2 = Number(num3);
  if (NumberResult > -1) {
    let obj = { style: tmp, count: NumberResult, label: require(1212) /* getSystemLocale */.t["Mpm/Bc"] };
    items.push(callback(VanityMetric, obj, closure_4.TIKTOK_FOLLOWER_COUNT));
  }
  if (NumberResult1 > -1) {
    obj = { style: tmp, count: NumberResult1, label: require(1212) /* getSystemLocale */.t.ftf12v };
    items.push(callback(VanityMetric, obj, closure_4.TIKTOK_FOLLOWING_COUNT));
  }
  if (NumberResult2 > -1) {
    obj = { style: tmp, count: NumberResult2, label: require(1212) /* getSystemLocale */.t.Qwhe5j };
    items.push(callback(VanityMetric, obj, closure_4.TIKTOK_LIKES_COUNT));
  }
  if ("1" === metadata[closure_4.TIKTOK_VERIFIED]) {
    const obj1 = { style: tmp };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj1.label = intl.string(require(1212) /* getSystemLocale */.t.QHHwRR);
    items.push(callback(VanityTag, obj1, closure_4.TIKTOK_VERIFIED));
  }
  return items;
};
export const generateRoleConnectionMetadataItems = function generateRoleConnectionMetadataItems(applicationRoleConnection) {
  let closure_0 = applicationRoleConnection;
  const items = [];
  const keys = Object.keys(tmp3.metadata);
  if (null != applicationRoleConnection.application_metadata) {
    const _Object = Object;
    if (0 !== Object.keys(tmp3.application_metadata).length) {
      if (0 !== keys.length) {
        const tmp50 = _createForOfIteratorHelperLoose(importDefault(22).sortBy(keys, (arg0) => {
          const application_metadata = applicationRoleConnection.application_metadata;
          let name;
          if (null != application_metadata) {
            if (null != application_metadata[arg0]) {
              name = tmp3.name;
            }
          }
          return name;
        }));
        let iter2 = tmp50();
        if (!iter2.done) {
          while (true) {
            let value = iter2.value;
            let tmp7 = applicationRoleConnection;
            let tmp8 = tmp3.application_metadata[value];
            let tmp9 = tmp8;
            if (null != tmp8) {
              let tmp51 = applicationRoleConnection;
              let tmp52 = value;
              let tmp53 = tmp3.metadata[tmp6];
              let tmp54 = tmp8;
              let type = tmp9.type;
              let tmp55 = constants;
              if (constants.BOOLEAN_EQUAL !== type) {
                let tmp56 = constants;
                if (constants.BOOLEAN_NOT_EQUAL !== type) {
                  let tmp57 = constants;
                  if (constants.DATETIME_GREATER_THAN_EQUAL !== type) {
                    let tmp58 = constants;
                    if (constants.DATETIME_LESS_THAN_EQUAL !== type) {
                      let tmp59 = constants;
                      if (constants.INTEGER_EQUAL !== type) {
                        let tmp10 = constants;
                        if (constants.INTEGER_NOT_EQUAL !== type) {
                          let tmp11 = constants;
                          if (constants.INTEGER_GREATER_THAN_EQUAL !== type) {
                            let tmp12 = constants;
                          }
                        }
                      }
                      let tmp13 = items;
                      let tmp14 = callback;
                      let tmp15 = VanityMetric;
                      let obj = {};
                      let tmp16 = tmp;
                      obj.style = tmp4;
                      let _Number = Number;
                      let tmp17 = tmp53;
                      obj.count = Number(tmp53);
                      let tmp18 = tmp8;
                      obj.label = tmp9.name;
                      let arr = items.push(callback(VanityMetric, obj, tmp9.key));
                    }
                  }
                  let tmp20 = items;
                  let tmp21 = callback;
                  let tmp22 = VanityDate;
                  obj = {};
                  let tmp23 = tmp;
                  obj.style = tmp4;
                  let tmp24 = tmp53;
                  obj.date = tmp53;
                  let tmp25 = tmp2;
                  obj.locale = arg2;
                  let tmp26 = tmp8;
                  obj.label = tmp9.name;
                  arr = items.push(callback(VanityDate, obj, tmp9.key));
                }
              }
              let tmp28 = tmp8;
              let tmp29 = constants;
              let tmp30 = tmp9.type === constants.BOOLEAN_EQUAL;
              let tmp31 = tmp30;
              if (tmp30) {
                let tmp32 = tmp53;
                tmp31 = "1" === tmp53;
              }
              let tmp33 = tmp31;
              if (!tmp31) {
                let tmp34 = tmp8;
                let tmp35 = constants;
                let tmp36 = tmp9.type === constants.BOOLEAN_NOT_EQUAL;
                let tmp37 = tmp36;
                if (tmp36) {
                  let tmp38 = tmp53;
                  tmp37 = "1" !== tmp53;
                }
                tmp33 = tmp37;
              }
              if (tmp33) {
                let tmp39 = items;
                let tmp40 = callback;
                let tmp41 = VanityTag;
                obj = {};
                let tmp42 = tmp;
                obj.style = tmp4;
                let tmp43 = tmp8;
                obj.label = tmp9.name;
                let arr1 = items.push(callback(VanityTag, obj, tmp9.key));
              }
            }
            while (true) {
              let iter = tmp50();
              iter2 = iter;
              if (!iter.done) {
                break;
              } else {
                break label0;
              }
            }
          }
        }
        return items;
      }
    }
  }
  return items;
};
