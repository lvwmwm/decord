// Module ID: 12774
// Function ID: 99384
// Name: PrivateChannelSubtitle
// Dependencies: [31, 27, 1347, 1838, 3758, 653, 33, 4130, 689, 12775, 12776, 4126, 12777, 566, 10708, 4320, 8526, 1212, 3981, 1273, 4623, 12779, 10770, 10226, 4660, 2]

// Module 12774 (PrivateChannelSubtitle)
import "result";
import { View } from "get ActivityIndicator";
import closure_4 from "_createForOfIteratorHelperLoose";
import closure_5 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function PrivateChannelSubtitle(channel) {
  channel = channel.channel;
  const tmp = _createForOfIteratorHelperLoose();
  const state = importDefault(12775)(channel.id).state;
  let obj = { style: tmp.subtitleWrapper };
  obj = { useAllAloneText: false, channel, voiceState: state, style: tmp.subtitle };
  const items = [callback(importDefault(12776), obj), , ];
  let tmp4 = state === require(12775) /* id */.CallStates.CONNECTED;
  if (tmp4) {
    obj = { style: tmp.subtitle, variant: "text-xs/medium", color: "text-overlay-light", children: " - " };
    tmp4 = callback(require(4126) /* Text */.Text, obj);
  }
  items[1] = tmp4;
  let tmp8 = state === require(12775) /* id */.CallStates.CONNECTED;
  if (tmp8) {
    const obj1 = { channelId: channel.id, style: tmp.subtitle };
    tmp8 = callback(importDefault(12777), obj1);
  }
  items[2] = tmp8;
  obj.children = items;
  return closure_11(View, obj);
}
class VoiceChannelHeader {
  constructor(arg0) {
    channel = global.channel;
    tmp = c12();
    obj = require("initialize");
    items = [];
    items[0] = c5;
    stateFromStores = obj.useStateFromStores(items, () => outer1_5.getGuild(channel.getGuildId()));
    tmp3 = require("useIsVoiceChannelFull")(channel);
    obj2 = require("initialize");
    items1 = [];
    items1[0] = c4;
    items2 = [];
    items2[0] = channel;
    f99388 = obj2.useStateFromStores(items1, () => outer1_4.getSelfEmbeddedActivityForChannel(channel.id), items2);
    name = undefined;
    tmp4 = require("computeDefaultGroupDmNameFromUserIds")(channel);
    if (null != stateFromStores) {
      name = stateFromStores.name;
    }
    E = null;
    if (c6.can(Permissions.CREATE_INSTANT_INVITE, channel)) {
      E = null;
      if (!tmp3) {
        E = () => {
          let applicationId;
          let obj = channel(outer1_2[16]);
          obj = { source: outer1_9.VOICE_CHANNEL };
          if (null != applicationId) {
            applicationId = applicationId.applicationId;
          }
          obj.targetApplicationId = applicationId;
          return obj.showInstantInviteActionSheet(channel, obj);
        };
      }
    }
    formatToPlainStringResult = tmp4;
    if (channel.isPrivate()) {
      tmp7 = channel;
      tmp8 = closure_2;
      num = 17;
      intl = require("getSystemLocale").intl;
      obj = {};
      num2 = 1;
      obj.count = channel.recipients.length + 1;
      formatToPlainStringResult = intl.formatToPlainString(require("getSystemLocale").t["8bn8Br"], obj);
      tmp9 = jsx;
      tmp10 = PrivateChannelSubtitle;
      obj1 = {};
      obj1.channel = channel;
      name = jsx(PrivateChannelSubtitle, obj1);
      class E {
        constructor() {
          obj = require("_createForOfIteratorHelperLoose");
          return obj.navigateToNewGroupDM(channel.id, outer1_8.CHANNEL_CALL);
        }
      }
    }
    obj2 = { style: tmp.container };
    tmp11 = jsxs;
    tmp12 = View;
    tmp13 = jsx;
    obj3 = {};
    obj3.size = require("Button").Icon.Sizes.MEDIUM;
    tmp14 = f99388;
    tmp15 = closure_2;
    if (require("isRoleRequired")(channel)) {
      num4 = 21;
      tmp14Result = require("registerAsset");
    } else {
      num3 = 22;
      tmp14Result = require("registerAsset");
    }
    obj3.source = tmp14Result;
    obj3.disableColor = true;
    obj3.style = tmp.icons;
    items3 = [, , ];
    items3[0] = tmp13(require("Button").Icon, obj3);
    obj4 = { style: tmp.middle };
    tmp19 = formatToPlainStringResult;
    tmp17 = jsxs;
    tmp18 = View;
    if ("string" === typeof formatToPlainStringResult) {
      tmp20 = jsx;
      tmp21 = channel;
      tmp22 = closure_2;
      num5 = 11;
      obj5 = { lineClamp: 1, lineBreakMode: "tail", variant: "text-md/semibold", color: "text-overlay-light" };
      obj5.children = formatToPlainStringResult;
      tmp19 = jsx(require("Text").Text, obj5);
    }
    items4 = [, ];
    items4[0] = tmp19;
    tmp23 = name;
    if ("string" === typeof name) {
      tmp24 = jsx;
      tmp25 = channel;
      tmp26 = closure_2;
      num6 = 11;
      obj6 = { lineClamp: 1, lineBreakMode: "tail", variant: "text-xs/medium", color: "text-overlay-light" };
      obj6.children = name;
      tmp23 = jsx(require("Text").Text, obj6);
    }
    items4[1] = tmp23;
    obj4.children = items4;
    items3[1] = tmp17(tmp18, obj4);
    obj7 = { style: tmp.icons };
    tmp29 = null != E;
    tmp27 = jsx;
    tmp28 = View;
    if (tmp29) {
      tmp30 = jsx;
      tmp31 = AddMemberButton;
      obj8 = {};
      obj8.onPress = E;
      tmp29 = jsx(AddMemberButton, obj8);
    }
    obj7.children = tmp29;
    items3[2] = tmp27(tmp28, obj7);
    obj2.children = items3;
    return tmp11(tmp12, obj2);
  }
}
function AddMemberButton(onPress) {
  const obj = { onPress: onPress.onPress, iconSource: importDefault(10226), iconStyle: _createForOfIteratorHelperLoose().icons };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t["6Qgrev"]);
  return callback(IconButton, obj);
}
class IconButton {
  constructor(arg0) {
    ({ onPress, iconStyle, iconSource, accessibilityLabel, style } = global);
    obj = { accessibilityRole: "button", accessibilityLabel, onPress, style };
    obj.children = jsx(require("Button").Icon, { source: iconSource, style: iconStyle });
    return jsx(require("PressableBase").PressableOpacity, obj);
  }
}
({ Permissions: closure_7, AnalyticsPages: closure_8, InstantInviteSources: closure_9 } = ME);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { alignSelf: "stretch", flexDirection: "row", paddingVertical: 10, paddingHorizontal: 16, alignItems: "center" }, middle: { flex: 1, justifyContent: "space-around", marginHorizontal: 16 } };
_createForOfIteratorHelperLoose = { flexDirection: "row", tintColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.icons = _createForOfIteratorHelperLoose;
let obj1 = { fontSize: 12, lineHeight: 16, color: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.subtitle = obj1;
_createForOfIteratorHelperLoose.subtitleWrapper = { flexDirection: "row" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceChannelHeader.tsx");

export default VoiceChannelHeader;
export { VoiceChannelHeader };
export { IconButton };
