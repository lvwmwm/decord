// Module ID: 9595
// Function ID: 9596
// Name: usePreviewableMediaText
// Dependencies: [19, 9590, 1115, 2]
// Exports: usePreviewableMediaText

// Module 9595 (usePreviewableMediaText)
import intl21 from "intl" /* 1115 */;
import usePreviewableMedia from "usePreviewableMedia" /* 9590 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/in_app_notifications/native/hooks/usePreviewableMediaText.tsx");

export const usePreviewableMediaText = function usePreviewableMediaText(previewableMedia) {
  previewableMedia = previewableMedia.previewableMedia;
  const author = previewableMedia.author;
  const items = [author, previewableMedia];
  return react.useMemo(() => {
    let intl10;
    let intl11;
    let intl12;
    let intl13;
    let intl14;
    let intl15;
    let intl16;
    let intl17;
    let intl18;
    let intl19;
    let intl20;
    let intl5;
    let intl6;
    let intl7;
    let intl8;
    let intl9;
    let obj12;
    let obj15;
    let obj18;
    let obj21;
    let obj24;
    let obj3;
    let obj6;
    let obj9;
    if (0 === previewableMedia.length) {
      return { text: null, secondaryText: null };
    } else if (1 === previewableMedia.length) {
      const first = arr[0];
      const type = first.type;
      if (usePreviewableMedia.PreviewableMediaTypes.IMAGE === type) {
        let obj4;
        if (null != author) {
          const obj2 = { text: intl20.formatToPlainString(intl21.t.pTiyNB, obj3), secondaryText: null };
          intl20 = intl21.intl;
          obj4 = obj2;
          obj3 = { username: tmp90.nick };
        } else {
          obj4 = { text: intl19.string(intl21.t.tCcq5p), secondaryText: null };
          intl19 = intl21.intl;
        }
        return obj4;
      } else if (usePreviewableMedia.PreviewableMediaTypes.VIDEO === type) {
        let obj7;
        if (null != author) {
          const obj5 = { text: intl18.formatToPlainString(intl21.t.zqhHWH, obj6), secondaryText: null };
          intl18 = intl21.intl;
          obj7 = obj5;
          obj6 = { username: tmp80.nick };
        } else {
          obj7 = { text: intl17.string(intl21.t.KxO2Yl), secondaryText: null };
          intl17 = intl21.intl;
        }
        return obj7;
      } else if (usePreviewableMedia.PreviewableMediaTypes.AUDIO === type) {
        let obj10;
        if (null != author) {
          const obj8 = { text: intl16.formatToPlainString(intl21.t.HADQ6n, obj9), secondaryText: first.media.filename };
          intl16 = intl21.intl;
          obj10 = obj8;
          obj9 = { username: tmp70.nick };
        } else {
          obj10 = { text: intl15.string(intl21.t.FWqQt5), secondaryText: first.media.filename };
          intl15 = intl21.intl;
        }
        return obj10;
      } else if (usePreviewableMedia.PreviewableMediaTypes.FILE === type) {
        let obj13;
        if (null != author) {
          const obj11 = { text: intl14.formatToPlainString(intl21.t["ifW/ef"], obj12), secondaryText: first.media.filename };
          intl14 = intl21.intl;
          obj13 = obj11;
          obj12 = { username: tmp60.nick };
        } else {
          obj13 = { text: intl13.string(intl21.t.mX8M6i), secondaryText: first.media.filename };
          intl13 = intl21.intl;
        }
        return obj13;
      } else if (usePreviewableMedia.PreviewableMediaTypes.STICKER === type) {
        let obj16;
        if (null != author) {
          const obj14 = { text: intl12.formatToPlainString(intl21.t["3iI/fs"], obj15), secondaryText: null };
          intl12 = intl21.intl;
          obj16 = obj14;
          obj15 = { username: tmp50.nick };
        } else {
          obj16 = { text: intl11.string(intl21.t.dyquw8), secondaryText: null };
          intl11 = intl21.intl;
        }
        return obj16;
      } else if (usePreviewableMedia.PreviewableMediaTypes.VOICE_MESSAGE === type) {
        let obj19;
        if (null != author) {
          const obj17 = { text: intl10.formatToPlainString(intl21.t.Y7wlOj, obj18), secondaryText: null };
          intl10 = intl21.intl;
          obj19 = obj17;
          obj18 = { username: tmp40.nick };
        } else {
          obj19 = { text: intl9.string(intl21.t.slFYgi), secondaryText: null };
          intl9 = intl21.intl;
        }
        return obj19;
      } else if (usePreviewableMedia.PreviewableMediaTypes.GIF === type) {
        let obj22;
        if (null != author) {
          const obj20 = { text: intl8.formatToPlainString(intl21.t.mikhon, obj21), secondaryText: null };
          intl8 = intl21.intl;
          obj22 = obj20;
          obj21 = { username: tmp30.nick };
        } else {
          obj22 = { text: intl7.string(intl21.t.p0oZmy), secondaryText: null };
          intl7 = intl21.intl;
        }
        return obj22;
      } else {
        let obj25;
        if (null != author) {
          const obj23 = { text: intl6.formatToPlainString(intl21.t["7FJeVi"], obj24), secondaryText: null };
          intl6 = intl21.intl;
          obj25 = obj23;
          obj24 = { username: tmp115.nick };
        } else {
          obj25 = { text: intl5.string(intl21.t.sDqZHL), secondaryText: null };
          intl5 = intl21.intl;
        }
        return obj25;
      }
    } else {
      let formatResult;
      let formatResult1;
      const everyResult = previewableMedia.every((type) => type.type === previewableMedia(author[1]).PreviewableMediaTypes.FILE);
      if (null != author) {
        const intl2 = intl21.intl;
        const obj26 = { count: previewableMedia.length, username: author.nick };
        formatResult = intl2.format(intl21.t["319zWs"], obj26);
      } else {
        const intl = intl21.intl;
        const obj = { count: previewableMedia.length };
        formatResult = intl.formatToPlainString(intl21.t.y0gZht, obj);
      }
      if (null != author) {
        const intl4 = intl21.intl;
        const obj27 = { count: previewableMedia.length, username: author.nick };
        formatResult1 = intl4.format(intl21.t["1OSGGk"], obj27);
      } else {
        const intl3 = intl21.intl;
        const obj28 = { count: previewableMedia.length };
        formatResult1 = intl3.formatToPlainString(intl21.t["8/qgDd"], obj28);
      }
      if (everyResult) {
        formatResult1 = formatResult;
      }
      return { text: formatResult1, secondaryText: null };
    }
  }, items);
};
