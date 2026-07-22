// Module ID: 12213
// Function ID: 93789
// Name: WidgetPreview
// Dependencies: []
// Exports: default

// Module 12213 (WidgetPreview)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: {}, title: {} };
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.USER_PROFILE_CONTAINER_BACKGROUND };
obj.card = obj;
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsWidgetPreviewElement.tsx");

export default function WidgetPreview(widget) {
  widget = widget.widget;
  const tmp = callback3();
  let obj = arg1(dependencyMap[6]);
  let tmp3 = null;
  if (obj.isGameWidget(widget)) {
    tmp3 = null;
    if (0 !== widget.games.length) {
      obj = { style: tmp.container };
      obj = { 9223372036854775807: true, 0: true, 0: true, style: tmp.title };
      const intl = arg1(dependencyMap[8]).intl;
      obj.children = intl.string(arg1(dependencyMap[8]).t.SpsnDY).toUpperCase();
      const items = [callback(arg1(dependencyMap[7]).Text, obj), ];
      const obj1 = { userId: widget.userId, widget, disableInteraction: true };
      const items1 = [tmp2.card, tmp.card];
      obj1.cardStyle = items1;
      items[1] = callback(arg1(dependencyMap[9]).WidgetSection, obj1);
      obj.children = items;
      tmp3 = callback2(View, obj);
      const str = intl.string(arg1(dependencyMap[8]).t.SpsnDY);
    }
  }
  return tmp3;
};
