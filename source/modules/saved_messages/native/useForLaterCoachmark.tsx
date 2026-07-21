// Module ID: 15002
// Function ID: 112963
// Name: CoachmarkImg
// Dependencies: []
// Exports: default

// Module 15002 (CoachmarkImg)
function CoachmarkImg() {
  const obj = { source: importDefault(dependencyMap[7]), style: callback2().imageContainer };
  return <Image {...obj} />;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const Image = arg1(dependencyMap[2]).Image;
const ContentDismissActionType = arg1(dependencyMap[3]).ContentDismissActionType;
const jsx = arg1(dependencyMap[4]).jsx;
let closure_8 = arg1(dependencyMap[5]).DismissibleContent.FOR_LATER_NOTIFICATIONS_COACHMARK;
let closure_9 = arg1(dependencyMap[6]).createStyles({ imageContainer: { bhk: true, bic: "/assets/design/components/Icon/native/redesign/generated/images" } });
const obj = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/saved_messages/native/useForLaterCoachmark.tsx");

export default function useForLaterCoachmark(targetRef) {
  if (obj.useConfig({ location: "forLaterCoachmark" }).enabled) {
    const items = [closure_8];
    let items1 = items;
  } else {
    items1 = [];
  }
  const obj = importDefault(dependencyMap[8]);
  const tmp2 = callback(arg1(dependencyMap[9]).useSelectedDismissibleContent(items1, undefined, true), 2);
  const first = tmp2[0];
  const arg1 = first;
  const importDefault = tmp4;
  const items2 = [tmp2[1], first];
  const memo = React.useMemo(() => {
    const obj = {};
    const intl = first(closure_2[10]).intl;
    obj.title = intl.string(first(closure_2[10]).t.qPbFK2);
    const intl2 = first(closure_2[10]).intl;
    obj.description = intl2.string(first(closure_2[10]).t.URrJq1);
    obj.position = "bottom";
    obj.visible = first === closure_8;
    obj.onDismiss = function onDismiss() {
      callback(constants.USER_DISMISS);
    };
    obj.renderImgComponent = function renderImgComponent() {
      return callback2(closure_10, {});
    };
    return obj;
  }, items2);
  const obj2 = arg1(dependencyMap[9]);
  const coachmark = arg1(dependencyMap[11]).useCoachmark(targetRef, memo);
  return tmp2[1];
};
