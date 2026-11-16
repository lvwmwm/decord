// Module ID: 15149
// Function ID: 15150
// Name: ChannelAnimationConstants
// Dependencies: [5793, 2]

// Module 15149 (ChannelAnimationConstants)
import spring_spring from "spring/spring" /* 5793 */;
import size from "module_2" /* 2 */;

let tmp2;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let obj = { damping: 35, stiffness: 275, mass: 1, overshootClamping: true };
let items = [{ code: "(function ChannelAnimationConstantsTsx1(){let[withSpring,CHANNEL_SPRING_CONFIG]=this.__closure;return{initialValues:{transform:[{scale:0}],opacity:0},animations:{transform:[{scale:withSpring(1,CHANNEL_SPRING_CONFIG)}],opacity:withSpring(1,CHANNEL_SPRING_CONFIG)}};})" }, spring_spring.withSpring, obj];
let c0;
let c1;
[tmp2, tmp3, tmp4] = items;
class ChannelAnimationConstantsTsx1 {
  constructor() {
    let items;
    let items1;
    let obj2;
    let obj3;
    const obj = { initialValues: obj2, animations: obj3 };
    obj2 = { transform: items, opacity: 0 };
    items = [{ scale: 0 }];
    obj3 = { transform: items1, opacity: _undefined(1, c1) };
    items1 = [{ scale: _undefined(1, c1) }];
    ({ scale: _undefined(1, c1) });
    return obj;
  }
}
let items1 = [tmp3, tmp4];
ChannelAnimationConstantsTsx1.__closure = items1;
ChannelAnimationConstantsTsx1.__workletHash = 14128288517870;
ChannelAnimationConstantsTsx1.__initData = tmp2;
const items2 = [{ code: "(function ChannelAnimationConstantsTsx2(){let[withSpring,CHANNEL_SPRING_CONFIG]=this.__closure;return{initialValues:{transform:[{scale:1}],opacity:1},animations:{transform:[{scale:withSpring(0,CHANNEL_SPRING_CONFIG)}],opacity:withSpring(0,CHANNEL_SPRING_CONFIG)}};})" }, spring_spring.withSpring, obj];
c0 = undefined;
c1 = undefined;
[tmp5, tmp6, tmp7] = items2;
class ChannelAnimationConstantsTsx2 {
  constructor() {
    let items;
    let items1;
    let obj2;
    let obj3;
    const obj = { initialValues: obj2, animations: obj3 };
    obj2 = { transform: items, opacity: 1 };
    items = [{ scale: 1 }];
    obj3 = { transform: items1, opacity: _undefined(0, c1) };
    items1 = [{ scale: _undefined(0, c1) }];
    ({ scale: _undefined(0, c1) });
    return obj;
  }
}
const items3 = [tmp6, tmp7];
ChannelAnimationConstantsTsx2.__closure = items3;
ChannelAnimationConstantsTsx2.__workletHash = 6413362691117;
ChannelAnimationConstantsTsx2.__initData = tmp5;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelAnimationConstants.tsx");

export const MESSAGE_PREVIEW_DELAY = 350;
export const CHANNEL_SPRING_CONFIG = obj;
export const TYPING_ENTERING = ChannelAnimationConstantsTsx1;
export const TYPING_EXITING = ChannelAnimationConstantsTsx2;
