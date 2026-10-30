// Module ID: 13790
// Function ID: 13791
// Name: ChannelBadge
// Dependencies: [19, 21, 1188, 13789, 5619, 1114, 1896, 2]
// Exports: renderChannelBadge

// Module 13790 (ChannelBadge)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1114 */;
import native from "native" /* 1188 */;
import NumberUtils from "NumberUtils" /* 1896 */;
import Text_Text from "Text/Text" /* 5619 */;
import _mod13789 from "module_13789" /* 13789 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/ChannelBadge.tsx");

export function renderChannelBadge(newChannel) {
  let eventsMentionCount;
  let newPostCount;
  let obj5;
  let postsWithUnreadsCount;
  let tmp2;
  let flag = newChannel.newChannel;
  if (flag === undefined) {
    flag = false;
  }
  let num = newChannel.mentionCount;
  if (num === undefined) {
    num = 0;
  }
  ({ postsWithUnreadsCount, newPostCount, eventsMentionCount } = newChannel);
  const locale = newChannel.locale;
  if (null != num) {
    if (num > 0) {
      tmp2 = jsx(native.Badge, { value: num, isMentionLowImportance: tmp });
    }
    return tmp2;
  }
  if (flag) {
    tmp2 = jsx(_mod13789.NewBadge, {});
  } else {
    if (null != newPostCount) {
      if (newPostCount > 0) {
        const Text = Text_Text.Text;
        const intl = intl2.intl;
        const format = intl.format;
        const obj4 = { count: obj5.humanizeValue(newPostCount, locale) };
        const GkAbqY = intl2.t.GkAbqY;
        tmp2 = <Text variant="text-xs/bold" color="text-brand">{format(GkAbqY, obj4)}</Text>;
        obj5 = NumberUtils;
      }
    }
    if (null != postsWithUnreadsCount) {
      if (postsWithUnreadsCount > 0) {
        tmp2 = jsx(Text_Text.Text, { variant: "text-xs/bold", color: "text-muted", children: postsWithUnreadsCount });
      }
    }
    tmp2 = null;
    if (null != eventsMentionCount) {
      tmp2 = null;
      if (eventsMentionCount > 0) {
        tmp2 = jsx(native.Badge, { value: eventsMentionCount, eventsMentionBadge: true });
      }
    }
  }
}
