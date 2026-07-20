// Module ID: 9986
// Function ID: 77249
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: generateBlueskyMetadataItems, generateEbayMetadataItems, generatePaypalMetadataItems, generateRedditMetadataItems, generateRoleConnectionMetadataItems, generateSteamMetadataItems, generateTikTokMetadataItems, generateTwitterMetadataItems

// Module 9986 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  const tmp = callback3();
  const obj = { style: items };
  const items = [tmp.paypalVerifiedTag, style.style];
  const intl = arg1(dependencyMap[6]).intl;
  obj.label = intl.string(arg1(dependencyMap[6]).t.IhXLyx);
  obj.textStyle = tmp.paypalVerifiedTagText;
  return callback(VanityTag, obj, closure_4.PAYPAL_VERIFIED);
}
function VanityMetric(label) {
  let count;
  let percent;
  let style;
  label = label.label;
  ({ count, style, percent } = label);
  let obj = arg1(dependencyMap[10]);
  let str = "";
  const result = obj.shortenAndLocalizeNumber(count);
  if (percent) {
    str = "%";
  }
  const sum = result + str;
  if ("string" === typeof label) {
    const intl2 = arg1(dependencyMap[6]).intl;
    obj = { name: label, value: sum };
    let formatResult = intl2.format(arg1(dependencyMap[6]).t.HLoinF, obj);
  } else {
    const intl = arg1(dependencyMap[6]).intl;
    obj = { value: sum };
    formatResult = intl.format(label, obj);
  }
  const obj1 = { style: items };
  const items = [callback3().connectedAccountVanityMetadata, style];
  obj1.children = formatResult;
  return callback(arg1(dependencyMap[11]).Text, obj1);
}
function VanityItem(style) {
  let imageAlt;
  let imageSrc;
  let label;
  style = style.style;
  ({ label, imageSrc, imageAlt } = style);
  const tmp = callback3();
  let obj = { style: items };
  const items = [, , ];
  ({ connectedAccountVanityMetadata: arr[0], connectedAccountVanityMetadataItem: arr[1] } = tmp);
  items[2] = style;
  obj = { source: imageSrc, accessibilityLabel: imageAlt, style: tmp.connectedAccountVanityMetadataItemIcon, disableColor: true };
  const items1 = [callback(arg1(dependencyMap[12]).Icon, obj), callback(arg1(dependencyMap[11]).Text, { style, children: label })];
  obj.children = items1;
  return callback2(View, obj);
}
function VanityTag(arg0) {
  let label;
  let style;
  let textStyle;
  ({ label, style, textStyle } = arg0);
  const tmp = callback3();
  const items = [, , ];
  ({ connectedAccountVanityMetadata: arr[0], connectedAccountVanityMetadataTag: arr[1] } = tmp);
  items[2] = style;
  return callback(View, { style: items, children: callback(arg1(dependencyMap[11]).Text, { style: textStyle, children: label }) });
}
function VanityDate(arg0) {
  let date;
  let label;
  let locale;
  let style;
  ({ date, label, locale, style } = arg0);
  let obj = { style: items };
  const items = [callback3().connectedAccountVanityMetadata, style];
  const intl = arg1(dependencyMap[6]).intl;
  obj = {};
  const tmp = callback3();
  obj.value = arg1(dependencyMap[13]).getCreatedAtDate(date, locale);
  obj.name = label;
  obj.children = intl.format(arg1(dependencyMap[6]).t.HLoinF, obj);
  return callback(arg1(dependencyMap[11]).Text, obj);
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ MetadataFields: closure_4, MetadataItemTypes: closure_5 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { connectedAccountVanityMetadata: {}, connectedAccountVanityMetadataItem: { -9223372036854775808: true, filter: true }, connectedAccountVanityMetadataItemIcon: {} };
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE, borderRadius: importDefault(dependencyMap[5]).radii.md };
obj.connectedAccountVanityMetadataTag = obj;
const tmp4 = arg1(dependencyMap[3]);
obj.paypalVerifiedTag = { backgroundColor: importDefault(dependencyMap[5]).colors.STATUS_POSITIVE_BACKGROUND };
const obj1 = { backgroundColor: importDefault(dependencyMap[5]).colors.STATUS_POSITIVE_BACKGROUND };
obj.paypalVerifiedTagText = { color: importDefault(dependencyMap[5]).colors.WHITE };
let closure_8 = obj.createStyles(obj);
const obj2 = { color: importDefault(dependencyMap[5]).colors.WHITE };
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/connections/native/ConnectionMetadataVanityItems.tsx");

