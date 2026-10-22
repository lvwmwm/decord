// Module ID: 9232
// Function ID: 9233
// Name: transformAvatarDecoration
// Dependencies: [1987, 2]
// Exports: default

// Module 9232 (transformAvatarDecoration)
import AvatarDecorationUtils from "AvatarDecorationUtils" /* 1987 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/rpc/helpers/transformAvatarDecoration.tsx");

export default function transformAvatarDecoration(avatar_decoration_data) {
  let expiresAt;
  const obj = AvatarDecorationUtils;
  const result = obj.parseAvatarDecorationData(avatar_decoration_data);
  let skuId;
  if (result != null) {
    skuId = result.skuId;
  }
  let tmp3 = null;
  if (null != skuId) {
    tmp3 = null;
    if (null != result.asset) {
      const obj3 = { asset: null, sku_id: null, expires_at: expiresAt };
      ({ asset: obj2.asset, skuId: obj2.sku_id, expiresAt } = result);
      if (expiresAt == null) {
        expiresAt = null;
      }
      tmp3 = obj3;
    }
  }
  return tmp3;
};
