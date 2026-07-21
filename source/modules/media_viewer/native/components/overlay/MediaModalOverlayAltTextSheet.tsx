// Module ID: 10848
// Function ID: 84271
// Name: MediaViewerAltTextSheet
// Dependencies: []
// Exports: default

// Module 10848 (MediaViewerAltTextSheet)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let obj = arg1(dependencyMap[2]);
obj = {};
obj = { padding: importDefault(dependencyMap[3]).space.PX_16 };
obj.container = obj;
let closure_3 = obj.createStyles(obj);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayAltTextSheet.tsx");

export default function MediaViewerAltTextSheet(description) {
  let obj = arg1(dependencyMap[4]);
  const messagePreviewCollapsedheight = obj.useMessagePreviewCollapsedheight();
  let obj1 = arg1(dependencyMap[5]);
  let num = 70;
  if (!obj1.useIsScreenLandscape()) {
    num = messagePreviewCollapsedheight + 20 + 50;
  }
  obj = {};
  obj = {};
  const intl = arg1(dependencyMap[8]).intl;
  obj.title = intl.string(arg1(dependencyMap[8]).t.J3IOO1);
  obj.header = jsx(arg1(dependencyMap[7]).BottomSheetTitleHeader, obj);
  const items = [callback().container, ];
  obj1 = { minHeight: num };
  items[1] = obj1;
  obj.contentStyles = items;
  const obj2 = { 0: "<string:3377594370>", 9223372036854775807: "<string:297260389>", children: description.description };
  obj.children = jsx(arg1(dependencyMap[9]).Text, obj2);
  return jsx(arg1(dependencyMap[6]).BottomSheet, obj);
};
