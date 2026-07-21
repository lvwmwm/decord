// Module ID: 11790
// Function ID: 91534
// Dependencies: []

// Module 11790
const importAllResult = importAll(dependencyMap[0]);
({ View: closure_3, Image: closure_4 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[3]).createStyles({ container: {}, image: {}, title: {}, subtext: {} });
const obj2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo((topViewHeight) => {
  let num = topViewHeight.topViewHeight;
  if (num === undefined) {
    num = 0;
  }
  const tagFilter = topViewHeight.tagFilter;
  const tmp = callback();
  let obj = arg1(dependencyMap[4]);
  const rect = importDefault(dependencyMap[5])();
  obj = { style: items };
  const items = [tmp.container, ];
  obj = { marginBottom: rect.bottom + rect.top + num };
  items[1] = obj;
  const obj1 = {};
  let obj4 = arg1(dependencyMap[4]);
  if (obj4.isThemeLight(obj.useThemeContext().theme)) {
    let tmp7Result = tmp7(tmp8[6]);
  } else {
    tmp7Result = tmp7(tmp8[7]);
  }
  obj1.source = tmp7Result;
  obj1.style = tmp.image;
  const items1 = [closure_5(closure_4, obj1), , ];
  const obj2 = { style: tmp.title };
  const intl = arg1(dependencyMap[9]).intl;
  if (tagFilter.size > 0) {
    const obj3 = { numTags: tagFilter.size };
    let formatToPlainStringResult = intl.formatToPlainString(tmp11(tmp12[9]).t.lvPci0, obj3);
  } else {
    formatToPlainStringResult = intl.string(tmp11(tmp12[9]).t.PwTMG0);
  }
  obj2.children = formatToPlainStringResult;
  items1[1] = closure_5(arg1(dependencyMap[8]).Text, obj2);
  obj4 = { style: tmp.subtext };
  const intl2 = arg1(dependencyMap[9]).intl;
  const formatToPlainString = intl2.formatToPlainString;
  const t = arg1(dependencyMap[9]).t;
  if (tagFilter.size > 0) {
    const obj5 = { numTags: tagFilter.size };
    let formatToPlainStringResult1 = formatToPlainString(t.AAeye1, obj5);
  } else {
    const obj6 = { channelName: topViewHeight.channelName };
    formatToPlainStringResult1 = formatToPlainString(t.YtsXFD, obj6);
  }
  obj4.children = formatToPlainStringResult1;
  items1[2] = closure_5(arg1(dependencyMap[8]).Text, obj4);
  obj.children = items1;
  return closure_6(closure_3, obj);
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/forums/native/ForumChannelEmptyState.tsx");

export default memoResult;
