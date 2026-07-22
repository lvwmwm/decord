// Module ID: 8568
// Function ID: 68090
// Name: CoachmarkImg
// Dependencies: []
// Exports: default

// Module 8568 (CoachmarkImg)
function CoachmarkImg(badge) {
  badge = badge.badge;
  const tmp = callback2();
  let obj = arg1(dependencyMap[7]);
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
    obj.children = jsx(importDefault(dependencyMap[8]), obj);
    tmp4 = <View {...obj} />;
  }
  return tmp4;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const UserSettingsSections = arg1(dependencyMap[3]).UserSettingsSections;
const ContentDismissActionType = arg1(dependencyMap[4]).ContentDismissActionType;
const jsx = arg1(dependencyMap[5]).jsx;
let closure_9 = arg1(dependencyMap[6]).createStyles({ image: {}, imageContainer: { unicodeVersion: true, y: true, isArray: true } });
const obj = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/premium/tiered_tenure_badging/native/TieredTenureBadgeCoachmark.tsx");

export default function TieredTenureBadgeCoachmark(arg0) {
  let badgeId;
  let targetRef;
  let arg1;
  let importDefault;
  let dependencyMap;
  ({ targetRef, badgeId } = arg0);
  const tieredTenureBadge = arg1(dependencyMap[9]).getTieredTenureBadge(badgeId);
  let tieredTenureBadgeData = null;
  if (null != tieredTenureBadge) {
    tieredTenureBadgeData = arg1(dependencyMap[9]).getTieredTenureBadgeData(tieredTenureBadge);
    const obj2 = arg1(dependencyMap[9]);
  }
  arg1 = tieredTenureBadgeData;
  if (null != tieredTenureBadgeData) {
    const items = [arg1(dependencyMap[10]).DismissibleContent.TIERED_TENURE_BADGE_COACHMARK];
    let items1 = items;
  } else {
    items1 = [];
  }
  const obj = arg1(dependencyMap[9]);
  const tmp7 = callback(arg1(dependencyMap[11]).useSelectedDismissibleContent(items1), 2);
  const first = tmp7[0];
  importDefault = first;
  dependencyMap = tmp9;
  const items2 = [tmp7[1], first, tieredTenureBadgeData];
  const memo = React.useMemo(() => {
    const obj = { offsetY: 12 };
    const intl = tieredTenureBadgeData(tmp9[12]).intl;
    obj.title = intl.string(tieredTenureBadgeData(tmp9[12]).t.Ajj8iG);
    const intl2 = tieredTenureBadgeData(tmp9[12]).intl;
    obj.description = intl2.string(tieredTenureBadgeData(tmp9[12]).t.WUNqD/);
    obj.position = "bottom";
    obj.visible = first === tieredTenureBadgeData(tmp9[10]).DismissibleContent.TIERED_TENURE_BADGE_COACHMARK;
    obj.onDismiss = function onDismiss() {
      callback2(constants2.USER_DISMISS);
    };
    obj.renderImgComponent = function renderImgComponent() {
      return callback3(closure_10, { badge: closure_0 });
    };
    obj.onButtonPress = function onButtonPress() {
      callback2(constants2.TAKE_ACTION);
      let obj = callback(callback2[13]);
      obj = { screen: constants.PREMIUM };
      obj.openUserSettings(obj);
    };
    const intl3 = tieredTenureBadgeData(tmp9[12]).intl;
    obj.buttonLabel = intl3.string(tieredTenureBadgeData(tmp9[12]).t.RzWDqY);
    obj.buttonVariant = "experimental_premium-primary";
    return obj;
  }, items2);
  const obj3 = arg1(dependencyMap[11]);
  const coachmark = arg1(dependencyMap[14]).useCoachmark(targetRef, memo);
  return null;
};
