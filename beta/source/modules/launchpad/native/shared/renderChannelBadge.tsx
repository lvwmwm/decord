// Module ID: 16809
// Function ID: 16810
// Name: renderChannelBadge
// Dependencies: [19, 21, 1177, 11779, 4832, 1115, 1882, 2]
// Exports: default

// Module 16809 (renderChannelBadge)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import NumberUtils from "NumberUtils" /* 1882 */;
import Text_Text from "Text/Text" /* 4832 */;
import NewBadgeDefault from "NewBadge" /* 11779 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/launchpad/native/shared/renderChannelBadge.tsx");

export default function renderChannelBadge(newChannel) {
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
    tmp2 = jsx(NewBadgeDefault, {});
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
};
