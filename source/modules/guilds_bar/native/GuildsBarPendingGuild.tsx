// Module ID: 14747
// Function ID: 111179
// Dependencies: []

// Module 14747
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ getGuildIconSource: closure_5, getGuildIconURL: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const jsx = arg1(dependencyMap[5]).jsx;
const tmp2 = arg1(dependencyMap[2]);
let obj = {};
obj = { width: importDefault(dependencyMap[7]).modules.mobile.GUILD_BAR_ITEM_SIZE, height: importDefault(dependencyMap[7]).modules.mobile.GUILD_BAR_ITEM_SIZE };
obj.guildIcon = obj;
let closure_10 = arg1(dependencyMap[6]).createStyles(obj);
const obj2 = arg1(dependencyMap[6]);
const memoResult = importAllResult.memo(function GuildsBarPendingGuild(guildId) {
  let accessibilityActions;
  let asset;
  let badge;
  let cutouts;
  let icon;
  let onAccessibilityAction;
  guildId = guildId.guildId;
  const arg1 = guildId;
  let closure_4;
  let obj = arg1(dependencyMap[8]);
  const tmp = callback();
  let obj1 = arg1(dependencyMap[9]);
  const token = obj1.useToken(importDefault(dependencyMap[7]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const importDefault = token;
  let obj2 = arg1(dependencyMap[10]);
  const items = [closure_7];
  const items1 = [guildId];
  const stateFromStores = obj2.useStateFromStores(items, () => guildId.getGuildId() === guildId, items1);
  const dependencyMap = stateFromStores;
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles({ top: null, left: null });
  const items2 = [closure_4];
  const items3 = [guildId];
  const stateFromStores1 = arg1(dependencyMap[10]).useStateFromStores(items2, () => stateFromStores3.getRequest(guildId), items3);
  const obj4 = arg1(dependencyMap[10]);
  const items4 = [closure_4];
  const items5 = [guildId, token, stateFromStores];
  const stateFromStores2 = arg1(dependencyMap[10]).useStateFromStores(items4, () => {
    const joinRequestGuild = stateFromStores3.getJoinRequestGuild(guildId);
    let tmp2;
    if (null != joinRequestGuild) {
      tmp2 = callback2(joinRequestGuild, token, stateFromStores);
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
        tmp7 = callback(joinRequestGuild, guildId(stateFromStores[11]).ImageSizes[closure_0(undefined, closure_2[11]).GuildIconSizes.LARGE], stateFromStores);
      }
    }
    obj.asset = tmp7;
    return obj;
  }, items5, importDefault(dependencyMap[12]));
  const guildName = stateFromStores2.guildName;
  ({ asset, icon } = stateFromStores2);
  obj = { mentionCount: 0 };
  let applicationStatus;
  const obj5 = arg1(dependencyMap[10]);
  if (null != stateFromStores1) {
    applicationStatus = stateFromStores1.applicationStatus;
  }
  obj.joinRequestState = applicationStatus;
  const tmp7 = importDefault(dependencyMap[13]);
  const items6 = [guildId, ];
  let applicationStatus1;
  ({ badge, cutouts } = importDefault(dependencyMap[13])(obj));
  if (null != stateFromStores1) {
    applicationStatus1 = stateFromStores1.applicationStatus;
  }
  items6[1] = applicationStatus1;
  const memo = importAllResult.useMemo(() => ({
    onPress() {
      let applicationStatus;
      if (null != applicationStatus) {
        applicationStatus = applicationStatus.applicationStatus;
      }
      if (callback(closure_2[14]).GuildJoinRequestApplicationStatuses.STARTED === applicationStatus) {
        const result = callback(closure_2[15]).openMemberVerificationIncompleteAlert(callback);
        const obj2 = callback(closure_2[15]);
      } else if (callback(closure_2[14]).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
        let obj = callback(closure_2[15]);
        const result1 = obj.openMemberVerificationPendingAlert(callback);
      } else if (callback(closure_2[14]).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
        callback2(closure_2[16])(callback);
      } else if (callback(closure_2[14]).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
        obj = { guildId: callback, canWithdraw: true };
        const result2 = callback(closure_2[15]).openMemberVerificationRejectedAlert(obj);
        const obj3 = callback(closure_2[15]);
      }
    }
  }), items6);
  const tmp13 = importDefault(dependencyMap[17])(guildId, icon, asset);
  const tmp7Result = importDefault(dependencyMap[13])(obj);
  const items7 = [closure_8];
  const stateFromStores3 = arg1(dependencyMap[10]).useStateFromStores(items7, () => guildsTree.getGuildsTree().version);
  closure_4 = stateFromStores3;
  const items8 = [guildId, stateFromStores3];
  const memo1 = importAllResult.useMemo(() => {
    const arr = token(stateFromStores[18])(guildId, stateFromStores3);
    const guildId = arr;
    return {
      accessibilityActions: arr.map((label) => ({ name: label.label, label: label.label })),
      onAccessibilityAction(arg0) {
        const found = arg0.find((label) => label.label === label.nativeEvent.actionName);
        if (!tmp) {
          found.action();
        }
      }
    };
  }, items8);
  ({ accessibilityActions, onAccessibilityAction } = memo1);
  const obj7 = arg1(dependencyMap[10]);
  const sharedValue = arg1(dependencyMap[19]).useSharedValue(guildId);
  obj = { id: guildId, accessibilityActions, onAccessibilityAction, cutouts, selected: stateFromStores, sharedId: sharedValue, circle: !stateFromStores, overState: undefined, unread: false };
  let str = "";
  const obj8 = arg1(dependencyMap[19]);
  const tmp17 = jsx;
  if (null != guildName) {
    str = guildName;
  }
  obj.label = str;
  obj.config = memo;
  obj.styles = guildsBarAnimatedWrapperStyles;
  obj.externalChildren = badge;
  obj.expandedChildren = jsx(importDefault(dependencyMap[20]), { guildId, disableSubtitle: true });
  if (null != tmp13) {
    obj1 = { source: tmp13, style: tmp.guildIcon };
    let tmp24 = jsx(importDefault(dependencyMap[21]), obj1);
  } else {
    obj2 = { value: guildName, selected: stateFromStores, animate: stateFromStores, size: arg1(dependencyMap[11]).GuildIconSizes.LARGE };
    tmp24 = jsx(importDefault(dependencyMap[11]), obj2);
    const tmp22 = importDefault(dependencyMap[11]);
  }
  obj.children = tmp24;
  return tmp17(importDefault(dependencyMap[8]), obj);
});
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/guilds_bar/native/GuildsBarPendingGuild.tsx");

export default memoResult;
