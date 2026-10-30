// Module ID: 16754
// Function ID: 16755
// Name: FamilyCenterActivityGiftRow
// Dependencies: [19, 17, 21, 5009, 575, 8736, 16742, 16751, 16753, 5063, 16752, 5619, 2]
// Exports: default

// Module 16754 (FamilyCenterActivityGiftRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import UserUtilsDefault from "UserUtils" /* 5063 */;
import Text_Text from "Text/Text" /* 5619 */;
import useCollectiblesDataDefault from "useCollectiblesData" /* 8736 */;
import useSelectedTeenUser from "useSelectedTeenUser" /* 16742 */;
import FamilyCenterActivityPurchaseRowUtils from "FamilyCenterActivityPurchaseRowUtils" /* 16751 */;
import FamilyCenterActivityItemPreviewDefault from "FamilyCenterActivityItemPreview" /* 16752 */;
import FamilyCenterActivityGiftRowUtils from "FamilyCenterActivityGiftRowUtils" /* 16753 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2, textContainer: { display: "flex", flexDirection: "column", flexShrink: 1 } };
obj2 = { display: "flex", flexDirection: "row", alignItems: "center", borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1, paddingVertical: 12 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityGiftRow.tsx");

export default function FamilyCenterActivityGiftRow(arg0) {
  let claimed;
  let claimedAt;
  let displayName;
  let gifterUserId;
  let isSubscription;
  let items;
  let items1;
  let name;
  let offeredAt;
  let price;
  let skuId;
  let subscriptionPlanId;
  ({ skuId, subscriptionPlanId } = arg0);
  ({ price, gifterUserId, claimed, offeredAt, claimedAt } = arg0);
  const tmp = closure_6();
  let product = useCollectiblesDataDefault(skuId).product;
  const obj = useSelectedTeenUser;
  const teenUserForId = obj.useTeenUserForId(gifterUserId);
  let tmp8 = product;
  const getPurchaseDisplayInfo = FamilyCenterActivityPurchaseRowUtils.getPurchaseDisplayInfo;
  FamilyCenterActivityPurchaseRowUtils;
  if (product == null) {
    tmp8 = null;
  }
  const purchaseDisplayInfo = getPurchaseDisplayInfo(tmp8, subscriptionPlanId);
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
    const obj2 = { claimed, price, gifterName: name, offeredAt, claimedAt };
    name = null;
    const getGiftSubtext = FamilyCenterActivityGiftRowUtils.getGiftSubtext;
    FamilyCenterActivityGiftRowUtils;
    if (null != teenUserForId) {
      const tmp2Result = UserUtilsDefault;
      name = tmp2Result.getName(teenUserForId);
    }
    const obj3 = { style: tmp.container, children: items };
    const giftSubtext = getGiftSubtext(obj2);
    const obj4 = { displayName, product, isSubscription, subscriptionPlanId };
    const tmp2Result2 = FamilyCenterActivityItemPreviewDefault;
    if (product == null) {
      product = null;
    }
    items = [React3(tmp2Result2, obj4), ];
    const obj5 = { style: tmp.textContainer, children: items1 };
    const obj6 = { variant: "text-md/semibold", color: "interactive-text-active", ellipsizeMode: "tail", lineClamp: 1, children: displayName };
    items1 = [React3(Text_Text.Text, obj6), ];
    const obj7 = { variant: "text-xs/medium", color: "text-muted", children: giftSubtext };
    items1[1] = React3(Text_Text.Text, obj7);
    items[1] = hasOwnProperty(View, obj5);
    return hasOwnProperty(View, obj3);
  }
};
