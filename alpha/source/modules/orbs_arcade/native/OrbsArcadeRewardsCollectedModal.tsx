// Module ID: 16685
// Function ID: 16686
// Name: OrbsArcadeRewardsCollectedModal
// Dependencies: [32, 19, 17, 5005, 1084, 1391, 21, 5004, 587, 558, 576, 14181, 5270, 8704, 504, 11090, 8697, 9434, 16672, 1125, 7697, 11221, 5280, 7726, 9469, 16684, 7526, 5288, 5294, 1104, 7991, 10693, 16663, 6731, 7257, 2]

// Module 16685 (OrbsArcadeRewardsCollectedModal)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1084 */;
import intl4 from "intl" /* 1125 */;
import PremiumConstants from "PremiumConstants" /* 1391 */;
import Text_Text from "Text/Text" /* 5270 */;
import components_Button_Button from "components/Button/Button" /* 5280 */;
import LinearGradientDefault from "LinearGradient" /* 5294 */;
import openUserSettings from "openUserSettings" /* 7526 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7697 */;
import utils_CollectiblesUtils from "utils/CollectiblesUtils" /* 7726 */;
import useShopProductItems from "useShopProductItems" /* 8697 */;
import useCurrentUser from "useCurrentUser" /* 8704 */;
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2" /* 9434 */;
import FractionalNitroCoinIllustration from "FractionalNitroCoinIllustration" /* 9469 */;
import AssetRegistryDefault from "AssetRegistry" /* 10693 */;
import useFetchCollectiblesProduct from "useFetchCollectiblesProduct" /* 11090 */;
import useHandleUseNow from "useHandleUseNow" /* 11221 */;
import useAvatarDecorationPreviewSizes from "useAvatarDecorationPreviewSizes" /* 14181 */;
import OrbsArcadeTypes from "OrbsArcadeTypes" /* 16663 */;
import OrbsArcadeRewardPreviewDefault from "OrbsArcadeRewardPreview" /* 16672 */;
import openOrbsArcadeRewardsCollectedModal from "openOrbsArcadeRewardsCollectedModal" /* 16684 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore_mod from "AccessibilityStore" /* 5005 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5004 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
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
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
let AccessibilityStore = AccessibilityStore_mod;
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
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeRewardPageContent(arg0) {
  let description;
  let items;
  let items1;
  let preview;
  let title;
  const obj = react2;
  const cResult = obj.c(17);
  ({ preview, title, description } = arg0);
  const tmp4 = closure_13();
  const obj2 = useAvatarDecorationPreviewSizes;
  const tmp5 = closure_14(obj2.useAvatarDecorationPreviewSizes().avatarDecorationSize);
  if (cResult[0] === preview) {
    let tmp6;
    if (cResult[1] === tmp5.preview) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === tmp4.message) {
      let tmp8;
      if (cResult[4] === title) {
        tmp8 = cResult[5];
      }
      if (cResult[6] === description) {
        let tmp11;
        if (cResult[7] === tmp4.message) {
          tmp11 = cResult[8];
        }
        if (cResult[9] === tmp4.messages) {
          if (cResult[10] === tmp8) {
            let tmp14;
            if (cResult[11] === tmp11) {
              tmp14 = cResult[12];
            }
            if (cResult[13] === tmp4.pageContent) {
              if (cResult[14] === tmp6) {
                let tmp18;
                if (cResult[15] === tmp14) {
                  tmp18 = cResult[16];
                }
                return tmp18;
              }
            }
            const obj3 = { contentContainerStyle: tmp4.pageContent, alwaysBounceVertical: false, children: items };
            items = [tmp6, tmp14];
            const tmp21 = unpackModuleId(hasOwnProperty, obj3);
            cResult[13] = tmp4.pageContent;
            cResult[14] = tmp6;
            cResult[15] = tmp14;
            cResult[16] = tmp21;
            tmp18 = tmp21;
          }
        }
        const obj4 = { style: tmp4.messages, children: items1 };
        items1 = [tmp8, tmp11];
        const tmp17 = unpackModuleId(metroRequire, obj4);
        cResult[9] = tmp4.messages;
        cResult[10] = tmp8;
        cResult[11] = tmp11;
        cResult[12] = tmp17;
        tmp14 = tmp17;
      }
      const obj5 = { variant: "text-md/medium", color: "text-default", style: tmp4.message, children: description };
      const tmp13 = authStore(Text_Text.Text, obj5);
      cResult[6] = description;
      cResult[7] = tmp4.message;
      cResult[8] = tmp13;
      tmp11 = tmp13;
    }
    const obj6 = { variant: "heading-xl/bold", color: "text-default", style: tmp4.message, children: title };
    const tmp10 = authStore(Text_Text.Text, obj6);
    cResult[3] = tmp4.message;
    cResult[4] = title;
    cResult[5] = tmp10;
    tmp8 = tmp10;
  }
  const obj7 = { style: tmp5.preview, children: preview };
  const tmp7 = authStore(metroRequire, obj7);
  cResult[0] = preview;
  cResult[1] = tmp5.preview;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : (function OrbsArcadeRewardPageContent(arg0) {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function CollectibleRewardPageContent(reward) {
  let avatarDecorationSize;
  let avatarSize;
  let tmp16;
  let tmp4;
  let tmp5;
  let tmp9;
  let useReducedMotion;
  const obj = react2;
  const cResult = obj.c(20);
  reward = reward.reward;
  const obj2 = useCurrentUser;
  const currentUser = obj2.useCurrentUser();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function o() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const tmpResult5 = useAvatarDecorationPreviewSizes;
  const avatarDecorationPreviewSizes = tmpResult5.useAvatarDecorationPreviewSizes();
  ({ avatarSize, avatarDecorationSize } = avatarDecorationPreviewSizes);
  const tmpResult6 = useFetchCollectiblesProduct;
  const product = tmpResult6.useFetchCollectiblesProduct(reward.skuId).product;
  if (cResult[2] !== product) {
    let prop;
    if (null != product) {
      const tmpResult7 = useShopProductItems;
      prop = tmpResult7.getProductItems(product).firstAvatarDecoration;
    }
    cResult[2] = product;
    cResult[3] = prop;
    tmp9 = prop;
  } else {
    tmp9 = cResult[3];
  }
  let name;
  if (product != null) {
    name = product.name;
  }
  if (name == null) {
    name = reward.name;
  }
  if (cResult[4] === tmp9) {
    if (cResult[5] === avatarDecorationSize) {
      if (cResult[6] === avatarSize) {
        if (cResult[7] === currentUser) {
          if (cResult[8] === reward) {
            let tmp13;
            let tmp20;
            let tmp22;
            if (cResult[9] === stateFromStores) {
              tmp13 = cResult[10];
            }
            if (cResult[11] !== name) {
              const intl = tmp(1125).intl;
              const obj3 = { itemName: name };
              const formatResult = intl.format(intl4.t.YNaxMp, obj3);
              cResult[11] = name;
              cResult[12] = formatResult;
              tmp20 = formatResult;
            } else {
              tmp20 = cResult[12];
            }
            if (cResult[13] === name) {
              if (cResult[14] === product) {
                tmp22 = cResult[15];
              }
              if (cResult[16] === tmp13) {
                if (cResult[17] === tmp20) {
                  let tmp24;
                  if (cResult[18] === tmp22) {
                    tmp24 = cResult[19];
                  }
                  return tmp24;
                }
              }
              const obj4 = { preview: tmp13, title: tmp20, description: tmp22 };
              const tmp27 = authStore(closure_16, obj4);
              cResult[16] = tmp13;
              cResult[17] = tmp20;
              cResult[18] = tmp22;
              cResult[19] = tmp27;
              tmp24 = tmp27;
            }
            if (null != product) {
              let formatResult1;
              const tmpResult8 = CollectiblesUtils;
              if (tmpResult8.isPremiumCollectiblesProduct(product)) {
                const intl3 = tmp(1125).intl;
                const obj5 = { itemName: name };
                formatResult1 = intl3.format(tmp(1125).t.nW6E3m, obj5);
              }
              cResult[13] = name;
              cResult[14] = product;
              cResult[15] = formatResult1;
              tmp22 = formatResult1;
            }
            const intl2 = tmp(1125).intl;
            const obj6 = { itemName: name };
            formatResult1 = intl2.format(tmp(1125).t["4kp0AB"], obj6);
          }
        }
      }
    }
  }
  if (null != tmp9) {
    const obj7 = { item: tmp9, size: avatarDecorationSize, avatarSource: currentUser.getAvatarSource(undefined, false, avatarSize), animate: !stateFromStores };
    const tmp19 = AvatarDecorationSampleV2Default;
    tmp16 = authStore(tmp19, obj7);
  } else {
    const obj8 = { reward, size: avatarDecorationSize };
    tmp16 = authStore(OrbsArcadeRewardPreviewDefault, obj8);
  }
  cResult[4] = tmp9;
  cResult[5] = avatarDecorationSize;
  cResult[6] = avatarSize;
  cResult[7] = currentUser;
  cResult[8] = reward;
  cResult[9] = stateFromStores;
  cResult[10] = tmp16;
  tmp13 = tmp16;
}) : (function CollectibleRewardPageContent(reward) {
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
  const tmp8 = closure_16;
  if (null != prop) {
    const obj2 = { item: prop, size: avatarDecorationSize, avatarSource: currentUser.getAvatarSource(undefined, false, avatarSize), animate: !stateFromStores };
    const tmp12 = AvatarDecorationSampleV2Default;
    tmp7Result = tmp7(tmp12, obj2);
  } else {
    const obj6 = { reward, size: avatarDecorationSize };
    tmp7Result = tmp7(OrbsArcadeRewardPreviewDefault, obj6);
  }
  const obj7 = { preview: tmp7Result, title: intl.format(intl4.t.YNaxMp, { itemName: name }), description: null };
  intl = tmp(1125).intl;
  if (null != product) {
    let formatResult;
    const tmpResult2 = CollectiblesUtils;
    if (tmpResult2.isPremiumCollectiblesProduct(product)) {
      const intl3 = tmp(1125).intl;
      const obj8 = { itemName: name };
      formatResult = intl3.format(tmp(1125).t.nW6E3m, obj8);
    }
    obj7.description = formatResult;
    return authStore(tmp8, obj7);
  }
  const intl2 = tmp(1125).intl;
  formatResult = intl2.format(tmp(1125).t["4kp0AB"], { itemName: name });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function CollectibleRewardUseNowButton(product) {
  let canUseNow;
  let handleEditProfile;
  let handleUseNow;
  let intl;
  let intl2;
  let isApplying;
  let obj4;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(7);
  product = product.product;
  if (cResult[0] !== product) {
    const obj2 = { product };
    cResult[0] = product;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = useHandleUseNow;
  const handleUseNow1 = tmpResult.useHandleUseNow(tmp4);
  ({ handleUseNow, canUseNow, isApplying, handleEditProfile } = handleUseNow1);
  if (cResult[2] === canUseNow) {
    if (cResult[3] === handleEditProfile) {
      if (cResult[4] === handleUseNow) {
        let tmp6;
        if (cResult[5] === isApplying) {
          tmp6 = cResult[6];
        }
        return tmp6;
      }
    }
  }
  const Button = tmp(5280).Button;
  const tmp7 = authStore;
  if (canUseNow) {
    const obj3 = { size: "lg", text: intl2.string(intl4.t.MAS7uK), loading: isApplying, disabled: isApplying, onPress: handleUseNow };
    intl2 = tmp(1125).intl;
    obj4 = obj3;
  } else {
    obj4 = { size: "lg", text: intl.string(intl4.t["2p2aYz"]), onPress: handleEditProfile };
    intl = tmp(1125).intl;
  }
  const tmp7Result = tmp7(Button, obj4);
  cResult[2] = canUseNow;
  cResult[3] = handleEditProfile;
  cResult[4] = handleUseNow;
  cResult[5] = isApplying;
  cResult[6] = tmp7Result;
  tmp6 = tmp7Result;
}) : (function CollectibleRewardUseNowButton(product) {
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
    intl2 = tmp(1125).intl;
    obj3 = obj2;
  } else {
    obj3 = { size: "lg", text: intl.string(intl4.t["2p2aYz"]), onPress: handleEditProfile };
    intl = tmp(1125).intl;
  }
  return tmp4(Button, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function CollectibleRewardPrimaryAction(reward) {
  let intl;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  reward = reward.reward;
  const obj2 = useFetchCollectiblesProduct;
  const product = obj2.useFetchCollectiblesProduct(reward.skuId).product;
  if (cResult[0] !== product) {
    let tmp7;
    if (null != product) {
      const obj3 = { product };
      tmp7 = authStore(closure_18, obj3);
    } else {
      const obj4 = {
        size: "lg",
        text: intl.string(intl4.t.MAS7uK),
        loading: true,
        disabled: true,
        onPress() {

            }
      };
      const Button = tmp(5280).Button;
      intl = tmp(1125).intl;
      tmp7 = authStore(Button, obj4);
    }
    cResult[0] = product;
    cResult[1] = tmp7;
    tmp4 = tmp7;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function CollectibleRewardPrimaryAction(reward) {
  let intl;
  let tmp4;
  reward = reward.reward;
  const obj = useFetchCollectiblesProduct;
  const product = obj.useFetchCollectiblesProduct(reward.skuId).product;
  if (null != product) {
    const obj2 = { product };
    tmp4 = authStore(closure_18, obj2);
  } else {
    const obj3 = {
      size: "lg",
      text: intl.string(intl4.t.MAS7uK),
      loading: true,
      disabled: true,
      onPress() {

        }
    };
    const Button = tmp(5280).Button;
    intl = tmp(1125).intl;
    tmp4 = authStore(Button, obj3);
  }
  return tmp4;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function NitroCreditRewardPageContent(arg0) {
  let consumed;
  let expiresAt;
  let formatResult;
  let isFractionalPremiumActive;
  let reward;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(11);
  ({ reward, consumed } = arg0);
  const obj2 = useAvatarDecorationPreviewSizes;
  const avatarDecorationSize = obj2.useAvatarDecorationPreviewSizes().avatarDecorationSize;
  const obj3 = utils_CollectiblesUtils;
  const fetchFractionalPremiumInfo = obj3.useFetchFractionalPremiumInfo();
  ({ isFractionalPremiumActive, expiresAt } = fetchFractionalPremiumInfo);
  if (cResult[0] === avatarDecorationSize) {
    if (cResult[1] === consumed) {
      if (cResult[2] === expiresAt) {
        let tmp8;
        const tmp6 = cResult[3];
        if (closure_9[reward.skuId] != null) {
          tmp8 = tmp5[1];
        }
        if (tmp6 === tmp8) {
          if (cResult[4] === isFractionalPremiumActive) {
            if (cResult[5] === reward.skuId) {
              tmp9 = cResult[6];
            }
            return tmp9;
          }
        }
      }
    }
  }
  const intl = tmp(1125).intl;
  const formatToPlainString = intl.formatToPlainString;
  let num;
  const Cz1G97 = tmp(1125).t.Cz1G97;
  if (closure_9[reward.skuId] != null) {
    num = tmp5[1];
  }
  if (num == null) {
    num = 3;
  }
  const formatToPlainStringResult = formatToPlainString(Cz1G97, { days: num });
  if (cResult[7] === avatarDecorationSize) {
    let tmp11;
    let tmp14;
    if (cResult[8] === reward.skuId) {
      tmp11 = cResult[9];
    }
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1125).intl;
      const stringResult = intl2.string(intl4.t.m2zEFB);
      cResult[10] = stringResult;
      tmp14 = stringResult;
    } else {
      tmp14 = cResult[10];
    }
    const obj4 = { preview: tmp11, title: tmp14, description: formatResult };
    const intl3 = tmp(1125).intl;
    const tmp16 = authStore;
    const tmp17 = closure_16;
    if (consumed) {
      const obj5 = { duration: formatToPlainStringResult, expirationDate: expiresAt };
      formatResult = intl3.format(tmp(1125).t["93PGOI"], obj5);
    } else if (isFractionalPremiumActive) {
      formatResult = intl3.string(tmp(1125).t.fBmhE9);
    } else {
      const obj6 = { duration: formatToPlainStringResult };
      formatResult = intl3.format(tmp(1125).t["8fyBPf"], obj6);
    }
    const tmp16Result = tmp16(tmp17, obj4);
    cResult[0] = avatarDecorationSize;
    cResult[1] = consumed;
    cResult[2] = expiresAt;
    let tmp20;
    if (closure_9[reward.skuId] != null) {
      tmp20 = tmp5[1];
    }
    cResult[3] = tmp20;
    cResult[4] = isFractionalPremiumActive;
    cResult[5] = reward.skuId;
    cResult[6] = tmp16Result;
    tmp9 = tmp16Result;
  }
  size = { skuId: reward.skuId, width: avatarDecorationSize, height: avatarDecorationSize };
  const tmp12 = authStore(FractionalNitroCoinIllustration.FractionalNitroCoinIllustration, size);
  cResult[7] = avatarDecorationSize;
  cResult[8] = reward.skuId;
  cResult[9] = tmp12;
  tmp11 = tmp12;
}) : (function NitroCreditRewardPageContent(reward) {
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
  intl2 = tmp(1125).intl;
  const intl3 = tmp(1125).intl;
  const tmp6 = authStore;
  const tmp7 = closure_16;
  if (consumed) {
    const obj4 = { duration: formatToPlainStringResult, expirationDate: expiresAt };
    formatResult = intl3.format(tmp(1125).t["93PGOI"], obj4);
  } else if (isFractionalPremiumActive) {
    formatResult = intl3.string(tmp(1125).t.fBmhE9);
  } else {
    const obj5 = { duration: formatToPlainStringResult };
    formatResult = intl3.format(tmp(1125).t["8fyBPf"], obj5);
  }
  return tmp6(tmp7, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function NitroCreditRewardPrimaryAction(consumed) {
  let tmp4;
  let tmp6;
  let obj = consumed(576);
  const cResult = obj.c(7);
  consumed = consumed.consumed;
  if (cResult[0] !== consumed) {
    const intl = tmp(1125).intl;
    const string = intl.string;
    const t = tmp(1125).t;
    const stringResult = string(consumed ? t.ERKK6v : t["Jr6N+s"]);
    cResult[0] = consumed;
    cResult[1] = stringResult;
    tmp4 = stringResult;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== consumed) {
    const fn = function o() {
      const obj = openOrbsArcadeRewardsCollectedModal;
      const result = obj.closeOrbsArcadeRewardsCollectedModal();
      const obj2 = openUserSettings;
      const obj3 = { screen: consumed ? UserSettingsSections.PREMIUM : UserSettingsSections.PREMIUM_MANAGE_PLAN };
      obj2.openUserSettings(obj3);
    };
    cResult[2] = consumed;
    cResult[3] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === tmp4) {
    let tmp7;
    if (cResult[5] === tmp6) {
      tmp7 = cResult[6];
    }
    return tmp7;
  }
  const tmp8 = closure_10(consumed(5280).Button, { size: "lg", text: tmp4, onPress: tmp6 });
  cResult[4] = tmp4;
  cResult[5] = tmp6;
  cResult[6] = tmp8;
  tmp7 = tmp8;
}) : (function NitroCreditRewardPrimaryAction(consumed) {
  consumed = consumed.consumed;
  const Button = consumed(5280).Button;
  const intl = consumed(1125).intl;
  const string = intl.string;
  const t = consumed(1125).t;
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeRewardsCollectedModal(arg0) {
  let closure_1;
  let closure_7;
  let entitlements;
  let first;
  let rewards;
  let stateFromStores;
  let tmp8;
  let tmp9;
  let tmp = entitlements;
  let tmp2 = stateFromStores;
  let obj = entitlements(stateFromStores[10]);
  const cResult = obj.c(62);
  ({ rewards, entitlements } = arg0);
  importDefault = closure_13();
  const tmp4 = closure_13();
  let obj2 = entitlements(stateFromStores[27]);
  const token = obj2.useToken(require("native").colors.BACKGROUND_BASE_LOW);
  let obj3 = entitlements(stateFromStores[27]);
  const token1 = obj3.useToken(require("native").colors.BACKGROUND_BASE_LOWER);
  const obj4 = entitlements(stateFromStores[27]);
  const token2 = obj4.useToken(require("native").colors.BACKGROUND_BASE_LOWEST);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function p() {
      return closure_7.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp8 = items;
    tmp9 = fn;
  } else {
    [tmp8, tmp9] = cResult;
  }
  let tmpResult = tmp(tmp2[14]);
  stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
  const ref = first.useRef(null);
  const tmp13 = ref(first.useState(0), 2);
  first = tmp13[0];
  let closure_5 = tmp13[1];
  const page = closure_15(first);
  closure_15(first);
  const tmp16 = ref(first.useState(0), 2);
  AccessibilityStore = tmp16[1];
  const first1 = tmp16[0];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor(nativeEvent) {
        closure_5(nativeEvent.nativeEvent.layout.width);
      }
    }
    cResult[2] = I;
  } else {
    class I {
      constructor(nativeEvent) {
        closure_5(nativeEvent.nativeEvent.layout.width);
      }
    }
  }
  if (cResult[3] !== first) {
    class V {
      constructor(nativeEvent) {
        if (first > 0) {
          const _Math = Math;
          closure_7(Math.round(nativeEvent.nativeEvent.contentOffset.x / tmp));
        }
      }
    }
    cResult[3] = first;
    cResult[4] = V;
  } else {
    class V {
      constructor(nativeEvent) {
        if (first > 0) {
          const _Math = Math;
          closure_7(Math.round(nativeEvent.nativeEvent.contentOffset.x / tmp));
        }
      }
    }
  }
  const bound = Math.max(Math.min(first1, rewards.length - 1), 0);
  if (null == rewards[bound]) {
    class V {
      constructor(nativeEvent) {
        if (first > 0) {
          const _Math = Math;
          closure_7(Math.round(nativeEvent.nativeEvent.contentOffset.x / tmp));
        }
      }
    }
  } else {
    class V {
      constructor(nativeEvent) {
        if (first > 0) {
          const _Math = Math;
          closure_7(Math.round(nativeEvent.nativeEvent.contentOffset.x / tmp));
        }
      }
    }
    closure_9 = tmp22;
    if (cResult[5] === bound) {
      class V {
        constructor(nativeEvent) {
          if (first > 0) {
            const _Math = Math;
            closure_7(Math.round(nativeEvent.nativeEvent.contentOffset.x / tmp));
          }
        }
      }
    }
    function handleNextPress() {
      const tmp = closure_9;
      if (tmp) {
        const obj2 = openOrbsArcadeRewardsCollectedModal;
        const result = obj2.closeOrbsArcadeRewardsCollectedModal();
      } else {
        const current = ref.current;
        if (current != null) {
          const obj = { x: (bound + 1) * first, animated: !stateFromStores };
          current.scrollTo(obj);
        }
        closure_7(bound + 1);
      }
    }
    cResult[5] = bound;
    cResult[6] = tmp22;
    cResult[7] = first;
    cResult[8] = stateFromStores;
    cResult[9] = handleNextPress;
  }
}) : (function OrbsArcadeRewardsCollectedModal(arg0) {
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
  let obj = entitlements(5288);
  const token = obj.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  let obj2 = entitlements(5288);
  const token1 = obj2.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
  let obj3 = entitlements(5288);
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
    const obj6 = { style: tmp.backdrop, start: tmp2(1104).VerticalGradient.START, end: tmp2(1104).VerticalGradient.END, locations, colors: items2 };
    items2 = [token, token1, token2];
    const tmp4Result = LinearGradientDefault;
    items3 = [closure_10(tmp4Result, obj6), ];
    const rect = { style: tmp.main, top: true, bottom: true, left: true, right: true, children: items4 };
    const obj7 = { style: tmp.header, children: closure_10(IconButton, obj8) };
    const SafeAreaPaddingView = tmp2(7257).SafeAreaPaddingView;
    obj8 = { variant: "tertiary", icon: AssetRegistryDefault, accessibilityLabel: intl3.string(tmp2(1125).t.cpT0Cq), onPress: tmp2(16684).closeOrbsArcadeRewardsCollectedModal };
    IconButton = tmp2(7991).IconButton;
    intl3 = tmp2(1125).intl;
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
                tmpResult = tmp(closure_17, obj2);
              } else {
                const skuId = type.skuId;
                const obj3 = { reward: type, consumed: flag };
                const found = entitlements.find((sku_id) => sku_id.sku_id === skuId);
                flag = undefined;
                const tmp3 = closure_20;
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
        accessibilityLabel: intl.formatToPlainString(tmp2(1125).t.qD8TVH, obj13),
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
      intl = tmp2(1125).intl;
      const _Array = Array;
      obj13 = { current: bound + 1, total: rewards.length };
      obj14 = { length: rewards.length };
      tmp28Result3 = tmp28(tmp27, obj12);
    }
    items5 = [tmp28Result3, ];
    const ButtonGroup = tmp2(6731).ButtonGroup;
    if (rewards[bound].type === tmp2(16663).OrbsArcadeRewardType.COLLECTIBLE) {
      const obj15 = { reward: rewards[bound] };
      tmp28Result4 = tmp28(closure_19, obj15, tmp16.id);
    } else {
      let skuId = tmp16.skuId;
      let found = entitlements.find((sku_id) => sku_id.sku_id === skuId);
      let flag;
      const tmp20 = closure_21;
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
    const Button = tmp2(5280).Button;
    const intl2 = tmp2(1125).intl;
    const string = intl2.string;
    const t = tmp2(1125).t;
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
});
size = size_mod;
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardsCollectedModal.tsx");

export default tmp5;
