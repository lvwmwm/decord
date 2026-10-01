// Module ID: 14840
// Function ID: 14841
// Name: SettingsAppearanceActivityCardItem
// Dependencies: [19, 17, 2112, 14841, 21, 4566, 1177, 4836, 576, 563, 8276, 5899, 4832, 1882, 14842, 14843, 14844, 2]
// Exports: default

// Module 14840 (SettingsAppearanceActivityCardItem)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import ClipView from "ClipView" /* 8276 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import HappeningNowConstants from "HappeningNowConstants" /* 14841 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const ClipViewDefault = ClipView;
let _require, shiftedAvatar;

let HAPPENING_NOW_BADGE_SIZE;
let HAPPENING_NOW_CARD_HEIGHT;
let HAPPENING_NOW_CARD_MARGIN_RIGHT;
let HAPPENING_NOW_CARD_PADDING;
let HAPPENING_NOW_CARD_PADDING_RIGHT;
let HAPPENING_NOW_CONTENT_HEIGHT;
let StyleSheet;
let c3;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let size1;
let size2;
({ View: c3, StyleSheet } = react_native);
({ HAPPENING_NOW_BADGE_SIZE, HAPPENING_NOW_CONTENT_HEIGHT, HAPPENING_NOW_CARD_HEIGHT, HAPPENING_NOW_CARD_MARGIN_RIGHT, HAPPENING_NOW_CARD_PADDING, HAPPENING_NOW_CARD_PADDING_RIGHT } = HappeningNowConstants);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = ReanimatedRexport.createAnimatedComponent(native.Icon);
let createStyles = createStyles_mod;
let obj = { card: obj2, cardBadgeWrapper: { position: "absolute", top: 0, right: 0 }, cardImage: obj3, cardBadge: size, cardImageAssetContainer: obj4, cardImageAssetBackground: size1, cardImageAsset: size2, shiftedAvatar: { marginLeft: -4 }, userCounter: obj5 };
obj2 = { borderRadius: nativeDefault.radii.lg, borderWidth: StyleSheet.hairlineWidth, padding: HAPPENING_NOW_CARD_PADDING, paddingRight: HAPPENING_NOW_CARD_PADDING_RIGHT, marginRight: HAPPENING_NOW_CARD_MARGIN_RIGHT, height: HAPPENING_NOW_CARD_HEIGHT, flexDirection: "row", alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { height: HAPPENING_NOW_CONTENT_HEIGHT, minWidth: HAPPENING_NOW_CONTENT_HEIGHT, marginRight: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.md, position: "relative" };
size = { display: "flex", alignItems: "center", justifyContent: "center", width: HAPPENING_NOW_BADGE_SIZE, height: HAPPENING_NOW_BADGE_SIZE, borderTopRightRadius: 15, borderBottomLeftRadius: nativeDefault.radii.md };
obj4 = { height: "100%", backgroundColor: nativeDefault.colors.CARD_SECONDARY_BG, borderRadius: nativeDefault.radii.sm };
size1 = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: nativeDefault.radii.sm };
size2 = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
obj5 = { flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: -4, height: native.AVATAR_SIZE_MAP[native.AvatarSizes.XSMALL_20], minWidth: native.AVATAR_SIZE_MAP[native.AvatarSizes.XSMALL_20], borderRadius: nativeDefault.radii.round, paddingHorizontal: 4, paddingTop: 1 };
let closure_8 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceActivityCardItem.tsx");

