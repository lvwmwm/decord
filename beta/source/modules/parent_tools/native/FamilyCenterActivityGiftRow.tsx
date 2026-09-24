// Module ID: 15182
// Function ID: 15183
// Name: FamilyCenterActivityGiftRow
// Dependencies: [19, 17, 21, 4790, 580, 558, 568, 8479, 15170, 15179, 15181, 4635, 15180, 4786, 2]

// Module 15182 (FamilyCenterActivityGiftRow)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import useCollectiblesDataDefault from "useCollectiblesData" /* 8479 */;
import useSelectedTeenUser from "useSelectedTeenUser" /* 15170 */;
import FamilyCenterActivityPurchaseRowUtils from "FamilyCenterActivityPurchaseRowUtils" /* 15179 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4790);
let obj2 = { container: { display: "flex", flexDirection: "row", alignItems: "center", borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1, paddingVertical: 12 }, textContainer: { display: "flex", flexDirection: "column", flexShrink: 1 } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { display: "flex", flexDirection: "row", alignItems: "center", borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1, paddingVertical: 12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityGiftRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((gifterUserId) => {
  const cResult = c.c(26);
  ({ skuId, subscriptionPlanId, price, claimed, offeredAt, claimedAt } = gifterUserId);
  const tmp4 = closure_6();
  let product = useCollectiblesDataDefault(skuId).product;
  const teenUserForId = useSelectedTeenUser.useTeenUserForId(gifterUserId.gifterUserId);
  let tmp8 = product;
  if (product == null) {
    tmp8 = null;
  }
  if (cResult[0] === subscriptionPlanId) {
    if (cResult[1] === tmp8) {
      let tmp9 = cResult[2];
    }
    ({ displayName, isSubscription } = tmp9);
    if (null != skuId) {
      if (!isSubscription) {
        if (null == product) {
          return null;
        }
      }
    }
    if (null == displayName) {
      return null;
    } else {
      if (cResult[3] === claimed) {
        if (cResult[4] === claimedAt) {
          if (cResult[5] === teenUserForId) {
            if (cResult[6] === offeredAt) {
              if (cResult[7] === price) {
                let tmp11 = cResult[8];
              }
              if (product == null) {
                product = null;
              }
              if (cResult[9] === displayName) {
                if (cResult[10] === isSubscription) {
                  if (cResult[11] === subscriptionPlanId) {
                    if (cResult[12] === product) {
                      let tmp14 = cResult[13];
                    }
                    if (cResult[14] !== displayName) {
                      const obj3 = { variant: "text-md/semibold", color: "interactive-text-active", ellipsizeMode: "tail", lineClamp: 1, children: displayName };
                      const tmp19 = React4(tmp(4786).Text, obj3);
                      cResult[14] = displayName;
                      cResult[15] = tmp19;
                      let tmp17 = tmp19;
                    } else {
                      tmp17 = cResult[15];
                    }
                    if (cResult[16] !== tmp11) {
                      const obj4 = { variant: "text-xs/medium", color: "text-muted", children: tmp11 };
                      const tmp22 = React4(tmp(4786).Text, obj4);
                      cResult[16] = tmp11;
                      cResult[17] = tmp22;
                      let tmp20 = tmp22;
                    } else {
                      tmp20 = cResult[17];
                    }
                    if (cResult[18] === tmp4.textContainer) {
                      if (cResult[19] === tmp17) {
                        if (cResult[20] === tmp20) {
                          let tmp23 = cResult[21];
                        }
                        if (cResult[22] === tmp4.container) {
                          if (cResult[23] === tmp14) {
                            if (cResult[24] === tmp23) {
                              let tmp27 = cResult[25];
                            }
                            return tmp27;
                          }
                        }
                        const obj5 = { style: tmp4.container, children: null };
                        const items = [tmp14, tmp23];
                        obj5.children = items;
                        const tmp30 = hasOwnProperty(View, obj5);
                        cResult[22] = tmp4.container;
                        cResult[23] = tmp14;
                        cResult[24] = tmp23;
                        cResult[25] = tmp30;
                        tmp27 = tmp30;
                      }
                    }
                    const obj6 = { style: tmp4.textContainer, children: null };
                    const items1 = [tmp17, tmp20];
                    obj6.children = items1;
                    const tmp26 = hasOwnProperty(View, obj6);
                    cResult[18] = tmp4.textContainer;
                    cResult[19] = tmp17;
                    cResult[20] = tmp20;
                    cResult[21] = tmp26;
                    tmp23 = tmp26;
                  }
                }
              }
              const obj7 = { displayName, product, isSubscription, subscriptionPlanId };
              const tmp16 = React4(tmp5(15180), obj7);
              cResult[9] = displayName;
              cResult[10] = isSubscription;
              cResult[11] = subscriptionPlanId;
              cResult[12] = product;
              cResult[13] = tmp16;
              tmp14 = tmp16;
            }
          }
        }
      }
      const obj8 = { claimed, price, gifterName: null, offeredAt: null, claimedAt: null };
      let name = null;
      if (null != teenUserForId) {
        name = tmp5(4635).getName(teenUserForId);
        const tmp5Result = tmp5(4635);
      }
      obj8.gifterName = name;
      obj8.offeredAt = offeredAt;
      obj8.claimedAt = claimedAt;
      const giftSubtext = tmp(15181).getGiftSubtext(obj8);
      cResult[3] = claimed;
      cResult[4] = claimedAt;
      cResult[5] = teenUserForId;
      cResult[6] = offeredAt;
      cResult[7] = price;
      cResult[8] = giftSubtext;
      tmp11 = giftSubtext;
      const tmpResult = tmp(15181);
    }
  }
  const purchaseDisplayInfo = FamilyCenterActivityPurchaseRowUtils.getPurchaseDisplayInfo(tmp8, subscriptionPlanId);
  cResult[0] = subscriptionPlanId;
  cResult[1] = tmp8;
  cResult[2] = purchaseDisplayInfo;
  tmp9 = purchaseDisplayInfo;
}) : ((arg0) => {
  ({ skuId, subscriptionPlanId } = arg0);
  ({ price, gifterUserId, claimed, offeredAt, claimedAt } = arg0);
  const tmp = closure_6();
  let product = useCollectiblesDataDefault(skuId).product;
  const teenUserForId = useSelectedTeenUser.useTeenUserForId(gifterUserId);
  let tmp7 = product;
  if (product == null) {
    tmp7 = null;
  }
  const purchaseDisplayInfo = FamilyCenterActivityPurchaseRowUtils.getPurchaseDisplayInfo(tmp7, subscriptionPlanId);
  ({ displayName, isSubscription } = purchaseDisplayInfo);
  if (null != skuId) {
    if (!isSubscription) {
      if (null == product) {
        return null;
      }
    }
  }
  if (null == displayName) {
    return null;
  } else {
    const obj3 = { claimed, price, gifterName: null, offeredAt: null, claimedAt: null };
    let name = null;
    if (null != teenUserForId) {
      name = tmp2(4635).getName(teenUserForId);
      const tmp2Result = tmp2(4635);
    }
    obj3.gifterName = name;
    obj3.offeredAt = offeredAt;
    obj3.claimedAt = claimedAt;
    const obj4 = { style: tmp.container, children: null };
    const giftSubtext = tmp5(15181).getGiftSubtext(obj3);
    const obj5 = { displayName, product: null, isSubscription: null, subscriptionPlanId: null };
    const tmp5Result = tmp5(15181);
    if (product == null) {
      product = null;
    }
    obj5.product = product;
    obj5.isSubscription = isSubscription;
    obj5.subscriptionPlanId = subscriptionPlanId;
    const items = [React4(tmp2(15180), obj5), ];
    const obj6 = { style: tmp.textContainer, children: null };
    const obj7 = { variant: "text-md/semibold", color: "interactive-text-active", ellipsizeMode: "tail", lineClamp: 1, children: displayName };
    const items1 = [React4(tmp5(4786).Text, obj7), ];
    const obj8 = { variant: "text-xs/medium", color: "text-muted", children: giftSubtext };
    items1[1] = React4(tmp5(4786).Text, obj8);
    obj6.children = items1;
    items[1] = hasOwnProperty(View, obj6);
    obj4.children = items;
    return hasOwnProperty(View, obj4);
  }
});
