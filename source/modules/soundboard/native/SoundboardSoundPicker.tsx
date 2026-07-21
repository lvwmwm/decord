// Module ID: 15620
// Function ID: 119271
// Dependencies: []

// Module 15620
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ setSearchQuery: closure_6, useExpressionPickerStore: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const EXPRESSION_FOOTER_HEIGHT = arg1(dependencyMap[7]).EXPRESSION_FOOTER_HEIGHT;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[8]));
const tmp3 = arg1(dependencyMap[8]);
let obj = { title: { marginBottom: 8 }, container: { 9223372036854775807: "values", 9223372036854775807: "Array" } };
obj = { paddingHorizontal: arg1(dependencyMap[6]).SOUND_ROW_HORIZONTAL_PADDING, padding: importDefault(dependencyMap[10]).space.PX_8, width: "100%" };
obj.header = obj;
obj.body = { paddingTop: false, justifyContent: false };
let closure_13 = arg1(dependencyMap[9]).createStyles(obj);
const obj2 = arg1(dependencyMap[9]);
const memoResult = importAllResult.memo(function SoundboardSoundPicker(channel) {
  let availableSounds;
  let categories;
  let tmp12;
  let tmp3;
  let tmp4;
  channel = channel.channel;
  const arg1 = channel;
  const tmp = callback5();
  [tmp3, tmp4] = callback(importAllResult.useState(0), 2);
  const ref = importAllResult.useRef(null);
  let obj = arg1(dependencyMap[11]);
  const sharedValue = obj.useSharedValue(0);
  let obj1 = arg1(dependencyMap[12]);
  const items = [closure_9];
  const stateFromStores = obj1.useStateFromStores(items, () => currentUser.getCurrentUser());
  const importDefault = stateFromStores;
  let obj2 = arg1(dependencyMap[12]);
  const items1 = [closure_8];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => mediaSessionId.getMediaSessionId());
  const tmp2 = callback(importAllResult.useState(0), 2);
  ({ categories, availableSounds } = importDefault(dependencyMap[13])(channel, { filterOutEmptyCurrentGuild: true }));
  const dependencyMap = availableSounds;
  const tmp10 = callback2((searchQuery) => searchQuery.searchQuery);
  let obj3 = arg1(dependencyMap[14]);
  const tmp9 = importDefault(dependencyMap[13])(channel, { filterOutEmptyCurrentGuild: true });
  [tmp12, closure_3] = callback(importAllResult.useState(obj3.searchSounds(tmp10, availableSounds, stateFromStores, channel)), 2);
  let obj4 = arg1(dependencyMap[13]);
  const searchCategories = obj4.useSearchCategories(categories, tmp12, tmp10);
  const tmp11 = callback(importAllResult.useState(obj3.searchSounds(tmp10, availableSounds, stateFromStores, channel)), 2);
  const items2 = [channel, stateFromStores, availableSounds];
  const callback = importAllResult.useCallback((arg0) => {
    callback2(arg0);
    callback(channel(availableSounds[14]).searchSounds(arg0, availableSounds, stateFromStores, channel));
  }, items2);
  obj = {};
  const tmp14 = importDefault(dependencyMap[16]);
  obj.type = arg1(dependencyMap[19]).ImpressionTypes.HALFSHEET;
  obj.name = arg1(dependencyMap[19]).ImpressionNames.SOUNDBOARD_POPOUT;
  obj.properties = { source: channel.analyticsSource, guild_id: channel.guild_id, media_session_id: stateFromStores1 };
  importDefault(dependencyMap[18])(obj);
  let obj6 = arg1(dependencyMap[11]);
  const sharedValue1 = obj6.useSharedValue(-1);
  let obj7 = arg1(dependencyMap[11]);
  const sharedValue2 = obj7.useSharedValue(false);
  obj = { value: tmp14(importDefault(dependencyMap[17]).SOUNDBOARD_ACTION_SHEET).analyticsLocations };
  let obj9 = arg1(dependencyMap[20]);
  let isIOSResult = obj9.isIOS();
  if (isIOSResult) {
    obj1 = { <string:1555098828>: true, <string:3182058578>: "/assets/.cache/intl/bW9kdWxlcy9ndWlsZF9zZXR0aW5ncy9zZXJ2ZXJfbW9uZXRpemF0aW9uL3RhZ3Mvd2Vi", <string:4224476795>: null, animatedSheetIndex: sharedValue1 };
    isIOSResult = callback3(importDefault(dependencyMap[21]), obj1);
  }
  const items3 = [isIOSResult, ];
  obj2 = { reactionSelectedIndex: null, enableHome: null, useIsVerifiedAdult: null, animatedIndex: sharedValue1 };
  const tmp16 = importDefault(dependencyMap[18]);
  const tmp20 = callback4;
  const tmp25 = callback4;
  let tmp26;
  if (obj13.isAndroid()) {
    obj3 = { name: "soundboard-footer" };
    tmp26 = callback3(arg1(dependencyMap[23]).PortalHost, obj3);
  }
  obj2.footer = tmp26;
  obj4 = { style: tmp.container };
  const obj5 = { -32: null, 0: null, style: tmp.title };
  const intl = arg1(dependencyMap[25]).intl;
  obj5.children = intl.string(arg1(dependencyMap[25]).t.ABjMWI);
  const items4 = [callback3(arg1(dependencyMap[24]).Text, obj5), , , ];
  obj6 = { style: tmp.header };
  obj7 = { size: "md" };
  const intl2 = arg1(dependencyMap[25]).intl;
  obj7.placeholder = intl2.string(arg1(dependencyMap[25]).t.sKt3xS);
  obj7.onChange = callback;
  obj6.children = callback3(arg1(dependencyMap[26]).SearchField, obj7);
  items4[1] = callback3(View, obj6);
  const obj8 = { style: tmp.body };
  obj9 = { listRef: ref, channel };
  const sum = EXPRESSION_FOOTER_HEIGHT + importDefault(dependencyMap[15])({ isKeyboardAwareOnAndroid: false }).insets.bottom;
  obj9.insetBottom = sum + importDefault(dependencyMap[10]).space.PX_16;
  obj9.scrollPosition = sharedValue;
  obj9.setCategoryIndex = tmp4;
  obj9.categories = searchCategories;
  obj9.shouldShowPremiumUpsell = sharedValue2;
  obj8.children = callback3(arg1(dependencyMap[27]).SoundboardSoundPickerList, obj9);
  items4[2] = callback3(View, obj8);
  items4[3] = callback3(importDefault(dependencyMap[28]), { shouldShow: sharedValue2 });
  obj4.children = items4;
  const items5 = [callback4(View, obj4), callback3(importDefault(dependencyMap[29]), { guildId: channel.guild_id, listRef: ref, categories, categoryIndex: tmp3 })];
  obj2.children = items5;
  items3[1] = tmp25(arg1(dependencyMap[22]).BottomSheet, obj2);
  obj.children = items3;
  return tmp20(arg1(dependencyMap[16]).AnalyticsLocationProvider, obj);
});
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/soundboard/native/SoundboardSoundPicker.tsx");

export default memoResult;
