// Module ID: 19024
// Function ID: 19025
// Name: WaterwheelsDiscoverHeader
// Dependencies: [19, 17, 10218, 19025, 21, 575, 5306, 19026, 504, 12135, 18225, 5929, 1113, 2569, 5936, 7438, 19033, 2]
// Exports: default

// Module 19024 (WaterwheelsDiscoverHeader)
import nativeDefault from "native" /* 575 */;
import _modDef2569 from "module_2569" /* 2569 */;
import useGameRecordsDefault from "useGameRecords" /* 12135 */;
import openWaterwheelsInterestPickerDefault from "openWaterwheelsInterestPicker" /* 19026 */;
import InterestGameCoverDefault from "InterestGameCover" /* 19033 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import InterestPickerSessionStore from "InterestPickerSessionStore" /* 10218 */;
import InterestGamePickerConstants from "InterestGamePickerConstants" /* 19025 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let FOOTER_THUMBNAIL_GAP;
let SELECTED_BORDER_WIDTH;
let THUMBNAIL_ASPECT_RATIO;
let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
function openPicker() {
  openWaterwheelsInterestPickerDefault(true);
}
({ Pressable: c3, View: closure_4 } = react_native);
const THUMBNAIL_WIDTH = InterestGamePickerConstants.THUMBNAIL_WIDTH;
({ FOOTER_THUMBNAIL_GAP, SELECTED_BORDER_WIDTH, THUMBNAIL_ASPECT_RATIO } = InterestGamePickerConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const PX_64 = nativeDefault.space.PX_64;
let createStyles = createStyles_mod;
let obj = { header: obj2, title: obj3, titleText: { flexShrink: 1 }, picks: obj4, cover: size, overlappingCover: { marginLeft: FOOTER_THUMBNAIL_GAP }, overflow: obj5 };
obj2 = { height: PX_64, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, flexShrink: 1 };
obj4 = { minWidth: nativeDefault.space.PX_48, minHeight: nativeDefault.space.PX_48, flexDirection: "row", alignItems: "center", justifyContent: "center" };
size = { width: THUMBNAIL_WIDTH, height: THUMBNAIL_WIDTH / THUMBNAIL_ASPECT_RATIO, borderRadius: nativeDefault.radii.xs, borderWidth: SELECTED_BORDER_WIDTH, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, overflow: "hidden" };
obj5 = { marginLeft: nativeDefault.space.PX_4 };
let closure_9 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/waterwheels/discover/native/WaterwheelsDiscoverHeader.tsx");

export default function WaterwheelsDiscoverHeader() {
  let closure_0;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj10;
  let obj12;
  let obj8;
  let picks;
  let tmp9Result;
  let tmp2 = closure_9();
  _require = tmp2;
  let obj = require("get initialized");
  let items = [InterestPickerSessionStore];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => picks.getPicks());
  const arr3 = useGameRecordsDefault(stateFromStoresArray);
  const substr = arr3.slice(0, 3);
  const diff = stateFromStoresArray.length - substr.length;
  let obj2 = { style: tmp2.header, children: items2 };
  const obj3 = { style: tmp2.title, children: items1 };
  const obj4 = { size: "refresh_sm", color: nativeDefault.colors.ICON_STRONG };
  const CompassIcon = require("CompassIcon").CompassIcon;
  items1 = [closure_7(CompassIcon, obj4), ];
  const obj5 = { variant: "heading-md/semibold", color: "text-strong", style: tmp2.titleText, lineClamp: 1, children: intl.string(_modDef2569.v010oN) };
  const Heading = require("Text/Text").Heading;
  intl = require("intl").intl;
  items1[1] = closure_7(Heading, obj5);
  items2 = [closure_8(closure_4, obj3), ];
  if (0 === stateFromStoresArray.length) {
    const obj6 = { variant: "secondary", size: "sm", text: intl3.string(_modDef2569.SCFT8N), icon: closure_7(require("GameControllerIcon").GameControllerIcon, { size: "sm" }), onPress: openPicker };
    const Button = tmp3(5936).Button;
    intl3 = tmp3(1113).intl;
    tmp9Result = tmp9(Button, obj6);
  } else {
    const obj7 = { style: tmp2.picks, accessibilityRole: "button", accessibilityLabel: intl4.string(_modDef2569["788GGP"]), accessibilityValue: obj8, onPress: openPicker, children: closure_8(closure_4, obj10) };
    intl4 = tmp3(1113).intl;
    obj8 = { text: items3.join(", ") };
    const intl5 = tmp3(1113).intl;
    const obj9 = { count: stateFromStoresArray.length };
    items3 = [intl5.formatToPlainString(_modDef2569.tQPcpe, obj9)];
    HermesBuiltin.arraySpread(items3, substr.map((name) => name.name), 1);
    obj10 = { style: tmp2.picks, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", pointerEvents: "none", children: items4 };
    items4 = [
      substr.map((game, index) => {
          let obj2;
          const items = [closure_0.cover, ];
          let overlappingCover = index > 0;
          const tmp2 = React3;
          if (overlappingCover) {
            overlappingCover = closure_0.overlappingCover;
          }
          items[1] = overlappingCover;
          const obj = { style: items, children: metroImportDefault(InterestGameCoverDefault, obj2) };
          obj2 = { game, width: THUMBNAIL_WIDTH, compact: true };
          return metroImportDefault(tmp2, obj, game.id);
        }),

    ];
    let tmp9Result2 = diff > 0;
    const tmp13 = closure_3;
    if (tmp9Result2) {
      const obj11 = { variant: "body-sm/semibold", color: "text-strong", style: tmp2.overflow, children: intl2.formatToPlainString(_modDef2569["OxfP+s"], obj12) };
      const Text = tmp3(5929).Text;
      intl2 = tmp3(1113).intl;
      obj12 = { count: diff };
      tmp9Result2 = tmp9(Text, obj11);
    }
    items4[1] = tmp9Result2;
    tmp9Result = tmp9(tmp13, obj7);
  }
  items2[1] = tmp9Result;
  return closure_8(closure_4, obj2);
};
