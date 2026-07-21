// Module ID: 10364
// Function ID: 79962
// Name: ChannelPickerActionSheet
// Dependencies: []
// Exports: default

// Module 10364 (ChannelPickerActionSheet)
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/channel/native/ChannelPickerActionSheet.tsx");

export default function ChannelPickerActionSheet(noChannelOptionLabel) {
  let channels;
  let header;
  let selectedChannel;
  const arg1 = noChannelOptionLabel;
  ({ header, guild: closure_1, channels } = noChannelOptionLabel);
  const dependencyMap = channels;
  ({ onSelect: closure_3, selectedChannel } = noChannelOptionLabel);
  let tmp;
  if (null != header) {
    const onClose = header.onClose;
    let closure_4 = onClose;
    let tmp2;
    if (null != onClose) {
      let obj = {
        onPress() {
              callback(channels[6]).hideActionSheet();
              onClose();
            }
      };
      tmp2 = callback(arg1(dependencyMap[5]).ActionSheetCloseButton, obj);
    }
    obj = { title: header.title, trailing: tmp2 };
    tmp = callback(arg1(dependencyMap[7]).BottomSheetTitleHeader, obj);
  }
  let tmp9;
  if (null != noChannelOptionLabel.noChannelOptionLabel) {
    obj = { value: "", label: noChannelOptionLabel.noChannelOptionLabel };
    const obj1 = { source: importDefault(dependencyMap[10]) };
    obj.icon = callback(arg1(dependencyMap[9]).TableRowIcon, obj1);
    tmp9 = callback(arg1(dependencyMap[8]).TableRadioRow, obj);
  }
  const obj2 = { scrollable: true, header: tmp };
  const obj3 = { contentContainerStyle: { paddingBottom: importDefault(dependencyMap[4])().bottom } };
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
  obj4.onChange = function onChange(self) {
    if ("" === self) {
      if (null != self.noChannelOptionLabel) {
        callback(channels[6]).hideActionSheet();
        self.onSelect(null);
      }
    }
    const found = channels.find((id) => id.id === id);
    if (null != found) {
      callback(channels[6]).hideActionSheet();
      callback2(found);
      const obj = callback(channels[6]);
    }
  };
  obj4.hasIcons = true;
  const items = [
    tmp9,
    channels.map((id) => {
      let obj = id(channels[14]);
      const channelIconWithGuild = obj.getChannelIconWithGuild(id, closure_1);
      obj = { value: id.id, label: id(channels[15]).computeChannelName(id, onClose, closure_3) };
      let tmp3 = null;
      if (null != channelIconWithGuild) {
        obj = { source: channelIconWithGuild };
        tmp3 = callback3(id(channels[9]).TableRowIcon, obj);
      }
      obj.icon = tmp3;
      return callback3(id(channels[8]).TableRadioRow, obj, id.id);
    })
  ];
  obj4.children = items;
  obj3.children = closure_6(arg1(dependencyMap[13]).TableRadioGroup, obj4);
  obj2.children = callback(arg1(dependencyMap[12]).BottomSheetScrollView, obj3);
  return callback(arg1(dependencyMap[11]).ActionSheet, obj2);
};
