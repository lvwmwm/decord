// Module ID: 10431
// Function ID: 80354
// Name: UnreadSettingNoticeConnected
// Dependencies: [31, 27, 662, 33, 4130, 689, 10432, 4126, 1212, 4660, 10433, 2]
// Exports: default

// Module 10431 (UnreadSettingNoticeConnected)
import "result";
import { View } from "get ActivityIndicator";
import { ChannelNotificationSettingsFlags as closure_4 } from "MAX_FAVORITES";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", flexDirection: "row", paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, borderBottomWidth: 1, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
const merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_LOW);
_createForOfIteratorHelperLoose.content = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.informations = { flex: 1 };
_createForOfIteratorHelperLoose.actions = { display: "flex", flexDirection: "row", alignItems: "center", marginLeft: 16 };
_createForOfIteratorHelperLoose.inlineTextWithIcon = { display: "flex", flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("MAX_FAVORITES").fileFinishedImporting("modules/notifications/settings_unread_notice/native/UnreadSettingNotice.tsx");

export default function UnreadSettingNoticeConnected(channel) {
  const _require = channel;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.content };
  obj = { id: channel.channel.id };
  const items = [callback(importDefault(10432), obj), , ];
  obj = { style: tmp.informations };
  const obj1 = { variant: "text-md/semibold" };
  const intl = _require(1212).intl;
  obj1.children = intl.string(_require(1212).t.i4xQ5o);
  obj.children = callback(_require(4126).Text, obj1);
  items[1] = callback(View, obj);
  const obj2 = { style: tmp.actions };
  const obj3 = {
    accessibilityRole: "button",
    style: tmp.inlineTextWithIcon,
    onPress() {
      outer1_1(outer1_2[10])(channel.channel.guild_id, channel.channel.id, outer1_4.UNREADS_ONLY_MENTIONS);
      channel.clearUnreadsNotice();
    }
  };
  const obj4 = { variant: "text-xs/medium", color: "text-link" };
  const intl2 = _require(1212).intl;
  obj4.children = intl2.string(_require(1212).t.KyUKhT);
  obj3.children = callback(_require(4126).Text, obj4);
  obj2.children = callback(_require(4660).PressableOpacity, obj3);
  items[2] = callback(View, obj2);
  obj.children = items;
  return callback2(View, obj);
};
