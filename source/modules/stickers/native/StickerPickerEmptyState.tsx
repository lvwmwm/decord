// Module ID: 9665
// Function ID: 75189
// Name: EmptyStateSticker
// Dependencies: [57, 31, 27, 5035, 3806, 653, 1851, 33, 4130, 9636, 9651, 5462, 5482, 566, 675, 4126, 1212, 4660, 4099, 4100, 4543, 5085, 8057, 9659, 2]
// Exports: default

// Module 9665 (EmptyStateSticker)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { EMPTY_STATE_STICKERS } from "STICKER_PICKER_TAB_PANEL_ID";
import ME from "ME";
import { PremiumUpsellTypes } from "GuildFeatures";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_8;
let closure_9;
let require = arg1;
function EmptyStateSticker(sticker) {
  sticker = sticker.sticker;
  const animated = require(9636) /* _createForOfIteratorHelperLoose */.useShouldAnimateSticker(sticker.isFocused);
  let id;
  const obj = require(9636) /* _createForOfIteratorHelperLoose */;
  const tmp2 = closure_11;
  if (null != sticker) {
    id = sticker.id;
  }
  return tmp2(importDefault(9651), { sticker, size: 60, animated }, id);
}
({ AnalyticEvents: closure_8, AnalyticsSections: closure_9 } = ME);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let closure_13 = _createForOfIteratorHelperLoose.createStyles({ header: { marginBottom: 8, textAlign: "center" }, blurb: { lineHeight: 18, textAlign: "center", marginBottom: 12 }, premiumButton: { marginTop: 20, alignSelf: "center", paddingLeft: 5, paddingRight: 10, flexGrow: 0 }, nitroWheel: { width: 32 }, stickersRow: { flexDirection: "row", alignSelf: "center" }, sticker: { paddingHorizontal: 2 } });
let result = require("get ActivityIndicator").fileFinishedImporting("modules/stickers/native/StickerPickerEmptyState.tsx");

export default function _default() {
  let tmp = callback4();
  const require = tmp;
  let obj = require(9636) /* _createForOfIteratorHelperLoose */;
  const fetchStickerPacks = obj.useFetchStickerPacks();
  analyticsLocations = analyticsLocations(5462)(analyticsLocations(5482).EMPTY_STATE).analyticsLocations;
  let obj1 = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStoresArray = obj1.useStateFromStoresArray(items, () => {
    const mapped = outer1_7.map((arg0) => outer2_6.getStickerById(arg0));
    return mapped.filter((arg0) => null != arg0);
  });
  const tmp4 = callback(React.useState(null), 2);
  const dependencyMap = tmp4[0];
  callback = tmp4[1];
  const items1 = [analyticsLocations];
  const effect = React.useEffect(() => {
    let obj = analyticsLocations(675);
    obj = { type: outer1_10.EMPTY_STICKER_PICKER_UPSELL, source: obj, location_stack: analyticsLocations };
    obj = { section: outer1_9.EMPTY_STICKER_PICKER_UPSELL };
    obj.track(outer1_8.PREMIUM_UPSELL_VIEWED, obj);
  }, items1);
  obj = {};
  obj = { style: tmp.header, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.HEm04J);
  const items2 = [callback2(require(4126) /* Text */.Text, obj), , , ];
  obj1 = { style: tmp.blurb, variant: "text-sm/medium", color: "text-default" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl2.string(require(1212) /* getSystemLocale */.t.FnNud4);
  items2[1] = callback2(require(4126) /* Text */.Text, obj1);
  const tmp3 = analyticsLocations(5462);
  items2[2] = callback2(View, {
    style: tmp.stickersRow,
    children: stateFromStoresArray.map((id) => {
      let tmp = id;
      tmp = outer1_11;
      let obj = {
        accessible: false,
        onLongPress() {
          const result = id(4099).triggerHapticFeedback(analyticsLocations(4100).IMPACT_LIGHT);
          outer1_3(id.id);
        },
        style: tmp.sticker
      };
      obj = { sticker: id, isFocused: dependencyMap === id.id };
      obj.children = outer1_11(outer1_14, obj);
      id = undefined;
      if (null != id) {
        id = id.id;
      }
      return tmp(tmp(4660).PressableOpacity, obj, id);
    })
  });
  const obj3 = { style: tmp.premiumButton };
  const obj4 = {};
  const obj5 = {};
  const obj2 = {
    style: tmp.stickersRow,
    children: stateFromStoresArray.map((id) => {
      let tmp = id;
      tmp = outer1_11;
      let obj = {
        accessible: false,
        onLongPress() {
          const result = id(4099).triggerHapticFeedback(analyticsLocations(4100).IMPACT_LIGHT);
          outer1_3(id.id);
        },
        style: tmp.sticker
      };
      obj = { sticker: id, isFocused: dependencyMap === id.id };
      obj.children = outer1_11(outer1_14, obj);
      id = undefined;
      if (null != id) {
        id = id.id;
      }
      return tmp(tmp(4660).PressableOpacity, obj, id);
    })
  };
  obj5.source = analyticsLocations(8057);
  obj5.style = tmp.nitroWheel;
  obj5.resizeMode = "contain";
  obj4.icon = callback2(analyticsLocations(5085), obj5);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj4.text = intl3.string(require(1212) /* getSystemLocale */.t.pj0XBN);
  obj4.variant = "active";
  obj4.size = "sm";
  obj4.onPress = function onPress() {
    return analyticsLocations(9659)({ section: outer1_9.EXPRESSION_PICKER });
  };
  obj3.children = callback2(require(4543) /* Button */.Button, obj4);
  items2[3] = callback2(View, obj3);
  obj.children = items2;
  return callback3(View, obj);
};
