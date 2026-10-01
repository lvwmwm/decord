// Module ID: 11070
// Function ID: 11071
// Name: ConnectionMetadataVanityItems
// Dependencies: [19, 17, 5720, 21, 4836, 576, 1115, 11071, 11072, 12, 1882, 4832, 1177, 5719, 2]
// Exports: generateBlueskyMetadataItems, generateEbayMetadataItems, generatePaypalMetadataItems, generateRedditMetadataItems, generateRoleConnectionMetadataItems, generateSteamMetadataItems, generateTikTokMetadataItems, generateTwitterMetadataItems

// Module 11070 (ConnectionMetadataVanityItems)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import NumberUtils from "NumberUtils" /* 1882 */;
import Text_Text from "Text/Text" /* 4832 */;
import ConnectionsUtils from "ConnectionsUtils" /* 5719 */;
import AssetRegistryDefault from "AssetRegistry" /* 11071 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11072 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 5720 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let application_metadata;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
function PaypalVanityTag(style) {
  let intl;
  let items;
  style = style.style;
  const tmp = closure_8();
  const obj = { style: items, label: intl.string(intl5.t.IhXLyx), textStyle: tmp.paypalVerifiedTagText };
  items = [tmp.paypalVerifiedTag, style];
  intl = intl5.intl;
  return metroRequire(VanityTag, obj, constants.PAYPAL_VERIFIED);
}
function VanityMetric(label) {
  let count;
  let formatResult;
  let items;
  let percent;
  let style;
  label = label.label;
  ({ count, style, percent } = label);
  let str = "";
  const tmp = closure_8();
  const obj = NumberUtils;
  const result = obj.shortenAndLocalizeNumber(count);
  if (percent) {
    str = "%";
  }
  const sum = result + str;
  if (typeof label === "string") {
    const intl = tmp2(1115).intl;
    const obj2 = { name: label, value: sum };
    formatResult = intl.format(tmp2(1115).t.HLoinF, obj2);
  } else {
    const intl2 = tmp2(1115).intl;
    const obj3 = { value: sum };
    formatResult = intl2.format(label, obj3);
  }
  const obj4 = { variant: "text-xs/normal", color: "text-muted", style: items, children: formatResult };
  items = [tmp.connectedAccountVanityMetadata, style];
  return metroRequire(Text_Text.Text, obj4);
}
function VanityItem(style) {
  let imageAlt;
  let imageSrc;
  let items;
  let items1;
  let label;
  style = style.style;
  ({ label, imageSrc, imageAlt } = style);
  const tmp = closure_8();
  const obj = { style: items, children: items1 };
  items = [, , ];
  ({ connectedAccountVanityMetadata: arr[0], connectedAccountVanityMetadataItem: arr[1] } = tmp);
  items[2] = style;
  items1 = [, ];
  const obj2 = { source: imageSrc, accessibilityLabel: imageAlt, style: tmp.connectedAccountVanityMetadataItemIcon, disableColor: true };
  items1[0] = metroRequire(native.Icon, obj2);
  items1[1] = metroRequire(Text_Text.Text, { variant: "text-xs/normal", color: "text-muted", style, children: label });
  return metroImportDefault(View, obj);
}
function VanityTag(arg0) {
  let items;
  let label;
  let style;
  let textStyle;
  ({ label, style, textStyle } = arg0);
  const tmp = closure_8();
  const obj = { style: items, children: metroRequire(Text_Text.Text, { variant: "text-xs/normal", color: "text-muted", style: textStyle, children: label }) };
  items = [, , ];
  ({ connectedAccountVanityMetadata: arr[0], connectedAccountVanityMetadataTag: arr[1] } = tmp);
  items[2] = style;
  return metroRequire(View, obj);
}
function VanityDate(arg0) {
  let HLoinF;
  let date;
  let format;
  let items;
  let label;
  let locale;
  let obj2;
  let obj3;
  let style;
  ({ date, label, locale, style } = arg0);
  const obj = { variant: "text-xs/normal", color: "text-muted", style: items, children: format(HLoinF, obj2) };
  items = [closure_8().connectedAccountVanityMetadata, style];
  closure_8();
  const Text = Text_Text.Text;
  const intl = intl5.intl;
  format = intl.format;
  obj2 = { value: obj3.getCreatedAtDate(date, locale), name: label };
  HLoinF = intl5.t.HLoinF;
  obj3 = ConnectionsUtils;
  return metroRequire(Text, obj);
}
const View = react_native.View;
({ MetadataFields: closure_4, MetadataItemTypes: hasOwnProperty } = Constants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { connectedAccountVanityMetadata: { marginTop: 4, paddingRight: 8 }, connectedAccountVanityMetadataItem: { flexDirection: "row", alignItems: "center" }, connectedAccountVanityMetadataItemIcon: { height: 18, width: 18, marginRight: 8 }, connectedAccountVanityMetadataTag: obj2, paypalVerifiedTag: obj3, paypalVerifiedTagText: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, paddingHorizontal: 8, paddingVertical: 1, marginRight: 8 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND };
obj4 = { color: nativeDefault.colors.WHITE };
let closure_8 = createStyles(obj);
let result = size.fileFinishedImporting("modules/connections/native/ConnectionMetadataVanityItems.tsx");

export const generateRedditMetadataItems = function generateRedditMetadataItems(metadata, metadataItem) {
  let intl;
  let intl2;
  let num = metadata[constants.REDDIT_TOTAL_KARMA];
  const _Number = Number;
  if (num == null) {
    num = -1;
  }
  const items = [];
  const _NumberResult = _Number(num);
  const tmp4 = metadata[constants.REDDIT_GOLD];
  const tmp5 = metadata[constants.REDDIT_MOD];
  if (_NumberResult > -1) {
    const push = items.push;
    const obj = { style: metadataItem, count: _NumberResult, label: intl5.t.SbCNox };
    push(metroRequire(VanityMetric, obj, constants.REDDIT_TOTAL_KARMA));
  }
  if ("1" === tmp4) {
    const push2 = items.push;
    const obj2 = { style: metadataItem, label: intl.string(intl5.t["06rDHU"]) };
    intl = intl5.intl;
    push2(metroRequire(VanityTag, obj2, constants.REDDIT_GOLD));
  }
  if ("1" === tmp5) {
    const push3 = items.push;
    const obj3 = { style: metadataItem, label: intl2.string(intl5.t.oWM95M) };
    intl2 = intl5.intl;
    push3(metroRequire(VanityTag, obj3, constants.REDDIT_MOD));
  }
  return items;
};
export const generateTwitterMetadataItems = function generateTwitterMetadataItems(metadata, metadataItem) {
  let num = metadata[constants.TWITTER_STATUSES_COUNT];
  const _Number = Number;
  if (num == null) {
    num = -1;
  }
  const _NumberResult = _Number(num);
  let num2 = metadata[tmp2.TWITTER_FOLLOWERS_COUNT];
  const _Number2 = Number;
  if (num2 == null) {
    num2 = -1;
  }
  const items = [];
  const _Number2Result = _Number2(num2);
  if (_NumberResult > -1) {
    const push = items.push;
    const obj = { style: metadataItem, count: _NumberResult, label: intl5.t.llwqqe };
    push(metroRequire(VanityMetric, obj, constants.TWITTER_STATUSES_COUNT));
  }
  if (_Number2Result > -1) {
    const push2 = items.push;
    const obj2 = { style: metadataItem, count: _Number2Result, label: intl5.t.LMNOUQ };
    push2(metroRequire(VanityMetric, obj2, constants.TWITTER_FOLLOWERS_COUNT));
  }
  return items;
};
export const generateBlueskyMetadataItems = function generateBlueskyMetadataItems(arg0, style) {
  let num = arg0[constants.BLUESKY_STATUSES_COUNT];
  const _Number = Number;
  if (num == null) {
    num = -1;
  }
  const _NumberResult = _Number(num);
  let num2 = arg0[tmp2.BLUESKY_FOLLOWERS_COUNT];
  const _Number2 = Number;
  if (num2 == null) {
    num2 = -1;
  }
  const items = [];
  const _Number2Result = _Number2(num2);
  if (_NumberResult > -1) {
    const push = items.push;
    const obj = { style, count: _NumberResult, label: intl5.t.thA2ir };
    push(metroRequire(VanityMetric, obj, constants.BLUESKY_STATUSES_COUNT));
  }
  if (_Number2Result > -1) {
    const push2 = items.push;
    const obj2 = { style, count: _Number2Result, label: intl5.t.RQath2 };
    push2(metroRequire(VanityMetric, obj2, constants.BLUESKY_FOLLOWERS_COUNT));
  }
  return items;
};
export const generateSteamMetadataItems = function generateSteamMetadataItems(metadata, metadataItem) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let obj3;
  let obj5;
  let num = metadata[constants.STEAM_GAME_COUNT];
  const _Number = Number;
  if (num == null) {
    num = -1;
  }
  const _NumberResult = _Number(num);
  let num2 = metadata[tmp2.STEAM_ITEM_COUNT_DOTA2];
  const _Number2 = Number;
  if (num2 == null) {
    num2 = -1;
  }
  const _Number2Result = _Number2(num2);
  let num3 = metadata[tmp2.STEAM_ITEM_COUNT_TF2];
  const _Number3 = Number;
  if (num3 == null) {
    num3 = -1;
  }
  const items = [];
  const _Number3Result = _Number3(num3);
  if (_NumberResult > -1) {
    const push = items.push;
    const obj = { style: metadataItem, count: _NumberResult, label: intl5.t["ppXMu/"] };
    push(metroRequire(VanityMetric, obj, constants.STEAM_GAME_COUNT));
  }
  if (_Number2Result > -1) {
    const push2 = items.push;
    const obj2 = { style: metadataItem, label: intl.format(intl5.t.Y88M5x, obj3), imageSrc: AssetRegistryDefault, imageAlt: intl2.string(intl5.t.HKUEZo) };
    intl = intl5.intl;
    obj3 = { count: _Number2Result };
    intl2 = intl5.intl;
    push2(metroRequire(VanityItem, obj2, constants.STEAM_ITEM_COUNT_DOTA2));
  }
  if (_Number3Result > -1) {
    const push3 = items.push;
    const obj4 = { style: metadataItem, label: intl3.format(intl5.t.Y88M5x, obj5), imageSrc: AssetRegistryDefault2, imageAlt: intl4.string(intl5.t.C8p1Sh) };
    intl3 = intl5.intl;
    obj5 = { count: _Number3Result };
    intl4 = intl5.intl;
    push3(metroRequire(VanityItem, obj4, constants.STEAM_ITEM_COUNT_TF2));
  }
  return items;
};
export const generatePaypalMetadataItems = function generatePaypalMetadataItems(metadata, metadataItem) {
  const items = [];
  const tmp = metadataItem;
  if ("1" === metadata[constants.PAYPAL_VERIFIED]) {
    const obj = { style: tmp };
    items.push(metroRequire(PaypalVanityTag, obj));
  }
  return items;
};
export const generateEbayMetadataItems = function generateEbayMetadataItems(metadata, metadataItem) {
  let intl;
  let num = metadata[constants.EBAY_POSITIVE_FEEDBACK_PERCENTAGE];
  const _Number = Number;
  if (num == null) {
    num = -1;
  }
  const items = [];
  const _NumberResult = _Number(num);
  const tmp4 = metadata[constants.EBAY_TOP_RATED_SELLER];
  if (_NumberResult > 0) {
    const push = items.push;
    const obj = { style: metadataItem, count: _NumberResult, label: intl5.t.YmL22d, percent: true };
    push(metroRequire(VanityMetric, obj, constants.EBAY_POSITIVE_FEEDBACK_PERCENTAGE));
  }
  if ("1" === tmp4) {
    const push2 = items.push;
    const obj2 = { style: metadataItem, label: intl.string(intl5.t.TEEYwa) };
    intl = intl5.intl;
    push2(metroRequire(VanityTag, obj2, constants.EBAY_TOP_RATED_SELLER));
  }
  return items;
};
export const generateTikTokMetadataItems = function generateTikTokMetadataItems(metadata, metadataItem) {
  let intl;
  let num = metadata[constants.TIKTOK_FOLLOWER_COUNT];
  const _Number = Number;
  const tmp3 = metadata[constants.TIKTOK_VERIFIED];
  if (num == null) {
    num = -1;
  }
  const _NumberResult = _Number(num);
  let num2 = metadata[tmp2.TIKTOK_FOLLOWING_COUNT];
  const _Number2 = Number;
  if (num2 == null) {
    num2 = -1;
  }
  const _Number2Result = _Number2(num2);
  let num3 = metadata[tmp2.TIKTOK_LIKES_COUNT];
  const _Number3 = Number;
  if (num3 == null) {
    num3 = -1;
  }
  const items = [];
  const _Number3Result = _Number3(num3);
  if (_NumberResult > -1) {
    const push = items.push;
    const obj = { style: metadataItem, count: _NumberResult, label: intl5.t["Mpm/Bc"] };
    push(metroRequire(VanityMetric, obj, constants.TIKTOK_FOLLOWER_COUNT));
  }
  if (_Number2Result > -1) {
    const push2 = items.push;
    const obj2 = { style: metadataItem, count: _Number2Result, label: intl5.t.ftf12v };
    push2(metroRequire(VanityMetric, obj2, constants.TIKTOK_FOLLOWING_COUNT));
  }
  if (_Number3Result > -1) {
    const push3 = items.push;
    const obj3 = { style: metadataItem, count: _Number3Result, label: intl5.t.Qwhe5j };
    push3(metroRequire(VanityMetric, obj3, constants.TIKTOK_LIKES_COUNT));
  }
  if ("1" === tmp3) {
    const push4 = items.push;
    const obj4 = { style: metadataItem, label: intl.string(intl5.t.QHHwRR) };
    intl = intl5.intl;
    push4(metroRequire(VanityTag, obj4, constants.TIKTOK_VERIFIED));
  }
  return items;
};
export const generateRoleConnectionMetadataItems = function generateRoleConnectionMetadataItems(applicationRoleConnection, style) {
  let closure_0 = applicationRoleConnection;
  const items = [];
  const keys = Object.keys(applicationRoleConnection.metadata);
  const tmp2 = arg2;
  if (null != applicationRoleConnection.application_metadata) {
    const _Object = Object;
    if (0 !== Object.keys(applicationRoleConnection.application_metadata).length) {
      if (0 !== keys.length) {
        const obj4 = _modDef12;
        const sortByResult = obj4.sortBy(keys, (arg0) => {
          application_metadata = application_metadata.application_metadata;
          let name;
          if (application_metadata != null) {
            if (application_metadata[arg0] != null) {
              name = tmp3.name;
            }
          }
          return name;
        });
        const iter = sortByResult[Symbol.iterator]();
        const tmp3 = sortByResult;
        const nextResult = iter.next();
        if (iter === undefined) {
          return items;
        } else if (null != applicationRoleConnection.application_metadata[nextResult]) {
          try {
            const type = tmp8.type;
            if (hasOwnProperty.BOOLEAN_EQUAL !== type) {
              if (hasOwnProperty.BOOLEAN_NOT_EQUAL !== type) {
                if (hasOwnProperty.DATETIME_GREATER_THAN_EQUAL !== type) {
                  if (hasOwnProperty.DATETIME_LESS_THAN_EQUAL !== type) {
                    const _Number = Number;
                    const push = items.push;
                    const obj = { style, count: Number(applicationRoleConnection.metadata[tmp6]), label: applicationRoleConnection.application_metadata[nextResult].name };
                    push(metroRequire(VanityMetric, obj, applicationRoleConnection.application_metadata[nextResult].key));
                  }
                }
                const obj2 = { style, date: applicationRoleConnection.metadata[tmp6], locale: tmp2, label: applicationRoleConnection.application_metadata[nextResult].name };
                items.push(metroRequire(VanityDate, obj2, applicationRoleConnection.application_metadata[nextResult].key));
              }
            }
            let tmp22 = tmp8.type === tmp10.BOOLEAN_EQUAL && "1" === tmp36;
            if (!tmp22) {
              tmp22 = tmp8.type === tmp10.BOOLEAN_NOT_EQUAL && "1" !== tmp36;
              const tmp25 = tmp8.type === tmp10.BOOLEAN_NOT_EQUAL && "1" !== tmp36;
            }
            if (tmp22) {
              const obj3 = { style, label: applicationRoleConnection.application_metadata[nextResult].name };
              items.push(metroRequire(VanityTag, obj3, applicationRoleConnection.application_metadata[nextResult].key));
            }
          } catch (err) {
          }
        }
      }
    }
  }
  return items;
};
