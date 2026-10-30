// Module ID: 16964
// Function ID: 16965
// Name: OrbsArcadeRewardPreview
// Dependencies: [19, 17, 21, 5009, 9484, 575, 1982, 5712, 9485, 16955, 9520, 2]
// Exports: default

// Module 16964 (OrbsArcadeRewardPreview)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import CollectiblesAssetUtils from "CollectiblesAssetUtils" /* 1982 */;
import FastImageDefault from "FastImage" /* 5712 */;
import AvatarDecorationSampleV2 from "AvatarDecorationSampleV2" /* 9484 */;
import AssetRegistryDefault from "AssetRegistry" /* 9485 */;
import NitroCoinSpotIllustration from "NitroCoinSpotIllustration" /* 9520 */;
import OrbsArcadeTypes from "OrbsArcadeTypes" /* 16955 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
function CollectibleRewardPreview(reward) {
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
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles((width) => {
  const obj = { container: { width, height: width, alignItems: "center", justifyContent: "center" }, avatar: size, decoration: { position: "absolute", width, height: width } };
  size = { width: width * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio, height: width * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio, borderRadius: width * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio / 2, opacity: 0.8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardPreview.tsx");

export default function OrbsArcadeRewardPreview(arg0) {
  let reward;
  ({ reward, size } = arg0);
  const type = reward.type;
  if (OrbsArcadeTypes.OrbsArcadeRewardType.COLLECTIBLE === type) {
    const obj = { reward, size };
    return React3(CollectibleRewardPreview, obj);
  } else if (OrbsArcadeTypes.OrbsArcadeRewardType.FRACTIONAL_PREMIUM === type) {
    const size1 = { width: size, height: size };
    return React3(NitroCoinSpotIllustration.NitroCoinSpotIllustration, size1);
  }
};
