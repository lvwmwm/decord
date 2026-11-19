// Module ID: 19032
// Function ID: 19033
// Name: ChannelSettingsChangeDefaultForumLayout
// Dependencies: [32, 19, 17, 4641, 21, 4792, 575, 11189, 7228, 1113, 4651, 7230, 18988, 14755, 5383, 7229, 5479, 19033, 19034, 504, 2]
// Exports: default

// Module 19032 (ChannelSettingsChangeDefaultForumLayout)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import FastImageDefault from "FastImage" /* 5479 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 11189 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4641 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4792 */;
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
    let obj2 = { title: intl.string(channel(1113).t.mFMDSq), defaultValue: LIST, onChange: callback, hasIcons: true, children: items1 };
    const TableRadioGroup = channel(7228).TableRadioGroup;
    intl = channel(1113).intl;
    LIST = tmp3;
    const tmp6 = View;
    if (tmp3 == null) {
      LIST = tmp7(4651).ForumLayout.LIST;
    }
    let obj3 = { icon: closure_7(channel(18988).GridSquareIcon, {}), label: intl2.string(channel(1113).t["U+rQfW"]), value: channel(4651).ForumLayout.GRID };
    const TableRadioRow = tmp7(7230).TableRadioRow;
    intl2 = tmp7(1113).intl;
    items1 = [closure_7(TableRadioRow, obj3), ];
    let obj4 = { icon: closure_7(channel(14755).ListViewIcon, {}), label: intl3.string(channel(1113).t.tuHPRX), value: channel(4651).ForumLayout.LIST };
    const TableRadioRow2 = tmp7(7230).TableRadioRow;
    intl3 = tmp7(1113).intl;
    items1[1] = closure_7(TableRadioRow2, obj4);
    items2 = [closure_8(TableRadioGroup, obj2), , , ];
    const obj5 = { style: tmp.description, variant: "body-sm/medium", color: "text-muted", children: intl4.string(channel(1113).t.MbX5Hu) };
    const Text = tmp7(5383).Text;
    intl4 = tmp7(1113).intl;
    items2[1] = closure_7(Text, obj5);
    const obj6 = { title: intl5.string(channel(1113).t.e4oMl4) };
    const TableRowGroupTitle = tmp7(7229).TableRowGroupTitle;
    intl5 = tmp7(1113).intl;
    items2[2] = closure_7(TableRowGroupTitle, obj6);
    const obj7 = { style: tmp.thumbnailImagePortrait, source: tmp10Result };
    const tmp11 = FastImageDefault;
    const tmp9 = closure_7;
    if (tmp3 === channel(4651).ForumLayout.GRID) {
      tmp10Result = tmp10(19033);
    } else {
      tmp10Result = tmp10(19034);
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
