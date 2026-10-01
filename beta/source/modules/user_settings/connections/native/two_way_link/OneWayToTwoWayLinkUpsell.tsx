// Module ID: 14502
// Function ID: 14503
// Name: OneWayToTwoWayLinkUpsell
// Dependencies: [19, 17, 1074, 2042, 21, 4836, 576, 5836, 1177, 10088, 4832, 5281, 1115, 2]
// Exports: OneWayToTwoWayLinkUpsell

// Module 14502 (OneWayToTwoWayLinkUpsell)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import SelectedDismissibleContentDefault from "SelectedDismissibleContent" /* 10088 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import TextStyles_mod from "TextStyles" /* 5836 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
function OneWayToTwoWayNewTag(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const items = [markAsDismissed];
  const tmp = closure_8();
  const effect = react.useEffect(() => markAsDismissed(ContentDismissActionType.UNKNOWN), items);
  const obj = { containerStyle: tmp.newContainer, variant: "text-xs/bold" };
  return closure_6(markAsDismissed(1177).NewTag, obj);
}
const View = react_native.View;
const Fonts = Constants.Fonts;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: { flexDirection: "row", marginBottom: 4, alignItems: "center" }, titleContainer: { flexGrow: 1, flexShrink: 1 }, title: obj3, body: obj4, newContainer: { paddingHorizontal: 6, width: "auto", alignSelf: "flex-start", marginBottom: 4 }, reconnectButton: { marginTop: 8 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, margin: 16, padding: 12, borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj3 = {};
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.TEXT_DEFAULT, 16));
obj4 = {};
TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_DEFAULT, 14));
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/OneWayToTwoWayLinkUpsell.tsx");

export const OneWayToTwoWayLinkUpsell = function OneWayToTwoWayLinkUpsell(newIndicatorDismissibleContent) {
  let Button;
  let body;
  let img;
  let intl;
  let items;
  let items1;
  let items2;
  let items3;
  let obj8;
  let onPress;
  let title;
  newIndicatorDismissibleContent = newIndicatorDismissibleContent.newIndicatorDismissibleContent;
  ({ title, body, img, onPress } = newIndicatorDismissibleContent);
  const tmp = closure_8();
  let obj = { style: tmp.container, children: items3 };
  const obj4 = {
    contentTypes: items,
    children(visibleContent) {
      let tmp2 = null;
      if (visibleContent.visibleContent === newIndicatorDismissibleContent) {
        const obj = { markAsDismissed: tmp };
        tmp2 = metroRequire(OneWayToTwoWayNewTag, obj);
      }
      return tmp2;
    }
  };
  items = [newIndicatorDismissibleContent];
  const obj2 = { style: tmp.header, children: items2 };
  const obj3 = { style: tmp.titleContainer, children: items1 };
  items1 = [closure_6(SelectedDismissibleContentDefault, obj4), ];
  const obj5 = { style: tmp.title, variant: "text-md/semibold", children: title };
  items1[1] = closure_6(newIndicatorDismissibleContent(4832).Text, obj5);
  items2 = [closure_7(View, obj3), img];
  items3 = [closure_7(View, obj2), , ];
  const obj6 = { style: tmp.body, variant: "text-sm/medium", children: body };
  items3[1] = closure_6(newIndicatorDismissibleContent(4832).Text, obj6);
  const obj7 = { style: tmp.reconnectButton, children: closure_6(Button, obj8) };
  obj8 = { text: intl.string(newIndicatorDismissibleContent(1115).t.vD60Pv), onPress };
  Button = newIndicatorDismissibleContent(5281).Button;
  intl = newIndicatorDismissibleContent(1115).intl;
  items3[2] = closure_6(View, obj7);
  return closure_7(View, obj);
};
