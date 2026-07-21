// Module ID: 14713
// Function ID: 110997
// Dependencies: []

// Module 14713
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const EMPTY_STRING_SNOWFLAKE_ID = arg1(dependencyMap[2]).EMPTY_STRING_SNOWFLAKE_ID;
const jsx = arg1(dependencyMap[3]).jsx;
const memoResult = importAllResult.memo(function GuildsBarPendingGuildFolder(id) {
  let accessibilityActions;
  let childNodes;
  let expanded;
  let onAccessibilityAction;
  id = id.id;
  const arg1 = id;
  ({ expanded, childNodes } = id);
  let obj = arg1(dependencyMap[4]);
  const importDefault = importDefault(dependencyMap[5])();
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles({ <string:3577514597>: null, <string:3965960815>: null });
  const items = [closure_4];
  const items1 = [id];
  const stateFromStores = arg1(dependencyMap[6]).useStateFromStores(items, () => {
    let guildId = guildId.getGuildId();
    if (null == guildId) {
      guildId = closure_5;
    }
    return closure_1.includes(guildId);
  });
  const memo = importAllResult.useMemo(() => {
    let obj = id(closure_2[7]);
    const guildFolderMenuItems = obj.getGuildFolderMenuItems(id);
    const id = guildFolderMenuItems;
    obj = {
      accessibilityActions: guildFolderMenuItems.map((label) => ({ name: label.label, label: label.label })),
      onAccessibilityAction(arg0) {
        const guildFolderMenuItems = arg0;
        const found = guildFolderMenuItems.find((label) => label.label === label.nativeEvent.actionName);
        if (!tmp) {
          found.action();
        }
      }
    };
    return obj;
  }, items1);
  ({ accessibilityActions, onAccessibilityAction } = memo);
  const obj2 = arg1(dependencyMap[6]);
  const items2 = [id];
  const sharedValue = arg1(dependencyMap[8]).useSharedValue("" + id);
  const memo1 = importAllResult.useMemo(() => ({
    onPress() {
      const result = callback(closure_2[9]).triggerHapticFeedback(callback(closure_2[9]).HapticFeedbackTypes.IMPACT_LIGHT);
      const obj = callback(closure_2[9]);
      const result1 = callback2(closure_2[10]).toggleGuildFolderExpand(callback);
    }
  }), items2);
  obj = {};
  const obj3 = arg1(dependencyMap[8]);
  const tmp6 = jsx;
  obj.id = "" + id;
  obj.accessibilityActions = accessibilityActions;
  obj.onAccessibilityAction = onAccessibilityAction;
  obj.selected = stateFromStores;
  obj.unread = false;
  obj.circle = false;
  obj.styles = guildsBarAnimatedWrapperStyles;
  const intl = arg1(dependencyMap[11]).intl;
  obj.label = intl.string(arg1(dependencyMap[11]).t.scsU+l);
  obj.sharedId = sharedValue;
  obj.cutouts = undefined;
  obj.overState = undefined;
  obj.preventClipping = true;
  obj.config = memo1;
  let tmp8 = null;
  if (expanded) {
    obj = { folderId: id, totalItems: childNodes.length };
    tmp8 = jsx(arg1(dependencyMap[12]).GuildsBarGuildFolderBG, obj);
  }
  obj.externalChildren = tmp8;
  obj.children = jsx(arg1(dependencyMap[13]).HourglassIcon, {});
  return tmp6(importDefault(dependencyMap[4]), obj);
});
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/guilds_bar/native/GuildsBarPendingGuildFolder.tsx");

export default memoResult;
