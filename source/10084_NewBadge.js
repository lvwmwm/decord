// Module ID: 10084
// Function ID: 78117
// Name: NewBadge
// Dependencies: []
// Exports: ConversationCoachmark

// Module 10084 (NewBadge)
function NewBadge() {
  let obj = { style: callback2().badge };
  obj = {};
  const intl = arg1(dependencyMap[9]).intl;
  obj.children = intl.string(arg1(dependencyMap[9]).t.c2GSIl);
  obj.children = jsx(arg1(dependencyMap[8]).Text, obj);
  return <View {...obj} />;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const ContentDismissActionType = arg1(dependencyMap[3]).ContentDismissActionType;
const jsx = arg1(dependencyMap[4]).jsx;
const TOPICAL_NAVIGATION_HEADER_COACHMARK = arg1(dependencyMap[5]).DismissibleContent.TOPICAL_NAVIGATION_HEADER_COACHMARK;
const items = [TOPICAL_NAVIGATION_HEADER_COACHMARK];
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BRAND, paddingVertical: 2, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_8, borderRadius: importDefault(dependencyMap[7]).radii.round };
obj.badge = obj;
obj.coachmarkWrapper = { marginRight: importDefault(dependencyMap[7]).space.PX_12 };
let closure_9 = obj.createStyles(obj);
const obj1 = { marginRight: importDefault(dependencyMap[7]).space.PX_12 };
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/conversations/components/native/ConversationCoachmark.tsx");

export const ConversationCoachmark = function ConversationCoachmark(arg0) {
  let children;
  let isLast;
  ({ children, isLast } = arg0);
  const ref = React.useRef(null);
  let obj = arg1(dependencyMap[10]);
  const tmp3 = callback(obj.useSelectedDismissibleContent(items), 2);
  const first = tmp3[0];
  const arg1 = first;
  const dependencyMap = tmp5;
  const items = [tmp3[1], first];
  const memo = React.useMemo(() => {
    const obj = {};
    const intl = first(tmp5[9]).intl;
    obj.title = intl.string(first(tmp5[9]).t.UcQjDe);
    const intl2 = first(tmp5[9]).intl;
    obj.description = intl2.string(first(tmp5[9]).t.QeJIbA);
    obj.position = "bottom";
    obj.visible = first === closure_7;
    obj.onDismiss = function onDismiss() {
      callback(constants.USER_DISMISS);
    };
    obj.renderImgComponent = function renderImgComponent() {
      return callback2(closure_10, {});
    };
    return obj;
  }, items);
  const tmp = callback2();
  const coachmark = arg1(dependencyMap[11]).useCoachmark(ref, memo);
  const items1 = [tmp3[1]];
  obj = {};
  let coachmarkWrapper;
  const callback = React.useCallback(() => {
    tmp5(constants.USER_DISMISS);
  }, items1);
  if (!isLast) {
    coachmarkWrapper = tmp.coachmarkWrapper;
  }
  obj.style = coachmarkWrapper;
  obj = { ref, children: children(callback) };
  obj.children = <View {...obj} />;
  return <View {...obj} />;
};
