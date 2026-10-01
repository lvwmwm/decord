// Module ID: 16473
// Function ID: 16474
// Name: guild_channels/VoiceOrStageSummaryRow
// Dependencies: [19, 17, 21, 4836, 576, 9580, 4832, 1177, 16474, 2]

// Module 16473 (guild_channels/VoiceOrStageSummaryRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles((height) => {
  const obj = { container: { flexDirection: "row", alignItems: "center", marginLeft: -2 }, overflowCircle: size, wrapper: { borderRadius: nativeDefault.radii.round, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderWidth: 2 }, badge: { borderRadius: nativeDefault.radii.round, paddingHorizontal: 8, display: "flex", flexDirection: "row", alignItems: "center", height }, audienceBadge: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER } };
  size = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.round, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", height, width: height };
  ({ borderRadius: nativeDefault.radii.round, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderWidth: 2 });
  ({ borderRadius: nativeDefault.radii.round, paddingHorizontal: 8, display: "flex", flexDirection: "row", alignItems: "center", height });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER });
  return obj;
});
const memoResult = react.memo(function VoiceOrStageSummaryRow(layout) {
  let audienceCount;
  let guildId;
  let items;
  let items1;
  let items3;
  let items4;
  let max;
  let obj5;
  let users;
  ({ users, max } = layout);
  if (max === undefined) {
    max = 5;
  }
  ({ guildId: importDefault, audienceCount } = layout);
  let layoutStyles;
  const tmp = max;
  const tmp2 = layoutStyles;
  layout = layout.layout;
  let obj = max(layoutStyles[5]);
  layoutStyles = obj.getLayoutStyles(layout);
  size = layoutStyles.voiceOrStageSummaryRow.size;
  let closure_3 = Math.max(users.length - max, 0);
  let tmp4 = closure_6(size);
  let closure_4 = tmp4;
  let obj2 = { style: items, children: items1 };
  items = [tmp4.container, ];
  let obj3 = { height: size + 4 };
  items[1] = obj3;
  items1 = [
    users.map((user, index) => {
      let Text;
      let obj4;
      let obj5;
      let obj7;
      if (index < max) {
        if (index === tmp - 1) {
          let tmp3Result;
          if (closure_3 > 0) {
            const items = [closure_4.wrapper, ];
            let obj2 = 0 !== index;
            const tmp13 = React3;
            const tmp14 = View;
            const tmp15 = closure_4;
            if (obj2) {
              obj2 = { marginLeft: -12 };
            }
            items[1] = obj2;
            const obj3 = { style: items, children: React3(View, obj4) };
            obj4 = { style: tmp15.overflowCircle, children: React3(Text, obj5) };
            const _HermesInternal = HermesInternal;
            obj5 = { variant: "text-xs/medium", children: "+" + tmp2 + 1 };
            Text = Text_Text.Text;
            tmp3Result = tmp13(tmp14, obj3, "overflow");
          }
          return tmp3Result;
        }
        const items1 = [closure_4.wrapper, ];
        let obj = 0 !== index;
        const tmp3 = React3;
        const tmp4 = View;
        if (obj) {
          obj = { marginLeft: -12 };
        }
        items1[1] = obj;
        const obj6 = { style: items1, children: React3(native.Avatar, obj7) };
        obj7 = { user, guildId: importDefault, size: layoutStyles.voiceOrStageSummaryRow.avatarSize };
        tmp3Result = tmp3(tmp4, obj6, index);
      }
    }),

  ];
  let tmp8Result = null != audienceCount && audienceCount > 0;
  if (tmp8Result) {
    const items2 = [tmp4.wrapper, ];
    const tmp9 = users.length > 0 && { marginLeft: -12 };
    let obj4 = { style: items2, children: tmp5(tmp6, obj5) };
    items2[1] = tmp9;
    obj5 = { style: items3, children: items4 };
    items3 = [, ];
    ({ badge: arr4[0], audienceBadge: arr4[1] } = tmp4);
    let obj6 = { size: tmp(tmp2[7]).Icon.Sizes.CUSTOM, style: { height: 14, width: 14 }, source: require("AssetRegistry") };
    const Icon = tmp(tmp2[7]).Icon;
    items4 = [tmp8(Icon, obj6), ];
    let obj7 = { variant: "text-sm/bold", style: { marginLeft: 4 }, children: audienceCount };
    items4[1] = closure_4(tmp(tmp2[6]).Text, obj7);
    tmp8Result = tmp8(tmp6, obj4);
  }
  items1[1] = tmp8Result;
  return closure_5(closure_3, obj2);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/VoiceOrStageSummaryRow.tsx");

export default memoResult;
