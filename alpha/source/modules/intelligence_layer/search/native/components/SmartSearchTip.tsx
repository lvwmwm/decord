// Module ID: 18749
// Function ID: 18750
// Name: SmartSearchTip
// Dependencies: [19, 17, 21, 5014, 575, 5624, 1113, 4123, 14879, 1187, 2]

// Module 18749 (SmartSearchTip)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let set;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3, titleContainer: obj4, title: { flexShrink: 1 } };
obj2 = { marginHorizontal: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_20 };
obj4 = { flex: 1, flexDirection: "row", gap: nativeDefault.space.PX_6 };
let closure_7 = createStyles(obj);
const memoResult = react.memo(function SmartSearchTip(citations) {
  let intl;
  let intl2;
  let items1;
  let items2;
  let items3;
  let substr;
  citations = citations.citations;
  const guildId = citations.guildId;
  const answerText = citations.answerText;
  let tmp = closure_7();
  let items = [citations];
  const memo = react.useMemo(() => {
    function getCitationAuthors(citations) {
      const items = [];
      set = new Set();
      const iter = citations[Symbol.iterator]();
      while (iter !== undefined) {
        let author = iter.next().message.author;
        let tmp = author;
        if (!set.has(author.id)) {
          let addResult = set.add(tmp.id);
          let arr = items.push(tmp);
        }
        continue;
      }
      return items;
    }
    return getCitationAuthors(citations);
  }, items);
  let tmp2 = closure_6;
  let obj = { style: tmp.container, children: items3 };
  const obj2 = { style: tmp.header, children: items2 };
  const obj3 = { style: tmp.titleContainer, children: items1 };
  const obj4 = { variant: "text-sm/semibold", color: "text-subtle", lineClamp: 1, style: tmp.title, accessibilityRole: "header", children: intl.string(guildId(4123).ydAwWi) };
  const Text = citations(5624).Text;
  intl = citations(1113).intl;
  items1 = [closure_5(Text, obj4), ];
  const obj5 = { variant: "text-sm/normal", color: "text-subtle", lineClamp: 1, children: intl2.string(guildId(4123).QIdSmb) };
  const Text2 = citations(5624).Text;
  intl2 = citations(1113).intl;
  items1[1] = closure_5(Text2, obj5);
  items2 = [closure_6(View, obj3), ];
  let tmp4Result = memo.length > 0;
  if (tmp4Result) {
    const obj6 = {
      size: citations(1187).AvatarSizes.XSMALL_20,
      totalCount: memo.length,
      names: memo.map((username) => username.username),
      children: substr.map((user) => {
          const obj = { user, size: native.AvatarSizes.XSMALL_20, guildId };
          const Avatar = native.Avatar;
          return hasOwnProperty(Avatar, obj, user.id);
        })
    };
    const AvatarPile = tmp5(14879).AvatarPile;
    substr = memo.slice(0, 3);
    tmp4Result = tmp4(AvatarPile, obj6);
  }
  items2[1] = tmp4Result;
  items3 = [tmp2(View, obj2), closure_5(citations(5624).Text, { variant: "text-md/normal", color: "text-default", children: answerText })];
  return tmp2(View, obj);
});
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchTip.tsx");

export default memoResult;
