// Module ID: 14061
// Function ID: 106804
// Name: ActivityCardItem
// Dependencies: []
// Exports: default

// Module 14061 (ActivityCardItem)
let HAPPENING_NOW_BADGE_SIZE;
let HAPPENING_NOW_CARD_HEIGHT;
let HAPPENING_NOW_CARD_MARGIN_RIGHT;
let HAPPENING_NOW_CARD_PADDING;
let HAPPENING_NOW_CARD_PADDING_RIGHT;
let HAPPENING_NOW_CONTENT_HEIGHT;
importAll(dependencyMap[0]);
const tmp3 = arg1(dependencyMap[1]);
const View = tmp3.View;
let closure_4 = importDefault(dependencyMap[2]);
const tmp4 = arg1(dependencyMap[3]);
({ HAPPENING_NOW_BADGE_SIZE, HAPPENING_NOW_CONTENT_HEIGHT } = tmp4);
({ HAPPENING_NOW_CARD_HEIGHT, HAPPENING_NOW_CARD_MARGIN_RIGHT, HAPPENING_NOW_CARD_PADDING, HAPPENING_NOW_CARD_PADDING_RIGHT } = tmp4);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[4]));
const tmp5 = arg1(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]).createAnimatedComponent(arg1(dependencyMap[6]).Icon);
let obj1 = arg1(dependencyMap[7]);
let obj = {};
obj = { borderRadius: importDefault(dependencyMap[8]).radii.lg, borderWidth: tmp3.StyleSheet.hairlineWidth, padding: HAPPENING_NOW_CARD_PADDING, paddingRight: HAPPENING_NOW_CARD_PADDING_RIGHT, marginRight: HAPPENING_NOW_CARD_MARGIN_RIGHT, height: HAPPENING_NOW_CARD_HEIGHT, flexDirection: "row", alignItems: "center" };
obj.card = obj;
obj.cardBadgeWrapper = { "Bool(false)": 3375103, "Bool(false)": -8192, "Bool(false)": 4320799 };
obj1 = { height: HAPPENING_NOW_CONTENT_HEIGHT, minWidth: HAPPENING_NOW_CONTENT_HEIGHT, marginRight: importDefault(dependencyMap[8]).space.PX_12, borderRadius: importDefault(dependencyMap[8]).radii.md, position: "relative" };
obj.cardImage = obj1;
const importDefaultResult = importDefault(dependencyMap[5]);
obj.cardBadge = { width: HAPPENING_NOW_BADGE_SIZE, height: HAPPENING_NOW_BADGE_SIZE, borderBottomLeftRadius: importDefault(dependencyMap[8]).radii.md };
const obj2 = { width: HAPPENING_NOW_BADGE_SIZE, height: HAPPENING_NOW_BADGE_SIZE, borderBottomLeftRadius: importDefault(dependencyMap[8]).radii.md };
obj.cardImageAssetContainer = { height: "100%", backgroundColor: importDefault(dependencyMap[8]).colors.CARD_SECONDARY_BG, borderRadius: importDefault(dependencyMap[8]).radii.sm };
const obj3 = { height: "100%", backgroundColor: importDefault(dependencyMap[8]).colors.CARD_SECONDARY_BG, borderRadius: importDefault(dependencyMap[8]).radii.sm };
obj.cardImageAssetBackground = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: importDefault(dependencyMap[8]).radii.sm };
const obj4 = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: importDefault(dependencyMap[8]).radii.sm };
obj.cardImageAsset = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: importDefault(dependencyMap[8]).radii.sm, borderWidth: 1, borderColor: importDefault(dependencyMap[8]).colors.BORDER_SUBTLE };
obj.shiftedAvatar = { marginLeft: -4 };
const obj6 = { height: arg1(dependencyMap[6]).AVATAR_SIZE_MAP[arg1(undefined, dependencyMap[6]).AvatarSizes.XSMALL_20], minWidth: arg1(dependencyMap[6]).AVATAR_SIZE_MAP[arg1(undefined, dependencyMap[6]).AvatarSizes.XSMALL_20], borderRadius: importDefault(dependencyMap[8]).radii.round };
obj.userCounter = obj6;
let closure_8 = obj1.createStyles(obj);
const obj5 = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: importDefault(dependencyMap[8]).radii.sm, borderWidth: 1, borderColor: importDefault(dependencyMap[8]).colors.BORDER_SUBTLE };
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceActivityCardItem.tsx");

