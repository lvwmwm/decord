// Module ID: 14869
// Function ID: 113427
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31, 6878, 1838, 3947, 4970, 14859, 14865, 14860, 33, 4130, 689, 3834, 566, 5513, 1324, 4542, 3974, 665, 7678, 3991, 4476, 4596, 7897, 5085, 14870, 14872, 11679, 14880, 4099, 5048, 5515, 14862, 14881, 2]

// Module 14869 (_createForOfIteratorHelperLoose)
import importAllResult from "getGuildFolderMenuItems";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_createForOfIteratorHelperLoose";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { GuildsNodeType } from "_isNativeReflectConstruct";
import withEqualityFn from "withEqualityFn";
import { DEFAULT_FOLDER_COLOR } from "DEFAULT_FOLDER_COLOR";
import GUILD_ITEM_SIZE from "GUILD_ITEM_SIZE";
import jsxProd from "set";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_9;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function MiniGuildIcon(arg0) {
  let position;
  let require;
  let selected;
  ({ guildId: require, position, selected } = arg0);
  let obj = require(3834) /* map */;
  const tmp3 = callback3(false, obj.useToken(importDefault(689).modules.mobile.GUILD_BAR_ITEM_SIZE));
  const items = [closure_5];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_5.getGuild(closure_0));
  if (0 === position) {
    let guildPreview3 = tmp3.guildPreview0;
  } else if (1 === position) {
    guildPreview3 = tmp3.guildPreview1;
  } else if (2 === position) {
    guildPreview3 = tmp3.guildPreview2;
  } else if (3 === position) {
    guildPreview3 = tmp3.guildPreview3;
  }
  obj = {};
  const items1 = [tmp3.guildPreviewIcon, , ];
  let prop;
  const obj2 = require(566) /* initialize */;
  const tmp2 = importDefault;
  const tmp5 = closure_14;
  if (!selected) {
    prop = tmp3.guildPreviewIconUnselected;
  }
  items1[1] = prop;
  items1[2] = guildPreview3;
  obj.style = items1;
  obj.guild = stateFromStores;
  obj.size = require(5513) /* makeSizeStyle */.GuildIconSizes.XXSMALL;
  obj.selected = selected;
  return tmp5(importDefault(5513), obj, "" + selected);
}
function TransitionWrapper(children) {
  let flag = children.fromTop;
  if (flag === undefined) {
    flag = false;
  }
  const cleanUp = children.cleanUp;
  const state = children.state;
  let token;
  let sharedValue;
  let obj = flag(state[11]);
  token = obj.useToken(cleanUp(state[10]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  let tmp = cleanUp(state[14])("GuildsBarGuildFolder");
  const tmp3 = callback3(cleanUp(state[14])("GuildsBarGuildFolder"), token);
  let num = 0;
  if (state === flag(state[20]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = flag(state[19]).useSharedValue(num);
  const obj2 = flag(state[19]);
  let fn = function a() {
    let obj = {};
    let obj1 = flag(state[15]);
    const value = sharedValue.get();
    const fn = function e(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = outer1_2 === flag(state[20]).TransitionStates.YEETED;
      }
      if (tmp) {
        flag(state[19]).runOnJS(outer1_1)();
        const obj = flag(state[19]);
      }
    };
    obj = { state, TransitionStates: flag(state[20]).TransitionStates, runOnJS: flag(state[19]).runOnJS, cleanUp };
    fn.__closure = obj;
    fn.__workletHash = 47605595424;
    fn.__initData = outer1_20;
    obj.opacity = obj1.withSpring(value, outer1_13, undefined, fn);
    obj = {};
    let num = 1;
    if (1 === sharedValue.get()) {
      obj.translateY = obj5.withSpring(0, outer1_13);
      const items = [obj, ];
      obj1 = {};
      if (num !== sharedValue.get()) {
        let num2 = 1.3;
        if (flag) {
          num2 = 0.3;
        }
        num = num2;
      }
      obj1.scale = flag(state[15]).withSpring(num, outer1_13);
      items[1] = obj1;
      obj.transform = items;
      return obj;
    }
  };
  obj = { withSpring: flag(state[15]).withSpring, visible: sharedValue, FOLDER_SPRING_PHYSICS: closure_13, state, TransitionStates: flag(state[20]).TransitionStates, runOnJS: flag(state[19]).runOnJS, cleanUp, fromTop: flag, guildItemSize: token };
  fn.__closure = obj;
  fn.__workletHash = 14426547532118;
  fn.__initData = closure_19;
  let items = [state, sharedValue];
  const animatedStyle = flag(state[19]).useAnimatedStyle(fn);
  const effect = token.useEffect(() => {
    let num = 1;
    if (state === flag(state[20]).TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  }, items);
  const style = [animatedStyle, tmp3.folderScaleContainer];
  return callback2(cleanUp(state[18]), { style, children: children.children });
}
function getItemKey(type) {
  return type.type;
}
function GuildFolderIcon(item) {
  item = item.item;
  let tmp4 = null;
  if ("icon" === item.type) {
    const obj = { source: tmp3, style: item.tintStyle };
    tmp4 = callback2(importDefault(5085), obj);
  }
  return tmp4;
}
function renderGuildFolderContent(arg0, type, state, cleanUp) {
  let closure_0 = type;
  type = type.type;
  if ("icon" === type) {
    let obj = { fromTop: true, cleanUp, state };
    obj = { item: type };
    obj.children = callback2(GuildFolderIcon, obj);
    return callback2(TransitionWrapper, obj, arg0);
  } else if ("preview" === type) {
    obj = { cleanUp, state };
    const guilds = type.guilds;
    obj.children = guilds.map((guildId) => {
      let tmp = arg1;
      if (0 !== arg1) {
        tmp = arg1;
        if (1 !== arg1) {
          tmp = arg1;
          if (2 !== arg1) {
            tmp = arg1;
          }
        }
      }
      let tmp2 = null;
      if (null != guildId) {
        tmp2 = null;
        if (null != tmp) {
          const obj = { guildId, selected: guildId === type.selectedGuildId, position: tmp };
          tmp2 = outer1_14(outer1_24, obj, guildId);
        }
      }
      return tmp2;
    });
    return callback2(TransitionWrapper, obj, arg0);
  }
}
({ useItemDragState: closure_9, useFolderBGHeightOffset: closure_10 } = withEqualityFn);
({ TRANSITION_PHYSICS: closure_12, FOLDER_SPRING_PHYSICS: closure_13 } = GUILD_ITEM_SIZE);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = _createForOfIteratorHelperLoose.createStyles(() => {
  let num = arg1;
  let num2 = arg2;
  if (arg1 === undefined) {
    num = 48;
  }
  if (num2 === undefined) {
    num2 = 0;
  }
  let obj = {};
  obj = { position: "absolute", top: importDefault(689).modules.mobile.GUILD_BAR_ITEM_MARGIN, left: importDefault(689).modules.mobile.GUILD_FOLDER_BACKGROUND_LEFT, backgroundColor: importDefault(689).colors.GUILD_FOLDER_BACKGROUND, borderTopLeftRadius: importDefault(689).modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS, borderTopRightRadius: importDefault(689).modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS, borderBottomLeftRadius: importDefault(689).modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS, borderBottomRightRadius: importDefault(689).modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS, width: num + num2 };
  obj.folderBackground = obj;
  obj = { position: "absolute", top: 0, left: 0, width: num, height: num, justifyContent: "center", alignItems: "center" };
  obj.folderScaleContainer = obj;
  obj.guildPreviewIcon = { position: "absolute", margin: importDefault(689).modules.mobile.GUILD_FOLDER_PREVIEW_ICON_MARGIN };
  const obj1 = { position: "absolute", margin: importDefault(689).modules.mobile.GUILD_FOLDER_PREVIEW_ICON_MARGIN };
  obj.guildPreviewIconUnselected = { borderRadius: importDefault(689).radii.sm };
  obj.guildPreview0 = { top: 0, left: 0 };
  obj.guildPreview1 = { top: 0, right: 0 };
  obj.guildPreview2 = { bottom: 0, left: 0 };
  obj.guildPreview3 = { bottom: 0, right: 0 };
  const obj3 = { position: "absolute", width: num, height: num, opacity: importDefault(689).modules.mobile.GUILD_FOLDER_PREVIEW_OPACITY };
  obj.guildPreviewWrapper = obj3;
  return obj;
});
let closure_17 = { code: "function GuildsBarGuildFolderTsx1(values){const{withSpring,TRANSITION_PHYSICS}=this.__closure;return{animations:{height:withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always')},initialValues:{height:values.currentHeight}};}" };
const memoResult = importAllResult.memo(function FolderBGInner(color) {
  let folderId;
  let totalItems;
  color = color.color;
  let token2;
  ({ folderId, totalItems } = color);
  const tmp = importDefault(token2[14])("GuildsBarGuildFolder");
  importDefault = tmp;
  let obj = color(token2[11]);
  const token = obj.useToken(importDefault(token2[10]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const token1 = color(token2[11]).useToken(importDefault(token2[10]).modules.mobile.GUILD_BAR_ITEM_MARGIN);
  let obj2 = color(token2[11]);
  const obj3 = color(token2[11]);
  let num = 0;
  const tmp4 = callback3(tmp, token, color(token2[11]).useToken(importDefault(token2[10]).modules.mobile.GUILD_FOLDER_BACKGROUND_WIDTH_OFFSET));
  if (tmp) {
    num = token1;
  }
  const fn = function o(height) {
    let obj = {};
    obj = { height: color(token2[15]).withSpring(height.targetHeight, outer1_12, "animate-always") };
    obj.animations = obj;
    obj.initialValues = { height: height.currentHeight };
    return obj;
  };
  obj = { withSpring: color(token2[15]).withSpring, TRANSITION_PHYSICS: closure_12 };
  const sum = token + num + (token + 2 * token1) * totalItems + callback(folderId);
  fn.__closure = obj;
  fn.__workletHash = 2519256682742;
  fn.__initData = closure_17;
  callback = importAllResult.useCallback(fn, []);
  const tmp5 = callback(folderId);
  token2 = color(token2[11]).useToken(importDefault(token2[10]).modules.mobile.GUILD_FOLDER_COLOR_OPACITY);
  const items = [tmp, color, token2];
  const memo = importAllResult.useMemo(() => {
    if (closure_1) {
      if (null != color) {
        if (color !== outer1_11) {
          const obj = {};
          const obj2 = color(token2[16]);
          obj.backgroundColor = obj2.hexWithOpacity(color(token2[17]).int2hex(color), token2);
          return obj;
        }
      }
    }
  }, items);
  obj = { pointerEvents: "none", collapsable: false, layout: callback };
  const items1 = [tmp4.folderBackground, memo, { height: sum }];
  obj.style = items1;
  return callback2(importDefault(token2[18]), obj);
});
let closure_19 = { code: "function GuildsBarGuildFolderTsx2(){const{withSpring,visible,FOLDER_SPRING_PHYSICS,state,TransitionStates,runOnJS,cleanUp,fromTop,guildItemSize}=this.__closure;return{opacity:withSpring(visible.get(),FOLDER_SPRING_PHYSICS,undefined,function(finished){if(finished&&state===TransitionStates.YEETED)runOnJS(cleanUp)();}),transform:[{translateY:withSpring(visible.get()===1?0:fromTop?-guildItemSize:guildItemSize,FOLDER_SPRING_PHYSICS)},{scale:withSpring(visible.get()===1?1:fromTop?0.3:1.3,FOLDER_SPRING_PHYSICS)}]};}" };
let closure_20 = { code: "function GuildsBarGuildFolderTsx3(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED)runOnJS(cleanUp)();}" };
let closure_21 = { code: "function GuildsBarGuildFolderTsx4(values){const{dragDropInProgress,sharedId,id,isDragTarget,withSpring,TRANSITION_PHYSICS}=this.__closure;var _id;const shouldAnimate=dragDropInProgress.get()&&sharedId.get()===\"\"+id&&!isDragTarget;sharedId.set(\"\"+((_id=id)!==null&&_id!==void 0?_id:null));return{animations:{originY:shouldAnimate?withSpring(values.targetOriginY,TRANSITION_PHYSICS,'animate-always'):values.targetOriginY,height:shouldAnimate?withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always'):values.targetHeight},initialValues:{originY:values.currentOriginY,height:values.currentHeight}};}" };
const memoResult1 = importAllResult.memo(function GuildsBarGuildFolder(id) {
  let accessibilityActions;
  let badge;
  let cutouts;
  let dragState;
  let isMentionLowImportance;
  let itemSize;
  let mentionCount;
  let onAccessibilityAction;
  let overState;
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
  let c6;
  let selectedPreviewId;
  let tintStyle;
  let folderPreviewStyle;
  let isDragTarget;
  let dragDropInProgress;
  let sharedValue;
  let tmp = expanded(name[14])("GuildsBarGuildFolder");
  let obj = id(name[11]);
  let tmp2 = callback3(tmp, obj.useToken(expanded(name[10]).modules.mobile.GUILD_BAR_ITEM_SIZE));
  c6 = tmp2;
  let obj1 = id(name[24]);
  let obj2 = id(name[12]);
  let items = [childNodes];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    if (expanded) {
      return { unread: false, mentionCount: 0, isMentionLowImportance: false };
    } else {
      const mutableGuildStates = childNodes.getMutableGuildStates();
      return childNodes.reduce((mentionCount, id) => {
        if (null != id.id) {
          let prop;
          if (null != dependencyMap[id.id]) {
            prop = tmp9.highImportanceMentionCount;
          }
          let num2 = 0;
          if (null != prop) {
            num2 = prop;
          }
          let prop1;
          if (null != dependencyMap[id.id]) {
            prop1 = tmp3.lowImportanceMentionCount;
          }
          let num3 = 0;
          if (null != prop1) {
            num3 = prop1;
          }
          mentionCount.mentionCount = mentionCount.mentionCount + num2 + num3;
          let unread = mentionCount.unread;
          if (!unread) {
            unread = undefined;
            if (null != dependencyMap[id.id]) {
              unread = tmp6.unread;
            }
          }
          mentionCount.unread = null != unread && unread;
          mentionCount.isMentionLowImportance = mentionCount.isMentionLowImportance && 0 === num2;
        }
        return mentionCount;
      }, { unread: false, mentionCount: 0, isMentionLowImportance: true });
    }
  });
  ({ unread, mentionCount, isMentionLowImportance } = stateFromStoresObject);
  let obj3 = id(name[12]);
  let items1 = [c6, selectedPreviewId];
  let items2 = [expanded, id, childNodes];
  const stateFromStoresObject1 = obj3.useStateFromStoresObject(items1, () => {
    const guildId = _undefined.getGuildId();
    const tmp2 = outer1_22(childNodes);
    const iter = tmp2();
    let iter2 = iter;
    let num = 0;
    let tmp3;
    if (!iter.done) {
      tmp3 = guildId;
      while (iter2.value.id !== guildId) {
        num = num + 1;
        if (num >= 4) {
          break;
        } else {
          let iter3 = tmp2();
          iter2 = iter3;
          if (iter3.done) {
            break;
          }
        }
      }
    }
    let flag = false;
    if (!expanded) {
      flag = false;
      if (null != guildId) {
        const guildsTree = selectedPreviewId.getGuildsTree();
        const node = guildsTree.getNode(guildId);
        let parentId;
        if (null != node) {
          parentId = node.parentId;
        }
        flag = parentId === id;
      }
    }
    const obj = { selectedPreviewId: tmp3, hasGuildSelected: flag };
    return obj;
  }, items2);
  selectedPreviewId = stateFromStoresObject1.selectedPreviewId;
  const guildsBarAnimatedWrapperStyles = obj1.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: tmp });
  ({ badge, cutouts } = expanded(name[25])({ mentionCount, isMentionLowImportance }));
  const tmp6 = expanded(name[25])({ mentionCount, isMentionLowImportance });
  const items3 = [foldersChanged];
  const items4 = [name, childNodes];
  const items5 = [color];
  const memo = color.useMemo(() => {
    const tintColor = id(name[17]).int2hex(null != color ? color : dragDropInProgress);
    return { tintStyle: { tintColor }, folderPreviewStyle: { backgroundColor: tintColor } };
  }, items5);
  tintStyle = memo.tintStyle;
  folderPreviewStyle = memo.folderPreviewStyle;
  const items6 = [id, foldersChanged];
  const items7 = [expanded, childNodes, tintStyle, selectedPreviewId];
  const memo1 = color.useMemo(() => ({
    onPress() {
      if (null != outer1_5) {
        const value = outer1_5.get();
        const _HermesInternal2 = HermesInternal;
        if (value.has("" + outer1_0)) {
          const _Set = Set;
          const set = new Set(outer1_5.get());
          const _HermesInternal = HermesInternal;
          set.add("" + outer1_0);
          const result = outer1_5.set(set);
        }
      }
      const result1 = id(name[28]).triggerHapticFeedback(id(name[28]).HapticFeedbackTypes.IMPACT_LIGHT);
      const obj2 = id(name[28]);
      const result2 = expanded(name[29]).toggleGuildFolderExpand(outer1_0);
    }
  }), items6);
  const items8 = [expanded, tmp2.guildPreviewWrapper, folderPreviewStyle];
  const memo2 = color.useMemo(() => {
    if (expanded) {
      let obj = { type: "icon", tintStyle };
      const items = [obj];
      return items;
    } else {
      const items1 = [];
      const tmp3 = outer1_22(childNodes);
      let iter = tmp3();
      if (!iter.done) {
        while (true) {
          let value = iter.value;
          let tmp4 = tintStyle;
          if (value.type !== tintStyle.GUILD) {
            let iter2 = tmp3();
            iter = iter2;
            if (iter2.done) {
              break;
            }
          } else {
            let arr = items1.push(value.id);
            if (items1.length >= 4) {
              break;
            }
          }
          break;
        }
      }
      obj = { type: "preview", guilds: items1, selectedGuildId: selectedPreviewId };
      const items2 = [obj];
      return items2;
    }
  }, items7);
  const callback = color.useCallback((arg0) => {
    let obj = {};
    obj = {};
    const items = [_undefined.guildPreviewWrapper, ];
    let tmp4;
    if (!expanded) {
      tmp4 = folderPreviewStyle;
    }
    items[1] = tmp4;
    obj.style = items;
    const items1 = [outer1_14(expanded(name[30]), obj), arg0];
    obj.children = items1;
    return outer1_15(color.Fragment, obj, "wrapper");
  }, items8);
  const tmp11 = folderPreviewStyle(id, flag);
  isDragTarget = tmp11.isDragTarget;
  dragDropInProgress = tmp11.dragDropInProgress;
  const items9 = [id];
  ({ dragState, overState, itemSize } = tmp11);
  const memo3 = color.useMemo(() => {
    let obj = id(name[31]);
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
  }, items9);
  ({ accessibilityActions, onAccessibilityAction } = memo3);
  const obj5 = id(name[12]);
  sharedValue = id(name[19]).useSharedValue("" + id);
  const fn = function y(originY) {
    let value = dragDropInProgress.get();
    if (value) {
      const _HermesInternal = HermesInternal;
      value = sharedValue.get();
      value = value === "" + id;
    }
    if (value) {
      value = !isDragTarget;
    }
    let tmp8 = null;
    if (null != id) {
      tmp8 = id;
    }
    const result = sharedValue.set("" + tmp8);
    let obj = {};
    obj = {};
    if (value) {
      let targetOriginY = id(name[15]).withSpring(originY.targetOriginY, sharedValue, "animate-always");
      const obj3 = id(name[15]);
    } else {
      targetOriginY = originY.targetOriginY;
    }
    obj.originY = targetOriginY;
    if (value) {
      let targetHeight = id(name[15]).withSpring(originY.targetHeight, sharedValue, "animate-always");
      const obj4 = id(name[15]);
    } else {
      targetHeight = originY.targetHeight;
    }
    obj.height = targetHeight;
    obj.animations = obj;
    obj.initialValues = { originY: originY.currentOriginY, height: originY.currentHeight };
    return obj;
  };
  obj = { dragDropInProgress, sharedId: sharedValue, id, isDragTarget, withSpring: id(name[15]).withSpring, TRANSITION_PHYSICS: sharedValue };
  fn.__closure = obj;
  fn.__workletHash = 11967845900199;
  fn.__initData = closure_21;
  const items10 = [id, sharedValue, isDragTarget, dragDropInProgress];
  const callback1 = color.useCallback(fn, items10);
  obj = {};
  const obj6 = id(name[19]);
  const tmp15 = callback2;
  obj.id = "" + id;
  obj.draggedItemSize = itemSize;
  obj.accessibilityActions = accessibilityActions;
  obj.onAccessibilityAction = onAccessibilityAction;
  obj.selected = stateFromStoresObject1.hasGuildSelected;
  obj.unread = !expanded && unread;
  obj.circle = false;
  obj.styles = guildsBarAnimatedWrapperStyles;
  obj.label = obj5.useStateFromStores(items3, () => {
    if (null != name) {
      let obj = { count: 1 };
      const items = [name];
      obj.names = items;
      obj.label = name;
      return obj;
    } else {
      const items1 = [];
      const tmp10 = outer1_22(childNodes);
      let iter2 = tmp10();
      let num = 0;
      if (!iter2.done) {
        while (true) {
          let tmp = foldersChanged;
          let guild = foldersChanged.getGuild(iter2.value.id);
          if (null != guild) {
            let arr = items1.push(guild.name);
          }
          num = num + 1;
          if (num >= 3) {
            break;
          } else {
            let iter = tmp10();
            iter2 = iter;
            if (iter.done) {
              break;
            }
          }
        }
      }
      obj = { names: items1, count: childNodes.length, label: id(name[26]).getListSummaryLabel(items1, childNodes.length) };
      return obj;
    }
  }, items4, expanded(name[27])).label;
  obj.isDragTarget = isDragTarget;
  obj.dragState = dragState;
  obj.sharedId = sharedValue;
  obj.cutouts = cutouts;
  obj.config = memo1;
  obj.isDragPreview = flag;
  obj.overState = overState;
  obj.preventClipping = true;
  obj.expanded = expanded;
  obj.layout = callback1;
  let tmp17 = badge;
  if (expanded) {
    tmp17 = badge;
    if (!flag) {
      obj1 = { color, folderId: id, totalItems: childNodes.length };
      tmp17 = callback2(closure_18, obj1);
    }
  }
  obj.externalChildren = tmp17;
  let tmp20;
  if (!flag2) {
    obj2 = { folderId: id, expanded };
    tmp20 = callback2(expanded(name[32]), obj2);
  }
  obj.expandedChildren = tmp20;
  obj3 = { renderItem: renderGuildFolderContent, getItemKey, items: memo2, wrapChildren: callback };
  obj.children = callback2(id(name[20]).TransitionGroup, obj3);
  return tmp15(expanded(name[24]), obj);
});
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guilds_bar/native/GuildsBarGuildFolder.tsx");

export default memoResult1;
export const GuildsBarGuildFolderBG = memoResult;
