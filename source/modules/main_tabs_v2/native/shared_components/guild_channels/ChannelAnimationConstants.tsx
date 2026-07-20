// Module ID: 11932
// Function ID: 92290
// Name: n
// Dependencies: []
// Exports: TYPING_ENTERING, TYPING_EXITING

// Module 11932 (n)
let obj = { <string:3172313896>: "flex", <string:3613474445>: "center", <string:1672556625>: "center", <string:1425655158>: 32, <string:1252604152>: "center", <string:1880755393>: 8 };
const fn = function n() {
  let obj = { initialValues: { transform: items, opacity: 0 } };
  const items = [{ scale: 0 }];
  obj = {};
  obj = {};
  obj.scale = require(dependencyMap[0]).withSpring(1, obj);
  const items1 = [obj];
  obj.transform = items1;
  const obj4 = require(dependencyMap[0]);
  obj.opacity = require(dependencyMap[0]).withSpring(1, obj);
  obj.animations = obj;
  return obj;
};
obj = { withSpring: require(dependencyMap[0]).withSpring, CHANNEL_SPRING_CONFIG: obj };
fn.__closure = obj;
fn.__workletHash = 5885186288311;
fn.__initData = { code: "function ChannelAnimationConstantsTsx1(){const{withSpring,CHANNEL_SPRING_CONFIG}=this.__closure;return{initialValues:{transform:[{scale:0}],opacity:0},animations:{transform:[{scale:withSpring(1,CHANNEL_SPRING_CONFIG)}],opacity:withSpring(1,CHANNEL_SPRING_CONFIG)}};}" };
const fn2 = function t() {
  let obj = { initialValues: { transform: items, opacity: 1 } };
  const items = [{ scale: 1 }];
  obj = {};
  obj = {};
  obj.scale = require(dependencyMap[0]).withSpring(0, obj);
  const items1 = [obj];
  obj.transform = items1;
  const obj4 = require(dependencyMap[0]);
  obj.opacity = require(dependencyMap[0]).withSpring(0, obj);
  obj.animations = obj;
  return obj;
};
obj = { withSpring: require(dependencyMap[0]).withSpring, CHANNEL_SPRING_CONFIG: obj };
fn2.__closure = obj;
fn2.__workletHash = 1746051409364;
fn2.__initData = { code: "function ChannelAnimationConstantsTsx2(){const{withSpring,CHANNEL_SPRING_CONFIG}=this.__closure;return{initialValues:{transform:[{scale:1}],opacity:1},animations:{transform:[{scale:withSpring(0,CHANNEL_SPRING_CONFIG)}],opacity:withSpring(0,CHANNEL_SPRING_CONFIG)}};}" };
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelAnimationConstants.tsx");

export const MESSAGE_PREVIEW_DELAY = 350;
export const CHANNEL_SPRING_CONFIG = obj;
export const TYPING_ENTERING = fn;
export const TYPING_EXITING = fn2;
