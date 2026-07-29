// Module ID: 9784
// Function ID: 9785
// Name: GiftingRewardPreviewAvatar
// Dependencies: [19, 4181, 1874, 21, 589, 1297, 2]
// Exports: default

// Module 9784 (GiftingRewardPreviewAvatar)
import "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import mergeGuildAvatar from "mergeGuildAvatar";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/premium/gifting/native/views/GiftingRewardPreviewAvatar.tsx");

export default function GiftingRewardPreviewAvatar(asset) {
  let obj = require(589) /* initialize */;
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [maybeApplyNoTextColorForLightCustomTheme];
  let tmp5;
  const stateFromStores1 = require(589) /* initialize */.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  if (null != asset.asset) {
    obj = { asset: null };
    obj[0] = asset.asset;
    tmp5 = obj;
  }
  obj = { user: stateFromStores, guildId: "r", avatarDecoration: "mode", animate: "Array" };
  obj[2] = tmp5;
  obj[3] = !stateFromStores1;
  const merged = Object.assign(asset);
  return jsx(require(1297) /* Button */.Avatar, { user: stateFromStores, guildId: "r", avatarDecoration: "mode", animate: "Array" });
};
