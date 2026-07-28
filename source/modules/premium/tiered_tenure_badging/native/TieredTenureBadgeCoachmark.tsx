// Module ID: 8416
// Function ID: 67118
// Name: CoachmarkImg
// Dependencies: [57, 31, 27, 653, 1345, 33, 4165, 8374, 5119, 5900, 1334, 8417, 1212, 6590, 8406, 2]
// Exports: default

// Module 8416 (CoachmarkImg)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { UserSettingsSections } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function CoachmarkImg(badge) {
  badge = badge.badge;
  const tmp = callback2();
  let obj = require(8374) /* getMobileTenureBadgeImages */;
  let id;
  if (null != badge) {
    id = badge.id;
  }
  const mobileTenureBadgeImages = obj.useMobileTenureBadgeImages(id);
  if (null != mobileTenureBadgeImages) {
    const medium = mobileTenureBadgeImages.medium;
  }
  let tmp4 = null;
  if (null != badge) {
    obj = { style: tmp.imageContainer };
    obj = { resizeMode: "contain", style: tmp.image };
    const obj1 = { uri: medium };
    obj.source = obj1;
    obj.children = jsx(importDefault(5119), { resizeMode: "contain", style: tmp.image });
    tmp4 = <View resizeMode="contain" style={tmp.image} />;
  }
  return tmp4;
}
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ image: { width: "100%", height: "100%" }, imageContainer: { width: 110, height: 72, marginTop: 16 } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/premium/tiered_tenure_badging/native/TieredTenureBadgeCoachmark.tsx");

export default function TieredTenureBadgeCoachmark(arg0) {
  let badgeId;
  let targetRef;
  let tieredTenureBadgeData;
  let first;
  let dependencyMap;
  ({ targetRef, badgeId } = arg0);
  const tieredTenureBadge = tieredTenureBadgeData(5900).getTieredTenureBadge(badgeId);
  tieredTenureBadgeData = null;
  if (null != tieredTenureBadge) {
    tieredTenureBadgeData = tieredTenureBadgeData(5900).getTieredTenureBadgeData(tieredTenureBadge);
    const obj2 = tieredTenureBadgeData(5900);
  }
  if (null != tieredTenureBadgeData) {
    const items = [tieredTenureBadgeData(1334).DismissibleContent.TIERED_TENURE_BADGE_COACHMARK];
    let items1 = items;
  } else {
    items1 = [];
  }
  let obj = tieredTenureBadgeData(5900);
  const tmp7 = callback(tieredTenureBadgeData(8417).useSelectedDismissibleContent(items1), 2);
  first = tmp7[0];
  dependencyMap = tmp9;
  const items2 = [tmp7[1], first, tieredTenureBadgeData];
  const memo = React.useMemo(() => {
    let obj = { offsetY: 12 };
    const intl = tieredTenureBadgeData(_undefined[12]).intl;
    obj.title = intl.string(tieredTenureBadgeData(_undefined[12]).t.Ajj8iG);
    const intl2 = tieredTenureBadgeData(_undefined[12]).intl;
    obj.description = intl2.string(tieredTenureBadgeData(_undefined[12]).t["WUNqD/"]);
    obj.position = "bottom";
    obj.visible = first === tieredTenureBadgeData(_undefined[10]).DismissibleContent.TIERED_TENURE_BADGE_COACHMARK;
    obj.onDismiss = function onDismiss() {
      outer1_2(outer2_7.USER_DISMISS);
    };
    obj.renderImgComponent = function renderImgComponent() {
      return outer2_8(outer2_10, { badge: outer1_0 });
    };
    obj.onButtonPress = function onButtonPress() {
      outer1_2(outer2_7.TAKE_ACTION);
      let obj = tieredTenureBadgeData(table[13]);
      obj = { screen: outer2_6.PREMIUM };
      obj.openUserSettings(obj);
    };
    const intl3 = tieredTenureBadgeData(_undefined[12]).intl;
    obj.buttonLabel = intl3.string(tieredTenureBadgeData(_undefined[12]).t.RzWDqY);
    obj.buttonVariant = "experimental_premium-primary";
    return obj;
  }, items2);
  const obj3 = tieredTenureBadgeData(8417);
  const coachmark = tieredTenureBadgeData(8406).useCoachmark(targetRef, memo);
  return null;
};
