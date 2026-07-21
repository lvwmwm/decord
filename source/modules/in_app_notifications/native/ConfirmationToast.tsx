// Module ID: 10349
// Function ID: 79859
// Name: ConfirmationToast
// Dependencies: []
// Exports: ConfirmationToast

// Module 10349 (ConfirmationToast)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ extrapolateConfig: closure_4, PAN_INPUT_RANGE: closure_5 } = arg1(dependencyMap[2]));
const EMOJI_URL_BASE_SIZE = arg1(dependencyMap[3]).EMOJI_URL_BASE_SIZE;
const tmp3 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { "Null": null, "Null": null, marginTop: importDefault(dependencyMap[6]).space.PX_12 };
obj.container = obj;
const obj1 = {};
const merged = Object.assign(importDefault(dependencyMap[6]).shadows.SHADOW_HIGH);
obj1["flexDirection"] = "row";
obj1["alignItems"] = "center";
obj1["justifyContent"] = "center";
obj1["gap"] = importDefault(dependencyMap[6]).space.PX_8;
obj1["backgroundColor"] = importDefault(dependencyMap[6]).colors.MOBILE_ALERT_BACKGROUND_DEFAULT;
obj1["paddingStart"] = importDefault(dependencyMap[6]).space.PX_8;
obj1["paddingEnd"] = importDefault(dependencyMap[6]).space.PX_12;
obj1["paddingVertical"] = importDefault(dependencyMap[6]).space.PX_8;
obj1["borderRadius"] = importDefault(dependencyMap[6]).radii.round;
obj1["overflow"] = "hidden";
obj.notificationRow = obj1;
obj.textEmoji = { fontSize: 20 };
obj.imageEmoji = { "Null": 0, "Null": -1048576 };
let closure_9 = obj.createStyles(obj);
let closure_10 = { code: "function ConfirmationToastTsx1(){const{animatedValue,interpolate,notificationGestureY,PAN_INPUT_RANGE,extrapolateConfig}=this.__closure;const value=animatedValue.get();const scale=interpolate(value,[0,1],[0.8,1]);const enterTranslateY=interpolate(value,[0,1],[-20,0]);const gestureY=notificationGestureY.get();const dismissOpacity=interpolate(gestureY,PAN_INPUT_RANGE,[0,1,0],extrapolateConfig);return{transform:[{translateY:enterTranslateY+gestureY},{scale:scale}],opacity:value*dismissOpacity};}" };
const tmp4 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/in_app_notifications/native/ConfirmationToast.tsx");

export const ConfirmationToast = function ConfirmationToast(reaction) {
  reaction = reaction.reaction;
  const tmp = callback2();
  let obj = arg1(dependencyMap[7]);
  const notificationGestureY = obj.useInAppNotificationContext().notificationGestureY;
  const arg1 = notificationGestureY;
  let obj1 = arg1(dependencyMap[8]);
  const sharedValue = obj1.useSharedValue(0);
  const importDefault = sharedValue;
  importDefault(dependencyMap[9])(() => {
    const result = sharedValue.set(notificationGestureY(closure_2[10]).withTiming(1, { duration: 200 }));
  });
  let obj2 = arg1(dependencyMap[8]);
  class A {
    constructor() {
      value = closure_1.get();
      obj = notificationGestureY(closure_2[8]);
      interpolateResult = obj.interpolate(value, ["replace", "then"], [null, null]);
      obj2 = notificationGestureY(closure_2[8]);
      items = [, ];
      items[0] = -20;
      items[1] = 0;
      interpolateResult1 = obj2.interpolate(value, ["replace", "then"], items);
      value1 = notificationGestureY.get();
      obj = { transform: items1 };
      obj1 = { translateY: interpolateResult1 + value1 };
      items1 = [, ];
      items1[0] = obj1;
      items1[1] = { scale: interpolateResult };
      obj5 = notificationGestureY(closure_2[8]);
      obj.opacity = value * obj5.interpolate(value1, closure_5, [15400960, 14090240, 292749312], closure_4);
      return obj;
    }
  }
  obj = { animatedValue: sharedValue, interpolate: arg1(dependencyMap[8]).interpolate, notificationGestureY, PAN_INPUT_RANGE: closure_5, extrapolateConfig: closure_4 };
  A.__closure = obj;
  A.__workletHash = 4654280152495;
  A.__initData = closure_10;
  const animatedStyle = obj2.useAnimatedStyle(A);
  const style = [tmp.container, animatedStyle];
  obj = { style: tmp.notificationRow };
  if (null != reaction) {
    obj1 = {};
    ({ textEmoji: obj7.textEmojiStyle, imageEmoji: obj7.fastImageStyle } = tmp);
    let str2 = "";
    if (null == reaction.id) {
      str2 = reaction.surrogates;
    }
    obj1.name = str2;
    if (null != reaction.id) {
      obj2 = {};
      ({ id: obj9.id, animated: obj9.animated } = reaction);
      reaction = EMOJI_URL_BASE_SIZE;
      obj2.size = EMOJI_URL_BASE_SIZE;
      let url = importDefault(dependencyMap[12]).getEmojiURL(obj2);
      const obj8 = importDefault(dependencyMap[12]);
    } else {
      url = reaction.url;
    }
    obj1.src = url;
    callback(importDefault(dependencyMap[11]), obj1);
    const tmp11 = callback;
    const tmp14 = importDefault(dependencyMap[11]);
  } else {
    const obj3 = { size: "md", color: importDefault(dependencyMap[6]).colors.STATUS_POSITIVE };
    const items1 = [callback(arg1(dependencyMap[13]).CircleCheckIcon, obj3), ];
    const obj4 = { hasMaxConnections: "explicit_content_friend_dm", isBoostOnlySubscription: "enum", children: reaction.message };
    items1[1] = callback(arg1(dependencyMap[14]).Text, obj4);
    obj.children = items1;
    class A {
      constructor() {
        value = closure_1.get();
        obj = notificationGestureY(closure_2[8]);
        interpolateResult = obj.interpolate(value, ["replace", "then"], [null, null]);
        obj2 = notificationGestureY(closure_2[8]);
        items = [, ];
        items[0] = -20;
        items[1] = 0;
        interpolateResult1 = obj2.interpolate(value, ["replace", "then"], items);
        value1 = notificationGestureY.get();
        obj = { transform: items1 };
        obj1 = { translateY: interpolateResult1 + value1 };
        items1 = [, ];
        items1[0] = obj1;
        items1[1] = { scale: interpolateResult };
        obj5 = notificationGestureY(closure_2[8]);
        obj.opacity = value * obj5.interpolate(value1, closure_5, [15400960, 14090240, 292749312], closure_4);
        return obj;
      }
    }
    return callback(tmp6, { style });
  }
};
