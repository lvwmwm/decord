// Module ID: 14890
// Function ID: 113555
// Dependencies: [31, 3759, 1391, 4469, 6878, 1838, 3947, 4970, 14859, 14860, 653, 33, 3991, 4130, 689, 1324, 3834, 14870, 3987, 14853, 14891, 566, 5513, 14905, 14906, 4470, 1212, 675, 5700, 14885, 4528, 14861, 9339, 14913, 14914, 4542, 5085, 14916, 2]

// Module 14890
import importAllResult from "getGuildsBarGuildMenuItems";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import isGuildOwner from "isGuildOwner";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { useItemDragState } from "withEqualityFn";
import { TRANSITION_PHYSICS } from "GUILD_ITEM_SIZE";
import { AnalyticEvents } from "ME";
import jsxProd from "usePreloadedGuildAsset";
import module_3991 from "module_3991";
import module_3991 from "module_3991";
import module_3991 from "module_3991";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_15;
let closure_16;
let closure_17;
let closure_5;
let closure_6;
const require = arg1;
({ getGuildIconSource: closure_5, getGuildIconURL: closure_6 } = isGuildOwner);
({ Fragment: closure_15, jsxs: closure_16, jsx: closure_17 } = jsxProd);
let obj = {};
obj.pan = require("module_4294967295");
obj.itemMeasurements = module_3991.makeMutable([]);
obj.activeIndex = require("module_4294967295");
obj = { guildIcon: { width: require("_createForOfIteratorHelperLoose").modules.mobile.GUILD_BAR_ITEM_SIZE, height: require("_createForOfIteratorHelperLoose").modules.mobile.GUILD_BAR_ITEM_SIZE } };
let closure_19 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_20 = { code: "function GuildsBarGuildTsx1(values){const{dragDropInProgress,sharedId,guildId,isDragTarget,withSpring,TRANSITION_PHYSICS}=this.__closure;var _guildId;const shouldAnimate=dragDropInProgress.get()&&sharedId.get()===guildId&&!isDragTarget;sharedId.set((_guildId=guildId)!==null&&_guildId!==void 0?_guildId:null);return{animations:{originY:shouldAnimate?withSpring(values.targetOriginY,TRANSITION_PHYSICS,'animate-always'):values.targetOriginY,height:shouldAnimate?withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always'):values.targetHeight},initialValues:{originY:values.currentOriginY,height:values.currentHeight}};}" };
let obj1 = { width: require("_createForOfIteratorHelperLoose").modules.mobile.GUILD_BAR_ITEM_SIZE, height: require("_createForOfIteratorHelperLoose").modules.mobile.GUILD_BAR_ITEM_SIZE };
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
  let importAllResult;
  let selected;
  let isUnavailable;
  let mentionCount;
  let unread;
  let isLurking;
  let guildName;
  let mediaState;
  let isDragTarget;
  let dragDropInProgress;
  let stateFromStores1;
  let sharedValue;
  let tmp2 = callback3();
  let obj = guildId(drawerOpen[16]);
  token = obj.useToken(token(drawerOpen[14]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  let obj1 = guildId(drawerOpen[17]);
  const tmp = token(drawerOpen[15])("GuildsBarGuild");
  const MobileHomeDrawerExperiment = guildId(drawerOpen[18]).MobileHomeDrawerExperiment;
  const enableHome = MobileHomeDrawerExperiment.useConfig({ location: "guilds" }).enableHome;
  let obj2 = guildId(drawerOpen[19]);
  drawerOpen = obj2.useDrawerOpen(enableHome);
  importAllResult = importAllResult.useRef(guildId(drawerOpen[20]).HomeDrawerActiveHook.NONE);
  const callback = importAllResult.useCallback((current) => {
    closure_3.current = current;
  }, []);
  let obj3 = guildId(drawerOpen[21]);
  let items = [mediaState, unread, isLurking, selected];
  const items1 = [guildId];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => ({ selected: mediaState.getGuildId() === guildId, isUnavailable: unread.isUnavailable(guildId), unread: isLurking.hasUnread(guildId), mentionCount: isLurking.getMentionCount(guildId), isMentionLowImportance: isLurking.getIsMentionLowImportance(guildId), isLurking: selected.isLurking(guildId) }), items1);
  selected = stateFromStoresObject.selected;
  isUnavailable = stateFromStoresObject.isUnavailable;
  mentionCount = stateFromStoresObject.mentionCount;
  unread = stateFromStoresObject.unread;
  isLurking = stateFromStoresObject.isLurking;
  let obj4 = guildId(drawerOpen[21]);
  const items2 = [guildName];
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
        tmp7 = isUnavailable(guild, guildId(drawerOpen[22]).ImageSizes[guildId(undefined, drawerOpen[22]).GuildIconSizes.LARGE], selected);
      }
    }
    obj.asset = tmp7;
    return obj;
  }, items3, token(drawerOpen[23]));
  guildName = stateFromStores.guildName;
  ({ asset, icon } = stateFromStores);
  const tmp9 = token(drawerOpen[24])(guildId, mentionCount, stateFromStoresObject.isMentionLowImportance);
  mediaState = tmp9.mediaState;
  const items4 = [guildId, token, isLurking, isUnavailable, drawerOpen];
  ({ badgeTopRight, badgeBottomRight, cutouts } = tmp9);
  const items5 = [guildName, mentionCount, unread, mediaState];
  const memo = importAllResult.useMemo(() => {
    let obj = {
      onPress() {
        if (null != guildName.getGuild(outer1_0)) {
          if (!outer1_5) {
            const guildFolders = isDragTarget.getGuildFolders();
            const findIndexResult = guildFolders.findIndex((guildIds) => {
              guildIds = guildIds.guildIds;
              return guildIds.includes(outer2_0);
            });
            if (findIndexResult > -1) {
              let obj = { guild_id: outer1_0, index: findIndexResult };
              token(drawerOpen[27]).track(sharedValue.GUILD_CLICKED, obj);
              if (outer1_2) {
                let obj1 = token(drawerOpen[27]);
                obj = { guild_id: outer1_0, index: findIndexResult, active_hook: outer1_3.current };
                obj1.track(sharedValue.HOME_DRAWER_GUILD_CLICKED, obj);
              }
              const obj7 = token(drawerOpen[27]);
            }
            if (outer1_8) {
              const result = guildId(drawerOpen[28]).trackGuildIconClicked(outer1_0);
              const obj4 = guildId(drawerOpen[28]);
            }
            token(drawerOpen[29])(outer1_0);
          }
        }
        obj1 = {};
        const intl = guildId(drawerOpen[26]).intl;
        obj1.title = intl.string(guildId(drawerOpen[26]).t.R0RpRX);
        const intl2 = guildId(drawerOpen[26]).intl;
        obj1.body = intl2.string(guildId(drawerOpen[26]).t.m9gRVN);
        return token(drawerOpen[25]).show(obj1);
      }
    };
    let fn;
    if (isLurking) {
      fn = (nativeEvent) => {
        const guild = guildName.getGuild(outer1_0);
        if (null != guild) {
          let obj = guildId(drawerOpen[30]);
          if (!obj.getIsScreenReaderEnabled()) {
            const tmp4Result = token(drawerOpen[31])(outer1_0, isDragTarget.getGuildsTree().version);
            let closure_0 = tmp4Result;
            if (0 !== tmp4Result.length) {
              let activeIndex = outer2_18.activeIndex;
              let result = activeIndex.set(-1);
              obj = {
                key: outer1_0,
                title: guild.name,
                items: tmp4Result,
                x: 12 + outer1_1 + 12,
                y: nativeEvent.nativeEvent.pageY - outer1_1 / 2,
                positionX: "left",
                positionY: "below",
                width: outer1_1,
                height: outer1_1,
                state: outer2_18,
                dividerIndexes: [],
                keyboardShouldPersistTaps: "never",
                requestClose(arg0) {
                        if (!arg0) {
                          const activeIndex = outer3_18.activeIndex;
                          const obj = tmp4Result[activeIndex.get(activeIndex)];
                          if (null != obj) {
                            obj.action();
                          }
                        }
                        const activeIndex2 = outer3_18.activeIndex;
                        const result = activeIndex2.set(-1);
                        guildId(drawerOpen[32]).hideContextMenu();
                      },
                onClose() {

                      }
              };
              guildId(drawerOpen[32]).showContextMenu(obj);
              const obj2 = guildId(drawerOpen[32]);
            }
            const tmp4 = token(drawerOpen[31]);
          }
        }
      };
    }
    obj.onLongPress = fn;
    return obj;
  }, items4);
  const memo1 = importAllResult.useMemo(() => {
    if (null != mentionCount) {
      if (mentionCount > 0) {
        const intl3 = guildId(drawerOpen[26]).intl;
        let obj = { guildName, mentions: mentionCount };
        let formatToPlainStringResult = intl3.formatToPlainString(guildId(drawerOpen[26]).t["/uzRss"], obj);
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
      formatToPlainStringResult = intl.formatToPlainString(guildId(drawerOpen[26]).t["/uzRss"], obj);
    }
  }, items5);
  const tmp12 = token(drawerOpen[33])(guildId, icon, asset);
  const tmp13 = dragDropInProgress(guildId, flag);
  isDragTarget = tmp13.isDragTarget;
  dragDropInProgress = tmp13.dragDropInProgress;
  ({ dragState, overState, itemSize } = tmp13);
  const guildsBarAnimatedWrapperStyles = obj1.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true });
  const items6 = [isDragTarget];
  stateFromStores1 = guildId(drawerOpen[21]).useStateFromStores(items6, () => isDragTarget.getGuildsTree().version);
  const items7 = [guildId, stateFromStores1];
  const memo2 = importAllResult.useMemo(() => {
    const arr = token(drawerOpen[31])(items, stateFromStores1);
    items = [...arr.map((label) => ({ name: label.label, label: label.label, action: label.action })), ...token(drawerOpen[34])(items, stateFromStores1).map((name) => ({ name: name.name, label: name.label, action: name.action }))];
    const arr2 = token(drawerOpen[34])(items, stateFromStores1);
    return {
      accessibilityActions: items.map((name) => ({ name: name.name, label: name.label })),
      onAccessibilityAction(arg0) {
        const items = arg0;
        const found = items.find((name) => name.name === nativeEvent.nativeEvent.actionName);
        if (!tmp) {
          found.action();
        }
      }
    };
  }, items7);
  ({ accessibilityActions, onAccessibilityAction } = memo2);
  const obj6 = guildId(drawerOpen[21]);
  sharedValue = guildId(drawerOpen[12]).useSharedValue(guildId);
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
        tmp9 = c2;
        num = 35;
        obj3 = guildId(c2[35]);
        tmp10 = f113567;
        str = "animate-always";
        targetOriginY = obj3.withSpring(guildId.targetOriginY, f113567, "animate-always");
      } else {
        targetOriginY = guildId.targetOriginY;
      }
      obj.originY = targetOriginY;
      if (value) {
        tmp11 = guildId;
        tmp12 = c2;
        num2 = 35;
        obj4 = guildId(c2[35]);
        tmp13 = f113567;
        str2 = "animate-always";
        targetHeight = obj4.withSpring(guildId.targetHeight, f113567, "animate-always");
      } else {
        targetHeight = guildId.targetHeight;
      }
      obj.height = targetHeight;
      obj.animations = obj;
      obj.initialValues = { originY: guildId.currentOriginY, height: guildId.currentHeight };
      return obj;
    }
  }
  obj = { dragDropInProgress, sharedId: sharedValue, guildId, isDragTarget, withSpring: guildId(drawerOpen[35]).withSpring, TRANSITION_PHYSICS: stateFromStores1 };
  R.__closure = obj;
  R.__workletHash = 14096669603718;
  R.__initData = closure_20;
  const items8 = [guildId, sharedValue, isDragTarget, dragDropInProgress];
  const callback1 = importAllResult.useCallback(R, items8);
  obj = { id: guildId, draggedItemSize: itemSize, accessibilityActions, onAccessibilityAction };
  let tmp20;
  let obj7 = guildId(drawerOpen[12]);
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
    tmp23 = callback2(token(drawerOpen[20]), obj1);
  }
  obj.expandedChildren = tmp23;
  if (isUnavailable) {
    obj2 = { source: token(drawerOpen[37]), style: tmp2.guildIcon };
    let tmp33 = callback2(token(drawerOpen[36]), obj2);
    const tmp40 = token(drawerOpen[36]);
  } else if (null != tmp12) {
    obj3 = { source: tmp12, style: tmp2.guildIcon };
    tmp33 = callback2(token(drawerOpen[36]), obj3);
  } else {
    obj4 = { value: guildName, selected, animate: selected, size: guildId(drawerOpen[22]).GuildIconSizes.LARGE };
    tmp33 = callback2(token(drawerOpen[22]), obj4);
    const tmp31 = token(drawerOpen[22]);
  }
  obj.children = tmp33;
  return tmp18(token(drawerOpen[17]), obj);
});
let result = require("isGuildOwner").fileFinishedImporting("modules/guilds_bar/native/GuildsBarGuild.tsx");

export default memoResult;