export const generateRedditMetadataItems = function generateRedditMetadataItems(metadata, metadataItem) {
  const items = [];
  let num = -1;
  if (null != metadata[closure_4.REDDIT_TOTAL_KARMA]) {
    num = tmp2;
  }
  const NumberResult = Number(num);
  if (NumberResult > -1) {
    let obj = { style: tmp, count: NumberResult, label: metadataItem(dependencyMap[6]).t.SbCNox };
    items.push(callback(VanityMetric, obj, closure_4.REDDIT_TOTAL_KARMA));
  }
  if ("1" === metadata[closure_4.REDDIT_GOLD]) {
    obj = { style: tmp };
    const intl = metadataItem(dependencyMap[6]).intl;
    obj.label = intl.string(metadataItem(dependencyMap[6]).t.06rDHU);
    items.push(callback(VanityTag, obj, closure_4.REDDIT_GOLD));
  }
  if ("1" === metadata[closure_4.REDDIT_MOD]) {
    obj = { style: tmp };
    const intl2 = metadataItem(dependencyMap[6]).intl;
    obj.label = intl2.string(metadataItem(dependencyMap[6]).t.oWM95M);
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
    let obj = { style: tmp, count: NumberResult, label: metadataItem(dependencyMap[6]).t.llwqqe };
    items.push(callback(VanityMetric, obj, closure_4.TWITTER_STATUSES_COUNT));
  }
  if (NumberResult1 > -1) {
    obj = { style: tmp, count: NumberResult1, label: metadataItem(dependencyMap[6]).t.LMNOUQ };
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
    let obj = { style: tmp, count: NumberResult, label: arg1(dependencyMap[6]).t.thA2ir };
    items.push(callback(VanityMetric, obj, closure_4.BLUESKY_STATUSES_COUNT));
  }
  if (NumberResult1 > -1) {
    obj = { style: tmp, count: NumberResult1, label: arg1(dependencyMap[6]).t.RQath2 };
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
    let obj = { style: tmp, count: NumberResult, label: metadataItem(dependencyMap[6]).t.ppXMu/ };
    items.push(callback(VanityMetric, obj, closure_4.STEAM_GAME_COUNT));
  }
  if (NumberResult1 > -1) {
    obj = { style: tmp };
    const intl = metadataItem(dependencyMap[6]).intl;
    obj = { count: NumberResult1 };
    obj.label = intl.format(metadataItem(dependencyMap[6]).t.Y88M5x, obj);
    obj.imageSrc = importDefault(dependencyMap[7]);
    const intl2 = metadataItem(dependencyMap[6]).intl;
    obj.imageAlt = intl2.string(metadataItem(dependencyMap[6]).t.HKUEZo);
    items.push(callback(VanityItem, obj, closure_4.STEAM_ITEM_COUNT_DOTA2));
  }
  if (NumberResult2 > -1) {
    const obj1 = { style: tmp };
    const intl3 = metadataItem(dependencyMap[6]).intl;
    const obj2 = { count: NumberResult2 };
    obj1.label = intl3.format(metadataItem(dependencyMap[6]).t.Y88M5x, obj2);
    obj1.imageSrc = importDefault(dependencyMap[8]);
    const intl4 = metadataItem(dependencyMap[6]).intl;
    obj1.imageAlt = intl4.string(metadataItem(dependencyMap[6]).t.C8p1Sh);
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
    let obj = { style: tmp, count: NumberResult, label: metadataItem(dependencyMap[6]).t.YmL22d, percent: true };
    items.push(callback(VanityMetric, obj, closure_4.EBAY_POSITIVE_FEEDBACK_PERCENTAGE));
  }
  if ("1" === metadata[closure_4.EBAY_TOP_RATED_SELLER]) {
    obj = { style: tmp };
    const intl = metadataItem(dependencyMap[6]).intl;
    obj.label = intl.string(metadataItem(dependencyMap[6]).t.TEEYwa);
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
    let obj = { style: tmp, count: NumberResult, label: metadataItem(dependencyMap[6]).t.Mpm/Bc };
    items.push(callback(VanityMetric, obj, closure_4.TIKTOK_FOLLOWER_COUNT));
  }
  if (NumberResult1 > -1) {
    obj = { style: tmp, count: NumberResult1, label: metadataItem(dependencyMap[6]).t.ftf12v };
    items.push(callback(VanityMetric, obj, closure_4.TIKTOK_FOLLOWING_COUNT));
  }
  if (NumberResult2 > -1) {
    obj = { style: tmp, count: NumberResult2, label: metadataItem(dependencyMap[6]).t.Qwhe5j };
    items.push(callback(VanityMetric, obj, closure_4.TIKTOK_LIKES_COUNT));
  }
  if ("1" === metadata[closure_4.TIKTOK_VERIFIED]) {
    const obj1 = { style: tmp };
    const intl = metadataItem(dependencyMap[6]).intl;
    obj1.label = intl.string(metadataItem(dependencyMap[6]).t.QHHwRR);
    items.push(callback(VanityTag, obj1, closure_4.TIKTOK_VERIFIED));
  }
  return items;
};
export const generateRoleConnectionMetadataItems = function generateRoleConnectionMetadataItems(applicationRoleConnection) {
  const arg1 = applicationRoleConnection;
  const items = [];
  const keys = Object.keys(tmp3.metadata);
  if (null != applicationRoleConnection.application_metadata) {
    const _Object = Object;
    if (0 !== Object.keys(tmp3.application_metadata).length) {
      if (0 !== keys.length) {
        const tmp50 = _createForOfIteratorHelperLoose(importDefault(dependencyMap[9]).sortBy(keys, (arg0) => {
          const application_metadata = arg0.application_metadata;
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
