// Module ID: 16910
// Function ID: 16911
// Name: OrbsArcadeRewardPreview
// Dependencies: [19, 17, 21, 5005, 9465, 587, 558, 576, 1987, 5707, 9466, 16901, 9501, 2]

// Module 16910 (OrbsArcadeRewardPreview)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CollectiblesAssetUtils from "CollectiblesAssetUtils" /* 1987 */;
import FastImageDefault from "FastImage" /* 5707 */;
import AvatarDecorationSampleV2 from "AvatarDecorationSampleV2" /* 9465 */;
import AssetRegistryDefault from "AssetRegistry" /* 9466 */;
import NitroCoinSpotIllustration from "NitroCoinSpotIllustration" /* 9501 */;
import OrbsArcadeTypes from "OrbsArcadeTypes" /* 16901 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles((width) => {
  const obj = { container: { width, height: width, alignItems: "center", justifyContent: "center" }, avatar: size, decoration: { position: "absolute", width, height: width } };
  size = { width: width * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio, height: width * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio, borderRadius: width * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio / 2, opacity: 0.8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function CollectibleRewardPreview(reward) {
  let items;
  let obj6;
  let tmp5;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(11);
  reward = reward.reward;
  const tmp4 = closure_6(reward.size);
  if (cResult[0] !== reward.skuId) {
    const obj2 = { skuId: reward.skuId, assetFormat: CollectiblesAssetUtils.CollectiblesItemAssetFormat.STATIC };
    const getCollectiblesItemAssetUrl = CollectiblesAssetUtils.getCollectiblesItemAssetUrl;
    CollectiblesAssetUtils;
    const collectiblesItemAssetUrl = getCollectiblesItemAssetUrl(obj2);
    cResult[0] = reward.skuId;
    cResult[1] = collectiblesItemAssetUrl;
    tmp5 = collectiblesItemAssetUrl;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp4.avatar) {
    const obj3 = { style: tmp4.avatar, resizeMode: "contain", source: AssetRegistryDefault, accessible: false };
    const tmp11 = FastImageDefault;
    const tmp12 = React3(tmp11, obj3);
    cResult[2] = tmp4.avatar;
    cResult[3] = tmp12;
    tmp8 = tmp12;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === tmp5) {
    let tmp13;
    if (cResult[5] === tmp4.decoration) {
      tmp13 = cResult[6];
    }
    if (cResult[7] === tmp4.container) {
      if (cResult[8] === tmp8) {
        let tmp17;
        if (cResult[9] === tmp13) {
          tmp17 = cResult[10];
        }
        return tmp17;
      }
    }
    const obj4 = { style: tmp4.container, children: items };
    items = [tmp8, tmp13];
    const tmp20 = hasOwnProperty(View, obj4);
    cResult[7] = tmp4.container;
    cResult[8] = tmp8;
    cResult[9] = tmp13;
    cResult[10] = tmp20;
    tmp17 = tmp20;
  }
  let tmp14 = null;
  if (null != tmp5) {
    const obj5 = { style: tmp4.decoration, source: obj6, accessible: false };
    obj6 = { uri: tmp5 };
    tmp14 = React3(FastImageDefault, obj5);
  }
  cResult[4] = tmp5;
  cResult[5] = tmp4.decoration;
  cResult[6] = tmp14;
  tmp13 = tmp14;
}) : (function CollectibleRewardPreview(reward) {
  let items;
  let obj6;
  reward = reward.reward;
  const tmp = closure_6(reward.size);
  const obj = CollectiblesAssetUtils;
  const obj2 = { skuId: reward.skuId, assetFormat: CollectiblesAssetUtils.CollectiblesItemAssetFormat.STATIC };
  const collectiblesItemAssetUrl = obj.getCollectiblesItemAssetUrl(obj2);
  const obj3 = { style: tmp.container, children: items };
  const obj4 = { style: tmp.avatar, resizeMode: "contain", source: AssetRegistryDefault, accessible: false };
  const tmp8 = FastImageDefault;
  items = [React3(tmp8, obj4), ];
  let tmp6Result = null;
  const tmp4 = hasOwnProperty;
  const tmp5 = View;
  const tmp6 = React3;
  if (null != collectiblesItemAssetUrl) {
    const obj5 = { style: tmp.decoration, source: obj6, accessible: false };
    obj6 = { uri: collectiblesItemAssetUrl };
    tmp6Result = tmp6(FastImageDefault, obj5);
  }
  items[1] = tmp6Result;
  return tmp4(tmp5, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeRewardPreview(arg0) {
  let reward;
  const obj = react2;
  const cResult = obj.c(5);
  ({ reward, size } = arg0);
  const type = reward.type;
  if (OrbsArcadeTypes.OrbsArcadeRewardType.COLLECTIBLE === type) {
    if (cResult[0] === reward) {
      let tmp7;
      if (cResult[1] === size) {
        tmp7 = cResult[2];
      }
      return tmp7;
    }
    const obj2 = { reward, size };
    const tmp10 = React3(closure_7, obj2);
    cResult[0] = reward;
    cResult[1] = size;
    cResult[2] = tmp10;
    tmp7 = tmp10;
  } else if (OrbsArcadeTypes.OrbsArcadeRewardType.FRACTIONAL_PREMIUM === type) {
    let tmp4;
    if (cResult[3] !== size) {
      const size1 = { width: size, height: size };
      const tmp6 = React3(NitroCoinSpotIllustration.NitroCoinSpotIllustration, size1);
      cResult[3] = size;
      cResult[4] = tmp6;
      tmp4 = tmp6;
    } else {
      tmp4 = cResult[4];
    }
    return tmp4;
  }
}) : (function OrbsArcadeRewardPreview(arg0) {
  let reward;
  ({ reward, size } = arg0);
  const type = reward.type;
  if (OrbsArcadeTypes.OrbsArcadeRewardType.COLLECTIBLE === type) {
    const obj = { reward, size };
    return React3(closure_7, obj);
  } else if (OrbsArcadeTypes.OrbsArcadeRewardType.FRACTIONAL_PREMIUM === type) {
    const size1 = { width: size, height: size };
    return React3(NitroCoinSpotIllustration.NitroCoinSpotIllustration, size1);
  }
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardPreview.tsx");

export default tmp4;
