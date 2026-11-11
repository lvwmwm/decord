// Module ID: 18936
// Function ID: 18937
// Name: GuildsBarPendingGuildFolder
// Dependencies: [19, 5286, 1072, 21, 18923, 10741, 504, 18916, 1652, 5491, 6854, 1113, 18922, 12188, 2]

// Module 18936 (GuildsBarPendingGuildFolder)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import usePendingFolderGuildIdsDefault from "usePendingFolderGuildIds" /* 10741 */;
import GuildsBarFolderMenuItems from "GuildsBarFolderMenuItems" /* 18916 */;
import GuildsBarAnimatedItemWrapperDefault from "GuildsBarAnimatedItemWrapper" /* 18923 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5286 */;
import size from "module_2" /* 2 */;

let importDefault, includes;

const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
const jsx = Fragment.jsx;
const memoResult = react.memo(function GuildsBarPendingGuildFolder(id) {
  let accessibilityActions;
  let childNodes;
  let expanded;
  let onAccessibilityAction;
  id = id.id;
  ({ expanded, childNodes } = id);
  let obj = id(18923);
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: false });
  importDefault = usePendingFolderGuildIdsDefault();
  let obj2 = id(504);
  const items = [SelectedGuildStore];
  const items1 = [id];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    includes = includes.includes;
    let guildId = SelectedGuildStore.getGuildId();
    if (guildId == null) {
      guildId = EMPTY_STRING_SNOWFLAKE_ID;
    }
    return includes(guildId);
  });
  const memo = react.useMemo(() => {
    const obj = GuildsBarFolderMenuItems;
    const guildFolderMenuItems = obj.getGuildFolderMenuItems(id);
    const obj2 = {
      accessibilityActions: guildFolderMenuItems.map((label) => ({ name: label.label, label: label.label })),
      onAccessibilityAction(arg0) {
        let closure_0 = arg0;
        const found = guildFolderMenuItems.find((label) => label.label === nativeEvent.nativeEvent.actionName);
        if (found != null) {
          const action = found.action;
          if (action != null) {
            action();
          }
        }
      }
    };
    return obj2;
  }, items1);
  ({ accessibilityActions, onAccessibilityAction } = memo);
  const items2 = [id];
  const obj3 = id(1652);
  const sharedValue = obj3.useSharedValue("" + id);
  const memo1 = react.useMemo(() => {
    let obj = {
      onPress() {
        const obj = id(dependencyMap[9]);
        const result = obj.triggerHapticFeedback(id(dependencyMap[9]).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj2 = includes(dependencyMap[10]);
        const result1 = obj2.toggleGuildFolderExpand(closure_1_0);
      }
    };
    return obj;
  }, items2);
  GuildsBarAnimatedItemWrapperDefault;
  const intl = id(1113).intl;
  let tmp8Result = null;
  const tmp = id;
  if (expanded) {
    const obj5 = { folderId: id, totalItems: childNodes.length };
    tmp8Result = tmp8(tmp(18922).GuildsBarGuildFolderBG, obj5);
  }
  return <tmp9 id={"" + id} accessibilityActions={accessibilityActions} onAccessibilityAction={onAccessibilityAction} selected={stateFromStores} unread={false} circle={false} styles={guildsBarAnimatedWrapperStyles} label={intl.string(id(1113).t["scsU+l"])} sharedId={sharedValue} cutouts="HermesInternal" overState="a" preventClipping="inlineCode" config={memo1} externalChildren={tmp8Result}>{5}</tmp9>;
});
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarPendingGuildFolder.tsx");

export default memoResult;
