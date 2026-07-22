// Module ID: 8471
// Function ID: 67586
// Name: GuildStageChannelSelection
// Dependencies: []
// Exports: default

// Module 8471 (GuildStageChannelSelection)
importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
let closure_7 = arg1(dependencyMap[4]).createStyles({ channelText: { duration: "alrededor de 1 semana", dampingRatio: "alrededor de {{count}} semanas" } });
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
    return callback(channel(handleSelectChannel[12]).Text, { children }, arg1);
  }
  let obj = arg1(handleSelectChannel[5]);
  const channelsUserCanStartStageIn = obj.useChannelsUserCanStartStageIn(channel.guild);
  importAll = channelsUserCanStartStageIn;
  const tmp3 = importDefault(handleSelectChannel[6])(channel);
  obj = { "Null": "useCallback", "Null": "marginBottom", alignItems: "createStyles", style: callback().channelText };
  const intl = arg1(handleSelectChannel[11]).intl;
  const format = intl.format;
  const t = arg1(handleSelectChannel[11]).t;
  if (tmp2) {
    obj = {
      stageName: tmp3,
      stageHook: renderChannelHook,
      changeHook(children) {
          return callback(channel(handleSelectChannel[12]).Text, { onPress: handleSelectChannel, children }, arg1);
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
