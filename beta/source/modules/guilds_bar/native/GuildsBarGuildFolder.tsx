// Module ID: 15929
// Function ID: 15930
// Name: GuildsBarGuildFolder
// Dependencies: [19, 7050, 2067, 4655, 5750, 15921, 15926, 15918, 21, 4836, 576, 4531, 504, 5896, 5280, 4683, 1092, 6494, 4566, 4540, 5899, 5338, 15930, 15933, 12116, 15940, 4801, 5832, 5901, 15923, 15941, 2]

// Module 15929 (GuildsBarGuildFolder)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1092 */;
import useToken from "useToken" /* 4531 */;
import native from "native" /* 4540 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import spring from "spring" /* 5280 */;
import AssetRegistryDefault from "AssetRegistry" /* 5338 */;
import SortedGuildStore2 from "SortedGuildStore" /* 5750 */;
import FastImageDefault from "FastImage" /* 5899 */;
import NativeViewDefault from "NativeView" /* 5901 */;
import ListUtils from "ListUtils" /* 12116 */;
import GuildsBarFolderMenuItems from "GuildsBarFolderMenuItems" /* 15923 */;
import react from "react" /* 19 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7050 */;
import GuildStore from "GuildStore" /* 2067 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import GuildsBarDnDStore from "GuildsBarDnDStore" /* 15921 */;
import GuildsBarConstants_mod from "guilds_bar/GuildsBarConstants" /* 15926 */;
import GuildsBarConstants_mod2 from "GuildsBarConstants" /* 15918 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const SortedGuildStore = SortedGuildStore2;
let set;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let map1;
let tmp;
let tmp3;
let unpackModuleId;
const ColorUtils = tmp(4683);
const GuildIcon = tmp(5896);
const GuildIconDefault = tmp3(5896);
function MiniGuildIcon(arg0) {
  let guildPreview3;
  let position;
  let require;
  let selected;
  ({ guildId: require, position, selected } = arg0);
  const obj = useToken;
  const tmp4 = closure_18(obj.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE));
  const items = [GuildStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => GuildStore.getGuild(_require));
  if (0 === position) {
    guildPreview3 = tmp4.guildPreview0;
  } else if (1 === position) {
    guildPreview3 = tmp4.guildPreview1;
  } else if (2 === position) {
    guildPreview3 = tmp4.guildPreview2;
  } else if (3 === position) {
    guildPreview3 = tmp4.guildPreview3;
  }
  const items1 = [tmp4.guildPreviewIcon, , ];
  let prop;
  const tmp3Result = GuildIconDefault;
  const tmp6 = closure_16;
  if (!selected) {
    prop = tmp4.guildPreviewIconUnselected;
  }
  items1[1] = prop;
  items1[2] = guildPreview3;
  const obj3 = { style: items1, guild: stateFromStores, size: GuildIcon.GuildIconSizes.XXSMALL, selected };
  return tmp6(tmp3Result, obj3, "" + selected);
}
function TransitionWrapper(fromTop) {
  let items1;
  let flag = fromTop.fromTop;
  const children = fromTop.children;
  if (flag === undefined) {
    flag = false;
  }
  const cleanUp = fromTop.cleanUp;
  const state = fromTop.state;
  let sharedValue;
  let tmp = flag;
  const tmp2 = state;
  let obj = flag(state[11]);
  let tmp3 = cleanUp;
  const token = obj.useToken(cleanUp(state[10]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp5 = closure_18(token);
  let tmp6 = flag(state[18]);
  const useSharedValue = tmp6.useSharedValue;
  let num = 0;
  if (state === flag(state[19]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  const tmpResult = tmp(tmp2[18]);
  let fn = function u() {
    let fn;
    let items;
    let value;
    let withSpring;
    let obj = { opacity: withSpring(value, closure_15, undefined, fn), transform: items };
    let tmp = require;
    withSpring = spring.withSpring;
    value = sharedValue.get();
    fn = function t(arg0) {
      const tmp = arg0 && closure_1_2 === flag(state[19]).TransitionStates.YEETED;
      if (tmp) {
        const obj = flag(state[18]);
        obj.runOnJS(cleanUp)();
      }
    };
    fn.__closure = { state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    fn.__workletHash = 47605595424;
    fn.__initData = __initData;
    ({ state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp });
    const withSpring2 = spring.withSpring;
    let num = 1;
    let num2 = 0;
    const obj2 = sharedValue;
    if (1 !== sharedValue.get()) {
      num2 = flag ? -tmp8 : tmp8;
    }
    items = [{ translateY: withSpring2(num2, tmp5) }, ];
    ({ translateY: withSpring2(num2, closure_15) });
    const withSpring3 = spring.withSpring;
    spring;
    if (num !== obj2.get()) {
      let num3 = 1.3;
      if (flag) {
        num3 = 0.3;
      }
      num = num3;
    }
    items[1] = { scale: withSpring3(num, closure_15) };
    ({ scale: withSpring3(num, closure_15) });
    return obj;
  };
  let obj2 = { withSpring: tmp(tmp2[14]).withSpring, visible: sharedValue, FOLDER_SPRING_PHYSICS, state, TransitionStates: tmp(tmp2[19]).TransitionStates, runOnJS: tmp(tmp2[18]).runOnJS, cleanUp, fromTop: flag, guildItemSize: token };
  fn.__closure = obj2;
  fn.__workletHash = 14426547532118;
  fn.__initData = __initData2;
  let items = [state, sharedValue];
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  const effect = token.useEffect(() => {
    let num = 1;
    set = sharedValue.set;
    if (state === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = set(num);
  }, items);
  const obj3 = { style: items1, children };
  items1 = [animatedStyle, tmp5.folderScaleContainer];
  return closure_16(tmp3(tmp2[17]), obj3);
}
function getItemKey(type) {
  return type.type;
}
function GuildFolderIcon(item) {
  item = item.item;
  let tmp = null;
  if ("icon" === item.type) {
    const obj = { source: AssetRegistryDefault, style: item.tintStyle };
    const tmp5 = FastImageDefault;
    tmp = authStore3(tmp5, obj);
  }
  return tmp;
}
function renderGuildFolderContent(arg0, type, state, cleanUp) {
  let guilds;
  let obj3;
  type = type.type;
  if ("icon" === type) {
    const obj2 = { fromTop: true, cleanUp, state, children: closure_16(GuildFolderIcon, obj3) };
    obj3 = { item: type };
    return closure_16(TransitionWrapper, obj2, arg0);
  } else if ("preview" === type) {
    let tmp = closure_16;
    let tmp2 = TransitionWrapper;
    let obj = {
      cleanUp,
      state,
      children: guilds.map((guildId, index) => {
          let tmp = index;
          if (0 !== index) {
            tmp = index;
            if (1 !== index) {
              tmp = index;
              if (2 !== index) {
                tmp = index;
              }
            }
          }
          let tmp2 = null;
          if (null != guildId) {
            tmp2 = null;
            if (null != tmp) {
              const obj = { guildId, selected: guildId === type.selectedGuildId, position: tmp };
              tmp2 = authStore3(MiniGuildIcon, obj, guildId);
            }
          }
          return tmp2;
        })
    };
    guilds = type.guilds;
    return closure_16(TransitionWrapper, obj, arg0);
  }
}
const GuildsNodeType = SortedGuildStore2.GuildsNodeType;
({ useItemDragState: c9, useFolderBGHeightOffset: c10 } = GuildsBarDnDStore);
let GuildsBarConstants = GuildsBarConstants_mod2;
({ DEFAULT_FOLDER_COLOR: unpackModuleId, isDefaultFolderColor: closure_12, normalizeFolderColor: map1 } = GuildsBarConstants);
GuildsBarConstants = GuildsBarConstants_mod2;
({ TRANSITION_PHYSICS: closure_14, FOLDER_SPRING_PHYSICS: closure_15 } = GuildsBarConstants);
let Fragment = Fragment_mod;
({ jsx: closure_16, jsxs: closure_17 } = Fragment);
let closure_18 = createStyles.createStyles(() => {
  let rect;
  let num = arg0;
  if (arg0 === undefined) {
    num = 48;
  }
  let num2 = arg1;
  if (arg1 === undefined) {
    num2 = 0;
  }
  const obj = { folderBackground: rect, folderScaleContainer: { position: "absolute", top: 0, left: 0, width: num, height: num, justifyContent: "center", alignItems: "center" }, guildPreviewIcon: { position: "absolute", margin: nativeDefault.modules.mobile.GUILD_FOLDER_PREVIEW_ICON_MARGIN }, guildPreviewIconUnselected: { borderRadius: nativeDefault.radii.sm }, guildPreview0: { top: 0, left: 0 }, guildPreview1: { top: 0, right: 0 }, guildPreview2: { bottom: 0, left: 0 }, guildPreview3: { bottom: 0, right: 0 }, guildPreviewWrapper: { position: "absolute", width: num, height: num } };
  rect = { position: "absolute", top: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, left: nativeDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_LEFT, backgroundColor: nativeDefault.colors.GUILD_FOLDER_BACKGROUND, borderTopLeftRadius: nativeDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS, borderTopRightRadius: nativeDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS, borderBottomLeftRadius: nativeDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS, borderBottomRightRadius: nativeDefault.modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS, width: num + num2 };
  ({ position: "absolute", margin: nativeDefault.modules.mobile.GUILD_FOLDER_PREVIEW_ICON_MARGIN });
  ({ borderRadius: nativeDefault.radii.sm });
  return obj;
});
const __initData = { code: "function GuildsBarGuildFolderTsx1(values){const{withSpring,TRANSITION_PHYSICS}=this.__closure;return{animations:{height:withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always')},initialValues:{height:values.currentHeight}};}" };
const __initData2 = { code: "function GuildsBarGuildFolderTsx2(){const{withSpring,visible,FOLDER_SPRING_PHYSICS,state,TransitionStates,runOnJS,cleanUp,fromTop,guildItemSize}=this.__closure;return{opacity:withSpring(visible.get(),FOLDER_SPRING_PHYSICS,undefined,function(finished){if(finished&&state===TransitionStates.YEETED)runOnJS(cleanUp)();}),transform:[{translateY:withSpring(visible.get()===1?0:fromTop?-guildItemSize:guildItemSize,FOLDER_SPRING_PHYSICS)},{scale:withSpring(visible.get()===1?1:fromTop?0.3:1.3,FOLDER_SPRING_PHYSICS)}]};}" };
let closure_23 = { code: "function GuildsBarGuildFolderTsx3(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED)runOnJS(cleanUp)();}" };
const __initData3 = { code: "function GuildsBarGuildFolderTsx4(values){const{dragDropInProgress,sharedId,id,isDragTarget,withSpring,TRANSITION_PHYSICS}=this.__closure;var _id;const shouldAnimate=dragDropInProgress.get()&&sharedId.get()===\"\"+id&&!isDragTarget;sharedId.set(\"\"+((_id=id)!==null&&_id!==void 0?_id:null));return{animations:{originY:shouldAnimate?withSpring(values.targetOriginY,TRANSITION_PHYSICS,'animate-always'):values.targetOriginY,height:shouldAnimate?withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always'):values.targetHeight},initialValues:{originY:values.currentOriginY,height:values.currentHeight}};}" };
const memoResult = react.memo(function FolderBGInner(color) {
  let folderId;
  let items1;
  let totalItems;
  color = color.color;
  let token2;
  ({ folderId, totalItems } = color);
  let obj = color(4531);
  const token = obj.useToken(token2(576).modules.mobile.GUILD_BAR_ITEM_SIZE);
  let obj2 = color(4531);
  const token1 = obj2.useToken(token2(576).modules.mobile.GUILD_BAR_ITEM_MARGIN);
  let obj3 = color(4531);
  const fn = function s(height) {
    let obj2;
    let obj3;
    const obj = { animations: obj2, initialValues: { height: height.currentHeight } };
    obj2 = { height: obj3.withSpring(height.targetHeight, TRANSITION_PHYSICS, "animate-always") };
    obj3 = color(dependencyMap[14]);
    return obj;
  };
  const tmp3 = closure_18(token, obj3.useToken(token2(576).modules.mobile.GUILD_FOLDER_BACKGROUND_WIDTH_OFFSET));
  const obj4 = { withSpring: color(5280).withSpring, TRANSITION_PHYSICS };
  const tmp4 = closure_10(folderId);
  const useCallback = react.useCallback;
  fn.__closure = obj4;
  fn.__workletHash = 2519256682742;
  fn.__initData = __initData;
  const callback = useCallback(fn, []);
  const obj5 = color(4531);
  token2 = obj5.useToken(token2(576).modules.mobile.GUILD_FOLDER_COLOR_OPACITY);
  const items = [color, token2];
  const memo = react.useMemo(() => {
    let hexWithOpacity;
    let obj2;
    const tmp = map1(color);
    if (null != tmp) {
      const obj = { backgroundColor: hexWithOpacity(obj2.int2hex(tmp), token2) };
      hexWithOpacity = ColorUtils.hexWithOpacity;
      ColorUtils;
      obj2 = utils_ColorUtils;
      return obj;
    }
  }, items);
  const obj6 = { pointerEvents: "none", collapsable: false, layout: callback, style: items1 };
  items1 = [tmp3.folderBackground, memo, ];
  const obj7 = { height: token + token1 + (token + 2 * token1) * totalItems + tmp4 };
  items1[2] = obj7;
  return closure_16(token2(6494), obj6);
});
const memoResult1 = react.memo(function GuildsBarGuildFolder(id) {
  let accessibilityActions;
  let badge;
  let cutouts;
  let dragState;
  let isMentionLowImportance;
  let itemSize;
  let mentionCount;
  let obj13;
  let onAccessibilityAction;
  let overState;
  let tmp19Result;
  let tmp19Result2;
  let unread;
  id = id.id;
  const expanded = id.expanded;
  const name = id.name;
  const color = id.color;
  const childNodes = id.childNodes;
  let flag = id.isDragPreview;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = id.hideExpandedChildren;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const foldersChanged = id.foldersChanged;
  let selectedPreviewId;
  let tmp2 = name;
  let tmp = id;
  let obj = id(name[11]);
  let tmp3 = expanded;
  let tmp4 = closure_18(obj.useToken(expanded(name[10]).modules.mobile.GUILD_BAR_ITEM_SIZE));
  const guildPreviewWrapper = tmp4;
  let obj2 = id(name[22]);
  const guildsBarAnimatedWrapperStyles = obj2.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true });
  let obj3 = id(name[12]);
  let items = [childNodes];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => {
    const tmp = expanded;
    if (tmp) {
      return { unread: false, mentionCount: 0, isMentionLowImportance: false };
    } else {
      const tmp2 = GuildReadStateStore;
      const mutableGuildStates = GuildReadStateStore.getMutableGuildStates();
      return childNodes.reduce((mentionCount, id) => {
        if (null != id.id) {
          let num;
          if (closure_0[id.id] != null) {
            num = tmp5.highImportanceMentionCount;
          }
          if (num == null) {
            num = 0;
          }
          let num2;
          if (closure_0[id.id] != null) {
            num2 = tmp.lowImportanceMentionCount;
          }
          if (num2 == null) {
            num2 = 0;
          }
          mentionCount.mentionCount = mentionCount.mentionCount + num + num2;
          let flag = mentionCount.unread;
          if (!flag) {
            let unread;
            if (closure_0[id.id] != null) {
              unread = tmp2.unread;
            }
            flag = unread;
          }
          if (flag == null) {
            flag = false;
          }
          mentionCount.unread = flag;
          const isMentionLowImportance = mentionCount.isMentionLowImportance && 0 === num;
          mentionCount.isMentionLowImportance = isMentionLowImportance;
        }
        return mentionCount;
      }, { unread: false, mentionCount: 0, isMentionLowImportance: true });
    }
  });
  ({ unread, mentionCount, isMentionLowImportance } = stateFromStoresObject);
  let obj4 = id(name[12]);
  let items1 = [guildPreviewWrapper, selectedPreviewId];
  let items2 = [expanded, id, childNodes];
  const stateFromStoresObject1 = obj4.useStateFromStoresObject(items1, () => {
    let num = 0;
    const guildId = SelectedGuildStore.getGuildId();
    const iter = childNodes[Symbol.iterator]();
    while (iter !== undefined) {
      let tmp;
      if (iter.next().id === guildId) {
        tmp = guildId;
        iter.return();
        break;
      } else {
        let sum = num + 1;
        num = sum;
        if (4 <= sum) {
          iter.return();
          break;
        }
        break;
      }
      let flag = false;
      if (!expanded) {
        flag = false;
        if (null != guildId) {
          let guildsTree = SortedGuildStore.getGuildsTree();
          let node = guildsTree.getNode(guildId);
          let parentId;
          if (node != null) {
            parentId = node.parentId;
          }
          flag = parentId === id;
        }
      }
      let obj = { selectedPreviewId: tmp, hasGuildSelected: flag };
      return obj;
    }
  }, items2);
  selectedPreviewId = stateFromStoresObject1.selectedPreviewId;
  const hasGuildSelected = stateFromStoresObject1.hasGuildSelected;
  let tmp8 = expanded(name[23])({ mentionCount, isMentionLowImportance });
  ({ badge, cutouts } = tmp8);
  let obj5 = id(name[12]);
  const items3 = [foldersChanged];
  const items4 = [name, childNodes];
  const label = obj5.useStateFromStores(items3, () => {
    let items;
    let obj2;
    if (null != name) {
      const obj3 = { count: 1, names: items, label: name };
      items = [name];
      return obj3;
    } else {
      const items1 = [];
      let num = 0;
      const obj4 = childNodes[Symbol.iterator]();
      while (obj4 !== undefined) {
        let guild = GuildStore.getGuild(tmp3.id);
        if (null != guild) {
          let arr = items1.push(tmp7.name);
        }
        let sum = num + 1;
        num = sum;
        if (3 <= sum) {
          obj4.return();
          break;
        }
        let obj = { names: items1, count: childNodes.length, label: obj2.getListSummaryLabel(items1, childNodes.length) };
        obj2 = ListUtils;
        return obj;
      }
    }
  }, items4, expanded(name[25])).label;
  const obj6 = id(name[11]);
  const token = obj6.useToken(expanded(name[10]).colors.GUILD_FOLDER_BACKGROUND);
  const obj7 = id(name[11]);
  const token1 = obj7.useToken(expanded(name[10]).modules.mobile.GUILD_FOLDER_PREVIEW_OPACITY);
  const items5 = [color, token, token1];
  const memo = color.useMemo(() => {
    let hexWithOpacityResult;
    let tmp5 = color;
    const int2hex = utils_ColorUtils.int2hex;
    utils_ColorUtils;
    const tmp4 = color;
    if (color == null) {
      tmp5 = unpackModuleId;
    }
    const int2hexResult = int2hex(tmp5);
    const obj = { tintStyle: { tintColor: int2hexResult }, folderPreviewStyle: { backgroundColor: hexWithOpacityResult } };
    if (isDragTarget(tmp4)) {
      hexWithOpacityResult = token;
    } else {
      const tmpResult = ColorUtils;
      hexWithOpacityResult = tmpResult.hexWithOpacity(int2hexResult, token1);
    }
    return obj;
  }, items5);
  const tintStyle = memo.tintStyle;
  const folderPreviewStyle = memo.folderPreviewStyle;
  const items6 = [id, foldersChanged];
  const items7 = [expanded, childNodes, tintStyle, selectedPreviewId];
  const memo1 = color.useMemo(() => {
    const obj = {
      onPress() {
        if (null != foldersChanged) {
          const value = obj.get();
          const _HermesInternal = HermesInternal;
          const tmp = closure_1_0;
          if (value.has("" + closure_1_0)) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            set = new Set(foldersChanged.get());
            const _HermesInternal2 = HermesInternal;
            set.add("" + tmp);
            const result = obj.set(set);
          }
        }
        const obj4 = id(name[26]);
        const result1 = obj4.triggerHapticFeedback(id(name[26]).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj5 = expanded(name[27]);
        const result2 = obj5.toggleGuildFolderExpand(closure_1_0);
      }
    };
    return obj;
  }, items6);
  const items8 = [expanded, tmp4.guildPreviewWrapper, folderPreviewStyle];
  const memo2 = color.useMemo(() => {
    const tmp = expanded;
    if (tmp) {
      const items = [{ type: "icon", tintStyle }];
      return items;
    } else {
      const items1 = [];
      const iter = childNodes[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (nextResult.type === GuildsNodeType.GUILD) {
          let arr = items1.push(tmp7.id);
          if (items1.length >= 4) {
            iter.return();
            break;
          }
          let obj = { type: "preview", guilds: items1, selectedGuildId: selectedPreviewId };
          let items2 = [obj];
          return items2;
        }
        continue;
      }
    }
  }, items7);
  const callback = color.useCallback((arg0) => {
    let items1;
    const Fragment = react.Fragment;
    const items = [guildPreviewWrapper.guildPreviewWrapper, ];
    let tmp4;
    const tmp = closure_17;
    const tmp2 = authStore3;
    const tmp3 = NativeViewDefault;
    if (!expanded) {
      tmp4 = folderPreviewStyle;
    }
    const obj = { children: items1 };
    items[1] = tmp4;
    items1 = [tmp2(tmp3, { style: items }), arg0];
    return tmp(Fragment, obj, "wrapper");
  }, items8);
  let tmp15 = token1(id, flag);
  const isDragTarget = tmp15.isDragTarget;
  const dragDropInProgress = tmp15.dragDropInProgress;
  const items9 = [id];
  ({ dragState, overState, itemSize } = tmp15);
  const memo3 = color.useMemo(() => {
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
  }, items9);
  ({ accessibilityActions, onAccessibilityAction } = memo3);
  const obj8 = id(name[18]);
  const sharedValue = obj8.useSharedValue("" + id);
  class E {
    constructor(originY) {
      let targetHeight;
      let targetOriginY;
      let value = dragDropInProgress.get();
      if (value) {
        const _HermesInternal = HermesInternal;
        const value2 = sharedValue.get();
        value = value2 === "" + id;
      }
      if (value) {
        value = !isDragTarget;
      }
      let tmp8 = id;
      set = sharedValue.set;
      if (id == null) {
        tmp8 = null;
      }
      const result = set("" + tmp8);
      if (value) {
        const obj = spring;
        targetOriginY = obj.withSpring(originY.targetOriginY, closure_14, "animate-always");
      } else {
        targetOriginY = originY.targetOriginY;
      }
      const obj2 = { originY: targetOriginY, height: targetHeight };
      if (value) {
        const obj3 = spring;
        targetHeight = obj3.withSpring(originY.targetHeight, closure_14, "animate-always");
      } else {
        targetHeight = originY.targetHeight;
      }
      return { animations: obj2, initialValues: { originY: originY.currentOriginY, height: originY.currentHeight } };
    }
  }
  E.__closure = { dragDropInProgress, sharedId: sharedValue, id, isDragTarget, withSpring: id(name[14]).withSpring, TRANSITION_PHYSICS: sharedValue };
  E.__workletHash = 11967845900199;
  E.__initData = __initData3;
  const items10 = [id, sharedValue, isDragTarget, dragDropInProgress];
  ({ dragDropInProgress, sharedId: sharedValue, id, isDragTarget, withSpring: id(name[14]).withSpring, TRANSITION_PHYSICS: sharedValue });
  const callback1 = color.useCallback(E, items10);
  const obj10 = { id: "" + id, draggedItemSize: itemSize, accessibilityActions, onAccessibilityAction, selected: hasGuildSelected, unread: !expanded && unread, circle: false, styles: guildsBarAnimatedWrapperStyles, label, isDragTarget, dragState, sharedId: sharedValue, cutouts, config: memo1, isDragPreview: flag, overState, expanded, layout: callback1, externalChildren: tmp19Result, expandedChildren: tmp19Result2, children: closure_16(tmp(tmp2[19]).TransitionGroup, obj13) };
  tmp19Result = badge;
  const tmp20 = expanded(name[22]);
  if (expanded) {
    tmp19Result = badge;
    if (!flag) {
      const obj11 = { color, folderId: id, totalItems: childNodes.length };
      tmp19Result = tmp19(closure_21, obj11);
    }
  }
  tmp19Result2 = undefined;
  if (!flag2) {
    const obj12 = { folderId: id, expanded };
    tmp19Result2 = tmp19(tmp3(tmp2[30]), obj12);
  }
  obj13 = { renderItem: renderGuildFolderContent, getItemKey, items: memo2, wrapChildren: callback };
  return closure_16(tmp20, obj10);
});
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarGuildFolder.tsx");

export default memoResult1;
export const GuildsBarGuildFolderBG = memoResult;
