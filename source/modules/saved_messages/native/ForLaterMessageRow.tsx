// Module ID: 9924
// Function ID: 76764
// Name: ForLaterMessageRow
// Dependencies: []
// Exports: ForLaterMessageRow

// Module 9924 (ForLaterMessageRow)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/saved_messages/native/ForLaterMessageRow.tsx");

export const ForLaterMessageRow = function ForLaterMessageRow(lineClamp) {
  let maxHeight;
  let message;
  const arg1 = lineClamp.lineClamp;
  ({ message, maxHeight } = lineClamp);
  let obj = arg1(dependencyMap[3]);
  obj = { seeMoreLabelColor: importDefault(dependencyMap[4]).colors.TEXT_DEFAULT };
  const importDefault = obj.createNativeStyleProperties(obj)(importDefault(dependencyMap[2])());
  const RenderEmbeds = arg1(dependencyMap[5]).RenderEmbeds;
  const setting = RenderEmbeds.getSetting();
  const dependencyMap = setting;
  const InlineEmbedMedia = arg1(dependencyMap[5]).InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.getSetting();
  const React = setting1;
  const InlineAttachmentMedia = arg1(dependencyMap[5]).InlineAttachmentMedia;
  const setting2 = InlineAttachmentMedia.getSetting();
  const jsx = setting2;
  const items = [setting, setting1, setting2];
  const memo = React.useMemo(() => {
    let tmp = lib(setting[6]);
    tmp = new tmp();
    tmp.setOptions({ renderEmbeds: setting, inlineEmbedMedia: setting1, inlineAttachmentMedia: setting2 });
    return tmp;
  }, items);
  obj = {
    modifyRow(arg0) {
      if (null != lineClamp) {
        const obj = { numberOfLines: lineClamp, expandable: lineClamp(setting[8]).isIOS() };
        const obj2 = lineClamp(setting[8]);
        let str = "";
        if (obj3.isIOS()) {
          str = "...";
        }
        obj.seeMoreLabel = str;
        obj.seeMoreLabelColor = lib.seeMoreLabelColor;
        arg0.truncation = obj;
        const obj3 = lineClamp(setting[8]);
      }
    },
    message,
    rowGenerator: memo,
    maxHeight
  };
  return jsx(importDefault(dependencyMap[7]), obj);
};
