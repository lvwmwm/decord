// Module ID: 9429
// Function ID: 73402
// Name: DiscordTag
// Dependencies: [31, 27, 33, 4130, 689, 4126, 8523, 2]
// Exports: default

// Module 9429 (DiscordTag)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flexGrow: 1, alignItems: "center", flexDirection: "row" } };
_createForOfIteratorHelperLoose = { marginLeft: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.botTag = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/user_profile/native/DiscordTag.tsx");

export default function DiscordTag(arg0) {
  let discriminatorStyle;
  let hideBotTag;
  let nick;
  let nicknameStyle;
  let user;
  let usernameStyle;
  ({ user, nick, hideBotTag } = arg0);
  ({ usernameStyle, nicknameStyle, discriminatorStyle } = arg0);
  if (hideBotTag === undefined) {
    hideBotTag = false;
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.container };
  if (null != nick) {
    obj = { variant: "text-md/semibold", maxFontSizeMultiplier: 2, style: nicknameStyle, lineClamp: 1, children: nick };
    let tmp4Result = callback(require(4126) /* Text */.Text, obj);
  } else {
    tmp4Result = null;
    if (null != user) {
      obj = { variant: "text-md/semibold", style: usernameStyle, lineClamp: 1, maxFontSizeMultiplier: 2 };
      const items = [user.toString(), ];
      let tmp7 = !user.hasUniqueUsername();
      if (tmp7) {
        const obj1 = { variant: "text-md/semibold", color: "text-muted", style: discriminatorStyle };
        const items1 = ["#", user.discriminator];
        obj1.children = items1;
        tmp7 = callback2(require(4126) /* Text */.Text, obj1);
      }
      items[1] = tmp7;
      obj.children = items;
      tmp4Result = callback2(require(4126) /* Text */.Text, obj);
      const tmp4 = callback2;
    }
  }
  const items2 = [tmp4Result, ];
  let bot;
  if (null != user) {
    bot = user.bot;
  }
  let tmp16 = null;
  if (true === bot) {
    tmp16 = null;
    if (!hideBotTag) {
      const obj2 = { style: tmp.botTag, verified: user.isVerifiedBot() };
      tmp16 = callback(importDefault(8523), obj2);
      const tmp20 = importDefault(8523);
    }
  }
  items2[1] = tmp16;
  obj.children = items2;
  return callback2(View, obj);
};
