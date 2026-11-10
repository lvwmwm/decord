// Module ID: 10297
// Function ID: 10298
// Name: StickerPickerEmptyState
// Dependencies: [32, 19, 17, 6837, 4842, 1072, 1385, 21, 5014, 10266, 10282, 7326, 7351, 504, 1252, 5624, 1113, 6980, 5260, 5261, 5634, 5717, 10015, 10291, 2]
// Exports: default

// Module 10297 (StickerPickerEmptyState)
import react_native from "react-native" /* 17 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PremiumConstants from "PremiumConstants" /* 1385 */;
import StickersConstants from "StickersConstants" /* 4842 */;
import HapticUtils from "HapticUtils" /* 5260 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5261 */;
import StickersHooks from "StickersHooks" /* 10266 */;
import StickerDefault from "Sticker" /* 10282 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import StickersStore from "StickersStore" /* 6837 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c9;
let closure_12;
let metroImportAll;
let unpackModuleId;
function EmptyStateSticker(sticker) {
  sticker = sticker.sticker;
  const isFocused = sticker.isFocused;
  const obj = StickersHooks;
  const animated = obj.useShouldAnimateSticker(isFocused);
  let id;
  const tmp2 = unpackModuleId;
  const tmp3 = StickerDefault;
  if (sticker != null) {
    id = sticker.id;
  }
  return tmp2(tmp3, { sticker, size: 60, animated }, id);
}
const View = react_native.View;
const EMPTY_STATE_STICKERS = StickersConstants.EMPTY_STATE_STICKERS;
({ AnalyticEvents: metroImportAll, AnalyticsSections: c9 } = Constants);
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles({ header: { marginBottom: 8, textAlign: "center" }, blurb: { lineHeight: 18, textAlign: "center", marginBottom: 12 }, premiumButton: { marginTop: 20, alignSelf: "center", paddingLeft: 5, paddingRight: 10, flexGrow: 0 }, nitroWheel: { width: 32 }, stickersRow: { flexDirection: "row", alignSelf: "center" }, sticker: { paddingHorizontal: 2 } });
let result = size.fileFinishedImporting("modules/stickers/native/StickerPickerEmptyState.tsx");

export default function _default() {
  let Button;
  let analyticsLocations;
  let closure_0;
  let intl;
  let intl2;
  let intl3;
  let items2;
  let obj8;
  let obj9;
  let tmp6;
  let tmp = closure_13();
  _require = tmp;
  let obj = require("StickersHooks");
  const fetchStickerPacks = obj.useFetchStickerPacks();
  const tmp3 = analyticsLocations(7326);
  analyticsLocations = tmp3(analyticsLocations(7351).EMPTY_STATE).analyticsLocations;
  let obj2 = require("get initialized");
  const items = [StickersStore];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items, () => {
    let stickerById;
    const mapped = EMPTY_STATE_STICKERS.map((item) => stickerById.getStickerById(item));
    return mapped.filter((item) => null != item);
  });
  const tmp4 = _slicedToArray(react.useState(null), 2);
  [dependencyMap, _slicedToArray] = tmp4;
  const items1 = [analyticsLocations];
  const effect = react.useEffect(() => {
    let obj3;
    const obj2 = { type: PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL, source: obj3, location_stack: analyticsLocations };
    obj3 = { section: constants.EMPTY_STICKER_PICKER_UPSELL };
    const obj = AnalyticsUtilsDefault;
    obj.track(metroImportAll.PREMIUM_UPSELL_VIEWED, obj2);
  }, items1);
  let obj3 = { children: items2 };
  const obj4 = { style: tmp.header, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl.string(require("intl").t.HEm04J) };
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items2 = [closure_11(Text, obj4), , , ];
  const obj5 = { style: tmp.blurb, variant: "text-sm/medium", color: "text-default", children: intl2.string(require("intl").t.FnNud4) };
  const Text2 = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items2[1] = closure_11(Text2, obj5);
  const obj6 = {
    style: tmp.stickersRow,
    children: stateFromStoresArray.map((sticker) => {
      let obj2;
      let obj = {
        accessible: false,
        onLongPress() {
          const obj = HapticUtils;
          const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
          _slicedToArray(sticker.id);
        },
        style: sticker.sticker,
        children: closure_1_11(EmptyStateSticker, obj2)
      };
      obj2 = { sticker, isFocused: dependencyMap === sticker.id };
      const PressableOpacity = sticker(dependencyMap[17]).PressableOpacity;
      let id;
      const tmp = closure_1_11;
      if (sticker != null) {
        id = sticker.id;
      }
      return tmp(PressableOpacity, obj, id);
    })
  };
  items2[2] = closure_11(View, obj6);
  const obj7 = { style: tmp.premiumButton, children: closure_11(Button, obj8) };
  obj8 = {
    icon: closure_11(tmp6, obj9),
    text: intl3.string(require("intl").t.pj0XBN),
    variant: "active",
    size: "sm",
    onPress() {
      const obj = { section: constants.EXPRESSION_PICKER };
      return analyticsLocations(dependencyMap[23])(obj);
    }
  };
  Button = require("components/Button/Button").Button;
  obj9 = { source: analyticsLocations(10015), style: tmp.nitroWheel, resizeMode: "contain" };
  tmp6 = analyticsLocations(5717);
  intl3 = require("intl").intl;
  items2[3] = closure_11(View, obj7);
  return closure_12(View, obj3);
};
