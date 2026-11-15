// Module ID: 18895
// Function ID: 18896
// Name: SoundboardSoundPicker
// Dependencies: [32, 19, 17, 18896, 5925, 1385, 6225, 18897, 1072, 21, 5170, 575, 1652, 563, 18898, 7629, 5767, 7420, 7445, 6192, 1260, 1377, 10120, 5420, 5362, 5783, 1113, 7315, 18902, 18912, 18913, 2]

// Module 18895 (SoundboardSoundPicker)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import SoundboardConstants from "SoundboardConstants" /* 6225 */;
import searchSounds from "searchSounds" /* 7629 */;
import SoundboardStyleConstants from "SoundboardStyleConstants" /* 18897 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ExpressionPickerStore from "ExpressionPickerStore" /* 18896 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5925 */;
import UserStore from "UserStore" /* 1385 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let closure_12;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
({ setSearchQuery: metroRequire, useExpressionPickerStore: metroImportDefault } = ExpressionPickerStore);
const SoundboardPickerType = SoundboardConstants.SoundboardPickerType;
const SOUND_ROW_HORIZONTAL_PADDING = SoundboardStyleConstants.SOUND_ROW_HORIZONTAL_PADDING;
const EXPRESSION_FOOTER_HEIGHT = Constants.EXPRESSION_FOOTER_HEIGHT;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let obj = { title: { marginBottom: 8 }, container: { flex: 1, alignItems: "center" }, header: obj2, body: { flex: 1, width: "100%" } };
obj2 = { paddingHorizontal: SOUND_ROW_HORIZONTAL_PADDING, padding: nativeDefault.space.PX_8, width: "100%" };
let closure_14 = createStyles.createStyles(obj);
const memoResult = react.memo(function SoundboardSoundPicker(channel) {
  let SearchBar;
  let SoundboardSoundPickerList;
  let _undefined;
  let analyticsSource;
  let availableSounds;
  let c5;
  let categories;
  let currentUser;
  let initialScrollLocation;
  let intl;
  let intl2;
  let items3;
  let items6;
  let items7;
  let items8;
  let mediaSessionId;
  let obj15;
  let obj17;
  let obj8;
  let sum;
  let tmp15;
  let tmp27;
  let tmp3;
  let tmp4;
  channel = channel.channel;
  ({ analyticsSource, initialScrollLocation } = channel);
  let flag = channel.startExpanded;
  if (flag === undefined) {
    flag = true;
  }
  let stateFromStores;
  availableSounds = undefined;
  c5 = undefined;
  let tmp = closure_14();
  let obj = availableSounds;
  [tmp3, tmp4] = stateFromStores(availableSounds.useState(0), 2);
  const tmp2 = stateFromStores(availableSounds.useState(0), 2);
  let ref = availableSounds.useRef(null);
  const obj2 = channel(ref[12]);
  const sharedValue = obj2.useSharedValue(0);
  const items = [UserStore];
  const obj3 = channel(ref[13]);
  stateFromStores = obj3.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [RTCConnectionStore];
  const obj4 = channel(ref[13]);
  const stateFromStores1 = obj4.useStateFromStores(items1, () => mediaSessionId.getMediaSessionId());
  ({ categories, availableSounds } = initialScrollLocation(ref[14])(channel, { filterOutEmptyCurrentGuild: true }));
  initialScrollLocation(ref[14])(channel, { filterOutEmptyCurrentGuild: true });
  const tmp13 = closure_7((searchQuery) => searchQuery.searchQuery);
  const useState = availableSounds.useState;
  const obj5 = channel(ref[15]);
  [tmp15, c5] = stateFromStores(useState(obj5.searchSounds(tmp13, availableSounds, stateFromStores, channel)), 2);
  stateFromStores(useState(obj5.searchSounds(tmp13, availableSounds, stateFromStores, channel)), 2);
  const obj6 = channel(ref[14]);
  const searchCategories = obj6.useSearchCategories(categories, tmp15, tmp13);
  const insets = initialScrollLocation(ref[16])({ isKeyboardAwareOnAndroid: false }).insets;
  const tmp17 = initialScrollLocation(ref[17]);
  if (analyticsSource === initialScrollLocation(ref[18]).VOICE_PANEL_DOCK) {
    const items2 = [initialScrollLocation(ref[18]).VOICE_PANEL_DOCK];
    items3 = items2;
  } else {
    items3 = [];
  }
  const items4 = [channel, stateFromStores, availableSounds];
  const analyticsLocations = tmp17(items3, tmp11(tmp7[18]).SOUNDBOARD_ACTION_SHEET).analyticsLocations;
  const callback = obj.useCallback((arg0) => {
    metroRequire(arg0);
    const obj = searchSounds;
    _undefined(obj.searchSounds(arg0, availableSounds, stateFromStores, channel));
  }, items4);
  const obj7 = { type: channel(ref[20]).ImpressionTypes.HALFSHEET, name: channel(ref[20]).ImpressionNames.SOUNDBOARD_POPOUT, properties: obj8 };
  obj8 = { source: analyticsSource, guild_id: channel.guild_id, media_session_id: stateFromStores1, type: SoundboardPickerType.FULL_PICKER };
  const tmp11Result = initialScrollLocation(ref[19]);
  tmp11Result(obj7);
  const tmp6Result = channel(ref[12]);
  const sharedValue1 = tmp6Result.useSharedValue(-1);
  const tmp6Result4 = channel(ref[12]);
  const sharedValue2 = tmp6Result4.useSharedValue(false);
  ref = obj.useRef(false);
  const items5 = [initialScrollLocation];
  const callback1 = obj.useCallback(() => {
    let current = null == initialScrollLocation;
    const tmp = initialScrollLocation;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      ref.current = true;
      const current2 = ref.current;
      if (current2 != null) {
        const obj = { section: null, item: null, animated: false };
        ({ section: obj.section, item: obj.item } = tmp);
        current2.scrollToLocation(obj);
      }
    }
  }, items5);
  const obj9 = { value: analyticsLocations, children: items6 };
  const AnalyticsLocationProvider = tmp6(tmp7[17]).AnalyticsLocationProvider;
  const tmp6Result5 = channel(ref[21]);
  let isIOSResult = tmp6Result5.isIOS();
  if (isIOSResult) {
    const obj10 = { animatedSheetIndex: sharedValue1, portalHostName: "soundboard-footer", followSystemKeyboard: true, constrainToActionSheet: true };
    isIOSResult = closure_12(tmp11(tmp7[22]), obj10);
  }
  items6 = [isIOSResult, ];
  const obj11 = { animatedIndex: sharedValue1, scrollable: true, startExpanded: flag, onExpand: callback1, footer: tmp27, children: items8 };
  const BottomSheet = tmp6(tmp7[23]).BottomSheet;
  tmp27 = undefined;
  const tmp6Result6 = channel(ref[21]);
  if (tmp6Result6.isAndroid()) {
    tmp27 = closure_12(tmp6(tmp7[24]).PortalHost, { name: "soundboard-footer" });
  }
  const obj12 = { style: tmp.container, children: items7 };
  const obj13 = { accessibilityRole: "header", variant: "heading-lg/semibold", style: tmp.title, children: intl.string(channel(ref[26]).t.ABjMWI) };
  const Text = tmp6(tmp7[25]).Text;
  intl = tmp6(tmp7[26]).intl;
  items7 = [closure_12(Text, obj13), , , ];
  const obj14 = { style: tmp.header, children: closure_12(SearchBar, obj15) };
  obj15 = { size: "md", placeholder: intl2.string(channel(ref[26]).t.sKt3xS), onChange: callback };
  SearchBar = tmp6(tmp7[27]).SearchBar;
  intl2 = tmp6(tmp7[26]).intl;
  items7[1] = closure_12(c5, obj14);
  const obj16 = { style: tmp.body, children: closure_12(SoundboardSoundPickerList, obj17) };
  obj17 = { listRef: ref, channel, insetBottom: sum + initialScrollLocation(ref[11]).space.PX_16, scrollPosition: sharedValue, setCategoryIndex: tmp4, categories: searchCategories, shouldShowPremiumUpsell: sharedValue2 };
  SoundboardSoundPickerList = tmp6(tmp7[28]).SoundboardSoundPickerList;
  sum = EXPRESSION_FOOTER_HEIGHT + insets.bottom;
  items7[2] = closure_12(c5, obj16);
  items7[3] = closure_12(initialScrollLocation(ref[29]), { shouldShow: sharedValue2 });
  items8 = [closure_13(c5, obj12), ];
  const obj18 = { guildId: channel.guild_id, listRef: ref, categories, categoryIndex: tmp3 };
  items8[1] = closure_12(initialScrollLocation(ref[30]), obj18);
  items6[1] = closure_13(BottomSheet, obj11);
  return closure_13(AnalyticsLocationProvider, obj9);
});
const result = size.fileFinishedImporting("modules/soundboard/native/SoundboardSoundPicker.tsx");

export default memoResult;
