// Module ID: 12279
// Function ID: 12280
// Name: ForumDisplaySettingsActionSheet
// Dependencies: [32, 19, 2045, 11483, 21, 1115, 2054, 2055, 2056, 504, 5298, 7186, 6618, 6570, 8996, 6045, 5279, 576, 5997, 6000, 2]
// Exports: default

// Module 12279 (ForumDisplaySettingsActionSheet)
import tracking_Tracking from "tracking/Tracking" /* 7186 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import ForumChannelStore from "ForumChannelStore" /* 11483 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let react = react_mod;
({ useForumChannelStoreApi: metroRequire, useForumChannelStore: metroImportDefault } = ForumChannelStore);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let result = size.fileFinishedImporting("modules/forums/native/ForumDisplaySettingsActionSheet.tsx");

export default function ForumDisplaySettingsActionSheet(channelId) {
  let ActionSheetHeaderPressableText;
  let BottomSheetScrollView;
  let BottomSheetTitleHeader;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let c10;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  let closure_4;
  let forumLayout;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj16;
  let obj4;
  let obj5;
  channelId = channelId.channelId;
  let sortOrder;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  let obj = channelId(sortOrder[9]);
  const items = [c5];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const tmp3 = c7(channelId);
  sortOrder = tmp3.sortOrder;
  const layoutType = tmp3.layoutType;
  const tagSetting = tmp3.tagSetting;
  react = c6();
  [c5, c6] = layoutType(react.useState(sortOrder), 2);
  layoutType(react.useState(sortOrder), 2);
  [c7, c8] = layoutType(react.useState(layoutType), 2);
  const tmp5 = layoutType(react.useState(layoutType), 2);
  [c9, c10] = layoutType(react.useState(tagSetting), 2);
  const tmp6 = layoutType(react.useState(tagSetting), 2);
  const ref = react.useRef(null);
  const ref1 = react.useRef(null);
  const ref2 = react.useRef(null);
  let obj3 = channelId(sortOrder[10]);
  const unmountEffect = obj3.useUnmountEffect(() => {
    if (null != stateFromStores) {
      if (sortOrder !== sortOrder) {
        const obj5 = { guildId: null, channelId: null, sortOrder };
        ({ guild_id: obj2.guildId, id: obj2.channelId } = stateFromStores);
        const obj = tracking_Tracking;
        const result = obj.trackForumSortOrderUpdated(obj5);
      }
      if (layoutType !== forumLayout) {
        const obj6 = { guildId: null, channelId: null, forumLayout };
        ({ guild_id: obj4.guildId, id: obj4.channelId } = stateFromStores);
        const obj3 = tracking_Tracking;
        const result1 = obj3.trackForumLayoutUpdated(obj6);
      }
      const state = closure_4.getState();
      state.setLayoutType(channelId, forumLayout);
      const state1 = closure_4.getState();
      state1.setSortOrder(channelId, sortOrder);
      const state2 = closure_4.getState();
      state2.setTagSetting(channelId, c9);
    }
  });
  [][0] = stateFromStores;
  if (null == stateFromStores) {
    return null;
  } else {
    const tmp12 = null != stateFromStores.availableTags && stateFromStores.availableTags.length > 0;
    const obj2 = { scrollable: true, header: c8(BottomSheetTitleHeader, obj4), children: c8(BottomSheetScrollView, obj16) };
    const ActionSheet = tmp(tmp2[12]).ActionSheet;
    obj4 = { title: intl.string(tmp(tmp2[5]).t.xyYt8A), leading: c8(ActionSheetHeaderPressableText, obj5) };
    BottomSheetTitleHeader = tmp(tmp2[13]).BottomSheetTitleHeader;
    intl = tmp(tmp2[5]).intl;
    obj5 = { onPress: tmp11, label: intl2.string(tmp(tmp2[5]).t.yBZMsQ) };
    ActionSheetHeaderPressableText = tmp(tmp2[14]).ActionSheetHeaderPressableText;
    intl2 = tmp(tmp2[5]).intl;
    BottomSheetScrollView = tmp(tmp2[15]).BottomSheetScrollView;
    let obj6 = { direction: "vertical", spacing: stateFromStores(tmp2[17]).space.PX_16, children: items2 };
    const Stack = tmp(tmp2[16]).Stack;
    const obj7 = {
      groupRef: ref,
      hasIcons: false,
      defaultValue: sortOrder,
      onChange(arg0) {
          _undefined(arg0);
        },
      title: intl3.string(channelId(sortOrder[5]).t.f8wNDl),
      accessibilityLabel: intl4.string(channelId(sortOrder[5]).t.f8wNDl),
      children: items1.map((label) => {
          const value = label.value;
          return _undefined2(channelId(sortOrder[19]).TableRadioRow, { label: label.label, value }, value);
        })
    };
    const TableRadioGroup = tmp(tmp2[18]).TableRadioGroup;
    intl3 = tmp(tmp2[5]).intl;
    intl4 = tmp(tmp2[5]).intl;
    const obj8 = { label: intl5.string(channelId(sortOrder[5]).t.jOPmcI), value: channelId(sortOrder[6]).ThreadSortOrder.LATEST_ACTIVITY };
    intl5 = tmp(tmp2[5]).intl;
    items1 = [obj8, ];
    const obj9 = { label: intl6.string(channelId(sortOrder[5]).t.UIltXd), value: channelId(sortOrder[6]).ThreadSortOrder.CREATION_DATE };
    intl6 = tmp(tmp2[5]).intl;
    items1[1] = obj9;
    items2 = [c8(TableRadioGroup, obj7), , ];
    let tmp13Result = null;
    const tmp14 = c9;
    if (stateFromStores.isForumChannel()) {
      tmp13Result = null;
      if (!stateFromStores.isGameInvitesChannel()) {
        const obj10 = {
          groupRef: ref1,
          hasIcons: false,
          defaultValue: layoutType,
          onChange(arg0) {
                  _undefined2(arg0);
                },
          title: intl7.string(channelId(sortOrder[5]).t.mFMDSq),
          accessibilityLabel: intl8.string(channelId(sortOrder[5]).t.h850Ss),
          children: items3.map((label) => {
                  const value = label.value;
                  return _undefined2(channelId(sortOrder[19]).TableRadioRow, { label: label.label, value }, value);
                })
        };
        const TableRadioGroup2 = tmp(tmp2[18]).TableRadioGroup;
        intl7 = tmp(tmp2[5]).intl;
        intl8 = tmp(tmp2[5]).intl;
        const obj11 = { label: intl9.string(channelId(sortOrder[5]).t["NJFr+g"]), value: channelId(sortOrder[7]).ForumLayout.LIST };
        intl9 = tmp(tmp2[5]).intl;
        items3 = [obj11, ];
        const obj12 = { label: intl10.string(channelId(sortOrder[5]).t.wKeggb), value: channelId(sortOrder[7]).ForumLayout.GRID };
        intl10 = tmp(tmp2[5]).intl;
        items3[1] = obj12;
        tmp13Result = tmp13(TableRadioGroup2, obj10);
      }
    }
    items2[1] = tmp13Result;
    let tmp13Result2 = null;
    if (tmp12) {
      const obj13 = {
        groupRef: ref2,
        hasIcons: false,
        defaultValue: tagSetting,
        onChange(arg0) {
              _undefined3(arg0);
            },
        title: intl11.string(channelId(sortOrder[5]).t.Paxaug),
        accessibilityLabel: intl12.string(channelId(sortOrder[5]).t.f8wNDl),
        children: items4.map((label) => {
              const value = label.value;
              return _undefined2(channelId(sortOrder[19]).TableRadioRow, { label: label.label, value }, value);
            })
      };
      const TableRadioGroup3 = tmp(tmp2[18]).TableRadioGroup;
      intl11 = tmp(tmp2[5]).intl;
      intl12 = tmp(tmp2[5]).intl;
      const obj14 = { label: intl13.string(channelId(sortOrder[5]).t.rQ0ctQ), value: channelId(sortOrder[8]).ThreadSearchTagSetting.MATCH_SOME };
      intl13 = tmp(tmp2[5]).intl;
      items4 = [obj14, ];
      const obj15 = { label: intl14.string(channelId(sortOrder[5]).t.FCXUu0), value: channelId(sortOrder[8]).ThreadSearchTagSetting.MATCH_ALL };
      intl14 = tmp(tmp2[5]).intl;
      items4[1] = obj15;
      tmp13Result2 = tmp13(TableRadioGroup3, obj13);
    }
    items2[2] = tmp13Result2;
    obj16 = { children: tmp14(Stack, obj6) };
    return c8(ActionSheet, obj2);
  }
};
