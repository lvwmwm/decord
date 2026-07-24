// Module ID: 10404
// Function ID: 80228
// Name: ChannelPickerActionSheet
// Dependencies: [31, 3767, 1849, 33, 1557, 5499, 4098, 5186, 7653, 5170, 10405, 5498, 5189, 7654, 4593, 4320, 2]
// Exports: default

// Module 10404 (ChannelPickerActionSheet)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/channel/native/ChannelPickerActionSheet.tsx");

export default function ChannelPickerActionSheet(noChannelOptionLabel) {
  let channels;
  let _isNativeReflectConstruct;
  let header;
  let importDefault;
  let selectedChannel;
  const _require = noChannelOptionLabel;
  ({ header, guild: importDefault, channels } = noChannelOptionLabel);
  ({ onSelect: _isNativeReflectConstruct, selectedChannel } = noChannelOptionLabel);
  let tmp;
  if (null != header) {
    const onClose = header.onClose;
    let tmp2;
    if (null != onClose) {
      let obj = {
        onPress() {
              outer1_1(channels[6]).hideActionSheet();
              onClose();
            }
      };
      tmp2 = callback(_require(channels[5]).ActionSheetCloseButton, obj);
    }
    obj = { title: header.title, trailing: tmp2 };
    tmp = callback(_require(channels[7]).BottomSheetTitleHeader, obj);
  }
  let tmp9;
  if (null != noChannelOptionLabel.noChannelOptionLabel) {
    obj = { value: "", label: noChannelOptionLabel.noChannelOptionLabel };
    const obj1 = { source: importDefault(channels[10]) };
    obj.icon = callback(_require(channels[9]).TableRowIcon, obj1);
    tmp9 = callback(_require(channels[8]).TableRadioRow, obj);
  }
  const obj2 = { scrollable: true, header: tmp };
  const obj3 = { contentContainerStyle: { paddingBottom: importDefault(channels[4])().bottom } };
  const obj4 = {};
  let id;
  if (null != selectedChannel) {
    id = selectedChannel.id;
  }
  let str2 = "";
  if (null != id) {
    str2 = id;
  }
  obj4.defaultValue = str2;
  let title;
  if (null != header) {
    title = header.title;
  }
  obj4.accessibilityLabel = title;
  obj4.onChange = function onChange(arg0) {
    const noChannelOptionLabel = arg0;
    if ("" === arg0) {
      if (null != noChannelOptionLabel.noChannelOptionLabel) {
        outer1_1(channels[6]).hideActionSheet();
        noChannelOptionLabel.onSelect(null);
      }
    }
    const found = channels.find((id) => id.id === closure_0);
    if (null != found) {
      outer1_1(channels[6]).hideActionSheet();
      callback(found);
      const obj = outer1_1(channels[6]);
    }
  };
  obj4.hasIcons = true;
  const items = [
    tmp9,
    channels.map((id) => {
      let obj = noChannelOptionLabel(channels[14]);
      const channelIconWithGuild = obj.getChannelIconWithGuild(id, closure_1);
      obj = { value: id.id, label: noChannelOptionLabel(channels[15]).computeChannelName(id, onClose, outer1_3) };
      let tmp3 = null;
      if (null != channelIconWithGuild) {
        obj = { source: channelIconWithGuild };
        tmp3 = outer1_5(noChannelOptionLabel(channels[9]).TableRowIcon, obj);
      }
      obj.icon = tmp3;
      return outer1_5(noChannelOptionLabel(channels[8]).TableRadioRow, obj, id.id);
    })
  ];
  obj4.children = items;
  obj3.children = closure_6(_require(channels[13]).TableRadioGroup, obj4);
  obj2.children = callback(_require(channels[12]).BottomSheetScrollView, obj3);
  return callback(_require(channels[11]).ActionSheet, obj2);
};
