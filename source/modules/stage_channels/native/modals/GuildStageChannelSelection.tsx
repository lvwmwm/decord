// Module ID: 8470
// Function ID: 67574
// Name: GuildStageChannelSelection
// Dependencies: []
// Exports: default

// Module 8470 (GuildStageChannelSelection)
importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
let closure_7 = arg1(dependencyMap[4]).createStyles({ channelText: { "Null": 24541952, "Null": 24541952 } });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/stage_channels/native/modals/GuildStageChannelSelection.tsx");

export default function GuildStageChannelSelection(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const importDefault = channel.onChangeChannel;
  let importAll;
  function handleSelectChannel() {
    let obj = channelsUserCanStartStageIn(handleSelectChannel[7]);
    const result = obj.dismissGlobalKeyboard();
    const mapped = channelsUserCanStartStageIn.map((id) => {
      const obj = { value: id.id, label: callback(closure_3[6]).computeChannelName(id, closure_5, closure_4, true) };
      return obj;
    });
    obj = {};
    const obj2 = onChangeChannel(handleSelectChannel[8]);
    const intl = channel(handleSelectChannel[11]).intl;
    obj.title = intl.string(channel(handleSelectChannel[11]).t.bxw/f7);
    obj.items = mapped;
    obj.onItemSelect = function onItemSelect(arg0) {
      const found = closure_2.find((id) => id.id === id);
      if (null != found) {
        callback2(found);
      }
      callback2(closure_3[8]).hideActionSheet();
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
    const obj = { hasMaxConnections: -956300828, isBoostOnlySubscription: 1358955199, children };
    return callback(channel(handleSelectChannel[12]).Text, obj, arg1);
  }
  let obj = arg1(handleSelectChannel[5]);
  const channelsUserCanStartStageIn = obj.useChannelsUserCanStartStageIn(channel.guild);
  importAll = channelsUserCanStartStageIn;
  const tmp3 = importDefault(handleSelectChannel[6])(channel);
  obj = { delete: "a", dispatch: "isArray", raw: "textAlign", style: callback().channelText };
  const intl = arg1(handleSelectChannel[11]).intl;
  const format = intl.format;
  const t = arg1(handleSelectChannel[11]).t;
  if (tmp2) {
    obj = {
      stageName: tmp3,
      stageHook: renderChannelHook,
      changeHook(children) {
          const obj = { -1398216365: "<string:3661824003>", 1403823626: "<string:3674211254>", -1397974005: "<string:3707765686>", onPress: handleSelectChannel, children };
          return callback(channel(handleSelectChannel[12]).Text, obj, arg1);
        }
    };
    obj.children = format(t.AkzLcV, obj);
    let tmp5 = obj;
  } else {
    const obj1 = { stageName: tmp3, stageHook: renderChannelHook };
    obj.children = format(t.S+9O7g, obj1);
    tmp5 = obj;
  }
  return jsx(arg1(handleSelectChannel[12]).Text, tmp5);
};
