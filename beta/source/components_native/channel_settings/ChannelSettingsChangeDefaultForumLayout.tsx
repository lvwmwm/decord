// Module ID: 16678
// Function ID: 16679
// Name: ChannelSettingsChangeDefaultForumLayout
// Dependencies: [32, 19, 17, 2045, 21, 4836, 576, 8085, 5997, 1115, 2055, 6000, 16639, 6514, 4832, 5999, 5899, 16679, 16680, 504, 2]
// Exports: default

// Module 16678 (ChannelSettingsChangeDefaultForumLayout)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import FastImageDefault from "FastImage" /* 5899 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 8085 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let importDefault;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
class ChannelSettingsChangeDefaultForumLayout {
  constructor(channel) {
    let LIST;
    let _undefined;
    let c1;
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let items1;
    let items2;
    let tmp10Result;
    let tmp3;
    channel = channel.channel;
    importDefault = undefined;
    const tmp = closure_9();
    [tmp3, c1] = react.useState(channel.defaultForumLayout);
    const items = [channel.id];
    let obj = { style: tmp.container, children: items2 };
    _slicedToArray(react.useState(channel.defaultForumLayout), 2);
    const callback = react.useCallback((defaultForumLayout) => {
      _undefined(defaultForumLayout);
      const obj = ChannelSettingsActionCreatorsDefault;
      const obj2 = { defaultForumLayout };
      obj.updateChannel(obj2);
      const obj3 = ChannelSettingsActionCreatorsDefault;
      const obj4 = { defaultForumLayout };
      obj3.saveChannel(channel.id, obj4);
    }, items);
    let obj2 = { title: intl.string(channel(1115).t.mFMDSq), defaultValue: LIST, onChange: callback, hasIcons: true, children: items1 };
    const TableRadioGroup = channel(5997).TableRadioGroup;
    intl = channel(1115).intl;
    LIST = tmp3;
    const tmp6 = View;
    if (tmp3 == null) {
      LIST = tmp7(2055).ForumLayout.LIST;
    }
    let obj3 = { icon: closure_7(channel(16639).GridSquareIcon, {}), label: intl2.string(channel(1115).t["U+rQfW"]), value: channel(2055).ForumLayout.GRID };
    const TableRadioRow = tmp7(6000).TableRadioRow;
    intl2 = tmp7(1115).intl;
    items1 = [closure_7(TableRadioRow, obj3), ];
    let obj4 = { icon: closure_7(channel(6514).ListViewIcon, {}), label: intl3.string(channel(1115).t.tuHPRX), value: channel(2055).ForumLayout.LIST };
    const TableRadioRow2 = tmp7(6000).TableRadioRow;
    intl3 = tmp7(1115).intl;
    items1[1] = closure_7(TableRadioRow2, obj4);
    items2 = [closure_8(TableRadioGroup, obj2), , , ];
    const obj5 = { style: tmp.description, variant: "text-sm/medium", color: "text-muted", children: intl4.string(channel(1115).t.MbX5Hu) };
    const Text = tmp7(4832).Text;
    intl4 = tmp7(1115).intl;
    items2[1] = closure_7(Text, obj5);
    const obj6 = { title: intl5.string(channel(1115).t.e4oMl4) };
    const TableRowGroupTitle = tmp7(5999).TableRowGroupTitle;
    intl5 = tmp7(1115).intl;
    items2[2] = closure_7(TableRowGroupTitle, obj6);
    const obj7 = { style: tmp.thumbnailImagePortrait, source: tmp10Result };
    const tmp11 = FastImageDefault;
    const tmp9 = closure_7;
    if (tmp3 === channel(2055).ForumLayout.GRID) {
      tmp10Result = tmp10(16679);
    } else {
      tmp10Result = tmp10(16680);
    }
    items2[3] = tmp9(tmp11, obj7);
    return closure_8(tmp6, obj);
  }
}
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, description: obj3, thumbnailImagePortrait: { alignSelf: "center" } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16 };
const React4 = createStyles(obj);
const result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsChangeDefaultForumLayout.tsx");

export default function ConnectedChannelSettingsChangeDefaultForumLayout(channelId) {
  channelId = channelId.channelId;
  const items = [ChannelStore];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { channel: stateFromStores };
    tmp2 = closure_7(ChannelSettingsChangeDefaultForumLayout, obj2);
  }
  return tmp2;
};
export { ChannelSettingsChangeDefaultForumLayout };
