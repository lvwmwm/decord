// Module ID: 14182
// Function ID: 109000
// Name: HAPPENING_NOW_BADGE_SIZE
// Dependencies: [31, 27, 1921, 14183, 33, 3991, 1273, 4130, 689, 624, 7873, 5085, 4126, 1827, 14184, 14185, 14186, 2]
// Exports: default

// Module 14182 (HAPPENING_NOW_BADGE_SIZE)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import HAPPENING_NOW_PANELS_CONTAINER_PADDING from "HAPPENING_NOW_PANELS_CONTAINER_PADDING";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "module_3991";

let HAPPENING_NOW_BADGE_SIZE;
let HAPPENING_NOW_CARD_HEIGHT;
let HAPPENING_NOW_CARD_MARGIN_RIGHT;
let HAPPENING_NOW_CARD_PADDING;
let HAPPENING_NOW_CARD_PADDING_RIGHT;
let HAPPENING_NOW_CONTENT_HEIGHT;
let closure_5;
let closure_6;
let require = arg1;
const View = get_ActivityIndicator.View;
({ HAPPENING_NOW_BADGE_SIZE, HAPPENING_NOW_CONTENT_HEIGHT } = HAPPENING_NOW_PANELS_CONTAINER_PADDING);
({ HAPPENING_NOW_CARD_HEIGHT, HAPPENING_NOW_CARD_MARGIN_RIGHT, HAPPENING_NOW_CARD_PADDING, HAPPENING_NOW_CARD_PADDING_RIGHT } = HAPPENING_NOW_PANELS_CONTAINER_PADDING);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = require("module_3991").createAnimatedComponent(require("Button").Icon);
let obj = {};
obj = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, borderWidth: get_ActivityIndicator.StyleSheet.hairlineWidth, padding: HAPPENING_NOW_CARD_PADDING, paddingRight: HAPPENING_NOW_CARD_PADDING_RIGHT, marginRight: HAPPENING_NOW_CARD_MARGIN_RIGHT, height: HAPPENING_NOW_CARD_HEIGHT, flexDirection: "row", alignItems: "center" };
obj.card = obj;
obj.cardBadgeWrapper = { position: "absolute", top: 0, right: 0 };
_createForOfIteratorHelperLoose = { height: HAPPENING_NOW_CONTENT_HEIGHT, minWidth: HAPPENING_NOW_CONTENT_HEIGHT, marginRight: require("_createForOfIteratorHelperLoose").space.PX_12, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, position: "relative" };
obj.cardImage = _createForOfIteratorHelperLoose;
const obj2 = { display: "flex", alignItems: "center", justifyContent: "center", width: HAPPENING_NOW_BADGE_SIZE, height: HAPPENING_NOW_BADGE_SIZE, borderTopRightRadius: 15, borderBottomLeftRadius: require("_createForOfIteratorHelperLoose").radii.md };
obj.cardBadge = obj2;
obj.cardImageAssetContainer = { height: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.CARD_SECONDARY_BG, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
let obj3 = { height: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.CARD_SECONDARY_BG, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.cardImageAssetBackground = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
let obj4 = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.cardImageAsset = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
obj.shiftedAvatar = { marginLeft: -4 };
let obj6 = { flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: -4, height: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.XSMALL_20], minWidth: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.XSMALL_20], borderRadius: require("_createForOfIteratorHelperLoose").radii.round, paddingHorizontal: 4, paddingTop: 1 };
obj.userCounter = obj6;
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj5 = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceActivityCardItem.tsx");

