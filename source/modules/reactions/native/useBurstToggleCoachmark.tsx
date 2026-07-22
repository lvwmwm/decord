// Module ID: 9334
// Function ID: 72951
// Name: EducationCoachmarkImg
// Dependencies: []
// Exports: default

// Module 9334 (EducationCoachmarkImg)
function EducationCoachmarkImg() {
  let obj = { style: callback2().upsellImageContainer };
  obj = { color: importDefault(dependencyMap[8]).colors.WHITE, size: "md" };
  obj.children = jsx(arg1(dependencyMap[9]).SuperReactionIcon, obj);
  return <View {...obj} />;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
const ContentDismissActionType = arg1(dependencyMap[4]).ContentDismissActionType;
const jsx = arg1(dependencyMap[5]).jsx;
let closure_9 = arg1(dependencyMap[6]).DismissibleContent.SUPER_REACTION_TOGGLE_EDUCATION_MOBILE;
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { channelId: null, messageId: null, emoji: null, reactions: null, isSelectedBurst: null, flexDirection: null, alignItems: null, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BRAND, borderRadius: importDefault(dependencyMap[8]).radii.round };
obj.upsellImageContainer = obj;
let closure_10 = obj.createStyles(obj);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/reactions/native/useBurstToggleCoachmark.tsx");

export default function useBurstToggleCoachmark(targetRef) {
  const items = [closure_6];
  const stateFromStores = arg1(dependencyMap[10]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = arg1(dependencyMap[10]);
  if (obj2.isPremium(stateFromStores)) {
    const items1 = [closure_9];
    let items2 = items1;
  } else {
    items2 = [];
  }
  const obj2 = arg1(dependencyMap[11]);
  const tmp3 = callback(arg1(dependencyMap[12]).useSelectedDismissibleContent(items2), 2);
  const first = tmp3[0];
  const arg1 = first;
  const importDefault = tmp5;
  const items3 = [first, tmp3[1]];
  const memo = React.useMemo(() => {
    const obj = {};
    const intl = first(closure_2[13]).intl;
    obj.description = intl.string(first(closure_2[13]).t.nyYohm);
    obj.onDismiss = function onDismiss() {
      callback(constants.UNKNOWN);
    };
    obj.position = "bottom";
    obj.renderImgComponent = function renderImgComponent() {
      return callback2(closure_11, {});
    };
    const intl2 = first(closure_2[13]).intl;
    obj.title = intl2.string(first(closure_2[13]).t.ORK94p);
    obj.visible = first === closure_9;
    return obj;
  }, items3);
  const obj3 = arg1(dependencyMap[12]);
  const coachmark = arg1(dependencyMap[14]).useCoachmark(targetRef, memo);
  return tmp3[1];
};
