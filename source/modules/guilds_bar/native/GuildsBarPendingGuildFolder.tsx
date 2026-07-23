// Module ID: 14836
// Function ID: 113204
// Dependencies: [31, 3947, 653, 33, 14823, 10943, 566, 14815, 3991, 4099, 5048, 1212, 14822, 11927, 2]

// Module 14836
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo(function GuildsBarPendingGuildFolder(id) {
  let accessibilityActions;
  let childNodes;
  let expanded;
  let onAccessibilityAction;
  id = id.id;
  ({ expanded, childNodes } = id);
  let obj = id(14823);
  importDefault = importDefault(10943)();
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: false });
  const items = [_isNativeReflectConstruct];
  const items1 = [id];
  const stateFromStores = id(566).useStateFromStores(items, () => {
    let guildId = outer1_4.getGuildId();
    if (null == guildId) {
      guildId = outer1_5;
    }
    return closure_1.includes(guildId);
  });
  const memo = importAllResult.useMemo(() => {
    let obj = id(outer1_2[7]);
    guildFolderMenuItems = obj.getGuildFolderMenuItems(guildFolderMenuItems);
    obj = {
      accessibilityActions: guildFolderMenuItems.map((label) => ({ name: label.label, label: label.label })),
      onAccessibilityAction(arg0) {
        const guildFolderMenuItems = arg0;
        const found = guildFolderMenuItems.find((label) => label.label === nativeEvent.nativeEvent.actionName);
        if (!tmp) {
          found.action();
        }
      }
    };
    return obj;
  }, items1);
  ({ accessibilityActions, onAccessibilityAction } = memo);
  const obj2 = id(566);
  const items2 = [id];
  const sharedValue = id(3991).useSharedValue("" + id);
  const memo1 = importAllResult.useMemo(() => ({
    onPress() {
      const result = id(outer2_2[9]).triggerHapticFeedback(id(outer2_2[9]).HapticFeedbackTypes.IMPACT_LIGHT);
      const obj = id(outer2_2[9]);
      const result1 = callback(outer2_2[10]).toggleGuildFolderExpand(outer1_0);
    }
  }), items2);
  obj = {};
  const obj3 = id(3991);
  const tmp6 = jsx;
  obj.id = "" + id;
  obj.accessibilityActions = accessibilityActions;
  obj.onAccessibilityAction = onAccessibilityAction;
  obj.selected = stateFromStores;
  obj.unread = false;
  obj.circle = false;
  obj.styles = guildsBarAnimatedWrapperStyles;
  const intl = id(1212).intl;
  obj.label = intl.string(id(1212).t["scsU+l"]);
  obj.sharedId = sharedValue;
  obj.cutouts = undefined;
  obj.overState = undefined;
  obj.preventClipping = true;
  obj.config = memo1;
  let tmp8 = null;
  if (expanded) {
    obj = { folderId: id, totalItems: childNodes.length };
    tmp8 = jsx(id(14822).GuildsBarGuildFolderBG, { folderId: id, totalItems: childNodes.length });
  }
  obj.externalChildren = tmp8;
  obj.children = jsx(id(11927).HourglassIcon, {});
  return tmp6(importDefault(14823), obj);
});
let result = require("ME").fileFinishedImporting("modules/guilds_bar/native/GuildsBarPendingGuildFolder.tsx");

export default memoResult;
