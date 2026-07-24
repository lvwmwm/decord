// Module ID: 14120
// Function ID: 108516
// Name: MobileQuestPreviewControlBar
// Dependencies: [5, 57, 31, 27, 6941, 482, 33, 4130, 689, 10493, 566, 9480, 5496, 1212, 5490, 14121, 14124, 7533, 13562, 12265, 4126, 2]

// Module 14120 (MobileQuestPreviewControlBar)
import sum from "sum";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AppRoutes } from "sum";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_9;
const require = arg1;
class MobileQuestPreviewControlBar {
  constructor(arg0) {
    questId = global.questId;
    setQuestId = global.setQuestId;
    refreshQuest = global.refreshQuest;
    tmp = c11();
    tmp2 = c4(useStateFromStores.useState(false), 2);
    first = tmp2[0];
    c3 = tmp2[1];
    obj = require("_createForOfIteratorHelperLoose");
    questsWithPreviewAccess = obj.useQuestsWithPreviewAccess();
    c4 = questsWithPreviewAccess;
    obj2 = require("initialize");
    items = [];
    items[0] = useMemo;
    items1 = [];
    items1[0] = questId;
    stateFromStores = obj2.useStateFromStores(items, () => {
      let fetchQuestPreviewError = null;
      if (null != questId) {
        fetchQuestPreviewError = callback3.getFetchQuestPreviewError(questId);
      }
      return fetchQuestPreviewError;
    }, items1);
    obj3 = require("initialize");
    items2 = [];
    items2[0] = useMemo;
    items3 = [];
    items3[0] = questId;
    stateFromStores1 = obj3.useStateFromStores(items2, () => {
      let result = null != questId;
      if (result) {
        result = callback3.isFetchingQuestPreview(questId);
      }
      return result;
    }, items3);
    items4 = [, ];
    items4[0] = questsWithPreviewAccess;
    items4[1] = questId;
    items5 = [];
    items5[0] = setQuestId;
    fn = (arg0) => {
      if (null != setQuestId) {
        setQuestId(arg0);
      }
    };
    memo = useStateFromStores.useMemo(() => {
      const mapped = questsWithPreviewAccess.map((config) => {
        const obj = {};
        config = config.config;
        let questName;
        if (null != config) {
          const messages = config.messages;
          if (null != messages) {
            questName = messages.questName;
          }
        }
        if (null == questName) {
          questName = config.id;
        }
        obj.label = "" + questName + " (" + config.id + ")";
        obj.value = config.id;
        return obj;
      });
      if (!tmp) {
        let obj = { label: questId, value: questId };
        mapped.unshift(obj);
      }
      return mapped;
    }, items4);
    // CreateGeneratorClosureLongIndex (0x67)
    callback = useStateFromStores.useCallback(fn, items5);
    items6 = [, ];
    items6[0] = questId;
    items6[1] = refreshQuest;
    callback1 = useStateFromStores.useCallback(c3(fn), items6);
    useStateFromStores = callback1;
    // CreateGeneratorClosureLongIndex (0x67)
    items7 = [, ];
    items7[0] = questId;
    items7[1] = refreshQuest;
    callback2 = useStateFromStores.useCallback(c3(items6), items7);
    View = callback2;
    // CreateGeneratorClosureLongIndex (0x67)
    items8 = [, ];
    items8[0] = questId;
    items8[1] = refreshQuest;
    callback3 = useStateFromStores.useCallback(c3(items7), items8);
    useMemo = callback3;
    items9 = [, , , ];
    items9[0] = questId;
    items9[1] = callback1;
    items9[2] = callback2;
    items9[3] = callback3;
    obj = { style: tmp.container };
    callback4 = useStateFromStores.useCallback(() => {
      let obj = questId(refreshQuest[12]);
      obj = { key: "quest-preview-menu", options: null, hasIcons: false };
      obj = {};
      const intl = questId(refreshQuest[13]).intl;
      obj.label = intl.string(questId(refreshQuest[13]).t.jQEfRT);
      obj.onPress = callback1;
      const items = [obj, , , ];
      const obj1 = {};
      const intl2 = questId(refreshQuest[13]).intl;
      obj1.label = intl2.string(questId(refreshQuest[13]).t.taqkwK);
      obj1.onPress = callback2;
      items[1] = obj1;
      const obj2 = {};
      const intl3 = questId(refreshQuest[13]).intl;
      obj2.label = intl3.string(questId(refreshQuest[13]).t.cKSLr4);
      obj2.onPress = callback3;
      items[2] = obj2;
      const obj3 = {};
      const intl4 = questId(refreshQuest[13]).intl;
      obj3.label = intl4.string(questId(refreshQuest[13]).t.rNGQfD);
      obj3.onPress = function onPress() {
        if (null != outer1_0) {
          questId(refreshQuest[14]).copy(outer2_8.QUEST_PREVIEW_TOOL_2(outer1_0));
          const obj = questId(refreshQuest[14]);
        }
      };
      items[3] = obj3;
      obj.options = items;
      const result = obj.showSimpleActionSheet(obj);
    }, items9);
    tmp13 = jsxs;
    tmp14 = View;
    items10 = [, , ];
    items10[0] = jsx(require("QuestThemePicker"), {});
    obj1 = { style: tmp.questInputContainer };
    obj2 = { style: tmp.searchField };
    tmp15 = jsxs;
    tmp16 = View;
    tmp17 = jsx;
    tmp18 = View;
    tmp19 = jsx;
    obj3 = { options: memo, value: questId, onChange: callback };
    intl = require("getSystemLocale").intl;
    obj3.placeholder = intl.string(require("getSystemLocale").t.Zw8jxn);
    obj3.allowCustomValue = true;
    tmp20 = stateFromStores1;
    if (!stateFromStores1) {
      tmp20 = first;
    }
    obj3.isDisabled = tmp20;
    obj2.children = tmp19(require("MobileSearchableSelect").MobileSearchableSelect, obj3);
    items11 = [, ];
    items11[0] = tmp17(tmp18, obj2);
    obj4 = { style: tmp.iconsColumn };
    tmp21 = jsxs;
    tmp22 = View;
    tmp23 = jsx;
    obj5 = {};
    obj5.icon = jsx(require("RefreshIcon").RefreshIcon, {});
    intl2 = require("getSystemLocale").intl;
    obj5.accessibilityLabel = intl2.string(require("getSystemLocale").t.wzzjk9);
    obj5.onPress = refreshQuest;
    tmp24 = stateFromStores1;
    if (!stateFromStores1) {
      tmp25 = null;
      tmp24 = null == questId;
    }
    obj5.disabled = tmp24;
    obj5.loading = stateFromStores1;
    obj5.size = "sm";
    obj5.variant = "secondary";
    items12 = [, ];
    items12[0] = tmp23(require("IconButton").IconButton, obj5);
    tmp27Result = null != questId;
    if (tmp27Result) {
      tmp28 = questId;
      tmp29 = refreshQuest;
      tmp27 = jsx;
      obj6 = { icon: null, size: "sm", variant: "secondary" };
      tmp30 = jsx;
      num = 19;
      obj6.icon = jsx(require("MoreVerticalIcon").MoreVerticalIcon, {});
      intl3 = require("getSystemLocale").intl;
      obj6.accessibilityLabel = intl3.string(require("getSystemLocale").t["+1H47t"]);
      if (!stateFromStores1) {
        stateFromStores1 = first;
      }
      obj6.disabled = stateFromStores1;
      obj6.onPress = callback4;
      tmp27Result = tmp27(require("IconButton").IconButton, obj6);
    }
    items12[1] = tmp27Result;
    obj4.children = items12;
    items11[1] = tmp21(tmp22, obj4);
    obj1.children = items11;
    items10[1] = tmp15(tmp16, obj1);
    tmp31 = null != stateFromStores;
    if (tmp31) {
      tmp32 = jsx;
      tmp33 = questId;
      tmp34 = refreshQuest;
      num2 = 20;
      obj7 = { variant: "text-sm/medium", color: "text-feedback-critical" };
      obj7.style = tmp.errorText;
      obj7.children = stateFromStores.message;
      tmp31 = jsx(require("Text").Text, obj7);
    }
    items10[2] = tmp31;
    obj.children = items10;
    return tmp13(tmp14, obj);
  }
}
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { overflow: "visible", zIndex: 1 } };
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", gap: require("_createForOfIteratorHelperLoose").space.PX_8, zIndex: 2, overflow: "visible" };
_createForOfIteratorHelperLoose.questInputContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.searchField = { flex: 1, zIndex: 3, overflow: "visible" };
_createForOfIteratorHelperLoose.iconsColumn = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_8, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj1 = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_8, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.errorText = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_4, zIndex: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_4, zIndex: 1 };
let result = require("result").fileFinishedImporting("modules/user_settings/quests/native/MobileQuestPreviewControlBar.tsx");

export default MobileQuestPreviewControlBar;
export { MobileQuestPreviewControlBar };
