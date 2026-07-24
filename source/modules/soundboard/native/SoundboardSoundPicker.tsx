// Module ID: 15792
// Function ID: 121809
// Dependencies: [57, 31, 27, 15793, 4202, 1849, 15794, 653, 33, 4130, 689, 3991, 624, 15795, 5738, 5160, 5462, 5482, 8604, 480, 477, 9378, 5187, 4001, 4126, 1212, 5772, 15799, 15807, 15808, 2]

// Module 15792
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { View } from "_createForOfIteratorHelperLoose";
import openExpressionPicker from "openExpressionPicker";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { EXPRESSION_FOOTER_HEIGHT } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_6;
let closure_7;
const require = arg1;
({ setSearchQuery: closure_6, useExpressionPickerStore: closure_7 } = openExpressionPicker);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let obj = { title: { marginBottom: 8 }, container: { flex: 1, alignItems: "center" } };
obj = { paddingHorizontal: require("SOUND_BUTTON_HEIGHT").SOUND_ROW_HORIZONTAL_PADDING, padding: require("_createForOfIteratorHelperLoose").space.PX_8, width: "100%" };
obj.header = obj;
obj.body = { flex: 1, width: "100%" };
let closure_13 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function SoundboardSoundPicker(channel) {
  let availableSounds;
  let categories;
  let _slicedToArray;
  let tmp12;
  let tmp3;
  let tmp4;
  channel = channel.channel;
  const tmp = callback5();
  [tmp3, tmp4] = callback(importAllResult.useState(0), 2);
  const ref = importAllResult.useRef(null);
  let obj = channel(availableSounds[11]);
  const sharedValue = obj.useSharedValue(0);
  let obj1 = channel(availableSounds[12]);
  const items = [closure_9];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_9.getCurrentUser());
  let obj2 = channel(availableSounds[12]);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => outer1_8.getMediaSessionId());
  const tmp2 = callback(importAllResult.useState(0), 2);
  ({ categories, availableSounds } = stateFromStores(availableSounds[13])(channel, { filterOutEmptyCurrentGuild: true }));
  const tmp10 = callback2((searchQuery) => searchQuery.searchQuery);
  let obj3 = channel(availableSounds[14]);
  const tmp9 = stateFromStores(availableSounds[13])(channel, { filterOutEmptyCurrentGuild: true });
  [tmp12, _slicedToArray] = callback(importAllResult.useState(obj3.searchSounds(tmp10, availableSounds, stateFromStores, channel)), 2);
  let obj4 = channel(availableSounds[13]);
  const searchCategories = obj4.useSearchCategories(categories, tmp12, tmp10);
  const tmp11 = callback(importAllResult.useState(obj3.searchSounds(tmp10, availableSounds, stateFromStores, channel)), 2);
  const items2 = [channel, stateFromStores, availableSounds];
  callback = importAllResult.useCallback((arg0) => {
    outer1_6(arg0);
    callback(channel(availableSounds[14]).searchSounds(arg0, availableSounds, stateFromStores, channel));
  }, items2);
  obj = {};
  const tmp14 = stateFromStores(availableSounds[16]);
  obj.type = channel(availableSounds[19]).ImpressionTypes.HALFSHEET;
  obj.name = channel(availableSounds[19]).ImpressionNames.SOUNDBOARD_POPOUT;
  obj.properties = { source: channel.analyticsSource, guild_id: channel.guild_id, media_session_id: stateFromStores1 };
  stateFromStores(availableSounds[18])(obj);
  let obj6 = channel(availableSounds[11]);
  const sharedValue1 = obj6.useSharedValue(-1);
  let obj7 = channel(availableSounds[11]);
  const sharedValue2 = obj7.useSharedValue(false);
  obj = { value: tmp14(stateFromStores(availableSounds[17]).SOUNDBOARD_ACTION_SHEET).analyticsLocations };
  let obj9 = channel(availableSounds[20]);
  let isIOSResult = obj9.isIOS();
  if (isIOSResult) {
    obj1 = { animatedSheetIndex: sharedValue1, portalHostName: "soundboard-footer", followSystemKeyboard: true };
    isIOSResult = callback3(stateFromStores(availableSounds[21]), obj1);
  }
  const items3 = [isIOSResult, ];
  obj2 = { animatedIndex: sharedValue1, scrollable: true, startExpanded: true };
  const tmp16 = stateFromStores(availableSounds[18]);
  const tmp20 = callback4;
  const tmp25 = callback4;
  let tmp26;
  if (obj13.isAndroid()) {
    obj3 = { name: "soundboard-footer" };
    tmp26 = callback3(channel(availableSounds[23]).PortalHost, obj3);
  }
  obj2.footer = tmp26;
  obj4 = { style: tmp.container };
  const obj5 = { accessibilityRole: "header", variant: "heading-lg/bold", style: tmp.title };
  const intl = channel(availableSounds[25]).intl;
  obj5.children = intl.string(channel(availableSounds[25]).t.ABjMWI);
  const items4 = [callback3(channel(availableSounds[24]).Text, obj5), , , ];
  obj6 = { style: tmp.header };
  obj7 = { size: "md" };
  const intl2 = channel(availableSounds[25]).intl;
  obj7.placeholder = intl2.string(channel(availableSounds[25]).t.sKt3xS);
  obj7.onChange = callback;
  obj6.children = callback3(channel(availableSounds[26]).SearchField, obj7);
  items4[1] = callback3(View, obj6);
  const obj8 = { style: tmp.body };
  obj9 = { listRef: ref, channel };
  const sum = EXPRESSION_FOOTER_HEIGHT + stateFromStores(availableSounds[15])({ isKeyboardAwareOnAndroid: false }).insets.bottom;
  obj9.insetBottom = sum + stateFromStores(availableSounds[10]).space.PX_16;
  obj9.scrollPosition = sharedValue;
  obj9.setCategoryIndex = tmp4;
  obj9.categories = searchCategories;
  obj9.shouldShowPremiumUpsell = sharedValue2;
  obj8.children = callback3(channel(availableSounds[27]).SoundboardSoundPickerList, obj9);
  items4[2] = callback3(View, obj8);
  items4[3] = callback3(stateFromStores(availableSounds[28]), { shouldShow: sharedValue2 });
  obj4.children = items4;
  const items5 = [callback4(View, obj4), callback3(stateFromStores(availableSounds[29]), { guildId: channel.guild_id, listRef: ref, categories, categoryIndex: tmp3 })];
  obj2.children = items5;
  items3[1] = tmp25(channel(availableSounds[22]).BottomSheet, obj2);
  obj.children = items3;
  return tmp20(channel(availableSounds[16]).AnalyticsLocationProvider, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/soundboard/native/SoundboardSoundPicker.tsx");

export default memoResult;
