// Module ID: 17299
// Function ID: 17300
// Name: OrbsArcadeRewardsCollectedModal
// Dependencies: [32, 19, 17, 5171, 1072, 1387, 21, 5170, 575, 14701, 9087, 5781, 8841, 504, 11545, 8834, 9608, 17300, 1113, 11676, 5788, 7860, 9643, 17298, 7658, 5754, 5745, 1092, 7378, 8119, 10905, 17283, 6847, 2]
// Exports: default

// Module 17299 (OrbsArcadeRewardsCollectedModal)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1113 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import LinearGradientDefault from "LinearGradient" /* 5745 */;
import Text_Text from "Text/Text" /* 5781 */;
import components_Button_Button from "components/Button/Button" /* 5788 */;
import openUserSettings from "openUserSettings" /* 7658 */;
import utils_CollectiblesUtils from "utils/CollectiblesUtils" /* 7860 */;
import useShopProductItems from "useShopProductItems" /* 8834 */;
import useCurrentUser from "useCurrentUser" /* 8841 */;
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 9087 */;
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2" /* 9608 */;
import FractionalNitroCoinIllustration from "FractionalNitroCoinIllustration" /* 9643 */;
import AssetRegistryDefault from "AssetRegistry" /* 10905 */;
import useFetchCollectiblesProduct from "useFetchCollectiblesProduct" /* 11545 */;
import useHandleUseNow from "useHandleUseNow" /* 11676 */;
import useAvatarDecorationPreviewSizes from "useAvatarDecorationPreviewSizes" /* 14701 */;
import OrbsArcadeTypes from "OrbsArcadeTypes" /* 17283 */;
import openOrbsArcadeRewardsCollectedModal from "openOrbsArcadeRewardsCollectedModal" /* 17298 */;
import OrbsArcadeRewardPreviewDefault from "OrbsArcadeRewardPreview" /* 17300 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, importDefault;

let c10;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let size;
let unpackModuleId;
function OrbsArcadeRewardPageContent(arg0) {
  let description;
  let items;
  let items1;
  let items2;
  let items3;
  let obj4;
  let obj6;
  let onLayout;
  let preview;
  let ref;
  let title;
  ({ preview, title, description } = arg0);
  const tmp = closure_13();
  const obj = useAvatarDecorationPreviewSizes;
  const avatarDecorationSize = obj.useAvatarDecorationPreviewSizes().avatarDecorationSize;
  const tmp4 = useMeasuredLayoutDefault();
  const height = tmp4.height;
  let num = 0;
  ({ ref, onLayout } = tmp4);
  const tmp5 = closure_14;
  if (undefined !== height) {
    num = height;
  }
  const tmp5Result = tmp5(avatarDecorationSize, num);
  const obj2 = { contentContainerStyle: tmp.pageContent, alwaysBounceVertical: false, children: items1 };
  const obj3 = { style: items, children: authStore(metroRequire, obj4) };
  items = [tmp.previewArea, tmp5Result.previewAreaMinHeight];
  obj4 = { style: tmp5Result.preview, children: preview };
  items1 = [authStore(metroRequire, obj3), ];
  const obj5 = { style: items2, children: unpackModuleId(metroRequire, obj6) };
  items2 = [tmp.messageArea, tmp5Result.messageAreaMinHeight];
  obj6 = { style: tmp.messages, ref, onLayout, children: items3 };
  items3 = [, ];
  const obj7 = { variant: "heading-xl/semibold", color: "text-default", style: tmp.message, children: title };
  items3[0] = authStore(Text_Text.Text, obj7);
  const obj8 = { variant: "body-md/medium", color: "text-default", style: tmp.message, children: description };
  items3[1] = authStore(Text_Text.Text, obj8);
  items1[1] = authStore(metroRequire, obj5);
  return unpackModuleId(hasOwnProperty, obj2);
}
function CollectibleRewardPageContent(reward) {
  let avatarDecorationSize;
  let avatarSize;
  let intl;
  let intl2;
  let tmp7Result;
  let useReducedMotion;
  reward = reward.reward;
  const obj = useCurrentUser;
  const currentUser = obj.useCurrentUser();
  const items = [AccessibilityStore];
  const obj3 = get_initialized;
  const stateFromStores = obj3.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj4 = useAvatarDecorationPreviewSizes;
  const avatarDecorationPreviewSizes = obj4.useAvatarDecorationPreviewSizes();
  ({ avatarDecorationSize, avatarSize } = avatarDecorationPreviewSizes);
  const obj5 = useFetchCollectiblesProduct;
  const product = obj5.useFetchCollectiblesProduct(reward.skuId).product;
  let prop;
  if (null != product) {
    const tmpResult = useShopProductItems;
    prop = tmpResult.getProductItems(product).firstAvatarDecoration;
  }
  let name;
  if (product != null) {
    name = product.name;
  }
  if (name == null) {
    name = reward.name;
  }
  const tmp8 = OrbsArcadeRewardPageContent;
  if (null != prop) {
    const obj2 = { item: prop, size: avatarDecorationSize, avatarSource: currentUser.getAvatarSource(undefined, false, avatarSize), animate: !stateFromStores };
    const tmp12 = AvatarDecorationSampleV2Default;
    tmp7Result = tmp7(tmp12, obj2);
  } else {
    const obj6 = { reward, size: avatarDecorationSize };
    tmp7Result = tmp7(OrbsArcadeRewardPreviewDefault, obj6);
  }
  const obj7 = { preview: tmp7Result, title: intl.format(intl4.t.vZv6MO, { itemName: name }), description: intl2.string(intl4.t.ABD2CN) };
  intl = tmp(1113).intl;
  intl2 = tmp(1113).intl;
  return authStore(tmp8, obj7);
}
function CollectibleRewardUseNowButton(product) {
  let canUseNow;
  let handleEditProfile;
  let handleUseNow;
  let intl;
  let intl2;
  let isApplying;
  let obj3;
  product = product.product;
  const obj = useHandleUseNow;
  const handleUseNow1 = obj.useHandleUseNow({ product });
  ({ isApplying, handleUseNow, canUseNow, handleEditProfile } = handleUseNow1);
  const Button = components_Button_Button.Button;
  const tmp4 = authStore;
  if (canUseNow) {
    const obj2 = { size: "lg", text: intl2.string(intl4.t.MAS7uK), loading: isApplying, disabled: isApplying, onPress: handleUseNow };
    intl2 = tmp(1113).intl;
    obj3 = obj2;
  } else {
    obj3 = { size: "lg", text: intl.string(intl4.t["2p2aYz"]), onPress: handleEditProfile };
    intl = tmp(1113).intl;
  }
  return tmp4(Button, obj3);
}
function CollectibleRewardPrimaryAction(reward) {
  let intl;
  let tmp4;
  reward = reward.reward;
  const obj = useFetchCollectiblesProduct;
  const product = obj.useFetchCollectiblesProduct(reward.skuId).product;
  if (null != product) {
    const obj2 = { product };
    tmp4 = authStore(CollectibleRewardUseNowButton, obj2);
  } else {
    const obj3 = {
      size: "lg",
      text: intl.string(intl4.t.MAS7uK),
      loading: true,
      disabled: true,
      onPress() {

        }
    };
    const Button = tmp(5788).Button;
    intl = tmp(1113).intl;
    tmp4 = authStore(Button, obj3);
  }
  return tmp4;
}
function NitroCreditRewardPageContent(reward) {
  let expiresAt;
  let formatResult;
  let intl2;
  let isFractionalPremiumActive;
  reward = reward.reward;
  const consumed = reward.consumed;
  const obj = useAvatarDecorationPreviewSizes;
  const avatarDecorationSize = obj.useAvatarDecorationPreviewSizes().avatarDecorationSize;
  const obj2 = utils_CollectiblesUtils;
  const fetchFractionalPremiumInfo = obj2.useFetchFractionalPremiumInfo();
  ({ isFractionalPremiumActive, expiresAt } = fetchFractionalPremiumInfo);
  const intl = intl4.intl;
  const formatToPlainString = intl.formatToPlainString;
  let num;
  const Cz1G97 = intl4.t.Cz1G97;
  if (closure_9[reward.skuId] != null) {
    num = tmp4[1];
  }
  if (num == null) {
    num = 3;
  }
  const formatToPlainStringResult = formatToPlainString(Cz1G97, { days: num });
  const obj3 = { preview: authStore(FractionalNitroCoinIllustration.FractionalNitroCoinIllustration, size), title: intl2.string(intl4.t.m2zEFB), description: formatResult };
  size = { skuId: reward.skuId, width: avatarDecorationSize, height: avatarDecorationSize };
  intl2 = tmp(1113).intl;
  const intl3 = tmp(1113).intl;
  const tmp6 = authStore;
  const tmp7 = OrbsArcadeRewardPageContent;
  if (consumed) {
    const obj4 = { duration: formatToPlainStringResult, expirationDate: expiresAt };
    formatResult = intl3.format(tmp(1113).t["93PGOI"], obj4);
  } else if (isFractionalPremiumActive) {
    formatResult = intl3.string(tmp(1113).t.fBmhE9);
  } else {
    const obj5 = { duration: formatToPlainStringResult };
    formatResult = intl3.format(tmp(1113).t["8fyBPf"], obj5);
  }
  return tmp6(tmp7, obj3);
}
function NitroCreditRewardPrimaryAction(consumed) {
  consumed = consumed.consumed;
  const Button = consumed(5788).Button;
  const intl = consumed(1113).intl;
  const string = intl.string;
  const t = consumed(1113).t;
  let obj = {
    size: "lg",
    text: string(consumed ? t.ERKK6v : t["Jr6N+s"]),
    onPress() {
      const obj = openOrbsArcadeRewardsCollectedModal;
      const result = obj.closeOrbsArcadeRewardsCollectedModal();
      const obj2 = openUserSettings;
      const obj3 = { screen: consumed ? UserSettingsSections.PREMIUM : UserSettingsSections.PREMIUM_MANAGE_PLAN };
      obj2.openUserSettings(obj3);
    }
  };
  return closure_10(Button, obj);
}
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
const UserSettingsSections = Constants.UserSettingsSections;
let closure_9 = PremiumConstants.FRACTIONAL_PREMIUM_SKU_INTERVAL_COUNTS;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const locations = [0, 0.72, 1];
let createStyles = createStyles_mod;
let obj = { root: obj2, backdrop: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }, main: { flex: 1 }, header: obj3, pager: { flex: 1 }, pageContent: obj4, previewArea: { flexGrow: 1, flexBasis: 0, alignItems: "center", justifyContent: "flex-end" }, messageArea: { flexGrow: 1, flexBasis: 0 }, messages: obj5, message: { textAlign: "center" }, footer: obj6, pageDots: obj7, pageDot: size, currentPageDot: obj8 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { flexGrow: 1, gap: 44, paddingHorizontal: nativeDefault.space.PX_16 };
obj5 = { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj6 = { gap: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_24 };
obj7 = { flexDirection: "row", justifyContent: "center", gap: nativeDefault.space.PX_4 };
size = { width: 8, height: 8, borderRadius: 4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj8 = { backgroundColor: nativeDefault.colors.ICON_STRONG };
let closure_13 = createStyles(obj);
createStyles = createStyles_mod;
let closure_14 = createStyles.createStyles((width, minHeight) => {
  const obj = { preview: { width, height: width, alignItems: "center", justifyContent: "center" }, previewAreaMinHeight: { minHeight: width }, messageAreaMinHeight: obj2 };
  return obj;
});
createStyles = createStyles_mod;
let closure_15 = createStyles.createStyles((width) => {
  const obj = { page: obj2 };
  return obj;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardsCollectedModal.tsx");

export default function OrbsArcadeRewardsCollectedModal(arg0) {
  let IconButton;
  let closure_1;
  let closure_2;
  let entitlements;
  let intl;
  let intl3;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj14;
  let obj15;
  let obj9;
  let onLayout;
  let ref;
  let rewards;
  let tmp27Result;
  ({ rewards, entitlements } = arg0);
  dependencyMap = undefined;
  let num;
  let page;
  let closure_6;
  let bound;
  let closure_8;
  let tmp = closure_13();
  importDefault = tmp;
  let tmp2 = entitlements;
  let tmp3 = dependencyMap;
  let obj = entitlements(5754);
  const token = obj.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  let obj2 = entitlements(5754);
  const token1 = obj2.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
  let obj3 = entitlements(5754);
  const token2 = obj3.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
  const items = [bound];
  const obj4 = entitlements(504);
  dependencyMap = obj4.useStateFromStores(items, () => bound.useReducedMotion);
  const ref1 = num.useRef(null);
  const tmp9 = useMeasuredLayoutDefault();
  const width = tmp9.width;
  num = 0;
  ({ ref, onLayout } = tmp9);
  if (undefined !== width) {
    num = width;
  }
  page = closure_15(num);
  const tmp10 = ref1(obj5.useState(0), 2);
  closure_6 = tmp10[1];
  const items1 = [num];
  const first = tmp10[0];
  const callback = obj5.useCallback((nativeEvent) => {
    if (num > 0) {
      const _Math = Math;
      closure_6(Math.round(nativeEvent.nativeEvent.contentOffset.x / tmp));
    }
  }, items1);
  bound = Math.max(Math.min(first, rewards.length - 1), 0);
  if (null == rewards[bound]) {
    return null;
  } else {
    let tmp27Result5;
    closure_8 = tmp23;
    const obj6 = { style: tmp.root, children: items3 };
    const obj7 = { style: tmp.backdrop, start: tmp2(1092).VerticalGradient.START, end: tmp2(1092).VerticalGradient.END, locations, colors: items2 };
    items2 = [token, token1, token2];
    const tmp4Result = LinearGradientDefault;
    items3 = [closure_10(tmp4Result, obj7), ];
    const rect = { style: tmp.main, top: true, bottom: true, left: true, right: true, children: items4 };
    const obj8 = { style: tmp.header, children: closure_10(IconButton, obj9) };
    const SafeAreaPaddingView = tmp2(7378).SafeAreaPaddingView;
    obj9 = { variant: "tertiary", icon: AssetRegistryDefault, accessibilityLabel: intl3.string(tmp2(1113).t.cpT0Cq), onPress: tmp2(17298).closeOrbsArcadeRewardsCollectedModal };
    IconButton = tmp2(8119).IconButton;
    intl3 = tmp2(1113).intl;
    items4 = [closure_10(closure_6, obj8), , ];
    const obj10 = { style: tmp.pager, ref, onLayout, children: tmp27Result };
    tmp27Result = null;
    if (num > 0) {
      const obj11 = {
        ref: ref1,
        horizontal: true,
        pagingEnabled: true,
        scrollEnabled: 1 !== rewards.length,
        showsHorizontalScrollIndicator: false,
        onMomentumScrollEnd: callback,
        children: rewards.map((type) => {
              let flag;
              let tmpResult;
              const obj = { style: page.page, children: tmpResult };
              const tmp2 = metroRequire;
              if (type.type === OrbsArcadeTypes.OrbsArcadeRewardType.COLLECTIBLE) {
                const obj2 = { reward: type };
                tmpResult = tmp(CollectibleRewardPageContent, obj2);
              } else {
                const skuId = type.skuId;
                const obj3 = { reward: type, consumed: flag };
                const found = entitlements.find((sku_id) => sku_id.sku_id === skuId);
                flag = undefined;
                const tmp3 = NitroCreditRewardPageContent;
                if (found != null) {
                  flag = found.consumed;
                }
                if (flag == null) {
                  flag = false;
                }
                tmpResult = tmp(tmp3, obj3);
              }
              return authStore(tmp2, obj, type.id);
            })
      };
      tmp27Result = tmp27(page, obj11);
    }
    items4[1] = closure_10(closure_6, obj10);
    let tmp27Result4 = null;
    const obj12 = { style: tmp.footer, children: items5 };
    if (1 !== rewards.length) {
      const obj13 = {
        style: tmp.pageDots,
        accessible: true,
        accessibilityLabel: intl.formatToPlainString(tmp2(1113).t.qD8TVH, obj14),
        children: Array.from(obj15, (arg0, arg1) => {
              const style = [closure_1.pageDot, ];
              let currentPageDot;
              const tmp = authStore;
              const tmp2 = metroRequire;
              if (arg1 === bound) {
                currentPageDot = closure_1.currentPageDot;
              }
              style[1] = currentPageDot;
              return tmp(tmp2, { style }, arg1);
            })
      };
      intl = tmp2(1113).intl;
      const _Array = Array;
      obj14 = { current: bound + 1, total: rewards.length };
      obj15 = { length: rewards.length };
      tmp27Result4 = tmp27(tmp26, obj13);
    }
    items5 = [tmp27Result4, ];
    const ButtonGroup = tmp2(6847).ButtonGroup;
    if (rewards[bound].type === tmp2(17283).OrbsArcadeRewardType.COLLECTIBLE) {
      const obj16 = { reward: rewards[bound] };
      tmp27Result5 = tmp27(CollectibleRewardPrimaryAction, obj16, tmp14.id);
    } else {
      let skuId = tmp14.skuId;
      let found = entitlements.find((sku_id) => sku_id.sku_id === skuId);
      let flag;
      const tmp18 = NitroCreditRewardPrimaryAction;
      if (found != null) {
        flag = found.consumed;
      }
      if (flag == null) {
        flag = false;
      }
      const obj17 = { consumed: flag };
      tmp27Result5 = tmp27(tmp18, obj17, tmp14.id);
    }
    const items6 = [tmp27Result5, ];
    let tmp27Result6 = null;
    if (1 !== rewards.length) {
      const Button = tmp2(5788).Button;
      const intl2 = tmp2(1113).intl;
      const string = intl2.string;
      const t = tmp2(1113).t;
      const obj18 = {
        size: "lg",
        variant: "secondary",
        text: string(bound >= rewards.length - 1 ? t.i4jeWR : t.PDTjLN),
        onPress: function handleNextPress() {
              const tmp = closure_8;
              if (tmp) {
                const obj2 = openOrbsArcadeRewardsCollectedModal;
                const result = obj2.closeOrbsArcadeRewardsCollectedModal();
              } else {
                const current = ref1.current;
                if (current != null) {
                  const obj = { x: (bound + 1) * 1, animated: !closure_2 };
                  current.scrollTo(obj);
                }
                closure_6(bound + 1);
              }
            }
      };
      tmp27Result6 = tmp27(Button, obj18);
    }
    const obj19 = { size: "lg", children: items6 };
    items6[1] = tmp27Result6;
    items5[1] = closure_11(ButtonGroup, obj19);
    items4[2] = closure_11(closure_6, obj12);
    items3[1] = closure_11(SafeAreaPaddingView, rect);
    return closure_11(closure_6, obj6);
  }
};
