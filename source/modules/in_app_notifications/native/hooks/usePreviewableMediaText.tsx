// Module ID: 10257
// Function ID: 79253
// Name: usePreviewableMediaText
// Dependencies: []
// Exports: usePreviewableMediaText

// Module 10257 (usePreviewableMediaText)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/in_app_notifications/native/hooks/usePreviewableMediaText.tsx");

export const usePreviewableMediaText = function usePreviewableMediaText(previewableMedia) {
  previewableMedia = previewableMedia.previewableMedia;
  const arg1 = previewableMedia;
  const items = [previewableMedia];
  return React.useMemo(() => {
    if (0 === previewableMedia.length) {
      return { <string:425838640>: false, <string:1526880594>: false };
    } else if (1 === previewableMedia.length) {
      const first = previewableMedia[0];
      const type = first.type;
      if (previewableMedia(closure_1[1]).PreviewableMediaTypes.IMAGE === type) {
        let obj = {};
        const intl8 = previewableMedia(closure_1[2]).intl;
        obj.text = intl8.string(previewableMedia(closure_1[2]).t.tCcq5p);
        obj.secondaryText = null;
        return obj;
      } else if (previewableMedia(closure_1[1]).PreviewableMediaTypes.VIDEO === type) {
        obj = {};
        const intl7 = previewableMedia(closure_1[2]).intl;
        obj.text = intl7.string(previewableMedia(closure_1[2]).t.KxO2Yl);
        obj.secondaryText = null;
        return obj;
      } else if (previewableMedia(closure_1[1]).PreviewableMediaTypes.AUDIO === type) {
        const obj1 = {};
        const intl6 = previewableMedia(closure_1[2]).intl;
        obj1.text = intl6.string(previewableMedia(closure_1[2]).t.FWqQt5);
        obj1.secondaryText = first.media.filename;
        return obj1;
      } else if (previewableMedia(closure_1[1]).PreviewableMediaTypes.FILE === type) {
        const obj2 = {};
        const intl5 = previewableMedia(closure_1[2]).intl;
        obj2.text = intl5.string(previewableMedia(closure_1[2]).t.mX8M6i);
        obj2.secondaryText = first.media.filename;
        return obj2;
      } else if (previewableMedia(closure_1[1]).PreviewableMediaTypes.STICKER === type) {
        const obj3 = {};
        const intl4 = previewableMedia(closure_1[2]).intl;
        obj3.text = intl4.string(previewableMedia(closure_1[2]).t.dyquw8);
        obj3.secondaryText = null;
        return obj3;
      } else if (previewableMedia(closure_1[1]).PreviewableMediaTypes.VOICE_MESSAGE === type) {
        const obj4 = {};
        const intl3 = previewableMedia(closure_1[2]).intl;
        obj4.text = intl3.string(previewableMedia(closure_1[2]).t.slFYgi);
        obj4.secondaryText = null;
        return obj4;
      } else if (previewableMedia(closure_1[1]).PreviewableMediaTypes.GIF === type) {
        const obj5 = {};
        const intl2 = previewableMedia(closure_1[2]).intl;
        obj5.text = intl2.string(previewableMedia(closure_1[2]).t.p0oZmy);
        obj5.secondaryText = null;
        return obj5;
      } else {
        const obj6 = {};
        const intl = previewableMedia(closure_1[2]).intl;
        obj6.text = intl.string(previewableMedia(closure_1[2]).t.sDqZHL);
        obj6.secondaryText = null;
        return obj6;
      }
    } else {
      const obj7 = {};
      const intl9 = previewableMedia(closure_1[2]).intl;
      const formatToPlainString = intl9.formatToPlainString;
      const t = previewableMedia(closure_1[2]).t;
      if (everyResult) {
        const obj8 = { count: length };
        let formatToPlainStringResult = formatToPlainString(t.y0gZht, obj8);
      } else {
        obj = { count: length };
        formatToPlainStringResult = formatToPlainString(t.8/qgDd, obj);
      }
      obj7.text = formatToPlainStringResult;
      obj7.secondaryText = null;
      return obj7;
    }
  }, items);
};
