// Module ID: 19209
// Function ID: 19210
// Name: SoundboardSoundPicker
// Dependencies: [32, 19, 17, 19210, 6071, 1388, 6371, 19211, 1072, 21, 5306, 575, 1655, 563, 19212, 15995, 5913, 7918, 7937, 6338, 1264, 1380, 11246, 5566, 5508, 5929, 1113, 7825, 19216, 19225, 19226, 2]

// Module 19209 (SoundboardSoundPicker)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import SoundboardConstants from "SoundboardConstants" /* 6371 */;
import searchSounds from "searchSounds" /* 15995 */;
import SoundboardStyleConstants from "SoundboardStyleConstants" /* 19211 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ExpressionPickerStore from "ExpressionPickerStore" /* 19210 */;
import RTCConnectionStore from "RTCConnectionStore" /* 6071 */;
import UserStore from "UserStore" /* 1388 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let closure_12;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let _slicedToArray = _slicedToArray_mod;
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
  let c3;
  let categories;
  let currentUser;
  let intl;
  let intl2;
  let items3;
  let items5;
  let items6;
  let items7;
  let mediaSessionId;
  let obj15;
  let obj17;
  let obj8;
  let startExpanded;
  let sum;
  let tmp15;
  let tmp26;
  let tmp3;
  let tmp4;
  channel = channel.channel;
  ({ analyticsSource, startExpanded } = channel);
  if (startExpanded === undefined) {
    startExpanded = true;
  }
  availableSounds = undefined;
  _slicedToArray = undefined;
  const tmp = closure_14();
  let obj = react;
  [tmp3, tmp4] = _slicedToArray(react.useState(0), 2);
  const tmp2 = _slicedToArray(react.useState(0), 2);
  const ref = react.useRef(null);
  const obj2 = channel(availableSounds[12]);
  const sharedValue = obj2.useSharedValue(0);
  const items = [UserStore];
  const obj3 = channel(availableSounds[13]);
  const stateFromStores = obj3.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [RTCConnectionStore];
  const obj4 = channel(availableSounds[13]);
  const stateFromStores1 = obj4.useStateFromStores(items1, () => mediaSessionId.getMediaSessionId());
  const tmp12 = stateFromStores(availableSounds[14])(channel, { filterOutEmptyCurrentGuild: true });
  ({ categories, availableSounds } = tmp12);
  const tmp13 = closure_7((searchQuery) => searchQuery.searchQuery);
  const useState = react.useState;
  const obj5 = channel(availableSounds[15]);
  [tmp15, c3] = useState(obj5.searchSounds(tmp13, availableSounds, stateFromStores, channel));
  _slicedToArray(useState(obj5.searchSounds(tmp13, availableSounds, stateFromStores, channel)), 2);
  const obj6 = channel(availableSounds[14]);
  const searchCategories = obj6.useSearchCategories(categories, tmp15, tmp13);
  const insets = stateFromStores(availableSounds[16])({ isKeyboardAwareOnAndroid: false }).insets;
  const tmp17 = stateFromStores(availableSounds[17]);
  if (analyticsSource === stateFromStores(availableSounds[18]).VOICE_PANEL_DOCK) {
    const items2 = [stateFromStores(availableSounds[18]).VOICE_PANEL_DOCK];
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
  const obj7 = { type: channel(availableSounds[20]).ImpressionTypes.HALFSHEET, name: channel(availableSounds[20]).ImpressionNames.SOUNDBOARD_POPOUT, properties: obj8 };
  obj8 = { source: analyticsSource, guild_id: channel.guild_id, media_session_id: stateFromStores1, type: SoundboardPickerType.FULL_PICKER };
  const tmp11Result = stateFromStores(availableSounds[19]);
  tmp11Result(obj7);
  const tmp6Result = channel(availableSounds[12]);
  const sharedValue1 = tmp6Result.useSharedValue(-1);
  const tmp6Result4 = channel(availableSounds[12]);
  const sharedValue2 = tmp6Result4.useSharedValue(false);
  const obj9 = { value: analyticsLocations, children: items5 };
  const AnalyticsLocationProvider = tmp6(tmp7[17]).AnalyticsLocationProvider;
  const tmp6Result5 = channel(availableSounds[21]);
  let isIOSResult = tmp6Result5.isIOS();
  if (isIOSResult) {
    const obj10 = { animatedSheetIndex: sharedValue1, portalHostName: "soundboard-footer", followSystemKeyboard: true, constrainToActionSheet: true };
    isIOSResult = closure_12(tmp11(tmp7[22]), obj10);
  }
  items5 = [isIOSResult, ];
  const obj11 = { animatedIndex: sharedValue1, scrollable: true, startExpanded, footer: tmp26, children: items7 };
  const BottomSheet = tmp6(tmp7[23]).BottomSheet;
  tmp26 = undefined;
  const tmp6Result6 = channel(availableSounds[21]);
  if (tmp6Result6.isAndroid()) {
    tmp26 = closure_12(tmp6(tmp7[24]).PortalHost, { name: "soundboard-footer" });
  }
  const obj12 = { style: tmp.container, children: items6 };
  const obj13 = { accessibilityRole: "header", variant: "heading-lg/semibold", style: tmp.title, children: intl.string(channel(availableSounds[26]).t.ABjMWI) };
  const Text = tmp6(tmp7[25]).Text;
  intl = tmp6(tmp7[26]).intl;
  items6 = [closure_12(Text, obj13), , , ];
  const obj14 = { style: tmp.header, children: closure_12(SearchBar, obj15) };
  obj15 = { size: "md", placeholder: intl2.string(channel(availableSounds[26]).t.sKt3xS), onChange: callback };
  SearchBar = tmp6(tmp7[27]).SearchBar;
  intl2 = tmp6(tmp7[26]).intl;
  items6[1] = closure_12(View, obj14);
  const obj16 = { style: tmp.body, children: closure_12(SoundboardSoundPickerList, obj17) };
  obj17 = { listRef: ref, channel, insetBottom: sum + stateFromStores(availableSounds[11]).space.PX_16, scrollPosition: sharedValue, setCategoryIndex: tmp4, categories: searchCategories, shouldShowPremiumUpsell: sharedValue2 };
  SoundboardSoundPickerList = tmp6(tmp7[28]).SoundboardSoundPickerList;
  sum = EXPRESSION_FOOTER_HEIGHT + insets.bottom;
  items6[2] = closure_12(View, obj16);
  items6[3] = closure_12(stateFromStores(availableSounds[29]), { shouldShow: sharedValue2 });
  items7 = [closure_13(View, obj12), ];
  const obj18 = { guildId: channel.guild_id, listRef: ref, categories, categoryIndex: tmp3 };
  items7[1] = closure_12(stateFromStores(availableSounds[30]), obj18);
  items5[1] = closure_13(BottomSheet, obj11);
  return closure_13(AnalyticsLocationProvider, obj9);
});
const result = size.fileFinishedImporting("modules/soundboard/native/SoundboardSoundPicker.tsx");

export default memoResult;
