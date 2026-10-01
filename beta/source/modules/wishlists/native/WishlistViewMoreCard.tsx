// Module ID: 10504
// Function ID: 10505
// Name: WishlistViewMoreCard
// Dependencies: [19, 17, 21, 4836, 576, 1115, 10499, 4832, 2]
// Exports: default

// Module 10504 (WishlistViewMoreCard)
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import WishlistItemCardDefault from "WishlistItemCard" /* 10499 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ Pressable: c3, StyleSheet: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles(() => {
  let obj2;
  const obj = { moreOverlay: obj2 };
  obj2 = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, justifyContent: "center", alignItems: "center" };
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  return obj;
});
const result = size.fileFinishedImporting("modules/wishlists/native/WishlistViewMoreCard.tsx");

export default function WishlistViewMoreCard(recipientName) {
  let Text;
  let intl;
  let intl2;
  let items;
  let obj3;
  let onPress;
  let overflowCount;
  let sku;
  recipientName = recipientName.recipientName;
  ({ sku, size, overflowCount, onPress } = recipientName);
  const obj = { onPress, accessibilityLabel: intl.formatToPlainString(intl3.t["8uYD+I"], { username: recipientName }), children: items };
  const tmp = closure_8();
  intl = intl3.intl;
  items = [metroRequire(WishlistItemCardDefault, { accessibilityHidden: true, sku, size, recipientName }), ];
  const obj2 = { style: tmp.moreOverlay, children: metroRequire(Text, obj3) };
  obj3 = { variant: "text-md/semibold", color: "text-overlay-light", children: intl2.format(intl3.t.F6iMs4, { count: overflowCount }) };
  Text = Text_Text.Text;
  intl2 = intl3.intl;
  items[1] = metroRequire(hasOwnProperty, obj2);
  return metroImportDefault(_false, obj);
};
