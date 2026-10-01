// Module ID: 10872
// Function ID: 10873
// Name: ChannelPickerActionSheet
// Dependencies: [19, 4479, 1372, 21, 1613, 6619, 4800, 6570, 6000, 5923, 10873, 6618, 6045, 5997, 5335, 4989, 2]
// Exports: default

// Module 10872 (ChannelPickerActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import useChannelName from "useChannelName" /* 4989 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5335 */;
import TableRadioRow2 from "TableRadioRow" /* 6000 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroRequire;
let tmp;
const TableRowIcon2 = tmp(5923);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const result = size.fileFinishedImporting("modules/channel/native/ChannelPickerActionSheet.tsx");

export default function ChannelPickerActionSheet(noChannelOptionLabel) {
  let BottomSheetScrollView;
  let TableRadioGroup;
  let TableRowIcon;
  let channels;
  let header;
  let items1;
  let obj4;
  let obj6;
  let obj7;
  let selectedChannel;
  let title1;
  let tmp12;
  _require = noChannelOptionLabel;
  let tmp = importDefault;
  ({ header, guild: importDefault, channels } = noChannelOptionLabel);
  ({ onSelect: RelationshipStore, selectedChannel } = noChannelOptionLabel);
  let tmp3;
  const bottom = require("useSafeAreaInsets")().bottom;
  if (null != header) {
    const onClose = header.onClose;
    let tmp4;
    const title = header.title;
    if (null != onClose) {
      let obj = {
        onPress() {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
              onClose();
            }
      };
      tmp4 = closure_5(require("ActionSheetCloseButton").ActionSheetCloseButton, obj);
    }
    let obj2 = { title, trailing: tmp4 };
    tmp3 = closure_5(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj2);
  }
  let items;
  if (null != noChannelOptionLabel.noChannelOptionLabel) {
    let obj3 = { value: "", label: noChannelOptionLabel.noChannelOptionLabel, icon: closure_5(TableRowIcon, obj4) };
    let TableRadioRow = require("TableRadioRow").TableRadioRow;
    obj4 = { source: tmp(tmp2[10]) };
    TableRowIcon = require("TableRowIcon").TableRowIcon;
    items = closure_5(TableRadioRow, obj3);
  }
  const obj5 = { scrollable: true, header: tmp3, children: closure_5(BottomSheetScrollView, obj6) };
  const ActionSheet = require("ActionSheet").ActionSheet;
  obj6 = { contentContainerStyle: { paddingBottom: bottom }, children: tmp12(TableRadioGroup, obj7) };
  BottomSheetScrollView = require("BottomSheetModal").BottomSheetScrollView;
  let str;
  TableRadioGroup = require("TableRadioGroup").TableRadioGroup;
  tmp12 = closure_6;
  if (selectedChannel != null) {
    str = selectedChannel.id;
  }
  if (str == null) {
    str = "";
  }
  obj7 = {
    defaultValue: str,
    accessibilityLabel: title1,
    onChange(arg0) {
      noChannelOptionLabel = arg0;
      if ("" === arg0) {
        const obj = noChannelOptionLabel;
        if (null != noChannelOptionLabel.noChannelOptionLabel) {
          const obj3 = ActionSheetActionCreatorsDefault;
          obj3.hideActionSheet();
          obj.onSelect(null);
        }
      }
      const found = channels.find((id) => id.id === closure_0);
      if (null != found) {
        const obj2 = ActionSheetActionCreatorsDefault;
        obj2.hideActionSheet();
        RelationshipStore(found);
      }
    },
    hasIcons: true,
    children: items1
  };
  title1 = undefined;
  if (header != null) {
    title1 = header.title;
  }
  if (items == null) {
    items = [];
  }
  items1 = [
    items,
    channels.map((id) => {
      let obj3;
      let tmp4Result;
      const obj = utils_ChannelUtils;
      const channelIconWithGuild = obj.getChannelIconWithGuild(id, importDefault);
      const obj2 = { value: id.id, label: obj3.computeChannelName(id, UserStore, RelationshipStore), icon: tmp4Result };
      const TableRadioRow = TableRadioRow2.TableRadioRow;
      tmp4Result = null;
      obj3 = useChannelName;
      if (null != channelIconWithGuild) {
        const obj4 = { source: channelIconWithGuild };
        tmp4Result = tmp4(TableRowIcon2.TableRowIcon, obj4);
      }
      return hasOwnProperty(TableRadioRow, obj2, id.id);
    })
  ];
  return closure_5(ActionSheet, obj5);
};
