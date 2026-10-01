// Module ID: 10651
// Function ID: 10652
// Name: TieredTenureBadgeCoachmark
// Dependencies: [32, 19, 17, 1074, 2042, 21, 4836, 10620, 5899, 7048, 2029, 6806, 1115, 6800, 10589, 2]
// Exports: default

// Module 10651 (TieredTenureBadgeCoachmark)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import intl4 from "intl" /* 1115 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import useMobileTenureBadgeImages2 from "useMobileTenureBadgeImages" /* 10620 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

function CoachmarkImg(badge) {
  let medium;
  badge = badge.badge;
  const tmp = closure_9();
  let id;
  const useMobileTenureBadgeImages = useMobileTenureBadgeImages2.useMobileTenureBadgeImages;
  useMobileTenureBadgeImages2;
  if (badge != null) {
    id = badge.id;
  }
  const mobileTenureBadgeImages = useMobileTenureBadgeImages(id);
  if (mobileTenureBadgeImages != null) {
    medium = mobileTenureBadgeImages.medium;
  }
  let tmp6 = null;
  if (null != badge) {
    tmp6 = <View style={tmp.imageContainer}>{null}</View>;
    const obj3 = { uri: medium };
  }
  return tmp6;
}
const View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let closure_9 = createStyles.createStyles({ image: { width: "100%", height: "100%" }, imageContainer: { width: 110, height: 72, marginTop: 16 } });
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/native/TieredTenureBadgeCoachmark.tsx");

export default function TieredTenureBadgeCoachmark(arg0) {
  let badgeId;
  let closure_2;
  let constants2;
  let items1;
  let targetRef;
  let tieredTenureBadgeData;
  let first;
  dependencyMap = undefined;
  ({ targetRef, badgeId } = arg0);
  let obj = tieredTenureBadgeData(7048);
  const tieredTenureBadge = obj.getTieredTenureBadge(badgeId);
  tieredTenureBadgeData = null;
  if (null != tieredTenureBadge) {
    const tmpResult = tieredTenureBadgeData(7048);
    tieredTenureBadgeData = tmpResult.getTieredTenureBadgeData(tieredTenureBadge);
  }
  if (null != tieredTenureBadgeData) {
    const items = [tmp(2029).DismissibleContent.TIERED_TENURE_BADGE_COACHMARK];
    items1 = items;
  } else {
    items1 = [];
  }
  const tmpResult3 = tieredTenureBadgeData(6806);
  const tmp5 = _slicedToArray(tmpResult3.useSelectedDismissibleContent(items1), 2);
  first = tmp5[0];
  dependencyMap = tmp7;
  const items2 = [tmp5[1], first, tieredTenureBadgeData];
  const memo = react.useMemo(() => {
    let badge;
    let intl;
    let intl2;
    let intl3;
    let obj = {
      offsetY: 12,
      title: intl.string(intl4.t.Ajj8iG),
      description: intl2.string(intl4.t["WUNqD/"]),
      position: "bottom",
      visible: first === dismissible_content.DismissibleContent.TIERED_TENURE_BADGE_COACHMARK,
      onDismiss() {
        closure_1_2(constants2.USER_DISMISS);
      },
      renderImgComponent() {
        return <CoachmarkImg badge={badge} />;
      },
      onButtonPress() {
        closure_1_2(constants2.TAKE_ACTION);
        const obj = tieredTenureBadgeData(closure_2[13]);
        const obj2 = { screen: constants.PREMIUM };
        obj.openUserSettings(obj2);
      },
      buttonLabel: intl3.string(intl4.t.RzWDqY),
      buttonVariant: "experimental_premium-primary"
    };
    intl = intl4.intl;
    intl2 = intl4.intl;
    intl3 = intl4.intl;
    return obj;
  }, items2);
  const tmpResult4 = tieredTenureBadgeData(10589);
  const coachmark = tmpResult4.useCoachmark(targetRef, memo);
  return null;
};
