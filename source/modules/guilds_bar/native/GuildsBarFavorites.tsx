// Module ID: 14969
// Function ID: 14970
// Dependencies: [19, 1375, 676, 21, 14967, 1348, 14952, 10215, 589, 14970, 14954, 1236, 14971, 9419, 712, 2]

// Module 14969
import initializeFromUserSettings from "initializeFromUserSettings";
import { FAVORITES } from "ME";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
let closure_6 = {
  onPress() {
    importDefault(14967)(FAVORITES);
  }
};
const memoResult = require("noop").memo(function GuildsBarFavorites() {
  let badge;
  let badge2;
  let cutouts;
  let unread;
  const tmp3 = importDefault(1348)("GuildsBarFavorites");
  let obj = require(14952) /* UnreadIndicator */;
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  const tmp = importDefault;
  const isFavoritesGuildSelected = require(10215) /* useFavoritesAccess */.useIsFavoritesGuildSelected();
  const obj2 = require(10215) /* useFavoritesAccess */;
  const items = [initializeFromUserSettings];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => favoriteChannels.getFavoriteChannels());
  const obj3 = require(589) /* initialize */;
  ({ badge, unread } = importDefault(14970)(stateFromStores));
  const tmp8 = importDefault(14970)(stateFromStores);
  ({ badge: badge2, cutouts } = importDefault(14954)({ mentionCount: badge }));
  obj = { selected: isFavoritesGuildSelected, circle: null, unread: null, styles: null, cutouts: null, overState: "Boolean", config: "function runOnRuntime_Pnpm_runtimesTs2(workletRuntime,worklet){const{__DEV__,SHOULD_BE_USE_WEB,isWorkletFunction,makeShareableCloneOnUIRecursive,ReanimatedModule,makeShareableCloneRecursive}=this.__closure;if(__DEV__&&!SHOULD_BE_USE_WEB&&!isWorkletFunction(worklet)){throw new ReanimatedError('The function passed to `runOnRuntime` is not a worklet.'+(_WORKLET?' Please make sure that `processNestedWorklets` option in Reanimated Babel plugin is enabled.':''));}if(_WORKLET){return function(...args){return global._scheduleOnRuntime(workletRuntime,makeShareableCloneOnUIRecursive(function(){'worklet';worklet(...args);}));};}return function(...args){return ReanimatedModule.scheduleOnRuntime(workletRuntime,makeShareableCloneRecursive(function(){'worklet';worklet(...args);}));};}", label: "function pnpm_timingTs2(){const{Easing,userConfig,toValue,callback,getReduceMotionForAnimation}=this.__closure;var _userConfig;const config={duration:300,easing:Easing.inOut(Easing.quad)};if(userConfig){Object.keys(userConfig).forEach(function(key){return config[key]=userConfig[key];});}function timing(animation,now){const{toValue:toValue,startTime:startTime,startValue:startValue}=animation;const runtime=now-startTime;if(runtime>=config.duration){animation.startTime=0;animation.current=toValue;return true;}const progress=animation.easing(runtime/config.duration);animation.current=startValue+(toValue-startValue)*progress;return false;}function onStart(animation,value,now,previousAnimation){if(previousAnimation&&previousAnimation.type==='timing'&&previousAnimation.toValue===toValue&&previousAnimation.startTime){animation.startTime=previousAnimation.startTime;animation.startValue=previousAnimation.startValue;}else{animation.startTime=now;animation.startValue=value;}animation.current=value;if(typeof config.easing==='object'){animation.easing=config.easing.factory();}else{animation.easing=config.easing;}}return{type:'timing',onFrame:timing,onStart:onStart,progress:0,toValue:toValue,startValue:0,startTime:0,easing:function(){return 0;},current:toValue,callback:callback,reduceMotion:getReduceMotionForAnimation((_userConfig=userConfig)===null||_userConfig===void 0?void 0:_userConfig.reduceMotion)};}", externalChildren: "function pnpm_timingTs1(toValue,userConfig,callback){const{__DEV__,assertEasingIsWorklet,defineAnimation,Easing,getReduceMotionForAnimation}=this.__closure;if(__DEV__&&userConfig!==null&&userConfig!==void 0&&userConfig.easing){assertEasingIsWorklet(userConfig.easing);}return defineAnimation(toValue,function(){'worklet';const config={duration:300,easing:Easing.inOut(Easing.quad)};if(userConfig){Object.keys(userConfig).forEach(function(key){return config[key]=userConfig[key];});}function timing(animation,now){const{toValue:toValue,startTime:startTime,startValue:startValue}=animation;const runtime=now-startTime;if(runtime>=config.duration){animation.startTime=0;animation.current=toValue;return true;}const progress=animation.easing(runtime/config.duration);animation.current=startValue+(toValue-startValue)*progress;return false;}function onStart(animation,value,now,previousAnimation){if(previousAnimation&&previousAnimation.type==='timing'&&previousAnimation.toValue===toValue&&previousAnimation.startTime){animation.startTime=previousAnimation.startTime;animation.startValue=previousAnimation.startValue;}else{animation.startTime=now;animation.startValue=value;}animation.current=value;if(typeof config.easing==='object'){animation.easing=config.easing.factory();}else{animation.easing=config.easing;}}return{type:'timing',onFrame:timing,onStart:onStart,progress:0,toValue:toValue,startValue:0,startTime:0,easing:function(){return 0;},current:toValue,callback:callback,reduceMotion:getReduceMotionForAnimation(userConfig===null||userConfig===void 0?void 0:userConfig.reduceMotion)};});}", expandedChildren: "function linear_Pnpm_EasingTs1(t){return t;}", children: "function ease_Pnpm_EasingTs2(t){const{Bezier}=this.__closure;return Bezier(0.42,0,1,1)(t);}" };
  let tmp12 = !tmp3;
  const tmp9 = importDefault(14954)({ mentionCount: badge });
  if (!tmp3) {
    tmp12 = !isFavoritesGuildSelected;
  }
  obj[1] = tmp12;
  obj[2] = unread;
  obj[3] = guildsBarAnimatedWrapperStyles;
  obj[4] = cutouts;
  obj[6] = closure_6;
  const intl = tmp4(1236).intl;
  obj[7] = intl.string(require(1236) /* getSystemLocale */.t.wMWyci);
  obj[8] = badge2;
  obj[9] = jsx(require(14971) /* HomeDrawerFavoritesRowExpandedChildren */.HomeDrawerFavoritesRowExpandedChildren, {});
  const colors = tmp(712).colors;
  obj = { color: isFavoritesGuildSelected ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT };
  obj[10] = jsx(require(9419) /* StarIcon */.StarIcon, { color: isFavoritesGuildSelected ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT });
  return jsx(importDefault(14952), { color: isFavoritesGuildSelected ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT });
});
const result = require("ME").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFavorites.tsx");

export default memoResult;
