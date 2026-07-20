// Module ID: 1812
// Function ID: 19950
// Name: pnpm_helpersTs1
// Dependencies: []

// Module 1812 (pnpm_helpersTs1)
/* worklet (recovered source) */ function pnpm_helpersTs1(height,targetKeyboardHeight,offset){const{interpolate}=this.__closure;if(offset===0||targetKeyboardHeight===0){return height;}return interpolate(height,[0,targetKeyboardHeight],[0,Math.max(targetKeyboardHeight-offset,0)]);}
pnpm_helpersTs1.__closure = { interpolate: arg1(arg6[0]).interpolate };
pnpm_helpersTs1.__workletHash = 1787304919616;
pnpm_helpersTs1.__initData = { code: "function pnpm_helpersTs1(height,targetKeyboardHeight,offset){const{interpolate}=this.__closure;if(offset===0||targetKeyboardHeight===0){return height;}return interpolate(height,[0,targetKeyboardHeight],[0,Math.max(targetKeyboardHeight-offset,0)]);}" };
/* worklet (recovered source) */ function pnpm_helpersTs2(scrollOffset,layoutHeight,contentHeight,inverted=false){const{AT_END_THRESHOLD}=this.__closure;if(inverted){return scrollOffset<=AT_END_THRESHOLD;}return scrollOffset+layoutHeight>=contentHeight-AT_END_THRESHOLD;}
pnpm_helpersTs2.__closure = { AT_END_THRESHOLD: 20 };
pnpm_helpersTs2.__workletHash = 3738364082991;
pnpm_helpersTs2.__initData = { code: "function pnpm_helpersTs2(scrollOffset,layoutHeight,contentHeight,inverted=false){const{AT_END_THRESHOLD}=this.__closure;if(inverted){return scrollOffset<=AT_END_THRESHOLD;}return scrollOffset+layoutHeight>=contentHeight-AT_END_THRESHOLD;}" };
/* worklet (recovered source) */ function pnpm_helpersTs3(behavior,isAtEnd){switch(behavior){case"always":return true;case"never":return false;case"whenAtEnd":return isAtEnd;case"persistent":return true;}}
pnpm_helpersTs3.__closure = {};
pnpm_helpersTs3.__workletHash = 14230532945867;
pnpm_helpersTs3.__initData = { code: "function pnpm_helpersTs3(behavior,isAtEnd){switch(behavior){case\"always\":return true;case\"never\":return false;case\"whenAtEnd\":return isAtEnd;case\"persistent\":return true;}}" };
/* worklet (recovered source) */ function pnpm_helpersTs4(scrollOffset,layoutHeight,contentHeight,blankSpace,inverted){if(blankSpace<=0){return 0;}if(inverted){return Math.max(0,Math.min(1,-scrollOffset/blankSpace));}const pastContentEnd=scrollOffset+layoutHeight-contentHeight;return Math.max(0,Math.min(1,pastContentEnd/blankSpace));}
pnpm_helpersTs4.__closure = {};
pnpm_helpersTs4.__workletHash = 10144434118496;
pnpm_helpersTs4.__initData = { code: "function pnpm_helpersTs4(scrollOffset,layoutHeight,contentHeight,blankSpace,inverted){if(blankSpace<=0){return 0;}if(inverted){return Math.max(0,Math.min(1,-scrollOffset/blankSpace));}const pastContentEnd=scrollOffset+layoutHeight-contentHeight;return Math.max(0,Math.min(1,pastContentEnd/blankSpace));}" };
/* worklet (recovered source) */ function pnpm_helpersTs5(blankSpace,extraContentPadding){return Math.max(0,blankSpace-extraContentPadding);}
pnpm_helpersTs5.__closure = {};
pnpm_helpersTs5.__workletHash = 7722221146206;
pnpm_helpersTs5.__initData = { code: "function pnpm_helpersTs5(blankSpace,extraContentPadding){return Math.max(0,blankSpace-extraContentPadding);}" };
/* worklet (recovered source) */ function pnpm_helpersTs6(rawEffective,minimumPaddingAbsorbed){return Math.max(0,rawEffective-minimumPaddingAbsorbed);}
pnpm_helpersTs6.__closure = {};
pnpm_helpersTs6.__workletHash = 8723258054557;
pnpm_helpersTs6.__initData = { code: "function pnpm_helpersTs6(rawEffective,minimumPaddingAbsorbed){return Math.max(0,rawEffective-minimumPaddingAbsorbed);}" };
/* worklet (recovered source) */ function pnpm_helpersTs7(offsetBeforeScroll,keyboardHeight,contentHeight,layoutHeight,totalPaddingForMaxScroll){const paddingForMax=totalPaddingForMaxScroll!==undefined?totalPaddingForMaxScroll:keyboardHeight;const maxScroll=Math.max(contentHeight-layoutHeight+paddingForMax,0);return Math.min(Math.max(offsetBeforeScroll+keyboardHeight,0),maxScroll);}
pnpm_helpersTs7.__closure = {};
pnpm_helpersTs7.__workletHash = 16148763282691;
pnpm_helpersTs7.__initData = { code: "function pnpm_helpersTs7(offsetBeforeScroll,keyboardHeight,contentHeight,layoutHeight,totalPaddingForMaxScroll){const paddingForMax=totalPaddingForMaxScroll!==undefined?totalPaddingForMaxScroll:keyboardHeight;const maxScroll=Math.max(contentHeight-layoutHeight+paddingForMax,0);return Math.min(Math.max(offsetBeforeScroll+keyboardHeight,0),maxScroll);}" };
/* worklet (recovered source) */ function pnpm_helpersTs8(relativeScroll,keyboardHeight,contentHeight,layoutHeight,inverted,totalPaddingForMaxScroll){const paddingForMax=totalPaddingForMaxScroll!==undefined?totalPaddingForMaxScroll:keyboardHeight;if(inverted){const maxScroll=Math.max(contentHeight-layoutHeight,0);return Math.max(Math.min(relativeScroll-keyboardHeight,maxScroll),-paddingForMax);}const maxScroll=Math.max(contentHeight-layoutHeight+paddingForMax,0);return Math.min(Math.max(keyboardHeight+relativeScroll,0),maxScroll);}
pnpm_helpersTs8.__closure = {};
pnpm_helpersTs8.__workletHash = 11573218187512;
pnpm_helpersTs8.__initData = { code: "function pnpm_helpersTs8(relativeScroll,keyboardHeight,contentHeight,layoutHeight,inverted,totalPaddingForMaxScroll){const paddingForMax=totalPaddingForMaxScroll!==undefined?totalPaddingForMaxScroll:keyboardHeight;if(inverted){const maxScroll=Math.max(contentHeight-layoutHeight,0);return Math.max(Math.min(relativeScroll-keyboardHeight,maxScroll),-paddingForMax);}const maxScroll=Math.max(contentHeight-layoutHeight+paddingForMax,0);return Math.min(Math.max(keyboardHeight+relativeScroll,0),maxScroll);}" };
arg5.getEffectiveHeight = pnpm_helpersTs1;
arg5.isScrollAtEnd = pnpm_helpersTs2;
arg5.shouldShiftContent = pnpm_helpersTs3;
arg5.getVisibleMinimumPaddingFraction = pnpm_helpersTs4;
arg5.getMinimumPaddingAbsorbed = pnpm_helpersTs5;
arg5.getScrollEffective = pnpm_helpersTs6;
arg5.clampedScrollTarget = pnpm_helpersTs7;
arg5.computeIOSContentOffset = pnpm_helpersTs8;
