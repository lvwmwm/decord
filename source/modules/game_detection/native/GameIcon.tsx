// Module ID: 5472
// Function ID: 46749
// Name: GameIcon
// Dependencies: []

// Module 5472 (GameIcon)
class GameIcon {
  constructor(arg0) {
    ({ game, skuId, size } = global);
    if (size === undefined) {
      tmp = Image;
      size = Image.NORMAL;
    }
    tmp2 = closure_8();
    obj = { [closure_6.NORMAL]: tmp2.normal, [closure_6.SMALL]: tmp2.small, [closure_6.SIZE_24]: tmp2.size24, [closure_6.LARGE]: tmp2.large };
    items = [, , ];
    items[0] = tmp2.gameIcon;
    items[1] = obj[size];
    items[2] = global.style;
    if (null == skuId) {
      tmp15 = undefined;
      if (null != game) {
        if (null == undefined) {
          tmp16 = closure_7;
          iconURL = game.getIconURL(closure_7[size]);
          if (null != iconURL) {
            obj = {};
            obj.uri = iconURL;
            tmp15 = obj;
          }
        }
      }
      if (null == tmp15) {
        tmp18 = importDefault;
        tmp19 = dependencyMap;
        num4 = 9;
        tmp15 = importDefault(dependencyMap[9]);
        arr = items.push(tmp2.placeholder);
      }
      tmp21 = jsx;
      tmp22 = View;
      obj1 = {};
      items1 = [, ];
      items1[0] = items;
      items1[1] = tmp2.entityWrapper;
      obj1.style = items1;
      tmp23 = jsx;
      tmp24 = Image;
      obj2 = {};
      obj2.style = obj[size];
      obj2.source = tmp15;
      obj1.children = jsx(Image, obj2);
      return jsx(View, obj1);
    } else {
      tmp3 = PremiumSubscriptionSKUs;
      if (PremiumSubscriptionSKUs.TIER_0 === skuId) {
        tmp12 = importDefault;
        tmp13 = dependencyMap;
        num3 = 6;
        tmp7 = importDefault(dependencyMap[6]);
        tmp14 = tmp7;
      } else {
        tmp4 = PremiumSubscriptionSKUs;
        if (PremiumSubscriptionSKUs.TIER_1 !== skuId) {
          tmp5 = PremiumSubscriptionSKUs;
          if (PremiumSubscriptionSKUs.TIER_2 === skuId) {
            tmp8 = importDefault;
            tmp9 = dependencyMap;
            num = 8;
            tmp7 = importDefault(dependencyMap[8]);
          } else {
            tmp6 = PremiumSubscriptionSKUs;
            tmp7 = null;
          }
        }
      }
      tmp10 = importDefault;
      tmp11 = dependencyMap;
      num2 = 7;
      tmp7 = importDefault(dependencyMap[7]);
    }
    return;
  }
}
importAll(dependencyMap[0]);
({ Image: closure_2, View: closure_3 } = arg1(dependencyMap[1]));
const PremiumSubscriptionSKUs = arg1(dependencyMap[2]).PremiumSubscriptionSKUs;
const jsx = arg1(dependencyMap[3]).jsx;
let obj = { SIZE_24: "size_24", SMALL: "small", NORMAL: "normal", LARGE: "large" };
obj = { [obj.SIZE_24]: 24, [obj.SMALL]: 32, [obj.NORMAL]: 48, [obj.LARGE]: 80 };
let obj2 = arg1(dependencyMap[4]);
obj = { gameIcon: { margin: null, backgroundColor: null } };
const tmp3 = arg1(dependencyMap[1]);
obj.size24 = { width: obj.size_24, height: obj.size_24, borderRadius: importDefault(dependencyMap[5]).radii.sm };
obj2 = { width: obj.small, height: obj.small, borderRadius: importDefault(dependencyMap[5]).radii.sm };
obj.small = obj2;
const obj1 = { width: obj.size_24, height: obj.size_24, borderRadius: importDefault(dependencyMap[5]).radii.sm };
obj.normal = { width: obj.normal, height: obj.normal, borderRadius: importDefault(dependencyMap[5]).radii.lg };
const obj3 = { width: obj.normal, height: obj.normal, borderRadius: importDefault(dependencyMap[5]).radii.lg };
obj.large = { width: obj.large, height: obj.large, borderRadius: importDefault(dependencyMap[5]).radii.sm };
const obj4 = { width: obj.large, height: obj.large, borderRadius: importDefault(dependencyMap[5]).radii.sm };
obj.placeholder = { borderRadius: importDefault(dependencyMap[5]).radii.none, tintColor: importDefault(dependencyMap[5]).colors.ICON_MUTED };
const obj5 = { borderRadius: importDefault(dependencyMap[5]).radii.none, tintColor: importDefault(dependencyMap[5]).colors.ICON_MUTED };
obj.entityWrapper = { borderColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
let closure_8 = obj2.createStyles(obj);
GameIcon.Sizes = obj;
const obj6 = { borderColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/game_detection/native/GameIcon.tsx");

export default GameIcon;
export const GameIconSizes = obj;
export const GameIconImageSize = obj;
