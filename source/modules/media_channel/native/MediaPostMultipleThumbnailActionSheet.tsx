// Module ID: 9552
// Function ID: 74446
// Name: MediaPostThumbnailActionSheet
// Dependencies: []
// Exports: default

// Module 9552 (MediaPostThumbnailActionSheet)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const ContentDismissActionType = arg1(dependencyMap[2]).ContentDismissActionType;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH };
obj.container = obj;
const obj1 = { paddingTop: false, justifyContent: false, alignItems: false, flexDirection: false, backgroundColor: importDefault(dependencyMap[5]).colors.TEXT_FEEDBACK_WARNING, borderRadius: importDefault(dependencyMap[5]).radii.sm };
obj.topContainer = obj1;
const tmp3 = arg1(dependencyMap[3]);
obj.setAsThumbnailContainer = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_NORMAL, borderRadius: importDefault(dependencyMap[5]).radii.sm };
obj.contentContainer = { parent: null, bm: null };
obj.title = { marginTop: 24 };
obj.description = { textAlign: "center" };
let closure_7 = obj.createStyles(obj);
const obj2 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_NORMAL, borderRadius: importDefault(dependencyMap[5]).radii.sm };
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/media_channel/native/MediaPostMultipleThumbnailActionSheet.tsx");

export default function MediaPostThumbnailActionSheet(markAsDismissed) {
  const arg1 = markAsDismissed.markAsDismissed;
  const tmp = callback3();
  let obj = {
    backdropOpacity: 0.8,
    onDismiss() {
      return markAsDismissed(constants.UNKNOWN);
    }
  };
  obj = { style: tmp.container };
  obj = { contentContainerStyle: items };
  const items = [tmp.contentContainer, { paddingBottom: importDefault(dependencyMap[6])().bottom }];
  const obj1 = { style: tmp.topContainer };
  const obj2 = { style: tmp.setAsThumbnailContainer };
  const obj3 = { hasMaxConnections: null, isBoostOnlySubscription: "text-sm/semibold" };
  const intl = arg1(dependencyMap[10]).intl;
  obj3.children = intl.string(arg1(dependencyMap[10]).t.ews2pj);
  const items1 = [callback(arg1(dependencyMap[9]).Text, obj3), callback(arg1(dependencyMap[11]).Checkbox, { selected: true })];
  obj2.children = items1;
  obj1.children = callback2(View, obj2);
  const items2 = [callback(View, obj1), , , , , ];
  const obj4 = { style: tmp.title };
  const intl2 = arg1(dependencyMap[10]).intl;
  obj4.children = intl2.string(arg1(dependencyMap[10]).t.WJisip);
  items2[1] = callback(arg1(dependencyMap[9]).Text, obj4);
  items2[2] = callback(arg1(dependencyMap[11]).Spacer, { size: 12 });
  const obj5 = { hasMaxConnections: 1, isBoostOnlySubscription: 1, style: tmp.description };
  const intl3 = arg1(dependencyMap[10]).intl;
  obj5.children = intl3.string(arg1(dependencyMap[10]).t.X6ZH6d);
  items2[3] = callback(arg1(dependencyMap[9]).Text, obj5);
  items2[4] = callback(arg1(dependencyMap[11]).Spacer, { size: 48 });
  const obj6 = {};
  const intl4 = arg1(dependencyMap[10]).intl;
  obj6.text = intl4.string(arg1(dependencyMap[10]).t.NX+WJN);
  obj6.grow = true;
  obj6.onPress = function onPress() {
    return markAsDismissed(constants.UNKNOWN);
  };
  items2[5] = callback(arg1(dependencyMap[12]).Button, obj6);
  obj.children = items2;
  obj.children = callback2(arg1(dependencyMap[8]).BottomSheetScrollView, obj);
  obj.children = callback(View, obj);
  return callback(arg1(dependencyMap[7]).BottomSheet, obj);
};