export default function ActivityCardItem(arg0) {
  let animatedStyles;
  let avatars;
  let image;
  let kind;
  let subtitle;
  let title;
  ({ avatars, animatedStyles } = arg0);
  let substr;
  let num3;
  ({ kind, title, subtitle, image } = arg0);
  let obj = require(num3[9]);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.locale);
  const tmp2 = callback3();
  require = tmp2;
  substr = undefined;
  if (null != avatars) {
    substr = avatars.slice(0, 3);
  }
  if (null == substr) {
    substr = [];
  }
  num3 = 0;
  if (null != avatars) {
    num3 = avatars.length - substr.length;
  }
  let mapped = null;
  if (null != avatars) {
    mapped = substr.map((source) => {
      const diff = substr.length - 1;
      let obj = { source, size: outer1_5(num3[6]).AvatarSizes.XSMALL_20 };
      const tmp3 = outer1_5(outer1_5(num3[6]).Avatar, obj);
      obj = {};
      let shiftedAvatar;
      if (0 !== arg1) {
        shiftedAvatar = tmp2.shiftedAvatar;
      }
      obj.style = shiftedAvatar;
      if (arg1 !== diff) {
        obj = {};
        const obj1 = { shape: tmp2(num3[10]).CutoutShape.Circle, x: tmp2(2[6]).AVATAR_SIZE_MAP[tmp2(undefined, 2[6]).AvatarSizes.XSMALL_20] - 4 - 2, y: -2, size: tmp2(2[6]).AVATAR_SIZE_MAP[tmp2(undefined, 2[6]).AvatarSizes.XSMALL_20] + 4 };
        const items = [obj1];
        obj.cutouts = items;
        obj.children = tmp3;
        let tmp8 = outer1_5(substr(num3[10]), obj);
        const tmp12 = substr(num3[10]);
      } else {
        tmp8 = tmp3;
      }
      obj.children = tmp8;
      return outer1_5(outer1_3, obj, arg1);
    });
  }
  obj = { style: items1 };
  items1 = [tmp2.card, , ];
  ({ borderStrong: arr3[1], bgRaised: arr3[2] } = animatedStyles);
  obj = { style: items2 };
  items2 = [, ];
  ({ cardImageAssetContainer: arr4[0], cardImage: arr4[1] } = tmp2);
  let obj1 = { style: tmp2.cardImageAssetBackground, children: callback(substr(num3[11]), { style: tmp2.cardImageAsset, source: image }) };
  obj.children = callback(View, obj1);
  const items3 = [callback(View, obj), , ];
  const obj3 = {};
  const obj4 = { style: { flexDirection: "row" } };
  const obj5 = { style: { flexDirection: "row" }, children: mapped };
  const items4 = [callback(View, obj5), ];
  let tmp6 = null;
  if (num3 > 0) {
    const obj6 = {};
    const items5 = [tmp2.userCounter, animatedStyles.bgModStrong];
    obj6.style = items5;
    const obj7 = { animated: true, variant: "text-xxs/semibold", allowFontScaling: false, style: animatedStyles.textNormal };
    const items6 = ["+", require(num3[13]).humanizeValue(num3, stateFromStores)];
    obj7.children = items6;
    obj6.children = callback2(require(num3[12]).Text, obj7);
    tmp6 = callback(substr(num3[5]).View, obj6);
    const obj16 = require(num3[13]);
  }
  items4[1] = tmp6;
  obj4.children = items4;
  const items7 = [callback2(View, obj4), callback(require(num3[14]).HappeningNowCardHeader, { animated: true, style: animatedStyles.headerPrimary, children: title }), callback(require(num3[14]).HappeningNowCardSubtitle, { animated: true, style: animatedStyles.headerSecondary, children: subtitle })];
  obj3.children = items7;
  items3[1] = callback2(View, obj3);
  const obj10 = { style: tmp2.cardBadgeWrapper };
  const obj11 = { style: items8 };
  items8 = [tmp2.cardBadge, animatedStyles.bgModSubtle];
  const obj12 = { style: animatedStyles.activityIcon, size: require(num3[6]).Icon.Sizes.REFRESH_SMALL_16, resizeMode: "stretch" };
  if ("activity" === kind) {
    let tmp12 = num3[15];
  } else {
    tmp12 = num3[16];
  }
  obj12.source = substr(tmp12);
  obj11.children = callback(closure_7, obj12);
  obj10.children = callback(substr(num3[5]).View, obj11);
  items3[2] = callback(View, obj10);
  obj.children = items3;
  return callback2(substr(num3[5]).View, obj);
};
