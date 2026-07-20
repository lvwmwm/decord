// Module ID: 13739
// Function ID: 103956
// Name: OneWayToTwoWayNewTag
// Dependencies: []
// Exports: OneWayToTwoWayLinkUpsell

// Module 13739 (OneWayToTwoWayNewTag)
function OneWayToTwoWayNewTag(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const arg1 = markAsDismissed;
  const items = [markAsDismissed];
  const effect = React.useEffect(() => markAsDismissed(constants.UNKNOWN), items);
  const tmp = callback3();
  return callback(arg1(dependencyMap[8]).NewTag, { containerStyle: callback3().newContainer, variant: "text-xs/bold" });
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const Fonts = arg1(dependencyMap[2]).Fonts;
const ContentDismissActionType = arg1(dependencyMap[3]).ContentDismissActionType;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_NORMAL, borderRadius: importDefault(dependencyMap[6]).radii.sm };
obj.container = obj;
obj.header = {};
obj.titleContainer = { backgroundColor: "innocent", height: "innocent" };
const obj1 = {};
const tmp2 = arg1(dependencyMap[4]);
const merged = Object.assign(importDefault(dependencyMap[7])(Fonts.PRIMARY_SEMIBOLD, importDefault(dependencyMap[6]).colors.TEXT_DEFAULT, 16));
obj.title = obj1;
const importDefaultResult = importDefault(dependencyMap[7]);
const obj2 = {};
const merged1 = Object.assign(importDefault(dependencyMap[7])(Fonts.PRIMARY_MEDIUM, importDefault(dependencyMap[6]).colors.TEXT_DEFAULT, 14));
obj.body = obj2;
obj.newContainer = {};
obj.reconnectButton = { marginTop: 8 };
let closure_8 = obj.createStyles(obj);
const importDefaultResult1 = importDefault(dependencyMap[7]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/user_settings/connections/native/two_way_link/OneWayToTwoWayLinkUpsell.tsx");

export const OneWayToTwoWayLinkUpsell = function OneWayToTwoWayLinkUpsell(newIndicatorDismissibleContent) {
  let body;
  let img;
  let onPress;
  let title;
  newIndicatorDismissibleContent = newIndicatorDismissibleContent.newIndicatorDismissibleContent;
  const arg1 = newIndicatorDismissibleContent;
  ({ title, body, img, onPress } = newIndicatorDismissibleContent);
  const tmp = callback3();
  let obj = { style: tmp.container };
  obj = { style: tmp.header };
  obj = { style: tmp.titleContainer };
  const items = [newIndicatorDismissibleContent];
  const items1 = [
    callback(importDefault(dependencyMap[9]), {
      contentTypes: items,
      children(visibleContent) {
        let tmp2 = null;
        if (visibleContent.visibleContent === newIndicatorDismissibleContent) {
          const obj = { markAsDismissed: tmp };
          tmp2 = callback(closure_9, obj);
        }
        return tmp2;
      }
    }),
    callback(arg1(dependencyMap[10]).Text, { style: tmp.title, variant: "text-md/semibold", children: title })
  ];
  obj.children = items1;
  const items2 = [callback2(View, obj), img];
  obj.children = items2;
  const items3 = [callback2(View, obj), callback(arg1(dependencyMap[10]).Text, { style: tmp.body, variant: "text-sm/medium", children: body }), ];
  const obj4 = { style: tmp.reconnectButton };
  const obj5 = {};
  const intl = arg1(dependencyMap[12]).intl;
  obj5.text = intl.string(arg1(dependencyMap[12]).t.vD60Pv);
  obj5.onPress = onPress;
  obj4.children = callback(arg1(dependencyMap[11]).Button, obj5);
  items3[2] = callback(View, obj4);
  obj.children = items3;
  return callback2(View, obj);
};
