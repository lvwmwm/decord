// Module ID: 7660
// Function ID: 7661
// Name: useMaybeFetchEquippedCollectibleProducts
// Dependencies: [19, 1372, 504, 7631, 7661, 7662, 7663, 2]
// Exports: default

// Module 7660 (useMaybeFetchEquippedCollectibleProducts)
import StorefrontProductActionCreators from "StorefrontProductActionCreators" /* 7663 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function useEquippedCollectibleSkuIds(id, guildId) {
  let skuId;
  let skuId1;
  let skuId3;
  _require = id;
  let items = [skuId3];
  const items1 = [id];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(id), items1);
  const tmp2 = skuId(skuId1[3])(id, guildId);
  const obj2 = require("useAvatarDecoration");
  const avatarDecoration = obj2.useAvatarDecoration(stateFromStores, guildId);
  const obj3 = require("useNameplate");
  const obj4 = { user: stateFromStores, guildId };
  const nameplate = obj3.useNameplate(obj4);
  skuId = undefined;
  if (avatarDecoration != null) {
    skuId = avatarDecoration.skuId;
  }
  skuId1 = undefined;
  if (nameplate != null) {
    skuId1 = nameplate.skuId;
  }
  let skuId2;
  if (tmp2 != null) {
    const profileEffect = tmp2.profileEffect;
    if (profileEffect != null) {
      skuId2 = profileEffect.skuId;
    }
  }
  skuId3 = undefined;
  if (tmp2 != null) {
    const profileFrame = tmp2.profileFrame;
    if (profileFrame != null) {
      skuId3 = profileFrame.skuId;
    }
  }
  const items2 = [skuId, skuId1, skuId2, skuId3];
  return skuId2.useMemo(() => {
    const items = [skuId, skuId1, skuId2, skuId3];
    return items.filter((item) => null != item);
  }, items2);
}
let result = size.fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchEquippedCollectibleProducts.tsx");

export default function useMaybeFetchEquippedCollectibleProducts(id, guildId, arg2) {
  let closure_0 = arg2;
  let tmp = useEquippedCollectibleSkuIds(id, guildId);
  const skuIds = tmp;
  const items = [arg2, tmp];
  const effect = react.useEffect(() => {
    const tmp = closure_0 && 0 !== skuIds.length;
    if (tmp) {
      const obj2 = { skuIds };
      const obj = StorefrontProductActionCreators;
      const result = obj.maybeFetchProductsBySkuIds(obj2);
    }
  }, items);
};
export { useEquippedCollectibleSkuIds };