export default function ActivityCardItem(arg0) {
  let animatedStyles;
  let avatars;
  let image;
  let kind;
  let subtitle;
  let title;
  ({ avatars, animatedStyles } = arg0);
  let importDefault;
  let dependencyMap;
  ({ kind, title, subtitle, image } = arg0);
  let obj = arg1(dependencyMap[9]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const tmp2 = callback3();
  const arg1 = tmp2;
  let substr;
  if (null != avatars) {
    substr = avatars.slice(0, 3);
  }
  if (null == substr) {
    substr = [];
  }
  importDefault = substr;
  let num3 = 0;
  if (null != avatars) {
    num3 = avatars.length - substr.length;
  }
  dependencyMap = num3;
  let mapped = null;
  if (null != avatars) {
    mapped = substr.map((source) => {
      const diff = substr.length - 1;
      let obj = { source, size: callback(num3[6]).AvatarSizes.XSMALL_20 };
      const tmp3 = callback(callback(num3[6]).Avatar, obj);
      obj = {};
      let shiftedAvatar;
      if (0 !== arg1) {
        shiftedAvatar = tmp2.shiftedAvatar;
      }
      obj.style = shiftedAvatar;
      if (arg1 !== diff) {
        obj = {};
        const obj1 = { shape: tmp2(num3[10]).CutoutShape.Circle, x: tmp2(2[6]).AVATAR_SIZE_MAP[closure_0(undefined, closure_2[6]).AvatarSizes.XSMALL_20] - 4 - 2, y: -2, size: tmp2(2[6]).AVATAR_SIZE_MAP[closure_0(undefined, closure_2[6]).AvatarSizes.XSMALL_20] + 4 };
        const items = [obj1];
        obj.cutouts = items;
        obj.children = tmp3;
        let tmp8 = callback(substr(num3[10]), obj);
        const tmp12 = substr(num3[10]);
      } else {
        tmp8 = tmp3;
      }
      obj.children = tmp8;
      return callback(closure_3, obj, arg1);
    });
  }
  obj = { style: items1 };
  const items1 = [tmp2.card, , ];
  ({ borderStrong: arr3[1], bgRaised: arr3[2] } = animatedStyles);
  obj = { style: items2 };
  const items2 = [, ];
  ({ cardImageAssetContainer: arr4[0], cardImage: arr4[1] } = tmp2);
  const obj1 = { style: tmp2.cardImageAssetBackground, children: callback(importDefault(dependencyMap[11]), { style: tmp2.cardImageAsset, source: image }) };
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
    const obj7 = { 665604545: "PREMIUM_DISCOUNT_OFFER_ACTION_SHEET_DISMISSED", 1470947939: "ACCESS_COARSE_LOCATION", 1608097877: "convertLandscapeToPortraitScreens", style: animatedStyles.textNormal };
    const items6 = [null, arg1(dependencyMap[13]).humanizeValue(num3, stateFromStores)];
    obj7.children = items6;
    obj6.children = callback2(arg1(dependencyMap[12]).Text, obj7);
    tmp6 = callback(importDefault(dependencyMap[5]).View, obj6);
    const obj16 = arg1(dependencyMap[13]);
  }
  items4[1] = tmp6;
  obj4.children = items4;
  const items7 = [callback2(View, obj4), callback(arg1(dependencyMap[14]).HappeningNowCardHeader, { animated: true, style: animatedStyles.headerPrimary, children: title }), callback(arg1(dependencyMap[14]).HappeningNowCardSubtitle, { animated: true, style: animatedStyles.headerSecondary, children: subtitle })];
  obj3.children = items7;
  items3[1] = callback2(View, obj3);
  const obj10 = { style: tmp2.cardBadgeWrapper };
  const obj11 = { style: items8 };
  const items8 = [tmp2.cardBadge, animatedStyles.bgModSubtle];
  const obj12 = { style: animatedStyles.activityIcon, size: arg1(dependencyMap[6]).Icon.Sizes.REFRESH_SMALL_16, resizeMode: "stretch" };
  if ("activity" === kind) {
    let tmp12 = dependencyMap[15];
  } else {
    tmp12 = dependencyMap[16];
  }
  obj12.source = importDefault(tmp12);
  obj11.children = callback(closure_7, obj12);
  obj10.children = callback(importDefault(dependencyMap[5]).View, obj11);
  items3[2] = callback(View, obj10);
  obj.children = items3;
  return callback2(importDefault(dependencyMap[5]).View, obj);
};
