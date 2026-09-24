// Module ID: 10091
// Function ID: 10092
// Name: GuildStageChannelSelection
// Dependencies: [19, 4441, 1376, 21, 4790, 9806, 4943, 1879, 4757, 9568, 1984, 1119, 4786, 2]
// Exports: default

// Module 10091 (GuildStageChannelSelection)
import util from "util" /* 1119 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1879 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import Text_Text from "Text/Text" /* 4786 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4441 */;
import UserStore from "UserStore" /* 1376 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4790);
let closure_7 = createStyles.createStyles({ channelText: { marginTop: 8, flexDirection: "row" } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/modals/GuildStageChannelSelection.tsx");

export default function GuildStageChannelSelection(channel) {
  channel = channel.channel;
  const onChangeChannel = channel.onChangeChannel;
  function handleSelectChannel() {
    const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
    const mapped = channelsUserCanStartStageIn.map((id) => {
      const obj = { value: id.id, label: channel(handleSelectChannel[6]).computeChannelName(id, closure_1_5, closure_1_4, true) };
      return obj;
    });
    const obj3 = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
    const obj2 = ActionSheetActionCreatorsDefault;
    const intl = util.intl;
    obj3.title = intl.string(util.t["bxw/f7"]);
    obj3.items = mapped;
    obj3.onItemSelect = function onItemSelect(arg0) {
      closure_0 = arg0;
      const found = channelsUserCanStartStageIn.find((id) => id.id === closure_0);
      if (null != found) {
        closure_1_1(found);
      }
      onChangeChannel(handleSelectChannel[8]).hideActionSheet();
    };
    let id;
    if (channel != null) {
      id = channel.id;
    }
    obj3.selectedItem = id;
    obj2.openLazy(asyncRequireImpl(9568, dependencyMap.paths), "SelectUpdatesChannel", obj3);
  }
  function renderChannelHook(children, arg1) {
    return jsx(channel(handleSelectChannel[12]).Text, { variant: "text-sm/bold", color: "mobile-text-heading-primary", children }, arg1);
  }
  const tmp = closure_7();
  const channelsUserCanStartStageIn = channel(handleSelectChannel[5]).useChannelsUserCanStartStageIn(channel.guild);
  const tmp3 = onChangeChannel(handleSelectChannel[6])(channel);
  let obj2 = { style: tmp.channelText, variant: "text-xs/medium", color: "text-default", children: null };
  let intl = channel(handleSelectChannel[11]).intl;
  const format = intl.format;
  const t = channel(handleSelectChannel[11]).t;
  if (tmp2) {
    let obj3 = {
      stageName: tmp3,
      stageHook: renderChannelHook,
      changeHook(children, arg1) {
          return jsx(Text_Text.Text, { onPress: handleSelectChannel, variant: "text-xs/medium", color: "text-link", children }, arg1);
        }
    };
    obj2.children = format(t.AkzLcV, obj3);
    let tmp5 = obj2;
  } else {
    const obj4 = { stageName: tmp3, stageHook: renderChannelHook };
    obj2.children = format(t["S+9O7g"], obj4);
    tmp5 = obj2;
  }
  return jsx(channel(handleSelectChannel[12]).Text, tmp5);
};