export default function ActivityCardItem(arg0) {
  let Text;
  let View2;
  let animatedStyles;
  let avatars;
  let image;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let kind;
  let locale;
  let obj13;
  let obj14;
  let obj4;
  let obj5;
  let obj8;
  let subtitle;
  let title;
  ({ avatars, animatedStyles } = arg0);
  _require = undefined;
  let num3;
  const tmp2 = num3;
  ({ kind, title, subtitle, image } = arg0);
  let obj = require("useStateFromStores");
  let items = [LocaleStore];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const tmp4 = closure_8();
  _require = tmp4;
  let substr;
  if (avatars != null) {
    substr = avatars.slice(0, 3);
  }
  if (substr == null) {
    substr = [];
  }
  num3 = 0;
  if (null != avatars) {
    num3 = avatars.length - substr.length;
  }
  let mapped = null;
  if (null != avatars) {
    mapped = substr.map((source, index) => {
      let items;
      let tmp2Result;
      const diff = substr.length - 1;
      const obj = { source, size: native.AvatarSizes.XSMALL_20 };
      const Avatar = native.Avatar;
      const tmp5 = hasOwnProperty(Avatar, obj);
      shiftedAvatar = undefined;
      const tmp6 = _false;
      if (0 !== index) {
        shiftedAvatar = shiftedAvatar.shiftedAvatar;
      }
      const obj2 = { style: shiftedAvatar, children: tmp2Result };
      if (index !== diff) {
        const obj3 = { cutouts: items, children: tmp5 };
        const point = { shape: ClipView.CutoutShape.Circle, x: native.AVATAR_SIZE_MAP[native.AvatarSizes.XSMALL_20] - 4 - 2, y: -2, size: native.AVATAR_SIZE_MAP[native.AvatarSizes.XSMALL_20] + 4 };
        items = [point];
        const tmp12 = ClipViewDefault;
        tmp2Result = tmp2(tmp12, obj3);
      } else {
        tmp2Result = tmp5;
      }
      return hasOwnProperty(tmp6, obj2, index);
    });
  }
  let tmp6 = closure_6;
  let obj2 = { style: items1, children: items3 };
  items1 = [tmp4.card, , ];
  ({ borderStrong: arr3[1], bgRaised: arr3[2] } = animatedStyles);
  let obj3 = { style: items2, children: closure_5(closure_3, obj4) };
  items2 = [, ];
  ({ cardImageAssetContainer: arr4[0], cardImage: arr4[1] } = tmp4);
  obj4 = { style: tmp4.cardImageAssetBackground, children: closure_5(substr(tmp2[11]), obj5) };
  const View = substr(tmp2[5]).View;
  obj5 = { style: tmp4.cardImageAsset, source: image };
  items3 = [closure_5(closure_3, obj3), , ];
  const obj6 = { style: { flexDirection: "row" }, children: items4 };
  items4 = [closure_5(closure_3, { style: { flexDirection: "row" }, children: mapped }), ];
  let tmp8Result = null;
  if (num3 > 0) {
    const obj7 = { style: items5, children: tmp6(Text, obj8) };
    items5 = [tmp4.userCounter, animatedStyles.bgModStrong];
    const View3 = tmp7(tmp2[5]).View;
    obj8 = { animated: true, variant: "text-xxs/semibold", allowFontScaling: false, style: animatedStyles.textNormal, children: items6 };
    Text = tmp(tmp2[12]).Text;
    items6 = ["+"];
    const tmpResult = require("NumberUtils");
    items6[1] = tmpResult.humanizeValue(num3, stateFromStores);
    tmp8Result = tmp8(View3, obj7);
  }
  const obj9 = { children: items7 };
  items4[1] = tmp8Result;
  items7 = [tmp6(tmp9, obj6), , ];
  const obj10 = { animated: true, style: animatedStyles.headerPrimary, children: title };
  items7[1] = closure_5(require("HappeningNowCard").HappeningNowCardHeader, obj10);
  const obj11 = { animated: true, style: animatedStyles.headerSecondary, children: subtitle };
  items7[2] = closure_5(require("HappeningNowCard").HappeningNowCardSubtitle, obj11);
  items3[1] = tmp6(closure_3, obj9);
  const obj12 = { style: tmp4.cardBadgeWrapper, children: closure_5(View2, obj13) };
  obj13 = { style: items8, children: closure_5(closure_7, obj14) };
  items8 = [tmp4.cardBadge, animatedStyles.bgModSubtle];
  obj14 = { style: animatedStyles.activityIcon, size: require("native").Icon.Sizes.REFRESH_SMALL_16, resizeMode: "stretch", source: substr("activity" === kind ? tmp2[15] : tmp2[16]) };
  View2 = tmp7(tmp2[5]).View;
  items3[2] = closure_5(closure_3, obj12);
  return tmp6(View, obj2);
};
