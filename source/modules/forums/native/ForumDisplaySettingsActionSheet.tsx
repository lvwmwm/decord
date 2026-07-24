// Module ID: 11825
// Function ID: 91808
// Name: ForumDisplaySettingsActionSheet
// Dependencies: [57, 31, 1348, 11155, 33, 1212, 1357, 1358, 1359, 566, 4559, 7008, 5498, 5186, 8434, 5189, 4541, 689, 7654, 7653, 2]
// Exports: default

// Module 11825 (ForumDisplaySettingsActionSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import set from "set";
import jsxProd from "jsxProd";
import set from "_isNativeReflectConstruct";

let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ useForumChannelStoreApi: closure_6, useForumChannelStore: closure_7 } = set);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let result = set.fileFinishedImporting("modules/forums/native/ForumDisplaySettingsActionSheet.tsx");

export default function ForumDisplaySettingsActionSheet(channelId) {
  let closure_10;
  let closure_7;
  let closure_8;
  let closure_9;
  channelId = channelId.channelId;
  let obj = channelId(sortOrder[9]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId));
  const tmp = callback2(channelId);
  sortOrder = tmp.sortOrder;
  const layoutType = tmp.layoutType;
  const tagSetting = tmp.tagSetting;
  const React = callback();
  const tmp2 = layoutType(React.useState(sortOrder), 2);
  _isNativeReflectConstruct = tmp2[0];
  callback = tmp2[1];
  [closure_7, closure_8] = layoutType(React.useState(layoutType), 2);
  const tmp3 = layoutType(React.useState(layoutType), 2);
  [closure_9, closure_10] = layoutType(React.useState(tagSetting), 2);
  const ref = React.useRef(null);
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  let obj2 = channelId(sortOrder[10]);
  const unmountEffect = obj2.useUnmountEffect(() => {
    if (null != stateFromStores) {
      if (sortOrder !== _isNativeReflectConstruct) {
        let obj = channelId(sortOrder[11]);
        obj = {};
        ({ guild_id: obj2.guildId, id: obj2.channelId } = stateFromStores);
        obj.sortOrder = _isNativeReflectConstruct;
        const result = obj.trackForumSortOrderUpdated(obj);
      }
      if (layoutType !== closure_7) {
        obj = {};
        ({ guild_id: obj4.guildId, id: obj4.channelId } = stateFromStores);
        obj.forumLayout = closure_7;
        const result1 = channelId(sortOrder[11]).trackForumLayoutUpdated(obj);
        const obj3 = channelId(sortOrder[11]);
      }
      const state = store.getState();
      state.setLayoutType(channelId, closure_7);
      const state1 = store.getState();
      state1.setSortOrder(channelId, _isNativeReflectConstruct);
      const state2 = store.getState();
      state2.setTagSetting(channelId, closure_9);
    }
  });
  [][0] = stateFromStores;
  if (null == stateFromStores) {
    return null;
  } else {
    obj = { scrollable: true };
    obj = {};
    const intl = channelId(sortOrder[5]).intl;
    obj.title = intl.string(channelId(sortOrder[5]).t.xyYt8A);
    const obj1 = { onPress: tmp9 };
    const intl2 = channelId(sortOrder[5]).intl;
    obj1.label = intl2.string(channelId(sortOrder[5]).t.yBZMsQ);
    obj.leading = callback3(channelId(sortOrder[14]).ActionSheetHeaderPressableText, obj1);
    obj.header = callback3(channelId(sortOrder[13]).BottomSheetTitleHeader, obj);
    obj2 = {};
    let obj3 = { direction: "vertical", spacing: stateFromStores(sortOrder[17]).space.PX_16 };
    const obj4 = {
      groupRef: ref,
      hasIcons: false,
      defaultValue: sortOrder,
      onChange(arg0) {
          callback(arg0);
        }
    };
    const intl3 = channelId(sortOrder[5]).intl;
    obj4.title = intl3.string(channelId(sortOrder[5]).t.f8wNDl);
    const intl4 = channelId(sortOrder[5]).intl;
    obj4.accessibilityLabel = intl4.string(channelId(sortOrder[5]).t.f8wNDl);
    const obj5 = {};
    const intl5 = channelId(sortOrder[5]).intl;
    obj5.label = intl5.string(channelId(sortOrder[5]).t.jOPmcI);
    obj5.value = channelId(sortOrder[6]).ThreadSortOrder.LATEST_ACTIVITY;
    const items1 = [obj5, ];
    const obj6 = {};
    const intl6 = channelId(sortOrder[5]).intl;
    obj6.label = intl6.string(channelId(sortOrder[5]).t.UIltXd);
    obj6.value = channelId(sortOrder[6]).ThreadSortOrder.CREATION_DATE;
    items1[1] = obj6;
    obj4.children = items1.map((label) => {
      const value = label.value;
      return outer1_8(channelId(sortOrder[19]).TableRadioRow, { label: label.label, value }, value);
    });
    const items2 = [callback3(channelId(sortOrder[18]).TableRadioGroup, obj4), , ];
    let tmp16 = null;
    if (stateFromStores.isForumChannel()) {
      const obj7 = {
        groupRef: ref1,
        hasIcons: false,
        defaultValue: layoutType,
        onChange(arg0) {
              callback2(arg0);
            }
      };
      const intl7 = channelId(sortOrder[5]).intl;
      obj7.title = intl7.string(channelId(sortOrder[5]).t.mFMDSq);
      const intl8 = channelId(sortOrder[5]).intl;
      obj7.accessibilityLabel = intl8.string(channelId(sortOrder[5]).t.h850Ss);
      const obj8 = {};
      const intl9 = channelId(sortOrder[5]).intl;
      obj8.label = intl9.string(channelId(sortOrder[5]).t["NJFr+g"]);
      obj8.value = channelId(sortOrder[7]).ForumLayout.LIST;
      const items3 = [obj8, ];
      const obj9 = {};
      const intl10 = channelId(sortOrder[5]).intl;
      obj9.label = intl10.string(channelId(sortOrder[5]).t.wKeggb);
      obj9.value = channelId(sortOrder[7]).ForumLayout.GRID;
      items3[1] = obj9;
      obj7.children = items3.map((label) => {
        const value = label.value;
        return outer1_8(channelId(sortOrder[19]).TableRadioRow, { label: label.label, value }, value);
      });
      tmp16 = callback3(channelId(sortOrder[18]).TableRadioGroup, obj7);
    }
    items2[1] = tmp16;
    let tmp20 = null;
    if (tmp10) {
      const obj10 = {
        groupRef: ref2,
        hasIcons: false,
        defaultValue: tagSetting,
        onChange(arg0) {
              callback3(arg0);
            }
      };
      const intl11 = channelId(sortOrder[5]).intl;
      obj10.title = intl11.string(channelId(sortOrder[5]).t.Paxaug);
      const intl12 = channelId(sortOrder[5]).intl;
      obj10.accessibilityLabel = intl12.string(channelId(sortOrder[5]).t.f8wNDl);
      const obj11 = {};
      const intl13 = channelId(sortOrder[5]).intl;
      obj11.label = intl13.string(channelId(sortOrder[5]).t.rQ0ctQ);
      obj11.value = channelId(sortOrder[8]).ThreadSearchTagSetting.MATCH_SOME;
      const items4 = [obj11, ];
      const obj12 = {};
      const intl14 = channelId(sortOrder[5]).intl;
      obj12.label = intl14.string(channelId(sortOrder[5]).t.FCXUu0);
      obj12.value = channelId(sortOrder[8]).ThreadSearchTagSetting.MATCH_ALL;
      items4[1] = obj12;
      obj10.children = items4.map((label) => {
        const value = label.value;
        return outer1_8(channelId(sortOrder[19]).TableRadioRow, { label: label.label, value }, value);
      });
      tmp20 = callback3(channelId(sortOrder[18]).TableRadioGroup, obj10);
    }
    items2[2] = tmp20;
    obj3.children = items2;
    obj2.children = closure_9(channelId(sortOrder[16]).Stack, obj3);
    obj.children = callback3(channelId(sortOrder[15]).BottomSheetScrollView, obj2);
    return callback3(channelId(sortOrder[12]).ActionSheet, obj);
  }
  const tmp4 = layoutType(React.useState(tagSetting), 2);
};
