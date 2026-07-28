// Module ID: 9762
// Function ID: 75884
// Name: GiftingRewardPreviewAvatar
// Dependencies: [31, 4157, 1850, 33, 566, 1273, 2]
// Exports: default

// Module 9762 (GiftingRewardPreviewAvatar)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/gifting/native/views/GiftingRewardPreviewAvatar.tsx");

export default function GiftingRewardPreviewAvatar(asset) {
  let obj = require(566) /* initialize */;
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getCurrentUser());
  const items1 = [_isNativeReflectConstruct];
  let tmp3;
  const stateFromStores1 = require(566) /* initialize */.useStateFromStores(items1, () => outer1_2.useReducedMotion);
  if (null != asset.asset) {
    obj = { asset: asset.asset };
    tmp3 = obj;
  }
  obj = { user: stateFromStores, guildId: undefined, avatarDecoration: tmp3, animate: !stateFromStores1 };
  const merged = Object.assign(asset);
  return jsx(require(1273) /* Button */.Avatar, { user: stateFromStores, guildId: undefined, avatarDecoration: tmp3, animate: !stateFromStores1 });
};
