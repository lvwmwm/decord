// Module ID: 19021
// Function ID: 19022
// Name: WaterwheelsDiscoverStatus
// Dependencies: [19, 17, 21, 5306, 575, 5929, 1113, 2569, 5936, 2]
// Exports: WaterwheelsDiscoverRefreshError, default

// Module 19021 (WaterwheelsDiscoverStatus)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import _modDef2569 from "module_2569" /* 2569 */;
import Text_Text from "Text/Text" /* 5929 */;
import components_Button_Button from "components/Button/Button" /* 5936 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, copy: obj3, centered: { textAlign: "center" }, banner: obj4, bannerText: { flex: 1 } };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", gap: nativeDefault.space.PX_4 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/waterwheels/discover/native/WaterwheelsDiscoverStatus.tsx");

export default function WaterwheelsDiscoverStatus(onRetry) {
  let Text2;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let obj3;
  let retryAfterAt;
  let status;
  let string;
  let tmp12Result;
  let vtx6nV;
  ({ status, retryAfterAt } = onRetry);
  onRetry = onRetry.onRetry;
  const tmp = closure_7();
  const items = [retryAfterAt];
  [][0] = retryAfterAt;
  const callback = react.useCallback(() => {
    let tmp2 = null != retryAfterAt && tmp > 0;
    if (tmp2) {
      const _Date = Date;
      tmp2 = tmp > Date.now();
    }
    return tmp2;
  }, items);
  if ("loading" === status) {
    const obj2 = { style: tmp.container, accessibilityLiveRegion: "polite", children: hasOwnProperty(Text2, obj3) };
    obj3 = { variant: "body-md/medium", color: "text-subtle", style: tmp.centered, children: intl3.string(_modDef2569["71GnER"]) };
    Text2 = Text_Text.Text;
    intl3 = intl5.intl;
    tmp12Result = hasOwnProperty(View, obj2);
  } else {
    let tmp4;
    const obj4 = { style: tmp.container, accessibilityLiveRegion: "polite", children: items2 };
    const obj5 = { style: tmp.copy, children: items1 };
    const obj6 = { variant: "heading-sm/semibold", color: "text-strong", style: tmp.centered, children: string(vtx6nV) };
    const Heading = Text_Text.Heading;
    const intl4 = intl5.intl;
    string = intl4.string;
    const tmp19 = _modDef2569;
    if ("empty" === status) {
      vtx6nV = tmp19.gv4HTM;
      tmp4 = tmp18;
    } else {
      vtx6nV = tmp19.vtx6nV;
      tmp4 = tmp18;
    }
    items1 = [hasOwnProperty(Heading, obj6), ];
    let tmp14Result = null;
    if ("empty" === status) {
      const obj = { variant: "body-sm/normal", color: "text-subtle", style: tmp.centered, children: intl.string(tmp4(2569)["9KIqrW"]) };
      const Text = tmp15(5929).Text;
      intl = tmp15(1113).intl;
      tmp14Result = tmp14(Text, obj);
    }
    items1[1] = tmp14Result;
    items2 = [metroRequire(View, obj5), ];
    const obj7 = { size: "sm", variant: "secondary", text: intl2.string(tmp4(2569).DClDU4), onPress: onRetry, disabled: tmp3 };
    const Button = tmp15(5936).Button;
    intl2 = tmp15(1113).intl;
    items2[1] = hasOwnProperty(Button, obj7);
    tmp12Result = tmp12(tmp13, obj4);
  }
  return tmp12Result;
};
export function WaterwheelsDiscoverRefreshError(retryAfterAt) {
  let intl;
  let intl2;
  let items2;
  retryAfterAt = retryAfterAt.retryAfterAt;
  const onRetry = retryAfterAt.onRetry;
  const tmp = closure_7();
  const items = [retryAfterAt];
  const items1 = [retryAfterAt];
  const callback = react.useCallback(() => {
    let tmp2 = null != retryAfterAt && tmp > 0;
    if (tmp2) {
      const _Date = Date;
      tmp2 = tmp > Date.now();
    }
    return tmp2;
  }, items);
  const obj = { style: tmp.banner, accessibilityLiveRegion: "polite", children: items2 };
  const syncExternalStore = react.useSyncExternalStore(react.useCallback((fn) => {
    let closure_1;
    let closure_0 = fn;
    function checkDeadline() {
      let num = retryAfterAt;
      if (retryAfterAt == null) {
        num = 0;
      }
      const diff = num - Date.now();
      if (diff > 0) {
        const _setTimeout = setTimeout;
        const _Math = Math;
        const timeout = setTimeout(checkDeadline, Math.min(diff, 2147483647));
      } else {
        fn();
      }
    }
    let num = closure_0;
    if (closure_0 == null) {
      num = 0;
    }
    let diff = num - Date.now();
    if (diff > 0) {
      let _setTimeout = setTimeout;
      let _Math = Math;
      let timeout = setTimeout(checkDeadline, Math.min(diff, 2147483647));
    } else {
      fn();
    }
    return () => clearTimeout(closure_1);
  }, items1), callback);
  const obj2 = { variant: "body-sm/medium", color: "text-subtle", style: tmp.bannerText, children: intl.string(_modDef2569["4O8kV0"]) };
  const Text = Text_Text.Text;
  intl = intl5.intl;
  items2 = [hasOwnProperty(Text, obj2), ];
  const obj3 = { size: "sm", variant: "secondary", text: intl2.string(_modDef2569.DClDU4), onPress: onRetry, disabled: syncExternalStore };
  const Button = components_Button_Button.Button;
  intl2 = intl5.intl;
  items2[1] = hasOwnProperty(Button, obj3);
  return metroRequire(View, obj);
}
