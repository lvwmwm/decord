// Module ID: 9622
// Function ID: 74937
// Name: EmptyStateSticker
// Dependencies: []
// Exports: default

// Module 9622 (EmptyStateSticker)
function EmptyStateSticker(sticker) {
  sticker = sticker.sticker;
  const animated = arg1(dependencyMap[9]).useShouldAnimateSticker(sticker.isFocused);
  let id;
  const obj = arg1(dependencyMap[9]);
  const tmp2 = closure_11;
  if (null != sticker) {
    id = sticker.id;
  }
  return tmp2(importDefault(dependencyMap[10]), { sticker, size: 60, animated }, id);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
const EMPTY_STATE_STICKERS = arg1(dependencyMap[4]).EMPTY_STATE_STICKERS;
({ AnalyticEvents: closure_8, AnalyticsSections: closure_9 } = arg1(dependencyMap[5]));
const PremiumUpsellTypes = arg1(dependencyMap[6]).PremiumUpsellTypes;
const tmp2 = arg1(dependencyMap[5]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[7]));
const tmp3 = arg1(dependencyMap[7]);
let closure_13 = arg1(dependencyMap[8]).createStyles({ header: { value: null, on: null }, blurb: {}, premiumButton: { flexDirection: -1102997407, alignItems: 2080375278, padding: 100, backgroundColor: 10, borderRadius: 25 }, nitroWheel: { width: 32 }, stickersRow: { -9223372036854775808: null, -9223372036854775808: "\u{1F43F}\uFE0F" }, sticker: { paddingHorizontal: 2 } });
const obj = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/stickers/native/StickerPickerEmptyState.tsx");

export default function _default() {
  const tmp = callback4();
  const arg1 = tmp;
  let obj = arg1(closure_2[9]);
  const fetchStickerPacks = obj.useFetchStickerPacks();
  const analyticsLocations = importDefault(closure_2[11])(importDefault(closure_2[12]).EMPTY_STATE).analyticsLocations;
  const importDefault = analyticsLocations;
  let obj1 = arg1(closure_2[13]);
  const items = [closure_6];
  const stateFromStoresArray = obj1.useStateFromStoresArray(items, () => {
    const mapped = closure_7.map((arg0) => stickerById.getStickerById(arg0));
    return mapped.filter((arg0) => null != arg0);
  });
  const tmp4 = callback(React.useState(null), 2);
  closure_2 = tmp4[0];
  const callback = tmp4[1];
  const items1 = [analyticsLocations];
  const effect = React.useEffect(() => {
    let obj = analyticsLocations(closure_2[14]);
    obj = { type: constants3.EMPTY_STICKER_PICKER_UPSELL, source: obj, location_stack: analyticsLocations };
    obj = { section: constants2.EMPTY_STICKER_PICKER_UPSELL };
    obj.track(constants.PREMIUM_UPSELL_VIEWED, obj);
  }, items1);
  obj = {};
  obj = { style: tmp.header };
  const intl = arg1(closure_2[16]).intl;
  obj.children = intl.string(arg1(closure_2[16]).t.HEm04J);
  const items2 = [callback2(arg1(closure_2[15]).Text, obj), , , ];
  obj1 = { style: tmp.blurb };
  const intl2 = arg1(closure_2[16]).intl;
  obj1.children = intl2.string(arg1(closure_2[16]).t.FnNud4);
  items2[1] = callback2(arg1(closure_2[15]).Text, obj1);
  const tmp3 = importDefault(closure_2[11]);
  items2[2] = callback2(View, {
    style: tmp.stickersRow,
    children: stateFromStoresArray.map((id) => {
      let tmp = id;
      tmp = callback;
      let obj = {
        accessible: false,
        onLongPress() {
          const result = arg0(closure_2[18]).triggerHapticFeedback(callback(closure_2[19]).IMPACT_LIGHT);
          callback2(arg0.id);
        },
        style: tmp.sticker
      };
      obj = { sticker: id, isFocused: closure_2 === id.id };
      obj.children = callback(closure_14, obj);
      id = undefined;
      if (null != id) {
        id = id.id;
      }
      return tmp(tmp(closure_2[17]).PressableOpacity, obj, id);
    })
  });
  const obj3 = { style: tmp.premiumButton };
  const obj4 = {};
  const obj5 = {};
  const obj2 = {
    style: tmp.stickersRow,
    children: stateFromStoresArray.map((id) => {
      let tmp = id;
      tmp = callback;
      let obj = {
        accessible: false,
        onLongPress() {
          const result = arg0(closure_2[18]).triggerHapticFeedback(callback(closure_2[19]).IMPACT_LIGHT);
          callback2(arg0.id);
        },
        style: tmp.sticker
      };
      obj = { sticker: id, isFocused: closure_2 === id.id };
      obj.children = callback(closure_14, obj);
      id = undefined;
      if (null != id) {
        id = id.id;
      }
      return tmp(tmp(closure_2[17]).PressableOpacity, obj, id);
    })
  };
  obj5.source = importDefault(closure_2[22]);
  obj5.style = tmp.nitroWheel;
  obj5.resizeMode = "contain";
  obj4.icon = callback2(importDefault(closure_2[21]), obj5);
  const intl3 = arg1(closure_2[16]).intl;
  obj4.text = intl3.string(arg1(closure_2[16]).t.pj0XBN);
  obj4.variant = "active";
  obj4.size = "sm";
  obj4.onPress = function onPress() {
    return analyticsLocations(closure_2[23])({ section: constants2.EXPRESSION_PICKER });
  };
  obj3.children = callback2(arg1(closure_2[20]).Button, obj4);
  items2[3] = callback2(View, obj3);
  obj.children = items2;
  return callback3(View, obj);
};
