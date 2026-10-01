// Module ID: 15982
// Function ID: 15983
// Name: GuildsBarPendingGuild
// Dependencies: [19, 4656, 2063, 4655, 5750, 21, 4836, 576, 15930, 4531, 504, 5896, 15964, 15933, 4658, 5839, 15945, 15974, 15922, 4566, 15953, 5899, 2]

// Module 15982 (GuildsBarPendingGuild)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import GuildIcon from "GuildIcon" /* 5896 */;
import getGuildsBarGuildMenuItemsDefault from "getGuildsBarGuildMenuItems" /* 15922 */;
import react from "react" /* 19 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4656 */;
import GuildRecord from "GuildRecord" /* 2063 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import SortedGuildStore from "SortedGuildStore" /* 5750 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let size;
({ getGuildIconSource: hasOwnProperty, getGuildIconURL: metroRequire } = GuildRecord);
const jsx = Fragment.jsx;
let obj = { guildIcon: size };
size = { width: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE, height: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE };
let closure_10 = createStyles.createStyles(obj);
const memoResult = react.memo(function GuildsBarPendingGuild(guildId) {
  let accessibilityActions;
  let asset;
  let badge;
  let cutouts;
  let guildName;
  let guildsTree;
  let icon;
  let onAccessibilityAction;
  let tmp19Result;
  guildId = guildId.guildId;
  let token;
  let stateFromStores;
  let stateFromStores3;
  let tmp2 = guildId;
  const tmp = closure_10();
  let obj = guildId(stateFromStores[8]);
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true });
  const obj2 = guildId(stateFromStores[9]);
  token = obj2.useToken(token(stateFromStores[7]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const items = [SelectedGuildStore];
  const items1 = [guildId];
  const obj3 = guildId(stateFromStores[10]);
  stateFromStores = obj3.useStateFromStores(items, () => SelectedGuildStore.getGuildId() === guildId, items1);
  const items2 = [stateFromStores3];
  const items3 = [guildId];
  const obj4 = guildId(stateFromStores[10]);
  const stateFromStores1 = obj4.useStateFromStores(items2, () => UserGuildJoinRequestStore.getRequest(guildId), items3);
  const items4 = [stateFromStores3];
  const items5 = [guildId, token, stateFromStores];
  const obj5 = guildId(stateFromStores[10]);
  const stateFromStores2 = obj5.useStateFromStores(items4, () => {
    let tmp7;
    const joinRequestGuild = UserGuildJoinRequestStore.getJoinRequestGuild(guildId);
    let tmp2;
    if (null != joinRequestGuild) {
      tmp2 = metroRequire(joinRequestGuild, token, stateFromStores);
    }
    let name;
    if (joinRequestGuild != null) {
      name = joinRequestGuild.name;
    }
    const obj = { guildName: name, icon: tmp2, asset: tmp7 };
    tmp7 = undefined;
    if (null != tmp2) {
      if (null != joinRequestGuild) {
        tmp7 = hasOwnProperty(joinRequestGuild, GuildIcon.ImageSizes[GuildIcon.GuildIconSizes.LARGE], stateFromStores);
      }
    }
    return obj;
  }, items5, token(stateFromStores[12]));
  ({ guildName, asset, icon } = stateFromStores2);
  let applicationStatus;
  const tmp10 = token(stateFromStores[13]);
  if (stateFromStores1 != null) {
    applicationStatus = stateFromStores1.applicationStatus;
  }
  const items6 = [guildId, ];
  let applicationStatus1;
  ({ badge, cutouts } = tmp10({ mentionCount: 0, joinRequestState: applicationStatus }));
  const useMemo = stateFromStores1.useMemo;
  tmp10({ mentionCount: 0, joinRequestState: applicationStatus });
  const obj6 = stateFromStores1;
  if (stateFromStores1 != null) {
    applicationStatus1 = stateFromStores1.applicationStatus;
  }
  items6[1] = applicationStatus1;
  const memo = useMemo(() => {
    let obj = {
      onPress() {
        applicationStatus = undefined;
        if (applicationStatus != null) {
          applicationStatus = applicationStatus.applicationStatus;
        }
        if (guildId(stateFromStores[14]).GuildJoinRequestApplicationStatuses.STARTED === applicationStatus) {
          const tmp2Result = guildId(stateFromStores[15]);
          const result = tmp2Result.openMemberVerificationIncompleteAlert(guildId);
        } else if (guildId(stateFromStores[14]).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
          const tmp2Result3 = guildId(stateFromStores[15]);
          const result1 = tmp2Result3.openMemberVerificationPendingAlert(guildId);
        } else if (guildId(stateFromStores[14]).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
          token(stateFromStores[16])(guildId);
        } else if (guildId(stateFromStores[14]).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
          const obj = { guildId, canWithdraw: true };
          const tmp2Result4 = guildId(stateFromStores[15]);
          const result2 = tmp2Result4.openMemberVerificationRejectedAlert(obj);
        }
      }
    };
    return obj;
  }, items6);
  const tmp15 = token(stateFromStores[17])(guildId, icon, asset);
  let tmp2Result = tmp2(tmp3[10]);
  const items7 = [SortedGuildStore];
  stateFromStores3 = tmp2Result.useStateFromStores(items7, () => guildsTree.getGuildsTree().version);
  const items8 = [guildId, stateFromStores3];
  const memo1 = obj6.useMemo(() => {
    const arr = getGuildsBarGuildMenuItemsDefault(guildId, stateFromStores3);
    const obj = {
      accessibilityActions: arr.map((label) => ({ name: label.label, label: label.label })),
      onAccessibilityAction(arg0) {
        let closure_0 = arg0;
        const found = arr.find((label) => label.label === nativeEvent.nativeEvent.actionName);
        if (found != null) {
          const action = found.action;
          if (action != null) {
            action();
          }
        }
      }
    };
    return obj;
  }, items8);
  ({ accessibilityActions, onAccessibilityAction } = memo1);
  const tmp2Result2 = tmp2(stateFromStores[19]);
  const sharedValue = tmp2Result2.useSharedValue(guildId);
  let str = guildName;
  token(stateFromStores[8]);
  if (guildName == null) {
    str = "";
  }
  if (null != tmp15) {
    const obj8 = { source: tmp15, style: tmp.guildIcon };
    tmp19Result = tmp19(tmp5(tmp3[21]), obj8);
  } else {
    const obj9 = { value: guildName, selected: stateFromStores, animate: stateFromStores, size: tmp2(stateFromStores[11]).GuildIconSizes.LARGE };
    const tmp5Result2 = token(stateFromStores[11]);
    tmp19Result = tmp19(tmp5Result2, obj9);
  }
  return <tmp5Result id={guildId} accessibilityActions={accessibilityActions} onAccessibilityAction={onAccessibilityAction} cutouts={cutouts} selected={stateFromStores} sharedId={sharedValue} circle={!stateFromStores} overState="flex" unread={null} label={str} config={memo} styles={guildsBarAnimatedWrapperStyles} externalChildren={badge} expandedChildren={null}>{tmp19Result}</tmp5Result>;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarPendingGuild.tsx");

export default memoResult;
