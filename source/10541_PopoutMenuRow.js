// Module ID: 10541
// Function ID: 82356
// Name: PopoutMenuRow
// Dependencies: []

// Module 10541 (PopoutMenuRow)
function PopoutMenuRow(onClose) {
  let icon;
  let onClick;
  ({ icon, onClick } = onClose);
  const arg1 = onClick;
  onClose = onClose.onClose;
  const importDefault = onClose;
  const tmp = callback3();
  const items = [onClick, onClose];
  const callback = importAllResult.useCallback(() => {
    if (null != onClick) {
      onClick();
    }
    if (null != onClose) {
      onClose();
    }
  }, items);
  let obj = {};
  let tmp5 = null;
  if (null != icon) {
    obj = { source: icon };
    tmp5 = callback2(arg1(dependencyMap[7]).Icon, obj);
  }
  obj.leading = tmp5;
  obj = { style: tmp.popoutMenuRowLabel, text: onClose.text };
  obj.label = callback2(arg1(dependencyMap[8]).FormLabel, obj);
  obj.style = tmp.popoutMenuRow;
  obj.onPress = callback;
  return callback2(importDefault(dependencyMap[6]), obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsx: closure_6, jsxs: closure_7, Fragment: closure_8 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
let obj = {};
obj = { position: "absolute", backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[5]).radii.sm };
obj.container = obj;
obj.popoutMenuRow = { flex: 1 };
obj.popoutMenuRowLabel = { width: "100%" };
let closure_9 = arg1(dependencyMap[4]).createStyles(obj);
let closure_10 = { code: "function PopoutMenuTsx1(){const{withTiming,animateIn,STANDARD_EASING,ANIMATION_DURATION,runOnJS,handleClose,EXTRA_PADDING}=this.__closure;return{opacity:withTiming(animateIn?1:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION},'respect-motion-settings',function(finished){if(finished){runOnJS(handleClose)();}}),transform:[{translateY:withTiming(animateIn?-EXTRA_PADDING:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION})}]};}" };
let closure_11 = { code: "function PopoutMenuTsx2(finished){const{runOnJS,handleClose}=this.__closure;if(finished){runOnJS(handleClose)();}}" };
let closure_12 = { code: "function PopoutMenuTsx3(){const{runOnJS,handleLongPress}=this.__closure;runOnJS(handleLongPress)();}" };
let closure_13 = { code: "function PopoutMenuTsx4(){const{runOnJS,_setClose}=this.__closure;runOnJS(_setClose)(true);}" };
const obj2 = arg1(dependencyMap[4]);
const forwardRefResult = importAllResult.forwardRef(function PopoutMenu(onClose) {
  let disabled;
  let left;
  let onOpen;
  let rows;
  let style;
  let title;
  let top;
  let trigger;
  ({ title, trigger, rows, onOpen } = onClose);
  const arg1 = onOpen;
  onClose = onClose.onClose;
  const importDefault = onClose;
  let tmp18;
  let callback;
  let closure_19;
  let callback1;
  ({ disabled, style } = onClose);
  const size = importDefault(dependencyMap[9])();
  const width = size.width;
  const dependencyMap = width;
  const height = size.height;
  callback = height;
  const bottom = importDefault(dependencyMap[10])().bottom;
  const tmp2 = callback(bottom.useState(0), 2);
  const View = tmp3;
  const tmp4 = callback(bottom.useState(false), 2);
  const first = tmp4[0];
  const tmp6 = tmp4[1];
  const tmp7 = callback(bottom.useState(false), 2);
  const first1 = tmp7[0];
  const callback3 = tmp7[1];
  const ref = bottom.useRef(null);
  let closure_10 = ref;
  const ref1 = bottom.useRef(null);
  let closure_11 = ref1;
  const tmp11 = callback(bottom.useState({ overrideSetAt: "r", addOptionsGetter: "onRequireModeratorMFAClick", outboundStats: "Array", JOIN_GUILD_VIEWED: "isSpamMessageRequest" }), 2);
  const first2 = tmp11[0];
  let closure_12 = first2;
  let closure_13 = tmp11[1];
  const tmp13 = callback(bottom.useState({ aze: false, azj: true }), 2);
  const first3 = tmp13[0];
  const PopoutMenuRow = first3;
  let closure_15 = tmp13[1];
  const items = [first1];
  const effect = importAllResult.useEffect(() => {
    let tmp = first1;
    if (first1) {
      let current;
      if (null != ref) {
        current = ref.current;
      }
      tmp = null != current;
    }
    if (tmp) {
      function calculateDimensions() {
        let tmp = null == ref;
        if (!tmp) {
          const current = ref.current;
          tmp = null == current;
          const obj = current;
        }
        if (!tmp) {
          obj.measureInWindow((left, arg1, width, height) => {
            callback({ top: Math.max(arg1, 0), left, width, height });
          });
        }
        const timerId = setTimeout(() => {
          let tmp = null == ref;
          if (!tmp) {
            const current = ref.current;
            tmp = null == current;
            const obj = current;
          }
          if (!tmp) {
            obj.measureInWindow((arg0, arg1, width, height) => {
              callback({ width, height });
            });
          }
        });
      }();
    }
  }, items);
  const items1 = [first3, bottom, height, width, first2];
  const memo = importAllResult.useMemo(() => {
    let sum = -first3.height;
    if (first2.top + first2.height + first3.height + 8 + bottom < height) {
      sum = first2.height + 16;
    }
    let num2 = 0;
    if (first2.left + first3.width + 8 > width) {
      num2 = first2.width - first3.width;
    }
    const obj = { top: sum, left: num2 };
    return obj;
  }, items1);
  const items2 = [tmp6];
  ({ top, left } = memo);
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({
    close() {
      callback(true);
    }
  }), items2);
  const items3 = [tmp2[1]];
  let closure_16 = importAllResult.useMemo(() => onClose(width[11]).debounce((arg0) => {
    callback(arg0);
  }, 16), items3);
  tmp18 = tmp2[0] > 0 && !first;
  const items4 = [first, onClose];
  callback = importAllResult.useCallback(() => {
    if (first) {
      onClose();
      callback(false);
    }
  }, items4);
  let obj = arg1(dependencyMap[12]);
  function te() {
    let obj = {};
    let obj1 = onOpen(width[13]);
    let num = 0;
    if (tmp18) {
      num = 1;
    }
    obj = { easing: onOpen(width[7]).STANDARD_EASING, duration: 250 };
    const fn = function n(arg0) {
      if (arg0) {
        callback(closure_2[12]).runOnJS(closure_18)();
        const obj = callback(closure_2[12]);
      }
    };
    obj = { runOnJS: onOpen(width[12]).runOnJS, handleClose: callback };
    fn.__closure = obj;
    fn.__workletHash = 7805688342878;
    fn.__initData = ref1;
    obj.opacity = obj1.withTiming(num, obj, "respect-motion-settings", fn);
    obj1 = {};
    let num2 = 0;
    if (tmp18) {
      num2 = -8;
    }
    const obj6 = onOpen(width[13]);
    obj1.translateY = obj6.withTiming(num2, { easing: onOpen(width[7]).STANDARD_EASING, duration: 250 });
    const items = [obj1];
    obj.transform = items;
    return obj;
  }
  obj = { withTiming: arg1(dependencyMap[13]).withTiming, animateIn: tmp18, STANDARD_EASING: arg1(dependencyMap[7]).STANDARD_EASING, ANIMATION_DURATION: 250, runOnJS: arg1(dependencyMap[12]).runOnJS, handleClose: callback, EXTRA_PADDING: 8 };
  te.__closure = obj;
  te.__workletHash = 2727321893876;
  te.__initData = closure_10;
  const animatedStyle = obj.useAnimatedStyle(te);
  closure_19 = importAllResult.useCallback(() => tmp6(true), []);
  const items5 = [onOpen];
  callback1 = importAllResult.useCallback(() => {
    tmp6(false);
    onOpen(width[14]).trigger("impactHeavy");
    callback(true);
    onOpen();
  }, items5);
  [][0] = callback1;
  let tmp24Result = trigger;
  if (!disabled) {
    obj = {};
    const obj1 = { gesture: tmp22 };
    const obj2 = { ref, children: trigger };
    obj1.children = first(View, obj2);
    const items6 = [first(arg1(dependencyMap[15]).GestureDetector, obj1), ];
    let tmp32Result = null;
    if (first1) {
      const obj3 = { ref: ref1 };
      const items7 = [tmp.container, style, , ];
      const obj4 = { left, top };
      items7[2] = obj4;
      items7[3] = animatedStyle;
      obj3.style = items7;
      obj3.onLayout = function onLayout(nativeEvent) {
        callback2(nativeEvent.nativeEvent.layout.height);
      };
      let tmp35 = null;
      if (null != title) {
        const obj5 = { text: title };
        tmp35 = first(PopoutMenuRow, obj5);
      }
      const items8 = [tmp35, , ];
      let tmp38 = null;
      if (null != title) {
        tmp38 = first(arg1(dependencyMap[8]).FormDivider, {});
      }
      items8[1] = tmp38;
      items8[2] = rows.map((arg0, arg1) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj["onClose"] = closure_19;
        return first(first3, obj, arg1);
      });
      obj3.children = items8;
      tmp32Result = tmp6(importDefault(dependencyMap[12]).View, obj3);
      const tmp32 = tmp6;
    }
    items6[1] = tmp32Result;
    obj.children = items6;
    tmp24Result = tmp6(first1, obj);
    const tmp24 = tmp6;
    const tmp25 = first1;
  }
  return tmp24Result;
});
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/video_calls/native/components/PopoutMenu.tsx");

export default forwardRefResult;
