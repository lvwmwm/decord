// Module ID: 8522
// Function ID: 67853
// Name: GuildStageChannelSelection
// Dependencies: [31, 3767, 1849, 33, 4130, 8428, 4320, 1820, 4098, 8426, 1934, 1212, 4126, 2]
// Exports: default

// Module 8522 (GuildStageChannelSelection)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ channelText: { marginTop: 8, flexDirection: "row" } });
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/stage_channels/native/modals/GuildStageChannelSelection.tsx");

export default function GuildStageChannelSelection(channel) {
  channel = channel.channel;
  const onChangeChannel = channel.onChangeChannel;
  let channelsUserCanStartStageIn;
  function handleSelectChannel() {
    let obj = channelsUserCanStartStageIn(handleSelectChannel[7]);
    const result = obj.dismissGlobalKeyboard();
    const mapped = channelsUserCanStartStageIn.map((id) => {
      const obj = { value: id.id, label: channel(handleSelectChannel[6]).computeChannelName(id, outer2_5, outer2_4, true) };
      return obj;
    });
    obj = {};
    const obj2 = onChangeChannel(handleSelectChannel[8]);
    const intl = channel(handleSelectChannel[11]).intl;
    obj.title = intl.string(channel(handleSelectChannel[11]).t["bxw/f7"]);
    obj.items = mapped;
    obj.onItemSelect = function onItemSelect(arg0) {
      let closure_0 = arg0;
      const found = outer1_2.find((id) => id.id === closure_0);
      if (null != found) {
        outer1_1(found);
      }
      onChangeChannel(handleSelectChannel[8]).hideActionSheet();
    };
    let id;
    if (null != channel) {
      id = channel.id;
    }
    let tmp6;
    if (null != id) {
      tmp6 = id;
    }
    obj.selectedItem = tmp6;
    obj.hasIcons = false;
    obj2.openLazy(channel(handleSelectChannel[10])(handleSelectChannel[9], handleSelectChannel.paths), "SelectUpdatesChannel", obj);
  }
  function renderChannelHook(children) {
    const obj = { variant: "text-sm/bold", color: "mobile-text-heading-primary", children };
    return outer1_6(channel(handleSelectChannel[12]).Text, obj, arg1);
  }
  let obj = channel(handleSelectChannel[5]);
  channelsUserCanStartStageIn = obj.useChannelsUserCanStartStageIn(channel.guild);
  const tmp3 = onChangeChannel(handleSelectChannel[6])(channel);
  obj = { style: callback().channelText, variant: "text-xs/medium", color: "text-default" };
  let intl = channel(handleSelectChannel[11]).intl;
  const format = intl.format;
  const t = channel(handleSelectChannel[11]).t;
  if (tmp2) {
    obj = {
      stageName: tmp3,
      stageHook: renderChannelHook,
      changeHook(children) {
          const obj = { onPress: handleSelectChannel, variant: "text-xs/medium", color: "text-link", children };
          return outer1_6(channel(handleSelectChannel[12]).Text, obj, arg1);
        }
    };
    obj.children = format(t.AkzLcV, obj);
    let tmp5 = obj;
  } else {
    const obj1 = { stageName: tmp3, stageHook: renderChannelHook };
    obj.children = format(t["S+9O7g"], obj1);
    tmp5 = obj;
  }
  return jsx(channel(handleSelectChannel[12]).Text, tmp5);
};
