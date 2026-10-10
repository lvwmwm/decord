// Module ID: 12853
// Function ID: 12854
// Name: GuildRoleSubscriptionsChannelHeader
// Dependencies: [19, 17, 21, 5092, 587, 558, 576, 1200, 12559, 5088, 1126, 2]

// Module 12853 (GuildRoleSubscriptionsChannelHeader)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import Text_Text from "Text/Text" /* 5088 */;
import AssetRegistryDefault from "AssetRegistry" /* 12559 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { header: obj2 };
obj2 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRoleSubscriptionsChannelHeader() {
  let first;
  let intl;
  let items;
  let tmp12;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(4);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { source: AssetRegistryDefault, size: native.Icon.Sizes.MEDIUM, disableColor: true };
    const Icon = tmp(1200).Icon;
    const tmp8 = React3(Icon, obj2);
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "heading-lg/extrabold", color: "interactive-text-active", children: intl.string(intl2.t["KzCF/6"]) };
    const Text = tmp(5088).Text;
    intl = tmp(1126).intl;
    const tmp11 = React3(Text, obj3);
    cResult[1] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== tmp4.header) {
    const obj4 = { style: tmp4.header, children: items };
    items = [first, tmp9];
    const tmp15 = hasOwnProperty(View, obj4);
    cResult[2] = tmp4.header;
    cResult[3] = tmp15;
    tmp12 = tmp15;
  } else {
    tmp12 = cResult[3];
  }
  return tmp12;
}) : (function GuildRoleSubscriptionsChannelHeader() {
  let intl;
  let items;
  const obj = { style: closure_6().header, children: items };
  const obj2 = { source: AssetRegistryDefault, size: native.Icon.Sizes.MEDIUM, disableColor: true };
  const Icon = native.Icon;
  items = [React3(Icon, obj2), ];
  const obj3 = { variant: "heading-lg/extrabold", color: "interactive-text-active", children: intl.string(intl2.t["KzCF/6"]) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items[1] = React3(Text, obj3);
  return hasOwnProperty(View, obj);
}));
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/overview_tab/GuildRoleSubscriptionsChannelHeader.tsx");

export default memoResult;
