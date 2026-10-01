// Module ID: 16883
// Function ID: 16884
// Name: SoundboardSoundPicker
// Dependencies: [32, 19, 17, 16884, 4859, 1372, 5321, 16885, 1074, 21, 4836, 576, 4566, 563, 16886, 6761, 6402, 6583, 6603, 8230, 1249, 1364, 9738, 6571, 4708, 4832, 1115, 6471, 16891, 16901, 16902, 2]

// Module 16883 (SoundboardSoundPicker)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import SoundboardConstants from "SoundboardConstants" /* 5321 */;
import searchSounds from "searchSounds" /* 6761 */;
import SoundboardStyleConstants from "SoundboardStyleConstants" /* 16885 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ExpressionPickerStore from "ExpressionPickerStore" /* 16884 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4859 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

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
  let SearchField;
  let SoundboardSoundPickerList;
  let _undefined;
  let availableSounds;
  let c5;
  let categories;
  let currentUser;
  let intl;
  let intl2;
  let items4;
  let items5;
  let items6;
  let mediaSessionId;
  let obj17;
  let obj19;
  let obj7;
  let sum;
  let tmp15;
  let tmp27;
  let tmp3;
  let tmp4;
  channel = channel.channel;
  const initialScrollLocation = channel.initialScrollLocation;
  let stateFromStores;
  availableSounds = undefined;
  c5 = undefined;
  const analyticsSource = channel.analyticsSource;
  let tmp = closure_14();
  [tmp3, tmp4] = stateFromStores(availableSounds.useState(0), 2);
  const tmp2 = stateFromStores(availableSounds.useState(0), 2);
  let ref = availableSounds.useRef(null);
  let obj = channel(ref[12]);
  const sharedValue = obj.useSharedValue(0);
  const items = [UserStore];
  const obj2 = channel(ref[13]);
  stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [RTCConnectionStore];
  const obj3 = channel(ref[13]);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => mediaSessionId.getMediaSessionId());
  ({ categories, availableSounds } = initialScrollLocation(ref[14])(channel, { filterOutEmptyCurrentGuild: true }));
  initialScrollLocation(ref[14])(channel, { filterOutEmptyCurrentGuild: true });
  const tmp13 = closure_7((searchQuery) => searchQuery.searchQuery);
  const useState = availableSounds.useState;
  const obj4 = channel(ref[15]);
  [tmp15, c5] = stateFromStores(useState(obj4.searchSounds(tmp13, availableSounds, stateFromStores, channel)), 2);
  stateFromStores(useState(obj4.searchSounds(tmp13, availableSounds, stateFromStores, channel)), 2);
  const obj5 = channel(ref[14]);
  const searchCategories = obj5.useSearchCategories(categories, tmp15, tmp13);
  const insets = initialScrollLocation(ref[16])({ isKeyboardAwareOnAndroid: false }).insets;
  const items2 = [channel, stateFromStores, availableSounds];
  const tmp17 = initialScrollLocation(ref[17]);
  const analyticsLocations = tmp17(initialScrollLocation(ref[18]).SOUNDBOARD_ACTION_SHEET).analyticsLocations;
  const callback = availableSounds.useCallback((arg0) => {
    metroRequire(arg0);
    const obj = searchSounds;
    _undefined(obj.searchSounds(arg0, availableSounds, stateFromStores, channel));
  }, items2);
  const obj6 = { type: channel(ref[20]).ImpressionTypes.HALFSHEET, name: channel(ref[20]).ImpressionNames.SOUNDBOARD_POPOUT, properties: obj7 };
  obj7 = { source: analyticsSource, guild_id: channel.guild_id, media_session_id: stateFromStores1, type: SoundboardPickerType.FULL_PICKER };
  const tmp19 = initialScrollLocation(ref[19]);
  tmp19(obj6);
  const obj8 = channel(ref[12]);
  const sharedValue1 = obj8.useSharedValue(-1);
  const obj9 = channel(ref[12]);
  const sharedValue2 = obj9.useSharedValue(false);
  ref = availableSounds.useRef(false);
  const items3 = [initialScrollLocation];
  const callback1 = availableSounds.useCallback(() => {
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
  }, items3);
  const obj10 = { value: analyticsLocations, children: items4 };
  const AnalyticsLocationProvider = channel(ref[17]).AnalyticsLocationProvider;
  const obj11 = channel(ref[21]);
  let isIOSResult = obj11.isIOS();
  if (isIOSResult) {
    const obj12 = { animatedSheetIndex: sharedValue1, portalHostName: "soundboard-footer", followSystemKeyboard: true };
    isIOSResult = closure_12(tmp11(tmp7[22]), obj12);
  }
  items4 = [isIOSResult, ];
  const obj13 = { animatedIndex: sharedValue1, scrollable: true, startExpanded: true, onExpand: callback1, footer: tmp27, children: items6 };
  BottomSheet = tmp6(tmp7[23]).BottomSheet;
  tmp27 = undefined;
  const tmp6Result = channel(ref[21]);
  if (tmp6Result.isAndroid()) {
    tmp27 = closure_12(tmp6(tmp7[24]).PortalHost, { name: "soundboard-footer" });
  }
  const obj14 = { style: tmp.container, children: items5 };
  const obj15 = { accessibilityRole: "header", variant: "heading-lg/bold", style: tmp.title, children: intl.string(channel(ref[26]).t.ABjMWI) };
  const Text = tmp6(tmp7[25]).Text;
  intl = tmp6(tmp7[26]).intl;
  items5 = [closure_12(Text, obj15), , , ];
  const obj16 = { style: tmp.header, children: closure_12(SearchField, obj17) };
  obj17 = { size: "md", placeholder: intl2.string(channel(ref[26]).t.sKt3xS), onChange: callback };
  SearchField = tmp6(tmp7[27]).SearchField;
  intl2 = tmp6(tmp7[26]).intl;
  items5[1] = closure_12(c5, obj16);
  const obj18 = { style: tmp.body, children: closure_12(SoundboardSoundPickerList, obj19) };
  obj19 = { listRef: ref, channel, insetBottom: sum + initialScrollLocation(ref[11]).space.PX_16, scrollPosition: sharedValue, setCategoryIndex: tmp4, categories: searchCategories, shouldShowPremiumUpsell: sharedValue2 };
  SoundboardSoundPickerList = tmp6(tmp7[28]).SoundboardSoundPickerList;
  sum = EXPRESSION_FOOTER_HEIGHT + insets.bottom;
  items5[2] = closure_12(c5, obj18);
  items5[3] = closure_12(initialScrollLocation(ref[29]), { shouldShow: sharedValue2 });
  items6 = [closure_13(c5, obj14), ];
  const obj20 = { guildId: channel.guild_id, listRef: ref, categories, categoryIndex: tmp3 };
  items6[1] = closure_12(initialScrollLocation(ref[30]), obj20);
  items4[1] = closure_13(BottomSheet, obj13);
  return closure_13(AnalyticsLocationProvider, obj10);
});
const result = size.fileFinishedImporting("modules/soundboard/native/SoundboardSoundPicker.tsx");

export default memoResult;
