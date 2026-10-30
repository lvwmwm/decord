// Module ID: 11175
// Function ID: 11176
// Name: AnnouncementChannelLurkerBar
// Dependencies: [19, 17, 21, 5009, 575, 5619, 1114, 5629, 11176, 2]

// Module 11175 (AnnouncementChannelLurkerBar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import showChannelFollowingActionSheet from "showChannelFollowingActionSheet" /* 11176 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
class AnnouncementChannelLurkerBar {
  constructor(channel) {
    let intl;
    let intl2;
    let items;
    channel = channel.channel;
    const tmp = closure_5();
    let obj = { style: tmp.wrapper, children: items };
    const obj2 = { style: tmp.text, variant: "text-sm/medium", color: "mobile-text-heading-primary", children: intl.string(channel(1114).t.Hl0Mqh) };
    const Text = channel(5619).Text;
    intl = channel(1114).intl;
    items = [closure_3(Text, obj2), ];
    const obj3 = {
      onPress: function handleFollowing() {
        const id = channel.id;
        const guildId = channel.getGuildId();
        if (null != guildId) {
          const obj = showChannelFollowingActionSheet;
          const result = obj.showChannelFollowingActionSheet(id, guildId);
        }
      },
      text: intl2.string(channel(1114).t["4z5PU1"]),
      size: "sm",
      variant: "secondary",
      grow: true
    };
    const Button = channel(5629).Button;
    intl2 = channel(1114).intl;
    items[1] = closure_3(Button, obj3);
    return closure_4(View, obj);
  }
}
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { wrapper: obj2, text: { textAlign: "center", marginBottom: 8 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16, paddingTop: 8 };
const hasOwnProperty = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/navbars/native/components/AnnouncementChannelLurkerBar.tsx");

export default AnnouncementChannelLurkerBar;
export { AnnouncementChannelLurkerBar };
