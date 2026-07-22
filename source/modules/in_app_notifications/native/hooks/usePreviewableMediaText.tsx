// Module ID: 10264
// Function ID: 79296
// Name: usePreviewableMediaText
// Dependencies: []
// Exports: usePreviewableMediaText

// Module 10264 (usePreviewableMediaText)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/in_app_notifications/native/hooks/usePreviewableMediaText.tsx");

export const usePreviewableMediaText = function usePreviewableMediaText(previewableMedia) {
  previewableMedia = previewableMedia.previewableMedia;
  const arg1 = previewableMedia;
  const author = previewableMedia.author;
  const dependencyMap = author;
  const items = [author, previewableMedia];
  return React.useMemo(() => {
    if (0 === previewableMedia.length) {
      return { borderRadius: "o", alignItems: "o" };
    } else if (1 === previewableMedia.length) {
      const first = previewableMedia[0];
      const type = first.type;
      if (previewableMedia(author[1]).PreviewableMediaTypes.IMAGE === type) {
        if (null != author) {
          let obj = {};
          const intl20 = previewableMedia(author[2]).intl;
          obj = { username: author.nick };
          obj.text = intl20.formatToPlainString(previewableMedia(author[2]).t.pTiyNB, obj);
          obj.secondaryText = null;
          let obj1 = obj;
        } else {
          obj1 = {};
          const intl19 = previewableMedia(author[2]).intl;
          obj1.text = intl19.string(previewableMedia(author[2]).t.tCcq5p);
          obj1.secondaryText = null;
        }
        return obj1;
      } else if (previewableMedia(author[1]).PreviewableMediaTypes.VIDEO === type) {
        if (null != author) {
          const obj2 = {};
          const intl18 = previewableMedia(author[2]).intl;
          const obj3 = { username: author.nick };
          obj2.text = intl18.formatToPlainString(previewableMedia(author[2]).t.zqhHWH, obj3);
          obj2.secondaryText = null;
          let obj4 = obj2;
        } else {
          obj4 = {};
          const intl17 = previewableMedia(author[2]).intl;
          obj4.text = intl17.string(previewableMedia(author[2]).t.KxO2Yl);
          obj4.secondaryText = null;
        }
        return obj4;
      } else if (previewableMedia(author[1]).PreviewableMediaTypes.AUDIO === type) {
        if (null != author) {
          const obj5 = {};
          const intl16 = previewableMedia(author[2]).intl;
          const obj6 = { username: author.nick };
          obj5.text = intl16.formatToPlainString(previewableMedia(author[2]).t.HADQ6n, obj6);
          obj5.secondaryText = first.media.filename;
          let obj7 = obj5;
        } else {
          obj7 = {};
          const intl15 = previewableMedia(author[2]).intl;
          obj7.text = intl15.string(previewableMedia(author[2]).t.FWqQt5);
          obj7.secondaryText = first.media.filename;
        }
        return obj7;
      } else if (previewableMedia(author[1]).PreviewableMediaTypes.FILE === type) {
        if (null != author) {
          const obj8 = {};
          const intl14 = previewableMedia(author[2]).intl;
          const obj9 = { username: author.nick };
          obj8.text = intl14.formatToPlainString(previewableMedia(author[2]).t.ifW/ef, obj9);
          obj8.secondaryText = first.media.filename;
          let obj10 = obj8;
        } else {
          obj10 = {};
          const intl13 = previewableMedia(author[2]).intl;
          obj10.text = intl13.string(previewableMedia(author[2]).t.mX8M6i);
          obj10.secondaryText = first.media.filename;
        }
        return obj10;
      } else if (previewableMedia(author[1]).PreviewableMediaTypes.STICKER === type) {
        if (null != author) {
          const obj11 = {};
          const intl12 = previewableMedia(author[2]).intl;
          const obj12 = { username: author.nick };
          obj11.text = intl12.formatToPlainString(previewableMedia(author[2]).t.3iI/fs, obj12);
          obj11.secondaryText = null;
          let obj13 = obj11;
        } else {
          obj13 = {};
          const intl11 = previewableMedia(author[2]).intl;
          obj13.text = intl11.string(previewableMedia(author[2]).t.dyquw8);
          obj13.secondaryText = null;
        }
        return obj13;
      } else if (previewableMedia(author[1]).PreviewableMediaTypes.VOICE_MESSAGE === type) {
        if (null != author) {
          const obj14 = {};
          const intl10 = previewableMedia(author[2]).intl;
          const obj15 = { username: author.nick };
          obj14.text = intl10.formatToPlainString(previewableMedia(author[2]).t.Y7wlOj, obj15);
          obj14.secondaryText = null;
          let obj16 = obj14;
        } else {
          obj16 = {};
          const intl9 = previewableMedia(author[2]).intl;
          obj16.text = intl9.string(previewableMedia(author[2]).t.slFYgi);
          obj16.secondaryText = null;
        }
        return obj16;
      } else if (previewableMedia(author[1]).PreviewableMediaTypes.GIF === type) {
        if (null != author) {
          const obj17 = {};
          const intl8 = previewableMedia(author[2]).intl;
          const obj18 = { username: author.nick };
          obj17.text = intl8.formatToPlainString(previewableMedia(author[2]).t.mikhon, obj18);
          obj17.secondaryText = null;
          let obj19 = obj17;
        } else {
          obj19 = {};
          const intl7 = previewableMedia(author[2]).intl;
          obj19.text = intl7.string(previewableMedia(author[2]).t.p0oZmy);
          obj19.secondaryText = null;
        }
        return obj19;
      } else {
        if (null != author) {
          const obj20 = {};
          const intl6 = previewableMedia(author[2]).intl;
          const obj21 = { username: author.nick };
          obj20.text = intl6.formatToPlainString(previewableMedia(author[2]).t.7FJeVi, obj21);
          obj20.secondaryText = null;
          let obj22 = obj20;
        } else {
          obj22 = {};
          const intl5 = previewableMedia(author[2]).intl;
          obj22.text = intl5.string(previewableMedia(author[2]).t.sDqZHL);
          obj22.secondaryText = null;
        }
        return obj22;
      }
    } else {
      if (null != author) {
        const intl2 = previewableMedia(author[2]).intl;
        const obj23 = { count: length, username: author.nick };
        let formatResult = intl2.format(previewableMedia(author[2]).t.319zWs, obj23);
      } else {
        const intl = previewableMedia(author[2]).intl;
        obj = { count: length };
        formatResult = intl.formatToPlainString(previewableMedia(author[2]).t.y0gZht, obj);
      }
      if (null != author) {
        const intl4 = previewableMedia(author[2]).intl;
        const obj24 = { count: length, username: author.nick };
        let formatResult1 = intl4.format(previewableMedia(author[2]).t.1OSGGk, obj24);
      } else {
        const intl3 = previewableMedia(author[2]).intl;
        const obj25 = { count: length };
        formatResult1 = intl3.formatToPlainString(previewableMedia(author[2]).t.8/qgDd, obj25);
      }
      const obj26 = {};
      if (everyResult) {
        formatResult1 = formatResult;
      }
      obj26.text = formatResult1;
      obj26.secondaryText = null;
      return obj26;
    }
  }, items);
};
