// Module ID: 11194
// Function ID: 11195
// Name: AnnouncementChannelLurkerBar
// Dependencies: [19, 17, 21, 5014, 575, 5624, 1113, 5634, 11195, 2]

// Module 11194 (AnnouncementChannelLurkerBar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import showChannelFollowingActionSheet from "showChannelFollowingActionSheet" /* 11195 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
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
    const obj2 = { style: tmp.text, variant: "text-sm/medium", color: "mobile-text-heading-primary", children: intl.string(channel(1113).t.Hl0Mqh) };
    const Text = channel(5624).Text;
    intl = channel(1113).intl;
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
      text: intl2.string(channel(1113).t["4z5PU1"]),
      size: "sm",
      variant: "secondary",
      grow: true
    };
    const Button = channel(5634).Button;
    intl2 = channel(1113).intl;
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
