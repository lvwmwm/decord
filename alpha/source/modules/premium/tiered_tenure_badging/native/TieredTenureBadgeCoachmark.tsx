// Module ID: 11449
// Function ID: 11450
// Name: TieredTenureBadgeCoachmark
// Dependencies: [32, 19, 17, 1072, 4860, 21, 5014, 11418, 5717, 7781, 4847, 7569, 1113, 7563, 9954, 2]
// Exports: default

// Module 11449 (TieredTenureBadgeCoachmark)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1113 */;
import dismissible_content from "dismissible_content" /* 4847 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import useMobileTenureBadgeImages2 from "useMobileTenureBadgeImages" /* 11418 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
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
  let obj = tieredTenureBadgeData(7781);
  const tieredTenureBadge = obj.getTieredTenureBadge(badgeId);
  tieredTenureBadgeData = null;
  if (null != tieredTenureBadge) {
    const tmpResult = tieredTenureBadgeData(7781);
    tieredTenureBadgeData = tmpResult.getTieredTenureBadgeData(tieredTenureBadge);
  }
  if (null != tieredTenureBadgeData) {
    const items = [tmp(4847).DismissibleContent.TIERED_TENURE_BADGE_COACHMARK];
    items1 = items;
  } else {
    items1 = [];
  }
  const tmpResult3 = tieredTenureBadgeData(7569);
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
  const tmpResult4 = tieredTenureBadgeData(9954);
  const coachmark = tmpResult4.useCoachmark(targetRef, memo);
  return null;
};
