// Module ID: 16823
// Function ID: 16824
// Name: UserProfileWidgetOptionAddButton
// Dependencies: [19, 17, 21, 575, 5143, 15181, 5854, 16824, 11686, 5763, 2]
// Exports: default

// Module 16823 (UserProfileWidgetOptionAddButton)
import nativeDefault from "native" /* 575 */;
import useGameNameAndCoverImageDefault from "useGameNameAndCoverImage" /* 15181 */;
import AddWidgetButtonConfig from "AddWidgetButtonConfig" /* 16824 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let tmp2;
const FastImageDefault = tmp2(5854);
function PlaceholderCover(arg0) {
  let gameId;
  let items;
  let obj3;
  let style;
  let tmp4Result;
  ({ gameId, style } = arg0);
  const tmp = closure_8();
  const coverImageUrl = useGameNameAndCoverImageDefault(gameId).coverImageUrl;
  const obj = { style: items, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: tmp4Result };
  items = [tmp.cover, style];
  tmp4Result = null != coverImageUrl;
  const tmp5 = React3;
  if (tmp4Result) {
    const obj2 = { source: obj3, style: tmp.coverImage };
    obj3 = { uri: coverImageUrl };
    tmp4Result = tmp4(FastImageDefault, obj2);
  }
  return hasOwnProperty(tmp5, obj);
}
function PlaceholderCoverGrid(gameIds) {
  let substr;
  gameIds = gameIds.gameIds;
  let closure_0 = tmp;
  let obj = {
    style: closure_8().coverRow,
    children: substr.map((gameId, index) => {
      let obj2;
      const obj = { gameId, style: obj2 };
      obj2 = { width: `${100 / (closure_0 + 0.1 * (closure_0 - 1))}%` };
      return hasOwnProperty(PlaceholderCover, obj, index);
    })
  };
  substr = gameIds.slice(0, tmp);
  return closure_5(closure_4, obj);
}
function PlaceholderDetailsCard(variant) {
  let items;
  let items1;
  let items2;
  let obj3;
  let obj5;
  variant = variant.variant;
  const gameId = variant.gameId;
  const tmp = closure_8();
  const sum = tmp2 + 0.1 * (tmp2 - 1);
  let str = "50%";
  if ("compact" === variant) {
    str = "30%";
  }
  const obj2 = { gameId, style: obj3 };
  const obj = { style: tmp.detailsCard, children: items };
  obj3 = { width: `${100 / tmp3}%` };
  items = [hasOwnProperty(PlaceholderCover, obj2), , ];
  const obj4 = { style: obj5 };
  obj5 = { width: `${15.000000000000002 / tmp3}%` };
  items[1] = hasOwnProperty(React3, obj4);
  const obj7 = { style: items1 };
  items1 = [tmp.textBar, { width: str }];
  const obj6 = { style: tmp.textColumn, children: items2 };
  items2 = [hasOwnProperty(React3, obj7), , ];
  const obj8 = { style: tmp.textBar };
  items2[1] = hasOwnProperty(React3, obj8);
  const obj9 = { style: tmp.textBar };
  items2[2] = hasOwnProperty(React3, obj9);
  items[2] = metroRequire(React3, obj6);
  return metroRequire(React3, obj);
}
({ Pressable: c3, StyleSheet, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = { default: 4, compact: 3 };
const PX_8 = nativeDefault.space.PX_8;
let createStyles = createStyles_mod;
let obj = { button: obj2, coverRow: { flexDirection: "row", justifyContent: "space-between" }, cover: obj3, coverImage: obj4, detailsCard: { flexDirection: "row", alignItems: "center" }, textColumn: { flex: 1, flexDirection: "column", justifyContent: "center", gap: PX_8 }, textBar: obj5, overlay: obj6 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderRadius: nativeDefault.radii.md, overflow: "hidden", alignSelf: "stretch" };
createStyles = createStyles.createStyles;
obj3 = { aspectRatio: 0.75, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, overflow: "hidden" };
obj4 = { opacity: 0.2 };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj5 = { height: 12, borderRadius: 6, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj6 = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8 };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetOptionAddButton.tsx");

export default function UserProfileWidgetOptionAddButton(onPress) {
  let closure_129_0;
  let items;
  let items1;
  let obj2;
  let padding;
  let tmp6Result;
  let tmp9;
  let variant;
  let widget;
  ({ widget, variant } = onPress);
  if (variant === undefined) {
    variant = "default";
  }
  ({ width: closure_129_0, padding } = onPress);
  if (padding === undefined) {
    const tmp = importDefault;
    let tmp2 = dependencyMap;
    padding = nativeDefault.space.PX_12;
  }
  onPress = onPress.onPress;
  const tmp3 = closure_8();
  let closure_2 = tmp3;
  let obj = {
    onPress,
    accessibilityRole: "button",
    accessibilityLabel: obj2.getAddWidgetAriaLabel(widget),
    style(pressed) {
      pressed = pressed.pressed;
      const items = [button.button, , , ];
      const obj = { padding };
      items[1] = obj;
      let tmp2 = null != closure_1_0;
      if (tmp2) {
        tmp2 = { width: tmp };
        const obj2 = { width: tmp };
      }
      items[2] = tmp2;
      if (pressed) {
        pressed = { opacity: 0.8 };
      }
      items[3] = pressed;
      return items;
    },
    children: items
  };
  obj2 = AddWidgetButtonConfig;
  const obj3 = AddWidgetButtonConfig;
  const addWidgetPlaceholder = obj3.getAddWidgetPlaceholder(widget);
  const variant2 = addWidgetPlaceholder.variant;
  const tmp5 = _false;
  if ("grid" === variant2) {
    const obj4 = { gameIds: addWidgetPlaceholder.applicationIds, variant };
    tmp9 = hasOwnProperty(PlaceholderCoverGrid, obj4);
  } else {
    tmp9 = null;
    if ("details" === variant2) {
      const obj5 = { gameId: addWidgetPlaceholder.applicationId, variant };
      tmp9 = hasOwnProperty(PlaceholderDetailsCard, obj5);
    }
  }
  items = [tmp9, ];
  const obj6 = { style: tmp3.overlay, children: items1 };
  const obj7 = { size: "md", color: nativeDefault.colors.TEXT_DEFAULT };
  const CirclePlusIcon = tmp6(11686).CirclePlusIcon;
  items1 = [hasOwnProperty(CirclePlusIcon, obj7), ];
  const obj8 = { variant: "body-md/medium", color: "text-strong", children: tmp6Result.getAddWidgetTitle(widget) };
  const Text = tmp6(5763).Text;
  tmp6Result = AddWidgetButtonConfig;
  items1[1] = hasOwnProperty(Text, obj8);
  items[1] = metroRequire(React3, obj6);
  return metroRequire(tmp5, obj);
};
