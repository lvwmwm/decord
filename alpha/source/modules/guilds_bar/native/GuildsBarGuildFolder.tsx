// Module ID: 18653
// Function ID: 18654
// Name: GuildsBarGuildFolder
// Dependencies: [19, 5144, 7024, 5014, 5174, 6910, 18645, 18650, 18642, 21, 5143, 575, 5734, 504, 7101, 5773, 5140, 1090, 1652, 5209, 1705, 5854, 8752, 18654, 18657, 13028, 18664, 5386, 7040, 7104, 18647, 18665, 2]

// Module 18653 (GuildsBarGuildFolder)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1090 */;
import native from "native" /* 5209 */;
import useToken from "useToken" /* 5734 */;
import FastImageDefault from "FastImage" /* 5854 */;
import SortedGuildStore2 from "SortedGuildStore" /* 6910 */;
import NativeViewDefault from "NativeView" /* 7104 */;
import AssetRegistryDefault from "AssetRegistry" /* 8752 */;
import ListUtils from "ListUtils" /* 13028 */;
import GuildsBarFolderMenuItems from "GuildsBarFolderMenuItems" /* 18647 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5144 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7024 */;
import GuildStore from "GuildStore" /* 5014 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5174 */;
import GuildsBarDnDStore from "GuildsBarDnDStore" /* 18645 */;
import GuildsBarConstants_mod from "guilds_bar/GuildsBarConstants" /* 18650 */;
import GuildsBarConstants_mod2 from "GuildsBarConstants" /* 18642 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

const SortedGuildStore = SortedGuildStore2;
let set;

let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let map1;
let tmp;
let tmp3;
let unpackModuleId;
const ColorUtils = tmp(5140);
const GuildIcon = tmp(7101);
const GuildIconDefault = tmp3(7101);
function MiniGuildIcon(arg0) {
  let guildPreview3;
  let position;
  let require;
  let selected;
  ({ guildId: require, position, selected } = arg0);
  const obj = useToken;
  const tmp4 = closure_19(obj.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE));
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
  const tmp6 = closure_17;
  if (!selected) {
    prop = tmp4.guildPreviewIconUnselected;
  }
  items1[1] = prop;
  items1[2] = guildPreview3;
  const obj3 = { style: items1, guild: stateFromStores, size: GuildIcon.GuildIconSizes.XXSMALL, selected };
  return tmp6(tmp3Result, obj3, "" + selected);
}
function TransitionWrapper(fromTop) {
  let items4;
  let num;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let useReducedMotion;
  let flag = fromTop.fromTop;
  const children = fromTop.children;
  if (flag === undefined) {
    flag = false;
  }
  const cleanUp = fromTop.cleanUp;
  const state = fromTop.state;
  let stateFromStores;
  let sharedValue;
  let tmp = cleanUp;
  const tmp3 = state;
  const obj = cleanUp(stateFromStores[12]);
  const token = obj.useToken(state(stateFromStores[11]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp5 = closure_19(token);
  let obj2 = cleanUp(stateFromStores[13]);
  let items = [AccessibilityStore];
  stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp7 = cleanUp(stateFromStores[18]);
  const useSharedValue = tmp7.useSharedValue;
  if (state === cleanUp(stateFromStores[19]).TransitionStates.MOUNTED) {
    num = 1;
  } else {
    num = 0;
  }
  sharedValue = useSharedValue(num);
  let items1 = [closure_24, , , , , , , , , , ];
  const useAnimatedStyle = tmp(tmp2[18]).useAnimatedStyle;
  tmp(stateFromStores[18]);
  items1[1] = tmp(stateFromStores[15]).withSpring;
  items1[2] = sharedValue;
  items1[3] = closure_16;
  items1[4] = closure_23;
  items1[5] = state;
  items1[6] = tmp(stateFromStores[19]).TransitionStates;
  items1[7] = tmp(stateFromStores[20]).scheduleOnRN;
  items1[8] = cleanUp;
  items1[9] = flag;
  items1[10] = token;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items1;
  class GuildsBarGuildFolderTsx3 {
    constructor() {
      let _undefined;
      let items2;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp = c0;
      const value = _undefined.get();
      const items = [c3, c4, c5, c6, c7];
      c0 = undefined;
      _undefined = undefined;
      let c2;
      c3 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8] = items;
      const obj2 = { opacity: tmp(value, c2, undefined, GuildsBarGuildFolderTsx2), transform: items2 };
      class GuildsBarGuildFolderTsx2 {
        constructor(arg0) {
          tmp = arg0;
          if (tmp) {
            tmp2 = closure_0;
            tmp3 = closure_1;
            tmp = closure_0 === closure_1.YEETED;
          }
          if (tmp) {
            tmp4 = closure_2;
            tmp5 = closure_3;
            tmp6 = closure_2(closure_3);
          }
          return;
        }
      }
      const items1 = [tmp5, tmp6, tmp7, tmp8];
      GuildsBarGuildFolderTsx2.__closure = items1;
      GuildsBarGuildFolderTsx2.__workletHash = 6478186376441;
      GuildsBarGuildFolderTsx2.__initData = tmp4;
      let num = 1;
      let num2 = 0;
      if (1 !== _undefined.get()) {
        num2 = c8 ? -tmp10 : tmp10;
      }
      items2 = [{ translateY: tmp(num2, tmp3) }, ];
      ({ translateY: tmp(num2, c2) });
      if (num !== _undefined.get()) {
        let num3 = 1.3;
        if (c8) {
          num3 = 0.3;
        }
        num = num3;
      }
      items2[1] = { scale: tmp(num, c2) };
      ({ scale: tmp(num, c2) });
      return obj2;
    }
  }
  let items2 = [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20];
  GuildsBarGuildFolderTsx3.__closure = items2;
  GuildsBarGuildFolderTsx3.__workletHash = 12641678463555;
  GuildsBarGuildFolderTsx3.__initData = tmp10;
  const items3 = [state, sharedValue, stateFromStores, cleanUp];
  const animatedStyle = useAnimatedStyle(GuildsBarGuildFolderTsx3);
  const effect = sharedValue.useEffect(() => {
    const tmp = stateFromStores;
    if (tmp) {
      if (state === native.TransitionStates.YEETED) {
        cleanUp();
      }
    }
    let num = 1;
    set = sharedValue.set;
    if (state === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = set(num);
  }, items3);
  const obj3 = { style: items4, children };
  items4 = [animatedStyle, tmp5.folderScaleContainer];
  return closure_17(tmp3(stateFromStores[18]).View, obj3);
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
    tmp = closure_17(tmp5, obj);
  }
  return tmp;
}
function renderGuildFolderContent(arg0, type, state, cleanUp) {
  let guilds;
  let obj3;
  type = type.type;
  if ("icon" === type) {
    const obj2 = { fromTop: true, cleanUp, state, children: closure_17(GuildFolderIcon, obj3) };
    obj3 = { item: type };
    return closure_17(TransitionWrapper, obj2, arg0);
  } else if ("preview" === type) {
    let tmp = closure_17;
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
              tmp2 = closure_17(MiniGuildIcon, obj, guildId);
            }
          }
          return tmp2;
        })
    };
    guilds = type.guilds;
    return closure_17(TransitionWrapper, obj, arg0);
  }
}
const GuildsNodeType = SortedGuildStore2.GuildsNodeType;
({ useItemDragState: c10, useFolderBGHeightOffset: unpackModuleId } = GuildsBarDnDStore);
let GuildsBarConstants = GuildsBarConstants_mod2;
({ DEFAULT_FOLDER_COLOR: closure_12, isDefaultFolderColor: map1, normalizeFolderColor: closure_14 } = GuildsBarConstants);
GuildsBarConstants = GuildsBarConstants_mod2;
({ TRANSITION_PHYSICS: closure_15, FOLDER_SPRING_PHYSICS: closure_16 } = GuildsBarConstants);
let Fragment = Fragment_mod;
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
let closure_19 = createStyles.createStyles(() => {
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
let closure_21 = { code: "(function GuildsBarGuildFolderTsx1(values){let[withSpring,TRANSITION_PHYSICS]=this.__closure;return{animations:{height:withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always')},initialValues:{height:values.currentHeight}};})" };
let closure_23 = { code: "(function GuildsBarGuildFolderTsx2(finished){let[state,TransitionStates,scheduleOnRN,cleanUp]=this.__closure;if(finished&&state===TransitionStates.YEETED)scheduleOnRN(cleanUp);})" };
let closure_24 = { code: "(function GuildsBarGuildFolderTsx3(){let[withSpring,visible,FOLDER_SPRING_PHYSICS,_worklet_6478186376441_init_data,state,TransitionStates,scheduleOnRN,cleanUp,fromTop,guildItemSize]=this.__closure;return{opacity:withSpring(visible.get(),FOLDER_SPRING_PHYSICS,undefined,function GuildsBarGuildFolderTsx2Factory([_worklet_6478186376441_init_data,state,TransitionStates,scheduleOnRN,cleanUp]){const GuildsBarGuildFolderTsx2=function(finished){if(finished&&state===TransitionStates.YEETED)scheduleOnRN(cleanUp);};GuildsBarGuildFolderTsx2.__closure=[state,TransitionStates,scheduleOnRN,cleanUp];GuildsBarGuildFolderTsx2.__workletHash=6478186376441;GuildsBarGuildFolderTsx2.__initData=_worklet_6478186376441_init_data;return GuildsBarGuildFolderTsx2;}([_worklet_6478186376441_init_data,state,TransitionStates,scheduleOnRN,cleanUp])),transform:[{translateY:withSpring(visible.get()===1?0:fromTop?-guildItemSize:guildItemSize,FOLDER_SPRING_PHYSICS)},{scale:withSpring(visible.get()===1?1:fromTop?0.3:1.3,FOLDER_SPRING_PHYSICS)}]};})" };
let closure_29 = { code: "(function GuildsBarGuildFolderTsx4(values){let[dragDropInProgress,sharedId,id,isDragTarget,withSpring,TRANSITION_PHYSICS]=this.__closure;var _id;const shouldAnimate=dragDropInProgress.get()&&sharedId.get()===\"\"+id&&!isDragTarget;sharedId.set(\"\"+((_id=id)!==null&&_id!==void 0?_id:null));return{animations:{originY:shouldAnimate?withSpring(values.targetOriginY,TRANSITION_PHYSICS,'animate-always'):values.targetOriginY,height:shouldAnimate?withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always'):values.targetHeight},initialValues:{originY:values.currentOriginY,height:values.currentHeight}};})" };
const memoResult = react.memo(function FolderBGInner(color) {
  let folderId;
  let items3;
  let tmp10;
  let tmp8;
  let tmp9;
  let totalItems;
  color = color.color;
  let token2;
  ({ folderId, totalItems } = color);
  let tmp = color;
  let obj = color(5734);
  const token = obj.useToken(token2(575).modules.mobile.GUILD_BAR_ITEM_SIZE);
  let obj2 = color(5734);
  const token1 = obj2.useToken(token2(575).modules.mobile.GUILD_BAR_ITEM_MARGIN);
  const items = [closure_21, , ];
  const obj3 = color(5734);
  const tmp6 = closure_19(token, obj3.useToken(token2(575).modules.mobile.GUILD_FOLDER_BACKGROUND_WIDTH_OFFSET));
  const tmp7 = closure_11(folderId);
  const useCallback = react.useCallback;
  items[1] = color(5773).withSpring;
  items[2] = closure_15;
  let c0;
  let c1;
  [tmp8, tmp9, tmp10] = items;
  const obj4 = react;
  class GuildsBarGuildFolderTsx1 {
    constructor(height) {
      const obj = { animations: { height: _undefined(height.targetHeight, c1, "animate-always") }, initialValues: { height: height.currentHeight } };
      ({ height: _undefined(height.targetHeight, c1, "animate-always") });
      return obj;
    }
  }
  const items1 = [tmp9, tmp10];
  GuildsBarGuildFolderTsx1.__closure = items1;
  GuildsBarGuildFolderTsx1.__workletHash = 3223849263087;
  GuildsBarGuildFolderTsx1.__initData = tmp8;
  const callback = useCallback(GuildsBarGuildFolderTsx1, []);
  const tmpResult = tmp(5734);
  token2 = tmpResult.useToken(tmp3(575).modules.mobile.GUILD_FOLDER_COLOR_OPACITY);
  const items2 = [color, token2];
  const memo = obj4.useMemo(() => {
    let hexWithOpacity;
    let obj2;
    const tmp = authStore3(color);
    if (null != tmp) {
      const obj = { backgroundColor: hexWithOpacity(obj2.int2hex(tmp), token2) };
      hexWithOpacity = ColorUtils.hexWithOpacity;
      ColorUtils;
      obj2 = utils_ColorUtils;
      return obj;
    }
  }, items2);
  const obj5 = { pointerEvents: "none", collapsable: false, layout: callback, style: items3 };
  items3 = [tmp6.folderBackground, memo, ];
  const obj6 = { height: token + token1 + (token + 2 * token1) * totalItems + tmp7 };
  items3[2] = obj6;
  return closure_17(token2(1652).View, obj5);
});
const memoResult1 = react.memo(function GuildsBarGuildFolder(id) {
  let accessibilityActions;
  let badge;
  let cutouts;
  let dragDropInProgress;
  let dragState;
  let isDragTarget;
  let isMentionLowImportance;
  let itemSize;
  let mentionCount;
  let obj12;
  let onAccessibilityAction;
  let overState;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp27Result;
  let tmp27Result2;
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
  let token;
  let tmp2 = name;
  let tmp = id;
  let obj = id(name[12]);
  let tmp3 = expanded;
  let tmp4 = closure_19(obj.useToken(expanded(name[11]).modules.mobile.GUILD_BAR_ITEM_SIZE));
  const guildPreviewWrapper = tmp4;
  let obj2 = id(name[23]);
  const guildsBarAnimatedWrapperStyles = obj2.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true });
  let obj3 = id(name[13]);
  let items = [foldersChanged];
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
  let obj4 = id(name[13]);
  let items1 = [selectedPreviewId, token];
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
  let tmp8 = expanded(name[24])({ mentionCount, isMentionLowImportance });
  ({ badge, cutouts } = tmp8);
  let obj5 = id(name[13]);
  const items3 = [guildPreviewWrapper];
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
  }, items4, expanded(name[26])).label;
  const obj6 = id(name[12]);
  token = obj6.useToken(expanded(name[11]).colors.GUILD_FOLDER_BACKGROUND);
  const obj7 = id(name[12]);
  const token1 = obj7.useToken(expanded(name[11]).modules.mobile.GUILD_FOLDER_PREVIEW_OPACITY);
  const items5 = [color, token, token1];
  let tmp11 = color;
  const memo = color.useMemo(() => {
    let hexWithOpacityResult;
    let tmp5 = color;
    const int2hex = utils_ColorUtils.int2hex;
    utils_ColorUtils;
    const tmp4 = color;
    if (color == null) {
      tmp5 = authStore2;
    }
    const int2hexResult = int2hex(tmp5);
    const obj = { tintStyle: { tintColor: int2hexResult }, folderPreviewStyle: { backgroundColor: hexWithOpacityResult } };
    if (map1(tmp4)) {
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
        const obj4 = id(name[27]);
        const result1 = obj4.triggerHapticFeedback(id(name[27]).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj5 = expanded(name[28]);
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
    const tmp = authStore5;
    const tmp2 = closure_17;
    const tmp3 = NativeViewDefault;
    if (!expanded) {
      tmp4 = folderPreviewStyle;
    }
    const obj = { children: items1 };
    items[1] = tmp4;
    items1 = [tmp2(tmp3, { style: items }), arg0];
    return tmp(Fragment, obj, "wrapper");
  }, items8);
  const tmp16 = tintStyle(id, flag);
  ({ isDragTarget, dragDropInProgress } = tmp16);
  const items9 = [id];
  ({ dragState, overState, itemSize } = tmp16);
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
  const items10 = [closure_29, dragDropInProgress, sharedValue, id, isDragTarget, , ];
  const useCallback = color.useCallback;
  items10[5] = id(name[15]).withSpring;
  items10[6] = closure_15;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25] = items10;
  class GuildsBarGuildFolderTsx4 {
    constructor(originY) {
      let targetHeight;
      let targetOriginY;
      let value = _undefined.get();
      if (value) {
        const _HermesInternal = HermesInternal;
        const value2 = _undefined2.get();
        value = value2 === "" + c2;
      }
      if (value) {
        value = !c3;
      }
      let tmp8 = c2;
      set = _undefined2.set;
      if (c2 == null) {
        tmp8 = null;
      }
      const result = set("" + tmp8);
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
  const items11 = [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25];
  GuildsBarGuildFolderTsx4.__closure = items11;
  GuildsBarGuildFolderTsx4.__workletHash = 4596060370334;
  GuildsBarGuildFolderTsx4.__initData = tmp19;
  const items12 = [id, sharedValue, isDragTarget, dragDropInProgress];
  const callback1 = useCallback(GuildsBarGuildFolderTsx4, items12);
  const obj9 = { id: "" + id, draggedItemSize: itemSize, accessibilityActions, onAccessibilityAction, selected: hasGuildSelected, unread: !expanded && unread, circle: false, styles: guildsBarAnimatedWrapperStyles, label, isDragTarget, dragState, sharedId: sharedValue, cutouts, config: memo1, isDragPreview: flag, overState, preventClipping: true, expanded, layout: callback1, externalChildren: tmp27Result, expandedChildren: tmp27Result2, children: closure_17(tmp(tmp2[19]).TransitionGroup, obj12) };
  tmp27Result = badge;
  const tmp3Result = tmp3(tmp2[23]);
  if (expanded) {
    tmp27Result = badge;
    if (!flag) {
      const obj10 = { color, folderId: id, totalItems: childNodes.length };
      tmp27Result = tmp27(closure_22, obj10);
    }
  }
  tmp27Result2 = undefined;
  if (!flag2) {
    const obj11 = { folderId: id, expanded };
    tmp27Result2 = tmp27(tmp3(tmp2[31]), obj11);
  }
  obj12 = { renderItem: renderGuildFolderContent, getItemKey, items: memo2, wrapChildren: callback };
  return closure_17(tmp3Result, obj9);
});
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarGuildFolder.tsx");

export default memoResult1;
export const GuildsBarGuildFolderBG = memoResult;
