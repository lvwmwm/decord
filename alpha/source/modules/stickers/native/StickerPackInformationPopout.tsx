// Module ID: 10280
// Function ID: 10281
// Name: StickerPackInformationPopout
// Dependencies: [19, 17, 21, 5014, 575, 6560, 1113, 5624, 6980, 2]
// Exports: default, doesStickerPackHavePopoutInformation

// Module 10280 (StickerPackInformationPopout)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import StickersUtils from "StickersUtils" /* 6560 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
let obj2;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { informationContainer: obj2, headerContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }, informationHeader: { lineHeight: 20 }, informationContentContainer: { flexDirection: "row" }, informationContent: { lineHeight: 20 }, informationContentDescription: { flex: 1, marginLeft: 5 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, width: "90%", marginHorizontal: "5%", padding: 16, borderRadius: nativeDefault.radii.xs, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.25, shadowRadius: 5 };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/stickers/native/StickerPackInformationPopout.tsx");

export default function StickerPackInformationPopout(stickerPack) {
  let Text2;
  let closure_0;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let items3;
  let obj6;
  let obj8;
  let onClose;
  let style;
  stickerPack = stickerPack.stickerPack;
  ({ onClose, style } = stickerPack);
  const tmp = closure_5();
  _require = tmp;
  let items = [];
  let obj = require("StickersUtils");
  if (obj.isStickerPackAnimated(stickerPack)) {
    let obj2 = { key: "animated", description: intl.string(require("intl").t.W11rMa) };
    const push = items.push;
    intl = tmp2(1113).intl;
    push(obj2);
  }
  let obj3 = { style: items1, children: items3 };
  items1 = [tmp.informationContainer, style];
  const obj4 = { style: tmp.headerContainer, children: items2 };
  const obj5 = { style: tmp.informationHeader, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl2.format(require("intl").t.XDm6yN, obj6) };
  const Text = tmp2(5624).Text;
  intl2 = tmp2(1113).intl;
  obj6 = { stickerPackName: stickerPack.name };
  items2 = [closure_3(Text, obj5), ];
  const obj7 = { onPress: onClose, accessibilityRole: "button", accessibilityLabel: intl3.string(require("intl").t.cpT0Cq), children: closure_3(Text2, obj8) };
  const PressableOpacity = tmp2(6980).PressableOpacity;
  intl3 = tmp2(1113).intl;
  obj8 = { variant: "text-md/bold", color: "text-brand", children: intl4.string(require("intl").t.cpT0Cq) };
  Text2 = tmp2(5624).Text;
  intl4 = tmp2(1113).intl;
  items2[1] = closure_3(PressableOpacity, obj7);
  items3 = [
    closure_4(View, obj4),
    items.map(function renderItem(children) {
      let items;
      let items1;
      const obj = { style: closure_0.informationContentContainer, children: items };
      items = [, ];
      const obj2 = { style: closure_0.informationContent, variant: "text-md/medium", color: "text-default", children: "\u2022" };
      items[0] = _false(Text_Text.Text, obj2);
      const obj3 = { style: items1, variant: "text-md/medium", color: "text-default", children: children.description };
      items1 = [, ];
      ({ informationContent: arr2[0], informationContentDescription: arr2[1] } = closure_0);
      items[1] = _false(Text_Text.Text, obj3);
      return React3(View, obj, children.key);
    })
  ];
  return closure_4(View, obj3);
};
export function doesStickerPackHavePopoutInformation(stickerPack) {
  let intl;
  const items = [];
  const obj = StickersUtils;
  if (obj.isStickerPackAnimated(stickerPack)) {
    const push = items.push;
    const obj2 = { key: "animated", description: intl.string(intl5.t.W11rMa) };
    intl = tmp(1113).intl;
    push(obj2);
  }
  return items.length > 0;
}
