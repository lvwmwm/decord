// Module ID: 15142
// Function ID: 114241
// Name: TruncatedText
// Dependencies: []
// Exports: ArrowButton, TruncatedText, useFormattedSubscriptionPlan

// Module 15142 (TruncatedText)
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
({ TouchableOpacity: closure_6, View: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { "Null": "start_time", "Null": "message", "Null": "absolute", "Null": "10%", borderColor: importDefault(dependencyMap[6]).colors.TEXT_DEFAULT };
obj.toggleTruncateButton = obj;
const tmp3 = arg1(dependencyMap[4]);
obj.arrowButton = { borderRadius: importDefault(dependencyMap[6]).radii.sm, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_MUTED };
obj.arrowButtonText = {};
const obj1 = { borderRadius: importDefault(dependencyMap[6]).radii.sm, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_MUTED };
obj.arrowButtonIcon = { tintColor: importDefault(dependencyMap[6]).colors.INTERACTIVE_TEXT_ACTIVE };
let closure_11 = obj.createStyles(obj);
const obj2 = { tintColor: importDefault(dependencyMap[6]).colors.INTERACTIVE_TEXT_ACTIVE };
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/Elements.tsx");

export const TruncatedText = function TruncatedText(lineClamp) {
  let num = lineClamp.lineClamp;
  if (num === undefined) {
    num = 8;
  }
  const arg1 = num;
  let obj = Object.create(null);
  obj.lineClamp = 0;
  const merged = Object.assign(lineClamp, obj);
  let closure_1;
  let importAll;
  let closure_3;
  let callback2;
  const tmp4 = callback2(React.useState(false), 2);
  const first = tmp4[0];
  let num2 = 1;
  closure_1 = tmp4[1];
  const tmp6 = callback2(React.useState(false), 2);
  const first1 = tmp6[0];
  importAll = first1;
  closure_3 = tmp6[1];
  callback2 = React.useRef(false);
  if (!first1) {
    obj = {
      onPress() {
          let tmp = first1;
          if (first1) {
            tmp = callback((arg0) => !arg0);
          }
          return tmp;
        },
      accessibilityRole: "togglebutton"
    };
    if (first1) {
      num2 = 0.8;
    }
    obj.activeOpacity = num2;
    const obj1 = {};
    const merged1 = Object.assign(merged);
    let tmp24;
    if (first1) {
      if (!first) {
        tmp24 = num;
      }
    }
    obj1["lineClamp"] = tmp24;
    obj1["onTextLayout"] = function onTextLayout(nativeEvent) {
      if (!ref.current) {
        ref.current = true;
        callback2(nativeEvent.nativeEvent.lines.length > num);
      }
    };
    const items = [closure_9(arg1(closure_3[7]).Text, obj1), first1];
    obj.children = items;
    return closure_10(closure_6, obj);
  } else {
    obj = { style: tmp3.toggleTruncateButton };
    let obj2 = {};
    const intl = arg1(closure_3[8]).intl;
    const string = intl.string;
    JQX/Pb = arg1(closure_3[8]).t;
    if (first) {
      JQX/Pb = JQX_Pb.JQX/Pb;
      let stringResult = string(JQX_Pb);
    } else {
      stringResult = string(JQX_Pb.Fbrd8J);
    }
    obj2.children = stringResult;
    obj2 = tmp8(arg1(closure_3[7]).Text, obj2);
    obj.children = obj2;
    closure_9(closure_7, obj);
    const tmp9 = closure_7;
  }
};
export const ArrowButton = function ArrowButton(arg0) {
  let onPress;
  let text;
  ({ text, onPress } = arg0);
  const tmp = callback5();
  let obj = { accessibilityRole: "button", style: tmp.arrowButton, onPress };
  obj = { style: tmp.arrowButtonText, children: text };
  const items = [callback3(arg1(dependencyMap[7]).Text, obj), ];
  obj = { size: arg1(dependencyMap[10]).Icon.Sizes.SMALL, source: importDefault(dependencyMap[11]), style: tmp.arrowButtonIcon };
  items[1] = callback3(arg1(dependencyMap[10]).Icon, obj);
  obj.children = items;
  return callback4(arg1(dependencyMap[9]).PressableOpacity, obj);
};
export const useFormattedSubscriptionPlan = function useFormattedSubscriptionPlan(listingId) {
  const obj = importDefault(dependencyMap[12]);
  const callback = callback2(importAll(dependencyMap[13]).useSubscriptionPlan(listingId), 1)[0];
  const obj2 = importAll(dependencyMap[13]);
  const items = [closure_8];
  const stateFromStores = callback(dependencyMap[14]).useStateFromStores(items, () => closure_8.get(id.id));
  const price = importDefault(dependencyMap[15])(stateFromStores, obj.useNativeIAPPayments().storeFront).price;
  let str = "No Price Available";
  if (null != price) {
    const _HermesInternal = HermesInternal;
    str = "" + callback(dependencyMap[16]).formatPrice(price.amount, price.currency) + "/mo.";
    const obj4 = callback(dependencyMap[16]);
  }
  return str;
};
