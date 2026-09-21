// Module ID: 16646
// Function ID: 16647
// Name: GuildsBarPendingGuildFolder
// Dependencies: [19, 4577, 1074, 21, 16633, 10033, 504, 16626, 4492, 4724, 5737, 1115, 16632, 13193, 2]

// Module 16646 (GuildsBarPendingGuildFolder)
import usePendingFolderGuildIdsDefault from "usePendingFolderGuildIds" /* 10033 */;
import GuildsBarFolderMenuItems from "GuildsBarFolderMenuItems" /* 16626 */;
import GuildsBarAnimatedItemWrapperDefault from "GuildsBarAnimatedItemWrapper" /* 16633 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4577 */;

require = fn;
const EMPTY_STRING_SNOWFLAKE_ID = fn(1074).EMPTY_STRING_SNOWFLAKE_ID;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarPendingGuildFolder.tsx");

export default noop.memo(function GuildsBarPendingGuildFolder(id) {
  id = id.id;
  ({ expanded, childNodes } = id);
  let obj = id(16633);
  importDefault = usePendingFolderGuildIdsDefault();
  const guildsBarAnimatedWrapperStyles = id(16633).useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: false });
  const items = [SelectedGuildStore];
  const items1 = [id];
  const stateFromStores = id(504).useStateFromStores(items, () => {
    let guildId = SelectedGuildStore.getGuildId();
    if (guildId == null) {
      guildId = EMPTY_STRING_SNOWFLAKE_ID;
    }
    return closure_1.includes(guildId);
  });
  const memo = noop.useMemo(() => {
    const guildFolderMenuItems = GuildsBarFolderMenuItems.getGuildFolderMenuItems(id);
    return {
      accessibilityActions: guildFolderMenuItems.map((label) => ({ name: label.label, label: label.label })),
      onAccessibilityAction(arg0) {
        const nativeEvent = arg0;
        const found = guildFolderMenuItems.find((label) => label.label === nativeEvent.nativeEvent.actionName);
        if (found != null) {
          const action = found.action;
          if (action != null) {
            action();
          }
        }
      }
    };
  }, items1);
  ({ accessibilityActions, onAccessibilityAction } = memo);
  const obj2 = id(504);
  const items2 = [id];
  const sharedValue = id(4492).useSharedValue("" + id);
  const memo1 = noop.useMemo(() => ({
    onPress() {
      const result = id(4724).triggerHapticFeedback(id(4724).HapticFeedbackTypes.IMPACT_LIGHT);
      const obj = id(4724);
      const result1 = closure_1(5737).toggleGuildFolderExpand(closure_1_0);
    }
  }), items2);
  const obj4 = { id: null, accessibilityActions: null, onAccessibilityAction: null, selected: null, unread: false, circle: false, styles: null, label: null, sharedId: null, cutouts: "a", overState: "ti", config: "r", externalChildren: "isArray", children: "next" };
  const obj3 = id(4492);
  obj4.id = "" + id;
  obj4.accessibilityActions = accessibilityActions;
  obj4.onAccessibilityAction = onAccessibilityAction;
  obj4.selected = stateFromStores;
  obj4.styles = guildsBarAnimatedWrapperStyles;
  const intl = id(1115).intl;
  obj4.label = intl.string(id(1115).t["scsU+l"]);
  obj4.sharedId = sharedValue;
  obj4.config = memo1;
  let tmp8Result = null;
  if (expanded) {
    const obj5 = { folderId: id, totalItems: childNodes.length };
    tmp8Result = tmp8(tmp(16632).GuildsBarGuildFolderBG, obj5);
  }
  obj4.externalChildren = tmp8Result;
  obj4.children = jsx(id(13193).HourglassIcon, {});
  return jsx(GuildsBarAnimatedItemWrapperDefault, { id: null, accessibilityActions: null, onAccessibilityAction: null, selected: null, unread: false, circle: false, styles: null, label: null, sharedId: null, cutouts: "a", overState: "ti", config: "r", externalChildren: "isArray", children: "next" });
});
