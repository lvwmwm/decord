// Module ID: 14874
// Function ID: 113424
// Dependencies: [31, 3948, 1391, 3947, 4970, 33, 4130, 689, 14823, 3834, 566, 5515, 14858, 14825, 3950, 9152, 14838, 14866, 14814, 3991, 14844, 5085, 2]

// Module 14874
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import isGuildOwner from "isGuildOwner";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ getGuildIconSource: closure_5, getGuildIconURL: closure_6 } = isGuildOwner);
let obj = {};
obj = { width: require("_createForOfIteratorHelperLoose").modules.mobile.GUILD_BAR_ITEM_SIZE, height: require("_createForOfIteratorHelperLoose").modules.mobile.GUILD_BAR_ITEM_SIZE };
obj.guildIcon = obj;
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function GuildsBarPendingGuild(guildId) {
  let accessibilityActions;
  let asset;
  let badge;
  let cutouts;
  let icon;
  let onAccessibilityAction;
  guildId = guildId.guildId;
  let stateFromStores3;
  let obj = guildId(stateFromStores[8]);
  const tmp = callback();
  let obj1 = guildId(stateFromStores[9]);
  token = obj1.useToken(token(stateFromStores[7]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  let obj2 = guildId(stateFromStores[10]);
  const items = [closure_7];
  const items1 = [guildId];
  stateFromStores = obj2.useStateFromStores(items, () => outer1_7.getGuildId() === guildId, items1);
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true });
  const items2 = [stateFromStores3];
  const items3 = [guildId];
  const stateFromStores1 = guildId(stateFromStores[10]).useStateFromStores(items2, () => stateFromStores3.getRequest(guildId), items3);
  const obj4 = guildId(stateFromStores[10]);
  const items4 = [stateFromStores3];
  const items5 = [guildId, token, stateFromStores];
  const stateFromStores2 = guildId(stateFromStores[10]).useStateFromStores(items4, () => {
    const joinRequestGuild = stateFromStores3.getJoinRequestGuild(guildId);
    let tmp2;
    if (null != joinRequestGuild) {
      tmp2 = outer1_6(joinRequestGuild, token, stateFromStores);
    }
    const obj = {};
    let name;
    if (null != joinRequestGuild) {
      name = joinRequestGuild.name;
    }
    obj.guildName = name;
    obj.icon = tmp2;
    let tmp7;
    if (null != tmp2) {
      if (null != joinRequestGuild) {
        tmp7 = outer1_5(joinRequestGuild, guildId(stateFromStores[11]).ImageSizes[guildId(undefined, stateFromStores[11]).GuildIconSizes.LARGE], stateFromStores);
      }
    }
    obj.asset = tmp7;
    return obj;
  }, items5, token(stateFromStores[12]));
  const guildName = stateFromStores2.guildName;
  ({ asset, icon } = stateFromStores2);
  obj = { mentionCount: 0 };
  let applicationStatus;
  const obj5 = guildId(stateFromStores[10]);
  if (null != stateFromStores1) {
    applicationStatus = stateFromStores1.applicationStatus;
  }
  obj.joinRequestState = applicationStatus;
  let tmp7 = token(stateFromStores[13]);
  const items6 = [guildId, ];
  let applicationStatus1;
  ({ badge, cutouts } = token(stateFromStores[13])(obj));
  if (null != stateFromStores1) {
    applicationStatus1 = stateFromStores1.applicationStatus;
  }
  items6[1] = applicationStatus1;
  const memo = stateFromStores1.useMemo(() => ({
    onPress() {
      let applicationStatus;
      if (null != outer1_3) {
        applicationStatus = outer1_3.applicationStatus;
      }
      if (guildId(stateFromStores[14]).GuildJoinRequestApplicationStatuses.STARTED === applicationStatus) {
        const result = guildId(stateFromStores[15]).openMemberVerificationIncompleteAlert(outer1_0);
        const obj2 = guildId(stateFromStores[15]);
      } else if (guildId(stateFromStores[14]).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
        let obj = guildId(stateFromStores[15]);
        const result1 = obj.openMemberVerificationPendingAlert(outer1_0);
      } else if (guildId(stateFromStores[14]).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
        token(stateFromStores[16])(outer1_0);
      } else if (guildId(stateFromStores[14]).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
        obj = { guildId: outer1_0, canWithdraw: true };
        const result2 = guildId(stateFromStores[15]).openMemberVerificationRejectedAlert(obj);
        const obj3 = guildId(stateFromStores[15]);
      }
    }
  }), items6);
  const tmp13 = token(stateFromStores[17])(guildId, icon, asset);
  const tmp7Result = token(stateFromStores[13])(obj);
  const items7 = [closure_8];
  stateFromStores3 = guildId(stateFromStores[10]).useStateFromStores(items7, () => outer1_8.getGuildsTree().version);
  const items8 = [guildId, stateFromStores3];
  const memo1 = stateFromStores1.useMemo(() => {
    arr = token(stateFromStores[18])(arr, stateFromStores3);
    return {
      accessibilityActions: arr.map((label) => ({ name: label.label, label: label.label })),
      onAccessibilityAction(arg0) {
        const found = arg0.find((label) => label.label === nativeEvent.nativeEvent.actionName);
        if (!tmp) {
          found.action();
        }
      }
    };
  }, items8);
  ({ accessibilityActions, onAccessibilityAction } = memo1);
  const obj7 = guildId(stateFromStores[10]);
  const sharedValue = guildId(stateFromStores[19]).useSharedValue(guildId);
  obj = { id: guildId, accessibilityActions, onAccessibilityAction, cutouts, selected: stateFromStores, sharedId: sharedValue, circle: !stateFromStores, overState: undefined, unread: false };
  let str = "";
  const obj8 = guildId(stateFromStores[19]);
  const tmp17 = jsx;
  if (null != guildName) {
    str = guildName;
  }
  obj.label = str;
  obj.config = memo;
  obj.styles = guildsBarAnimatedWrapperStyles;
  obj.externalChildren = badge;
  obj.expandedChildren = jsx(token(stateFromStores[20]), { guildId, disableSubtitle: true });
  if (null != tmp13) {
    obj1 = { source: tmp13, style: tmp.guildIcon };
    let tmp24 = jsx(token(stateFromStores[21]), { source: tmp13, style: tmp.guildIcon });
  } else {
    obj2 = { value: guildName, selected: stateFromStores, animate: stateFromStores, size: guildId(stateFromStores[11]).GuildIconSizes.LARGE };
    tmp24 = jsx(token(stateFromStores[11]), { value: guildName, selected: stateFromStores, animate: stateFromStores, size: guildId(stateFromStores[11]).GuildIconSizes.LARGE });
    const tmp22 = token(stateFromStores[11]);
  }
  obj.children = tmp24;
  return tmp17(token(stateFromStores[8]), obj);
});
let result = require("isGuildOwner").fileFinishedImporting("modules/guilds_bar/native/GuildsBarPendingGuild.tsx");

export default memoResult;
