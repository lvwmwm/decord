// Module ID: 14699
// Function ID: 110899
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 14699 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  let selected;
  ({ guildId: closure_0, position, selected } = arg0);
  let obj = arg1(dependencyMap[11]);
  const tmp3 = callback3(false, obj.useToken(importDefault(dependencyMap[10]).modules.mobile.GUILD_BAR_ITEM_SIZE));
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[12]).useStateFromStores(items, () => guild.getGuild(closure_0));
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
  const obj2 = arg1(dependencyMap[12]);
  const tmp = dependencyMap;
  const tmp2 = importDefault;
  const tmp5 = closure_14;
  if (!selected) {
    prop = tmp3.guildPreviewIconUnselected;
  }
  items1[1] = prop;
  items1[2] = guildPreview3;
  obj.style = items1;
  obj.guild = stateFromStores;
  obj.size = arg1(dependencyMap[13]).GuildIconSizes.XXSMALL;
  obj.selected = selected;
  return tmp5(importDefault(dependencyMap[13]), obj, "" + selected);
}
function TransitionWrapper(children) {
  let flag = children.fromTop;
  if (flag === undefined) {
    flag = false;
  }
  const arg1 = flag;
  const cleanUp = children.cleanUp;
  const importDefault = cleanUp;
  const state = children.state;
  const dependencyMap = state;
  let importAllResult;
  let closure_4;
  let obj = arg1(dependencyMap[11]);
  const token = obj.useToken(importDefault(dependencyMap[10]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  importAllResult = token;
  const tmp = importDefault(dependencyMap[14])("GuildsBarGuildFolder");
  const tmp3 = callback3(importDefault(dependencyMap[14])("GuildsBarGuildFolder"), token);
  let num = 0;
  if (state === arg1(dependencyMap[20]).TransitionStates.MOUNTED) {
    num = 1;
  }
  const sharedValue = arg1(dependencyMap[19]).useSharedValue(num);
  closure_4 = sharedValue;
  const obj2 = arg1(dependencyMap[19]);
  const fn = function a() {
    let obj = {};
    let obj1 = flag(state[15]);
    const value = sharedValue.get();
    const fn = function e(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = closure_2 === callback(closure_2[20]).TransitionStates.YEETED;
      }
      if (tmp) {
        callback(closure_2[19]).runOnJS(closure_1)();
        const obj = callback(closure_2[19]);
      }
    };
    obj = { state, TransitionStates: flag(state[20]).TransitionStates, runOnJS: flag(state[19]).runOnJS, cleanUp };
    fn.__closure = obj;
    fn.__workletHash = 47605595424;
    fn.__initData = closure_20;
    obj.opacity = obj1.withSpring(value, closure_13, undefined, fn);
    obj = {};
    let num = 1;
    if (1 === sharedValue.get()) {
      obj.translateY = obj5.withSpring(0, closure_13);
      const items = [obj, ];
      obj1 = {};
      if (num !== sharedValue.get()) {
        let num2 = 1.3;
        if (flag) {
          num2 = 0.3;
        }
        num = num2;
      }
      obj1.scale = flag(state[15]).withSpring(num, closure_13);
      items[1] = obj1;
      obj.transform = items;
      return obj;
    }
  };
  obj = { withSpring: arg1(dependencyMap[15]).withSpring, visible: sharedValue, FOLDER_SPRING_PHYSICS: closure_13, state, TransitionStates: arg1(dependencyMap[20]).TransitionStates, runOnJS: arg1(dependencyMap[19]).runOnJS, cleanUp, fromTop: flag, guildItemSize: token };
  fn.__closure = obj;
  fn.__workletHash = 14426547532118;
  fn.__initData = closure_19;
  const items = [state, sharedValue];
  const animatedStyle = arg1(dependencyMap[19]).useAnimatedStyle(fn);
  const effect = importAllResult.useEffect(() => {
    let num = 1;
    if (state === flag(state[20]).TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  }, items);
  const style = [animatedStyle, tmp3.folderScaleContainer];
  return callback2(importDefault(dependencyMap[18]), { style, children: children.children });
}
function getItemKey(type) {
  return type.type;
}
function GuildFolderIcon(item) {
  item = item.item;
  let tmp4 = null;
  if ("icon" === item.type) {
    const obj = { source: tmp3, style: item.tintStyle };
    tmp4 = callback2(importDefault(dependencyMap[23]), obj);
  }
  return tmp4;
}
function renderGuildFolderContent(arg0, type, state, cleanUp) {
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
          const obj = { guildId, selected: guildId === arg1.selectedGuildId, position: tmp };
          tmp2 = callback(closure_24, obj, guildId);
        }
      }
      return tmp2;
    });
    return callback2(TransitionWrapper, obj, arg0);
  }
}
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const GuildsNodeType = arg1(dependencyMap[4]).GuildsNodeType;
({ useItemDragState: closure_9, useFolderBGHeightOffset: closure_10 } = arg1(dependencyMap[5]));
const DEFAULT_FOLDER_COLOR = arg1(dependencyMap[6]).DEFAULT_FOLDER_COLOR;
const tmp2 = arg1(dependencyMap[5]);
({ TRANSITION_PHYSICS: closure_12, FOLDER_SPRING_PHYSICS: closure_13 } = arg1(dependencyMap[7]));
const tmp3 = arg1(dependencyMap[7]);
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[8]));
const tmp4 = arg1(dependencyMap[8]);
let closure_16 = arg1(dependencyMap[9]).createStyles(() => {
  let num = arg1;
  let num2 = arg2;
  if (arg1 === undefined) {
    num = 48;
  }
  if (num2 === undefined) {
    num2 = 0;
  }
  let obj = {};
  obj = { position: "absolute", top: importDefault(dependencyMap[10]).modules.mobile.GUILD_BAR_ITEM_MARGIN, left: importDefault(dependencyMap[10]).modules.mobile.GUILD_FOLDER_BACKGROUND_LEFT, backgroundColor: importDefault(dependencyMap[10]).colors.GUILD_FOLDER_BACKGROUND, borderTopLeftRadius: importDefault(dependencyMap[10]).modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS, borderTopRightRadius: importDefault(dependencyMap[10]).modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS, borderBottomLeftRadius: importDefault(dependencyMap[10]).modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS, borderBottomRightRadius: importDefault(dependencyMap[10]).modules.mobile.GUILD_FOLDER_BACKGROUND_RADIUS, width: num + num2 };
  obj.folderBackground = obj;
  obj = { "Bool(true)": "isArray", "Bool(true)": "key", "Bool(true)": "Array", "Bool(true)": "LIGHT", "Bool(true)": "limit", "Bool(true)": "limit", "Bool(true)": "limit", width: num, height: num };
  obj.folderScaleContainer = obj;
  obj.guildPreviewIcon = { position: "absolute", margin: importDefault(dependencyMap[10]).modules.mobile.GUILD_FOLDER_PREVIEW_ICON_MARGIN };
  const obj1 = { position: "absolute", margin: importDefault(dependencyMap[10]).modules.mobile.GUILD_FOLDER_PREVIEW_ICON_MARGIN };
  obj.guildPreviewIconUnselected = { borderRadius: importDefault(dependencyMap[10]).radii.sm };
  obj.guildPreview0 = { extraChildStyle: -536870861, extraUnderlayStyle: -299892737 };
  obj.guildPreview1 = { <string:2885813600>: -536870861, <string:2339432560>: -299892737 };
  obj.guildPreview2 = {};
  obj.guildPreview3 = { -1731343402: -536870861, -731786967: -299892737 };
  const obj3 = { position: "absolute", width: num, height: num, opacity: importDefault(dependencyMap[10]).modules.mobile.GUILD_FOLDER_PREVIEW_OPACITY };
  obj.guildPreviewWrapper = obj3;
  return obj;
});
let closure_17 = { code: "function GuildsBarGuildFolderTsx1(values){const{withSpring,TRANSITION_PHYSICS}=this.__closure;return{animations:{height:withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always')},initialValues:{height:values.currentHeight}};}" };
const memoResult = importAllResult.memo(function FolderBGInner(color) {
  let folderId;
  let totalItems;
  color = color.color;
  const arg1 = color;
  let dependencyMap;
  ({ folderId, totalItems } = color);
  const tmp = importDefault(dependencyMap[14])("GuildsBarGuildFolder");
  const importDefault = tmp;
  let obj = arg1(dependencyMap[11]);
  const token = obj.useToken(importDefault(dependencyMap[10]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const token1 = arg1(dependencyMap[11]).useToken(importDefault(dependencyMap[10]).modules.mobile.GUILD_BAR_ITEM_MARGIN);
  const obj2 = arg1(dependencyMap[11]);
  const obj3 = arg1(dependencyMap[11]);
  let num = 0;
  const tmp4 = callback3(tmp, token, arg1(dependencyMap[11]).useToken(importDefault(dependencyMap[10]).modules.mobile.GUILD_FOLDER_BACKGROUND_WIDTH_OFFSET));
  if (tmp) {
    num = token1;
  }
  const fn = function o(height) {
    let obj = {};
    obj = { height: color(token2[15]).withSpring(height.targetHeight, closure_12, "animate-always") };
    obj.animations = obj;
    obj.initialValues = { height: height.currentHeight };
    return obj;
  };
  obj = { withSpring: arg1(dependencyMap[15]).withSpring, TRANSITION_PHYSICS: closure_12 };
  const sum = token + num + (token + 2 * token1) * totalItems + callback(folderId);
  fn.__closure = obj;
  fn.__workletHash = 2519256682742;
  fn.__initData = closure_17;
  const layout = importAllResult.useCallback(fn, []);
  const tmp5 = callback(folderId);
  const token2 = arg1(dependencyMap[11]).useToken(importDefault(dependencyMap[10]).modules.mobile.GUILD_FOLDER_COLOR_OPACITY);
  dependencyMap = token2;
  const items = [tmp, color, token2];
  const memo = importAllResult.useMemo(() => {
    if (tmp) {
      if (null != color) {
        if (color !== closure_11) {
          const obj = {};
          const obj2 = color(token2[16]);
          obj.backgroundColor = obj2.hexWithOpacity(color(token2[17]).int2hex(color), token2);
          return obj;
        }
      }
      const tmp = color;
    }
  }, items);
  const style = [tmp4.folderBackground, memo, { height: sum }];
  return callback2(importDefault(dependencyMap[18]), { layout, style });
});
let closure_19 = { code: "function GuildsBarGuildFolderTsx2(){const{withSpring,visible,FOLDER_SPRING_PHYSICS,state,TransitionStates,runOnJS,cleanUp,fromTop,guildItemSize}=this.__closure;return{opacity:withSpring(visible.get(),FOLDER_SPRING_PHYSICS,undefined,function(finished){if(finished&&state===TransitionStates.YEETED)runOnJS(cleanUp)();}),transform:[{translateY:withSpring(visible.get()===1?0:fromTop?-guildItemSize:guildItemSize,FOLDER_SPRING_PHYSICS)},{scale:withSpring(visible.get()===1?1:fromTop?0.3:1.3,FOLDER_SPRING_PHYSICS)}]};}" };
let closure_20 = { code: "function GuildsBarGuildFolderTsx3(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED)runOnJS(cleanUp)();}" };
let closure_21 = { code: "function GuildsBarGuildFolderTsx4(values){const{dragDropInProgress,sharedId,id,isDragTarget,withSpring,TRANSITION_PHYSICS}=this.__closure;var _id;const shouldAnimate=dragDropInProgress.get()&&sharedId.get()===\"\"+id&&!isDragTarget;sharedId.set(\"\"+((_id=id)!==null&&_id!==void 0?_id:null));return{animations:{originY:shouldAnimate?withSpring(values.targetOriginY,TRANSITION_PHYSICS,'animate-always'):values.targetOriginY,height:shouldAnimate?withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always'):values.targetHeight},initialValues:{originY:values.currentOriginY,height:values.currentHeight}};}" };
const obj2 = arg1(dependencyMap[9]);
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
  const arg1 = id;
  const expanded = id.expanded;
  const importDefault = expanded;
  const name = id.name;
  const dependencyMap = name;
  const color = id.color;
  const childNodes = id.childNodes;
  let closure_4 = childNodes;
  let flag = id.isDragPreview;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = id.hideExpandedChildren;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const foldersChanged = id.foldersChanged;
  let closure_5 = foldersChanged;
  let closure_6;
  let closure_7;
  let GuildsNodeType;
  let folderPreviewStyle;
  let isDragTarget;
  let DEFAULT_FOLDER_COLOR;
  let sharedValue;
  const tmp = importDefault(dependencyMap[14])("GuildsBarGuildFolder");
  let obj = arg1(dependencyMap[11]);
  const tmp2 = callback3(tmp, obj.useToken(importDefault(dependencyMap[10]).modules.mobile.GUILD_BAR_ITEM_SIZE));
  closure_6 = tmp2;
  let obj1 = arg1(dependencyMap[24]);
  let obj2 = arg1(dependencyMap[12]);
  const items = [closure_4];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    if (expanded) {
      return {};
    } else {
      const mutableGuildStates = childNodes.getMutableGuildStates();
      return childNodes.reduce((mentionCount, id) => {
        if (null != id.id) {
          let prop;
          if (null != closure_0[id.id]) {
            prop = tmp9.highImportanceMentionCount;
          }
          let num2 = 0;
          if (null != prop) {
            num2 = prop;
          }
          let prop1;
          if (null != closure_0[id.id]) {
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
            if (null != closure_0[id.id]) {
              unread = tmp6.unread;
            }
          }
          mentionCount.unread = null != unread && unread;
          mentionCount.isMentionLowImportance = mentionCount.isMentionLowImportance && 0 === num2;
        }
        return mentionCount;
      }, { 9223372036854775807: "/assets/.cache/intl/bW9kdWxlcy9ndWlsZF9zZXR0aW5ncy9zZXJ2ZXJfbW9uZXRpemF0aW9uL3RhZ3Mvd2Vi", 0: null, 0: "c3d340ddd1a6e4c4077bc7bc2be22614" });
    }
  });
  ({ unread, mentionCount, isMentionLowImportance } = stateFromStoresObject);
  let obj3 = arg1(dependencyMap[12]);
  const items1 = [closure_6, closure_7];
  const items2 = [expanded, id, childNodes];
  const stateFromStoresObject1 = obj3.useStateFromStoresObject(items1, () => {
    const guildId = tmp2.getGuildId();
    const tmp2 = callback(childNodes);
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
  const selectedPreviewId = stateFromStoresObject1.selectedPreviewId;
  closure_7 = selectedPreviewId;
  const guildsBarAnimatedWrapperStyles = obj1.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: tmp });
  ({ badge, cutouts } = importDefault(dependencyMap[25])({ mentionCount, isMentionLowImportance }));
  const tmp6 = importDefault(dependencyMap[25])({ mentionCount, isMentionLowImportance });
  const items3 = [closure_5];
  const items4 = [name, childNodes];
  const items5 = [color];
  const memo = importAllResult.useMemo(() => {
    const tintColor = id(name[17]).int2hex(null != color ? color : dragDropInProgress);
    return { tintStyle: { tintColor }, folderPreviewStyle: { backgroundColor: tintColor } };
  }, items5);
  const tintStyle = memo.tintStyle;
  GuildsNodeType = tintStyle;
  folderPreviewStyle = memo.folderPreviewStyle;
  const items6 = [id, foldersChanged];
  const items7 = [expanded, childNodes, tintStyle, selectedPreviewId];
  const memo1 = importAllResult.useMemo(() => ({
    onPress() {
      if (null != store) {
        const value = store.get();
        const _HermesInternal2 = HermesInternal;
        if (value.has("" + callback)) {
          const _Set = Set;
          const set = new Set(store.get());
          const _HermesInternal = HermesInternal;
          set.add("" + callback);
          const result = store.set(set);
        }
      }
      const result1 = callback(closure_2[28]).triggerHapticFeedback(callback(closure_2[28]).HapticFeedbackTypes.IMPACT_LIGHT);
      const obj2 = callback(closure_2[28]);
      const result2 = callback2(closure_2[29]).toggleGuildFolderExpand(callback);
    }
  }), items6);
  const items8 = [expanded, tmp2.guildPreviewWrapper, folderPreviewStyle];
  const memo2 = importAllResult.useMemo(() => {
    if (expanded) {
      let obj = { type: "icon", tintStyle };
      const items = [obj];
      return items;
    } else {
      const items1 = [];
      const tmp3 = callback(childNodes);
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
  const callback = importAllResult.useCallback((arg0) => {
    let obj = {};
    obj = {};
    const items = [closure_14.guildPreviewWrapper, ];
    let tmp4;
    if (!expanded) {
      tmp4 = folderPreviewStyle;
    }
    items[1] = tmp4;
    obj.style = items;
    const items1 = [closure_14(expanded(name[30]), obj), arg0];
    obj.children = items1;
    return closure_15(color.Fragment, obj, "wrapper");
  }, items8);
  const tmp11 = folderPreviewStyle(id, flag);
  isDragTarget = tmp11.isDragTarget;
  const dragDropInProgress = tmp11.dragDropInProgress;
  DEFAULT_FOLDER_COLOR = dragDropInProgress;
  const items9 = [id];
  ({ dragState, overState, itemSize } = tmp11);
  const memo3 = importAllResult.useMemo(() => {
    let obj = id(name[31]);
    const guildFolderMenuItems = obj.getGuildFolderMenuItems(id);
    const id = guildFolderMenuItems;
    obj = {
      accessibilityActions: guildFolderMenuItems.map((label) => ({ name: label.label, label: label.label })),
      onAccessibilityAction(arg0) {
        const guildFolderMenuItems = arg0;
        const found = guildFolderMenuItems.find((label) => label.label === label.nativeEvent.actionName);
        if (!tmp) {
          found.action();
        }
      }
    };
    return obj;
  }, items9);
  ({ accessibilityActions, onAccessibilityAction } = memo3);
  const obj5 = arg1(dependencyMap[12]);
  sharedValue = arg1(dependencyMap[19]).useSharedValue("" + id);
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
  obj = { dragDropInProgress, sharedId: sharedValue, id, isDragTarget, withSpring: arg1(dependencyMap[15]).withSpring, TRANSITION_PHYSICS: sharedValue };
  fn.__closure = obj;
  fn.__workletHash = 11967845900199;
  fn.__initData = closure_21;
  const items10 = [id, sharedValue, isDragTarget, dragDropInProgress];
  const callback1 = importAllResult.useCallback(fn, items10);
  obj = {};
  const obj6 = arg1(dependencyMap[19]);
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
      const tmp10 = callback(childNodes);
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
  }, items4, importDefault(dependencyMap[27])).label;
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
      tmp17 = callback2(memoResult, obj1);
    }
  }
  obj.externalChildren = tmp17;
  let tmp20;
  if (!flag2) {
    obj2 = { folderId: id, expanded };
    tmp20 = callback2(importDefault(dependencyMap[32]), obj2);
  }
  obj.expandedChildren = tmp20;
  obj3 = { renderItem: renderGuildFolderContent, getItemKey, items: memo2, wrapChildren: callback };
  obj.children = callback2(arg1(dependencyMap[20]).TransitionGroup, obj3);
  return tmp15(importDefault(dependencyMap[24]), obj);
});
const result = arg1(dependencyMap[33]).fileFinishedImporting("modules/guilds_bar/native/GuildsBarGuildFolder.tsx");

export default memoResult1;
export const GuildsBarGuildFolderBG = memoResult;
