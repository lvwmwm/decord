// Module ID: 15015
// Function ID: 113055
// Name: BadgedBookmarksIcon
// Dependencies: []

// Module 15015 (BadgedBookmarksIcon)
function BadgedBookmarksIcon(showRedDot) {
  let obj = arg1(dependencyMap[9]);
  const token = obj.useToken(importDefault(dependencyMap[7]).colors.INTERACTIVE_TEXT_DEFAULT, importDefault(dependencyMap[8])());
  const tmp3 = callback3();
  let obj1 = arg1(dependencyMap[10]);
  obj = {};
  const items = [tmp3.container, obj1.useIconSizeStyles("sm", true, 2)];
  obj.style = items;
  if (showRedDot.showRedDot) {
    obj = { style: tmp3.iconAnchor };
    obj1 = {};
    const items1 = [obj];
    obj1.cutouts = items1;
    const obj2 = { size: "sm", color: token };
    obj1.children = callback(arg1(dependencyMap[11]).BookmarkIcon, obj2);
    const items2 = [callback(importDefault(dependencyMap[4]), obj1), ];
    const obj3 = { style: tmp3.dot };
    items2[1] = callback(View, obj3);
    obj.children = items2;
    let tmp9 = callback2(View, obj);
    const tmp15 = importDefault(dependencyMap[4]);
  } else {
    const obj4 = { size: "sm", color: token };
    tmp9 = callback(arg1(dependencyMap[11]).BookmarkIcon, obj4);
  }
  obj.children = tmp9;
  return callback(View, obj);
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = { shape: arg1(dependencyMap[4]).CutoutShape.Circle, x: arg1(dependencyMap[5]).ICON_SIZE.sm - 9, y: -1, size: 10 };
let obj2 = arg1(dependencyMap[6]);
obj = { container: {} };
const tmp2 = arg1(dependencyMap[3]);
obj.iconAnchor = { width: arg1(dependencyMap[5]).ICON_SIZE.sm, height: arg1(dependencyMap[5]).ICON_SIZE.sm, position: "relative" };
obj2 = { "Bool(true)": "y", "Bool(true)": "serializeAppStartupMetrics", "Bool(true)": "%Object.getPrototypeOf%", "Bool(true)": "isArrayBuffer", "Bool(true)": "handleSoundpackUpdate", "Bool(true)": "getSections", "Bool(true)": "ThemeContextFlags", backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_FEEDBACK_NOTIFICATION, borderRadius: importDefault(dependencyMap[7]).radii.lg };
obj.dot = obj2;
let closure_9 = obj2.createStyles(obj);
const obj1 = { width: arg1(dependencyMap[5]).ICON_SIZE.sm, height: arg1(dependencyMap[5]).ICON_SIZE.sm, position: "relative" };
const forwardRefResult = importAllResult.forwardRef((onOpen, ref) => {
  onOpen = onOpen.onOpen;
  ref = onOpen;
  let obj = ref(dependencyMap[12]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_5.hasOverdueReminder(), []);
  const items1 = [closure_5];
  const stateFromStores1 = ref(dependencyMap[12]).useStateFromStores(items1, () => closure_5.getSavedMessageCount());
  const importDefault = stateFromStores1;
  const items2 = [onOpen, stateFromStores1];
  obj = { ref };
  const callback = importAllResult.useCallback(() => {
    onOpen();
    if (0 === stateFromStores1) {
      if (!stateFromStores1(paths[13])()) {
        stateFromStores1(paths[14])(onOpen(paths[15]).EntitlementFeatureNames.SAVED_MESSAGES);
        const tmp6 = stateFromStores1(paths[14]);
      }
    }
    let obj = stateFromStores1(paths[16]);
    obj = { presentation: "modal" };
    obj.pushLazy(onOpen(paths[18])(paths[17], paths.paths), {}, "for-later-modal", obj);
  }, items2);
  obj = { icon: callback(BadgedBookmarksIcon, { showRedDot: stateFromStores }), onPress: callback };
  const intl = ref(dependencyMap[20]).intl;
  obj.accessibilityLabel = intl.string(ref(dependencyMap[20]).t.2pAkDA);
  obj.maxFontSizeMultiplier = 2;
  obj.children = callback(ref(dependencyMap[19]).IconButton, obj);
  return callback(View, obj);
});
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/saved_messages/native/ForLaterOpenActionButton.tsx");

export default forwardRefResult;
