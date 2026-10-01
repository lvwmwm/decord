// Module ID: 9094
// Function ID: 9095
// Name: DiscordTag
// Dependencies: [19, 17, 21, 4836, 576, 4832, 8741, 2]
// Exports: default

// Module 9094 (DiscordTag)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import BotTagDefault from "BotTag" /* 8741 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: { flexGrow: 1, alignItems: "center", flexDirection: "row" }, botTag: obj2 };
obj2 = { marginLeft: nativeDefault.space.PX_4 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/DiscordTag.tsx");

export default function DiscordTag(arg0) {
  let discriminatorStyle;
  let hideBotTag;
  let items;
  let items1;
  let items2;
  let nick;
  let nicknameStyle;
  let tmp2Result2;
  let user;
  let usernameStyle;
  ({ user, nick, hideBotTag } = arg0);
  ({ usernameStyle, nicknameStyle, discriminatorStyle } = arg0);
  if (hideBotTag === undefined) {
    hideBotTag = false;
  }
  const tmp = closure_6();
  const obj = { style: tmp.container, children: items2 };
  const tmp3 = View;
  if (null != nick) {
    const obj2 = { variant: "text-md/semibold", maxFontSizeMultiplier: 2, style: nicknameStyle, lineClamp: 1, children: nick };
    tmp2Result2 = React3(Text_Text.Text, obj2);
  } else {
    tmp2Result2 = null;
    if (null != user) {
      const obj3 = { variant: "text-md/semibold", style: usernameStyle, lineClamp: 1, maxFontSizeMultiplier: 2, children: items };
      const Text = Text_Text.Text;
      items = [user.toString(), ];
      let tmp2Result = !user.hasUniqueUsername();
      user.hasUniqueUsername();
      const tmp4 = require;
      if (tmp2Result) {
        const obj4 = { variant: "text-md/semibold", color: "text-muted", style: discriminatorStyle, children: items1 };
        items1 = ["#", user.discriminator];
        tmp2Result = tmp2(tmp4(4832).Text, obj4);
      }
      items[1] = tmp2Result;
      tmp2Result2 = tmp2(Text, obj3);
    }
  }
  items2 = [tmp2Result2, ];
  let bot;
  if (user != null) {
    bot = user.bot;
  }
  let tmp13 = null;
  if (true === bot) {
    tmp13 = null;
    if (!hideBotTag) {
      const obj5 = { style: tmp.botTag, verified: user.isVerifiedBot() };
      const tmp17 = BotTagDefault;
      tmp13 = React3(tmp17, obj5);
    }
  }
  items2[1] = tmp13;
  return hasOwnProperty(tmp3, obj);
};
