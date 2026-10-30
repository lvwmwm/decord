// Module ID: 16977
// Function ID: 16978
// Name: OrbsArcadeRewardsCollectedModal
// Dependencies: [32, 19, 17, 5010, 1072, 1386, 21, 5009, 575, 14447, 5619, 8741, 504, 11349, 8734, 9484, 16964, 1114, 7725, 11478, 5629, 7754, 9519, 16976, 7557, 5591, 5582, 1093, 7286, 8020, 10749, 16955, 6761, 2]
// Exports: default

// Module 16977 (OrbsArcadeRewardsCollectedModal)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1114 */;
import PremiumConstants from "PremiumConstants" /* 1386 */;
import LinearGradientDefault from "LinearGradient" /* 5582 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import openUserSettings from "openUserSettings" /* 7557 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7725 */;
import utils_CollectiblesUtils from "utils/CollectiblesUtils" /* 7754 */;
import useShopProductItems from "useShopProductItems" /* 8734 */;
import useCurrentUser from "useCurrentUser" /* 8741 */;
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2" /* 9484 */;
import FractionalNitroCoinIllustration from "FractionalNitroCoinIllustration" /* 9519 */;
import AssetRegistryDefault from "AssetRegistry" /* 10749 */;
import useFetchCollectiblesProduct from "useFetchCollectiblesProduct" /* 11349 */;
import useHandleUseNow from "useHandleUseNow" /* 11478 */;
import useAvatarDecorationPreviewSizes from "useAvatarDecorationPreviewSizes" /* 14447 */;
import OrbsArcadeTypes from "OrbsArcadeTypes" /* 16955 */;
import OrbsArcadeRewardPreviewDefault from "OrbsArcadeRewardPreview" /* 16964 */;
import openOrbsArcadeRewardsCollectedModal from "openOrbsArcadeRewardsCollectedModal" /* 16976 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
  let preview;
  let title;
  ({ preview, title, description } = arg0);
  const tmp = closure_13();
  const obj2 = { contentContainerStyle: tmp.pageContent, alwaysBounceVertical: false, children: items };
  items = [, ];
  const obj = useAvatarDecorationPreviewSizes;
  const obj3 = { style: closure_14(obj.useAvatarDecorationPreviewSizes().avatarDecorationSize).preview, children: preview };
  items[0] = authStore(metroRequire, obj3);
  const obj4 = { style: tmp.messages, children: items1 };
  items1 = [, ];
  const obj5 = { variant: "heading-xl/bold", color: "text-default", style: tmp.message, children: title };
  items1[0] = authStore(Text_Text.Text, obj5);
  const obj6 = { variant: "text-md/medium", color: "text-default", style: tmp.message, children: description };
  items1[1] = authStore(Text_Text.Text, obj6);
  items[1] = unpackModuleId(metroRequire, obj4);
  return unpackModuleId(hasOwnProperty, obj2);
}
function CollectibleRewardPageContent(reward) {
  let avatarDecorationSize;
  let avatarSize;
  let intl;
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
  const obj7 = { preview: tmp7Result, title: intl.format(intl4.t.YNaxMp, { itemName: name }), description: null };
  intl = tmp(1114).intl;
  if (null != product) {
    let formatResult;
    const tmpResult2 = CollectiblesUtils;
    if (tmpResult2.isPremiumCollectiblesProduct(product)) {
      const intl3 = tmp(1114).intl;
      const obj8 = { itemName: name };
      formatResult = intl3.format(tmp(1114).t.nW6E3m, obj8);
    }
    obj7.description = formatResult;
    return authStore(tmp8, obj7);
  }
  const intl2 = tmp(1114).intl;
  formatResult = intl2.format(tmp(1114).t["4kp0AB"], { itemName: name });
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
    intl2 = tmp(1114).intl;
    obj3 = obj2;
  } else {
    obj3 = { size: "lg", text: intl.string(intl4.t["2p2aYz"]), onPress: handleEditProfile };
    intl = tmp(1114).intl;
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
    const Button = tmp(5629).Button;
    intl = tmp(1114).intl;
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
  intl2 = tmp(1114).intl;
  const intl3 = tmp(1114).intl;
  const tmp6 = authStore;
  const tmp7 = OrbsArcadeRewardPageContent;
  if (consumed) {
    const obj4 = { duration: formatToPlainStringResult, expirationDate: expiresAt };
    formatResult = intl3.format(tmp(1114).t["93PGOI"], obj4);
  } else if (isFractionalPremiumActive) {
    formatResult = intl3.string(tmp(1114).t.fBmhE9);
  } else {
    const obj5 = { duration: formatToPlainStringResult };
    formatResult = intl3.format(tmp(1114).t["8fyBPf"], obj5);
  }
  return tmp6(tmp7, obj3);
}
function NitroCreditRewardPrimaryAction(consumed) {
  consumed = consumed.consumed;
  const Button = consumed(5629).Button;
  const intl = consumed(1114).intl;
  const string = intl.string;
  const t = consumed(1114).t;
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
let obj = { root: obj2, backdrop: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }, main: { flex: 1 }, header: obj3, pager: { flex: 1 }, pageContent: obj4, messages: obj5, message: { textAlign: "center" }, footer: obj6, pageDots: obj7, pageDot: size, currentPageDot: obj8 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { flexGrow: 1, justifyContent: "center", alignItems: "center", gap: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16 };
obj5 = { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj6 = { gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_24 };
obj7 = { flexDirection: "row", justifyContent: "center", gap: nativeDefault.space.PX_4 };
size = { width: 8, height: 8, borderRadius: 4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj8 = { backgroundColor: nativeDefault.colors.ICON_STRONG };
let closure_13 = createStyles(obj);
createStyles = createStyles_mod;
let closure_14 = createStyles.createStyles((width) => ({ preview: { width, height: width, alignItems: "center", justifyContent: "center" } }));
createStyles = createStyles_mod;
let closure_15 = createStyles.createStyles((width) => {
  const obj = { page: obj2 };
  return obj;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardsCollectedModal.tsx");

export default function OrbsArcadeRewardsCollectedModal(arg0) {
  let IconButton;
  let _undefined;
  let c7;
  let closure_1;
  let closure_2;
  let entitlements;
  let intl;
  let intl3;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj13;
  let obj14;
  let obj8;
  let rewards;
  let tmp12;
  let tmp28Result;
  ({ rewards, entitlements } = arg0);
  dependencyMap = undefined;
  let first;
  c7 = undefined;
  closure_9 = undefined;
  let tmp = closure_13();
  importDefault = tmp;
  let tmp2 = entitlements;
  let tmp3 = dependencyMap;
  let obj = entitlements(5591);
  const token = obj.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  let obj2 = entitlements(5591);
  const token1 = obj2.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
  let obj3 = entitlements(5591);
  const token2 = obj3.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
  const items = [c7];
  const obj4 = entitlements(504);
  dependencyMap = obj4.useStateFromStores(items, () => _undefined.useReducedMotion);
  const ref = first.useRef(null);
  const tmp9 = ref(first.useState(0), 2);
  first = tmp9[0];
  let closure_5 = tmp9[1];
  const page = closure_15(first);
  [tmp12, c7] = ref(first.useState(0), 2);
  const items1 = [first];
  const tmp11 = ref(first.useState(0), 2);
  const callback = first.useCallback((nativeEvent) => {
    closure_5(nativeEvent.nativeEvent.layout.width);
  }, []);
  const callback1 = first.useCallback((nativeEvent) => {
    if (first > 0) {
      const _Math = Math;
      _undefined(Math.round(nativeEvent.nativeEvent.contentOffset.x / tmp));
    }
  }, items1);
  const bound = Math.max(Math.min(tmp12, rewards.length - 1), 0);
  if (null == rewards[bound]) {
    return null;
  } else {
    let tmp28Result4;
    let cpT0Cq;
    closure_9 = tmp24;
    const obj5 = { style: tmp.root, children: items3 };
    const obj6 = { style: tmp.backdrop, start: tmp2(1093).VerticalGradient.START, end: tmp2(1093).VerticalGradient.END, locations, colors: items2 };
    items2 = [token, token1, token2];
    const tmp4Result = LinearGradientDefault;
    items3 = [closure_10(tmp4Result, obj6), ];
    const rect = { style: tmp.main, top: true, bottom: true, left: true, right: true, children: items4 };
    const obj7 = { style: tmp.header, children: closure_10(IconButton, obj8) };
    const SafeAreaPaddingView = tmp2(7286).SafeAreaPaddingView;
    obj8 = { variant: "tertiary", icon: AssetRegistryDefault, accessibilityLabel: intl3.string(tmp2(1114).t.cpT0Cq), onPress: tmp2(16976).closeOrbsArcadeRewardsCollectedModal };
    IconButton = tmp2(8020).IconButton;
    intl3 = tmp2(1114).intl;
    items4 = [closure_10(page, obj7), , ];
    const obj9 = { style: tmp.pager, onLayout: callback, children: tmp28Result };
    tmp28Result = null;
    if (first > 0) {
      const obj10 = {
        ref,
        horizontal: true,
        pagingEnabled: true,
        scrollEnabled: 1 !== rewards.length,
        showsHorizontalScrollIndicator: false,
        onMomentumScrollEnd: callback1,
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
      tmp28Result = tmp28(closure_5, obj10);
    }
    items4[1] = closure_10(page, obj9);
    let tmp28Result3 = null;
    const obj11 = { style: tmp.footer, children: items5 };
    if (1 !== rewards.length) {
      const obj12 = {
        style: tmp.pageDots,
        accessible: true,
        accessibilityLabel: intl.formatToPlainString(tmp2(1114).t.qD8TVH, obj13),
        children: Array.from(obj14, (arg0, arg1) => {
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
      intl = tmp2(1114).intl;
      const _Array = Array;
      obj13 = { current: bound + 1, total: rewards.length };
      obj14 = { length: rewards.length };
      tmp28Result3 = tmp28(tmp27, obj12);
    }
    items5 = [tmp28Result3, ];
    const ButtonGroup = tmp2(6761).ButtonGroup;
    if (rewards[bound].type === tmp2(16955).OrbsArcadeRewardType.COLLECTIBLE) {
      const obj15 = { reward: rewards[bound] };
      tmp28Result4 = tmp28(CollectibleRewardPrimaryAction, obj15, tmp16.id);
    } else {
      let skuId = tmp16.skuId;
      let found = entitlements.find((sku_id) => sku_id.sku_id === skuId);
      let flag;
      const tmp20 = NitroCreditRewardPrimaryAction;
      if (found != null) {
        flag = found.consumed;
      }
      if (flag == null) {
        flag = false;
      }
      const obj16 = { consumed: flag };
      tmp28Result4 = tmp28(tmp20, obj16, tmp16.id);
    }
    const items6 = [tmp28Result4, ];
    const Button = tmp2(5629).Button;
    const intl2 = tmp2(1114).intl;
    const string = intl2.string;
    const t = tmp2(1114).t;
    if (1 === rewards.length) {
      cpT0Cq = t.cpT0Cq;
    } else {
      cpT0Cq = tmp24 ? t.i4jeWR : t.PDTjLN;
    }
    const obj17 = { size: "lg", children: items6 };
    const obj18 = {
      size: "lg",
      variant: "secondary",
      text: string(cpT0Cq),
      onPress: function handleNextPress() {
          const tmp = closure_9;
          if (tmp) {
            const obj2 = openOrbsArcadeRewardsCollectedModal;
            const result = obj2.closeOrbsArcadeRewardsCollectedModal();
          } else {
            const current = ref.current;
            if (current != null) {
              const obj = { x: (bound + 1) * first, animated: !closure_2 };
              current.scrollTo(obj);
            }
            _undefined(bound + 1);
          }
        }
    };
    items6[1] = closure_10(Button, obj18);
    items5[1] = closure_11(ButtonGroup, obj17);
    items4[2] = closure_11(page, obj11);
    items3[1] = closure_11(SafeAreaPaddingView, rect);
    return closure_11(page, obj5);
  }
};
