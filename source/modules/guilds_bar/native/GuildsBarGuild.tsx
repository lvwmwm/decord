// Module ID: 14720
// Function ID: 111027
// Dependencies: []

// Module 14720
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ getGuildIconSource: closure_5, getGuildIconURL: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
const useItemDragState = arg1(dependencyMap[8]).useItemDragState;
const TRANSITION_PHYSICS = arg1(dependencyMap[9]).TRANSITION_PHYSICS;
const AnalyticEvents = arg1(dependencyMap[10]).AnalyticEvents;
const tmp2 = arg1(dependencyMap[2]);
({ Fragment: closure_15, jsxs: closure_16, jsx: closure_17 } = arg1(dependencyMap[11]));
let obj = {};
const tmp3 = arg1(dependencyMap[11]);
obj.pan = require("module_4294967295");
const obj3 = arg1(dependencyMap[12]);
obj.itemMeasurements = arg1(dependencyMap[12]).makeMutable([]);
const obj4 = arg1(dependencyMap[12]);
obj.activeIndex = require("module_4294967295");
const obj5 = arg1(dependencyMap[12]);
obj = {};
const obj6 = arg1(dependencyMap[13]);
obj.guildIcon = { width: importDefault(dependencyMap[14]).modules.mobile.GUILD_BAR_ITEM_SIZE, height: importDefault(dependencyMap[14]).modules.mobile.GUILD_BAR_ITEM_SIZE };
let closure_19 = obj6.createStyles(obj);
let closure_20 = { code: "function GuildsBarGuildTsx1(values){const{dragDropInProgress,sharedId,guildId,isDragTarget,withSpring,TRANSITION_PHYSICS}=this.__closure;var _guildId;const shouldAnimate=dragDropInProgress.get()&&sharedId.get()===guildId&&!isDragTarget;sharedId.set((_guildId=guildId)!==null&&_guildId!==void 0?_guildId:null);return{animations:{originY:shouldAnimate?withSpring(values.targetOriginY,TRANSITION_PHYSICS,'animate-always'):values.targetOriginY,height:shouldAnimate?withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always'):values.targetHeight},initialValues:{originY:values.currentOriginY,height:values.currentHeight}};}" };
const obj1 = { width: importDefault(dependencyMap[14]).modules.mobile.GUILD_BAR_ITEM_SIZE, height: importDefault(dependencyMap[14]).modules.mobile.GUILD_BAR_ITEM_SIZE };
const memoResult = importAllResult.memo(function GuildsBarGuild(guildId) {
  let accessibilityActions;
  let asset;
  let badgeBottomRight;
  let badgeTopRight;
  let cutouts;
  let dragState;
  let icon;
  let itemSize;
  let onAccessibilityAction;
  let overState;
  guildId = guildId.guildId;
  const arg1 = guildId;
  let flag = guildId.isDragPreview;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = guildId.hideExpandedChildren;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let importDefault;
  let dependencyMap;
  let React;
  let closure_4;
  let isUnavailable;
  let mentionCount;
  let closure_7;
  let closure_8;
  let closure_9;
  let closure_10;
  let closure_11;
  let useItemDragState;
  let TRANSITION_PHYSICS;
  let AnalyticEvents;
  const tmp2 = callback3();
  let obj = arg1(dependencyMap[16]);
  const token = obj.useToken(importDefault(dependencyMap[14]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  importDefault = token;
  let obj1 = arg1(dependencyMap[17]);
  const tmp = importDefault(dependencyMap[15])("GuildsBarGuild");
  const MobileHomeDrawerExperiment = arg1(dependencyMap[18]).MobileHomeDrawerExperiment;
  const enableHome = MobileHomeDrawerExperiment.useConfig({ location: "guilds" }).enableHome;
  let obj2 = arg1(dependencyMap[19]);
  const drawerOpen = obj2.useDrawerOpen(enableHome);
  dependencyMap = drawerOpen;
  React = React.useRef(arg1(dependencyMap[20]).HomeDrawerActiveHook.NONE);
  const callback = React.useCallback((current) => {
    closure_3.current = current;
  }, []);
  let obj3 = arg1(dependencyMap[21]);
  const items = [closure_10, closure_7, closure_8, closure_4];
  const items1 = [guildId];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => ({ selected: mediaState.getGuildId() === guildId, isUnavailable: unread.isUnavailable(guildId), unread: isLurking.hasUnread(guildId), mentionCount: isLurking.getMentionCount(guildId), isMentionLowImportance: isLurking.getIsMentionLowImportance(guildId), isLurking: selected.isLurking(guildId) }), items1);
  const selected = stateFromStoresObject.selected;
  closure_4 = selected;
  isUnavailable = stateFromStoresObject.isUnavailable;
  mentionCount = stateFromStoresObject.mentionCount;
  const unread = stateFromStoresObject.unread;
  closure_7 = unread;
  const isLurking = stateFromStoresObject.isLurking;
  closure_8 = isLurking;
  let obj4 = arg1(dependencyMap[21]);
  const items2 = [closure_9];
  const items3 = [guildId, token, selected];
  const stateFromStores = obj4.useStateFromStores(items2, () => {
    const guild = guildName.getGuild(guildId);
    let tmp2;
    if (null != guild) {
      tmp2 = mentionCount(guild, token, selected);
    }
    const obj = {};
    let name;
    if (null != guild) {
      name = guild.name;
    }
    obj.guildName = name;
    obj.icon = tmp2;
    let tmp7;
    if (null != tmp2) {
      if (null != guild) {
        tmp7 = isUnavailable(guild, guildId(drawerOpen[22]).ImageSizes[closure_0(undefined, closure_2[22]).GuildIconSizes.LARGE], selected);
      }
    }
    obj.asset = tmp7;
    return obj;
  }, items3, importDefault(dependencyMap[23]));
  const guildName = stateFromStores.guildName;
  closure_9 = guildName;
  ({ asset, icon } = stateFromStores);
  const tmp9 = importDefault(dependencyMap[24])(guildId, mentionCount, stateFromStoresObject.isMentionLowImportance);
  const mediaState = tmp9.mediaState;
  closure_10 = mediaState;
  const items4 = [guildId, token, isLurking, isUnavailable, drawerOpen];
  ({ badgeTopRight, badgeBottomRight, cutouts } = tmp9);
  const items5 = [guildName, mentionCount, unread, mediaState];
  const memo = React.useMemo(() => {
    const obj = {
      onPress() {
        if (null != store.getGuild(callback)) {
          if (!closure_5) {
            const guildFolders = store2.getGuildFolders();
            const findIndexResult = guildFolders.findIndex((guildIds) => {
              guildIds = guildIds.guildIds;
              return guildIds.includes(closure_0);
            });
            if (findIndexResult > -1) {
              let obj = { guild_id: callback, index: findIndexResult };
              callback2(closure_2[27]).track(constants.GUILD_CLICKED, obj);
              if (closure_2) {
                let obj1 = callback2(closure_2[27]);
                obj = { guild_id: callback, index: findIndexResult, active_hook: ref.current };
                obj1.track(constants.HOME_DRAWER_GUILD_CLICKED, obj);
              }
              const obj7 = callback2(closure_2[27]);
            }
            if (closure_8) {
              const result = callback(closure_2[28]).trackGuildIconClicked(callback);
              const obj4 = callback(closure_2[28]);
            }
            callback2(closure_2[29])(callback);
          }
        }
        obj1 = {};
        const intl = callback(closure_2[26]).intl;
        obj1.title = intl.string(callback(closure_2[26]).t.R0RpRX);
        const intl2 = callback(closure_2[26]).intl;
        obj1.body = intl2.string(callback(closure_2[26]).t.m9gRVN);
        return callback2(closure_2[25]).show(obj1);
      }
    };
    let fn;
    if (isLurking) {
      fn = (nativeEvent) => {
        const guild = store.getGuild(tmp4Result);
        if (null != guild) {
          let obj = tmp4Result(closure_2[30]);
          if (!obj.getIsScreenReaderEnabled()) {
            const tmp4Result = callback2(closure_2[31])(tmp4Result, store2.getGuildsTree().version);
            if (0 !== tmp4Result.length) {
              const activeIndex = activeIndex.activeIndex;
              const result = activeIndex.set(-1);
              obj = {
                key: tmp4Result,
                title: guild.name,
                items: tmp4Result,
                x: 12 + callback2 + 12,
                y: nativeEvent.nativeEvent.pageY - callback2 / 2,
                positionX: "left",
                positionY: "below",
                width: callback2,
                height: callback2,
                state: activeIndex,
                dividerIndexes: [],
                keyboardShouldPersistTaps: "never",
                requestClose(arg0) {
                        if (!arg0) {
                          const activeIndex = closure_18.activeIndex;
                          if (null != tmp4Result[activeIndex.get(activeIndex)]) {
                            obj.action();
                          }
                        }
                        const activeIndex2 = closure_18.activeIndex;
                        const result = activeIndex2.set(-1);
                        tmp4Result(closure_2[32]).hideContextMenu();
                      },
                onClose() {

                      }
              };
              tmp4Result(closure_2[32]).showContextMenu(obj);
              const obj2 = tmp4Result(closure_2[32]);
            }
            const tmp4 = callback2(closure_2[31]);
          }
        }
      };
    }
    obj.onLongPress = fn;
    return obj;
  }, items4);
  const memo1 = React.useMemo(() => {
    if (null != mentionCount) {
      if (mentionCount > 0) {
        const intl3 = guildId(drawerOpen[26]).intl;
        let obj = { guildName, mentions: mentionCount };
        let formatToPlainStringResult = intl3.formatToPlainString(guildId(drawerOpen[26]).t./uzRss, obj);
      }
      const items = [];
      if (mediaState.activeEvent) {
        const intl4 = guildId(drawerOpen[26]).intl;
        items.push(intl4.string(guildId(drawerOpen[26]).t.dHvJ2p));
      }
      if (mediaState.liveStage) {
        const intl5 = guildId(drawerOpen[26]).intl;
        items.push(intl5.string(guildId(drawerOpen[26]).t.OO7ndG));
      }
      if (mediaState.screenshare) {
        const intl6 = guildId(drawerOpen[26]).intl;
        items.push(intl6.string(guildId(drawerOpen[26]).t.wsHMZ7));
      }
      if (mediaState.video) {
        const intl7 = guildId(drawerOpen[26]).intl;
        items.push(intl7.string(guildId(drawerOpen[26]).t.BrLCS0));
      }
      if (mediaState.audio) {
        const intl8 = guildId(drawerOpen[26]).intl;
        items.push(intl8.string(guildId(drawerOpen[26]).t.jPBhKy));
      }
      if (mediaState.activity) {
        const intl9 = guildId(drawerOpen[26]).intl;
        items.push(intl9.string(guildId(drawerOpen[26]).t.Y3Gii5));
      }
      let combined = formatToPlainStringResult;
      if (items.length > 0) {
        const _HermesInternal = HermesInternal;
        combined = "" + formatToPlainStringResult + ", " + items.join(" ");
      }
      return combined;
    }
    if (true === unread) {
      const intl2 = guildId(drawerOpen[26]).intl;
      obj = { guildName };
      formatToPlainStringResult = intl2.formatToPlainString(guildId(drawerOpen[26]).t.lzqe42, obj);
    } else {
      const intl = guildId(drawerOpen[26]).intl;
      obj = { guildName, mentions: mentionCount };
      formatToPlainStringResult = intl.formatToPlainString(guildId(drawerOpen[26]).t./uzRss, obj);
    }
  }, items5);
  const tmp12 = importDefault(dependencyMap[33])(guildId, icon, asset);
  const tmp13 = useItemDragState(guildId, flag);
  const isDragTarget = tmp13.isDragTarget;
  closure_11 = isDragTarget;
  const dragDropInProgress = tmp13.dragDropInProgress;
  useItemDragState = dragDropInProgress;
  ({ dragState, overState, itemSize } = tmp13);
  const guildsBarAnimatedWrapperStyles = obj1.useGuildsBarAnimatedWrapperStyles({ <string:3577514597>: null, <string:3965960815>: null });
  const items6 = [closure_11];
  const stateFromStores1 = arg1(dependencyMap[21]).useStateFromStores(items6, () => isDragTarget.getGuildsTree().version);
  TRANSITION_PHYSICS = stateFromStores1;
  const items7 = [guildId, stateFromStores1];
  const memo2 = React.useMemo(() => {
    const arr = token(drawerOpen[31])(guildId, stateFromStores1);
    const items = [...arr.map((label) => ({ name: label.label, label: label.label, action: label.action })), ...token(drawerOpen[34])(guildId, stateFromStores1).map((name) => ({ name: name.name, label: name.label, action: name.action }))];
    const guildId = items;
    const arr2 = token(drawerOpen[34])(guildId, stateFromStores1);
    return {
      accessibilityActions: items.map((name) => ({ name: name.name, label: name.label })),
      onAccessibilityAction(arg0) {
        const items = arg0;
        const found = items.find((name) => name.name === name.nativeEvent.actionName);
        if (!tmp) {
          found.action();
        }
      }
    };
  }, items7);
  ({ accessibilityActions, onAccessibilityAction } = memo2);
  const obj6 = arg1(dependencyMap[21]);
  const sharedValue = arg1(dependencyMap[12]).useSharedValue(guildId);
  AnalyticEvents = sharedValue;
  class R {
    constructor(arg0) {
      value = dragDropInProgress.get();
      if (value) {
        tmp2 = useMemo;
        tmp3 = guildId;
        value = useMemo.get() === guildId;
      }
      if (value) {
        tmp4 = isDragTarget;
        value = !isDragTarget;
      }
      tmp6 = null;
      tmp5 = useMemo;
      if (null != guildId) {
        tmp6 = guildId;
      }
      result = useMemo.set(tmp6);
      obj = {};
      obj = {};
      if (value) {
        tmp8 = guildId;
        tmp9 = closure_2;
        num = 35;
        obj3 = guildId(closure_2[35]);
        tmp10 = f111039;
        str = "animate-always";
        targetOriginY = obj3.withSpring(guildId.targetOriginY, f111039, "animate-always");
      } else {
        targetOriginY = guildId.targetOriginY;
      }
      obj.originY = targetOriginY;
      if (value) {
        tmp11 = guildId;
        tmp12 = closure_2;
        num2 = 35;
        obj4 = guildId(closure_2[35]);
        tmp13 = f111039;
        str2 = "animate-always";
        targetHeight = obj4.withSpring(guildId.targetHeight, f111039, "animate-always");
      } else {
        targetHeight = guildId.targetHeight;
      }
      obj.height = targetHeight;
      obj.animations = obj;
      obj.initialValues = { originY: guildId.currentOriginY, height: guildId.currentHeight };
      return obj;
    }
  }
  obj = { dragDropInProgress, sharedId: sharedValue, guildId, isDragTarget, withSpring: arg1(dependencyMap[35]).withSpring, TRANSITION_PHYSICS };
  R.__closure = obj;
  R.__workletHash = 14096669603718;
  R.__initData = closure_20;
  const items8 = [guildId, sharedValue, isDragTarget, dragDropInProgress];
  const callback1 = React.useCallback(R, items8);
  obj = { id: guildId, draggedItemSize: itemSize, accessibilityActions, onAccessibilityAction };
  let tmp20;
  const obj7 = arg1(dependencyMap[12]);
  const tmp18 = callback2;
  if (!isDragTarget) {
    tmp20 = cutouts;
  }
  obj.cutouts = tmp20;
  obj.selected = selected;
  obj.isDragTarget = isDragTarget;
  obj.dragState = dragState;
  obj.sharedId = sharedValue;
  let tmp21 = !tmp;
  if (tmp21) {
    tmp21 = !selected && !enableHome;
    const tmp22 = !selected && !enableHome;
  }
  obj.circle = tmp21;
  obj.overState = overState;
  obj.unread = unread;
  obj.label = memo1;
  obj.config = memo;
  obj.styles = guildsBarAnimatedWrapperStyles;
  if (!flag) {
    flag = isDragTarget;
  }
  obj.isDragPreview = flag;
  obj.layout = callback1;
  const items9 = [badgeTopRight, badgeBottomRight];
  obj.externalChildren = callback(closure_15, { children: items9 });
  let tmp23;
  if (!flag2) {
    obj1 = { guildId, onActiveHookChange: callback };
    tmp23 = callback2(importDefault(dependencyMap[20]), obj1);
  }
  obj.expandedChildren = tmp23;
  if (isUnavailable) {
    obj2 = { source: importDefault(dependencyMap[37]), style: tmp2.guildIcon };
    let tmp33 = callback2(importDefault(dependencyMap[36]), obj2);
    const tmp40 = importDefault(dependencyMap[36]);
  } else if (null != tmp12) {
    obj3 = { source: tmp12, style: tmp2.guildIcon };
    tmp33 = callback2(importDefault(dependencyMap[36]), obj3);
  } else {
    obj4 = { value: guildName, selected, animate: selected, size: arg1(dependencyMap[22]).GuildIconSizes.LARGE };
    tmp33 = callback2(importDefault(dependencyMap[22]), obj4);
    const tmp31 = importDefault(dependencyMap[22]);
  }
  obj.children = tmp33;
  return tmp18(importDefault(dependencyMap[17]), obj);
});
const result = arg1(dependencyMap[38]).fileFinishedImporting("modules/guilds_bar/native/GuildsBarGuild.tsx");

export default memoResult;
