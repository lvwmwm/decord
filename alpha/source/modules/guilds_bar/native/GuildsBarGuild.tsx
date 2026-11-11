// Module ID: 18942
// Function ID: 18943
// Name: GuildsBarGuild
// Dependencies: [19, 5110, 6894, 6997, 5114, 5286, 6893, 18914, 18911, 1072, 21, 5243, 575, 5839, 18923, 18618, 18621, 18943, 504, 7654, 18954, 18955, 6205, 1113, 1252, 18893, 18961, 18915, 18962, 1652, 5876, 5957, 18965, 2]

// Module 18942 (GuildsBarGuild)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl10 from "intl" /* 1113 */;
import GuildIcon from "GuildIcon" /* 7654 */;
import GuildsBarConstants from "GuildsBarConstants" /* 18911 */;
import GuildsBarDnDStore from "GuildsBarDnDStore" /* 18914 */;
import getGuildsBarGuildMenuItemsDefault from "getGuildsBarGuildMenuItems" /* 18915 */;
import getGuildsBarGuildAccessibilityActionsDefault from "getGuildsBarGuildAccessibilityActions" /* 18962 */;
import react_mod from "react" /* 19 */;
import GuildRecord from "GuildRecord" /* 5110 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 6894 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6997 */;
import GuildStore from "GuildStore" /* 5114 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5286 */;
import SortedGuildStore from "SortedGuildStore" /* 6893 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

let guildIds, set;

let closure_14;
let closure_15;
let closure_16;
let closure_4;
let hasOwnProperty;
let size;
let react = react_mod;
({ getGuildIconSource: closure_4, getGuildIconURL: hasOwnProperty } = GuildRecord);
const useItemDragState = GuildsBarDnDStore.useItemDragState;
const TRANSITION_PHYSICS = GuildsBarConstants.TRANSITION_PHYSICS;
const AnalyticEvents = Constants.AnalyticEvents;
({ Fragment: closure_14, jsxs: closure_15, jsx: closure_16 } = Fragment);
let obj = { guildIcon: size };
size = { width: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE, height: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE };
let closure_17 = createStyles.createStyles(obj);
let closure_18 = { code: "(function GuildsBarGuildTsx1(values){let[dragDropInProgress,sharedId,guildId,isDragTarget,withSpring,TRANSITION_PHYSICS]=this.__closure;var _guildId;const shouldAnimate=dragDropInProgress.get()&&sharedId.get()===guildId&&!isDragTarget;sharedId.set((_guildId=guildId)!==null&&_guildId!==void 0?_guildId:null);return{animations:{originY:shouldAnimate?withSpring(values.targetOriginY,TRANSITION_PHYSICS,'animate-always'):values.targetOriginY,height:shouldAnimate?withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always'):values.targetHeight},initialValues:{originY:values.currentOriginY,height:values.currentHeight}};})" };
const memoResult = react.memo(function GuildsBarGuild(guildId) {
  let accessibilityActions;
  let asset;
  let badgeBottomRight;
  let badgeTopRight;
  let closure_3;
  let cutouts;
  let dragDropInProgress;
  let dragState;
  let icon;
  let isDragTarget;
  let itemSize;
  let items11;
  let obj9;
  let onAccessibilityAction;
  let overState;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp28Result;
  let tmp28Result2;
  let tmp30;
  guildId = guildId.guildId;
  let flag = guildId.isDragPreview;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = guildId.hideExpandedChildren;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let token;
  let drawerOpen;
  react = undefined;
  let mentionCount;
  let unread;
  let guildName;
  let mediaState;
  let stateFromStores1;
  const tmp = closure_17();
  let tmp2 = guildId;
  let obj = guildId(drawerOpen[13]);
  token = obj.useToken(token(drawerOpen[12]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  let obj2 = guildId(drawerOpen[14]);
  let tmp7 = react;
  const guildsBarAnimatedWrapperStyles = obj2.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true });
  const enableHome = react.useContext(guildId(drawerOpen[15]).HomeDrawerStateContext).enableHome;
  let obj3 = guildId(drawerOpen[16]);
  drawerOpen = obj3.useDrawerOpen(enableHome);
  react = react.useRef(guildId(drawerOpen[17]).HomeDrawerActiveHook.NONE);
  const callback = react.useCallback((current) => {
    closure_3.current = current;
  }, []);
  let items = [mediaState, mentionCount, unread];
  const items1 = [guildId];
  const obj4 = guildId(drawerOpen[18]);
  const stateFromStoresObject = obj4.useStateFromStoresObject(items, () => {
    const obj = { selected: SelectedGuildStore.getGuildId() === guildId, isUnavailable: GuildAvailabilityStore.isUnavailable(guildId), unread: GuildReadStateStore.hasUnread(guildId), mentionCount: GuildReadStateStore.getMentionCount(guildId), isMentionLowImportance: GuildReadStateStore.getIsMentionLowImportance(guildId) };
    return obj;
  }, items1);
  const selected = stateFromStoresObject.selected;
  const isUnavailable = stateFromStoresObject.isUnavailable;
  mentionCount = stateFromStoresObject.mentionCount;
  unread = stateFromStoresObject.unread;
  const isMentionLowImportance = stateFromStoresObject.isMentionLowImportance;
  const items2 = [guildName];
  const items3 = [guildId, token, selected];
  const obj5 = guildId(drawerOpen[18]);
  const stateFromStores = obj5.useStateFromStores(items2, () => {
    let tmp7;
    const guild = GuildStore.getGuild(guildId);
    let tmp2;
    if (null != guild) {
      tmp2 = hasOwnProperty(guild, token, selected);
    }
    let name;
    if (guild != null) {
      name = guild.name;
    }
    const obj = { guildName: name, icon: tmp2, asset: tmp7 };
    tmp7 = undefined;
    if (null != tmp2) {
      if (null != guild) {
        tmp7 = React3(guild, GuildIcon.ImageSizes[GuildIcon.GuildIconSizes.LARGE], selected);
      }
    }
    return obj;
  }, items3, token(drawerOpen[20]));
  guildName = stateFromStores.guildName;
  ({ asset, icon } = stateFromStores);
  const tmp12 = token(drawerOpen[21])(guildId, mentionCount, isMentionLowImportance);
  mediaState = tmp12.mediaState;
  const items4 = [guildId, isUnavailable, drawerOpen];
  ({ badgeTopRight, badgeBottomRight, cutouts } = tmp12);
  const items5 = [guildName, mentionCount, unread, mediaState];
  const memo = react.useMemo(() => {
    let guild_id;
    let ref;
    let obj = {
      onPress() {
        let intl;
        let intl2;
        if (null != guildName.getGuild(guild_id)) {
          const tmp14 = isUnavailable;
          if (!tmp14) {
            const tmp2 = closure_1_2;
            if (tmp2) {
              const guildFolders = stateFromStores1.getGuildFolders();
              const findIndexResult = guildFolders.findIndex((guildIds) => {
                guildIds = guildIds.guildIds;
                return guildIds.includes(guild_id);
              });
              if (findIndexResult > -1) {
                const obj = { guild_id, index: findIndexResult, active_hook: ref.current };
                const obj2 = token(drawerOpen[24]);
                obj2.track(constants.HOME_DRAWER_GUILD_CLICKED, obj);
              }
            }
            token(drawerOpen[25])(guild_id);
          }
        }
        const obj3 = { title: intl.string(guildId(drawerOpen[23]).t.R0RpRX), body: intl2.string(guildId(drawerOpen[23]).t.m9gRVN) };
        const show = token(drawerOpen[22]).show;
        token(drawerOpen[22]);
        intl = guildId(drawerOpen[23]).intl;
        intl2 = guildId(drawerOpen[23]).intl;
        return show(obj3);
      }
    };
    return obj;
  }, items4);
  const memo1 = react.useMemo(() => {
    let formatToPlainStringResult;
    if (null != mentionCount) {
      if (mentionCount > 0) {
        const intl3 = intl10.intl;
        const obj2 = { guildName, mentions: mentionCount };
        formatToPlainStringResult = intl3.formatToPlainString(intl10.t["/uzRss"], obj2);
      }
      const items = [];
      if (mediaState.activeEvent) {
        const push = items.push;
        const intl4 = intl10.intl;
        push(intl4.string(intl10.t.dHvJ2p));
      }
      if (mediaState.liveStage) {
        const push2 = items.push;
        const intl5 = intl10.intl;
        push2(intl5.string(intl10.t.OO7ndG));
      }
      if (mediaState.screenshare) {
        const push3 = items.push;
        const intl6 = intl10.intl;
        push3(intl6.string(intl10.t.wsHMZ7));
      }
      if (mediaState.video) {
        const push4 = items.push;
        const intl7 = intl10.intl;
        push4(intl7.string(intl10.t.BrLCS0));
      }
      if (mediaState.audio) {
        const push5 = items.push;
        const intl8 = intl10.intl;
        push5(intl8.string(intl10.t.jPBhKy));
      }
      if (mediaState.activity) {
        const push6 = items.push;
        const intl9 = intl10.intl;
        push6(intl9.string(intl10.t.Y3Gii5));
      }
      let combined = formatToPlainStringResult;
      if (items.length > 0) {
        const _HermesInternal = HermesInternal;
        combined = "" + formatToPlainStringResult + ", " + items.join(" ");
      }
      return combined;
    }
    if (true === unread) {
      const intl2 = intl10.intl;
      const obj3 = { guildName };
      formatToPlainStringResult = intl2.formatToPlainString(intl10.t.lzqe42, obj3);
    } else {
      const intl = intl10.intl;
      const obj = { guildName, mentions: mentionCount };
      formatToPlainStringResult = intl.formatToPlainString(intl10.t["/uzRss"], obj);
    }
  }, items5);
  const tmp15 = token(drawerOpen[26])(guildId, icon, asset);
  ({ isDragTarget, dragDropInProgress, dragState, overState, itemSize } = useItemDragState(guildId, flag));
  const items6 = [stateFromStores1];
  const tmp16 = useItemDragState(guildId, flag);
  const obj6 = guildId(drawerOpen[18]);
  stateFromStores1 = obj6.useStateFromStores(items6, () => stateFromStores1.getGuildsTree().version);
  const items7 = [guildId, stateFromStores1];
  const memo2 = react.useMemo(() => {
    const items = [...getGuildsBarGuildMenuItemsDefault(guildId, stateFromStores1).map((label) => ({ name: label.label, label: label.label, action: label.action })), ...getGuildsBarGuildAccessibilityActionsDefault(guildId, stateFromStores1).map((name) => ({ name: name.name, label: name.label, action: name.action }))];
    const arr = getGuildsBarGuildMenuItemsDefault(guildId, stateFromStores1);
    getGuildsBarGuildAccessibilityActionsDefault(guildId, stateFromStores1);
    const obj = {
      accessibilityActions: items.map((name) => ({ name: name.name, label: name.label })),
      onAccessibilityAction(arg0) {
        let closure_0 = arg0;
        const found = items.find((name) => name.name === nativeEvent.nativeEvent.actionName);
        if (found != null) {
          const action = found.action;
          if (action != null) {
            action();
          }
        }
      }
    };
    return obj;
  }, items7);
  ({ accessibilityActions, onAccessibilityAction } = memo2);
  const obj7 = guildId(drawerOpen[29]);
  const sharedValue = obj7.useSharedValue(guildId);
  const items8 = [closure_18, dragDropInProgress, sharedValue, guildId, isDragTarget, , ];
  const useCallback = react.useCallback;
  items8[5] = guildId(drawerOpen[30]).withSpring;
  items8[6] = TRANSITION_PHYSICS;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26] = items8;
  class GuildsBarGuildTsx1 {
    constructor(originY) {
      let targetHeight;
      let targetOriginY;
      const value = _undefined.get() && _undefined2.get() === c2 && !c3;
      let tmp6 = c2;
      set = _undefined2.set;
      if (c2 == null) {
        tmp6 = null;
      }
      const result = set(tmp6);
      if (value) {
        targetOriginY = _undefined3(originY.targetOriginY, c5, "animate-always");
      } else {
        targetOriginY = originY.targetOriginY;
      }
      const obj = { originY: targetOriginY, height: targetHeight };
      if (value) {
        targetHeight = _undefined3(originY.targetHeight, c5, "animate-always");
      } else {
        targetHeight = originY.targetHeight;
      }
      return { animations: obj, initialValues: { originY: originY.currentOriginY, height: originY.currentHeight } };
    }
  }
  const items9 = [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26];
  GuildsBarGuildTsx1.__closure = items9;
  GuildsBarGuildTsx1.__workletHash = 17577267237631;
  GuildsBarGuildTsx1.__initData = tmp20;
  const items10 = [guildId, sharedValue, isDragTarget, dragDropInProgress];
  const callback1 = useCallback(GuildsBarGuildTsx1, items10);
  const obj8 = { id: guildId, draggedItemSize: itemSize, accessibilityActions, onAccessibilityAction, cutouts: tmp30, selected, isDragTarget, dragState, sharedId: sharedValue, circle: false, overState, unread, label: memo1, config: memo, styles: guildsBarAnimatedWrapperStyles, isDragPreview: flag, layout: callback1, externalChildren: closure_15(closure_14, obj9), expandedChildren: tmp28Result, children: tmp28Result2 };
  tmp30 = undefined;
  const tmp4Result = token(drawerOpen[14]);
  if (!isDragTarget) {
    tmp30 = cutouts;
  }
  if (!flag) {
    flag = isDragTarget;
  }
  obj9 = { children: items11 };
  items11 = [badgeTopRight, badgeBottomRight];
  tmp28Result = undefined;
  if (enableHome) {
    if (!flag2) {
      const obj10 = { guildId, onActiveHookChange: callback };
      tmp28Result = tmp28(tmp4(tmp3[17]), obj10);
    }
  }
  if (isUnavailable) {
    const obj11 = { source: token(drawerOpen[32]), style: tmp.guildIcon };
    const tmp4Result3 = token(drawerOpen[31]);
    tmp28Result2 = tmp28(tmp4Result3, obj11);
  } else if (null != tmp15) {
    const obj12 = { source: tmp15, style: tmp.guildIcon };
    tmp28Result2 = tmp28(tmp4(tmp3[31]), obj12);
  } else {
    const obj13 = { value: guildName, selected, animate: selected, size: tmp2(drawerOpen[19]).GuildIconSizes.LARGE };
    const tmp4Result4 = token(drawerOpen[19]);
    tmp28Result2 = tmp28(tmp4Result4, obj13);
  }
  return closure_16(tmp4Result, obj8);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarGuild.tsx");

export default memoResult;
